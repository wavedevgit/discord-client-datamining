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
    private static final String f5558z = m.i("DelayMetCommandHandler");

    /* renamed from: d */
    private final Context f5559d;

    /* renamed from: e */
    private final int f5560e;

    /* renamed from: i */
    private final p4.m f5561i;

    /* renamed from: o */
    private final g f5562o;

    /* renamed from: p */
    private final m4.e f5563p;

    /* renamed from: q */
    private final Object f5564q;

    /* renamed from: r */
    private int f5565r;

    /* renamed from: s */
    private final Executor f5566s;

    /* renamed from: t */
    private final Executor f5567t;

    /* renamed from: u */
    private PowerManager.WakeLock f5568u;

    /* renamed from: v */
    private boolean f5569v;

    /* renamed from: w */
    private final a0 f5570w;

    /* renamed from: x */
    private final CoroutineDispatcher f5571x;

    /* renamed from: y */
    private volatile Job f5572y;

    public f(Context context, int i10, g gVar, a0 a0Var) {
        this.f5559d = context;
        this.f5560e = i10;
        this.f5562o = gVar;
        this.f5561i = a0Var.a();
        this.f5570w = a0Var;
        n o10 = gVar.g().o();
        this.f5566s = gVar.f().c();
        this.f5567t = gVar.f().a();
        this.f5571x = gVar.f().b();
        this.f5563p = new m4.e(o10);
        this.f5569v = false;
        this.f5565r = 0;
        this.f5564q = new Object();
    }

    private void e() {
        synchronized (this.f5564q) {
            try {
                if (this.f5572y != null) {
                    this.f5572y.h(null);
                }
                this.f5562o.h().b(this.f5561i);
                PowerManager.WakeLock wakeLock = this.f5568u;
                if (wakeLock != null && wakeLock.isHeld()) {
                    m e10 = m.e();
                    String str = f5558z;
                    e10.a(str, "Releasing wakelock " + this.f5568u + "for WorkSpec " + this.f5561i);
                    this.f5568u.release();
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public void h() {
        if (this.f5565r == 0) {
            this.f5565r = 1;
            m e10 = m.e();
            String str = f5558z;
            e10.a(str, "onAllConstraintsMet for " + this.f5561i);
            if (this.f5562o.e().o(this.f5570w)) {
                this.f5562o.h().a(this.f5561i, 600000L, this);
                return;
            } else {
                e();
                return;
            }
        }
        m e11 = m.e();
        String str2 = f5558z;
        e11.a(str2, "Already started work for " + this.f5561i);
    }

    public void i() {
        String b10 = this.f5561i.b();
        if (this.f5565r < 2) {
            this.f5565r = 2;
            m e10 = m.e();
            String str = f5558z;
            e10.a(str, "Stopping work for WorkSpec " + b10);
            this.f5567t.execute(new g.b(this.f5562o, b.f(this.f5559d, this.f5561i), this.f5560e));
            if (this.f5562o.e().k(this.f5561i.b())) {
                m e11 = m.e();
                e11.a(str, "WorkSpec " + b10 + " needs to be rescheduled");
                this.f5567t.execute(new g.b(this.f5562o, b.e(this.f5559d, this.f5561i), this.f5560e));
                return;
            }
            m e12 = m.e();
            e12.a(str, "Processor does not have WorkSpec " + b10 + ". No need to reschedule");
            return;
        }
        m e13 = m.e();
        String str2 = f5558z;
        e13.a(str2, "Already stopped work for " + b10);
    }

    @Override // m4.d
    public void a(u uVar, m4.b bVar) {
        if (bVar instanceof b.a) {
            this.f5566s.execute(new e(this));
        } else {
            this.f5566s.execute(new d(this));
        }
    }

    @Override // q4.z.a
    public void b(p4.m mVar) {
        m e10 = m.e();
        String str = f5558z;
        e10.a(str, "Exceeded time limits on execution for " + mVar);
        this.f5566s.execute(new d(this));
    }

    public void f() {
        String b10 = this.f5561i.b();
        Context context = this.f5559d;
        this.f5568u = t.b(context, b10 + " (" + this.f5560e + ")");
        m e10 = m.e();
        String str = f5558z;
        e10.a(str, "Acquiring wakelock " + this.f5568u + "for WorkSpec " + b10);
        this.f5568u.acquire();
        u i10 = this.f5562o.g().p().H().i(b10);
        if (i10 == null) {
            this.f5566s.execute(new d(this));
            return;
        }
        boolean k10 = i10.k();
        this.f5569v = k10;
        if (!k10) {
            m e11 = m.e();
            e11.a(str, "No constraints for " + b10);
            this.f5566s.execute(new e(this));
            return;
        }
        this.f5572y = m4.f.b(this.f5563p, i10, this.f5571x, this);
    }

    public void g(boolean z10) {
        m e10 = m.e();
        String str = f5558z;
        e10.a(str, "onExecuted " + this.f5561i + ", " + z10);
        e();
        if (z10) {
            this.f5567t.execute(new g.b(this.f5562o, b.e(this.f5559d, this.f5561i), this.f5560e));
        }
        if (this.f5569v) {
            this.f5567t.execute(new g.b(this.f5562o, b.a(this.f5559d), this.f5560e));
        }
    }
}
