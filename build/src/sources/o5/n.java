package o5;

import android.graphics.PointF;
import java.util.Collections;
import o5.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class n extends a {

    /* renamed from: i  reason: collision with root package name */
    private final PointF f39197i;

    /* renamed from: j  reason: collision with root package name */
    private final PointF f39198j;

    /* renamed from: k  reason: collision with root package name */
    private final a f39199k;

    /* renamed from: l  reason: collision with root package name */
    private final a f39200l;

    /* renamed from: m  reason: collision with root package name */
    protected z5.c f39201m;

    /* renamed from: n  reason: collision with root package name */
    protected z5.c f39202n;

    public n(a aVar, a aVar2) {
        super(Collections.EMPTY_LIST);
        this.f39197i = new PointF();
        this.f39198j = new PointF();
        this.f39199k = aVar;
        this.f39200l = aVar2;
        n(f());
    }

    @Override // o5.a
    public void n(float f10) {
        this.f39199k.n(f10);
        this.f39200l.n(f10);
        this.f39197i.set(((Float) this.f39199k.h()).floatValue(), ((Float) this.f39200l.h()).floatValue());
        for (int i10 = 0; i10 < this.f39151a.size(); i10++) {
            ((a.b) this.f39151a.get(i10)).a();
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
        if (this.f39201m != null && (b11 = this.f39199k.b()) != null) {
            Float f13 = b11.f56667h;
            z5.c cVar = this.f39201m;
            float f14 = b11.f56666g;
            if (f13 == null) {
                floatValue2 = f14;
            } else {
                floatValue2 = f13.floatValue();
            }
            f11 = (Float) cVar.b(f14, floatValue2, (Float) b11.f56661b, (Float) b11.f56662c, this.f39199k.d(), this.f39199k.e(), this.f39199k.f());
        } else {
            f11 = null;
        }
        if (this.f39202n != null && (b10 = this.f39200l.b()) != null) {
            Float f15 = b10.f56667h;
            z5.c cVar2 = this.f39202n;
            float f16 = b10.f56666g;
            if (f15 == null) {
                floatValue = f16;
            } else {
                floatValue = f15.floatValue();
            }
            f12 = (Float) cVar2.b(f16, floatValue, (Float) b10.f56661b, (Float) b10.f56662c, this.f39200l.d(), this.f39200l.e(), this.f39200l.f());
        }
        if (f11 == null) {
            this.f39198j.set(this.f39197i.x, 0.0f);
        } else {
            this.f39198j.set(f11.floatValue(), 0.0f);
        }
        if (f12 == null) {
            PointF pointF = this.f39198j;
            pointF.set(pointF.x, this.f39197i.y);
        } else {
            PointF pointF2 = this.f39198j;
            pointF2.set(pointF2.x, f12.floatValue());
        }
        return this.f39198j;
    }

    public void s(z5.c cVar) {
        z5.c cVar2 = this.f39201m;
        if (cVar2 != null) {
            cVar2.c(null);
        }
        this.f39201m = cVar;
        if (cVar != null) {
            cVar.c(this);
        }
    }

    public void t(z5.c cVar) {
        z5.c cVar2 = this.f39202n;
        if (cVar2 != null) {
            cVar2.c(null);
        }
        this.f39202n = cVar;
        if (cVar != null) {
            cVar.c(this);
        }
    }
}
