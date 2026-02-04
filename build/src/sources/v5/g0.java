package v5;

import w5.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class g0 implements n0 {

    /* renamed from: a  reason: collision with root package name */
    public static final g0 f51137a = new g0();

    private g0() {
    }

    @Override // v5.n0
    /* renamed from: b */
    public y5.d a(w5.c cVar, float f10) {
        boolean z10;
        if (cVar.n() == c.b.BEGIN_ARRAY) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (z10) {
            cVar.u();
        }
        float nextDouble = (float) cVar.nextDouble();
        float nextDouble2 = (float) cVar.nextDouble();
        while (cVar.hasNext()) {
            cVar.P();
        }
        if (z10) {
            cVar.s();
        }
        return new y5.d((nextDouble / 100.0f) * f10, (nextDouble2 / 100.0f) * f10);
    }
}
