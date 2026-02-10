package ck;

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
    private final Rect f7650a;

    /* renamed from: b  reason: collision with root package name */
    private int f7651b;

    /* renamed from: c  reason: collision with root package name */
    private final float f7652c;

    /* renamed from: d  reason: collision with root package name */
    private final float f7653d;

    /* renamed from: e  reason: collision with root package name */
    private final float f7654e;

    /* renamed from: f  reason: collision with root package name */
    private final float f7655f;

    /* renamed from: g  reason: collision with root package name */
    private final float f7656g;

    /* renamed from: h  reason: collision with root package name */
    private final float f7657h;

    /* renamed from: i  reason: collision with root package name */
    private final SparseArray f7658i = new SparseArray();

    /* renamed from: j  reason: collision with root package name */
    private final SparseArray f7659j = new SparseArray();

    public a(e4 e4Var, Matrix matrix) {
        mc[] mcVarArr;
        c2[] c2VarArr;
        int length;
        float f10 = e4Var.f45715i;
        float f11 = e4Var.f45717p / 2.0f;
        float f12 = e4Var.f45716o;
        float f13 = e4Var.f45718q / 2.0f;
        Rect rect = new Rect((int) (f10 - f11), (int) (f12 - f13), (int) (f10 + f11), (int) (f12 + f13));
        this.f7650a = rect;
        if (matrix != null) {
            bk.b.e(rect, matrix);
        }
        this.f7651b = e4Var.f45714e;
        for (mc mcVar : e4Var.f45722u) {
            if (i(mcVar.f46051o)) {
                PointF pointF = new PointF(mcVar.f46049e, mcVar.f46050i);
                if (matrix != null) {
                    bk.b.c(pointF, matrix);
                }
                SparseArray sparseArray = this.f7658i;
                int i10 = mcVar.f46051o;
                sparseArray.put(i10, new f(i10, pointF));
            }
        }
        for (c2 c2Var : e4Var.f45726y) {
            int i11 = c2Var.f45527e;
            if (h(i11)) {
                PointF[] pointFArr = c2Var.f45526d;
                pointFArr.getClass();
                long length2 = pointFArr.length + 5 + (length / 10);
                ArrayList arrayList = new ArrayList(length2 > 2147483647L ? Integer.MAX_VALUE : (int) length2);
                Collections.addAll(arrayList, pointFArr);
                if (matrix != null) {
                    bk.b.d(arrayList, matrix);
                }
                this.f7659j.put(i11, new b(i11, arrayList));
            }
        }
        this.f7655f = e4Var.f45721t;
        this.f7656g = e4Var.f45719r;
        this.f7657h = e4Var.f45720s;
        this.f7654e = e4Var.f45725x;
        this.f7653d = e4Var.f45723v;
        this.f7652c = e4Var.f45724w;
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
        return this.f7650a;
    }

    public b b(int i10) {
        return (b) this.f7659j.get(i10);
    }

    public float c() {
        return this.f7656g;
    }

    public f d(int i10) {
        return (f) this.f7658i.get(i10);
    }

    public final SparseArray e() {
        return this.f7659j;
    }

    public final void f(SparseArray sparseArray) {
        this.f7659j.clear();
        for (int i10 = 0; i10 < sparseArray.size(); i10++) {
            this.f7659j.put(sparseArray.keyAt(i10), (b) sparseArray.valueAt(i10));
        }
    }

    public final void g(int i10) {
        this.f7651b = -1;
    }

    public String toString() {
        xe a10 = ye.a("Face");
        a10.c("boundingBox", this.f7650a);
        a10.b("trackingId", this.f7651b);
        a10.a("rightEyeOpenProbability", this.f7652c);
        a10.a("leftEyeOpenProbability", this.f7653d);
        a10.a("smileProbability", this.f7654e);
        a10.a("eulerX", this.f7655f);
        a10.a("eulerY", this.f7656g);
        a10.a("eulerZ", this.f7657h);
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
        this.f7650a = j10;
        if (matrix != null) {
            bk.b.e(j10, matrix);
        }
        this.f7651b = jeVar.i();
        for (qe qeVar : jeVar.o()) {
            if (i(qeVar.b())) {
                PointF c10 = qeVar.c();
                if (matrix != null) {
                    bk.b.c(c10, matrix);
                }
                this.f7658i.put(qeVar.b(), new f(qeVar.b(), c10));
            }
        }
        for (fe feVar : jeVar.l()) {
            int b10 = feVar.b();
            if (h(b10)) {
                List c11 = feVar.c();
                c11.getClass();
                ArrayList arrayList = new ArrayList(c11);
                if (matrix != null) {
                    bk.b.d(arrayList, matrix);
                }
                this.f7659j.put(b10, new b(b10, arrayList));
            }
        }
        this.f7655f = jeVar.h();
        this.f7656g = jeVar.c();
        this.f7657h = -jeVar.e();
        this.f7654e = jeVar.f();
        this.f7653d = jeVar.b();
        this.f7652c = jeVar.d();
    }
}
