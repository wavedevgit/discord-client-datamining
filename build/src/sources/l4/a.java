package l4;

import androidx.work.impl.w;
import java.util.HashMap;
import java.util.Map;
import k4.m;
import k4.u;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class a {

    /* renamed from: e  reason: collision with root package name */
    static final String f36079e = m.i("DelayedWorkTracker");

    /* renamed from: a  reason: collision with root package name */
    final w f36080a;

    /* renamed from: b  reason: collision with root package name */
    private final u f36081b;

    /* renamed from: c  reason: collision with root package name */
    private final k4.b f36082c;

    /* renamed from: d  reason: collision with root package name */
    private final Map f36083d = new HashMap();

    /* renamed from: l4.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class RunnableC0490a implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ p4.u f36084d;

        RunnableC0490a(p4.u uVar) {
            this.f36084d = uVar;
        }

        @Override // java.lang.Runnable
        public void run() {
            m e10 = m.e();
            String str = a.f36079e;
            e10.a(str, "Scheduling work " + this.f36084d.f42015a);
            a.this.f36080a.e(this.f36084d);
        }
    }

    public a(w wVar, u uVar, k4.b bVar) {
        this.f36080a = wVar;
        this.f36081b = uVar;
        this.f36082c = bVar;
    }

    public void a(p4.u uVar, long j10) {
        Runnable runnable = (Runnable) this.f36083d.remove(uVar.f42015a);
        if (runnable != null) {
            this.f36081b.a(runnable);
        }
        RunnableC0490a runnableC0490a = new RunnableC0490a(uVar);
        this.f36083d.put(uVar.f42015a, runnableC0490a);
        this.f36081b.b(j10 - this.f36082c.a(), runnableC0490a);
    }

    public void b(String str) {
        Runnable runnable = (Runnable) this.f36083d.remove(str);
        if (runnable != null) {
            this.f36081b.a(runnable);
        }
    }
}
