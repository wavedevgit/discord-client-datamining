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
    private final String f39256b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f39257c;

    /* renamed from: d  reason: collision with root package name */
    private final com.airbnb.lottie.n f39258d;

    /* renamed from: e  reason: collision with root package name */
    private final o5.m f39259e;

    /* renamed from: f  reason: collision with root package name */
    private boolean f39260f;

    /* renamed from: a  reason: collision with root package name */
    private final Path f39255a = new Path();

    /* renamed from: g  reason: collision with root package name */
    private final b f39261g = new b();

    public r(com.airbnb.lottie.n nVar, t5.b bVar, s5.r rVar) {
        this.f39256b = rVar.b();
        this.f39257c = rVar.d();
        this.f39258d = nVar;
        o5.m a10 = rVar.c().a();
        this.f39259e = a10;
        bVar.i(a10);
        a10.a(this);
    }

    private void f() {
        this.f39260f = false;
        this.f39258d.invalidateSelf();
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
                    this.f39261g.a(uVar);
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
        this.f39259e.r(arrayList);
    }

    @Override // q5.f
    public void c(q5.e eVar, int i10, List list, q5.e eVar2) {
        x5.i.k(eVar, i10, list, eVar2, this);
    }

    @Override // q5.f
    public void d(Object obj, y5.c cVar) {
        if (obj == a0.P) {
            this.f39259e.o(cVar);
        }
    }

    @Override // n5.c
    public String getName() {
        return this.f39256b;
    }

    @Override // n5.m
    public Path r() {
        if (this.f39260f && !this.f39259e.k()) {
            return this.f39255a;
        }
        this.f39255a.reset();
        if (this.f39257c) {
            this.f39260f = true;
            return this.f39255a;
        }
        Path path = (Path) this.f39259e.h();
        if (path == null) {
            return this.f39255a;
        }
        this.f39255a.set(path);
        this.f39255a.setFillType(Path.FillType.EVEN_ODD);
        this.f39261g.b(this.f39255a);
        this.f39260f = true;
        return this.f39255a;
    }
}
