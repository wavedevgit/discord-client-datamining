package ul;

import com.otaliastudios.zoom.AbsolutePoint;
import com.otaliastudios.zoom.ScaledPoint;
import com.otaliastudios.zoom.ZoomLogger;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c {

    /* renamed from: l  reason: collision with root package name */
    public static final b f50363l = new b(null);

    /* renamed from: m  reason: collision with root package name */
    private static final String f50364m;

    /* renamed from: n  reason: collision with root package name */
    private static final ZoomLogger f50365n;

    /* renamed from: a  reason: collision with root package name */
    private final float f50366a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f50367b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f50368c;

    /* renamed from: d  reason: collision with root package name */
    private final AbsolutePoint f50369d;

    /* renamed from: e  reason: collision with root package name */
    private final ScaledPoint f50370e;

    /* renamed from: f  reason: collision with root package name */
    private final boolean f50371f;

    /* renamed from: g  reason: collision with root package name */
    private final boolean f50372g;

    /* renamed from: h  reason: collision with root package name */
    private final Float f50373h;

    /* renamed from: i  reason: collision with root package name */
    private final Float f50374i;

    /* renamed from: j  reason: collision with root package name */
    private final boolean f50375j;

    /* renamed from: k  reason: collision with root package name */
    private final boolean f50376k;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {

        /* renamed from: b  reason: collision with root package name */
        private boolean f50378b;

        /* renamed from: c  reason: collision with root package name */
        private boolean f50379c;

        /* renamed from: d  reason: collision with root package name */
        private AbsolutePoint f50380d;

        /* renamed from: e  reason: collision with root package name */
        private ScaledPoint f50381e;

        /* renamed from: f  reason: collision with root package name */
        private boolean f50382f;

        /* renamed from: g  reason: collision with root package name */
        private boolean f50383g;

        /* renamed from: h  reason: collision with root package name */
        private Float f50384h;

        /* renamed from: i  reason: collision with root package name */
        private Float f50385i;

        /* renamed from: a  reason: collision with root package name */
        private float f50377a = Float.NaN;

        /* renamed from: j  reason: collision with root package name */
        private boolean f50386j = true;

        public final c a() {
            return new c(this.f50377a, this.f50378b, this.f50379c, this.f50380d, this.f50381e, this.f50382f, this.f50383g, this.f50384h, this.f50385i, this.f50386j, null);
        }

        public final void b(AbsolutePoint absolutePoint, boolean z10) {
            this.f50381e = null;
            this.f50380d = absolutePoint;
            this.f50382f = true;
            this.f50383g = z10;
        }

        public final void c(ScaledPoint scaledPoint, boolean z10) {
            this.f50381e = scaledPoint;
            this.f50380d = null;
            this.f50382f = true;
            this.f50383g = z10;
        }

        public final void d(AbsolutePoint absolutePoint, boolean z10) {
            this.f50381e = null;
            this.f50380d = absolutePoint;
            this.f50382f = false;
            this.f50383g = z10;
        }

        public final void e(ScaledPoint scaledPoint, boolean z10) {
            this.f50381e = scaledPoint;
            this.f50380d = null;
            this.f50382f = false;
            this.f50383g = z10;
        }

        public final void f(Float f10, Float f11) {
            this.f50384h = f10;
            this.f50385i = f11;
        }

        public final void g(boolean z10) {
            this.f50386j = z10;
        }

        public final void h(boolean z10) {
            this.f50383g = z10;
        }

        public final void i(float f10, boolean z10) {
            this.f50377a = f10;
            this.f50378b = false;
            this.f50379c = z10;
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
        f50364m = TAG;
        ZoomLogger.a aVar = ZoomLogger.f18306b;
        Intrinsics.checkNotNullExpressionValue(TAG, "TAG");
        f50365n = aVar.a(TAG);
    }

    public /* synthetic */ c(float f10, boolean z10, boolean z11, AbsolutePoint absolutePoint, ScaledPoint scaledPoint, boolean z12, boolean z13, Float f11, Float f12, boolean z14, DefaultConstructorMarker defaultConstructorMarker) {
        this(f10, z10, z11, absolutePoint, scaledPoint, z12, z13, f11, f12, z14);
    }

    public final boolean a() {
        return this.f50372g;
    }

    public final boolean b() {
        return this.f50368c;
    }

    public final boolean c() {
        return this.f50376k;
    }

    public final boolean d() {
        return !Float.isNaN(this.f50366a);
    }

    public final boolean e() {
        return this.f50375j;
    }

    public final AbsolutePoint f() {
        return this.f50369d;
    }

    public final Float g() {
        return this.f50373h;
    }

    public final Float h() {
        return this.f50374i;
    }

    public final ScaledPoint i() {
        return this.f50370e;
    }

    public final float j() {
        return this.f50366a;
    }

    public final boolean k() {
        return this.f50371f;
    }

    public final boolean l() {
        return this.f50367b;
    }

    private c(float f10, boolean z10, boolean z11, AbsolutePoint absolutePoint, ScaledPoint scaledPoint, boolean z12, boolean z13, Float f11, Float f12, boolean z14) {
        this.f50366a = f10;
        this.f50367b = z10;
        this.f50368c = z11;
        this.f50369d = absolutePoint;
        this.f50370e = scaledPoint;
        this.f50371f = z12;
        this.f50372g = z13;
        this.f50373h = f11;
        this.f50374i = f12;
        this.f50375j = z14;
        if (absolutePoint != null && scaledPoint != null) {
            throw new IllegalStateException("Can only use either pan or scaledPan");
        }
        this.f50376k = (absolutePoint == null && scaledPoint == null) ? false : true;
    }
}
