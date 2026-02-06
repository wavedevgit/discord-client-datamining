package n5;

import android.graphics.Canvas;
import android.graphics.ColorFilter;
import android.graphics.Matrix;
import l5.a0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class t extends a {

    /* renamed from: r  reason: collision with root package name */
    private final t5.b f38617r;

    /* renamed from: s  reason: collision with root package name */
    private final String f38618s;

    /* renamed from: t  reason: collision with root package name */
    private final boolean f38619t;

    /* renamed from: u  reason: collision with root package name */
    private final o5.a f38620u;

    /* renamed from: v  reason: collision with root package name */
    private o5.a f38621v;

    public t(com.airbnb.lottie.n nVar, t5.b bVar, s5.s sVar) {
        super(nVar, bVar, sVar.b().d(), sVar.e().d(), sVar.g(), sVar.i(), sVar.j(), sVar.f(), sVar.d());
        this.f38617r = bVar;
        this.f38618s = sVar.h();
        this.f38619t = sVar.k();
        o5.a a10 = sVar.c().a();
        this.f38620u = a10;
        a10.a(this);
        bVar.i(a10);
    }

    @Override // n5.a, q5.f
    public void d(Object obj, y5.c cVar) {
        super.d(obj, cVar);
        if (obj == a0.f35766b) {
            this.f38620u.o(cVar);
        } else if (obj == a0.K) {
            o5.a aVar = this.f38621v;
            if (aVar != null) {
                this.f38617r.H(aVar);
            }
            if (cVar == null) {
                this.f38621v = null;
                return;
            }
            o5.q qVar = new o5.q(cVar);
            this.f38621v = qVar;
            qVar.a(this);
            this.f38617r.i(this.f38620u);
        }
    }

    @Override // n5.a, n5.e
    public void g(Canvas canvas, Matrix matrix, int i10) {
        if (this.f38619t) {
            return;
        }
        this.f38485i.setColor(((o5.b) this.f38620u).q());
        o5.a aVar = this.f38621v;
        if (aVar != null) {
            this.f38485i.setColorFilter((ColorFilter) aVar.h());
        }
        super.g(canvas, matrix, i10);
    }

    @Override // n5.c
    public String getName() {
        return this.f38618s;
    }
}
