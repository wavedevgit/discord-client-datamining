package com.google.android.gms.internal.play_billing;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class n2 implements t2 {

    /* renamed from: a  reason: collision with root package name */
    private final t2[] f14963a;

    /* JADX INFO: Access modifiers changed from: package-private */
    public n2(t2... t2VarArr) {
        this.f14963a = t2VarArr;
    }

    @Override // com.google.android.gms.internal.play_billing.t2
    public final s2 a(Class cls) {
        for (int i10 = 0; i10 < 2; i10++) {
            t2 t2Var = this.f14963a[i10];
            if (t2Var.b(cls)) {
                return t2Var.a(cls);
            }
        }
        throw new UnsupportedOperationException("No factory is available for message type: ".concat(cls.getName()));
    }

    @Override // com.google.android.gms.internal.play_billing.t2
    public final boolean b(Class cls) {
        for (int i10 = 0; i10 < 2; i10++) {
            if (this.f14963a[i10].b(cls)) {
                return true;
            }
        }
        return false;
    }
}
