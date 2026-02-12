package q4;

import java.util.HashMap;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class z {

    /* renamed from: e  reason: collision with root package name */
    private static final String f43971e = k4.m.i("WorkTimer");

    /* renamed from: a  reason: collision with root package name */
    final k4.u f43972a;

    /* renamed from: b  reason: collision with root package name */
    final Map f43973b = new HashMap();

    /* renamed from: c  reason: collision with root package name */
    final Map f43974c = new HashMap();

    /* renamed from: d  reason: collision with root package name */
    final Object f43975d = new Object();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface a {
        void b(p4.m mVar);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class b implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        private final z f43976d;

        /* renamed from: e  reason: collision with root package name */
        private final p4.m f43977e;

        b(z zVar, p4.m mVar) {
            this.f43976d = zVar;
            this.f43977e = mVar;
        }

        @Override // java.lang.Runnable
        public void run() {
            synchronized (this.f43976d.f43975d) {
                try {
                    if (((b) this.f43976d.f43973b.remove(this.f43977e)) != null) {
                        a aVar = (a) this.f43976d.f43974c.remove(this.f43977e);
                        if (aVar != null) {
                            aVar.b(this.f43977e);
                        }
                    } else {
                        k4.m.e().a("WrkTimerRunnable", String.format("Timer with %s is already marked as complete.", this.f43977e));
                    }
                } catch (Throwable th2) {
                    throw th2;
                }
            }
        }
    }

    public z(k4.u uVar) {
        this.f43972a = uVar;
    }

    public void a(p4.m mVar, long j10, a aVar) {
        synchronized (this.f43975d) {
            k4.m e10 = k4.m.e();
            String str = f43971e;
            e10.a(str, "Starting timer for " + mVar);
            b(mVar);
            b bVar = new b(this, mVar);
            this.f43973b.put(mVar, bVar);
            this.f43974c.put(mVar, aVar);
            this.f43972a.b(j10, bVar);
        }
    }

    public void b(p4.m mVar) {
        synchronized (this.f43975d) {
            try {
                if (((b) this.f43973b.remove(mVar)) != null) {
                    k4.m e10 = k4.m.e();
                    String str = f43971e;
                    e10.a(str, "Stopping timer for " + mVar);
                    this.f43974c.remove(mVar);
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }
}
