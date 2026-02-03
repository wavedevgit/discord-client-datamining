package v5;

import android.graphics.Color;
import w5.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class g implements n0 {

    /* renamed from: a  reason: collision with root package name */
    public static final g f50811a = new g();

    private g() {
    }

    @Override // v5.n0
    /* renamed from: b */
    public Integer a(w5.c cVar, float f10) {
        boolean z10;
        double d10;
        if (cVar.n() == c.b.BEGIN_ARRAY) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (z10) {
            cVar.u();
        }
        double nextDouble = cVar.nextDouble();
        double nextDouble2 = cVar.nextDouble();
        double nextDouble3 = cVar.nextDouble();
        if (cVar.n() == c.b.NUMBER) {
            d10 = cVar.nextDouble();
        } else {
            d10 = 1.0d;
        }
        if (z10) {
            cVar.s();
        }
        if (nextDouble <= 1.0d && nextDouble2 <= 1.0d && nextDouble3 <= 1.0d) {
            nextDouble *= 255.0d;
            nextDouble2 *= 255.0d;
            nextDouble3 *= 255.0d;
            if (d10 <= 1.0d) {
                d10 *= 255.0d;
            }
        }
        return Integer.valueOf(Color.argb((int) d10, (int) nextDouble, (int) nextDouble2, (int) nextDouble3));
    }
}
