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
    private final c f31428d;

    /* renamed from: e  reason: collision with root package name */
    final HandlerThread f31429e;

    /* renamed from: i  reason: collision with root package name */
    private final Executor f31430i;

    /* renamed from: o  reason: collision with root package name */
    final Handler f31431o;

    /* renamed from: p  reason: collision with root package name */
    private int f31432p;

    /* renamed from: q  reason: collision with root package name */
    private boolean f31433q;

    /* renamed from: r  reason: collision with root package name */
    private final AtomicBoolean f31434r;

    /* renamed from: s  reason: collision with root package name */
    final Map f31435s;

    /* renamed from: t  reason: collision with root package name */
    private SurfaceTexture f31436t;

    /* renamed from: u  reason: collision with root package name */
    private SurfaceTexture f31437u;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        private static Function3 f31438a = new Function3() { // from class: k0.n
            @Override // kotlin.jvm.functions.Function3
            public final Object invoke(Object obj, Object obj2, Object obj3) {
                return new o((z) obj, (x0) obj2, (x0) obj3);
            }
        };

        public static p0 a(z zVar, x0 x0Var, x0 x0Var2) {
            return (p0) f31438a.invoke(zVar, x0Var, x0Var2);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public o(z zVar, x0 x0Var, x0 x0Var2) {
        this(zVar, Collections.EMPTY_MAP, x0Var, x0Var2);
    }

    public static /* synthetic */ void d(o oVar, Runnable runnable, Runnable runnable2) {
        if (oVar.f31433q) {
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
        oVar.f31432p--;
        oVar.m();
    }

    public static /* synthetic */ void g(o oVar) {
        oVar.f31433q = true;
        oVar.m();
    }

    public static /* synthetic */ void h(o oVar, l1 l1Var, l1.b bVar) {
        oVar.getClass();
        l1Var.close();
        Surface surface = (Surface) oVar.f31435s.remove(l1Var);
        if (surface != null) {
            oVar.f31428d.r(surface);
        }
    }

    public static /* synthetic */ void i(final o oVar, final l1 l1Var) {
        Surface i12 = l1Var.i1(oVar.f31430i, new Consumer() { // from class: k0.f
            @Override // androidx.core.util.Consumer
            public final void accept(Object obj) {
                o.h(o.this, l1Var, (l1.b) obj);
            }
        });
        oVar.f31428d.j(i12);
        oVar.f31435s.put(l1Var, i12);
    }

    public static /* synthetic */ void j(final o oVar, w1 w1Var) {
        oVar.f31432p++;
        final SurfaceTexture surfaceTexture = new SurfaceTexture(oVar.f31428d.t(w1Var.r()));
        surfaceTexture.setDefaultBufferSize(w1Var.o().getWidth(), w1Var.o().getHeight());
        final Surface surface = new Surface(surfaceTexture);
        w1Var.s(surface, oVar.f31430i, new Consumer() { // from class: k0.i
            @Override // androidx.core.util.Consumer
            public final void accept(Object obj) {
                o.f(o.this, surfaceTexture, surface, (w1.g) obj);
            }
        });
        if (w1Var.r()) {
            oVar.f31436t = surfaceTexture;
            return;
        }
        oVar.f31437u = surfaceTexture;
        surfaceTexture.setOnFrameAvailableListener(oVar, oVar.f31431o);
    }

    public static /* synthetic */ void k(o oVar, z zVar, Map map, c.a aVar) {
        oVar.getClass();
        try {
            oVar.f31428d.h(zVar, map);
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
        if (this.f31433q && this.f31432p == 0) {
            for (l1 l1Var : this.f31435s.keySet()) {
                l1Var.close();
            }
            this.f31435s.clear();
            this.f31428d.k();
            this.f31429e.quit();
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
            this.f31430i.execute(new Runnable() { // from class: k0.g
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
            androidx.concurrent.futures.c.a(new c.InterfaceC0027c() { // from class: k0.l
                @Override // androidx.concurrent.futures.c.InterfaceC0027c
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
        if (this.f31434r.get()) {
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
        if (this.f31434r.get()) {
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
        if (!this.f31434r.get() && (surfaceTexture2 = this.f31436t) != null && this.f31437u != null) {
            surfaceTexture2.updateTexImage();
            this.f31437u.updateTexImage();
            for (Map.Entry entry : this.f31435s.entrySet()) {
                Surface surface = (Surface) entry.getValue();
                l1 l1Var = (l1) entry.getKey();
                if (l1Var.getFormat() == 34) {
                    try {
                        this.f31428d.v(surfaceTexture.getTimestamp(), surface, l1Var, this.f31436t, this.f31437u);
                    } catch (RuntimeException e10) {
                        y0.d("DualSurfaceProcessor", "Failed to render with OpenGL.", e10);
                    }
                }
            }
        }
    }

    @Override // j0.p0
    public void release() {
        if (this.f31434r.getAndSet(true)) {
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
        this.f31432p = 0;
        this.f31433q = false;
        this.f31434r = new AtomicBoolean(false);
        this.f31435s = new LinkedHashMap();
        HandlerThread handlerThread = new HandlerThread("GL Thread");
        this.f31429e = handlerThread;
        handlerThread.start();
        Handler handler = new Handler(handlerThread.getLooper());
        this.f31431o = handler;
        this.f31430i = c0.a.e(handler);
        this.f31428d = new c(x0Var, x0Var2);
        try {
            p(zVar, map);
        } catch (RuntimeException e10) {
            release();
            throw e10;
        }
    }
}
