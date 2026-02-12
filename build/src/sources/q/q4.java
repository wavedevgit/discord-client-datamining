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
    private final ScheduledExecutorService f43547o;

    /* renamed from: p  reason: collision with root package name */
    private final Object f43548p;

    /* renamed from: q  reason: collision with root package name */
    private List f43549q;

    /* renamed from: r  reason: collision with root package name */
    ListenableFuture f43550r;

    /* renamed from: s  reason: collision with root package name */
    private final u.i f43551s;

    /* renamed from: t  reason: collision with root package name */
    private final u.h f43552t;

    /* renamed from: u  reason: collision with root package name */
    private final u.t f43553u;

    /* renamed from: v  reason: collision with root package name */
    private final u.v f43554v;

    /* renamed from: w  reason: collision with root package name */
    private final AtomicBoolean f43555w;

    /* JADX INFO: Access modifiers changed from: package-private */
    public q4(a0.d2 d2Var, a0.d2 d2Var2, c3 c3Var, Executor executor, ScheduledExecutorService scheduledExecutorService, Handler handler) {
        super(c3Var, executor, scheduledExecutorService, handler);
        this.f43548p = new Object();
        boolean z10 = false;
        this.f43555w = new AtomicBoolean(false);
        this.f43551s = new u.i(d2Var, d2Var2);
        this.f43553u = new u.t((d2Var.a(CaptureSessionStuckQuirk.class) || d2Var.a(IncorrectCaptureStateQuirk.class)) ? true : true);
        this.f43552t = new u.h(d2Var2);
        this.f43554v = new u.v(d2Var2);
        this.f43547o = scheduledExecutorService;
    }

    public static /* synthetic */ ListenableFuture G(q4 q4Var, CameraDevice cameraDevice, s.p pVar, List list, List list2) {
        if (q4Var.f43554v.a()) {
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
        for (g4 g4Var : this.f43501b.d()) {
            g4Var.close();
        }
    }

    void J(String str) {
        x.y0.a("SyncCaptureSessionImpl", "[" + this + "] " + str);
    }

    @Override // q.m4, q.g4.a
    public ListenableFuture b(List list, long j10) {
        ListenableFuture b10;
        synchronized (this.f43548p) {
            this.f43549q = list;
            b10 = super.b(list, j10);
        }
        return b10;
    }

    @Override // q.m4, q.g4
    public void close() {
        if (!this.f43555w.compareAndSet(false, true)) {
            J("close() has been called. Skip this invocation.");
            return;
        }
        if (this.f43554v.a()) {
            try {
                J("Call abortCaptures() before closing session.");
                f();
            } catch (Exception e10) {
                J("Exception when calling abortCaptures()" + e10);
            }
        }
        J("Session call close()");
        this.f43553u.e().a(new Runnable() { // from class: q.o4
            @Override // java.lang.Runnable
            public final void run() {
                q4.H(q4.this);
            }
        }, a());
    }

    @Override // q.m4, q.g4
    public void d() {
        super.d();
        this.f43553u.g();
    }

    @Override // q.m4, q.g4
    public void e(int i10) {
        super.e(i10);
        if (i10 == 5) {
            synchronized (this.f43548p) {
                try {
                    if (D() && this.f43549q != null) {
                        J("Close DeferrableSurfaces for CameraDevice error.");
                        for (a0.w0 w0Var : this.f43549q) {
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
        return super.h(captureRequest, this.f43553u.d(captureCallback));
    }

    @Override // q.m4, q.g4.a
    public ListenableFuture i(final CameraDevice cameraDevice, final s.p pVar, final List list) {
        ListenableFuture s10;
        synchronized (this.f43548p) {
            try {
                List<g4> d10 = this.f43501b.d();
                ArrayList arrayList = new ArrayList();
                for (g4 g4Var : d10) {
                    arrayList.add(g4Var.n());
                }
                ListenableFuture w10 = d0.n.w(arrayList);
                this.f43550r = w10;
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
        return super.j(list, this.f43553u.d(captureCallback));
    }

    @Override // q.g4
    public ListenableFuture n() {
        return d0.n.q(1500L, this.f43547o, this.f43553u.e());
    }

    @Override // q.m4, q.g4.c
    public void q(g4 g4Var) {
        synchronized (this.f43548p) {
            this.f43551s.a(this.f43549q);
        }
        J("onClosed()");
        super.q(g4Var);
    }

    @Override // q.m4, q.g4.c
    public void s(g4 g4Var) {
        J("Session onConfigured()");
        this.f43552t.c(g4Var, this.f43501b.e(), this.f43501b.d(), new h.a() { // from class: q.n4
            @Override // u.h.a
            public final void a(g4 g4Var2) {
                super/*q.m4*/.s(g4Var2);
            }
        });
    }

    @Override // q.m4, q.g4.a
    public boolean stop() {
        boolean stop;
        synchronized (this.f43548p) {
            try {
                if (D()) {
                    this.f43551s.a(this.f43549q);
                } else {
                    ListenableFuture listenableFuture = this.f43550r;
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
