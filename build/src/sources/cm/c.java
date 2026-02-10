package cm;

import com.otaliastudios.zoom.OverZoomRangeProvider;
import com.otaliastudios.zoom.ZoomEngine;
import com.otaliastudios.zoom.ZoomLogger;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.ranges.d;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c extends cm.a {

    /* renamed from: k  reason: collision with root package name */
    public static final a f7696k = new a(null);

    /* renamed from: l  reason: collision with root package name */
    private static final String f7697l;

    /* renamed from: m  reason: collision with root package name */
    private static final ZoomLogger f7698m;

    /* renamed from: b  reason: collision with root package name */
    private final ZoomEngine f7699b;

    /* renamed from: c  reason: collision with root package name */
    private float f7700c;

    /* renamed from: d  reason: collision with root package name */
    private float f7701d;

    /* renamed from: e  reason: collision with root package name */
    private int f7702e;

    /* renamed from: f  reason: collision with root package name */
    private float f7703f;

    /* renamed from: g  reason: collision with root package name */
    private int f7704g;

    /* renamed from: h  reason: collision with root package name */
    private OverZoomRangeProvider f7705h;

    /* renamed from: i  reason: collision with root package name */
    private boolean f7706i;

    /* renamed from: j  reason: collision with root package name */
    private boolean f7707j;

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
        f7697l = TAG;
        ZoomLogger.a aVar = ZoomLogger.f17433b;
        Intrinsics.checkNotNullExpressionValue(TAG, "TAG");
        f7698m = aVar.a(TAG);
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public c(ZoomEngine engine, Function0 provider) {
        super(provider);
        Intrinsics.checkNotNullParameter(engine, "engine");
        Intrinsics.checkNotNullParameter(provider, "provider");
        this.f7699b = engine;
        this.f7701d = 0.8f;
        this.f7703f = 2.5f;
        this.f7705h = OverZoomRangeProvider.f17400b;
        this.f7706i = true;
        this.f7707j = true;
    }

    public final float b(float f10, boolean z10) {
        float i10 = i();
        float f11 = f();
        if (z10 && m()) {
            i10 -= d();
            f11 += c();
        }
        if (f11 < i10) {
            int i11 = this.f7704g;
            if (i11 != this.f7702e) {
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
        float a10 = this.f7705h.a(this.f7699b, true);
        if (a10 < 0.0f) {
            f7698m.g("Received negative maxOverZoomIn value, coercing to 0");
            return d.c(a10, 0.0f);
        }
        return a10;
    }

    public final float d() {
        float a10 = this.f7705h.a(this.f7699b, false);
        if (a10 < 0.0f) {
            f7698m.g("Received negative maxOverZoomOut value, coercing to 0");
            return d.c(a10, 0.0f);
        }
        return a10;
    }

    public final float e() {
        return this.f7703f;
    }

    public final float f() {
        int i10 = this.f7704g;
        if (i10 != 0) {
            if (i10 == 1) {
                return this.f7703f;
            }
            throw new IllegalArgumentException(Intrinsics.stringPlus("Unknown ZoomType ", Integer.valueOf(this.f7704g)));
        }
        return u(this.f7703f);
    }

    public final int g() {
        return this.f7704g;
    }

    public final float h() {
        return this.f7701d;
    }

    public final float i() {
        int i10 = this.f7702e;
        if (i10 != 0) {
            if (i10 == 1) {
                return this.f7701d;
            }
            throw new IllegalArgumentException(Intrinsics.stringPlus("Unknown ZoomType ", Integer.valueOf(this.f7702e)));
        }
        return u(this.f7701d);
    }

    public final int j() {
        return this.f7702e;
    }

    public final float k() {
        return this.f7700c;
    }

    public boolean l() {
        return this.f7706i;
    }

    public boolean m() {
        return this.f7707j;
    }

    public final float n(float f10) {
        return f10 / this.f7700c;
    }

    public void o(boolean z10) {
        this.f7706i = z10;
    }

    public final void p(float f10, int i10) {
        if (f10 >= 0.0f) {
            this.f7703f = f10;
            this.f7704g = i10;
            return;
        }
        throw new IllegalArgumentException("Max zoom should be >= 0.");
    }

    public final void q(float f10, int i10) {
        if (f10 >= 0.0f) {
            this.f7701d = f10;
            this.f7702e = i10;
            return;
        }
        throw new IllegalArgumentException("Min zoom should be >= 0");
    }

    public void r(boolean z10) {
        this.f7707j = z10;
    }

    public final void s(OverZoomRangeProvider overZoomRangeProvider) {
        Intrinsics.checkNotNullParameter(overZoomRangeProvider, "<set-?>");
        this.f7705h = overZoomRangeProvider;
    }

    public final void t(float f10) {
        this.f7700c = f10;
    }

    public final float u(float f10) {
        return f10 * this.f7700c;
    }
}
