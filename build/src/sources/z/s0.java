package z;

import android.graphics.Bitmap;
import androidx.concurrent.futures.c;
import com.google.common.util.concurrent.ListenableFuture;
import java.util.Objects;
import x.n0;
import z.e1;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class s0 implements u0 {

    /* renamed from: a  reason: collision with root package name */
    private final e1 f56510a;

    /* renamed from: b  reason: collision with root package name */
    private final e1.a f56511b;

    /* renamed from: e  reason: collision with root package name */
    private c.a f56514e;

    /* renamed from: f  reason: collision with root package name */
    private c.a f56515f;

    /* renamed from: i  reason: collision with root package name */
    private ListenableFuture f56518i;

    /* renamed from: g  reason: collision with root package name */
    private boolean f56516g = false;

    /* renamed from: h  reason: collision with root package name */
    private boolean f56517h = false;

    /* renamed from: c  reason: collision with root package name */
    private final ListenableFuture f56512c = androidx.concurrent.futures.c.a(new c.InterfaceC0026c() { // from class: z.q0
        @Override // androidx.concurrent.futures.c.InterfaceC0026c
        public final Object a(c.a aVar) {
            return s0.j(s0.this, aVar);
        }
    });

    /* renamed from: d  reason: collision with root package name */
    private final ListenableFuture f56513d = androidx.concurrent.futures.c.a(new c.InterfaceC0026c() { // from class: z.r0
        @Override // androidx.concurrent.futures.c.InterfaceC0026c
        public final Object a(c.a aVar) {
            return s0.k(s0.this, aVar);
        }
    });

    /* JADX INFO: Access modifiers changed from: package-private */
    public s0(e1 e1Var, e1.a aVar) {
        this.f56510a = e1Var;
        this.f56511b = aVar;
    }

    public static /* synthetic */ Object j(s0 s0Var, c.a aVar) {
        s0Var.f56514e = aVar;
        return "CaptureCompleteFuture";
    }

    public static /* synthetic */ Object k(s0 s0Var, c.a aVar) {
        s0Var.f56515f = aVar;
        return "RequestCompleteFuture";
    }

    private void l(x.o0 o0Var) {
        b0.p.a();
        this.f56516g = true;
        ListenableFuture listenableFuture = this.f56518i;
        Objects.requireNonNull(listenableFuture);
        listenableFuture.cancel(true);
        this.f56514e.f(o0Var);
        this.f56515f.c(null);
    }

    private void o() {
        b2.e.j(this.f56512c.isDone(), "onImageCaptured() must be called before onFinalResult()");
    }

    private void r() {
        b2.e.j(!this.f56513d.isDone(), "The callback can only complete once.");
        this.f56515f.c(null);
    }

    private void s(x.o0 o0Var) {
        b0.p.a();
        this.f56510a.s(o0Var);
    }

    @Override // z.u0
    public void a(int i10) {
        b0.p.a();
        if (this.f56516g) {
            return;
        }
        this.f56510a.r(i10);
    }

    @Override // z.u0
    public void b(Bitmap bitmap) {
        b0.p.a();
        if (this.f56516g) {
            return;
        }
        this.f56510a.t(bitmap);
    }

    @Override // z.u0
    public void c() {
        b0.p.a();
        if (!this.f56516g && !this.f56517h) {
            this.f56517h = true;
            this.f56510a.j();
            n0.f l10 = this.f56510a.l();
            if (l10 != null) {
                l10.c();
            }
        }
    }

    @Override // z.u0
    public void d(x.o0 o0Var) {
        b0.p.a();
        if (!this.f56516g) {
            boolean f10 = this.f56510a.f();
            if (!f10) {
                s(o0Var);
            }
            r();
            this.f56514e.f(o0Var);
            if (f10) {
                this.f56511b.b(this.f56510a);
            }
        }
    }

    @Override // z.u0
    public void e(x.o0 o0Var) {
        b0.p.a();
        if (this.f56516g) {
            return;
        }
        o();
        r();
        s(o0Var);
    }

    @Override // z.u0
    public void f(androidx.camera.core.n nVar) {
        b0.p.a();
        if (this.f56516g) {
            nVar.close();
            return;
        }
        o();
        r();
        this.f56510a.u(nVar);
    }

    @Override // z.u0
    public boolean g() {
        return this.f56516g;
    }

    @Override // z.u0
    public void h() {
        b0.p.a();
        if (this.f56516g) {
            return;
        }
        if (!this.f56517h) {
            c();
        }
        this.f56514e.c(null);
    }

    @Override // z.u0
    public void i(n0.h hVar) {
        b0.p.a();
        if (this.f56516g) {
            return;
        }
        o();
        r();
        this.f56510a.v(hVar);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void m(x.o0 o0Var) {
        b0.p.a();
        if (this.f56513d.isDone()) {
            return;
        }
        l(o0Var);
        s(o0Var);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void n() {
        b0.p.a();
        if (this.f56513d.isDone()) {
            return;
        }
        l(new x.o0(3, "The request is aborted silently and retried.", null));
        this.f56511b.b(this.f56510a);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public ListenableFuture p() {
        b0.p.a();
        return this.f56512c;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public ListenableFuture q() {
        b0.p.a();
        return this.f56513d;
    }

    public void t(ListenableFuture listenableFuture) {
        boolean z10;
        b0.p.a();
        if (this.f56518i == null) {
            z10 = true;
        } else {
            z10 = false;
        }
        b2.e.j(z10, "CaptureRequestFuture can only be set once.");
        this.f56518i = listenableFuture;
    }
}
