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
    private final com.facebook.drawee.backends.pipeline.a f24050a;

    /* renamed from: b  reason: collision with root package name */
    private final b f24051b;

    /* renamed from: c  reason: collision with root package name */
    private final j f24052c = new j(k.f55543i);

    /* renamed from: d  reason: collision with root package name */
    private g9.a f24053d;

    /* renamed from: e  reason: collision with root package name */
    private g9.b f24054e;

    /* renamed from: f  reason: collision with root package name */
    private c f24055f;

    /* renamed from: g  reason: collision with root package name */
    private List f24056g;

    /* renamed from: h  reason: collision with root package name */
    private boolean f24057h;

    public a(b bVar, com.facebook.drawee.backends.pipeline.a aVar) {
        this.f24051b = bVar;
        this.f24050a = aVar;
    }

    private void h() {
        if (this.f24054e == null) {
            this.f24054e = new g9.b(this.f24051b, this.f24052c, this);
        }
        if (this.f24053d == null) {
            this.f24053d = new g9.a(this.f24051b, this.f24052c);
        }
        if (this.f24055f == null) {
            this.f24055f = new c(this.f24053d);
        }
    }

    @Override // z9.i
    public void a(j jVar, n nVar) {
        List list;
        if (this.f24057h && (list = this.f24056g) != null && !list.isEmpty()) {
            jVar.S();
            Iterator it = this.f24056g.iterator();
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
        if (this.f24057h && (list = this.f24056g) != null && !list.isEmpty()) {
            if (eVar == e.f55481r) {
                d();
            }
            jVar.S();
            Iterator it = this.f24056g.iterator();
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
        if (this.f24056g == null) {
            this.f24056g = new CopyOnWriteArrayList();
        }
        this.f24056g.add(gVar);
    }

    public void d() {
        DraweeHierarchy hierarchy = this.f24050a.getHierarchy();
        if (hierarchy != null && hierarchy.d() != null) {
            Rect bounds = hierarchy.d().getBounds();
            this.f24052c.N(bounds.width());
            this.f24052c.M(bounds.height());
        }
    }

    public void e() {
        List list = this.f24056g;
        if (list != null) {
            list.clear();
        }
    }

    public void f() {
        e();
        g(false);
        this.f24052c.w();
    }

    public void g(boolean z10) {
        this.f24057h = z10;
        if (z10) {
            h();
            g9.b bVar = this.f24054e;
            if (bVar != null) {
                this.f24050a.f(bVar);
            }
            c cVar = this.f24055f;
            if (cVar != null) {
                this.f24050a.c0(cVar);
                return;
            }
            return;
        }
        g9.b bVar2 = this.f24054e;
        if (bVar2 != null) {
            this.f24050a.M(bVar2);
        }
        c cVar2 = this.f24055f;
        if (cVar2 != null) {
            this.f24050a.t0(cVar2);
        }
    }
}
