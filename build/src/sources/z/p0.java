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
    private final int f55155a;

    /* renamed from: b  reason: collision with root package name */
    private final n0.g f55156b;

    /* renamed from: c  reason: collision with root package name */
    private final Rect f55157c;

    /* renamed from: d  reason: collision with root package name */
    private final int f55158d;

    /* renamed from: e  reason: collision with root package name */
    private final int f55159e;

    /* renamed from: f  reason: collision with root package name */
    private final Matrix f55160f;

    /* renamed from: g  reason: collision with root package name */
    private final u0 f55161g;

    /* renamed from: h  reason: collision with root package name */
    private final String f55162h;

    /* renamed from: j  reason: collision with root package name */
    final ListenableFuture f55164j;

    /* renamed from: k  reason: collision with root package name */
    private int f55165k = -1;

    /* renamed from: i  reason: collision with root package name */
    private final List f55163i = new ArrayList();

    /* JADX INFO: Access modifiers changed from: package-private */
    public p0(a0.o0 o0Var, n0.g gVar, Rect rect, int i10, int i11, Matrix matrix, u0 u0Var, ListenableFuture listenableFuture, int i12) {
        this.f55155a = i12;
        this.f55156b = gVar;
        this.f55159e = i11;
        this.f55158d = i10;
        this.f55157c = rect;
        this.f55160f = matrix;
        this.f55161g = u0Var;
        this.f55162h = String.valueOf(o0Var.hashCode());
        List<a0.q0> a10 = o0Var.a();
        Objects.requireNonNull(a10);
        for (a0.q0 q0Var : a10) {
            this.f55163i.add(Integer.valueOf(q0Var.getId()));
        }
        this.f55164j = listenableFuture;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public ListenableFuture a() {
        return this.f55164j;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Rect b() {
        return this.f55157c;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int c() {
        return this.f55159e;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public n0.g d() {
        return this.f55156b;
    }

    public int e() {
        return this.f55155a;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int f() {
        return this.f55158d;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Matrix g() {
        return this.f55160f;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public List h() {
        return this.f55163i;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public String i() {
        return this.f55162h;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean j() {
        return this.f55161g.g();
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
        this.f55161g.d(o0Var);
    }

    void m(int i10) {
        if (this.f55165k != i10) {
            this.f55165k = i10;
            this.f55161g.a(i10);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void n() {
        this.f55161g.c();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void o(androidx.camera.core.n nVar) {
        this.f55161g.f(nVar);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void p(n0.h hVar) {
        this.f55161g.i(hVar);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void q() {
        if (this.f55165k != -1) {
            m(100);
        }
        this.f55161g.h();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void r(Bitmap bitmap) {
        this.f55161g.b(bitmap);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void s(x.o0 o0Var) {
        this.f55161g.e(o0Var);
    }
}
