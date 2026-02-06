package bm;

import com.otaliastudios.zoom.OverZoomRangeProvider;
import com.otaliastudios.zoom.ZoomEngine;
import com.otaliastudios.zoom.ZoomLogger;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.ranges.d;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c extends bm.a {

    /* renamed from: k  reason: collision with root package name */
    public static final a f6855k = new a(null);

    /* renamed from: l  reason: collision with root package name */
    private static final String f6856l;

    /* renamed from: m  reason: collision with root package name */
    private static final ZoomLogger f6857m;

    /* renamed from: b  reason: collision with root package name */
    private final ZoomEngine f6858b;

    /* renamed from: c  reason: collision with root package name */
    private float f6859c;

    /* renamed from: d  reason: collision with root package name */
    private float f6860d;

    /* renamed from: e  reason: collision with root package name */
    private int f6861e;

    /* renamed from: f  reason: collision with root package name */
    private float f6862f;

    /* renamed from: g  reason: collision with root package name */
    private int f6863g;

    /* renamed from: h  reason: collision with root package name */
    private OverZoomRangeProvider f6864h;

    /* renamed from: i  reason: collision with root package name */
    private boolean f6865i;

    /* renamed from: j  reason: collision with root package name */
    private boolean f6866j;

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
        f6856l = TAG;
        ZoomLogger.a aVar = ZoomLogger.f17293b;
        Intrinsics.checkNotNullExpressionValue(TAG, "TAG");
        f6857m = aVar.a(TAG);
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public c(ZoomEngine engine, Function0 provider) {
        super(provider);
        Intrinsics.checkNotNullParameter(engine, "engine");
        Intrinsics.checkNotNullParameter(provider, "provider");
        this.f6858b = engine;
        this.f6860d = 0.8f;
        this.f6862f = 2.5f;
        this.f6864h = OverZoomRangeProvider.f17260b;
        this.f6865i = true;
        this.f6866j = true;
    }

    public final float b(float f10, boolean z10) {
        float i10 = i();
        float f11 = f();
        if (z10 && m()) {
            i10 -= d();
            f11 += c();
        }
        if (f11 < i10) {
            int i11 = this.f6863g;
            if (i11 != this.f6861e) {
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
        float a10 = this.f6864h.a(this.f6858b, true);
        if (a10 < 0.0f) {
            f6857m.g("Received negative maxOverZoomIn value, coercing to 0");
            return d.c(a10, 0.0f);
        }
        return a10;
    }

    public final float d() {
        float a10 = this.f6864h.a(this.f6858b, false);
        if (a10 < 0.0f) {
            f6857m.g("Received negative maxOverZoomOut value, coercing to 0");
            return d.c(a10, 0.0f);
        }
        return a10;
    }

    public final float e() {
        return this.f6862f;
    }

    public final float f() {
        int i10 = this.f6863g;
        if (i10 != 0) {
            if (i10 == 1) {
                return this.f6862f;
            }
            throw new IllegalArgumentException(Intrinsics.stringPlus("Unknown ZoomType ", Integer.valueOf(this.f6863g)));
        }
        return u(this.f6862f);
    }

    public final int g() {
        return this.f6863g;
    }

    public final float h() {
        return this.f6860d;
    }

    public final float i() {
        int i10 = this.f6861e;
        if (i10 != 0) {
            if (i10 == 1) {
                return this.f6860d;
            }
            throw new IllegalArgumentException(Intrinsics.stringPlus("Unknown ZoomType ", Integer.valueOf(this.f6861e)));
        }
        return u(this.f6860d);
    }

    public final int j() {
        return this.f6861e;
    }

    public final float k() {
        return this.f6859c;
    }

    public boolean l() {
        return this.f6865i;
    }

    public boolean m() {
        return this.f6866j;
    }

    public final float n(float f10) {
        return f10 / this.f6859c;
    }

    public void o(boolean z10) {
        this.f6865i = z10;
    }

    public final void p(float f10, int i10) {
        if (f10 >= 0.0f) {
            this.f6862f = f10;
            this.f6863g = i10;
            return;
        }
        throw new IllegalArgumentException("Max zoom should be >= 0.");
    }

    public final void q(float f10, int i10) {
        if (f10 >= 0.0f) {
            this.f6860d = f10;
            this.f6861e = i10;
            return;
        }
        throw new IllegalArgumentException("Min zoom should be >= 0");
    }

    public void r(boolean z10) {
        this.f6866j = z10;
    }

    public final void s(OverZoomRangeProvider overZoomRangeProvider) {
        Intrinsics.checkNotNullParameter(overZoomRangeProvider, "<set-?>");
        this.f6864h = overZoomRangeProvider;
    }

    public final void t(float f10) {
        this.f6859c = f10;
    }

    public final float u(float f10) {
        return f10 * this.f6859c;
    }
}
