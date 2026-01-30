package vl;

import com.otaliastudios.zoom.OverPanRangeProvider;
import com.otaliastudios.zoom.ScaledPoint;
import com.otaliastudios.zoom.ZoomEngine;
import com.otaliastudios.zoom.ZoomLogger;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.ranges.d;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b extends vl.a {

    /* renamed from: j  reason: collision with root package name */
    public static final a f51187j = new a(null);

    /* renamed from: k  reason: collision with root package name */
    private static final String f51188k;

    /* renamed from: l  reason: collision with root package name */
    private static final ZoomLogger f51189l;

    /* renamed from: b  reason: collision with root package name */
    private final ZoomEngine f51190b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f51191c;

    /* renamed from: d  reason: collision with root package name */
    private boolean f51192d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f51193e;

    /* renamed from: f  reason: collision with root package name */
    private boolean f51194f;

    /* renamed from: g  reason: collision with root package name */
    private int f51195g;

    /* renamed from: h  reason: collision with root package name */
    private OverPanRangeProvider f51196h;

    /* renamed from: i  reason: collision with root package name */
    private final ScaledPoint f51197i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    /* renamed from: vl.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0679b {

        /* renamed from: a  reason: collision with root package name */
        private int f51198a;

        /* renamed from: b  reason: collision with root package name */
        private int f51199b;

        /* renamed from: c  reason: collision with root package name */
        private int f51200c;

        /* renamed from: d  reason: collision with root package name */
        private boolean f51201d;

        public final int a() {
            return this.f51199b;
        }

        public final int b() {
            return this.f51200c;
        }

        public final int c() {
            return this.f51198a;
        }

        public final boolean d() {
            return this.f51201d;
        }

        public final void e(int i10) {
            this.f51199b = i10;
        }

        public final void f(boolean z10) {
            this.f51201d = z10;
        }

        public final void g(int i10) {
            this.f51200c = i10;
        }

        public final void h(int i10) {
            this.f51198a = i10;
        }
    }

    static {
        String TAG = b.class.getSimpleName();
        f51188k = TAG;
        ZoomLogger.a aVar = ZoomLogger.f18306b;
        Intrinsics.checkNotNullExpressionValue(TAG, "TAG");
        f51189l = aVar.a(TAG);
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public b(ZoomEngine engine, Function0 provider) {
        super(provider);
        Intrinsics.checkNotNullParameter(engine, "engine");
        Intrinsics.checkNotNullParameter(provider, "provider");
        this.f51190b = engine;
        this.f51191c = true;
        this.f51192d = true;
        this.f51193e = true;
        this.f51194f = true;
        this.f51195g = 51;
        this.f51196h = OverPanRangeProvider.f18269b;
        this.f51197i = new ScaledPoint(0.0f, 0.0f, 3, null);
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
        ul.b a10 = a();
        if (z10) {
            x10 = a10.w();
        } else {
            x10 = a10.x();
        }
        ul.b a11 = a();
        if (z10) {
            l10 = a11.m();
        } else {
            l10 = a11.l();
        }
        ul.b a12 = a();
        if (z10) {
            o10 = a12.p();
        } else {
            o10 = a12.o();
        }
        if (z10) {
            z12 = this.f51191c;
        } else {
            z12 = this.f51192d;
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
            e10 = com.otaliastudios.zoom.a.f18311a.d(this.f51195g, 0);
        } else {
            e10 = com.otaliastudios.zoom.a.f18311a.e(this.f51195g, 0);
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

    public final void d(boolean z10, C0679b output) {
        float x10;
        float l10;
        float o10;
        int b10;
        Intrinsics.checkNotNullParameter(output, "output");
        ul.b a10 = a();
        if (z10) {
            x10 = a10.w();
        } else {
            x10 = a10.x();
        }
        int i10 = (int) x10;
        ul.b a11 = a();
        if (z10) {
            l10 = a11.m();
        } else {
            l10 = a11.l();
        }
        int i11 = (int) l10;
        ul.b a12 = a();
        if (z10) {
            o10 = a12.p();
        } else {
            o10 = a12.o();
        }
        int i12 = (int) o10;
        boolean z11 = false;
        int c10 = (int) c(z10, false);
        if (z10) {
            b10 = com.otaliastudios.zoom.a.f18311a.a(this.f51195g);
        } else {
            b10 = com.otaliastudios.zoom.a.f18311a.b(this.f51195g);
        }
        if (i12 > i11) {
            output.h(-(i12 - i11));
            output.g(0);
        } else if (com.otaliastudios.zoom.a.f18311a.c(b10)) {
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
        return this.f51195g;
    }

    public final ScaledPoint f() {
        this.f51197i.g(Float.valueOf(c(true, false)), Float.valueOf(c(false, false)));
        return this.f51197i;
    }

    public final boolean g() {
        return this.f51191c;
    }

    public final boolean h() {
        return this.f51193e;
    }

    public final float i() {
        float a10 = this.f51196h.a(this.f51190b, true);
        if (a10 < 0.0f) {
            f51189l.g("Received negative maxHorizontalOverPan value, coercing to 0");
            return d.c(a10, 0.0f);
        }
        return a10;
    }

    public final float j() {
        float a10 = this.f51196h.a(this.f51190b, false);
        if (a10 < 0.0f) {
            f51189l.g("Received negative maxVerticalOverPan value, coercing to 0");
            return d.c(a10, 0.0f);
        }
        return a10;
    }

    public final boolean k() {
        return this.f51192d;
    }

    public final boolean l() {
        return this.f51194f;
    }

    public boolean m() {
        if (!this.f51193e && !this.f51194f) {
            return false;
        }
        return true;
    }

    public boolean n() {
        if (!this.f51191c && !this.f51192d) {
            return false;
        }
        return true;
    }

    public final void o(int i10) {
        this.f51195g = i10;
    }

    public final void p(boolean z10) {
        this.f51191c = z10;
    }

    public final void q(boolean z10) {
        this.f51193e = z10;
    }

    public final void r(OverPanRangeProvider overPanRangeProvider) {
        Intrinsics.checkNotNullParameter(overPanRangeProvider, "<set-?>");
        this.f51196h = overPanRangeProvider;
    }

    public final void s(boolean z10) {
        this.f51192d = z10;
    }

    public final void t(boolean z10) {
        this.f51194f = z10;
    }
}
