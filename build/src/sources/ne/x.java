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
    private final e f40310a;

    /* renamed from: b  reason: collision with root package name */
    private final u f40311b;

    /* renamed from: c  reason: collision with root package name */
    private final b f40312c;

    /* renamed from: d  reason: collision with root package name */
    private final CopyOnWriteArraySet f40313d;

    /* renamed from: e  reason: collision with root package name */
    private final ArrayDeque f40314e;

    /* renamed from: f  reason: collision with root package name */
    private final ArrayDeque f40315f;

    /* renamed from: g  reason: collision with root package name */
    private final Object f40316g;

    /* renamed from: h  reason: collision with root package name */
    private boolean f40317h;

    /* renamed from: i  reason: collision with root package name */
    private boolean f40318i;

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
        public final Object f40319a;

        /* renamed from: b  reason: collision with root package name */
        private q.b f40320b = new q.b();

        /* renamed from: c  reason: collision with root package name */
        private boolean f40321c;

        /* renamed from: d  reason: collision with root package name */
        private boolean f40322d;

        public c(Object obj) {
            this.f40319a = obj;
        }

        public void a(int i10, a aVar) {
            if (!this.f40322d) {
                if (i10 != -1) {
                    this.f40320b.a(i10);
                }
                this.f40321c = true;
                aVar.invoke(this.f40319a);
            }
        }

        public void b(b bVar) {
            if (!this.f40322d && this.f40321c) {
                q e10 = this.f40320b.e();
                this.f40320b = new q.b();
                this.f40321c = false;
                bVar.a(this.f40319a, e10);
            }
        }

        public void c(b bVar) {
            this.f40322d = true;
            if (this.f40321c) {
                this.f40321c = false;
                bVar.a(this.f40319a, this.f40320b.e());
            }
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj != null && c.class == obj.getClass()) {
                return this.f40319a.equals(((c) obj).f40319a);
            }
            return false;
        }

        public int hashCode() {
            return this.f40319a.hashCode();
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
        Iterator it = this.f40313d.iterator();
        while (it.hasNext()) {
            ((c) it.next()).b(this.f40312c);
            if (this.f40311b.b(0)) {
                return true;
            }
        }
        return true;
    }

    private void l() {
        boolean z10;
        if (!this.f40318i) {
            return;
        }
        if (Thread.currentThread() == this.f40311b.f().getThread()) {
            z10 = true;
        } else {
            z10 = false;
        }
        ne.a.g(z10);
    }

    public void c(Object obj) {
        ne.a.e(obj);
        synchronized (this.f40316g) {
            try {
                if (this.f40317h) {
                    return;
                }
                this.f40313d.add(new c(obj));
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public x d(Looper looper, e eVar, b bVar) {
        return new x(this.f40313d, looper, eVar, bVar, this.f40318i);
    }

    public x e(Looper looper, b bVar) {
        return d(looper, this.f40310a, bVar);
    }

    public void f() {
        l();
        if (!this.f40315f.isEmpty()) {
            if (!this.f40311b.b(0)) {
                u uVar = this.f40311b;
                uVar.g(uVar.a(0));
            }
            boolean isEmpty = this.f40314e.isEmpty();
            this.f40314e.addAll(this.f40315f);
            this.f40315f.clear();
            if (isEmpty) {
                while (!this.f40314e.isEmpty()) {
                    ((Runnable) this.f40314e.peekFirst()).run();
                    this.f40314e.removeFirst();
                }
            }
        }
    }

    public void h(final int i10, final a aVar) {
        l();
        final CopyOnWriteArraySet copyOnWriteArraySet = new CopyOnWriteArraySet(this.f40313d);
        this.f40315f.add(new Runnable() { // from class: ne.w
            @Override // java.lang.Runnable
            public final void run() {
                x.a(copyOnWriteArraySet, i10, aVar);
            }
        });
    }

    public void i() {
        l();
        synchronized (this.f40316g) {
            this.f40317h = true;
        }
        Iterator it = this.f40313d.iterator();
        while (it.hasNext()) {
            ((c) it.next()).c(this.f40312c);
        }
        this.f40313d.clear();
    }

    public void j(Object obj) {
        l();
        Iterator it = this.f40313d.iterator();
        while (it.hasNext()) {
            c cVar = (c) it.next();
            if (cVar.f40319a.equals(obj)) {
                cVar.c(this.f40312c);
                this.f40313d.remove(cVar);
            }
        }
    }

    public void k(int i10, a aVar) {
        h(i10, aVar);
        f();
    }

    private x(CopyOnWriteArraySet copyOnWriteArraySet, Looper looper, e eVar, b bVar, boolean z10) {
        this.f40310a = eVar;
        this.f40313d = copyOnWriteArraySet;
        this.f40312c = bVar;
        this.f40316g = new Object();
        this.f40314e = new ArrayDeque();
        this.f40315f = new ArrayDeque();
        this.f40311b = eVar.c(looper, new Handler.Callback() { // from class: ne.v
            @Override // android.os.Handler.Callback
            public final boolean handleMessage(Message message) {
                boolean g10;
                g10 = x.this.g(message);
                return g10;
            }
        });
        this.f40318i = z10;
    }
}
