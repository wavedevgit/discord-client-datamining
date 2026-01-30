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
    protected b.InterfaceC0474b P0 = null;
    private boolean Q0 = false;
    protected h1.d S0 = new h1.d();
    public int X0 = 0;
    public int Y0 = 0;
    c[] Z0 = new c[4];

    /* renamed from: a1  reason: collision with root package name */
    c[] f2299a1 = new c[4];

    /* renamed from: b1  reason: collision with root package name */
    public boolean f2300b1 = false;

    /* renamed from: c1  reason: collision with root package name */
    public boolean f2301c1 = false;

    /* renamed from: d1  reason: collision with root package name */
    public boolean f2302d1 = false;

    /* renamed from: e1  reason: collision with root package name */
    public int f2303e1 = 0;

    /* renamed from: f1  reason: collision with root package name */
    public int f2304f1 = 0;

    /* renamed from: g1  reason: collision with root package name */
    private int f2305g1 = 257;

    /* renamed from: h1  reason: collision with root package name */
    public boolean f2306h1 = false;

    /* renamed from: i1  reason: collision with root package name */
    private boolean f2307i1 = false;

    /* renamed from: j1  reason: collision with root package name */
    private boolean f2308j1 = false;

    /* renamed from: k1  reason: collision with root package name */
    int f2309k1 = 0;

    /* renamed from: l1  reason: collision with root package name */
    private WeakReference f2310l1 = null;

    /* renamed from: m1  reason: collision with root package name */
    private WeakReference f2311m1 = null;

    /* renamed from: n1  reason: collision with root package name */
    private WeakReference f2312n1 = null;

    /* renamed from: o1  reason: collision with root package name */
    private WeakReference f2313o1 = null;

    /* renamed from: p1  reason: collision with root package name */
    HashSet f2314p1 = new HashSet();

    /* renamed from: q1  reason: collision with root package name */
    public b.a f2315q1 = new b.a();

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

    public static boolean U1(int i10, ConstraintWidget constraintWidget, b.InterfaceC0474b interfaceC0474b, b.a aVar, int i11) {
        boolean z10;
        boolean z11;
        boolean z12;
        boolean z13;
        int i12;
        int i13;
        if (interfaceC0474b == null) {
            return false;
        }
        if (constraintWidget.V() != 8 && !(constraintWidget instanceof f) && !(constraintWidget instanceof a)) {
            aVar.f36729a = constraintWidget.A();
            aVar.f36730b = constraintWidget.T();
            aVar.f36731c = constraintWidget.W();
            aVar.f36732d = constraintWidget.x();
            aVar.f36737i = false;
            aVar.f36738j = i11;
            ConstraintWidget.b bVar = aVar.f36729a;
            ConstraintWidget.b bVar2 = ConstraintWidget.b.MATCH_CONSTRAINT;
            if (bVar == bVar2) {
                z10 = true;
            } else {
                z10 = false;
            }
            if (aVar.f36730b == bVar2) {
                z11 = true;
            } else {
                z11 = false;
            }
            if (z10 && constraintWidget.f2248d0 > 0.0f) {
                z12 = true;
            } else {
                z12 = false;
            }
            if (z11 && constraintWidget.f2248d0 > 0.0f) {
                z13 = true;
            } else {
                z13 = false;
            }
            if (z10 && constraintWidget.a0(0) && constraintWidget.f2285w == 0 && !z12) {
                aVar.f36729a = ConstraintWidget.b.WRAP_CONTENT;
                if (z11 && constraintWidget.f2287x == 0) {
                    aVar.f36729a = ConstraintWidget.b.FIXED;
                }
                z10 = false;
            }
            if (z11 && constraintWidget.a0(1) && constraintWidget.f2287x == 0 && !z13) {
                aVar.f36730b = ConstraintWidget.b.WRAP_CONTENT;
                if (z10 && constraintWidget.f2285w == 0) {
                    aVar.f36730b = ConstraintWidget.b.FIXED;
                }
                z11 = false;
            }
            if (constraintWidget.n0()) {
                aVar.f36729a = ConstraintWidget.b.FIXED;
                z10 = false;
            }
            if (constraintWidget.o0()) {
                aVar.f36730b = ConstraintWidget.b.FIXED;
                z11 = false;
            }
            if (z12) {
                if (constraintWidget.f2289y[0] == 4) {
                    aVar.f36729a = ConstraintWidget.b.FIXED;
                } else if (!z11) {
                    ConstraintWidget.b bVar3 = aVar.f36730b;
                    ConstraintWidget.b bVar4 = ConstraintWidget.b.FIXED;
                    if (bVar3 == bVar4) {
                        i13 = aVar.f36732d;
                    } else {
                        aVar.f36729a = ConstraintWidget.b.WRAP_CONTENT;
                        interfaceC0474b.b(constraintWidget, aVar);
                        i13 = aVar.f36734f;
                    }
                    aVar.f36729a = bVar4;
                    aVar.f36731c = (int) (constraintWidget.v() * i13);
                }
            }
            if (z13) {
                if (constraintWidget.f2289y[1] == 4) {
                    aVar.f36730b = ConstraintWidget.b.FIXED;
                } else if (!z10) {
                    ConstraintWidget.b bVar5 = aVar.f36729a;
                    ConstraintWidget.b bVar6 = ConstraintWidget.b.FIXED;
                    if (bVar5 == bVar6) {
                        i12 = aVar.f36731c;
                    } else {
                        aVar.f36730b = ConstraintWidget.b.WRAP_CONTENT;
                        interfaceC0474b.b(constraintWidget, aVar);
                        i12 = aVar.f36733e;
                    }
                    aVar.f36730b = bVar6;
                    if (constraintWidget.w() == -1) {
                        aVar.f36732d = (int) (i12 / constraintWidget.v());
                    } else {
                        aVar.f36732d = (int) (constraintWidget.v() * i12);
                    }
                }
            }
            interfaceC0474b.b(constraintWidget, aVar);
            constraintWidget.l1(aVar.f36733e);
            constraintWidget.M0(aVar.f36734f);
            constraintWidget.L0(aVar.f36736h);
            constraintWidget.B0(aVar.f36735g);
            aVar.f36738j = b.a.f36726k;
            return aVar.f36737i;
        }
        aVar.f36733e = 0;
        aVar.f36734f = 0;
        return false;
    }

    private void W1() {
        this.X0 = 0;
        this.Y0 = 0;
    }

    private void y1(ConstraintWidget constraintWidget) {
        int i10 = this.X0 + 1;
        c[] cVarArr = this.f2299a1;
        if (i10 >= cVarArr.length) {
            this.f2299a1 = (c[]) Arrays.copyOf(cVarArr, cVarArr.length * 2);
        }
        this.f2299a1[this.X0] = new c(constraintWidget, 0, R1());
        this.X0++;
    }

    public void A1(d dVar) {
        WeakReference weakReference = this.f2311m1;
        if (weakReference != null && weakReference.get() != null && dVar.e() <= ((d) this.f2311m1.get()).e()) {
            return;
        }
        this.f2311m1 = new WeakReference(dVar);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void E1(d dVar) {
        WeakReference weakReference = this.f2312n1;
        if (weakReference != null && weakReference.get() != null && dVar.e() <= ((d) this.f2312n1.get()).e()) {
            return;
        }
        this.f2312n1 = new WeakReference(dVar);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void F1(d dVar) {
        WeakReference weakReference = this.f2310l1;
        if (weakReference != null && weakReference.get() != null && dVar.e() <= ((d) this.f2310l1.get()).e()) {
            return;
        }
        this.f2310l1 = new WeakReference(dVar);
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

    public b.InterfaceC0474b K1() {
        return this.P0;
    }

    public int L1() {
        return this.f2305g1;
    }

    public h1.d M1() {
        return this.S0;
    }

    public boolean N1() {
        return false;
    }

    @Override // androidx.constraintlayout.core.widgets.ConstraintWidget
    public void O(StringBuilder sb2) {
        sb2.append(this.f2269o + ":{\n");
        sb2.append("  actualWidth:" + this.f2244b0);
        sb2.append(ReactEditTextInputConnectionWrapper.NEWLINE_RAW_VALUE);
        sb2.append("  actualHeight:" + this.f2246c0);
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
        return this.f2308j1;
    }

    public boolean R1() {
        return this.Q0;
    }

    public boolean S1() {
        return this.f2307i1;
    }

    public long T1(int i10, int i11, int i12, int i13, int i14, int i15, int i16, int i17, int i18) {
        this.T0 = i17;
        this.U0 = i18;
        return this.M0.d(this, i10, i17, i18, i11, i12, i13, i14, i15, i16);
    }

    public boolean V1(int i10) {
        if ((this.f2305g1 & i10) == i10) {
            return true;
        }
        return false;
    }

    public void X1(b.InterfaceC0474b interfaceC0474b) {
        this.P0 = interfaceC0474b;
        this.N0.n(interfaceC0474b);
    }

    public void Y1(int i10) {
        this.f2305g1 = i10;
        h1.d.f27252s = V1(IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING);
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
        this.f2306h1 = false;
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
        this.f2314p1.clear();
        for (int i13 = 0; i13 < size; i13++) {
            ConstraintWidget constraintWidget3 = (ConstraintWidget) this.L0.get(i13);
            if (constraintWidget3.f()) {
                if (constraintWidget3 instanceof h) {
                    this.f2314p1.add(constraintWidget3);
                } else {
                    constraintWidget3.g(dVar, V1);
                }
            }
        }
        while (this.f2314p1.size() > 0) {
            int size2 = this.f2314p1.size();
            Iterator it = this.f2314p1.iterator();
            while (true) {
                if (!it.hasNext()) {
                    break;
                }
                h hVar = (h) ((ConstraintWidget) it.next());
                if (hVar.w1(this.f2314p1)) {
                    hVar.g(dVar, V1);
                    this.f2314p1.remove(hVar);
                    break;
                }
            }
            if (size2 == this.f2314p1.size()) {
                Iterator it2 = this.f2314p1.iterator();
                while (it2.hasNext()) {
                    ((ConstraintWidget) it2.next()).g(dVar, V1);
                }
                this.f2314p1.clear();
            }
        }
        if (h1.d.f27252s) {
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
        WeakReference weakReference = this.f2313o1;
        if (weakReference != null && weakReference.get() != null && dVar.e() <= ((d) this.f2313o1.get()).e()) {
            return;
        }
        this.f2313o1 = new WeakReference(dVar);
    }
}
