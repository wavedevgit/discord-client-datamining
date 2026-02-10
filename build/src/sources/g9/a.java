package g9;

import aa.e;
import aa.g;
import aa.i;
import aa.j;
import aa.k;
import aa.n;
import android.graphics.Rect;
import com.facebook.drawee.interfaces.DraweeHierarchy;
import java.util.Iterator;
import java.util.List;
import java.util.concurrent.CopyOnWriteArrayList;
import va.c;
import w8.b;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class a implements i {

    /* renamed from: a  reason: collision with root package name */
    private final com.facebook.drawee.backends.pipeline.a f24053a;

    /* renamed from: b  reason: collision with root package name */
    private final b f24054b;

    /* renamed from: c  reason: collision with root package name */
    private final j f24055c = new j(k.f514i);

    /* renamed from: d  reason: collision with root package name */
    private h9.a f24056d;

    /* renamed from: e  reason: collision with root package name */
    private h9.b f24057e;

    /* renamed from: f  reason: collision with root package name */
    private c f24058f;

    /* renamed from: g  reason: collision with root package name */
    private List f24059g;

    /* renamed from: h  reason: collision with root package name */
    private boolean f24060h;

    public a(b bVar, com.facebook.drawee.backends.pipeline.a aVar) {
        this.f24054b = bVar;
        this.f24053a = aVar;
    }

    private void h() {
        if (this.f24057e == null) {
            this.f24057e = new h9.b(this.f24054b, this.f24055c, this);
        }
        if (this.f24056d == null) {
            this.f24056d = new h9.a(this.f24054b, this.f24055c);
        }
        if (this.f24058f == null) {
            this.f24058f = new c(this.f24056d);
        }
    }

    @Override // aa.i
    public void a(j jVar, n nVar) {
        List list;
        if (this.f24060h && (list = this.f24059g) != null && !list.isEmpty()) {
            jVar.S();
            Iterator it = this.f24059g.iterator();
            if (it.hasNext()) {
                android.support.v4.media.session.b.a(it.next());
                throw null;
            }
        }
    }

    @Override // aa.i
    public void b(j jVar, e eVar) {
        List list;
        jVar.H(eVar);
        if (this.f24060h && (list = this.f24059g) != null && !list.isEmpty()) {
            if (eVar == e.f452r) {
                d();
            }
            jVar.S();
            Iterator it = this.f24059g.iterator();
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
        if (this.f24059g == null) {
            this.f24059g = new CopyOnWriteArrayList();
        }
        this.f24059g.add(gVar);
    }

    public void d() {
        DraweeHierarchy hierarchy = this.f24053a.getHierarchy();
        if (hierarchy != null && hierarchy.d() != null) {
            Rect bounds = hierarchy.d().getBounds();
            this.f24055c.N(bounds.width());
            this.f24055c.M(bounds.height());
        }
    }

    public void e() {
        List list = this.f24059g;
        if (list != null) {
            list.clear();
        }
    }

    public void f() {
        e();
        g(false);
        this.f24055c.w();
    }

    public void g(boolean z10) {
        this.f24060h = z10;
        if (z10) {
            h();
            h9.b bVar = this.f24057e;
            if (bVar != null) {
                this.f24053a.f(bVar);
            }
            c cVar = this.f24058f;
            if (cVar != null) {
                this.f24053a.c0(cVar);
                return;
            }
            return;
        }
        h9.b bVar2 = this.f24057e;
        if (bVar2 != null) {
            this.f24053a.M(bVar2);
        }
        c cVar2 = this.f24058f;
        if (cVar2 != null) {
            this.f24053a.t0(cVar2);
        }
    }
}
