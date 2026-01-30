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
    public static final b f50379l = new b(null);

    /* renamed from: m  reason: collision with root package name */
    private static final String f50380m;

    /* renamed from: n  reason: collision with root package name */
    private static final ZoomLogger f50381n;

    /* renamed from: a  reason: collision with root package name */
    private final float f50382a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f50383b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f50384c;

    /* renamed from: d  reason: collision with root package name */
    private final AbsolutePoint f50385d;

    /* renamed from: e  reason: collision with root package name */
    private final ScaledPoint f50386e;

    /* renamed from: f  reason: collision with root package name */
    private final boolean f50387f;

    /* renamed from: g  reason: collision with root package name */
    private final boolean f50388g;

    /* renamed from: h  reason: collision with root package name */
    private final Float f50389h;

    /* renamed from: i  reason: collision with root package name */
    private final Float f50390i;

    /* renamed from: j  reason: collision with root package name */
    private final boolean f50391j;

    /* renamed from: k  reason: collision with root package name */
    private final boolean f50392k;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {

        /* renamed from: b  reason: collision with root package name */
        private boolean f50394b;

        /* renamed from: c  reason: collision with root package name */
        private boolean f50395c;

        /* renamed from: d  reason: collision with root package name */
        private AbsolutePoint f50396d;

        /* renamed from: e  reason: collision with root package name */
        private ScaledPoint f50397e;

        /* renamed from: f  reason: collision with root package name */
        private boolean f50398f;

        /* renamed from: g  reason: collision with root package name */
        private boolean f50399g;

        /* renamed from: h  reason: collision with root package name */
        private Float f50400h;

        /* renamed from: i  reason: collision with root package name */
        private Float f50401i;

        /* renamed from: a  reason: collision with root package name */
        private float f50393a = Float.NaN;

        /* renamed from: j  reason: collision with root package name */
        private boolean f50402j = true;

        public final c a() {
            return new c(this.f50393a, this.f50394b, this.f50395c, this.f50396d, this.f50397e, this.f50398f, this.f50399g, this.f50400h, this.f50401i, this.f50402j, null);
        }

        public final void b(AbsolutePoint absolutePoint, boolean z10) {
            this.f50397e = null;
            this.f50396d = absolutePoint;
            this.f50398f = true;
            this.f50399g = z10;
        }

        public final void c(ScaledPoint scaledPoint, boolean z10) {
            this.f50397e = scaledPoint;
            this.f50396d = null;
            this.f50398f = true;
            this.f50399g = z10;
        }

        public final void d(AbsolutePoint absolutePoint, boolean z10) {
            this.f50397e = null;
            this.f50396d = absolutePoint;
            this.f50398f = false;
            this.f50399g = z10;
        }

        public final void e(ScaledPoint scaledPoint, boolean z10) {
            this.f50397e = scaledPoint;
            this.f50396d = null;
            this.f50398f = false;
            this.f50399g = z10;
        }

        public final void f(Float f10, Float f11) {
            this.f50400h = f10;
            this.f50401i = f11;
        }

        public final void g(boolean z10) {
            this.f50402j = z10;
        }

        public final void h(boolean z10) {
            this.f50399g = z10;
        }

        public final void i(float f10, boolean z10) {
            this.f50393a = f10;
            this.f50394b = false;
            this.f50395c = z10;
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
        f50380m = TAG;
        ZoomLogger.a aVar = ZoomLogger.f18306b;
        Intrinsics.checkNotNullExpressionValue(TAG, "TAG");
        f50381n = aVar.a(TAG);
    }

    public /* synthetic */ c(float f10, boolean z10, boolean z11, AbsolutePoint absolutePoint, ScaledPoint scaledPoint, boolean z12, boolean z13, Float f11, Float f12, boolean z14, DefaultConstructorMarker defaultConstructorMarker) {
        this(f10, z10, z11, absolutePoint, scaledPoint, z12, z13, f11, f12, z14);
    }

    public final boolean a() {
        return this.f50388g;
    }

    public final boolean b() {
        return this.f50384c;
    }

    public final boolean c() {
        return this.f50392k;
    }

    public final boolean d() {
        return !Float.isNaN(this.f50382a);
    }

    public final boolean e() {
        return this.f50391j;
    }

    public final AbsolutePoint f() {
        return this.f50385d;
    }

    public final Float g() {
        return this.f50389h;
    }

    public final Float h() {
        return this.f50390i;
    }

    public final ScaledPoint i() {
        return this.f50386e;
    }

    public final float j() {
        return this.f50382a;
    }

    public final boolean k() {
        return this.f50387f;
    }

    public final boolean l() {
        return this.f50383b;
    }

    private c(float f10, boolean z10, boolean z11, AbsolutePoint absolutePoint, ScaledPoint scaledPoint, boolean z12, boolean z13, Float f11, Float f12, boolean z14) {
        this.f50382a = f10;
        this.f50383b = z10;
        this.f50384c = z11;
        this.f50385d = absolutePoint;
        this.f50386e = scaledPoint;
        this.f50387f = z12;
        this.f50388g = z13;
        this.f50389h = f11;
        this.f50390i = f12;
        this.f50391j = z14;
        if (absolutePoint != null && scaledPoint != null) {
            throw new IllegalStateException("Can only use either pan or scaledPan");
        }
        this.f50392k = (absolutePoint == null && scaledPoint == null) ? false : true;
    }
}
