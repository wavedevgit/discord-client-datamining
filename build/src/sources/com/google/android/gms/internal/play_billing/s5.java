package com.google.android.gms.internal.play_billing;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class s5 extends q1 implements w2 {
    private static final s5 zzb;
    private int zzd;
    private int zze;

    static {
        s5 s5Var = new s5();
        zzb = s5Var;
        q1.u(s5.class, s5Var);
    }

    private s5() {
    }

    public static /* synthetic */ void B(s5 s5Var, int i10) {
        s5Var.zze = i10 - 1;
        s5Var.zzd |= 1;
    }

    public static q5 C() {
        return (q5) zzb.g();
    }

    @Override // com.google.android.gms.internal.play_billing.q1
    public final Object y(int i10, Object obj, Object obj2) {
        int i11 = i10 - 1;
        if (i11 != 0) {
            if (i11 != 2) {
                if (i11 != 3) {
                    if (i11 != 4) {
                        if (i11 != 5) {
                            return null;
                        }
                        return zzb;
                    }
                    return new q5(null);
                }
                return new s5();
            }
            return q1.r(zzb, "\u0001\u0001\u0000\u0001\u0001\u0001\u0001\u0000\u0000\u0000\u0001᠌\u0000", new Object[]{"zzd", "zze", r5.f14369a});
        }
        return (byte) 1;
    }
}
