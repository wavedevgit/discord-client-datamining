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
    public static final b f51660l = new b(null);

    /* renamed from: m  reason: collision with root package name */
    private static final String f51661m;

    /* renamed from: n  reason: collision with root package name */
    private static final ZoomLogger f51662n;

    /* renamed from: a  reason: collision with root package name */
    private final float f51663a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f51664b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f51665c;

    /* renamed from: d  reason: collision with root package name */
    private final AbsolutePoint f51666d;

    /* renamed from: e  reason: collision with root package name */
    private final ScaledPoint f51667e;

    /* renamed from: f  reason: collision with root package name */
    private final boolean f51668f;

    /* renamed from: g  reason: collision with root package name */
    private final boolean f51669g;

    /* renamed from: h  reason: collision with root package name */
    private final Float f51670h;

    /* renamed from: i  reason: collision with root package name */
    private final Float f51671i;

    /* renamed from: j  reason: collision with root package name */
    private final boolean f51672j;

    /* renamed from: k  reason: collision with root package name */
    private final boolean f51673k;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {

        /* renamed from: b  reason: collision with root package name */
        private boolean f51675b;

        /* renamed from: c  reason: collision with root package name */
        private boolean f51676c;

        /* renamed from: d  reason: collision with root package name */
        private AbsolutePoint f51677d;

        /* renamed from: e  reason: collision with root package name */
        private ScaledPoint f51678e;

        /* renamed from: f  reason: collision with root package name */
        private boolean f51679f;

        /* renamed from: g  reason: collision with root package name */
        private boolean f51680g;

        /* renamed from: h  reason: collision with root package name */
        private Float f51681h;

        /* renamed from: i  reason: collision with root package name */
        private Float f51682i;

        /* renamed from: a  reason: collision with root package name */
        private float f51674a = Float.NaN;

        /* renamed from: j  reason: collision with root package name */
        private boolean f51683j = true;

        public final c a() {
            return new c(this.f51674a, this.f51675b, this.f51676c, this.f51677d, this.f51678e, this.f51679f, this.f51680g, this.f51681h, this.f51682i, this.f51683j, null);
        }

        public final void b(AbsolutePoint absolutePoint, boolean z10) {
            this.f51678e = null;
            this.f51677d = absolutePoint;
            this.f51679f = true;
            this.f51680g = z10;
        }

        public final void c(ScaledPoint scaledPoint, boolean z10) {
            this.f51678e = scaledPoint;
            this.f51677d = null;
            this.f51679f = true;
            this.f51680g = z10;
        }

        public final void d(AbsolutePoint absolutePoint, boolean z10) {
            this.f51678e = null;
            this.f51677d = absolutePoint;
            this.f51679f = false;
            this.f51680g = z10;
        }

        public final void e(ScaledPoint scaledPoint, boolean z10) {
            this.f51678e = scaledPoint;
            this.f51677d = null;
            this.f51679f = false;
            this.f51680g = z10;
        }

        public final void f(Float f10, Float f11) {
            this.f51681h = f10;
            this.f51682i = f11;
        }

        public final void g(boolean z10) {
            this.f51683j = z10;
        }

        public final void h(boolean z10) {
            this.f51680g = z10;
        }

        public final void i(float f10, boolean z10) {
            this.f51674a = f10;
            this.f51675b = false;
            this.f51676c = z10;
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
        f51661m = TAG;
        ZoomLogger.a aVar = ZoomLogger.f16907b;
        Intrinsics.checkNotNullExpressionValue(TAG, "TAG");
        f51662n = aVar.a(TAG);
    }

    public /* synthetic */ c(float f10, boolean z10, boolean z11, AbsolutePoint absolutePoint, ScaledPoint scaledPoint, boolean z12, boolean z13, Float f11, Float f12, boolean z14, DefaultConstructorMarker defaultConstructorMarker) {
        this(f10, z10, z11, absolutePoint, scaledPoint, z12, z13, f11, f12, z14);
    }

    public final boolean a() {
        return this.f51669g;
    }

    public final boolean b() {
        return this.f51665c;
    }

    public final boolean c() {
        return this.f51673k;
    }

    public final boolean d() {
        return !Float.isNaN(this.f51663a);
    }

    public final boolean e() {
        return this.f51672j;
    }

    public final AbsolutePoint f() {
        return this.f51666d;
    }

    public final Float g() {
        return this.f51670h;
    }

    public final Float h() {
        return this.f51671i;
    }

    public final ScaledPoint i() {
        return this.f51667e;
    }

    public final float j() {
        return this.f51663a;
    }

    public final boolean k() {
        return this.f51668f;
    }

    public final boolean l() {
        return this.f51664b;
    }

    private c(float f10, boolean z10, boolean z11, AbsolutePoint absolutePoint, ScaledPoint scaledPoint, boolean z12, boolean z13, Float f11, Float f12, boolean z14) {
        this.f51663a = f10;
        this.f51664b = z10;
        this.f51665c = z11;
        this.f51666d = absolutePoint;
        this.f51667e = scaledPoint;
        this.f51668f = z12;
        this.f51669g = z13;
        this.f51670h = f11;
        this.f51671i = f12;
        this.f51672j = z14;
        if (absolutePoint != null && scaledPoint != null) {
            throw new IllegalStateException("Can only use either pan or scaledPan");
        }
        this.f51673k = (absolutePoint == null && scaledPoint == null) ? false : true;
    }
}
