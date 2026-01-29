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
    private static final String f5545z = m.i("DelayMetCommandHandler");

    /* renamed from: d */
    private final Context f5546d;

    /* renamed from: e */
    private final int f5547e;

    /* renamed from: i */
    private final p4.m f5548i;

    /* renamed from: o */
    private final g f5549o;

    /* renamed from: p */
    private final m4.e f5550p;

    /* renamed from: q */
    private final Object f5551q;

    /* renamed from: r */
    private int f5552r;

    /* renamed from: s */
    private final Executor f5553s;

    /* renamed from: t */
    private final Executor f5554t;

    /* renamed from: u */
    private PowerManager.WakeLock f5555u;

    /* renamed from: v */
    private boolean f5556v;

    /* renamed from: w */
    private final a0 f5557w;

    /* renamed from: x */
    private final CoroutineDispatcher f5558x;

    /* renamed from: y */
    private volatile Job f5559y;

    public f(Context context, int i10, g gVar, a0 a0Var) {
        this.f5546d = context;
        this.f5547e = i10;
        this.f5549o = gVar;
        this.f5548i = a0Var.a();
        this.f5557w = a0Var;
        n o10 = gVar.g().o();
        this.f5553s = gVar.f().c();
        this.f5554t = gVar.f().a();
        this.f5558x = gVar.f().b();
        this.f5550p = new m4.e(o10);
        this.f5556v = false;
        this.f5552r = 0;
        this.f5551q = new Object();
    }

    private void e() {
        synchronized (this.f5551q) {
            try {
                if (this.f5559y != null) {
                    this.f5559y.h(null);
                }
                this.f5549o.h().b(this.f5548i);
                PowerManager.WakeLock wakeLock = this.f5555u;
                if (wakeLock != null && wakeLock.isHeld()) {
                    m e10 = m.e();
                    String str = f5545z;
                    e10.a(str, "Releasing wakelock " + this.f5555u + "for WorkSpec " + this.f5548i);
                    this.f5555u.release();
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public void h() {
        if (this.f5552r == 0) {
            this.f5552r = 1;
            m e10 = m.e();
            String str = f5545z;
            e10.a(str, "onAllConstraintsMet for " + this.f5548i);
            if (this.f5549o.e().o(this.f5557w)) {
                this.f5549o.h().a(this.f5548i, 600000L, this);
                return;
            } else {
                e();
                return;
            }
        }
        m e11 = m.e();
        String str2 = f5545z;
        e11.a(str2, "Already started work for " + this.f5548i);
    }

    public void i() {
        String b10 = this.f5548i.b();
        if (this.f5552r < 2) {
            this.f5552r = 2;
            m e10 = m.e();
            String str = f5545z;
            e10.a(str, "Stopping work for WorkSpec " + b10);
            this.f5554t.execute(new g.b(this.f5549o, b.f(this.f5546d, this.f5548i), this.f5547e));
            if (this.f5549o.e().k(this.f5548i.b())) {
                m e11 = m.e();
                e11.a(str, "WorkSpec " + b10 + " needs to be rescheduled");
                this.f5554t.execute(new g.b(this.f5549o, b.e(this.f5546d, this.f5548i), this.f5547e));
                return;
            }
            m e12 = m.e();
            e12.a(str, "Processor does not have WorkSpec " + b10 + ". No need to reschedule");
            return;
        }
        m e13 = m.e();
        String str2 = f5545z;
        e13.a(str2, "Already stopped work for " + b10);
    }

    @Override // m4.d
    public void a(u uVar, m4.b bVar) {
        if (bVar instanceof b.a) {
            this.f5553s.execute(new e(this));
        } else {
            this.f5553s.execute(new d(this));
        }
    }

    @Override // q4.z.a
    public void b(p4.m mVar) {
        m e10 = m.e();
        String str = f5545z;
        e10.a(str, "Exceeded time limits on execution for " + mVar);
        this.f5553s.execute(new d(this));
    }

    public void f() {
        String b10 = this.f5548i.b();
        Context context = this.f5546d;
        this.f5555u = t.b(context, b10 + " (" + this.f5547e + ")");
        m e10 = m.e();
        String str = f5545z;
        e10.a(str, "Acquiring wakelock " + this.f5555u + "for WorkSpec " + b10);
        this.f5555u.acquire();
        u i10 = this.f5549o.g().p().H().i(b10);
        if (i10 == null) {
            this.f5553s.execute(new d(this));
            return;
        }
        boolean k10 = i10.k();
        this.f5556v = k10;
        if (!k10) {
            m e11 = m.e();
            e11.a(str, "No constraints for " + b10);
            this.f5553s.execute(new e(this));
            return;
        }
        this.f5559y = m4.f.b(this.f5550p, i10, this.f5558x, this);
    }

    public void g(boolean z10) {
        m e10 = m.e();
        String str = f5545z;
        e10.a(str, "onExecuted " + this.f5548i + ", " + z10);
        e();
        if (z10) {
            this.f5554t.execute(new g.b(this.f5549o, b.e(this.f5546d, this.f5548i), this.f5547e));
        }
        if (this.f5556v) {
            this.f5554t.execute(new g.b(this.f5549o, b.a(this.f5546d), this.f5547e));
        }
    }
}
