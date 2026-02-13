package ek;

import android.graphics.Matrix;
import android.graphics.PointF;
import android.graphics.Rect;
import android.util.SparseArray;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import qg.c2;
import qg.e4;
import qg.fe;
import qg.je;
import qg.mc;
import qg.qe;
import qg.xe;
import qg.ye;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class a {

    /* renamed from: a  reason: collision with root package name */
    private final Rect f22893a;

    /* renamed from: b  reason: collision with root package name */
    private int f22894b;

    /* renamed from: c  reason: collision with root package name */
    private final float f22895c;

    /* renamed from: d  reason: collision with root package name */
    private final float f22896d;

    /* renamed from: e  reason: collision with root package name */
    private final float f22897e;

    /* renamed from: f  reason: collision with root package name */
    private final float f22898f;

    /* renamed from: g  reason: collision with root package name */
    private final float f22899g;

    /* renamed from: h  reason: collision with root package name */
    private final float f22900h;

    /* renamed from: i  reason: collision with root package name */
    private final SparseArray f22901i = new SparseArray();

    /* renamed from: j  reason: collision with root package name */
    private final SparseArray f22902j = new SparseArray();

    public a(e4 e4Var, Matrix matrix) {
        mc[] mcVarArr;
        c2[] c2VarArr;
        int length;
        float f10 = e4Var.f44952i;
        float f11 = e4Var.f44954p / 2.0f;
        float f12 = e4Var.f44953o;
        float f13 = e4Var.f44955q / 2.0f;
        Rect rect = new Rect((int) (f10 - f11), (int) (f12 - f13), (int) (f10 + f11), (int) (f12 + f13));
        this.f22893a = rect;
        if (matrix != null) {
            dk.b.e(rect, matrix);
        }
        this.f22894b = e4Var.f44951e;
        for (mc mcVar : e4Var.f44959u) {
            if (i(mcVar.f45288o)) {
                PointF pointF = new PointF(mcVar.f45286e, mcVar.f45287i);
                if (matrix != null) {
                    dk.b.c(pointF, matrix);
                }
                SparseArray sparseArray = this.f22901i;
                int i10 = mcVar.f45288o;
                sparseArray.put(i10, new f(i10, pointF));
            }
        }
        for (c2 c2Var : e4Var.f44963y) {
            int i11 = c2Var.f44764e;
            if (h(i11)) {
                PointF[] pointFArr = c2Var.f44763d;
                pointFArr.getClass();
                long length2 = pointFArr.length + 5 + (length / 10);
                ArrayList arrayList = new ArrayList(length2 > 2147483647L ? Integer.MAX_VALUE : (int) length2);
                Collections.addAll(arrayList, pointFArr);
                if (matrix != null) {
                    dk.b.d(arrayList, matrix);
                }
                this.f22902j.put(i11, new b(i11, arrayList));
            }
        }
        this.f22898f = e4Var.f44958t;
        this.f22899g = e4Var.f44956r;
        this.f22900h = e4Var.f44957s;
        this.f22897e = e4Var.f44962x;
        this.f22896d = e4Var.f44960v;
        this.f22895c = e4Var.f44961w;
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
        return this.f22893a;
    }

    public b b(int i10) {
        return (b) this.f22902j.get(i10);
    }

    public float c() {
        return this.f22899g;
    }

    public f d(int i10) {
        return (f) this.f22901i.get(i10);
    }

    public final SparseArray e() {
        return this.f22902j;
    }

    public final void f(SparseArray sparseArray) {
        this.f22902j.clear();
        for (int i10 = 0; i10 < sparseArray.size(); i10++) {
            this.f22902j.put(sparseArray.keyAt(i10), (b) sparseArray.valueAt(i10));
        }
    }

    public final void g(int i10) {
        this.f22894b = -1;
    }

    public String toString() {
        xe a10 = ye.a("Face");
        a10.c("boundingBox", this.f22893a);
        a10.b("trackingId", this.f22894b);
        a10.a("rightEyeOpenProbability", this.f22895c);
        a10.a("leftEyeOpenProbability", this.f22896d);
        a10.a("smileProbability", this.f22897e);
        a10.a("eulerX", this.f22898f);
        a10.a("eulerY", this.f22899g);
        a10.a("eulerZ", this.f22900h);
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
        this.f22893a = j10;
        if (matrix != null) {
            dk.b.e(j10, matrix);
        }
        this.f22894b = jeVar.i();
        for (qe qeVar : jeVar.l()) {
            if (i(qeVar.b())) {
                PointF c10 = qeVar.c();
                if (matrix != null) {
                    dk.b.c(c10, matrix);
                }
                this.f22901i.put(qeVar.b(), new f(qeVar.b(), c10));
            }
        }
        for (fe feVar : jeVar.k()) {
            int b10 = feVar.b();
            if (h(b10)) {
                List c11 = feVar.c();
                c11.getClass();
                ArrayList arrayList = new ArrayList(c11);
                if (matrix != null) {
                    dk.b.d(arrayList, matrix);
                }
                this.f22902j.put(b10, new b(b10, arrayList));
            }
        }
        this.f22898f = jeVar.g();
        this.f22899g = jeVar.c();
        this.f22900h = -jeVar.e();
        this.f22897e = jeVar.f();
        this.f22896d = jeVar.b();
        this.f22895c = jeVar.d();
    }
}
