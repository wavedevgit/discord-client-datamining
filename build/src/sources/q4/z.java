package q4;

import java.util.HashMap;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class z {

    /* renamed from: e  reason: collision with root package name */
    private static final String f47387e = k4.m.i("WorkTimer");

    /* renamed from: a  reason: collision with root package name */
    final k4.u f47388a;

    /* renamed from: b  reason: collision with root package name */
    final Map f47389b = new HashMap();

    /* renamed from: c  reason: collision with root package name */
    final Map f47390c = new HashMap();

    /* renamed from: d  reason: collision with root package name */
    final Object f47391d = new Object();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface a {
        void b(p4.m mVar);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class b implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        private final z f47392d;

        /* renamed from: e  reason: collision with root package name */
        private final p4.m f47393e;

        b(z zVar, p4.m mVar) {
            this.f47392d = zVar;
            this.f47393e = mVar;
        }

        @Override // java.lang.Runnable
        public void run() {
            synchronized (this.f47392d.f47391d) {
                try {
                    if (((b) this.f47392d.f47389b.remove(this.f47393e)) != null) {
                        a aVar = (a) this.f47392d.f47390c.remove(this.f47393e);
                        if (aVar != null) {
                            aVar.b(this.f47393e);
                        }
                    } else {
                        k4.m.e().a("WrkTimerRunnable", String.format("Timer with %s is already marked as complete.", this.f47393e));
                    }
                } catch (Throwable th2) {
                    throw th2;
                }
            }
        }
    }

    public z(k4.u uVar) {
        this.f47388a = uVar;
    }

    public void a(p4.m mVar, long j10, a aVar) {
        synchronized (this.f47391d) {
            k4.m e10 = k4.m.e();
            String str = f47387e;
            e10.a(str, "Starting timer for " + mVar);
            b(mVar);
            b bVar = new b(this, mVar);
            this.f47389b.put(mVar, bVar);
            this.f47390c.put(mVar, aVar);
            this.f47388a.b(j10, bVar);
        }
    }

    public void b(p4.m mVar) {
        synchronized (this.f47391d) {
            try {
                if (((b) this.f47389b.remove(mVar)) != null) {
                    k4.m e10 = k4.m.e();
                    String str = f47387e;
                    e10.a(str, "Stopping timer for " + mVar);
                    this.f47390c.remove(mVar);
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }
}
