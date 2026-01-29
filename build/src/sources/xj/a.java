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
    private final Rect f53371a;

    /* renamed from: b  reason: collision with root package name */
    private int f53372b;

    /* renamed from: c  reason: collision with root package name */
    private final float f53373c;

    /* renamed from: d  reason: collision with root package name */
    private final float f53374d;

    /* renamed from: e  reason: collision with root package name */
    private final float f53375e;

    /* renamed from: f  reason: collision with root package name */
    private final float f53376f;

    /* renamed from: g  reason: collision with root package name */
    private final float f53377g;

    /* renamed from: h  reason: collision with root package name */
    private final float f53378h;

    /* renamed from: i  reason: collision with root package name */
    private final SparseArray f53379i = new SparseArray();

    /* renamed from: j  reason: collision with root package name */
    private final SparseArray f53380j = new SparseArray();

    public a(e4 e4Var, Matrix matrix) {
        mc[] mcVarArr;
        c2[] c2VarArr;
        int length;
        float f10 = e4Var.f42961i;
        float f11 = e4Var.f42963p / 2.0f;
        float f12 = e4Var.f42962o;
        float f13 = e4Var.f42964q / 2.0f;
        Rect rect = new Rect((int) (f10 - f11), (int) (f12 - f13), (int) (f10 + f11), (int) (f12 + f13));
        this.f53371a = rect;
        if (matrix != null) {
            wj.b.e(rect, matrix);
        }
        this.f53372b = e4Var.f42960e;
        for (mc mcVar : e4Var.f42968u) {
            if (i(mcVar.f43297o)) {
                PointF pointF = new PointF(mcVar.f43295e, mcVar.f43296i);
                if (matrix != null) {
                    wj.b.c(pointF, matrix);
                }
                SparseArray sparseArray = this.f53379i;
                int i10 = mcVar.f43297o;
                sparseArray.put(i10, new f(i10, pointF));
            }
        }
        for (c2 c2Var : e4Var.f42972y) {
            int i11 = c2Var.f42773e;
            if (h(i11)) {
                PointF[] pointFArr = c2Var.f42772d;
                pointFArr.getClass();
                long length2 = pointFArr.length + 5 + (length / 10);
                ArrayList arrayList = new ArrayList(length2 > 2147483647L ? Integer.MAX_VALUE : (int) length2);
                Collections.addAll(arrayList, pointFArr);
                if (matrix != null) {
                    wj.b.d(arrayList, matrix);
                }
                this.f53380j.put(i11, new b(i11, arrayList));
            }
        }
        this.f53376f = e4Var.f42967t;
        this.f53377g = e4Var.f42965r;
        this.f53378h = e4Var.f42966s;
        this.f53375e = e4Var.f42971x;
        this.f53374d = e4Var.f42969v;
        this.f53373c = e4Var.f42970w;
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
        return this.f53371a;
    }

    public b b(int i10) {
        return (b) this.f53380j.get(i10);
    }

    public float c() {
        return this.f53377g;
    }

    public f d(int i10) {
        return (f) this.f53379i.get(i10);
    }

    public final SparseArray e() {
        return this.f53380j;
    }

    public final void f(SparseArray sparseArray) {
        this.f53380j.clear();
        for (int i10 = 0; i10 < sparseArray.size(); i10++) {
            this.f53380j.put(sparseArray.keyAt(i10), (b) sparseArray.valueAt(i10));
        }
    }

    public final void g(int i10) {
        this.f53372b = -1;
    }

    public String toString() {
        xe a10 = ye.a("Face");
        a10.c("boundingBox", this.f53371a);
        a10.b("trackingId", this.f53372b);
        a10.a("rightEyeOpenProbability", this.f53373c);
        a10.a("leftEyeOpenProbability", this.f53374d);
        a10.a("smileProbability", this.f53375e);
        a10.a("eulerX", this.f53376f);
        a10.a("eulerY", this.f53377g);
        a10.a("eulerZ", this.f53378h);
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
        this.f53371a = j10;
        if (matrix != null) {
            wj.b.e(j10, matrix);
        }
        this.f53372b = jeVar.i();
        for (qe qeVar : jeVar.m()) {
            if (i(qeVar.b())) {
                PointF c10 = qeVar.c();
                if (matrix != null) {
                    wj.b.c(c10, matrix);
                }
                this.f53379i.put(qeVar.b(), new f(qeVar.b(), c10));
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
                this.f53380j.put(b10, new b(b10, arrayList));
            }
        }
        this.f53376f = jeVar.g();
        this.f53377g = jeVar.c();
        this.f53378h = -jeVar.e();
        this.f53375e = jeVar.f();
        this.f53374d = jeVar.b();
        this.f53373c = jeVar.d();
    }
}
