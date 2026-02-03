package rk;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class b extends f {
    /* JADX INFO: Access modifiers changed from: package-private */
    public b(gk.a aVar) {
        super(aVar);
    }

    @Override // rk.i
    protected void h(StringBuilder sb2, int i10) {
        if (i10 < 10000) {
            sb2.append("(3202)");
        } else {
            sb2.append("(3203)");
        }
    }

    @Override // rk.i
    protected int i(int i10) {
        if (i10 < 10000) {
            return i10;
        }
        return i10 - 10000;
    }
}
