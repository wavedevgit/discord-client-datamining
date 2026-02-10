package o5;

import android.graphics.Path;
import android.graphics.PathMeasure;
import android.graphics.PointF;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class j extends g {

    /* renamed from: i  reason: collision with root package name */
    private final PointF f38616i;

    /* renamed from: j  reason: collision with root package name */
    private final float[] f38617j;

    /* renamed from: k  reason: collision with root package name */
    private final float[] f38618k;

    /* renamed from: l  reason: collision with root package name */
    private final PathMeasure f38619l;

    /* renamed from: m  reason: collision with root package name */
    private i f38620m;

    public j(List list) {
        super(list);
        this.f38616i = new PointF();
        this.f38617j = new float[2];
        this.f38618k = new float[2];
        this.f38619l = new PathMeasure();
    }

    @Override // o5.a
    /* renamed from: q */
    public PointF i(z5.a aVar, float f10) {
        float f11;
        i iVar = (i) aVar;
        Path k10 = iVar.k();
        z5.c cVar = this.f38586e;
        if (cVar != null && aVar.f56098h != null) {
            f11 = f10;
            PointF pointF = (PointF) cVar.b(iVar.f56097g, iVar.f56098h.floatValue(), (PointF) iVar.f56092b, (PointF) iVar.f56093c, e(), f11, f());
            if (pointF != null) {
                return pointF;
            }
        } else {
            f11 = f10;
        }
        if (k10 == null) {
            return (PointF) aVar.f56092b;
        }
        if (this.f38620m != iVar) {
            this.f38619l.setPath(k10, false);
            this.f38620m = iVar;
        }
        float length = this.f38619l.getLength();
        float f12 = f11 * length;
        this.f38619l.getPosTan(f12, this.f38617j, this.f38618k);
        PointF pointF2 = this.f38616i;
        float[] fArr = this.f38617j;
        pointF2.set(fArr[0], fArr[1]);
        if (f12 < 0.0f) {
            PointF pointF3 = this.f38616i;
            float[] fArr2 = this.f38618k;
            pointF3.offset(fArr2[0] * f12, fArr2[1] * f12);
        } else if (f12 > length) {
            PointF pointF4 = this.f38616i;
            float[] fArr3 = this.f38618k;
            float f13 = f12 - length;
            pointF4.offset(fArr3[0] * f13, fArr3[1] * f13);
        }
        return this.f38616i;
    }
}
