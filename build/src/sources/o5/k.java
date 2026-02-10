package o5;

import android.graphics.PointF;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class k extends g {

    /* renamed from: i  reason: collision with root package name */
    private final PointF f40295i;

    public k(List list) {
        super(list);
        this.f40295i = new PointF();
    }

    @Override // o5.a
    /* renamed from: q */
    public PointF i(z5.a aVar, float f10) {
        return j(aVar, f10, f10, f10);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // o5.a
    /* renamed from: r */
    public PointF j(z5.a aVar, float f10, float f11, float f12) {
        Object obj;
        PointF pointF;
        Object obj2 = aVar.f56053b;
        if (obj2 != null && (obj = aVar.f56054c) != null) {
            PointF pointF2 = (PointF) obj2;
            PointF pointF3 = (PointF) obj;
            z5.c cVar = this.f40260e;
            if (cVar != null && (pointF = (PointF) cVar.b(aVar.f56058g, aVar.f56059h.floatValue(), pointF2, pointF3, f10, e(), f())) != null) {
                return pointF;
            }
            PointF pointF4 = this.f40295i;
            float f13 = pointF2.x;
            float f14 = f13 + (f11 * (pointF3.x - f13));
            float f15 = pointF2.y;
            pointF4.set(f14, f15 + (f12 * (pointF3.y - f15)));
            return this.f40295i;
        }
        throw new IllegalStateException("Missing values for keyframe.");
    }
}
