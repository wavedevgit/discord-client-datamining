package yl;

import com.otaliastudios.zoom.AbsolutePoint;
import com.otaliastudios.zoom.ScaledPoint;
import com.otaliastudios.zoom.ZoomLogger;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c {

    /* renamed from: l  reason: collision with root package name */
    public static final b f54825l = new b(null);

    /* renamed from: m  reason: collision with root package name */
    private static final String f54826m;

    /* renamed from: n  reason: collision with root package name */
    private static final ZoomLogger f54827n;

    /* renamed from: a  reason: collision with root package name */
    private final float f54828a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f54829b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f54830c;

    /* renamed from: d  reason: collision with root package name */
    private final AbsolutePoint f54831d;

    /* renamed from: e  reason: collision with root package name */
    private final ScaledPoint f54832e;

    /* renamed from: f  reason: collision with root package name */
    private final boolean f54833f;

    /* renamed from: g  reason: collision with root package name */
    private final boolean f54834g;

    /* renamed from: h  reason: collision with root package name */
    private final Float f54835h;

    /* renamed from: i  reason: collision with root package name */
    private final Float f54836i;

    /* renamed from: j  reason: collision with root package name */
    private final boolean f54837j;

    /* renamed from: k  reason: collision with root package name */
    private final boolean f54838k;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {

        /* renamed from: b  reason: collision with root package name */
        private boolean f54840b;

        /* renamed from: c  reason: collision with root package name */
        private boolean f54841c;

        /* renamed from: d  reason: collision with root package name */
        private AbsolutePoint f54842d;

        /* renamed from: e  reason: collision with root package name */
        private ScaledPoint f54843e;

        /* renamed from: f  reason: collision with root package name */
        private boolean f54844f;

        /* renamed from: g  reason: collision with root package name */
        private boolean f54845g;

        /* renamed from: h  reason: collision with root package name */
        private Float f54846h;

        /* renamed from: i  reason: collision with root package name */
        private Float f54847i;

        /* renamed from: a  reason: collision with root package name */
        private float f54839a = Float.NaN;

        /* renamed from: j  reason: collision with root package name */
        private boolean f54848j = true;

        public final c a() {
            return new c(this.f54839a, this.f54840b, this.f54841c, this.f54842d, this.f54843e, this.f54844f, this.f54845g, this.f54846h, this.f54847i, this.f54848j, null);
        }

        public final void b(AbsolutePoint absolutePoint, boolean z10) {
            this.f54843e = null;
            this.f54842d = absolutePoint;
            this.f54844f = true;
            this.f54845g = z10;
        }

        public final void c(ScaledPoint scaledPoint, boolean z10) {
            this.f54843e = scaledPoint;
            this.f54842d = null;
            this.f54844f = true;
            this.f54845g = z10;
        }

        public final void d(AbsolutePoint absolutePoint, boolean z10) {
            this.f54843e = null;
            this.f54842d = absolutePoint;
            this.f54844f = false;
            this.f54845g = z10;
        }

        public final void e(ScaledPoint scaledPoint, boolean z10) {
            this.f54843e = scaledPoint;
            this.f54842d = null;
            this.f54844f = false;
            this.f54845g = z10;
        }

        public final void f(Float f10, Float f11) {
            this.f54846h = f10;
            this.f54847i = f11;
        }

        public final void g(boolean z10) {
            this.f54848j = z10;
        }

        public final void h(boolean z10) {
            this.f54845g = z10;
        }

        public final void i(float f10, boolean z10) {
            this.f54839a = f10;
            this.f54840b = false;
            this.f54841c = z10;
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
        f54826m = TAG;
        ZoomLogger.a aVar = ZoomLogger.f17313b;
        Intrinsics.checkNotNullExpressionValue(TAG, "TAG");
        f54827n = aVar.a(TAG);
    }

    public /* synthetic */ c(float f10, boolean z10, boolean z11, AbsolutePoint absolutePoint, ScaledPoint scaledPoint, boolean z12, boolean z13, Float f11, Float f12, boolean z14, DefaultConstructorMarker defaultConstructorMarker) {
        this(f10, z10, z11, absolutePoint, scaledPoint, z12, z13, f11, f12, z14);
    }

    public final boolean a() {
        return this.f54834g;
    }

    public final boolean b() {
        return this.f54830c;
    }

    public final boolean c() {
        return this.f54838k;
    }

    public final boolean d() {
        return !Float.isNaN(this.f54828a);
    }

    public final boolean e() {
        return this.f54837j;
    }

    public final AbsolutePoint f() {
        return this.f54831d;
    }

    public final Float g() {
        return this.f54835h;
    }

    public final Float h() {
        return this.f54836i;
    }

    public final ScaledPoint i() {
        return this.f54832e;
    }

    public final float j() {
        return this.f54828a;
    }

    public final boolean k() {
        return this.f54833f;
    }

    public final boolean l() {
        return this.f54829b;
    }

    private c(float f10, boolean z10, boolean z11, AbsolutePoint absolutePoint, ScaledPoint scaledPoint, boolean z12, boolean z13, Float f11, Float f12, boolean z14) {
        this.f54828a = f10;
        this.f54829b = z10;
        this.f54830c = z11;
        this.f54831d = absolutePoint;
        this.f54832e = scaledPoint;
        this.f54833f = z12;
        this.f54834g = z13;
        this.f54835h = f11;
        this.f54836i = f12;
        this.f54837j = z14;
        if (absolutePoint != null && scaledPoint != null) {
            throw new IllegalStateException("Can only use either pan or scaledPan");
        }
        this.f54838k = (absolutePoint == null && scaledPoint == null) ? false : true;
    }
}
