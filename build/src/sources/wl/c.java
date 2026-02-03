package wl;

import com.otaliastudios.zoom.OverZoomRangeProvider;
import com.otaliastudios.zoom.ZoomEngine;
import com.otaliastudios.zoom.ZoomLogger;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.ranges.d;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c extends wl.a {

    /* renamed from: k  reason: collision with root package name */
    public static final a f52500k = new a(null);

    /* renamed from: l  reason: collision with root package name */
    private static final String f52501l;

    /* renamed from: m  reason: collision with root package name */
    private static final ZoomLogger f52502m;

    /* renamed from: b  reason: collision with root package name */
    private final ZoomEngine f52503b;

    /* renamed from: c  reason: collision with root package name */
    private float f52504c;

    /* renamed from: d  reason: collision with root package name */
    private float f52505d;

    /* renamed from: e  reason: collision with root package name */
    private int f52506e;

    /* renamed from: f  reason: collision with root package name */
    private float f52507f;

    /* renamed from: g  reason: collision with root package name */
    private int f52508g;

    /* renamed from: h  reason: collision with root package name */
    private OverZoomRangeProvider f52509h;

    /* renamed from: i  reason: collision with root package name */
    private boolean f52510i;

    /* renamed from: j  reason: collision with root package name */
    private boolean f52511j;

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
        f52501l = TAG;
        ZoomLogger.a aVar = ZoomLogger.f16907b;
        Intrinsics.checkNotNullExpressionValue(TAG, "TAG");
        f52502m = aVar.a(TAG);
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public c(ZoomEngine engine, Function0 provider) {
        super(provider);
        Intrinsics.checkNotNullParameter(engine, "engine");
        Intrinsics.checkNotNullParameter(provider, "provider");
        this.f52503b = engine;
        this.f52505d = 0.8f;
        this.f52507f = 2.5f;
        this.f52509h = OverZoomRangeProvider.f16874b;
        this.f52510i = true;
        this.f52511j = true;
    }

    public final float b(float f10, boolean z10) {
        float i10 = i();
        float f11 = f();
        if (z10 && m()) {
            i10 -= d();
            f11 += c();
        }
        if (f11 < i10) {
            int i11 = this.f52508g;
            if (i11 != this.f52506e) {
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
        float a10 = this.f52509h.a(this.f52503b, true);
        if (a10 < 0.0f) {
            f52502m.g("Received negative maxOverZoomIn value, coercing to 0");
            return d.c(a10, 0.0f);
        }
        return a10;
    }

    public final float d() {
        float a10 = this.f52509h.a(this.f52503b, false);
        if (a10 < 0.0f) {
            f52502m.g("Received negative maxOverZoomOut value, coercing to 0");
            return d.c(a10, 0.0f);
        }
        return a10;
    }

    public final float e() {
        return this.f52507f;
    }

    public final float f() {
        int i10 = this.f52508g;
        if (i10 != 0) {
            if (i10 == 1) {
                return this.f52507f;
            }
            throw new IllegalArgumentException(Intrinsics.stringPlus("Unknown ZoomType ", Integer.valueOf(this.f52508g)));
        }
        return u(this.f52507f);
    }

    public final int g() {
        return this.f52508g;
    }

    public final float h() {
        return this.f52505d;
    }

    public final float i() {
        int i10 = this.f52506e;
        if (i10 != 0) {
            if (i10 == 1) {
                return this.f52505d;
            }
            throw new IllegalArgumentException(Intrinsics.stringPlus("Unknown ZoomType ", Integer.valueOf(this.f52506e)));
        }
        return u(this.f52505d);
    }

    public final int j() {
        return this.f52506e;
    }

    public final float k() {
        return this.f52504c;
    }

    public boolean l() {
        return this.f52510i;
    }

    public boolean m() {
        return this.f52511j;
    }

    public final float n(float f10) {
        return f10 / this.f52504c;
    }

    public void o(boolean z10) {
        this.f52510i = z10;
    }

    public final void p(float f10, int i10) {
        if (f10 >= 0.0f) {
            this.f52507f = f10;
            this.f52508g = i10;
            return;
        }
        throw new IllegalArgumentException("Max zoom should be >= 0.");
    }

    public final void q(float f10, int i10) {
        if (f10 >= 0.0f) {
            this.f52505d = f10;
            this.f52506e = i10;
            return;
        }
        throw new IllegalArgumentException("Min zoom should be >= 0");
    }

    public void r(boolean z10) {
        this.f52511j = z10;
    }

    public final void s(OverZoomRangeProvider overZoomRangeProvider) {
        Intrinsics.checkNotNullParameter(overZoomRangeProvider, "<set-?>");
        this.f52509h = overZoomRangeProvider;
    }

    public final void t(float f10) {
        this.f52504c = f10;
    }

    public final float u(float f10) {
        return f10 * this.f52504c;
    }
}
