package q;

import a0.w0;
import android.hardware.camera2.CameraCaptureSession;
import android.hardware.camera2.CameraDevice;
import android.hardware.camera2.CaptureRequest;
import android.os.Handler;
import android.view.Surface;
import androidx.concurrent.futures.c;
import com.google.common.util.concurrent.ListenableFuture;
import java.util.List;
import java.util.Objects;
import java.util.concurrent.CancellationException;
import java.util.concurrent.Executor;
import java.util.concurrent.ScheduledExecutorService;
import q.g4;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class m4 extends g4.c implements g4, g4.a {

    /* renamed from: b  reason: collision with root package name */
    final c3 f43500b;

    /* renamed from: c  reason: collision with root package name */
    final Handler f43501c;

    /* renamed from: d  reason: collision with root package name */
    final Executor f43502d;

    /* renamed from: e  reason: collision with root package name */
    private final ScheduledExecutorService f43503e;

    /* renamed from: f  reason: collision with root package name */
    g4.c f43504f;

    /* renamed from: g  reason: collision with root package name */
    r.g f43505g;

    /* renamed from: h  reason: collision with root package name */
    ListenableFuture f43506h;

    /* renamed from: i  reason: collision with root package name */
    c.a f43507i;

    /* renamed from: j  reason: collision with root package name */
    private ListenableFuture f43508j;

    /* renamed from: a  reason: collision with root package name */
    final Object f43499a = new Object();

    /* renamed from: k  reason: collision with root package name */
    private List f43509k = null;

    /* renamed from: l  reason: collision with root package name */
    private boolean f43510l = false;

    /* renamed from: m  reason: collision with root package name */
    private boolean f43511m = false;

    /* renamed from: n  reason: collision with root package name */
    private boolean f43512n = false;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class b extends CameraCaptureSession.StateCallback {
        b() {
        }

        @Override // android.hardware.camera2.CameraCaptureSession.StateCallback
        public void onActive(CameraCaptureSession cameraCaptureSession) {
            m4.this.B(cameraCaptureSession);
            m4 m4Var = m4.this;
            m4Var.o(m4Var);
        }

        @Override // android.hardware.camera2.CameraCaptureSession.StateCallback
        public void onCaptureQueueEmpty(CameraCaptureSession cameraCaptureSession) {
            m4.this.B(cameraCaptureSession);
            m4 m4Var = m4.this;
            m4Var.p(m4Var);
        }

        @Override // android.hardware.camera2.CameraCaptureSession.StateCallback
        public void onClosed(CameraCaptureSession cameraCaptureSession) {
            m4.this.B(cameraCaptureSession);
            m4 m4Var = m4.this;
            m4Var.q(m4Var);
        }

        @Override // android.hardware.camera2.CameraCaptureSession.StateCallback
        public void onConfigureFailed(CameraCaptureSession cameraCaptureSession) {
            c.a aVar;
            try {
                m4.this.B(cameraCaptureSession);
                m4 m4Var = m4.this;
                m4Var.r(m4Var);
                synchronized (m4.this.f43499a) {
                    b2.e.h(m4.this.f43507i, "OpenCaptureSession completer should not null");
                    m4 m4Var2 = m4.this;
                    aVar = m4Var2.f43507i;
                    m4Var2.f43507i = null;
                }
                aVar.f(new IllegalStateException("onConfigureFailed"));
            } catch (Throwable th2) {
                synchronized (m4.this.f43499a) {
                    b2.e.h(m4.this.f43507i, "OpenCaptureSession completer should not null");
                    m4 m4Var3 = m4.this;
                    c.a aVar2 = m4Var3.f43507i;
                    m4Var3.f43507i = null;
                    aVar2.f(new IllegalStateException("onConfigureFailed"));
                    throw th2;
                }
            }
        }

        @Override // android.hardware.camera2.CameraCaptureSession.StateCallback
        public void onConfigured(CameraCaptureSession cameraCaptureSession) {
            c.a aVar;
            try {
                m4.this.B(cameraCaptureSession);
                m4 m4Var = m4.this;
                m4Var.s(m4Var);
                synchronized (m4.this.f43499a) {
                    b2.e.h(m4.this.f43507i, "OpenCaptureSession completer should not null");
                    m4 m4Var2 = m4.this;
                    aVar = m4Var2.f43507i;
                    m4Var2.f43507i = null;
                }
                aVar.c(null);
            } catch (Throwable th2) {
                synchronized (m4.this.f43499a) {
                    b2.e.h(m4.this.f43507i, "OpenCaptureSession completer should not null");
                    m4 m4Var3 = m4.this;
                    c.a aVar2 = m4Var3.f43507i;
                    m4Var3.f43507i = null;
                    aVar2.c(null);
                    throw th2;
                }
            }
        }

        @Override // android.hardware.camera2.CameraCaptureSession.StateCallback
        public void onReady(CameraCaptureSession cameraCaptureSession) {
            m4.this.B(cameraCaptureSession);
            m4 m4Var = m4.this;
            m4Var.t(m4Var);
        }

        @Override // android.hardware.camera2.CameraCaptureSession.StateCallback
        public void onSurfacePrepared(CameraCaptureSession cameraCaptureSession, Surface surface) {
            m4.this.B(cameraCaptureSession);
            m4 m4Var = m4.this;
            m4Var.v(m4Var, surface);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public m4(c3 c3Var, Executor executor, ScheduledExecutorService scheduledExecutorService, Handler handler) {
        this.f43500b = c3Var;
        this.f43501c = handler;
        this.f43502d = executor;
        this.f43503e = scheduledExecutorService;
    }

    public static /* synthetic */ void w(m4 m4Var, g4 g4Var) {
        m4Var.f43500b.g(m4Var);
        m4Var.A(g4Var);
        if (m4Var.f43505g != null) {
            Objects.requireNonNull(m4Var.f43504f);
            m4Var.f43504f.q(g4Var);
            return;
        }
        x.y0.l("SyncCaptureSessionBase", "[" + m4Var + "] Cannot call onClosed() when the CameraCaptureSession is not correctly configured.");
    }

    public static /* synthetic */ Object x(m4 m4Var, List list, r.b0 b0Var, s.p pVar, c.a aVar) {
        boolean z10;
        String str;
        synchronized (m4Var.f43499a) {
            m4Var.C(list);
            if (m4Var.f43507i == null) {
                z10 = true;
            } else {
                z10 = false;
            }
            b2.e.j(z10, "The openCaptureSessionCompleter can only set once!");
            m4Var.f43507i = aVar;
            b0Var.a(pVar);
            str = "openCaptureSession[session=" + m4Var + "]";
        }
        return str;
    }

    public static /* synthetic */ void y(m4 m4Var, g4 g4Var) {
        Objects.requireNonNull(m4Var.f43504f);
        m4Var.f43504f.u(g4Var);
    }

    public static /* synthetic */ ListenableFuture z(m4 m4Var, List list, List list2) {
        m4Var.getClass();
        x.y0.a("SyncCaptureSessionBase", "[" + m4Var + "] getSurface done with results: " + list2);
        if (list2.isEmpty()) {
            return d0.n.n(new IllegalArgumentException("Unable to open capture session without surfaces"));
        }
        if (list2.contains(null)) {
            return d0.n.n(new w0.a("Surface closed", (a0.w0) list.get(list2.indexOf(null))));
        }
        return d0.n.p(list2);
    }

    void B(CameraCaptureSession cameraCaptureSession) {
        if (this.f43505g == null) {
            this.f43505g = r.g.d(cameraCaptureSession, this.f43501c);
        }
    }

    void C(List list) {
        synchronized (this.f43499a) {
            E();
            a0.z0.d(list);
            this.f43509k = list;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean D() {
        boolean z10;
        synchronized (this.f43499a) {
            if (this.f43506h != null) {
                z10 = true;
            } else {
                z10 = false;
            }
        }
        return z10;
    }

    void E() {
        synchronized (this.f43499a) {
            try {
                List list = this.f43509k;
                if (list != null) {
                    a0.z0.c(list);
                    this.f43509k = null;
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    @Override // q.g4.a
    public Executor a() {
        return this.f43502d;
    }

    @Override // q.g4.a
    public ListenableFuture b(final List list, long j10) {
        synchronized (this.f43499a) {
            try {
                if (this.f43511m) {
                    return d0.n.n(new CancellationException("Opener is disabled"));
                }
                d0.d f10 = d0.d.b(a0.z0.e(list, false, j10, a(), this.f43503e)).f(new d0.a() { // from class: q.i4
                    @Override // d0.a
                    public final ListenableFuture apply(Object obj) {
                        return m4.z(m4.this, list, (List) obj);
                    }
                }, a());
                this.f43508j = f10;
                return d0.n.s(f10);
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    @Override // q.g4
    public void close() {
        b2.e.h(this.f43505g, "Need to call openCaptureSession before using this API.");
        this.f43500b.h(this);
        this.f43505g.c().close();
        a().execute(new Runnable() { // from class: q.k4
            @Override // java.lang.Runnable
            public final void run() {
                m4.this.A(r0);
            }
        });
    }

    @Override // q.g4
    public void d() {
        E();
    }

    @Override // q.g4
    public void f() {
        b2.e.h(this.f43505g, "Need to call openCaptureSession before using this API.");
        this.f43505g.c().abortCaptures();
    }

    @Override // q.g4
    public CameraDevice g() {
        b2.e.g(this.f43505g);
        return this.f43505g.c().getDevice();
    }

    @Override // q.g4
    public int h(CaptureRequest captureRequest, CameraCaptureSession.CaptureCallback captureCallback) {
        b2.e.h(this.f43505g, "Need to call openCaptureSession before using this API.");
        return this.f43505g.b(captureRequest, a(), captureCallback);
    }

    @Override // q.g4.a
    public ListenableFuture i(CameraDevice cameraDevice, final s.p pVar, final List list) {
        synchronized (this.f43499a) {
            try {
                if (this.f43511m) {
                    return d0.n.n(new CancellationException("Opener is disabled"));
                }
                this.f43500b.k(this);
                final r.b0 b10 = r.b0.b(cameraDevice, this.f43501c);
                ListenableFuture a10 = androidx.concurrent.futures.c.a(new c.InterfaceC0026c() { // from class: q.l4
                    @Override // androidx.concurrent.futures.c.InterfaceC0026c
                    public final Object a(c.a aVar) {
                        return m4.x(m4.this, list, b10, pVar, aVar);
                    }
                });
                this.f43506h = a10;
                d0.n.j(a10, new a(), c0.a.a());
                return d0.n.s(this.f43506h);
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    @Override // q.g4
    public int j(List list, CameraCaptureSession.CaptureCallback captureCallback) {
        b2.e.h(this.f43505g, "Need to call openCaptureSession before using this API.");
        return this.f43505g.a(list, a(), captureCallback);
    }

    @Override // q.g4
    public r.g k() {
        b2.e.g(this.f43505g);
        return this.f43505g;
    }

    @Override // q.g4.a
    public s.p l(int i10, List list, g4.c cVar) {
        this.f43504f = cVar;
        return new s.p(i10, list, a(), new b());
    }

    @Override // q.g4
    public void m() {
        b2.e.h(this.f43505g, "Need to call openCaptureSession before using this API.");
        this.f43505g.c().stopRepeating();
    }

    @Override // q.g4.c
    public void o(g4 g4Var) {
        Objects.requireNonNull(this.f43504f);
        this.f43504f.o(g4Var);
    }

    @Override // q.g4.c
    public void p(g4 g4Var) {
        Objects.requireNonNull(this.f43504f);
        this.f43504f.p(g4Var);
    }

    @Override // q.g4.c
    public void q(final g4 g4Var) {
        ListenableFuture listenableFuture;
        synchronized (this.f43499a) {
            try {
                if (!this.f43510l) {
                    this.f43510l = true;
                    b2.e.h(this.f43506h, "Need to call openCaptureSession before using this API.");
                    listenableFuture = this.f43506h;
                } else {
                    listenableFuture = null;
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
        d();
        if (listenableFuture != null) {
            listenableFuture.a(new Runnable() { // from class: q.h4
                @Override // java.lang.Runnable
                public final void run() {
                    m4.w(m4.this, g4Var);
                }
            }, c0.a.a());
        }
    }

    @Override // q.g4.c
    public void r(g4 g4Var) {
        Objects.requireNonNull(this.f43504f);
        d();
        this.f43500b.i(this);
        this.f43504f.r(g4Var);
    }

    @Override // q.g4.c
    public void s(g4 g4Var) {
        Objects.requireNonNull(this.f43504f);
        this.f43500b.j(this);
        this.f43504f.s(g4Var);
    }

    @Override // q.g4.a
    public boolean stop() {
        boolean z10;
        ListenableFuture listenableFuture = null;
        try {
            synchronized (this.f43499a) {
                if (!this.f43511m) {
                    ListenableFuture listenableFuture2 = this.f43508j;
                    if (listenableFuture2 != null) {
                        listenableFuture = listenableFuture2;
                    }
                    this.f43511m = true;
                }
                z10 = !D();
            }
            return z10;
        } finally {
            if (listenableFuture != null) {
                listenableFuture.cancel(true);
            }
        }
    }

    @Override // q.g4.c
    public void t(g4 g4Var) {
        Objects.requireNonNull(this.f43504f);
        this.f43504f.t(g4Var);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // q.g4.c
    /* renamed from: u */
    public void A(final g4 g4Var) {
        ListenableFuture listenableFuture;
        synchronized (this.f43499a) {
            try {
                if (!this.f43512n) {
                    this.f43512n = true;
                    b2.e.h(this.f43506h, "Need to call openCaptureSession before using this API.");
                    listenableFuture = this.f43506h;
                } else {
                    listenableFuture = null;
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
        if (listenableFuture != null) {
            listenableFuture.a(new Runnable() { // from class: q.j4
                @Override // java.lang.Runnable
                public final void run() {
                    m4.y(m4.this, g4Var);
                }
            }, c0.a.a());
        }
    }

    @Override // q.g4.c
    public void v(g4 g4Var, Surface surface) {
        Objects.requireNonNull(this.f43504f);
        this.f43504f.v(g4Var, surface);
    }

    @Override // q.g4
    public g4.c c() {
        return this;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class a implements d0.c {
        a() {
        }

        @Override // d0.c
        public void onFailure(Throwable th2) {
            m4.this.d();
            m4 m4Var = m4.this;
            m4Var.f43500b.i(m4Var);
        }

        @Override // d0.c
        /* renamed from: a */
        public void onSuccess(Void r12) {
        }
    }

    @Override // q.g4
    public void e(int i10) {
    }
}
