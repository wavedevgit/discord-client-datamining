package dn;

import android.content.Context;
import android.os.Handler;
import android.os.Looper;
import android.view.MotionEvent;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.uimanager.PixelUtil;
import dn.d;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b0 extends d {

    /* renamed from: f0  reason: collision with root package name */
    public static final a f21860f0 = new a(null);
    private float W;
    private float X;
    private float Y;
    private float Z;

    /* renamed from: a0  reason: collision with root package name */
    private float f21861a0;

    /* renamed from: b0  reason: collision with root package name */
    private float f21862b0;

    /* renamed from: c0  reason: collision with root package name */
    private Handler f21863c0;

    /* renamed from: d0  reason: collision with root package name */
    private int f21864d0;
    private float O = Float.MIN_VALUE;
    private float P = Float.MIN_VALUE;
    private float Q = Float.MIN_VALUE;
    private long R = 500;
    private long S = 200;
    private int T = 1;
    private int U = 1;
    private int V = 1;

    /* renamed from: e0  reason: collision with root package name */
    private final Runnable f21865e0 = new Runnable() { // from class: dn.a0
        @Override // java.lang.Runnable
        public final void run() {
            b0.d1(b0.this);
        }
    };

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends d.c {

        /* renamed from: d  reason: collision with root package name */
        public static final a f21866d = new a(null);

        /* renamed from: b  reason: collision with root package name */
        private final Class f21867b = b0.class;

        /* renamed from: c  reason: collision with root package name */
        private final String f21868c = "TapGestureHandler";

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a {
            public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
                this();
            }

            private a() {
            }
        }

        @Override // dn.d.c
        public String d() {
            return this.f21868c;
        }

        @Override // dn.d.c
        public Class e() {
            return this.f21867b;
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // dn.d.c
        /* renamed from: g */
        public b0 a(Context context) {
            return new b0();
        }

        @Override // dn.d.c
        /* renamed from: h */
        public en.j c(b0 handler) {
            Intrinsics.checkNotNullParameter(handler, "handler");
            return new en.j(handler);
        }

        @Override // dn.d.c
        /* renamed from: i */
        public void f(b0 handler, ReadableMap config) {
            Intrinsics.checkNotNullParameter(handler, "handler");
            Intrinsics.checkNotNullParameter(config, "config");
            super.f(handler, config);
            if (config.hasKey("numberOfTaps")) {
                handler.T = config.getInt("numberOfTaps");
            }
            if (config.hasKey("maxDurationMs")) {
                handler.R = config.getInt("maxDurationMs");
            }
            if (config.hasKey("maxDelayMs")) {
                handler.S = config.getInt("maxDelayMs");
            }
            if (config.hasKey("maxDeltaX")) {
                handler.O = PixelUtil.toPixelFromDIP(config.getDouble("maxDeltaX"));
            }
            if (config.hasKey("maxDeltaY")) {
                handler.P = PixelUtil.toPixelFromDIP(config.getDouble("maxDeltaY"));
            }
            if (config.hasKey("maxDist")) {
                handler.Q = PixelUtil.toPixelFromDIP(config.getDouble("maxDist"));
            }
            if (config.hasKey("minPointers")) {
                handler.U = config.getInt("minPointers");
            }
        }
    }

    public b0() {
        G0(true);
    }

    private final void c1() {
        Handler handler = this.f21863c0;
        if (handler == null) {
            this.f21863c0 = new Handler(Looper.getMainLooper());
        } else {
            Intrinsics.checkNotNull(handler);
            handler.removeCallbacksAndMessages(null);
        }
        int i10 = this.f21864d0 + 1;
        this.f21864d0 = i10;
        if (i10 == this.T && this.V >= this.U) {
            k();
            return;
        }
        Handler handler2 = this.f21863c0;
        Intrinsics.checkNotNull(handler2);
        handler2.postDelayed(this.f21865e0, this.S);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void d1(b0 b0Var) {
        b0Var.D();
    }

    private final boolean e1() {
        float f10 = (this.f21861a0 - this.W) + this.Y;
        if (this.O != Float.MIN_VALUE && Math.abs(f10) > this.O) {
            return true;
        }
        float f11 = (this.f21862b0 - this.X) + this.Z;
        if (this.P != Float.MIN_VALUE && Math.abs(f11) > this.P) {
            return true;
        }
        float f12 = (f11 * f11) + (f10 * f10);
        float f13 = this.Q;
        if (f13 != Float.MIN_VALUE && f12 > f13 * f13) {
            return true;
        }
        return false;
    }

    private final void f1() {
        Handler handler = this.f21863c0;
        if (handler == null) {
            this.f21863c0 = new Handler(Looper.getMainLooper());
        } else {
            Intrinsics.checkNotNull(handler);
            handler.removeCallbacksAndMessages(null);
        }
        Handler handler2 = this.f21863c0;
        Intrinsics.checkNotNull(handler2);
        handler2.postDelayed(this.f21865e0, this.R);
    }

    @Override // dn.d
    protected void j0() {
        Handler handler = this.f21863c0;
        if (handler != null) {
            handler.removeCallbacksAndMessages(null);
        }
    }

    @Override // dn.d
    public void l(boolean z10) {
        super.l(z10);
        B();
    }

    @Override // dn.d
    protected void l0(MotionEvent event, MotionEvent sourceEvent) {
        Intrinsics.checkNotNullParameter(event, "event");
        Intrinsics.checkNotNullParameter(sourceEvent, "sourceEvent");
        if (J0(sourceEvent)) {
            int S = S();
            int actionMasked = sourceEvent.getActionMasked();
            if (S == 0) {
                this.Y = 0.0f;
                this.Z = 0.0f;
                k kVar = k.f21938a;
                this.W = kVar.b(sourceEvent, true);
                this.X = kVar.c(sourceEvent, true);
            }
            if (actionMasked != 5 && actionMasked != 6) {
                k kVar2 = k.f21938a;
                this.f21861a0 = kVar2.b(sourceEvent, true);
                this.f21862b0 = kVar2.c(sourceEvent, true);
            } else {
                this.Y += this.f21861a0 - this.W;
                this.Z += this.f21862b0 - this.X;
                k kVar3 = k.f21938a;
                this.f21861a0 = kVar3.b(sourceEvent, true);
                float c10 = kVar3.c(sourceEvent, true);
                this.f21862b0 = c10;
                this.W = this.f21861a0;
                this.X = c10;
            }
            if (this.V < sourceEvent.getPointerCount()) {
                this.V = sourceEvent.getPointerCount();
            }
            if (e1()) {
                D();
            } else if (S == 0) {
                if (actionMasked == 0 || actionMasked == 11) {
                    p();
                }
                f1();
            } else if (S == 2) {
                if (actionMasked != 0) {
                    if (actionMasked != 1) {
                        if (actionMasked != 11) {
                            if (actionMasked != 12) {
                                return;
                            }
                        }
                    }
                    c1();
                    return;
                }
                f1();
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // dn.d
    public void o0() {
        this.f21864d0 = 0;
        this.V = 0;
        Handler handler = this.f21863c0;
        if (handler != null) {
            handler.removeCallbacksAndMessages(null);
        }
    }

    @Override // dn.d
    public void s0() {
        super.s0();
        this.O = Float.MIN_VALUE;
        this.P = Float.MIN_VALUE;
        this.Q = Float.MIN_VALUE;
        this.R = 500L;
        this.S = 200L;
        this.T = 1;
        this.U = 1;
        G0(true);
    }
}
