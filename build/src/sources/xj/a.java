package xj;

import android.graphics.Matrix;
import android.graphics.PointF;
import android.graphics.Rect;
import android.util.SparseArray;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import og.c2;
import og.e4;
import og.fe;
import og.je;
import og.mc;
import og.qe;
import og.xe;
import og.ye;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class a {

    /* renamed from: a  reason: collision with root package name */
    private final Rect f53387a;

    /* renamed from: b  reason: collision with root package name */
    private int f53388b;

    /* renamed from: c  reason: collision with root package name */
    private final float f53389c;

    /* renamed from: d  reason: collision with root package name */
    private final float f53390d;

    /* renamed from: e  reason: collision with root package name */
    private final float f53391e;

    /* renamed from: f  reason: collision with root package name */
    private final float f53392f;

    /* renamed from: g  reason: collision with root package name */
    private final float f53393g;

    /* renamed from: h  reason: collision with root package name */
    private final float f53394h;

    /* renamed from: i  reason: collision with root package name */
    private final SparseArray f53395i = new SparseArray();

    /* renamed from: j  reason: collision with root package name */
    private final SparseArray f53396j = new SparseArray();

    public a(e4 e4Var, Matrix matrix) {
        mc[] mcVarArr;
        c2[] c2VarArr;
        int length;
        float f10 = e4Var.f42977i;
        float f11 = e4Var.f42979p / 2.0f;
        float f12 = e4Var.f42978o;
        float f13 = e4Var.f42980q / 2.0f;
        Rect rect = new Rect((int) (f10 - f11), (int) (f12 - f13), (int) (f10 + f11), (int) (f12 + f13));
        this.f53387a = rect;
        if (matrix != null) {
            wj.b.e(rect, matrix);
        }
        this.f53388b = e4Var.f42976e;
        for (mc mcVar : e4Var.f42984u) {
            if (i(mcVar.f43313o)) {
                PointF pointF = new PointF(mcVar.f43311e, mcVar.f43312i);
                if (matrix != null) {
                    wj.b.c(pointF, matrix);
                }
                SparseArray sparseArray = this.f53395i;
                int i10 = mcVar.f43313o;
                sparseArray.put(i10, new f(i10, pointF));
            }
        }
        for (c2 c2Var : e4Var.f42988y) {
            int i11 = c2Var.f42789e;
            if (h(i11)) {
                PointF[] pointFArr = c2Var.f42788d;
                pointFArr.getClass();
                long length2 = pointFArr.length + 5 + (length / 10);
                ArrayList arrayList = new ArrayList(length2 > 2147483647L ? Integer.MAX_VALUE : (int) length2);
                Collections.addAll(arrayList, pointFArr);
                if (matrix != null) {
                    wj.b.d(arrayList, matrix);
                }
                this.f53396j.put(i11, new b(i11, arrayList));
            }
        }
        this.f53392f = e4Var.f42983t;
        this.f53393g = e4Var.f42981r;
        this.f53394h = e4Var.f42982s;
        this.f53391e = e4Var.f42987x;
        this.f53390d = e4Var.f42985v;
        this.f53389c = e4Var.f42986w;
    }

    private static boolean h(int i10) {
        if (i10 <= 15 && i10 > 0) {
            return true;
        }
        return false;
    }

    private static boolean i(int i10) {
        if (i10 == 0 || i10 == 1 || i10 == 7 || i10 == 3 || i10 == 9 || i10 == 4 || i10 == 10 || i10 == 5 || i10 == 11 || i10 == 6) {
            return true;
        }
        return false;
    }

    public Rect a() {
        return this.f53387a;
    }

    public b b(int i10) {
        return (b) this.f53396j.get(i10);
    }

    public float c() {
        return this.f53393g;
    }

    public f d(int i10) {
        return (f) this.f53395i.get(i10);
    }

    public final SparseArray e() {
        return this.f53396j;
    }

    public final void f(SparseArray sparseArray) {
        this.f53396j.clear();
        for (int i10 = 0; i10 < sparseArray.size(); i10++) {
            this.f53396j.put(sparseArray.keyAt(i10), (b) sparseArray.valueAt(i10));
        }
    }

    public final void g(int i10) {
        this.f53388b = -1;
    }

    public String toString() {
        xe a10 = ye.a("Face");
        a10.c("boundingBox", this.f53387a);
        a10.b("trackingId", this.f53388b);
        a10.a("rightEyeOpenProbability", this.f53389c);
        a10.a("leftEyeOpenProbability", this.f53390d);
        a10.a("smileProbability", this.f53391e);
        a10.a("eulerX", this.f53392f);
        a10.a("eulerY", this.f53393g);
        a10.a("eulerZ", this.f53394h);
        xe a11 = ye.a("Landmarks");
        for (int i10 = 0; i10 <= 11; i10++) {
            if (i(i10)) {
                a11.c("landmark_" + i10, d(i10));
            }
        }
        a10.c("landmarks", a11.toString());
        xe a12 = ye.a("Contours");
        for (int i11 = 1; i11 <= 15; i11++) {
            a12.c("Contour_" + i11, b(i11));
        }
        a10.c("contours", a12.toString());
        return a10.toString();
    }

    public a(je jeVar, Matrix matrix) {
        Rect j10 = jeVar.j();
        this.f53387a = j10;
        if (matrix != null) {
            wj.b.e(j10, matrix);
        }
        this.f53388b = jeVar.i();
        for (qe qeVar : jeVar.m()) {
            if (i(qeVar.b())) {
                PointF c10 = qeVar.c();
                if (matrix != null) {
                    wj.b.c(c10, matrix);
                }
                this.f53395i.put(qeVar.b(), new f(qeVar.b(), c10));
            }
        }
        for (fe feVar : jeVar.k()) {
            int b10 = feVar.b();
            if (h(b10)) {
                List c11 = feVar.c();
                c11.getClass();
                ArrayList arrayList = new ArrayList(c11);
                if (matrix != null) {
                    wj.b.d(arrayList, matrix);
                }
                this.f53396j.put(b10, new b(b10, arrayList));
            }
        }
        this.f53392f = jeVar.g();
        this.f53393g = jeVar.c();
        this.f53394h = -jeVar.e();
        this.f53391e = jeVar.f();
        this.f53390d = jeVar.b();
        this.f53389c = jeVar.d();
    }
}
