import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import {
  Users, Plus, Trash2, Loader2, ChevronDown, ChevronUp, Check, X, Calendar
} from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogClose
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

const arm = (...codes: number[]) => String.fromCharCode(...codes);

const MONTHS = [
  arm(0x0540, 0x0578, 0x0582, 0x0576, 0x057E, 0x0561, 0x0580),
  arm(0x0553, 0x0565, 0x057F, 0x0580, 0x057E, 0x0561, 0x0580),
  arm(0x0544, 0x0561, 0x0580, 0x057F),
  arm(0x0531, 0x057A, 0x0580, 0x056B, 0x056C),
  arm(0x0544, 0x0561, 0x0575, 0x056B, 0x057D),
  arm(0x0540, 0x0578, 0x0582, 0x0576, 0x056B, 0x057D),
  arm(0x0540, 0x0578, 0x0582, 0x056C, 0x056B, 0x057D),
  arm(0x0555, 0x0563, 0x0578, 0x057D, 0x057F, 0x0578, 0x057D),
  arm(0x054D, 0x0565, 0x057A, 0x057F, 0x0565, 0x0574, 0x0562, 0x0565, 0x0580),
  arm(0x0540, 0x0578, 0x056F, 0x057F, 0x0565, 0x0574, 0x0562, 0x0565, 0x0580),
  arm(0x0546, 0x0578, 0x0575, 0x0565, 0x0574, 0x0562, 0x0565, 0x0580),
  arm(0x0534, 0x0565, 0x056F, 0x057F, 0x0565, 0x0574, 0x0562, 0x0565, 0x0580),
];

const ui = {
  kids: arm(0x0535, 0x0580, 0x0565, 0x056D, 0x0561, 0x0576, 0x0565, 0x0580),
  addKid: arm(0x0531, 0x057E, 0x0565, 0x056C, 0x0561, 0x0581, 0x0576, 0x0565, 0x056C, 0x20, 0x0565, 0x0580, 0x0565, 0x056D, 0x0561),
  fullName: arm(0x0531, 0x0576, 0x0578, 0x0582, 0x0576, 0x20, 0x0561, 0x0566, 0x0563, 0x0561, 0x0576, 0x0578, 0x0582, 0x0576),
  birthDate: arm(0x053E, 0x0576, 0x0576, 0x0564, 0x0575, 0x0561, 0x0576, 0x20, 0x0569, 0x057E, 0x0561, 0x056F, 0x0561, 0x0576),
  parentName: arm(0x053E, 0x0576, 0x0578, 0x0563, 0x056B, 0x20, 0x0561, 0x0576, 0x0578, 0x0582, 0x0576),
  parentPhone: arm(0x053E, 0x0576, 0x0578, 0x0563, 0x056B, 0x20, 0x0570, 0x0565, 0x057C, 0x0561, 0x056D, 0x0578, 0x057D),
  group: arm(0x053D, 0x0578, 0x0582, 0x0574, 0x0562),
  notes: arm(0x0546, 0x0578, 0x057F, 0x0561, 0x0563, 0x0580, 0x0578, 0x0582, 0x0569, 0x0575, 0x0578, 0x0582, 0x0576),
  payments: arm(0x054E, 0x0579, 0x0561, 0x0580, 0x0578, 0x0582, 0x0574, 0x0576, 0x0565, 0x0580),
  save: arm(0x054A, 0x0561, 0x0570, 0x057A, 0x0561, 0x0576, 0x0565, 0x056C),
  cancel: arm(0x0549, 0x0565, 0x0572, 0x0561, 0x0580, 0x056F, 0x0565, 0x056C),
  noKids: arm(0x0535, 0x0580, 0x0565, 0x056D, 0x0561, 0x0576, 0x0565, 0x0580, 0x20, 0x0564, 0x0565, 0x057C, 0x20, 0x0579, 0x056F, 0x0561, 0x0576, 0x20, 0x0561, 0x057E, 0x0565, 0x056C, 0x0561, 0x0581, 0x057E, 0x0561, 0x056E),
  amount: arm(0x0533, 0x0578, 0x0582, 0x0574, 0x0561, 0x0580),
  paid: arm(0x054E, 0x0579, 0x0561, 0x0580, 0x057E, 0x0561, 0x056E),
  notPaid: arm(0x0549, 0x057E, 0x0579, 0x0561, 0x0580),
  edit: arm(0x053D, 0x0574, 0x0562, 0x0561, 0x0563, 0x0580, 0x0565, 0x056C),
};

