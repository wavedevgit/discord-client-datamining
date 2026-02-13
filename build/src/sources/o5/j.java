package o5;

import android.graphics.Path;
import android.graphics.PathMeasure;
import android.graphics.PointF;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class j extends g {

    /* renamed from: i  reason: collision with root package name */
    private final PointF f39185i;

    /* renamed from: j  reason: collision with root package name */
    private final float[] f39186j;

    /* renamed from: k  reason: collision with root package name */
    private final float[] f39187k;

    /* renamed from: l  reason: collision with root package name */
    private final PathMeasure f39188l;

    /* renamed from: m  reason: collision with root package name */
    private i f39189m;

    public j(List list) {
        super(list);
        this.f39185i = new PointF();
        this.f39186j = new float[2];
        this.f39187k = new float[2];
        this.f39188l = new PathMeasure();
    }

    @Override // o5.a
    /* renamed from: q */
    public PointF i(z5.a aVar, float f10) {
        float f11;
        i iVar = (i) aVar;
        Path k10 = iVar.k();
        z5.c cVar = this.f39155e;
        if (cVar != null && aVar.f56667h != null) {
            f11 = f10;
            PointF pointF = (PointF) cVar.b(iVar.f56666g, iVar.f56667h.floatValue(), (PointF) iVar.f56661b, (PointF) iVar.f56662c, e(), f11, f());
            if (pointF != null) {
                return pointF;
            }
        } else {
            f11 = f10;
        }
        if (k10 == null) {
            return (PointF) aVar.f56661b;
        }
        if (this.f39189m != iVar) {
            this.f39188l.setPath(k10, false);
            this.f39189m = iVar;
        }
        float length = this.f39188l.getLength();
        float f12 = f11 * length;
        this.f39188l.getPosTan(f12, this.f39186j, this.f39187k);
        PointF pointF2 = this.f39185i;
        float[] fArr = this.f39186j;
        pointF2.set(fArr[0], fArr[1]);
        if (f12 < 0.0f) {
            PointF pointF3 = this.f39185i;
            float[] fArr2 = this.f39187k;
            pointF3.offset(fArr2[0] * f12, fArr2[1] * f12);
        } else if (f12 > length) {
            PointF pointF4 = this.f39185i;
            float[] fArr3 = this.f39187k;
            float f13 = f12 - length;
            pointF4.offset(fArr3[0] * f13, fArr3[1] * f13);
        }
        return this.f39185i;
    }
}
