package n5;

import android.graphics.Path;
import java.util.ArrayList;
import java.util.List;
import l5.a0;
import o5.a;
import s5.t;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class r implements m, a.b, k {

    /* renamed from: b  reason: collision with root package name */
    private final String f39878b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f39879c;

    /* renamed from: d  reason: collision with root package name */
    private final com.airbnb.lottie.n f39880d;

    /* renamed from: e  reason: collision with root package name */
    private final o5.m f39881e;

    /* renamed from: f  reason: collision with root package name */
    private boolean f39882f;

    /* renamed from: a  reason: collision with root package name */
    private final Path f39877a = new Path();

    /* renamed from: g  reason: collision with root package name */
    private final b f39883g = new b();

    public r(com.airbnb.lottie.n nVar, t5.b bVar, s5.r rVar) {
        this.f39878b = rVar.b();
        this.f39879c = rVar.d();
        this.f39880d = nVar;
        o5.m a10 = rVar.c().a();
        this.f39881e = a10;
        bVar.i(a10);
        a10.a(this);
    }

    private void f() {
        this.f39882f = false;
        this.f39880d.invalidateSelf();
    }

    @Override // o5.a.b
    public void a() {
        f();
    }

    @Override // n5.c
    public void b(List list, List list2) {
        ArrayList arrayList = null;
        for (int i10 = 0; i10 < list.size(); i10++) {
            c cVar = (c) list.get(i10);
            if (cVar instanceof u) {
                u uVar = (u) cVar;
                if (uVar.j() == t.a.SIMULTANEOUSLY) {
                    this.f39883g.a(uVar);
                    uVar.c(this);
                }
            }
            if (cVar instanceof s) {
                if (arrayList == null) {
                    arrayList = new ArrayList();
                }
                arrayList.add((s) cVar);
            }
        }
        this.f39881e.r(arrayList);
    }

    @Override // q5.f
    public void c(q5.e eVar, int i10, List list, q5.e eVar2) {
        x5.i.k(eVar, i10, list, eVar2, this);
    }

    @Override // q5.f
    public void d(Object obj, y5.c cVar) {
        if (obj == a0.P) {
            this.f39881e.o(cVar);
        }
    }

    @Override // n5.c
    public String getName() {
        return this.f39878b;
    }

    @Override // n5.m
    public Path q() {
        if (this.f39882f && !this.f39881e.k()) {
            return this.f39877a;
        }
        this.f39877a.reset();
        if (this.f39879c) {
            this.f39882f = true;
            return this.f39877a;
        }
        Path path = (Path) this.f39881e.h();
        if (path == null) {
            return this.f39877a;
        }
        this.f39877a.set(path);
        this.f39877a.setFillType(Path.FillType.EVEN_ODD);
        this.f39883g.b(this.f39877a);
        this.f39882f = true;
        return this.f39877a;
    }
}
