package am;

import com.otaliastudios.zoom.AbsolutePoint;
import com.otaliastudios.zoom.ScaledPoint;
import com.otaliastudios.zoom.ZoomLogger;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c {

    /* renamed from: l  reason: collision with root package name */
    public static final b f1136l = new b(null);

    /* renamed from: m  reason: collision with root package name */
    private static final String f1137m;

    /* renamed from: n  reason: collision with root package name */
    private static final ZoomLogger f1138n;

    /* renamed from: a  reason: collision with root package name */
    private final float f1139a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f1140b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f1141c;

    /* renamed from: d  reason: collision with root package name */
    private final AbsolutePoint f1142d;

    /* renamed from: e  reason: collision with root package name */
    private final ScaledPoint f1143e;

    /* renamed from: f  reason: collision with root package name */
    private final boolean f1144f;

    /* renamed from: g  reason: collision with root package name */
    private final boolean f1145g;

    /* renamed from: h  reason: collision with root package name */
    private final Float f1146h;

    /* renamed from: i  reason: collision with root package name */
    private final Float f1147i;

    /* renamed from: j  reason: collision with root package name */
    private final boolean f1148j;

    /* renamed from: k  reason: collision with root package name */
    private final boolean f1149k;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {

        /* renamed from: b  reason: collision with root package name */
        private boolean f1151b;

        /* renamed from: c  reason: collision with root package name */
        private boolean f1152c;

        /* renamed from: d  reason: collision with root package name */
        private AbsolutePoint f1153d;

        /* renamed from: e  reason: collision with root package name */
        private ScaledPoint f1154e;

        /* renamed from: f  reason: collision with root package name */
        private boolean f1155f;

        /* renamed from: g  reason: collision with root package name */
        private boolean f1156g;

        /* renamed from: h  reason: collision with root package name */
        private Float f1157h;

        /* renamed from: i  reason: collision with root package name */
        private Float f1158i;

        /* renamed from: a  reason: collision with root package name */
        private float f1150a = Float.NaN;

        /* renamed from: j  reason: collision with root package name */
        private boolean f1159j = true;

        public final c a() {
            return new c(this.f1150a, this.f1151b, this.f1152c, this.f1153d, this.f1154e, this.f1155f, this.f1156g, this.f1157h, this.f1158i, this.f1159j, null);
        }

        public final void b(AbsolutePoint absolutePoint, boolean z10) {
            this.f1154e = null;
            this.f1153d = absolutePoint;
            this.f1155f = true;
            this.f1156g = z10;
        }

        public final void c(ScaledPoint scaledPoint, boolean z10) {
            this.f1154e = scaledPoint;
            this.f1153d = null;
            this.f1155f = true;
            this.f1156g = z10;
        }

        public final void d(AbsolutePoint absolutePoint, boolean z10) {
            this.f1154e = null;
            this.f1153d = absolutePoint;
            this.f1155f = false;
            this.f1156g = z10;
        }

        public final void e(ScaledPoint scaledPoint, boolean z10) {
            this.f1154e = scaledPoint;
            this.f1153d = null;
            this.f1155f = false;
            this.f1156g = z10;
        }

        public final void f(Float f10, Float f11) {
            this.f1157h = f10;
            this.f1158i = f11;
        }

        public final void g(boolean z10) {
            this.f1159j = z10;
        }

        public final void h(boolean z10) {
            this.f1156g = z10;
        }

        public final void i(float f10, boolean z10) {
            this.f1150a = f10;
            this.f1151b = false;
            this.f1152c = z10;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b {
        public /* synthetic */ b(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final c a(Function1 builder) {
            Intrinsics.checkNotNullParameter(builder, "builder");
            a aVar = new a();
            builder.invoke(aVar);
            return aVar.a();
        }

        private b() {
        }
    }

    static {
        String TAG = c.class.getSimpleName();
        f1137m = TAG;
        ZoomLogger.a aVar = ZoomLogger.f17293b;
        Intrinsics.checkNotNullExpressionValue(TAG, "TAG");
        f1138n = aVar.a(TAG);
    }

    public /* synthetic */ c(float f10, boolean z10, boolean z11, AbsolutePoint absolutePoint, ScaledPoint scaledPoint, boolean z12, boolean z13, Float f11, Float f12, boolean z14, DefaultConstructorMarker defaultConstructorMarker) {
        this(f10, z10, z11, absolutePoint, scaledPoint, z12, z13, f11, f12, z14);
    }

    public final boolean a() {
        return this.f1145g;
    }

    public final boolean b() {
        return this.f1141c;
    }

    public final boolean c() {
        return this.f1149k;
    }

    public final boolean d() {
        return !Float.isNaN(this.f1139a);
    }

    public final boolean e() {
        return this.f1148j;
    }

    public final AbsolutePoint f() {
        return this.f1142d;
    }

    public final Float g() {
        return this.f1146h;
    }

    public final Float h() {
        return this.f1147i;
    }

    public final ScaledPoint i() {
        return this.f1143e;
    }

    public final float j() {
        return this.f1139a;
    }

    public final boolean k() {
        return this.f1144f;
    }

    public final boolean l() {
        return this.f1140b;
    }

    private c(float f10, boolean z10, boolean z11, AbsolutePoint absolutePoint, ScaledPoint scaledPoint, boolean z12, boolean z13, Float f11, Float f12, boolean z14) {
        this.f1139a = f10;
        this.f1140b = z10;
        this.f1141c = z11;
        this.f1142d = absolutePoint;
        this.f1143e = scaledPoint;
        this.f1144f = z12;
        this.f1145g = z13;
        this.f1146h = f11;
        this.f1147i = f12;
        this.f1148j = z14;
        if (absolutePoint != null && scaledPoint != null) {
            throw new IllegalStateException("Can only use either pan or scaledPan");
        }
        this.f1149k = (absolutePoint == null && scaledPoint == null) ? false : true;
    }
}
