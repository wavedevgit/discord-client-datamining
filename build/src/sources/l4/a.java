package l4;

import androidx.work.impl.w;
import java.util.HashMap;
import java.util.Map;
import k4.m;
import k4.u;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class a {

    /* renamed from: e  reason: collision with root package name */
    static final String f35613e = m.i("DelayedWorkTracker");

    /* renamed from: a  reason: collision with root package name */
    final w f35614a;

    /* renamed from: b  reason: collision with root package name */
    private final u f35615b;

    /* renamed from: c  reason: collision with root package name */
    private final k4.b f35616c;

    /* renamed from: d  reason: collision with root package name */
    private final Map f35617d = new HashMap();

    /* renamed from: l4.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class RunnableC0507a implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ p4.u f35618d;

        RunnableC0507a(p4.u uVar) {
            this.f35618d = uVar;
        }

        @Override // java.lang.Runnable
        public void run() {
            m e10 = m.e();
            String str = a.f35613e;
            e10.a(str, "Scheduling work " + this.f35618d.f42988a);
            a.this.f35614a.e(this.f35618d);
        }
    }

    public a(w wVar, u uVar, k4.b bVar) {
        this.f35614a = wVar;
        this.f35615b = uVar;
        this.f35616c = bVar;
    }

    public void a(p4.u uVar, long j10) {
        Runnable runnable = (Runnable) this.f35617d.remove(uVar.f42988a);
        if (runnable != null) {
            this.f35615b.a(runnable);
        }
        RunnableC0507a runnableC0507a = new RunnableC0507a(uVar);
        this.f35617d.put(uVar.f42988a, runnableC0507a);
        this.f35615b.b(j10 - this.f35616c.a(), runnableC0507a);
    }

    public void b(String str) {
        Runnable runnable = (Runnable) this.f35617d.remove(str);
        if (runnable != null) {
            this.f35615b.a(runnable);
        }
    }
}
