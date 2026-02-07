package z;

import android.util.Log;
import androidx.camera.core.e;
import com.google.common.util.concurrent.ListenableFuture;
import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.Deque;
import java.util.List;
import java.util.Objects;
import z.e1;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class y0 implements e.a, e1.a {

    /* renamed from: b  reason: collision with root package name */
    final x f55854b;

    /* renamed from: c  reason: collision with root package name */
    y f55855c;

    /* renamed from: d  reason: collision with root package name */
    private s0 f55856d;

    /* renamed from: e  reason: collision with root package name */
    private final List f55857e;

    /* renamed from: a  reason: collision with root package name */
    final Deque f55853a = new ArrayDeque();

    /* renamed from: f  reason: collision with root package name */
    boolean f55858f = false;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class a implements d0.c {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ l f55859a;

        a(l lVar) {
            this.f55859a = lVar;
        }

        @Override // d0.c
        /* renamed from: a */
        public void onSuccess(Void r12) {
            y0.this.f55854b.c();
        }

        @Override // d0.c
        public void onFailure(Throwable th2) {
            if (this.f55859a.b()) {
                return;
            }
            int f10 = ((a0.p0) this.f55859a.a().get(0)).f();
            if (th2 instanceof x.o0) {
                y0.this.f55855c.j(b.c(f10, (x.o0) th2));
            } else {
                y0.this.f55855c.j(b.c(f10, new x.o0(2, "Failed to submit capture request", th2)));
            }
            y0.this.f55854b.c();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static abstract class b {
        /* JADX INFO: Access modifiers changed from: package-private */
        public static b c(int i10, x.o0 o0Var) {
            return new g(i10, o0Var);
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public abstract x.o0 a();

        /* JADX INFO: Access modifiers changed from: package-private */
        public abstract int b();
    }

    public y0(x xVar) {
        b0.p.a();
        this.f55854b = xVar;
        this.f55857e = new ArrayList();
    }

    public static /* synthetic */ void c(y0 y0Var) {
        y0Var.f55856d = null;
        y0Var.g();
    }

    private ListenableFuture l(l lVar) {
        b0.p.a();
        this.f55854b.b();
        ListenableFuture a10 = this.f55854b.a(lVar.a());
        d0.n.j(a10, new a(lVar), c0.a.d());
        return a10;
    }

    private void m(final s0 s0Var) {
        b2.e.i(!f());
        this.f55856d = s0Var;
        s0Var.p().a(new Runnable() { // from class: z.w0
            @Override // java.lang.Runnable
            public final void run() {
                y0.c(y0.this);
            }
        }, c0.a.a());
        this.f55857e.add(s0Var);
        s0Var.q().a(new Runnable() { // from class: z.x0
            @Override // java.lang.Runnable
            public final void run() {
                y0.this.f55857e.remove(s0Var);
            }
        }, c0.a.a());
    }

    @Override // androidx.camera.core.e.a
    public void a(androidx.camera.core.n nVar) {
        c0.a.d().execute(new Runnable() { // from class: z.v0
            @Override // java.lang.Runnable
            public final void run() {
                y0.this.g();
            }
        });
    }

    @Override // z.e1.a
    public void b(e1 e1Var) {
        b0.p.a();
        x.y0.a("TakePictureManager", "Add a new request for retrying.");
        this.f55853a.addFirst(e1Var);
        g();
    }

    public void e() {
        b0.p.a();
        x.o0 o0Var = new x.o0(3, "Camera is closed.", null);
        for (e1 e1Var : this.f55853a) {
            e1Var.s(o0Var);
        }
        this.f55853a.clear();
        for (s0 s0Var : new ArrayList(this.f55857e)) {
            s0Var.m(o0Var);
        }
    }

    boolean f() {
        if (this.f55856d != null) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void g() {
        b0.p.a();
        Log.d("TakePictureManager", "Issue the next TakePictureRequest.");
        if (f()) {
            Log.d("TakePictureManager", "There is already a request in-flight.");
        } else if (this.f55858f) {
            Log.d("TakePictureManager", "The class is paused.");
        } else if (this.f55855c.h() == 0) {
            Log.d("TakePictureManager", "Too many acquire images. Close image to be able to process next.");
        } else {
            e1 e1Var = (e1) this.f55853a.poll();
            if (e1Var == null) {
                Log.d("TakePictureManager", "No new request.");
                return;
            }
            s0 s0Var = new s0(e1Var, this);
            m(s0Var);
            b2.c e10 = this.f55855c.e(e1Var, s0Var, s0Var.p());
            l lVar = (l) e10.f6384a;
            Objects.requireNonNull(lVar);
            p0 p0Var = (p0) e10.f6385b;
            Objects.requireNonNull(p0Var);
            this.f55855c.m(p0Var);
            s0Var.t(l(lVar));
        }
    }

    public void h(e1 e1Var) {
        b0.p.a();
        this.f55853a.offer(e1Var);
        g();
    }

    public void i() {
        b0.p.a();
        this.f55858f = true;
        s0 s0Var = this.f55856d;
        if (s0Var != null) {
            s0Var.n();
        }
    }

    public void j() {
        b0.p.a();
        this.f55858f = false;
        g();
    }

    public void k(y yVar) {
        b0.p.a();
        this.f55855c = yVar;
        yVar.k(this);
    }
}
