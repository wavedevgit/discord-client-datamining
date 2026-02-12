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
    private final e1 f55942a;

    /* renamed from: b  reason: collision with root package name */
    private final e1.a f55943b;

    /* renamed from: e  reason: collision with root package name */
    private c.a f55946e;

    /* renamed from: f  reason: collision with root package name */
    private c.a f55947f;

    /* renamed from: i  reason: collision with root package name */
    private ListenableFuture f55950i;

    /* renamed from: g  reason: collision with root package name */
    private boolean f55948g = false;

    /* renamed from: h  reason: collision with root package name */
    private boolean f55949h = false;

    /* renamed from: c  reason: collision with root package name */
    private final ListenableFuture f55944c = androidx.concurrent.futures.c.a(new c.InterfaceC0026c() { // from class: z.q0
        @Override // androidx.concurrent.futures.c.InterfaceC0026c
        public final Object a(c.a aVar) {
            return s0.j(s0.this, aVar);
        }
    });

    /* renamed from: d  reason: collision with root package name */
    private final ListenableFuture f55945d = androidx.concurrent.futures.c.a(new c.InterfaceC0026c() { // from class: z.r0
        @Override // androidx.concurrent.futures.c.InterfaceC0026c
        public final Object a(c.a aVar) {
            return s0.k(s0.this, aVar);
        }
    });

    /* JADX INFO: Access modifiers changed from: package-private */
    public s0(e1 e1Var, e1.a aVar) {
        this.f55942a = e1Var;
        this.f55943b = aVar;
    }

    public static /* synthetic */ Object j(s0 s0Var, c.a aVar) {
        s0Var.f55946e = aVar;
        return "CaptureCompleteFuture";
    }

    public static /* synthetic */ Object k(s0 s0Var, c.a aVar) {
        s0Var.f55947f = aVar;
        return "RequestCompleteFuture";
    }

    private void l(x.o0 o0Var) {
        b0.p.a();
        this.f55948g = true;
        ListenableFuture listenableFuture = this.f55950i;
        Objects.requireNonNull(listenableFuture);
        listenableFuture.cancel(true);
        this.f55946e.f(o0Var);
        this.f55947f.c(null);
    }

    private void o() {
        b2.e.j(this.f55944c.isDone(), "onImageCaptured() must be called before onFinalResult()");
    }

    private void r() {
        b2.e.j(!this.f55945d.isDone(), "The callback can only complete once.");
        this.f55947f.c(null);
    }

    private void s(x.o0 o0Var) {
        b0.p.a();
        this.f55942a.s(o0Var);
    }

    @Override // z.u0
    public void a(int i10) {
        b0.p.a();
        if (this.f55948g) {
            return;
        }
        this.f55942a.r(i10);
    }

    @Override // z.u0
    public void b(Bitmap bitmap) {
        b0.p.a();
        if (this.f55948g) {
            return;
        }
        this.f55942a.t(bitmap);
    }

    @Override // z.u0
    public void c() {
        b0.p.a();
        if (!this.f55948g && !this.f55949h) {
            this.f55949h = true;
            this.f55942a.j();
            n0.f l10 = this.f55942a.l();
            if (l10 != null) {
                l10.c();
            }
        }
    }

    @Override // z.u0
    public void d(x.o0 o0Var) {
        b0.p.a();
        if (!this.f55948g) {
            boolean f10 = this.f55942a.f();
            if (!f10) {
                s(o0Var);
            }
            r();
            this.f55946e.f(o0Var);
            if (f10) {
                this.f55943b.b(this.f55942a);
            }
        }
    }

    @Override // z.u0
    public void e(x.o0 o0Var) {
        b0.p.a();
        if (this.f55948g) {
            return;
        }
        o();
        r();
        s(o0Var);
    }

    @Override // z.u0
    public void f(androidx.camera.core.n nVar) {
        b0.p.a();
        if (this.f55948g) {
            nVar.close();
            return;
        }
        o();
        r();
        this.f55942a.u(nVar);
    }

    @Override // z.u0
    public boolean g() {
        return this.f55948g;
    }

    @Override // z.u0
    public void h() {
        b0.p.a();
        if (this.f55948g) {
            return;
        }
        if (!this.f55949h) {
            c();
        }
        this.f55946e.c(null);
    }

    @Override // z.u0
    public void i(n0.h hVar) {
        b0.p.a();
        if (this.f55948g) {
            return;
        }
        o();
        r();
        this.f55942a.v(hVar);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void m(x.o0 o0Var) {
        b0.p.a();
        if (this.f55945d.isDone()) {
            return;
        }
        l(o0Var);
        s(o0Var);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void n() {
        b0.p.a();
        if (this.f55945d.isDone()) {
            return;
        }
        l(new x.o0(3, "The request is aborted silently and retried.", null));
        this.f55943b.b(this.f55942a);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public ListenableFuture p() {
        b0.p.a();
        return this.f55944c;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public ListenableFuture q() {
        b0.p.a();
        return this.f55945d;
    }

    public void t(ListenableFuture listenableFuture) {
        boolean z10;
        b0.p.a();
        if (this.f55950i == null) {
            z10 = true;
        } else {
            z10 = false;
        }
        b2.e.j(z10, "CaptureRequestFuture can only be set once.");
        this.f55950i = listenableFuture;
    }
}
