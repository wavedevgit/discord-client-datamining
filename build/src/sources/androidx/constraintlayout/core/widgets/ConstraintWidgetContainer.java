package androidx.constraintlayout.core.widgets;

import androidx.constraintlayout.core.Metrics;
import androidx.constraintlayout.core.widgets.ConstraintWidget;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.facebook.react.views.textinput.ReactEditTextInputConnectionWrapper;
import java.lang.ref.WeakReference;
import java.util.Arrays;
import java.util.HashSet;
import java.util.Iterator;
import l1.b;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class ConstraintWidgetContainer extends k1.c {
    private int O0;
    public Metrics R0;
    int T0;
    int U0;
    int V0;
    int W0;
    l1.b M0 = new l1.b(this);
    public l1.e N0 = new l1.e(this);
    protected b.InterfaceC0477b P0 = null;
    private boolean Q0 = false;
    protected h1.d S0 = new h1.d();
    public int X0 = 0;
    public int Y0 = 0;
    c[] Z0 = new c[4];

    /* renamed from: a1  reason: collision with root package name */
    c[] f2753a1 = new c[4];

    /* renamed from: b1  reason: collision with root package name */
    public boolean f2754b1 = false;

    /* renamed from: c1  reason: collision with root package name */
    public boolean f2755c1 = false;

    /* renamed from: d1  reason: collision with root package name */
    public boolean f2756d1 = false;

    /* renamed from: e1  reason: collision with root package name */
    public int f2757e1 = 0;

    /* renamed from: f1  reason: collision with root package name */
    public int f2758f1 = 0;

    /* renamed from: g1  reason: collision with root package name */
    private int f2759g1 = 257;

    /* renamed from: h1  reason: collision with root package name */
    public boolean f2760h1 = false;

    /* renamed from: i1  reason: collision with root package name */
    private boolean f2761i1 = false;

    /* renamed from: j1  reason: collision with root package name */
    private boolean f2762j1 = false;

    /* renamed from: k1  reason: collision with root package name */
    int f2763k1 = 0;

    /* renamed from: l1  reason: collision with root package name */
    private WeakReference f2764l1 = null;

    /* renamed from: m1  reason: collision with root package name */
    private WeakReference f2765m1 = null;

    /* renamed from: n1  reason: collision with root package name */
    private WeakReference f2766n1 = null;

    /* renamed from: o1  reason: collision with root package name */
    private WeakReference f2767o1 = null;

    /* renamed from: p1  reason: collision with root package name */
    HashSet f2768p1 = new HashSet();

    /* renamed from: q1  reason: collision with root package name */
    public b.a f2769q1 = new b.a();

    private void B1(d dVar, h1.h hVar) {
        this.S0.h(hVar, this.S0.q(dVar), 0, 5);
    }

    private void C1(d dVar, h1.h hVar) {
        this.S0.h(this.S0.q(dVar), hVar, 0, 5);
    }

    private void D1(ConstraintWidget constraintWidget) {
        int i10 = this.Y0 + 1;
        c[] cVarArr = this.Z0;
        if (i10 >= cVarArr.length) {
            this.Z0 = (c[]) Arrays.copyOf(cVarArr, cVarArr.length * 2);
        }
        this.Z0[this.Y0] = new c(constraintWidget, 1, R1());
        this.Y0++;
    }

    public static boolean U1(int i10, ConstraintWidget constraintWidget, b.InterfaceC0477b interfaceC0477b, b.a aVar, int i11) {
        boolean z10;
        boolean z11;
        boolean z12;
        boolean z13;
        int i12;
        int i13;
        if (interfaceC0477b == null) {
            return false;
        }
        if (constraintWidget.V() != 8 && !(constraintWidget instanceof f) && !(constraintWidget instanceof a)) {
            aVar.f35632a = constraintWidget.A();
            aVar.f35633b = constraintWidget.T();
            aVar.f35634c = constraintWidget.W();
            aVar.f35635d = constraintWidget.x();
            aVar.f35640i = false;
            aVar.f35641j = i11;
            ConstraintWidget.b bVar = aVar.f35632a;
            ConstraintWidget.b bVar2 = ConstraintWidget.b.MATCH_CONSTRAINT;
            if (bVar == bVar2) {
                z10 = true;
            } else {
                z10 = false;
            }
            if (aVar.f35633b == bVar2) {
                z11 = true;
            } else {
                z11 = false;
            }
            if (z10 && constraintWidget.f2702d0 > 0.0f) {
                z12 = true;
            } else {
                z12 = false;
            }
            if (z11 && constraintWidget.f2702d0 > 0.0f) {
                z13 = true;
            } else {
                z13 = false;
            }
            if (z10 && constraintWidget.a0(0) && constraintWidget.f2739w == 0 && !z12) {
                aVar.f35632a = ConstraintWidget.b.WRAP_CONTENT;
                if (z11 && constraintWidget.f2741x == 0) {
                    aVar.f35632a = ConstraintWidget.b.FIXED;
                }
                z10 = false;
            }
            if (z11 && constraintWidget.a0(1) && constraintWidget.f2741x == 0 && !z13) {
                aVar.f35633b = ConstraintWidget.b.WRAP_CONTENT;
                if (z10 && constraintWidget.f2739w == 0) {
                    aVar.f35633b = ConstraintWidget.b.FIXED;
                }
                z11 = false;
            }
            if (constraintWidget.n0()) {
                aVar.f35632a = ConstraintWidget.b.FIXED;
                z10 = false;
            }
            if (constraintWidget.o0()) {
                aVar.f35633b = ConstraintWidget.b.FIXED;
                z11 = false;
            }
            if (z12) {
                if (constraintWidget.f2743y[0] == 4) {
                    aVar.f35632a = ConstraintWidget.b.FIXED;
                } else if (!z11) {
                    ConstraintWidget.b bVar3 = aVar.f35633b;
                    ConstraintWidget.b bVar4 = ConstraintWidget.b.FIXED;
                    if (bVar3 == bVar4) {
                        i13 = aVar.f35635d;
                    } else {
                        aVar.f35632a = ConstraintWidget.b.WRAP_CONTENT;
                        interfaceC0477b.b(constraintWidget, aVar);
                        i13 = aVar.f35637f;
                    }
                    aVar.f35632a = bVar4;
                    aVar.f35634c = (int) (constraintWidget.v() * i13);
                }
            }
            if (z13) {
                if (constraintWidget.f2743y[1] == 4) {
                    aVar.f35633b = ConstraintWidget.b.FIXED;
                } else if (!z10) {
                    ConstraintWidget.b bVar5 = aVar.f35632a;
                    ConstraintWidget.b bVar6 = ConstraintWidget.b.FIXED;
                    if (bVar5 == bVar6) {
                        i12 = aVar.f35634c;
                    } else {
                        aVar.f35633b = ConstraintWidget.b.WRAP_CONTENT;
                        interfaceC0477b.b(constraintWidget, aVar);
                        i12 = aVar.f35636e;
                    }
                    aVar.f35633b = bVar6;
                    if (constraintWidget.w() == -1) {
                        aVar.f35635d = (int) (i12 / constraintWidget.v());
                    } else {
                        aVar.f35635d = (int) (constraintWidget.v() * i12);
                    }
                }
            }
            interfaceC0477b.b(constraintWidget, aVar);
            constraintWidget.l1(aVar.f35636e);
            constraintWidget.M0(aVar.f35637f);
            constraintWidget.L0(aVar.f35639h);
            constraintWidget.B0(aVar.f35638g);
            aVar.f35641j = b.a.f35629k;
            return aVar.f35640i;
        }
        aVar.f35636e = 0;
        aVar.f35637f = 0;
        return false;
    }

    private void W1() {
        this.X0 = 0;
        this.Y0 = 0;
    }

    private void y1(ConstraintWidget constraintWidget) {
        int i10 = this.X0 + 1;
        c[] cVarArr = this.f2753a1;
        if (i10 >= cVarArr.length) {
            this.f2753a1 = (c[]) Arrays.copyOf(cVarArr, cVarArr.length * 2);
        }
        this.f2753a1[this.X0] = new c(constraintWidget, 0, R1());
        this.X0++;
    }

    public void A1(d dVar) {
        WeakReference weakReference = this.f2765m1;
        if (weakReference != null && weakReference.get() != null && dVar.e() <= ((d) this.f2765m1.get()).e()) {
            return;
        }
        this.f2765m1 = new WeakReference(dVar);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void E1(d dVar) {
        WeakReference weakReference = this.f2766n1;
        if (weakReference != null && weakReference.get() != null && dVar.e() <= ((d) this.f2766n1.get()).e()) {
            return;
        }
        this.f2766n1 = new WeakReference(dVar);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void F1(d dVar) {
        WeakReference weakReference = this.f2764l1;
        if (weakReference != null && weakReference.get() != null && dVar.e() <= ((d) this.f2764l1.get()).e()) {
            return;
        }
        this.f2764l1 = new WeakReference(dVar);
    }

    public boolean G1(boolean z10) {
        return this.N0.f(z10);
    }

    public boolean H1(boolean z10) {
        return this.N0.g(z10);
    }

    public boolean I1(boolean z10, int i10) {
        return this.N0.h(z10, i10);
    }

    public void J1(Metrics metrics) {
        this.R0 = metrics;
        this.S0.v(metrics);
    }

    public b.InterfaceC0477b K1() {
        return this.P0;
    }

    public int L1() {
        return this.f2759g1;
    }

    public h1.d M1() {
        return this.S0;
    }

    public boolean N1() {
        return false;
    }

    @Override // androidx.constraintlayout.core.widgets.ConstraintWidget
    public void O(StringBuilder sb2) {
        sb2.append(this.f2723o + ":{\n");
        sb2.append("  actualWidth:" + this.f2698b0);
        sb2.append(ReactEditTextInputConnectionWrapper.NEWLINE_RAW_VALUE);
        sb2.append("  actualHeight:" + this.f2700c0);
        sb2.append(ReactEditTextInputConnectionWrapper.NEWLINE_RAW_VALUE);
        Iterator it = s1().iterator();
        while (it.hasNext()) {
            ((ConstraintWidget) it.next()).O(sb2);
            sb2.append(",\n");
        }
        sb2.append("}");
    }

    public void O1() {
        this.N0.j();
    }

    public void P1() {
        this.N0.k();
    }

    public boolean Q1() {
        return this.f2762j1;
    }

    public boolean R1() {
        return this.Q0;
    }

    public boolean S1() {
        return this.f2761i1;
    }

    public long T1(int i10, int i11, int i12, int i13, int i14, int i15, int i16, int i17, int i18) {
        this.T0 = i17;
        this.U0 = i18;
        return this.M0.d(this, i10, i17, i18, i11, i12, i13, i14, i15, i16);
    }

    public boolean V1(int i10) {
        if ((this.f2759g1 & i10) == i10) {
            return true;
        }
        return false;
    }

    public void X1(b.InterfaceC0477b interfaceC0477b) {
        this.P0 = interfaceC0477b;
        this.N0.n(interfaceC0477b);
    }

    public void Y1(int i10) {
        this.f2759g1 = i10;
        h1.d.f25679s = V1(IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING);
    }

    public void Z1(int i10) {
        this.O0 = i10;
    }

    public void a2(boolean z10) {
        this.Q0 = z10;
    }

    public boolean b2(h1.d dVar, boolean[] zArr) {
        zArr[2] = false;
        boolean V1 = V1(64);
        r1(dVar, V1);
        int size = this.L0.size();
        boolean z10 = false;
        for (int i10 = 0; i10 < size; i10++) {
            ConstraintWidget constraintWidget = (ConstraintWidget) this.L0.get(i10);
            constraintWidget.r1(dVar, V1);
            if (constraintWidget.c0()) {
                z10 = true;
            }
        }
        return z10;
    }

    public void c2() {
        this.M0.e(this);
    }

    @Override // androidx.constraintlayout.core.widgets.ConstraintWidget
    public void q1(boolean z10, boolean z11) {
        super.q1(z10, z11);
        int size = this.L0.size();
        for (int i10 = 0; i10 < size; i10++) {
            ((ConstraintWidget) this.L0.get(i10)).q1(z10, z11);
        }
    }

    @Override // k1.c, androidx.constraintlayout.core.widgets.ConstraintWidget
    public void t0() {
        this.S0.G();
        this.T0 = 0;
        this.V0 = 0;
        this.U0 = 0;
        this.W0 = 0;
        this.f2760h1 = false;
        super.t0();
    }

    /* JADX WARN: Multi-variable type inference failed */
    /* JADX WARN: Removed duplicated region for block: B:124:0x021f  */
    /* JADX WARN: Removed duplicated region for block: B:125:0x0228  */
    /* JADX WARN: Removed duplicated region for block: B:131:0x0247 A[ADDED_TO_REGION] */
    /* JADX WARN: Removed duplicated region for block: B:149:0x02c6  */
    /* JADX WARN: Removed duplicated region for block: B:152:0x02e3  */
    /* JADX WARN: Removed duplicated region for block: B:154:0x02f2  */
    /* JADX WARN: Removed duplicated region for block: B:169:0x0338  */
    /* JADX WARN: Removed duplicated region for block: B:170:0x033b  */
    /* JADX WARN: Type inference failed for: r18v10 */
    /* JADX WARN: Type inference failed for: r18v2 */
    /* JADX WARN: Type inference failed for: r18v3 */
    /* JADX WARN: Type inference failed for: r18v5 */
    /* JADX WARN: Type inference failed for: r18v6 */
    /* JADX WARN: Type inference failed for: r18v7 */
    /* JADX WARN: Type inference failed for: r18v8 */
    /* JADX WARN: Type inference failed for: r18v9 */
    /* JADX WARN: Type inference failed for: r6v23 */
    /* JADX WARN: Type inference failed for: r6v4 */
    /* JADX WARN: Type inference failed for: r6v5, types: [boolean] */
    @Override // k1.c
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public void t1() {
        /*
            Method dump skipped, instructions count: 861
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: androidx.constraintlayout.core.widgets.ConstraintWidgetContainer.t1():void");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void w1(ConstraintWidget constraintWidget, int i10) {
        if (i10 == 0) {
            y1(constraintWidget);
        } else if (i10 == 1) {
            D1(constraintWidget);
        }
    }

    public boolean x1(h1.d dVar) {
        ConstraintWidgetContainer constraintWidgetContainer;
        h1.d dVar2;
        int i10;
        boolean V1 = V1(64);
        g(dVar, V1);
        int size = this.L0.size();
        boolean z10 = false;
        for (int i11 = 0; i11 < size; i11++) {
            ConstraintWidget constraintWidget = (ConstraintWidget) this.L0.get(i11);
            constraintWidget.T0(0, false);
            constraintWidget.T0(1, false);
            if (constraintWidget instanceof a) {
                z10 = true;
            }
        }
        if (z10) {
            for (int i12 = 0; i12 < size; i12++) {
                ConstraintWidget constraintWidget2 = (ConstraintWidget) this.L0.get(i12);
                if (constraintWidget2 instanceof a) {
                    ((a) constraintWidget2).z1();
                }
            }
        }
        this.f2768p1.clear();
        for (int i13 = 0; i13 < size; i13++) {
            ConstraintWidget constraintWidget3 = (ConstraintWidget) this.L0.get(i13);
            if (constraintWidget3.f()) {
                if (constraintWidget3 instanceof h) {
                    this.f2768p1.add(constraintWidget3);
                } else {
                    constraintWidget3.g(dVar, V1);
                }
            }
        }
        while (this.f2768p1.size() > 0) {
            int size2 = this.f2768p1.size();
            Iterator it = this.f2768p1.iterator();
            while (true) {
                if (!it.hasNext()) {
                    break;
                }
                h hVar = (h) ((ConstraintWidget) it.next());
                if (hVar.w1(this.f2768p1)) {
                    hVar.g(dVar, V1);
                    this.f2768p1.remove(hVar);
                    break;
                }
            }
            if (size2 == this.f2768p1.size()) {
                Iterator it2 = this.f2768p1.iterator();
                while (it2.hasNext()) {
                    ((ConstraintWidget) it2.next()).g(dVar, V1);
                }
                this.f2768p1.clear();
            }
        }
        if (h1.d.f25679s) {
            HashSet hashSet = new HashSet();
            for (int i14 = 0; i14 < size; i14++) {
                ConstraintWidget constraintWidget4 = (ConstraintWidget) this.L0.get(i14);
                if (!constraintWidget4.f()) {
                    hashSet.add(constraintWidget4);
                }
            }
            if (A() == ConstraintWidget.b.WRAP_CONTENT) {
                i10 = 0;
            } else {
                i10 = 1;
            }
            constraintWidgetContainer = this;
            dVar2 = dVar;
            constraintWidgetContainer.e(this, dVar2, hashSet, i10, false);
            Iterator it3 = hashSet.iterator();
            while (it3.hasNext()) {
                ConstraintWidget constraintWidget5 = (ConstraintWidget) it3.next();
                g.a(this, dVar2, constraintWidget5);
                constraintWidget5.g(dVar2, V1);
            }
        } else {
            constraintWidgetContainer = this;
            dVar2 = dVar;
            for (int i15 = 0; i15 < size; i15++) {
                ConstraintWidget constraintWidget6 = (ConstraintWidget) constraintWidgetContainer.L0.get(i15);
                if (constraintWidget6 instanceof ConstraintWidgetContainer) {
                    ConstraintWidget.b[] bVarArr = constraintWidget6.Z;
                    ConstraintWidget.b bVar = bVarArr[0];
                    ConstraintWidget.b bVar2 = bVarArr[1];
                    ConstraintWidget.b bVar3 = ConstraintWidget.b.WRAP_CONTENT;
                    if (bVar == bVar3) {
                        constraintWidget6.Q0(ConstraintWidget.b.FIXED);
                    }
                    if (bVar2 == bVar3) {
                        constraintWidget6.h1(ConstraintWidget.b.FIXED);
                    }
                    constraintWidget6.g(dVar2, V1);
                    if (bVar == bVar3) {
                        constraintWidget6.Q0(bVar);
                    }
                    if (bVar2 == bVar3) {
                        constraintWidget6.h1(bVar2);
                    }
                } else {
                    g.a(this, dVar2, constraintWidget6);
                    if (!constraintWidget6.f()) {
                        constraintWidget6.g(dVar2, V1);
                    }
                }
            }
        }
        if (constraintWidgetContainer.X0 > 0) {
            b.b(this, dVar2, null, 0);
        }
        if (constraintWidgetContainer.Y0 > 0) {
            b.b(this, dVar2, null, 1);
        }
        return true;
    }

    public void z1(d dVar) {
        WeakReference weakReference = this.f2767o1;
        if (weakReference != null && weakReference.get() != null && dVar.e() <= ((d) this.f2767o1.get()).e()) {
            return;
        }
        this.f2767o1 = new WeakReference(dVar);
    }
}
