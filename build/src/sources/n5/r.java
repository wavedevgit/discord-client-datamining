package n5;

import android.graphics.Path;
import java.util.ArrayList;
import java.util.List;
import l5.b0;
import o5.a;
import t5.t;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class r implements m, a.b, k {

    /* renamed from: b  reason: collision with root package name */
    private final String f37529b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f37530c;

    /* renamed from: d  reason: collision with root package name */
    private final com.airbnb.lottie.n f37531d;

    /* renamed from: e  reason: collision with root package name */
    private final o5.m f37532e;

    /* renamed from: f  reason: collision with root package name */
    private boolean f37533f;

    /* renamed from: a  reason: collision with root package name */
    private final Path f37528a = new Path();

    /* renamed from: g  reason: collision with root package name */
    private final b f37534g = new b();

    public r(com.airbnb.lottie.n nVar, u5.b bVar, t5.r rVar) {
        this.f37529b = rVar.b();
        this.f37530c = rVar.d();
        this.f37531d = nVar;
        o5.m a10 = rVar.c().a();
        this.f37532e = a10;
        bVar.i(a10);
        a10.a(this);
    }

    private void g() {
        this.f37533f = false;
        this.f37531d.invalidateSelf();
    }

    @Override // o5.a.b
    public void a() {
        g();
    }

    @Override // n5.c
    public void b(List list, List list2) {
        ArrayList arrayList = null;
        for (int i10 = 0; i10 < list.size(); i10++) {
            c cVar = (c) list.get(i10);
            if (cVar instanceof u) {
                u uVar = (u) cVar;
                if (uVar.j() == t.a.SIMULTANEOUSLY) {
                    this.f37534g.a(uVar);
                    uVar.d(this);
                }
            }
            if (cVar instanceof s) {
                if (arrayList == null) {
                    arrayList = new ArrayList();
                }
                arrayList.add((s) cVar);
            }
        }
        this.f37532e.r(arrayList);
    }

    @Override // r5.f
    public void d(Object obj, z5.c cVar) {
        if (obj == b0.P) {
            this.f37532e.o(cVar);
        }
    }

    @Override // r5.f
    public void e(r5.e eVar, int i10, List list, r5.e eVar2) {
        y5.i.k(eVar, i10, list, eVar2, this);
    }

    @Override // n5.c
    public String getName() {
        return this.f37529b;
    }

    @Override // n5.m
    public Path t() {
        if (this.f37533f && !this.f37532e.k()) {
            return this.f37528a;
        }
        this.f37528a.reset();
        if (this.f37530c) {
            this.f37533f = true;
            return this.f37528a;
        }
        Path path = (Path) this.f37532e.h();
        if (path == null) {
            return this.f37528a;
        }
        this.f37528a.set(path);
        this.f37528a.setFillType(Path.FillType.EVEN_ODD);
        this.f37534g.b(this.f37528a);
        this.f37533f = true;
        return this.f37528a;
    }
}
