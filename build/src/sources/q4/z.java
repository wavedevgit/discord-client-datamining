package q4;

import java.util.HashMap;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class z {

    /* renamed from: e  reason: collision with root package name */
    private static final String f46966e = k4.m.i("WorkTimer");

    /* renamed from: a  reason: collision with root package name */
    final k4.u f46967a;

    /* renamed from: b  reason: collision with root package name */
    final Map f46968b = new HashMap();

    /* renamed from: c  reason: collision with root package name */
    final Map f46969c = new HashMap();

    /* renamed from: d  reason: collision with root package name */
    final Object f46970d = new Object();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface a {
        void b(p4.m mVar);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class b implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        private final z f46971d;

        /* renamed from: e  reason: collision with root package name */
        private final p4.m f46972e;

        b(z zVar, p4.m mVar) {
            this.f46971d = zVar;
            this.f46972e = mVar;
        }

        @Override // java.lang.Runnable
        public void run() {
            synchronized (this.f46971d.f46970d) {
                try {
                    if (((b) this.f46971d.f46968b.remove(this.f46972e)) != null) {
                        a aVar = (a) this.f46971d.f46969c.remove(this.f46972e);
                        if (aVar != null) {
                            aVar.b(this.f46972e);
                        }
                    } else {
                        k4.m.e().a("WrkTimerRunnable", String.format("Timer with %s is already marked as complete.", this.f46972e));
                    }
                } catch (Throwable th2) {
                    throw th2;
                }
            }
        }
    }

    public z(k4.u uVar) {
        this.f46967a = uVar;
    }

    public void a(p4.m mVar, long j10, a aVar) {
        synchronized (this.f46970d) {
            k4.m e10 = k4.m.e();
            String str = f46966e;
            e10.a(str, "Starting timer for " + mVar);
            b(mVar);
            b bVar = new b(this, mVar);
            this.f46968b.put(mVar, bVar);
            this.f46969c.put(mVar, aVar);
            this.f46967a.b(j10, bVar);
        }
    }

    public void b(p4.m mVar) {
        synchronized (this.f46970d) {
            try {
                if (((b) this.f46968b.remove(mVar)) != null) {
                    k4.m e10 = k4.m.e();
                    String str = f46966e;
                    e10.a(str, "Stopping timer for " + mVar);
                    this.f46969c.remove(mVar);
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }
}
