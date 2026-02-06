package kn;

import android.content.Context;
import android.os.Handler;
import android.os.Looper;
import android.view.MotionEvent;
import android.view.VelocityTracker;
import android.view.ViewConfiguration;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.uimanager.PixelUtil;
import kn.d;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class t extends d {

    /* renamed from: r0  reason: collision with root package name */
    public static final a f31867r0 = new a(null);
    private float O;
    private float P;
    private final float Q;
    private float R;

    /* renamed from: f0  reason: collision with root package name */
    private float f31873f0;

    /* renamed from: g0  reason: collision with root package name */
    private float f31874g0;

    /* renamed from: h0  reason: collision with root package name */
    private float f31875h0;

    /* renamed from: i0  reason: collision with root package name */
    private float f31876i0;

    /* renamed from: j0  reason: collision with root package name */
    private float f31877j0;

    /* renamed from: k0  reason: collision with root package name */
    private float f31878k0;

    /* renamed from: l0  reason: collision with root package name */
    private VelocityTracker f31879l0;

    /* renamed from: m0  reason: collision with root package name */
    private boolean f31880m0;

    /* renamed from: n0  reason: collision with root package name */
    private long f31881n0;

    /* renamed from: p0  reason: collision with root package name */
    private Handler f31883p0;
    private float S = Float.MAX_VALUE;
    private float T = Float.MIN_VALUE;
    private float U = Float.MIN_VALUE;
    private float V = Float.MAX_VALUE;
    private float W = Float.MAX_VALUE;
    private float X = Float.MIN_VALUE;
    private float Y = Float.MIN_VALUE;
    private float Z = Float.MAX_VALUE;

    /* renamed from: a0  reason: collision with root package name */
    private float f31868a0 = Float.MAX_VALUE;

    /* renamed from: b0  reason: collision with root package name */
    private float f31869b0 = Float.MAX_VALUE;

    /* renamed from: c0  reason: collision with root package name */
    private float f31870c0 = Float.MAX_VALUE;

    /* renamed from: d0  reason: collision with root package name */
    private int f31871d0 = 1;

    /* renamed from: e0  reason: collision with root package name */
    private int f31872e0 = 10;

    /* renamed from: o0  reason: collision with root package name */
    private final Runnable f31882o0 = new Runnable() { // from class: kn.s
        @Override // java.lang.Runnable
        public final void run() {
            t.l1(t.this);
        }
    };

    /* renamed from: q0  reason: collision with root package name */
    private z f31884q0 = new z(0.0d, 0.0d, 0.0d, 0.0d, 0.0d, 31, null);

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final void b(VelocityTracker velocityTracker, MotionEvent motionEvent) {
            float rawX = motionEvent.getRawX() - motionEvent.getX();
            float rawY = motionEvent.getRawY() - motionEvent.getY();
            motionEvent.offsetLocation(rawX, rawY);
            Intrinsics.checkNotNull(velocityTracker);
            velocityTracker.addMovement(motionEvent);
            motionEvent.offsetLocation(-rawX, -rawY);
        }

        private a() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends d.c {

        /* renamed from: d  reason: collision with root package name */
        public static final a f31885d = new a(null);

        /* renamed from: b  reason: collision with root package name */
        private final Class f31886b = t.class;

        /* renamed from: c  reason: collision with root package name */
        private final String f31887c = "PanGestureHandler";

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a {
            public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
                this();
            }

            private a() {
            }
        }

        @Override // kn.d.c
        public String d() {
            return this.f31887c;
        }

        @Override // kn.d.c
        public Class e() {
            return this.f31886b;
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // kn.d.c
        /* renamed from: g */
        public t a(Context context) {
            return new t(context);
        }

        @Override // kn.d.c
        /* renamed from: h */
        public ln.g c(t handler) {
            Intrinsics.checkNotNullParameter(handler, "handler");
            return new ln.g(handler);
        }

        @Override // kn.d.c
        /* renamed from: i */
        public void f(t handler, ReadableMap config) {
            boolean z10;
            Intrinsics.checkNotNullParameter(handler, "handler");
            Intrinsics.checkNotNullParameter(config, "config");
            super.f(handler, config);
            boolean z11 = true;
            if (config.hasKey("activeOffsetXStart")) {
                handler.S = PixelUtil.toPixelFromDIP(config.getDouble("activeOffsetXStart"));
                z10 = true;
            } else {
                z10 = false;
            }
            if (config.hasKey("activeOffsetXEnd")) {
                handler.T = PixelUtil.toPixelFromDIP(config.getDouble("activeOffsetXEnd"));
                z10 = true;
            }
            if (config.hasKey("failOffsetXStart")) {
                handler.U = PixelUtil.toPixelFromDIP(config.getDouble("failOffsetXStart"));
                z10 = true;
            }
            if (config.hasKey("failOffsetXEnd")) {
                handler.V = PixelUtil.toPixelFromDIP(config.getDouble("failOffsetXEnd"));
                z10 = true;
            }
            if (config.hasKey("activeOffsetYStart")) {
                handler.W = PixelUtil.toPixelFromDIP(config.getDouble("activeOffsetYStart"));
                z10 = true;
            }
            if (config.hasKey("activeOffsetYEnd")) {
                handler.X = PixelUtil.toPixelFromDIP(config.getDouble("activeOffsetYEnd"));
                z10 = true;
            }
            if (config.hasKey("failOffsetYStart")) {
                handler.Y = PixelUtil.toPixelFromDIP(config.getDouble("failOffsetYStart"));
                z10 = true;
            }
            if (config.hasKey("failOffsetYEnd")) {
                handler.Z = PixelUtil.toPixelFromDIP(config.getDouble("failOffsetYEnd"));
                z10 = true;
            }
            if (config.hasKey("minVelocity")) {
                handler.f31870c0 = PixelUtil.toPixelFromDIP(config.getDouble("minVelocity"));
                z10 = true;
            }
            if (config.hasKey("minVelocityX")) {
                handler.f31868a0 = PixelUtil.toPixelFromDIP(config.getDouble("minVelocityX"));
                z10 = true;
            }
            if (config.hasKey("minVelocityY")) {
                handler.f31869b0 = PixelUtil.toPixelFromDIP(config.getDouble("minVelocityY"));
            } else {
                z11 = z10;
            }
            if (config.hasKey("minDist")) {
                handler.R = PixelUtil.toPixelFromDIP(config.getDouble("minDist"));
            } else if (z11) {
                handler.R = Float.MAX_VALUE;
            }
            if (config.hasKey("minPointers")) {
                handler.f31871d0 = config.getInt("minPointers");
            }
            if (config.hasKey("maxPointers")) {
                handler.f31872e0 = config.getInt("maxPointers");
            }
            if (config.hasKey("avgTouches")) {
                handler.f31880m0 = config.getBoolean("avgTouches");
            }
            if (config.hasKey("activateAfterLongPress")) {
                handler.f31881n0 = config.getInt("activateAfterLongPress");
            }
        }
    }

    public t(Context context) {
        this.R = Float.MIN_VALUE;
        Intrinsics.checkNotNull(context);
        float scaledTouchSlop = ViewConfiguration.get(context).getScaledTouchSlop();
        this.Q = scaledTouchSlop;
        this.R = scaledTouchSlop;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void l1(t tVar) {
        tVar.k();
    }

    private final boolean r1() {
        float f10 = (this.f31877j0 - this.f31873f0) + this.f31875h0;
        float f11 = this.S;
        if (f11 != Float.MAX_VALUE && f10 < f11) {
            return true;
        }
        float f12 = this.T;
        if (f12 != Float.MIN_VALUE && f10 > f12) {
            return true;
        }
        float f13 = (this.f31878k0 - this.f31874g0) + this.f31876i0;
        float f14 = this.W;
        if (f14 != Float.MAX_VALUE && f13 < f14) {
            return true;
        }
        float f15 = this.X;
        if (f15 != Float.MIN_VALUE && f13 > f15) {
            return true;
        }
        float f16 = (f10 * f10) + (f13 * f13);
        float f17 = this.R;
        if (f17 != Float.MAX_VALUE && f16 >= f17 * f17) {
            return true;
        }
        float f18 = this.O;
        float f19 = this.f31868a0;
        if (f19 != Float.MAX_VALUE && ((f19 < 0.0f && f18 <= f19) || (0.0f <= f19 && f19 <= f18))) {
            return true;
        }
        float f20 = this.P;
        float f21 = this.f31869b0;
        if (f21 != Float.MAX_VALUE && ((f21 < 0.0f && f18 <= f21) || (0.0f <= f21 && f21 <= f18))) {
            return true;
        }
        float f22 = (f18 * f18) + (f20 * f20);
        float f23 = this.f31870c0;
        if (f23 != Float.MAX_VALUE && f22 >= f23 * f23) {
            return true;
        }
        return false;
    }

    private final boolean s1() {
        float f10 = (this.f31877j0 - this.f31873f0) + this.f31875h0;
        float f11 = (this.f31878k0 - this.f31874g0) + this.f31876i0;
        if (this.f31881n0 > 0) {
            float f12 = (f10 * f10) + (f11 * f11);
            float f13 = this.Q;
            if (f12 > f13 * f13) {
                Handler handler = this.f31883p0;
                if (handler != null) {
                    handler.removeCallbacksAndMessages(null);
                }
                return true;
            }
        }
        float f14 = this.U;
        if (f14 != Float.MIN_VALUE && f10 < f14) {
            return true;
        }
        float f15 = this.V;
        if (f15 != Float.MAX_VALUE && f10 > f15) {
            return true;
        }
        float f16 = this.Y;
        if (f16 != Float.MIN_VALUE && f11 < f16) {
            return true;
        }
        float f17 = this.Z;
        if (f17 != Float.MAX_VALUE && f11 > f17) {
            return true;
        }
        return false;
    }

    @Override // kn.d
    protected void j0() {
        Handler handler = this.f31883p0;
        if (handler != null) {
            handler.removeCallbacksAndMessages(null);
        }
    }

    @Override // kn.d
    public void l(boolean z10) {
        if (S() != 4) {
            t0();
        }
        super.l(z10);
    }

    @Override // kn.d
    protected void l0(MotionEvent event, MotionEvent sourceEvent) {
        Intrinsics.checkNotNullParameter(event, "event");
        Intrinsics.checkNotNullParameter(sourceEvent, "sourceEvent");
        if (J0(sourceEvent)) {
            if (event.getToolType(0) == 2) {
                this.f31884q0 = z.f31935f.a(event);
            }
            int S = S();
            int actionMasked = sourceEvent.getActionMasked();
            if (actionMasked != 5 && actionMasked != 6) {
                k kVar = k.f31846a;
                this.f31877j0 = kVar.b(sourceEvent, this.f31880m0);
                this.f31878k0 = kVar.c(sourceEvent, this.f31880m0);
            } else {
                this.f31875h0 += this.f31877j0 - this.f31873f0;
                this.f31876i0 += this.f31878k0 - this.f31874g0;
                k kVar2 = k.f31846a;
                this.f31877j0 = kVar2.b(sourceEvent, this.f31880m0);
                float c10 = kVar2.c(sourceEvent, this.f31880m0);
                this.f31878k0 = c10;
                this.f31873f0 = this.f31877j0;
                this.f31874g0 = c10;
            }
            if (S == 0 && sourceEvent.getPointerCount() >= this.f31871d0) {
                t0();
                this.f31875h0 = 0.0f;
                this.f31876i0 = 0.0f;
                this.O = 0.0f;
                this.P = 0.0f;
                VelocityTracker obtain = VelocityTracker.obtain();
                this.f31879l0 = obtain;
                f31867r0.b(obtain, sourceEvent);
                p();
                if (this.f31881n0 > 0) {
                    if (this.f31883p0 == null) {
                        this.f31883p0 = new Handler(Looper.getMainLooper());
                    }
                    Handler handler = this.f31883p0;
                    Intrinsics.checkNotNull(handler);
                    handler.postDelayed(this.f31882o0, this.f31881n0);
                }
            } else {
                VelocityTracker velocityTracker = this.f31879l0;
                if (velocityTracker != null) {
                    f31867r0.b(velocityTracker, sourceEvent);
                    VelocityTracker velocityTracker2 = this.f31879l0;
                    Intrinsics.checkNotNull(velocityTracker2);
                    velocityTracker2.computeCurrentVelocity(1000);
                    VelocityTracker velocityTracker3 = this.f31879l0;
                    Intrinsics.checkNotNull(velocityTracker3);
                    this.O = velocityTracker3.getXVelocity();
                    VelocityTracker velocityTracker4 = this.f31879l0;
                    Intrinsics.checkNotNull(velocityTracker4);
                    this.P = velocityTracker4.getYVelocity();
                }
            }
            if (actionMasked != 1 && actionMasked != 12) {
                if (actionMasked == 5 && sourceEvent.getPointerCount() > this.f31872e0) {
                    if (S == 4) {
                        q();
                    } else {
                        D();
                    }
                } else if (actionMasked == 6 && S == 4 && sourceEvent.getPointerCount() < this.f31871d0) {
                    D();
                } else if (S == 2) {
                    if (s1()) {
                        D();
                    } else if (r1()) {
                        k();
                    }
                }
            } else if (S == 4) {
                B();
            } else {
                D();
            }
        }
    }

    public final z m1() {
        return this.f31884q0;
    }

    public final float n1() {
        return (this.f31877j0 - this.f31873f0) + this.f31875h0;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // kn.d
    public void o0() {
        Handler handler = this.f31883p0;
        if (handler != null) {
            handler.removeCallbacksAndMessages(null);
        }
        VelocityTracker velocityTracker = this.f31879l0;
        if (velocityTracker != null) {
            velocityTracker.recycle();
            this.f31879l0 = null;
        }
        this.f31884q0 = new z(0.0d, 0.0d, 0.0d, 0.0d, 0.0d, 31, null);
    }

    public final float o1() {
        return (this.f31878k0 - this.f31874g0) + this.f31876i0;
    }

    public final float p1() {
        return this.O;
    }

    public final float q1() {
        return this.P;
    }

    @Override // kn.d
    public void s0() {
        super.s0();
        this.S = Float.MAX_VALUE;
        this.T = Float.MIN_VALUE;
        this.U = Float.MIN_VALUE;
        this.V = Float.MAX_VALUE;
        this.W = Float.MAX_VALUE;
        this.X = Float.MIN_VALUE;
        this.Y = Float.MIN_VALUE;
        this.Z = Float.MAX_VALUE;
        this.f31868a0 = Float.MAX_VALUE;
        this.f31869b0 = Float.MAX_VALUE;
        this.f31870c0 = Float.MAX_VALUE;
        this.R = this.Q;
        this.f31871d0 = 1;
        this.f31872e0 = 10;
        this.f31881n0 = 0L;
        this.f31880m0 = false;
    }

    @Override // kn.d
    public void t0() {
        this.f31873f0 = this.f31877j0;
        this.f31874g0 = this.f31878k0;
    }
}
