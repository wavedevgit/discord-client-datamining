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
    private final com.facebook.drawee.backends.pipeline.a f22968a;

    /* renamed from: b  reason: collision with root package name */
    private final b f22969b;

    /* renamed from: c  reason: collision with root package name */
    private final j f22970c = new j(k.f56046i);

    /* renamed from: d  reason: collision with root package name */
    private g9.a f22971d;

    /* renamed from: e  reason: collision with root package name */
    private g9.b f22972e;

    /* renamed from: f  reason: collision with root package name */
    private c f22973f;

    /* renamed from: g  reason: collision with root package name */
    private List f22974g;

    /* renamed from: h  reason: collision with root package name */
    private boolean f22975h;

    public a(b bVar, com.facebook.drawee.backends.pipeline.a aVar) {
        this.f22969b = bVar;
        this.f22968a = aVar;
    }

    private void h() {
        if (this.f22972e == null) {
            this.f22972e = new g9.b(this.f22969b, this.f22970c, this);
        }
        if (this.f22971d == null) {
            this.f22971d = new g9.a(this.f22969b, this.f22970c);
        }
        if (this.f22973f == null) {
            this.f22973f = new c(this.f22971d);
        }
    }

    @Override // z9.i
    public void a(j jVar, n nVar) {
        List list;
        if (this.f22975h && (list = this.f22974g) != null && !list.isEmpty()) {
            jVar.S();
            Iterator it = this.f22974g.iterator();
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
        if (this.f22975h && (list = this.f22974g) != null && !list.isEmpty()) {
            if (eVar == e.f55984r) {
                d();
            }
            jVar.S();
            Iterator it = this.f22974g.iterator();
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
        if (this.f22974g == null) {
            this.f22974g = new CopyOnWriteArrayList();
        }
        this.f22974g.add(gVar);
    }

    public void d() {
        DraweeHierarchy hierarchy = this.f22968a.getHierarchy();
        if (hierarchy != null && hierarchy.d() != null) {
            Rect bounds = hierarchy.d().getBounds();
            this.f22970c.N(bounds.width());
            this.f22970c.M(bounds.height());
        }
    }

    public void e() {
        List list = this.f22974g;
        if (list != null) {
            list.clear();
        }
    }

    public void f() {
        e();
        g(false);
        this.f22970c.w();
    }

    public void g(boolean z10) {
        this.f22975h = z10;
        if (z10) {
            h();
            g9.b bVar = this.f22972e;
            if (bVar != null) {
                this.f22968a.f(bVar);
            }
            c cVar = this.f22973f;
            if (cVar != null) {
                this.f22968a.c0(cVar);
                return;
            }
            return;
        }
        g9.b bVar2 = this.f22972e;
        if (bVar2 != null) {
            this.f22968a.M(bVar2);
        }
        c cVar2 = this.f22973f;
        if (cVar2 != null) {
            this.f22968a.t0(cVar2);
        }
    }
}
