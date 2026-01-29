package o5;

import android.graphics.Path;
import android.graphics.PathMeasure;
import android.graphics.PointF;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class j extends g {

    /* renamed from: i  reason: collision with root package name */
    private final PointF f42434i;

    /* renamed from: j  reason: collision with root package name */
    private final float[] f42435j;

    /* renamed from: k  reason: collision with root package name */
    private final float[] f42436k;

    /* renamed from: l  reason: collision with root package name */
    private final PathMeasure f42437l;

    /* renamed from: m  reason: collision with root package name */
    private i f42438m;

    public j(List list) {
        super(list);
        this.f42434i = new PointF();
        this.f42435j = new float[2];
        this.f42436k = new float[2];
        this.f42437l = new PathMeasure();
    }

    @Override // o5.a
    /* renamed from: q */
    public PointF i(y5.a aVar, float f10) {
        float f11;
        i iVar = (i) aVar;
        Path k10 = iVar.k();
        if (k10 == null) {
            return (PointF) aVar.f53994b;
        }
        y5.c cVar = this.f42409e;
        if (cVar != null) {
            f11 = f10;
            PointF pointF = (PointF) cVar.b(iVar.f53999g, iVar.f54000h.floatValue(), (PointF) iVar.f53994b, (PointF) iVar.f53995c, e(), f11, f());
            if (pointF != null) {
                return pointF;
            }
        } else {
            f11 = f10;
        }
        if (this.f42438m != iVar) {
            this.f42437l.setPath(k10, false);
            this.f42438m = iVar;
        }
        float length = this.f42437l.getLength();
        float f12 = f11 * length;
        this.f42437l.getPosTan(f12, this.f42435j, this.f42436k);
        PointF pointF2 = this.f42434i;
        float[] fArr = this.f42435j;
        pointF2.set(fArr[0], fArr[1]);
        if (f12 < 0.0f) {
            PointF pointF3 = this.f42434i;
            float[] fArr2 = this.f42436k;
            pointF3.offset(fArr2[0] * f12, fArr2[1] * f12);
        } else if (f12 > length) {
            PointF pointF4 = this.f42434i;
            float[] fArr3 = this.f42436k;
            float f13 = f12 - length;
            pointF4.offset(fArr3[0] * f13, fArr3[1] * f13);
        }
        return this.f42434i;
    }
}
