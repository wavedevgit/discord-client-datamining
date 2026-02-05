package androidx.camera.view;

import android.graphics.Bitmap;
import android.graphics.SurfaceTexture;
import android.util.Size;
import android.view.Surface;
import android.view.TextureView;
import android.view.View;
import android.widget.FrameLayout;
import androidx.camera.view.i;
import androidx.concurrent.futures.c;
import androidx.core.util.Consumer;
import com.google.common.util.concurrent.ListenableFuture;
import java.util.Objects;
import java.util.concurrent.Executor;
import java.util.concurrent.atomic.AtomicReference;
import x.w1;
import x.y0;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class t extends i {

    /* renamed from: e  reason: collision with root package name */
    TextureView f2266e;

    /* renamed from: f  reason: collision with root package name */
    SurfaceTexture f2267f;

    /* renamed from: g  reason: collision with root package name */
    ListenableFuture f2268g;

    /* renamed from: h  reason: collision with root package name */
    w1 f2269h;

    /* renamed from: i  reason: collision with root package name */
    boolean f2270i;

    /* renamed from: j  reason: collision with root package name */
    SurfaceTexture f2271j;

    /* renamed from: k  reason: collision with root package name */
    AtomicReference f2272k;

    /* renamed from: l  reason: collision with root package name */
    i.a f2273l;

    /* renamed from: m  reason: collision with root package name */
    Executor f2274m;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class a implements TextureView.SurfaceTextureListener {

        /* renamed from: androidx.camera.view.t$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        class C0026a implements d0.c {

            /* renamed from: a  reason: collision with root package name */
            final /* synthetic */ SurfaceTexture f2276a;

            C0026a(SurfaceTexture surfaceTexture) {
                this.f2276a = surfaceTexture;
            }

            @Override // d0.c
            /* renamed from: a */
            public void onSuccess(w1.g gVar) {
                boolean z10;
                if (gVar.a() != 3) {
                    z10 = true;
                } else {
                    z10 = false;
                }
                b2.e.j(z10, "Unexpected result from SurfaceRequest. Surface was provided twice.");
                y0.a("TextureViewImpl", "SurfaceTexture about to manually be destroyed");
                this.f2276a.release();
                t tVar = t.this;
                if (tVar.f2271j != null) {
                    tVar.f2271j = null;
                }
            }

            @Override // d0.c
            public void onFailure(Throwable th2) {
                throw new IllegalStateException("SurfaceReleaseFuture did not complete nicely.", th2);
            }
        }

        a() {
        }

        @Override // android.view.TextureView.SurfaceTextureListener
        public void onSurfaceTextureAvailable(SurfaceTexture surfaceTexture, int i10, int i11) {
            y0.a("TextureViewImpl", "SurfaceTexture available. Size: " + i10 + "x" + i11);
            t tVar = t.this;
            tVar.f2267f = surfaceTexture;
            if (tVar.f2268g != null) {
                b2.e.g(tVar.f2269h);
                y0.a("TextureViewImpl", "Surface invalidated " + t.this.f2269h);
                t.this.f2269h.m().d();
                return;
            }
            tVar.q();
        }

        @Override // android.view.TextureView.SurfaceTextureListener
        public boolean onSurfaceTextureDestroyed(SurfaceTexture surfaceTexture) {
            t tVar = t.this;
            tVar.f2267f = null;
            ListenableFuture listenableFuture = tVar.f2268g;
            if (listenableFuture != null) {
                d0.n.j(listenableFuture, new C0026a(surfaceTexture), androidx.core.content.a.h(t.this.f2266e.getContext()));
                t.this.f2271j = surfaceTexture;
                return false;
            }
            y0.a("TextureViewImpl", "SurfaceTexture about to be destroyed");
            return true;
        }

        @Override // android.view.TextureView.SurfaceTextureListener
        public void onSurfaceTextureSizeChanged(SurfaceTexture surfaceTexture, int i10, int i11) {
            y0.a("TextureViewImpl", "SurfaceTexture size changed: " + i10 + "x" + i11);
        }

        @Override // android.view.TextureView.SurfaceTextureListener
        public void onSurfaceTextureUpdated(SurfaceTexture surfaceTexture) {
            c.a aVar = (c.a) t.this.f2272k.getAndSet(null);
            if (aVar != null) {
                aVar.c(null);
            }
            t.this.getClass();
            Executor executor = t.this.f2274m;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public t(FrameLayout frameLayout, e eVar) {
        super(frameLayout, eVar);
        this.f2270i = false;
        this.f2272k = new AtomicReference();
    }

    public static /* synthetic */ Object j(t tVar, Surface surface, final c.a aVar) {
        tVar.getClass();
        y0.a("TextureViewImpl", "Surface set on Preview.");
        w1 w1Var = tVar.f2269h;
        Executor a10 = c0.a.a();
        Objects.requireNonNull(aVar);
        w1Var.s(surface, a10, new Consumer() { // from class: p0.i
            @Override // androidx.core.util.Consumer
            public final void accept(Object obj) {
                c.a.this.c((w1.g) obj);
            }
        });
        return "provideSurface[request=" + tVar.f2269h + " surface=" + surface + "]";
    }

    public static /* synthetic */ void k(t tVar, Surface surface, ListenableFuture listenableFuture, w1 w1Var) {
        tVar.getClass();
        y0.a("TextureViewImpl", "Safe to release surface.");
        tVar.o();
        surface.release();
        if (tVar.f2268g == listenableFuture) {
            tVar.f2268g = null;
        }
        if (tVar.f2269h == w1Var) {
            tVar.f2269h = null;
        }
    }

    public static /* synthetic */ void l(t tVar, w1 w1Var) {
        w1 w1Var2 = tVar.f2269h;
        if (w1Var2 != null && w1Var2 == w1Var) {
            tVar.f2269h = null;
            tVar.f2268g = null;
        }
        tVar.o();
    }

    public static /* synthetic */ Object m(t tVar, c.a aVar) {
        tVar.f2272k.set(aVar);
        return "textureViewImpl_waitForNextFrame";
    }

    private void o() {
        i.a aVar = this.f2273l;
        if (aVar != null) {
            aVar.a();
            this.f2273l = null;
        }
    }

    private void p() {
        if (this.f2270i && this.f2271j != null) {
            SurfaceTexture surfaceTexture = this.f2266e.getSurfaceTexture();
            SurfaceTexture surfaceTexture2 = this.f2271j;
            if (surfaceTexture != surfaceTexture2) {
                this.f2266e.setSurfaceTexture(surfaceTexture2);
                this.f2271j = null;
                this.f2270i = false;
            }
        }
    }

    @Override // androidx.camera.view.i
    View b() {
        return this.f2266e;
    }

    @Override // androidx.camera.view.i
    Bitmap c() {
        TextureView textureView = this.f2266e;
        if (textureView != null && textureView.isAvailable()) {
            return this.f2266e.getBitmap();
        }
        return null;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // androidx.camera.view.i
    public void d() {
        p();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // androidx.camera.view.i
    public void e() {
        this.f2270i = true;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // androidx.camera.view.i
    public void g(final w1 w1Var, i.a aVar) {
        this.f2232a = w1Var.o();
        this.f2273l = aVar;
        n();
        w1 w1Var2 = this.f2269h;
        if (w1Var2 != null) {
            w1Var2.v();
        }
        this.f2269h = w1Var;
        w1Var.j(androidx.core.content.a.h(this.f2266e.getContext()), new Runnable() { // from class: androidx.camera.view.p
            @Override // java.lang.Runnable
            public final void run() {
                t.l(t.this, w1Var);
            }
        });
        q();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // androidx.camera.view.i
    public ListenableFuture i() {
        return androidx.concurrent.futures.c.a(new c.InterfaceC0029c() { // from class: androidx.camera.view.q
            @Override // androidx.concurrent.futures.c.InterfaceC0029c
            public final Object a(c.a aVar) {
                return t.m(t.this, aVar);
            }
        });
    }

    public void n() {
        b2.e.g(this.f2233b);
        b2.e.g(this.f2232a);
        TextureView textureView = new TextureView(this.f2233b.getContext());
        this.f2266e = textureView;
        textureView.setLayoutParams(new FrameLayout.LayoutParams(this.f2232a.getWidth(), this.f2232a.getHeight()));
        this.f2266e.setSurfaceTextureListener(new a());
        this.f2233b.removeAllViews();
        this.f2233b.addView(this.f2266e);
    }

    void q() {
        SurfaceTexture surfaceTexture;
        Size size = this.f2232a;
        if (size != null && (surfaceTexture = this.f2267f) != null && this.f2269h != null) {
            surfaceTexture.setDefaultBufferSize(size.getWidth(), this.f2232a.getHeight());
            final Surface surface = new Surface(this.f2267f);
            final w1 w1Var = this.f2269h;
            final ListenableFuture a10 = androidx.concurrent.futures.c.a(new c.InterfaceC0029c() { // from class: androidx.camera.view.r
                @Override // androidx.concurrent.futures.c.InterfaceC0029c
                public final Object a(c.a aVar) {
                    return t.j(t.this, surface, aVar);
                }
            });
            this.f2268g = a10;
            a10.a(new Runnable() { // from class: androidx.camera.view.s
                @Override // java.lang.Runnable
                public final void run() {
                    t.k(t.this, surface, a10, w1Var);
                }
            }, androidx.core.content.a.h(this.f2266e.getContext()));
            f();
        }
    }
}
