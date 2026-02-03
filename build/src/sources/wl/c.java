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
    public static final a f52278k = new a(null);

    /* renamed from: l  reason: collision with root package name */
    private static final String f52279l;

    /* renamed from: m  reason: collision with root package name */
    private static final ZoomLogger f52280m;

    /* renamed from: b  reason: collision with root package name */
    private final ZoomEngine f52281b;

    /* renamed from: c  reason: collision with root package name */
    private float f52282c;

    /* renamed from: d  reason: collision with root package name */
    private float f52283d;

    /* renamed from: e  reason: collision with root package name */
    private int f52284e;

    /* renamed from: f  reason: collision with root package name */
    private float f52285f;

    /* renamed from: g  reason: collision with root package name */
    private int f52286g;

    /* renamed from: h  reason: collision with root package name */
    private OverZoomRangeProvider f52287h;

    /* renamed from: i  reason: collision with root package name */
    private boolean f52288i;

    /* renamed from: j  reason: collision with root package name */
    private boolean f52289j;

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
        f52279l = TAG;
        ZoomLogger.a aVar = ZoomLogger.f17939b;
        Intrinsics.checkNotNullExpressionValue(TAG, "TAG");
        f52280m = aVar.a(TAG);
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public c(ZoomEngine engine, Function0 provider) {
        super(provider);
        Intrinsics.checkNotNullParameter(engine, "engine");
        Intrinsics.checkNotNullParameter(provider, "provider");
        this.f52281b = engine;
        this.f52283d = 0.8f;
        this.f52285f = 2.5f;
        this.f52287h = OverZoomRangeProvider.f17906b;
        this.f52288i = true;
        this.f52289j = true;
    }

    public final float b(float f10, boolean z10) {
        float i10 = i();
        float f11 = f();
        if (z10 && m()) {
            i10 -= d();
            f11 += c();
        }
        if (f11 < i10) {
            int i11 = this.f52286g;
            if (i11 != this.f52284e) {
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
        float a10 = this.f52287h.a(this.f52281b, true);
        if (a10 < 0.0f) {
            f52280m.g("Received negative maxOverZoomIn value, coercing to 0");
            return d.c(a10, 0.0f);
        }
        return a10;
    }

    public final float d() {
        float a10 = this.f52287h.a(this.f52281b, false);
        if (a10 < 0.0f) {
            f52280m.g("Received negative maxOverZoomOut value, coercing to 0");
            return d.c(a10, 0.0f);
        }
        return a10;
    }

    public final float e() {
        return this.f52285f;
    }

    public final float f() {
        int i10 = this.f52286g;
        if (i10 != 0) {
            if (i10 == 1) {
                return this.f52285f;
            }
            throw new IllegalArgumentException(Intrinsics.stringPlus("Unknown ZoomType ", Integer.valueOf(this.f52286g)));
        }
        return u(this.f52285f);
    }

    public final int g() {
        return this.f52286g;
    }

    public final float h() {
        return this.f52283d;
    }

    public final float i() {
        int i10 = this.f52284e;
        if (i10 != 0) {
            if (i10 == 1) {
                return this.f52283d;
            }
            throw new IllegalArgumentException(Intrinsics.stringPlus("Unknown ZoomType ", Integer.valueOf(this.f52284e)));
        }
        return u(this.f52283d);
    }

    public final int j() {
        return this.f52284e;
    }

    public final float k() {
        return this.f52282c;
    }

    public boolean l() {
        return this.f52288i;
    }

    public boolean m() {
        return this.f52289j;
    }

    public final float n(float f10) {
        return f10 / this.f52282c;
    }

    public void o(boolean z10) {
        this.f52288i = z10;
    }

    public final void p(float f10, int i10) {
        if (f10 >= 0.0f) {
            this.f52285f = f10;
            this.f52286g = i10;
            return;
        }
        throw new IllegalArgumentException("Max zoom should be >= 0.");
    }

    public final void q(float f10, int i10) {
        if (f10 >= 0.0f) {
            this.f52283d = f10;
            this.f52284e = i10;
            return;
        }
        throw new IllegalArgumentException("Min zoom should be >= 0");
    }

    public void r(boolean z10) {
        this.f52289j = z10;
    }

    public final void s(OverZoomRangeProvider overZoomRangeProvider) {
        Intrinsics.checkNotNullParameter(overZoomRangeProvider, "<set-?>");
        this.f52287h = overZoomRangeProvider;
    }

    public final void t(float f10) {
        this.f52282c = f10;
    }

    public final float u(float f10) {
        return f10 * this.f52282c;
    }
}
