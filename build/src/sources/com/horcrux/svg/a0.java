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
    final ArrayList f16399a;

    /* renamed from: b  reason: collision with root package name */
    private final ArrayList f16400b;

    /* renamed from: c  reason: collision with root package name */
    private final ArrayList f16401c;

    /* renamed from: d  reason: collision with root package name */
    private final ArrayList f16402d;

    /* renamed from: e  reason: collision with root package name */
    private final ArrayList f16403e;

    /* renamed from: f  reason: collision with root package name */
    private final ArrayList f16404f;

    /* renamed from: g  reason: collision with root package name */
    private final ArrayList f16405g;

    /* renamed from: h  reason: collision with root package name */
    private final ArrayList f16406h;

    /* renamed from: i  reason: collision with root package name */
    private final ArrayList f16407i;

    /* renamed from: j  reason: collision with root package name */
    private final ArrayList f16408j;

    /* renamed from: k  reason: collision with root package name */
    private final ArrayList f16409k;

    /* renamed from: l  reason: collision with root package name */
    private final ArrayList f16410l;

    /* renamed from: m  reason: collision with root package name */
    private final ArrayList f16411m;

    /* renamed from: n  reason: collision with root package name */
    private final ArrayList f16412n;

    /* renamed from: o  reason: collision with root package name */
    private final ArrayList f16413o;

    /* renamed from: p  reason: collision with root package name */
    private final ArrayList f16414p;

    /* renamed from: q  reason: collision with root package name */
    private double f16415q;

    /* renamed from: r  reason: collision with root package name */
    private y f16416r;

    /* renamed from: s  reason: collision with root package name */
    private double f16417s;

    /* renamed from: t  reason: collision with root package name */
    private double f16418t;

    /* renamed from: u  reason: collision with root package name */
    private double f16419u;

    /* renamed from: v  reason: collision with root package name */
    private double f16420v;

    /* renamed from: w  reason: collision with root package name */
    private SVGLength[] f16421w;

    /* renamed from: x  reason: collision with root package name */
    private SVGLength[] f16422x;

    /* renamed from: y  reason: collision with root package name */
    private SVGLength[] f16423y;

    /* renamed from: z  reason: collision with root package name */
    private SVGLength[] f16424z;

    /* JADX INFO: Access modifiers changed from: package-private */
    public a0(float f10, float f11, float f12) {
        ArrayList arrayList = new ArrayList();
        this.f16399a = arrayList;
        ArrayList arrayList2 = new ArrayList();
        this.f16400b = arrayList2;
        ArrayList arrayList3 = new ArrayList();
        this.f16401c = arrayList3;
        ArrayList arrayList4 = new ArrayList();
        this.f16402d = arrayList4;
        ArrayList arrayList5 = new ArrayList();
        this.f16403e = arrayList5;
        ArrayList arrayList6 = new ArrayList();
        this.f16404f = arrayList6;
        ArrayList arrayList7 = new ArrayList();
        this.f16405g = arrayList7;
        ArrayList arrayList8 = new ArrayList();
        this.f16406h = arrayList8;
        ArrayList arrayList9 = new ArrayList();
        this.f16407i = arrayList9;
        ArrayList arrayList10 = new ArrayList();
        this.f16408j = arrayList10;
        ArrayList arrayList11 = new ArrayList();
        this.f16409k = arrayList11;
        this.f16410l = new ArrayList();
        this.f16411m = new ArrayList();
        this.f16412n = new ArrayList();
        this.f16413o = new ArrayList();
        this.f16414p = new ArrayList();
        this.f16415q = 12.0d;
        this.f16416r = y.f16694p;
        SVGLength[] sVGLengthArr = new SVGLength[0];
        this.f16421w = sVGLengthArr;
        this.f16422x = new SVGLength[0];
        this.f16423y = new SVGLength[0];
        this.f16424z = new SVGLength[0];
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
        arrayList3.add(this.f16422x);
        arrayList4.add(this.f16423y);
        arrayList5.add(this.f16424z);
        arrayList6.add(this.A);
        arrayList7.add(Integer.valueOf(this.G));
        arrayList8.add(Integer.valueOf(this.H));
        arrayList9.add(Integer.valueOf(this.I));
        arrayList10.add(Integer.valueOf(this.J));
        arrayList11.add(Integer.valueOf(this.K));
        arrayList.add(this.f16416r);
        q();
    }

    private double[] a(ArrayList arrayList) {
        int size = arrayList.size();
        double[] dArr = new double[size];
        for (int i10 = 0; i10 < size; i10++) {
            dArr[i10] = ((SVGLength) arrayList.get(i10)).f16340a;
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
            return this.f16416r;
        }
        for (c0 parentTextRoot = c0Var.getParentTextRoot(); parentTextRoot != null; parentTextRoot = parentTextRoot.getParentTextRoot()) {
            y b10 = parentTextRoot.e().b();
            if (b10 != y.f16694p) {
                return b10;
            }
        }
        return y.f16694p;
    }

    private static void h(ArrayList arrayList, int i10) {
        while (i10 >= 0) {
            arrayList.set(i10, Integer.valueOf(((Integer) arrayList.get(i10)).intValue() + 1));
            i10--;
        }
    }

    private void q() {
        this.f16410l.add(Integer.valueOf(this.B));
        this.f16411m.add(Integer.valueOf(this.C));
        this.f16412n.add(Integer.valueOf(this.D));
        this.f16413o.add(Integer.valueOf(this.E));
        this.f16414p.add(Integer.valueOf(this.F));
    }

    private void r(c0 c0Var, ReadableMap readableMap) {
        y f10 = f(c0Var);
        this.L++;
        if (readableMap == null) {
            this.f16399a.add(f10);
            return;
        }
        y yVar = new y(readableMap, f10, this.M);
        this.f16415q = yVar.f16695a;
        this.f16399a.add(yVar);
        this.f16416r = yVar;
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
        this.f16420v = 0.0d;
        this.f16419u = 0.0d;
        this.f16418t = 0.0d;
        this.f16417s = 0.0d;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public y b() {
        return this.f16416r;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public double c() {
        return this.f16415q;
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
        h(this.f16407i, this.D);
        int i10 = this.I + 1;
        SVGLength[] sVGLengthArr = this.f16423y;
        if (i10 < sVGLengthArr.length) {
            this.I = i10;
            this.f16419u += n0.a(sVGLengthArr[i10], this.N, 0.0d, this.M, this.f16415q);
        }
        return this.f16419u;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public double j() {
        h(this.f16408j, this.E);
        int i10 = this.J + 1;
        SVGLength[] sVGLengthArr = this.f16424z;
        if (i10 < sVGLengthArr.length) {
            this.J = i10;
            this.f16420v += n0.a(sVGLengthArr[i10], this.O, 0.0d, this.M, this.f16415q);
        }
        return this.f16420v;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public double k() {
        h(this.f16409k, this.F);
        int min = Math.min(this.K + 1, this.A.length - 1);
        this.K = min;
        return this.A[min];
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public double l(double d10) {
        h(this.f16405g, this.B);
        int i10 = this.G + 1;
        SVGLength[] sVGLengthArr = this.f16421w;
        if (i10 < sVGLengthArr.length) {
            this.f16419u = 0.0d;
            this.G = i10;
            this.f16417s = n0.a(sVGLengthArr[i10], this.N, 0.0d, this.M, this.f16415q);
        }
        double d11 = this.f16417s + d10;
        this.f16417s = d11;
        return d11;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public double m() {
        h(this.f16406h, this.C);
        int i10 = this.H + 1;
        SVGLength[] sVGLengthArr = this.f16422x;
        if (i10 < sVGLengthArr.length) {
            this.f16420v = 0.0d;
            this.H = i10;
            this.f16418t = n0.a(sVGLengthArr[i10], this.O, 0.0d, this.M, this.f16415q);
        }
        return this.f16418t;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void n() {
        this.f16399a.remove(this.L);
        this.f16410l.remove(this.L);
        this.f16411m.remove(this.L);
        this.f16412n.remove(this.L);
        this.f16413o.remove(this.L);
        this.f16414p.remove(this.L);
        int i10 = this.L - 1;
        this.L = i10;
        int i11 = this.B;
        int i12 = this.C;
        int i13 = this.D;
        int i14 = this.E;
        int i15 = this.F;
        this.f16416r = (y) this.f16399a.get(i10);
        this.B = ((Integer) this.f16410l.get(this.L)).intValue();
        this.C = ((Integer) this.f16411m.get(this.L)).intValue();
        this.D = ((Integer) this.f16412n.get(this.L)).intValue();
        this.E = ((Integer) this.f16413o.get(this.L)).intValue();
        this.F = ((Integer) this.f16414p.get(this.L)).intValue();
        if (i11 != this.B) {
            this.f16400b.remove(i11);
            this.f16421w = (SVGLength[]) this.f16400b.get(this.B);
            this.G = ((Integer) this.f16405g.get(this.B)).intValue();
        }
        if (i12 != this.C) {
            this.f16401c.remove(i12);
            this.f16422x = (SVGLength[]) this.f16401c.get(this.C);
            this.H = ((Integer) this.f16406h.get(this.C)).intValue();
        }
        if (i13 != this.D) {
            this.f16402d.remove(i13);
            this.f16423y = (SVGLength[]) this.f16402d.get(this.D);
            this.I = ((Integer) this.f16407i.get(this.D)).intValue();
        }
        if (i14 != this.E) {
            this.f16403e.remove(i14);
            this.f16424z = (SVGLength[]) this.f16403e.get(this.E);
            this.J = ((Integer) this.f16408j.get(this.E)).intValue();
        }
        if (i15 != this.F) {
            this.f16404f.remove(i15);
            this.A = (double[]) this.f16404f.get(this.F);
            this.K = ((Integer) this.f16409k.get(this.F)).intValue();
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
            this.f16405g.add(-1);
            SVGLength[] e10 = e(arrayList);
            this.f16421w = e10;
            this.f16400b.add(e10);
        }
        if (arrayList2 != null && arrayList2.size() != 0) {
            this.C++;
            this.H = -1;
            this.f16406h.add(-1);
            SVGLength[] e11 = e(arrayList2);
            this.f16422x = e11;
            this.f16401c.add(e11);
        }
        if (arrayList3 != null && arrayList3.size() != 0) {
            this.D++;
            this.I = -1;
            this.f16407i.add(-1);
            SVGLength[] e12 = e(arrayList3);
            this.f16423y = e12;
            this.f16402d.add(e12);
        }
        if (arrayList4 != null && arrayList4.size() != 0) {
            this.E++;
            this.J = -1;
            this.f16408j.add(-1);
            SVGLength[] e13 = e(arrayList4);
            this.f16424z = e13;
            this.f16403e.add(e13);
        }
        if (arrayList5 != null && arrayList5.size() != 0) {
            this.F++;
            this.K = -1;
            this.f16409k.add(-1);
            double[] a10 = a(arrayList5);
            this.A = a10;
            this.f16404f.add(a10);
        }
        q();
    }
}
