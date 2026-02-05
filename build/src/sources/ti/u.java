package ti;

import java.util.ArrayDeque;
import java.util.HashMap;
import java.util.Map;
import java.util.Queue;
import java.util.Set;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
class u implements bj.d, bj.c {

    /* renamed from: a  reason: collision with root package name */
    private final Map f50747a = new HashMap();

    /* renamed from: b  reason: collision with root package name */
    private Queue f50748b = new ArrayDeque();

    /* renamed from: c  reason: collision with root package name */
    private final Executor f50749c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public u(Executor executor) {
        this.f50749c = executor;
    }

    private synchronized Set d(bj.a aVar) {
        throw null;
    }

    @Override // bj.d
    public void a(Class cls, bj.b bVar) {
        f(cls, this.f50749c, bVar);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void c() {
        Queue<Object> queue;
        synchronized (this) {
            try {
                queue = this.f50748b;
                if (queue != null) {
                    this.f50748b = null;
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

    public void e(final bj.a aVar) {
        c0.b(aVar);
        synchronized (this) {
            try {
                Queue queue = this.f50748b;
                if (queue != null) {
                    queue.add(aVar);
                    return;
                }
                for (final Map.Entry entry : d(aVar)) {
                    ((Executor) entry.getValue()).execute(new Runnable(entry, aVar) { // from class: ti.t

                        /* renamed from: d  reason: collision with root package name */
                        public final /* synthetic */ Map.Entry f50746d;

                        @Override // java.lang.Runnable
                        public final void run() {
                            ((bj.b) this.f50746d.getKey()).a(null);
                        }
                    });
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public synchronized void f(Class cls, Executor executor, bj.b bVar) {
        try {
            c0.b(cls);
            c0.b(bVar);
            c0.b(executor);
            if (!this.f50747a.containsKey(cls)) {
                this.f50747a.put(cls, new ConcurrentHashMap());
            }
            ((ConcurrentHashMap) this.f50747a.get(cls)).put(bVar, executor);
        } catch (Throwable th2) {
            throw th2;
        }
    }
}
