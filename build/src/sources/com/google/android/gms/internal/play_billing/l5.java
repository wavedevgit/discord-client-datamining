package com.google.android.gms.internal.play_billing;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class l5 extends q1 implements w2 {
    private static final l5 zzb;
    private int zzd;
    private String zze = "";
    private String zzf = "";
    private int zzg;

    static {
        l5 l5Var = new l5();
        zzb = l5Var;
        q1.u(l5.class, l5Var);
    }

    private l5() {
    }

    public static /* synthetic */ void B(l5 l5Var, String str) {
        str.getClass();
        l5Var.zzd |= 1;
        l5Var.zze = str;
    }

    public static /* synthetic */ void C(l5 l5Var, String str) {
        str.getClass();
        l5Var.zzd |= 2;
        l5Var.zzf = str;
    }

    public static /* synthetic */ void D(l5 l5Var, int i10) {
        l5Var.zzd |= 4;
        l5Var.zzg = i10;
    }

    public static k5 E() {
        return (k5) zzb.g();
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
                    return new k5(null);
                }
                return new l5();
            }
            return q1.r(zzb, "\u0001\u0003\u0000\u0001\u0001\u0003\u0003\u0000\u0000\u0000\u0001ဈ\u0000\u0002ဈ\u0001\u0003င\u0002", new Object[]{"zzd", "zze", "zzf", "zzg"});
        }
        return (byte) 1;
    }
}
