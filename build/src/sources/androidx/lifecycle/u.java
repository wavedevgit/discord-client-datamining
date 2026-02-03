package androidx.lifecycle;

import java.util.Iterator;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class u extends MutableLiveData {

    /* renamed from: l  reason: collision with root package name */
    private m.b f4537l = new m.b();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static class a implements Observer {

        /* renamed from: a  reason: collision with root package name */
        final LiveData f4538a;

        /* renamed from: b  reason: collision with root package name */
        final Observer f4539b;

        /* renamed from: c  reason: collision with root package name */
        int f4540c = -1;

        a(LiveData liveData, Observer observer) {
            this.f4538a = liveData;
            this.f4539b = observer;
        }

        @Override // androidx.lifecycle.Observer
        public void a(Object obj) {
            if (this.f4540c != this.f4538a.g()) {
                this.f4540c = this.f4538a.g();
                this.f4539b.a(obj);
            }
        }

        void b() {
            this.f4538a.j(this);
        }

        void c() {
            this.f4538a.n(this);
        }
    }

    @Override // androidx.lifecycle.LiveData
    protected void k() {
        Iterator it = this.f4537l.iterator();
        while (it.hasNext()) {
            ((a) ((Map.Entry) it.next()).getValue()).b();
        }
    }

    @Override // androidx.lifecycle.LiveData
    protected void l() {
        Iterator it = this.f4537l.iterator();
        while (it.hasNext()) {
            ((a) ((Map.Entry) it.next()).getValue()).c();
        }
    }

    public void p(LiveData liveData, Observer observer) {
        if (liveData != null) {
            a aVar = new a(liveData, observer);
            a aVar2 = (a) this.f4537l.g(liveData, aVar);
            if (aVar2 != null && aVar2.f4539b != observer) {
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
        a aVar = (a) this.f4537l.h(liveData);
        if (aVar != null) {
            aVar.c();
        }
    }
}
