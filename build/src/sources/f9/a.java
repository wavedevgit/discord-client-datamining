package f9;

import android.graphics.Rect;
import com.facebook.drawee.interfaces.DraweeHierarchy;
import java.util.Iterator;
import java.util.List;
import java.util.concurrent.CopyOnWriteArrayList;
import ua.c;
import v8.b;
import z9.e;
import z9.g;
import z9.i;
import z9.j;
import z9.k;
import z9.n;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class a implements i {

    /* renamed from: a  reason: collision with root package name */
    private final com.facebook.drawee.backends.pipeline.a f23642a;

    /* renamed from: b  reason: collision with root package name */
    private final b f23643b;

    /* renamed from: c  reason: collision with root package name */
    private final j f23644c = new j(k.f55681i);

    /* renamed from: d  reason: collision with root package name */
    private g9.a f23645d;

    /* renamed from: e  reason: collision with root package name */
    private g9.b f23646e;

    /* renamed from: f  reason: collision with root package name */
    private c f23647f;

    /* renamed from: g  reason: collision with root package name */
    private List f23648g;

    /* renamed from: h  reason: collision with root package name */
    private boolean f23649h;

    public a(b bVar, com.facebook.drawee.backends.pipeline.a aVar) {
        this.f23643b = bVar;
        this.f23642a = aVar;
    }

    private void h() {
        if (this.f23646e == null) {
            this.f23646e = new g9.b(this.f23643b, this.f23644c, this);
        }
        if (this.f23645d == null) {
            this.f23645d = new g9.a(this.f23643b, this.f23644c);
        }
        if (this.f23647f == null) {
            this.f23647f = new c(this.f23645d);
        }
    }

    @Override // z9.i
    public void a(j jVar, n nVar) {
        List list;
        if (this.f23649h && (list = this.f23648g) != null && !list.isEmpty()) {
            jVar.S();
            Iterator it = this.f23648g.iterator();
            if (it.hasNext()) {
                android.support.v4.media.session.b.a(it.next());
                throw null;
            }
        }
    }

    @Override // z9.i
    public void b(j jVar, e eVar) {
        List list;
        jVar.H(eVar);
        if (this.f23649h && (list = this.f23648g) != null && !list.isEmpty()) {
            if (eVar == e.f55619r) {
                d();
            }
            jVar.S();
            Iterator it = this.f23648g.iterator();
            if (it.hasNext()) {
                android.support.v4.media.session.b.a(it.next());
                throw null;
            }
        }
    }

    public void c(g gVar) {
        if (gVar == null) {
            return;
        }
        if (this.f23648g == null) {
            this.f23648g = new CopyOnWriteArrayList();
        }
        this.f23648g.add(gVar);
    }

    public void d() {
        DraweeHierarchy hierarchy = this.f23642a.getHierarchy();
        if (hierarchy != null && hierarchy.d() != null) {
            Rect bounds = hierarchy.d().getBounds();
            this.f23644c.N(bounds.width());
            this.f23644c.M(bounds.height());
        }
    }

    public void e() {
        List list = this.f23648g;
        if (list != null) {
            list.clear();
        }
    }

    public void f() {
        e();
        g(false);
        this.f23644c.w();
    }

    public void g(boolean z10) {
        this.f23649h = z10;
        if (z10) {
            h();
            g9.b bVar = this.f23646e;
            if (bVar != null) {
                this.f23642a.f(bVar);
            }
            c cVar = this.f23647f;
            if (cVar != null) {
                this.f23642a.c0(cVar);
                return;
            }
            return;
        }
        g9.b bVar2 = this.f23646e;
        if (bVar2 != null) {
            this.f23642a.M(bVar2);
        }
        c cVar2 = this.f23647f;
        if (cVar2 != null) {
            this.f23642a.t0(cVar2);
        }
    }
}
