package com.google.android.gms.internal.play_billing;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b5 extends q1 implements w2 {
    private static final b5 zzb;
    private int zzd;
    private int zze;
    private int zzg;
    private String zzf = "";
    private String zzh = "";

    static {
        b5 b5Var = new b5();
        zzb = b5Var;
        q1.u(b5.class, b5Var);
    }

    private b5() {
    }

    public static /* synthetic */ void B(b5 b5Var, int i10) {
        b5Var.zzd |= 1;
        b5Var.zze = i10;
    }

    public static /* synthetic */ void C(b5 b5Var, String str) {
        str.getClass();
        b5Var.zzd |= 2;
        b5Var.zzf = str;
    }

    public static /* synthetic */ void D(b5 b5Var, String str) {
        b5Var.zzd |= 8;
        b5Var.zzh = str;
    }

    public static /* synthetic */ void E(b5 b5Var, int i10) {
        b5Var.zzg = i10 - 1;
        b5Var.zzd |= 4;
    }

    public static x4 F() {
        return (x4) zzb.g();
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
                    return new x4(null);
                }
                return new b5();
            }
            return q1.r(zzb, "\u0001\u0004\u0000\u0001\u0001\u0005\u0004\u0000\u0000\u0000\u0001င\u0000\u0002ဈ\u0001\u0004᠌\u0002\u0005ဈ\u0003", new Object[]{"zzd", "zze", "zzf", "zzg", z4.f14433a, "zzh"});
        }
        return (byte) 1;
    }
}
