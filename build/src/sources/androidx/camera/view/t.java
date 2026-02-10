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
    TextureView f2295e;

    /* renamed from: f  reason: collision with root package name */
    SurfaceTexture f2296f;

    /* renamed from: g  reason: collision with root package name */
    ListenableFuture f2297g;

    /* renamed from: h  reason: collision with root package name */
    w1 f2298h;

    /* renamed from: i  reason: collision with root package name */
    boolean f2299i;

    /* renamed from: j  reason: collision with root package name */
    SurfaceTexture f2300j;

    /* renamed from: k  reason: collision with root package name */
    AtomicReference f2301k;

    /* renamed from: l  reason: collision with root package name */
    i.a f2302l;

    /* renamed from: m  reason: collision with root package name */
    Executor f2303m;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class a implements TextureView.SurfaceTextureListener {

        /* renamed from: androidx.camera.view.t$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        class C0023a implements d0.c {

            /* renamed from: a  reason: collision with root package name */
            final /* synthetic */ SurfaceTexture f2305a;

            C0023a(SurfaceTexture surfaceTexture) {
                this.f2305a = surfaceTexture;
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
                this.f2305a.release();
                t tVar = t.this;
                if (tVar.f2300j != null) {
                    tVar.f2300j = null;
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
            tVar.f2296f = surfaceTexture;
            if (tVar.f2297g != null) {
                b2.e.g(tVar.f2298h);
                y0.a("TextureViewImpl", "Surface invalidated " + t.this.f2298h);
                t.this.f2298h.m().d();
                return;
            }
            tVar.q();
        }

        @Override // android.view.TextureView.SurfaceTextureListener
        public boolean onSurfaceTextureDestroyed(SurfaceTexture surfaceTexture) {
            t tVar = t.this;
            tVar.f2296f = null;
            ListenableFuture listenableFuture = tVar.f2297g;
            if (listenableFuture != null) {
                d0.n.j(listenableFuture, new C0023a(surfaceTexture), androidx.core.content.a.h(t.this.f2295e.getContext()));
                t.this.f2300j = surfaceTexture;
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
            c.a aVar = (c.a) t.this.f2301k.getAndSet(null);
            if (aVar != null) {
                aVar.c(null);
            }
            t.this.getClass();
            Executor executor = t.this.f2303m;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public t(FrameLayout frameLayout, e eVar) {
        super(frameLayout, eVar);
        this.f2299i = false;
        this.f2301k = new AtomicReference();
    }

    public static /* synthetic */ Object j(t tVar, Surface surface, final c.a aVar) {
        tVar.getClass();
        y0.a("TextureViewImpl", "Surface set on Preview.");
        w1 w1Var = tVar.f2298h;
        Executor a10 = c0.a.a();
        Objects.requireNonNull(aVar);
        w1Var.s(surface, a10, new Consumer() { // from class: p0.i
            @Override // androidx.core.util.Consumer
            public final void accept(Object obj) {
                c.a.this.c((w1.g) obj);
            }
        });
        return "provideSurface[request=" + tVar.f2298h + " surface=" + surface + "]";
    }

    public static /* synthetic */ void k(t tVar, Surface surface, ListenableFuture listenableFuture, w1 w1Var) {
        tVar.getClass();
        y0.a("TextureViewImpl", "Safe to release surface.");
        tVar.o();
        surface.release();
        if (tVar.f2297g == listenableFuture) {
            tVar.f2297g = null;
        }
        if (tVar.f2298h == w1Var) {
            tVar.f2298h = null;
        }
    }

    public static /* synthetic */ void l(t tVar, w1 w1Var) {
        w1 w1Var2 = tVar.f2298h;
        if (w1Var2 != null && w1Var2 == w1Var) {
            tVar.f2298h = null;
            tVar.f2297g = null;
        }
        tVar.o();
    }

    public static /* synthetic */ Object m(t tVar, c.a aVar) {
        tVar.f2301k.set(aVar);
        return "textureViewImpl_waitForNextFrame";
    }

    private void o() {
        i.a aVar = this.f2302l;
        if (aVar != null) {
            aVar.a();
            this.f2302l = null;
        }
    }

    private void p() {
        if (this.f2299i && this.f2300j != null) {
            SurfaceTexture surfaceTexture = this.f2295e.getSurfaceTexture();
            SurfaceTexture surfaceTexture2 = this.f2300j;
            if (surfaceTexture != surfaceTexture2) {
                this.f2295e.setSurfaceTexture(surfaceTexture2);
                this.f2300j = null;
                this.f2299i = false;
            }
        }
    }

    @Override // androidx.camera.view.i
    View b() {
        return this.f2295e;
    }

    @Override // androidx.camera.view.i
    Bitmap c() {
        TextureView textureView = this.f2295e;
        if (textureView != null && textureView.isAvailable()) {
            return this.f2295e.getBitmap();
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
        this.f2299i = true;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // androidx.camera.view.i
    public void g(final w1 w1Var, i.a aVar) {
        this.f2261a = w1Var.o();
        this.f2302l = aVar;
        n();
        w1 w1Var2 = this.f2298h;
        if (w1Var2 != null) {
            w1Var2.v();
        }
        this.f2298h = w1Var;
        w1Var.j(androidx.core.content.a.h(this.f2295e.getContext()), new Runnable() { // from class: androidx.camera.view.p
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
        b2.e.g(this.f2262b);
        b2.e.g(this.f2261a);
        TextureView textureView = new TextureView(this.f2262b.getContext());
        this.f2295e = textureView;
        textureView.setLayoutParams(new FrameLayout.LayoutParams(this.f2261a.getWidth(), this.f2261a.getHeight()));
        this.f2295e.setSurfaceTextureListener(new a());
        this.f2262b.removeAllViews();
        this.f2262b.addView(this.f2295e);
    }

    void q() {
        SurfaceTexture surfaceTexture;
        Size size = this.f2261a;
        if (size != null && (surfaceTexture = this.f2296f) != null && this.f2298h != null) {
            surfaceTexture.setDefaultBufferSize(size.getWidth(), this.f2261a.getHeight());
            final Surface surface = new Surface(this.f2296f);
            final w1 w1Var = this.f2298h;
            final ListenableFuture a10 = androidx.concurrent.futures.c.a(new c.InterfaceC0026c() { // from class: androidx.camera.view.r
                @Override // androidx.concurrent.futures.c.InterfaceC0026c
                public final Object a(c.a aVar) {
                    return t.j(t.this, surface, aVar);
                }
            });
            this.f2297g = a10;
            a10.a(new Runnable() { // from class: androidx.camera.view.s
                @Override // java.lang.Runnable
                public final void run() {
                    t.k(t.this, surface, a10, w1Var);
                }
            }, androidx.core.content.a.h(this.f2295e.getContext()));
            f();
        }
    }
}
