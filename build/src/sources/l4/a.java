package l4;

import androidx.work.impl.w;
import java.util.HashMap;
import java.util.Map;
import k4.m;
import k4.u;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class a {

    /* renamed from: e  reason: collision with root package name */
    static final String f35511e = m.i("DelayedWorkTracker");

    /* renamed from: a  reason: collision with root package name */
    final w f35512a;

    /* renamed from: b  reason: collision with root package name */
    private final u f35513b;

    /* renamed from: c  reason: collision with root package name */
    private final k4.b f35514c;

    /* renamed from: d  reason: collision with root package name */
    private final Map f35515d = new HashMap();

    /* renamed from: l4.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class RunnableC0490a implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ p4.u f35516d;

        RunnableC0490a(p4.u uVar) {
            this.f35516d = uVar;
        }

        @Override // java.lang.Runnable
        public void run() {
            m e10 = m.e();
            String str = a.f35511e;
            e10.a(str, "Scheduling work " + this.f35516d.f41447a);
            a.this.f35512a.e(this.f35516d);
        }
    }

    public a(w wVar, u uVar, k4.b bVar) {
        this.f35512a = wVar;
        this.f35513b = uVar;
        this.f35514c = bVar;
    }

    public void a(p4.u uVar, long j10) {
        Runnable runnable = (Runnable) this.f35515d.remove(uVar.f41447a);
        if (runnable != null) {
            this.f35513b.a(runnable);
        }
        RunnableC0490a runnableC0490a = new RunnableC0490a(uVar);
        this.f35515d.put(uVar.f41447a, runnableC0490a);
        this.f35513b.b(j10 - this.f35514c.a(), runnableC0490a);
    }

    public void b(String str) {
        Runnable runnable = (Runnable) this.f35515d.remove(str);
        if (runnable != null) {
            this.f35513b.a(runnable);
        }
    }
}
