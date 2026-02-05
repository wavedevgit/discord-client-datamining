package q;

import a0.a0;
import a0.i2;
import a0.p0;
import a0.r0;
import android.graphics.Rect;
import android.hardware.camera2.CameraCaptureSession;
import android.hardware.camera2.CameraCharacteristics;
import android.hardware.camera2.CaptureRequest;
import android.hardware.camera2.TotalCaptureResult;
import android.os.Build;
import android.util.ArrayMap;
import android.util.Rational;
import androidx.concurrent.futures.c;
import com.google.common.util.concurrent.ListenableFuture;
import java.util.Collections;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.Executor;
import java.util.concurrent.RejectedExecutionException;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.atomic.AtomicLong;
import p.a;
import q.u;
import w.j;
import x.j;
import x.n0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class u implements a0.a0 {

    /* renamed from: b  reason: collision with root package name */
    final b f47075b;

    /* renamed from: c  reason: collision with root package name */
    final Executor f47076c;

    /* renamed from: d  reason: collision with root package name */
    private final Object f47077d = new Object();

    /* renamed from: e  reason: collision with root package name */
    private final r.a0 f47078e;

    /* renamed from: f  reason: collision with root package name */
    private final a0.d f47079f;

    /* renamed from: g  reason: collision with root package name */
    private final i2.b f47080g;

    /* renamed from: h  reason: collision with root package name */
    private final v3 f47081h;

    /* renamed from: i  reason: collision with root package name */
    private final z4 f47082i;

    /* renamed from: j  reason: collision with root package name */
    private final w4 f47083j;

    /* renamed from: k  reason: collision with root package name */
    private final g3 f47084k;

    /* renamed from: l  reason: collision with root package name */
    b5 f47085l;

    /* renamed from: m  reason: collision with root package name */
    private final w.g f47086m;

    /* renamed from: n  reason: collision with root package name */
    private final z0 f47087n;

    /* renamed from: o  reason: collision with root package name */
    private final y4 f47088o;

    /* renamed from: p  reason: collision with root package name */
    private int f47089p;

    /* renamed from: q  reason: collision with root package name */
    private n0.i f47090q;

    /* renamed from: r  reason: collision with root package name */
    private volatile boolean f47091r;

    /* renamed from: s  reason: collision with root package name */
    private volatile int f47092s;

    /* renamed from: t  reason: collision with root package name */
    private final u.a f47093t;

    /* renamed from: u  reason: collision with root package name */
    private final u.b f47094u;

    /* renamed from: v  reason: collision with root package name */
    private final AtomicLong f47095v;

    /* renamed from: w  reason: collision with root package name */
    private volatile ListenableFuture f47096w;

    /* renamed from: x  reason: collision with root package name */
    private int f47097x;

    /* renamed from: y  reason: collision with root package name */
    private long f47098y;

    /* renamed from: z  reason: collision with root package name */
    private final a f47099z;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a extends a0.k {

        /* renamed from: a  reason: collision with root package name */
        Set f47100a = new HashSet();

        /* renamed from: b  reason: collision with root package name */
        Map f47101b = new ArrayMap();

        a() {
        }

        @Override // a0.k
        public void a(final int i10) {
            for (final a0.k kVar : this.f47100a) {
                try {
                    ((Executor) this.f47101b.get(kVar)).execute(new Runnable() { // from class: q.t
                        @Override // java.lang.Runnable
                        public final void run() {
                            a0.k.this.a(i10);
                        }
                    });
                } catch (RejectedExecutionException e10) {
                    x.y0.d("Camera2CameraControlImp", "Executor rejected to invoke onCaptureCancelled.", e10);
                }
            }
        }

        @Override // a0.k
        public void b(final int i10, final a0.u uVar) {
            for (final a0.k kVar : this.f47100a) {
                try {
                    ((Executor) this.f47101b.get(kVar)).execute(new Runnable() { // from class: q.s
                        @Override // java.lang.Runnable
                        public final void run() {
                            a0.k.this.b(i10, uVar);
                        }
                    });
                } catch (RejectedExecutionException e10) {
                    x.y0.d("Camera2CameraControlImp", "Executor rejected to invoke onCaptureCompleted.", e10);
                }
            }
        }

        @Override // a0.k
        public void c(final int i10, final a0.m mVar) {
            for (final a0.k kVar : this.f47100a) {
                try {
                    ((Executor) this.f47101b.get(kVar)).execute(new Runnable() { // from class: q.r
                        @Override // java.lang.Runnable
                        public final void run() {
                            a0.k.this.c(i10, mVar);
                        }
                    });
                } catch (RejectedExecutionException e10) {
                    x.y0.d("Camera2CameraControlImp", "Executor rejected to invoke onCaptureFailed.", e10);
                }
            }
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public void h(Executor executor, a0.k kVar) {
            this.f47100a.add(kVar);
            this.f47101b.put(kVar, executor);
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public void i(a0.k kVar) {
            this.f47100a.remove(kVar);
            this.f47101b.remove(kVar);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class b extends CameraCaptureSession.CaptureCallback {

        /* renamed from: a  reason: collision with root package name */
        final Set f47102a = new HashSet();

        /* renamed from: b  reason: collision with root package name */
        private final Executor f47103b;

        b(Executor executor) {
            this.f47103b = executor;
        }

        public static /* synthetic */ void a(b bVar, TotalCaptureResult totalCaptureResult) {
            bVar.getClass();
            HashSet hashSet = new HashSet();
            for (c cVar : bVar.f47102a) {
                if (cVar.a(totalCaptureResult)) {
                    hashSet.add(cVar);
                }
            }
            if (!hashSet.isEmpty()) {
                bVar.f47102a.removeAll(hashSet);
            }
        }

        void b(c cVar) {
            this.f47102a.add(cVar);
        }

        void c(c cVar) {
            this.f47102a.remove(cVar);
        }

        @Override // android.hardware.camera2.CameraCaptureSession.CaptureCallback
        public void onCaptureCompleted(CameraCaptureSession cameraCaptureSession, CaptureRequest captureRequest, final TotalCaptureResult totalCaptureResult) {
            this.f47103b.execute(new Runnable() { // from class: q.v
                @Override // java.lang.Runnable
                public final void run() {
                    u.b.a(u.b.this, totalCaptureResult);
                }
            });
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface c {
        boolean a(TotalCaptureResult totalCaptureResult);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public u(r.a0 a0Var, ScheduledExecutorService scheduledExecutorService, Executor executor, a0.d dVar, a0.d2 d2Var) {
        i2.b bVar = new i2.b();
        this.f47080g = bVar;
        this.f47089p = 0;
        this.f47091r = false;
        this.f47092s = 2;
        this.f47095v = new AtomicLong(0L);
        this.f47096w = d0.n.p(null);
        this.f47097x = 1;
        this.f47098y = 0L;
        a aVar = new a();
        this.f47099z = aVar;
        this.f47078e = a0Var;
        this.f47079f = dVar;
        this.f47076c = executor;
        this.f47088o = new y4(executor);
        b bVar2 = new b(executor);
        this.f47075b = bVar2;
        bVar.x(this.f47097x);
        bVar.j(q2.e(bVar2));
        bVar.j(aVar);
        this.f47084k = new g3(this, a0Var, executor);
        this.f47081h = new v3(this, scheduledExecutorService, executor, d2Var);
        this.f47082i = new z4(this, a0Var, executor);
        this.f47083j = new w4(this, a0Var, executor);
        this.f47085l = new f5(a0Var);
        this.f47093t = new u.a(d2Var);
        this.f47094u = new u.b(d2Var);
        this.f47086m = new w.g(this, executor);
        this.f47087n = new z0(this, a0Var, d2Var, executor, scheduledExecutorService);
    }

    public static int J(r.a0 a0Var, int i10) {
        int[] iArr = (int[]) a0Var.a(CameraCharacteristics.CONTROL_AE_AVAILABLE_MODES);
        if (iArr == null) {
            return 0;
        }
        if (T(i10, iArr)) {
            return i10;
        }
        if (!T(1, iArr)) {
            return 0;
        }
        return 1;
    }

    private int L(int i10) {
        int[] iArr = (int[]) this.f47078e.a(CameraCharacteristics.CONTROL_AWB_AVAILABLE_MODES);
        if (iArr == null) {
            return 0;
        }
        if (T(i10, iArr)) {
            return i10;
        }
        if (!T(1, iArr)) {
            return 0;
        }
        return 1;
    }

    private boolean R() {
        if (N() > 0) {
            return true;
        }
        return false;
    }

    private static boolean T(int i10, int[] iArr) {
        for (int i11 : iArr) {
            if (i10 == i11) {
                return true;
            }
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static boolean U(TotalCaptureResult totalCaptureResult, long j10) {
        Long l10;
        if (totalCaptureResult.getRequest() == null) {
            return false;
        }
        Object tag = totalCaptureResult.getRequest().getTag();
        if (!(tag instanceof a0.q2) || (l10 = (Long) ((a0.q2) tag).d("CameraControlSessionUpdateId")) == null || l10.longValue() < j10) {
            return false;
        }
        return true;
    }

    private ListenableFuture g0(final long j10) {
        return androidx.concurrent.futures.c.a(new c.InterfaceC0029c() { // from class: q.k
            @Override // androidx.concurrent.futures.c.InterfaceC0029c
            public final Object a(c.a aVar) {
                return u.q(u.this, j10, aVar);
            }
        });
    }

    public static /* synthetic */ void l() {
    }

    public static /* synthetic */ void m() {
    }

    public static /* synthetic */ Object q(u uVar, final long j10, final c.a aVar) {
        uVar.getClass();
        uVar.v(new c() { // from class: q.l
            @Override // q.u.c
            public final boolean a(TotalCaptureResult totalCaptureResult) {
                return u.u(j10, aVar, totalCaptureResult);
            }
        });
        return "waitForSessionUpdateId:" + j10;
    }

    public static /* synthetic */ Object r(final u uVar, final c.a aVar) {
        uVar.f47076c.execute(new Runnable() { // from class: q.h
            @Override // java.lang.Runnable
            public final void run() {
                d0.n.t(r0.g0(u.this.f0()), aVar);
            }
        });
        return "updateSessionConfigAsync";
    }

    public static /* synthetic */ boolean u(long j10, c.a aVar, TotalCaptureResult totalCaptureResult) {
        if (U(totalCaptureResult, j10)) {
            aVar.c(null);
            return true;
        }
        return false;
    }

    public int A() {
        return this.f47092s;
    }

    public v3 B() {
        return this.f47081h;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int C() {
        Integer num = (Integer) this.f47078e.a(CameraCharacteristics.CONTROL_MAX_REGIONS_AE);
        if (num == null) {
            return 0;
        }
        return num.intValue();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int D() {
        Integer num = (Integer) this.f47078e.a(CameraCharacteristics.CONTROL_MAX_REGIONS_AF);
        if (num == null) {
            return 0;
        }
        return num.intValue();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int E() {
        Integer num = (Integer) this.f47078e.a(CameraCharacteristics.CONTROL_MAX_REGIONS_AWB);
        if (num == null) {
            return 0;
        }
        return num.intValue();
    }

    public n0.i F() {
        return this.f47090q;
    }

    public a0.i2 G() {
        this.f47080g.x(this.f47097x);
        this.f47080g.t(H());
        this.f47080g.n("CameraControlSessionUpdateId", Long.valueOf(this.f47098y));
        return this.f47080g.o();
    }

    a0.r0 H() {
        int i10;
        a.C0564a c0564a = new a.C0564a();
        CaptureRequest.Key key = CaptureRequest.CONTROL_MODE;
        r0.c cVar = r0.c.REQUIRED;
        c0564a.g(key, 1, cVar);
        this.f47081h.n(c0564a);
        this.f47093t.a(c0564a);
        this.f47082i.a(c0564a);
        if (this.f47081h.G()) {
            i10 = 5;
        } else {
            i10 = 1;
        }
        if (this.f47091r) {
            c0564a.g(CaptureRequest.FLASH_MODE, 2, cVar);
        } else {
            int i11 = this.f47092s;
            if (i11 != 0) {
                if (i11 != 1) {
                    if (i11 == 2) {
                        i10 = 1;
                    }
                } else {
                    i10 = 3;
                }
            } else {
                i10 = this.f47094u.a(2);
            }
        }
        c0564a.g(CaptureRequest.CONTROL_AE_MODE, Integer.valueOf(I(i10)), cVar);
        c0564a.g(CaptureRequest.CONTROL_AWB_MODE, Integer.valueOf(L(1)), cVar);
        this.f47084k.c(c0564a);
        this.f47086m.i(c0564a);
        return c0564a.c();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int I(int i10) {
        return J(this.f47078e, i10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int K(int i10) {
        int[] iArr = (int[]) this.f47078e.a(CameraCharacteristics.CONTROL_AF_AVAILABLE_MODES);
        if (iArr == null) {
            return 0;
        }
        if (T(i10, iArr)) {
            return i10;
        }
        if (T(4, iArr)) {
            return 4;
        }
        if (!T(1, iArr)) {
            return 0;
        }
        return 1;
    }

    public w4 M() {
        return this.f47083j;
    }

    int N() {
        int i10;
        synchronized (this.f47077d) {
            i10 = this.f47089p;
        }
        return i10;
    }

    public z4 O() {
        return this.f47082i;
    }

    public b5 P() {
        return this.f47085l;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void Q() {
        synchronized (this.f47077d) {
            this.f47089p++;
        }
    }

    public boolean S() {
        int a10 = this.f47088o.a();
        x.y0.a("Camera2CameraControlImp", "isInVideoUsage: mVideoUsageControl value = " + a10);
        if (a10 > 0) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean V() {
        return this.f47091r;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void W(c cVar) {
        this.f47075b.c(cVar);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void X(final a0.k kVar) {
        this.f47076c.execute(new Runnable() { // from class: q.m
            @Override // java.lang.Runnable
            public final void run() {
                u.this.f47099z.i(kVar);
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void Y() {
        b0(1);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void Z(boolean z10) {
        x.y0.a("Camera2CameraControlImp", "setActive: isActive = " + z10);
        this.f47081h.J(z10);
        this.f47082i.g(z10);
        this.f47083j.g(z10);
        this.f47084k.b(z10);
        this.f47086m.o(z10);
        if (!z10) {
            this.f47090q = null;
            this.f47088o.b();
        }
    }

    @Override // x.j
    public ListenableFuture a(boolean z10) {
        if (!R()) {
            return d0.n.n(new j.a("Camera is not active."));
        }
        return d0.n.s(this.f47083j.d(z10));
    }

    public void a0(Rational rational) {
        this.f47081h.K(rational);
    }

    @Override // a0.a0
    public void b(i2.b bVar) {
        this.f47085l.b(bVar);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void b0(int i10) {
        this.f47097x = i10;
        this.f47081h.L(i10);
        this.f47087n.g(this.f47097x);
    }

    @Override // a0.a0
    public ListenableFuture c(final List list, final int i10, final int i11) {
        if (!R()) {
            x.y0.l("Camera2CameraControlImp", "Camera is not active.");
            return d0.n.n(new j.a("Camera is not active."));
        }
        final int A = A();
        return d0.d.b(d0.n.s(this.f47096w)).f(new d0.a() { // from class: q.i
            @Override // d0.a
            public final ListenableFuture apply(Object obj) {
                ListenableFuture h10;
                Void r52 = (Void) obj;
                h10 = u.this.f47087n.h(list, i10, A, i11);
                return h10;
            }
        }, this.f47076c);
    }

    public void c0(boolean z10) {
        this.f47085l.d(z10);
    }

    @Override // a0.a0
    public Rect d() {
        Rect rect = (Rect) this.f47078e.a(CameraCharacteristics.SENSOR_INFO_ACTIVE_ARRAY_SIZE);
        if ("robolectric".equals(Build.FINGERPRINT) && rect == null) {
            return new Rect(0, 0, 4000, 3000);
        }
        return (Rect) b2.e.g(rect);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void d0(List list) {
        this.f47079f.b(list);
    }

    @Override // a0.a0
    public void e(n0.i iVar) {
        this.f47090q = iVar;
    }

    public ListenableFuture e0() {
        return d0.n.s(androidx.concurrent.futures.c.a(new c.InterfaceC0029c() { // from class: q.p
            @Override // androidx.concurrent.futures.c.InterfaceC0029c
            public final Object a(c.a aVar) {
                return u.r(u.this, aVar);
            }
        }));
    }

    @Override // a0.a0
    public void f(int i10) {
        if (!R()) {
            x.y0.l("Camera2CameraControlImp", "Camera is not active.");
            return;
        }
        this.f47092s = i10;
        x.y0.a("Camera2CameraControlImp", "setFlashMode: mFlashMode = " + this.f47092s);
        b5 b5Var = this.f47085l;
        boolean z10 = true;
        if (this.f47092s != 1 && this.f47092s != 0) {
            z10 = false;
        }
        b5Var.c(z10);
        this.f47096w = e0();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public long f0() {
        this.f47098y = this.f47095v.getAndIncrement();
        this.f47079f.a();
        return this.f47098y;
    }

    @Override // a0.a0
    public a0.r0 g() {
        return this.f47086m.n();
    }

    @Override // x.j
    public ListenableFuture h(x.b0 b0Var) {
        if (!R()) {
            return d0.n.n(new j.a("Camera is not active."));
        }
        return d0.n.s(this.f47081h.N(b0Var));
    }

    @Override // a0.a0
    public ListenableFuture i(final int i10, final int i11) {
        if (!R()) {
            x.y0.l("Camera2CameraControlImp", "Camera is not active.");
            return d0.n.n(new j.a("Camera is not active."));
        }
        final int A = A();
        return d0.d.b(d0.n.s(this.f47096w)).f(new d0.a() { // from class: q.j
            @Override // d0.a
            public final ListenableFuture apply(Object obj) {
                ListenableFuture p10;
                Void r52 = (Void) obj;
                p10 = d0.n.p(u.this.f47087n.c(i10, A, i11));
                return p10;
            }
        }, this.f47076c);
    }

    @Override // a0.a0
    public void j() {
        this.f47086m.j().a(new Runnable() { // from class: q.q
            @Override // java.lang.Runnable
            public final void run() {
                u.m();
            }
        }, c0.a.a());
    }

    @Override // a0.a0
    public void k(a0.r0 r0Var) {
        this.f47086m.g(j.a.e(r0Var).d()).a(new Runnable() { // from class: q.o
            @Override // java.lang.Runnable
            public final void run() {
                u.l();
            }
        }, c0.a.a());
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void v(c cVar) {
        this.f47075b.b(cVar);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void w(final Executor executor, final a0.k kVar) {
        this.f47076c.execute(new Runnable() { // from class: q.n
            @Override // java.lang.Runnable
            public final void run() {
                u.this.f47099z.h(executor, kVar);
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void x() {
        synchronized (this.f47077d) {
            try {
                int i10 = this.f47089p;
                if (i10 != 0) {
                    this.f47089p = i10 - 1;
                } else {
                    throw new IllegalStateException("Decrementing use count occurs more times than incrementing");
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void y(boolean z10) {
        this.f47091r = z10;
        if (!z10) {
            p0.a aVar = new p0.a();
            aVar.t(this.f47097x);
            aVar.u(true);
            a.C0564a c0564a = new a.C0564a();
            c0564a.f(CaptureRequest.CONTROL_AE_MODE, Integer.valueOf(I(1)));
            c0564a.f(CaptureRequest.FLASH_MODE, 0);
            aVar.e(c0564a.c());
            d0(Collections.singletonList(aVar.h()));
        }
        f0();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Rect z() {
        return this.f47082i.c();
    }
}
