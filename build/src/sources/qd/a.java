package qd;

import android.os.Handler;
import android.os.Looper;
import com.google.android.exoplayer2.Timeline;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.Iterator;
import mc.t1;
import qd.r;
import qd.y;
import rc.u;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class a implements r {

    /* renamed from: d  reason: collision with root package name */
    private final ArrayList f47100d = new ArrayList(1);

    /* renamed from: e  reason: collision with root package name */
    private final HashSet f47101e = new HashSet(1);

    /* renamed from: i  reason: collision with root package name */
    private final y.a f47102i = new y.a();

    /* renamed from: o  reason: collision with root package name */
    private final u.a f47103o = new u.a();

    /* renamed from: p  reason: collision with root package name */
    private Looper f47104p;

    /* renamed from: q  reason: collision with root package name */
    private Timeline f47105q;

    /* renamed from: r  reason: collision with root package name */
    private t1 f47106r;

    /* JADX INFO: Access modifiers changed from: protected */
    public final boolean A() {
        return !this.f47101e.isEmpty();
    }

    protected abstract void B(le.c0 c0Var);

    /* JADX INFO: Access modifiers changed from: protected */
    public final void C(Timeline timeline) {
        this.f47105q = timeline;
        Iterator it = this.f47100d.iterator();
        while (it.hasNext()) {
            ((r.c) it.next()).a(this, timeline);
        }
    }

    protected abstract void D();

    @Override // qd.r
    public final void a(r.c cVar) {
        this.f47100d.remove(cVar);
        if (this.f47100d.isEmpty()) {
            this.f47104p = null;
            this.f47105q = null;
            this.f47106r = null;
            this.f47101e.clear();
            D();
            return;
        }
        m(cVar);
    }

    @Override // qd.r
    public final void d(rc.u uVar) {
        this.f47103o.n(uVar);
    }

    @Override // qd.r
    public final void e(Handler handler, rc.u uVar) {
        ne.a.e(handler);
        ne.a.e(uVar);
        this.f47103o.g(handler, uVar);
    }

    @Override // qd.r
    public final void g(Handler handler, y yVar) {
        ne.a.e(handler);
        ne.a.e(yVar);
        this.f47102i.g(handler, yVar);
    }

    @Override // qd.r
    public final void k(y yVar) {
        this.f47102i.v(yVar);
    }

    @Override // qd.r
    public final void m(r.c cVar) {
        boolean isEmpty = this.f47101e.isEmpty();
        this.f47101e.remove(cVar);
        if (!isEmpty && this.f47101e.isEmpty()) {
            x();
        }
    }

    @Override // qd.r
    public final void r(r.c cVar, le.c0 c0Var, t1 t1Var) {
        boolean z10;
        Looper myLooper = Looper.myLooper();
        Looper looper = this.f47104p;
        if (looper != null && looper != myLooper) {
            z10 = false;
        } else {
            z10 = true;
        }
        ne.a.a(z10);
        this.f47106r = t1Var;
        Timeline timeline = this.f47105q;
        this.f47100d.add(cVar);
        if (this.f47104p == null) {
            this.f47104p = myLooper;
            this.f47101e.add(cVar);
            B(c0Var);
        } else if (timeline != null) {
            s(cVar);
            cVar.a(this, timeline);
        }
    }

    @Override // qd.r
    public final void s(r.c cVar) {
        ne.a.e(this.f47104p);
        boolean isEmpty = this.f47101e.isEmpty();
        this.f47101e.add(cVar);
        if (isEmpty) {
            y();
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final u.a t(int i10, r.b bVar) {
        return this.f47103o.o(i10, bVar);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final u.a u(r.b bVar) {
        return this.f47103o.o(0, bVar);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final y.a v(int i10, r.b bVar) {
        return this.f47102i.y(i10, bVar);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final y.a w(r.b bVar) {
        return this.f47102i.y(0, bVar);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final t1 z() {
        return (t1) ne.a.i(this.f47106r);
    }

    protected void x() {
    }

    protected void y() {
    }
}
