package em;

import com.otaliastudios.zoom.OverZoomRangeProvider;
import com.otaliastudios.zoom.ZoomEngine;
import com.otaliastudios.zoom.ZoomLogger;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.ranges.d;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c extends em.a {

    /* renamed from: k  reason: collision with root package name */
    public static final a f22938k = new a(null);

    /* renamed from: l  reason: collision with root package name */
    private static final String f22939l;

    /* renamed from: m  reason: collision with root package name */
    private static final ZoomLogger f22940m;

    /* renamed from: b  reason: collision with root package name */
    private final ZoomEngine f22941b;

    /* renamed from: c  reason: collision with root package name */
    private float f22942c;

    /* renamed from: d  reason: collision with root package name */
    private float f22943d;

    /* renamed from: e  reason: collision with root package name */
    private int f22944e;

    /* renamed from: f  reason: collision with root package name */
    private float f22945f;

    /* renamed from: g  reason: collision with root package name */
    private int f22946g;

    /* renamed from: h  reason: collision with root package name */
    private OverZoomRangeProvider f22947h;

    /* renamed from: i  reason: collision with root package name */
    private boolean f22948i;

    /* renamed from: j  reason: collision with root package name */
    private boolean f22949j;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    static {
        String TAG = c.class.getSimpleName();
        f22939l = TAG;
        ZoomLogger.a aVar = ZoomLogger.f18182b;
        Intrinsics.checkNotNullExpressionValue(TAG, "TAG");
        f22940m = aVar.a(TAG);
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public c(ZoomEngine engine, Function0 provider) {
        super(provider);
        Intrinsics.checkNotNullParameter(engine, "engine");
        Intrinsics.checkNotNullParameter(provider, "provider");
        this.f22941b = engine;
        this.f22943d = 0.8f;
        this.f22945f = 2.5f;
        this.f22947h = OverZoomRangeProvider.f18149b;
        this.f22948i = true;
        this.f22949j = true;
    }

    public final float b(float f10, boolean z10) {
        float i10 = i();
        float f11 = f();
        if (z10 && m()) {
            i10 -= d();
            f11 += c();
        }
        if (f11 < i10) {
            int i11 = this.f22946g;
            if (i11 != this.f22944e) {
                if (i11 == 0) {
                    i10 = f11;
                } else {
                    f11 = i10;
                }
            } else {
                throw new IllegalStateException("maxZoom is less than minZoom: " + f11 + " < " + i10);
            }
        }
        return d.l(f10, i10, f11);
    }

    public final float c() {
        float a10 = this.f22947h.a(this.f22941b, true);
        if (a10 < 0.0f) {
            f22940m.g("Received negative maxOverZoomIn value, coercing to 0");
            return d.c(a10, 0.0f);
        }
        return a10;
    }

    public final float d() {
        float a10 = this.f22947h.a(this.f22941b, false);
        if (a10 < 0.0f) {
            f22940m.g("Received negative maxOverZoomOut value, coercing to 0");
            return d.c(a10, 0.0f);
        }
        return a10;
    }

    public final float e() {
        return this.f22945f;
    }

    public final float f() {
        int i10 = this.f22946g;
        if (i10 != 0) {
            if (i10 == 1) {
                return this.f22945f;
            }
            throw new IllegalArgumentException(Intrinsics.stringPlus("Unknown ZoomType ", Integer.valueOf(this.f22946g)));
        }
        return u(this.f22945f);
    }

    public final int g() {
        return this.f22946g;
    }

    public final float h() {
        return this.f22943d;
    }

    public final float i() {
        int i10 = this.f22944e;
        if (i10 != 0) {
            if (i10 == 1) {
                return this.f22943d;
            }
            throw new IllegalArgumentException(Intrinsics.stringPlus("Unknown ZoomType ", Integer.valueOf(this.f22944e)));
        }
        return u(this.f22943d);
    }

    public final int j() {
        return this.f22944e;
    }

    public final float k() {
        return this.f22942c;
    }

    public boolean l() {
        return this.f22948i;
    }

    public boolean m() {
        return this.f22949j;
    }

    public final float n(float f10) {
        return f10 / this.f22942c;
    }

    public void o(boolean z10) {
        this.f22948i = z10;
    }

    public final void p(float f10, int i10) {
        if (f10 >= 0.0f) {
            this.f22945f = f10;
            this.f22946g = i10;
            return;
        }
        throw new IllegalArgumentException("Max zoom should be >= 0.");
    }

    public final void q(float f10, int i10) {
        if (f10 >= 0.0f) {
            this.f22943d = f10;
            this.f22944e = i10;
            return;
        }
        throw new IllegalArgumentException("Min zoom should be >= 0");
    }

    public void r(boolean z10) {
        this.f22949j = z10;
    }

    public final void s(OverZoomRangeProvider overZoomRangeProvider) {
        Intrinsics.checkNotNullParameter(overZoomRangeProvider, "<set-?>");
        this.f22947h = overZoomRangeProvider;
    }

    public final void t(float f10) {
        this.f22942c = f10;
    }

    public final float u(float f10) {
        return f10 * this.f22942c;
    }
}
