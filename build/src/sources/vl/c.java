package vl;

import com.otaliastudios.zoom.AbsolutePoint;
import com.otaliastudios.zoom.ScaledPoint;
import com.otaliastudios.zoom.ZoomLogger;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c {

    /* renamed from: l  reason: collision with root package name */
    public static final b f51663l = new b(null);

    /* renamed from: m  reason: collision with root package name */
    private static final String f51664m;

    /* renamed from: n  reason: collision with root package name */
    private static final ZoomLogger f51665n;

    /* renamed from: a  reason: collision with root package name */
    private final float f51666a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f51667b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f51668c;

    /* renamed from: d  reason: collision with root package name */
    private final AbsolutePoint f51669d;

    /* renamed from: e  reason: collision with root package name */
    private final ScaledPoint f51670e;

    /* renamed from: f  reason: collision with root package name */
    private final boolean f51671f;

    /* renamed from: g  reason: collision with root package name */
    private final boolean f51672g;

    /* renamed from: h  reason: collision with root package name */
    private final Float f51673h;

    /* renamed from: i  reason: collision with root package name */
    private final Float f51674i;

    /* renamed from: j  reason: collision with root package name */
    private final boolean f51675j;

    /* renamed from: k  reason: collision with root package name */
    private final boolean f51676k;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {

        /* renamed from: b  reason: collision with root package name */
        private boolean f51678b;

        /* renamed from: c  reason: collision with root package name */
        private boolean f51679c;

        /* renamed from: d  reason: collision with root package name */
        private AbsolutePoint f51680d;

        /* renamed from: e  reason: collision with root package name */
        private ScaledPoint f51681e;

        /* renamed from: f  reason: collision with root package name */
        private boolean f51682f;

        /* renamed from: g  reason: collision with root package name */
        private boolean f51683g;

        /* renamed from: h  reason: collision with root package name */
        private Float f51684h;

        /* renamed from: i  reason: collision with root package name */
        private Float f51685i;

        /* renamed from: a  reason: collision with root package name */
        private float f51677a = Float.NaN;

        /* renamed from: j  reason: collision with root package name */
        private boolean f51686j = true;

        public final c a() {
            return new c(this.f51677a, this.f51678b, this.f51679c, this.f51680d, this.f51681e, this.f51682f, this.f51683g, this.f51684h, this.f51685i, this.f51686j, null);
        }

        public final void b(AbsolutePoint absolutePoint, boolean z10) {
            this.f51681e = null;
            this.f51680d = absolutePoint;
            this.f51682f = true;
            this.f51683g = z10;
        }

        public final void c(ScaledPoint scaledPoint, boolean z10) {
            this.f51681e = scaledPoint;
            this.f51680d = null;
            this.f51682f = true;
            this.f51683g = z10;
        }

        public final void d(AbsolutePoint absolutePoint, boolean z10) {
            this.f51681e = null;
            this.f51680d = absolutePoint;
            this.f51682f = false;
            this.f51683g = z10;
        }

        public final void e(ScaledPoint scaledPoint, boolean z10) {
            this.f51681e = scaledPoint;
            this.f51680d = null;
            this.f51682f = false;
            this.f51683g = z10;
        }

        public final void f(Float f10, Float f11) {
            this.f51684h = f10;
            this.f51685i = f11;
        }

        public final void g(boolean z10) {
            this.f51686j = z10;
        }

        public final void h(boolean z10) {
            this.f51683g = z10;
        }

        public final void i(float f10, boolean z10) {
            this.f51677a = f10;
            this.f51678b = false;
            this.f51679c = z10;
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
        f51664m = TAG;
        ZoomLogger.a aVar = ZoomLogger.f16907b;
        Intrinsics.checkNotNullExpressionValue(TAG, "TAG");
        f51665n = aVar.a(TAG);
    }

    public /* synthetic */ c(float f10, boolean z10, boolean z11, AbsolutePoint absolutePoint, ScaledPoint scaledPoint, boolean z12, boolean z13, Float f11, Float f12, boolean z14, DefaultConstructorMarker defaultConstructorMarker) {
        this(f10, z10, z11, absolutePoint, scaledPoint, z12, z13, f11, f12, z14);
    }

    public final boolean a() {
        return this.f51672g;
    }

    public final boolean b() {
        return this.f51668c;
    }

    public final boolean c() {
        return this.f51676k;
    }

    public final boolean d() {
        return !Float.isNaN(this.f51666a);
    }

    public final boolean e() {
        return this.f51675j;
    }

    public final AbsolutePoint f() {
        return this.f51669d;
    }

    public final Float g() {
        return this.f51673h;
    }

    public final Float h() {
        return this.f51674i;
    }

    public final ScaledPoint i() {
        return this.f51670e;
    }

    public final float j() {
        return this.f51666a;
    }

    public final boolean k() {
        return this.f51671f;
    }

    public final boolean l() {
        return this.f51667b;
    }

    private c(float f10, boolean z10, boolean z11, AbsolutePoint absolutePoint, ScaledPoint scaledPoint, boolean z12, boolean z13, Float f11, Float f12, boolean z14) {
        this.f51666a = f10;
        this.f51667b = z10;
        this.f51668c = z11;
        this.f51669d = absolutePoint;
        this.f51670e = scaledPoint;
        this.f51671f = z12;
        this.f51672g = z13;
        this.f51673h = f11;
        this.f51674i = f12;
        this.f51675j = z14;
        if (absolutePoint != null && scaledPoint != null) {
            throw new IllegalStateException("Can only use either pan or scaledPan");
        }
        this.f51676k = (absolutePoint == null && scaledPoint == null) ? false : true;
    }
}
