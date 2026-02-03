package qi;

import java.util.ArrayDeque;
import java.util.HashMap;
import java.util.Map;
import java.util.Queue;
import java.util.Set;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
class u implements yi.d, yi.c {

    /* renamed from: a  reason: collision with root package name */
    private final Map f47883a = new HashMap();

    /* renamed from: b  reason: collision with root package name */
    private Queue f47884b = new ArrayDeque();

    /* renamed from: c  reason: collision with root package name */
    private final Executor f47885c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public u(Executor executor) {
        this.f47885c = executor;
    }

    private synchronized Set d(yi.a aVar) {
        throw null;
    }

    @Override // yi.d
    public void a(Class cls, yi.b bVar) {
        f(cls, this.f47885c, bVar);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void c() {
        Queue<Object> queue;
        synchronized (this) {
            try {
                queue = this.f47884b;
                if (queue != null) {
                    this.f47884b = null;
                } else {
                    queue = null;
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
        if (queue != null) {
            for (Object obj : queue) {
                android.support.v4.media.session.b.a(obj);
                e(null);
            }
        }
    }

    public void e(final yi.a aVar) {
        c0.b(aVar);
        synchronized (this) {
            try {
                Queue queue = this.f47884b;
                if (queue != null) {
                    queue.add(aVar);
                    return;
                }
                for (final Map.Entry entry : d(aVar)) {
                    ((Executor) entry.getValue()).execute(new Runnable(entry, aVar) { // from class: qi.t

                        /* renamed from: d  reason: collision with root package name */
                        public final /* synthetic */ Map.Entry f47882d;

                        @Override // java.lang.Runnable
                        public final void run() {
                            ((yi.b) this.f47882d.getKey()).a(null);
                        }
                    });
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public synchronized void f(Class cls, Executor executor, yi.b bVar) {
        try {
            c0.b(cls);
            c0.b(bVar);
            c0.b(executor);
            if (!this.f47883a.containsKey(cls)) {
                this.f47883a.put(cls, new ConcurrentHashMap());
            }
            ((ConcurrentHashMap) this.f47883a.get(cls)).put(bVar, executor);
        } catch (Throwable th2) {
            throw th2;
        }
    }
}
