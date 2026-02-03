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
    private final Rect f53595a;

    /* renamed from: b  reason: collision with root package name */
    private int f53596b;

    /* renamed from: c  reason: collision with root package name */
    private final float f53597c;

    /* renamed from: d  reason: collision with root package name */
    private final float f53598d;

    /* renamed from: e  reason: collision with root package name */
    private final float f53599e;

    /* renamed from: f  reason: collision with root package name */
    private final float f53600f;

    /* renamed from: g  reason: collision with root package name */
    private final float f53601g;

    /* renamed from: h  reason: collision with root package name */
    private final float f53602h;

    /* renamed from: i  reason: collision with root package name */
    private final SparseArray f53603i = new SparseArray();

    /* renamed from: j  reason: collision with root package name */
    private final SparseArray f53604j = new SparseArray();

    public a(e4 e4Var, Matrix matrix) {
        mc[] mcVarArr;
        c2[] c2VarArr;
        int length;
        float f10 = e4Var.f43105i;
        float f11 = e4Var.f43107p / 2.0f;
        float f12 = e4Var.f43106o;
        float f13 = e4Var.f43108q / 2.0f;
        Rect rect = new Rect((int) (f10 - f11), (int) (f12 - f13), (int) (f10 + f11), (int) (f12 + f13));
        this.f53595a = rect;
        if (matrix != null) {
            wj.b.e(rect, matrix);
        }
        this.f53596b = e4Var.f43104e;
        for (mc mcVar : e4Var.f43112u) {
            if (i(mcVar.f43441o)) {
                PointF pointF = new PointF(mcVar.f43439e, mcVar.f43440i);
                if (matrix != null) {
                    wj.b.c(pointF, matrix);
                }
                SparseArray sparseArray = this.f53603i;
                int i10 = mcVar.f43441o;
                sparseArray.put(i10, new f(i10, pointF));
            }
        }
        for (c2 c2Var : e4Var.f43116y) {
            int i11 = c2Var.f42917e;
            if (h(i11)) {
                PointF[] pointFArr = c2Var.f42916d;
                pointFArr.getClass();
                long length2 = pointFArr.length + 5 + (length / 10);
                ArrayList arrayList = new ArrayList(length2 > 2147483647L ? Integer.MAX_VALUE : (int) length2);
                Collections.addAll(arrayList, pointFArr);
                if (matrix != null) {
                    wj.b.d(arrayList, matrix);
                }
                this.f53604j.put(i11, new b(i11, arrayList));
            }
        }
        this.f53600f = e4Var.f43111t;
        this.f53601g = e4Var.f43109r;
        this.f53602h = e4Var.f43110s;
        this.f53599e = e4Var.f43115x;
        this.f53598d = e4Var.f43113v;
        this.f53597c = e4Var.f43114w;
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
        return this.f53595a;
    }

    public b b(int i10) {
        return (b) this.f53604j.get(i10);
    }

    public float c() {
        return this.f53601g;
    }

    public f d(int i10) {
        return (f) this.f53603i.get(i10);
    }

    public final SparseArray e() {
        return this.f53604j;
    }

    public final void f(SparseArray sparseArray) {
        this.f53604j.clear();
        for (int i10 = 0; i10 < sparseArray.size(); i10++) {
            this.f53604j.put(sparseArray.keyAt(i10), (b) sparseArray.valueAt(i10));
        }
    }

    public final void g(int i10) {
        this.f53596b = -1;
    }

    public String toString() {
        xe a10 = ye.a("Face");
        a10.c("boundingBox", this.f53595a);
        a10.b("trackingId", this.f53596b);
        a10.a("rightEyeOpenProbability", this.f53597c);
        a10.a("leftEyeOpenProbability", this.f53598d);
        a10.a("smileProbability", this.f53599e);
        a10.a("eulerX", this.f53600f);
        a10.a("eulerY", this.f53601g);
        a10.a("eulerZ", this.f53602h);
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
        this.f53595a = j10;
        if (matrix != null) {
            wj.b.e(j10, matrix);
        }
        this.f53596b = jeVar.i();
        for (qe qeVar : jeVar.m()) {
            if (i(qeVar.b())) {
                PointF c10 = qeVar.c();
                if (matrix != null) {
                    wj.b.c(c10, matrix);
                }
                this.f53603i.put(qeVar.b(), new f(qeVar.b(), c10));
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
                this.f53604j.put(b10, new b(b10, arrayList));
            }
        }
        this.f53600f = jeVar.g();
        this.f53601g = jeVar.c();
        this.f53602h = -jeVar.e();
        this.f53599e = jeVar.f();
        this.f53598d = jeVar.b();
        this.f53597c = jeVar.d();
    }
}
