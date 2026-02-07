package q4;

import java.util.HashMap;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class z {

    /* renamed from: e  reason: collision with root package name */
    private static final String f46547e = k4.m.i("WorkTimer");

    /* renamed from: a  reason: collision with root package name */
    final k4.u f46548a;

    /* renamed from: b  reason: collision with root package name */
    final Map f46549b = new HashMap();

    /* renamed from: c  reason: collision with root package name */
    final Map f46550c = new HashMap();

    /* renamed from: d  reason: collision with root package name */
    final Object f46551d = new Object();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface a {
        void b(p4.m mVar);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class b implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        private final z f46552d;

        /* renamed from: e  reason: collision with root package name */
        private final p4.m f46553e;

        b(z zVar, p4.m mVar) {
            this.f46552d = zVar;
            this.f46553e = mVar;
        }

        @Override // java.lang.Runnable
        public void run() {
            synchronized (this.f46552d.f46551d) {
                try {
                    if (((b) this.f46552d.f46549b.remove(this.f46553e)) != null) {
                        a aVar = (a) this.f46552d.f46550c.remove(this.f46553e);
                        if (aVar != null) {
                            aVar.b(this.f46553e);
                        }
                    } else {
                        k4.m.e().a("WrkTimerRunnable", String.format("Timer with %s is already marked as complete.", this.f46553e));
                    }
                } catch (Throwable th2) {
                    throw th2;
                }
            }
        }
    }

    public z(k4.u uVar) {
        this.f46548a = uVar;
    }

    public void a(p4.m mVar, long j10, a aVar) {
        synchronized (this.f46551d) {
            k4.m e10 = k4.m.e();
            String str = f46547e;
            e10.a(str, "Starting timer for " + mVar);
            b(mVar);
            b bVar = new b(this, mVar);
            this.f46549b.put(mVar, bVar);
            this.f46550c.put(mVar, aVar);
            this.f46548a.b(j10, bVar);
        }
    }

    public void b(p4.m mVar) {
        synchronized (this.f46551d) {
            try {
                if (((b) this.f46549b.remove(mVar)) != null) {
                    k4.m e10 = k4.m.e();
                    String str = f46547e;
                    e10.a(str, "Stopping timer for " + mVar);
                    this.f46550c.remove(mVar);
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }
}
