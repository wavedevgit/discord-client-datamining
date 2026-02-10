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
    private final com.facebook.drawee.backends.pipeline.a f25353a;

    /* renamed from: b  reason: collision with root package name */
    private final b f25354b;

    /* renamed from: c  reason: collision with root package name */
    private final j f25355c = new j(k.f514i);

    /* renamed from: d  reason: collision with root package name */
    private h9.a f25356d;

    /* renamed from: e  reason: collision with root package name */
    private h9.b f25357e;

    /* renamed from: f  reason: collision with root package name */
    private c f25358f;

    /* renamed from: g  reason: collision with root package name */
    private List f25359g;

    /* renamed from: h  reason: collision with root package name */
    private boolean f25360h;

    public a(b bVar, com.facebook.drawee.backends.pipeline.a aVar) {
        this.f25354b = bVar;
        this.f25353a = aVar;
    }

    private void h() {
        if (this.f25357e == null) {
            this.f25357e = new h9.b(this.f25354b, this.f25355c, this);
        }
        if (this.f25356d == null) {
            this.f25356d = new h9.a(this.f25354b, this.f25355c);
        }
        if (this.f25358f == null) {
            this.f25358f = new c(this.f25356d);
        }
    }

    @Override // aa.i
    public void a(j jVar, n nVar) {
        List list;
        if (this.f25360h && (list = this.f25359g) != null && !list.isEmpty()) {
            jVar.S();
            Iterator it = this.f25359g.iterator();
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
        if (this.f25360h && (list = this.f25359g) != null && !list.isEmpty()) {
            if (eVar == e.f452r) {
                d();
            }
            jVar.S();
            Iterator it = this.f25359g.iterator();
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
        if (this.f25359g == null) {
            this.f25359g = new CopyOnWriteArrayList();
        }
        this.f25359g.add(gVar);
    }

    public void d() {
        DraweeHierarchy hierarchy = this.f25353a.getHierarchy();
        if (hierarchy != null && hierarchy.d() != null) {
            Rect bounds = hierarchy.d().getBounds();
            this.f25355c.N(bounds.width());
            this.f25355c.M(bounds.height());
        }
    }

    public void e() {
        List list = this.f25359g;
        if (list != null) {
            list.clear();
        }
    }

    public void f() {
        e();
        g(false);
        this.f25355c.w();
    }

    public void g(boolean z10) {
        this.f25360h = z10;
        if (z10) {
            h();
            h9.b bVar = this.f25357e;
            if (bVar != null) {
                this.f25353a.f(bVar);
            }
            c cVar = this.f25358f;
            if (cVar != null) {
                this.f25353a.c0(cVar);
                return;
            }
            return;
        }
        h9.b bVar2 = this.f25357e;
        if (bVar2 != null) {
            this.f25353a.M(bVar2);
        }
        c cVar2 = this.f25358f;
        if (cVar2 != null) {
            this.f25353a.t0(cVar2);
        }
    }
}
