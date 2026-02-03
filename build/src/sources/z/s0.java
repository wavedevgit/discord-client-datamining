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
    private final e1 f55303a;

    /* renamed from: b  reason: collision with root package name */
    private final e1.a f55304b;

    /* renamed from: e  reason: collision with root package name */
    private c.a f55307e;

    /* renamed from: f  reason: collision with root package name */
    private c.a f55308f;

    /* renamed from: i  reason: collision with root package name */
    private ListenableFuture f55311i;

    /* renamed from: g  reason: collision with root package name */
    private boolean f55309g = false;

    /* renamed from: h  reason: collision with root package name */
    private boolean f55310h = false;

    /* renamed from: c  reason: collision with root package name */
    private final ListenableFuture f55305c = androidx.concurrent.futures.c.a(new c.InterfaceC0030c() { // from class: z.q0
        @Override // androidx.concurrent.futures.c.InterfaceC0030c
        public final Object a(c.a aVar) {
            return s0.j(s0.this, aVar);
        }
    });

    /* renamed from: d  reason: collision with root package name */
    private final ListenableFuture f55306d = androidx.concurrent.futures.c.a(new c.InterfaceC0030c() { // from class: z.r0
        @Override // androidx.concurrent.futures.c.InterfaceC0030c
        public final Object a(c.a aVar) {
            return s0.k(s0.this, aVar);
        }
    });

    /* JADX INFO: Access modifiers changed from: package-private */
    public s0(e1 e1Var, e1.a aVar) {
        this.f55303a = e1Var;
        this.f55304b = aVar;
    }

    public static /* synthetic */ Object j(s0 s0Var, c.a aVar) {
        s0Var.f55307e = aVar;
        return "CaptureCompleteFuture";
    }

    public static /* synthetic */ Object k(s0 s0Var, c.a aVar) {
        s0Var.f55308f = aVar;
        return "RequestCompleteFuture";
    }

    private void l(x.o0 o0Var) {
        b0.p.a();
        this.f55309g = true;
        ListenableFuture listenableFuture = this.f55311i;
        Objects.requireNonNull(listenableFuture);
        listenableFuture.cancel(true);
        this.f55307e.f(o0Var);
        this.f55308f.c(null);
    }

    private void o() {
        b2.e.j(this.f55305c.isDone(), "onImageCaptured() must be called before onFinalResult()");
    }

    private void r() {
        b2.e.j(!this.f55306d.isDone(), "The callback can only complete once.");
        this.f55308f.c(null);
    }

    private void s(x.o0 o0Var) {
        b0.p.a();
        this.f55303a.s(o0Var);
    }

    @Override // z.u0
    public void a(int i10) {
        b0.p.a();
        if (this.f55309g) {
            return;
        }
        this.f55303a.r(i10);
    }

    @Override // z.u0
    public void b(Bitmap bitmap) {
        b0.p.a();
        if (this.f55309g) {
            return;
        }
        this.f55303a.t(bitmap);
    }

    @Override // z.u0
    public void c() {
        b0.p.a();
        if (!this.f55309g && !this.f55310h) {
            this.f55310h = true;
            this.f55303a.j();
            n0.f l10 = this.f55303a.l();
            if (l10 != null) {
                l10.c();
            }
        }
    }

    @Override // z.u0
    public void d(x.o0 o0Var) {
        b0.p.a();
        if (!this.f55309g) {
            boolean f10 = this.f55303a.f();
            if (!f10) {
                s(o0Var);
            }
            r();
            this.f55307e.f(o0Var);
            if (f10) {
                this.f55304b.b(this.f55303a);
            }
        }
    }

    @Override // z.u0
    public void e(x.o0 o0Var) {
        b0.p.a();
        if (this.f55309g) {
            return;
        }
        o();
        r();
        s(o0Var);
    }

    @Override // z.u0
    public void f(androidx.camera.core.n nVar) {
        b0.p.a();
        if (this.f55309g) {
            nVar.close();
            return;
        }
        o();
        r();
        this.f55303a.u(nVar);
    }

    @Override // z.u0
    public boolean g() {
        return this.f55309g;
    }

    @Override // z.u0
    public void h() {
        b0.p.a();
        if (this.f55309g) {
            return;
        }
        if (!this.f55310h) {
            c();
        }
        this.f55307e.c(null);
    }

    @Override // z.u0
    public void i(n0.h hVar) {
        b0.p.a();
        if (this.f55309g) {
            return;
        }
        o();
        r();
        this.f55303a.v(hVar);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void m(x.o0 o0Var) {
        b0.p.a();
        if (this.f55306d.isDone()) {
            return;
        }
        l(o0Var);
        s(o0Var);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void n() {
        b0.p.a();
        if (this.f55306d.isDone()) {
            return;
        }
        l(new x.o0(3, "The request is aborted silently and retried.", null));
        this.f55304b.b(this.f55303a);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public ListenableFuture p() {
        b0.p.a();
        return this.f55305c;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public ListenableFuture q() {
        b0.p.a();
        return this.f55306d;
    }

    public void t(ListenableFuture listenableFuture) {
        boolean z10;
        b0.p.a();
        if (this.f55311i == null) {
            z10 = true;
        } else {
            z10 = false;
        }
        b2.e.j(z10, "CaptureRequestFuture can only be set once.");
        this.f55311i = listenableFuture;
    }
}
