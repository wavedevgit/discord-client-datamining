package zl;

import com.otaliastudios.zoom.OverPanRangeProvider;
import com.otaliastudios.zoom.ScaledPoint;
import com.otaliastudios.zoom.ZoomEngine;
import com.otaliastudios.zoom.ZoomLogger;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.ranges.d;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b extends zl.a {

    /* renamed from: j  reason: collision with root package name */
    public static final a f56011j = new a(null);

    /* renamed from: k  reason: collision with root package name */
    private static final String f56012k;

    /* renamed from: l  reason: collision with root package name */
    private static final ZoomLogger f56013l;

    /* renamed from: b  reason: collision with root package name */
    private final ZoomEngine f56014b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f56015c;

    /* renamed from: d  reason: collision with root package name */
    private boolean f56016d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f56017e;

    /* renamed from: f  reason: collision with root package name */
    private boolean f56018f;

    /* renamed from: g  reason: collision with root package name */
    private int f56019g;

    /* renamed from: h  reason: collision with root package name */
    private OverPanRangeProvider f56020h;

    /* renamed from: i  reason: collision with root package name */
    private final ScaledPoint f56021i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    /* renamed from: zl.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0783b {

        /* renamed from: a  reason: collision with root package name */
        private int f56022a;

        /* renamed from: b  reason: collision with root package name */
        private int f56023b;

        /* renamed from: c  reason: collision with root package name */
        private int f56024c;

        /* renamed from: d  reason: collision with root package name */
        private boolean f56025d;

        public final int a() {
            return this.f56023b;
        }

        public final int b() {
            return this.f56024c;
        }

        public final int c() {
            return this.f56022a;
        }

        public final boolean d() {
            return this.f56025d;
        }

        public final void e(int i10) {
            this.f56023b = i10;
        }

        public final void f(boolean z10) {
            this.f56025d = z10;
        }

        public final void g(int i10) {
            this.f56024c = i10;
        }

        public final void h(int i10) {
            this.f56022a = i10;
        }
    }

    static {
        String TAG = b.class.getSimpleName();
        f56012k = TAG;
        ZoomLogger.a aVar = ZoomLogger.f17313b;
        Intrinsics.checkNotNullExpressionValue(TAG, "TAG");
        f56013l = aVar.a(TAG);
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public b(ZoomEngine engine, Function0 provider) {
        super(provider);
        Intrinsics.checkNotNullParameter(engine, "engine");
        Intrinsics.checkNotNullParameter(provider, "provider");
        this.f56014b = engine;
        this.f56015c = true;
        this.f56016d = true;
        this.f56017e = true;
        this.f56018f = true;
        this.f56019g = 51;
        this.f56020h = OverPanRangeProvider.f17276b;
        this.f56021i = new ScaledPoint(0.0f, 0.0f, 3, null);
    }

    public final float b(int i10, float f10, boolean z10) {
        int i11;
        if (z10) {
            i11 = i10 & 7;
        } else {
            i11 = i10 & 112;
        }
        if (i11 != 1) {
            if (i11 != 3) {
                if (i11 != 5) {
                    if (i11 != 16) {
                        if (i11 == 48 || i11 != 80) {
                            return 0.0f;
                        }
                    }
                }
                return f10;
            }
            return 0.0f;
        }
        return f10 * 0.5f;
    }

    public final float c(boolean z10, boolean z11) {
        float x10;
        float l10;
        float o10;
        boolean z12;
        float f10;
        int e10;
        float f11;
        yl.b a10 = a();
        if (z10) {
            x10 = a10.w();
        } else {
            x10 = a10.x();
        }
        yl.b a11 = a();
        if (z10) {
            l10 = a11.m();
        } else {
            l10 = a11.l();
        }
        yl.b a12 = a();
        if (z10) {
            o10 = a12.p();
        } else {
            o10 = a12.o();
        }
        if (z10) {
            z12 = this.f56015c;
        } else {
            z12 = this.f56016d;
        }
        float f12 = 0.0f;
        if (z12 && z11) {
            if (z10) {
                f10 = i();
            } else {
                f10 = j();
            }
        } else {
            f10 = 0.0f;
        }
        if (z10) {
            e10 = com.otaliastudios.zoom.a.f17318a.d(this.f56019g, 0);
        } else {
            e10 = com.otaliastudios.zoom.a.f17318a.e(this.f56019g, 0);
        }
        if (o10 <= l10) {
            f11 = l10 - o10;
            if (e10 != 0) {
                f12 = b(e10, f11, z10);
                f11 = f12;
            }
        } else {
            f12 = l10 - o10;
            f11 = 0.0f;
        }
        return d.l(x10, f12 - f10, f11 + f10) - x10;
    }

    public final void d(boolean z10, C0783b output) {
        float x10;
        float l10;
        float o10;
        int b10;
        Intrinsics.checkNotNullParameter(output, "output");
        yl.b a10 = a();
        if (z10) {
            x10 = a10.w();
        } else {
            x10 = a10.x();
        }
        int i10 = (int) x10;
        yl.b a11 = a();
        if (z10) {
            l10 = a11.m();
        } else {
            l10 = a11.l();
        }
        int i11 = (int) l10;
        yl.b a12 = a();
        if (z10) {
            o10 = a12.p();
        } else {
            o10 = a12.o();
        }
        int i12 = (int) o10;
        boolean z11 = false;
        int c10 = (int) c(z10, false);
        if (z10) {
            b10 = com.otaliastudios.zoom.a.f17318a.a(this.f56019g);
        } else {
            b10 = com.otaliastudios.zoom.a.f17318a.b(this.f56019g);
        }
        if (i12 > i11) {
            output.h(-(i12 - i11));
            output.g(0);
        } else if (com.otaliastudios.zoom.a.f17318a.c(b10)) {
            output.h(0);
            output.g(i11 - i12);
        } else {
            int i13 = i10 + c10;
            output.h(i13);
            output.g(i13);
        }
        output.e(i10);
        if (c10 != 0) {
            z11 = true;
        }
        output.f(z11);
    }

    public final int e() {
        return this.f56019g;
    }

    public final ScaledPoint f() {
        this.f56021i.g(Float.valueOf(c(true, false)), Float.valueOf(c(false, false)));
        return this.f56021i;
    }

    public final boolean g() {
        return this.f56015c;
    }

    public final boolean h() {
        return this.f56017e;
    }

    public final float i() {
        float a10 = this.f56020h.a(this.f56014b, true);
        if (a10 < 0.0f) {
            f56013l.g("Received negative maxHorizontalOverPan value, coercing to 0");
            return d.c(a10, 0.0f);
        }
        return a10;
    }

    public final float j() {
        float a10 = this.f56020h.a(this.f56014b, false);
        if (a10 < 0.0f) {
            f56013l.g("Received negative maxVerticalOverPan value, coercing to 0");
            return d.c(a10, 0.0f);
        }
        return a10;
    }

    public final boolean k() {
        return this.f56016d;
    }

    public final boolean l() {
        return this.f56018f;
    }

    public boolean m() {
        if (!this.f56017e && !this.f56018f) {
            return false;
        }
        return true;
    }

    public boolean n() {
        if (!this.f56015c && !this.f56016d) {
            return false;
        }
        return true;
    }

    public final void o(int i10) {
        this.f56019g = i10;
    }

    public final void p(boolean z10) {
        this.f56015c = z10;
    }

    public final void q(boolean z10) {
        this.f56017e = z10;
    }

    public final void r(OverPanRangeProvider overPanRangeProvider) {
        Intrinsics.checkNotNullParameter(overPanRangeProvider, "<set-?>");
        this.f56020h = overPanRangeProvider;
    }

    public final void s(boolean z10) {
        this.f56016d = z10;
    }

    public final void t(boolean z10) {
        this.f56018f = z10;
    }
}
