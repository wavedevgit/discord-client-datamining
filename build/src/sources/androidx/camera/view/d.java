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
    private final d0 f2090a;

    /* renamed from: b  reason: collision with root package name */
    private final MutableLiveData f2091b;

    /* renamed from: c  reason: collision with root package name */
    private PreviewView.e f2092c;

    /* renamed from: d  reason: collision with root package name */
    private final i f2093d;

    /* renamed from: e  reason: collision with root package name */
    ListenableFuture f2094e;

    /* renamed from: f  reason: collision with root package name */
    private boolean f2095f = false;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class a implements d0.c {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ List f2096a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ x.o f2097b;

        a(List list, x.o oVar) {
            this.f2096a = list;
            this.f2097b = oVar;
        }

        @Override // d0.c
        /* renamed from: a */
        public void onSuccess(Void r22) {
            d.this.f2094e = null;
        }

        @Override // d0.c
        public void onFailure(Throwable th2) {
            d.this.f2094e = null;
            if (!this.f2096a.isEmpty()) {
                for (a0.k kVar : this.f2096a) {
                    ((d0) this.f2097b).k(kVar);
                }
                this.f2096a.clear();
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class b extends a0.k {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ c.a f2099a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ x.o f2100b;

        b(c.a aVar, x.o oVar) {
            this.f2099a = aVar;
            this.f2100b = oVar;
        }

        @Override // a0.k
        public void b(int i10, u uVar) {
            this.f2099a.c(null);
            ((d0) this.f2100b).k(this);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public d(d0 d0Var, MutableLiveData mutableLiveData, i iVar) {
        this.f2090a = d0Var;
        this.f2091b = mutableLiveData;
        this.f2093d = iVar;
        synchronized (this) {
            this.f2092c = (PreviewView.e) mutableLiveData.f();
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
        ListenableFuture listenableFuture = this.f2094e;
        if (listenableFuture != null) {
            listenableFuture.cancel(false);
            this.f2094e = null;
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
                i10 = d.this.f2093d.i();
                return i10;
            }
        }, c0.a.a()).e(new Function() { // from class: androidx.camera.view.b
            @Override // androidx.arch.core.util.Function
            public final Object apply(Object obj) {
                return d.d(d.this, (Void) obj);
            }
        }, c0.a.a());
        this.f2094e = e10;
        d0.n.j(e10, new a(arrayList, oVar), c0.a.a());
    }

    private ListenableFuture j(final x.o oVar, final List list) {
        return androidx.concurrent.futures.c.a(new c.InterfaceC0028c() { // from class: androidx.camera.view.c
            @Override // androidx.concurrent.futures.c.InterfaceC0028c
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
            if ((aVar == e0.a.OPENING || aVar == e0.a.OPEN || aVar == e0.a.PENDING_OPEN) && !this.f2095f) {
                h(this.f2090a);
                this.f2095f = true;
                return;
            }
            return;
        }
        i(PreviewView.e.IDLE);
        if (this.f2095f) {
            this.f2095f = false;
            e();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void i(PreviewView.e eVar) {
        synchronized (this) {
            try {
                if (this.f2092c.equals(eVar)) {
                    return;
                }
                this.f2092c = eVar;
                y0.a("StreamStateObserver", "Update Preview stream state to " + eVar);
                this.f2091b.m(eVar);
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
