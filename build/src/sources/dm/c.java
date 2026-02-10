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
    public static final b f21799l = new b(null);

    /* renamed from: m  reason: collision with root package name */
    private static final String f21800m;

    /* renamed from: n  reason: collision with root package name */
    private static final ZoomLogger f21801n;

    /* renamed from: a  reason: collision with root package name */
    private final float f21802a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f21803b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f21804c;

    /* renamed from: d  reason: collision with root package name */
    private final AbsolutePoint f21805d;

    /* renamed from: e  reason: collision with root package name */
    private final ScaledPoint f21806e;

    /* renamed from: f  reason: collision with root package name */
    private final boolean f21807f;

    /* renamed from: g  reason: collision with root package name */
    private final boolean f21808g;

    /* renamed from: h  reason: collision with root package name */
    private final Float f21809h;

    /* renamed from: i  reason: collision with root package name */
    private final Float f21810i;

    /* renamed from: j  reason: collision with root package name */
    private final boolean f21811j;

    /* renamed from: k  reason: collision with root package name */
    private final boolean f21812k;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {

        /* renamed from: b  reason: collision with root package name */
        private boolean f21814b;

        /* renamed from: c  reason: collision with root package name */
        private boolean f21815c;

        /* renamed from: d  reason: collision with root package name */
        private AbsolutePoint f21816d;

        /* renamed from: e  reason: collision with root package name */
        private ScaledPoint f21817e;

        /* renamed from: f  reason: collision with root package name */
        private boolean f21818f;

        /* renamed from: g  reason: collision with root package name */
        private boolean f21819g;

        /* renamed from: h  reason: collision with root package name */
        private Float f21820h;

        /* renamed from: i  reason: collision with root package name */
        private Float f21821i;

        /* renamed from: a  reason: collision with root package name */
        private float f21813a = Float.NaN;

        /* renamed from: j  reason: collision with root package name */
        private boolean f21822j = true;

        public final c a() {
            return new c(this.f21813a, this.f21814b, this.f21815c, this.f21816d, this.f21817e, this.f21818f, this.f21819g, this.f21820h, this.f21821i, this.f21822j, null);
        }

        public final void b(AbsolutePoint absolutePoint, boolean z10) {
            this.f21817e = null;
            this.f21816d = absolutePoint;
            this.f21818f = true;
            this.f21819g = z10;
        }

        public final void c(ScaledPoint scaledPoint, boolean z10) {
            this.f21817e = scaledPoint;
            this.f21816d = null;
            this.f21818f = true;
            this.f21819g = z10;
        }

        public final void d(AbsolutePoint absolutePoint, boolean z10) {
            this.f21817e = null;
            this.f21816d = absolutePoint;
            this.f21818f = false;
            this.f21819g = z10;
        }

        public final void e(ScaledPoint scaledPoint, boolean z10) {
            this.f21817e = scaledPoint;
            this.f21816d = null;
            this.f21818f = false;
            this.f21819g = z10;
        }

        public final void f(Float f10, Float f11) {
            this.f21820h = f10;
            this.f21821i = f11;
        }

        public final void g(boolean z10) {
            this.f21822j = z10;
        }

        public final void h(boolean z10) {
            this.f21819g = z10;
        }

        public final void i(float f10, boolean z10) {
            this.f21813a = f10;
            this.f21814b = false;
            this.f21815c = z10;
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
        f21800m = TAG;
        ZoomLogger.a aVar = ZoomLogger.f18182b;
        Intrinsics.checkNotNullExpressionValue(TAG, "TAG");
        f21801n = aVar.a(TAG);
    }

    public /* synthetic */ c(float f10, boolean z10, boolean z11, AbsolutePoint absolutePoint, ScaledPoint scaledPoint, boolean z12, boolean z13, Float f11, Float f12, boolean z14, DefaultConstructorMarker defaultConstructorMarker) {
        this(f10, z10, z11, absolutePoint, scaledPoint, z12, z13, f11, f12, z14);
    }

    public final boolean a() {
        return this.f21808g;
    }

    public final boolean b() {
        return this.f21804c;
    }

    public final boolean c() {
        return this.f21812k;
    }

    public final boolean d() {
        return !Float.isNaN(this.f21802a);
    }

    public final boolean e() {
        return this.f21811j;
    }

    public final AbsolutePoint f() {
        return this.f21805d;
    }

    public final Float g() {
        return this.f21809h;
    }

    public final Float h() {
        return this.f21810i;
    }

    public final ScaledPoint i() {
        return this.f21806e;
    }

    public final float j() {
        return this.f21802a;
    }

    public final boolean k() {
        return this.f21807f;
    }

    public final boolean l() {
        return this.f21803b;
    }

    private c(float f10, boolean z10, boolean z11, AbsolutePoint absolutePoint, ScaledPoint scaledPoint, boolean z12, boolean z13, Float f11, Float f12, boolean z14) {
        this.f21802a = f10;
        this.f21803b = z10;
        this.f21804c = z11;
        this.f21805d = absolutePoint;
        this.f21806e = scaledPoint;
        this.f21807f = z12;
        this.f21808g = z13;
        this.f21809h = f11;
        this.f21810i = f12;
        this.f21811j = z14;
        if (absolutePoint != null && scaledPoint != null) {
            throw new IllegalStateException("Can only use either pan or scaledPan");
        }
        this.f21812k = (absolutePoint == null && scaledPoint == null) ? false : true;
    }
}
