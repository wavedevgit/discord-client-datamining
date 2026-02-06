package v5;

import android.graphics.PointF;
import w5.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class b0 implements n0 {

    /* renamed from: a  reason: collision with root package name */
    public static final b0 f52180a = new b0();

    private b0() {
    }

    @Override // v5.n0
    /* renamed from: b */
    public PointF a(w5.c cVar, float f10) {
        c.b m10 = cVar.m();
        if (m10 == c.b.BEGIN_ARRAY) {
            return s.e(cVar, f10);
        }
        if (m10 == c.b.BEGIN_OBJECT) {
            return s.e(cVar, f10);
        }
        if (m10 == c.b.NUMBER) {
            PointF pointF = new PointF(((float) cVar.nextDouble()) * f10, ((float) cVar.nextDouble()) * f10);
            while (cVar.hasNext()) {
                cVar.S();
            }
            return pointF;
        }
        throw new IllegalArgumentException("Cannot convert json to point. Next token is " + m10);
    }
}
