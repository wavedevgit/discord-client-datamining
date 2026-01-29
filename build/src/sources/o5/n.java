package o5;

import android.graphics.PointF;
import java.util.Collections;
import o5.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class n extends a {

    /* renamed from: i  reason: collision with root package name */
    private final PointF f42446i;

    /* renamed from: j  reason: collision with root package name */
    private final PointF f42447j;

    /* renamed from: k  reason: collision with root package name */
    private final a f42448k;

    /* renamed from: l  reason: collision with root package name */
    private final a f42449l;

    /* renamed from: m  reason: collision with root package name */
    protected y5.c f42450m;

    /* renamed from: n  reason: collision with root package name */
    protected y5.c f42451n;

    public n(a aVar, a aVar2) {
        super(Collections.EMPTY_LIST);
        this.f42446i = new PointF();
        this.f42447j = new PointF();
        this.f42448k = aVar;
        this.f42449l = aVar2;
        n(f());
    }

    @Override // o5.a
    public void n(float f10) {
        this.f42448k.n(f10);
        this.f42449l.n(f10);
        this.f42446i.set(((Float) this.f42448k.h()).floatValue(), ((Float) this.f42449l.h()).floatValue());
        for (int i10 = 0; i10 < this.f42405a.size(); i10++) {
            ((a.b) this.f42405a.get(i10)).a();
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
        if (this.f42450m != null && (b11 = this.f42448k.b()) != null) {
            float d10 = this.f42448k.d();
            Float f14 = b11.f54000h;
            y5.c cVar = this.f42450m;
            float f15 = b11.f53999g;
            if (f14 == null) {
                floatValue2 = f15;
            } else {
                floatValue2 = f14.floatValue();
            }
            f11 = f10;
            f12 = (Float) cVar.b(f15, floatValue2, (Float) b11.f53994b, (Float) b11.f53995c, f10, f10, d10);
        } else {
            f11 = f10;
            f12 = null;
        }
        if (this.f42451n != null && (b10 = this.f42449l.b()) != null) {
            float d11 = this.f42449l.d();
            Float f16 = b10.f54000h;
            y5.c cVar2 = this.f42451n;
            float f17 = b10.f53999g;
            if (f16 == null) {
                floatValue = f17;
            } else {
                floatValue = f16.floatValue();
            }
            f13 = (Float) cVar2.b(f17, floatValue, (Float) b10.f53994b, (Float) b10.f53995c, f11, f11, d11);
        }
        if (f12 == null) {
            this.f42447j.set(this.f42446i.x, 0.0f);
        } else {
            this.f42447j.set(f12.floatValue(), 0.0f);
        }
        if (f13 == null) {
            PointF pointF = this.f42447j;
            pointF.set(pointF.x, this.f42446i.y);
        } else {
            PointF pointF2 = this.f42447j;
            pointF2.set(pointF2.x, f13.floatValue());
        }
        return this.f42447j;
    }

    public void s(y5.c cVar) {
        y5.c cVar2 = this.f42450m;
        if (cVar2 != null) {
            cVar2.c(null);
        }
        this.f42450m = cVar;
        if (cVar != null) {
            cVar.c(this);
        }
    }

    public void t(y5.c cVar) {
        y5.c cVar2 = this.f42451n;
        if (cVar2 != null) {
            cVar2.c(null);
        }
        this.f42451n = cVar;
        if (cVar != null) {
            cVar.c(this);
        }
    }
}
