package bm;

import com.otaliastudios.zoom.OverPanRangeProvider;
import com.otaliastudios.zoom.ScaledPoint;
import com.otaliastudios.zoom.ZoomEngine;
import com.otaliastudios.zoom.ZoomLogger;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.ranges.d;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b extends bm.a {

    /* renamed from: j  reason: collision with root package name */
    public static final a f6840j = new a(null);

    /* renamed from: k  reason: collision with root package name */
    private static final String f6841k;

    /* renamed from: l  reason: collision with root package name */
    private static final ZoomLogger f6842l;

    /* renamed from: b  reason: collision with root package name */
    private final ZoomEngine f6843b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f6844c;

    /* renamed from: d  reason: collision with root package name */
    private boolean f6845d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f6846e;

    /* renamed from: f  reason: collision with root package name */
    private boolean f6847f;

    /* renamed from: g  reason: collision with root package name */
    private int f6848g;

    /* renamed from: h  reason: collision with root package name */
    private OverPanRangeProvider f6849h;

    /* renamed from: i  reason: collision with root package name */
    private final ScaledPoint f6850i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    /* renamed from: bm.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0103b {

        /* renamed from: a  reason: collision with root package name */
        private int f6851a;

        /* renamed from: b  reason: collision with root package name */
        private int f6852b;

        /* renamed from: c  reason: collision with root package name */
        private int f6853c;

        /* renamed from: d  reason: collision with root package name */
        private boolean f6854d;

        public final int a() {
            return this.f6852b;
        }

        public final int b() {
            return this.f6853c;
        }

        public final int c() {
            return this.f6851a;
        }

        public final boolean d() {
            return this.f6854d;
        }

        public final void e(int i10) {
            this.f6852b = i10;
        }

        public final void f(boolean z10) {
            this.f6854d = z10;
        }

        public final void g(int i10) {
            this.f6853c = i10;
        }

        public final void h(int i10) {
            this.f6851a = i10;
        }
    }

    static {
        String TAG = b.class.getSimpleName();
        f6841k = TAG;
        ZoomLogger.a aVar = ZoomLogger.f17293b;
        Intrinsics.checkNotNullExpressionValue(TAG, "TAG");
        f6842l = aVar.a(TAG);
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public b(ZoomEngine engine, Function0 provider) {
        super(provider);
        Intrinsics.checkNotNullParameter(engine, "engine");
        Intrinsics.checkNotNullParameter(provider, "provider");
        this.f6843b = engine;
        this.f6844c = true;
        this.f6845d = true;
        this.f6846e = true;
        this.f6847f = true;
        this.f6848g = 51;
        this.f6849h = OverPanRangeProvider.f17256b;
        this.f6850i = new ScaledPoint(0.0f, 0.0f, 3, null);
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
        am.b a10 = a();
        if (z10) {
            x10 = a10.w();
        } else {
            x10 = a10.x();
        }
        am.b a11 = a();
        if (z10) {
            l10 = a11.m();
        } else {
            l10 = a11.l();
        }
        am.b a12 = a();
        if (z10) {
            o10 = a12.p();
        } else {
            o10 = a12.o();
        }
        if (z10) {
            z12 = this.f6844c;
        } else {
            z12 = this.f6845d;
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
            e10 = com.otaliastudios.zoom.a.f17298a.d(this.f6848g, 0);
        } else {
            e10 = com.otaliastudios.zoom.a.f17298a.e(this.f6848g, 0);
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

    public final void d(boolean z10, C0103b output) {
        float x10;
        float l10;
        float o10;
        int b10;
        Intrinsics.checkNotNullParameter(output, "output");
        am.b a10 = a();
        if (z10) {
            x10 = a10.w();
        } else {
            x10 = a10.x();
        }
        int i10 = (int) x10;
        am.b a11 = a();
        if (z10) {
            l10 = a11.m();
        } else {
            l10 = a11.l();
        }
        int i11 = (int) l10;
        am.b a12 = a();
        if (z10) {
            o10 = a12.p();
        } else {
            o10 = a12.o();
        }
        int i12 = (int) o10;
        boolean z11 = false;
        int c10 = (int) c(z10, false);
        if (z10) {
            b10 = com.otaliastudios.zoom.a.f17298a.a(this.f6848g);
        } else {
            b10 = com.otaliastudios.zoom.a.f17298a.b(this.f6848g);
        }
        if (i12 > i11) {
            output.h(-(i12 - i11));
            output.g(0);
        } else if (com.otaliastudios.zoom.a.f17298a.c(b10)) {
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
        return this.f6848g;
    }

    public final ScaledPoint f() {
        this.f6850i.g(Float.valueOf(c(true, false)), Float.valueOf(c(false, false)));
        return this.f6850i;
    }

    public final boolean g() {
        return this.f6844c;
    }

    public final boolean h() {
        return this.f6846e;
    }

    public final float i() {
        float a10 = this.f6849h.a(this.f6843b, true);
        if (a10 < 0.0f) {
            f6842l.g("Received negative maxHorizontalOverPan value, coercing to 0");
            return d.c(a10, 0.0f);
        }
        return a10;
    }

    public final float j() {
        float a10 = this.f6849h.a(this.f6843b, false);
        if (a10 < 0.0f) {
            f6842l.g("Received negative maxVerticalOverPan value, coercing to 0");
            return d.c(a10, 0.0f);
        }
        return a10;
    }

    public final boolean k() {
        return this.f6845d;
    }

    public final boolean l() {
        return this.f6847f;
    }

    public boolean m() {
        if (!this.f6846e && !this.f6847f) {
            return false;
        }
        return true;
    }

    public boolean n() {
        if (!this.f6844c && !this.f6845d) {
            return false;
        }
        return true;
    }

    public final void o(int i10) {
        this.f6848g = i10;
    }

    public final void p(boolean z10) {
        this.f6844c = z10;
    }

    public final void q(boolean z10) {
        this.f6846e = z10;
    }

    public final void r(OverPanRangeProvider overPanRangeProvider) {
        Intrinsics.checkNotNullParameter(overPanRangeProvider, "<set-?>");
        this.f6849h = overPanRangeProvider;
    }

    public final void s(boolean z10) {
        this.f6845d = z10;
    }

    public final void t(boolean z10) {
        this.f6847f = z10;
    }
}
