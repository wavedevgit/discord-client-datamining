package net.time4j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class q implements st.v {

    /* renamed from: d  reason: collision with root package name */
    private final char f38656d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f38657e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public q(char c10, boolean z10) {
        this.f38656d = c10;
        this.f38657e = z10;
    }

    @Override // st.v
    /* renamed from: a */
    public st.q apply(st.q qVar) {
        if (this.f38656d == '9') {
            return qVar;
        }
        l0 l0Var = g0.N;
        int intValue = ((Integer) qVar.t(l0Var)).intValue();
        int intValue2 = ((Integer) qVar.n(l0Var)).intValue();
        char c10 = this.f38656d;
        int i10 = 0;
        if (c10 != '3') {
            if (c10 == '6') {
                int i11 = (intValue / 1000) * 1000;
                if (this.f38657e) {
                    i10 = 999;
                }
                return qVar.C(l0Var, Math.min(intValue2, i11 + i10));
            }
            throw new UnsupportedOperationException("Unknown: " + this.f38656d);
        }
        int i12 = (intValue / 1000000) * 1000000;
        if (this.f38657e) {
            i10 = 999999;
        }
        return qVar.C(l0Var, Math.min(intValue2, i12 + i10));
    }
}
