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
    private final int f55886a;

    /* renamed from: b  reason: collision with root package name */
    private final n0.g f55887b;

    /* renamed from: c  reason: collision with root package name */
    private final Rect f55888c;

    /* renamed from: d  reason: collision with root package name */
    private final int f55889d;

    /* renamed from: e  reason: collision with root package name */
    private final int f55890e;

    /* renamed from: f  reason: collision with root package name */
    private final Matrix f55891f;

    /* renamed from: g  reason: collision with root package name */
    private final u0 f55892g;

    /* renamed from: h  reason: collision with root package name */
    private final String f55893h;

    /* renamed from: j  reason: collision with root package name */
    final ListenableFuture f55895j;

    /* renamed from: k  reason: collision with root package name */
    private int f55896k = -1;

    /* renamed from: i  reason: collision with root package name */
    private final List f55894i = new ArrayList();

    /* JADX INFO: Access modifiers changed from: package-private */
    public p0(a0.o0 o0Var, n0.g gVar, Rect rect, int i10, int i11, Matrix matrix, u0 u0Var, ListenableFuture listenableFuture, int i12) {
        this.f55886a = i12;
        this.f55887b = gVar;
        this.f55890e = i11;
        this.f55889d = i10;
        this.f55888c = rect;
        this.f55891f = matrix;
        this.f55892g = u0Var;
        this.f55893h = String.valueOf(o0Var.hashCode());
        List<a0.q0> a10 = o0Var.a();
        Objects.requireNonNull(a10);
        for (a0.q0 q0Var : a10) {
            this.f55894i.add(Integer.valueOf(q0Var.getId()));
        }
        this.f55895j = listenableFuture;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public ListenableFuture a() {
        return this.f55895j;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Rect b() {
        return this.f55888c;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int c() {
        return this.f55890e;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public n0.g d() {
        return this.f55887b;
    }

    public int e() {
        return this.f55886a;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int f() {
        return this.f55889d;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Matrix g() {
        return this.f55891f;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public List h() {
        return this.f55894i;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public String i() {
        return this.f55893h;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean j() {
        return this.f55892g.g();
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
        this.f55892g.d(o0Var);
    }

    void m(int i10) {
        if (this.f55896k != i10) {
            this.f55896k = i10;
            this.f55892g.a(i10);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void n() {
        this.f55892g.c();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void o(androidx.camera.core.n nVar) {
        this.f55892g.f(nVar);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void p(n0.h hVar) {
        this.f55892g.i(hVar);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void q() {
        if (this.f55896k != -1) {
            m(100);
        }
        this.f55892g.h();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void r(Bitmap bitmap) {
        this.f55892g.b(bitmap);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void s(x.o0 o0Var) {
        this.f55892g.e(o0Var);
    }
}
