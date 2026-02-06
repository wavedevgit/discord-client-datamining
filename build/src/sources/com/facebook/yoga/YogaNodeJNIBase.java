package com.facebook.yoga;

import java.util.ArrayList;
import java.util.List;
@sb.a
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class YogaNodeJNIBase extends YogaNode implements Cloneable {
    @sb.a
    private float[] arr;

    /* renamed from: d  reason: collision with root package name */
    private YogaNodeJNIBase f11427d;

    /* renamed from: e  reason: collision with root package name */
    private YogaConfig f11428e;

    /* renamed from: i  reason: collision with root package name */
    private List f11429i;
    @sb.a
    private int mLayoutDirection;

    /* renamed from: o  reason: collision with root package name */
    private YogaMeasureFunction f11430o;

    /* renamed from: p  reason: collision with root package name */
    private YogaBaselineFunction f11431p;

    /* renamed from: q  reason: collision with root package name */
    protected long f11432q;

    /* renamed from: r  reason: collision with root package name */
    private Object f11433r;

    /* renamed from: s  reason: collision with root package name */
    private boolean f11434s;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f11435a;

        static {
            int[] iArr = new int[e.values().length];
            f11435a = iArr;
            try {
                iArr[e.LEFT.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f11435a[e.TOP.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f11435a[e.RIGHT.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                f11435a[e.BOTTOM.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                f11435a[e.START.ordinal()] = 5;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                f11435a[e.END.ordinal()] = 6;
            } catch (NoSuchFieldError unused6) {
            }
        }
    }

    private YogaNodeJNIBase(long j10) {
        this.arr = null;
        this.mLayoutDirection = 0;
        this.f11434s = true;
        if (j10 != 0) {
            this.f11432q = j10;
            return;
        }
        throw new IllegalStateException("Failed to allocate native memory");
    }

    private void q0(YogaNode yogaNode) {
        r0();
    }

    @sb.a
    private final long replaceChild(YogaNodeJNIBase yogaNodeJNIBase, int i10) {
        List list = this.f11429i;
        if (list != null) {
            list.remove(i10);
            this.f11429i.add(i10, yogaNodeJNIBase);
            yogaNodeJNIBase.f11427d = this;
            return yogaNodeJNIBase.f11432q;
        }
        throw new IllegalStateException("Cannot replace child. YogaNode does not have children");
    }

    private static YogaValue t0(long j10) {
        return new YogaValue(Float.intBitsToFloat((int) j10), (int) (j10 >> 32));
    }

    @Override // com.facebook.yoga.YogaNode
    public void A(YogaBaselineFunction yogaBaselineFunction) {
        boolean z10;
        this.f11431p = yogaBaselineFunction;
        long j10 = this.f11432q;
        if (yogaBaselineFunction != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        YogaNative.jni_YGNodeSetHasBaselineFuncJNI(j10, z10);
    }

    @Override // com.facebook.yoga.YogaNode
    public void B(e eVar, float f10) {
        YogaNative.jni_YGNodeStyleSetBorderJNI(this.f11432q, eVar.e(), f10);
    }

    @Override // com.facebook.yoga.YogaNode
    public void D(Object obj) {
        this.f11433r = obj;
    }

    @Override // com.facebook.yoga.YogaNode
    public void E(YogaDirection yogaDirection) {
        YogaNative.jni_YGNodeStyleSetDirectionJNI(this.f11432q, yogaDirection.e());
    }

    @Override // com.facebook.yoga.YogaNode
    public void F(YogaDisplay yogaDisplay) {
        YogaNative.jni_YGNodeStyleSetDisplayJNI(this.f11432q, yogaDisplay.d());
    }

    @Override // com.facebook.yoga.YogaNode
    public void G(float f10) {
        YogaNative.jni_YGNodeStyleSetFlexJNI(this.f11432q, f10);
    }

    @Override // com.facebook.yoga.YogaNode
    public void H(float f10) {
        YogaNative.jni_YGNodeStyleSetFlexBasisJNI(this.f11432q, f10);
    }

    @Override // com.facebook.yoga.YogaNode
    public void I() {
        YogaNative.jni_YGNodeStyleSetFlexBasisAutoJNI(this.f11432q);
    }

    @Override // com.facebook.yoga.YogaNode
    public void J(float f10) {
        YogaNative.jni_YGNodeStyleSetFlexBasisPercentJNI(this.f11432q, f10);
    }

    @Override // com.facebook.yoga.YogaNode
    public void K(YogaFlexDirection yogaFlexDirection) {
        YogaNative.jni_YGNodeStyleSetFlexDirectionJNI(this.f11432q, yogaFlexDirection.d());
    }

    @Override // com.facebook.yoga.YogaNode
    public void L(float f10) {
        YogaNative.jni_YGNodeStyleSetFlexGrowJNI(this.f11432q, f10);
    }

    @Override // com.facebook.yoga.YogaNode
    public void M(float f10) {
        YogaNative.jni_YGNodeStyleSetFlexShrinkJNI(this.f11432q, f10);
    }

    @Override // com.facebook.yoga.YogaNode
    public void N(g gVar, float f10) {
        YogaNative.jni_YGNodeStyleSetGapJNI(this.f11432q, gVar.d(), f10);
    }

    @Override // com.facebook.yoga.YogaNode
    public void O(g gVar, float f10) {
        YogaNative.jni_YGNodeStyleSetGapPercentJNI(this.f11432q, gVar.d(), f10);
    }

    @Override // com.facebook.yoga.YogaNode
    public void Q(float f10) {
        YogaNative.jni_YGNodeStyleSetHeightJNI(this.f11432q, f10);
    }

    @Override // com.facebook.yoga.YogaNode
    public void R() {
        YogaNative.jni_YGNodeStyleSetHeightAutoJNI(this.f11432q);
    }

    @Override // com.facebook.yoga.YogaNode
    public void S(float f10) {
        YogaNative.jni_YGNodeStyleSetHeightPercentJNI(this.f11432q, f10);
    }

    @Override // com.facebook.yoga.YogaNode
    public void T(YogaJustify yogaJustify) {
        YogaNative.jni_YGNodeStyleSetJustifyContentJNI(this.f11432q, yogaJustify.d());
    }

    @Override // com.facebook.yoga.YogaNode
    public void U(e eVar, float f10) {
        YogaNative.jni_YGNodeStyleSetMarginJNI(this.f11432q, eVar.e(), f10);
    }

    @Override // com.facebook.yoga.YogaNode
    public void V(e eVar) {
        YogaNative.jni_YGNodeStyleSetMarginAutoJNI(this.f11432q, eVar.e());
    }

    @Override // com.facebook.yoga.YogaNode
    public void W(e eVar, float f10) {
        YogaNative.jni_YGNodeStyleSetMarginPercentJNI(this.f11432q, eVar.e(), f10);
    }

    @Override // com.facebook.yoga.YogaNode
    public void X(float f10) {
        YogaNative.jni_YGNodeStyleSetMaxHeightJNI(this.f11432q, f10);
    }

    @Override // com.facebook.yoga.YogaNode
    public void Y(float f10) {
        YogaNative.jni_YGNodeStyleSetMaxHeightPercentJNI(this.f11432q, f10);
    }

    @Override // com.facebook.yoga.YogaNode
    public void Z(float f10) {
        YogaNative.jni_YGNodeStyleSetMaxWidthJNI(this.f11432q, f10);
    }

    @Override // com.facebook.yoga.YogaNode
    public void a(YogaNode yogaNode, int i10) {
        if (!(yogaNode instanceof YogaNodeJNIBase)) {
            return;
        }
        YogaNodeJNIBase yogaNodeJNIBase = (YogaNodeJNIBase) yogaNode;
        if (yogaNodeJNIBase.f11427d == null) {
            if (this.f11429i == null) {
                this.f11429i = new ArrayList(4);
            }
            this.f11429i.add(i10, yogaNodeJNIBase);
            yogaNodeJNIBase.f11427d = this;
            YogaNative.jni_YGNodeInsertChildJNI(this.f11432q, yogaNodeJNIBase.f11432q, i10);
            return;
        }
        throw new IllegalStateException("Child already has a parent, it must be removed first.");
    }

    @Override // com.facebook.yoga.YogaNode
    public void a0(float f10) {
        YogaNative.jni_YGNodeStyleSetMaxWidthPercentJNI(this.f11432q, f10);
    }

    @Override // com.facebook.yoga.YogaNode
    public void b(float f10, float f11) {
        q0(null);
        ArrayList arrayList = new ArrayList();
        arrayList.add(this);
        for (int i10 = 0; i10 < arrayList.size(); i10++) {
            YogaNodeJNIBase yogaNodeJNIBase = (YogaNodeJNIBase) arrayList.get(i10);
            List<YogaNodeJNIBase> list = yogaNodeJNIBase.f11429i;
            if (list != null) {
                for (YogaNodeJNIBase yogaNodeJNIBase2 : list) {
                    yogaNodeJNIBase2.q0(yogaNodeJNIBase);
                    arrayList.add(yogaNodeJNIBase2);
                }
            }
        }
        YogaNodeJNIBase[] yogaNodeJNIBaseArr = (YogaNodeJNIBase[]) arrayList.toArray(new YogaNodeJNIBase[arrayList.size()]);
        long[] jArr = new long[yogaNodeJNIBaseArr.length];
        for (int i11 = 0; i11 < yogaNodeJNIBaseArr.length; i11++) {
            jArr[i11] = yogaNodeJNIBaseArr[i11].f11432q;
        }
        YogaNative.jni_YGNodeCalculateLayoutJNI(this.f11432q, f10, f11, jArr, yogaNodeJNIBaseArr);
    }

    @Override // com.facebook.yoga.YogaNode
    public void b0(YogaMeasureFunction yogaMeasureFunction) {
        boolean z10;
        this.f11430o = yogaMeasureFunction;
        long j10 = this.f11432q;
        if (yogaMeasureFunction != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        YogaNative.jni_YGNodeSetHasMeasureFuncJNI(j10, z10);
    }

    @sb.a
    public final float baseline(float f10, float f11) {
        return this.f11431p.a(this, f10, f11);
    }

    @Override // com.facebook.yoga.YogaNode
    public void c() {
        YogaNative.jni_YGNodeMarkDirtyJNI(this.f11432q);
    }

    @Override // com.facebook.yoga.YogaNode
    public void c0(float f10) {
        YogaNative.jni_YGNodeStyleSetMinHeightJNI(this.f11432q, f10);
    }

    @Override // com.facebook.yoga.YogaNode
    public float d() {
        return YogaNative.jni_YGNodeStyleGetFlexJNI(this.f11432q);
    }

    @Override // com.facebook.yoga.YogaNode
    public void d0(float f10) {
        YogaNative.jni_YGNodeStyleSetMinHeightPercentJNI(this.f11432q, f10);
    }

    @Override // com.facebook.yoga.YogaNode
    public YogaValue e() {
        return t0(YogaNative.jni_YGNodeStyleGetHeightJNI(this.f11432q));
    }

    @Override // com.facebook.yoga.YogaNode
    public void e0(float f10) {
        YogaNative.jni_YGNodeStyleSetMinWidthJNI(this.f11432q, f10);
    }

    @Override // com.facebook.yoga.YogaNode
    public YogaDirection f() {
        int i10;
        float[] fArr = this.arr;
        if (fArr != null) {
            i10 = (int) fArr[5];
        } else {
            i10 = this.mLayoutDirection;
        }
        return YogaDirection.d(i10);
    }

    @Override // com.facebook.yoga.YogaNode
    public void f0(float f10) {
        YogaNative.jni_YGNodeStyleSetMinWidthPercentJNI(this.f11432q, f10);
    }

    @Override // com.facebook.yoga.YogaNode
    public void g0(YogaOverflow yogaOverflow) {
        YogaNative.jni_YGNodeStyleSetOverflowJNI(this.f11432q, yogaOverflow.d());
    }

    @Override // com.facebook.yoga.YogaNode
    public float h() {
        float[] fArr = this.arr;
        if (fArr != null) {
            return fArr[2];
        }
        return 0.0f;
    }

    @Override // com.facebook.yoga.YogaNode
    public void h0(e eVar, float f10) {
        YogaNative.jni_YGNodeStyleSetPaddingJNI(this.f11432q, eVar.e(), f10);
    }

    @Override // com.facebook.yoga.YogaNode
    public float i(e eVar) {
        float[] fArr = this.arr;
        if (fArr != null) {
            int i10 = 0;
            float f10 = fArr[0];
            if ((((int) f10) & 2) == 2) {
                if ((((int) f10) & 1) != 1) {
                    i10 = 4;
                }
                int i11 = 10 - i10;
                switch (a.f11435a[eVar.ordinal()]) {
                    case 1:
                        return this.arr[i11];
                    case 2:
                        return this.arr[11 - i10];
                    case 3:
                        return this.arr[12 - i10];
                    case 4:
                        return this.arr[13 - i10];
                    case 5:
                        if (f() == YogaDirection.RTL) {
                            return this.arr[12 - i10];
                        }
                        return this.arr[i11];
                    case 6:
                        if (f() == YogaDirection.RTL) {
                            return this.arr[i11];
                        }
                        return this.arr[12 - i10];
                    default:
                        throw new IllegalArgumentException("Cannot get layout paddings of multi-edge shorthands");
                }
            }
            return 0.0f;
        }
        return 0.0f;
    }

    @Override // com.facebook.yoga.YogaNode
    public void i0(e eVar, float f10) {
        YogaNative.jni_YGNodeStyleSetPaddingPercentJNI(this.f11432q, eVar.e(), f10);
    }

    @Override // com.facebook.yoga.YogaNode
    public float j() {
        float[] fArr = this.arr;
        if (fArr != null) {
            return fArr[1];
        }
        return 0.0f;
    }

    @Override // com.facebook.yoga.YogaNode
    public void j0(e eVar, float f10) {
        YogaNative.jni_YGNodeStyleSetPositionJNI(this.f11432q, eVar.e(), f10);
    }

    @Override // com.facebook.yoga.YogaNode
    public float k() {
        float[] fArr = this.arr;
        if (fArr != null) {
            return fArr[3];
        }
        return 0.0f;
    }

    @Override // com.facebook.yoga.YogaNode
    public void k0(e eVar, float f10) {
        YogaNative.jni_YGNodeStyleSetPositionPercentJNI(this.f11432q, eVar.e(), f10);
    }

    @Override // com.facebook.yoga.YogaNode
    public float l() {
        float[] fArr = this.arr;
        if (fArr != null) {
            return fArr[4];
        }
        return 0.0f;
    }

    @Override // com.facebook.yoga.YogaNode
    public void l0(YogaPositionType yogaPositionType) {
        YogaNative.jni_YGNodeStyleSetPositionTypeJNI(this.f11432q, yogaPositionType.d());
    }

    @Override // com.facebook.yoga.YogaNode
    public YogaValue m(e eVar) {
        return t0(YogaNative.jni_YGNodeStyleGetPaddingJNI(this.f11432q, eVar.e()));
    }

    @Override // com.facebook.yoga.YogaNode
    public void m0(float f10) {
        YogaNative.jni_YGNodeStyleSetWidthJNI(this.f11432q, f10);
    }

    @sb.a
    public final long measure(float f10, int i10, float f11, int i11) {
        if (r()) {
            return this.f11430o.measure(this, f10, YogaMeasureMode.d(i10), f11, YogaMeasureMode.d(i11));
        }
        throw new RuntimeException("Measure function isn't defined!");
    }

    @Override // com.facebook.yoga.YogaNode
    public YogaValue n() {
        return t0(YogaNative.jni_YGNodeStyleGetWidthJNI(this.f11432q));
    }

    @Override // com.facebook.yoga.YogaNode
    public void n0() {
        YogaNative.jni_YGNodeStyleSetWidthAutoJNI(this.f11432q);
    }

    @Override // com.facebook.yoga.YogaNode
    public boolean o() {
        float[] fArr = this.arr;
        if (fArr != null) {
            if ((((int) fArr[0]) & 16) != 16) {
                return false;
            }
            return true;
        }
        return this.f11434s;
    }

    @Override // com.facebook.yoga.YogaNode
    public void o0(float f10) {
        YogaNative.jni_YGNodeStyleSetWidthPercentJNI(this.f11432q, f10);
    }

    @Override // com.facebook.yoga.YogaNode
    public void p0(YogaWrap yogaWrap) {
        YogaNative.jni_YGNodeStyleSetFlexWrapJNI(this.f11432q, yogaWrap.d());
    }

    @Override // com.facebook.yoga.YogaNode
    public boolean q() {
        return YogaNative.jni_YGNodeIsDirtyJNI(this.f11432q);
    }

    @Override // com.facebook.yoga.YogaNode
    public boolean r() {
        if (this.f11430o != null) {
            return true;
        }
        return false;
    }

    public Object r0() {
        return this.f11433r;
    }

    @Override // com.facebook.yoga.YogaNode
    /* renamed from: s0 */
    public YogaNodeJNIBase u(int i10) {
        List list = this.f11429i;
        if (list != null) {
            YogaNodeJNIBase yogaNodeJNIBase = (YogaNodeJNIBase) list.remove(i10);
            yogaNodeJNIBase.f11427d = null;
            YogaNative.jni_YGNodeRemoveChildJNI(this.f11432q, yogaNodeJNIBase.f11432q);
            return yogaNodeJNIBase;
        }
        throw new IllegalStateException("Trying to remove a child of a YogaNode that does not have children");
    }

    @Override // com.facebook.yoga.YogaNode
    public void t() {
        float[] fArr = this.arr;
        if (fArr != null) {
            fArr[0] = ((int) fArr[0]) & (-17);
        }
        this.f11434s = false;
    }

    @Override // com.facebook.yoga.YogaNode
    public void v() {
        this.f11430o = null;
        this.f11431p = null;
        this.f11433r = null;
        this.arr = null;
        this.f11434s = true;
        this.mLayoutDirection = 0;
        YogaNative.jni_YGNodeResetJNI(this.f11432q);
    }

    @Override // com.facebook.yoga.YogaNode
    public void w(YogaAlign yogaAlign) {
        YogaNative.jni_YGNodeStyleSetAlignContentJNI(this.f11432q, yogaAlign.d());
    }

    @Override // com.facebook.yoga.YogaNode
    public void x(YogaAlign yogaAlign) {
        YogaNative.jni_YGNodeStyleSetAlignItemsJNI(this.f11432q, yogaAlign.d());
    }

    @Override // com.facebook.yoga.YogaNode
    public void y(YogaAlign yogaAlign) {
        YogaNative.jni_YGNodeStyleSetAlignSelfJNI(this.f11432q, yogaAlign.d());
    }

    @Override // com.facebook.yoga.YogaNode
    public void z(float f10) {
        YogaNative.jni_YGNodeStyleSetAspectRatioJNI(this.f11432q, f10);
    }

    YogaNodeJNIBase() {
        this(YogaNative.jni_YGNodeNewJNI());
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public YogaNodeJNIBase(YogaConfig yogaConfig) {
        this(YogaNative.jni_YGNodeNewWithConfigJNI(((b) yogaConfig).f11466a));
        this.f11428e = yogaConfig;
    }
}
