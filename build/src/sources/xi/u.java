package xi;

import java.util.ArrayDeque;
import java.util.HashMap;
import java.util.Map;
import java.util.Queue;
import java.util.Set;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
class u implements fj.d, fj.c {

    /* renamed from: a  reason: collision with root package name */
    private final Map f55428a = new HashMap();

    /* renamed from: b  reason: collision with root package name */
    private Queue f55429b = new ArrayDeque();

    /* renamed from: c  reason: collision with root package name */
    private final Executor f55430c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public u(Executor executor) {
        this.f55430c = executor;
    }

    private synchronized Set d(fj.a aVar) {
        throw null;
    }

    @Override // fj.d
    public void a(Class cls, fj.b bVar) {
        f(cls, this.f55430c, bVar);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void c() {
        Queue<Object> queue;
        synchronized (this) {
            try {
                queue = this.f55429b;
                if (queue != null) {
                    this.f55429b = null;
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

    public void e(final fj.a aVar) {
        c0.b(aVar);
        synchronized (this) {
            try {
                Queue queue = this.f55429b;
                if (queue != null) {
                    queue.add(aVar);
                    return;
                }
                for (final Map.Entry entry : d(aVar)) {
                    ((Executor) entry.getValue()).execute(new Runnable(entry, aVar) { // from class: xi.t

                        /* renamed from: d  reason: collision with root package name */
                        public final /* synthetic */ Map.Entry f55427d;

                        @Override // java.lang.Runnable
                        public final void run() {
                            ((fj.b) this.f55427d.getKey()).a(null);
                        }
                    });
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public synchronized void f(Class cls, Executor executor, fj.b bVar) {
        try {
            c0.b(cls);
            c0.b(bVar);
            c0.b(executor);
            if (!this.f55428a.containsKey(cls)) {
                this.f55428a.put(cls, new ConcurrentHashMap());
            }
            ((ConcurrentHashMap) this.f55428a.get(cls)).put(bVar, executor);
        } catch (Throwable th2) {
            throw th2;
        }
    }
}
