package ne;

import android.os.Handler;
import android.os.Looper;
import android.os.Message;
import java.util.ArrayDeque;
import java.util.Iterator;
import java.util.concurrent.CopyOnWriteArraySet;
import ne.q;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class x {

    /* renamed from: a  reason: collision with root package name */
    private final e f40294a;

    /* renamed from: b  reason: collision with root package name */
    private final u f40295b;

    /* renamed from: c  reason: collision with root package name */
    private final b f40296c;

    /* renamed from: d  reason: collision with root package name */
    private final CopyOnWriteArraySet f40297d;

    /* renamed from: e  reason: collision with root package name */
    private final ArrayDeque f40298e;

    /* renamed from: f  reason: collision with root package name */
    private final ArrayDeque f40299f;

    /* renamed from: g  reason: collision with root package name */
    private final Object f40300g;

    /* renamed from: h  reason: collision with root package name */
    private boolean f40301h;

    /* renamed from: i  reason: collision with root package name */
    private boolean f40302i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface a {
        void invoke(Object obj);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface b {
        void a(Object obj, q qVar);
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class c {

        /* renamed from: a  reason: collision with root package name */
        public final Object f40303a;

        /* renamed from: b  reason: collision with root package name */
        private q.b f40304b = new q.b();

        /* renamed from: c  reason: collision with root package name */
        private boolean f40305c;

        /* renamed from: d  reason: collision with root package name */
        private boolean f40306d;

        public c(Object obj) {
            this.f40303a = obj;
        }

        public void a(int i10, a aVar) {
            if (!this.f40306d) {
                if (i10 != -1) {
                    this.f40304b.a(i10);
                }
                this.f40305c = true;
                aVar.invoke(this.f40303a);
            }
        }

        public void b(b bVar) {
            if (!this.f40306d && this.f40305c) {
                q e10 = this.f40304b.e();
                this.f40304b = new q.b();
                this.f40305c = false;
                bVar.a(this.f40303a, e10);
            }
        }

        public void c(b bVar) {
            this.f40306d = true;
            if (this.f40305c) {
                this.f40305c = false;
                bVar.a(this.f40303a, this.f40304b.e());
            }
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj != null && c.class == obj.getClass()) {
                return this.f40303a.equals(((c) obj).f40303a);
            }
            return false;
        }

        public int hashCode() {
            return this.f40303a.hashCode();
        }
    }

    public x(Looper looper, e eVar, b bVar) {
        this(new CopyOnWriteArraySet(), looper, eVar, bVar, true);
    }

    public static /* synthetic */ void a(CopyOnWriteArraySet copyOnWriteArraySet, int i10, a aVar) {
        Iterator it = copyOnWriteArraySet.iterator();
        while (it.hasNext()) {
            ((c) it.next()).a(i10, aVar);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public boolean g(Message message) {
        Iterator it = this.f40297d.iterator();
        while (it.hasNext()) {
            ((c) it.next()).b(this.f40296c);
            if (this.f40295b.b(0)) {
                return true;
            }
        }
        return true;
    }

    private void l() {
        boolean z10;
        if (!this.f40302i) {
            return;
        }
        if (Thread.currentThread() == this.f40295b.f().getThread()) {
            z10 = true;
        } else {
            z10 = false;
        }
        ne.a.g(z10);
    }

    public void c(Object obj) {
        ne.a.e(obj);
        synchronized (this.f40300g) {
            try {
                if (this.f40301h) {
                    return;
                }
                this.f40297d.add(new c(obj));
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public x d(Looper looper, e eVar, b bVar) {
        return new x(this.f40297d, looper, eVar, bVar, this.f40302i);
    }

    public x e(Looper looper, b bVar) {
        return d(looper, this.f40294a, bVar);
    }

    public void f() {
        l();
        if (!this.f40299f.isEmpty()) {
            if (!this.f40295b.b(0)) {
                u uVar = this.f40295b;
                uVar.g(uVar.a(0));
            }
            boolean isEmpty = this.f40298e.isEmpty();
            this.f40298e.addAll(this.f40299f);
            this.f40299f.clear();
            if (isEmpty) {
                while (!this.f40298e.isEmpty()) {
                    ((Runnable) this.f40298e.peekFirst()).run();
                    this.f40298e.removeFirst();
                }
            }
        }
    }

    public void h(final int i10, final a aVar) {
        l();
        final CopyOnWriteArraySet copyOnWriteArraySet = new CopyOnWriteArraySet(this.f40297d);
        this.f40299f.add(new Runnable() { // from class: ne.w
            @Override // java.lang.Runnable
            public final void run() {
                x.a(copyOnWriteArraySet, i10, aVar);
            }
        });
    }

    public void i() {
        l();
        synchronized (this.f40300g) {
            this.f40301h = true;
        }
        Iterator it = this.f40297d.iterator();
        while (it.hasNext()) {
            ((c) it.next()).c(this.f40296c);
        }
        this.f40297d.clear();
    }

    public void j(Object obj) {
        l();
        Iterator it = this.f40297d.iterator();
        while (it.hasNext()) {
            c cVar = (c) it.next();
            if (cVar.f40303a.equals(obj)) {
                cVar.c(this.f40296c);
                this.f40297d.remove(cVar);
            }
        }
    }

    public void k(int i10, a aVar) {
        h(i10, aVar);
        f();
    }

    private x(CopyOnWriteArraySet copyOnWriteArraySet, Looper looper, e eVar, b bVar, boolean z10) {
        this.f40294a = eVar;
        this.f40297d = copyOnWriteArraySet;
        this.f40296c = bVar;
        this.f40300g = new Object();
        this.f40298e = new ArrayDeque();
        this.f40299f = new ArrayDeque();
        this.f40295b = eVar.c(looper, new Handler.Callback() { // from class: ne.v
            @Override // android.os.Handler.Callback
            public final boolean handleMessage(Message message) {
                boolean g10;
                g10 = x.this.g(message);
                return g10;
            }
        });
        this.f40302i = z10;
    }
}
