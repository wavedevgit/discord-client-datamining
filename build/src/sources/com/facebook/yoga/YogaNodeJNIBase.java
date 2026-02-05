package com.facebook.yoga;

import java.util.ArrayList;
import java.util.List;
@sb.a
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class YogaNodeJNIBase extends YogaNode implements Cloneable {
    @sb.a
    private float[] arr;

    /* renamed from: d  reason: collision with root package name */
    private YogaNodeJNIBase f11528d;

    /* renamed from: e  reason: collision with root package name */
    private YogaConfig f11529e;

    /* renamed from: i  reason: collision with root package name */
    private List f11530i;
    @sb.a
    private int mLayoutDirection;

    /* renamed from: o  reason: collision with root package name */
    private YogaMeasureFunction f11531o;

    /* renamed from: p  reason: collision with root package name */
    private YogaBaselineFunction f11532p;

    /* renamed from: q  reason: collision with root package name */
    protected long f11533q;

    /* renamed from: r  reason: collision with root package name */
    private Object f11534r;

    /* renamed from: s  reason: collision with root package name */
    private boolean f11535s;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f11536a;

        static {
            int[] iArr = new int[e.values().length];
            f11536a = iArr;
            try {
                iArr[e.LEFT.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f11536a[e.TOP.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f11536a[e.RIGHT.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                f11536a[e.BOTTOM.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                f11536a[e.START.ordinal()] = 5;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                f11536a[e.END.ordinal()] = 6;
            } catch (NoSuchFieldError unused6) {
            }
        }
    }

    private YogaNodeJNIBase(long j10) {
        this.arr = null;
        this.mLayoutDirection = 0;
        this.f11535s = true;
        if (j10 != 0) {
            this.f11533q = j10;
            return;
        }
        throw new IllegalStateException("Failed to allocate native memory");
    }

    private void q0(YogaNode yogaNode) {
        r0();
    }

    @sb.a
    private final long replaceChild(YogaNodeJNIBase yogaNodeJNIBase, int i10) {
        List list = this.f11530i;
        if (list != null) {
            list.remove(i10);
            this.f11530i.add(i10, yogaNodeJNIBase);
            yogaNodeJNIBase.f11528d = this;
            return yogaNodeJNIBase.f11533q;
        }
        throw new IllegalStateException("Cannot replace child. YogaNode does not have children");
    }

    private static YogaValue t0(long j10) {
        return new YogaValue(Float.intBitsToFloat((int) j10), (int) (j10 >> 32));
    }

    @Override // com.facebook.yoga.YogaNode
    public void A(YogaBaselineFunction yogaBaselineFunction) {
        boolean z10;
        this.f11532p = yogaBaselineFunction;
        long j10 = this.f11533q;
        if (yogaBaselineFunction != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        YogaNative.jni_YGNodeSetHasBaselineFuncJNI(j10, z10);
    }

    @Override // com.facebook.yoga.YogaNode
    public void B(e eVar, float f10) {
        YogaNative.jni_YGNodeStyleSetBorderJNI(this.f11533q, eVar.e(), f10);
    }

    @Override // com.facebook.yoga.YogaNode
    public void C(Object obj) {
        this.f11534r = obj;
    }

    @Override // com.facebook.yoga.YogaNode
    public void D(YogaDirection yogaDirection) {
        YogaNative.jni_YGNodeStyleSetDirectionJNI(this.f11533q, yogaDirection.e());
    }

    @Override // com.facebook.yoga.YogaNode
    public void E(YogaDisplay yogaDisplay) {
        YogaNative.jni_YGNodeStyleSetDisplayJNI(this.f11533q, yogaDisplay.d());
    }

    @Override // com.facebook.yoga.YogaNode
    public void F(float f10) {
        YogaNative.jni_YGNodeStyleSetFlexJNI(this.f11533q, f10);
    }

    @Override // com.facebook.yoga.YogaNode
    public void G(float f10) {
        YogaNative.jni_YGNodeStyleSetFlexBasisJNI(this.f11533q, f10);
    }

    @Override // com.facebook.yoga.YogaNode
    public void H() {
        YogaNative.jni_YGNodeStyleSetFlexBasisAutoJNI(this.f11533q);
    }

    @Override // com.facebook.yoga.YogaNode
    public void I(float f10) {
        YogaNative.jni_YGNodeStyleSetFlexBasisPercentJNI(this.f11533q, f10);
    }

    @Override // com.facebook.yoga.YogaNode
    public void J(YogaFlexDirection yogaFlexDirection) {
        YogaNative.jni_YGNodeStyleSetFlexDirectionJNI(this.f11533q, yogaFlexDirection.d());
    }

    @Override // com.facebook.yoga.YogaNode
    public void K(float f10) {
        YogaNative.jni_YGNodeStyleSetFlexGrowJNI(this.f11533q, f10);
    }

    @Override // com.facebook.yoga.YogaNode
    public void M(float f10) {
        YogaNative.jni_YGNodeStyleSetFlexShrinkJNI(this.f11533q, f10);
    }

    @Override // com.facebook.yoga.YogaNode
    public void N(g gVar, float f10) {
        YogaNative.jni_YGNodeStyleSetGapJNI(this.f11533q, gVar.d(), f10);
    }

    @Override // com.facebook.yoga.YogaNode
    public void O(g gVar, float f10) {
        YogaNative.jni_YGNodeStyleSetGapPercentJNI(this.f11533q, gVar.d(), f10);
    }

    @Override // com.facebook.yoga.YogaNode
    public void P(float f10) {
        YogaNative.jni_YGNodeStyleSetHeightJNI(this.f11533q, f10);
    }

    @Override // com.facebook.yoga.YogaNode
    public void Q() {
        YogaNative.jni_YGNodeStyleSetHeightAutoJNI(this.f11533q);
    }

    @Override // com.facebook.yoga.YogaNode
    public void R(float f10) {
        YogaNative.jni_YGNodeStyleSetHeightPercentJNI(this.f11533q, f10);
    }

    @Override // com.facebook.yoga.YogaNode
    public void S(YogaJustify yogaJustify) {
        YogaNative.jni_YGNodeStyleSetJustifyContentJNI(this.f11533q, yogaJustify.d());
    }

    @Override // com.facebook.yoga.YogaNode
    public void T(e eVar, float f10) {
        YogaNative.jni_YGNodeStyleSetMarginJNI(this.f11533q, eVar.e(), f10);
    }

    @Override // com.facebook.yoga.YogaNode
    public void U(e eVar) {
        YogaNative.jni_YGNodeStyleSetMarginAutoJNI(this.f11533q, eVar.e());
    }

    @Override // com.facebook.yoga.YogaNode
    public void W(e eVar, float f10) {
        YogaNative.jni_YGNodeStyleSetMarginPercentJNI(this.f11533q, eVar.e(), f10);
    }

    @Override // com.facebook.yoga.YogaNode
    public void X(float f10) {
        YogaNative.jni_YGNodeStyleSetMaxHeightJNI(this.f11533q, f10);
    }

    @Override // com.facebook.yoga.YogaNode
    public void Y(float f10) {
        YogaNative.jni_YGNodeStyleSetMaxHeightPercentJNI(this.f11533q, f10);
    }

    @Override // com.facebook.yoga.YogaNode
    public void Z(float f10) {
        YogaNative.jni_YGNodeStyleSetMaxWidthJNI(this.f11533q, f10);
    }

    @Override // com.facebook.yoga.YogaNode
    public void a(YogaNode yogaNode, int i10) {
        if (!(yogaNode instanceof YogaNodeJNIBase)) {
            return;
        }
        YogaNodeJNIBase yogaNodeJNIBase = (YogaNodeJNIBase) yogaNode;
        if (yogaNodeJNIBase.f11528d == null) {
            if (this.f11530i == null) {
                this.f11530i = new ArrayList(4);
            }
            this.f11530i.add(i10, yogaNodeJNIBase);
            yogaNodeJNIBase.f11528d = this;
            YogaNative.jni_YGNodeInsertChildJNI(this.f11533q, yogaNodeJNIBase.f11533q, i10);
            return;
        }
        throw new IllegalStateException("Child already has a parent, it must be removed first.");
    }

    @Override // com.facebook.yoga.YogaNode
    public void a0(float f10) {
        YogaNative.jni_YGNodeStyleSetMaxWidthPercentJNI(this.f11533q, f10);
    }

    @Override // com.facebook.yoga.YogaNode
    public void b(float f10, float f11) {
        q0(null);
        ArrayList arrayList = new ArrayList();
        arrayList.add(this);
        for (int i10 = 0; i10 < arrayList.size(); i10++) {
            YogaNodeJNIBase yogaNodeJNIBase = (YogaNodeJNIBase) arrayList.get(i10);
            List<YogaNodeJNIBase> list = yogaNodeJNIBase.f11530i;
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
            jArr[i11] = yogaNodeJNIBaseArr[i11].f11533q;
        }
        YogaNative.jni_YGNodeCalculateLayoutJNI(this.f11533q, f10, f11, jArr, yogaNodeJNIBaseArr);
    }

    @Override // com.facebook.yoga.YogaNode
    public void b0(YogaMeasureFunction yogaMeasureFunction) {
        boolean z10;
        this.f11531o = yogaMeasureFunction;
        long j10 = this.f11533q;
        if (yogaMeasureFunction != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        YogaNative.jni_YGNodeSetHasMeasureFuncJNI(j10, z10);
    }

    @sb.a
    public final float baseline(float f10, float f11) {
        return this.f11532p.a(this, f10, f11);
    }

    @Override // com.facebook.yoga.YogaNode
    public void c() {
        YogaNative.jni_YGNodeMarkDirtyJNI(this.f11533q);
    }

    @Override // com.facebook.yoga.YogaNode
    public void c0(float f10) {
        YogaNative.jni_YGNodeStyleSetMinHeightJNI(this.f11533q, f10);
    }

    @Override // com.facebook.yoga.YogaNode
    public float d() {
        return YogaNative.jni_YGNodeStyleGetFlexJNI(this.f11533q);
    }

    @Override // com.facebook.yoga.YogaNode
    public void d0(float f10) {
        YogaNative.jni_YGNodeStyleSetMinHeightPercentJNI(this.f11533q, f10);
    }

    @Override // com.facebook.yoga.YogaNode
    public YogaValue e() {
        return t0(YogaNative.jni_YGNodeStyleGetHeightJNI(this.f11533q));
    }

    @Override // com.facebook.yoga.YogaNode
    public void e0(float f10) {
        YogaNative.jni_YGNodeStyleSetMinWidthJNI(this.f11533q, f10);
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
        YogaNative.jni_YGNodeStyleSetMinWidthPercentJNI(this.f11533q, f10);
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
    public void g0(YogaOverflow yogaOverflow) {
        YogaNative.jni_YGNodeStyleSetOverflowJNI(this.f11533q, yogaOverflow.d());
    }

    @Override // com.facebook.yoga.YogaNode
    public void h0(e eVar, float f10) {
        YogaNative.jni_YGNodeStyleSetPaddingJNI(this.f11533q, eVar.e(), f10);
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
                switch (a.f11536a[eVar.ordinal()]) {
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
        YogaNative.jni_YGNodeStyleSetPaddingPercentJNI(this.f11533q, eVar.e(), f10);
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
        YogaNative.jni_YGNodeStyleSetPositionJNI(this.f11533q, eVar.e(), f10);
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
        YogaNative.jni_YGNodeStyleSetPositionPercentJNI(this.f11533q, eVar.e(), f10);
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
        YogaNative.jni_YGNodeStyleSetPositionTypeJNI(this.f11533q, yogaPositionType.d());
    }

    @Override // com.facebook.yoga.YogaNode
    public YogaValue m(e eVar) {
        return t0(YogaNative.jni_YGNodeStyleGetPaddingJNI(this.f11533q, eVar.e()));
    }

    @Override // com.facebook.yoga.YogaNode
    public void m0(float f10) {
        YogaNative.jni_YGNodeStyleSetWidthJNI(this.f11533q, f10);
    }

    @sb.a
    public final long measure(float f10, int i10, float f11, int i11) {
        if (r()) {
            return this.f11531o.measure(this, f10, YogaMeasureMode.d(i10), f11, YogaMeasureMode.d(i11));
        }
        throw new RuntimeException("Measure function isn't defined!");
    }

    @Override // com.facebook.yoga.YogaNode
    public YogaValue n() {
        return t0(YogaNative.jni_YGNodeStyleGetWidthJNI(this.f11533q));
    }

    @Override // com.facebook.yoga.YogaNode
    public void n0() {
        YogaNative.jni_YGNodeStyleSetWidthAutoJNI(this.f11533q);
    }

    @Override // com.facebook.yoga.YogaNode
    public void o0(float f10) {
        YogaNative.jni_YGNodeStyleSetWidthPercentJNI(this.f11533q, f10);
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
        return this.f11535s;
    }

    @Override // com.facebook.yoga.YogaNode
    public void p0(YogaWrap yogaWrap) {
        YogaNative.jni_YGNodeStyleSetFlexWrapJNI(this.f11533q, yogaWrap.d());
    }

    @Override // com.facebook.yoga.YogaNode
    public boolean q() {
        return YogaNative.jni_YGNodeIsDirtyJNI(this.f11533q);
    }

    @Override // com.facebook.yoga.YogaNode
    public boolean r() {
        if (this.f11531o != null) {
            return true;
        }
        return false;
    }

    public Object r0() {
        return this.f11534r;
    }

    @Override // com.facebook.yoga.YogaNode
    public void s() {
        float[] fArr = this.arr;
        if (fArr != null) {
            fArr[0] = ((int) fArr[0]) & (-17);
        }
        this.f11535s = false;
    }

    @Override // com.facebook.yoga.YogaNode
    /* renamed from: s0 */
    public YogaNodeJNIBase t(int i10) {
        List list = this.f11530i;
        if (list != null) {
            YogaNodeJNIBase yogaNodeJNIBase = (YogaNodeJNIBase) list.remove(i10);
            yogaNodeJNIBase.f11528d = null;
            YogaNative.jni_YGNodeRemoveChildJNI(this.f11533q, yogaNodeJNIBase.f11533q);
            return yogaNodeJNIBase;
        }
        throw new IllegalStateException("Trying to remove a child of a YogaNode that does not have children");
    }

    @Override // com.facebook.yoga.YogaNode
    public void u() {
        this.f11531o = null;
        this.f11532p = null;
        this.f11534r = null;
        this.arr = null;
        this.f11535s = true;
        this.mLayoutDirection = 0;
        YogaNative.jni_YGNodeResetJNI(this.f11533q);
    }

    @Override // com.facebook.yoga.YogaNode
    public void v(YogaAlign yogaAlign) {
        YogaNative.jni_YGNodeStyleSetAlignContentJNI(this.f11533q, yogaAlign.d());
    }

    @Override // com.facebook.yoga.YogaNode
    public void w(YogaAlign yogaAlign) {
        YogaNative.jni_YGNodeStyleSetAlignItemsJNI(this.f11533q, yogaAlign.d());
    }

    @Override // com.facebook.yoga.YogaNode
    public void x(YogaAlign yogaAlign) {
        YogaNative.jni_YGNodeStyleSetAlignSelfJNI(this.f11533q, yogaAlign.d());
    }

    @Override // com.facebook.yoga.YogaNode
    public void z(float f10) {
        YogaNative.jni_YGNodeStyleSetAspectRatioJNI(this.f11533q, f10);
    }

    YogaNodeJNIBase() {
        this(YogaNative.jni_YGNodeNewJNI());
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public YogaNodeJNIBase(YogaConfig yogaConfig) {
        this(YogaNative.jni_YGNodeNewWithConfigJNI(((b) yogaConfig).f11567a));
        this.f11529e = yogaConfig;
    }
}
