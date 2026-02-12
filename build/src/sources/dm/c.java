package dm;

import com.otaliastudios.zoom.AbsolutePoint;
import com.otaliastudios.zoom.ScaledPoint;
import com.otaliastudios.zoom.ZoomLogger;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c {

    /* renamed from: l  reason: collision with root package name */
    public static final b f21800l = new b(null);

    /* renamed from: m  reason: collision with root package name */
    private static final String f21801m;

    /* renamed from: n  reason: collision with root package name */
    private static final ZoomLogger f21802n;

    /* renamed from: a  reason: collision with root package name */
    private final float f21803a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f21804b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f21805c;

    /* renamed from: d  reason: collision with root package name */
    private final AbsolutePoint f21806d;

    /* renamed from: e  reason: collision with root package name */
    private final ScaledPoint f21807e;

    /* renamed from: f  reason: collision with root package name */
    private final boolean f21808f;

    /* renamed from: g  reason: collision with root package name */
    private final boolean f21809g;

    /* renamed from: h  reason: collision with root package name */
    private final Float f21810h;

    /* renamed from: i  reason: collision with root package name */
    private final Float f21811i;

    /* renamed from: j  reason: collision with root package name */
    private final boolean f21812j;

    /* renamed from: k  reason: collision with root package name */
    private final boolean f21813k;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {

        /* renamed from: b  reason: collision with root package name */
        private boolean f21815b;

        /* renamed from: c  reason: collision with root package name */
        private boolean f21816c;

        /* renamed from: d  reason: collision with root package name */
        private AbsolutePoint f21817d;

        /* renamed from: e  reason: collision with root package name */
        private ScaledPoint f21818e;

        /* renamed from: f  reason: collision with root package name */
        private boolean f21819f;

        /* renamed from: g  reason: collision with root package name */
        private boolean f21820g;

        /* renamed from: h  reason: collision with root package name */
        private Float f21821h;

        /* renamed from: i  reason: collision with root package name */
        private Float f21822i;

        /* renamed from: a  reason: collision with root package name */
        private float f21814a = Float.NaN;

        /* renamed from: j  reason: collision with root package name */
        private boolean f21823j = true;

        public final c a() {
            return new c(this.f21814a, this.f21815b, this.f21816c, this.f21817d, this.f21818e, this.f21819f, this.f21820g, this.f21821h, this.f21822i, this.f21823j, null);
        }

        public final void b(AbsolutePoint absolutePoint, boolean z10) {
            this.f21818e = null;
            this.f21817d = absolutePoint;
            this.f21819f = true;
            this.f21820g = z10;
        }

        public final void c(ScaledPoint scaledPoint, boolean z10) {
            this.f21818e = scaledPoint;
            this.f21817d = null;
            this.f21819f = true;
            this.f21820g = z10;
        }

        public final void d(AbsolutePoint absolutePoint, boolean z10) {
            this.f21818e = null;
            this.f21817d = absolutePoint;
            this.f21819f = false;
            this.f21820g = z10;
        }

        public final void e(ScaledPoint scaledPoint, boolean z10) {
            this.f21818e = scaledPoint;
            this.f21817d = null;
            this.f21819f = false;
            this.f21820g = z10;
        }

        public final void f(Float f10, Float f11) {
            this.f21821h = f10;
            this.f21822i = f11;
        }

        public final void g(boolean z10) {
            this.f21823j = z10;
        }

        public final void h(boolean z10) {
            this.f21820g = z10;
        }

        public final void i(float f10, boolean z10) {
            this.f21814a = f10;
            this.f21815b = false;
            this.f21816c = z10;
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
        f21801m = TAG;
        ZoomLogger.a aVar = ZoomLogger.f18183b;
        Intrinsics.checkNotNullExpressionValue(TAG, "TAG");
        f21802n = aVar.a(TAG);
    }

    public /* synthetic */ c(float f10, boolean z10, boolean z11, AbsolutePoint absolutePoint, ScaledPoint scaledPoint, boolean z12, boolean z13, Float f11, Float f12, boolean z14, DefaultConstructorMarker defaultConstructorMarker) {
        this(f10, z10, z11, absolutePoint, scaledPoint, z12, z13, f11, f12, z14);
    }

    public final boolean a() {
        return this.f21809g;
    }

    public final boolean b() {
        return this.f21805c;
    }

    public final boolean c() {
        return this.f21813k;
    }

    public final boolean d() {
        return !Float.isNaN(this.f21803a);
    }

    public final boolean e() {
        return this.f21812j;
    }

    public final AbsolutePoint f() {
        return this.f21806d;
    }

    public final Float g() {
        return this.f21810h;
    }

    public final Float h() {
        return this.f21811i;
    }

    public final ScaledPoint i() {
        return this.f21807e;
    }

    public final float j() {
        return this.f21803a;
    }

    public final boolean k() {
        return this.f21808f;
    }

    public final boolean l() {
        return this.f21804b;
    }

    private c(float f10, boolean z10, boolean z11, AbsolutePoint absolutePoint, ScaledPoint scaledPoint, boolean z12, boolean z13, Float f11, Float f12, boolean z14) {
        this.f21803a = f10;
        this.f21804b = z10;
        this.f21805c = z11;
        this.f21806d = absolutePoint;
        this.f21807e = scaledPoint;
        this.f21808f = z12;
        this.f21809g = z13;
        this.f21810h = f11;
        this.f21811i = f12;
        this.f21812j = z14;
        if (absolutePoint != null && scaledPoint != null) {
            throw new IllegalStateException("Can only use either pan or scaledPan");
        }
        this.f21813k = (absolutePoint == null && scaledPoint == null) ? false : true;
    }
}
