package o5;

import android.graphics.PointF;
import java.util.Collections;
import o5.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class n extends a {

    /* renamed from: i  reason: collision with root package name */
    private final PointF f38628i;

    /* renamed from: j  reason: collision with root package name */
    private final PointF f38629j;

    /* renamed from: k  reason: collision with root package name */
    private final a f38630k;

    /* renamed from: l  reason: collision with root package name */
    private final a f38631l;

    /* renamed from: m  reason: collision with root package name */
    protected z5.c f38632m;

    /* renamed from: n  reason: collision with root package name */
    protected z5.c f38633n;

    public n(a aVar, a aVar2) {
        super(Collections.EMPTY_LIST);
        this.f38628i = new PointF();
        this.f38629j = new PointF();
        this.f38630k = aVar;
        this.f38631l = aVar2;
        n(f());
    }

    @Override // o5.a
    public void n(float f10) {
        this.f38630k.n(f10);
        this.f38631l.n(f10);
        this.f38628i.set(((Float) this.f38630k.h()).floatValue(), ((Float) this.f38631l.h()).floatValue());
        for (int i10 = 0; i10 < this.f38582a.size(); i10++) {
            ((a.b) this.f38582a.get(i10)).a();
        }
    }

    @Override // o5.a
    /* renamed from: q */
    public PointF h() {
        return i(null, 0.0f);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // o5.a
    /* renamed from: r */
    public PointF i(z5.a aVar, float f10) {
        Float f11;
        z5.a b10;
        float floatValue;
        z5.a b11;
        float floatValue2;
        Float f12 = null;
        if (this.f38632m != null && (b11 = this.f38630k.b()) != null) {
            Float f13 = b11.f56098h;
            z5.c cVar = this.f38632m;
            float f14 = b11.f56097g;
            if (f13 == null) {
                floatValue2 = f14;
            } else {
                floatValue2 = f13.floatValue();
            }
            f11 = (Float) cVar.b(f14, floatValue2, (Float) b11.f56092b, (Float) b11.f56093c, this.f38630k.d(), this.f38630k.e(), this.f38630k.f());
        } else {
            f11 = null;
        }
        if (this.f38633n != null && (b10 = this.f38631l.b()) != null) {
            Float f15 = b10.f56098h;
            z5.c cVar2 = this.f38633n;
            float f16 = b10.f56097g;
            if (f15 == null) {
                floatValue = f16;
            } else {
                floatValue = f15.floatValue();
            }
            f12 = (Float) cVar2.b(f16, floatValue, (Float) b10.f56092b, (Float) b10.f56093c, this.f38631l.d(), this.f38631l.e(), this.f38631l.f());
        }
        if (f11 == null) {
            this.f38629j.set(this.f38628i.x, 0.0f);
        } else {
            this.f38629j.set(f11.floatValue(), 0.0f);
        }
        if (f12 == null) {
            PointF pointF = this.f38629j;
            pointF.set(pointF.x, this.f38628i.y);
        } else {
            PointF pointF2 = this.f38629j;
            pointF2.set(pointF2.x, f12.floatValue());
        }
        return this.f38629j;
    }

    public void s(z5.c cVar) {
        z5.c cVar2 = this.f38632m;
        if (cVar2 != null) {
            cVar2.c(null);
        }
        this.f38632m = cVar;
        if (cVar != null) {
            cVar.c(this);
        }
    }

    public void t(z5.c cVar) {
        z5.c cVar2 = this.f38633n;
        if (cVar2 != null) {
            cVar2.c(null);
        }
        this.f38633n = cVar;
        if (cVar != null) {
            cVar.c(this);
        }
    }
}
