package o5;

import android.graphics.PointF;
import java.util.Collections;
import o5.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class n extends a {

    /* renamed from: i  reason: collision with root package name */
    private final PointF f42590i;

    /* renamed from: j  reason: collision with root package name */
    private final PointF f42591j;

    /* renamed from: k  reason: collision with root package name */
    private final a f42592k;

    /* renamed from: l  reason: collision with root package name */
    private final a f42593l;

    /* renamed from: m  reason: collision with root package name */
    protected y5.c f42594m;

    /* renamed from: n  reason: collision with root package name */
    protected y5.c f42595n;

    public n(a aVar, a aVar2) {
        super(Collections.EMPTY_LIST);
        this.f42590i = new PointF();
        this.f42591j = new PointF();
        this.f42592k = aVar;
        this.f42593l = aVar2;
        n(f());
    }

    @Override // o5.a
    public void n(float f10) {
        this.f42592k.n(f10);
        this.f42593l.n(f10);
        this.f42590i.set(((Float) this.f42592k.h()).floatValue(), ((Float) this.f42593l.h()).floatValue());
        for (int i10 = 0; i10 < this.f42549a.size(); i10++) {
            ((a.b) this.f42549a.get(i10)).a();
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
    public PointF i(y5.a aVar, float f10) {
        float f11;
        Float f12;
        y5.a b10;
        float floatValue;
        y5.a b11;
        float floatValue2;
        Float f13 = null;
        if (this.f42594m != null && (b11 = this.f42592k.b()) != null) {
            float d10 = this.f42592k.d();
            Float f14 = b11.f53991h;
            y5.c cVar = this.f42594m;
            float f15 = b11.f53990g;
            if (f14 == null) {
                floatValue2 = f15;
            } else {
                floatValue2 = f14.floatValue();
            }
            f11 = f10;
            f12 = (Float) cVar.b(f15, floatValue2, (Float) b11.f53985b, (Float) b11.f53986c, f10, f10, d10);
        } else {
            f11 = f10;
            f12 = null;
        }
        if (this.f42595n != null && (b10 = this.f42593l.b()) != null) {
            float d11 = this.f42593l.d();
            Float f16 = b10.f53991h;
            y5.c cVar2 = this.f42595n;
            float f17 = b10.f53990g;
            if (f16 == null) {
                floatValue = f17;
            } else {
                floatValue = f16.floatValue();
            }
            f13 = (Float) cVar2.b(f17, floatValue, (Float) b10.f53985b, (Float) b10.f53986c, f11, f11, d11);
        }
        if (f12 == null) {
            this.f42591j.set(this.f42590i.x, 0.0f);
        } else {
            this.f42591j.set(f12.floatValue(), 0.0f);
        }
        if (f13 == null) {
            PointF pointF = this.f42591j;
            pointF.set(pointF.x, this.f42590i.y);
        } else {
            PointF pointF2 = this.f42591j;
            pointF2.set(pointF2.x, f13.floatValue());
        }
        return this.f42591j;
    }

    public void s(y5.c cVar) {
        y5.c cVar2 = this.f42594m;
        if (cVar2 != null) {
            cVar2.c(null);
        }
        this.f42594m = cVar;
        if (cVar != null) {
            cVar.c(this);
        }
    }

    public void t(y5.c cVar) {
        y5.c cVar2 = this.f42595n;
        if (cVar2 != null) {
            cVar2.c(null);
        }
        this.f42595n = cVar;
        if (cVar != null) {
            cVar.c(this);
        }
    }
}
