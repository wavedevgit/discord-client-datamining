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
    private final e f39672a;

    /* renamed from: b  reason: collision with root package name */
    private final u f39673b;

    /* renamed from: c  reason: collision with root package name */
    private final b f39674c;

    /* renamed from: d  reason: collision with root package name */
    private final CopyOnWriteArraySet f39675d;

    /* renamed from: e  reason: collision with root package name */
    private final ArrayDeque f39676e;

    /* renamed from: f  reason: collision with root package name */
    private final ArrayDeque f39677f;

    /* renamed from: g  reason: collision with root package name */
    private final Object f39678g;

    /* renamed from: h  reason: collision with root package name */
    private boolean f39679h;

    /* renamed from: i  reason: collision with root package name */
    private boolean f39680i;

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
        public final Object f39681a;

        /* renamed from: b  reason: collision with root package name */
        private q.b f39682b = new q.b();

        /* renamed from: c  reason: collision with root package name */
        private boolean f39683c;

        /* renamed from: d  reason: collision with root package name */
        private boolean f39684d;

        public c(Object obj) {
            this.f39681a = obj;
        }

        public void a(int i10, a aVar) {
            if (!this.f39684d) {
                if (i10 != -1) {
                    this.f39682b.a(i10);
                }
                this.f39683c = true;
                aVar.invoke(this.f39681a);
            }
        }

        public void b(b bVar) {
            if (!this.f39684d && this.f39683c) {
                q e10 = this.f39682b.e();
                this.f39682b = new q.b();
                this.f39683c = false;
                bVar.a(this.f39681a, e10);
            }
        }

        public void c(b bVar) {
            this.f39684d = true;
            if (this.f39683c) {
                this.f39683c = false;
                bVar.a(this.f39681a, this.f39682b.e());
            }
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj != null && c.class == obj.getClass()) {
                return this.f39681a.equals(((c) obj).f39681a);
            }
            return false;
        }

        public int hashCode() {
            return this.f39681a.hashCode();
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
        Iterator it = this.f39675d.iterator();
        while (it.hasNext()) {
            ((c) it.next()).b(this.f39674c);
            if (this.f39673b.b(0)) {
                return true;
            }
        }
        return true;
    }

    private void l() {
        boolean z10;
        if (!this.f39680i) {
            return;
        }
        if (Thread.currentThread() == this.f39673b.f().getThread()) {
            z10 = true;
        } else {
            z10 = false;
        }
        ne.a.g(z10);
    }

    public void c(Object obj) {
        ne.a.e(obj);
        synchronized (this.f39678g) {
            try {
                if (this.f39679h) {
                    return;
                }
                this.f39675d.add(new c(obj));
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public x d(Looper looper, e eVar, b bVar) {
        return new x(this.f39675d, looper, eVar, bVar, this.f39680i);
    }

    public x e(Looper looper, b bVar) {
        return d(looper, this.f39672a, bVar);
    }

    public void f() {
        l();
        if (!this.f39677f.isEmpty()) {
            if (!this.f39673b.b(0)) {
                u uVar = this.f39673b;
                uVar.g(uVar.a(0));
            }
            boolean isEmpty = this.f39676e.isEmpty();
            this.f39676e.addAll(this.f39677f);
            this.f39677f.clear();
            if (isEmpty) {
                while (!this.f39676e.isEmpty()) {
                    ((Runnable) this.f39676e.peekFirst()).run();
                    this.f39676e.removeFirst();
                }
            }
        }
    }

    public void h(final int i10, final a aVar) {
        l();
        final CopyOnWriteArraySet copyOnWriteArraySet = new CopyOnWriteArraySet(this.f39675d);
        this.f39677f.add(new Runnable() { // from class: ne.w
            @Override // java.lang.Runnable
            public final void run() {
                x.a(copyOnWriteArraySet, i10, aVar);
            }
        });
    }

    public void i() {
        l();
        synchronized (this.f39678g) {
            this.f39679h = true;
        }
        Iterator it = this.f39675d.iterator();
        while (it.hasNext()) {
            ((c) it.next()).c(this.f39674c);
        }
        this.f39675d.clear();
    }

    public void j(Object obj) {
        l();
        Iterator it = this.f39675d.iterator();
        while (it.hasNext()) {
            c cVar = (c) it.next();
            if (cVar.f39681a.equals(obj)) {
                cVar.c(this.f39674c);
                this.f39675d.remove(cVar);
            }
        }
    }

    public void k(int i10, a aVar) {
        h(i10, aVar);
        f();
    }

    private x(CopyOnWriteArraySet copyOnWriteArraySet, Looper looper, e eVar, b bVar, boolean z10) {
        this.f39672a = eVar;
        this.f39675d = copyOnWriteArraySet;
        this.f39674c = bVar;
        this.f39678g = new Object();
        this.f39676e = new ArrayDeque();
        this.f39677f = new ArrayDeque();
        this.f39673b = eVar.c(looper, new Handler.Callback() { // from class: ne.v
            @Override // android.os.Handler.Callback
            public final boolean handleMessage(Message message) {
                boolean g10;
                g10 = x.this.g(message);
                return g10;
            }
        });
        this.f39680i = z10;
    }
}
