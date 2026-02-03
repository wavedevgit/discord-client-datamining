package j0;

import a0.m2;
import android.graphics.Matrix;
import android.graphics.Rect;
import android.graphics.RectF;
import android.util.Size;
import androidx.core.util.Consumer;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.CancellationException;
import x.l1;
import x.w1;
import x.y0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class t0 {

    /* renamed from: a  reason: collision with root package name */
    final p0 f31340a;

    /* renamed from: b  reason: collision with root package name */
    final a0.e0 f31341b;

    /* renamed from: c  reason: collision with root package name */
    private c f31342c;

    /* renamed from: d  reason: collision with root package name */
    private b f31343d;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class a implements d0.c {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ l0 f31344a;

        a(l0 l0Var) {
            this.f31344a = l0Var;
        }

        @Override // d0.c
        /* renamed from: a */
        public void onSuccess(l1 l1Var) {
            b2.e.g(l1Var);
            t0.this.f31340a.a(l1Var);
        }

        @Override // d0.c
        public void onFailure(Throwable th2) {
            if (this.f31344a.s() == 2 && (th2 instanceof CancellationException)) {
                y0.a("SurfaceProcessorNode", "Downstream VideoCapture failed to provide Surface.");
                return;
            }
            y0.m("SurfaceProcessorNode", "Downstream node failed to provide Surface. Target: " + u0.a(this.f31344a.s()), th2);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static abstract class b {
        public static b c(l0 l0Var, List list) {
            return new j0.c(l0Var, list);
        }

        public abstract List a();

        public abstract l0 b();
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class c extends HashMap {
    }

    public t0(a0.e0 e0Var, p0 p0Var) {
        this.f31341b = e0Var;
        this.f31340a = p0Var;
    }

    public static /* synthetic */ void b(Map map, w1.h hVar) {
        for (Map.Entry entry : map.entrySet()) {
            int b10 = hVar.b() - ((l0.f) entry.getKey()).c();
            if (((l0.f) entry.getKey()).g()) {
                b10 = -b10;
            }
            ((l0) entry.getValue()).y(b0.q.u(b10), -1);
        }
    }

    public static /* synthetic */ void c(t0 t0Var) {
        c cVar = t0Var.f31342c;
        if (cVar != null) {
            for (V v10 : cVar.values()) {
                v10.i();
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void d(l0 l0Var, Map.Entry entry) {
        a0.e0 e0Var;
        l0 l0Var2 = (l0) entry.getValue();
        Size e10 = l0Var.r().e();
        Rect a10 = ((l0.f) entry.getKey()).a();
        if (l0Var.t()) {
            e0Var = this.f31341b;
        } else {
            e0Var = null;
        }
        d0.n.j(l0Var2.j(((l0.f) entry.getKey()).b(), l1.a.f(e10, a10, e0Var, ((l0.f) entry.getKey()).c(), ((l0.f) entry.getKey()).g()), null), new a(l0Var2), c0.a.d());
    }

    private void g(final l0 l0Var, Map map) {
        for (final Map.Entry entry : map.entrySet()) {
            d(l0Var, entry);
            ((l0) entry.getValue()).e(new Runnable() { // from class: j0.q0
                @Override // java.lang.Runnable
                public final void run() {
                    t0.this.d(l0Var, entry);
                }
            });
        }
    }

    private void h(l0 l0Var) {
        this.f31340a.b(l0Var.k(this.f31341b));
    }

    private l0 k(l0 l0Var, l0.f fVar) {
        Rect p10;
        boolean z10;
        Rect a10 = fVar.a();
        int c10 = fVar.c();
        boolean g10 = fVar.g();
        Matrix matrix = new Matrix(l0Var.q());
        Matrix e10 = b0.q.e(new RectF(a10), b0.q.r(fVar.d()), c10, g10);
        matrix.postConcat(e10);
        b2.e.a(b0.q.j(b0.q.f(a10, c10), fVar.d()));
        if (fVar.j()) {
            b2.e.b(fVar.a().contains(l0Var.n()), String.format("Output crop rect %s must contain input crop rect %s", fVar.a(), l0Var.n()));
            p10 = new Rect();
            RectF rectF = new RectF(l0Var.n());
            e10.mapRect(rectF);
            rectF.round(p10);
        } else {
            p10 = b0.q.p(fVar.d());
        }
        Rect rect = p10;
        m2 a11 = l0Var.r().g().e(fVar.d()).a();
        int e11 = fVar.e();
        int b10 = fVar.b();
        int p11 = l0Var.p() - c10;
        if (l0Var.v() != g10) {
            z10 = true;
        } else {
            z10 = false;
        }
        return new l0(e11, b10, a11, matrix, false, rect, p11, -1, z10);
    }

    public p0 e() {
        return this.f31340a;
    }

    public void f() {
        this.f31340a.release();
        b0.p.d(new Runnable() { // from class: j0.s0
            @Override // java.lang.Runnable
            public final void run() {
                t0.c(t0.this);
            }
        });
    }

    void i(l0 l0Var, final Map map) {
        l0Var.f(new Consumer() { // from class: j0.r0
            @Override // androidx.core.util.Consumer
            public final void accept(Object obj) {
                t0.b(map, (w1.h) obj);
            }
        });
    }

    public c j(b bVar) {
        b0.p.a();
        this.f31343d = bVar;
        this.f31342c = new c();
        l0 b10 = bVar.b();
        for (l0.f fVar : bVar.a()) {
            this.f31342c.put(fVar, k(b10, fVar));
        }
        h(b10);
        g(b10, this.f31342c);
        i(b10, this.f31342c);
        return this.f31342c;
    }
}
