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
    private final e1 f55027a;

    /* renamed from: b  reason: collision with root package name */
    private final e1.a f55028b;

    /* renamed from: e  reason: collision with root package name */
    private c.a f55031e;

    /* renamed from: f  reason: collision with root package name */
    private c.a f55032f;

    /* renamed from: i  reason: collision with root package name */
    private ListenableFuture f55035i;

    /* renamed from: g  reason: collision with root package name */
    private boolean f55033g = false;

    /* renamed from: h  reason: collision with root package name */
    private boolean f55034h = false;

    /* renamed from: c  reason: collision with root package name */
    private final ListenableFuture f55029c = androidx.concurrent.futures.c.a(new c.InterfaceC0029c() { // from class: z.q0
        @Override // androidx.concurrent.futures.c.InterfaceC0029c
        public final Object a(c.a aVar) {
            return s0.j(s0.this, aVar);
        }
    });

    /* renamed from: d  reason: collision with root package name */
    private final ListenableFuture f55030d = androidx.concurrent.futures.c.a(new c.InterfaceC0029c() { // from class: z.r0
        @Override // androidx.concurrent.futures.c.InterfaceC0029c
        public final Object a(c.a aVar) {
            return s0.k(s0.this, aVar);
        }
    });

    /* JADX INFO: Access modifiers changed from: package-private */
    public s0(e1 e1Var, e1.a aVar) {
        this.f55027a = e1Var;
        this.f55028b = aVar;
    }

    public static /* synthetic */ Object j(s0 s0Var, c.a aVar) {
        s0Var.f55031e = aVar;
        return "CaptureCompleteFuture";
    }

    public static /* synthetic */ Object k(s0 s0Var, c.a aVar) {
        s0Var.f55032f = aVar;
        return "RequestCompleteFuture";
    }

    private void l(x.o0 o0Var) {
        b0.p.a();
        this.f55033g = true;
        ListenableFuture listenableFuture = this.f55035i;
        Objects.requireNonNull(listenableFuture);
        listenableFuture.cancel(true);
        this.f55031e.f(o0Var);
        this.f55032f.c(null);
    }

    private void o() {
        b2.e.j(this.f55029c.isDone(), "onImageCaptured() must be called before onFinalResult()");
    }

    private void r() {
        b2.e.j(!this.f55030d.isDone(), "The callback can only complete once.");
        this.f55032f.c(null);
    }

    private void s(x.o0 o0Var) {
        b0.p.a();
        this.f55027a.s(o0Var);
    }

    @Override // z.u0
    public void a(int i10) {
        b0.p.a();
        if (this.f55033g) {
            return;
        }
        this.f55027a.r(i10);
    }

    @Override // z.u0
    public void b(Bitmap bitmap) {
        b0.p.a();
        if (this.f55033g) {
            return;
        }
        this.f55027a.t(bitmap);
    }

    @Override // z.u0
    public void c() {
        b0.p.a();
        if (!this.f55033g && !this.f55034h) {
            this.f55034h = true;
            this.f55027a.j();
            n0.f l10 = this.f55027a.l();
            if (l10 != null) {
                l10.c();
            }
        }
    }

    @Override // z.u0
    public void d(x.o0 o0Var) {
        b0.p.a();
        if (!this.f55033g) {
            boolean f10 = this.f55027a.f();
            if (!f10) {
                s(o0Var);
            }
            r();
            this.f55031e.f(o0Var);
            if (f10) {
                this.f55028b.b(this.f55027a);
            }
        }
    }

    @Override // z.u0
    public void e(x.o0 o0Var) {
        b0.p.a();
        if (this.f55033g) {
            return;
        }
        o();
        r();
        s(o0Var);
    }

    @Override // z.u0
    public void f(androidx.camera.core.n nVar) {
        b0.p.a();
        if (this.f55033g) {
            nVar.close();
            return;
        }
        o();
        r();
        this.f55027a.u(nVar);
    }

    @Override // z.u0
    public boolean g() {
        return this.f55033g;
    }

    @Override // z.u0
    public void h() {
        b0.p.a();
        if (this.f55033g) {
            return;
        }
        if (!this.f55034h) {
            c();
        }
        this.f55031e.c(null);
    }

    @Override // z.u0
    public void i(n0.h hVar) {
        b0.p.a();
        if (this.f55033g) {
            return;
        }
        o();
        r();
        this.f55027a.v(hVar);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void m(x.o0 o0Var) {
        b0.p.a();
        if (this.f55030d.isDone()) {
            return;
        }
        l(o0Var);
        s(o0Var);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void n() {
        b0.p.a();
        if (this.f55030d.isDone()) {
            return;
        }
        l(new x.o0(3, "The request is aborted silently and retried.", null));
        this.f55028b.b(this.f55027a);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public ListenableFuture p() {
        b0.p.a();
        return this.f55029c;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public ListenableFuture q() {
        b0.p.a();
        return this.f55030d;
    }

    public void t(ListenableFuture listenableFuture) {
        boolean z10;
        b0.p.a();
        if (this.f55035i == null) {
            z10 = true;
        } else {
            z10 = false;
        }
        b2.e.j(z10, "CaptureRequestFuture can only be set once.");
        this.f55035i = listenableFuture;
    }
}
