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
    private static final String f5670z = m.i("DelayMetCommandHandler");

    /* renamed from: d */
    private final Context f5671d;

    /* renamed from: e */
    private final int f5672e;

    /* renamed from: i */
    private final p4.m f5673i;

    /* renamed from: o */
    private final g f5674o;

    /* renamed from: p */
    private final m4.e f5675p;

    /* renamed from: q */
    private final Object f5676q;

    /* renamed from: r */
    private int f5677r;

    /* renamed from: s */
    private final Executor f5678s;

    /* renamed from: t */
    private final Executor f5679t;

    /* renamed from: u */
    private PowerManager.WakeLock f5680u;

    /* renamed from: v */
    private boolean f5681v;

    /* renamed from: w */
    private final a0 f5682w;

    /* renamed from: x */
    private final CoroutineDispatcher f5683x;

    /* renamed from: y */
    private volatile Job f5684y;

    public f(Context context, int i10, g gVar, a0 a0Var) {
        this.f5671d = context;
        this.f5672e = i10;
        this.f5674o = gVar;
        this.f5673i = a0Var.a();
        this.f5682w = a0Var;
        n o10 = gVar.g().o();
        this.f5678s = gVar.f().c();
        this.f5679t = gVar.f().a();
        this.f5683x = gVar.f().b();
        this.f5675p = new m4.e(o10);
        this.f5681v = false;
        this.f5677r = 0;
        this.f5676q = new Object();
    }

    private void e() {
        synchronized (this.f5676q) {
            try {
                if (this.f5684y != null) {
                    this.f5684y.h(null);
                }
                this.f5674o.h().b(this.f5673i);
                PowerManager.WakeLock wakeLock = this.f5680u;
                if (wakeLock != null && wakeLock.isHeld()) {
                    m e10 = m.e();
                    String str = f5670z;
                    e10.a(str, "Releasing wakelock " + this.f5680u + "for WorkSpec " + this.f5673i);
                    this.f5680u.release();
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public void h() {
        if (this.f5677r == 0) {
            this.f5677r = 1;
            m e10 = m.e();
            String str = f5670z;
            e10.a(str, "onAllConstraintsMet for " + this.f5673i);
            if (this.f5674o.e().o(this.f5682w)) {
                this.f5674o.h().a(this.f5673i, 600000L, this);
                return;
            } else {
                e();
                return;
            }
        }
        m e11 = m.e();
        String str2 = f5670z;
        e11.a(str2, "Already started work for " + this.f5673i);
    }

    public void i() {
        String b10 = this.f5673i.b();
        if (this.f5677r < 2) {
            this.f5677r = 2;
            m e10 = m.e();
            String str = f5670z;
            e10.a(str, "Stopping work for WorkSpec " + b10);
            this.f5679t.execute(new g.b(this.f5674o, b.f(this.f5671d, this.f5673i), this.f5672e));
            if (this.f5674o.e().k(this.f5673i.b())) {
                m e11 = m.e();
                e11.a(str, "WorkSpec " + b10 + " needs to be rescheduled");
                this.f5679t.execute(new g.b(this.f5674o, b.e(this.f5671d, this.f5673i), this.f5672e));
                return;
            }
            m e12 = m.e();
            e12.a(str, "Processor does not have WorkSpec " + b10 + ". No need to reschedule");
            return;
        }
        m e13 = m.e();
        String str2 = f5670z;
        e13.a(str2, "Already stopped work for " + b10);
    }

    @Override // m4.d
    public void a(u uVar, m4.b bVar) {
        if (bVar instanceof b.a) {
            this.f5678s.execute(new e(this));
        } else {
            this.f5678s.execute(new d(this));
        }
    }

    @Override // q4.z.a
    public void b(p4.m mVar) {
        m e10 = m.e();
        String str = f5670z;
        e10.a(str, "Exceeded time limits on execution for " + mVar);
        this.f5678s.execute(new d(this));
    }

    public void f() {
        String b10 = this.f5673i.b();
        Context context = this.f5671d;
        this.f5680u = t.b(context, b10 + " (" + this.f5672e + ")");
        m e10 = m.e();
        String str = f5670z;
        e10.a(str, "Acquiring wakelock " + this.f5680u + "for WorkSpec " + b10);
        this.f5680u.acquire();
        u i10 = this.f5674o.g().p().H().i(b10);
        if (i10 == null) {
            this.f5678s.execute(new d(this));
            return;
        }
        boolean k10 = i10.k();
        this.f5681v = k10;
        if (!k10) {
            m e11 = m.e();
            e11.a(str, "No constraints for " + b10);
            this.f5678s.execute(new e(this));
            return;
        }
        this.f5684y = m4.f.b(this.f5675p, i10, this.f5683x, this);
    }

    public void g(boolean z10) {
        m e10 = m.e();
        String str = f5670z;
        e10.a(str, "onExecuted " + this.f5673i + ", " + z10);
        e();
        if (z10) {
            this.f5679t.execute(new g.b(this.f5674o, b.e(this.f5671d, this.f5673i), this.f5672e));
        }
        if (this.f5681v) {
            this.f5679t.execute(new g.b(this.f5674o, b.a(this.f5671d), this.f5672e));
        }
    }
}
