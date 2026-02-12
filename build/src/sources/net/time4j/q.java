package net.time4j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class q implements bu.v {

    /* renamed from: d  reason: collision with root package name */
    private final char f37661d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f37662e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public q(char c10, boolean z10) {
        this.f37661d = c10;
        this.f37662e = z10;
    }

    @Override // bu.v
    /* renamed from: a */
    public bu.q apply(bu.q qVar) {
        if (this.f37661d == '9') {
            return qVar;
        }
        l0 l0Var = g0.N;
        int intValue = ((Integer) qVar.k(l0Var)).intValue();
        int intValue2 = ((Integer) qVar.v(l0Var)).intValue();
        char c10 = this.f37661d;
        int i10 = 0;
        if (c10 != '3') {
            if (c10 == '6') {
                int i11 = (intValue / 1000) * 1000;
                if (this.f37662e) {
                    i10 = 999;
                }
                return qVar.C(l0Var, Math.min(intValue2, i11 + i10));
            }
            throw new UnsupportedOperationException("Unknown: " + this.f37661d);
        }
        int i12 = (intValue / 1000000) * 1000000;
        if (this.f37662e) {
            i10 = 999999;
        }
        return qVar.C(l0Var, Math.min(intValue2, i12 + i10));
    }
}
