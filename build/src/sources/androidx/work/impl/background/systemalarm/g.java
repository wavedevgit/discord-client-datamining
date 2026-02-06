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
    static final String f6014w = m.i("SystemAlarmDispatcher");

    /* renamed from: d  reason: collision with root package name */
    final Context f6015d;

    /* renamed from: e  reason: collision with root package name */
    final r4.b f6016e;

    /* renamed from: i  reason: collision with root package name */
    private final z f6017i;

    /* renamed from: o  reason: collision with root package name */
    private final u f6018o;

    /* renamed from: p  reason: collision with root package name */
    private final p0 f6019p;

    /* renamed from: q  reason: collision with root package name */
    final androidx.work.impl.background.systemalarm.b f6020q;

    /* renamed from: r  reason: collision with root package name */
    final List f6021r;

    /* renamed from: s  reason: collision with root package name */
    Intent f6022s;

    /* renamed from: t  reason: collision with root package name */
    private c f6023t;

    /* renamed from: u  reason: collision with root package name */
    private b0 f6024u;

    /* renamed from: v  reason: collision with root package name */
    private final n0 f6025v;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class a implements Runnable {
        a() {
        }

        @Override // java.lang.Runnable
        public void run() {
            Executor a10;
            d dVar;
            synchronized (g.this.f6021r) {
                g gVar = g.this;
                gVar.f6022s = (Intent) gVar.f6021r.get(0);
            }
            Intent intent = g.this.f6022s;
            if (intent != null) {
                String action = intent.getAction();
                int intExtra = g.this.f6022s.getIntExtra("KEY_START_ID", 0);
                m e10 = m.e();
                String str = g.f6014w;
                e10.a(str, "Processing command " + g.this.f6022s + ", " + intExtra);
                Context context = g.this.f6015d;
                PowerManager.WakeLock b10 = t.b(context, action + " (" + intExtra + ")");
                try {
                    m e11 = m.e();
                    e11.a(str, "Acquiring operation wake lock (" + action + ") " + b10);
                    b10.acquire();
                    g gVar2 = g.this;
                    gVar2.f6020q.o(gVar2.f6022s, intExtra, gVar2);
                    m e12 = m.e();
                    e12.a(str, "Releasing operation wake lock (" + action + ") " + b10);
                    b10.release();
                    a10 = g.this.f6016e.a();
                    dVar = new d(g.this);
                } catch (Throwable th2) {
                    try {
                        m e13 = m.e();
                        String str2 = g.f6014w;
                        e13.d(str2, "Unexpected error in onHandleIntent", th2);
                        m e14 = m.e();
                        e14.a(str2, "Releasing operation wake lock (" + action + ") " + b10);
                        b10.release();
                        a10 = g.this.f6016e.a();
                        dVar = new d(g.this);
                    } catch (Throwable th3) {
                        m e15 = m.e();
                        String str3 = g.f6014w;
                        e15.a(str3, "Releasing operation wake lock (" + action + ") " + b10);
                        b10.release();
                        g.this.f6016e.a().execute(new d(g.this));
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
        private final g f6027d;

        /* renamed from: e  reason: collision with root package name */
        private final Intent f6028e;

        /* renamed from: i  reason: collision with root package name */
        private final int f6029i;

        /* JADX INFO: Access modifiers changed from: package-private */
        public b(g gVar, Intent intent, int i10) {
            this.f6027d = gVar;
            this.f6028e = intent;
            this.f6029i = i10;
        }

        @Override // java.lang.Runnable
        public void run() {
            this.f6027d.a(this.f6028e, this.f6029i);
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
        private final g f6030d;

        d(g gVar) {
            this.f6030d = gVar;
        }

        @Override // java.lang.Runnable
        public void run() {
            this.f6030d.d();
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
        synchronized (this.f6021r) {
            try {
                for (Intent intent : this.f6021r) {
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
        PowerManager.WakeLock b10 = t.b(this.f6015d, "ProcessCommand");
        try {
            b10.acquire();
            this.f6019p.q().d(new a());
        } finally {
            b10.release();
        }
    }

    public boolean a(Intent intent, int i10) {
        m e10 = m.e();
        String str = f6014w;
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
            synchronized (this.f6021r) {
                try {
                    boolean isEmpty = this.f6021r.isEmpty();
                    this.f6021r.add(intent);
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
        this.f6016e.a().execute(new b(this, androidx.work.impl.background.systemalarm.b.d(this.f6015d, mVar, z10), 0));
    }

    void d() {
        m e10 = m.e();
        String str = f6014w;
        e10.a(str, "Checking if commands are complete.");
        c();
        synchronized (this.f6021r) {
            try {
                if (this.f6022s != null) {
                    m e11 = m.e();
                    e11.a(str, "Removing command " + this.f6022s);
                    if (((Intent) this.f6021r.remove(0)).equals(this.f6022s)) {
                        this.f6022s = null;
                    } else {
                        throw new IllegalStateException("Dequeue-d command is not the first.");
                    }
                }
                r4.a c10 = this.f6016e.c();
                if (!this.f6020q.n() && this.f6021r.isEmpty() && !c10.w1()) {
                    m.e().a(str, "No more commands & intents.");
                    c cVar = this.f6023t;
                    if (cVar != null) {
                        cVar.b();
                    }
                } else if (!this.f6021r.isEmpty()) {
                    l();
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public u e() {
        return this.f6018o;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public r4.b f() {
        return this.f6016e;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public p0 g() {
        return this.f6019p;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public z h() {
        return this.f6017i;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public n0 i() {
        return this.f6025v;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void k() {
        m.e().a(f6014w, "Destroying SystemAlarmDispatcher");
        this.f6018o.m(this);
        this.f6023t = null;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void m(c cVar) {
        if (this.f6023t != null) {
            m.e().c(f6014w, "A completion listener for SystemAlarmDispatcher already exists.");
        } else {
            this.f6023t = cVar;
        }
    }

    g(Context context, u uVar, p0 p0Var, n0 n0Var) {
        Context applicationContext = context.getApplicationContext();
        this.f6015d = applicationContext;
        this.f6024u = new b0();
        p0Var = p0Var == null ? p0.k(context) : p0Var;
        this.f6019p = p0Var;
        this.f6020q = new androidx.work.impl.background.systemalarm.b(applicationContext, p0Var.i().a(), this.f6024u);
        this.f6017i = new z(p0Var.i().k());
        uVar = uVar == null ? p0Var.m() : uVar;
        this.f6018o = uVar;
        r4.b q10 = p0Var.q();
        this.f6016e = q10;
        this.f6025v = n0Var == null ? new o0(uVar, q10) : n0Var;
        uVar.e(this);
        this.f6021r = new ArrayList();
        this.f6022s = null;
    }
}
