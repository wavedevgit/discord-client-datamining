package l4;

import androidx.work.impl.w;
import java.util.HashMap;
import java.util.Map;
import k4.m;
import k4.u;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class a {

    /* renamed from: e  reason: collision with root package name */
    static final String f36941e = m.i("DelayedWorkTracker");

    /* renamed from: a  reason: collision with root package name */
    final w f36942a;

    /* renamed from: b  reason: collision with root package name */
    private final u f36943b;

    /* renamed from: c  reason: collision with root package name */
    private final k4.b f36944c;

    /* renamed from: d  reason: collision with root package name */
    private final Map f36945d = new HashMap();

    /* renamed from: l4.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class RunnableC0480a implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ p4.u f36946d;

        RunnableC0480a(p4.u uVar) {
            this.f36946d = uVar;
        }

        @Override // java.lang.Runnable
        public void run() {
            m e10 = m.e();
            String str = a.f36941e;
            e10.a(str, "Scheduling work " + this.f36946d.f45000a);
            a.this.f36942a.e(this.f36946d);
        }
    }

    public a(w wVar, u uVar, k4.b bVar) {
        this.f36942a = wVar;
        this.f36943b = uVar;
        this.f36944c = bVar;
    }

    public void a(p4.u uVar, long j10) {
        Runnable runnable = (Runnable) this.f36945d.remove(uVar.f45000a);
        if (runnable != null) {
            this.f36943b.a(runnable);
        }
        RunnableC0480a runnableC0480a = new RunnableC0480a(uVar);
        this.f36945d.put(uVar.f45000a, runnableC0480a);
        this.f36943b.b(j10 - this.f36944c.a(), runnableC0480a);
    }

    public void b(String str) {
        Runnable runnable = (Runnable) this.f36945d.remove(str);
        if (runnable != null) {
            this.f36943b.a(runnable);
        }
    }
}
