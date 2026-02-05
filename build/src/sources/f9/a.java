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
    private final com.facebook.drawee.backends.pipeline.a f22667a;

    /* renamed from: b  reason: collision with root package name */
    private final b f22668b;

    /* renamed from: c  reason: collision with root package name */
    private final j f22669c = new j(k.f55267i);

    /* renamed from: d  reason: collision with root package name */
    private g9.a f22670d;

    /* renamed from: e  reason: collision with root package name */
    private g9.b f22671e;

    /* renamed from: f  reason: collision with root package name */
    private c f22672f;

    /* renamed from: g  reason: collision with root package name */
    private List f22673g;

    /* renamed from: h  reason: collision with root package name */
    private boolean f22674h;

    public a(b bVar, com.facebook.drawee.backends.pipeline.a aVar) {
        this.f22668b = bVar;
        this.f22667a = aVar;
    }

    private void h() {
        if (this.f22671e == null) {
            this.f22671e = new g9.b(this.f22668b, this.f22669c, this);
        }
        if (this.f22670d == null) {
            this.f22670d = new g9.a(this.f22668b, this.f22669c);
        }
        if (this.f22672f == null) {
            this.f22672f = new c(this.f22670d);
        }
    }

    @Override // z9.i
    public void a(j jVar, n nVar) {
        List list;
        if (this.f22674h && (list = this.f22673g) != null && !list.isEmpty()) {
            jVar.S();
            Iterator it = this.f22673g.iterator();
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
        if (this.f22674h && (list = this.f22673g) != null && !list.isEmpty()) {
            if (eVar == e.f55205r) {
                d();
            }
            jVar.S();
            Iterator it = this.f22673g.iterator();
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
        if (this.f22673g == null) {
            this.f22673g = new CopyOnWriteArrayList();
        }
        this.f22673g.add(gVar);
    }

    public void d() {
        DraweeHierarchy hierarchy = this.f22667a.getHierarchy();
        if (hierarchy != null && hierarchy.d() != null) {
            Rect bounds = hierarchy.d().getBounds();
            this.f22669c.N(bounds.width());
            this.f22669c.M(bounds.height());
        }
    }

    public void e() {
        List list = this.f22673g;
        if (list != null) {
            list.clear();
        }
    }

    public void f() {
        e();
        g(false);
        this.f22669c.w();
    }

    public void g(boolean z10) {
        this.f22674h = z10;
        if (z10) {
            h();
            g9.b bVar = this.f22671e;
            if (bVar != null) {
                this.f22667a.f(bVar);
            }
            c cVar = this.f22672f;
            if (cVar != null) {
                this.f22667a.c0(cVar);
                return;
            }
            return;
        }
        g9.b bVar2 = this.f22671e;
        if (bVar2 != null) {
            this.f22667a.M(bVar2);
        }
        c cVar2 = this.f22672f;
        if (cVar2 != null) {
            this.f22667a.t0(cVar2);
        }
    }
}
