package bk;

import android.graphics.Matrix;
import android.graphics.PointF;
import android.graphics.Rect;
import android.util.SparseArray;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import pg.c2;
import pg.e4;
import pg.fe;
import pg.je;
import pg.mc;
import pg.qe;
import pg.xe;
import pg.ye;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class a {

    /* renamed from: a  reason: collision with root package name */
    private final Rect f6809a;

    /* renamed from: b  reason: collision with root package name */
    private int f6810b;

    /* renamed from: c  reason: collision with root package name */
    private final float f6811c;

    /* renamed from: d  reason: collision with root package name */
    private final float f6812d;

    /* renamed from: e  reason: collision with root package name */
    private final float f6813e;

    /* renamed from: f  reason: collision with root package name */
    private final float f6814f;

    /* renamed from: g  reason: collision with root package name */
    private final float f6815g;

    /* renamed from: h  reason: collision with root package name */
    private final float f6816h;

    /* renamed from: i  reason: collision with root package name */
    private final SparseArray f6817i = new SparseArray();

    /* renamed from: j  reason: collision with root package name */
    private final SparseArray f6818j = new SparseArray();

    public a(e4 e4Var, Matrix matrix) {
        mc[] mcVarArr;
        c2[] c2VarArr;
        int length;
        float f10 = e4Var.f44153i;
        float f11 = e4Var.f44155p / 2.0f;
        float f12 = e4Var.f44154o;
        float f13 = e4Var.f44156q / 2.0f;
        Rect rect = new Rect((int) (f10 - f11), (int) (f12 - f13), (int) (f10 + f11), (int) (f12 + f13));
        this.f6809a = rect;
        if (matrix != null) {
            ak.b.e(rect, matrix);
        }
        this.f6810b = e4Var.f44152e;
        for (mc mcVar : e4Var.f44160u) {
            if (i(mcVar.f44489o)) {
                PointF pointF = new PointF(mcVar.f44487e, mcVar.f44488i);
                if (matrix != null) {
                    ak.b.c(pointF, matrix);
                }
                SparseArray sparseArray = this.f6817i;
                int i10 = mcVar.f44489o;
                sparseArray.put(i10, new f(i10, pointF));
            }
        }
        for (c2 c2Var : e4Var.f44164y) {
            int i11 = c2Var.f43965e;
            if (h(i11)) {
                PointF[] pointFArr = c2Var.f43964d;
                pointFArr.getClass();
                long length2 = pointFArr.length + 5 + (length / 10);
                ArrayList arrayList = new ArrayList(length2 > 2147483647L ? Integer.MAX_VALUE : (int) length2);
                Collections.addAll(arrayList, pointFArr);
                if (matrix != null) {
                    ak.b.d(arrayList, matrix);
                }
                this.f6818j.put(i11, new b(i11, arrayList));
            }
        }
        this.f6814f = e4Var.f44159t;
        this.f6815g = e4Var.f44157r;
        this.f6816h = e4Var.f44158s;
        this.f6813e = e4Var.f44163x;
        this.f6812d = e4Var.f44161v;
        this.f6811c = e4Var.f44162w;
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
        return this.f6809a;
    }

    public b b(int i10) {
        return (b) this.f6818j.get(i10);
    }

    public float c() {
        return this.f6815g;
    }

    public f d(int i10) {
        return (f) this.f6817i.get(i10);
    }

    public final SparseArray e() {
        return this.f6818j;
    }

    public final void f(SparseArray sparseArray) {
        this.f6818j.clear();
        for (int i10 = 0; i10 < sparseArray.size(); i10++) {
            this.f6818j.put(sparseArray.keyAt(i10), (b) sparseArray.valueAt(i10));
        }
    }

    public final void g(int i10) {
        this.f6810b = -1;
    }

    public String toString() {
        xe a10 = ye.a("Face");
        a10.c("boundingBox", this.f6809a);
        a10.b("trackingId", this.f6810b);
        a10.a("rightEyeOpenProbability", this.f6811c);
        a10.a("leftEyeOpenProbability", this.f6812d);
        a10.a("smileProbability", this.f6813e);
        a10.a("eulerX", this.f6814f);
        a10.a("eulerY", this.f6815g);
        a10.a("eulerZ", this.f6816h);
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
        this.f6809a = j10;
        if (matrix != null) {
            ak.b.e(j10, matrix);
        }
        this.f6810b = jeVar.i();
        for (qe qeVar : jeVar.o()) {
            if (i(qeVar.b())) {
                PointF c10 = qeVar.c();
                if (matrix != null) {
                    ak.b.c(c10, matrix);
                }
                this.f6817i.put(qeVar.b(), new f(qeVar.b(), c10));
            }
        }
        for (fe feVar : jeVar.l()) {
            int b10 = feVar.b();
            if (h(b10)) {
                List c11 = feVar.c();
                c11.getClass();
                ArrayList arrayList = new ArrayList(c11);
                if (matrix != null) {
                    ak.b.d(arrayList, matrix);
                }
                this.f6818j.put(b10, new b(b10, arrayList));
            }
        }
        this.f6814f = jeVar.h();
        this.f6815g = jeVar.c();
        this.f6816h = -jeVar.e();
        this.f6813e = jeVar.f();
        this.f6812d = jeVar.b();
        this.f6811c = jeVar.d();
    }
}
