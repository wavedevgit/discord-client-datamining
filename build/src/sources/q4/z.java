package q4;

import java.util.HashMap;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class z {

    /* renamed from: e  reason: collision with root package name */
    private static final String f45302e = k4.m.i("WorkTimer");

    /* renamed from: a  reason: collision with root package name */
    final k4.u f45303a;

    /* renamed from: b  reason: collision with root package name */
    final Map f45304b = new HashMap();

    /* renamed from: c  reason: collision with root package name */
    final Map f45305c = new HashMap();

    /* renamed from: d  reason: collision with root package name */
    final Object f45306d = new Object();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface a {
        void b(p4.m mVar);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class b implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        private final z f45307d;

        /* renamed from: e  reason: collision with root package name */
        private final p4.m f45308e;

        b(z zVar, p4.m mVar) {
            this.f45307d = zVar;
            this.f45308e = mVar;
        }

        @Override // java.lang.Runnable
        public void run() {
            synchronized (this.f45307d.f45306d) {
                try {
                    if (((b) this.f45307d.f45304b.remove(this.f45308e)) != null) {
                        a aVar = (a) this.f45307d.f45305c.remove(this.f45308e);
                        if (aVar != null) {
                            aVar.b(this.f45308e);
                        }
                    } else {
                        k4.m.e().a("WrkTimerRunnable", String.format("Timer with %s is already marked as complete.", this.f45308e));
                    }
                } catch (Throwable th2) {
                    throw th2;
                }
            }
        }
    }

    public z(k4.u uVar) {
        this.f45303a = uVar;
    }

    public void a(p4.m mVar, long j10, a aVar) {
        synchronized (this.f45306d) {
            k4.m e10 = k4.m.e();
            String str = f45302e;
            e10.a(str, "Starting timer for " + mVar);
            b(mVar);
            b bVar = new b(this, mVar);
            this.f45304b.put(mVar, bVar);
            this.f45305c.put(mVar, aVar);
            this.f45303a.b(j10, bVar);
        }
    }

    public void b(p4.m mVar) {
        synchronized (this.f45306d) {
            try {
                if (((b) this.f45304b.remove(mVar)) != null) {
                    k4.m e10 = k4.m.e();
                    String str = f45302e;
                    e10.a(str, "Stopping timer for " + mVar);
                    this.f45305c.remove(mVar);
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }
}
