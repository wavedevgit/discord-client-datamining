package l4;

import androidx.work.impl.w;
import java.util.HashMap;
import java.util.Map;
import k4.m;
import k4.u;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class a {

    /* renamed from: e  reason: collision with root package name */
    static final String f35778e = m.i("DelayedWorkTracker");

    /* renamed from: a  reason: collision with root package name */
    final w f35779a;

    /* renamed from: b  reason: collision with root package name */
    private final u f35780b;

    /* renamed from: c  reason: collision with root package name */
    private final k4.b f35781c;

    /* renamed from: d  reason: collision with root package name */
    private final Map f35782d = new HashMap();

    /* renamed from: l4.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class RunnableC0478a implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ p4.u f35783d;

        RunnableC0478a(p4.u uVar) {
            this.f35783d = uVar;
        }

        @Override // java.lang.Runnable
        public void run() {
            m e10 = m.e();
            String str = a.f35778e;
            e10.a(str, "Scheduling work " + this.f35783d.f43733a);
            a.this.f35779a.e(this.f35783d);
        }
    }

    public a(w wVar, u uVar, k4.b bVar) {
        this.f35779a = wVar;
        this.f35780b = uVar;
        this.f35781c = bVar;
    }

    public void a(p4.u uVar, long j10) {
        Runnable runnable = (Runnable) this.f35782d.remove(uVar.f43733a);
        if (runnable != null) {
            this.f35780b.a(runnable);
        }
        RunnableC0478a runnableC0478a = new RunnableC0478a(uVar);
        this.f35782d.put(uVar.f43733a, runnableC0478a);
        this.f35780b.b(j10 - this.f35781c.a(), runnableC0478a);
    }

    public void b(String str) {
        Runnable runnable = (Runnable) this.f35782d.remove(str);
        if (runnable != null) {
            this.f35780b.a(runnable);
        }
    }
}
