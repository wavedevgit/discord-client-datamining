package o5;

import android.graphics.Path;
import android.graphics.PathMeasure;
import android.graphics.PointF;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class j extends g {

    /* renamed from: i  reason: collision with root package name */
    private final PointF f41555i;

    /* renamed from: j  reason: collision with root package name */
    private final float[] f41556j;

    /* renamed from: k  reason: collision with root package name */
    private final float[] f41557k;

    /* renamed from: l  reason: collision with root package name */
    private final PathMeasure f41558l;

    /* renamed from: m  reason: collision with root package name */
    private i f41559m;

    public j(List list) {
        super(list);
        this.f41555i = new PointF();
        this.f41556j = new float[2];
        this.f41557k = new float[2];
        this.f41558l = new PathMeasure();
    }

    @Override // o5.a
    /* renamed from: q */
    public PointF i(y5.a aVar, float f10) {
        float f11;
        i iVar = (i) aVar;
        Path k10 = iVar.k();
        if (k10 == null) {
            return (PointF) aVar.f55028b;
        }
        y5.c cVar = this.f41530e;
        if (cVar != null) {
            f11 = f10;
            PointF pointF = (PointF) cVar.b(iVar.f55033g, iVar.f55034h.floatValue(), (PointF) iVar.f55028b, (PointF) iVar.f55029c, e(), f11, f());
            if (pointF != null) {
                return pointF;
            }
        } else {
            f11 = f10;
        }
        if (this.f41559m != iVar) {
            this.f41558l.setPath(k10, false);
            this.f41559m = iVar;
        }
        float length = this.f41558l.getLength();
        float f12 = f11 * length;
        this.f41558l.getPosTan(f12, this.f41556j, this.f41557k);
        PointF pointF2 = this.f41555i;
        float[] fArr = this.f41556j;
        pointF2.set(fArr[0], fArr[1]);
        if (f12 < 0.0f) {
            PointF pointF3 = this.f41555i;
            float[] fArr2 = this.f41557k;
            pointF3.offset(fArr2[0] * f12, fArr2[1] * f12);
        } else if (f12 > length) {
            PointF pointF4 = this.f41555i;
            float[] fArr3 = this.f41557k;
            float f13 = f12 - length;
            pointF4.offset(fArr3[0] * f13, fArr3[1] * f13);
        }
        return this.f41555i;
    }
}
