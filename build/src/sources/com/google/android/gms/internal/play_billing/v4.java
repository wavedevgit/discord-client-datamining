package com.google.android.gms.internal.play_billing;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class v4 extends q1 implements w2 {
    private static final v4 zzb;
    private int zzd;
    private int zze = 0;
    private Object zzf;
    private int zzg;

    static {
        v4 v4Var = new v4();
        zzb = v4Var;
        q1.u(v4.class, v4Var);
    }

    private v4() {
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static /* synthetic */ void B(v4 v4Var, s5 s5Var) {
        s5Var.getClass();
        v4Var.zzf = s5Var;
        v4Var.zze = 2;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static /* synthetic */ void C(v4 v4Var, int i10) {
        v4Var.zzg = i10 - 1;
        v4Var.zzd |= 1;
    }

    public static u4 D() {
        return (u4) zzb.g();
    }

    @Override // com.google.android.gms.internal.play_billing.q1
    protected final Object y(int i10, Object obj, Object obj2) {
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
                    return new u4(null);
                }
                return new v4();
            }
            return q1.r(zzb, "\u0001\u0003\u0001\u0001\u0001\u0003\u0003\u0000\u0000\u0000\u0001᠌\u0000\u0002<\u0000\u0003<\u0000", new Object[]{"zzf", "zze", "zzd", "zzg", s4.f14372a, s5.class, f6.class});
        }
        return (byte) 1;
    }
}
