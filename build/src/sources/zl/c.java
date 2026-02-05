package zl;

import com.otaliastudios.zoom.OverZoomRangeProvider;
import com.otaliastudios.zoom.ZoomEngine;
import com.otaliastudios.zoom.ZoomLogger;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.ranges.d;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c extends zl.a {

    /* renamed from: k  reason: collision with root package name */
    public static final a f56026k = new a(null);

    /* renamed from: l  reason: collision with root package name */
    private static final String f56027l;

    /* renamed from: m  reason: collision with root package name */
    private static final ZoomLogger f56028m;

    /* renamed from: b  reason: collision with root package name */
    private final ZoomEngine f56029b;

    /* renamed from: c  reason: collision with root package name */
    private float f56030c;

    /* renamed from: d  reason: collision with root package name */
    private float f56031d;

    /* renamed from: e  reason: collision with root package name */
    private int f56032e;

    /* renamed from: f  reason: collision with root package name */
    private float f56033f;

    /* renamed from: g  reason: collision with root package name */
    private int f56034g;

    /* renamed from: h  reason: collision with root package name */
    private OverZoomRangeProvider f56035h;

    /* renamed from: i  reason: collision with root package name */
    private boolean f56036i;

    /* renamed from: j  reason: collision with root package name */
    private boolean f56037j;

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
        f56027l = TAG;
        ZoomLogger.a aVar = ZoomLogger.f17313b;
        Intrinsics.checkNotNullExpressionValue(TAG, "TAG");
        f56028m = aVar.a(TAG);
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public c(ZoomEngine engine, Function0 provider) {
        super(provider);
        Intrinsics.checkNotNullParameter(engine, "engine");
        Intrinsics.checkNotNullParameter(provider, "provider");
        this.f56029b = engine;
        this.f56031d = 0.8f;
        this.f56033f = 2.5f;
        this.f56035h = OverZoomRangeProvider.f17280b;
        this.f56036i = true;
        this.f56037j = true;
    }

    public final float b(float f10, boolean z10) {
        float i10 = i();
        float f11 = f();
        if (z10 && m()) {
            i10 -= d();
            f11 += c();
        }
        if (f11 < i10) {
            int i11 = this.f56034g;
            if (i11 != this.f56032e) {
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
        float a10 = this.f56035h.a(this.f56029b, true);
        if (a10 < 0.0f) {
            f56028m.g("Received negative maxOverZoomIn value, coercing to 0");
            return d.c(a10, 0.0f);
        }
        return a10;
    }

    public final float d() {
        float a10 = this.f56035h.a(this.f56029b, false);
        if (a10 < 0.0f) {
            f56028m.g("Received negative maxOverZoomOut value, coercing to 0");
            return d.c(a10, 0.0f);
        }
        return a10;
    }

    public final float e() {
        return this.f56033f;
    }

    public final float f() {
        int i10 = this.f56034g;
        if (i10 != 0) {
            if (i10 == 1) {
                return this.f56033f;
            }
            throw new IllegalArgumentException(Intrinsics.stringPlus("Unknown ZoomType ", Integer.valueOf(this.f56034g)));
        }
        return u(this.f56033f);
    }

    public final int g() {
        return this.f56034g;
    }

    public final float h() {
        return this.f56031d;
    }

    public final float i() {
        int i10 = this.f56032e;
        if (i10 != 0) {
            if (i10 == 1) {
                return this.f56031d;
            }
            throw new IllegalArgumentException(Intrinsics.stringPlus("Unknown ZoomType ", Integer.valueOf(this.f56032e)));
        }
        return u(this.f56031d);
    }

    public final int j() {
        return this.f56032e;
    }

    public final float k() {
        return this.f56030c;
    }

    public boolean l() {
        return this.f56036i;
    }

    public boolean m() {
        return this.f56037j;
    }

    public final float n(float f10) {
        return f10 / this.f56030c;
    }

    public void o(boolean z10) {
        this.f56036i = z10;
    }

    public final void p(float f10, int i10) {
        if (f10 >= 0.0f) {
            this.f56033f = f10;
            this.f56034g = i10;
            return;
        }
        throw new IllegalArgumentException("Max zoom should be >= 0.");
    }

    public final void q(float f10, int i10) {
        if (f10 >= 0.0f) {
            this.f56031d = f10;
            this.f56032e = i10;
            return;
        }
        throw new IllegalArgumentException("Min zoom should be >= 0");
    }

    public void r(boolean z10) {
        this.f56037j = z10;
    }

    public final void s(OverZoomRangeProvider overZoomRangeProvider) {
        Intrinsics.checkNotNullParameter(overZoomRangeProvider, "<set-?>");
        this.f56035h = overZoomRangeProvider;
    }

    public final void t(float f10) {
        this.f56030c = f10;
    }

    public final float u(float f10) {
        return f10 * this.f56030c;
    }
}
