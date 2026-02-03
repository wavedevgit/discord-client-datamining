package androidx.work.impl.background.systemalarm;

import android.content.Context;
import android.os.PowerManager;
import androidx.work.impl.a0;
import androidx.work.impl.background.systemalarm.g;
import java.util.concurrent.Executor;
import k4.m;
import kotlinx.coroutines.CoroutineDispatcher;
import kotlinx.coroutines.Job;
import m4.b;
import o4.n;
import p4.u;
import q4.t;
import q4.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class f implements m4.d, z.a {

    /* renamed from: z */
    private static final String f5589z = m.i("DelayMetCommandHandler");

    /* renamed from: d */
    private final Context f5590d;

    /* renamed from: e */
    private final int f5591e;

    /* renamed from: i */
    private final p4.m f5592i;

    /* renamed from: o */
    private final g f5593o;

    /* renamed from: p */
    private final m4.e f5594p;

    /* renamed from: q */
    private final Object f5595q;

    /* renamed from: r */
    private int f5596r;

    /* renamed from: s */
    private final Executor f5597s;

    /* renamed from: t */
    private final Executor f5598t;

    /* renamed from: u */
    private PowerManager.WakeLock f5599u;

    /* renamed from: v */
    private boolean f5600v;

    /* renamed from: w */
    private final a0 f5601w;

    /* renamed from: x */
    private final CoroutineDispatcher f5602x;

    /* renamed from: y */
    private volatile Job f5603y;

    public f(Context context, int i10, g gVar, a0 a0Var) {
        this.f5590d = context;
        this.f5591e = i10;
        this.f5593o = gVar;
        this.f5592i = a0Var.a();
        this.f5601w = a0Var;
        n o10 = gVar.g().o();
        this.f5597s = gVar.f().c();
        this.f5598t = gVar.f().a();
        this.f5602x = gVar.f().b();
        this.f5594p = new m4.e(o10);
        this.f5600v = false;
        this.f5596r = 0;
        this.f5595q = new Object();
    }

    private void e() {
        synchronized (this.f5595q) {
            try {
                if (this.f5603y != null) {
                    this.f5603y.h(null);
                }
                this.f5593o.h().b(this.f5592i);
                PowerManager.WakeLock wakeLock = this.f5599u;
                if (wakeLock != null && wakeLock.isHeld()) {
                    m e10 = m.e();
                    String str = f5589z;
                    e10.a(str, "Releasing wakelock " + this.f5599u + "for WorkSpec " + this.f5592i);
                    this.f5599u.release();
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public void h() {
        if (this.f5596r == 0) {
            this.f5596r = 1;
            m e10 = m.e();
            String str = f5589z;
            e10.a(str, "onAllConstraintsMet for " + this.f5592i);
            if (this.f5593o.e().o(this.f5601w)) {
                this.f5593o.h().a(this.f5592i, 600000L, this);
                return;
            } else {
                e();
                return;
            }
        }
        m e11 = m.e();
        String str2 = f5589z;
        e11.a(str2, "Already started work for " + this.f5592i);
    }

    public void i() {
        String b10 = this.f5592i.b();
        if (this.f5596r < 2) {
            this.f5596r = 2;
            m e10 = m.e();
            String str = f5589z;
            e10.a(str, "Stopping work for WorkSpec " + b10);
            this.f5598t.execute(new g.b(this.f5593o, b.f(this.f5590d, this.f5592i), this.f5591e));
            if (this.f5593o.e().k(this.f5592i.b())) {
                m e11 = m.e();
                e11.a(str, "WorkSpec " + b10 + " needs to be rescheduled");
                this.f5598t.execute(new g.b(this.f5593o, b.e(this.f5590d, this.f5592i), this.f5591e));
                return;
            }
            m e12 = m.e();
            e12.a(str, "Processor does not have WorkSpec " + b10 + ". No need to reschedule");
            return;
        }
        m e13 = m.e();
        String str2 = f5589z;
        e13.a(str2, "Already stopped work for " + b10);
    }

    @Override // m4.d
    public void a(u uVar, m4.b bVar) {
        if (bVar instanceof b.a) {
            this.f5597s.execute(new e(this));
        } else {
            this.f5597s.execute(new d(this));
        }
    }

    @Override // q4.z.a
    public void b(p4.m mVar) {
        m e10 = m.e();
        String str = f5589z;
        e10.a(str, "Exceeded time limits on execution for " + mVar);
        this.f5597s.execute(new d(this));
    }

    public void f() {
        String b10 = this.f5592i.b();
        Context context = this.f5590d;
        this.f5599u = t.b(context, b10 + " (" + this.f5591e + ")");
        m e10 = m.e();
        String str = f5589z;
        e10.a(str, "Acquiring wakelock " + this.f5599u + "for WorkSpec " + b10);
        this.f5599u.acquire();
        u i10 = this.f5593o.g().p().H().i(b10);
        if (i10 == null) {
            this.f5597s.execute(new d(this));
            return;
        }
        boolean k10 = i10.k();
        this.f5600v = k10;
        if (!k10) {
            m e11 = m.e();
            e11.a(str, "No constraints for " + b10);
            this.f5597s.execute(new e(this));
            return;
        }
        this.f5603y = m4.f.b(this.f5594p, i10, this.f5602x, this);
    }

    public void g(boolean z10) {
        m e10 = m.e();
        String str = f5589z;
        e10.a(str, "onExecuted " + this.f5592i + ", " + z10);
        e();
        if (z10) {
            this.f5598t.execute(new g.b(this.f5593o, b.e(this.f5590d, this.f5592i), this.f5591e));
        }
        if (this.f5600v) {
            this.f5598t.execute(new g.b(this.f5593o, b.a(this.f5590d), this.f5591e));
        }
    }
}
