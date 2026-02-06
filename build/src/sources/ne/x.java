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
    private final e f39027a;

    /* renamed from: b  reason: collision with root package name */
    private final u f39028b;

    /* renamed from: c  reason: collision with root package name */
    private final b f39029c;

    /* renamed from: d  reason: collision with root package name */
    private final CopyOnWriteArraySet f39030d;

    /* renamed from: e  reason: collision with root package name */
    private final ArrayDeque f39031e;

    /* renamed from: f  reason: collision with root package name */
    private final ArrayDeque f39032f;

    /* renamed from: g  reason: collision with root package name */
    private final Object f39033g;

    /* renamed from: h  reason: collision with root package name */
    private boolean f39034h;

    /* renamed from: i  reason: collision with root package name */
    private boolean f39035i;

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
        public final Object f39036a;

        /* renamed from: b  reason: collision with root package name */
        private q.b f39037b = new q.b();

        /* renamed from: c  reason: collision with root package name */
        private boolean f39038c;

        /* renamed from: d  reason: collision with root package name */
        private boolean f39039d;

        public c(Object obj) {
            this.f39036a = obj;
        }

        public void a(int i10, a aVar) {
            if (!this.f39039d) {
                if (i10 != -1) {
                    this.f39037b.a(i10);
                }
                this.f39038c = true;
                aVar.invoke(this.f39036a);
            }
        }

        public void b(b bVar) {
            if (!this.f39039d && this.f39038c) {
                q e10 = this.f39037b.e();
                this.f39037b = new q.b();
                this.f39038c = false;
                bVar.a(this.f39036a, e10);
            }
        }

        public void c(b bVar) {
            this.f39039d = true;
            if (this.f39038c) {
                this.f39038c = false;
                bVar.a(this.f39036a, this.f39037b.e());
            }
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj != null && c.class == obj.getClass()) {
                return this.f39036a.equals(((c) obj).f39036a);
            }
            return false;
        }

        public int hashCode() {
            return this.f39036a.hashCode();
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
        Iterator it = this.f39030d.iterator();
        while (it.hasNext()) {
            ((c) it.next()).b(this.f39029c);
            if (this.f39028b.b(0)) {
                return true;
            }
        }
        return true;
    }

    private void l() {
        boolean z10;
        if (!this.f39035i) {
            return;
        }
        if (Thread.currentThread() == this.f39028b.f().getThread()) {
            z10 = true;
        } else {
            z10 = false;
        }
        ne.a.g(z10);
    }

    public void c(Object obj) {
        ne.a.e(obj);
        synchronized (this.f39033g) {
            try {
                if (this.f39034h) {
                    return;
                }
                this.f39030d.add(new c(obj));
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public x d(Looper looper, e eVar, b bVar) {
        return new x(this.f39030d, looper, eVar, bVar, this.f39035i);
    }

    public x e(Looper looper, b bVar) {
        return d(looper, this.f39027a, bVar);
    }

    public void f() {
        l();
        if (!this.f39032f.isEmpty()) {
            if (!this.f39028b.b(0)) {
                u uVar = this.f39028b;
                uVar.g(uVar.a(0));
            }
            boolean isEmpty = this.f39031e.isEmpty();
            this.f39031e.addAll(this.f39032f);
            this.f39032f.clear();
            if (isEmpty) {
                while (!this.f39031e.isEmpty()) {
                    ((Runnable) this.f39031e.peekFirst()).run();
                    this.f39031e.removeFirst();
                }
            }
        }
    }

    public void h(final int i10, final a aVar) {
        l();
        final CopyOnWriteArraySet copyOnWriteArraySet = new CopyOnWriteArraySet(this.f39030d);
        this.f39032f.add(new Runnable() { // from class: ne.w
            @Override // java.lang.Runnable
            public final void run() {
                x.a(copyOnWriteArraySet, i10, aVar);
            }
        });
    }

    public void i() {
        l();
        synchronized (this.f39033g) {
            this.f39034h = true;
        }
        Iterator it = this.f39030d.iterator();
        while (it.hasNext()) {
            ((c) it.next()).c(this.f39029c);
        }
        this.f39030d.clear();
    }

    public void j(Object obj) {
        l();
        Iterator it = this.f39030d.iterator();
        while (it.hasNext()) {
            c cVar = (c) it.next();
            if (cVar.f39036a.equals(obj)) {
                cVar.c(this.f39029c);
                this.f39030d.remove(cVar);
            }
        }
    }

    public void k(int i10, a aVar) {
        h(i10, aVar);
        f();
    }

    private x(CopyOnWriteArraySet copyOnWriteArraySet, Looper looper, e eVar, b bVar, boolean z10) {
        this.f39027a = eVar;
        this.f39030d = copyOnWriteArraySet;
        this.f39029c = bVar;
        this.f39033g = new Object();
        this.f39031e = new ArrayDeque();
        this.f39032f = new ArrayDeque();
        this.f39028b = eVar.c(looper, new Handler.Callback() { // from class: ne.v
            @Override // android.os.Handler.Callback
            public final boolean handleMessage(Message message) {
                boolean g10;
                g10 = x.this.g(message);
                return g10;
            }
        });
        this.f39035i = z10;
    }
}
