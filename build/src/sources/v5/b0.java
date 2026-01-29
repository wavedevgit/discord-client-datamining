package v5;

import android.graphics.PointF;
import w5.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class b0 implements n0 {

    /* renamed from: a  reason: collision with root package name */
    public static final b0 f50661a = new b0();

    private b0() {
    }

    @Override // v5.n0
    /* renamed from: b */
    public PointF a(w5.c cVar, float f10) {
        c.b n10 = cVar.n();
        if (n10 == c.b.BEGIN_ARRAY) {
            return s.e(cVar, f10);
        }
        if (n10 == c.b.BEGIN_OBJECT) {
            return s.e(cVar, f10);
        }
        if (n10 == c.b.NUMBER) {
            PointF pointF = new PointF(((float) cVar.nextDouble()) * f10, ((float) cVar.nextDouble()) * f10);
            while (cVar.hasNext()) {
                cVar.P();
            }
            return pointF;
        }
        throw new IllegalArgumentException("Cannot convert json to point. Next token is " + n10);
    }
}
