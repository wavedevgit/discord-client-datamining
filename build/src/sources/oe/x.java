package oe;

import android.os.Handler;
import android.os.Looper;
import android.os.Message;
import java.util.ArrayDeque;
import java.util.Iterator;
import java.util.concurrent.CopyOnWriteArraySet;
import oe.q;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class x {

    /* renamed from: a  reason: collision with root package name */
    private final e f39053a;

    /* renamed from: b  reason: collision with root package name */
    private final u f39054b;

    /* renamed from: c  reason: collision with root package name */
    private final b f39055c;

    /* renamed from: d  reason: collision with root package name */
    private final CopyOnWriteArraySet f39056d;

    /* renamed from: e  reason: collision with root package name */
    private final ArrayDeque f39057e;

    /* renamed from: f  reason: collision with root package name */
    private final ArrayDeque f39058f;

    /* renamed from: g  reason: collision with root package name */
    private final Object f39059g;

    /* renamed from: h  reason: collision with root package name */
    private boolean f39060h;

    /* renamed from: i  reason: collision with root package name */
    private boolean f39061i;

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
        public final Object f39062a;

        /* renamed from: b  reason: collision with root package name */
        private q.b f39063b = new q.b();

        /* renamed from: c  reason: collision with root package name */
        private boolean f39064c;

        /* renamed from: d  reason: collision with root package name */
        private boolean f39065d;

        public c(Object obj) {
            this.f39062a = obj;
        }

        public void a(int i10, a aVar) {
            if (!this.f39065d) {
                if (i10 != -1) {
                    this.f39063b.a(i10);
                }
                this.f39064c = true;
                aVar.invoke(this.f39062a);
            }
        }

        public void b(b bVar) {
            if (!this.f39065d && this.f39064c) {
                q e10 = this.f39063b.e();
                this.f39063b = new q.b();
                this.f39064c = false;
                bVar.a(this.f39062a, e10);
            }
        }

        public void c(b bVar) {
            this.f39065d = true;
            if (this.f39064c) {
                this.f39064c = false;
                bVar.a(this.f39062a, this.f39063b.e());
            }
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj != null && c.class == obj.getClass()) {
                return this.f39062a.equals(((c) obj).f39062a);
            }
            return false;
        }

        public int hashCode() {
            return this.f39062a.hashCode();
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
        Iterator it = this.f39056d.iterator();
        while (it.hasNext()) {
            ((c) it.next()).b(this.f39055c);
            if (this.f39054b.b(0)) {
                return true;
            }
        }
        return true;
    }

    private void l() {
        boolean z10;
        if (!this.f39061i) {
            return;
        }
        if (Thread.currentThread() == this.f39054b.f().getThread()) {
            z10 = true;
        } else {
            z10 = false;
        }
        oe.a.g(z10);
    }

    public void c(Object obj) {
        oe.a.e(obj);
        synchronized (this.f39059g) {
            try {
                if (this.f39060h) {
                    return;
                }
                this.f39056d.add(new c(obj));
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public x d(Looper looper, e eVar, b bVar) {
        return new x(this.f39056d, looper, eVar, bVar, this.f39061i);
    }

    public x e(Looper looper, b bVar) {
        return d(looper, this.f39053a, bVar);
    }

    public void f() {
        l();
        if (!this.f39058f.isEmpty()) {
            if (!this.f39054b.b(0)) {
                u uVar = this.f39054b;
                uVar.k(uVar.a(0));
            }
            boolean isEmpty = this.f39057e.isEmpty();
            this.f39057e.addAll(this.f39058f);
            this.f39058f.clear();
            if (isEmpty) {
                while (!this.f39057e.isEmpty()) {
                    ((Runnable) this.f39057e.peekFirst()).run();
                    this.f39057e.removeFirst();
                }
            }
        }
    }

    public void h(final int i10, final a aVar) {
        l();
        final CopyOnWriteArraySet copyOnWriteArraySet = new CopyOnWriteArraySet(this.f39056d);
        this.f39058f.add(new Runnable() { // from class: oe.w
            @Override // java.lang.Runnable
            public final void run() {
                x.a(copyOnWriteArraySet, i10, aVar);
            }
        });
    }

    public void i() {
        l();
        synchronized (this.f39059g) {
            this.f39060h = true;
        }
        Iterator it = this.f39056d.iterator();
        while (it.hasNext()) {
            ((c) it.next()).c(this.f39055c);
        }
        this.f39056d.clear();
    }

    public void j(Object obj) {
        l();
        Iterator it = this.f39056d.iterator();
        while (it.hasNext()) {
            c cVar = (c) it.next();
            if (cVar.f39062a.equals(obj)) {
                cVar.c(this.f39055c);
                this.f39056d.remove(cVar);
            }
        }
    }

    public void k(int i10, a aVar) {
        h(i10, aVar);
        f();
    }

    private x(CopyOnWriteArraySet copyOnWriteArraySet, Looper looper, e eVar, b bVar, boolean z10) {
        this.f39053a = eVar;
        this.f39056d = copyOnWriteArraySet;
        this.f39055c = bVar;
        this.f39059g = new Object();
        this.f39057e = new ArrayDeque();
        this.f39058f = new ArrayDeque();
        this.f39054b = eVar.c(looper, new Handler.Callback() { // from class: oe.v
            @Override // android.os.Handler.Callback
            public final boolean handleMessage(Message message) {
                boolean g10;
                g10 = x.this.g(message);
                return g10;
            }
        });
        this.f39061i = z10;
    }
}
