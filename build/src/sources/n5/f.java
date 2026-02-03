package n5;

import android.graphics.Path;
import android.graphics.PointF;
import java.util.List;
import l5.a0;
import o5.a;
import s5.t;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class f implements m, a.b, k {

    /* renamed from: b  reason: collision with root package name */
    private final String f39694b;

    /* renamed from: c  reason: collision with root package name */
    private final com.airbnb.lottie.n f39695c;

    /* renamed from: d  reason: collision with root package name */
    private final o5.a f39696d;

    /* renamed from: e  reason: collision with root package name */
    private final o5.a f39697e;

    /* renamed from: f  reason: collision with root package name */
    private final s5.b f39698f;

    /* renamed from: h  reason: collision with root package name */
    private boolean f39700h;

    /* renamed from: a  reason: collision with root package name */
    private final Path f39693a = new Path();

    /* renamed from: g  reason: collision with root package name */
    private final b f39699g = new b();

    public f(com.airbnb.lottie.n nVar, t5.b bVar, s5.b bVar2) {
        this.f39694b = bVar2.b();
        this.f39695c = nVar;
        o5.a a10 = bVar2.d().a();
        this.f39696d = a10;
        o5.a a11 = bVar2.c().a();
        this.f39697e = a11;
        this.f39698f = bVar2;
        bVar.i(a10);
        bVar.i(a11);
        a10.a(this);
        a11.a(this);
    }

    private void f() {
        this.f39700h = false;
        this.f39695c.invalidateSelf();
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
                    this.f39699g.a(uVar);
                    uVar.c(this);
                }
            }
        }
    }

    @Override // q5.f
    public void c(q5.e eVar, int i10, List list, q5.e eVar2) {
        x5.i.k(eVar, i10, list, eVar2, this);
    }

    @Override // q5.f
    public void d(Object obj, y5.c cVar) {
        if (obj == a0.f36455k) {
            this.f39696d.o(cVar);
        } else if (obj == a0.f36458n) {
            this.f39697e.o(cVar);
        }
    }

    @Override // n5.c
    public String getName() {
        return this.f39694b;
    }

    @Override // n5.m
    public Path q() {
        if (this.f39700h) {
            return this.f39693a;
        }
        this.f39693a.reset();
        if (this.f39698f.e()) {
            this.f39700h = true;
            return this.f39693a;
        }
        PointF pointF = (PointF) this.f39696d.h();
        float f10 = pointF.x / 2.0f;
        float f11 = pointF.y / 2.0f;
        float f12 = f10 * 0.55228f;
        float f13 = 0.55228f * f11;
        this.f39693a.reset();
        if (this.f39698f.f()) {
            float f14 = -f11;
            this.f39693a.moveTo(0.0f, f14);
            float f15 = 0.0f - f12;
            float f16 = -f10;
            float f17 = 0.0f - f13;
            this.f39693a.cubicTo(f15, f14, f16, f17, f16, 0.0f);
            float f18 = f13 + 0.0f;
            this.f39693a.cubicTo(f16, f18, f15, f11, 0.0f, f11);
            float f19 = f12 + 0.0f;
            this.f39693a.cubicTo(f19, f11, f10, f18, f10, 0.0f);
            this.f39693a.cubicTo(f10, f17, f19, f14, 0.0f, f14);
        } else {
            float f20 = -f11;
            this.f39693a.moveTo(0.0f, f20);
            float f21 = f12 + 0.0f;
            float f22 = 0.0f - f13;
            this.f39693a.cubicTo(f21, f20, f10, f22, f10, 0.0f);
            float f23 = f13 + 0.0f;
            this.f39693a.cubicTo(f10, f23, f21, f11, 0.0f, f11);
            float f24 = 0.0f - f12;
            float f25 = -f10;
            this.f39693a.cubicTo(f24, f11, f25, f23, f25, 0.0f);
            this.f39693a.cubicTo(f25, f22, f24, f20, 0.0f, f20);
        }
        PointF pointF2 = (PointF) this.f39697e.h();
        this.f39693a.offset(pointF2.x, pointF2.y);
        this.f39693a.close();
        this.f39699g.b(this.f39693a);
        this.f39700h = true;
        return this.f39693a;
    }
}