interface KidForm {
  full_name: string;
  birth_date: string;
  parent_name: string;
  parent_phone: string;
  group_name: string;
  notes: string;
}

const emptyForm: KidForm = {
  full_name: "",
  birth_date: "",
  parent_name: "",
  parent_phone: "",
  group_name: "",
  notes: "",
};

export default function KidsSection() {
  const queryClient = useQueryClient();
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState<KidForm>(emptyForm);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [expandedKid, setExpandedKid] = useState<string | null>(null);
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  const { data: kids, isLoading } = useQuery({
    queryKey: ["kids"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("kids")
        .select("*")
        .order("full_name");
      if (error) throw error;
      return data;
    },
  });

  const { data: payments } = useQuery({
    queryKey: ["kid-payments", selectedYear],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("kid_payments")
        .select("*")
        .eq("year", selectedYear);
      if (error) throw error;
      return data;
    },
  });

  const saveMutation = useMutation({
    mutationFn: async (data: KidForm & { id?: string }) => {
      if (data.id) {
        const { id, ...rest } = data;
        const { error } = await supabase.from("kids").update(rest).eq("id", id);
        if (error) throw error;
      } else {
        const { error } = await supabase.from("kids").insert(data);
        if (error) throw error;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["kids"] });
      toast.success(arm(0x054A, 0x0561, 0x0570, 0x057A, 0x0561, 0x0576, 0x057E, 0x0561, 0x056E, 0x20, 0x0567) + "!");
      resetForm();
    },
    onError: () => toast.error(arm(0x054D, 0x056D, 0x0561, 0x056C)),
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from("kids").delete().eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["kids"] });
      toast.success(arm(0x054B, 0x0576, 0x057B, 0x057E, 0x0561, 0x056E, 0x20, 0x0567) + "!");
    },
  });

  const paymentMutation = useMutation({
    mutationFn: async ({ kidId, month, isPaid, amount }: { kidId: string; month: number; isPaid: boolean; amount?: number }) => {
      if (isPaid) {
        const { error } = await supabase.from("kid_payments").upsert(
          { kid_id: kidId, month, year: selectedYear, is_paid: true, paid_at: new Date().toISOString(), amount: amount ?? null },
          { onConflict: "kid_id,month,year" }
        );
        if (error) throw error;
      } else {
        const { error } = await supabase
          .from("kid_payments")
          .delete()
          .eq("kid_id", kidId)
          .eq("month", month)
          .eq("year", selectedYear);
        if (error) throw error;
      }
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["kid-payments"] }),
  });

  const resetForm = () => {
    setForm(emptyForm);
    setEditingId(null);
    setShowForm(false);
  };

  const startEdit = (kid: typeof kids extends (infer T)[] ? T : never) => {
    setForm({
      full_name: kid.full_name,
      birth_date: kid.birth_date ?? "",
      parent_name: kid.parent_name ?? "",
      parent_phone: kid.parent_phone ?? "",
      group_name: kid.group_name ?? "",
      notes: kid.notes ?? "",
    });
    setEditingId(kid.id);
    setShowForm(true);
  };

  const getPayment = (kidId: string, month: number) => {
    return payments?.find((p) => p.kid_id === kidId && p.month === month);
  };

  return (
    <div className="space-y-6">
      {/* Add / Edit form */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              {ui.kids}
            </span>
            {!showForm && (
              <Button onClick={() => setShowForm(true)} className="gap-2 rounded-full" size="sm">
                <Plus className="h-4 w-4" /> {ui.addKid}
              </Button>
            )}
          </CardTitle>
        </CardHeader>
        <CardContent>
          {showForm && (
            <div className="space-y-4 border rounded-xl p-4 mb-6 bg-muted/30">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-1 block">{ui.fullName} *</label>
                  <Input value={form.full_name} onChange={(e) => setForm({ ...form, full_name: e.target.value })} />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">{ui.birthDate}</label>
                  <Input type="date" value={form.birth_date} onChange={(e) => setForm({ ...form, birth_date: e.target.value })} />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">{ui.parentName}</label>
                  <Input value={form.parent_name} onChange={(e) => setForm({ ...form, parent_name: e.target.value })} />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">{ui.parentPhone}</label>
                  <Input value={form.parent_phone} onChange={(e) => setForm({ ...form, parent_phone: e.target.value })} />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">{ui.group}</label>
                  <Input value={form.group_name} onChange={(e) => setForm({ ...form, group_name: e.target.value })} />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium mb-1 block">{ui.notes}</label>
                <Textarea rows={2} value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} />
              </div>
              <div className="flex gap-2">
                <Button
                  onClick={() => saveMutation.mutate(editingId ? { ...form, id: editingId } : form)}
                  disabled={!form.full_name || saveMutation.isPending}
                  className="gap-2 rounded-full"
                >
                  {saveMutation.isPending ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
                  {ui.save}
                </Button>
                <Button variant="ghost" onClick={resetForm}>{ui.cancel}</Button>
              </div>
            </div>
          )}

          {isLoading ? (
            <div className="flex justify-center py-8">
              <Loader2 className="h-6 w-6 animate-spin text-primary" />
            </div>
          ) : !kids || kids.length === 0 ? (
            <p className="text-center text-muted-foreground py-8">{ui.noKids}</p>
          ) : (
            <div className="space-y-3">
              {kids.map((kid) => (
                <div key={kid.id} className="border rounded-xl overflow-hidden">
                  {/* Kid row */}
                  <div
                    className="flex items-center justify-between p-4 cursor-pointer hover:bg-muted/50 transition-colors"
                    onClick={() => setExpandedKid(expandedKid === kid.id ? null : kid.id)}
                  >
                    <div className="flex-1">
                      <div className="font-medium">{kid.full_name}</div>
                      <div className="text-sm text-muted-foreground flex gap-3 flex-wrap">
                        {kid.group_name && <span>{kid.group_name}</span>}
                        {kid.parent_name && <span>{kid.parent_name}</span>}
                        {kid.parent_phone && <span>{kid.parent_phone}</span>}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={(e) => { e.stopPropagation(); startEdit(kid); }}
                      >
                        {ui.edit}
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-destructive"
                        onClick={(e) => { e.stopPropagation(); deleteMutation.mutate(kid.id); }}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                      {expandedKid === kid.id ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                    </div>
                  </div>

                  {/* Payment grid */}
                  {expandedKid === kid.id && (
                    <div className="border-t p-4 bg-muted/20">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="text-sm font-medium flex items-center gap-2">
                          <Calendar className="h-4 w-4" /> {ui.payments} — {selectedYear}
                        </h4>
                        <div className="flex gap-1">
                          <Button variant="outline" size="sm" onClick={() => setSelectedYear((y) => y - 1)}>
                            ←
                          </Button>
                          <Button variant="outline" size="sm" onClick={() => setSelectedYear((y) => y + 1)}>
                            →
                          </Button>
                        </div>
                      </div>
                      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
                        {MONTHS.map((name, i) => {
                          const payment = getPayment(kid.id, i + 1);
                          const isPaid = payment?.is_paid ?? false;
                          return (
                            <button
                              key={i}
                              onClick={() => paymentMutation.mutate({ kidId: kid.id, month: i + 1, isPaid: !isPaid })}
                              className={`flex flex-col items-center gap-1 p-2 rounded-lg border text-xs transition-colors ${
                                isPaid
                                  ? "bg-green-100 border-green-300 text-green-800 dark:bg-green-900/30 dark:border-green-700 dark:text-green-300"
                                  : "bg-background border-border text-muted-foreground hover:border-primary"
                              }`}
                            >
                              <span className="font-medium">{name}</span>
                              {isPaid ? (
                                <Check className="h-3.5 w-3.5" />
                              ) : (
                                <X className="h-3.5 w-3.5 opacity-40" />
                              )}
                              {payment?.paid_at && (
                                <span className="text-[10px] opacity-70">
                                  {new Date(payment.paid_at).toLocaleDateString("hy-AM")}
                                </span>
                              )}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
