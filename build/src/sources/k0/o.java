package k0;

import android.graphics.SurfaceTexture;
import android.os.Handler;
import android.os.HandlerThread;
import android.view.Surface;
import androidx.concurrent.futures.c;
import androidx.core.util.Consumer;
import j0.p0;
import java.util.Collections;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.Objects;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.Executor;
import java.util.concurrent.RejectedExecutionException;
import java.util.concurrent.atomic.AtomicBoolean;
import kotlin.jvm.functions.Function3;
import x.l1;
import x.w1;
import x.x0;
import x.y0;
import x.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class o implements p0, SurfaceTexture.OnFrameAvailableListener {

    /* renamed from: d  reason: collision with root package name */
    private final c f32073d;

    /* renamed from: e  reason: collision with root package name */
    final HandlerThread f32074e;

    /* renamed from: i  reason: collision with root package name */
    private final Executor f32075i;

    /* renamed from: o  reason: collision with root package name */
    final Handler f32076o;

    /* renamed from: p  reason: collision with root package name */
    private int f32077p;

    /* renamed from: q  reason: collision with root package name */
    private boolean f32078q;

    /* renamed from: r  reason: collision with root package name */
    private final AtomicBoolean f32079r;

    /* renamed from: s  reason: collision with root package name */
    final Map f32080s;

    /* renamed from: t  reason: collision with root package name */
    private SurfaceTexture f32081t;

    /* renamed from: u  reason: collision with root package name */
    private SurfaceTexture f32082u;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        private static Function3 f32083a = new Function3() { // from class: k0.n
            @Override // kotlin.jvm.functions.Function3
            public final Object invoke(Object obj, Object obj2, Object obj3) {
                return new o((z) obj, (x0) obj2, (x0) obj3);
            }
        };

        public static p0 a(z zVar, x0 x0Var, x0 x0Var2) {
            return (p0) f32083a.invoke(zVar, x0Var, x0Var2);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public o(z zVar, x0 x0Var, x0 x0Var2) {
        this(zVar, Collections.EMPTY_MAP, x0Var, x0Var2);
    }

    public static /* synthetic */ void d(o oVar, Runnable runnable, Runnable runnable2) {
        if (oVar.f32078q) {
            runnable.run();
        } else {
            runnable2.run();
        }
    }

    public static /* synthetic */ void e() {
    }

    public static /* synthetic */ void f(o oVar, SurfaceTexture surfaceTexture, Surface surface, w1.g gVar) {
        oVar.getClass();
        surfaceTexture.setOnFrameAvailableListener(null);
        surfaceTexture.release();
        surface.release();
        oVar.f32077p--;
        oVar.m();
    }

    public static /* synthetic */ void g(o oVar) {
        oVar.f32078q = true;
        oVar.m();
    }

    public static /* synthetic */ void h(o oVar, l1 l1Var, l1.b bVar) {
        oVar.getClass();
        l1Var.close();
        Surface surface = (Surface) oVar.f32080s.remove(l1Var);
        if (surface != null) {
            oVar.f32073d.r(surface);
        }
    }

    public static /* synthetic */ void i(final o oVar, final l1 l1Var) {
        Surface j12 = l1Var.j1(oVar.f32075i, new Consumer() { // from class: k0.f
            @Override // androidx.core.util.Consumer
            public final void accept(Object obj) {
                o.h(o.this, l1Var, (l1.b) obj);
            }
        });
        oVar.f32073d.j(j12);
        oVar.f32080s.put(l1Var, j12);
    }

    public static /* synthetic */ void j(final o oVar, w1 w1Var) {
        oVar.f32077p++;
        final SurfaceTexture surfaceTexture = new SurfaceTexture(oVar.f32073d.t(w1Var.r()));
        surfaceTexture.setDefaultBufferSize(w1Var.o().getWidth(), w1Var.o().getHeight());
        final Surface surface = new Surface(surfaceTexture);
        w1Var.s(surface, oVar.f32075i, new Consumer() { // from class: k0.i
            @Override // androidx.core.util.Consumer
            public final void accept(Object obj) {
                o.f(o.this, surfaceTexture, surface, (w1.g) obj);
            }
        });
        if (w1Var.r()) {
            oVar.f32081t = surfaceTexture;
            return;
        }
        oVar.f32082u = surfaceTexture;
        surfaceTexture.setOnFrameAvailableListener(oVar, oVar.f32076o);
    }

    public static /* synthetic */ void k(o oVar, z zVar, Map map, c.a aVar) {
        oVar.getClass();
        try {
            oVar.f32073d.h(zVar, map);
            aVar.c(null);
        } catch (RuntimeException e10) {
            aVar.f(e10);
        }
    }

    public static /* synthetic */ Object l(final o oVar, final z zVar, final Map map, final c.a aVar) {
        oVar.getClass();
        oVar.n(new Runnable() { // from class: k0.e
            @Override // java.lang.Runnable
            public final void run() {
                o.k(o.this, zVar, map, aVar);
            }
        });
        return "Init GlRenderer";
    }

    private void m() {
        if (this.f32078q && this.f32077p == 0) {
            for (l1 l1Var : this.f32080s.keySet()) {
                l1Var.close();
            }
            this.f32080s.clear();
            this.f32073d.k();
            this.f32074e.quit();
        }
    }

    private void n(Runnable runnable) {
        o(runnable, new Runnable() { // from class: k0.h
            @Override // java.lang.Runnable
            public final void run() {
                o.e();
            }
        });
    }

    private void o(final Runnable runnable, final Runnable runnable2) {
        try {
            this.f32075i.execute(new Runnable() { // from class: k0.g
                @Override // java.lang.Runnable
                public final void run() {
                    o.d(o.this, runnable2, runnable);
                }
            });
        } catch (RejectedExecutionException e10) {
            y0.m("DualSurfaceProcessor", "Unable to executor runnable", e10);
            runnable2.run();
        }
    }

    private void p(final z zVar, final Map map) {
        try {
            androidx.concurrent.futures.c.a(new c.InterfaceC0028c() { // from class: k0.l
                @Override // androidx.concurrent.futures.c.InterfaceC0028c
                public final Object a(c.a aVar) {
                    return o.l(o.this, zVar, map, aVar);
                }
            }).get();
        } catch (InterruptedException | ExecutionException e10) {
            e = e10;
            if (e instanceof ExecutionException) {
                e = e.getCause();
            }
            if (e instanceof RuntimeException) {
                throw ((RuntimeException) e);
            }
            throw new IllegalStateException("Failed to create DefaultSurfaceProcessor", e);
        }
    }

    @Override // x.m1
    public void a(final l1 l1Var) {
        if (this.f32079r.get()) {
            l1Var.close();
            return;
        }
        Runnable runnable = new Runnable() { // from class: k0.m
            @Override // java.lang.Runnable
            public final void run() {
                o.i(o.this, l1Var);
            }
        };
        Objects.requireNonNull(l1Var);
        o(runnable, new j0.f(l1Var));
    }

    @Override // x.m1
    public void b(final w1 w1Var) {
        if (this.f32079r.get()) {
            w1Var.v();
            return;
        }
        Runnable runnable = new Runnable() { // from class: k0.k
            @Override // java.lang.Runnable
            public final void run() {
                o.j(o.this, w1Var);
            }
        };
        Objects.requireNonNull(w1Var);
        o(runnable, new j0.h(w1Var));
    }

    @Override // android.graphics.SurfaceTexture.OnFrameAvailableListener
    public void onFrameAvailable(SurfaceTexture surfaceTexture) {
        SurfaceTexture surfaceTexture2;
        if (!this.f32079r.get() && (surfaceTexture2 = this.f32081t) != null && this.f32082u != null) {
            surfaceTexture2.updateTexImage();
            this.f32082u.updateTexImage();
            for (Map.Entry entry : this.f32080s.entrySet()) {
                Surface surface = (Surface) entry.getValue();
                l1 l1Var = (l1) entry.getKey();
                if (l1Var.getFormat() == 34) {
                    try {
                        this.f32073d.v(surfaceTexture.getTimestamp(), surface, l1Var, this.f32081t, this.f32082u);
                    } catch (RuntimeException e10) {
                        y0.d("DualSurfaceProcessor", "Failed to render with OpenGL.", e10);
                    }
                }
            }
        }
    }

    @Override // j0.p0
    public void release() {
        if (this.f32079r.getAndSet(true)) {
            return;
        }
        n(new Runnable() { // from class: k0.j
            @Override // java.lang.Runnable
            public final void run() {
                o.g(o.this);
            }
        });
    }

    o(z zVar, Map map, x0 x0Var, x0 x0Var2) {
        this.f32077p = 0;
        this.f32078q = false;
        this.f32079r = new AtomicBoolean(false);
        this.f32080s = new LinkedHashMap();
        HandlerThread handlerThread = new HandlerThread("GL Thread");
        this.f32074e = handlerThread;
        handlerThread.start();
        Handler handler = new Handler(handlerThread.getLooper());
        this.f32076o = handler;
        this.f32075i = c0.a.e(handler);
        this.f32073d = new c(x0Var, x0Var2);
        try {
            p(zVar, map);
        } catch (RuntimeException e10) {
            release();
            throw e10;
        }
    }
}
