package com.google.android.gms.internal.play_billing;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class i2 extends k2 {
    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ i2(h2 h2Var) {
        super(null);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.gms.internal.play_billing.k2
    public final void a(Object obj, long j10) {
        ((x1) g4.k(obj, j10)).zzb();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.gms.internal.play_billing.k2
    public final void b(Object obj, Object obj2, long j10) {
        x1 x1Var = (x1) g4.k(obj, j10);
        x1 x1Var2 = (x1) g4.k(obj2, j10);
        int size = x1Var.size();
        int size2 = x1Var2.size();
        if (size > 0 && size2 > 0) {
            if (!x1Var.a()) {
                x1Var = x1Var.F(size2 + size);
            }
            x1Var.addAll(x1Var2);
        }
        if (size > 0) {
            x1Var2 = x1Var;
        }
        g4.x(obj, j10, x1Var2);
    }
}
