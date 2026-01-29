package androidx.work.impl.background.systemalarm;

import android.content.Context;
import android.content.Intent;
import android.os.Looper;
import android.os.PowerManager;
import android.text.TextUtils;
import androidx.work.impl.b0;
import androidx.work.impl.n0;
import androidx.work.impl.o0;
import androidx.work.impl.p0;
import androidx.work.impl.u;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.Executor;
import k4.m;
import q4.t;
import q4.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class g implements androidx.work.impl.f {

    /* renamed from: w  reason: collision with root package name */
    static final String f5560w = m.i("SystemAlarmDispatcher");

    /* renamed from: d  reason: collision with root package name */
    final Context f5561d;

    /* renamed from: e  reason: collision with root package name */
    final r4.b f5562e;

    /* renamed from: i  reason: collision with root package name */
    private final z f5563i;

    /* renamed from: o  reason: collision with root package name */
    private final u f5564o;

    /* renamed from: p  reason: collision with root package name */
    private final p0 f5565p;

    /* renamed from: q  reason: collision with root package name */
    final androidx.work.impl.background.systemalarm.b f5566q;

    /* renamed from: r  reason: collision with root package name */
    final List f5567r;

    /* renamed from: s  reason: collision with root package name */
    Intent f5568s;

    /* renamed from: t  reason: collision with root package name */
    private c f5569t;

    /* renamed from: u  reason: collision with root package name */
    private b0 f5570u;

    /* renamed from: v  reason: collision with root package name */
    private final n0 f5571v;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class a implements Runnable {
        a() {
        }

        @Override // java.lang.Runnable
        public void run() {
            Executor a10;
            d dVar;
            synchronized (g.this.f5567r) {
                g gVar = g.this;
                gVar.f5568s = (Intent) gVar.f5567r.get(0);
            }
            Intent intent = g.this.f5568s;
            if (intent != null) {
                String action = intent.getAction();
                int intExtra = g.this.f5568s.getIntExtra("KEY_START_ID", 0);
                m e10 = m.e();
                String str = g.f5560w;
                e10.a(str, "Processing command " + g.this.f5568s + ", " + intExtra);
                Context context = g.this.f5561d;
                PowerManager.WakeLock b10 = t.b(context, action + " (" + intExtra + ")");
                try {
                    m e11 = m.e();
                    e11.a(str, "Acquiring operation wake lock (" + action + ") " + b10);
                    b10.acquire();
                    g gVar2 = g.this;
                    gVar2.f5566q.o(gVar2.f5568s, intExtra, gVar2);
                    m e12 = m.e();
                    e12.a(str, "Releasing operation wake lock (" + action + ") " + b10);
                    b10.release();
                    a10 = g.this.f5562e.a();
                    dVar = new d(g.this);
                } catch (Throwable th2) {
                    try {
                        m e13 = m.e();
                        String str2 = g.f5560w;
                        e13.d(str2, "Unexpected error in onHandleIntent", th2);
                        m e14 = m.e();
                        e14.a(str2, "Releasing operation wake lock (" + action + ") " + b10);
                        b10.release();
                        a10 = g.this.f5562e.a();
                        dVar = new d(g.this);
                    } catch (Throwable th3) {
                        m e15 = m.e();
                        String str3 = g.f5560w;
                        e15.a(str3, "Releasing operation wake lock (" + action + ") " + b10);
                        b10.release();
                        g.this.f5562e.a().execute(new d(g.this));
                        throw th3;
                    }
                }
                a10.execute(dVar);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class b implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        private final g f5573d;

        /* renamed from: e  reason: collision with root package name */
        private final Intent f5574e;

        /* renamed from: i  reason: collision with root package name */
        private final int f5575i;

        /* JADX INFO: Access modifiers changed from: package-private */
        public b(g gVar, Intent intent, int i10) {
            this.f5573d = gVar;
            this.f5574e = intent;
            this.f5575i = i10;
        }

        @Override // java.lang.Runnable
        public void run() {
            this.f5573d.a(this.f5574e, this.f5575i);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface c {
        void b();
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class d implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        private final g f5576d;

        d(g gVar) {
            this.f5576d = gVar;
        }

        @Override // java.lang.Runnable
        public void run() {
            this.f5576d.d();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public g(Context context) {
        this(context, null, null, null);
    }

    private void c() {
        if (Looper.getMainLooper().getThread() == Thread.currentThread()) {
            return;
        }
        throw new IllegalStateException("Needs to be invoked on the main thread.");
    }

    private boolean j(String str) {
        c();
        synchronized (this.f5567r) {
            try {
                for (Intent intent : this.f5567r) {
                    if (str.equals(intent.getAction())) {
                        return true;
                    }
                }
                return false;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    private void l() {
        c();
        PowerManager.WakeLock b10 = t.b(this.f5561d, "ProcessCommand");
        try {
            b10.acquire();
            this.f5565p.q().d(new a());
        } finally {
            b10.release();
        }
    }

    public boolean a(Intent intent, int i10) {
        m e10 = m.e();
        String str = f5560w;
        e10.a(str, "Adding command " + intent + " (" + i10 + ")");
        c();
        String action = intent.getAction();
        if (TextUtils.isEmpty(action)) {
            m.e().k(str, "Unknown command. Ignoring");
            return false;
        } else if ("ACTION_CONSTRAINTS_CHANGED".equals(action) && j("ACTION_CONSTRAINTS_CHANGED")) {
            return false;
        } else {
            intent.putExtra("KEY_START_ID", i10);
            synchronized (this.f5567r) {
                try {
                    boolean isEmpty = this.f5567r.isEmpty();
                    this.f5567r.add(intent);
                    if (isEmpty) {
                        l();
                    }
                } catch (Throwable th2) {
                    throw th2;
                }
            }
            return true;
        }
    }

    @Override // androidx.work.impl.f
    public void b(p4.m mVar, boolean z10) {
        this.f5562e.a().execute(new b(this, androidx.work.impl.background.systemalarm.b.d(this.f5561d, mVar, z10), 0));
    }

    void d() {
        m e10 = m.e();
        String str = f5560w;
        e10.a(str, "Checking if commands are complete.");
        c();
        synchronized (this.f5567r) {
            try {
                if (this.f5568s != null) {
                    m e11 = m.e();
                    e11.a(str, "Removing command " + this.f5568s);
                    if (((Intent) this.f5567r.remove(0)).equals(this.f5568s)) {
                        this.f5568s = null;
                    } else {
                        throw new IllegalStateException("Dequeue-d command is not the first.");
                    }
                }
                r4.a c10 = this.f5562e.c();
                if (!this.f5566q.n() && this.f5567r.isEmpty() && !c10.d1()) {
                    m.e().a(str, "No more commands & intents.");
                    c cVar = this.f5569t;
                    if (cVar != null) {
                        cVar.b();
                    }
                } else if (!this.f5567r.isEmpty()) {
                    l();
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public u e() {
        return this.f5564o;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public r4.b f() {
        return this.f5562e;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public p0 g() {
        return this.f5565p;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public z h() {
        return this.f5563i;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public n0 i() {
        return this.f5571v;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void k() {
        m.e().a(f5560w, "Destroying SystemAlarmDispatcher");
        this.f5564o.m(this);
        this.f5569t = null;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void m(c cVar) {
        if (this.f5569t != null) {
            m.e().c(f5560w, "A completion listener for SystemAlarmDispatcher already exists.");
        } else {
            this.f5569t = cVar;
        }
    }

    g(Context context, u uVar, p0 p0Var, n0 n0Var) {
        Context applicationContext = context.getApplicationContext();
        this.f5561d = applicationContext;
        this.f5570u = new b0();
        p0Var = p0Var == null ? p0.k(context) : p0Var;
        this.f5565p = p0Var;
        this.f5566q = new androidx.work.impl.background.systemalarm.b(applicationContext, p0Var.i().a(), this.f5570u);
        this.f5563i = new z(p0Var.i().k());
        uVar = uVar == null ? p0Var.m() : uVar;
        this.f5564o = uVar;
        r4.b q10 = p0Var.q();
        this.f5562e = q10;
        this.f5571v = n0Var == null ? new o0(uVar, q10) : n0Var;
        uVar.e(this);
        this.f5567r = new ArrayList();
        this.f5568s = null;
    }
}
