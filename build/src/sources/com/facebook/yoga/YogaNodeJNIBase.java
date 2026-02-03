package com.facebook.yoga;

import java.util.ArrayList;
import java.util.List;
@sb.a
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class YogaNodeJNIBase extends YogaNode implements Cloneable {
    @sb.a
    private float[] arr;

    /* renamed from: d  reason: collision with root package name */
    private YogaNodeJNIBase f11143d;

    /* renamed from: e  reason: collision with root package name */
    private YogaConfig f11144e;

    /* renamed from: i  reason: collision with root package name */
    private List f11145i;
    @sb.a
    private int mLayoutDirection;

    /* renamed from: o  reason: collision with root package name */
    private YogaMeasureFunction f11146o;

    /* renamed from: p  reason: collision with root package name */
    private YogaBaselineFunction f11147p;

    /* renamed from: q  reason: collision with root package name */
    protected long f11148q;

    /* renamed from: r  reason: collision with root package name */
    private Object f11149r;

    /* renamed from: s  reason: collision with root package name */
    private boolean f11150s;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f11151a;

        static {
            int[] iArr = new int[e.values().length];
            f11151a = iArr;
            try {
                iArr[e.LEFT.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f11151a[e.TOP.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f11151a[e.RIGHT.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                f11151a[e.BOTTOM.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                f11151a[e.START.ordinal()] = 5;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                f11151a[e.END.ordinal()] = 6;
            } catch (NoSuchFieldError unused6) {
            }
        }
    }

    private YogaNodeJNIBase(long j10) {
        this.arr = null;
        this.mLayoutDirection = 0;
        this.f11150s = true;
        if (j10 != 0) {
            this.f11148q = j10;
            return;
        }
        throw new IllegalStateException("Failed to allocate native memory");
    }

    private void p0(YogaNode yogaNode) {
        q0();
    }

    @sb.a
    private final long replaceChild(YogaNodeJNIBase yogaNodeJNIBase, int i10) {
        List list = this.f11145i;
        if (list != null) {
            list.remove(i10);
            this.f11145i.add(i10, yogaNodeJNIBase);
            yogaNodeJNIBase.f11143d = this;
            return yogaNodeJNIBase.f11148q;
        }
        throw new IllegalStateException("Cannot replace child. YogaNode does not have children");
    }

    private static YogaValue s0(long j10) {
        return new YogaValue(Float.intBitsToFloat((int) j10), (int) (j10 >> 32));
    }

    @Override // com.facebook.yoga.YogaNode
    public void A(YogaBaselineFunction yogaBaselineFunction) {
        boolean z10;
        this.f11147p = yogaBaselineFunction;
        long j10 = this.f11148q;
        if (yogaBaselineFunction != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        YogaNative.jni_YGNodeSetHasBaselineFuncJNI(j10, z10);
    }

    @Override // com.facebook.yoga.YogaNode
    public void B(e eVar, float f10) {
        YogaNative.jni_YGNodeStyleSetBorderJNI(this.f11148q, eVar.e(), f10);
    }

    @Override // com.facebook.yoga.YogaNode
    public void C(Object obj) {
        this.f11149r = obj;
    }

    @Override // com.facebook.yoga.YogaNode
    public void D(YogaDirection yogaDirection) {
        YogaNative.jni_YGNodeStyleSetDirectionJNI(this.f11148q, yogaDirection.e());
    }

    @Override // com.facebook.yoga.YogaNode
    public void E(YogaDisplay yogaDisplay) {
        YogaNative.jni_YGNodeStyleSetDisplayJNI(this.f11148q, yogaDisplay.d());
    }

    @Override // com.facebook.yoga.YogaNode
    public void F(float f10) {
        YogaNative.jni_YGNodeStyleSetFlexJNI(this.f11148q, f10);
    }

    @Override // com.facebook.yoga.YogaNode
    public void G(float f10) {
        YogaNative.jni_YGNodeStyleSetFlexBasisJNI(this.f11148q, f10);
    }

    @Override // com.facebook.yoga.YogaNode
    public void H() {
        YogaNative.jni_YGNodeStyleSetFlexBasisAutoJNI(this.f11148q);
    }

    @Override // com.facebook.yoga.YogaNode
    public void I(float f10) {
        YogaNative.jni_YGNodeStyleSetFlexBasisPercentJNI(this.f11148q, f10);
    }

    @Override // com.facebook.yoga.YogaNode
    public void J(YogaFlexDirection yogaFlexDirection) {
        YogaNative.jni_YGNodeStyleSetFlexDirectionJNI(this.f11148q, yogaFlexDirection.d());
    }

    @Override // com.facebook.yoga.YogaNode
    public void K(float f10) {
        YogaNative.jni_YGNodeStyleSetFlexGrowJNI(this.f11148q, f10);
    }

    @Override // com.facebook.yoga.YogaNode
    public void M(float f10) {
        YogaNative.jni_YGNodeStyleSetFlexShrinkJNI(this.f11148q, f10);
    }

    @Override // com.facebook.yoga.YogaNode
    public void N(g gVar, float f10) {
        YogaNative.jni_YGNodeStyleSetGapJNI(this.f11148q, gVar.d(), f10);
    }

    @Override // com.facebook.yoga.YogaNode
    public void O(g gVar, float f10) {
        YogaNative.jni_YGNodeStyleSetGapPercentJNI(this.f11148q, gVar.d(), f10);
    }

    @Override // com.facebook.yoga.YogaNode
    public void P(float f10) {
        YogaNative.jni_YGNodeStyleSetHeightJNI(this.f11148q, f10);
    }

    @Override // com.facebook.yoga.YogaNode
    public void Q() {
        YogaNative.jni_YGNodeStyleSetHeightAutoJNI(this.f11148q);
    }

    @Override // com.facebook.yoga.YogaNode
    public void R(float f10) {
        YogaNative.jni_YGNodeStyleSetHeightPercentJNI(this.f11148q, f10);
    }

    @Override // com.facebook.yoga.YogaNode
    public void S(YogaJustify yogaJustify) {
        YogaNative.jni_YGNodeStyleSetJustifyContentJNI(this.f11148q, yogaJustify.d());
    }

    @Override // com.facebook.yoga.YogaNode
    public void T(e eVar, float f10) {
        YogaNative.jni_YGNodeStyleSetMarginJNI(this.f11148q, eVar.e(), f10);
    }

    @Override // com.facebook.yoga.YogaNode
    public void U(e eVar) {
        YogaNative.jni_YGNodeStyleSetMarginAutoJNI(this.f11148q, eVar.e());
    }

    @Override // com.facebook.yoga.YogaNode
    public void V(e eVar, float f10) {
        YogaNative.jni_YGNodeStyleSetMarginPercentJNI(this.f11148q, eVar.e(), f10);
    }

    @Override // com.facebook.yoga.YogaNode
    public void W(float f10) {
        YogaNative.jni_YGNodeStyleSetMaxHeightJNI(this.f11148q, f10);
    }

    @Override // com.facebook.yoga.YogaNode
    public void X(float f10) {
        YogaNative.jni_YGNodeStyleSetMaxHeightPercentJNI(this.f11148q, f10);
    }

    @Override // com.facebook.yoga.YogaNode
    public void Y(float f10) {
        YogaNative.jni_YGNodeStyleSetMaxWidthJNI(this.f11148q, f10);
    }

    @Override // com.facebook.yoga.YogaNode
    public void Z(float f10) {
        YogaNative.jni_YGNodeStyleSetMaxWidthPercentJNI(this.f11148q, f10);
    }

    @Override // com.facebook.yoga.YogaNode
    public void a(YogaNode yogaNode, int i10) {
        if (!(yogaNode instanceof YogaNodeJNIBase)) {
            return;
        }
        YogaNodeJNIBase yogaNodeJNIBase = (YogaNodeJNIBase) yogaNode;
        if (yogaNodeJNIBase.f11143d == null) {
            if (this.f11145i == null) {
                this.f11145i = new ArrayList(4);
            }
            this.f11145i.add(i10, yogaNodeJNIBase);
            yogaNodeJNIBase.f11143d = this;
            YogaNative.jni_YGNodeInsertChildJNI(this.f11148q, yogaNodeJNIBase.f11148q, i10);
            return;
        }
        throw new IllegalStateException("Child already has a parent, it must be removed first.");
    }

    @Override // com.facebook.yoga.YogaNode
    public void a0(YogaMeasureFunction yogaMeasureFunction) {
        boolean z10;
        this.f11146o = yogaMeasureFunction;
        long j10 = this.f11148q;
        if (yogaMeasureFunction != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        YogaNative.jni_YGNodeSetHasMeasureFuncJNI(j10, z10);
    }

    @Override // com.facebook.yoga.YogaNode
    public void b(float f10, float f11) {
        p0(null);
        ArrayList arrayList = new ArrayList();
        arrayList.add(this);
        for (int i10 = 0; i10 < arrayList.size(); i10++) {
            YogaNodeJNIBase yogaNodeJNIBase = (YogaNodeJNIBase) arrayList.get(i10);
            List<YogaNodeJNIBase> list = yogaNodeJNIBase.f11145i;
            if (list != null) {
                for (YogaNodeJNIBase yogaNodeJNIBase2 : list) {
                    yogaNodeJNIBase2.p0(yogaNodeJNIBase);
                    arrayList.add(yogaNodeJNIBase2);
                }
            }
        }
        YogaNodeJNIBase[] yogaNodeJNIBaseArr = (YogaNodeJNIBase[]) arrayList.toArray(new YogaNodeJNIBase[arrayList.size()]);
        long[] jArr = new long[yogaNodeJNIBaseArr.length];
        for (int i11 = 0; i11 < yogaNodeJNIBaseArr.length; i11++) {
            jArr[i11] = yogaNodeJNIBaseArr[i11].f11148q;
        }
        YogaNative.jni_YGNodeCalculateLayoutJNI(this.f11148q, f10, f11, jArr, yogaNodeJNIBaseArr);
    }

    @Override // com.facebook.yoga.YogaNode
    public void b0(float f10) {
        YogaNative.jni_YGNodeStyleSetMinHeightJNI(this.f11148q, f10);
    }

    @sb.a
    public final float baseline(float f10, float f11) {
        return this.f11147p.a(this, f10, f11);
    }

    @Override // com.facebook.yoga.YogaNode
    public void c() {
        YogaNative.jni_YGNodeMarkDirtyJNI(this.f11148q);
    }

    @Override // com.facebook.yoga.YogaNode
    public void c0(float f10) {
        YogaNative.jni_YGNodeStyleSetMinHeightPercentJNI(this.f11148q, f10);
    }

    @Override // com.facebook.yoga.YogaNode
    public float d() {
        return YogaNative.jni_YGNodeStyleGetFlexJNI(this.f11148q);
    }

    @Override // com.facebook.yoga.YogaNode
    public void d0(float f10) {
        YogaNative.jni_YGNodeStyleSetMinWidthJNI(this.f11148q, f10);
    }

    @Override // com.facebook.yoga.YogaNode
    public YogaValue e() {
        return s0(YogaNative.jni_YGNodeStyleGetHeightJNI(this.f11148q));
    }

    @Override // com.facebook.yoga.YogaNode
    public void e0(float f10) {
        YogaNative.jni_YGNodeStyleSetMinWidthPercentJNI(this.f11148q, f10);
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
    public void f0(YogaOverflow yogaOverflow) {
        YogaNative.jni_YGNodeStyleSetOverflowJNI(this.f11148q, yogaOverflow.d());
    }

    @Override // com.facebook.yoga.YogaNode
    public float g() {
        float[] fArr = this.arr;
        if (fArr != null) {
            return fArr[2];
        }
        return 0.0f;
    }

    @Override // com.facebook.yoga.YogaNode
    public void g0(e eVar, float f10) {
        YogaNative.jni_YGNodeStyleSetPaddingJNI(this.f11148q, eVar.e(), f10);
    }

    @Override // com.facebook.yoga.YogaNode
    public void h0(e eVar, float f10) {
        YogaNative.jni_YGNodeStyleSetPaddingPercentJNI(this.f11148q, eVar.e(), f10);
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
                switch (a.f11151a[eVar.ordinal()]) {
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
        YogaNative.jni_YGNodeStyleSetPositionJNI(this.f11148q, eVar.e(), f10);
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
        YogaNative.jni_YGNodeStyleSetPositionPercentJNI(this.f11148q, eVar.e(), f10);
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
    public void k0(YogaPositionType yogaPositionType) {
        YogaNative.jni_YGNodeStyleSetPositionTypeJNI(this.f11148q, yogaPositionType.d());
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
    public void l0(float f10) {
        YogaNative.jni_YGNodeStyleSetWidthJNI(this.f11148q, f10);
    }

    @Override // com.facebook.yoga.YogaNode
    public YogaValue m(e eVar) {
        return s0(YogaNative.jni_YGNodeStyleGetPaddingJNI(this.f11148q, eVar.e()));
    }

    @Override // com.facebook.yoga.YogaNode
    public void m0() {
        YogaNative.jni_YGNodeStyleSetWidthAutoJNI(this.f11148q);
    }

    @sb.a
    public final long measure(float f10, int i10, float f11, int i11) {
        if (r()) {
            return this.f11146o.measure(this, f10, YogaMeasureMode.d(i10), f11, YogaMeasureMode.d(i11));
        }
        throw new RuntimeException("Measure function isn't defined!");
    }

    @Override // com.facebook.yoga.YogaNode
    public void n0(float f10) {
        YogaNative.jni_YGNodeStyleSetWidthPercentJNI(this.f11148q, f10);
    }

    @Override // com.facebook.yoga.YogaNode
    public YogaValue o() {
        return s0(YogaNative.jni_YGNodeStyleGetWidthJNI(this.f11148q));
    }

    @Override // com.facebook.yoga.YogaNode
    public void o0(YogaWrap yogaWrap) {
        YogaNative.jni_YGNodeStyleSetFlexWrapJNI(this.f11148q, yogaWrap.d());
    }

    @Override // com.facebook.yoga.YogaNode
    public boolean p() {
        float[] fArr = this.arr;
        if (fArr != null) {
            if ((((int) fArr[0]) & 16) != 16) {
                return false;
            }
            return true;
        }
        return this.f11150s;
    }

    @Override // com.facebook.yoga.YogaNode
    public boolean q() {
        return YogaNative.jni_YGNodeIsDirtyJNI(this.f11148q);
    }

    public Object q0() {
        return this.f11149r;
    }

    @Override // com.facebook.yoga.YogaNode
    public boolean r() {
        if (this.f11146o != null) {
            return true;
        }
        return false;
    }

    @Override // com.facebook.yoga.YogaNode
    /* renamed from: r0 */
    public YogaNodeJNIBase t(int i10) {
        List list = this.f11145i;
        if (list != null) {
            YogaNodeJNIBase yogaNodeJNIBase = (YogaNodeJNIBase) list.remove(i10);
            yogaNodeJNIBase.f11143d = null;
            YogaNative.jni_YGNodeRemoveChildJNI(this.f11148q, yogaNodeJNIBase.f11148q);
            return yogaNodeJNIBase;
        }
        throw new IllegalStateException("Trying to remove a child of a YogaNode that does not have children");
    }

    @Override // com.facebook.yoga.YogaNode
    public void s() {
        float[] fArr = this.arr;
        if (fArr != null) {
            fArr[0] = ((int) fArr[0]) & (-17);
        }
        this.f11150s = false;
    }

    @Override // com.facebook.yoga.YogaNode
    public void u() {
        this.f11146o = null;
        this.f11147p = null;
        this.f11149r = null;
        this.arr = null;
        this.f11150s = true;
        this.mLayoutDirection = 0;
        YogaNative.jni_YGNodeResetJNI(this.f11148q);
    }

    @Override // com.facebook.yoga.YogaNode
    public void v(YogaAlign yogaAlign) {
        YogaNative.jni_YGNodeStyleSetAlignContentJNI(this.f11148q, yogaAlign.d());
    }

    @Override // com.facebook.yoga.YogaNode
    public void w(YogaAlign yogaAlign) {
        YogaNative.jni_YGNodeStyleSetAlignItemsJNI(this.f11148q, yogaAlign.d());
    }

    @Override // com.facebook.yoga.YogaNode
    public void y(YogaAlign yogaAlign) {
        YogaNative.jni_YGNodeStyleSetAlignSelfJNI(this.f11148q, yogaAlign.d());
    }

    @Override // com.facebook.yoga.YogaNode
    public void z(float f10) {
        YogaNative.jni_YGNodeStyleSetAspectRatioJNI(this.f11148q, f10);
    }

    YogaNodeJNIBase() {
        this(YogaNative.jni_YGNodeNewJNI());
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public YogaNodeJNIBase(YogaConfig yogaConfig) {
        this(YogaNative.jni_YGNodeNewWithConfigJNI(((b) yogaConfig).f11182a));
        this.f11144e = yogaConfig;
    }
}
