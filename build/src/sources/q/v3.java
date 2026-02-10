package q;

import a0.a0;
import a0.p0;
import a0.r0;
import android.graphics.PointF;
import android.graphics.Rect;
import android.hardware.camera2.CaptureRequest;
import android.hardware.camera2.CaptureResult;
import android.hardware.camera2.TotalCaptureResult;
import android.hardware.camera2.params.MeteringRectangle;
import android.os.Build;
import android.util.Log;
import android.util.Rational;
import androidx.concurrent.futures.c;
import com.google.common.util.concurrent.ListenableFuture;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Iterator;
import java.util.List;
import java.util.concurrent.Executor;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.ScheduledFuture;
import java.util.concurrent.TimeUnit;
import p.a;
import q.u;
import x.j;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class v3 {

    /* renamed from: x  reason: collision with root package name */
    private static final MeteringRectangle[] f43638x = new MeteringRectangle[0];

    /* renamed from: a  reason: collision with root package name */
    private final u f43639a;

    /* renamed from: b  reason: collision with root package name */
    final Executor f43640b;

    /* renamed from: c  reason: collision with root package name */
    private final ScheduledExecutorService f43641c;

    /* renamed from: f  reason: collision with root package name */
    private final u.m f43644f;

    /* renamed from: i  reason: collision with root package name */
    private ScheduledFuture f43647i;

    /* renamed from: j  reason: collision with root package name */
    private ScheduledFuture f43648j;

    /* renamed from: q  reason: collision with root package name */
    private MeteringRectangle[] f43655q;

    /* renamed from: r  reason: collision with root package name */
    private MeteringRectangle[] f43656r;

    /* renamed from: s  reason: collision with root package name */
    private MeteringRectangle[] f43657s;

    /* renamed from: t  reason: collision with root package name */
    c.a f43658t;

    /* renamed from: u  reason: collision with root package name */
    c.a f43659u;

    /* renamed from: v  reason: collision with root package name */
    private boolean f43660v;

    /* renamed from: w  reason: collision with root package name */
    private u.c f43661w;

    /* renamed from: d  reason: collision with root package name */
    private volatile boolean f43642d = false;

    /* renamed from: e  reason: collision with root package name */
    private volatile Rational f43643e = null;

    /* renamed from: g  reason: collision with root package name */
    private boolean f43645g = false;

    /* renamed from: h  reason: collision with root package name */
    Integer f43646h = 0;

    /* renamed from: k  reason: collision with root package name */
    long f43649k = 0;

    /* renamed from: l  reason: collision with root package name */
    boolean f43650l = false;

    /* renamed from: m  reason: collision with root package name */
    boolean f43651m = false;

    /* renamed from: n  reason: collision with root package name */
    private int f43652n = 1;

    /* renamed from: o  reason: collision with root package name */
    private u.c f43653o = null;

    /* renamed from: p  reason: collision with root package name */
    private u.c f43654p = null;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class a extends a0.k {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ c.a f43662a;

        a(c.a aVar) {
            this.f43662a = aVar;
        }

        @Override // a0.k
        public void a(int i10) {
            c.a aVar = this.f43662a;
            if (aVar != null) {
                aVar.f(new j.a("Camera is closed"));
            }
        }

        @Override // a0.k
        public void b(int i10, a0.u uVar) {
            c.a aVar = this.f43662a;
            if (aVar != null) {
                aVar.c(uVar);
            }
        }

        @Override // a0.k
        public void c(int i10, a0.m mVar) {
            c.a aVar = this.f43662a;
            if (aVar != null) {
                aVar.f(new a0.c(mVar));
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class b extends a0.k {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ c.a f43664a;

        b(c.a aVar) {
            this.f43664a = aVar;
        }

        @Override // a0.k
        public void a(int i10) {
            c.a aVar = this.f43664a;
            if (aVar != null) {
                aVar.f(new j.a("Camera is closed"));
            }
        }

        @Override // a0.k
        public void b(int i10, a0.u uVar) {
            if (this.f43664a != null) {
                x.y0.a("FocusMeteringControl", "triggerAePrecapture: triggering capture request completed");
                this.f43664a.c(null);
            }
        }

        @Override // a0.k
        public void c(int i10, a0.m mVar) {
            c.a aVar = this.f43664a;
            if (aVar != null) {
                aVar.f(new a0.c(mVar));
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public v3(u uVar, ScheduledExecutorService scheduledExecutorService, Executor executor, a0.d2 d2Var) {
        MeteringRectangle[] meteringRectangleArr = f43638x;
        this.f43655q = meteringRectangleArr;
        this.f43656r = meteringRectangleArr;
        this.f43657s = meteringRectangleArr;
        this.f43658t = null;
        this.f43659u = null;
        this.f43660v = false;
        this.f43661w = null;
        this.f43639a = uVar;
        this.f43640b = executor;
        this.f43641c = scheduledExecutorService;
        this.f43644f = new u.m(d2Var);
    }

    private Rational B() {
        if (this.f43643e != null) {
            return this.f43643e;
        }
        Rect z10 = this.f43639a.z();
        return new Rational(z10.width(), z10.height());
    }

    private static PointF C(x.b1 b1Var, Rational rational, Rational rational2, int i10, u.m mVar) {
        if (b1Var.b() != null) {
            rational2 = b1Var.b();
        }
        PointF a10 = mVar.a(b1Var, i10);
        if (!rational2.equals(rational)) {
            if (rational2.compareTo(rational) > 0) {
                float doubleValue = (float) (rational2.doubleValue() / rational.doubleValue());
                a10.y = (((float) ((doubleValue - 1.0d) / 2.0d)) + a10.y) * (1.0f / doubleValue);
                return a10;
            }
            float doubleValue2 = (float) (rational.doubleValue() / rational2.doubleValue());
            a10.x = (((float) ((doubleValue2 - 1.0d) / 2.0d)) + a10.x) * (1.0f / doubleValue2);
        }
        return a10;
    }

    private static MeteringRectangle D(x.b1 b1Var, PointF pointF, Rect rect) {
        int width = (int) (rect.left + (pointF.x * rect.width()));
        int height = (int) (rect.top + (pointF.y * rect.height()));
        int a10 = ((int) (b1Var.a() * rect.width())) / 2;
        int a11 = ((int) (b1Var.a() * rect.height())) / 2;
        Rect rect2 = new Rect(width - a10, height - a11, width + a10, height + a11);
        rect2.left = I(rect2.left, rect.right, rect.left);
        rect2.right = I(rect2.right, rect.right, rect.left);
        rect2.top = I(rect2.top, rect.bottom, rect.top);
        rect2.bottom = I(rect2.bottom, rect.bottom, rect.top);
        return new MeteringRectangle(rect2, 1000);
    }

    private List E(List list, int i10, Rational rational, Rect rect, int i11) {
        if (!list.isEmpty() && i10 != 0) {
            ArrayList arrayList = new ArrayList();
            Rational rational2 = new Rational(rect.width(), rect.height());
            Iterator it = list.iterator();
            while (it.hasNext()) {
                x.b1 b1Var = (x.b1) it.next();
                if (arrayList.size() == i10) {
                    break;
                } else if (H(b1Var)) {
                    MeteringRectangle D = D(b1Var, C(b1Var, rational2, rational, i11, this.f43644f), rect);
                    if (D.getWidth() != 0 && D.getHeight() != 0) {
                        arrayList.add(D);
                    }
                }
            }
            return Collections.unmodifiableList(arrayList);
        }
        return Collections.EMPTY_LIST;
    }

    private boolean F() {
        if (this.f43639a.K(1) == 1) {
            return true;
        }
        return false;
    }

    private static boolean H(x.b1 b1Var) {
        if (b1Var.c() >= 0.0f && b1Var.c() <= 1.0f && b1Var.d() >= 0.0f && b1Var.d() <= 1.0f) {
            return true;
        }
        return false;
    }

    private static int I(int i10, int i11, int i12) {
        return Math.min(Math.max(i10, i12), i11);
    }

    private boolean M() {
        if (this.f43655q.length > 0) {
            return true;
        }
        return false;
    }

    public static /* synthetic */ boolean a(v3 v3Var, int i10, long j10, TotalCaptureResult totalCaptureResult) {
        v3Var.getClass();
        if (((Integer) totalCaptureResult.get(CaptureResult.CONTROL_AF_MODE)).intValue() == i10 && u.U(totalCaptureResult, j10)) {
            v3Var.t();
            return true;
        }
        return false;
    }

    public static /* synthetic */ void b(v3 v3Var, boolean z10, c.a aVar) {
        v3Var.f43639a.W(v3Var.f43661w);
        v3Var.f43660v = z10;
        v3Var.w(aVar);
    }

    public static /* synthetic */ Object c(final v3 v3Var, final x.b0 b0Var, final long j10, final c.a aVar) {
        v3Var.f43640b.execute(new Runnable() { // from class: q.i3
            @Override // java.lang.Runnable
            public final void run() {
                v3.this.P(aVar, b0Var, j10);
            }
        });
        return "startFocusAndMetering";
    }

    public static /* synthetic */ Object f(final v3 v3Var, final boolean z10, final c.a aVar) {
        v3Var.f43640b.execute(new Runnable() { // from class: q.u3
            @Override // java.lang.Runnable
            public final void run() {
                v3.b(v3.this, z10, aVar);
            }
        });
        return "enableExternalFlashAeMode";
    }

    public static /* synthetic */ boolean h(v3 v3Var, long j10, c.a aVar, TotalCaptureResult totalCaptureResult) {
        boolean z10;
        v3Var.getClass();
        if (((Integer) totalCaptureResult.get(CaptureResult.CONTROL_AE_MODE)).intValue() == 5) {
            z10 = true;
        } else {
            z10 = false;
        }
        x.y0.a("FocusMeteringControl", "enableExternalFlashAeMode: isAeModeExternalFlash = " + z10);
        if (z10 != v3Var.f43660v || !u.U(totalCaptureResult, j10)) {
            return false;
        }
        x.y0.a("FocusMeteringControl", "enableExternalFlashAeMode: session updated with isAeModeExternalFlash = " + z10);
        if (aVar != null) {
            aVar.c(null);
        }
        return true;
    }

    public static /* synthetic */ Object i(final v3 v3Var, final c.a aVar) {
        v3Var.f43640b.execute(new Runnable() { // from class: q.j3
            @Override // java.lang.Runnable
            public final void run() {
                v3.this.R(aVar);
            }
        });
        return "triggerAePrecapture";
    }

    public static /* synthetic */ void j(v3 v3Var, long j10) {
        if (j10 == v3Var.f43649k) {
            v3Var.f43651m = false;
            v3Var.s(false);
        }
    }

    public static /* synthetic */ boolean k(v3 v3Var, boolean z10, long j10, TotalCaptureResult totalCaptureResult) {
        v3Var.getClass();
        Integer num = (Integer) totalCaptureResult.get(CaptureResult.CONTROL_AF_STATE);
        if (v3Var.M()) {
            if (z10 && num != null) {
                if (v3Var.f43646h.intValue() == 3) {
                    if (num.intValue() == 4) {
                        v3Var.f43651m = true;
                        v3Var.f43650l = true;
                    } else if (num.intValue() == 5) {
                        v3Var.f43651m = false;
                        v3Var.f43650l = true;
                    }
                }
            } else {
                v3Var.f43651m = true;
                v3Var.f43650l = true;
            }
        }
        if (v3Var.f43650l && u.U(totalCaptureResult, j10)) {
            v3Var.s(v3Var.f43651m);
            return true;
        }
        if (!v3Var.f43646h.equals(num) && num != null) {
            v3Var.f43646h = num;
        }
        return false;
    }

    public static /* synthetic */ void l(v3 v3Var, long j10) {
        if (j10 == v3Var.f43649k) {
            v3Var.q();
        }
    }

    private void r() {
        ScheduledFuture scheduledFuture = this.f43648j;
        if (scheduledFuture != null) {
            scheduledFuture.cancel(true);
            this.f43648j = null;
        }
    }

    private void t() {
        c.a aVar = this.f43659u;
        if (aVar != null) {
            aVar.c(null);
            this.f43659u = null;
        }
    }

    private void u() {
        ScheduledFuture scheduledFuture = this.f43647i;
        if (scheduledFuture != null) {
            scheduledFuture.cancel(true);
            this.f43647i = null;
        }
    }

    private void w(final c.a aVar) {
        if (!this.f43642d) {
            if (aVar != null) {
                aVar.f(new j.a("Camera is not active."));
                return;
            }
            return;
        }
        final long f02 = this.f43639a.f0();
        u.c cVar = new u.c() { // from class: q.k3
            @Override // q.u.c
            public final boolean a(TotalCaptureResult totalCaptureResult) {
                return v3.h(v3.this, f02, aVar, totalCaptureResult);
            }
        };
        this.f43661w = cVar;
        this.f43639a.v(cVar);
    }

    private void x(MeteringRectangle[] meteringRectangleArr, MeteringRectangle[] meteringRectangleArr2, MeteringRectangle[] meteringRectangleArr3, x.b0 b0Var, long j10) {
        final long f02;
        this.f43639a.W(this.f43653o);
        u();
        r();
        this.f43655q = meteringRectangleArr;
        this.f43656r = meteringRectangleArr2;
        this.f43657s = meteringRectangleArr3;
        if (M()) {
            this.f43645g = true;
            this.f43650l = false;
            this.f43651m = false;
            f02 = this.f43639a.f0();
            S(null, true);
        } else {
            this.f43645g = false;
            this.f43650l = true;
            this.f43651m = false;
            f02 = this.f43639a.f0();
        }
        this.f43646h = 0;
        final boolean F = F();
        u.c cVar = new u.c() { // from class: q.n3
            @Override // q.u.c
            public final boolean a(TotalCaptureResult totalCaptureResult) {
                return v3.k(v3.this, F, f02, totalCaptureResult);
            }
        };
        this.f43653o = cVar;
        this.f43639a.v(cVar);
        final long j11 = this.f43649k + 1;
        this.f43649k = j11;
        Runnable runnable = new Runnable() { // from class: q.o3
            @Override // java.lang.Runnable
            public final void run() {
                r0.f43640b.execute(new Runnable() { // from class: q.r3
                    @Override // java.lang.Runnable
                    public final void run() {
                        v3.j(v3.this, r2);
                    }
                });
            }
        };
        ScheduledExecutorService scheduledExecutorService = this.f43641c;
        TimeUnit timeUnit = TimeUnit.MILLISECONDS;
        this.f43648j = scheduledExecutorService.schedule(runnable, j10, timeUnit);
        if (b0Var.e()) {
            this.f43647i = this.f43641c.schedule(new Runnable() { // from class: q.p3
                @Override // java.lang.Runnable
                public final void run() {
                    r0.f43640b.execute(new Runnable() { // from class: q.q3
                        @Override // java.lang.Runnable
                        public final void run() {
                            v3.l(v3.this, r2);
                        }
                    });
                }
            }, b0Var.a(), timeUnit);
        }
    }

    private void y(String str) {
        this.f43639a.W(this.f43653o);
        c.a aVar = this.f43658t;
        if (aVar != null) {
            aVar.f(new j.a(str));
            this.f43658t = null;
        }
    }

    private void z(String str) {
        this.f43639a.W(this.f43654p);
        c.a aVar = this.f43659u;
        if (aVar != null) {
            aVar.f(new j.a(str));
            this.f43659u = null;
        }
    }

    int A() {
        if (this.f43652n == 3) {
            return 3;
        }
        return 4;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean G() {
        return this.f43660v;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void J(boolean z10) {
        if (z10 != this.f43642d) {
            this.f43642d = z10;
            if (!this.f43642d) {
                q();
            }
        }
    }

    public void K(Rational rational) {
        this.f43643e = rational;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void L(int i10) {
        this.f43652n = i10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public ListenableFuture N(x.b0 b0Var) {
        return O(b0Var, 5000L);
    }

    ListenableFuture O(final x.b0 b0Var, final long j10) {
        return androidx.concurrent.futures.c.a(new c.InterfaceC0026c() { // from class: q.l3
            @Override // androidx.concurrent.futures.c.InterfaceC0026c
            public final Object a(c.a aVar) {
                return v3.c(v3.this, b0Var, j10, aVar);
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void P(c.a aVar, x.b0 b0Var, long j10) {
        if (!this.f43642d) {
            aVar.f(new j.a("Camera is not active."));
            return;
        }
        Rect z10 = this.f43639a.z();
        Rational B = B();
        List E = E(b0Var.c(), this.f43639a.D(), B, z10, 1);
        List E2 = E(b0Var.b(), this.f43639a.C(), B, z10, 2);
        List E3 = E(b0Var.d(), this.f43639a.E(), B, z10, 4);
        if (E.isEmpty() && E2.isEmpty() && E3.isEmpty()) {
            aVar.f(new IllegalArgumentException("None of the specified AF/AE/AWB MeteringPoints is supported on this camera."));
            return;
        }
        y("Cancelled by another startFocusAndMetering()");
        z("Cancelled by another startFocusAndMetering()");
        u();
        this.f43658t = aVar;
        MeteringRectangle[] meteringRectangleArr = f43638x;
        x((MeteringRectangle[]) E.toArray(meteringRectangleArr), (MeteringRectangle[]) E2.toArray(meteringRectangleArr), (MeteringRectangle[]) E3.toArray(meteringRectangleArr), b0Var, j10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public ListenableFuture Q() {
        return androidx.concurrent.futures.c.a(new c.InterfaceC0026c() { // from class: q.t3
            @Override // androidx.concurrent.futures.c.InterfaceC0026c
            public final Object a(c.a aVar) {
                return v3.i(v3.this, aVar);
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void R(c.a aVar) {
        x.y0.a("FocusMeteringControl", "triggerAePrecapture");
        if (!this.f43642d) {
            if (aVar != null) {
                aVar.f(new j.a("Camera is not active."));
                return;
            }
            return;
        }
        p0.a aVar2 = new p0.a();
        aVar2.t(this.f43652n);
        aVar2.u(true);
        a.C0582a c0582a = new a.C0582a();
        c0582a.f(CaptureRequest.CONTROL_AE_PRECAPTURE_TRIGGER, 1);
        aVar2.e(c0582a.c());
        aVar2.c(new b(aVar));
        this.f43639a.d0(Collections.singletonList(aVar2.h()));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void S(c.a aVar, boolean z10) {
        if (!this.f43642d) {
            if (aVar != null) {
                aVar.f(new j.a("Camera is not active."));
                return;
            }
            return;
        }
        p0.a aVar2 = new p0.a();
        aVar2.t(this.f43652n);
        aVar2.u(true);
        a.C0582a c0582a = new a.C0582a();
        c0582a.f(CaptureRequest.CONTROL_AF_TRIGGER, 1);
        if (z10) {
            c0582a.g(CaptureRequest.CONTROL_AE_MODE, Integer.valueOf(this.f43639a.I(1)), r0.c.HIGH_PRIORITY_REQUIRED);
        }
        aVar2.e(c0582a.c());
        aVar2.c(new a(aVar));
        this.f43639a.d0(Collections.singletonList(aVar2.h()));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void n(a.C0582a c0582a) {
        int A;
        if (this.f43645g) {
            A = 1;
        } else {
            A = A();
        }
        CaptureRequest.Key key = CaptureRequest.CONTROL_AF_MODE;
        Object valueOf = Integer.valueOf(this.f43639a.K(A));
        r0.c cVar = r0.c.REQUIRED;
        c0582a.g(key, valueOf, cVar);
        MeteringRectangle[] meteringRectangleArr = this.f43655q;
        if (meteringRectangleArr.length != 0) {
            c0582a.g(CaptureRequest.CONTROL_AF_REGIONS, meteringRectangleArr, cVar);
        }
        MeteringRectangle[] meteringRectangleArr2 = this.f43656r;
        if (meteringRectangleArr2.length != 0) {
            c0582a.g(CaptureRequest.CONTROL_AE_REGIONS, meteringRectangleArr2, cVar);
        }
        MeteringRectangle[] meteringRectangleArr3 = this.f43657s;
        if (meteringRectangleArr3.length != 0) {
            c0582a.g(CaptureRequest.CONTROL_AWB_REGIONS, meteringRectangleArr3, cVar);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void o(boolean z10, boolean z11) {
        if (!this.f43642d) {
            return;
        }
        p0.a aVar = new p0.a();
        aVar.u(true);
        aVar.t(this.f43652n);
        a.C0582a c0582a = new a.C0582a();
        if (z10) {
            c0582a.f(CaptureRequest.CONTROL_AF_TRIGGER, 2);
        }
        if (z11) {
            c0582a.f(CaptureRequest.CONTROL_AE_PRECAPTURE_TRIGGER, 2);
        }
        aVar.e(c0582a.c());
        this.f43639a.d0(Collections.singletonList(aVar.h()));
    }

    void p(c.a aVar) {
        z("Cancelled by another cancelFocusAndMetering()");
        y("Cancelled by cancelFocusAndMetering()");
        this.f43659u = aVar;
        u();
        r();
        if (M()) {
            o(true, false);
        }
        MeteringRectangle[] meteringRectangleArr = f43638x;
        this.f43655q = meteringRectangleArr;
        this.f43656r = meteringRectangleArr;
        this.f43657s = meteringRectangleArr;
        this.f43645g = false;
        final long f02 = this.f43639a.f0();
        if (this.f43659u != null) {
            final int K = this.f43639a.K(A());
            u.c cVar = new u.c() { // from class: q.m3
                @Override // q.u.c
                public final boolean a(TotalCaptureResult totalCaptureResult) {
                    return v3.a(v3.this, K, f02, totalCaptureResult);
                }
            };
            this.f43654p = cVar;
            this.f43639a.v(cVar);
        }
    }

    void q() {
        p(null);
    }

    void s(boolean z10) {
        r();
        c.a aVar = this.f43658t;
        if (aVar != null) {
            aVar.c(x.c0.a(z10));
            this.f43658t = null;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public ListenableFuture v(final boolean z10) {
        int i10 = Build.VERSION.SDK_INT;
        if (i10 < 28) {
            Log.d("FocusMeteringControl", "CONTROL_AE_MODE_ON_EXTERNAL_FLASH is not supported in API " + i10);
            return d0.n.p(null);
        } else if (this.f43639a.I(5) != 5) {
            Log.d("FocusMeteringControl", "CONTROL_AE_MODE_ON_EXTERNAL_FLASH is not supported in this device");
            return d0.n.p(null);
        } else {
            Log.d("FocusMeteringControl", "enableExternalFlashAeMode: CONTROL_AE_MODE_ON_EXTERNAL_FLASH supported");
            return androidx.concurrent.futures.c.a(new c.InterfaceC0026c() { // from class: q.s3
                @Override // androidx.concurrent.futures.c.InterfaceC0026c
                public final Object a(c.a aVar) {
                    return v3.f(v3.this, z10, aVar);
                }
            });
        }
    }
}
