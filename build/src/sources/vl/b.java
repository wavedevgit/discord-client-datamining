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
    public static final a f51171j = new a(null);

    /* renamed from: k  reason: collision with root package name */
    private static final String f51172k;

    /* renamed from: l  reason: collision with root package name */
    private static final ZoomLogger f51173l;

    /* renamed from: b  reason: collision with root package name */
    private final ZoomEngine f51174b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f51175c;

    /* renamed from: d  reason: collision with root package name */
    private boolean f51176d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f51177e;

    /* renamed from: f  reason: collision with root package name */
    private boolean f51178f;

    /* renamed from: g  reason: collision with root package name */
    private int f51179g;

    /* renamed from: h  reason: collision with root package name */
    private OverPanRangeProvider f51180h;

    /* renamed from: i  reason: collision with root package name */
    private final ScaledPoint f51181i;

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
        private int f51182a;

        /* renamed from: b  reason: collision with root package name */
        private int f51183b;

        /* renamed from: c  reason: collision with root package name */
        private int f51184c;

        /* renamed from: d  reason: collision with root package name */
        private boolean f51185d;

        public final int a() {
            return this.f51183b;
        }

        public final int b() {
            return this.f51184c;
        }

        public final int c() {
            return this.f51182a;
        }

        public final boolean d() {
            return this.f51185d;
        }

        public final void e(int i10) {
            this.f51183b = i10;
        }

        public final void f(boolean z10) {
            this.f51185d = z10;
        }

        public final void g(int i10) {
            this.f51184c = i10;
        }

        public final void h(int i10) {
            this.f51182a = i10;
        }
    }

    static {
        String TAG = b.class.getSimpleName();
        f51172k = TAG;
        ZoomLogger.a aVar = ZoomLogger.f18306b;
        Intrinsics.checkNotNullExpressionValue(TAG, "TAG");
        f51173l = aVar.a(TAG);
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public b(ZoomEngine engine, Function0 provider) {
        super(provider);
        Intrinsics.checkNotNullParameter(engine, "engine");
        Intrinsics.checkNotNullParameter(provider, "provider");
        this.f51174b = engine;
        this.f51175c = true;
        this.f51176d = true;
        this.f51177e = true;
        this.f51178f = true;
        this.f51179g = 51;
        this.f51180h = OverPanRangeProvider.f18269b;
        this.f51181i = new ScaledPoint(0.0f, 0.0f, 3, null);
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
            z12 = this.f51175c;
        } else {
            z12 = this.f51176d;
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
            e10 = com.otaliastudios.zoom.a.f18311a.d(this.f51179g, 0);
        } else {
            e10 = com.otaliastudios.zoom.a.f18311a.e(this.f51179g, 0);
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
            b10 = com.otaliastudios.zoom.a.f18311a.a(this.f51179g);
        } else {
            b10 = com.otaliastudios.zoom.a.f18311a.b(this.f51179g);
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
        return this.f51179g;
    }

    public final ScaledPoint f() {
        this.f51181i.g(Float.valueOf(c(true, false)), Float.valueOf(c(false, false)));
        return this.f51181i;
    }

    public final boolean g() {
        return this.f51175c;
    }

    public final boolean h() {
        return this.f51177e;
    }

    public final float i() {
        float a10 = this.f51180h.a(this.f51174b, true);
        if (a10 < 0.0f) {
            f51173l.g("Received negative maxHorizontalOverPan value, coercing to 0");
            return d.c(a10, 0.0f);
        }
        return a10;
    }

    public final float j() {
        float a10 = this.f51180h.a(this.f51174b, false);
        if (a10 < 0.0f) {
            f51173l.g("Received negative maxVerticalOverPan value, coercing to 0");
            return d.c(a10, 0.0f);
        }
        return a10;
    }

    public final boolean k() {
        return this.f51176d;
    }

    public final boolean l() {
        return this.f51178f;
    }

    public boolean m() {
        if (!this.f51177e && !this.f51178f) {
            return false;
        }
        return true;
    }

    public boolean n() {
        if (!this.f51175c && !this.f51176d) {
            return false;
        }
        return true;
    }

    public final void o(int i10) {
        this.f51179g = i10;
    }

    public final void p(boolean z10) {
        this.f51175c = z10;
    }

    public final void q(boolean z10) {
        this.f51177e = z10;
    }

    public final void r(OverPanRangeProvider overPanRangeProvider) {
        Intrinsics.checkNotNullParameter(overPanRangeProvider, "<set-?>");
        this.f51180h = overPanRangeProvider;
    }

    public final void s(boolean z10) {
        this.f51176d = z10;
    }

    public final void t(boolean z10) {
        this.f51178f = z10;
    }
}
