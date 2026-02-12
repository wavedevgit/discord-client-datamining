package rd;

import android.os.Handler;
import android.os.Looper;
import com.google.android.exoplayer2.Timeline;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.Iterator;
import nc.t1;
import rd.r;
import rd.y;
import sc.u;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class a implements r {

    /* renamed from: d  reason: collision with root package name */
    private final ArrayList f46254d = new ArrayList(1);

    /* renamed from: e  reason: collision with root package name */
    private final HashSet f46255e = new HashSet(1);

    /* renamed from: i  reason: collision with root package name */
    private final y.a f46256i = new y.a();

    /* renamed from: o  reason: collision with root package name */
    private final u.a f46257o = new u.a();

    /* renamed from: p  reason: collision with root package name */
    private Looper f46258p;

    /* renamed from: q  reason: collision with root package name */
    private Timeline f46259q;

    /* renamed from: r  reason: collision with root package name */
    private t1 f46260r;

    /* JADX INFO: Access modifiers changed from: protected */
    public final boolean A() {
        return !this.f46255e.isEmpty();
    }

    protected abstract void B(me.c0 c0Var);

    /* JADX INFO: Access modifiers changed from: protected */
    public final void C(Timeline timeline) {
        this.f46259q = timeline;
        Iterator it = this.f46254d.iterator();
        while (it.hasNext()) {
            ((r.c) it.next()).a(this, timeline);
        }
    }

    protected abstract void D();

    @Override // rd.r
    public final void b(Handler handler, sc.u uVar) {
        oe.a.e(handler);
        oe.a.e(uVar);
        this.f46257o.g(handler, uVar);
    }

    @Override // rd.r
    public final void e(r.c cVar) {
        this.f46254d.remove(cVar);
        if (this.f46254d.isEmpty()) {
            this.f46258p = null;
            this.f46259q = null;
            this.f46260r = null;
            this.f46255e.clear();
            D();
            return;
        }
        m(cVar);
    }

    @Override // rd.r
    public final void g(r.c cVar, me.c0 c0Var, t1 t1Var) {
        boolean z10;
        Looper myLooper = Looper.myLooper();
        Looper looper = this.f46258p;
        if (looper != null && looper != myLooper) {
            z10 = false;
        } else {
            z10 = true;
        }
        oe.a.a(z10);
        this.f46260r = t1Var;
        Timeline timeline = this.f46259q;
        this.f46254d.add(cVar);
        if (this.f46258p == null) {
            this.f46258p = myLooper;
            this.f46255e.add(cVar);
            B(c0Var);
        } else if (timeline != null) {
            p(cVar);
            cVar.a(this, timeline);
        }
    }

    @Override // rd.r
    public final void h(y yVar) {
        this.f46256i.v(yVar);
    }

    @Override // rd.r
    public final void j(Handler handler, y yVar) {
        oe.a.e(handler);
        oe.a.e(yVar);
        this.f46256i.g(handler, yVar);
    }

    @Override // rd.r
    public final void l(sc.u uVar) {
        this.f46257o.n(uVar);
    }

    @Override // rd.r
    public final void m(r.c cVar) {
        boolean isEmpty = this.f46255e.isEmpty();
        this.f46255e.remove(cVar);
        if (!isEmpty && this.f46255e.isEmpty()) {
            x();
        }
    }

    @Override // rd.r
    public final void p(r.c cVar) {
        oe.a.e(this.f46258p);
        boolean isEmpty = this.f46255e.isEmpty();
        this.f46255e.add(cVar);
        if (isEmpty) {
            y();
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final u.a t(int i10, r.b bVar) {
        return this.f46257o.o(i10, bVar);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final u.a u(r.b bVar) {
        return this.f46257o.o(0, bVar);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final y.a v(int i10, r.b bVar) {
        return this.f46256i.y(i10, bVar);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final y.a w(r.b bVar) {
        return this.f46256i.y(0, bVar);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final t1 z() {
        return (t1) oe.a.i(this.f46260r);
    }

    protected void x() {
    }

    protected void y() {
    }
}
