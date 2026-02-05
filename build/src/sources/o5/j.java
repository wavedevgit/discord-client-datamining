package o5;

import android.graphics.Path;
import android.graphics.PathMeasure;
import android.graphics.PointF;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class j extends g {

    /* renamed from: i  reason: collision with root package name */
    private final PointF f42284i;

    /* renamed from: j  reason: collision with root package name */
    private final float[] f42285j;

    /* renamed from: k  reason: collision with root package name */
    private final float[] f42286k;

    /* renamed from: l  reason: collision with root package name */
    private final PathMeasure f42287l;

    /* renamed from: m  reason: collision with root package name */
    private i f42288m;

    public j(List list) {
        super(list);
        this.f42284i = new PointF();
        this.f42285j = new float[2];
        this.f42286k = new float[2];
        this.f42287l = new PathMeasure();
    }

    @Override // o5.a
    /* renamed from: q */
    public PointF i(y5.a aVar, float f10) {
        float f11;
        i iVar = (i) aVar;
        Path k10 = iVar.k();
        if (k10 == null) {
            return (PointF) aVar.f54436b;
        }
        y5.c cVar = this.f42259e;
        if (cVar != null) {
            f11 = f10;
            PointF pointF = (PointF) cVar.b(iVar.f54441g, iVar.f54442h.floatValue(), (PointF) iVar.f54436b, (PointF) iVar.f54437c, e(), f11, f());
            if (pointF != null) {
                return pointF;
            }
        } else {
            f11 = f10;
        }
        if (this.f42288m != iVar) {
            this.f42287l.setPath(k10, false);
            this.f42288m = iVar;
        }
        float length = this.f42287l.getLength();
        float f12 = f11 * length;
        this.f42287l.getPosTan(f12, this.f42285j, this.f42286k);
        PointF pointF2 = this.f42284i;
        float[] fArr = this.f42285j;
        pointF2.set(fArr[0], fArr[1]);
        if (f12 < 0.0f) {
            PointF pointF3 = this.f42284i;
            float[] fArr2 = this.f42286k;
            pointF3.offset(fArr2[0] * f12, fArr2[1] * f12);
        } else if (f12 > length) {
            PointF pointF4 = this.f42284i;
            float[] fArr3 = this.f42286k;
            float f13 = f12 - length;
            pointF4.offset(fArr3[0] * f13, fArr3[1] * f13);
        }
        return this.f42284i;
    }
}
