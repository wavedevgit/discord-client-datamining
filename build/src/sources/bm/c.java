package bm;

import com.otaliastudios.zoom.AbsolutePoint;
import com.otaliastudios.zoom.ScaledPoint;
import com.otaliastudios.zoom.ZoomLogger;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c {

    /* renamed from: l  reason: collision with root package name */
    public static final b f7124l = new b(null);

    /* renamed from: m  reason: collision with root package name */
    private static final String f7125m;

    /* renamed from: n  reason: collision with root package name */
    private static final ZoomLogger f7126n;

    /* renamed from: a  reason: collision with root package name */
    private final float f7127a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f7128b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f7129c;

    /* renamed from: d  reason: collision with root package name */
    private final AbsolutePoint f7130d;

    /* renamed from: e  reason: collision with root package name */
    private final ScaledPoint f7131e;

    /* renamed from: f  reason: collision with root package name */
    private final boolean f7132f;

    /* renamed from: g  reason: collision with root package name */
    private final boolean f7133g;

    /* renamed from: h  reason: collision with root package name */
    private final Float f7134h;

    /* renamed from: i  reason: collision with root package name */
    private final Float f7135i;

    /* renamed from: j  reason: collision with root package name */
    private final boolean f7136j;

    /* renamed from: k  reason: collision with root package name */
    private final boolean f7137k;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {

        /* renamed from: b  reason: collision with root package name */
        private boolean f7139b;

        /* renamed from: c  reason: collision with root package name */
        private boolean f7140c;

        /* renamed from: d  reason: collision with root package name */
        private AbsolutePoint f7141d;

        /* renamed from: e  reason: collision with root package name */
        private ScaledPoint f7142e;

        /* renamed from: f  reason: collision with root package name */
        private boolean f7143f;

        /* renamed from: g  reason: collision with root package name */
        private boolean f7144g;

        /* renamed from: h  reason: collision with root package name */
        private Float f7145h;

        /* renamed from: i  reason: collision with root package name */
        private Float f7146i;

        /* renamed from: a  reason: collision with root package name */
        private float f7138a = Float.NaN;

        /* renamed from: j  reason: collision with root package name */
        private boolean f7147j = true;

        public final c a() {
            return new c(this.f7138a, this.f7139b, this.f7140c, this.f7141d, this.f7142e, this.f7143f, this.f7144g, this.f7145h, this.f7146i, this.f7147j, null);
        }

        public final void b(AbsolutePoint absolutePoint, boolean z10) {
            this.f7142e = null;
            this.f7141d = absolutePoint;
            this.f7143f = true;
            this.f7144g = z10;
        }

        public final void c(ScaledPoint scaledPoint, boolean z10) {
            this.f7142e = scaledPoint;
            this.f7141d = null;
            this.f7143f = true;
            this.f7144g = z10;
        }

        public final void d(AbsolutePoint absolutePoint, boolean z10) {
            this.f7142e = null;
            this.f7141d = absolutePoint;
            this.f7143f = false;
            this.f7144g = z10;
        }

        public final void e(ScaledPoint scaledPoint, boolean z10) {
            this.f7142e = scaledPoint;
            this.f7141d = null;
            this.f7143f = false;
            this.f7144g = z10;
        }

        public final void f(Float f10, Float f11) {
            this.f7145h = f10;
            this.f7146i = f11;
        }

        public final void g(boolean z10) {
            this.f7147j = z10;
        }

        public final void h(boolean z10) {
            this.f7144g = z10;
        }

        public final void i(float f10, boolean z10) {
            this.f7138a = f10;
            this.f7139b = false;
            this.f7140c = z10;
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
        f7125m = TAG;
        ZoomLogger.a aVar = ZoomLogger.f17433b;
        Intrinsics.checkNotNullExpressionValue(TAG, "TAG");
        f7126n = aVar.a(TAG);
    }

    public /* synthetic */ c(float f10, boolean z10, boolean z11, AbsolutePoint absolutePoint, ScaledPoint scaledPoint, boolean z12, boolean z13, Float f11, Float f12, boolean z14, DefaultConstructorMarker defaultConstructorMarker) {
        this(f10, z10, z11, absolutePoint, scaledPoint, z12, z13, f11, f12, z14);
    }

    public final boolean a() {
        return this.f7133g;
    }

    public final boolean b() {
        return this.f7129c;
    }

    public final boolean c() {
        return this.f7137k;
    }

    public final boolean d() {
        return !Float.isNaN(this.f7127a);
    }

    public final boolean e() {
        return this.f7136j;
    }

    public final AbsolutePoint f() {
        return this.f7130d;
    }

    public final Float g() {
        return this.f7134h;
    }

    public final Float h() {
        return this.f7135i;
    }

    public final ScaledPoint i() {
        return this.f7131e;
    }

    public final float j() {
        return this.f7127a;
    }

    public final boolean k() {
        return this.f7132f;
    }

    public final boolean l() {
        return this.f7128b;
    }

    private c(float f10, boolean z10, boolean z11, AbsolutePoint absolutePoint, ScaledPoint scaledPoint, boolean z12, boolean z13, Float f11, Float f12, boolean z14) {
        this.f7127a = f10;
        this.f7128b = z10;
        this.f7129c = z11;
        this.f7130d = absolutePoint;
        this.f7131e = scaledPoint;
        this.f7132f = z12;
        this.f7133g = z13;
        this.f7134h = f11;
        this.f7135i = f12;
        this.f7136j = z14;
        if (absolutePoint != null && scaledPoint != null) {
            throw new IllegalStateException("Can only use either pan or scaledPan");
        }
        this.f7137k = (absolutePoint == null && scaledPoint == null) ? false : true;
    }
}
