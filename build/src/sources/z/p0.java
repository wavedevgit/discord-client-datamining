package z;

import android.graphics.Bitmap;
import android.graphics.Matrix;
import android.graphics.Rect;
import com.google.common.util.concurrent.ListenableFuture;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import x.n0;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class p0 {

    /* renamed from: a  reason: collision with root package name */
    private final int f55422a;

    /* renamed from: b  reason: collision with root package name */
    private final n0.g f55423b;

    /* renamed from: c  reason: collision with root package name */
    private final Rect f55424c;

    /* renamed from: d  reason: collision with root package name */
    private final int f55425d;

    /* renamed from: e  reason: collision with root package name */
    private final int f55426e;

    /* renamed from: f  reason: collision with root package name */
    private final Matrix f55427f;

    /* renamed from: g  reason: collision with root package name */
    private final u0 f55428g;

    /* renamed from: h  reason: collision with root package name */
    private final String f55429h;

    /* renamed from: j  reason: collision with root package name */
    final ListenableFuture f55431j;

    /* renamed from: k  reason: collision with root package name */
    private int f55432k = -1;

    /* renamed from: i  reason: collision with root package name */
    private final List f55430i = new ArrayList();

    /* JADX INFO: Access modifiers changed from: package-private */
    public p0(a0.o0 o0Var, n0.g gVar, Rect rect, int i10, int i11, Matrix matrix, u0 u0Var, ListenableFuture listenableFuture, int i12) {
        this.f55422a = i12;
        this.f55423b = gVar;
        this.f55426e = i11;
        this.f55425d = i10;
        this.f55424c = rect;
        this.f55427f = matrix;
        this.f55428g = u0Var;
        this.f55429h = String.valueOf(o0Var.hashCode());
        List<a0.q0> a10 = o0Var.a();
        Objects.requireNonNull(a10);
        for (a0.q0 q0Var : a10) {
            this.f55430i.add(Integer.valueOf(q0Var.getId()));
        }
        this.f55431j = listenableFuture;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public ListenableFuture a() {
        return this.f55431j;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Rect b() {
        return this.f55424c;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int c() {
        return this.f55426e;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public n0.g d() {
        return this.f55423b;
    }

    public int e() {
        return this.f55422a;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int f() {
        return this.f55425d;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Matrix g() {
        return this.f55427f;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public List h() {
        return this.f55430i;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public String i() {
        return this.f55429h;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean j() {
        return this.f55428g.g();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean k() {
        if (d() == null) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void l(x.o0 o0Var) {
        this.f55428g.d(o0Var);
    }

    void m(int i10) {
        if (this.f55432k != i10) {
            this.f55432k = i10;
            this.f55428g.a(i10);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void n() {
        this.f55428g.c();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void o(androidx.camera.core.n nVar) {
        this.f55428g.f(nVar);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void p(n0.h hVar) {
        this.f55428g.i(hVar);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void q() {
        if (this.f55432k != -1) {
            m(100);
        }
        this.f55428g.h();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void r(Bitmap bitmap) {
        this.f55428g.b(bitmap);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void s(x.o0 o0Var) {
        this.f55428g.e(o0Var);
    }
}
