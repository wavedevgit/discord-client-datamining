package androidx.lifecycle;

import androidx.lifecycle.Lifecycle;
import java.util.Map;
import m.b;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class LiveData {

    /* renamed from: k  reason: collision with root package name */
    static final Object f4457k = new Object();

    /* renamed from: a  reason: collision with root package name */
    final Object f4458a;

    /* renamed from: b  reason: collision with root package name */
    private m.b f4459b;

    /* renamed from: c  reason: collision with root package name */
    int f4460c;

    /* renamed from: d  reason: collision with root package name */
    private boolean f4461d;

    /* renamed from: e  reason: collision with root package name */
    private volatile Object f4462e;

    /* renamed from: f  reason: collision with root package name */
    volatile Object f4463f;

    /* renamed from: g  reason: collision with root package name */
    private int f4464g;

    /* renamed from: h  reason: collision with root package name */
    private boolean f4465h;

    /* renamed from: i  reason: collision with root package name */
    private boolean f4466i;

    /* renamed from: j  reason: collision with root package name */
    private final Runnable f4467j;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class a implements Runnable {
        a() {
        }

        @Override // java.lang.Runnable
        public void run() {
            Object obj;
            synchronized (LiveData.this.f4458a) {
                obj = LiveData.this.f4463f;
                LiveData.this.f4463f = LiveData.f4457k;
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
        final LifecycleOwner f4470p;

        c(LifecycleOwner lifecycleOwner, Observer observer) {
            super(observer);
            this.f4470p = lifecycleOwner;
        }

        @Override // androidx.lifecycle.LiveData.d
        void b() {
            this.f4470p.getLifecycle().d(this);
        }

        @Override // androidx.lifecycle.LiveData.d
        boolean c(LifecycleOwner lifecycleOwner) {
            if (this.f4470p == lifecycleOwner) {
                return true;
            }
            return false;
        }

        @Override // androidx.lifecycle.LiveData.d
        boolean d() {
            return this.f4470p.getLifecycle().b().d(Lifecycle.State.f4439o);
        }

        @Override // androidx.lifecycle.m
        public void h(LifecycleOwner lifecycleOwner, Lifecycle.a aVar) {
            Lifecycle.State b10 = this.f4470p.getLifecycle().b();
            if (b10 == Lifecycle.State.f4436d) {
                LiveData.this.n(this.f4472d);
                return;
            }
            Lifecycle.State state = null;
            while (state != b10) {
                a(d());
                state = b10;
                b10 = this.f4470p.getLifecycle().b();
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public abstract class d {

        /* renamed from: d  reason: collision with root package name */
        final Observer f4472d;

        /* renamed from: e  reason: collision with root package name */
        boolean f4473e;

        /* renamed from: i  reason: collision with root package name */
        int f4474i = -1;

        d(Observer observer) {
            this.f4472d = observer;
        }

        void a(boolean z10) {
            int i10;
            if (z10 != this.f4473e) {
                this.f4473e = z10;
                LiveData liveData = LiveData.this;
                if (z10) {
                    i10 = 1;
                } else {
                    i10 = -1;
                }
                liveData.c(i10);
                if (this.f4473e) {
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
        this.f4458a = new Object();
        this.f4459b = new m.b();
        this.f4460c = 0;
        this.f4463f = f4457k;
        this.f4467j = new a();
        this.f4462e = obj;
        this.f4464g = 0;
    }

    static void b(String str) {
        if (l.c.g().b()) {
            return;
        }
        throw new IllegalStateException("Cannot invoke " + str + " on a background thread");
    }

    private void d(d dVar) {
        if (dVar.f4473e) {
            if (!dVar.d()) {
                dVar.a(false);
                return;
            }
            int i10 = dVar.f4474i;
            int i11 = this.f4464g;
            if (i10 >= i11) {
                return;
            }
            dVar.f4474i = i11;
            dVar.f4472d.a(this.f4462e);
        }
    }

    void c(int i10) {
        boolean z10;
        boolean z11;
        int i11 = this.f4460c;
        this.f4460c = i10 + i11;
        if (this.f4461d) {
            return;
        }
        this.f4461d = true;
        while (true) {
            try {
                int i12 = this.f4460c;
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
                    this.f4461d = false;
                    return;
                }
            } catch (Throwable th2) {
                this.f4461d = false;
                throw th2;
            }
        }
    }

    void e(d dVar) {
        if (this.f4465h) {
            this.f4466i = true;
            return;
        }
        this.f4465h = true;
        do {
            this.f4466i = false;
            if (dVar != null) {
                d(dVar);
                dVar = null;
            } else {
                b.d d10 = this.f4459b.d();
                while (d10.hasNext()) {
                    d((d) ((Map.Entry) d10.next()).getValue());
                    if (this.f4466i) {
                        break;
                    }
                }
            }
        } while (this.f4466i);
        this.f4465h = false;
    }

    public Object f() {
        Object obj = this.f4462e;
        if (obj != f4457k) {
            return obj;
        }
        return null;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int g() {
        return this.f4464g;
    }

    public boolean h() {
        if (this.f4460c > 0) {
            return true;
        }
        return false;
    }

    public void i(LifecycleOwner lifecycleOwner, Observer observer) {
        b("observe");
        if (lifecycleOwner.getLifecycle().b() != Lifecycle.State.f4436d) {
            c cVar = new c(lifecycleOwner, observer);
            d dVar = (d) this.f4459b.g(observer, cVar);
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
        d dVar = (d) this.f4459b.g(observer, bVar);
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
        synchronized (this.f4458a) {
            if (this.f4463f == f4457k) {
                z10 = true;
            } else {
                z10 = false;
            }
            this.f4463f = obj;
        }
        if (!z10) {
            return;
        }
        l.c.g().c(this.f4467j);
    }

    public void n(Observer observer) {
        b("removeObserver");
        d dVar = (d) this.f4459b.h(observer);
        if (dVar == null) {
            return;
        }
        dVar.b();
        dVar.a(false);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void o(Object obj) {
        b("setValue");
        this.f4464g++;
        this.f4462e = obj;
        e(null);
    }

    public LiveData() {
        this.f4458a = new Object();
        this.f4459b = new m.b();
        this.f4460c = 0;
        Object obj = f4457k;
        this.f4463f = obj;
        this.f4467j = new a();
        this.f4462e = obj;
        this.f4464g = -1;
    }
}
