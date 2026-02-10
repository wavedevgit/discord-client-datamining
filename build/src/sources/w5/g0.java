package w5;

import x5.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class g0 implements n0 {

    /* renamed from: a  reason: collision with root package name */
    public static final g0 f52295a = new g0();

    private g0() {
    }

    @Override // w5.n0
    /* renamed from: b */
    public z5.d a(x5.c cVar, float f10) {
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
            cVar.T();
        }
        if (z10) {
            cVar.v();
        }
        return new z5.d((nextDouble / 100.0f) * f10, (nextDouble2 / 100.0f) * f10);
    }
}
