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
    private static final String f5999z = m.i("DelayMetCommandHandler");

    /* renamed from: d */
    private final Context f6000d;

    /* renamed from: e */
    private final int f6001e;

    /* renamed from: i */
    private final p4.m f6002i;

    /* renamed from: o */
    private final g f6003o;

    /* renamed from: p */
    private final m4.e f6004p;

    /* renamed from: q */
    private final Object f6005q;

    /* renamed from: r */
    private int f6006r;

    /* renamed from: s */
    private final Executor f6007s;

    /* renamed from: t */
    private final Executor f6008t;

    /* renamed from: u */
    private PowerManager.WakeLock f6009u;

    /* renamed from: v */
    private boolean f6010v;

    /* renamed from: w */
    private final a0 f6011w;

    /* renamed from: x */
    private final CoroutineDispatcher f6012x;

    /* renamed from: y */
    private volatile Job f6013y;

    public f(Context context, int i10, g gVar, a0 a0Var) {
        this.f6000d = context;
        this.f6001e = i10;
        this.f6003o = gVar;
        this.f6002i = a0Var.a();
        this.f6011w = a0Var;
        n o10 = gVar.g().o();
        this.f6007s = gVar.f().c();
        this.f6008t = gVar.f().a();
        this.f6012x = gVar.f().b();
        this.f6004p = new m4.e(o10);
        this.f6010v = false;
        this.f6006r = 0;
        this.f6005q = new Object();
    }

    private void e() {
        synchronized (this.f6005q) {
            try {
                if (this.f6013y != null) {
                    this.f6013y.k(null);
                }
                this.f6003o.h().b(this.f6002i);
                PowerManager.WakeLock wakeLock = this.f6009u;
                if (wakeLock != null && wakeLock.isHeld()) {
                    m e10 = m.e();
                    String str = f5999z;
                    e10.a(str, "Releasing wakelock " + this.f6009u + "for WorkSpec " + this.f6002i);
                    this.f6009u.release();
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public void h() {
        if (this.f6006r == 0) {
            this.f6006r = 1;
            m e10 = m.e();
            String str = f5999z;
            e10.a(str, "onAllConstraintsMet for " + this.f6002i);
            if (this.f6003o.e().o(this.f6011w)) {
                this.f6003o.h().a(this.f6002i, 600000L, this);
                return;
            } else {
                e();
                return;
            }
        }
        m e11 = m.e();
        String str2 = f5999z;
        e11.a(str2, "Already started work for " + this.f6002i);
    }

    public void i() {
        String b10 = this.f6002i.b();
        if (this.f6006r < 2) {
            this.f6006r = 2;
            m e10 = m.e();
            String str = f5999z;
            e10.a(str, "Stopping work for WorkSpec " + b10);
            this.f6008t.execute(new g.b(this.f6003o, b.f(this.f6000d, this.f6002i), this.f6001e));
            if (this.f6003o.e().k(this.f6002i.b())) {
                m e11 = m.e();
                e11.a(str, "WorkSpec " + b10 + " needs to be rescheduled");
                this.f6008t.execute(new g.b(this.f6003o, b.e(this.f6000d, this.f6002i), this.f6001e));
                return;
            }
            m e12 = m.e();
            e12.a(str, "Processor does not have WorkSpec " + b10 + ". No need to reschedule");
            return;
        }
        m e13 = m.e();
        String str2 = f5999z;
        e13.a(str2, "Already stopped work for " + b10);
    }

    @Override // m4.d
    public void a(u uVar, m4.b bVar) {
        if (bVar instanceof b.a) {
            this.f6007s.execute(new e(this));
        } else {
            this.f6007s.execute(new d(this));
        }
    }

    @Override // q4.z.a
    public void b(p4.m mVar) {
        m e10 = m.e();
        String str = f5999z;
        e10.a(str, "Exceeded time limits on execution for " + mVar);
        this.f6007s.execute(new d(this));
    }

    public void f() {
        String b10 = this.f6002i.b();
        Context context = this.f6000d;
        this.f6009u = t.b(context, b10 + " (" + this.f6001e + ")");
        m e10 = m.e();
        String str = f5999z;
        e10.a(str, "Acquiring wakelock " + this.f6009u + "for WorkSpec " + b10);
        this.f6009u.acquire();
        u i10 = this.f6003o.g().p().H().i(b10);
        if (i10 == null) {
            this.f6007s.execute(new d(this));
            return;
        }
        boolean k10 = i10.k();
        this.f6010v = k10;
        if (!k10) {
            m e11 = m.e();
            e11.a(str, "No constraints for " + b10);
            this.f6007s.execute(new e(this));
            return;
        }
        this.f6013y = m4.f.b(this.f6004p, i10, this.f6012x, this);
    }

    public void g(boolean z10) {
        m e10 = m.e();
        String str = f5999z;
        e10.a(str, "onExecuted " + this.f6002i + ", " + z10);
        e();
        if (z10) {
            this.f6008t.execute(new g.b(this.f6003o, b.e(this.f6000d, this.f6002i), this.f6001e));
        }
        if (this.f6010v) {
            this.f6008t.execute(new g.b(this.f6003o, b.a(this.f6000d), this.f6001e));
        }
    }
}
