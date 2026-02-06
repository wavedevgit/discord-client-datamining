package net.time4j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class q implements rt.v {

    /* renamed from: d  reason: collision with root package name */
    private final char f39516d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f39517e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public q(char c10, boolean z10) {
        this.f39516d = c10;
        this.f39517e = z10;
    }

    @Override // rt.v
    /* renamed from: a */
    public rt.q apply(rt.q qVar) {
        if (this.f39516d == '9') {
            return qVar;
        }
        l0 l0Var = g0.N;
        int intValue = ((Integer) qVar.s(l0Var)).intValue();
        int intValue2 = ((Integer) qVar.t(l0Var)).intValue();
        char c10 = this.f39516d;
        int i10 = 0;
        if (c10 != '3') {
            if (c10 == '6') {
                int i11 = (intValue / 1000) * 1000;
                if (this.f39517e) {
                    i10 = 999;
                }
                return qVar.C(l0Var, Math.min(intValue2, i11 + i10));
            }
            throw new UnsupportedOperationException("Unknown: " + this.f39516d);
        }
        int i12 = (intValue / 1000000) * 1000000;
        if (this.f39517e) {
            i10 = 999999;
        }
        return qVar.C(l0Var, Math.min(intValue2, i12 + i10));
    }
}
