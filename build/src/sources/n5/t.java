package n5;

import android.graphics.Canvas;
import android.graphics.ColorFilter;
import android.graphics.Matrix;
import l5.b0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class t extends a {

    /* renamed from: r  reason: collision with root package name */
    private final u5.b f37535r;

    /* renamed from: s  reason: collision with root package name */
    private final String f37536s;

    /* renamed from: t  reason: collision with root package name */
    private final boolean f37537t;

    /* renamed from: u  reason: collision with root package name */
    private final o5.a f37538u;

    /* renamed from: v  reason: collision with root package name */
    private o5.a f37539v;

    public t(com.airbnb.lottie.n nVar, u5.b bVar, t5.s sVar) {
        super(nVar, bVar, sVar.b().d(), sVar.e().d(), sVar.g(), sVar.i(), sVar.j(), sVar.f(), sVar.d());
        this.f37535r = bVar;
        this.f37536s = sVar.h();
        this.f37537t = sVar.k();
        o5.a a10 = sVar.c().a();
        this.f37538u = a10;
        a10.a(this);
        bVar.i(a10);
    }

    @Override // n5.a, r5.f
    public void d(Object obj, z5.c cVar) {
        super.d(obj, cVar);
        if (obj == b0.f36115b) {
            this.f37538u.o(cVar);
        } else if (obj == b0.K) {
            o5.a aVar = this.f37539v;
            if (aVar != null) {
                this.f37535r.H(aVar);
            }
            if (cVar == null) {
                this.f37539v = null;
                return;
            }
            o5.q qVar = new o5.q(cVar);
            this.f37539v = qVar;
            qVar.a(this);
            this.f37535r.i(this.f37538u);
        }
    }

    @Override // n5.c
    public String getName() {
        return this.f37536s;
    }

    @Override // n5.a, n5.e
    public void h(Canvas canvas, Matrix matrix, int i10) {
        if (this.f37537t) {
            return;
        }
        this.f37403i.setColor(((o5.b) this.f37538u).q());
        o5.a aVar = this.f37539v;
        if (aVar != null) {
            this.f37403i.setColorFilter((ColorFilter) aVar.h());
        }
        super.h(canvas, matrix, i10);
    }
}
