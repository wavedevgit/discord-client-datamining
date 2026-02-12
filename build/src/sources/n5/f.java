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
    private final String f36859b;

    /* renamed from: c  reason: collision with root package name */
    private final com.airbnb.lottie.n f36860c;

    /* renamed from: d  reason: collision with root package name */
    private final o5.a f36861d;

    /* renamed from: e  reason: collision with root package name */
    private final o5.a f36862e;

    /* renamed from: f  reason: collision with root package name */
    private final t5.b f36863f;

    /* renamed from: h  reason: collision with root package name */
    private boolean f36865h;

    /* renamed from: a  reason: collision with root package name */
    private final Path f36858a = new Path();

    /* renamed from: g  reason: collision with root package name */
    private final b f36864g = new b();

    public f(com.airbnb.lottie.n nVar, u5.b bVar, t5.b bVar2) {
        this.f36859b = bVar2.b();
        this.f36860c = nVar;
        o5.a a10 = bVar2.d().a();
        this.f36861d = a10;
        o5.a a11 = bVar2.c().a();
        this.f36862e = a11;
        this.f36863f = bVar2;
        bVar.i(a10);
        bVar.i(a11);
        a10.a(this);
        a11.a(this);
    }

    private void g() {
        this.f36865h = false;
        this.f36860c.invalidateSelf();
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
                    this.f36864g.a(uVar);
                    uVar.d(this);
                }
            }
        }
    }

    @Override // r5.f
    public void d(Object obj, z5.c cVar) {
        if (obj == b0.f35556k) {
            this.f36861d.o(cVar);
        } else if (obj == b0.f35559n) {
            this.f36862e.o(cVar);
        }
    }

    @Override // r5.f
    public void e(r5.e eVar, int i10, List list, r5.e eVar2) {
        y5.i.k(eVar, i10, list, eVar2, this);
    }

    @Override // n5.c
    public String getName() {
        return this.f36859b;
    }

    @Override // n5.m
    public Path t() {
        if (this.f36865h) {
            return this.f36858a;
        }
        this.f36858a.reset();
        if (this.f36863f.e()) {
            this.f36865h = true;
            return this.f36858a;
        }
        PointF pointF = (PointF) this.f36861d.h();
        float f10 = pointF.x / 2.0f;
        float f11 = pointF.y / 2.0f;
        float f12 = f10 * 0.55228f;
        float f13 = 0.55228f * f11;
        this.f36858a.reset();
        if (this.f36863f.f()) {
            float f14 = -f11;
            this.f36858a.moveTo(0.0f, f14);
            float f15 = 0.0f - f12;
            float f16 = -f10;
            float f17 = 0.0f - f13;
            this.f36858a.cubicTo(f15, f14, f16, f17, f16, 0.0f);
            float f18 = f13 + 0.0f;
            this.f36858a.cubicTo(f16, f18, f15, f11, 0.0f, f11);
            float f19 = f12 + 0.0f;
            this.f36858a.cubicTo(f19, f11, f10, f18, f10, 0.0f);
            this.f36858a.cubicTo(f10, f17, f19, f14, 0.0f, f14);
        } else {
            float f20 = -f11;
            this.f36858a.moveTo(0.0f, f20);
            float f21 = f12 + 0.0f;
            float f22 = 0.0f - f13;
            this.f36858a.cubicTo(f21, f20, f10, f22, f10, 0.0f);
            float f23 = f13 + 0.0f;
            this.f36858a.cubicTo(f10, f23, f21, f11, 0.0f, f11);
            float f24 = 0.0f - f12;
            float f25 = -f10;
            this.f36858a.cubicTo(f24, f11, f25, f23, f25, 0.0f);
            this.f36858a.cubicTo(f25, f22, f24, f20, 0.0f, f20);
        }
        PointF pointF2 = (PointF) this.f36862e.h();
        this.f36858a.offset(pointF2.x, pointF2.y);
        this.f36858a.close();
        this.f36864g.b(this.f36858a);
        this.f36865h = true;
        return this.f36858a;
    }
}
