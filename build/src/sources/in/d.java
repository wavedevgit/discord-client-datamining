package in;

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
import hn.f;
import java.util.Arrays;
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
    private final int[] f27503a = new int[12];

    /* renamed from: b  reason: collision with root package name */
    private int f27504b;

    /* renamed from: c  reason: collision with root package name */
    private final int[] f27505c;

    /* renamed from: d  reason: collision with root package name */
    private int f27506d;

    /* renamed from: e  reason: collision with root package name */
    private View f27507e;

    /* renamed from: f  reason: collision with root package name */
    private int f27508f;

    /* renamed from: g  reason: collision with root package name */
    private float f27509g;

    /* renamed from: h  reason: collision with root package name */
    private float f27510h;

    /* renamed from: i  reason: collision with root package name */
    private boolean f27511i;

    /* renamed from: j  reason: collision with root package name */
    private boolean f27512j;

    /* renamed from: k  reason: collision with root package name */
    private int f27513k;

    /* renamed from: l  reason: collision with root package name */
    private WritableArray f27514l;

    /* renamed from: m  reason: collision with root package name */
    private WritableArray f27515m;

    /* renamed from: n  reason: collision with root package name */
    private int f27516n;

    /* renamed from: o  reason: collision with root package name */
    private int f27517o;

    /* renamed from: p  reason: collision with root package name */
    private final C0386d[] f27518p;

    /* renamed from: q  reason: collision with root package name */
    private boolean f27519q;

    /* renamed from: r  reason: collision with root package name */
    private float[] f27520r;

    /* renamed from: s  reason: collision with root package name */
    private short f27521s;

    /* renamed from: t  reason: collision with root package name */
    private float f27522t;

    /* renamed from: u  reason: collision with root package name */
    private float f27523u;

    /* renamed from: v  reason: collision with root package name */
    private boolean f27524v;

    /* renamed from: w  reason: collision with root package name */
    private float f27525w;

    /* renamed from: x  reason: collision with root package name */
    private float f27526x;

    /* renamed from: y  reason: collision with root package name */
    private int f27527y;

    /* renamed from: z  reason: collision with root package name */
    private boolean f27528z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends Exception {
        /* JADX WARN: Illegal instructions before constructor call */
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        public a(in.d r21, android.view.MotionEvent r22, java.lang.IllegalArgumentException r23) {
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
                in.i r6 = r3.P()
                boolean r7 = r3.d0()
                boolean r8 = r3.Z()
                boolean r9 = r3.a0()
                int r10 = in.d.f(r3)
                int[] r11 = in.d.e(r3)
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
            throw new UnsupportedOperationException("Method not decompiled: in.d.a.<init>(in.d, android.view.MotionEvent, java.lang.IllegalArgumentException):void");
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
        public static final a f27529a = new a(null);

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

        public abstract jn.b c(d dVar);

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
                f27529a.b(handler, config);
            }
            if (config.hasKey("needsPointerData")) {
                handler.C0(config.getBoolean("needsPointerData"));
            }
            if (config.hasKey("manualActivation")) {
                handler.f27524v = config.getBoolean("manualActivation");
            }
            if (config.hasKey("mouseButton")) {
                handler.B0(config.getInt("mouseButton"));
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* renamed from: in.d$d  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0386d {

        /* renamed from: a  reason: collision with root package name */
        private final int f27530a;

        /* renamed from: b  reason: collision with root package name */
        private float f27531b;

        /* renamed from: c  reason: collision with root package name */
        private float f27532c;

        /* renamed from: d  reason: collision with root package name */
        private float f27533d;

        /* renamed from: e  reason: collision with root package name */
        private float f27534e;

        public C0386d(int i10, float f10, float f11, float f12, float f13) {
            this.f27530a = i10;
            this.f27531b = f10;
            this.f27532c = f11;
            this.f27533d = f12;
            this.f27534e = f13;
        }

        public final float a() {
            return this.f27533d;
        }

        public final float b() {
            return this.f27534e;
        }

        public final int c() {
            return this.f27530a;
        }

        public final float d() {
            return this.f27531b;
        }

        public final float e() {
            return this.f27532c;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof C0386d)) {
                return false;
            }
            C0386d c0386d = (C0386d) obj;
            if (this.f27530a == c0386d.f27530a && Float.compare(this.f27531b, c0386d.f27531b) == 0 && Float.compare(this.f27532c, c0386d.f27532c) == 0 && Float.compare(this.f27533d, c0386d.f27533d) == 0 && Float.compare(this.f27534e, c0386d.f27534e) == 0) {
                return true;
            }
            return false;
        }

        public final void f(float f10) {
            this.f27533d = f10;
        }

        public final void g(float f10) {
            this.f27534e = f10;
        }

        public final void h(float f10) {
            this.f27531b = f10;
        }

        public int hashCode() {
            return (((((((Integer.hashCode(this.f27530a) * 31) + Float.hashCode(this.f27531b)) * 31) + Float.hashCode(this.f27532c)) * 31) + Float.hashCode(this.f27533d)) * 31) + Float.hashCode(this.f27534e);
        }

        public final void i(float f10) {
            this.f27532c = f10;
        }

        public String toString() {
            int i10 = this.f27530a;
            float f10 = this.f27531b;
            float f11 = this.f27532c;
            float f12 = this.f27533d;
            float f13 = this.f27534e;
            return "PointerData(pointerId=" + i10 + ", x=" + f10 + ", y=" + f11 + ", absoluteX=" + f12 + ", absoluteY=" + f13 + ")";
        }
    }

    public d() {
        int[] iArr = new int[2];
        for (int i10 = 0; i10 < 2; i10++) {
            iArr[i10] = 0;
        }
        this.f27505c = iArr;
        this.f27512j = true;
        C0386d[] c0386dArr = new C0386d[12];
        for (int i11 = 0; i11 < 12; i11++) {
            c0386dArr[i11] = null;
        }
        this.f27518p = c0386dArr;
        this.D = 3;
    }

    private final void A(MotionEvent motionEvent, MotionEvent motionEvent2) {
        C();
        this.f27514l = null;
        this.f27516n = 3;
        int pointerId = motionEvent.getPointerId(motionEvent.getActionIndex());
        this.f27518p[pointerId] = new C0386d(pointerId, motionEvent.getX(motionEvent.getActionIndex()), motionEvent.getY(motionEvent.getActionIndex()), (motionEvent2.getX(motionEvent.getActionIndex()) + (motionEvent2.getRawX() - motionEvent2.getX())) - this.f27505c[0], (motionEvent2.getY(motionEvent.getActionIndex()) + (motionEvent2.getRawY() - motionEvent2.getY())) - this.f27505c[1]);
        C0386d c0386d = this.f27518p[pointerId];
        Intrinsics.checkNotNull(c0386d);
        n(c0386d);
        this.f27518p[pointerId] = null;
        this.f27517o--;
        y();
    }

    private final void C() {
        C0386d[] c0386dArr;
        this.f27515m = null;
        for (C0386d c0386d : this.f27518p) {
            if (c0386d != null) {
                o(c0386d);
            }
        }
    }

    private final int E() {
        int[] iArr;
        int i10 = 0;
        while (i10 < this.f27504b) {
            int i11 = 0;
            while (true) {
                iArr = this.f27503a;
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
        if (this.f27503a[i10] != -1) {
            return true;
        }
        return false;
    }

    private final void h0(int i10) {
        UiThreadUtil.assertOnUiThread();
        if (this.f27508f == i10) {
            return;
        }
        if (this.f27517o > 0 && (i10 == 5 || i10 == 3 || i10 == 1)) {
            r();
        }
        int i11 = this.f27508f;
        this.f27508f = i10;
        if (i10 == 4) {
            short s10 = N;
            N = (short) (s10 + 1);
            this.f27521s = s10;
        }
        i iVar = this.A;
        Intrinsics.checkNotNull(iVar);
        iVar.A(this, i10, i11);
        p0(i10, i11);
    }

    private final boolean i0(MotionEvent motionEvent) {
        if (motionEvent.getPointerCount() != this.f27504b) {
            return true;
        }
        int length = this.f27503a.length;
        for (int i10 = 0; i10 < length; i10++) {
            int i11 = this.f27503a[i10];
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
        throw new UnsupportedOperationException("Method not decompiled: in.d.m(android.view.MotionEvent):android.view.MotionEvent");
    }

    private final void n(C0386d c0386d) {
        if (this.f27514l == null) {
            this.f27514l = Arguments.createArray();
        }
        WritableArray writableArray = this.f27514l;
        Intrinsics.checkNotNull(writableArray);
        writableArray.pushMap(u(c0386d));
    }

    private final void o(C0386d c0386d) {
        if (this.f27515m == null) {
            this.f27515m = Arguments.createArray();
        }
        WritableArray writableArray = this.f27515m;
        Intrinsics.checkNotNull(writableArray);
        writableArray.pushMap(u(c0386d));
    }

    private final void r() {
        C0386d[] c0386dArr;
        this.f27516n = 4;
        this.f27514l = null;
        C();
        for (C0386d c0386d : this.f27518p) {
            if (c0386d != null) {
                n(c0386d);
            }
        }
        this.f27517o = 0;
        kotlin.collections.i.z(this.f27518p, null, 0, 0, 6, null);
        y();
    }

    private final WritableMap u(C0386d c0386d) {
        WritableMap createMap = Arguments.createMap();
        createMap.putInt(StackTraceHelper.ID_KEY, c0386d.c());
        createMap.putDouble("x", PixelUtil.toDIPFromPixel(c0386d.d()));
        createMap.putDouble("y", PixelUtil.toDIPFromPixel(c0386d.e()));
        createMap.putDouble("absoluteX", PixelUtil.toDIPFromPixel(c0386d.a()));
        createMap.putDouble("absoluteY", PixelUtil.toDIPFromPixel(c0386d.b()));
        Intrinsics.checkNotNullExpressionValue(createMap, "apply(...)");
        return createMap;
    }

    private final void x(MotionEvent motionEvent, MotionEvent motionEvent2) {
        this.f27514l = null;
        this.f27516n = 1;
        int pointerId = motionEvent.getPointerId(motionEvent.getActionIndex());
        this.f27518p[pointerId] = new C0386d(pointerId, motionEvent.getX(motionEvent.getActionIndex()), motionEvent.getY(motionEvent.getActionIndex()), (motionEvent2.getX(motionEvent.getActionIndex()) + (motionEvent2.getRawX() - motionEvent2.getX())) - this.f27505c[0], (motionEvent2.getY(motionEvent.getActionIndex()) + (motionEvent2.getRawY() - motionEvent2.getY())) - this.f27505c[1]);
        this.f27517o++;
        C0386d c0386d = this.f27518p[pointerId];
        Intrinsics.checkNotNull(c0386d);
        n(c0386d);
        C();
        y();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void y0(boolean z10) {
        if (this.f27507e != null && this.f27512j != z10) {
            UiThreadUtil.runOnUiThread(new Runnable() { // from class: in.c
                @Override // java.lang.Runnable
                public final void run() {
                    d.b(d.this);
                }
            });
        }
        this.f27512j = z10;
    }

    private final void z(MotionEvent motionEvent, MotionEvent motionEvent2) {
        this.f27514l = null;
        this.f27516n = 2;
        float rawX = motionEvent2.getRawX() - motionEvent2.getX();
        float rawY = motionEvent2.getRawY() - motionEvent2.getY();
        int pointerCount = motionEvent.getPointerCount();
        int i10 = 0;
        for (int i11 = 0; i11 < pointerCount; i11++) {
            C0386d c0386d = this.f27518p[motionEvent.getPointerId(i11)];
            if (c0386d != null && (c0386d.d() != motionEvent.getX(i11) || c0386d.e() != motionEvent.getY(i11))) {
                c0386d.h(motionEvent.getX(i11));
                c0386d.i(motionEvent.getY(i11));
                c0386d.f((motionEvent2.getX(i11) + rawX) - this.f27505c[0]);
                c0386d.g((motionEvent2.getY(i11) + rawY) - this.f27505c[1]);
                n(c0386d);
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
        int i10 = this.f27508f;
        if (i10 != 2 && i10 != 4) {
            return;
        }
        h0(5);
    }

    protected final void B0(int i10) {
        this.E = i10;
    }

    public final void C0(boolean z10) {
        this.f27519q = z10;
    }

    public final void D() {
        int i10 = this.f27508f;
        if (i10 != 4 && i10 != 0 && i10 != 2) {
            return;
        }
        k0();
        h0(1);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final void D0(int i10) {
        this.f27527y = i10;
    }

    public final void E0(r rVar) {
        this.B = rVar;
    }

    public final int F() {
        return this.f27513k;
    }

    public final int G() {
        return this.F;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final void G0(boolean z10) {
        this.f27528z = z10;
    }

    public final void H0(boolean z10) {
        this.I = z10;
    }

    public final short I() {
        return this.f27521s;
    }

    public final void I0(int i10) {
        this.f27506d = i10;
    }

    public final float J() {
        return (this.f27522t + this.f27525w) - this.f27505c[0];
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
        return (this.f27523u + this.f27526x) - this.f27505c[1];
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
        return this.f27522t;
    }

    public boolean L0(d handler) {
        Intrinsics.checkNotNullParameter(handler, "handler");
        if (handler == this) {
            return true;
        }
        e eVar = this.C;
        if (eVar != null) {
            return eVar.d(this, handler);
        }
        return false;
    }

    public final float M() {
        return this.f27523u;
    }

    public boolean M0(d handler) {
        e eVar;
        Intrinsics.checkNotNullParameter(handler, "handler");
        if (handler == this || (eVar = this.C) == null) {
            return false;
        }
        return eVar.a(this, handler);
    }

    public final boolean N() {
        return this.f27519q;
    }

    public final boolean N0(d handler) {
        e eVar;
        Intrinsics.checkNotNullParameter(handler, "handler");
        if (handler == this || (eVar = this.C) == null) {
            return false;
        }
        return eVar.b(this, handler);
    }

    public final int O() {
        return this.f27527y;
    }

    public final void O0(int i10) {
        if (e0(i10)) {
            return;
        }
        this.f27503a[i10] = E();
        this.f27504b++;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final i P() {
        return this.A;
    }

    public final void P0(int i10) {
        if (!e0(i10)) {
            return;
        }
        this.f27503a[i10] = -1;
        this.f27504b--;
    }

    public final int Q() {
        return this.D;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final PointF Q0(PointF point) {
        PointF L2;
        Intrinsics.checkNotNullParameter(point, "point");
        i iVar = this.A;
        if (iVar != null && (L2 = iVar.L(this.f27507e, point)) != null) {
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
        return this.f27508f;
    }

    public final boolean S0(MotionEvent event) {
        int i10;
        Intrinsics.checkNotNullParameter(event, "event");
        if (this.f27512j && (i10 = this.f27508f) != 1 && i10 != 3 && i10 != 5 && e0(event.getPointerId(event.getActionIndex()))) {
            return true;
        }
        return false;
    }

    public final int T() {
        return this.f27506d;
    }

    public final void T0(Function0 closure) {
        Intrinsics.checkNotNullParameter(closure, "closure");
        this.f27511i = true;
        closure.invoke();
        this.f27511i = false;
    }

    public final int U() {
        return this.f27516n;
    }

    public final int V() {
        return this.f27517o;
    }

    public final View W() {
        return this.f27507e;
    }

    public final void X(MotionEvent transformedEvent, MotionEvent sourceEvent) {
        int i10;
        Intrinsics.checkNotNullParameter(transformedEvent, "transformedEvent");
        Intrinsics.checkNotNullParameter(sourceEvent, "sourceEvent");
        if (this.f27512j && (i10 = this.f27508f) != 3 && i10 != 1 && i10 != 5 && this.f27504b >= 1) {
            try {
                MotionEvent[] motionEventArr = {m(transformedEvent), m(sourceEvent)};
                MotionEvent motionEvent = motionEventArr[0];
                MotionEvent motionEvent2 = motionEventArr[1];
                this.f27509g = motionEvent.getX();
                this.f27510h = motionEvent.getY();
                this.f27527y = motionEvent.getPointerCount();
                boolean g02 = g0(this.f27507e, this.f27509g, this.f27510h);
                this.f27511i = g02;
                if (this.f27528z && !g02) {
                    int i11 = this.f27508f;
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
                k kVar = k.f27556a;
                this.f27522t = kVar.b(motionEvent, true);
                this.f27523u = kVar.c(motionEvent, true);
                this.f27525w = motionEvent.getRawX() - motionEvent.getX();
                this.f27526x = motionEvent.getRawY() - motionEvent.getY();
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
        int length = this.f27503a.length;
        for (int i10 = 0; i10 < length; i10++) {
            if (this.f27503a[i10] != -1 && other.f27503a[i10] != -1) {
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
    public final boolean c0(in.d r4) {
        /*
            r3 = this;
            java.lang.String r0 = "of"
            kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r4, r0)
            android.view.View r0 = r3.f27507e
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
            android.view.View r2 = r4.f27507e
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
        throw new UnsupportedOperationException("Method not decompiled: in.d.c0(in.d):boolean");
    }

    public final boolean d0() {
        return this.f27512j;
    }

    public final boolean f0() {
        return this.f27511i;
    }

    public final boolean g0(View view, float f10, float f11) {
        float f12;
        float f13;
        f.a aVar = hn.f.f25960a;
        Intrinsics.checkNotNull(view);
        if (aVar.e(view)) {
            return aVar.c(view, f10, f11);
        }
        float width = view.getWidth();
        float height = view.getHeight();
        float[] fArr = this.f27520r;
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
        if (!this.f27524v || z10) {
            int i10 = this.f27508f;
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
        if (this.f27508f == 0) {
            h0(2);
        }
    }

    public final void q() {
        int i10 = this.f27508f;
        if (i10 != 4 && i10 != 0 && i10 != 2 && !this.H) {
            return;
        }
        j0();
        h0(3);
    }

    public final void q0(View view, i iVar) {
        Context context;
        if (this.f27507e == null && this.A == null) {
            Arrays.fill(this.f27503a, -1);
            this.f27504b = 0;
            this.f27508f = 0;
            this.f27507e = view;
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
                view2.getLocationOnScreen(this.f27505c);
            } else {
                int[] iArr = this.f27505c;
                iArr[0] = 0;
                iArr[1] = 0;
            }
            n0();
            return;
        }
        throw new IllegalStateException("Already prepared or hasn't been reset");
    }

    public final void r0() {
        this.f27507e = null;
        this.A = null;
        Arrays.fill(this.f27503a, -1);
        this.f27504b = 0;
        this.f27517o = 0;
        kotlin.collections.i.z(this.f27518p, null, 0, 0, 6, null);
        this.f27516n = 0;
        o0();
    }

    public final WritableArray s() {
        WritableArray writableArray = this.f27515m;
        this.f27515m = null;
        return writableArray;
    }

    public void s0() {
        this.f27519q = false;
        this.f27524v = false;
        this.f27528z = false;
        y0(true);
        this.f27520r = (float[]) K;
        this.E = 0;
    }

    public final WritableArray t() {
        WritableArray writableArray = this.f27514l;
        this.f27514l = null;
        return writableArray;
    }

    public String toString() {
        String simpleName;
        View view = this.f27507e;
        if (view == null) {
            simpleName = null;
        } else {
            Intrinsics.checkNotNull(view);
            simpleName = view.getClass().getSimpleName();
        }
        String simpleName2 = getClass().getSimpleName();
        int i10 = this.f27506d;
        return simpleName2 + "@[" + i10 + "]:" + simpleName;
    }

    public final void u0(int i10) {
        this.f27513k = i10;
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
        if (this.f27514l != null && (rVar = this.B) != null) {
            rVar.c(this);
        }
    }

    public final void z0(float f10, float f11, float f12, float f13, float f14, float f15) {
        if (this.f27520r == null) {
            this.f27520r = new float[6];
        }
        float[] fArr = this.f27520r;
        Intrinsics.checkNotNull(fArr);
        fArr[0] = f10;
        float[] fArr2 = this.f27520r;
        Intrinsics.checkNotNull(fArr2);
        fArr2[1] = f11;
        float[] fArr3 = this.f27520r;
        Intrinsics.checkNotNull(fArr3);
        fArr3[2] = f12;
        float[] fArr4 = this.f27520r;
        Intrinsics.checkNotNull(fArr4);
        fArr4[3] = f13;
        float[] fArr5 = this.f27520r;
        Intrinsics.checkNotNull(fArr5);
        fArr5[4] = f14;
        float[] fArr6 = this.f27520r;
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
