package q4;

import java.util.HashMap;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class z {

    /* renamed from: e  reason: collision with root package name */
    private static final String f44539e = k4.m.i("WorkTimer");

    /* renamed from: a  reason: collision with root package name */
    final k4.u f44540a;

    /* renamed from: b  reason: collision with root package name */
    final Map f44541b = new HashMap();

    /* renamed from: c  reason: collision with root package name */
    final Map f44542c = new HashMap();

    /* renamed from: d  reason: collision with root package name */
    final Object f44543d = new Object();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface a {
        void b(p4.m mVar);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class b implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        private final z f44544d;

        /* renamed from: e  reason: collision with root package name */
        private final p4.m f44545e;

        b(z zVar, p4.m mVar) {
            this.f44544d = zVar;
            this.f44545e = mVar;
        }

        @Override // java.lang.Runnable
        public void run() {
            synchronized (this.f44544d.f44543d) {
                try {
                    if (((b) this.f44544d.f44541b.remove(this.f44545e)) != null) {
                        a aVar = (a) this.f44544d.f44542c.remove(this.f44545e);
                        if (aVar != null) {
                            aVar.b(this.f44545e);
                        }
                    } else {
                        k4.m.e().a("WrkTimerRunnable", String.format("Timer with %s is already marked as complete.", this.f44545e));
                    }
                } catch (Throwable th2) {
                    throw th2;
                }
            }
        }
    }

    public z(k4.u uVar) {
        this.f44540a = uVar;
    }

    public void a(p4.m mVar, long j10, a aVar) {
        synchronized (this.f44543d) {
            k4.m e10 = k4.m.e();
            String str = f44539e;
            e10.a(str, "Starting timer for " + mVar);
            b(mVar);
            b bVar = new b(this, mVar);
            this.f44541b.put(mVar, bVar);
            this.f44542c.put(mVar, aVar);
            this.f44540a.b(j10, bVar);
        }
    }

    public void b(p4.m mVar) {
        synchronized (this.f44543d) {
            try {
                if (((b) this.f44541b.remove(mVar)) != null) {
                    k4.m e10 = k4.m.e();
                    String str = f44539e;
                    e10.a(str, "Stopping timer for " + mVar);
                    this.f44542c.remove(mVar);
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }
}
