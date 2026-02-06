package k0;

import a0.e0;
import a0.m2;
import android.graphics.Matrix;
import android.graphics.Rect;
import android.util.Size;
import j0.l0;
import j0.p0;
import j0.u0;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.CancellationException;
import x.l1;
import x.y0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class r {

    /* renamed from: a  reason: collision with root package name */
    final p0 f31398a;

    /* renamed from: b  reason: collision with root package name */
    final e0 f31399b;

    /* renamed from: c  reason: collision with root package name */
    final e0 f31400c;

    /* renamed from: d  reason: collision with root package name */
    private c f31401d;

    /* renamed from: e  reason: collision with root package name */
    private b f31402e;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class a implements d0.c {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ l0 f31403a;

        a(l0 l0Var) {
            this.f31403a = l0Var;
        }

        @Override // d0.c
        /* renamed from: a */
        public void onSuccess(l1 l1Var) {
            b2.e.g(l1Var);
            r.this.f31398a.a(l1Var);
        }

        @Override // d0.c
        public void onFailure(Throwable th2) {
            if (this.f31403a.s() == 2 && (th2 instanceof CancellationException)) {
                y0.a("DualSurfaceProcessorNode", "Downstream VideoCapture failed to provide Surface.");
                return;
            }
            y0.m("DualSurfaceProcessorNode", "Downstream node failed to provide Surface. Target: " + u0.a(this.f31403a.s()), th2);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static abstract class b {
        public static b d(l0 l0Var, l0 l0Var2, List list) {
            return new k0.b(l0Var, l0Var2, list);
        }

        public abstract List a();

        public abstract l0 b();

        public abstract l0 c();
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class c extends HashMap {
    }

    public r(e0 e0Var, e0 e0Var2, p0 p0Var) {
        this.f31399b = e0Var;
        this.f31400c = e0Var2;
        this.f31398a = p0Var;
    }

    public static /* synthetic */ void a(r rVar) {
        c cVar = rVar.f31401d;
        if (cVar != null) {
            for (V v10 : cVar.values()) {
                v10.i();
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void c(e0 e0Var, e0 e0Var2, l0 l0Var, l0 l0Var2, Map.Entry entry) {
        l0 l0Var3 = (l0) entry.getValue();
        Size e10 = l0Var.r().e();
        Rect a10 = ((d) entry.getKey()).a().a();
        if (!l0Var.t()) {
            e0Var = null;
        }
        l1.a f10 = l1.a.f(e10, a10, e0Var, ((d) entry.getKey()).a().c(), ((d) entry.getKey()).a().g());
        Size e11 = l0Var2.r().e();
        Rect a11 = ((d) entry.getKey()).b().a();
        if (!l0Var2.t()) {
            e0Var2 = null;
        }
        d0.n.j(l0Var3.j(((d) entry.getKey()).a().b(), f10, l1.a.f(e11, a11, e0Var2, ((d) entry.getKey()).b().c(), ((d) entry.getKey()).b().g())), new a(l0Var3), c0.a.d());
    }

    private void e(e0 e0Var, e0 e0Var2, l0 l0Var, l0 l0Var2, Map map) {
        for (final Map.Entry entry : map.entrySet()) {
            final e0 e0Var3 = e0Var;
            final e0 e0Var4 = e0Var2;
            final l0 l0Var3 = l0Var;
            final l0 l0Var4 = l0Var2;
            c(e0Var3, e0Var4, l0Var3, l0Var4, entry);
            ((l0) entry.getValue()).e(new Runnable() { // from class: k0.q
                @Override // java.lang.Runnable
                public final void run() {
                    r.this.c(e0Var3, e0Var4, l0Var3, l0Var4, entry);
                }
            });
            e0Var = e0Var3;
            e0Var2 = e0Var4;
            l0Var = l0Var3;
            l0Var2 = l0Var4;
        }
    }

    private void f(e0 e0Var, l0 l0Var, Map map, boolean z10) {
        this.f31398a.b(l0Var.l(e0Var, z10));
    }

    private l0 h(l0 l0Var, l0.f fVar) {
        boolean z10;
        Rect a10 = fVar.a();
        int c10 = fVar.c();
        boolean g10 = fVar.g();
        Matrix matrix = new Matrix();
        b2.e.a(b0.q.j(b0.q.f(a10, c10), fVar.d()));
        Rect p10 = b0.q.p(fVar.d());
        m2 a11 = l0Var.r().g().e(fVar.d()).a();
        int e10 = fVar.e();
        int b10 = fVar.b();
        int p11 = l0Var.p() - c10;
        if (l0Var.v() != g10) {
            z10 = true;
        } else {
            z10 = false;
        }
        return new l0(e10, b10, a11, matrix, false, p10, p11, -1, z10);
    }

    public void d() {
        this.f31398a.release();
        b0.p.d(new Runnable() { // from class: k0.p
            @Override // java.lang.Runnable
            public final void run() {
                r.a(r.this);
            }
        });
    }

    public c g(b bVar) {
        b0.p.a();
        this.f31402e = bVar;
        this.f31401d = new c();
        l0 b10 = this.f31402e.b();
        l0 c10 = this.f31402e.c();
        for (d dVar : this.f31402e.a()) {
            this.f31401d.put(dVar, h(b10, dVar.a()));
        }
        f(this.f31399b, b10, this.f31401d, true);
        f(this.f31400c, c10, this.f31401d, false);
        e(this.f31399b, this.f31400c, b10, c10, this.f31401d);
        return this.f31401d;
    }
}
