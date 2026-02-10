package androidx.lifecycle;

import java.util.Iterator;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class u extends MutableLiveData {

    /* renamed from: l  reason: collision with root package name */
    private m.b f4685l = new m.b();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static class a implements Observer {

        /* renamed from: a  reason: collision with root package name */
        final LiveData f4686a;

        /* renamed from: b  reason: collision with root package name */
        final Observer f4687b;

        /* renamed from: c  reason: collision with root package name */
        int f4688c = -1;

        a(LiveData liveData, Observer observer) {
            this.f4686a = liveData;
            this.f4687b = observer;
        }

        @Override // androidx.lifecycle.Observer
        public void a(Object obj) {
            if (this.f4688c != this.f4686a.g()) {
                this.f4688c = this.f4686a.g();
                this.f4687b.a(obj);
            }
        }

        void b() {
            this.f4686a.j(this);
        }

        void c() {
            this.f4686a.n(this);
        }
    }

    @Override // androidx.lifecycle.LiveData
    protected void k() {
        Iterator it = this.f4685l.iterator();
        while (it.hasNext()) {
            ((a) ((Map.Entry) it.next()).getValue()).b();
        }
    }

    @Override // androidx.lifecycle.LiveData
    protected void l() {
        Iterator it = this.f4685l.iterator();
        while (it.hasNext()) {
            ((a) ((Map.Entry) it.next()).getValue()).c();
        }
    }

    public void p(LiveData liveData, Observer observer) {
        if (liveData != null) {
            a aVar = new a(liveData, observer);
            a aVar2 = (a) this.f4685l.g(liveData, aVar);
            if (aVar2 != null && aVar2.f4687b != observer) {
                throw new IllegalArgumentException("This source was already added with the different observer");
            }
            if (aVar2 == null && h()) {
                aVar.b();
                return;
            }
            return;
        }
        throw new NullPointerException("source cannot be null");
    }

    public void q(LiveData liveData) {
        a aVar = (a) this.f4685l.i(liveData);
        if (aVar != null) {
            aVar.c();
        }
    }
}
