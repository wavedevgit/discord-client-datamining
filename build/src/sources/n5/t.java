package n5;

import android.graphics.Canvas;
import android.graphics.ColorFilter;
import android.graphics.Matrix;
import l5.b0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class t extends a {

    /* renamed from: r  reason: collision with root package name */
    private final u5.b f36967r;

    /* renamed from: s  reason: collision with root package name */
    private final String f36968s;

    /* renamed from: t  reason: collision with root package name */
    private final boolean f36969t;

    /* renamed from: u  reason: collision with root package name */
    private final o5.a f36970u;

    /* renamed from: v  reason: collision with root package name */
    private o5.a f36971v;

    public t(com.airbnb.lottie.n nVar, u5.b bVar, t5.s sVar) {
        super(nVar, bVar, sVar.b().d(), sVar.e().d(), sVar.g(), sVar.i(), sVar.j(), sVar.f(), sVar.d());
        this.f36967r = bVar;
        this.f36968s = sVar.h();
        this.f36969t = sVar.k();
        o5.a a10 = sVar.c().a();
        this.f36970u = a10;
        a10.a(this);
        bVar.i(a10);
    }

    @Override // n5.a, r5.f
    public void d(Object obj, z5.c cVar) {
        super.d(obj, cVar);
        if (obj == b0.f35547b) {
            this.f36970u.o(cVar);
        } else if (obj == b0.K) {
            o5.a aVar = this.f36971v;
            if (aVar != null) {
                this.f36967r.H(aVar);
            }
            if (cVar == null) {
                this.f36971v = null;
                return;
            }
            o5.q qVar = new o5.q(cVar);
            this.f36971v = qVar;
            qVar.a(this);
            this.f36967r.i(this.f36970u);
        }
    }

    @Override // n5.c
    public String getName() {
        return this.f36968s;
    }

    @Override // n5.a, n5.e
    public void h(Canvas canvas, Matrix matrix, int i10) {
        if (this.f36969t) {
            return;
        }
        this.f36835i.setColor(((o5.b) this.f36970u).q());
        o5.a aVar = this.f36971v;
        if (aVar != null) {
            this.f36835i.setColorFilter((ColorFilter) aVar.h());
        }
        super.h(canvas, matrix, i10);
    }
}
