package androidx.constraintlayout.core.widgets;

import androidx.constraintlayout.core.widgets.d;
import com.facebook.react.uimanager.ViewProps;
import com.facebook.react.views.textinput.ReactEditTextInputConnectionWrapper;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.Iterator;
import l1.l;
import l1.n;
import l1.p;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class ConstraintWidget {
    public static float K0 = 0.5f;
    int A0;
    boolean B0;
    boolean C0;
    public float[] D0;
    protected ConstraintWidget[] E0;
    protected ConstraintWidget[] F0;
    ConstraintWidget G0;
    ConstraintWidget H0;
    public int I0;
    public int J0;
    private boolean K;
    public d V;
    public d[] W;
    protected ArrayList X;
    private boolean[] Y;
    public b[] Z;

    /* renamed from: a0  reason: collision with root package name */
    public ConstraintWidget f2696a0;

    /* renamed from: b0  reason: collision with root package name */
    int f2698b0;

    /* renamed from: c  reason: collision with root package name */
    public l1.c f2699c;

    /* renamed from: c0  reason: collision with root package name */
    int f2700c0;

    /* renamed from: d  reason: collision with root package name */
    public l1.c f2701d;

    /* renamed from: d0  reason: collision with root package name */
    public float f2702d0;

    /* renamed from: e0  reason: collision with root package name */
    protected int f2704e0;

    /* renamed from: f0  reason: collision with root package name */
    protected int f2706f0;

    /* renamed from: g0  reason: collision with root package name */
    protected int f2708g0;

    /* renamed from: h0  reason: collision with root package name */
    int f2710h0;

    /* renamed from: i0  reason: collision with root package name */
    int f2712i0;

    /* renamed from: j0  reason: collision with root package name */
    protected int f2714j0;

    /* renamed from: k0  reason: collision with root package name */
    protected int f2716k0;

    /* renamed from: l0  reason: collision with root package name */
    int f2718l0;

    /* renamed from: m0  reason: collision with root package name */
    protected int f2720m0;

    /* renamed from: n0  reason: collision with root package name */
    protected int f2722n0;

    /* renamed from: o  reason: collision with root package name */
    public String f2723o;

    /* renamed from: o0  reason: collision with root package name */
    float f2724o0;

    /* renamed from: p0  reason: collision with root package name */
    float f2726p0;

    /* renamed from: q0  reason: collision with root package name */
    private Object f2728q0;

    /* renamed from: r0  reason: collision with root package name */
    private int f2730r0;

    /* renamed from: s0  reason: collision with root package name */
    private int f2732s0;

    /* renamed from: t0  reason: collision with root package name */
    private boolean f2734t0;

    /* renamed from: u0  reason: collision with root package name */
    private String f2736u0;

    /* renamed from: v0  reason: collision with root package name */
    private String f2738v0;

    /* renamed from: w0  reason: collision with root package name */
    boolean f2740w0;

    /* renamed from: x0  reason: collision with root package name */
    boolean f2742x0;

    /* renamed from: y0  reason: collision with root package name */
    boolean f2744y0;

    /* renamed from: z0  reason: collision with root package name */
    int f2746z0;

    /* renamed from: a  reason: collision with root package name */
    public boolean f2695a = false;

    /* renamed from: b  reason: collision with root package name */
    public p[] f2697b = new p[2];

    /* renamed from: e  reason: collision with root package name */
    public l f2703e = null;

    /* renamed from: f  reason: collision with root package name */
    public n f2705f = null;

    /* renamed from: g  reason: collision with root package name */
    public boolean[] f2707g = {true, true};

    /* renamed from: h  reason: collision with root package name */
    boolean f2709h = false;

    /* renamed from: i  reason: collision with root package name */
    private boolean f2711i = true;

    /* renamed from: j  reason: collision with root package name */
    private boolean f2713j = false;

    /* renamed from: k  reason: collision with root package name */
    private boolean f2715k = true;

    /* renamed from: l  reason: collision with root package name */
    private int f2717l = -1;

    /* renamed from: m  reason: collision with root package name */
    private int f2719m = -1;

    /* renamed from: n  reason: collision with root package name */
    public j1.a f2721n = new j1.a(this);

    /* renamed from: p  reason: collision with root package name */
    private boolean f2725p = false;

    /* renamed from: q  reason: collision with root package name */
    private boolean f2727q = false;

    /* renamed from: r  reason: collision with root package name */
    private boolean f2729r = false;

    /* renamed from: s  reason: collision with root package name */
    private boolean f2731s = false;

    /* renamed from: t  reason: collision with root package name */
    public int f2733t = -1;

    /* renamed from: u  reason: collision with root package name */
    public int f2735u = -1;

    /* renamed from: v  reason: collision with root package name */
    private int f2737v = 0;

    /* renamed from: w  reason: collision with root package name */
    public int f2739w = 0;

    /* renamed from: x  reason: collision with root package name */
    public int f2741x = 0;

    /* renamed from: y  reason: collision with root package name */
    public int[] f2743y = new int[2];

    /* renamed from: z  reason: collision with root package name */
    public int f2745z = 0;
    public int A = 0;
    public float B = 1.0f;
    public int C = 0;
    public int D = 0;
    public float E = 1.0f;
    int F = -1;
    float G = 1.0f;
    private int[] H = {Integer.MAX_VALUE, Integer.MAX_VALUE};
    public float I = Float.NaN;
    private boolean J = false;
    private boolean L = false;
    private int M = 0;
    private int N = 0;
    public d O = new d(this, d.a.LEFT);
    public d P = new d(this, d.a.TOP);
    public d Q = new d(this, d.a.RIGHT);
    public d R = new d(this, d.a.BOTTOM);
    public d S = new d(this, d.a.BASELINE);
    d T = new d(this, d.a.CENTER_X);
    d U = new d(this, d.a.CENTER_Y);

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f2747a;

        static {
            int[] iArr = new int[d.a.values().length];
            f2747a = iArr;
            try {
                iArr[d.a.LEFT.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f2747a[d.a.TOP.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f2747a[d.a.RIGHT.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                f2747a[d.a.BOTTOM.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                f2747a[d.a.BASELINE.ordinal()] = 5;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                f2747a[d.a.CENTER.ordinal()] = 6;
            } catch (NoSuchFieldError unused6) {
            }
            try {
                f2747a[d.a.CENTER_X.ordinal()] = 7;
            } catch (NoSuchFieldError unused7) {
            }
            try {
                f2747a[d.a.CENTER_Y.ordinal()] = 8;
            } catch (NoSuchFieldError unused8) {
            }
            try {
                f2747a[d.a.NONE.ordinal()] = 9;
            } catch (NoSuchFieldError unused9) {
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public enum b {
        FIXED,
        WRAP_CONTENT,
        MATCH_CONSTRAINT,
        MATCH_PARENT
    }

    public ConstraintWidget() {
        d dVar = new d(this, d.a.CENTER);
        this.V = dVar;
        this.W = new d[]{this.O, this.Q, this.P, this.R, this.S, dVar};
        this.X = new ArrayList();
        this.Y = new boolean[2];
        b bVar = b.FIXED;
        this.Z = new b[]{bVar, bVar};
        this.f2696a0 = null;
        this.f2698b0 = 0;
        this.f2700c0 = 0;
        this.f2702d0 = 0.0f;
        this.f2704e0 = -1;
        this.f2706f0 = 0;
        this.f2708g0 = 0;
        this.f2710h0 = 0;
        this.f2712i0 = 0;
        this.f2714j0 = 0;
        this.f2716k0 = 0;
        this.f2718l0 = 0;
        float f10 = K0;
        this.f2724o0 = f10;
        this.f2726p0 = f10;
        this.f2730r0 = 0;
        this.f2732s0 = 0;
        this.f2734t0 = false;
        this.f2736u0 = null;
        this.f2738v0 = null;
        this.f2744y0 = false;
        this.f2746z0 = 0;
        this.A0 = 0;
        this.D0 = new float[]{-1.0f, -1.0f};
        this.E0 = new ConstraintWidget[]{null, null};
        this.F0 = new ConstraintWidget[]{null, null};
        this.G0 = null;
        this.H0 = null;
        this.I0 = -1;
        this.J0 = -1;
        d();
    }

    private void A0(StringBuilder sb2, String str, float f10, int i10) {
        if (f10 == 0.0f) {
            return;
        }
        sb2.append(str);
        sb2.append(" :  [");
        sb2.append(f10);
        sb2.append(",");
        sb2.append(i10);
        sb2.append("");
        sb2.append("],\n");
    }

    private void P(StringBuilder sb2, String str, int i10, int i11, int i12, int i13, int i14, int i15, float f10, b bVar, float f11) {
        sb2.append(str);
        sb2.append(" :  {\n");
        z0(sb2, "      behavior", bVar.toString(), b.FIXED.toString());
        y0(sb2, "      size", i10, 0);
        y0(sb2, "      min", i11, 0);
        y0(sb2, "      max", i12, Integer.MAX_VALUE);
        y0(sb2, "      matchMin", i14, 0);
        y0(sb2, "      matchDef", i15, 0);
        x0(sb2, "      matchPercent", f10, 1.0f);
        sb2.append("    },\n");
    }

    private void Q(StringBuilder sb2, String str, d dVar) {
        if (dVar.f2797f == null) {
            return;
        }
        sb2.append("    ");
        sb2.append(str);
        sb2.append(" : [ '");
        sb2.append(dVar.f2797f);
        sb2.append("'");
        if (dVar.f2799h != Integer.MIN_VALUE || dVar.f2798g != 0) {
            sb2.append(",");
            sb2.append(dVar.f2798g);
            if (dVar.f2799h != Integer.MIN_VALUE) {
                sb2.append(",");
                sb2.append(dVar.f2799h);
                sb2.append(",");
            }
        }
        sb2.append(" ] ,\n");
    }

    private void d() {
        this.X.add(this.O);
        this.X.add(this.P);
        this.X.add(this.Q);
        this.X.add(this.R);
        this.X.add(this.T);
        this.X.add(this.U);
        this.X.add(this.V);
        this.X.add(this.S);
    }

    private boolean f0(int i10) {
        d dVar;
        d dVar2;
        int i11 = i10 * 2;
        d[] dVarArr = this.W;
        d dVar3 = dVarArr[i11];
        d dVar4 = dVar3.f2797f;
        if (dVar4 != null && dVar4.f2797f != dVar3 && (dVar2 = (dVar = dVarArr[i11 + 1]).f2797f) != null && dVar2.f2797f == dVar) {
            return true;
        }
        return false;
    }

    /* JADX WARN: Removed duplicated region for block: B:327:0x04d9 A[ADDED_TO_REGION] */
    /* JADX WARN: Removed duplicated region for block: B:376:? A[ADDED_TO_REGION, RETURN, SYNTHETIC] */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private void i(h1.d r29, boolean r30, boolean r31, boolean r32, boolean r33, h1.h r34, h1.h r35, androidx.constraintlayout.core.widgets.ConstraintWidget.b r36, boolean r37, androidx.constraintlayout.core.widgets.d r38, androidx.constraintlayout.core.widgets.d r39, int r40, int r41, int r42, int r43, float r44, boolean r45, boolean r46, boolean r47, boolean r48, boolean r49, int r50, int r51, int r52, int r53, float r54, boolean r55) {
        /*
            Method dump skipped, instructions count: 1358
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: androidx.constraintlayout.core.widgets.ConstraintWidget.i(h1.d, boolean, boolean, boolean, boolean, h1.h, h1.h, androidx.constraintlayout.core.widgets.ConstraintWidget$b, boolean, androidx.constraintlayout.core.widgets.d, androidx.constraintlayout.core.widgets.d, int, int, int, int, float, boolean, boolean, boolean, boolean, boolean, int, int, int, int, float, boolean):void");
    }

    private void x0(StringBuilder sb2, String str, float f10, float f11) {
        if (f10 == f11) {
            return;
        }
        sb2.append(str);
        sb2.append(" :   ");
        sb2.append(f10);
        sb2.append(",\n");
    }

    private void y0(StringBuilder sb2, String str, int i10, int i11) {
        if (i10 == i11) {
            return;
        }
        sb2.append(str);
        sb2.append(" :   ");
        sb2.append(i10);
        sb2.append(",\n");
    }

    private void z0(StringBuilder sb2, String str, String str2, String str3) {
        if (str3.equals(str2)) {
            return;
        }
        sb2.append(str);
        sb2.append(" :   ");
        sb2.append(str2);
        sb2.append(",\n");
    }

    public b A() {
        return this.Z[0];
    }

    public int B() {
        int i10;
        d dVar = this.O;
        if (dVar != null) {
            i10 = dVar.f2798g;
        } else {
            i10 = 0;
        }
        d dVar2 = this.Q;
        if (dVar2 != null) {
            return i10 + dVar2.f2798g;
        }
        return i10;
    }

    public void B0(int i10) {
        boolean z10;
        this.f2718l0 = i10;
        if (i10 > 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        this.J = z10;
    }

    public int C() {
        return this.M;
    }

    public void C0(Object obj) {
        this.f2728q0 = obj;
    }

    public int D() {
        return this.N;
    }

    public void D0(String str) {
        this.f2736u0 = str;
    }

    public int E(int i10) {
        if (i10 == 0) {
            return W();
        }
        if (i10 == 1) {
            return x();
        }
        return 0;
    }

    /* JADX WARN: Unsupported multi-entry loop pattern (BACK_EDGE: B:39:0x0086 -> B:40:0x0087). Please submit an issue!!! */
    public void E0(String str) {
        float f10;
        int i10 = 0;
        if (str != null && str.length() != 0) {
            int length = str.length();
            int indexOf = str.indexOf(44);
            int i11 = 0;
            int i12 = -1;
            if (indexOf > 0 && indexOf < length - 1) {
                String substring = str.substring(0, indexOf);
                if (!substring.equalsIgnoreCase("W")) {
                    if (substring.equalsIgnoreCase("H")) {
                        i11 = 1;
                    } else {
                        i11 = -1;
                    }
                }
                i12 = i11;
                i11 = indexOf + 1;
            }
            int indexOf2 = str.indexOf(58);
            if (indexOf2 >= 0 && indexOf2 < length - 1) {
                String substring2 = str.substring(i11, indexOf2);
                String substring3 = str.substring(indexOf2 + 1);
                if (substring2.length() > 0 && substring3.length() > 0) {
                    float parseFloat = Float.parseFloat(substring2);
                    float parseFloat2 = Float.parseFloat(substring3);
                    if (parseFloat > 0.0f && parseFloat2 > 0.0f) {
                        if (i12 == 1) {
                            f10 = Math.abs(parseFloat2 / parseFloat);
                        } else {
                            f10 = Math.abs(parseFloat / parseFloat2);
                        }
                    }
                }
                f10 = i10;
            } else {
                String substring4 = str.substring(i11);
                if (substring4.length() > 0) {
                    f10 = Float.parseFloat(substring4);
                }
                f10 = i10;
            }
            i10 = (f10 > i10 ? 1 : (f10 == i10 ? 0 : -1));
            if (i10 > 0) {
                this.f2702d0 = f10;
                this.f2704e0 = i12;
                return;
            }
            return;
        }
        this.f2702d0 = 0.0f;
    }

    public int F() {
        return this.H[1];
    }

    public void F0(int i10) {
        if (!this.J) {
            return;
        }
        int i11 = i10 - this.f2718l0;
        int i12 = this.f2700c0 + i11;
        this.f2708g0 = i11;
        this.P.t(i11);
        this.R.t(i12);
        this.S.t(i10);
        this.f2727q = true;
    }

    public int G() {
        return this.H[0];
    }

    public void G0(int i10, int i11) {
        if (this.f2725p) {
            return;
        }
        this.O.t(i10);
        this.Q.t(i11);
        this.f2706f0 = i10;
        this.f2698b0 = i11 - i10;
        this.f2725p = true;
    }

    public int H() {
        return this.f2722n0;
    }

    public void H0(int i10) {
        this.O.t(i10);
        this.f2706f0 = i10;
    }

    public int I() {
        return this.f2720m0;
    }

    public void I0(int i10) {
        this.P.t(i10);
        this.f2708g0 = i10;
    }

    public ConstraintWidget J(int i10) {
        d dVar;
        d dVar2;
        if (i10 == 0) {
            d dVar3 = this.Q;
            d dVar4 = dVar3.f2797f;
            if (dVar4 != null && dVar4.f2797f == dVar3) {
                return dVar4.f2795d;
            }
            return null;
        } else if (i10 == 1 && (dVar2 = (dVar = this.R).f2797f) != null && dVar2.f2797f == dVar) {
            return dVar2.f2795d;
        } else {
            return null;
        }
    }

    public void J0(int i10, int i11) {
        if (this.f2727q) {
            return;
        }
        this.P.t(i10);
        this.R.t(i11);
        this.f2708g0 = i10;
        this.f2700c0 = i11 - i10;
        if (this.J) {
            this.S.t(i10 + this.f2718l0);
        }
        this.f2727q = true;
    }

    public ConstraintWidget K() {
        return this.f2696a0;
    }

    public void K0(int i10, int i11, int i12, int i13) {
        int i14;
        int i15;
        int i16 = i12 - i10;
        int i17 = i13 - i11;
        this.f2706f0 = i10;
        this.f2708g0 = i11;
        if (this.f2732s0 == 8) {
            this.f2698b0 = 0;
            this.f2700c0 = 0;
            return;
        }
        b[] bVarArr = this.Z;
        b bVar = bVarArr[0];
        b bVar2 = b.FIXED;
        if (bVar == bVar2 && i16 < (i15 = this.f2698b0)) {
            i16 = i15;
        }
        if (bVarArr[1] == bVar2 && i17 < (i14 = this.f2700c0)) {
            i17 = i14;
        }
        this.f2698b0 = i16;
        this.f2700c0 = i17;
        int i18 = this.f2722n0;
        if (i17 < i18) {
            this.f2700c0 = i18;
        }
        int i19 = this.f2720m0;
        if (i16 < i19) {
            this.f2698b0 = i19;
        }
        int i20 = this.A;
        if (i20 > 0 && bVar == b.MATCH_CONSTRAINT) {
            this.f2698b0 = Math.min(this.f2698b0, i20);
        }
        int i21 = this.D;
        if (i21 > 0 && this.Z[1] == b.MATCH_CONSTRAINT) {
            this.f2700c0 = Math.min(this.f2700c0, i21);
        }
        int i22 = this.f2698b0;
        if (i16 != i22) {
            this.f2717l = i22;
        }
        int i23 = this.f2700c0;
        if (i17 != i23) {
            this.f2719m = i23;
        }
    }

    public ConstraintWidget L(int i10) {
        d dVar;
        d dVar2;
        if (i10 == 0) {
            d dVar3 = this.O;
            d dVar4 = dVar3.f2797f;
            if (dVar4 != null && dVar4.f2797f == dVar3) {
                return dVar4.f2795d;
            }
            return null;
        } else if (i10 == 1 && (dVar2 = (dVar = this.P).f2797f) != null && dVar2.f2797f == dVar) {
            return dVar2.f2795d;
        } else {
            return null;
        }
    }

    public void L0(boolean z10) {
        this.J = z10;
    }

    public int M() {
        return X() + this.f2698b0;
    }

    public void M0(int i10) {
        this.f2700c0 = i10;
        int i11 = this.f2722n0;
        if (i10 < i11) {
            this.f2700c0 = i11;
        }
    }

    public p N(int i10) {
        if (i10 == 0) {
            return this.f2703e;
        }
        if (i10 == 1) {
            return this.f2705f;
        }
        return null;
    }

    public void N0(float f10) {
        this.f2724o0 = f10;
    }

    public void O(StringBuilder sb2) {
        sb2.append("  " + this.f2723o + ":{\n");
        StringBuilder sb3 = new StringBuilder();
        sb3.append("    actualWidth:");
        sb3.append(this.f2698b0);
        sb2.append(sb3.toString());
        sb2.append(ReactEditTextInputConnectionWrapper.NEWLINE_RAW_VALUE);
        sb2.append("    actualHeight:" + this.f2700c0);
        sb2.append(ReactEditTextInputConnectionWrapper.NEWLINE_RAW_VALUE);
        sb2.append("    actualLeft:" + this.f2706f0);
        sb2.append(ReactEditTextInputConnectionWrapper.NEWLINE_RAW_VALUE);
        sb2.append("    actualTop:" + this.f2708g0);
        sb2.append(ReactEditTextInputConnectionWrapper.NEWLINE_RAW_VALUE);
        Q(sb2, ViewProps.LEFT, this.O);
        Q(sb2, ViewProps.TOP, this.P);
        Q(sb2, ViewProps.RIGHT, this.Q);
        Q(sb2, ViewProps.BOTTOM, this.R);
        Q(sb2, "baseline", this.S);
        Q(sb2, "centerX", this.T);
        Q(sb2, "centerY", this.U);
        P(sb2, "    width", this.f2698b0, this.f2720m0, this.H[0], this.f2717l, this.f2745z, this.f2739w, this.B, this.Z[0], this.D0[0]);
        P(sb2, "    height", this.f2700c0, this.f2722n0, this.H[1], this.f2719m, this.C, this.f2741x, this.E, this.Z[1], this.D0[1]);
        A0(sb2, "    dimensionRatio", this.f2702d0, this.f2704e0);
        x0(sb2, "    horizontalBias", this.f2724o0, K0);
        x0(sb2, "    verticalBias", this.f2726p0, K0);
        y0(sb2, "    horizontalChainStyle", this.f2746z0, 0);
        y0(sb2, "    verticalChainStyle", this.A0, 0);
        sb2.append("  }");
    }

    public void O0(int i10) {
        this.f2746z0 = i10;
    }

    public void P0(int i10, int i11) {
        this.f2706f0 = i10;
        int i12 = i11 - i10;
        this.f2698b0 = i12;
        int i13 = this.f2720m0;
        if (i12 < i13) {
            this.f2698b0 = i13;
        }
    }

    public void Q0(b bVar) {
        this.Z[0] = bVar;
    }

    public float R() {
        return this.f2726p0;
    }

    public void R0(int i10, int i11, int i12, float f10) {
        this.f2739w = i10;
        this.f2745z = i11;
        if (i12 == Integer.MAX_VALUE) {
            i12 = 0;
        }
        this.A = i12;
        this.B = f10;
        if (f10 > 0.0f && f10 < 1.0f && i10 == 0) {
            this.f2739w = 2;
        }
    }

    public int S() {
        return this.A0;
    }

    public void S0(float f10) {
        this.D0[0] = f10;
    }

    public b T() {
        return this.Z[1];
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void T0(int i10, boolean z10) {
        this.Y[i10] = z10;
    }

    public int U() {
        int i10;
        if (this.O != null) {
            i10 = this.P.f2798g;
        } else {
            i10 = 0;
        }
        if (this.Q != null) {
            return i10 + this.R.f2798g;
        }
        return i10;
    }

    public void U0(boolean z10) {
        this.K = z10;
    }

    public int V() {
        return this.f2732s0;
    }

    public void V0(boolean z10) {
        this.L = z10;
    }

    public int W() {
        if (this.f2732s0 == 8) {
            return 0;
        }
        return this.f2698b0;
    }

    public void W0(int i10, int i11) {
        this.M = i10;
        this.N = i11;
        Z0(false);
    }

    public int X() {
        ConstraintWidget constraintWidget = this.f2696a0;
        if (constraintWidget != null && (constraintWidget instanceof ConstraintWidgetContainer)) {
            return ((ConstraintWidgetContainer) constraintWidget).T0 + this.f2706f0;
        }
        return this.f2706f0;
    }

    public void X0(int i10) {
        this.H[1] = i10;
    }

    public int Y() {
        ConstraintWidget constraintWidget = this.f2696a0;
        if (constraintWidget != null && (constraintWidget instanceof ConstraintWidgetContainer)) {
            return ((ConstraintWidgetContainer) constraintWidget).U0 + this.f2708g0;
        }
        return this.f2708g0;
    }

    public void Y0(int i10) {
        this.H[0] = i10;
    }

    public boolean Z() {
        return this.J;
    }

    public void Z0(boolean z10) {
        this.f2711i = z10;
    }

    public boolean a0(int i10) {
        int i11;
        int i12;
        int i13;
        int i14;
        int i15;
        if (i10 == 0) {
            if (this.O.f2797f != null) {
                i14 = 1;
            } else {
                i14 = 0;
            }
            if (this.Q.f2797f != null) {
                i15 = 1;
            } else {
                i15 = 0;
            }
            if (i14 + i15 >= 2) {
                return false;
            }
            return true;
        }
        if (this.P.f2797f != null) {
            i11 = 1;
        } else {
            i11 = 0;
        }
        if (this.R.f2797f != null) {
            i12 = 1;
        } else {
            i12 = 0;
        }
        int i16 = i11 + i12;
        if (this.S.f2797f != null) {
            i13 = 1;
        } else {
            i13 = 0;
        }
        if (i16 + i13 >= 2) {
            return false;
        }
        return true;
    }

    public void a1(int i10) {
        if (i10 < 0) {
            this.f2722n0 = 0;
        } else {
            this.f2722n0 = i10;
        }
    }

    public boolean b0() {
        int size = this.X.size();
        for (int i10 = 0; i10 < size; i10++) {
            if (((d) this.X.get(i10)).m()) {
                return true;
            }
        }
        return false;
    }

    public void b1(int i10) {
        if (i10 < 0) {
            this.f2720m0 = 0;
        } else {
            this.f2720m0 = i10;
        }
    }

    public boolean c0() {
        if (this.f2717l == -1 && this.f2719m == -1) {
            return false;
        }
        return true;
    }

    public void c1(int i10, int i11) {
        this.f2706f0 = i10;
        this.f2708g0 = i11;
    }

    public boolean d0(int i10, int i11) {
        d dVar;
        d dVar2;
        if (i10 == 0) {
            d dVar3 = this.O.f2797f;
            if (dVar3 != null && dVar3.n() && (dVar2 = this.Q.f2797f) != null && dVar2.n() && (this.Q.f2797f.e() - this.Q.f()) - (this.O.f2797f.e() + this.O.f()) >= i11) {
                return true;
            }
            return false;
        }
        d dVar4 = this.P.f2797f;
        if (dVar4 != null && dVar4.n() && (dVar = this.R.f2797f) != null && dVar.n() && (this.R.f2797f.e() - this.R.f()) - (this.P.f2797f.e() + this.P.f()) >= i11) {
            return true;
        }
        return false;
    }

    public void d1(ConstraintWidget constraintWidget) {
        this.f2696a0 = constraintWidget;
    }

    public void e(ConstraintWidgetContainer constraintWidgetContainer, h1.d dVar, HashSet hashSet, int i10, boolean z10) {
        if (z10) {
            if (hashSet.contains(this)) {
                g.a(constraintWidgetContainer, dVar, this);
                hashSet.remove(this);
                g(dVar, constraintWidgetContainer.V1(64));
            } else {
                return;
            }
        }
        if (i10 == 0) {
            HashSet d10 = this.O.d();
            if (d10 != null) {
                Iterator it = d10.iterator();
                while (it.hasNext()) {
                    ((d) it.next()).f2795d.e(constraintWidgetContainer, dVar, hashSet, i10, true);
                }
            }
            HashSet d11 = this.Q.d();
            if (d11 != null) {
                Iterator it2 = d11.iterator();
                while (it2.hasNext()) {
                    ((d) it2.next()).f2795d.e(constraintWidgetContainer, dVar, hashSet, i10, true);
                }
                return;
            }
            return;
        }
        HashSet d12 = this.P.d();
        if (d12 != null) {
            Iterator it3 = d12.iterator();
            while (it3.hasNext()) {
                ((d) it3.next()).f2795d.e(constraintWidgetContainer, dVar, hashSet, i10, true);
            }
        }
        HashSet d13 = this.R.d();
        if (d13 != null) {
            Iterator it4 = d13.iterator();
            while (it4.hasNext()) {
                ((d) it4.next()).f2795d.e(constraintWidgetContainer, dVar, hashSet, i10, true);
            }
        }
        HashSet d14 = this.S.d();
        if (d14 != null) {
            Iterator it5 = d14.iterator();
            while (it5.hasNext()) {
                ((d) it5.next()).f2795d.e(constraintWidgetContainer, dVar, hashSet, i10, true);
            }
        }
    }

    public void e0(d.a aVar, ConstraintWidget constraintWidget, d.a aVar2, int i10, int i11) {
        o(aVar).b(constraintWidget.o(aVar2), i10, i11, true);
    }

    public void e1(float f10) {
        this.f2726p0 = f10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean f() {
        if (!(this instanceof h) && !(this instanceof f)) {
            return false;
        }
        return true;
    }

    public void f1(int i10) {
        this.A0 = i10;
    }

    /* JADX WARN: Code restructure failed: missing block: B:17:0x004a, code lost:
        if (r13 != 3) goto L15;
     */
    /* JADX WARN: Multi-variable type inference failed */
    /* JADX WARN: Removed duplicated region for block: B:102:0x019e  */
    /* JADX WARN: Removed duplicated region for block: B:130:0x020d  */
    /* JADX WARN: Removed duplicated region for block: B:134:0x0216  */
    /* JADX WARN: Removed duplicated region for block: B:138:0x0220  */
    /* JADX WARN: Removed duplicated region for block: B:141:0x022f  */
    /* JADX WARN: Removed duplicated region for block: B:143:0x0233  */
    /* JADX WARN: Removed duplicated region for block: B:146:0x023c  */
    /* JADX WARN: Removed duplicated region for block: B:148:0x0240  */
    /* JADX WARN: Removed duplicated region for block: B:151:0x025d  */
    /* JADX WARN: Removed duplicated region for block: B:188:0x02da  */
    /* JADX WARN: Removed duplicated region for block: B:192:0x02f6  */
    /* JADX WARN: Removed duplicated region for block: B:196:0x02ff  */
    /* JADX WARN: Removed duplicated region for block: B:199:0x0303  */
    /* JADX WARN: Removed duplicated region for block: B:206:0x0319  */
    /* JADX WARN: Removed duplicated region for block: B:211:0x0324  */
    /* JADX WARN: Removed duplicated region for block: B:214:0x033f  */
    /* JADX WARN: Removed duplicated region for block: B:225:0x035c  */
    /* JADX WARN: Removed duplicated region for block: B:238:0x03b6  */
    /* JADX WARN: Removed duplicated region for block: B:239:0x03bd  */
    /* JADX WARN: Removed duplicated region for block: B:242:0x03c3  */
    /* JADX WARN: Removed duplicated region for block: B:243:0x03ca  */
    /* JADX WARN: Removed duplicated region for block: B:246:0x0402  */
    /* JADX WARN: Removed duplicated region for block: B:247:0x0405  */
    /* JADX WARN: Removed duplicated region for block: B:250:0x0439  */
    /* JADX WARN: Removed duplicated region for block: B:270:0x049b  */
    /* JADX WARN: Removed duplicated region for block: B:271:0x049d  */
    /* JADX WARN: Removed duplicated region for block: B:273:0x04a0  */
    /* JADX WARN: Removed duplicated region for block: B:312:0x057f  */
    /* JADX WARN: Removed duplicated region for block: B:319:0x05b0  */
    /* JADX WARN: Removed duplicated region for block: B:322:0x05d7  */
    /* JADX WARN: Removed duplicated region for block: B:325:? A[RETURN, SYNTHETIC] */
    /* JADX WARN: Removed duplicated region for block: B:38:0x007b  */
    /* JADX WARN: Removed duplicated region for block: B:48:0x00ac  */
    /* JADX WARN: Removed duplicated region for block: B:66:0x00fe  */
    /* JADX WARN: Removed duplicated region for block: B:81:0x0128  */
    /* JADX WARN: Removed duplicated region for block: B:84:0x015b  */
    /* JADX WARN: Removed duplicated region for block: B:99:0x0194  */
    /* JADX WARN: Type inference failed for: r13v17 */
    /* JADX WARN: Type inference failed for: r13v18 */
    /* JADX WARN: Type inference failed for: r13v47 */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public void g(h1.d r51, boolean r52) {
        /*
            Method dump skipped, instructions count: 1512
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: androidx.constraintlayout.core.widgets.ConstraintWidget.g(h1.d, boolean):void");
    }

    public boolean g0() {
        return this.f2729r;
    }

    public void g1(int i10, int i11) {
        this.f2708g0 = i10;
        int i12 = i11 - i10;
        this.f2700c0 = i12;
        int i13 = this.f2722n0;
        if (i12 < i13) {
            this.f2700c0 = i13;
        }
    }

    public boolean h() {
        if (this.f2732s0 != 8) {
            return true;
        }
        return false;
    }

    public boolean h0(int i10) {
        return this.Y[i10];
    }

    public void h1(b bVar) {
        this.Z[1] = bVar;
    }

    public boolean i0() {
        d dVar = this.O;
        d dVar2 = dVar.f2797f;
        if (dVar2 == null || dVar2.f2797f != dVar) {
            d dVar3 = this.Q;
            d dVar4 = dVar3.f2797f;
            if (dVar4 != null && dVar4.f2797f == dVar3) {
                return true;
            }
            return false;
        }
        return true;
    }

    public void i1(int i10, int i11, int i12, float f10) {
        this.f2741x = i10;
        this.C = i11;
        if (i12 == Integer.MAX_VALUE) {
            i12 = 0;
        }
        this.D = i12;
        this.E = f10;
        if (f10 > 0.0f && f10 < 1.0f && i10 == 0) {
            this.f2741x = 2;
        }
    }

    public void j(d.a aVar, ConstraintWidget constraintWidget, d.a aVar2, int i10) {
        d.a aVar3;
        d.a aVar4;
        boolean z10;
        d.a aVar5 = d.a.CENTER;
        if (aVar == aVar5) {
            if (aVar2 == aVar5) {
                d.a aVar6 = d.a.LEFT;
                d o10 = o(aVar6);
                d.a aVar7 = d.a.RIGHT;
                d o11 = o(aVar7);
                d.a aVar8 = d.a.TOP;
                d o12 = o(aVar8);
                d.a aVar9 = d.a.BOTTOM;
                d o13 = o(aVar9);
                boolean z11 = true;
                if ((o10 != null && o10.o()) || (o11 != null && o11.o())) {
                    z10 = false;
                } else {
                    j(aVar6, constraintWidget, aVar6, 0);
                    j(aVar7, constraintWidget, aVar7, 0);
                    z10 = true;
                }
                if ((o12 != null && o12.o()) || (o13 != null && o13.o())) {
                    z11 = false;
                } else {
                    j(aVar8, constraintWidget, aVar8, 0);
                    j(aVar9, constraintWidget, aVar9, 0);
                }
                if (z10 && z11) {
                    o(aVar5).a(constraintWidget.o(aVar5), 0);
                    return;
                } else if (z10) {
                    d.a aVar10 = d.a.CENTER_X;
                    o(aVar10).a(constraintWidget.o(aVar10), 0);
                    return;
                } else if (z11) {
                    d.a aVar11 = d.a.CENTER_Y;
                    o(aVar11).a(constraintWidget.o(aVar11), 0);
                    return;
                } else {
                    return;
                }
            }
            d.a aVar12 = d.a.LEFT;
            if (aVar2 != aVar12 && aVar2 != d.a.RIGHT) {
                d.a aVar13 = d.a.TOP;
                if (aVar2 == aVar13 || aVar2 == d.a.BOTTOM) {
                    j(aVar13, constraintWidget, aVar2, 0);
                    j(d.a.BOTTOM, constraintWidget, aVar2, 0);
                    o(aVar5).a(constraintWidget.o(aVar2), 0);
                    return;
                }
                return;
            }
            j(aVar12, constraintWidget, aVar2, 0);
            j(d.a.RIGHT, constraintWidget, aVar2, 0);
            o(aVar5).a(constraintWidget.o(aVar2), 0);
            return;
        }
        d.a aVar14 = d.a.CENTER_X;
        if (aVar == aVar14 && (aVar2 == (aVar4 = d.a.LEFT) || aVar2 == d.a.RIGHT)) {
            d o14 = o(aVar4);
            d o15 = constraintWidget.o(aVar2);
            d o16 = o(d.a.RIGHT);
            o14.a(o15, 0);
            o16.a(o15, 0);
            o(aVar14).a(o15, 0);
            return;
        }
        d.a aVar15 = d.a.CENTER_Y;
        if (aVar == aVar15 && (aVar2 == (aVar3 = d.a.TOP) || aVar2 == d.a.BOTTOM)) {
            d o17 = constraintWidget.o(aVar2);
            o(aVar3).a(o17, 0);
            o(d.a.BOTTOM).a(o17, 0);
            o(aVar15).a(o17, 0);
        } else if (aVar == aVar14 && aVar2 == aVar14) {
            d.a aVar16 = d.a.LEFT;
            o(aVar16).a(constraintWidget.o(aVar16), 0);
            d.a aVar17 = d.a.RIGHT;
            o(aVar17).a(constraintWidget.o(aVar17), 0);
            o(aVar14).a(constraintWidget.o(aVar2), 0);
        } else if (aVar == aVar15 && aVar2 == aVar15) {
            d.a aVar18 = d.a.TOP;
            o(aVar18).a(constraintWidget.o(aVar18), 0);
            d.a aVar19 = d.a.BOTTOM;
            o(aVar19).a(constraintWidget.o(aVar19), 0);
            o(aVar15).a(constraintWidget.o(aVar2), 0);
        } else {
            d o18 = o(aVar);
            d o19 = constraintWidget.o(aVar2);
            if (o18.p(o19)) {
                d.a aVar20 = d.a.BASELINE;
                if (aVar == aVar20) {
                    d o20 = o(d.a.TOP);
                    d o21 = o(d.a.BOTTOM);
                    if (o20 != null) {
                        o20.q();
                    }
                    if (o21 != null) {
                        o21.q();
                    }
                } else if (aVar != d.a.TOP && aVar != d.a.BOTTOM) {
                    if (aVar == d.a.LEFT || aVar == d.a.RIGHT) {
                        d o22 = o(aVar5);
                        if (o22.j() != o19) {
                            o22.q();
                        }
                        d g10 = o(aVar).g();
                        d o23 = o(aVar14);
                        if (o23.o()) {
                            g10.q();
                            o23.q();
                        }
                    }
                } else {
                    d o24 = o(aVar20);
                    if (o24 != null) {
                        o24.q();
                    }
                    d o25 = o(aVar5);
                    if (o25.j() != o19) {
                        o25.q();
                    }
                    d g11 = o(aVar).g();
                    d o26 = o(aVar15);
                    if (o26.o()) {
                        g11.q();
                        o26.q();
                    }
                }
                o18.a(o19, i10);
            }
        }
    }

    public boolean j0() {
        return this.K;
    }

    public void j1(float f10) {
        this.D0[1] = f10;
    }

    public void k(d dVar, d dVar2, int i10) {
        if (dVar.h() == this) {
            j(dVar.k(), dVar2.h(), dVar2.k(), i10);
        }
    }

    public boolean k0() {
        d dVar = this.P;
        d dVar2 = dVar.f2797f;
        if (dVar2 == null || dVar2.f2797f != dVar) {
            d dVar3 = this.R;
            d dVar4 = dVar3.f2797f;
            if (dVar4 != null && dVar4.f2797f == dVar3) {
                return true;
            }
            return false;
        }
        return true;
    }

    public void k1(int i10) {
        this.f2732s0 = i10;
    }

    public void l(ConstraintWidget constraintWidget, float f10, int i10) {
        d.a aVar = d.a.CENTER;
        e0(aVar, constraintWidget, aVar, i10, 0);
        this.I = f10;
    }

    public boolean l0() {
        return this.L;
    }

    public void l1(int i10) {
        this.f2698b0 = i10;
        int i11 = this.f2720m0;
        if (i10 < i11) {
            this.f2698b0 = i11;
        }
    }

    public void m(h1.d dVar) {
        dVar.q(this.O);
        dVar.q(this.P);
        dVar.q(this.Q);
        dVar.q(this.R);
        if (this.f2718l0 > 0) {
            dVar.q(this.S);
        }
    }

    public boolean m0() {
        if (this.f2711i && this.f2732s0 != 8) {
            return true;
        }
        return false;
    }

    public void m1(int i10) {
        if (i10 >= 0 && i10 <= 3) {
            this.f2737v = i10;
        }
    }

    public void n() {
        if (this.f2703e == null) {
            this.f2703e = new l(this);
        }
        if (this.f2705f == null) {
            this.f2705f = new n(this);
        }
    }

    public boolean n0() {
        if (!this.f2725p) {
            if (!this.O.n() || !this.Q.n()) {
                return false;
            }
            return true;
        }
        return true;
    }

    public void n1(int i10) {
        this.f2706f0 = i10;
    }

    public d o(d.a aVar) {
        switch (a.f2747a[aVar.ordinal()]) {
            case 1:
                return this.O;
            case 2:
                return this.P;
            case 3:
                return this.Q;
            case 4:
                return this.R;
            case 5:
                return this.S;
            case 6:
                return this.V;
            case 7:
                return this.T;
            case 8:
                return this.U;
            case 9:
                return null;
            default:
                throw new AssertionError(aVar.name());
        }
    }

    public boolean o0() {
        if (!this.f2727q) {
            if (!this.P.n() || !this.R.n()) {
                return false;
            }
            return true;
        }
        return true;
    }

    public void o1(int i10) {
        this.f2708g0 = i10;
    }

    public int p() {
        return this.f2718l0;
    }

    public boolean p0() {
        return this.f2731s;
    }

    public void p1(boolean z10, boolean z11, boolean z12, boolean z13) {
        if (this.F == -1) {
            if (z12 && !z13) {
                this.F = 0;
            } else if (!z12 && z13) {
                this.F = 1;
                if (this.f2704e0 == -1) {
                    this.G = 1.0f / this.G;
                }
            }
        }
        if (this.F == 0 && (!this.P.o() || !this.R.o())) {
            this.F = 1;
        } else if (this.F == 1 && (!this.O.o() || !this.Q.o())) {
            this.F = 0;
        }
        if (this.F == -1 && (!this.P.o() || !this.R.o() || !this.O.o() || !this.Q.o())) {
            if (this.P.o() && this.R.o()) {
                this.F = 0;
            } else if (this.O.o() && this.Q.o()) {
                this.G = 1.0f / this.G;
                this.F = 1;
            }
        }
        if (this.F == -1) {
            int i10 = this.f2745z;
            if (i10 > 0 && this.C == 0) {
                this.F = 0;
            } else if (i10 == 0 && this.C > 0) {
                this.G = 1.0f / this.G;
                this.F = 1;
            }
        }
    }

    public float q(int i10) {
        if (i10 == 0) {
            return this.f2724o0;
        }
        if (i10 == 1) {
            return this.f2726p0;
        }
        return -1.0f;
    }

    public void q0() {
        this.f2729r = true;
    }

    public void q1(boolean z10, boolean z11) {
        int i10;
        int i11;
        boolean k10 = z10 & this.f2703e.k();
        boolean k11 = z11 & this.f2705f.k();
        l lVar = this.f2703e;
        int i12 = lVar.f35712h.f35659g;
        n nVar = this.f2705f;
        int i13 = nVar.f35712h.f35659g;
        int i14 = lVar.f35713i.f35659g;
        int i15 = nVar.f35713i.f35659g;
        int i16 = i15 - i13;
        if (i14 - i12 < 0 || i16 < 0 || i12 == Integer.MIN_VALUE || i12 == Integer.MAX_VALUE || i13 == Integer.MIN_VALUE || i13 == Integer.MAX_VALUE || i14 == Integer.MIN_VALUE || i14 == Integer.MAX_VALUE || i15 == Integer.MIN_VALUE || i15 == Integer.MAX_VALUE) {
            i14 = 0;
            i12 = 0;
            i15 = 0;
            i13 = 0;
        }
        int i17 = i14 - i12;
        int i18 = i15 - i13;
        if (k10) {
            this.f2706f0 = i12;
        }
        if (k11) {
            this.f2708g0 = i13;
        }
        if (this.f2732s0 == 8) {
            this.f2698b0 = 0;
            this.f2700c0 = 0;
            return;
        }
        if (k10) {
            if (this.Z[0] == b.FIXED && i17 < (i11 = this.f2698b0)) {
                i17 = i11;
            }
            this.f2698b0 = i17;
            int i19 = this.f2720m0;
            if (i17 < i19) {
                this.f2698b0 = i19;
            }
        }
        if (k11) {
            if (this.Z[1] == b.FIXED && i18 < (i10 = this.f2700c0)) {
                i18 = i10;
            }
            this.f2700c0 = i18;
            int i20 = this.f2722n0;
            if (i18 < i20) {
                this.f2700c0 = i20;
            }
        }
    }

    public int r() {
        return Y() + this.f2700c0;
    }

    public void r0() {
        this.f2731s = true;
    }

    public void r1(h1.d dVar, boolean z10) {
        n nVar;
        l lVar;
        int A = dVar.A(this.O);
        int A2 = dVar.A(this.P);
        int A3 = dVar.A(this.Q);
        int A4 = dVar.A(this.R);
        if (z10 && (lVar = this.f2703e) != null) {
            l1.f fVar = lVar.f35712h;
            if (fVar.f35662j) {
                l1.f fVar2 = lVar.f35713i;
                if (fVar2.f35662j) {
                    A = fVar.f35659g;
                    A3 = fVar2.f35659g;
                }
            }
        }
        if (z10 && (nVar = this.f2705f) != null) {
            l1.f fVar3 = nVar.f35712h;
            if (fVar3.f35662j) {
                l1.f fVar4 = nVar.f35713i;
                if (fVar4.f35662j) {
                    A2 = fVar3.f35659g;
                    A4 = fVar4.f35659g;
                }
            }
        }
        int i10 = A4 - A2;
        if (A3 - A < 0 || i10 < 0 || A == Integer.MIN_VALUE || A == Integer.MAX_VALUE || A2 == Integer.MIN_VALUE || A2 == Integer.MAX_VALUE || A3 == Integer.MIN_VALUE || A3 == Integer.MAX_VALUE || A4 == Integer.MIN_VALUE || A4 == Integer.MAX_VALUE) {
            A = 0;
            A4 = 0;
            A2 = 0;
            A3 = 0;
        }
        K0(A, A2, A3, A4);
    }

    public Object s() {
        return this.f2728q0;
    }

    public boolean s0() {
        b[] bVarArr = this.Z;
        b bVar = bVarArr[0];
        b bVar2 = b.MATCH_CONSTRAINT;
        if (bVar != bVar2 || bVarArr[1] != bVar2) {
            return false;
        }
        return true;
    }

    public String t() {
        return this.f2736u0;
    }

    public void t0() {
        this.O.q();
        this.P.q();
        this.Q.q();
        this.R.q();
        this.S.q();
        this.T.q();
        this.U.q();
        this.V.q();
        this.f2696a0 = null;
        this.I = Float.NaN;
        this.f2698b0 = 0;
        this.f2700c0 = 0;
        this.f2702d0 = 0.0f;
        this.f2704e0 = -1;
        this.f2706f0 = 0;
        this.f2708g0 = 0;
        this.f2714j0 = 0;
        this.f2716k0 = 0;
        this.f2718l0 = 0;
        this.f2720m0 = 0;
        this.f2722n0 = 0;
        float f10 = K0;
        this.f2724o0 = f10;
        this.f2726p0 = f10;
        b[] bVarArr = this.Z;
        b bVar = b.FIXED;
        bVarArr[0] = bVar;
        bVarArr[1] = bVar;
        this.f2728q0 = null;
        this.f2730r0 = 0;
        this.f2732s0 = 0;
        this.f2738v0 = null;
        this.f2740w0 = false;
        this.f2742x0 = false;
        this.f2746z0 = 0;
        this.A0 = 0;
        this.B0 = false;
        this.C0 = false;
        float[] fArr = this.D0;
        fArr[0] = -1.0f;
        fArr[1] = -1.0f;
        this.f2733t = -1;
        this.f2735u = -1;
        int[] iArr = this.H;
        iArr[0] = Integer.MAX_VALUE;
        iArr[1] = Integer.MAX_VALUE;
        this.f2739w = 0;
        this.f2741x = 0;
        this.B = 1.0f;
        this.E = 1.0f;
        this.A = Integer.MAX_VALUE;
        this.D = Integer.MAX_VALUE;
        this.f2745z = 0;
        this.C = 0;
        this.f2709h = false;
        this.F = -1;
        this.G = 1.0f;
        this.f2744y0 = false;
        boolean[] zArr = this.f2707g;
        zArr[0] = true;
        zArr[1] = true;
        this.L = false;
        boolean[] zArr2 = this.Y;
        zArr2[0] = false;
        zArr2[1] = false;
        this.f2711i = true;
        int[] iArr2 = this.f2743y;
        iArr2[0] = 0;
        iArr2[1] = 0;
        this.f2717l = -1;
        this.f2719m = -1;
    }

    public String toString() {
        String str;
        StringBuilder sb2 = new StringBuilder();
        String str2 = "";
        if (this.f2738v0 == null) {
            str = "";
        } else {
            str = "type: " + this.f2738v0 + " ";
        }
        sb2.append(str);
        if (this.f2736u0 != null) {
            str2 = "id: " + this.f2736u0 + " ";
        }
        sb2.append(str2);
        sb2.append("(");
        sb2.append(this.f2706f0);
        sb2.append(", ");
        sb2.append(this.f2708g0);
        sb2.append(") - (");
        sb2.append(this.f2698b0);
        sb2.append(" x ");
        sb2.append(this.f2700c0);
        sb2.append(")");
        return sb2.toString();
    }

    public b u(int i10) {
        if (i10 == 0) {
            return A();
        }
        if (i10 == 1) {
            return T();
        }
        return null;
    }

    public void u0() {
        ConstraintWidget K = K();
        if (K == null || !(K instanceof ConstraintWidgetContainer) || !((ConstraintWidgetContainer) K()).N1()) {
            int size = this.X.size();
            for (int i10 = 0; i10 < size; i10++) {
                ((d) this.X.get(i10)).q();
            }
        }
    }

    public float v() {
        return this.f2702d0;
    }

    public void v0() {
        this.f2725p = false;
        this.f2727q = false;
        this.f2729r = false;
        this.f2731s = false;
        int size = this.X.size();
        for (int i10 = 0; i10 < size; i10++) {
            ((d) this.X.get(i10)).r();
        }
    }

    public int w() {
        return this.f2704e0;
    }

    public void w0(h1.c cVar) {
        this.O.s(cVar);
        this.P.s(cVar);
        this.Q.s(cVar);
        this.R.s(cVar);
        this.S.s(cVar);
        this.V.s(cVar);
        this.T.s(cVar);
        this.U.s(cVar);
    }

    public int x() {
        if (this.f2732s0 == 8) {
            return 0;
        }
        return this.f2700c0;
    }

    public float y() {
        return this.f2724o0;
    }

    public int z() {
        return this.f2746z0;
    }
}
