package q;

import android.hardware.camera2.CameraCaptureSession;
import android.hardware.camera2.CameraDevice;
import android.hardware.camera2.CaptureRequest;
import android.os.Handler;
import androidx.camera.camera2.internal.compat.quirk.CaptureSessionStuckQuirk;
import androidx.camera.camera2.internal.compat.quirk.IncorrectCaptureStateQuirk;
import com.google.common.util.concurrent.ListenableFuture;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.Executor;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.atomic.AtomicBoolean;
import u.h;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class q4 extends m4 {

    /* renamed from: o  reason: collision with root package name */
    private final ScheduledExecutorService f47027o;

    /* renamed from: p  reason: collision with root package name */
    private final Object f47028p;

    /* renamed from: q  reason: collision with root package name */
    private List f47029q;

    /* renamed from: r  reason: collision with root package name */
    ListenableFuture f47030r;

    /* renamed from: s  reason: collision with root package name */
    private final u.i f47031s;

    /* renamed from: t  reason: collision with root package name */
    private final u.h f47032t;

    /* renamed from: u  reason: collision with root package name */
    private final u.t f47033u;

    /* renamed from: v  reason: collision with root package name */
    private final u.v f47034v;

    /* renamed from: w  reason: collision with root package name */
    private final AtomicBoolean f47035w;

    /* JADX INFO: Access modifiers changed from: package-private */
    public q4(a0.d2 d2Var, a0.d2 d2Var2, c3 c3Var, Executor executor, ScheduledExecutorService scheduledExecutorService, Handler handler) {
        super(c3Var, executor, scheduledExecutorService, handler);
        this.f47028p = new Object();
        boolean z10 = false;
        this.f47035w = new AtomicBoolean(false);
        this.f47031s = new u.i(d2Var, d2Var2);
        this.f47033u = new u.t((d2Var.a(CaptureSessionStuckQuirk.class) || d2Var.a(IncorrectCaptureStateQuirk.class)) ? true : true);
        this.f47032t = new u.h(d2Var2);
        this.f47034v = new u.v(d2Var2);
        this.f47027o = scheduledExecutorService;
    }

    public static /* synthetic */ ListenableFuture G(q4 q4Var, CameraDevice cameraDevice, s.p pVar, List list, List list2) {
        if (q4Var.f47034v.a()) {
            q4Var.I();
        }
        q4Var.J("start openCaptureSession");
        return super.i(cameraDevice, pVar, list);
    }

    public static /* synthetic */ void H(q4 q4Var) {
        q4Var.J("Session call super.close()");
        super.close();
    }

    private void I() {
        for (g4 g4Var : this.f46981b.d()) {
            g4Var.close();
        }
    }

    void J(String str) {
        x.y0.a("SyncCaptureSessionImpl", "[" + this + "] " + str);
    }

    @Override // q.m4, q.g4.a
    public ListenableFuture b(List list, long j10) {
        ListenableFuture b10;
        synchronized (this.f47028p) {
            this.f47029q = list;
            b10 = super.b(list, j10);
        }
        return b10;
    }

    @Override // q.m4, q.g4
    public void close() {
        if (!this.f47035w.compareAndSet(false, true)) {
            J("close() has been called. Skip this invocation.");
            return;
        }
        if (this.f47034v.a()) {
            try {
                J("Call abortCaptures() before closing session.");
                f();
            } catch (Exception e10) {
                J("Exception when calling abortCaptures()" + e10);
            }
        }
        J("Session call close()");
        this.f47033u.e().a(new Runnable() { // from class: q.o4
            @Override // java.lang.Runnable
            public final void run() {
                q4.H(q4.this);
            }
        }, a());
    }

    @Override // q.m4, q.g4
    public void d() {
        super.d();
        this.f47033u.g();
    }

    @Override // q.m4, q.g4
    public void e(int i10) {
        super.e(i10);
        if (i10 == 5) {
            synchronized (this.f47028p) {
                try {
                    if (D() && this.f47029q != null) {
                        J("Close DeferrableSurfaces for CameraDevice error.");
                        for (a0.w0 w0Var : this.f47029q) {
                            w0Var.d();
                        }
                    }
                } catch (Throwable th2) {
                    throw th2;
                }
            }
        }
    }

    @Override // q.m4, q.g4
    public int h(CaptureRequest captureRequest, CameraCaptureSession.CaptureCallback captureCallback) {
        return super.h(captureRequest, this.f47033u.d(captureCallback));
    }

    @Override // q.m4, q.g4.a
    public ListenableFuture i(final CameraDevice cameraDevice, final s.p pVar, final List list) {
        ListenableFuture s10;
        synchronized (this.f47028p) {
            try {
                List<g4> d10 = this.f46981b.d();
                ArrayList arrayList = new ArrayList();
                for (g4 g4Var : d10) {
                    arrayList.add(g4Var.n());
                }
                ListenableFuture w10 = d0.n.w(arrayList);
                this.f47030r = w10;
                s10 = d0.n.s(d0.d.b(w10).f(new d0.a() { // from class: q.p4
                    @Override // d0.a
                    public final ListenableFuture apply(Object obj) {
                        return q4.G(q4.this, cameraDevice, pVar, list, (List) obj);
                    }
                }, a()));
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return s10;
    }

    @Override // q.m4, q.g4
    public int j(List list, CameraCaptureSession.CaptureCallback captureCallback) {
        return super.j(list, this.f47033u.d(captureCallback));
    }

    @Override // q.g4
    public ListenableFuture n() {
        return d0.n.q(1500L, this.f47027o, this.f47033u.e());
    }

    @Override // q.m4, q.g4.c
    public void q(g4 g4Var) {
        synchronized (this.f47028p) {
            this.f47031s.a(this.f47029q);
        }
        J("onClosed()");
        super.q(g4Var);
    }

    @Override // q.m4, q.g4.c
    public void s(g4 g4Var) {
        J("Session onConfigured()");
        this.f47032t.c(g4Var, this.f46981b.e(), this.f46981b.d(), new h.a() { // from class: q.n4
            @Override // u.h.a
            public final void a(g4 g4Var2) {
                super/*q.m4*/.s(g4Var2);
            }
        });
    }

    @Override // q.m4, q.g4.a
    public boolean stop() {
        boolean stop;
        synchronized (this.f47028p) {
            try {
                if (D()) {
                    this.f47031s.a(this.f47029q);
                } else {
                    ListenableFuture listenableFuture = this.f47030r;
                    if (listenableFuture != null) {
                        listenableFuture.cancel(true);
                    }
                }
                stop = super.stop();
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return stop;
    }
}
