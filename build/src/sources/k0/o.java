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
    private final c f32913d;

    /* renamed from: e  reason: collision with root package name */
    final HandlerThread f32914e;

    /* renamed from: i  reason: collision with root package name */
    private final Executor f32915i;

    /* renamed from: o  reason: collision with root package name */
    final Handler f32916o;

    /* renamed from: p  reason: collision with root package name */
    private int f32917p;

    /* renamed from: q  reason: collision with root package name */
    private boolean f32918q;

    /* renamed from: r  reason: collision with root package name */
    private final AtomicBoolean f32919r;

    /* renamed from: s  reason: collision with root package name */
    final Map f32920s;

    /* renamed from: t  reason: collision with root package name */
    private SurfaceTexture f32921t;

    /* renamed from: u  reason: collision with root package name */
    private SurfaceTexture f32922u;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        private static Function3 f32923a = new Function3() { // from class: k0.n
            @Override // kotlin.jvm.functions.Function3
            public final Object invoke(Object obj, Object obj2, Object obj3) {
                return new o((z) obj, (x0) obj2, (x0) obj3);
            }
        };

        public static p0 a(z zVar, x0 x0Var, x0 x0Var2) {
            return (p0) f32923a.invoke(zVar, x0Var, x0Var2);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public o(z zVar, x0 x0Var, x0 x0Var2) {
        this(zVar, Collections.EMPTY_MAP, x0Var, x0Var2);
    }

    public static /* synthetic */ void d(o oVar, Runnable runnable, Runnable runnable2) {
        if (oVar.f32918q) {
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
        oVar.f32917p--;
        oVar.m();
    }

    public static /* synthetic */ void g(o oVar) {
        oVar.f32918q = true;
        oVar.m();
    }

    public static /* synthetic */ void h(o oVar, l1 l1Var, l1.b bVar) {
        oVar.getClass();
        l1Var.close();
        Surface surface = (Surface) oVar.f32920s.remove(l1Var);
        if (surface != null) {
            oVar.f32913d.r(surface);
        }
    }

    public static /* synthetic */ void i(final o oVar, final l1 l1Var) {
        Surface i12 = l1Var.i1(oVar.f32915i, new Consumer() { // from class: k0.f
            @Override // androidx.core.util.Consumer
            public final void accept(Object obj) {
                o.h(o.this, l1Var, (l1.b) obj);
            }
        });
        oVar.f32913d.j(i12);
        oVar.f32920s.put(l1Var, i12);
    }

    public static /* synthetic */ void j(final o oVar, w1 w1Var) {
        oVar.f32917p++;
        final SurfaceTexture surfaceTexture = new SurfaceTexture(oVar.f32913d.t(w1Var.r()));
        surfaceTexture.setDefaultBufferSize(w1Var.o().getWidth(), w1Var.o().getHeight());
        final Surface surface = new Surface(surfaceTexture);
        w1Var.s(surface, oVar.f32915i, new Consumer() { // from class: k0.i
            @Override // androidx.core.util.Consumer
            public final void accept(Object obj) {
                o.f(o.this, surfaceTexture, surface, (w1.g) obj);
            }
        });
        if (w1Var.r()) {
            oVar.f32921t = surfaceTexture;
            return;
        }
        oVar.f32922u = surfaceTexture;
        surfaceTexture.setOnFrameAvailableListener(oVar, oVar.f32916o);
    }

    public static /* synthetic */ void k(o oVar, z zVar, Map map, c.a aVar) {
        oVar.getClass();
        try {
            oVar.f32913d.h(zVar, map);
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
        if (this.f32918q && this.f32917p == 0) {
            for (l1 l1Var : this.f32920s.keySet()) {
                l1Var.close();
            }
            this.f32920s.clear();
            this.f32913d.k();
            this.f32914e.quit();
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
            this.f32915i.execute(new Runnable() { // from class: k0.g
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
            androidx.concurrent.futures.c.a(new c.InterfaceC0026c() { // from class: k0.l
                @Override // androidx.concurrent.futures.c.InterfaceC0026c
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
        if (this.f32919r.get()) {
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
        if (this.f32919r.get()) {
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
        if (!this.f32919r.get() && (surfaceTexture2 = this.f32921t) != null && this.f32922u != null) {
            surfaceTexture2.updateTexImage();
            this.f32922u.updateTexImage();
            for (Map.Entry entry : this.f32920s.entrySet()) {
                Surface surface = (Surface) entry.getValue();
                l1 l1Var = (l1) entry.getKey();
                if (l1Var.getFormat() == 34) {
                    try {
                        this.f32913d.v(surfaceTexture.getTimestamp(), surface, l1Var, this.f32921t, this.f32922u);
                    } catch (RuntimeException e10) {
                        y0.d("DualSurfaceProcessor", "Failed to render with OpenGL.", e10);
                    }
                }
            }
        }
    }

    @Override // j0.p0
    public void release() {
        if (this.f32919r.getAndSet(true)) {
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
        this.f32917p = 0;
        this.f32918q = false;
        this.f32919r = new AtomicBoolean(false);
        this.f32920s = new LinkedHashMap();
        HandlerThread handlerThread = new HandlerThread("GL Thread");
        this.f32914e = handlerThread;
        handlerThread.start();
        Handler handler = new Handler(handlerThread.getLooper());
        this.f32916o = handler;
        this.f32915i = c0.a.e(handler);
        this.f32913d = new c(x0Var, x0Var2);
        try {
            p(zVar, map);
        } catch (RuntimeException e10) {
            release();
            throw e10;
        }
    }
}
