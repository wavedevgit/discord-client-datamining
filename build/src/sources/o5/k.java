package o5;

import android.graphics.PointF;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class k extends g {

    /* renamed from: i  reason: collision with root package name */
    private final PointF f42583i;

    public k(List list) {
        super(list);
        this.f42583i = new PointF();
    }

    @Override // o5.a
    /* renamed from: q */
    public PointF i(y5.a aVar, float f10) {
        return j(aVar, f10, f10, f10);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // o5.a
    /* renamed from: r */
    public PointF j(y5.a aVar, float f10, float f11, float f12) {
        Object obj;
        PointF pointF;
        Object obj2 = aVar.f53985b;
        if (obj2 != null && (obj = aVar.f53986c) != null) {
            PointF pointF2 = (PointF) obj2;
            PointF pointF3 = (PointF) obj;
            y5.c cVar = this.f42553e;
            if (cVar != null && (pointF = (PointF) cVar.b(aVar.f53990g, aVar.f53991h.floatValue(), pointF2, pointF3, f10, e(), f())) != null) {
                return pointF;
            }
            PointF pointF4 = this.f42583i;
            float f13 = pointF2.x;
            float f14 = f13 + (f11 * (pointF3.x - f13));
            float f15 = pointF2.y;
            pointF4.set(f14, f15 + (f12 * (pointF3.y - f15)));
            return this.f42583i;
        }
        throw new IllegalStateException("Missing values for keyframe.");
    }
}
