package com.google.android.gms.internal.play_billing;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class v5 extends q1 implements w2 {
    private static final v5 zzb;
    private int zzd;
    private int zze = 0;
    private Object zzf;
    private l5 zzg;
    private o5 zzh;

    static {
        v5 v5Var = new v5();
        zzb = v5Var;
        q1.u(v5.class, v5Var);
    }

    private v5() {
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static /* synthetic */ void B(v5 v5Var, c6 c6Var) {
        v5Var.zzf = c6Var;
        v5Var.zze = 4;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static /* synthetic */ void C(v5 v5Var, l5 l5Var) {
        l5Var.getClass();
        v5Var.zzg = l5Var;
        v5Var.zzd |= 1;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static /* synthetic */ void D(v5 v5Var, r4 r4Var) {
        v5Var.zzf = r4Var;
        v5Var.zze = 2;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static /* synthetic */ void E(v5 v5Var, v4 v4Var) {
        v5Var.zzf = v4Var;
        v5Var.zze = 3;
    }

    public static u5 F() {
        return (u5) zzb.g();
    }

    /* JADX INFO: Access modifiers changed from: protected */
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
                    return new u5(null);
                }
                return new v5();
            }
            return q1.r(zzb, "\u0001\u0006\u0001\u0001\u0001\u0006\u0006\u0000\u0000\u0000\u0001ဉ\u0000\u0002<\u0000\u0003<\u0000\u0004<\u0000\u0005<\u0000\u0006ဉ\u0001", new Object[]{"zzf", "zze", "zzd", "zzg", r4.class, v4.class, c6.class, i5.class, "zzh"});
        }
        return (byte) 1;
    }
}
