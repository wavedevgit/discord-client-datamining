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
    private final String f39796b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f39797c;

    /* renamed from: d  reason: collision with root package name */
    private final com.airbnb.lottie.n f39798d;

    /* renamed from: e  reason: collision with root package name */
    private final o5.m f39799e;

    /* renamed from: f  reason: collision with root package name */
    private boolean f39800f;

    /* renamed from: a  reason: collision with root package name */
    private final Path f39795a = new Path();

    /* renamed from: g  reason: collision with root package name */
    private final b f39801g = new b();

    public r(com.airbnb.lottie.n nVar, t5.b bVar, s5.r rVar) {
        this.f39796b = rVar.b();
        this.f39797c = rVar.d();
        this.f39798d = nVar;
        o5.m a10 = rVar.c().a();
        this.f39799e = a10;
        bVar.i(a10);
        a10.a(this);
    }

    private void f() {
        this.f39800f = false;
        this.f39798d.invalidateSelf();
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
                    this.f39801g.a(uVar);
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
        this.f39799e.r(arrayList);
    }

    @Override // q5.f
    public void c(q5.e eVar, int i10, List list, q5.e eVar2) {
        x5.i.k(eVar, i10, list, eVar2, this);
    }

    @Override // q5.f
    public void d(Object obj, y5.c cVar) {
        if (obj == a0.P) {
            this.f39799e.o(cVar);
        }
    }

    @Override // n5.c
    public String getName() {
        return this.f39796b;
    }

    @Override // n5.m
    public Path q() {
        if (this.f39800f && !this.f39799e.k()) {
            return this.f39795a;
        }
        this.f39795a.reset();
        if (this.f39797c) {
            this.f39800f = true;
            return this.f39795a;
        }
        Path path = (Path) this.f39799e.h();
        if (path == null) {
            return this.f39795a;
        }
        this.f39795a.set(path);
        this.f39795a.setFillType(Path.FillType.EVEN_ODD);
        this.f39801g.b(this.f39795a);
        this.f39800f = true;
        return this.f39795a;
    }
}
