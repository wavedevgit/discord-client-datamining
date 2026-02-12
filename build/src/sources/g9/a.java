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
    private final com.facebook.drawee.backends.pipeline.a f25354a;

    /* renamed from: b  reason: collision with root package name */
    private final b f25355b;

    /* renamed from: c  reason: collision with root package name */
    private final j f25356c = new j(k.f514i);

    /* renamed from: d  reason: collision with root package name */
    private h9.a f25357d;

    /* renamed from: e  reason: collision with root package name */
    private h9.b f25358e;

    /* renamed from: f  reason: collision with root package name */
    private c f25359f;

    /* renamed from: g  reason: collision with root package name */
    private List f25360g;

    /* renamed from: h  reason: collision with root package name */
    private boolean f25361h;

    public a(b bVar, com.facebook.drawee.backends.pipeline.a aVar) {
        this.f25355b = bVar;
        this.f25354a = aVar;
    }

    private void h() {
        if (this.f25358e == null) {
            this.f25358e = new h9.b(this.f25355b, this.f25356c, this);
        }
        if (this.f25357d == null) {
            this.f25357d = new h9.a(this.f25355b, this.f25356c);
        }
        if (this.f25359f == null) {
            this.f25359f = new c(this.f25357d);
        }
    }

    @Override // aa.i
    public void a(j jVar, n nVar) {
        List list;
        if (this.f25361h && (list = this.f25360g) != null && !list.isEmpty()) {
            jVar.S();
            Iterator it = this.f25360g.iterator();
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
        if (this.f25361h && (list = this.f25360g) != null && !list.isEmpty()) {
            if (eVar == e.f452r) {
                d();
            }
            jVar.S();
            Iterator it = this.f25360g.iterator();
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
        if (this.f25360g == null) {
            this.f25360g = new CopyOnWriteArrayList();
        }
        this.f25360g.add(gVar);
    }

    public void d() {
        DraweeHierarchy hierarchy = this.f25354a.getHierarchy();
        if (hierarchy != null && hierarchy.d() != null) {
            Rect bounds = hierarchy.d().getBounds();
            this.f25356c.N(bounds.width());
            this.f25356c.M(bounds.height());
        }
    }

    public void e() {
        List list = this.f25360g;
        if (list != null) {
            list.clear();
        }
    }

    public void f() {
        e();
        g(false);
        this.f25356c.w();
    }

    public void g(boolean z10) {
        this.f25361h = z10;
        if (z10) {
            h();
            h9.b bVar = this.f25358e;
            if (bVar != null) {
                this.f25354a.f(bVar);
            }
            c cVar = this.f25359f;
            if (cVar != null) {
                this.f25354a.c0(cVar);
                return;
            }
            return;
        }
        h9.b bVar2 = this.f25358e;
        if (bVar2 != null) {
            this.f25354a.M(bVar2);
        }
        c cVar2 = this.f25359f;
        if (cVar2 != null) {
            this.f25354a.t0(cVar2);
        }
    }
}
