package j0;

import android.graphics.Bitmap;
import android.graphics.SurfaceTexture;
import android.os.Handler;
import android.os.HandlerThread;
import android.util.Size;
import android.view.Surface;
import androidx.arch.core.util.Function;
import androidx.camera.core.ImageProcessingUtil;
import androidx.concurrent.futures.c;
import androidx.core.util.Consumer;
import com.google.common.util.concurrent.ListenableFuture;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.Executor;
import java.util.concurrent.RejectedExecutionException;
import java.util.concurrent.atomic.AtomicBoolean;
import l0.d;
import x.l1;
import x.w1;
import x.y0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class t implements p0, SurfaceTexture.OnFrameAvailableListener {

    /* renamed from: d  reason: collision with root package name */
    private final x f31794d;

    /* renamed from: e  reason: collision with root package name */
    final HandlerThread f31795e;

    /* renamed from: i  reason: collision with root package name */
    private final Executor f31796i;

    /* renamed from: o  reason: collision with root package name */
    final Handler f31797o;

    /* renamed from: p  reason: collision with root package name */
    private final AtomicBoolean f31798p;

    /* renamed from: q  reason: collision with root package name */
    private final float[] f31799q;

    /* renamed from: r  reason: collision with root package name */
    private final float[] f31800r;

    /* renamed from: s  reason: collision with root package name */
    final Map f31801s;

    /* renamed from: t  reason: collision with root package name */
    private int f31802t;

    /* renamed from: u  reason: collision with root package name */
    private boolean f31803u;

    /* renamed from: v  reason: collision with root package name */
    private final List f31804v;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        private static Function f31805a = new Function() { // from class: j0.s
            @Override // androidx.arch.core.util.Function
            public final Object apply(Object obj) {
                return new t((x.z) obj);
            }
        };

        public static p0 a(x.z zVar) {
            return (p0) f31805a.apply(zVar);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static abstract class b {
        static j0.a d(int i10, int i11, c.a aVar) {
            return new j0.a(i10, i11, aVar);
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public abstract c.a a();

        /* JADX INFO: Access modifiers changed from: package-private */
        public abstract int b();

        /* JADX INFO: Access modifiers changed from: package-private */
        public abstract int c();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public t(x.z zVar) {
        this(zVar, Collections.EMPTY_MAP);
    }

    public static /* synthetic */ void e(t tVar, w1 w1Var, SurfaceTexture surfaceTexture, Surface surface, w1.g gVar) {
        tVar.getClass();
        w1Var.k();
        surfaceTexture.setOnFrameAvailableListener(null);
        surfaceTexture.release();
        surface.release();
        tVar.f31802t--;
        tVar.q();
    }

    public static /* synthetic */ void f(t tVar) {
        tVar.f31803u = true;
        tVar.q();
    }

    public static /* synthetic */ void g(t tVar, x.z zVar, Map map, c.a aVar) {
        tVar.getClass();
        try {
            tVar.f31794d.h(zVar, map);
            aVar.c(null);
        } catch (RuntimeException e10) {
            aVar.f(e10);
        }
    }

    public static /* synthetic */ Object h(final t tVar, int i10, int i11, final c.a aVar) {
        tVar.getClass();
        final j0.a d10 = b.d(i10, i11, aVar);
        tVar.s(new Runnable() { // from class: j0.p
            @Override // java.lang.Runnable
            public final void run() {
                t.this.f31804v.add(d10);
            }
        }, new Runnable() { // from class: j0.q
            @Override // java.lang.Runnable
            public final void run() {
                c.a.this.f(new Exception("Failed to snapshot: OpenGLRenderer not ready."));
            }
        });
        return "DefaultSurfaceProcessor#snapshot";
    }

    public static /* synthetic */ void i(t tVar, w1 w1Var, w1.h hVar) {
        tVar.getClass();
        d.e eVar = d.e.DEFAULT;
        if (w1Var.n().d() && hVar.e()) {
            eVar = d.e.YUV;
        }
        tVar.f31794d.o(eVar);
    }

    public static /* synthetic */ void j(final t tVar, final l1 l1Var) {
        Surface i12 = l1Var.i1(tVar.f31796i, new Consumer() { // from class: j0.d
            @Override // androidx.core.util.Consumer
            public final void accept(Object obj) {
                t.k(t.this, l1Var, (l1.b) obj);
            }
        });
        tVar.f31794d.j(i12);
        tVar.f31801s.put(l1Var, i12);
    }

    public static /* synthetic */ void k(t tVar, l1 l1Var, l1.b bVar) {
        tVar.getClass();
        l1Var.close();
        Surface surface = (Surface) tVar.f31801s.remove(l1Var);
        if (surface != null) {
            tVar.f31794d.r(surface);
        }
    }

    public static /* synthetic */ Object l(final t tVar, final x.z zVar, final Map map, final c.a aVar) {
        tVar.getClass();
        tVar.r(new Runnable() { // from class: j0.l
            @Override // java.lang.Runnable
            public final void run() {
                t.g(t.this, zVar, map, aVar);
            }
        });
        return "Init GlRenderer";
    }

    public static /* synthetic */ void m() {
    }

    public static /* synthetic */ void o(final t tVar, final w1 w1Var) {
        tVar.f31802t++;
        final SurfaceTexture surfaceTexture = new SurfaceTexture(tVar.f31794d.g());
        surfaceTexture.setDefaultBufferSize(w1Var.o().getWidth(), w1Var.o().getHeight());
        final Surface surface = new Surface(surfaceTexture);
        w1Var.t(tVar.f31796i, new w1.i() { // from class: j0.j
            @Override // x.w1.i
            public final void a(w1.h hVar) {
                t.i(t.this, w1Var, hVar);
            }
        });
        w1Var.s(surface, tVar.f31796i, new Consumer() { // from class: j0.k
            @Override // androidx.core.util.Consumer
            public final void accept(Object obj) {
                t.e(t.this, w1Var, surfaceTexture, surface, (w1.g) obj);
            }
        });
        surfaceTexture.setOnFrameAvailableListener(tVar, tVar.f31797o);
    }

    public static /* synthetic */ void p(t tVar, Runnable runnable, Runnable runnable2) {
        if (tVar.f31803u) {
            runnable.run();
        } else {
            runnable2.run();
        }
    }

    private void q() {
        if (this.f31803u && this.f31802t == 0) {
            for (l1 l1Var : this.f31801s.keySet()) {
                l1Var.close();
            }
            for (b bVar : this.f31804v) {
                bVar.a().f(new Exception("Failed to snapshot: DefaultSurfaceProcessor is released."));
            }
            this.f31801s.clear();
            this.f31794d.k();
            this.f31795e.quit();
        }
    }

    private void r(Runnable runnable) {
        s(runnable, new Runnable() { // from class: j0.m
            @Override // java.lang.Runnable
            public final void run() {
                t.m();
            }
        });
    }

    private void s(final Runnable runnable, final Runnable runnable2) {
        try {
            this.f31796i.execute(new Runnable() { // from class: j0.n
                @Override // java.lang.Runnable
                public final void run() {
                    t.p(t.this, runnable2, runnable);
                }
            });
        } catch (RejectedExecutionException e10) {
            y0.m("DefaultSurfaceProcessor", "Unable to executor runnable", e10);
            runnable2.run();
        }
    }

    private void t(Throwable th2) {
        for (b bVar : this.f31804v) {
            bVar.a().f(th2);
        }
        this.f31804v.clear();
    }

    private Bitmap u(Size size, float[] fArr, int i10) {
        float[] fArr2 = (float[]) fArr.clone();
        b0.m.c(fArr2, i10, 0.5f, 0.5f);
        b0.m.d(fArr2, 0.5f);
        return this.f31794d.p(b0.q.o(size, i10), fArr2);
    }

    private void v(final x.z zVar, final Map map) {
        try {
            androidx.concurrent.futures.c.a(new c.InterfaceC0026c() { // from class: j0.r
                @Override // androidx.concurrent.futures.c.InterfaceC0026c
                public final Object a(c.a aVar) {
                    return t.l(t.this, zVar, map, aVar);
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

    private void w(ir.u uVar) {
        if (this.f31804v.isEmpty()) {
            return;
        }
        if (uVar == null) {
            t(new Exception("Failed to snapshot: no JPEG Surface."));
            return;
        }
        try {
            ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
            Iterator it = this.f31804v.iterator();
            int i10 = -1;
            int i11 = -1;
            Bitmap bitmap = null;
            byte[] bArr = null;
            while (it.hasNext()) {
                b bVar = (b) it.next();
                if (i10 != bVar.c() || bitmap == null) {
                    i10 = bVar.c();
                    if (bitmap != null) {
                        bitmap.recycle();
                    }
                    bitmap = u((Size) uVar.e(), (float[]) uVar.f(), i10);
                    i11 = -1;
                }
                if (i11 != bVar.b()) {
                    byteArrayOutputStream.reset();
                    i11 = bVar.b();
                    bitmap.compress(Bitmap.CompressFormat.JPEG, i11, byteArrayOutputStream);
                    bArr = byteArrayOutputStream.toByteArray();
                }
                Objects.requireNonNull(bArr);
                ImageProcessingUtil.o((Surface) uVar.d(), bArr);
                bVar.a().c(null);
                it.remove();
            }
            byteArrayOutputStream.close();
        } catch (IOException e10) {
            t(e10);
        }
    }

    @Override // x.m1
    public void a(final l1 l1Var) {
        if (this.f31798p.get()) {
            l1Var.close();
            return;
        }
        Runnable runnable = new Runnable() { // from class: j0.e
            @Override // java.lang.Runnable
            public final void run() {
                t.j(t.this, l1Var);
            }
        };
        Objects.requireNonNull(l1Var);
        s(runnable, new f(l1Var));
    }

    @Override // x.m1
    public void b(final w1 w1Var) {
        if (this.f31798p.get()) {
            w1Var.v();
            return;
        }
        Runnable runnable = new Runnable() { // from class: j0.g
            @Override // java.lang.Runnable
            public final void run() {
                t.o(t.this, w1Var);
            }
        };
        Objects.requireNonNull(w1Var);
        s(runnable, new h(w1Var));
    }

    @Override // j0.p0
    public ListenableFuture c(final int i10, final int i11) {
        return d0.n.s(androidx.concurrent.futures.c.a(new c.InterfaceC0026c() { // from class: j0.o
            @Override // androidx.concurrent.futures.c.InterfaceC0026c
            public final Object a(c.a aVar) {
                return t.h(t.this, i10, i11, aVar);
            }
        }));
    }

    @Override // android.graphics.SurfaceTexture.OnFrameAvailableListener
    public void onFrameAvailable(SurfaceTexture surfaceTexture) {
        boolean z10;
        if (!this.f31798p.get()) {
            surfaceTexture.updateTexImage();
            surfaceTexture.getTransformMatrix(this.f31799q);
            ir.u uVar = null;
            for (Map.Entry entry : this.f31801s.entrySet()) {
                Surface surface = (Surface) entry.getValue();
                l1 l1Var = (l1) entry.getKey();
                l1Var.h1(this.f31800r, this.f31799q);
                if (l1Var.getFormat() == 34) {
                    try {
                        this.f31794d.n(surfaceTexture.getTimestamp(), this.f31800r, surface);
                    } catch (RuntimeException e10) {
                        y0.d("DefaultSurfaceProcessor", "Failed to render with OpenGL.", e10);
                    }
                } else {
                    boolean z11 = false;
                    if (l1Var.getFormat() == 256) {
                        z10 = true;
                    } else {
                        z10 = false;
                    }
                    b2.e.j(z10, "Unsupported format: " + l1Var.getFormat());
                    if (uVar == null) {
                        z11 = true;
                    }
                    b2.e.j(z11, "Only one JPEG output is supported.");
                    uVar = new ir.u(surface, l1Var.getSize(), (float[]) this.f31800r.clone());
                }
            }
            try {
                w(uVar);
            } catch (RuntimeException e11) {
                t(e11);
            }
        }
    }

    @Override // j0.p0
    public void release() {
        if (this.f31798p.getAndSet(true)) {
            return;
        }
        r(new Runnable() { // from class: j0.i
            @Override // java.lang.Runnable
            public final void run() {
                t.f(t.this);
            }
        });
    }

    t(x.z zVar, Map map) {
        this.f31798p = new AtomicBoolean(false);
        this.f31799q = new float[16];
        this.f31800r = new float[16];
        this.f31801s = new LinkedHashMap();
        this.f31802t = 0;
        this.f31803u = false;
        this.f31804v = new ArrayList();
        HandlerThread handlerThread = new HandlerThread("GL Thread");
        this.f31795e = handlerThread;
        handlerThread.start();
        Handler handler = new Handler(handlerThread.getLooper());
        this.f31797o = handler;
        this.f31796i = c0.a.e(handler);
        this.f31794d = new x();
        try {
            v(zVar, map);
        } catch (RuntimeException e10) {
            release();
            throw e10;
        }
    }
}
