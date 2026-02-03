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
    public static final b f51335l = new b(null);

    /* renamed from: m  reason: collision with root package name */
    private static final String f51336m;

    /* renamed from: n  reason: collision with root package name */
    private static final ZoomLogger f51337n;

    /* renamed from: a  reason: collision with root package name */
    private final float f51338a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f51339b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f51340c;

    /* renamed from: d  reason: collision with root package name */
    private final AbsolutePoint f51341d;

    /* renamed from: e  reason: collision with root package name */
    private final ScaledPoint f51342e;

    /* renamed from: f  reason: collision with root package name */
    private final boolean f51343f;

    /* renamed from: g  reason: collision with root package name */
    private final boolean f51344g;

    /* renamed from: h  reason: collision with root package name */
    private final Float f51345h;

    /* renamed from: i  reason: collision with root package name */
    private final Float f51346i;

    /* renamed from: j  reason: collision with root package name */
    private final boolean f51347j;

    /* renamed from: k  reason: collision with root package name */
    private final boolean f51348k;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {

        /* renamed from: b  reason: collision with root package name */
        private boolean f51350b;

        /* renamed from: c  reason: collision with root package name */
        private boolean f51351c;

        /* renamed from: d  reason: collision with root package name */
        private AbsolutePoint f51352d;

        /* renamed from: e  reason: collision with root package name */
        private ScaledPoint f51353e;

        /* renamed from: f  reason: collision with root package name */
        private boolean f51354f;

        /* renamed from: g  reason: collision with root package name */
        private boolean f51355g;

        /* renamed from: h  reason: collision with root package name */
        private Float f51356h;

        /* renamed from: i  reason: collision with root package name */
        private Float f51357i;

        /* renamed from: a  reason: collision with root package name */
        private float f51349a = Float.NaN;

        /* renamed from: j  reason: collision with root package name */
        private boolean f51358j = true;

        public final c a() {
            return new c(this.f51349a, this.f51350b, this.f51351c, this.f51352d, this.f51353e, this.f51354f, this.f51355g, this.f51356h, this.f51357i, this.f51358j, null);
        }

        public final void b(AbsolutePoint absolutePoint, boolean z10) {
            this.f51353e = null;
            this.f51352d = absolutePoint;
            this.f51354f = true;
            this.f51355g = z10;
        }

        public final void c(ScaledPoint scaledPoint, boolean z10) {
            this.f51353e = scaledPoint;
            this.f51352d = null;
            this.f51354f = true;
            this.f51355g = z10;
        }

        public final void d(AbsolutePoint absolutePoint, boolean z10) {
            this.f51353e = null;
            this.f51352d = absolutePoint;
            this.f51354f = false;
            this.f51355g = z10;
        }

        public final void e(ScaledPoint scaledPoint, boolean z10) {
            this.f51353e = scaledPoint;
            this.f51352d = null;
            this.f51354f = false;
            this.f51355g = z10;
        }

        public final void f(Float f10, Float f11) {
            this.f51356h = f10;
            this.f51357i = f11;
        }

        public final void g(boolean z10) {
            this.f51358j = z10;
        }

        public final void h(boolean z10) {
            this.f51355g = z10;
        }

        public final void i(float f10, boolean z10) {
            this.f51349a = f10;
            this.f51350b = false;
            this.f51351c = z10;
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
        f51336m = TAG;
        ZoomLogger.a aVar = ZoomLogger.f17939b;
        Intrinsics.checkNotNullExpressionValue(TAG, "TAG");
        f51337n = aVar.a(TAG);
    }

    public /* synthetic */ c(float f10, boolean z10, boolean z11, AbsolutePoint absolutePoint, ScaledPoint scaledPoint, boolean z12, boolean z13, Float f11, Float f12, boolean z14, DefaultConstructorMarker defaultConstructorMarker) {
        this(f10, z10, z11, absolutePoint, scaledPoint, z12, z13, f11, f12, z14);
    }

    public final boolean a() {
        return this.f51344g;
    }

    public final boolean b() {
        return this.f51340c;
    }

    public final boolean c() {
        return this.f51348k;
    }

    public final boolean d() {
        return !Float.isNaN(this.f51338a);
    }

    public final boolean e() {
        return this.f51347j;
    }

    public final AbsolutePoint f() {
        return this.f51341d;
    }

    public final Float g() {
        return this.f51345h;
    }

    public final Float h() {
        return this.f51346i;
    }

    public final ScaledPoint i() {
        return this.f51342e;
    }

    public final float j() {
        return this.f51338a;
    }

    public final boolean k() {
        return this.f51343f;
    }

    public final boolean l() {
        return this.f51339b;
    }

    private c(float f10, boolean z10, boolean z11, AbsolutePoint absolutePoint, ScaledPoint scaledPoint, boolean z12, boolean z13, Float f11, Float f12, boolean z14) {
        this.f51338a = f10;
        this.f51339b = z10;
        this.f51340c = z11;
        this.f51341d = absolutePoint;
        this.f51342e = scaledPoint;
        this.f51343f = z12;
        this.f51344g = z13;
        this.f51345h = f11;
        this.f51346i = f12;
        this.f51347j = z14;
        if (absolutePoint != null && scaledPoint != null) {
            throw new IllegalStateException("Can only use either pan or scaledPan");
        }
        this.f51348k = (absolutePoint == null && scaledPoint == null) ? false : true;
    }
}
