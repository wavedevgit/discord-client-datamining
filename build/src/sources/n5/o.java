package n5;

import android.graphics.Path;
import android.graphics.PointF;
import android.graphics.RectF;
import java.util.List;
import l5.a0;
import o5.a;
import s5.t;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class o implements a.b, k, m {

    /* renamed from: c  reason: collision with root package name */
    private final String f39854c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f39855d;

    /* renamed from: e  reason: collision with root package name */
    private final com.airbnb.lottie.n f39856e;

    /* renamed from: f  reason: collision with root package name */
    private final o5.a f39857f;

    /* renamed from: g  reason: collision with root package name */
    private final o5.a f39858g;

    /* renamed from: h  reason: collision with root package name */
    private final o5.a f39859h;

    /* renamed from: k  reason: collision with root package name */
    private boolean f39862k;

    /* renamed from: a  reason: collision with root package name */
    private final Path f39852a = new Path();

    /* renamed from: b  reason: collision with root package name */
    private final RectF f39853b = new RectF();

    /* renamed from: i  reason: collision with root package name */
    private final b f39860i = new b();

    /* renamed from: j  reason: collision with root package name */
    private o5.a f39861j = null;

    public o(com.airbnb.lottie.n nVar, t5.b bVar, s5.l lVar) {
        this.f39854c = lVar.c();
        this.f39855d = lVar.f();
        this.f39856e = nVar;
        o5.a a10 = lVar.d().a();
        this.f39857f = a10;
        o5.a a11 = lVar.e().a();
        this.f39858g = a11;
        o5.a a12 = lVar.b().a();
        this.f39859h = a12;
        bVar.i(a10);
        bVar.i(a11);
        bVar.i(a12);
        a10.a(this);
        a11.a(this);
        a12.a(this);
    }

    private void f() {
        this.f39862k = false;
        this.f39856e.invalidateSelf();
    }

    @Override // o5.a.b
    public void a() {
        f();
    }

    @Override // n5.c
    public void b(List list, List list2) {
        for (int i10 = 0; i10 < list.size(); i10++) {
            c cVar = (c) list.get(i10);
            if (cVar instanceof u) {
                u uVar = (u) cVar;
                if (uVar.j() == t.a.SIMULTANEOUSLY) {
                    this.f39860i.a(uVar);
                    uVar.c(this);
                }
            }
            if (cVar instanceof q) {
                this.f39861j = ((q) cVar).f();
            }
        }
    }

    @Override // q5.f
    public void c(q5.e eVar, int i10, List list, q5.e eVar2) {
        x5.i.k(eVar, i10, list, eVar2, this);
    }

    @Override // q5.f
    public void d(Object obj, y5.c cVar) {
        if (obj == a0.f36857l) {
            this.f39858g.o(cVar);
        } else if (obj == a0.f36859n) {
            this.f39857f.o(cVar);
        } else if (obj == a0.f36858m) {
            this.f39859h.o(cVar);
        }
    }

    @Override // n5.c
    public String getName() {
        return this.f39854c;
    }

    @Override // n5.m
    public Path q() {
        float q10;
        o5.a aVar;
        if (this.f39862k) {
            return this.f39852a;
        }
        this.f39852a.reset();
        if (this.f39855d) {
            this.f39862k = true;
            return this.f39852a;
        }
        PointF pointF = (PointF) this.f39858g.h();
        float f10 = pointF.x / 2.0f;
        float f11 = pointF.y / 2.0f;
        o5.a aVar2 = this.f39859h;
        if (aVar2 == null) {
            q10 = 0.0f;
        } else {
            q10 = ((o5.d) aVar2).q();
        }
        if (q10 == 0.0f && (aVar = this.f39861j) != null) {
            q10 = Math.min(((Float) aVar.h()).floatValue(), Math.min(f10, f11));
        }
        float min = Math.min(f10, f11);
        if (q10 > min) {
            q10 = min;
        }
        PointF pointF2 = (PointF) this.f39857f.h();
        this.f39852a.moveTo(pointF2.x + f10, (pointF2.y - f11) + q10);
        this.f39852a.lineTo(pointF2.x + f10, (pointF2.y + f11) - q10);
        int i10 = (q10 > 0.0f ? 1 : (q10 == 0.0f ? 0 : -1));
        if (i10 > 0) {
            RectF rectF = this.f39853b;
            float f12 = pointF2.x;
            float f13 = q10 * 2.0f;
            float f14 = pointF2.y;
            rectF.set((f12 + f10) - f13, (f14 + f11) - f13, f12 + f10, f14 + f11);
            this.f39852a.arcTo(this.f39853b, 0.0f, 90.0f, false);
        }
        this.f39852a.lineTo((pointF2.x - f10) + q10, pointF2.y + f11);
        if (i10 > 0) {
            RectF rectF2 = this.f39853b;
            float f15 = pointF2.x;
            float f16 = pointF2.y;
            float f17 = q10 * 2.0f;
            rectF2.set(f15 - f10, (f16 + f11) - f17, (f15 - f10) + f17, f16 + f11);
            this.f39852a.arcTo(this.f39853b, 90.0f, 90.0f, false);
        }
        this.f39852a.lineTo(pointF2.x - f10, (pointF2.y - f11) + q10);
        if (i10 > 0) {
            RectF rectF3 = this.f39853b;
            float f18 = pointF2.x;
            float f19 = pointF2.y;
            float f20 = q10 * 2.0f;
            rectF3.set(f18 - f10, f19 - f11, (f18 - f10) + f20, (f19 - f11) + f20);
            this.f39852a.arcTo(this.f39853b, 180.0f, 90.0f, false);
        }
        this.f39852a.lineTo((pointF2.x + f10) - q10, pointF2.y - f11);
        if (i10 > 0) {
            RectF rectF4 = this.f39853b;
            float f21 = pointF2.x;
            float f22 = q10 * 2.0f;
            float f23 = pointF2.y;
            rectF4.set((f21 + f10) - f22, f23 - f11, f21 + f10, (f23 - f11) + f22);
            this.f39852a.arcTo(this.f39853b, 270.0f, 90.0f, false);
        }
        this.f39852a.close();
        this.f39860i.b(this.f39852a);
        this.f39862k = true;
        return this.f39852a;
    }
}
