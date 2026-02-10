package vi;

import java.util.ArrayDeque;
import java.util.HashMap;
import java.util.Map;
import java.util.Queue;
import java.util.Set;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
class u implements dj.d, dj.c {

    /* renamed from: a  reason: collision with root package name */
    private final Map f52463a = new HashMap();

    /* renamed from: b  reason: collision with root package name */
    private Queue f52464b = new ArrayDeque();

    /* renamed from: c  reason: collision with root package name */
    private final Executor f52465c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public u(Executor executor) {
        this.f52465c = executor;
    }

    private synchronized Set d(dj.a aVar) {
        throw null;
    }

    @Override // dj.d
    public void a(Class cls, dj.b bVar) {
        f(cls, this.f52465c, bVar);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void c() {
        Queue<Object> queue;
        synchronized (this) {
            try {
                queue = this.f52464b;
                if (queue != null) {
                    this.f52464b = null;
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

    public void e(final dj.a aVar) {
        c0.b(aVar);
        synchronized (this) {
            try {
                Queue queue = this.f52464b;
                if (queue != null) {
                    queue.add(aVar);
                    return;
                }
                for (final Map.Entry entry : d(aVar)) {
                    ((Executor) entry.getValue()).execute(new Runnable(entry, aVar) { // from class: vi.t

                        /* renamed from: d  reason: collision with root package name */
                        public final /* synthetic */ Map.Entry f52462d;

                        @Override // java.lang.Runnable
                        public final void run() {
                            ((dj.b) this.f52462d.getKey()).a(null);
                        }
                    });
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public synchronized void f(Class cls, Executor executor, dj.b bVar) {
        try {
            c0.b(cls);
            c0.b(bVar);
            c0.b(executor);
            if (!this.f52463a.containsKey(cls)) {
                this.f52463a.put(cls, new ConcurrentHashMap());
            }
            ((ConcurrentHashMap) this.f52463a.get(cls)).put(bVar, executor);
        } catch (Throwable th2) {
            throw th2;
        }
    }
}
