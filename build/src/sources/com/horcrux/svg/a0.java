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
    final ArrayList f16773a;

    /* renamed from: b  reason: collision with root package name */
    private final ArrayList f16774b;

    /* renamed from: c  reason: collision with root package name */
    private final ArrayList f16775c;

    /* renamed from: d  reason: collision with root package name */
    private final ArrayList f16776d;

    /* renamed from: e  reason: collision with root package name */
    private final ArrayList f16777e;

    /* renamed from: f  reason: collision with root package name */
    private final ArrayList f16778f;

    /* renamed from: g  reason: collision with root package name */
    private final ArrayList f16779g;

    /* renamed from: h  reason: collision with root package name */
    private final ArrayList f16780h;

    /* renamed from: i  reason: collision with root package name */
    private final ArrayList f16781i;

    /* renamed from: j  reason: collision with root package name */
    private final ArrayList f16782j;

    /* renamed from: k  reason: collision with root package name */
    private final ArrayList f16783k;

    /* renamed from: l  reason: collision with root package name */
    private final ArrayList f16784l;

    /* renamed from: m  reason: collision with root package name */
    private final ArrayList f16785m;

    /* renamed from: n  reason: collision with root package name */
    private final ArrayList f16786n;

    /* renamed from: o  reason: collision with root package name */
    private final ArrayList f16787o;

    /* renamed from: p  reason: collision with root package name */
    private final ArrayList f16788p;

    /* renamed from: q  reason: collision with root package name */
    private double f16789q;

    /* renamed from: r  reason: collision with root package name */
    private y f16790r;

    /* renamed from: s  reason: collision with root package name */
    private double f16791s;

    /* renamed from: t  reason: collision with root package name */
    private double f16792t;

    /* renamed from: u  reason: collision with root package name */
    private double f16793u;

    /* renamed from: v  reason: collision with root package name */
    private double f16794v;

    /* renamed from: w  reason: collision with root package name */
    private SVGLength[] f16795w;

    /* renamed from: x  reason: collision with root package name */
    private SVGLength[] f16796x;

    /* renamed from: y  reason: collision with root package name */
    private SVGLength[] f16797y;

    /* renamed from: z  reason: collision with root package name */
    private SVGLength[] f16798z;

    /* JADX INFO: Access modifiers changed from: package-private */
    public a0(float f10, float f11, float f12) {
        ArrayList arrayList = new ArrayList();
        this.f16773a = arrayList;
        ArrayList arrayList2 = new ArrayList();
        this.f16774b = arrayList2;
        ArrayList arrayList3 = new ArrayList();
        this.f16775c = arrayList3;
        ArrayList arrayList4 = new ArrayList();
        this.f16776d = arrayList4;
        ArrayList arrayList5 = new ArrayList();
        this.f16777e = arrayList5;
        ArrayList arrayList6 = new ArrayList();
        this.f16778f = arrayList6;
        ArrayList arrayList7 = new ArrayList();
        this.f16779g = arrayList7;
        ArrayList arrayList8 = new ArrayList();
        this.f16780h = arrayList8;
        ArrayList arrayList9 = new ArrayList();
        this.f16781i = arrayList9;
        ArrayList arrayList10 = new ArrayList();
        this.f16782j = arrayList10;
        ArrayList arrayList11 = new ArrayList();
        this.f16783k = arrayList11;
        this.f16784l = new ArrayList();
        this.f16785m = new ArrayList();
        this.f16786n = new ArrayList();
        this.f16787o = new ArrayList();
        this.f16788p = new ArrayList();
        this.f16789q = 12.0d;
        this.f16790r = y.f17068p;
        SVGLength[] sVGLengthArr = new SVGLength[0];
        this.f16795w = sVGLengthArr;
        this.f16796x = new SVGLength[0];
        this.f16797y = new SVGLength[0];
        this.f16798z = new SVGLength[0];
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
        arrayList3.add(this.f16796x);
        arrayList4.add(this.f16797y);
        arrayList5.add(this.f16798z);
        arrayList6.add(this.A);
        arrayList7.add(Integer.valueOf(this.G));
        arrayList8.add(Integer.valueOf(this.H));
        arrayList9.add(Integer.valueOf(this.I));
        arrayList10.add(Integer.valueOf(this.J));
        arrayList11.add(Integer.valueOf(this.K));
        arrayList.add(this.f16790r);
        q();
    }

    private double[] a(ArrayList arrayList) {
        int size = arrayList.size();
        double[] dArr = new double[size];
        for (int i10 = 0; i10 < size; i10++) {
            dArr[i10] = ((SVGLength) arrayList.get(i10)).f16714a;
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
            return this.f16790r;
        }
        for (c0 parentTextRoot = c0Var.getParentTextRoot(); parentTextRoot != null; parentTextRoot = parentTextRoot.getParentTextRoot()) {
            y b10 = parentTextRoot.e().b();
            if (b10 != y.f17068p) {
                return b10;
            }
        }
        return y.f17068p;
    }

    private static void h(ArrayList arrayList, int i10) {
        while (i10 >= 0) {
            arrayList.set(i10, Integer.valueOf(((Integer) arrayList.get(i10)).intValue() + 1));
            i10--;
        }
    }

    private void q() {
        this.f16784l.add(Integer.valueOf(this.B));
        this.f16785m.add(Integer.valueOf(this.C));
        this.f16786n.add(Integer.valueOf(this.D));
        this.f16787o.add(Integer.valueOf(this.E));
        this.f16788p.add(Integer.valueOf(this.F));
    }

    private void r(c0 c0Var, ReadableMap readableMap) {
        y f10 = f(c0Var);
        this.L++;
        if (readableMap == null) {
            this.f16773a.add(f10);
            return;
        }
        y yVar = new y(readableMap, f10, this.M);
        this.f16789q = yVar.f17069a;
        this.f16773a.add(yVar);
        this.f16790r = yVar;
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
        this.f16794v = 0.0d;
        this.f16793u = 0.0d;
        this.f16792t = 0.0d;
        this.f16791s = 0.0d;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public y b() {
        return this.f16790r;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public double c() {
        return this.f16789q;
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
        h(this.f16781i, this.D);
        int i10 = this.I + 1;
        SVGLength[] sVGLengthArr = this.f16797y;
        if (i10 < sVGLengthArr.length) {
            this.I = i10;
            this.f16793u += n0.a(sVGLengthArr[i10], this.N, 0.0d, this.M, this.f16789q);
        }
        return this.f16793u;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public double j() {
        h(this.f16782j, this.E);
        int i10 = this.J + 1;
        SVGLength[] sVGLengthArr = this.f16798z;
        if (i10 < sVGLengthArr.length) {
            this.J = i10;
            this.f16794v += n0.a(sVGLengthArr[i10], this.O, 0.0d, this.M, this.f16789q);
        }
        return this.f16794v;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public double k() {
        h(this.f16783k, this.F);
        int min = Math.min(this.K + 1, this.A.length - 1);
        this.K = min;
        return this.A[min];
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public double l(double d10) {
        h(this.f16779g, this.B);
        int i10 = this.G + 1;
        SVGLength[] sVGLengthArr = this.f16795w;
        if (i10 < sVGLengthArr.length) {
            this.f16793u = 0.0d;
            this.G = i10;
            this.f16791s = n0.a(sVGLengthArr[i10], this.N, 0.0d, this.M, this.f16789q);
        }
        double d11 = this.f16791s + d10;
        this.f16791s = d11;
        return d11;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public double m() {
        h(this.f16780h, this.C);
        int i10 = this.H + 1;
        SVGLength[] sVGLengthArr = this.f16796x;
        if (i10 < sVGLengthArr.length) {
            this.f16794v = 0.0d;
            this.H = i10;
            this.f16792t = n0.a(sVGLengthArr[i10], this.O, 0.0d, this.M, this.f16789q);
        }
        return this.f16792t;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void n() {
        this.f16773a.remove(this.L);
        this.f16784l.remove(this.L);
        this.f16785m.remove(this.L);
        this.f16786n.remove(this.L);
        this.f16787o.remove(this.L);
        this.f16788p.remove(this.L);
        int i10 = this.L - 1;
        this.L = i10;
        int i11 = this.B;
        int i12 = this.C;
        int i13 = this.D;
        int i14 = this.E;
        int i15 = this.F;
        this.f16790r = (y) this.f16773a.get(i10);
        this.B = ((Integer) this.f16784l.get(this.L)).intValue();
        this.C = ((Integer) this.f16785m.get(this.L)).intValue();
        this.D = ((Integer) this.f16786n.get(this.L)).intValue();
        this.E = ((Integer) this.f16787o.get(this.L)).intValue();
        this.F = ((Integer) this.f16788p.get(this.L)).intValue();
        if (i11 != this.B) {
            this.f16774b.remove(i11);
            this.f16795w = (SVGLength[]) this.f16774b.get(this.B);
            this.G = ((Integer) this.f16779g.get(this.B)).intValue();
        }
        if (i12 != this.C) {
            this.f16775c.remove(i12);
            this.f16796x = (SVGLength[]) this.f16775c.get(this.C);
            this.H = ((Integer) this.f16780h.get(this.C)).intValue();
        }
        if (i13 != this.D) {
            this.f16776d.remove(i13);
            this.f16797y = (SVGLength[]) this.f16776d.get(this.D);
            this.I = ((Integer) this.f16781i.get(this.D)).intValue();
        }
        if (i14 != this.E) {
            this.f16777e.remove(i14);
            this.f16798z = (SVGLength[]) this.f16777e.get(this.E);
            this.J = ((Integer) this.f16782j.get(this.E)).intValue();
        }
        if (i15 != this.F) {
            this.f16778f.remove(i15);
            this.A = (double[]) this.f16778f.get(this.F);
            this.K = ((Integer) this.f16783k.get(this.F)).intValue();
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
            this.f16779g.add(-1);
            SVGLength[] e10 = e(arrayList);
            this.f16795w = e10;
            this.f16774b.add(e10);
        }
        if (arrayList2 != null && arrayList2.size() != 0) {
            this.C++;
            this.H = -1;
            this.f16780h.add(-1);
            SVGLength[] e11 = e(arrayList2);
            this.f16796x = e11;
            this.f16775c.add(e11);
        }
        if (arrayList3 != null && arrayList3.size() != 0) {
            this.D++;
            this.I = -1;
            this.f16781i.add(-1);
            SVGLength[] e12 = e(arrayList3);
            this.f16797y = e12;
            this.f16776d.add(e12);
        }
        if (arrayList4 != null && arrayList4.size() != 0) {
            this.E++;
            this.J = -1;
            this.f16782j.add(-1);
            SVGLength[] e13 = e(arrayList4);
            this.f16798z = e13;
            this.f16777e.add(e13);
        }
        if (arrayList5 != null && arrayList5.size() != 0) {
            this.F++;
            this.K = -1;
            this.f16783k.add(-1);
            double[] a10 = a(arrayList5);
            this.A = a10;
            this.f16778f.add(a10);
        }
        q();
    }
}
