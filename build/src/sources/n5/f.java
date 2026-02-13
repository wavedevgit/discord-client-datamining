package n5;

import android.graphics.Path;
import android.graphics.PointF;
import java.util.List;
import l5.b0;
import o5.a;
import t5.t;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class f implements m, a.b, k {

    /* renamed from: b  reason: collision with root package name */
    private final String f37427b;

    /* renamed from: c  reason: collision with root package name */
    private final com.airbnb.lottie.n f37428c;

    /* renamed from: d  reason: collision with root package name */
    private final o5.a f37429d;

    /* renamed from: e  reason: collision with root package name */
    private final o5.a f37430e;

    /* renamed from: f  reason: collision with root package name */
    private final t5.b f37431f;

    /* renamed from: h  reason: collision with root package name */
    private boolean f37433h;

    /* renamed from: a  reason: collision with root package name */
    private final Path f37426a = new Path();

    /* renamed from: g  reason: collision with root package name */
    private final b f37432g = new b();

    public f(com.airbnb.lottie.n nVar, u5.b bVar, t5.b bVar2) {
        this.f37427b = bVar2.b();
        this.f37428c = nVar;
        o5.a a10 = bVar2.d().a();
        this.f37429d = a10;
        o5.a a11 = bVar2.c().a();
        this.f37430e = a11;
        this.f37431f = bVar2;
        bVar.i(a10);
        bVar.i(a11);
        a10.a(this);
        a11.a(this);
    }

    private void g() {
        this.f37433h = false;
        this.f37428c.invalidateSelf();
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
                    this.f37432g.a(uVar);
                    uVar.d(this);
                }
            }
        }
    }

    @Override // r5.f
    public void d(Object obj, z5.c cVar) {
        if (obj == b0.f36124k) {
            this.f37429d.o(cVar);
        } else if (obj == b0.f36127n) {
            this.f37430e.o(cVar);
        }
    }

    @Override // r5.f
    public void e(r5.e eVar, int i10, List list, r5.e eVar2) {
        y5.i.k(eVar, i10, list, eVar2, this);
    }

    @Override // n5.c
    public String getName() {
        return this.f37427b;
    }

    @Override // n5.m
    public Path t() {
        if (this.f37433h) {
            return this.f37426a;
        }
        this.f37426a.reset();
        if (this.f37431f.e()) {
            this.f37433h = true;
            return this.f37426a;
        }
        PointF pointF = (PointF) this.f37429d.h();
        float f10 = pointF.x / 2.0f;
        float f11 = pointF.y / 2.0f;
        float f12 = f10 * 0.55228f;
        float f13 = 0.55228f * f11;
        this.f37426a.reset();
        if (this.f37431f.f()) {
            float f14 = -f11;
            this.f37426a.moveTo(0.0f, f14);
            float f15 = 0.0f - f12;
            float f16 = -f10;
            float f17 = 0.0f - f13;
            this.f37426a.cubicTo(f15, f14, f16, f17, f16, 0.0f);
            float f18 = f13 + 0.0f;
            this.f37426a.cubicTo(f16, f18, f15, f11, 0.0f, f11);
            float f19 = f12 + 0.0f;
            this.f37426a.cubicTo(f19, f11, f10, f18, f10, 0.0f);
            this.f37426a.cubicTo(f10, f17, f19, f14, 0.0f, f14);
        } else {
            float f20 = -f11;
            this.f37426a.moveTo(0.0f, f20);
            float f21 = f12 + 0.0f;
            float f22 = 0.0f - f13;
            this.f37426a.cubicTo(f21, f20, f10, f22, f10, 0.0f);
            float f23 = f13 + 0.0f;
            this.f37426a.cubicTo(f10, f23, f21, f11, 0.0f, f11);
            float f24 = 0.0f - f12;
            float f25 = -f10;
            this.f37426a.cubicTo(f24, f11, f25, f23, f25, 0.0f);
            this.f37426a.cubicTo(f25, f22, f24, f20, 0.0f, f20);
        }
        PointF pointF2 = (PointF) this.f37430e.h();
        this.f37426a.offset(pointF2.x, pointF2.y);
        this.f37426a.close();
        this.f37432g.b(this.f37426a);
        this.f37433h = true;
        return this.f37426a;
    }
}
