package kn;

import android.app.Activity;
import android.content.Context;
import android.content.ContextWrapper;
import android.graphics.PointF;
import android.view.MotionEvent;
import android.view.View;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.ReadableType;
import com.facebook.react.bridge.UiThreadUtil;
import com.facebook.react.bridge.WritableArray;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.devsupport.StackTraceHelper;
import com.facebook.react.uimanager.PixelUtil;
import com.facebook.react.uimanager.ViewProps;
import java.util.Arrays;
import jn.f;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class d {
    public static final b J = new b(null);
    private static final Void K = null;
    private static MotionEvent.PointerProperties[] L;
    private static MotionEvent.PointerCoords[] M;
    private static short N;
    private i A;
    private r B;
    private e C;
    private int D;
    private int E;
    private int F;
    private boolean G;
    private boolean H;
    private boolean I;

    /* renamed from: a  reason: collision with root package name */
    private final int[] f31841a = new int[12];

    /* renamed from: b  reason: collision with root package name */
    private int f31842b;

    /* renamed from: c  reason: collision with root package name */
    private final int[] f31843c;

    /* renamed from: d  reason: collision with root package name */
    private int f31844d;

    /* renamed from: e  reason: collision with root package name */
    private View f31845e;

    /* renamed from: f  reason: collision with root package name */
    private int f31846f;

    /* renamed from: g  reason: collision with root package name */
    private float f31847g;

    /* renamed from: h  reason: collision with root package name */
    private float f31848h;

    /* renamed from: i  reason: collision with root package name */
    private boolean f31849i;

    /* renamed from: j  reason: collision with root package name */
    private boolean f31850j;

    /* renamed from: k  reason: collision with root package name */
    private int f31851k;

    /* renamed from: l  reason: collision with root package name */
    private WritableArray f31852l;

    /* renamed from: m  reason: collision with root package name */
    private WritableArray f31853m;

    /* renamed from: n  reason: collision with root package name */
    private int f31854n;

    /* renamed from: o  reason: collision with root package name */
    private int f31855o;

    /* renamed from: p  reason: collision with root package name */
    private final C0451d[] f31856p;

    /* renamed from: q  reason: collision with root package name */
    private boolean f31857q;

    /* renamed from: r  reason: collision with root package name */
    private float[] f31858r;

    /* renamed from: s  reason: collision with root package name */
    private short f31859s;

    /* renamed from: t  reason: collision with root package name */
    private float f31860t;

    /* renamed from: u  reason: collision with root package name */
    private float f31861u;

    /* renamed from: v  reason: collision with root package name */
    private boolean f31862v;

    /* renamed from: w  reason: collision with root package name */
    private float f31863w;

    /* renamed from: x  reason: collision with root package name */
    private float f31864x;

    /* renamed from: y  reason: collision with root package name */
    private int f31865y;

    /* renamed from: z  reason: collision with root package name */
    private boolean f31866z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends Exception {
        /* JADX WARN: Illegal instructions before constructor call */
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        public a(kn.d r21, android.view.MotionEvent r22, java.lang.IllegalArgumentException r23) {
            /*
                r20 = this;
                r0 = r22
                r1 = r23
                java.lang.String r2 = "handler"
                r3 = r21
                kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r3, r2)
                java.lang.String r2 = "event"
                kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r0, r2)
                java.lang.String r2 = "e"
                kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r1, r2)
                java.lang.Class r2 = r3.getClass()
                kotlin.reflect.KClass r2 = kotlin.jvm.internal.Reflection.getOrCreateKotlinClass(r2)
                java.lang.String r2 = r2.getSimpleName()
                int r4 = r3.S()
                android.view.View r5 = r3.W()
                kn.i r6 = r3.P()
                boolean r7 = r3.d0()
                boolean r8 = r3.Z()
                boolean r9 = r3.a0()
                int r10 = kn.d.f(r3)
                int[] r11 = kn.d.e(r3)
                r18 = 62
                r19 = 0
                java.lang.String r12 = ", "
                r13 = 0
                r14 = 0
                r15 = 0
                r16 = 0
                r17 = 0
                java.lang.String r3 = kotlin.collections.i.u0(r11, r12, r13, r14, r15, r16, r17, r18, r19)
                java.lang.StringBuilder r11 = new java.lang.StringBuilder
                r11.<init>()
                java.lang.String r12 = "\n    handler: "
                r11.append(r12)
                r11.append(r2)
                java.lang.String r2 = "\n    state: "
                r11.append(r2)
                r11.append(r4)
                java.lang.String r2 = "\n    view: "
                r11.append(r2)
                r11.append(r5)
                java.lang.String r2 = "\n    orchestrator: "
                r11.append(r2)
                r11.append(r6)
                java.lang.String r2 = "\n    isEnabled: "
                r11.append(r2)
                r11.append(r7)
                java.lang.String r2 = "\n    isActive: "
                r11.append(r2)
                r11.append(r8)
                java.lang.String r2 = "\n    isAwaiting: "
                r11.append(r2)
                r11.append(r9)
                java.lang.String r2 = "\n    trackedPointersCount: "
                r11.append(r2)
                r11.append(r10)
                java.lang.String r2 = "\n    trackedPointers: "
                r11.append(r2)
                r11.append(r3)
                java.lang.String r2 = "\n    while handling event: "
                r11.append(r2)
                r11.append(r0)
                java.lang.String r0 = "\n      "
                r11.append(r0)
                java.lang.String r0 = r11.toString()
                java.lang.String r0 = kotlin.text.StringsKt.j(r0)
                r2 = r20
                r2.<init>(r0, r1)
                return
            */
            throw new UnsupportedOperationException("Method not decompiled: kn.d.a.<init>(kn.d, android.view.MotionEvent, java.lang.IllegalArgumentException):void");
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b {
        public /* synthetic */ b(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final boolean c(float f10) {
            return !Float.isNaN(f10);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final void d(int i10) {
            if (d.L == null) {
                d.L = new MotionEvent.PointerProperties[12];
                d.M = new MotionEvent.PointerCoords[12];
            }
            while (i10 > 0) {
                MotionEvent.PointerProperties[] pointerPropertiesArr = d.L;
                MotionEvent.PointerCoords[] pointerCoordsArr = null;
                if (pointerPropertiesArr == null) {
                    Intrinsics.throwUninitializedPropertyAccessException("pointerProps");
                    pointerPropertiesArr = null;
                }
                int i11 = i10 - 1;
                if (pointerPropertiesArr[i11] == null) {
                    MotionEvent.PointerProperties[] pointerPropertiesArr2 = d.L;
                    if (pointerPropertiesArr2 == null) {
                        Intrinsics.throwUninitializedPropertyAccessException("pointerProps");
                        pointerPropertiesArr2 = null;
                    }
                    pointerPropertiesArr2[i11] = new MotionEvent.PointerProperties();
                    MotionEvent.PointerCoords[] pointerCoordsArr2 = d.M;
                    if (pointerCoordsArr2 == null) {
                        Intrinsics.throwUninitializedPropertyAccessException("pointerCoords");
                    } else {
                        pointerCoordsArr = pointerCoordsArr2;
                    }
                    pointerCoordsArr[i11] = new MotionEvent.PointerCoords();
                    i10--;
                } else {
                    return;
                }
            }
        }

        private b() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static abstract class c {

        /* renamed from: a  reason: collision with root package name */
        public static final a f31867a = new a(null);

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a {
            public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
                this();
            }

            /* JADX INFO: Access modifiers changed from: private */
            public final void b(d dVar, ReadableMap readableMap) {
                float f10;
                float f11;
                float f12;
                if (readableMap.getType("hitSlop") == ReadableType.Number) {
                    float pixelFromDIP = PixelUtil.toPixelFromDIP(readableMap.getDouble("hitSlop"));
                    dVar.z0(pixelFromDIP, pixelFromDIP, pixelFromDIP, pixelFromDIP, Float.NaN, Float.NaN);
                    return;
                }
                ReadableMap map = readableMap.getMap("hitSlop");
                Intrinsics.checkNotNull(map);
                float f13 = Float.NaN;
                if (map.hasKey("horizontal")) {
                    f10 = PixelUtil.toPixelFromDIP(map.getDouble("horizontal"));
                } else {
                    f10 = Float.NaN;
                }
                float f14 = f10;
                if (map.hasKey("vertical")) {
                    f11 = PixelUtil.toPixelFromDIP(map.getDouble("vertical"));
                } else {
                    f11 = Float.NaN;
                }
                float f15 = f11;
                if (map.hasKey(ViewProps.LEFT)) {
                    f10 = PixelUtil.toPixelFromDIP(map.getDouble(ViewProps.LEFT));
                }
                float f16 = f10;
                if (map.hasKey(ViewProps.TOP)) {
                    f11 = PixelUtil.toPixelFromDIP(map.getDouble(ViewProps.TOP));
                }
                float f17 = f11;
                if (map.hasKey(ViewProps.RIGHT)) {
                    f14 = PixelUtil.toPixelFromDIP(map.getDouble(ViewProps.RIGHT));
                }
                float f18 = f14;
                if (map.hasKey(ViewProps.BOTTOM)) {
                    f15 = PixelUtil.toPixelFromDIP(map.getDouble(ViewProps.BOTTOM));
                }
                float f19 = f15;
                if (map.hasKey("width")) {
                    f12 = PixelUtil.toPixelFromDIP(map.getDouble("width"));
                } else {
                    f12 = Float.NaN;
                }
                if (map.hasKey("height")) {
                    f13 = PixelUtil.toPixelFromDIP(map.getDouble("height"));
                }
                dVar.z0(f16, f17, f18, f19, f12, f13);
            }

            private a() {
            }
        }

        protected abstract d a(Context context);

        public final d b(Context context, int i10) {
            d a10 = a(context);
            a10.I0(i10);
            return a10;
        }

        public abstract ln.b c(d dVar);

        public abstract String d();

        public abstract Class e();

        public void f(d handler, ReadableMap config) {
            Intrinsics.checkNotNullParameter(handler, "handler");
            Intrinsics.checkNotNullParameter(config, "config");
            handler.s0();
            if (config.hasKey("shouldCancelWhenOutside")) {
                handler.G0(config.getBoolean("shouldCancelWhenOutside"));
            }
            if (config.hasKey(ViewProps.ENABLED)) {
                handler.y0(config.getBoolean(ViewProps.ENABLED));
            }
            if (config.hasKey("hitSlop")) {
                f31867a.b(handler, config);
            }
            if (config.hasKey("needsPointerData")) {
                handler.C0(config.getBoolean("needsPointerData"));
            }
            if (config.hasKey("manualActivation")) {
                handler.f31862v = config.getBoolean("manualActivation");
            }
            if (config.hasKey("mouseButton")) {
                handler.B0(config.getInt("mouseButton"));
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* renamed from: kn.d$d  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0451d {

        /* renamed from: a  reason: collision with root package name */
        private final int f31868a;

        /* renamed from: b  reason: collision with root package name */
        private float f31869b;

        /* renamed from: c  reason: collision with root package name */
        private float f31870c;

        /* renamed from: d  reason: collision with root package name */
        private float f31871d;

        /* renamed from: e  reason: collision with root package name */
        private float f31872e;

        public C0451d(int i10, float f10, float f11, float f12, float f13) {
            this.f31868a = i10;
            this.f31869b = f10;
            this.f31870c = f11;
            this.f31871d = f12;
            this.f31872e = f13;
        }

        public final float a() {
            return this.f31871d;
        }

        public final float b() {
            return this.f31872e;
        }

        public final int c() {
            return this.f31868a;
        }

        public final float d() {
            return this.f31869b;
        }

        public final float e() {
            return this.f31870c;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof C0451d)) {
                return false;
            }
            C0451d c0451d = (C0451d) obj;
            if (this.f31868a == c0451d.f31868a && Float.compare(this.f31869b, c0451d.f31869b) == 0 && Float.compare(this.f31870c, c0451d.f31870c) == 0 && Float.compare(this.f31871d, c0451d.f31871d) == 0 && Float.compare(this.f31872e, c0451d.f31872e) == 0) {
                return true;
            }
            return false;
        }

        public final void f(float f10) {
            this.f31871d = f10;
        }

        public final void g(float f10) {
            this.f31872e = f10;
        }

        public final void h(float f10) {
            this.f31869b = f10;
        }

        public int hashCode() {
            return (((((((Integer.hashCode(this.f31868a) * 31) + Float.hashCode(this.f31869b)) * 31) + Float.hashCode(this.f31870c)) * 31) + Float.hashCode(this.f31871d)) * 31) + Float.hashCode(this.f31872e);
        }

        public final void i(float f10) {
            this.f31870c = f10;
        }

        public String toString() {
            int i10 = this.f31868a;
            float f10 = this.f31869b;
            float f11 = this.f31870c;
            float f12 = this.f31871d;
            float f13 = this.f31872e;
            return "PointerData(pointerId=" + i10 + ", x=" + f10 + ", y=" + f11 + ", absoluteX=" + f12 + ", absoluteY=" + f13 + ")";
        }
    }

    public d() {
        int[] iArr = new int[2];
        for (int i10 = 0; i10 < 2; i10++) {
            iArr[i10] = 0;
        }
        this.f31843c = iArr;
        this.f31850j = true;
        C0451d[] c0451dArr = new C0451d[12];
        for (int i11 = 0; i11 < 12; i11++) {
            c0451dArr[i11] = null;
        }
        this.f31856p = c0451dArr;
        this.D = 3;
    }

    private final void A(MotionEvent motionEvent, MotionEvent motionEvent2) {
        C();
        this.f31852l = null;
        this.f31854n = 3;
        int pointerId = motionEvent.getPointerId(motionEvent.getActionIndex());
        this.f31856p[pointerId] = new C0451d(pointerId, motionEvent.getX(motionEvent.getActionIndex()), motionEvent.getY(motionEvent.getActionIndex()), (motionEvent2.getX(motionEvent.getActionIndex()) + (motionEvent2.getRawX() - motionEvent2.getX())) - this.f31843c[0], (motionEvent2.getY(motionEvent.getActionIndex()) + (motionEvent2.getRawY() - motionEvent2.getY())) - this.f31843c[1]);
        C0451d c0451d = this.f31856p[pointerId];
        Intrinsics.checkNotNull(c0451d);
        n(c0451d);
        this.f31856p[pointerId] = null;
        this.f31855o--;
        y();
    }

    private final void C() {
        C0451d[] c0451dArr;
        this.f31853m = null;
        for (C0451d c0451d : this.f31856p) {
            if (c0451d != null) {
                o(c0451d);
            }
        }
    }

    private final int E() {
        int[] iArr;
        int i10 = 0;
        while (i10 < this.f31842b) {
            int i11 = 0;
            while (true) {
                iArr = this.f31841a;
                if (i11 >= iArr.length || iArr[i11] == i10) {
                    break;
                }
                i11++;
            }
            if (i11 == iArr.length) {
                break;
            }
            i10++;
        }
        return i10;
    }

    private final void F0(MotionEvent motionEvent) {
        int toolType = motionEvent.getToolType(motionEvent.getActionIndex());
        int i10 = 1;
        if (toolType != 1) {
            if (toolType != 2) {
                i10 = 3;
                if (toolType == 3) {
                    i10 = 2;
                }
            }
        } else {
            i10 = 0;
        }
        this.D = i10;
    }

    private final Activity H(Context context) {
        if (context instanceof ReactContext) {
            return ((ReactContext) context).getCurrentActivity();
        }
        if (context instanceof Activity) {
            return (Activity) context;
        }
        if (context instanceof ContextWrapper) {
            return H(((ContextWrapper) context).getBaseContext());
        }
        return null;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void b(d dVar) {
        dVar.q();
    }

    private final boolean b0(int i10) {
        int i11 = this.E;
        if (i11 == 0) {
            if (i10 != 1) {
                return false;
            }
            return true;
        } else if ((i10 & i11) == 0) {
            return false;
        } else {
            return true;
        }
    }

    private final boolean e0(int i10) {
        if (this.f31841a[i10] != -1) {
            return true;
        }
        return false;
    }

    private final void h0(int i10) {
        UiThreadUtil.assertOnUiThread();
        if (this.f31846f == i10) {
            return;
        }
        if (this.f31855o > 0 && (i10 == 5 || i10 == 3 || i10 == 1)) {
            r();
        }
        int i11 = this.f31846f;
        this.f31846f = i10;
        if (i10 == 4) {
            short s10 = N;
            N = (short) (s10 + 1);
            this.f31859s = s10;
        }
        i iVar = this.A;
        Intrinsics.checkNotNull(iVar);
        iVar.A(this, i10, i11);
        p0(i10, i11);
    }

    private final boolean i0(MotionEvent motionEvent) {
        if (motionEvent.getPointerCount() != this.f31842b) {
            return true;
        }
        int length = this.f31841a.length;
        for (int i10 = 0; i10 < length; i10++) {
            int i11 = this.f31841a[i10];
            if (i11 != -1 && i11 != i10) {
                return true;
            }
        }
        return false;
    }

    /* JADX WARN: Multi-variable type inference failed */
    /* JADX WARN: Removed duplicated region for block: B:27:0x0074  */
    /* JADX WARN: Removed duplicated region for block: B:46:0x00ba  */
    /* JADX WARN: Removed duplicated region for block: B:50:0x00c2  */
    /* JADX WARN: Removed duplicated region for block: B:57:0x00d3  */
    /* JADX WARN: Removed duplicated region for block: B:60:0x00dc  */
    /* JADX WARN: Removed duplicated region for block: B:61:0x00e0  */
    /* JADX WARN: Removed duplicated region for block: B:82:0x00b6 A[EDGE_INSN: B:82:0x00b6->B:44:0x00b6 ?: BREAK  , SYNTHETIC] */
    /* JADX WARN: Type inference failed for: r3v6, types: [android.view.MotionEvent$PointerProperties[]] */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private final android.view.MotionEvent m(android.view.MotionEvent r26) {
        /*
            Method dump skipped, instructions count: 345
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: kn.d.m(android.view.MotionEvent):android.view.MotionEvent");
    }

    private final void n(C0451d c0451d) {
        if (this.f31852l == null) {
            this.f31852l = Arguments.createArray();
        }
        WritableArray writableArray = this.f31852l;
        Intrinsics.checkNotNull(writableArray);
        writableArray.pushMap(u(c0451d));
    }

    private final void o(C0451d c0451d) {
        if (this.f31853m == null) {
            this.f31853m = Arguments.createArray();
        }
        WritableArray writableArray = this.f31853m;
        Intrinsics.checkNotNull(writableArray);
        writableArray.pushMap(u(c0451d));
    }

    private final void r() {
        C0451d[] c0451dArr;
        this.f31854n = 4;
        this.f31852l = null;
        C();
        for (C0451d c0451d : this.f31856p) {
            if (c0451d != null) {
                n(c0451d);
            }
        }
        this.f31855o = 0;
        kotlin.collections.i.z(this.f31856p, null, 0, 0, 6, null);
        y();
    }

    private final WritableMap u(C0451d c0451d) {
        WritableMap createMap = Arguments.createMap();
        createMap.putInt(StackTraceHelper.ID_KEY, c0451d.c());
        createMap.putDouble("x", PixelUtil.toDIPFromPixel(c0451d.d()));
        createMap.putDouble("y", PixelUtil.toDIPFromPixel(c0451d.e()));
        createMap.putDouble("absoluteX", PixelUtil.toDIPFromPixel(c0451d.a()));
        createMap.putDouble("absoluteY", PixelUtil.toDIPFromPixel(c0451d.b()));
        Intrinsics.checkNotNullExpressionValue(createMap, "apply(...)");
        return createMap;
    }

    private final void x(MotionEvent motionEvent, MotionEvent motionEvent2) {
        this.f31852l = null;
        this.f31854n = 1;
        int pointerId = motionEvent.getPointerId(motionEvent.getActionIndex());
        this.f31856p[pointerId] = new C0451d(pointerId, motionEvent.getX(motionEvent.getActionIndex()), motionEvent.getY(motionEvent.getActionIndex()), (motionEvent2.getX(motionEvent.getActionIndex()) + (motionEvent2.getRawX() - motionEvent2.getX())) - this.f31843c[0], (motionEvent2.getY(motionEvent.getActionIndex()) + (motionEvent2.getRawY() - motionEvent2.getY())) - this.f31843c[1]);
        this.f31855o++;
        C0451d c0451d = this.f31856p[pointerId];
        Intrinsics.checkNotNull(c0451d);
        n(c0451d);
        C();
        y();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void y0(boolean z10) {
        if (this.f31845e != null && this.f31850j != z10) {
            UiThreadUtil.runOnUiThread(new Runnable() { // from class: kn.c
                @Override // java.lang.Runnable
                public final void run() {
                    d.b(d.this);
                }
            });
        }
        this.f31850j = z10;
    }

    private final void z(MotionEvent motionEvent, MotionEvent motionEvent2) {
        this.f31852l = null;
        this.f31854n = 2;
        float rawX = motionEvent2.getRawX() - motionEvent2.getX();
        float rawY = motionEvent2.getRawY() - motionEvent2.getY();
        int pointerCount = motionEvent.getPointerCount();
        int i10 = 0;
        for (int i11 = 0; i11 < pointerCount; i11++) {
            C0451d c0451d = this.f31856p[motionEvent.getPointerId(i11)];
            if (c0451d != null && (c0451d.d() != motionEvent.getX(i11) || c0451d.e() != motionEvent.getY(i11))) {
                c0451d.h(motionEvent.getX(i11));
                c0451d.i(motionEvent.getY(i11));
                c0451d.f((motionEvent2.getX(i11) + rawX) - this.f31843c[0]);
                c0451d.g((motionEvent2.getY(i11) + rawY) - this.f31843c[1]);
                n(c0451d);
                i10++;
            }
        }
        if (i10 > 0) {
            C();
            y();
        }
    }

    public final void A0(e eVar) {
        this.C = eVar;
    }

    public final void B() {
        int i10 = this.f31846f;
        if (i10 != 2 && i10 != 4) {
            return;
        }
        h0(5);
    }

    protected final void B0(int i10) {
        this.E = i10;
    }

    public final void C0(boolean z10) {
        this.f31857q = z10;
    }

    public final void D() {
        int i10 = this.f31846f;
        if (i10 != 4 && i10 != 0 && i10 != 2) {
            return;
        }
        k0();
        h0(1);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final void D0(int i10) {
        this.f31865y = i10;
    }

    public final void E0(r rVar) {
        this.B = rVar;
    }

    public final int F() {
        return this.f31851k;
    }

    public final int G() {
        return this.F;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final void G0(boolean z10) {
        this.f31866z = z10;
    }

    public final void H0(boolean z10) {
        this.I = z10;
    }

    public final short I() {
        return this.f31859s;
    }

    public final void I0(int i10) {
        this.f31844d = i10;
    }

    public final float J() {
        return (this.f31860t + this.f31863w) - this.f31843c[0];
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final boolean J0(MotionEvent sourceEvent) {
        Intrinsics.checkNotNullParameter(sourceEvent, "sourceEvent");
        if (sourceEvent.getToolType(0) == 3) {
            if (sourceEvent.getAction() == 0 || sourceEvent.getAction() == 1 || sourceEvent.getAction() == 6 || sourceEvent.getAction() == 5 || (sourceEvent.getAction() != 2 && !b0(sourceEvent.getActionButton()))) {
                return false;
            }
            if (sourceEvent.getAction() == 2 && !b0(sourceEvent.getButtonState())) {
                return false;
            }
        }
        return true;
    }

    public final float K() {
        return (this.f31861u + this.f31864x) - this.f31843c[1];
    }

    public boolean K0(d handler) {
        e eVar;
        Intrinsics.checkNotNullParameter(handler, "handler");
        if (handler == this || (eVar = this.C) == null) {
            return false;
        }
        return eVar.c(this, handler);
    }

    public final float L() {
        return this.f31860t;
    }

    public boolean L0(d handler) {
        Intrinsics.checkNotNullParameter(handler, "handler");
        if (handler == this) {
            return true;
        }
        e eVar = this.C;
        if (eVar != null) {
            return eVar.b(this, handler);
        }
        return false;
    }

    public final float M() {
        return this.f31861u;
    }

    public boolean M0(d handler) {
        e eVar;
        Intrinsics.checkNotNullParameter(handler, "handler");
        if (handler == this || (eVar = this.C) == null) {
            return false;
        }
        return eVar.d(this, handler);
    }

    public final boolean N() {
        return this.f31857q;
    }

    public final boolean N0(d handler) {
        e eVar;
        Intrinsics.checkNotNullParameter(handler, "handler");
        if (handler == this || (eVar = this.C) == null) {
            return false;
        }
        return eVar.a(this, handler);
    }

    public final int O() {
        return this.f31865y;
    }

    public final void O0(int i10) {
        if (e0(i10)) {
            return;
        }
        this.f31841a[i10] = E();
        this.f31842b++;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final i P() {
        return this.A;
    }

    public final void P0(int i10) {
        if (!e0(i10)) {
            return;
        }
        this.f31841a[i10] = -1;
        this.f31842b--;
    }

    public final int Q() {
        return this.D;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final PointF Q0(PointF point) {
        PointF L2;
        Intrinsics.checkNotNullParameter(point, "point");
        i iVar = this.A;
        if (iVar != null && (L2 = iVar.L(this.f31845e, point)) != null) {
            return L2;
        }
        point.x = Float.NaN;
        point.y = Float.NaN;
        return point;
    }

    public final boolean R() {
        return this.I;
    }

    public final void R0(MotionEvent event, MotionEvent sourceEvent) {
        Intrinsics.checkNotNullParameter(event, "event");
        Intrinsics.checkNotNullParameter(sourceEvent, "sourceEvent");
        if (event.getActionMasked() != 0 && event.getActionMasked() != 5) {
            if (event.getActionMasked() != 1 && event.getActionMasked() != 6) {
                if (event.getActionMasked() == 2) {
                    z(event, sourceEvent);
                    return;
                }
                return;
            }
            z(event, sourceEvent);
            A(event, sourceEvent);
            return;
        }
        x(event, sourceEvent);
        z(event, sourceEvent);
    }

    public final int S() {
        return this.f31846f;
    }

    public final boolean S0(MotionEvent event) {
        int i10;
        Intrinsics.checkNotNullParameter(event, "event");
        if (this.f31850j && (i10 = this.f31846f) != 1 && i10 != 3 && i10 != 5 && e0(event.getPointerId(event.getActionIndex()))) {
            return true;
        }
        return false;
    }

    public final int T() {
        return this.f31844d;
    }

    public final void T0(Function0 closure) {
        Intrinsics.checkNotNullParameter(closure, "closure");
        this.f31849i = true;
        closure.invoke();
        this.f31849i = false;
    }

    public final int U() {
        return this.f31854n;
    }

    public final int V() {
        return this.f31855o;
    }

    public final View W() {
        return this.f31845e;
    }

    public final void X(MotionEvent transformedEvent, MotionEvent sourceEvent) {
        int i10;
        Intrinsics.checkNotNullParameter(transformedEvent, "transformedEvent");
        Intrinsics.checkNotNullParameter(sourceEvent, "sourceEvent");
        if (this.f31850j && (i10 = this.f31846f) != 3 && i10 != 1 && i10 != 5 && this.f31842b >= 1) {
            try {
                MotionEvent[] motionEventArr = {m(transformedEvent), m(sourceEvent)};
                MotionEvent motionEvent = motionEventArr[0];
                MotionEvent motionEvent2 = motionEventArr[1];
                this.f31847g = motionEvent.getX();
                this.f31848h = motionEvent.getY();
                this.f31865y = motionEvent.getPointerCount();
                boolean g02 = g0(this.f31845e, this.f31847g, this.f31848h);
                this.f31849i = g02;
                if (this.f31866z && !g02) {
                    int i11 = this.f31846f;
                    if (i11 == 4) {
                        q();
                        return;
                    } else if (i11 == 2) {
                        D();
                        return;
                    } else {
                        return;
                    }
                }
                k kVar = k.f31894a;
                this.f31860t = kVar.b(motionEvent, true);
                this.f31861u = kVar.c(motionEvent, true);
                this.f31863w = motionEvent.getRawX() - motionEvent.getX();
                this.f31864x = motionEvent.getRawY() - motionEvent.getY();
                if (sourceEvent.getAction() == 0 || sourceEvent.getAction() == 9 || sourceEvent.getAction() == 7) {
                    F0(sourceEvent);
                }
                if (com.swmansion.gesturehandler.react.a.c(sourceEvent)) {
                    m0(motionEvent, motionEvent2);
                } else {
                    l0(motionEvent, motionEvent2);
                }
                if (!Intrinsics.areEqual(motionEvent, transformedEvent)) {
                    motionEvent.recycle();
                }
                if (!Intrinsics.areEqual(motionEvent2, sourceEvent)) {
                    motionEvent2.recycle();
                }
            } catch (a unused) {
                D();
            }
        }
    }

    public final boolean Y(d other) {
        Intrinsics.checkNotNullParameter(other, "other");
        int length = this.f31841a.length;
        for (int i10 = 0; i10 < length; i10++) {
            if (this.f31841a[i10] != -1 && other.f31841a[i10] != -1) {
                return true;
            }
        }
        return false;
    }

    public final boolean Z() {
        return this.G;
    }

    public final boolean a0() {
        return this.H;
    }

    /* JADX WARN: Removed duplicated region for block: B:11:0x001a  */
    /* JADX WARN: Unsupported multi-entry loop pattern (BACK_EDGE: B:9:0x0017 -> B:10:0x0018). Please submit an issue!!! */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public final boolean c0(kn.d r4) {
        /*
            r3 = this;
            java.lang.String r0 = "of"
            kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r4, r0)
            android.view.View r0 = r3.f31845e
            r1 = 0
            if (r0 == 0) goto Lf
            android.view.ViewParent r0 = r0.getParent()
            goto L10
        Lf:
            r0 = r1
        L10:
            boolean r2 = r0 instanceof android.view.View
            if (r2 == 0) goto L17
            android.view.View r0 = (android.view.View) r0
            goto L18
        L17:
            r0 = r1
        L18:
            if (r0 == 0) goto L2f
            android.view.View r2 = r4.f31845e
            boolean r2 = kotlin.jvm.internal.Intrinsics.areEqual(r0, r2)
            if (r2 == 0) goto L24
            r4 = 1
            return r4
        L24:
            android.view.ViewParent r0 = r0.getParent()
            boolean r2 = r0 instanceof android.view.View
            if (r2 == 0) goto L17
            android.view.View r0 = (android.view.View) r0
            goto L18
        L2f:
            r4 = 0
            return r4
        */
        throw new UnsupportedOperationException("Method not decompiled: kn.d.c0(kn.d):boolean");
    }

    public final boolean d0() {
        return this.f31850j;
    }

    public final boolean f0() {
        return this.f31849i;
    }

    public final boolean g0(View view, float f10, float f11) {
        float f12;
        float f13;
        f.a aVar = jn.f.f30004a;
        Intrinsics.checkNotNull(view);
        if (aVar.e(view)) {
            return aVar.c(view, f10, f11);
        }
        float width = view.getWidth();
        float height = view.getHeight();
        float[] fArr = this.f31858r;
        float f14 = 0.0f;
        if (fArr != null) {
            float f15 = fArr[0];
            float f16 = fArr[1];
            float f17 = fArr[2];
            float f18 = fArr[3];
            b bVar = J;
            if (bVar.c(f15)) {
                f13 = 0.0f - f15;
            } else {
                f13 = 0.0f;
            }
            if (bVar.c(f16)) {
                f14 = 0.0f - f16;
            }
            if (bVar.c(f17)) {
                width += f17;
            }
            if (bVar.c(f18)) {
                height += f18;
            }
            float f19 = fArr[4];
            float f20 = fArr[5];
            if (bVar.c(f19)) {
                if (!bVar.c(f15)) {
                    f13 = width - f19;
                } else if (!bVar.c(f17)) {
                    width = f19 + f13;
                }
            }
            if (bVar.c(f20)) {
                if (!bVar.c(f16)) {
                    f14 = height - f20;
                } else if (!bVar.c(f18)) {
                    height = f20 + f14;
                }
            }
            f12 = f14;
            f14 = f13;
        } else {
            f12 = 0.0f;
        }
        if (f14 <= f10 && f10 <= width && f12 <= f11 && f11 <= height) {
            return true;
        }
        return false;
    }

    public final void k() {
        l(false);
    }

    public void l(boolean z10) {
        if (!this.f31862v || z10) {
            int i10 = this.f31846f;
            if (i10 != 0 && i10 != 2) {
                return;
            }
            h0(4);
        }
    }

    protected abstract void l0(MotionEvent motionEvent, MotionEvent motionEvent2);

    protected void m0(MotionEvent event, MotionEvent sourceEvent) {
        Intrinsics.checkNotNullParameter(event, "event");
        Intrinsics.checkNotNullParameter(sourceEvent, "sourceEvent");
    }

    public final void p() {
        if (this.f31846f == 0) {
            h0(2);
        }
    }

    public final void q() {
        int i10 = this.f31846f;
        if (i10 != 4 && i10 != 0 && i10 != 2 && !this.H) {
            return;
        }
        j0();
        h0(3);
    }

    public final void q0(View view, i iVar) {
        Context context;
        if (this.f31845e == null && this.A == null) {
            Arrays.fill(this.f31841a, -1);
            this.f31842b = 0;
            this.f31846f = 0;
            this.f31845e = view;
            this.A = iVar;
            View view2 = null;
            if (view != null) {
                context = view.getContext();
            } else {
                context = null;
            }
            Activity H = H(context);
            if (H != null) {
                view2 = H.findViewById(16908290);
            }
            if (view2 != null) {
                view2.getLocationOnScreen(this.f31843c);
            } else {
                int[] iArr = this.f31843c;
                iArr[0] = 0;
                iArr[1] = 0;
            }
            n0();
            return;
        }
        throw new IllegalStateException("Already prepared or hasn't been reset");
    }

    public final void r0() {
        this.f31845e = null;
        this.A = null;
        Arrays.fill(this.f31841a, -1);
        this.f31842b = 0;
        this.f31855o = 0;
        kotlin.collections.i.z(this.f31856p, null, 0, 0, 6, null);
        this.f31854n = 0;
        o0();
    }

    public final WritableArray s() {
        WritableArray writableArray = this.f31853m;
        this.f31853m = null;
        return writableArray;
    }

    public void s0() {
        this.f31857q = false;
        this.f31862v = false;
        this.f31866z = false;
        y0(true);
        this.f31858r = (float[]) K;
        this.E = 0;
    }

    public final WritableArray t() {
        WritableArray writableArray = this.f31852l;
        this.f31852l = null;
        return writableArray;
    }

    public String toString() {
        String simpleName;
        View view = this.f31845e;
        if (view == null) {
            simpleName = null;
        } else {
            Intrinsics.checkNotNull(view);
            simpleName = view.getClass().getSimpleName();
        }
        String simpleName2 = getClass().getSimpleName();
        int i10 = this.f31844d;
        return simpleName2 + "@[" + i10 + "]:" + simpleName;
    }

    public final void u0(int i10) {
        this.f31851k = i10;
    }

    public void v(MotionEvent event) {
        Intrinsics.checkNotNullParameter(event, "event");
        r rVar = this.B;
        if (rVar != null) {
            rVar.a(this, event);
        }
    }

    public final void v0(int i10) {
        this.F = i10;
    }

    public void w(int i10, int i11) {
        r rVar = this.B;
        if (rVar != null) {
            rVar.b(this, i10, i11);
        }
    }

    public final void w0(boolean z10) {
        this.G = z10;
    }

    public final void x0(boolean z10) {
        this.H = z10;
    }

    public void y() {
        r rVar;
        if (this.f31852l != null && (rVar = this.B) != null) {
            rVar.c(this);
        }
    }

    public final void z0(float f10, float f11, float f12, float f13, float f14, float f15) {
        if (this.f31858r == null) {
            this.f31858r = new float[6];
        }
        float[] fArr = this.f31858r;
        Intrinsics.checkNotNull(fArr);
        fArr[0] = f10;
        float[] fArr2 = this.f31858r;
        Intrinsics.checkNotNull(fArr2);
        fArr2[1] = f11;
        float[] fArr3 = this.f31858r;
        Intrinsics.checkNotNull(fArr3);
        fArr3[2] = f12;
        float[] fArr4 = this.f31858r;
        Intrinsics.checkNotNull(fArr4);
        fArr4[3] = f13;
        float[] fArr5 = this.f31858r;
        Intrinsics.checkNotNull(fArr5);
        fArr5[4] = f14;
        float[] fArr6 = this.f31858r;
        Intrinsics.checkNotNull(fArr6);
        fArr6[5] = f15;
        b bVar = J;
        if (bVar.c(f14) && bVar.c(f10) && bVar.c(f12)) {
            throw new IllegalArgumentException("Cannot have all of left, right and width defined");
        }
        if (bVar.c(f14) && !bVar.c(f10) && !bVar.c(f12)) {
            throw new IllegalArgumentException("When width is set one of left or right pads need to be defined");
        }
        if (bVar.c(f15) && bVar.c(f13) && bVar.c(f11)) {
            throw new IllegalArgumentException("Cannot have all of top, bottom and height defined");
        }
        if (bVar.c(f15) && !bVar.c(f13) && !bVar.c(f11)) {
            throw new IllegalArgumentException("When height is set one of top or bottom pads need to be defined");
        }
    }

    protected void j0() {
    }

    protected void k0() {
    }

    protected void n0() {
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void o0() {
    }

    public void t0() {
    }

    protected void p0(int i10, int i11) {
    }
}
