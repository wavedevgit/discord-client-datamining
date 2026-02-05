package com.google.android.gms.internal.play_billing;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c6 extends q1 implements w2 {
    private static final c6 zzb;
    private int zzd;
    private int zze;

    static {
        c6 c6Var = new c6();
        zzb = c6Var;
        q1.u(c6.class, c6Var);
    }

    private c6() {
    }

    public static c6 C() {
        return zzb;
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
                    return new a6(null);
                }
                return new c6();
            }
            return q1.r(zzb, "\u0001\u0001\u0000\u0001\u0001\u0001\u0001\u0000\u0000\u0000\u0001᠌\u0000", new Object[]{"zzd", "zze", b6.f14194a});
        }
        return (byte) 1;
    }
}
