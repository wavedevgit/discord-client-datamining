package a0;

import a0.i2;
import a0.p0;
import a0.r0;
import a0.y2;
import android.util.Range;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public interface x2 extends e0.m, h1 {
    public static final r0.a A;
    public static final r0.a B;
    public static final r0.a C;
    public static final r0.a D;

    /* renamed from: t  reason: collision with root package name */
    public static final r0.a f317t = r0.a.a("camerax.core.useCase.defaultSessionConfig", i2.class);

    /* renamed from: u  reason: collision with root package name */
    public static final r0.a f318u = r0.a.a("camerax.core.useCase.defaultCaptureConfig", p0.class);

    /* renamed from: v  reason: collision with root package name */
    public static final r0.a f319v = r0.a.a("camerax.core.useCase.sessionConfigUnpacker", i2.e.class);

    /* renamed from: w  reason: collision with root package name */
    public static final r0.a f320w = r0.a.a("camerax.core.useCase.captureConfigUnpacker", p0.b.class);

    /* renamed from: x  reason: collision with root package name */
    public static final r0.a f321x;

    /* renamed from: y  reason: collision with root package name */
    public static final r0.a f322y;

    /* renamed from: z  reason: collision with root package name */
    public static final r0.a f323z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface a extends x.a0 {
        x2 b();
    }

    static {
        Class cls = Integer.TYPE;
        f321x = r0.a.a("camerax.core.useCase.surfaceOccupancyPriority", cls);
        f322y = r0.a.a("camerax.core.useCase.targetFrameRate", Range.class);
        Class cls2 = Boolean.TYPE;
        f323z = r0.a.a("camerax.core.useCase.zslDisabled", cls2);
        A = r0.a.a("camerax.core.useCase.highResolutionDisabled", cls2);
        B = r0.a.a("camerax.core.useCase.captureType", y2.b.class);
        C = r0.a.a("camerax.core.useCase.previewStabilizationMode", cls);
        D = r0.a.a("camerax.core.useCase.videoStabilizationMode", cls);
    }

    default i2 G() {
        return (i2) a(f317t);
    }

    default boolean H(boolean z10) {
        return ((Boolean) e(f323z, Boolean.valueOf(z10))).booleanValue();
    }

    default y2.b L() {
        return (y2.b) a(B);
    }

    default boolean P(boolean z10) {
        return ((Boolean) e(A, Boolean.valueOf(z10))).booleanValue();
    }

    default p0 R(p0 p0Var) {
        return (p0) e(f318u, p0Var);
    }

    default i2 j(i2 i2Var) {
        return (i2) e(f317t, i2Var);
    }

    default i2.e n(i2.e eVar) {
        return (i2.e) e(f319v, eVar);
    }

    default p0.b s(p0.b bVar) {
        return (p0.b) e(f320w, bVar);
    }

    default int t() {
        return ((Integer) e(D, 0)).intValue();
    }

    default Range u(Range range) {
        return (Range) e(f322y, range);
    }

    default int w(int i10) {
        return ((Integer) e(f321x, Integer.valueOf(i10))).intValue();
    }

    default int y() {
        return ((Integer) e(C, 0)).intValue();
    }
}
