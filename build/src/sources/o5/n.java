package o5;

import android.graphics.PointF;
import java.util.Collections;
import o5.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class n extends a {

    /* renamed from: i  reason: collision with root package name */
    private final PointF f40302i;

    /* renamed from: j  reason: collision with root package name */
    private final PointF f40303j;

    /* renamed from: k  reason: collision with root package name */
    private final a f40304k;

    /* renamed from: l  reason: collision with root package name */
    private final a f40305l;

    /* renamed from: m  reason: collision with root package name */
    protected z5.c f40306m;

    /* renamed from: n  reason: collision with root package name */
    protected z5.c f40307n;

    public n(a aVar, a aVar2) {
        super(Collections.EMPTY_LIST);
        this.f40302i = new PointF();
        this.f40303j = new PointF();
        this.f40304k = aVar;
        this.f40305l = aVar2;
        n(f());
    }

    @Override // o5.a
    public void n(float f10) {
        this.f40304k.n(f10);
        this.f40305l.n(f10);
        this.f40302i.set(((Float) this.f40304k.h()).floatValue(), ((Float) this.f40305l.h()).floatValue());
        for (int i10 = 0; i10 < this.f40256a.size(); i10++) {
            ((a.b) this.f40256a.get(i10)).a();
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
        if (this.f40306m != null && (b11 = this.f40304k.b()) != null) {
            Float f13 = b11.f56059h;
            z5.c cVar = this.f40306m;
            float f14 = b11.f56058g;
            if (f13 == null) {
                floatValue2 = f14;
            } else {
                floatValue2 = f13.floatValue();
            }
            f11 = (Float) cVar.b(f14, floatValue2, (Float) b11.f56053b, (Float) b11.f56054c, this.f40304k.d(), this.f40304k.e(), this.f40304k.f());
        } else {
            f11 = null;
        }
        if (this.f40307n != null && (b10 = this.f40305l.b()) != null) {
            Float f15 = b10.f56059h;
            z5.c cVar2 = this.f40307n;
            float f16 = b10.f56058g;
            if (f15 == null) {
                floatValue = f16;
            } else {
                floatValue = f15.floatValue();
            }
            f12 = (Float) cVar2.b(f16, floatValue, (Float) b10.f56053b, (Float) b10.f56054c, this.f40305l.d(), this.f40305l.e(), this.f40305l.f());
        }
        if (f11 == null) {
            this.f40303j.set(this.f40302i.x, 0.0f);
        } else {
            this.f40303j.set(f11.floatValue(), 0.0f);
        }
        if (f12 == null) {
            PointF pointF = this.f40303j;
            pointF.set(pointF.x, this.f40302i.y);
        } else {
            PointF pointF2 = this.f40303j;
            pointF2.set(pointF2.x, f12.floatValue());
        }
        return this.f40303j;
    }

    public void s(z5.c cVar) {
        z5.c cVar2 = this.f40306m;
        if (cVar2 != null) {
            cVar2.c(null);
        }
        this.f40306m = cVar;
        if (cVar != null) {
            cVar.c(this);
        }
    }

    public void t(z5.c cVar) {
        z5.c cVar2 = this.f40307n;
        if (cVar2 != null) {
            cVar2.c(null);
        }
        this.f40307n = cVar;
        if (cVar != null) {
            cVar.c(this);
        }
    }
}
