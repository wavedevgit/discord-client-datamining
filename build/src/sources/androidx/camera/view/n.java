package androidx.camera.view;

import android.graphics.Bitmap;
import android.os.Handler;
import android.os.HandlerThread;
import android.util.Size;
import android.view.PixelCopy;
import android.view.Surface;
import android.view.SurfaceHolder;
import android.view.SurfaceView;
import android.view.View;
import android.widget.FrameLayout;
import androidx.camera.view.i;
import androidx.camera.view.n;
import androidx.core.util.Consumer;
import com.google.common.util.concurrent.ListenableFuture;
import java.util.Objects;
import java.util.concurrent.Semaphore;
import java.util.concurrent.TimeUnit;
import x.w1;
import x.y0;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class n extends i {

    /* renamed from: e  reason: collision with root package name */
    SurfaceView f2246e;

    /* renamed from: f  reason: collision with root package name */
    final b f2247f;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static class a {
        static void a(SurfaceView surfaceView, Bitmap bitmap, PixelCopy.OnPixelCopyFinishedListener onPixelCopyFinishedListener, Handler handler) {
            PixelCopy.request(surfaceView, bitmap, onPixelCopyFinishedListener, handler);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class b implements SurfaceHolder.Callback {

        /* renamed from: d  reason: collision with root package name */
        private Size f2248d;

        /* renamed from: e  reason: collision with root package name */
        private w1 f2249e;

        /* renamed from: i  reason: collision with root package name */
        private w1 f2250i;

        /* renamed from: o  reason: collision with root package name */
        private i.a f2251o;

        /* renamed from: p  reason: collision with root package name */
        private Size f2252p;

        /* renamed from: q  reason: collision with root package name */
        private boolean f2253q = false;

        /* renamed from: r  reason: collision with root package name */
        private boolean f2254r = false;

        b() {
        }

        public static /* synthetic */ void a(i.a aVar, w1.g gVar) {
            y0.a("SurfaceViewImpl", "Safe to release surface.");
            if (aVar != null) {
                aVar.a();
            }
        }

        private boolean b() {
            if (!this.f2253q && this.f2249e != null && Objects.equals(this.f2248d, this.f2252p)) {
                return true;
            }
            return false;
        }

        private void c() {
            if (this.f2249e != null) {
                y0.a("SurfaceViewImpl", "Request canceled: " + this.f2249e);
                this.f2249e.v();
            }
        }

        private void d() {
            if (this.f2249e != null) {
                y0.a("SurfaceViewImpl", "Surface closed " + this.f2249e);
                this.f2249e.m().d();
            }
        }

        private boolean f() {
            Surface surface = n.this.f2246e.getHolder().getSurface();
            if (b()) {
                y0.a("SurfaceViewImpl", "Surface set on Preview.");
                final i.a aVar = this.f2251o;
                w1 w1Var = this.f2249e;
                Objects.requireNonNull(w1Var);
                w1Var.s(surface, androidx.core.content.a.h(n.this.f2246e.getContext()), new Consumer() { // from class: androidx.camera.view.o
                    @Override // androidx.core.util.Consumer
                    public final void accept(Object obj) {
                        n.b.a(i.a.this, (w1.g) obj);
                    }
                });
                this.f2253q = true;
                n.this.f();
                return true;
            }
            return false;
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public void e(w1 w1Var, i.a aVar) {
            c();
            if (this.f2254r) {
                this.f2254r = false;
                w1Var.q();
                return;
            }
            this.f2249e = w1Var;
            this.f2251o = aVar;
            Size o10 = w1Var.o();
            this.f2248d = o10;
            this.f2253q = false;
            if (!f()) {
                y0.a("SurfaceViewImpl", "Wait for new Surface creation.");
                n.this.f2246e.getHolder().setFixedSize(o10.getWidth(), o10.getHeight());
            }
        }

        @Override // android.view.SurfaceHolder.Callback
        public void surfaceChanged(SurfaceHolder surfaceHolder, int i10, int i11, int i12) {
            y0.a("SurfaceViewImpl", "Surface changed. Size: " + i11 + "x" + i12);
            this.f2252p = new Size(i11, i12);
            f();
        }

        @Override // android.view.SurfaceHolder.Callback
        public void surfaceCreated(SurfaceHolder surfaceHolder) {
            w1 w1Var;
            y0.a("SurfaceViewImpl", "Surface created.");
            if (this.f2254r && (w1Var = this.f2250i) != null) {
                w1Var.q();
                this.f2250i = null;
                this.f2254r = false;
            }
        }

        @Override // android.view.SurfaceHolder.Callback
        public void surfaceDestroyed(SurfaceHolder surfaceHolder) {
            y0.a("SurfaceViewImpl", "Surface destroyed.");
            if (this.f2253q) {
                d();
            } else {
                c();
            }
            this.f2254r = true;
            w1 w1Var = this.f2249e;
            if (w1Var != null) {
                this.f2250i = w1Var;
            }
            this.f2253q = false;
            this.f2249e = null;
            this.f2251o = null;
            this.f2252p = null;
            this.f2248d = null;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public n(FrameLayout frameLayout, e eVar) {
        super(frameLayout, eVar);
        this.f2247f = new b();
    }

    public static /* synthetic */ void k(Semaphore semaphore, int i10) {
        if (i10 == 0) {
            y0.a("SurfaceViewImpl", "PreviewView.SurfaceViewImplementation.getBitmap() succeeded");
        } else {
            y0.c("SurfaceViewImpl", "PreviewView.SurfaceViewImplementation.getBitmap() failed with error " + i10);
        }
        semaphore.release();
    }

    private static boolean m(SurfaceView surfaceView, Size size, w1 w1Var) {
        boolean equals = Objects.equals(size, w1Var.o());
        if (surfaceView != null && equals) {
            return true;
        }
        return false;
    }

    @Override // androidx.camera.view.i
    View b() {
        return this.f2246e;
    }

    @Override // androidx.camera.view.i
    Bitmap c() {
        SurfaceView surfaceView = this.f2246e;
        if (surfaceView != null && surfaceView.getHolder().getSurface() != null && this.f2246e.getHolder().getSurface().isValid()) {
            final Semaphore semaphore = new Semaphore(0);
            Bitmap createBitmap = Bitmap.createBitmap(this.f2246e.getWidth(), this.f2246e.getHeight(), Bitmap.Config.ARGB_8888);
            HandlerThread handlerThread = new HandlerThread("pixelCopyRequest Thread");
            handlerThread.start();
            a.a(this.f2246e, createBitmap, new PixelCopy.OnPixelCopyFinishedListener() { // from class: androidx.camera.view.m
                @Override // android.view.PixelCopy.OnPixelCopyFinishedListener
                public final void onPixelCopyFinished(int i10) {
                    n.k(semaphore, i10);
                }
            }, new Handler(handlerThread.getLooper()));
            try {
                if (!semaphore.tryAcquire(1, 100L, TimeUnit.MILLISECONDS)) {
                    y0.c("SurfaceViewImpl", "Timed out while trying to acquire screenshot.");
                }
                return createBitmap;
            } catch (InterruptedException e10) {
                y0.d("SurfaceViewImpl", "Interrupted while trying to acquire screenshot.", e10);
                return createBitmap;
            } finally {
                handlerThread.quitSafely();
            }
        }
        return null;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // androidx.camera.view.i
    public void d() {
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // androidx.camera.view.i
    public void e() {
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // androidx.camera.view.i
    public void g(final w1 w1Var, final i.a aVar) {
        if (!m(this.f2246e, this.f2232a, w1Var)) {
            this.f2232a = w1Var.o();
            l();
        }
        if (aVar != null) {
            w1Var.j(androidx.core.content.a.h(this.f2246e.getContext()), new Runnable() { // from class: androidx.camera.view.k
                @Override // java.lang.Runnable
                public final void run() {
                    i.a.this.a();
                }
            });
        }
        this.f2246e.post(new Runnable() { // from class: androidx.camera.view.l
            @Override // java.lang.Runnable
            public final void run() {
                n.this.f2247f.e(w1Var, aVar);
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // androidx.camera.view.i
    public ListenableFuture i() {
        return d0.n.p(null);
    }

    void l() {
        b2.e.g(this.f2233b);
        b2.e.g(this.f2232a);
        SurfaceView surfaceView = new SurfaceView(this.f2233b.getContext());
        this.f2246e = surfaceView;
        surfaceView.setLayoutParams(new FrameLayout.LayoutParams(this.f2232a.getWidth(), this.f2232a.getHeight()));
        this.f2233b.removeAllViews();
        this.f2233b.addView(this.f2246e);
        this.f2246e.getHolder().addCallback(this.f2247f);
    }
}
