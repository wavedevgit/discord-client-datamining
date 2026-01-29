package a0;

import a0.r0;
import java.util.concurrent.Executor;
import x.n0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class g1 implements x2, i1, e0.h {
    public static final r0.a J;
    public static final r0.a K;
    public static final r0.a L;
    public static final r0.a M;
    public static final r0.a N;
    public static final r0.a O;
    public static final r0.a P;
    public static final r0.a Q;
    public static final r0.a R;
    public static final r0.a S;
    public static final r0.a T;
    public static final r0.a U;
    public static final r0.a V;
    private final w1 I;

    static {
        Class cls = Integer.TYPE;
        J = r0.a.a("camerax.core.imageCapture.captureMode", cls);
        K = r0.a.a("camerax.core.imageCapture.flashMode", cls);
        L = r0.a.a("camerax.core.imageCapture.captureBundle", o0.class);
        M = r0.a.a("camerax.core.imageCapture.bufferFormat", Integer.class);
        N = r0.a.a("camerax.core.imageCapture.outputFormat", Integer.class);
        O = r0.a.a("camerax.core.imageCapture.maxCaptureStages", Integer.class);
        P = r0.a.a("camerax.core.imageCapture.imageReaderProxyProvider", x.u0.class);
        Q = r0.a.a("camerax.core.imageCapture.useSoftwareJpegEncoder", Boolean.TYPE);
        R = r0.a.a("camerax.core.imageCapture.flashType", cls);
        S = r0.a.a("camerax.core.imageCapture.jpegCompressionQuality", cls);
        T = r0.a.a("camerax.core.imageCapture.screenFlash", n0.i.class);
        U = r0.a.a("camerax.core.useCase.postviewResolutionSelector", m0.c.class);
        V = r0.a.a("camerax.core.useCase.isPostviewEnabled", Boolean.class);
    }

    public g1(w1 w1Var) {
        this.I = w1Var;
    }

    public o0 W(o0 o0Var) {
        return (o0) e(L, o0Var);
    }

    public int X() {
        return ((Integer) a(J)).intValue();
    }

    public int Y(int i10) {
        return ((Integer) e(K, Integer.valueOf(i10))).intValue();
    }

    public int Z(int i10) {
        return ((Integer) e(R, Integer.valueOf(i10))).intValue();
    }

    public x.u0 a0() {
        android.support.v4.media.session.b.a(e(P, null));
        return null;
    }

    public Executor b0(Executor executor) {
        return (Executor) e(e0.h.E, executor);
    }

    public int c0() {
        return ((Integer) a(S)).intValue();
    }

    public n0.i d0() {
        return (n0.i) e(T, null);
    }

    public boolean e0() {
        return h(J);
    }

    @Override // a0.e2
    public r0 getConfig() {
        return this.I;
    }

    @Override // a0.h1
    public int getInputFormat() {
        return ((Integer) a(h1.f76h)).intValue();
    }
}
