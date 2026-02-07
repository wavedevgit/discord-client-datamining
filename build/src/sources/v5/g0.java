package v5;

import w5.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class g0 implements n0 {

    /* renamed from: a  reason: collision with root package name */
    public static final g0 f52239a = new g0();

    private g0() {
    }

    @Override // v5.n0
    /* renamed from: b */
    public y5.d a(w5.c cVar, float f10) {
        boolean z10;
        if (cVar.m() == c.b.BEGIN_ARRAY) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (z10) {
            cVar.x();
        }
        float nextDouble = (float) cVar.nextDouble();
        float nextDouble2 = (float) cVar.nextDouble();
        while (cVar.hasNext()) {
            cVar.S();
        }
        if (z10) {
            cVar.v();
        }
        return new y5.d((nextDouble / 100.0f) * f10, (nextDouble2 / 100.0f) * f10);
    }
}
