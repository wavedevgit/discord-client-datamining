package vl;

import com.otaliastudios.zoom.OverZoomRangeProvider;
import com.otaliastudios.zoom.ZoomEngine;
import com.otaliastudios.zoom.ZoomLogger;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.ranges.d;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c extends vl.a {

    /* renamed from: k  reason: collision with root package name */
    public static final a f51186k = new a(null);

    /* renamed from: l  reason: collision with root package name */
    private static final String f51187l;

    /* renamed from: m  reason: collision with root package name */
    private static final ZoomLogger f51188m;

    /* renamed from: b  reason: collision with root package name */
    private final ZoomEngine f51189b;

    /* renamed from: c  reason: collision with root package name */
    private float f51190c;

    /* renamed from: d  reason: collision with root package name */
    private float f51191d;

    /* renamed from: e  reason: collision with root package name */
    private int f51192e;

    /* renamed from: f  reason: collision with root package name */
    private float f51193f;

    /* renamed from: g  reason: collision with root package name */
    private int f51194g;

    /* renamed from: h  reason: collision with root package name */
    private OverZoomRangeProvider f51195h;

    /* renamed from: i  reason: collision with root package name */
    private boolean f51196i;

    /* renamed from: j  reason: collision with root package name */
    private boolean f51197j;

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
        f51187l = TAG;
        ZoomLogger.a aVar = ZoomLogger.f18306b;
        Intrinsics.checkNotNullExpressionValue(TAG, "TAG");
        f51188m = aVar.a(TAG);
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public c(ZoomEngine engine, Function0 provider) {
        super(provider);
        Intrinsics.checkNotNullParameter(engine, "engine");
        Intrinsics.checkNotNullParameter(provider, "provider");
        this.f51189b = engine;
        this.f51191d = 0.8f;
        this.f51193f = 2.5f;
        this.f51195h = OverZoomRangeProvider.f18273b;
        this.f51196i = true;
        this.f51197j = true;
    }

    public final float b(float f10, boolean z10) {
        float i10 = i();
        float f11 = f();
        if (z10 && m()) {
            i10 -= d();
            f11 += c();
        }
        if (f11 < i10) {
            int i11 = this.f51194g;
            if (i11 != this.f51192e) {
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
        float a10 = this.f51195h.a(this.f51189b, true);
        if (a10 < 0.0f) {
            f51188m.g("Received negative maxOverZoomIn value, coercing to 0");
            return d.c(a10, 0.0f);
        }
        return a10;
    }

    public final float d() {
        float a10 = this.f51195h.a(this.f51189b, false);
        if (a10 < 0.0f) {
            f51188m.g("Received negative maxOverZoomOut value, coercing to 0");
            return d.c(a10, 0.0f);
        }
        return a10;
    }

    public final float e() {
        return this.f51193f;
    }

    public final float f() {
        int i10 = this.f51194g;
        if (i10 != 0) {
            if (i10 == 1) {
                return this.f51193f;
            }
            throw new IllegalArgumentException(Intrinsics.stringPlus("Unknown ZoomType ", Integer.valueOf(this.f51194g)));
        }
        return u(this.f51193f);
    }

    public final int g() {
        return this.f51194g;
    }

    public final float h() {
        return this.f51191d;
    }

    public final float i() {
        int i10 = this.f51192e;
        if (i10 != 0) {
            if (i10 == 1) {
                return this.f51191d;
            }
            throw new IllegalArgumentException(Intrinsics.stringPlus("Unknown ZoomType ", Integer.valueOf(this.f51192e)));
        }
        return u(this.f51191d);
    }

    public final int j() {
        return this.f51192e;
    }

    public final float k() {
        return this.f51190c;
    }

    public boolean l() {
        return this.f51196i;
    }

    public boolean m() {
        return this.f51197j;
    }

    public final float n(float f10) {
        return f10 / this.f51190c;
    }

    public void o(boolean z10) {
        this.f51196i = z10;
    }

    public final void p(float f10, int i10) {
        if (f10 >= 0.0f) {
            this.f51193f = f10;
            this.f51194g = i10;
            return;
        }
        throw new IllegalArgumentException("Max zoom should be >= 0.");
    }

    public final void q(float f10, int i10) {
        if (f10 >= 0.0f) {
            this.f51191d = f10;
            this.f51192e = i10;
            return;
        }
        throw new IllegalArgumentException("Min zoom should be >= 0");
    }

    public void r(boolean z10) {
        this.f51197j = z10;
    }

    public final void s(OverZoomRangeProvider overZoomRangeProvider) {
        Intrinsics.checkNotNullParameter(overZoomRangeProvider, "<set-?>");
        this.f51195h = overZoomRangeProvider;
    }

    public final void t(float f10) {
        this.f51190c = f10;
    }

    public final float u(float f10) {
        return f10 * this.f51190c;
    }
}
