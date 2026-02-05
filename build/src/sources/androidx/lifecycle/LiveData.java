package androidx.lifecycle;

import androidx.lifecycle.Lifecycle;
import java.util.Map;
import m.b;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class LiveData {

    /* renamed from: k  reason: collision with root package name */
    static final Object f4538k = new Object();

    /* renamed from: a  reason: collision with root package name */
    final Object f4539a;

    /* renamed from: b  reason: collision with root package name */
    private m.b f4540b;

    /* renamed from: c  reason: collision with root package name */
    int f4541c;

    /* renamed from: d  reason: collision with root package name */
    private boolean f4542d;

    /* renamed from: e  reason: collision with root package name */
    private volatile Object f4543e;

    /* renamed from: f  reason: collision with root package name */
    volatile Object f4544f;

    /* renamed from: g  reason: collision with root package name */
    private int f4545g;

    /* renamed from: h  reason: collision with root package name */
    private boolean f4546h;

    /* renamed from: i  reason: collision with root package name */
    private boolean f4547i;

    /* renamed from: j  reason: collision with root package name */
    private final Runnable f4548j;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class a implements Runnable {
        a() {
        }

        @Override // java.lang.Runnable
        public void run() {
            Object obj;
            synchronized (LiveData.this.f4539a) {
                obj = LiveData.this.f4544f;
                LiveData.this.f4544f = LiveData.f4538k;
            }
            LiveData.this.o(obj);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private class b extends d {
        b(Observer observer) {
            super(observer);
        }

        @Override // androidx.lifecycle.LiveData.d
        boolean d() {
            return true;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class c extends d implements m {

        /* renamed from: p  reason: collision with root package name */
        final LifecycleOwner f4551p;

        c(LifecycleOwner lifecycleOwner, Observer observer) {
            super(observer);
            this.f4551p = lifecycleOwner;
        }

        @Override // androidx.lifecycle.LiveData.d
        void b() {
            this.f4551p.getLifecycle().d(this);
        }

        @Override // androidx.lifecycle.LiveData.d
        boolean c(LifecycleOwner lifecycleOwner) {
            if (this.f4551p == lifecycleOwner) {
                return true;
            }
            return false;
        }

        @Override // androidx.lifecycle.LiveData.d
        boolean d() {
            return this.f4551p.getLifecycle().b().d(Lifecycle.State.f4520o);
        }

        @Override // androidx.lifecycle.m
        public void h(LifecycleOwner lifecycleOwner, Lifecycle.a aVar) {
            Lifecycle.State b10 = this.f4551p.getLifecycle().b();
            if (b10 == Lifecycle.State.f4517d) {
                LiveData.this.n(this.f4553d);
                return;
            }
            Lifecycle.State state = null;
            while (state != b10) {
                a(d());
                state = b10;
                b10 = this.f4551p.getLifecycle().b();
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public abstract class d {

        /* renamed from: d  reason: collision with root package name */
        final Observer f4553d;

        /* renamed from: e  reason: collision with root package name */
        boolean f4554e;

        /* renamed from: i  reason: collision with root package name */
        int f4555i = -1;

        d(Observer observer) {
            this.f4553d = observer;
        }

        void a(boolean z10) {
            int i10;
            if (z10 != this.f4554e) {
                this.f4554e = z10;
                LiveData liveData = LiveData.this;
                if (z10) {
                    i10 = 1;
                } else {
                    i10 = -1;
                }
                liveData.c(i10);
                if (this.f4554e) {
                    LiveData.this.e(this);
                }
            }
        }

        void b() {
        }

        boolean c(LifecycleOwner lifecycleOwner) {
            return false;
        }

        abstract boolean d();
    }

    public LiveData(Object obj) {
        this.f4539a = new Object();
        this.f4540b = new m.b();
        this.f4541c = 0;
        this.f4544f = f4538k;
        this.f4548j = new a();
        this.f4543e = obj;
        this.f4545g = 0;
    }

    static void b(String str) {
        if (l.c.g().b()) {
            return;
        }
        throw new IllegalStateException("Cannot invoke " + str + " on a background thread");
    }

    private void d(d dVar) {
        if (dVar.f4554e) {
            if (!dVar.d()) {
                dVar.a(false);
                return;
            }
            int i10 = dVar.f4555i;
            int i11 = this.f4545g;
            if (i10 >= i11) {
                return;
            }
            dVar.f4555i = i11;
            dVar.f4553d.a(this.f4543e);
        }
    }

    void c(int i10) {
        boolean z10;
        boolean z11;
        int i11 = this.f4541c;
        this.f4541c = i10 + i11;
        if (this.f4542d) {
            return;
        }
        this.f4542d = true;
        while (true) {
            try {
                int i12 = this.f4541c;
                if (i11 != i12) {
                    if (i11 == 0 && i12 > 0) {
                        z10 = true;
                    } else {
                        z10 = false;
                    }
                    if (i11 > 0 && i12 == 0) {
                        z11 = true;
                    } else {
                        z11 = false;
                    }
                    if (z10) {
                        k();
                    } else if (z11) {
                        l();
                    }
                    i11 = i12;
                } else {
                    this.f4542d = false;
                    return;
                }
            } catch (Throwable th2) {
                this.f4542d = false;
                throw th2;
            }
        }
    }

    void e(d dVar) {
        if (this.f4546h) {
            this.f4547i = true;
            return;
        }
        this.f4546h = true;
        do {
            this.f4547i = false;
            if (dVar != null) {
                d(dVar);
                dVar = null;
            } else {
                b.d d10 = this.f4540b.d();
                while (d10.hasNext()) {
                    d((d) ((Map.Entry) d10.next()).getValue());
                    if (this.f4547i) {
                        break;
                    }
                }
            }
        } while (this.f4547i);
        this.f4546h = false;
    }

    public Object f() {
        Object obj = this.f4543e;
        if (obj != f4538k) {
            return obj;
        }
        return null;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int g() {
        return this.f4545g;
    }

    public boolean h() {
        if (this.f4541c > 0) {
            return true;
        }
        return false;
    }

    public void i(LifecycleOwner lifecycleOwner, Observer observer) {
        b("observe");
        if (lifecycleOwner.getLifecycle().b() != Lifecycle.State.f4517d) {
            c cVar = new c(lifecycleOwner, observer);
            d dVar = (d) this.f4540b.g(observer, cVar);
            if (dVar != null && !dVar.c(lifecycleOwner)) {
                throw new IllegalArgumentException("Cannot add the same observer with different lifecycles");
            }
            if (dVar != null) {
                return;
            }
            lifecycleOwner.getLifecycle().a(cVar);
        }
    }

    public void j(Observer observer) {
        b("observeForever");
        b bVar = new b(observer);
        d dVar = (d) this.f4540b.g(observer, bVar);
        if (!(dVar instanceof c)) {
            if (dVar != null) {
                return;
            }
            bVar.a(true);
            return;
        }
        throw new IllegalArgumentException("Cannot add the same observer with different lifecycles");
    }

    protected void k() {
    }

    protected void l() {
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void m(Object obj) {
        boolean z10;
        synchronized (this.f4539a) {
            if (this.f4544f == f4538k) {
                z10 = true;
            } else {
                z10 = false;
            }
            this.f4544f = obj;
        }
        if (!z10) {
            return;
        }
        l.c.g().c(this.f4548j);
    }

    public void n(Observer observer) {
        b("removeObserver");
        d dVar = (d) this.f4540b.h(observer);
        if (dVar == null) {
            return;
        }
        dVar.b();
        dVar.a(false);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void o(Object obj) {
        b("setValue");
        this.f4545g++;
        this.f4543e = obj;
        e(null);
    }

    public LiveData() {
        this.f4539a = new Object();
        this.f4540b = new m.b();
        this.f4541c = 0;
        Object obj = f4538k;
        this.f4544f = obj;
        this.f4548j = new a();
        this.f4543e = obj;
        this.f4545g = -1;
    }
}
