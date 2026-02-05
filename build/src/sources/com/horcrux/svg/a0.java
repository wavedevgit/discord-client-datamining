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
    final ArrayList f16793a;

    /* renamed from: b  reason: collision with root package name */
    private final ArrayList f16794b;

    /* renamed from: c  reason: collision with root package name */
    private final ArrayList f16795c;

    /* renamed from: d  reason: collision with root package name */
    private final ArrayList f16796d;

    /* renamed from: e  reason: collision with root package name */
    private final ArrayList f16797e;

    /* renamed from: f  reason: collision with root package name */
    private final ArrayList f16798f;

    /* renamed from: g  reason: collision with root package name */
    private final ArrayList f16799g;

    /* renamed from: h  reason: collision with root package name */
    private final ArrayList f16800h;

    /* renamed from: i  reason: collision with root package name */
    private final ArrayList f16801i;

    /* renamed from: j  reason: collision with root package name */
    private final ArrayList f16802j;

    /* renamed from: k  reason: collision with root package name */
    private final ArrayList f16803k;

    /* renamed from: l  reason: collision with root package name */
    private final ArrayList f16804l;

    /* renamed from: m  reason: collision with root package name */
    private final ArrayList f16805m;

    /* renamed from: n  reason: collision with root package name */
    private final ArrayList f16806n;

    /* renamed from: o  reason: collision with root package name */
    private final ArrayList f16807o;

    /* renamed from: p  reason: collision with root package name */
    private final ArrayList f16808p;

    /* renamed from: q  reason: collision with root package name */
    private double f16809q;

    /* renamed from: r  reason: collision with root package name */
    private y f16810r;

    /* renamed from: s  reason: collision with root package name */
    private double f16811s;

    /* renamed from: t  reason: collision with root package name */
    private double f16812t;

    /* renamed from: u  reason: collision with root package name */
    private double f16813u;

    /* renamed from: v  reason: collision with root package name */
    private double f16814v;

    /* renamed from: w  reason: collision with root package name */
    private SVGLength[] f16815w;

    /* renamed from: x  reason: collision with root package name */
    private SVGLength[] f16816x;

    /* renamed from: y  reason: collision with root package name */
    private SVGLength[] f16817y;

    /* renamed from: z  reason: collision with root package name */
    private SVGLength[] f16818z;

    /* JADX INFO: Access modifiers changed from: package-private */
    public a0(float f10, float f11, float f12) {
        ArrayList arrayList = new ArrayList();
        this.f16793a = arrayList;
        ArrayList arrayList2 = new ArrayList();
        this.f16794b = arrayList2;
        ArrayList arrayList3 = new ArrayList();
        this.f16795c = arrayList3;
        ArrayList arrayList4 = new ArrayList();
        this.f16796d = arrayList4;
        ArrayList arrayList5 = new ArrayList();
        this.f16797e = arrayList5;
        ArrayList arrayList6 = new ArrayList();
        this.f16798f = arrayList6;
        ArrayList arrayList7 = new ArrayList();
        this.f16799g = arrayList7;
        ArrayList arrayList8 = new ArrayList();
        this.f16800h = arrayList8;
        ArrayList arrayList9 = new ArrayList();
        this.f16801i = arrayList9;
        ArrayList arrayList10 = new ArrayList();
        this.f16802j = arrayList10;
        ArrayList arrayList11 = new ArrayList();
        this.f16803k = arrayList11;
        this.f16804l = new ArrayList();
        this.f16805m = new ArrayList();
        this.f16806n = new ArrayList();
        this.f16807o = new ArrayList();
        this.f16808p = new ArrayList();
        this.f16809q = 12.0d;
        this.f16810r = y.f17088p;
        SVGLength[] sVGLengthArr = new SVGLength[0];
        this.f16815w = sVGLengthArr;
        this.f16816x = new SVGLength[0];
        this.f16817y = new SVGLength[0];
        this.f16818z = new SVGLength[0];
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
        arrayList3.add(this.f16816x);
        arrayList4.add(this.f16817y);
        arrayList5.add(this.f16818z);
        arrayList6.add(this.A);
        arrayList7.add(Integer.valueOf(this.G));
        arrayList8.add(Integer.valueOf(this.H));
        arrayList9.add(Integer.valueOf(this.I));
        arrayList10.add(Integer.valueOf(this.J));
        arrayList11.add(Integer.valueOf(this.K));
        arrayList.add(this.f16810r);
        q();
    }

    private double[] a(ArrayList arrayList) {
        int size = arrayList.size();
        double[] dArr = new double[size];
        for (int i10 = 0; i10 < size; i10++) {
            dArr[i10] = ((SVGLength) arrayList.get(i10)).f16734a;
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
            return this.f16810r;
        }
        for (c0 parentTextRoot = c0Var.getParentTextRoot(); parentTextRoot != null; parentTextRoot = parentTextRoot.getParentTextRoot()) {
            y b10 = parentTextRoot.e().b();
            if (b10 != y.f17088p) {
                return b10;
            }
        }
        return y.f17088p;
    }

    private static void h(ArrayList arrayList, int i10) {
        while (i10 >= 0) {
            arrayList.set(i10, Integer.valueOf(((Integer) arrayList.get(i10)).intValue() + 1));
            i10--;
        }
    }

    private void q() {
        this.f16804l.add(Integer.valueOf(this.B));
        this.f16805m.add(Integer.valueOf(this.C));
        this.f16806n.add(Integer.valueOf(this.D));
        this.f16807o.add(Integer.valueOf(this.E));
        this.f16808p.add(Integer.valueOf(this.F));
    }

    private void r(c0 c0Var, ReadableMap readableMap) {
        y f10 = f(c0Var);
        this.L++;
        if (readableMap == null) {
            this.f16793a.add(f10);
            return;
        }
        y yVar = new y(readableMap, f10, this.M);
        this.f16809q = yVar.f17089a;
        this.f16793a.add(yVar);
        this.f16810r = yVar;
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
        this.f16814v = 0.0d;
        this.f16813u = 0.0d;
        this.f16812t = 0.0d;
        this.f16811s = 0.0d;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public y b() {
        return this.f16810r;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public double c() {
        return this.f16809q;
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
        h(this.f16801i, this.D);
        int i10 = this.I + 1;
        SVGLength[] sVGLengthArr = this.f16817y;
        if (i10 < sVGLengthArr.length) {
            this.I = i10;
            this.f16813u += n0.a(sVGLengthArr[i10], this.N, 0.0d, this.M, this.f16809q);
        }
        return this.f16813u;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public double j() {
        h(this.f16802j, this.E);
        int i10 = this.J + 1;
        SVGLength[] sVGLengthArr = this.f16818z;
        if (i10 < sVGLengthArr.length) {
            this.J = i10;
            this.f16814v += n0.a(sVGLengthArr[i10], this.O, 0.0d, this.M, this.f16809q);
        }
        return this.f16814v;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public double k() {
        h(this.f16803k, this.F);
        int min = Math.min(this.K + 1, this.A.length - 1);
        this.K = min;
        return this.A[min];
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public double l(double d10) {
        h(this.f16799g, this.B);
        int i10 = this.G + 1;
        SVGLength[] sVGLengthArr = this.f16815w;
        if (i10 < sVGLengthArr.length) {
            this.f16813u = 0.0d;
            this.G = i10;
            this.f16811s = n0.a(sVGLengthArr[i10], this.N, 0.0d, this.M, this.f16809q);
        }
        double d11 = this.f16811s + d10;
        this.f16811s = d11;
        return d11;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public double m() {
        h(this.f16800h, this.C);
        int i10 = this.H + 1;
        SVGLength[] sVGLengthArr = this.f16816x;
        if (i10 < sVGLengthArr.length) {
            this.f16814v = 0.0d;
            this.H = i10;
            this.f16812t = n0.a(sVGLengthArr[i10], this.O, 0.0d, this.M, this.f16809q);
        }
        return this.f16812t;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void n() {
        this.f16793a.remove(this.L);
        this.f16804l.remove(this.L);
        this.f16805m.remove(this.L);
        this.f16806n.remove(this.L);
        this.f16807o.remove(this.L);
        this.f16808p.remove(this.L);
        int i10 = this.L - 1;
        this.L = i10;
        int i11 = this.B;
        int i12 = this.C;
        int i13 = this.D;
        int i14 = this.E;
        int i15 = this.F;
        this.f16810r = (y) this.f16793a.get(i10);
        this.B = ((Integer) this.f16804l.get(this.L)).intValue();
        this.C = ((Integer) this.f16805m.get(this.L)).intValue();
        this.D = ((Integer) this.f16806n.get(this.L)).intValue();
        this.E = ((Integer) this.f16807o.get(this.L)).intValue();
        this.F = ((Integer) this.f16808p.get(this.L)).intValue();
        if (i11 != this.B) {
            this.f16794b.remove(i11);
            this.f16815w = (SVGLength[]) this.f16794b.get(this.B);
            this.G = ((Integer) this.f16799g.get(this.B)).intValue();
        }
        if (i12 != this.C) {
            this.f16795c.remove(i12);
            this.f16816x = (SVGLength[]) this.f16795c.get(this.C);
            this.H = ((Integer) this.f16800h.get(this.C)).intValue();
        }
        if (i13 != this.D) {
            this.f16796d.remove(i13);
            this.f16817y = (SVGLength[]) this.f16796d.get(this.D);
            this.I = ((Integer) this.f16801i.get(this.D)).intValue();
        }
        if (i14 != this.E) {
            this.f16797e.remove(i14);
            this.f16818z = (SVGLength[]) this.f16797e.get(this.E);
            this.J = ((Integer) this.f16802j.get(this.E)).intValue();
        }
        if (i15 != this.F) {
            this.f16798f.remove(i15);
            this.A = (double[]) this.f16798f.get(this.F);
            this.K = ((Integer) this.f16803k.get(this.F)).intValue();
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
            this.f16799g.add(-1);
            SVGLength[] e10 = e(arrayList);
            this.f16815w = e10;
            this.f16794b.add(e10);
        }
        if (arrayList2 != null && arrayList2.size() != 0) {
            this.C++;
            this.H = -1;
            this.f16800h.add(-1);
            SVGLength[] e11 = e(arrayList2);
            this.f16816x = e11;
            this.f16795c.add(e11);
        }
        if (arrayList3 != null && arrayList3.size() != 0) {
            this.D++;
            this.I = -1;
            this.f16801i.add(-1);
            SVGLength[] e12 = e(arrayList3);
            this.f16817y = e12;
            this.f16796d.add(e12);
        }
        if (arrayList4 != null && arrayList4.size() != 0) {
            this.E++;
            this.J = -1;
            this.f16802j.add(-1);
            SVGLength[] e13 = e(arrayList4);
            this.f16818z = e13;
            this.f16797e.add(e13);
        }
        if (arrayList5 != null && arrayList5.size() != 0) {
            this.F++;
            this.K = -1;
            this.f16803k.add(-1);
            double[] a10 = a(arrayList5);
            this.A = a10;
            this.f16798f.add(a10);
        }
        q();
    }
}
