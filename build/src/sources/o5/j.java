package o5;

import android.graphics.Path;
import android.graphics.PathMeasure;
import android.graphics.PointF;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class j extends g {

    /* renamed from: i  reason: collision with root package name */
    private final PointF f38617i;

    /* renamed from: j  reason: collision with root package name */
    private final float[] f38618j;

    /* renamed from: k  reason: collision with root package name */
    private final float[] f38619k;

    /* renamed from: l  reason: collision with root package name */
    private final PathMeasure f38620l;

    /* renamed from: m  reason: collision with root package name */
    private i f38621m;

    public j(List list) {
        super(list);
        this.f38617i = new PointF();
        this.f38618j = new float[2];
        this.f38619k = new float[2];
        this.f38620l = new PathMeasure();
    }

    @Override // o5.a
    /* renamed from: q */
    public PointF i(z5.a aVar, float f10) {
        float f11;
        i iVar = (i) aVar;
        Path k10 = iVar.k();
        z5.c cVar = this.f38587e;
        if (cVar != null && aVar.f56099h != null) {
            f11 = f10;
            PointF pointF = (PointF) cVar.b(iVar.f56098g, iVar.f56099h.floatValue(), (PointF) iVar.f56093b, (PointF) iVar.f56094c, e(), f11, f());
            if (pointF != null) {
                return pointF;
            }
        } else {
            f11 = f10;
        }
        if (k10 == null) {
            return (PointF) aVar.f56093b;
        }
        if (this.f38621m != iVar) {
            this.f38620l.setPath(k10, false);
            this.f38621m = iVar;
        }
        float length = this.f38620l.getLength();
        float f12 = f11 * length;
        this.f38620l.getPosTan(f12, this.f38618j, this.f38619k);
        PointF pointF2 = this.f38617i;
        float[] fArr = this.f38618j;
        pointF2.set(fArr[0], fArr[1]);
        if (f12 < 0.0f) {
            PointF pointF3 = this.f38617i;
            float[] fArr2 = this.f38619k;
            pointF3.offset(fArr2[0] * f12, fArr2[1] * f12);
        } else if (f12 > length) {
            PointF pointF4 = this.f38617i;
            float[] fArr3 = this.f38619k;
            float f13 = f12 - length;
            pointF4.offset(fArr3[0] * f13, fArr3[1] * f13);
        }
        return this.f38617i;
    }
}
