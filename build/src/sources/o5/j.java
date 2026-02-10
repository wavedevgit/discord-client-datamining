package o5;

import android.graphics.Path;
import android.graphics.PathMeasure;
import android.graphics.PointF;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class j extends g {

    /* renamed from: i  reason: collision with root package name */
    private final PointF f40290i;

    /* renamed from: j  reason: collision with root package name */
    private final float[] f40291j;

    /* renamed from: k  reason: collision with root package name */
    private final float[] f40292k;

    /* renamed from: l  reason: collision with root package name */
    private final PathMeasure f40293l;

    /* renamed from: m  reason: collision with root package name */
    private i f40294m;

    public j(List list) {
        super(list);
        this.f40290i = new PointF();
        this.f40291j = new float[2];
        this.f40292k = new float[2];
        this.f40293l = new PathMeasure();
    }

    @Override // o5.a
    /* renamed from: q */
    public PointF i(z5.a aVar, float f10) {
        float f11;
        i iVar = (i) aVar;
        Path k10 = iVar.k();
        z5.c cVar = this.f40260e;
        if (cVar != null && aVar.f56059h != null) {
            f11 = f10;
            PointF pointF = (PointF) cVar.b(iVar.f56058g, iVar.f56059h.floatValue(), (PointF) iVar.f56053b, (PointF) iVar.f56054c, e(), f11, f());
            if (pointF != null) {
                return pointF;
            }
        } else {
            f11 = f10;
        }
        if (k10 == null) {
            return (PointF) aVar.f56053b;
        }
        if (this.f40294m != iVar) {
            this.f40293l.setPath(k10, false);
            this.f40294m = iVar;
        }
        float length = this.f40293l.getLength();
        float f12 = f11 * length;
        this.f40293l.getPosTan(f12, this.f40291j, this.f40292k);
        PointF pointF2 = this.f40290i;
        float[] fArr = this.f40291j;
        pointF2.set(fArr[0], fArr[1]);
        if (f12 < 0.0f) {
            PointF pointF3 = this.f40290i;
            float[] fArr2 = this.f40292k;
            pointF3.offset(fArr2[0] * f12, fArr2[1] * f12);
        } else if (f12 > length) {
            PointF pointF4 = this.f40290i;
            float[] fArr3 = this.f40292k;
            float f13 = f12 - length;
            pointF4.offset(fArr3[0] * f13, fArr3[1] * f13);
        }
        return this.f40290i;
    }
}
