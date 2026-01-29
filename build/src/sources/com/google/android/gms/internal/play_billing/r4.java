package com.google.android.gms.internal.play_billing;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class r4 extends q1 implements w2 {
    private static final r4 zzb;
    private int zzd;
    private int zze = 0;
    private Object zzf;
    private int zzg;
    private b5 zzh;

    static {
        r4 r4Var = new r4();
        zzb = r4Var;
        q1.u(r4.class, r4Var);
    }

    private r4() {
    }

    public static r4 B(byte[] bArr, e1 e1Var) {
        return (r4) q1.m(zzb, bArr, e1Var);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static /* synthetic */ void C(r4 r4Var, b5 b5Var) {
        b5Var.getClass();
        r4Var.zzh = b5Var;
        r4Var.zzd |= 2;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static /* synthetic */ void D(r4 r4Var, s5 s5Var) {
        s5Var.getClass();
        r4Var.zzf = s5Var;
        r4Var.zze = 4;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static /* synthetic */ void E(r4 r4Var, int i10) {
        r4Var.zzg = i10 - 1;
        r4Var.zzd |= 1;
    }

    public static q4 F() {
        return (q4) zzb.g();
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
                    return new q4(null);
                }
                return new r4();
            }
            return q1.r(zzb, "\u0001\u0003\u0001\u0001\u0001\u0004\u0003\u0000\u0000\u0000\u0001᠌\u0000\u0002ဉ\u0001\u0004<\u0000", new Object[]{"zzf", "zze", "zzd", "zzg", s4.f15381a, "zzh", s5.class});
        }
        return (byte) 1;
    }
}
