package l4;

import androidx.work.impl.w;
import java.util.HashMap;
import java.util.Map;
import k4.m;
import k4.u;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class a {

    /* renamed from: e  reason: collision with root package name */
    static final String f35510e = m.i("DelayedWorkTracker");

    /* renamed from: a  reason: collision with root package name */
    final w f35511a;

    /* renamed from: b  reason: collision with root package name */
    private final u f35512b;

    /* renamed from: c  reason: collision with root package name */
    private final k4.b f35513c;

    /* renamed from: d  reason: collision with root package name */
    private final Map f35514d = new HashMap();

    /* renamed from: l4.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class RunnableC0490a implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ p4.u f35515d;

        RunnableC0490a(p4.u uVar) {
            this.f35515d = uVar;
        }

        @Override // java.lang.Runnable
        public void run() {
            m e10 = m.e();
            String str = a.f35510e;
            e10.a(str, "Scheduling work " + this.f35515d.f41446a);
            a.this.f35511a.e(this.f35515d);
        }
    }

    public a(w wVar, u uVar, k4.b bVar) {
        this.f35511a = wVar;
        this.f35512b = uVar;
        this.f35513c = bVar;
    }

    public void a(p4.u uVar, long j10) {
        Runnable runnable = (Runnable) this.f35514d.remove(uVar.f41446a);
        if (runnable != null) {
            this.f35512b.a(runnable);
        }
        RunnableC0490a runnableC0490a = new RunnableC0490a(uVar);
        this.f35514d.put(uVar.f41446a, runnableC0490a);
        this.f35512b.b(j10 - this.f35513c.a(), runnableC0490a);
    }

    public void b(String str) {
        Runnable runnable = (Runnable) this.f35514d.remove(str);
        if (runnable != null) {
            this.f35512b.a(runnable);
        }
    }
}
