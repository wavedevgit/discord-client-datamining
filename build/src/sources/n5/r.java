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
    private final String f38659b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f38660c;

    /* renamed from: d  reason: collision with root package name */
    private final com.airbnb.lottie.n f38661d;

    /* renamed from: e  reason: collision with root package name */
    private final o5.m f38662e;

    /* renamed from: f  reason: collision with root package name */
    private boolean f38663f;

    /* renamed from: a  reason: collision with root package name */
    private final Path f38658a = new Path();

    /* renamed from: g  reason: collision with root package name */
    private final b f38664g = new b();

    public r(com.airbnb.lottie.n nVar, t5.b bVar, s5.r rVar) {
        this.f38659b = rVar.b();
        this.f38660c = rVar.d();
        this.f38661d = nVar;
        o5.m a10 = rVar.c().a();
        this.f38662e = a10;
        bVar.i(a10);
        a10.a(this);
    }

    private void f() {
        this.f38663f = false;
        this.f38661d.invalidateSelf();
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
                    this.f38664g.a(uVar);
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
        this.f38662e.r(arrayList);
    }

    @Override // q5.f
    public void c(q5.e eVar, int i10, List list, q5.e eVar2) {
        x5.i.k(eVar, i10, list, eVar2, this);
    }

    @Override // q5.f
    public void d(Object obj, y5.c cVar) {
        if (obj == a0.P) {
            this.f38662e.o(cVar);
        }
    }

    @Override // n5.c
    public String getName() {
        return this.f38659b;
    }

    @Override // n5.m
    public Path t() {
        if (this.f38663f && !this.f38662e.k()) {
            return this.f38658a;
        }
        this.f38658a.reset();
        if (this.f38660c) {
            this.f38663f = true;
            return this.f38658a;
        }
        Path path = (Path) this.f38662e.h();
        if (path == null) {
            return this.f38658a;
        }
        this.f38658a.set(path);
        this.f38658a.setFillType(Path.FillType.EVEN_ODD);
        this.f38664g.b(this.f38658a);
        this.f38663f = true;
        return this.f38658a;
    }
}
