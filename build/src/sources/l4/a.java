package l4;

import androidx.work.impl.w;
import java.util.HashMap;
import java.util.Map;
import k4.m;
import k4.u;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class a {

    /* renamed from: e  reason: collision with root package name */
    static final String f36337e = m.i("DelayedWorkTracker");

    /* renamed from: a  reason: collision with root package name */
    final w f36338a;

    /* renamed from: b  reason: collision with root package name */
    private final u f36339b;

    /* renamed from: c  reason: collision with root package name */
    private final k4.b f36340c;

    /* renamed from: d  reason: collision with root package name */
    private final Map f36341d = new HashMap();

    /* renamed from: l4.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class RunnableC0475a implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ p4.u f36342d;

        RunnableC0475a(p4.u uVar) {
            this.f36342d = uVar;
        }

        @Override // java.lang.Runnable
        public void run() {
            m e10 = m.e();
            String str = a.f36337e;
            e10.a(str, "Scheduling work " + this.f36342d.f44888a);
            a.this.f36338a.e(this.f36342d);
        }
    }

    public a(w wVar, u uVar, k4.b bVar) {
        this.f36338a = wVar;
        this.f36339b = uVar;
        this.f36340c = bVar;
    }

    public void a(p4.u uVar, long j10) {
        Runnable runnable = (Runnable) this.f36341d.remove(uVar.f44888a);
        if (runnable != null) {
            this.f36339b.a(runnable);
        }
        RunnableC0475a runnableC0475a = new RunnableC0475a(uVar);
        this.f36341d.put(uVar.f44888a, runnableC0475a);
        this.f36339b.b(j10 - this.f36340c.a(), runnableC0475a);
    }

    public void b(String str) {
        Runnable runnable = (Runnable) this.f36341d.remove(str);
        if (runnable != null) {
            this.f36339b.a(runnable);
        }
    }
}
