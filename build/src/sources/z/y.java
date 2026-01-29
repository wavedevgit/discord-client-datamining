package z;

import a0.g1;
import a0.h1;
import a0.i2;
import a0.p0;
import android.util.Size;
import androidx.camera.core.e;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.google.common.util.concurrent.ListenableFuture;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.concurrent.Executor;
import z.u;
import z.y0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class y {

    /* renamed from: f  reason: collision with root package name */
    private static int f55195f;

    /* renamed from: g  reason: collision with root package name */
    static final h0.b f55196g = new h0.b();

    /* renamed from: a  reason: collision with root package name */
    private final g1 f55197a;

    /* renamed from: b  reason: collision with root package name */
    private final a0.p0 f55198b;

    /* renamed from: c  reason: collision with root package name */
    private final u f55199c;

    /* renamed from: d  reason: collision with root package name */
    private final o0 f55200d;

    /* renamed from: e  reason: collision with root package name */
    private final u.c f55201e;

    public y(g1 g1Var, Size size, x.k kVar, boolean z10, Size size2, int i10) {
        b0.p.a();
        this.f55197a = g1Var;
        this.f55198b = p0.a.i(g1Var).h();
        u uVar = new u();
        this.f55199c = uVar;
        Executor b02 = g1Var.b0(c0.a.c());
        Objects.requireNonNull(b02);
        o0 o0Var = new o0(b02, null);
        this.f55200d = o0Var;
        int inputFormat = g1Var.getInputFormat();
        int i11 = i();
        g1Var.a0();
        u.c m10 = u.c.m(size, inputFormat, i11, z10, null, size2, i10);
        this.f55201e = m10;
        o0Var.p(uVar.q(m10));
    }

    private l b(int i10, a0.o0 o0Var, e1 e1Var, u0 u0Var) {
        ArrayList arrayList = new ArrayList();
        String valueOf = String.valueOf(o0Var.hashCode());
        List<a0.q0> a10 = o0Var.a();
        Objects.requireNonNull(a10);
        for (a0.q0 q0Var : a10) {
            p0.a aVar = new p0.a();
            aVar.t(this.f55198b.k());
            aVar.e(this.f55198b.g());
            aVar.a(e1Var.p());
            aVar.f(this.f55201e.k());
            aVar.r(l());
            if (i0.b.i(this.f55201e.d())) {
                if (f55196g.a()) {
                    aVar.d(a0.p0.f209i, Integer.valueOf(e1Var.n()));
                }
                aVar.d(a0.p0.f210j, Integer.valueOf(g(e1Var)));
            }
            aVar.e(q0Var.a().g());
            aVar.g(valueOf, Integer.valueOf(q0Var.getId()));
            aVar.p(i10);
            aVar.c(this.f55201e.a());
            arrayList.add(aVar.h());
        }
        return new l(arrayList, u0Var);
    }

    private a0.o0 c() {
        a0.o0 W = this.f55197a.W(x.x.b());
        Objects.requireNonNull(W);
        return W;
    }

    private p0 d(int i10, a0.o0 o0Var, e1 e1Var, u0 u0Var, ListenableFuture listenableFuture) {
        return new p0(o0Var, e1Var.m(), e1Var.i(), e1Var.n(), e1Var.k(), e1Var.o(), u0Var, listenableFuture, i10);
    }

    private int i() {
        Integer num = (Integer) this.f55197a.e(g1.M, null);
        if (num != null) {
            return num.intValue();
        }
        Integer num2 = (Integer) this.f55197a.e(h1.f76h, null);
        if (num2 != null && num2.intValue() == 4101) {
            return 4101;
        }
        return IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER;
    }

    private boolean l() {
        if (this.f55201e.h() != null) {
            return true;
        }
        return false;
    }

    public void a() {
        b0.p.a();
        this.f55199c.m();
        this.f55200d.n();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public b2.c e(e1 e1Var, u0 u0Var, ListenableFuture listenableFuture) {
        b0.p.a();
        a0.o0 c10 = c();
        int i10 = f55195f;
        f55195f = i10 + 1;
        return new b2.c(b(i10, c10, e1Var, u0Var), d(i10, c10, e1Var, u0Var, listenableFuture));
    }

    public i2.b f(Size size) {
        i2.b p10 = i2.b.p(this.f55197a, size);
        p10.h(this.f55201e.k());
        if (this.f55201e.h() != null) {
            p10.v(this.f55201e.h());
        }
        return p10;
    }

    int g(e1 e1Var) {
        boolean z10;
        if (e1Var.l() != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        boolean h10 = b0.q.h(e1Var.i(), this.f55201e.j());
        if (z10 && h10) {
            if (e1Var.h() == 0) {
                return 100;
            }
            return 95;
        }
        return e1Var.k();
    }

    public int h() {
        b0.p.a();
        return this.f55199c.h();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void j(y0.b bVar) {
        b0.p.a();
        this.f55201e.b().accept(bVar);
    }

    public void k(e.a aVar) {
        b0.p.a();
        this.f55199c.p(aVar);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void m(p0 p0Var) {
        b0.p.a();
        this.f55201e.i().accept(p0Var);
    }
}
