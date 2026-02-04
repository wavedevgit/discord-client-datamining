package wl;

import com.otaliastudios.zoom.OverPanRangeProvider;
import com.otaliastudios.zoom.ScaledPoint;
import com.otaliastudios.zoom.ZoomEngine;
import com.otaliastudios.zoom.ZoomLogger;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.ranges.d;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b extends wl.a {

    /* renamed from: j  reason: collision with root package name */
    public static final a f52482j = new a(null);

    /* renamed from: k  reason: collision with root package name */
    private static final String f52483k;

    /* renamed from: l  reason: collision with root package name */
    private static final ZoomLogger f52484l;

    /* renamed from: b  reason: collision with root package name */
    private final ZoomEngine f52485b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f52486c;

    /* renamed from: d  reason: collision with root package name */
    private boolean f52487d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f52488e;

    /* renamed from: f  reason: collision with root package name */
    private boolean f52489f;

    /* renamed from: g  reason: collision with root package name */
    private int f52490g;

    /* renamed from: h  reason: collision with root package name */
    private OverPanRangeProvider f52491h;

    /* renamed from: i  reason: collision with root package name */
    private final ScaledPoint f52492i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    /* renamed from: wl.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0699b {

        /* renamed from: a  reason: collision with root package name */
        private int f52493a;

        /* renamed from: b  reason: collision with root package name */
        private int f52494b;

        /* renamed from: c  reason: collision with root package name */
        private int f52495c;

        /* renamed from: d  reason: collision with root package name */
        private boolean f52496d;

        public final int a() {
            return this.f52494b;
        }

        public final int b() {
            return this.f52495c;
        }

        public final int c() {
            return this.f52493a;
        }

        public final boolean d() {
            return this.f52496d;
        }

        public final void e(int i10) {
            this.f52494b = i10;
        }

        public final void f(boolean z10) {
            this.f52496d = z10;
        }

        public final void g(int i10) {
            this.f52495c = i10;
        }

        public final void h(int i10) {
            this.f52493a = i10;
        }
    }

    static {
        String TAG = b.class.getSimpleName();
        f52483k = TAG;
        ZoomLogger.a aVar = ZoomLogger.f16907b;
        Intrinsics.checkNotNullExpressionValue(TAG, "TAG");
        f52484l = aVar.a(TAG);
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public b(ZoomEngine engine, Function0 provider) {
        super(provider);
        Intrinsics.checkNotNullParameter(engine, "engine");
        Intrinsics.checkNotNullParameter(provider, "provider");
        this.f52485b = engine;
        this.f52486c = true;
        this.f52487d = true;
        this.f52488e = true;
        this.f52489f = true;
        this.f52490g = 51;
        this.f52491h = OverPanRangeProvider.f16870b;
        this.f52492i = new ScaledPoint(0.0f, 0.0f, 3, null);
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
        vl.b a10 = a();
        if (z10) {
            x10 = a10.w();
        } else {
            x10 = a10.x();
        }
        vl.b a11 = a();
        if (z10) {
            l10 = a11.m();
        } else {
            l10 = a11.l();
        }
        vl.b a12 = a();
        if (z10) {
            o10 = a12.p();
        } else {
            o10 = a12.o();
        }
        if (z10) {
            z12 = this.f52486c;
        } else {
            z12 = this.f52487d;
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
            e10 = com.otaliastudios.zoom.a.f16912a.d(this.f52490g, 0);
        } else {
            e10 = com.otaliastudios.zoom.a.f16912a.e(this.f52490g, 0);
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

    public final void d(boolean z10, C0699b output) {
        float x10;
        float l10;
        float o10;
        int b10;
        Intrinsics.checkNotNullParameter(output, "output");
        vl.b a10 = a();
        if (z10) {
            x10 = a10.w();
        } else {
            x10 = a10.x();
        }
        int i10 = (int) x10;
        vl.b a11 = a();
        if (z10) {
            l10 = a11.m();
        } else {
            l10 = a11.l();
        }
        int i11 = (int) l10;
        vl.b a12 = a();
        if (z10) {
            o10 = a12.p();
        } else {
            o10 = a12.o();
        }
        int i12 = (int) o10;
        boolean z11 = false;
        int c10 = (int) c(z10, false);
        if (z10) {
            b10 = com.otaliastudios.zoom.a.f16912a.a(this.f52490g);
        } else {
            b10 = com.otaliastudios.zoom.a.f16912a.b(this.f52490g);
        }
        if (i12 > i11) {
            output.h(-(i12 - i11));
            output.g(0);
        } else if (com.otaliastudios.zoom.a.f16912a.c(b10)) {
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
        return this.f52490g;
    }

    public final ScaledPoint f() {
        this.f52492i.g(Float.valueOf(c(true, false)), Float.valueOf(c(false, false)));
        return this.f52492i;
    }

    public final boolean g() {
        return this.f52486c;
    }

    public final boolean h() {
        return this.f52488e;
    }

    public final float i() {
        float a10 = this.f52491h.a(this.f52485b, true);
        if (a10 < 0.0f) {
            f52484l.g("Received negative maxHorizontalOverPan value, coercing to 0");
            return d.c(a10, 0.0f);
        }
        return a10;
    }

    public final float j() {
        float a10 = this.f52491h.a(this.f52485b, false);
        if (a10 < 0.0f) {
            f52484l.g("Received negative maxVerticalOverPan value, coercing to 0");
            return d.c(a10, 0.0f);
        }
        return a10;
    }

    public final boolean k() {
        return this.f52487d;
    }

    public final boolean l() {
        return this.f52489f;
    }

    public boolean m() {
        if (!this.f52488e && !this.f52489f) {
            return false;
        }
        return true;
    }

    public boolean n() {
        if (!this.f52486c && !this.f52487d) {
            return false;
        }
        return true;
    }

    public final void o(int i10) {
        this.f52490g = i10;
    }

    public final void p(boolean z10) {
        this.f52486c = z10;
    }

    public final void q(boolean z10) {
        this.f52488e = z10;
    }

    public final void r(OverPanRangeProvider overPanRangeProvider) {
        Intrinsics.checkNotNullParameter(overPanRangeProvider, "<set-?>");
        this.f52491h = overPanRangeProvider;
    }

    public final void s(boolean z10) {
        this.f52487d = z10;
    }

    public final void t(boolean z10) {
        this.f52489f = z10;
    }
}
