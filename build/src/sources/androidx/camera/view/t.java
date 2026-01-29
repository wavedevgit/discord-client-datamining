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
    TextureView f2141e;

    /* renamed from: f  reason: collision with root package name */
    SurfaceTexture f2142f;

    /* renamed from: g  reason: collision with root package name */
    ListenableFuture f2143g;

    /* renamed from: h  reason: collision with root package name */
    w1 f2144h;

    /* renamed from: i  reason: collision with root package name */
    boolean f2145i;

    /* renamed from: j  reason: collision with root package name */
    SurfaceTexture f2146j;

    /* renamed from: k  reason: collision with root package name */
    AtomicReference f2147k;

    /* renamed from: l  reason: collision with root package name */
    i.a f2148l;

    /* renamed from: m  reason: collision with root package name */
    Executor f2149m;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class a implements TextureView.SurfaceTextureListener {

        /* renamed from: androidx.camera.view.t$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        class C0023a implements d0.c {

            /* renamed from: a  reason: collision with root package name */
            final /* synthetic */ SurfaceTexture f2151a;

            C0023a(SurfaceTexture surfaceTexture) {
                this.f2151a = surfaceTexture;
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
                this.f2151a.release();
                t tVar = t.this;
                if (tVar.f2146j != null) {
                    tVar.f2146j = null;
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
            tVar.f2142f = surfaceTexture;
            if (tVar.f2143g != null) {
                b2.e.g(tVar.f2144h);
                y0.a("TextureViewImpl", "Surface invalidated " + t.this.f2144h);
                t.this.f2144h.m().d();
                return;
            }
            tVar.q();
        }

        @Override // android.view.TextureView.SurfaceTextureListener
        public boolean onSurfaceTextureDestroyed(SurfaceTexture surfaceTexture) {
            t tVar = t.this;
            tVar.f2142f = null;
            ListenableFuture listenableFuture = tVar.f2143g;
            if (listenableFuture != null) {
                d0.n.j(listenableFuture, new C0023a(surfaceTexture), androidx.core.content.a.h(t.this.f2141e.getContext()));
                t.this.f2146j = surfaceTexture;
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
            c.a aVar = (c.a) t.this.f2147k.getAndSet(null);
            if (aVar != null) {
                aVar.c(null);
            }
            t.this.getClass();
            Executor executor = t.this.f2149m;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public t(FrameLayout frameLayout, e eVar) {
        super(frameLayout, eVar);
        this.f2145i = false;
        this.f2147k = new AtomicReference();
    }

    public static /* synthetic */ Object j(t tVar, Surface surface, final c.a aVar) {
        tVar.getClass();
        y0.a("TextureViewImpl", "Surface set on Preview.");
        w1 w1Var = tVar.f2144h;
        Executor a10 = c0.a.a();
        Objects.requireNonNull(aVar);
        w1Var.s(surface, a10, new Consumer() { // from class: p0.i
            @Override // androidx.core.util.Consumer
            public final void accept(Object obj) {
                c.a.this.c((w1.g) obj);
            }
        });
        return "provideSurface[request=" + tVar.f2144h + " surface=" + surface + "]";
    }

    public static /* synthetic */ void k(t tVar, Surface surface, ListenableFuture listenableFuture, w1 w1Var) {
        tVar.getClass();
        y0.a("TextureViewImpl", "Safe to release surface.");
        tVar.o();
        surface.release();
        if (tVar.f2143g == listenableFuture) {
            tVar.f2143g = null;
        }
        if (tVar.f2144h == w1Var) {
            tVar.f2144h = null;
        }
    }

    public static /* synthetic */ void l(t tVar, w1 w1Var) {
        w1 w1Var2 = tVar.f2144h;
        if (w1Var2 != null && w1Var2 == w1Var) {
            tVar.f2144h = null;
            tVar.f2143g = null;
        }
        tVar.o();
    }

    public static /* synthetic */ Object m(t tVar, c.a aVar) {
        tVar.f2147k.set(aVar);
        return "textureViewImpl_waitForNextFrame";
    }

    private void o() {
        i.a aVar = this.f2148l;
        if (aVar != null) {
            aVar.a();
            this.f2148l = null;
        }
    }

    private void p() {
        if (this.f2145i && this.f2146j != null) {
            SurfaceTexture surfaceTexture = this.f2141e.getSurfaceTexture();
            SurfaceTexture surfaceTexture2 = this.f2146j;
            if (surfaceTexture != surfaceTexture2) {
                this.f2141e.setSurfaceTexture(surfaceTexture2);
                this.f2146j = null;
                this.f2145i = false;
            }
        }
    }

    @Override // androidx.camera.view.i
    View b() {
        return this.f2141e;
    }

    @Override // androidx.camera.view.i
    Bitmap c() {
        TextureView textureView = this.f2141e;
        if (textureView != null && textureView.isAvailable()) {
            return this.f2141e.getBitmap();
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
        this.f2145i = true;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // androidx.camera.view.i
    public void g(final w1 w1Var, i.a aVar) {
        this.f2107a = w1Var.o();
        this.f2148l = aVar;
        n();
        w1 w1Var2 = this.f2144h;
        if (w1Var2 != null) {
            w1Var2.v();
        }
        this.f2144h = w1Var;
        w1Var.j(androidx.core.content.a.h(this.f2141e.getContext()), new Runnable() { // from class: androidx.camera.view.p
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
        return androidx.concurrent.futures.c.a(new c.InterfaceC0026c() { // from class: androidx.camera.view.q
            @Override // androidx.concurrent.futures.c.InterfaceC0026c
            public final Object a(c.a aVar) {
                return t.m(t.this, aVar);
            }
        });
    }

    public void n() {
        b2.e.g(this.f2108b);
        b2.e.g(this.f2107a);
        TextureView textureView = new TextureView(this.f2108b.getContext());
        this.f2141e = textureView;
        textureView.setLayoutParams(new FrameLayout.LayoutParams(this.f2107a.getWidth(), this.f2107a.getHeight()));
        this.f2141e.setSurfaceTextureListener(new a());
        this.f2108b.removeAllViews();
        this.f2108b.addView(this.f2141e);
    }

    void q() {
        SurfaceTexture surfaceTexture;
        Size size = this.f2107a;
        if (size != null && (surfaceTexture = this.f2142f) != null && this.f2144h != null) {
            surfaceTexture.setDefaultBufferSize(size.getWidth(), this.f2107a.getHeight());
            final Surface surface = new Surface(this.f2142f);
            final w1 w1Var = this.f2144h;
            final ListenableFuture a10 = androidx.concurrent.futures.c.a(new c.InterfaceC0026c() { // from class: androidx.camera.view.r
                @Override // androidx.concurrent.futures.c.InterfaceC0026c
                public final Object a(c.a aVar) {
                    return t.j(t.this, surface, aVar);
                }
            });
            this.f2143g = a10;
            a10.a(new Runnable() { // from class: androidx.camera.view.s
                @Override // java.lang.Runnable
                public final void run() {
                    t.k(t.this, surface, a10, w1Var);
                }
            }, androidx.core.content.a.h(this.f2141e.getContext()));
            f();
        }
    }
}
