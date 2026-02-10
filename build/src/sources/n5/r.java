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
    private final String f36960b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f36961c;

    /* renamed from: d  reason: collision with root package name */
    private final com.airbnb.lottie.n f36962d;

    /* renamed from: e  reason: collision with root package name */
    private final o5.m f36963e;

    /* renamed from: f  reason: collision with root package name */
    private boolean f36964f;

    /* renamed from: a  reason: collision with root package name */
    private final Path f36959a = new Path();

    /* renamed from: g  reason: collision with root package name */
    private final b f36965g = new b();

    public r(com.airbnb.lottie.n nVar, u5.b bVar, t5.r rVar) {
        this.f36960b = rVar.b();
        this.f36961c = rVar.d();
        this.f36962d = nVar;
        o5.m a10 = rVar.c().a();
        this.f36963e = a10;
        bVar.i(a10);
        a10.a(this);
    }

    private void g() {
        this.f36964f = false;
        this.f36962d.invalidateSelf();
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
                    this.f36965g.a(uVar);
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
        this.f36963e.r(arrayList);
    }

    @Override // r5.f
    public void d(Object obj, z5.c cVar) {
        if (obj == b0.P) {
            this.f36963e.o(cVar);
        }
    }

    @Override // r5.f
    public void e(r5.e eVar, int i10, List list, r5.e eVar2) {
        y5.i.k(eVar, i10, list, eVar2, this);
    }

    @Override // n5.c
    public String getName() {
        return this.f36960b;
    }

    @Override // n5.m
    public Path t() {
        if (this.f36964f && !this.f36963e.k()) {
            return this.f36959a;
        }
        this.f36959a.reset();
        if (this.f36961c) {
            this.f36964f = true;
            return this.f36959a;
        }
        Path path = (Path) this.f36963e.h();
        if (path == null) {
            return this.f36959a;
        }
        this.f36959a.set(path);
        this.f36959a.setFillType(Path.FillType.EVEN_ODD);
        this.f36965g.b(this.f36959a);
        this.f36964f = true;
        return this.f36959a;
    }
}
