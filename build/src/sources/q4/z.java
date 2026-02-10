package q4;

import java.util.HashMap;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class z {

    /* renamed from: e  reason: collision with root package name */
    private static final String f43970e = k4.m.i("WorkTimer");

    /* renamed from: a  reason: collision with root package name */
    final k4.u f43971a;

    /* renamed from: b  reason: collision with root package name */
    final Map f43972b = new HashMap();

    /* renamed from: c  reason: collision with root package name */
    final Map f43973c = new HashMap();

    /* renamed from: d  reason: collision with root package name */
    final Object f43974d = new Object();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface a {
        void b(p4.m mVar);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class b implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        private final z f43975d;

        /* renamed from: e  reason: collision with root package name */
        private final p4.m f43976e;

        b(z zVar, p4.m mVar) {
            this.f43975d = zVar;
            this.f43976e = mVar;
        }

        @Override // java.lang.Runnable
        public void run() {
            synchronized (this.f43975d.f43974d) {
                try {
                    if (((b) this.f43975d.f43972b.remove(this.f43976e)) != null) {
                        a aVar = (a) this.f43975d.f43973c.remove(this.f43976e);
                        if (aVar != null) {
                            aVar.b(this.f43976e);
                        }
                    } else {
                        k4.m.e().a("WrkTimerRunnable", String.format("Timer with %s is already marked as complete.", this.f43976e));
                    }
                } catch (Throwable th2) {
                    throw th2;
                }
            }
        }
    }

    public z(k4.u uVar) {
        this.f43971a = uVar;
    }

    public void a(p4.m mVar, long j10, a aVar) {
        synchronized (this.f43974d) {
            k4.m e10 = k4.m.e();
            String str = f43970e;
            e10.a(str, "Starting timer for " + mVar);
            b(mVar);
            b bVar = new b(this, mVar);
            this.f43972b.put(mVar, bVar);
            this.f43973c.put(mVar, aVar);
            this.f43971a.b(j10, bVar);
        }
    }

    public void b(p4.m mVar) {
        synchronized (this.f43974d) {
            try {
                if (((b) this.f43972b.remove(mVar)) != null) {
                    k4.m e10 = k4.m.e();
                    String str = f43970e;
                    e10.a(str, "Stopping timer for " + mVar);
                    this.f43973c.remove(mVar);
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }
}
