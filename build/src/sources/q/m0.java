package q;

import a0.a0;
import a0.e0;
import a0.i2;
import a0.l0;
import a0.p0;
import a0.w0;
import a0.w2;
import a0.y2;
import android.content.Context;
import android.graphics.SurfaceTexture;
import android.hardware.camera2.CameraDevice;
import android.hardware.camera2.CameraManager;
import android.media.CamcorderProfile;
import android.os.Handler;
import android.os.SystemClock;
import android.text.TextUtils;
import android.util.Rational;
import android.util.Size;
import android.view.Surface;
import androidx.camera.camera2.internal.compat.quirk.LegacyCameraOutputConfigNullPointerQuirk;
import androidx.camera.camera2.internal.compat.quirk.LegacyCameraSurfaceCleanupQuirk;
import androidx.concurrent.futures.c;
import com.discord.media.utils.DiscordVideoMediaSource;
import com.discord.misc.utilities.logThrottle.LogThrottleSingleton;
import com.facebook.react.views.text.ReactFontManager;
import com.google.common.util.concurrent.ListenableFuture;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import java.util.Objects;
import java.util.Set;
import java.util.concurrent.CancellationException;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.Executor;
import java.util.concurrent.RejectedExecutionException;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.ScheduledFuture;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.atomic.AtomicBoolean;
import java.util.concurrent.atomic.AtomicInteger;
import q.b4;
import q.g4;
import q.m0;
import x.q;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class m0 implements a0.e0 {
    final Map A;
    private int B;
    final e C;
    final f D;
    final y.a E;
    final a0.l0 F;
    private final boolean G;
    private final boolean H;
    private boolean I;
    private boolean J;
    private boolean K;
    private b4 L;
    private final c3 M;
    private final g4.b N;
    private final Set O;
    private a0.w P;
    final Object Q;
    boolean R;
    private final e3 S;
    private final r.a0 T;
    private final s.f U;
    private final f4 V;
    private final h W;

    /* renamed from: d  reason: collision with root package name */
    private final a0.w2 f46015d;

    /* renamed from: e  reason: collision with root package name */
    private final r.n0 f46016e;

    /* renamed from: i  reason: collision with root package name */
    private final Executor f46017i;

    /* renamed from: o  reason: collision with root package name */
    private final ScheduledExecutorService f46018o;

    /* renamed from: p  reason: collision with root package name */
    volatile i f46019p = i.INITIALIZED;

    /* renamed from: q  reason: collision with root package name */
    private final a0.p1 f46020q;

    /* renamed from: r  reason: collision with root package name */
    private final n2 f46021r;

    /* renamed from: s  reason: collision with root package name */
    private final u f46022s;

    /* renamed from: t  reason: collision with root package name */
    private final j f46023t;

    /* renamed from: u  reason: collision with root package name */
    final s0 f46024u;

    /* renamed from: v  reason: collision with root package name */
    CameraDevice f46025v;

    /* renamed from: w  reason: collision with root package name */
    int f46026w;

    /* renamed from: x  reason: collision with root package name */
    z2 f46027x;

    /* renamed from: y  reason: collision with root package name */
    final AtomicInteger f46028y;

    /* renamed from: z  reason: collision with root package name */
    c.a f46029z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class a implements q.f {
        a() {
        }

        @Override // q.f
        public CamcorderProfile a(int i10, int i11) {
            return CamcorderProfile.get(i10, i11);
        }

        @Override // q.f
        public boolean b(int i10, int i11) {
            return CamcorderProfile.hasProfile(i10, i11);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class b extends CameraDevice.StateCallback {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ c.a f46031a;

        b(c.a aVar) {
            this.f46031a = aVar;
        }

        @Override // android.hardware.camera2.CameraDevice.StateCallback
        public void onClosed(CameraDevice cameraDevice) {
            m0.this.U("openCameraConfigAndClose camera closed");
            this.f46031a.c(null);
        }

        @Override // android.hardware.camera2.CameraDevice.StateCallback
        public void onDisconnected(CameraDevice cameraDevice) {
            m0.this.U("openCameraConfigAndClose camera disconnected");
            this.f46031a.c(null);
        }

        @Override // android.hardware.camera2.CameraDevice.StateCallback
        public void onError(CameraDevice cameraDevice, int i10) {
            m0 m0Var = m0.this;
            m0Var.U("openCameraConfigAndClose camera error " + i10);
            this.f46031a.c(null);
        }

        @Override // android.hardware.camera2.CameraDevice.StateCallback
        public void onOpened(final CameraDevice cameraDevice) {
            m0.this.U("openCameraConfigAndClose camera opened");
            ListenableFuture R = m0.this.R(cameraDevice);
            Objects.requireNonNull(cameraDevice);
            R.a(new Runnable() { // from class: q.n0
                @Override // java.lang.Runnable
                public final void run() {
                    cameraDevice.close();
                }
            }, m0.this.f46017i);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class d implements d0.c {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ z2 f46035a;

        d(z2 z2Var) {
            this.f46035a = z2Var;
        }

        @Override // d0.c
        /* renamed from: a */
        public void onSuccess(Void r22) {
            if (m0.this.E.c() == 2 && m0.this.f46019p == i.OPENED) {
                m0.this.s0(i.CONFIGURED);
            }
        }

        @Override // d0.c
        public void onFailure(Throwable th2) {
            if (th2 instanceof w0.a) {
                a0.i2 W = m0.this.W(((w0.a) th2).a());
                if (W != null) {
                    m0.this.n0(W);
                }
            } else if (th2 instanceof CancellationException) {
                m0.this.U("Unable to configure camera cancelled");
            } else {
                i iVar = m0.this.f46019p;
                i iVar2 = i.OPENED;
                if (iVar == iVar2) {
                    m0.this.t0(iVar2, q.a.b(4, th2));
                }
                x.y0.d("Camera2CameraImpl", "Unable to configure camera " + m0.this, th2);
                m0 m0Var = m0.this;
                if (m0Var.f46027x == this.f46035a) {
                    m0Var.q0(false);
                }
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public final class e extends CameraManager.AvailabilityCallback implements l0.c {

        /* renamed from: a  reason: collision with root package name */
        private final String f46037a;

        /* renamed from: b  reason: collision with root package name */
        private boolean f46038b = true;

        e(String str) {
            this.f46037a = str;
        }

        @Override // a0.l0.c
        public void a() {
            if (m0.this.f46019p == i.PENDING_OPEN) {
                m0.this.B0(false);
            }
        }

        boolean b() {
            return this.f46038b;
        }

        @Override // android.hardware.camera2.CameraManager.AvailabilityCallback
        public void onCameraAvailable(String str) {
            if (this.f46037a.equals(str)) {
                this.f46038b = true;
                if (m0.this.f46019p == i.PENDING_OPEN) {
                    m0.this.B0(false);
                }
            }
        }

        @Override // android.hardware.camera2.CameraManager.AvailabilityCallback
        public void onCameraUnavailable(String str) {
            if (!this.f46037a.equals(str)) {
                return;
            }
            this.f46038b = false;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    final class f implements l0.b {
        f() {
        }

        @Override // a0.l0.b
        public void a() {
            if (m0.this.f46019p == i.OPENED) {
                m0.this.l0();
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    final class g implements a0.d {
        g() {
        }

        @Override // a0.a0.d
        public void a() {
            m0.this.C0();
        }

        @Override // a0.a0.d
        public void b(List list) {
            m0.this.v0((List) b2.e.g(list));
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public enum i {
        RELEASED,
        RELEASING,
        INITIALIZED,
        PENDING_OPEN,
        CLOSING,
        REOPENING_QUIRK,
        REOPENING,
        OPENING,
        OPENED,
        CONFIGURED
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public final class j extends CameraDevice.StateCallback {

        /* renamed from: a  reason: collision with root package name */
        private final Executor f46058a;

        /* renamed from: b  reason: collision with root package name */
        private final ScheduledExecutorService f46059b;

        /* renamed from: c  reason: collision with root package name */
        private b f46060c;

        /* renamed from: d  reason: collision with root package name */
        ScheduledFuture f46061d;

        /* renamed from: e  reason: collision with root package name */
        private final a f46062e;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public class a {

            /* renamed from: a  reason: collision with root package name */
            private final long f46064a;

            /* renamed from: b  reason: collision with root package name */
            private long f46065b = -1;

            a(long j10) {
                this.f46064a = j10;
            }

            boolean a() {
                if (b() >= d()) {
                    e();
                    return false;
                }
                return true;
            }

            long b() {
                long uptimeMillis = SystemClock.uptimeMillis();
                if (this.f46065b == -1) {
                    this.f46065b = uptimeMillis;
                }
                return uptimeMillis - this.f46065b;
            }

            int c() {
                if (!j.this.f()) {
                    return ReactFontManager.TypefaceStyle.BOLD;
                }
                long b10 = b();
                if (b10 <= 120000) {
                    return 1000;
                }
                if (b10 <= LogThrottleSingleton.RATE_LIMIT_FIVE_MINUTES) {
                    return 2000;
                }
                return 4000;
            }

            int d() {
                if (!j.this.f()) {
                    long j10 = this.f46064a;
                    if (j10 <= 0) {
                        return 10000;
                    }
                    return Math.min((int) j10, 10000);
                }
                long j11 = this.f46064a;
                if (j11 <= 0) {
                    return 1800000;
                }
                return Math.min((int) j11, 1800000);
            }

            void e() {
                this.f46065b = -1L;
            }
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public class b implements Runnable {

            /* renamed from: d  reason: collision with root package name */
            private Executor f46067d;

            /* renamed from: e  reason: collision with root package name */
            private boolean f46068e = false;

            b(Executor executor) {
                this.f46067d = executor;
            }

            public static /* synthetic */ void a(b bVar) {
                boolean z10;
                if (!bVar.f46068e) {
                    if (m0.this.f46019p != i.REOPENING && m0.this.f46019p != i.REOPENING_QUIRK) {
                        z10 = false;
                    } else {
                        z10 = true;
                    }
                    b2.e.i(z10);
                    if (j.this.f()) {
                        m0.this.A0(true);
                    } else {
                        m0.this.B0(true);
                    }
                }
            }

            void b() {
                this.f46068e = true;
            }

            @Override // java.lang.Runnable
            public void run() {
                this.f46067d.execute(new Runnable() { // from class: q.q0
                    @Override // java.lang.Runnable
                    public final void run() {
                        m0.j.b.a(m0.j.b.this);
                    }
                });
            }
        }

        j(Executor executor, ScheduledExecutorService scheduledExecutorService, long j10) {
            this.f46058a = executor;
            this.f46059b = scheduledExecutorService;
            this.f46062e = new a(j10);
        }

        private void b(CameraDevice cameraDevice, int i10) {
            boolean z10;
            int i11;
            if (m0.this.f46019p != i.OPENING && m0.this.f46019p != i.OPENED && m0.this.f46019p != i.CONFIGURED && m0.this.f46019p != i.REOPENING && m0.this.f46019p != i.REOPENING_QUIRK) {
                z10 = false;
            } else {
                z10 = true;
            }
            b2.e.j(z10, "Attempt to handle open error from non open state: " + m0.this.f46019p);
            if (i10 != 1 && i10 != 2 && i10 != 4) {
                x.y0.c("Camera2CameraImpl", "Error observed on open (or opening) camera device " + cameraDevice.getId() + ": " + m0.a0(i10) + " closing camera.");
                if (i10 == 3) {
                    i11 = 5;
                } else {
                    i11 = 6;
                }
                m0.this.t0(i.CLOSING, q.a.a(i11));
                m0.this.P(false);
                return;
            }
            x.y0.a("Camera2CameraImpl", String.format("Attempt to reopen camera[%s] after error[%s]", cameraDevice.getId(), m0.a0(i10)));
            c(i10);
        }

        private void c(int i10) {
            boolean z10;
            int i11 = 1;
            if (m0.this.f46026w != 0) {
                z10 = true;
            } else {
                z10 = false;
            }
            b2.e.j(z10, "Can only reopen camera device after error if the camera device is actually in an error state.");
            if (i10 != 1) {
                if (i10 != 2) {
                    i11 = 3;
                }
            } else {
                i11 = 2;
            }
            m0.this.t0(i.REOPENING, q.a.a(i11));
            m0.this.P(false);
        }

        boolean a() {
            if (this.f46061d == null) {
                return false;
            }
            m0 m0Var = m0.this;
            m0Var.U("Cancelling scheduled re-open: " + this.f46060c);
            this.f46060c.b();
            this.f46060c = null;
            this.f46061d.cancel(false);
            this.f46061d = null;
            return true;
        }

        void d() {
            this.f46062e.e();
        }

        void e() {
            boolean z10;
            boolean z11 = true;
            if (this.f46060c == null) {
                z10 = true;
            } else {
                z10 = false;
            }
            b2.e.i(z10);
            if (this.f46061d != null) {
                z11 = false;
            }
            b2.e.i(z11);
            if (this.f46062e.a()) {
                this.f46060c = new b(this.f46058a);
                m0.this.U("Attempting camera re-open in " + this.f46062e.c() + "ms: " + this.f46060c + " activeResuming = " + m0.this.R);
                this.f46061d = this.f46059b.schedule(this.f46060c, (long) this.f46062e.c(), TimeUnit.MILLISECONDS);
                return;
            }
            x.y0.c("Camera2CameraImpl", "Camera reopening attempted for " + this.f46062e.d() + "ms without success.");
            m0.this.u0(i.PENDING_OPEN, null, false);
        }

        boolean f() {
            m0 m0Var = m0.this;
            if (m0Var.R) {
                int i10 = m0Var.f46026w;
                if (i10 == 1 || i10 == 2) {
                    return true;
                }
                return false;
            }
            return false;
        }

        @Override // android.hardware.camera2.CameraDevice.StateCallback
        public void onClosed(CameraDevice cameraDevice) {
            boolean z10;
            m0.this.U("CameraDevice.onClosed()");
            if (m0.this.f46025v == null) {
                z10 = true;
            } else {
                z10 = false;
            }
            b2.e.j(z10, "Unexpected onClose callback on camera device: " + cameraDevice);
            int ordinal = m0.this.f46019p.ordinal();
            if (ordinal != 1 && ordinal != 4) {
                if (ordinal != 5 && ordinal != 6) {
                    throw new IllegalStateException("Camera closed while in state: " + m0.this.f46019p);
                }
                m0 m0Var = m0.this;
                if (m0Var.f46026w != 0) {
                    m0Var.U("Camera closed due to error: " + m0.a0(m0.this.f46026w));
                    e();
                    return;
                }
                m0Var.B0(false);
                return;
            }
            b2.e.i(m0.this.e0());
            m0.this.S();
        }

        @Override // android.hardware.camera2.CameraDevice.StateCallback
        public void onDisconnected(CameraDevice cameraDevice) {
            m0.this.U("CameraDevice.onDisconnected()");
            onError(cameraDevice, 1);
        }

        @Override // android.hardware.camera2.CameraDevice.StateCallback
        public void onError(CameraDevice cameraDevice, int i10) {
            m0 m0Var = m0.this;
            m0Var.f46025v = cameraDevice;
            m0Var.f46026w = i10;
            m0Var.W.b();
            int ordinal = m0.this.f46019p.ordinal();
            if (ordinal != 1) {
                switch (ordinal) {
                    case 4:
                        break;
                    case 5:
                    case 6:
                    case 7:
                    case 8:
                    case 9:
                        x.y0.a("Camera2CameraImpl", String.format("CameraDevice.onError(): %s failed with %s while in %s state. Will attempt recovering from error.", cameraDevice.getId(), m0.a0(i10), m0.this.f46019p.name()));
                        b(cameraDevice, i10);
                        return;
                    default:
                        throw new IllegalStateException("onError() should not be possible from state: " + m0.this.f46019p);
                }
            }
            x.y0.c("Camera2CameraImpl", String.format("CameraDevice.onError(): %s failed with %s while in %s state. Will finish closing camera.", cameraDevice.getId(), m0.a0(i10), m0.this.f46019p.name()));
            m0.this.P(false);
        }

        @Override // android.hardware.camera2.CameraDevice.StateCallback
        public void onOpened(CameraDevice cameraDevice) {
            m0.this.U("CameraDevice.onOpened()");
            m0 m0Var = m0.this;
            m0Var.f46025v = cameraDevice;
            m0Var.f46026w = 0;
            d();
            int ordinal = m0.this.f46019p.ordinal();
            if (ordinal != 1 && ordinal != 4) {
                if (ordinal != 5 && ordinal != 6 && ordinal != 7) {
                    throw new IllegalStateException("onOpened() should not be possible from state: " + m0.this.f46019p);
                }
                m0.this.s0(i.OPENED);
                a0.l0 l0Var = m0.this.F;
                String id2 = cameraDevice.getId();
                m0 m0Var2 = m0.this;
                if (l0Var.j(id2, m0Var2.E.b(m0Var2.f46025v.getId()))) {
                    m0.this.l0();
                    return;
                }
                return;
            }
            b2.e.i(m0.this.e0());
            m0.this.f46025v.close();
            m0.this.f46025v = null;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static abstract class k {
        static k a(String str, Class cls, a0.i2 i2Var, a0.x2 x2Var, Size size, a0.m2 m2Var, List list) {
            return new q.d(str, cls, i2Var, x2Var, size, m2Var, list);
        }

        static k b(x.x1 x1Var, boolean z10) {
            a0.i2 u10;
            String c02 = m0.c0(x1Var);
            Class<?> cls = x1Var.getClass();
            if (z10) {
                u10 = x1Var.w();
            } else {
                u10 = x1Var.u();
            }
            return a(c02, cls, u10, x1Var.j(), x1Var.f(), x1Var.e(), m0.Z(x1Var));
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public abstract List c();

        /* JADX INFO: Access modifiers changed from: package-private */
        public abstract a0.i2 d();

        /* JADX INFO: Access modifiers changed from: package-private */
        public abstract a0.m2 e();

        /* JADX INFO: Access modifiers changed from: package-private */
        public abstract Size f();

        /* JADX INFO: Access modifiers changed from: package-private */
        public abstract a0.x2 g();

        /* JADX INFO: Access modifiers changed from: package-private */
        public abstract String h();

        /* JADX INFO: Access modifiers changed from: package-private */
        public abstract Class i();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public m0(Context context, r.n0 n0Var, String str, s0 s0Var, y.a aVar, a0.l0 l0Var, Executor executor, Handler handler, e3 e3Var, long j10) {
        a0.p1 p1Var = new a0.p1();
        this.f46020q = p1Var;
        this.f46026w = 0;
        this.f46028y = new AtomicInteger(0);
        this.A = new LinkedHashMap();
        this.B = 0;
        this.I = false;
        this.J = false;
        this.K = true;
        this.O = new HashSet();
        this.P = a0.z.a();
        this.Q = new Object();
        this.R = false;
        this.W = new h(this, null);
        this.f46016e = n0Var;
        this.E = aVar;
        this.F = l0Var;
        ScheduledExecutorService e10 = c0.a.e(handler);
        this.f46018o = e10;
        Executor f10 = c0.a.f(executor);
        this.f46017i = f10;
        this.f46023t = new j(f10, e10, j10);
        this.f46015d = new a0.w2(str);
        p1Var.e(e0.a.CLOSED);
        n2 n2Var = new n2(l0Var);
        this.f46021r = n2Var;
        c3 c3Var = new c3(f10);
        this.M = c3Var;
        this.S = e3Var;
        try {
            r.a0 c10 = n0Var.c(str);
            this.T = c10;
            u uVar = new u(c10, e10, f10, new g(), s0Var.e());
            this.f46022s = uVar;
            this.f46024u = s0Var;
            s0Var.p(uVar);
            s0Var.s(n2Var.a());
            this.U = s.f.a(c10);
            this.f46027x = g0();
            this.N = new g4.b(f10, e10, handler, c3Var, s0Var.e(), androidx.camera.camera2.internal.compat.quirk.b.c());
            this.G = s0Var.e().a(LegacyCameraOutputConfigNullPointerQuirk.class);
            this.H = s0Var.e().a(LegacyCameraSurfaceCleanupQuirk.class);
            e eVar = new e(str);
            this.C = eVar;
            f fVar = new f();
            this.D = fVar;
            l0Var.g(this, f10, fVar, eVar);
            n0Var.g(f10, eVar);
            this.V = new f4(context, str, n0Var, new a());
        } catch (r.f e11) {
            throw o2.a(e11);
        }
    }

    public static /* synthetic */ void B(m0 m0Var) {
        if (!m0Var.d0()) {
            return;
        }
        m0Var.r0(b0(m0Var.L), m0Var.L.h(), m0Var.L.i(), null, Collections.singletonList(y2.b.METERING_REPEATING));
    }

    public static /* synthetic */ void C(m0 m0Var, c.a aVar) {
        b4 b4Var = m0Var.L;
        if (b4Var == null) {
            aVar.c(Boolean.FALSE);
            return;
        }
        aVar.c(Boolean.valueOf(m0Var.f46015d.o(b0(b4Var))));
    }

    public static /* synthetic */ void D(m0 m0Var, String str, a0.i2 i2Var, a0.x2 x2Var, a0.m2 m2Var, List list) {
        m0Var.getClass();
        m0Var.U("Use case " + str + " ACTIVE");
        m0Var.f46015d.q(str, i2Var, x2Var, m2Var, list);
        m0Var.f46015d.u(str, i2Var, x2Var, m2Var, list);
        m0Var.C0();
    }

    private void D0() {
        boolean z10 = false;
        for (a0.x2 x2Var : this.f46015d.i()) {
            z10 |= x2Var.H(false);
        }
        this.f46022s.c0(z10);
    }

    public static /* synthetic */ void E(m0 m0Var, String str, a0.i2 i2Var, a0.x2 x2Var, a0.m2 m2Var, List list) {
        m0Var.getClass();
        m0Var.U("Use case " + str + " RESET");
        m0Var.f46015d.u(str, i2Var, x2Var, m2Var, list);
        m0Var.N();
        m0Var.q0(false);
        m0Var.C0();
        if (m0Var.f46019p == i.OPENED) {
            m0Var.l0();
        }
    }

    public static /* synthetic */ void F(m0 m0Var, List list) {
        m0Var.getClass();
        try {
            m0Var.y0(list);
        } finally {
            m0Var.f46022s.x();
        }
    }

    private void M() {
        b4 b4Var = this.L;
        if (b4Var != null) {
            String b02 = b0(b4Var);
            a0.w2 w2Var = this.f46015d;
            a0.i2 h10 = this.L.h();
            a0.x2 i10 = this.L.i();
            y2.b bVar = y2.b.METERING_REPEATING;
            w2Var.r(b02, h10, i10, null, Collections.singletonList(bVar));
            this.f46015d.q(b02, this.L.h(), this.L.i(), null, Collections.singletonList(bVar));
        }
    }

    private void N() {
        a0.i2 c10 = this.f46015d.g().c();
        a0.p0 j10 = c10.j();
        int size = j10.i().size();
        int size2 = c10.n().size();
        if (!c10.n().isEmpty()) {
            if (j10.i().isEmpty()) {
                if (this.L == null) {
                    this.L = new b4(this.f46024u.m(), this.S, new b4.c() { // from class: q.d0
                        @Override // q.b4.c
                        public final void a() {
                            m0.B(m0.this);
                        }
                    });
                }
                if (f0()) {
                    M();
                } else {
                    x.y0.c("Camera2CameraImpl", "Failed to add a repeating surface, CameraControl and ImageCapture may encounter issues due to the absence of repeating surface. Please add a UseCase (Preview or ImageAnalysis) that can provide a repeating surface for CameraControl and ImageCapture to function properly.");
                }
            } else if (size2 == 1 && size == 1) {
                p0();
            } else if (size >= 2) {
                p0();
            } else if (this.L != null && !f0()) {
                p0();
            } else {
                x.y0.a("Camera2CameraImpl", "No need to remove a previous mMeteringRepeating, SessionConfig Surfaces: " + size2 + ", CaptureConfig Surfaces: " + size);
            }
        }
    }

    private boolean O(p0.a aVar) {
        if (!aVar.l().isEmpty()) {
            x.y0.l("Camera2CameraImpl", "The capture config builder already has surface inside.");
            return false;
        }
        for (a0.i2 i2Var : this.f46015d.f()) {
            a0.p0 j10 = i2Var.j();
            List<a0.w0> i10 = j10.i();
            if (!i10.isEmpty()) {
                if (j10.h() != 0) {
                    aVar.s(j10.h());
                }
                if (j10.l() != 0) {
                    aVar.v(j10.l());
                }
                for (a0.w0 w0Var : i10) {
                    aVar.f(w0Var);
                }
            }
        }
        if (aVar.l().isEmpty()) {
            x.y0.l("Camera2CameraImpl", "Unable to find a repeating surface to attach to CaptureConfig");
            return false;
        }
        return true;
    }

    private void Q() {
        U("Closing camera.");
        boolean z10 = true;
        switch (this.f46019p.ordinal()) {
            case 3:
                if (this.f46025v != null) {
                    z10 = false;
                }
                b2.e.i(z10);
                s0(i.INITIALIZED);
                return;
            case 4:
            default:
                U("close() ignored due to being in state: " + this.f46019p);
                return;
            case 5:
            case 6:
            case 7:
                if (!this.f46023t.a() && !this.W.c()) {
                    z10 = false;
                }
                this.W.a();
                s0(i.CLOSING);
                if (z10) {
                    b2.e.i(e0());
                    S();
                    return;
                }
                return;
            case 8:
            case 9:
                s0(i.CLOSING);
                P(false);
                return;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public ListenableFuture R(CameraDevice cameraDevice) {
        final y2 y2Var = new y2(this.U);
        final SurfaceTexture surfaceTexture = new SurfaceTexture(0);
        surfaceTexture.setDefaultBufferSize(DiscordVideoMediaSource.DEFAULT_WIDTH, DiscordVideoMediaSource.DEFAULT_HEIGHT);
        final Surface surface = new Surface(surfaceTexture);
        final a0.k1 k1Var = new a0.k1(surface);
        k1Var.k().a(new Runnable() { // from class: q.f0
            @Override // java.lang.Runnable
            public final void run() {
                m0.u(surface, surfaceTexture);
            }
        }, c0.a.a());
        i2.b bVar = new i2.b();
        bVar.h(k1Var);
        bVar.x(1);
        U("Start configAndClose.");
        return d0.d.b(d0.n.z(y2Var.c(bVar.o(), cameraDevice, this.N.a()))).f(new d0.a() { // from class: q.g0
            @Override // d0.a
            public final ListenableFuture apply(Object obj) {
                return m0.z(y2.this, k1Var, (Void) obj);
            }
        }, this.f46017i);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void S() {
        boolean z10;
        if (this.f46019p != i.RELEASING && this.f46019p != i.CLOSING) {
            z10 = false;
        } else {
            z10 = true;
        }
        b2.e.i(z10);
        b2.e.i(this.A.isEmpty());
        if (!this.I) {
            X();
        } else if (this.J) {
            U("Ignored since configAndClose is processing");
        } else if (!this.C.b()) {
            this.I = false;
            X();
            U("Ignore configAndClose and finish the close flow directly since camera is unavailable.");
        } else {
            U("Open camera to configAndClose");
            ListenableFuture j02 = j0();
            this.J = true;
            j02.a(new Runnable() { // from class: q.i0
                @Override // java.lang.Runnable
                public final void run() {
                    m0.t(m0.this);
                }
            }, this.f46017i);
        }
    }

    private CameraDevice.StateCallback T() {
        ArrayList arrayList = new ArrayList(this.f46015d.g().c().c());
        arrayList.add(this.M.c());
        arrayList.add(this.f46023t);
        return k2.a(arrayList);
    }

    private void V(String str, Throwable th2) {
        x.y0.b("Camera2CameraImpl", String.format("{%s} %s", toString(), str), th2);
    }

    private int Y() {
        synchronized (this.Q) {
            try {
                if (this.E.c() == 2) {
                    return 1;
                }
                return 0;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    static List Z(x.x1 x1Var) {
        if (x1Var.g() == null) {
            return null;
        }
        return n0.f.g0(x1Var);
    }

    static String a0(int i10) {
        if (i10 != 0) {
            if (i10 != 1) {
                if (i10 != 2) {
                    if (i10 != 3) {
                        if (i10 != 4) {
                            if (i10 != 5) {
                                return "UNKNOWN ERROR";
                            }
                            return "ERROR_CAMERA_SERVICE";
                        }
                        return "ERROR_CAMERA_DEVICE";
                    }
                    return "ERROR_CAMERA_DISABLED";
                }
                return "ERROR_MAX_CAMERAS_IN_USE";
            }
            return "ERROR_CAMERA_IN_USE";
        }
        return "ERROR_NONE";
    }

    static String b0(b4 b4Var) {
        return b4Var.f() + b4Var.hashCode();
    }

    static String c0(x.x1 x1Var) {
        return x1Var.o() + x1Var.hashCode();
    }

    private boolean f0() {
        ArrayList arrayList = new ArrayList();
        int Y = Y();
        for (w2.b bVar : this.f46015d.j()) {
            if (bVar.c() == null || bVar.c().get(0) != y2.b.METERING_REPEATING) {
                if (bVar.e() != null && bVar.c() != null) {
                    a0.i2 d10 = bVar.d();
                    a0.x2 f10 = bVar.f();
                    for (a0.w0 w0Var : d10.n()) {
                        arrayList.add(a0.a.a(this.V.M(Y, f10.getInputFormat(), w0Var.h()), f10.getInputFormat(), w0Var.h(), bVar.e().b(), bVar.c(), bVar.e().d(), f10.u(null)));
                    }
                } else {
                    x.y0.l("Camera2CameraImpl", "Invalid stream spec or capture types in " + bVar);
                    return false;
                }
            }
        }
        b2.e.g(this.L);
        HashMap hashMap = new HashMap();
        hashMap.put(this.L.i(), Collections.singletonList(this.L.e()));
        try {
            this.V.A(Y, arrayList, hashMap, false, false);
            U("Surface combination with metering repeating supported!");
            return true;
        } catch (IllegalArgumentException e10) {
            V("Surface combination with metering repeating  not supported!", e10);
            return false;
        }
    }

    private z2 g0() {
        y2 y2Var;
        synchronized (this.Q) {
            y2Var = new y2(this.U, this.f46024u.e());
        }
        return y2Var;
    }

    private void h0(List list) {
        Iterator it = list.iterator();
        while (it.hasNext()) {
            x.x1 x1Var = (x.x1) it.next();
            String c02 = c0(x1Var);
            if (!this.O.contains(c02)) {
                this.O.add(c02);
                x1Var.L();
                x1Var.J();
            }
        }
    }

    private void i0(List list) {
        Iterator it = list.iterator();
        while (it.hasNext()) {
            x.x1 x1Var = (x.x1) it.next();
            String c02 = c0(x1Var);
            if (this.O.contains(c02)) {
                x1Var.M();
                this.O.remove(c02);
            }
        }
    }

    private ListenableFuture j0() {
        return androidx.concurrent.futures.c.a(new c.InterfaceC0027c() { // from class: q.x
            @Override // androidx.concurrent.futures.c.InterfaceC0027c
            public final Object a(c.a aVar) {
                return m0.n(m0.this, aVar);
            }
        });
    }

    private void k0(boolean z10) {
        if (!z10) {
            this.f46023t.d();
        }
        this.f46023t.a();
        this.W.a();
        U("Opening camera.");
        s0(i.OPENING);
        try {
            this.f46016e.f(this.f46024u.b(), this.f46017i, T());
        } catch (SecurityException e10) {
            U("Unable to open camera due to " + e10.getMessage());
            s0(i.REOPENING);
            this.f46023t.e();
        } catch (r.f e11) {
            U("Unable to open camera due to " + e11.getMessage());
            if (e11.d() != 10001) {
                this.W.d();
            } else {
                t0(i.INITIALIZED, q.a.b(7, e11));
            }
        }
    }

    private void m0() {
        int ordinal = this.f46019p.ordinal();
        boolean z10 = false;
        if (ordinal != 2 && ordinal != 3) {
            if (ordinal != 4) {
                U("open() ignored due to being in state: " + this.f46019p);
                return;
            }
            s0(i.REOPENING);
            if (!e0() && !this.J && this.f46026w == 0) {
                if (this.f46025v != null) {
                    z10 = true;
                }
                b2.e.j(z10, "Camera Device should be open if session close is not complete");
                s0(i.OPENED);
                l0();
                return;
            }
            return;
        }
        A0(false);
    }

    public static /* synthetic */ Object n(m0 m0Var, c.a aVar) {
        m0Var.getClass();
        try {
            ArrayList arrayList = new ArrayList(m0Var.f46015d.g().c().c());
            arrayList.add(m0Var.M.c());
            arrayList.add(new b(aVar));
            m0Var.f46016e.f(m0Var.f46024u.b(), m0Var.f46017i, k2.a(arrayList));
            return "configAndCloseTask";
        } catch (SecurityException | r.f e10) {
            m0Var.V("Unable to open camera for configAndClose: " + e10.getMessage(), e10);
            aVar.f(e10);
            return "configAndCloseTask";
        }
    }

    private void p0() {
        if (this.L != null) {
            a0.w2 w2Var = this.f46015d;
            w2Var.s(this.L.f() + this.L.hashCode());
            a0.w2 w2Var2 = this.f46015d;
            w2Var2.t(this.L.f() + this.L.hashCode());
            this.L.c();
            this.L = null;
        }
    }

    private void r0(final String str, final a0.i2 i2Var, final a0.x2 x2Var, final a0.m2 m2Var, final List list) {
        this.f46017i.execute(new Runnable() { // from class: q.b0
            @Override // java.lang.Runnable
            public final void run() {
                m0.E(m0.this, str, i2Var, x2Var, m2Var, list);
            }
        });
    }

    public static /* synthetic */ Object s(final m0 m0Var, final c.a aVar) {
        m0Var.getClass();
        try {
            m0Var.f46017i.execute(new Runnable() { // from class: q.h0
                @Override // java.lang.Runnable
                public final void run() {
                    m0.C(m0.this, aVar);
                }
            });
            return "isMeteringRepeatingAttached";
        } catch (RejectedExecutionException unused) {
            aVar.f(new RuntimeException("Unable to check if MeteringRepeating is attached. Camera executor shut down."));
            return "isMeteringRepeatingAttached";
        }
    }

    public static /* synthetic */ void t(m0 m0Var) {
        m0Var.J = false;
        m0Var.I = false;
        m0Var.U("OpenCameraConfigAndClose is done, state: " + m0Var.f46019p);
        int ordinal = m0Var.f46019p.ordinal();
        if (ordinal != 1 && ordinal != 4) {
            if (ordinal != 6) {
                m0Var.U("OpenCameraConfigAndClose finished while in state: " + m0Var.f46019p);
                return;
            } else if (m0Var.f46026w != 0) {
                m0Var.U("OpenCameraConfigAndClose in error: " + a0(m0Var.f46026w));
                m0Var.f46023t.e();
                return;
            } else {
                m0Var.B0(false);
                return;
            }
        }
        b2.e.i(m0Var.e0());
        m0Var.X();
    }

    public static /* synthetic */ void u(Surface surface, SurfaceTexture surfaceTexture) {
        surface.release();
        surfaceTexture.release();
    }

    public static /* synthetic */ void v(m0 m0Var, String str) {
        m0Var.getClass();
        m0Var.U("Use case " + str + " INACTIVE");
        m0Var.f46015d.t(str);
        m0Var.C0();
    }

    public static /* synthetic */ void w(m0 m0Var, boolean z10) {
        m0Var.R = z10;
        if (z10 && m0Var.f46019p == i.PENDING_OPEN) {
            m0Var.A0(false);
        }
    }

    private Collection w0(Collection collection) {
        ArrayList arrayList = new ArrayList();
        Iterator it = collection.iterator();
        while (it.hasNext()) {
            arrayList.add(k.b((x.x1) it.next(), this.K));
        }
        return arrayList;
    }

    public static /* synthetic */ void x(m0 m0Var, String str, a0.i2 i2Var, a0.x2 x2Var, a0.m2 m2Var, List list) {
        m0Var.getClass();
        m0Var.U("Use case " + str + " UPDATED");
        m0Var.f46015d.u(str, i2Var, x2Var, m2Var, list);
        m0Var.C0();
    }

    private void y0(Collection collection) {
        Size f10;
        boolean isEmpty = this.f46015d.h().isEmpty();
        ArrayList arrayList = new ArrayList();
        Iterator it = collection.iterator();
        Rational rational = null;
        while (it.hasNext()) {
            k kVar = (k) it.next();
            if (!this.f46015d.o(kVar.h())) {
                this.f46015d.r(kVar.h(), kVar.d(), kVar.g(), kVar.e(), kVar.c());
                arrayList.add(kVar.h());
                if (kVar.i() == x.g1.class && (f10 = kVar.f()) != null) {
                    rational = new Rational(f10.getWidth(), f10.getHeight());
                }
            }
        }
        if (!arrayList.isEmpty()) {
            U("Use cases [" + TextUtils.join(", ", arrayList) + "] now ATTACHED");
            if (isEmpty) {
                this.f46022s.Z(true);
                this.f46022s.Q();
            }
            N();
            D0();
            C0();
            q0(false);
            if (this.f46019p == i.OPENED) {
                l0();
            } else {
                m0();
            }
            if (rational != null) {
                this.f46022s.a0(rational);
            }
        }
    }

    public static /* synthetic */ ListenableFuture z(y2 y2Var, a0.w0 w0Var, Void r22) {
        y2Var.close();
        w0Var.d();
        return y2Var.f(false);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void z0(Collection collection) {
        ArrayList arrayList = new ArrayList();
        Iterator it = collection.iterator();
        boolean z10 = false;
        while (it.hasNext()) {
            k kVar = (k) it.next();
            if (this.f46015d.o(kVar.h())) {
                this.f46015d.p(kVar.h());
                arrayList.add(kVar.h());
                if (kVar.i() == x.g1.class) {
                    z10 = true;
                }
            }
        }
        if (!arrayList.isEmpty()) {
            U("Use cases [" + TextUtils.join(", ", arrayList) + "] now DETACHED for camera");
            if (z10) {
                this.f46022s.a0(null);
            }
            N();
            if (this.f46015d.i().isEmpty()) {
                this.f46022s.c0(false);
            } else {
                D0();
            }
            if (this.f46015d.h().isEmpty()) {
                this.f46022s.x();
                q0(false);
                this.f46022s.Z(false);
                this.f46027x = g0();
                Q();
                return;
            }
            C0();
            q0(false);
            if (this.f46019p == i.OPENED) {
                l0();
            }
        }
    }

    void A0(boolean z10) {
        U("Attempting to force open the camera.");
        if (!this.F.i(this)) {
            U("No cameras available. Waiting for available camera before opening camera.");
            s0(i.PENDING_OPEN);
            return;
        }
        k0(z10);
    }

    void B0(boolean z10) {
        U("Attempting to open the camera.");
        if (this.C.b() && this.F.i(this)) {
            k0(z10);
            return;
        }
        U("No cameras available. Waiting for available camera before opening camera.");
        s0(i.PENDING_OPEN);
    }

    void C0() {
        i2.h e10 = this.f46015d.e();
        if (e10.e()) {
            this.f46022s.b0(e10.c().o());
            e10.b(this.f46022s.G());
            this.f46027x.e(e10.c());
            return;
        }
        this.f46022s.Y();
        this.f46027x.e(this.f46022s.G());
    }

    void P(boolean z10) {
        boolean z11;
        if (this.f46019p != i.CLOSING && this.f46019p != i.RELEASING && (this.f46019p != i.REOPENING || this.f46026w == 0)) {
            z11 = false;
        } else {
            z11 = true;
        }
        b2.e.j(z11, "closeCamera should only be called in a CLOSING, RELEASING or REOPENING (with error) state. Current state: " + this.f46019p + " (error: " + a0(this.f46026w) + ")");
        q0(z10);
        this.f46027x.d();
    }

    void U(String str) {
        V(str, null);
    }

    a0.i2 W(a0.w0 w0Var) {
        for (a0.i2 i2Var : this.f46015d.h()) {
            if (i2Var.n().contains(w0Var)) {
                return i2Var;
            }
        }
        return null;
    }

    void X() {
        boolean z10;
        if (this.f46019p != i.RELEASING && this.f46019p != i.CLOSING) {
            z10 = false;
        } else {
            z10 = true;
        }
        b2.e.i(z10);
        b2.e.i(this.A.isEmpty());
        this.f46025v = null;
        if (this.f46019p == i.CLOSING) {
            s0(i.INITIALIZED);
            return;
        }
        this.f46016e.h(this.C);
        s0(i.RELEASED);
        c.a aVar = this.f46029z;
        if (aVar != null) {
            aVar.c(null);
            this.f46029z = null;
        }
    }

    @Override // a0.e0
    public a0.u1 c() {
        return this.f46020q;
    }

    @Override // x.x1.b
    public void d(x.x1 x1Var) {
        a0.i2 u10;
        b2.e.g(x1Var);
        final String c02 = c0(x1Var);
        if (this.K) {
            u10 = x1Var.w();
        } else {
            u10 = x1Var.u();
        }
        final a0.i2 i2Var = u10;
        final a0.x2 j10 = x1Var.j();
        final a0.m2 e10 = x1Var.e();
        final List Z = Z(x1Var);
        this.f46017i.execute(new Runnable() { // from class: q.k0
            @Override // java.lang.Runnable
            public final void run() {
                m0.x(m0.this, c02, i2Var, j10, e10, Z);
            }
        });
    }

    boolean d0() {
        try {
            return ((Boolean) androidx.concurrent.futures.c.a(new c.InterfaceC0027c() { // from class: q.e0
                @Override // androidx.concurrent.futures.c.InterfaceC0027c
                public final Object a(c.a aVar) {
                    return m0.s(m0.this, aVar);
                }
            }).get()).booleanValue();
        } catch (InterruptedException | ExecutionException e10) {
            throw new RuntimeException("Unable to check if MeteringRepeating is attached.", e10);
        }
    }

    @Override // x.x1.b
    public void e(x.x1 x1Var) {
        a0.i2 u10;
        b2.e.g(x1Var);
        final String c02 = c0(x1Var);
        if (this.K) {
            u10 = x1Var.w();
        } else {
            u10 = x1Var.u();
        }
        final a0.i2 i2Var = u10;
        final a0.x2 j10 = x1Var.j();
        final a0.m2 e10 = x1Var.e();
        final List Z = Z(x1Var);
        this.f46017i.execute(new Runnable() { // from class: q.y
            @Override // java.lang.Runnable
            public final void run() {
                m0.D(m0.this, c02, i2Var, j10, e10, Z);
            }
        });
    }

    boolean e0() {
        return this.A.isEmpty();
    }

    @Override // a0.e0
    public a0.a0 f() {
        return this.f46022s;
    }

    @Override // a0.e0
    public a0.w g() {
        return this.P;
    }

    @Override // a0.e0
    public void h(final boolean z10) {
        this.f46017i.execute(new Runnable() { // from class: q.c0
            @Override // java.lang.Runnable
            public final void run() {
                m0.w(m0.this, z10);
            }
        });
    }

    @Override // a0.e0
    public void i(Collection collection) {
        ArrayList arrayList = new ArrayList(collection);
        if (arrayList.isEmpty()) {
            return;
        }
        this.f46022s.Q();
        h0(new ArrayList(arrayList));
        final ArrayList arrayList2 = new ArrayList(w0(arrayList));
        try {
            this.f46017i.execute(new Runnable() { // from class: q.j0
                @Override // java.lang.Runnable
                public final void run() {
                    m0.F(m0.this, arrayList2);
                }
            });
        } catch (RejectedExecutionException e10) {
            V("Unable to attach use cases.", e10);
            this.f46022s.x();
        }
    }

    @Override // x.x1.b
    public void j(x.x1 x1Var) {
        b2.e.g(x1Var);
        final String c02 = c0(x1Var);
        this.f46017i.execute(new Runnable() { // from class: q.l0
            @Override // java.lang.Runnable
            public final void run() {
                m0.v(m0.this, c02);
            }
        });
    }

    @Override // x.x1.b
    public void k(x.x1 x1Var) {
        a0.i2 u10;
        b2.e.g(x1Var);
        if (this.K) {
            u10 = x1Var.w();
        } else {
            u10 = x1Var.u();
        }
        a0.i2 i2Var = u10;
        r0(c0(x1Var), i2Var, x1Var.j(), x1Var.e(), Z(x1Var));
    }

    @Override // a0.e0
    public void l(Collection collection) {
        ArrayList arrayList = new ArrayList(collection);
        if (arrayList.isEmpty()) {
            return;
        }
        final ArrayList arrayList2 = new ArrayList(w0(arrayList));
        i0(new ArrayList(arrayList));
        this.f46017i.execute(new Runnable() { // from class: q.a0
            @Override // java.lang.Runnable
            public final void run() {
                m0.this.z0(arrayList2);
            }
        });
    }

    void l0() {
        boolean z10;
        if (this.f46019p == i.OPENED) {
            z10 = true;
        } else {
            z10 = false;
        }
        b2.e.i(z10);
        i2.h g10 = this.f46015d.g();
        if (!g10.e()) {
            U("Unable to create capture session due to conflicting configurations");
        } else if (!this.F.j(this.f46025v.getId(), this.E.b(this.f46025v.getId()))) {
            U("Unable to create capture session in camera operating mode = " + this.E.c());
        } else {
            HashMap hashMap = new HashMap();
            d4.m(this.f46015d.h(), this.f46015d.i(), hashMap);
            this.f46027x.i(hashMap);
            z2 z2Var = this.f46027x;
            d0.n.j(z2Var.c(g10.c(), (CameraDevice) b2.e.g(this.f46025v), this.N.a()), new d(z2Var), this.f46017i);
        }
    }

    @Override // a0.e0
    public a0.d0 m() {
        return this.f46024u;
    }

    void n0(final a0.i2 i2Var) {
        ScheduledExecutorService d10 = c0.a.d();
        final i2.d d11 = i2Var.d();
        if (d11 != null) {
            V("Posting surface closed", new Throwable());
            d10.execute(new Runnable() { // from class: q.z
                @Override // java.lang.Runnable
                public final void run() {
                    i2.d.this.a(i2Var, i2.g.SESSION_ERROR_SURFACE_NEEDS_RESET);
                }
            });
        }
    }

    ListenableFuture o0(z2 z2Var, boolean z10) {
        z2Var.close();
        ListenableFuture f10 = z2Var.f(z10);
        U("Releasing session in state " + this.f46019p.name());
        this.A.put(z2Var, f10);
        d0.n.j(f10, new c(z2Var), c0.a.a());
        return f10;
    }

    @Override // a0.e0
    public void p(a0.w wVar) {
        if (wVar == null) {
            wVar = a0.z.a();
        }
        wVar.C(null);
        this.P = wVar;
        synchronized (this.Q) {
        }
    }

    void q0(boolean z10) {
        boolean z11;
        if (this.f46027x != null) {
            z11 = true;
        } else {
            z11 = false;
        }
        b2.e.i(z11);
        U("Resetting Capture Session");
        z2 z2Var = this.f46027x;
        a0.i2 h10 = z2Var.h();
        List g10 = z2Var.g();
        z2 g02 = g0();
        this.f46027x = g02;
        g02.e(h10);
        this.f46027x.a(g10);
        if (this.f46019p.ordinal() != 8) {
            U("Skipping Capture Session state check due to current camera state: " + this.f46019p + " and previous session status: " + z2Var.b());
        } else if (this.G && z2Var.b()) {
            U("Close camera before creating new session");
            s0(i.REOPENING_QUIRK);
        }
        if (this.H && z2Var.b()) {
            U("ConfigAndClose is required when close the camera.");
            this.I = true;
        }
        o0(z2Var, z10);
    }

    @Override // a0.e0
    public void r(boolean z10) {
        this.K = z10;
    }

    void s0(i iVar) {
        t0(iVar, null);
    }

    void t0(i iVar, q.a aVar) {
        u0(iVar, aVar, true);
    }

    public String toString() {
        return String.format(Locale.US, "Camera@%x[id=%s]", Integer.valueOf(hashCode()), this.f46024u.b());
    }

    void u0(i iVar, q.a aVar, boolean z10) {
        e0.a aVar2;
        U("Transitioning camera internal state: " + this.f46019p + " --> " + iVar);
        x0(iVar, aVar);
        this.f46019p = iVar;
        switch (iVar.ordinal()) {
            case 0:
                aVar2 = e0.a.RELEASED;
                break;
            case 1:
                aVar2 = e0.a.RELEASING;
                break;
            case 2:
                aVar2 = e0.a.CLOSED;
                break;
            case 3:
                aVar2 = e0.a.PENDING_OPEN;
                break;
            case 4:
            case 5:
                aVar2 = e0.a.CLOSING;
                break;
            case 6:
            case 7:
                aVar2 = e0.a.OPENING;
                break;
            case 8:
                aVar2 = e0.a.OPEN;
                break;
            case 9:
                aVar2 = e0.a.CONFIGURED;
                break;
            default:
                throw new IllegalStateException("Unknown state: " + iVar);
        }
        this.F.e(this, aVar2, z10);
        this.f46020q.e(aVar2);
        this.f46021r.c(aVar2, aVar);
    }

    void v0(List list) {
        ArrayList arrayList = new ArrayList();
        Iterator it = list.iterator();
        while (it.hasNext()) {
            a0.p0 p0Var = (a0.p0) it.next();
            p0.a j10 = p0.a.j(p0Var);
            if (p0Var.k() == 5 && p0Var.d() != null) {
                j10.n(p0Var.d());
            }
            if (!p0Var.i().isEmpty() || !p0Var.m() || O(j10)) {
                arrayList.add(j10.h());
            }
        }
        U("Issue capture request");
        this.f46027x.a(arrayList);
    }

    void x0(i iVar, q.a aVar) {
        int i10;
        if (c4.a.h()) {
            c4.a.j("CX:C2State[" + this + "]", iVar.ordinal());
            if (aVar != null) {
                this.B++;
            }
            if (this.B > 0) {
                String str = "CX:C2StateErrorCode[" + this + "]";
                if (aVar != null) {
                    i10 = aVar.d();
                } else {
                    i10 = 0;
                }
                c4.a.j(str, i10);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class h {

        /* renamed from: a  reason: collision with root package name */
        private a f46042a;

        /* JADX INFO: Access modifiers changed from: private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public class a {

            /* renamed from: a  reason: collision with root package name */
            private final ScheduledFuture f46044a;

            /* renamed from: b  reason: collision with root package name */
            private final AtomicBoolean f46045b = new AtomicBoolean(false);

            a() {
                this.f46044a = m0.this.f46018o.schedule(new Runnable() { // from class: q.p0
                    @Override // java.lang.Runnable
                    public final void run() {
                        m0.h.a.this.d();
                    }
                }, 2000L, TimeUnit.MILLISECONDS);
            }

            /* JADX INFO: Access modifiers changed from: private */
            public void d() {
                if (this.f46045b.getAndSet(true)) {
                    return;
                }
                m0.this.f46017i.execute(new Runnable() { // from class: q.o0
                    @Override // java.lang.Runnable
                    public final void run() {
                        m0.h.a.this.e();
                    }
                });
            }

            /* JADX INFO: Access modifiers changed from: private */
            public void e() {
                if (m0.this.f46019p != i.OPENING) {
                    m0 m0Var = m0.this;
                    m0Var.U("Camera skip reopen at state: " + m0.this.f46019p);
                    return;
                }
                m0.this.U("Camera onError timeout, reopen it.");
                m0.this.s0(i.REOPENING);
                m0.this.f46023t.e();
            }

            public void c() {
                this.f46045b.set(true);
                this.f46044a.cancel(true);
            }

            public boolean f() {
                return this.f46045b.get();
            }
        }

        private h() {
            this.f46042a = null;
        }

        public void a() {
            a aVar = this.f46042a;
            if (aVar != null) {
                aVar.c();
            }
            this.f46042a = null;
        }

        public void b() {
            m0.this.U("Camera receive onErrorCallback");
            a();
        }

        public boolean c() {
            a aVar = this.f46042a;
            if (aVar != null && !aVar.f()) {
                return true;
            }
            return false;
        }

        public void d() {
            if (m0.this.f46019p != i.OPENING) {
                m0.this.U("Don't need the onError timeout handler.");
                return;
            }
            m0.this.U("Camera waiting for onError.");
            a();
            this.f46042a = new a();
        }

        /* synthetic */ h(m0 m0Var, a aVar) {
            this();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class c implements d0.c {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ z2 f46033a;

        c(z2 z2Var) {
            this.f46033a = z2Var;
        }

        @Override // d0.c
        /* renamed from: a */
        public void onSuccess(Void r22) {
            m0.this.A.remove(this.f46033a);
            int ordinal = m0.this.f46019p.ordinal();
            if (ordinal != 1 && ordinal != 4) {
                if (ordinal == 5 || (ordinal == 6 && m0.this.f46026w != 0)) {
                    m0.this.U("Camera reopen required. Checking if the current camera can be closed safely.");
                } else {
                    return;
                }
            }
            if (m0.this.e0()) {
                m0 m0Var = m0.this;
                if (m0Var.f46025v != null) {
                    m0Var.U("closing camera");
                    r.a.a(m0.this.f46025v);
                    m0.this.f46025v = null;
                }
            }
        }

        @Override // d0.c
        public void onFailure(Throwable th2) {
        }
    }
}
