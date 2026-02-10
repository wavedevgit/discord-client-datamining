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
    private final e f40726a;

    /* renamed from: b  reason: collision with root package name */
    private final u f40727b;

    /* renamed from: c  reason: collision with root package name */
    private final b f40728c;

    /* renamed from: d  reason: collision with root package name */
    private final CopyOnWriteArraySet f40729d;

    /* renamed from: e  reason: collision with root package name */
    private final ArrayDeque f40730e;

    /* renamed from: f  reason: collision with root package name */
    private final ArrayDeque f40731f;

    /* renamed from: g  reason: collision with root package name */
    private final Object f40732g;

    /* renamed from: h  reason: collision with root package name */
    private boolean f40733h;

    /* renamed from: i  reason: collision with root package name */
    private boolean f40734i;

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
        public final Object f40735a;

        /* renamed from: b  reason: collision with root package name */
        private q.b f40736b = new q.b();

        /* renamed from: c  reason: collision with root package name */
        private boolean f40737c;

        /* renamed from: d  reason: collision with root package name */
        private boolean f40738d;

        public c(Object obj) {
            this.f40735a = obj;
        }

        public void a(int i10, a aVar) {
            if (!this.f40738d) {
                if (i10 != -1) {
                    this.f40736b.a(i10);
                }
                this.f40737c = true;
                aVar.invoke(this.f40735a);
            }
        }

        public void b(b bVar) {
            if (!this.f40738d && this.f40737c) {
                q e10 = this.f40736b.e();
                this.f40736b = new q.b();
                this.f40737c = false;
                bVar.a(this.f40735a, e10);
            }
        }

        public void c(b bVar) {
            this.f40738d = true;
            if (this.f40737c) {
                this.f40737c = false;
                bVar.a(this.f40735a, this.f40736b.e());
            }
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj != null && c.class == obj.getClass()) {
                return this.f40735a.equals(((c) obj).f40735a);
            }
            return false;
        }

        public int hashCode() {
            return this.f40735a.hashCode();
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
        Iterator it = this.f40729d.iterator();
        while (it.hasNext()) {
            ((c) it.next()).b(this.f40728c);
            if (this.f40727b.b(0)) {
                return true;
            }
        }
        return true;
    }

    private void l() {
        boolean z10;
        if (!this.f40734i) {
            return;
        }
        if (Thread.currentThread() == this.f40727b.f().getThread()) {
            z10 = true;
        } else {
            z10 = false;
        }
        oe.a.g(z10);
    }

    public void c(Object obj) {
        oe.a.e(obj);
        synchronized (this.f40732g) {
            try {
                if (this.f40733h) {
                    return;
                }
                this.f40729d.add(new c(obj));
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public x d(Looper looper, e eVar, b bVar) {
        return new x(this.f40729d, looper, eVar, bVar, this.f40734i);
    }

    public x e(Looper looper, b bVar) {
        return d(looper, this.f40726a, bVar);
    }

    public void f() {
        l();
        if (!this.f40731f.isEmpty()) {
            if (!this.f40727b.b(0)) {
                u uVar = this.f40727b;
                uVar.k(uVar.a(0));
            }
            boolean isEmpty = this.f40730e.isEmpty();
            this.f40730e.addAll(this.f40731f);
            this.f40731f.clear();
            if (isEmpty) {
                while (!this.f40730e.isEmpty()) {
                    ((Runnable) this.f40730e.peekFirst()).run();
                    this.f40730e.removeFirst();
                }
            }
        }
    }

    public void h(final int i10, final a aVar) {
        l();
        final CopyOnWriteArraySet copyOnWriteArraySet = new CopyOnWriteArraySet(this.f40729d);
        this.f40731f.add(new Runnable() { // from class: oe.w
            @Override // java.lang.Runnable
            public final void run() {
                x.a(copyOnWriteArraySet, i10, aVar);
            }
        });
    }

    public void i() {
        l();
        synchronized (this.f40732g) {
            this.f40733h = true;
        }
        Iterator it = this.f40729d.iterator();
        while (it.hasNext()) {
            ((c) it.next()).c(this.f40728c);
        }
        this.f40729d.clear();
    }

    public void j(Object obj) {
        l();
        Iterator it = this.f40729d.iterator();
        while (it.hasNext()) {
            c cVar = (c) it.next();
            if (cVar.f40735a.equals(obj)) {
                cVar.c(this.f40728c);
                this.f40729d.remove(cVar);
            }
        }
    }

    public void k(int i10, a aVar) {
        h(i10, aVar);
        f();
    }

    private x(CopyOnWriteArraySet copyOnWriteArraySet, Looper looper, e eVar, b bVar, boolean z10) {
        this.f40726a = eVar;
        this.f40729d = copyOnWriteArraySet;
        this.f40728c = bVar;
        this.f40732g = new Object();
        this.f40730e = new ArrayDeque();
        this.f40731f = new ArrayDeque();
        this.f40727b = eVar.c(looper, new Handler.Callback() { // from class: oe.v
            @Override // android.os.Handler.Callback
            public final boolean handleMessage(Message message) {
                boolean g10;
                g10 = x.this.g(message);
                return g10;
            }
        });
        this.f40734i = z10;
    }
}
