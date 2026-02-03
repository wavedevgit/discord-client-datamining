package l4;

import androidx.work.impl.w;
import java.util.HashMap;
import java.util.Map;
import k4.m;
import k4.u;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class a {

    /* renamed from: e  reason: collision with root package name */
    static final String f36410e = m.i("DelayedWorkTracker");

    /* renamed from: a  reason: collision with root package name */
    final w f36411a;

    /* renamed from: b  reason: collision with root package name */
    private final u f36412b;

    /* renamed from: c  reason: collision with root package name */
    private final k4.b f36413c;

    /* renamed from: d  reason: collision with root package name */
    private final Map f36414d = new HashMap();

    /* renamed from: l4.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class RunnableC0464a implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ p4.u f36415d;

        RunnableC0464a(p4.u uVar) {
            this.f36415d = uVar;
        }

        @Override // java.lang.Runnable
        public void run() {
            m e10 = m.e();
            String str = a.f36410e;
            e10.a(str, "Scheduling work " + this.f36415d.f44958a);
            a.this.f36411a.e(this.f36415d);
        }
    }

    public a(w wVar, u uVar, k4.b bVar) {
        this.f36411a = wVar;
        this.f36412b = uVar;
        this.f36413c = bVar;
    }

    public void a(p4.u uVar, long j10) {
        Runnable runnable = (Runnable) this.f36414d.remove(uVar.f44958a);
        if (runnable != null) {
            this.f36412b.a(runnable);
        }
        RunnableC0464a runnableC0464a = new RunnableC0464a(uVar);
        this.f36414d.put(uVar.f44958a, runnableC0464a);
        this.f36412b.b(j10 - this.f36413c.a(), runnableC0464a);
    }

    public void b(String str) {
        Runnable runnable = (Runnable) this.f36414d.remove(str);
        if (runnable != null) {
            this.f36412b.a(runnable);
        }
    }
}
