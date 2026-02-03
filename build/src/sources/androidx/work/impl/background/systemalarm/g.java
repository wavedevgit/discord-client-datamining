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
    static final String f5573w = m.i("SystemAlarmDispatcher");

    /* renamed from: d  reason: collision with root package name */
    final Context f5574d;

    /* renamed from: e  reason: collision with root package name */
    final r4.b f5575e;

    /* renamed from: i  reason: collision with root package name */
    private final z f5576i;

    /* renamed from: o  reason: collision with root package name */
    private final u f5577o;

    /* renamed from: p  reason: collision with root package name */
    private final p0 f5578p;

    /* renamed from: q  reason: collision with root package name */
    final androidx.work.impl.background.systemalarm.b f5579q;

    /* renamed from: r  reason: collision with root package name */
    final List f5580r;

    /* renamed from: s  reason: collision with root package name */
    Intent f5581s;

    /* renamed from: t  reason: collision with root package name */
    private c f5582t;

    /* renamed from: u  reason: collision with root package name */
    private b0 f5583u;

    /* renamed from: v  reason: collision with root package name */
    private final n0 f5584v;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class a implements Runnable {
        a() {
        }

        @Override // java.lang.Runnable
        public void run() {
            Executor a10;
            d dVar;
            synchronized (g.this.f5580r) {
                g gVar = g.this;
                gVar.f5581s = (Intent) gVar.f5580r.get(0);
            }
            Intent intent = g.this.f5581s;
            if (intent != null) {
                String action = intent.getAction();
                int intExtra = g.this.f5581s.getIntExtra("KEY_START_ID", 0);
                m e10 = m.e();
                String str = g.f5573w;
                e10.a(str, "Processing command " + g.this.f5581s + ", " + intExtra);
                Context context = g.this.f5574d;
                PowerManager.WakeLock b10 = t.b(context, action + " (" + intExtra + ")");
                try {
                    m e11 = m.e();
                    e11.a(str, "Acquiring operation wake lock (" + action + ") " + b10);
                    b10.acquire();
                    g gVar2 = g.this;
                    gVar2.f5579q.o(gVar2.f5581s, intExtra, gVar2);
                    m e12 = m.e();
                    e12.a(str, "Releasing operation wake lock (" + action + ") " + b10);
                    b10.release();
                    a10 = g.this.f5575e.a();
                    dVar = new d(g.this);
                } catch (Throwable th2) {
                    try {
                        m e13 = m.e();
                        String str2 = g.f5573w;
                        e13.d(str2, "Unexpected error in onHandleIntent", th2);
                        m e14 = m.e();
                        e14.a(str2, "Releasing operation wake lock (" + action + ") " + b10);
                        b10.release();
                        a10 = g.this.f5575e.a();
                        dVar = new d(g.this);
                    } catch (Throwable th3) {
                        m e15 = m.e();
                        String str3 = g.f5573w;
                        e15.a(str3, "Releasing operation wake lock (" + action + ") " + b10);
                        b10.release();
                        g.this.f5575e.a().execute(new d(g.this));
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
        private final g f5586d;

        /* renamed from: e  reason: collision with root package name */
        private final Intent f5587e;

        /* renamed from: i  reason: collision with root package name */
        private final int f5588i;

        /* JADX INFO: Access modifiers changed from: package-private */
        public b(g gVar, Intent intent, int i10) {
            this.f5586d = gVar;
            this.f5587e = intent;
            this.f5588i = i10;
        }

        @Override // java.lang.Runnable
        public void run() {
            this.f5586d.a(this.f5587e, this.f5588i);
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
        private final g f5589d;

        d(g gVar) {
            this.f5589d = gVar;
        }

        @Override // java.lang.Runnable
        public void run() {
            this.f5589d.d();
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
        synchronized (this.f5580r) {
            try {
                for (Intent intent : this.f5580r) {
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
        PowerManager.WakeLock b10 = t.b(this.f5574d, "ProcessCommand");
        try {
            b10.acquire();
            this.f5578p.q().d(new a());
        } finally {
            b10.release();
        }
    }

    public boolean a(Intent intent, int i10) {
        m e10 = m.e();
        String str = f5573w;
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
            synchronized (this.f5580r) {
                try {
                    boolean isEmpty = this.f5580r.isEmpty();
                    this.f5580r.add(intent);
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
        this.f5575e.a().execute(new b(this, androidx.work.impl.background.systemalarm.b.d(this.f5574d, mVar, z10), 0));
    }

    void d() {
        m e10 = m.e();
        String str = f5573w;
        e10.a(str, "Checking if commands are complete.");
        c();
        synchronized (this.f5580r) {
            try {
                if (this.f5581s != null) {
                    m e11 = m.e();
                    e11.a(str, "Removing command " + this.f5581s);
                    if (((Intent) this.f5580r.remove(0)).equals(this.f5581s)) {
                        this.f5581s = null;
                    } else {
                        throw new IllegalStateException("Dequeue-d command is not the first.");
                    }
                }
                r4.a c10 = this.f5575e.c();
                if (!this.f5579q.n() && this.f5580r.isEmpty() && !c10.Z0()) {
                    m.e().a(str, "No more commands & intents.");
                    c cVar = this.f5582t;
                    if (cVar != null) {
                        cVar.b();
                    }
                } else if (!this.f5580r.isEmpty()) {
                    l();
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public u e() {
        return this.f5577o;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public r4.b f() {
        return this.f5575e;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public p0 g() {
        return this.f5578p;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public z h() {
        return this.f5576i;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public n0 i() {
        return this.f5584v;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void k() {
        m.e().a(f5573w, "Destroying SystemAlarmDispatcher");
        this.f5577o.m(this);
        this.f5582t = null;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void m(c cVar) {
        if (this.f5582t != null) {
            m.e().c(f5573w, "A completion listener for SystemAlarmDispatcher already exists.");
        } else {
            this.f5582t = cVar;
        }
    }

    g(Context context, u uVar, p0 p0Var, n0 n0Var) {
        Context applicationContext = context.getApplicationContext();
        this.f5574d = applicationContext;
        this.f5583u = new b0();
        p0Var = p0Var == null ? p0.k(context) : p0Var;
        this.f5578p = p0Var;
        this.f5579q = new androidx.work.impl.background.systemalarm.b(applicationContext, p0Var.i().a(), this.f5583u);
        this.f5576i = new z(p0Var.i().k());
        uVar = uVar == null ? p0Var.m() : uVar;
        this.f5577o = uVar;
        r4.b q10 = p0Var.q();
        this.f5575e = q10;
        this.f5584v = n0Var == null ? new o0(uVar, q10) : n0Var;
        uVar.e(this);
        this.f5580r = new ArrayList();
        this.f5581s = null;
    }
}
