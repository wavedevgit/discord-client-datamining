package ak;

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
    private final Rect f680a;

    /* renamed from: b  reason: collision with root package name */
    private int f681b;

    /* renamed from: c  reason: collision with root package name */
    private final float f682c;

    /* renamed from: d  reason: collision with root package name */
    private final float f683d;

    /* renamed from: e  reason: collision with root package name */
    private final float f684e;

    /* renamed from: f  reason: collision with root package name */
    private final float f685f;

    /* renamed from: g  reason: collision with root package name */
    private final float f686g;

    /* renamed from: h  reason: collision with root package name */
    private final float f687h;

    /* renamed from: i  reason: collision with root package name */
    private final SparseArray f688i = new SparseArray();

    /* renamed from: j  reason: collision with root package name */
    private final SparseArray f689j = new SparseArray();

    public a(e4 e4Var, Matrix matrix) {
        mc[] mcVarArr;
        c2[] c2VarArr;
        int length;
        float f10 = e4Var.f42811i;
        float f11 = e4Var.f42813p / 2.0f;
        float f12 = e4Var.f42812o;
        float f13 = e4Var.f42814q / 2.0f;
        Rect rect = new Rect((int) (f10 - f11), (int) (f12 - f13), (int) (f10 + f11), (int) (f12 + f13));
        this.f680a = rect;
        if (matrix != null) {
            zj.b.e(rect, matrix);
        }
        this.f681b = e4Var.f42810e;
        for (mc mcVar : e4Var.f42818u) {
            if (i(mcVar.f43147o)) {
                PointF pointF = new PointF(mcVar.f43145e, mcVar.f43146i);
                if (matrix != null) {
                    zj.b.c(pointF, matrix);
                }
                SparseArray sparseArray = this.f688i;
                int i10 = mcVar.f43147o;
                sparseArray.put(i10, new f(i10, pointF));
            }
        }
        for (c2 c2Var : e4Var.f42822y) {
            int i11 = c2Var.f42623e;
            if (h(i11)) {
                PointF[] pointFArr = c2Var.f42622d;
                pointFArr.getClass();
                long length2 = pointFArr.length + 5 + (length / 10);
                ArrayList arrayList = new ArrayList(length2 > 2147483647L ? Integer.MAX_VALUE : (int) length2);
                Collections.addAll(arrayList, pointFArr);
                if (matrix != null) {
                    zj.b.d(arrayList, matrix);
                }
                this.f689j.put(i11, new b(i11, arrayList));
            }
        }
        this.f685f = e4Var.f42817t;
        this.f686g = e4Var.f42815r;
        this.f687h = e4Var.f42816s;
        this.f684e = e4Var.f42821x;
        this.f683d = e4Var.f42819v;
        this.f682c = e4Var.f42820w;
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
        return this.f680a;
    }

    public b b(int i10) {
        return (b) this.f689j.get(i10);
    }

    public float c() {
        return this.f686g;
    }

    public f d(int i10) {
        return (f) this.f688i.get(i10);
    }

    public final SparseArray e() {
        return this.f689j;
    }

    public final void f(SparseArray sparseArray) {
        this.f689j.clear();
        for (int i10 = 0; i10 < sparseArray.size(); i10++) {
            this.f689j.put(sparseArray.keyAt(i10), (b) sparseArray.valueAt(i10));
        }
    }

    public final void g(int i10) {
        this.f681b = -1;
    }

    public String toString() {
        xe a10 = ye.a("Face");
        a10.c("boundingBox", this.f680a);
        a10.b("trackingId", this.f681b);
        a10.a("rightEyeOpenProbability", this.f682c);
        a10.a("leftEyeOpenProbability", this.f683d);
        a10.a("smileProbability", this.f684e);
        a10.a("eulerX", this.f685f);
        a10.a("eulerY", this.f686g);
        a10.a("eulerZ", this.f687h);
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
        this.f680a = j10;
        if (matrix != null) {
            zj.b.e(j10, matrix);
        }
        this.f681b = jeVar.i();
        for (qe qeVar : jeVar.n()) {
            if (i(qeVar.b())) {
                PointF c10 = qeVar.c();
                if (matrix != null) {
                    zj.b.c(c10, matrix);
                }
                this.f688i.put(qeVar.b(), new f(qeVar.b(), c10));
            }
        }
        for (fe feVar : jeVar.l()) {
            int b10 = feVar.b();
            if (h(b10)) {
                List c11 = feVar.c();
                c11.getClass();
                ArrayList arrayList = new ArrayList(c11);
                if (matrix != null) {
                    zj.b.d(arrayList, matrix);
                }
                this.f689j.put(b10, new b(b10, arrayList));
            }
        }
        this.f685f = jeVar.g();
        this.f686g = jeVar.c();
        this.f687h = -jeVar.e();
        this.f684e = jeVar.f();
        this.f683d = jeVar.b();
        this.f682c = jeVar.d();
    }
}
