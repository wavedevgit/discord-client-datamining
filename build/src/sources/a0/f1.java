package a0;

import a0.r0;
import androidx.camera.core.f;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class f1 implements x2, i1, e0.n {
    public static final r0.a J = r0.a.a("camerax.core.imageAnalysis.backpressureStrategy", f.b.class);
    public static final r0.a K = r0.a.a("camerax.core.imageAnalysis.imageQueueDepth", Integer.TYPE);
    public static final r0.a L = r0.a.a("camerax.core.imageAnalysis.imageReaderProxyProvider", x.u0.class);
    public static final r0.a M = r0.a.a("camerax.core.imageAnalysis.outputImageFormat", f.e.class);
    public static final r0.a N = r0.a.a("camerax.core.imageAnalysis.onePixelShiftEnabled", Boolean.class);
    public static final r0.a O = r0.a.a("camerax.core.imageAnalysis.outputImageRotationEnabled", Boolean.class);
    private final w1 I;

    public f1(w1 w1Var) {
        this.I = w1Var;
    }

    public int W(int i10) {
        return ((Integer) e(J, Integer.valueOf(i10))).intValue();
    }

    public int X(int i10) {
        return ((Integer) e(K, Integer.valueOf(i10))).intValue();
    }

    public x.u0 Y() {
        android.support.v4.media.session.b.a(e(L, null));
        return null;
    }

    public Boolean Z(Boolean bool) {
        return (Boolean) e(N, bool);
    }

    public int a0(int i10) {
        return ((Integer) e(M, Integer.valueOf(i10))).intValue();
    }

    public Boolean b0(Boolean bool) {
        return (Boolean) e(O, bool);
    }

    @Override // a0.e2
    public r0 getConfig() {
        return this.I;
    }

    @Override // a0.h1
    public int getInputFormat() {
        return 35;
    }
}
