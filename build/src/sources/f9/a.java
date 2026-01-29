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
    private final com.facebook.drawee.backends.pipeline.a f24839a;

    /* renamed from: b  reason: collision with root package name */
    private final b f24840b;

    /* renamed from: c  reason: collision with root package name */
    private final j f24841c = new j(k.f55395i);

    /* renamed from: d  reason: collision with root package name */
    private g9.a f24842d;

    /* renamed from: e  reason: collision with root package name */
    private g9.b f24843e;

    /* renamed from: f  reason: collision with root package name */
    private c f24844f;

    /* renamed from: g  reason: collision with root package name */
    private List f24845g;

    /* renamed from: h  reason: collision with root package name */
    private boolean f24846h;

    public a(b bVar, com.facebook.drawee.backends.pipeline.a aVar) {
        this.f24840b = bVar;
        this.f24839a = aVar;
    }

    private void h() {
        if (this.f24843e == null) {
            this.f24843e = new g9.b(this.f24840b, this.f24841c, this);
        }
        if (this.f24842d == null) {
            this.f24842d = new g9.a(this.f24840b, this.f24841c);
        }
        if (this.f24844f == null) {
            this.f24844f = new c(this.f24842d);
        }
    }

    @Override // z9.i
    public void a(j jVar, n nVar) {
        List list;
        if (this.f24846h && (list = this.f24845g) != null && !list.isEmpty()) {
            jVar.S();
            Iterator it = this.f24845g.iterator();
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
        if (this.f24846h && (list = this.f24845g) != null && !list.isEmpty()) {
            if (eVar == e.f55333r) {
                d();
            }
            jVar.S();
            Iterator it = this.f24845g.iterator();
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
        if (this.f24845g == null) {
            this.f24845g = new CopyOnWriteArrayList();
        }
        this.f24845g.add(gVar);
    }

    public void d() {
        DraweeHierarchy hierarchy = this.f24839a.getHierarchy();
        if (hierarchy != null && hierarchy.d() != null) {
            Rect bounds = hierarchy.d().getBounds();
            this.f24841c.N(bounds.width());
            this.f24841c.M(bounds.height());
        }
    }

    public void e() {
        List list = this.f24845g;
        if (list != null) {
            list.clear();
        }
    }

    public void f() {
        e();
        g(false);
        this.f24841c.w();
    }

    public void g(boolean z10) {
        this.f24846h = z10;
        if (z10) {
            h();
            g9.b bVar = this.f24843e;
            if (bVar != null) {
                this.f24839a.f(bVar);
            }
            c cVar = this.f24844f;
            if (cVar != null) {
                this.f24839a.c0(cVar);
                return;
            }
            return;
        }
        g9.b bVar2 = this.f24843e;
        if (bVar2 != null) {
            this.f24839a.M(bVar2);
        }
        c cVar2 = this.f24844f;
        if (cVar2 != null) {
            this.f24839a.t0(cVar2);
        }
    }
}
