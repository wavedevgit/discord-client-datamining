package l4;

import androidx.work.impl.w;
import java.util.HashMap;
import java.util.Map;
import k4.m;
import k4.u;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class a {

    /* renamed from: e  reason: collision with root package name */
    static final String f35730e = m.i("DelayedWorkTracker");

    /* renamed from: a  reason: collision with root package name */
    final w f35731a;

    /* renamed from: b  reason: collision with root package name */
    private final u f35732b;

    /* renamed from: c  reason: collision with root package name */
    private final k4.b f35733c;

    /* renamed from: d  reason: collision with root package name */
    private final Map f35734d = new HashMap();

    /* renamed from: l4.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class RunnableC0478a implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ p4.u f35735d;

        RunnableC0478a(p4.u uVar) {
            this.f35735d = uVar;
        }

        @Override // java.lang.Runnable
        public void run() {
            m e10 = m.e();
            String str = a.f35730e;
            e10.a(str, "Scheduling work " + this.f35735d.f43685a);
            a.this.f35731a.e(this.f35735d);
        }
    }

    public a(w wVar, u uVar, k4.b bVar) {
        this.f35731a = wVar;
        this.f35732b = uVar;
        this.f35733c = bVar;
    }

    public void a(p4.u uVar, long j10) {
        Runnable runnable = (Runnable) this.f35734d.remove(uVar.f43685a);
        if (runnable != null) {
            this.f35732b.a(runnable);
        }
        RunnableC0478a runnableC0478a = new RunnableC0478a(uVar);
        this.f35734d.put(uVar.f43685a, runnableC0478a);
        this.f35732b.b(j10 - this.f35733c.a(), runnableC0478a);
    }

    public void b(String str) {
        Runnable runnable = (Runnable) this.f35734d.remove(str);
        if (runnable != null) {
            this.f35732b.a(runnable);
        }
    }
}
