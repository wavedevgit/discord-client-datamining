package q4;

import java.util.HashMap;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class z {

    /* renamed from: e  reason: collision with root package name */
    private static final String f47451e = k4.m.i("WorkTimer");

    /* renamed from: a  reason: collision with root package name */
    final k4.u f47452a;

    /* renamed from: b  reason: collision with root package name */
    final Map f47453b = new HashMap();

    /* renamed from: c  reason: collision with root package name */
    final Map f47454c = new HashMap();

    /* renamed from: d  reason: collision with root package name */
    final Object f47455d = new Object();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface a {
        void b(p4.m mVar);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class b implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        private final z f47456d;

        /* renamed from: e  reason: collision with root package name */
        private final p4.m f47457e;

        b(z zVar, p4.m mVar) {
            this.f47456d = zVar;
            this.f47457e = mVar;
        }

        @Override // java.lang.Runnable
        public void run() {
            synchronized (this.f47456d.f47455d) {
                try {
                    if (((b) this.f47456d.f47453b.remove(this.f47457e)) != null) {
                        a aVar = (a) this.f47456d.f47454c.remove(this.f47457e);
                        if (aVar != null) {
                            aVar.b(this.f47457e);
                        }
                    } else {
                        k4.m.e().a("WrkTimerRunnable", String.format("Timer with %s is already marked as complete.", this.f47457e));
                    }
                } catch (Throwable th2) {
                    throw th2;
                }
            }
        }
    }

    public z(k4.u uVar) {
        this.f47452a = uVar;
    }

    public void a(p4.m mVar, long j10, a aVar) {
        synchronized (this.f47455d) {
            k4.m e10 = k4.m.e();
            String str = f47451e;
            e10.a(str, "Starting timer for " + mVar);
            b(mVar);
            b bVar = new b(this, mVar);
            this.f47453b.put(mVar, bVar);
            this.f47454c.put(mVar, aVar);
            this.f47452a.b(j10, bVar);
        }
    }

    public void b(p4.m mVar) {
        synchronized (this.f47455d) {
            try {
                if (((b) this.f47453b.remove(mVar)) != null) {
                    k4.m e10 = k4.m.e();
                    String str = f47451e;
                    e10.a(str, "Stopping timer for " + mVar);
                    this.f47454c.remove(mVar);
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }
}
