package com.horcrux.svg;

import com.facebook.react.bridge.ReadableMap;
import java.util.ArrayList;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class a0 {
    private double[] A;
    private int B;
    private int C;
    private int D;
    private int E;
    private int F;
    private int G;
    private int H;
    private int I;
    private int J;
    private int K;
    private int L;
    private final float M;
    private final float N;
    private final float O;

    /* renamed from: a  reason: collision with root package name */
    final ArrayList f17431a;

    /* renamed from: b  reason: collision with root package name */
    private final ArrayList f17432b;

    /* renamed from: c  reason: collision with root package name */
    private final ArrayList f17433c;

    /* renamed from: d  reason: collision with root package name */
    private final ArrayList f17434d;

    /* renamed from: e  reason: collision with root package name */
    private final ArrayList f17435e;

    /* renamed from: f  reason: collision with root package name */
    private final ArrayList f17436f;

    /* renamed from: g  reason: collision with root package name */
    private final ArrayList f17437g;

    /* renamed from: h  reason: collision with root package name */
    private final ArrayList f17438h;

    /* renamed from: i  reason: collision with root package name */
    private final ArrayList f17439i;

    /* renamed from: j  reason: collision with root package name */
    private final ArrayList f17440j;

    /* renamed from: k  reason: collision with root package name */
    private final ArrayList f17441k;

    /* renamed from: l  reason: collision with root package name */
    private final ArrayList f17442l;

    /* renamed from: m  reason: collision with root package name */
    private final ArrayList f17443m;

    /* renamed from: n  reason: collision with root package name */
    private final ArrayList f17444n;

    /* renamed from: o  reason: collision with root package name */
    private final ArrayList f17445o;

    /* renamed from: p  reason: collision with root package name */
    private final ArrayList f17446p;

    /* renamed from: q  reason: collision with root package name */
    private double f17447q;

    /* renamed from: r  reason: collision with root package name */
    private y f17448r;

    /* renamed from: s  reason: collision with root package name */
    private double f17449s;

    /* renamed from: t  reason: collision with root package name */
    private double f17450t;

    /* renamed from: u  reason: collision with root package name */
    private double f17451u;

    /* renamed from: v  reason: collision with root package name */
    private double f17452v;

    /* renamed from: w  reason: collision with root package name */
    private SVGLength[] f17453w;

    /* renamed from: x  reason: collision with root package name */
    private SVGLength[] f17454x;

    /* renamed from: y  reason: collision with root package name */
    private SVGLength[] f17455y;

    /* renamed from: z  reason: collision with root package name */
    private SVGLength[] f17456z;

    /* JADX INFO: Access modifiers changed from: package-private */
    public a0(float f10, float f11, float f12) {
        ArrayList arrayList = new ArrayList();
        this.f17431a = arrayList;
        ArrayList arrayList2 = new ArrayList();
        this.f17432b = arrayList2;
        ArrayList arrayList3 = new ArrayList();
        this.f17433c = arrayList3;
        ArrayList arrayList4 = new ArrayList();
        this.f17434d = arrayList4;
        ArrayList arrayList5 = new ArrayList();
        this.f17435e = arrayList5;
        ArrayList arrayList6 = new ArrayList();
        this.f17436f = arrayList6;
        ArrayList arrayList7 = new ArrayList();
        this.f17437g = arrayList7;
        ArrayList arrayList8 = new ArrayList();
        this.f17438h = arrayList8;
        ArrayList arrayList9 = new ArrayList();
        this.f17439i = arrayList9;
        ArrayList arrayList10 = new ArrayList();
        this.f17440j = arrayList10;
        ArrayList arrayList11 = new ArrayList();
        this.f17441k = arrayList11;
        this.f17442l = new ArrayList();
        this.f17443m = new ArrayList();
        this.f17444n = new ArrayList();
        this.f17445o = new ArrayList();
        this.f17446p = new ArrayList();
        this.f17447q = 12.0d;
        this.f17448r = y.f17726p;
        SVGLength[] sVGLengthArr = new SVGLength[0];
        this.f17453w = sVGLengthArr;
        this.f17454x = new SVGLength[0];
        this.f17455y = new SVGLength[0];
        this.f17456z = new SVGLength[0];
        this.A = new double[]{0.0d};
        this.G = -1;
        this.H = -1;
        this.I = -1;
        this.J = -1;
        this.K = -1;
        this.M = f10;
        this.N = f11;
        this.O = f12;
        arrayList2.add(sVGLengthArr);
        arrayList3.add(this.f17454x);
        arrayList4.add(this.f17455y);
        arrayList5.add(this.f17456z);
        arrayList6.add(this.A);
        arrayList7.add(Integer.valueOf(this.G));
        arrayList8.add(Integer.valueOf(this.H));
        arrayList9.add(Integer.valueOf(this.I));
        arrayList10.add(Integer.valueOf(this.J));
        arrayList11.add(Integer.valueOf(this.K));
        arrayList.add(this.f17448r);
        q();
    }

    private double[] a(ArrayList arrayList) {
        int size = arrayList.size();
        double[] dArr = new double[size];
        for (int i10 = 0; i10 < size; i10++) {
            dArr[i10] = ((SVGLength) arrayList.get(i10)).f17372a;
        }
        return dArr;
    }

    private SVGLength[] e(ArrayList arrayList) {
        int size = arrayList.size();
        SVGLength[] sVGLengthArr = new SVGLength[size];
        for (int i10 = 0; i10 < size; i10++) {
            sVGLengthArr[i10] = (SVGLength) arrayList.get(i10);
        }
        return sVGLengthArr;
    }

    private y f(c0 c0Var) {
        if (this.L > 0) {
            return this.f17448r;
        }
        for (c0 parentTextRoot = c0Var.getParentTextRoot(); parentTextRoot != null; parentTextRoot = parentTextRoot.getParentTextRoot()) {
            y b10 = parentTextRoot.e().b();
            if (b10 != y.f17726p) {
                return b10;
            }
        }
        return y.f17726p;
    }

    private static void h(ArrayList arrayList, int i10) {
        while (i10 >= 0) {
            arrayList.set(i10, Integer.valueOf(((Integer) arrayList.get(i10)).intValue() + 1));
            i10--;
        }
    }

    private void q() {
        this.f17442l.add(Integer.valueOf(this.B));
        this.f17443m.add(Integer.valueOf(this.C));
        this.f17444n.add(Integer.valueOf(this.D));
        this.f17445o.add(Integer.valueOf(this.E));
        this.f17446p.add(Integer.valueOf(this.F));
    }

    private void r(c0 c0Var, ReadableMap readableMap) {
        y f10 = f(c0Var);
        this.L++;
        if (readableMap == null) {
            this.f17431a.add(f10);
            return;
        }
        y yVar = new y(readableMap, f10, this.M);
        this.f17447q = yVar.f17727a;
        this.f17431a.add(yVar);
        this.f17448r = yVar;
    }

    private void s() {
        this.F = 0;
        this.E = 0;
        this.D = 0;
        this.C = 0;
        this.B = 0;
        this.K = -1;
        this.J = -1;
        this.I = -1;
        this.H = -1;
        this.G = -1;
        this.f17452v = 0.0d;
        this.f17451u = 0.0d;
        this.f17450t = 0.0d;
        this.f17449s = 0.0d;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public y b() {
        return this.f17448r;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public double c() {
        return this.f17447q;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public float d() {
        return this.O;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public float g() {
        return this.N;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public double i() {
        h(this.f17439i, this.D);
        int i10 = this.I + 1;
        SVGLength[] sVGLengthArr = this.f17455y;
        if (i10 < sVGLengthArr.length) {
            this.I = i10;
            this.f17451u += n0.a(sVGLengthArr[i10], this.N, 0.0d, this.M, this.f17447q);
        }
        return this.f17451u;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public double j() {
        h(this.f17440j, this.E);
        int i10 = this.J + 1;
        SVGLength[] sVGLengthArr = this.f17456z;
        if (i10 < sVGLengthArr.length) {
            this.J = i10;
            this.f17452v += n0.a(sVGLengthArr[i10], this.O, 0.0d, this.M, this.f17447q);
        }
        return this.f17452v;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public double k() {
        h(this.f17441k, this.F);
        int min = Math.min(this.K + 1, this.A.length - 1);
        this.K = min;
        return this.A[min];
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public double l(double d10) {
        h(this.f17437g, this.B);
        int i10 = this.G + 1;
        SVGLength[] sVGLengthArr = this.f17453w;
        if (i10 < sVGLengthArr.length) {
            this.f17451u = 0.0d;
            this.G = i10;
            this.f17449s = n0.a(sVGLengthArr[i10], this.N, 0.0d, this.M, this.f17447q);
        }
        double d11 = this.f17449s + d10;
        this.f17449s = d11;
        return d11;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public double m() {
        h(this.f17438h, this.C);
        int i10 = this.H + 1;
        SVGLength[] sVGLengthArr = this.f17454x;
        if (i10 < sVGLengthArr.length) {
            this.f17452v = 0.0d;
            this.H = i10;
            this.f17450t = n0.a(sVGLengthArr[i10], this.O, 0.0d, this.M, this.f17447q);
        }
        return this.f17450t;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void n() {
        this.f17431a.remove(this.L);
        this.f17442l.remove(this.L);
        this.f17443m.remove(this.L);
        this.f17444n.remove(this.L);
        this.f17445o.remove(this.L);
        this.f17446p.remove(this.L);
        int i10 = this.L - 1;
        this.L = i10;
        int i11 = this.B;
        int i12 = this.C;
        int i13 = this.D;
        int i14 = this.E;
        int i15 = this.F;
        this.f17448r = (y) this.f17431a.get(i10);
        this.B = ((Integer) this.f17442l.get(this.L)).intValue();
        this.C = ((Integer) this.f17443m.get(this.L)).intValue();
        this.D = ((Integer) this.f17444n.get(this.L)).intValue();
        this.E = ((Integer) this.f17445o.get(this.L)).intValue();
        this.F = ((Integer) this.f17446p.get(this.L)).intValue();
        if (i11 != this.B) {
            this.f17432b.remove(i11);
            this.f17453w = (SVGLength[]) this.f17432b.get(this.B);
            this.G = ((Integer) this.f17437g.get(this.B)).intValue();
        }
        if (i12 != this.C) {
            this.f17433c.remove(i12);
            this.f17454x = (SVGLength[]) this.f17433c.get(this.C);
            this.H = ((Integer) this.f17438h.get(this.C)).intValue();
        }
        if (i13 != this.D) {
            this.f17434d.remove(i13);
            this.f17455y = (SVGLength[]) this.f17434d.get(this.D);
            this.I = ((Integer) this.f17439i.get(this.D)).intValue();
        }
        if (i14 != this.E) {
            this.f17435e.remove(i14);
            this.f17456z = (SVGLength[]) this.f17435e.get(this.E);
            this.J = ((Integer) this.f17440j.get(this.E)).intValue();
        }
        if (i15 != this.F) {
            this.f17436f.remove(i15);
            this.A = (double[]) this.f17436f.get(this.F);
            this.K = ((Integer) this.f17441k.get(this.F)).intValue();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void o(c0 c0Var, ReadableMap readableMap) {
        r(c0Var, readableMap);
        q();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void p(boolean z10, j1 j1Var, ReadableMap readableMap, ArrayList arrayList, ArrayList arrayList2, ArrayList arrayList3, ArrayList arrayList4, ArrayList arrayList5) {
        if (z10) {
            s();
        }
        r(j1Var, readableMap);
        if (arrayList != null && arrayList.size() != 0) {
            this.B++;
            this.G = -1;
            this.f17437g.add(-1);
            SVGLength[] e10 = e(arrayList);
            this.f17453w = e10;
            this.f17432b.add(e10);
        }
        if (arrayList2 != null && arrayList2.size() != 0) {
            this.C++;
            this.H = -1;
            this.f17438h.add(-1);
            SVGLength[] e11 = e(arrayList2);
            this.f17454x = e11;
            this.f17433c.add(e11);
        }
        if (arrayList3 != null && arrayList3.size() != 0) {
            this.D++;
            this.I = -1;
            this.f17439i.add(-1);
            SVGLength[] e12 = e(arrayList3);
            this.f17455y = e12;
            this.f17434d.add(e12);
        }
        if (arrayList4 != null && arrayList4.size() != 0) {
            this.E++;
            this.J = -1;
            this.f17440j.add(-1);
            SVGLength[] e13 = e(arrayList4);
            this.f17456z = e13;
            this.f17435e.add(e13);
        }
        if (arrayList5 != null && arrayList5.size() != 0) {
            this.F++;
            this.K = -1;
            this.f17441k.add(-1);
            double[] a10 = a(arrayList5);
            this.A = a10;
            this.f17436f.add(a10);
        }
        q();
    }
}
