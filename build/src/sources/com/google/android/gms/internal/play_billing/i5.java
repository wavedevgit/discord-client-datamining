package com.google.android.gms.internal.play_billing;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class i5 extends q1 implements w2 {
    private static final w1 zzb = new c5();
    private static final i5 zzd;
    private int zze;
    private int zzg;
    private b5 zzj;
    private boolean zzk;
    private boolean zzl;
    private String zzf = "";
    private v1 zzh = q1.o();
    private x1 zzi = q1.p();

    static {
        i5 i5Var = new i5();
        zzd = i5Var;
        q1.u(i5.class, i5Var);
    }

    private i5() {
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
                        return zzd;
                    }
                    return new g5(null);
                }
                return new i5();
            }
            return q1.r(zzd, "\u0001\u0007\u0000\u0001\u0001\u0007\u0007\u0000\u0002\u0000\u0001ဈ\u0000\u0002᠌\u0001\u0003ࠬ\u0004\u001b\u0005ဉ\u0002\u0006ဇ\u0003\u0007ဇ\u0004", new Object[]{"zze", "zzf", "zzg", h5.f15255a, "zzh", e5.f15226a, "zzi", y5.class, "zzj", "zzk", "zzl"});
        }
        return (byte) 1;
    }
}
