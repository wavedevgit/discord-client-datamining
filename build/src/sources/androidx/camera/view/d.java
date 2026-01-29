package androidx.camera.view;

import a0.d0;
import a0.e0;
import a0.u;
import a0.u1;
import androidx.arch.core.util.Function;
import androidx.camera.view.PreviewView;
import androidx.concurrent.futures.c;
import androidx.lifecycle.MutableLiveData;
import com.google.common.util.concurrent.ListenableFuture;
import java.util.ArrayList;
import java.util.List;
import x.y0;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class d implements u1.a {

    /* renamed from: a  reason: collision with root package name */
    private final d0 f2077a;

    /* renamed from: b  reason: collision with root package name */
    private final MutableLiveData f2078b;

    /* renamed from: c  reason: collision with root package name */
    private PreviewView.e f2079c;

    /* renamed from: d  reason: collision with root package name */
    private final i f2080d;

    /* renamed from: e  reason: collision with root package name */
    ListenableFuture f2081e;

    /* renamed from: f  reason: collision with root package name */
    private boolean f2082f = false;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class a implements d0.c {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ List f2083a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ x.o f2084b;

        a(List list, x.o oVar) {
            this.f2083a = list;
            this.f2084b = oVar;
        }

        @Override // d0.c
        /* renamed from: a */
        public void onSuccess(Void r22) {
            d.this.f2081e = null;
        }

        @Override // d0.c
        public void onFailure(Throwable th2) {
            d.this.f2081e = null;
            if (!this.f2083a.isEmpty()) {
                for (a0.k kVar : this.f2083a) {
                    ((d0) this.f2084b).k(kVar);
                }
                this.f2083a.clear();
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class b extends a0.k {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ c.a f2086a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ x.o f2087b;

        b(c.a aVar, x.o oVar) {
            this.f2086a = aVar;
            this.f2087b = oVar;
        }

        @Override // a0.k
        public void b(int i10, u uVar) {
            this.f2086a.c(null);
            ((d0) this.f2087b).k(this);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public d(d0 d0Var, MutableLiveData mutableLiveData, i iVar) {
        this.f2077a = d0Var;
        this.f2078b = mutableLiveData;
        this.f2080d = iVar;
        synchronized (this) {
            this.f2079c = (PreviewView.e) mutableLiveData.f();
        }
    }

    public static /* synthetic */ Object b(d dVar, x.o oVar, List list, c.a aVar) {
        dVar.getClass();
        b bVar = new b(aVar, oVar);
        list.add(bVar);
        ((d0) oVar).g(c0.a.a(), bVar);
        return "waitForCaptureResult";
    }

    public static /* synthetic */ Void d(d dVar, Void r12) {
        dVar.getClass();
        dVar.i(PreviewView.e.STREAMING);
        return null;
    }

    private void e() {
        ListenableFuture listenableFuture = this.f2081e;
        if (listenableFuture != null) {
            listenableFuture.cancel(false);
            this.f2081e = null;
        }
    }

    private void h(x.o oVar) {
        i(PreviewView.e.IDLE);
        ArrayList arrayList = new ArrayList();
        d0.d e10 = d0.d.b(j(oVar, arrayList)).f(new d0.a() { // from class: androidx.camera.view.a
            @Override // d0.a
            public final ListenableFuture apply(Object obj) {
                ListenableFuture i10;
                Void r22 = (Void) obj;
                i10 = d.this.f2080d.i();
                return i10;
            }
        }, c0.a.a()).e(new Function() { // from class: androidx.camera.view.b
            @Override // androidx.arch.core.util.Function
            public final Object apply(Object obj) {
                return d.d(d.this, (Void) obj);
            }
        }, c0.a.a());
        this.f2081e = e10;
        d0.n.j(e10, new a(arrayList, oVar), c0.a.a());
    }

    private ListenableFuture j(final x.o oVar, final List list) {
        return androidx.concurrent.futures.c.a(new c.InterfaceC0026c() { // from class: androidx.camera.view.c
            @Override // androidx.concurrent.futures.c.InterfaceC0026c
            public final Object a(c.a aVar) {
                return d.b(d.this, oVar, list, aVar);
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void f() {
        e();
    }

    @Override // a0.u1.a
    /* renamed from: g */
    public void a(e0.a aVar) {
        if (aVar != e0.a.CLOSING && aVar != e0.a.CLOSED && aVar != e0.a.RELEASING && aVar != e0.a.RELEASED) {
            if ((aVar == e0.a.OPENING || aVar == e0.a.OPEN || aVar == e0.a.PENDING_OPEN) && !this.f2082f) {
                h(this.f2077a);
                this.f2082f = true;
                return;
            }
            return;
        }
        i(PreviewView.e.IDLE);
        if (this.f2082f) {
            this.f2082f = false;
            e();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void i(PreviewView.e eVar) {
        synchronized (this) {
            try {
                if (this.f2079c.equals(eVar)) {
                    return;
                }
                this.f2079c = eVar;
                y0.a("StreamStateObserver", "Update Preview stream state to " + eVar);
                this.f2078b.m(eVar);
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    @Override // a0.u1.a
    public void onError(Throwable th2) {
        f();
        i(PreviewView.e.IDLE);
    }
}
