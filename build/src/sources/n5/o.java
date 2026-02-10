package n5;

import android.graphics.Path;
import android.graphics.PointF;
import android.graphics.RectF;
import java.util.List;
import l5.b0;
import o5.a;
import t5.t;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class o implements a.b, k, m {

    /* renamed from: c  reason: collision with root package name */
    private final String f36936c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f36937d;

    /* renamed from: e  reason: collision with root package name */
    private final com.airbnb.lottie.n f36938e;

    /* renamed from: f  reason: collision with root package name */
    private final o5.a f36939f;

    /* renamed from: g  reason: collision with root package name */
    private final o5.a f36940g;

    /* renamed from: h  reason: collision with root package name */
    private final o5.a f36941h;

    /* renamed from: k  reason: collision with root package name */
    private boolean f36944k;

    /* renamed from: a  reason: collision with root package name */
    private final Path f36934a = new Path();

    /* renamed from: b  reason: collision with root package name */
    private final RectF f36935b = new RectF();

    /* renamed from: i  reason: collision with root package name */
    private final b f36942i = new b();

    /* renamed from: j  reason: collision with root package name */
    private o5.a f36943j = null;

    public o(com.airbnb.lottie.n nVar, u5.b bVar, t5.l lVar) {
        this.f36936c = lVar.c();
        this.f36937d = lVar.f();
        this.f36938e = nVar;
        o5.a a10 = lVar.d().a();
        this.f36939f = a10;
        o5.a a11 = lVar.e().a();
        this.f36940g = a11;
        o5.d a12 = lVar.b().a();
        this.f36941h = a12;
        bVar.i(a10);
        bVar.i(a11);
        bVar.i(a12);
        a10.a(this);
        a11.a(this);
        a12.a(this);
    }

    private void g() {
        this.f36944k = false;
        this.f36938e.invalidateSelf();
    }

    @Override // o5.a.b
    public void a() {
        g();
    }

    @Override // n5.c
    public void b(List list, List list2) {
        for (int i10 = 0; i10 < list.size(); i10++) {
            c cVar = (c) list.get(i10);
            if (cVar instanceof u) {
                u uVar = (u) cVar;
                if (uVar.j() == t.a.SIMULTANEOUSLY) {
                    this.f36942i.a(uVar);
                    uVar.d(this);
                }
            }
            if (cVar instanceof q) {
                this.f36943j = ((q) cVar).g();
            }
        }
    }

    @Override // r5.f
    public void d(Object obj, z5.c cVar) {
        if (obj == b0.f35556l) {
            this.f36940g.o(cVar);
        } else if (obj == b0.f35558n) {
            this.f36939f.o(cVar);
        } else if (obj == b0.f35557m) {
            this.f36941h.o(cVar);
        }
    }

    @Override // r5.f
    public void e(r5.e eVar, int i10, List list, r5.e eVar2) {
        y5.i.k(eVar, i10, list, eVar2, this);
    }

    @Override // n5.c
    public String getName() {
        return this.f36936c;
    }

    @Override // n5.m
    public Path t() {
        float q10;
        o5.a aVar;
        if (this.f36944k) {
            return this.f36934a;
        }
        this.f36934a.reset();
        if (this.f36937d) {
            this.f36944k = true;
            return this.f36934a;
        }
        PointF pointF = (PointF) this.f36940g.h();
        float f10 = pointF.x / 2.0f;
        float f11 = pointF.y / 2.0f;
        o5.a aVar2 = this.f36941h;
        if (aVar2 == null) {
            q10 = 0.0f;
        } else {
            q10 = ((o5.d) aVar2).q();
        }
        if (q10 == 0.0f && (aVar = this.f36943j) != null) {
            q10 = Math.min(((Float) aVar.h()).floatValue(), Math.min(f10, f11));
        }
        float min = Math.min(f10, f11);
        if (q10 > min) {
            q10 = min;
        }
        PointF pointF2 = (PointF) this.f36939f.h();
        this.f36934a.moveTo(pointF2.x + f10, (pointF2.y - f11) + q10);
        this.f36934a.lineTo(pointF2.x + f10, (pointF2.y + f11) - q10);
        int i10 = (q10 > 0.0f ? 1 : (q10 == 0.0f ? 0 : -1));
        if (i10 > 0) {
            RectF rectF = this.f36935b;
            float f12 = pointF2.x;
            float f13 = q10 * 2.0f;
            float f14 = pointF2.y;
            rectF.set((f12 + f10) - f13, (f14 + f11) - f13, f12 + f10, f14 + f11);
            this.f36934a.arcTo(this.f36935b, 0.0f, 90.0f, false);
        }
        this.f36934a.lineTo((pointF2.x - f10) + q10, pointF2.y + f11);
        if (i10 > 0) {
            RectF rectF2 = this.f36935b;
            float f15 = pointF2.x;
            float f16 = pointF2.y;
            float f17 = q10 * 2.0f;
            rectF2.set(f15 - f10, (f16 + f11) - f17, (f15 - f10) + f17, f16 + f11);
            this.f36934a.arcTo(this.f36935b, 90.0f, 90.0f, false);
        }
        this.f36934a.lineTo(pointF2.x - f10, (pointF2.y - f11) + q10);
        if (i10 > 0) {
            RectF rectF3 = this.f36935b;
            float f18 = pointF2.x;
            float f19 = pointF2.y;
            float f20 = q10 * 2.0f;
            rectF3.set(f18 - f10, f19 - f11, (f18 - f10) + f20, (f19 - f11) + f20);
            this.f36934a.arcTo(this.f36935b, 180.0f, 90.0f, false);
        }
        this.f36934a.lineTo((pointF2.x + f10) - q10, pointF2.y - f11);
        if (i10 > 0) {
            RectF rectF4 = this.f36935b;
            float f21 = pointF2.x;
            float f22 = q10 * 2.0f;
            float f23 = pointF2.y;
            rectF4.set((f21 + f10) - f22, f23 - f11, f21 + f10, (f23 - f11) + f22);
            this.f36934a.arcTo(this.f36935b, 270.0f, 90.0f, false);
        }
        this.f36934a.close();
        this.f36942i.b(this.f36934a);
        this.f36944k = true;
        return this.f36934a;
    }
}
