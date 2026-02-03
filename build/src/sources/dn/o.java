package dn;

import android.content.Context;
import android.os.Handler;
import android.os.Looper;
import android.os.SystemClock;
import android.view.MotionEvent;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.uimanager.PixelUtil;
import dn.d;
import java.util.ArrayList;
import java.util.Iterator;
import kotlin.Pair;
import kotlin.collections.CollectionsKt;
import kotlin.collections.m0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.ranges.IntRange;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class o extends d {
    public static final a Y = new a(null);
    private long O;
    private final float P;
    private float Q;
    private int R;
    private float S;
    private float T;
    private long U;
    private long V;
    private Handler W;
    private int X;

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
        public static final a f21943d = new a(null);

        /* renamed from: b  reason: collision with root package name */
        private final Class f21944b = o.class;

        /* renamed from: c  reason: collision with root package name */
        private final String f21945c = "LongPressGestureHandler";

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
            return this.f21945c;
        }

        @Override // dn.d.c
        public Class e() {
            return this.f21944b;
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // dn.d.c
        /* renamed from: g */
        public o a(Context context) {
            Intrinsics.checkNotNull(context);
            return new o(context);
        }

        @Override // dn.d.c
        /* renamed from: h */
        public en.d c(o handler) {
            Intrinsics.checkNotNullParameter(handler, "handler");
            return new en.d(handler);
        }

        @Override // dn.d.c
        /* renamed from: i */
        public void f(o handler, ReadableMap config) {
            Intrinsics.checkNotNullParameter(handler, "handler");
            Intrinsics.checkNotNullParameter(config, "config");
            super.f(handler, config);
            if (config.hasKey("minDurationMs")) {
                handler.a1(config.getInt("minDurationMs"));
            }
            if (config.hasKey("maxDist")) {
                handler.Q = PixelUtil.toPixelFromDIP(config.getDouble("maxDist"));
            }
            if (config.hasKey("numberOfPointers")) {
                handler.D0(config.getInt("numberOfPointers"));
            }
        }
    }

    public o(Context context) {
        Intrinsics.checkNotNullParameter(context, "context");
        this.O = 500L;
        G0(true);
        float f10 = context.getResources().getDisplayMetrics().density * 10.0f;
        this.P = f10;
        this.Q = f10;
        this.R = 1;
    }

    private final Pair W0(MotionEvent motionEvent, boolean z10) {
        if (!z10) {
            IntRange u10 = kotlin.ranges.d.u(0, motionEvent.getPointerCount());
            ArrayList arrayList = new ArrayList(CollectionsKt.w(u10, 10));
            Iterator it = u10.iterator();
            while (it.hasNext()) {
                arrayList.add(Float.valueOf(motionEvent.getX(((m0) it).nextInt())));
            }
            float c02 = (float) CollectionsKt.c0(arrayList);
            IntRange u11 = kotlin.ranges.d.u(0, motionEvent.getPointerCount());
            ArrayList arrayList2 = new ArrayList(CollectionsKt.w(u11, 10));
            Iterator it2 = u11.iterator();
            while (it2.hasNext()) {
                arrayList2.add(Float.valueOf(motionEvent.getY(((m0) it2).nextInt())));
            }
            return new Pair(Float.valueOf(c02), Float.valueOf((float) CollectionsKt.c0(arrayList2)));
        }
        int pointerCount = motionEvent.getPointerCount();
        float f10 = 0.0f;
        float f11 = 0.0f;
        for (int i10 = 0; i10 < pointerCount; i10++) {
            if (i10 != motionEvent.getActionIndex()) {
                f10 += motionEvent.getX(i10);
                f11 += motionEvent.getY(i10);
            }
        }
        return new Pair(Float.valueOf(f10 / (motionEvent.getPointerCount() - 1)), Float.valueOf(f11 / (motionEvent.getPointerCount() - 1)));
    }

    static /* synthetic */ Pair X0(o oVar, MotionEvent motionEvent, boolean z10, int i10, Object obj) {
        if ((i10 & 2) != 0) {
            z10 = false;
        }
        return oVar.W0(motionEvent, z10);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void Z0(o oVar) {
        oVar.k();
    }

    public final int Y0() {
        return (int) (this.V - this.U);
    }

    public final void a1(long j10) {
        this.O = j10;
    }

    @Override // dn.d
    protected void l0(MotionEvent event, MotionEvent sourceEvent) {
        Intrinsics.checkNotNullParameter(event, "event");
        Intrinsics.checkNotNullParameter(sourceEvent, "sourceEvent");
        if (J0(sourceEvent)) {
            if (S() == 0) {
                long uptimeMillis = SystemClock.uptimeMillis();
                this.V = uptimeMillis;
                this.U = uptimeMillis;
                p();
                Pair X0 = X0(this, sourceEvent, false, 2, null);
                float floatValue = ((Number) X0.a()).floatValue();
                float floatValue2 = ((Number) X0.b()).floatValue();
                this.S = floatValue;
                this.T = floatValue2;
                this.X++;
            }
            if (sourceEvent.getActionMasked() == 5) {
                this.X++;
                Pair X02 = X0(this, sourceEvent, false, 2, null);
                float floatValue3 = ((Number) X02.a()).floatValue();
                float floatValue4 = ((Number) X02.b()).floatValue();
                this.S = floatValue3;
                this.T = floatValue4;
                if (this.X > this.R) {
                    D();
                    this.X = 0;
                }
            }
            if (S() == 2 && this.X == this.R && (sourceEvent.getActionMasked() == 0 || sourceEvent.getActionMasked() == 5)) {
                Handler handler = new Handler(Looper.getMainLooper());
                this.W = handler;
                long j10 = this.O;
                if (j10 > 0) {
                    Intrinsics.checkNotNull(handler);
                    handler.postDelayed(new Runnable() { // from class: dn.n
                        @Override // java.lang.Runnable
                        public final void run() {
                            o.Z0(o.this);
                        }
                    }, this.O);
                } else if (j10 == 0) {
                    k();
                }
            }
            if (sourceEvent.getActionMasked() != 1 && sourceEvent.getActionMasked() != 12) {
                if (sourceEvent.getActionMasked() == 6) {
                    int i10 = this.X - 1;
                    this.X = i10;
                    if (i10 < this.R && S() != 4) {
                        D();
                        this.X = 0;
                        return;
                    }
                    Pair W0 = W0(sourceEvent, true);
                    float floatValue5 = ((Number) W0.a()).floatValue();
                    float floatValue6 = ((Number) W0.b()).floatValue();
                    this.S = floatValue5;
                    this.T = floatValue6;
                    return;
                }
                Pair X03 = X0(this, sourceEvent, false, 2, null);
                float floatValue7 = ((Number) X03.a()).floatValue();
                float floatValue8 = ((Number) X03.b()).floatValue();
                float f10 = floatValue7 - this.S;
                float f11 = floatValue8 - this.T;
                float f12 = (f10 * f10) + (f11 * f11);
                float f13 = this.Q;
                if (f12 > f13 * f13) {
                    if (S() == 4) {
                        q();
                        return;
                    } else {
                        D();
                        return;
                    }
                }
                return;
            }
            this.X--;
            Handler handler2 = this.W;
            if (handler2 != null) {
                handler2.removeCallbacksAndMessages(null);
                this.W = null;
            }
            if (S() == 4) {
                B();
            } else {
                D();
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // dn.d
    public void o0() {
        super.o0();
        this.X = 0;
    }

    @Override // dn.d
    protected void p0(int i10, int i11) {
        Handler handler = this.W;
        if (handler != null) {
            handler.removeCallbacksAndMessages(null);
            this.W = null;
        }
    }

    @Override // dn.d
    public void s0() {
        super.s0();
        this.O = 500L;
        this.Q = this.P;
        G0(true);
    }

    @Override // dn.d
    public void v(MotionEvent event) {
        Intrinsics.checkNotNullParameter(event, "event");
        this.V = SystemClock.uptimeMillis();
        super.v(event);
    }

    @Override // dn.d
    public void w(int i10, int i11) {
        this.V = SystemClock.uptimeMillis();
        super.w(i10, i11);
    }
}
