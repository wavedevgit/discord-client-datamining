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
    private static final String f5706z = m.i("DelayMetCommandHandler");

    /* renamed from: d */
    private final Context f5707d;

    /* renamed from: e */
    private final int f5708e;

    /* renamed from: i */
    private final p4.m f5709i;

    /* renamed from: o */
    private final g f5710o;

    /* renamed from: p */
    private final m4.e f5711p;

    /* renamed from: q */
    private final Object f5712q;

    /* renamed from: r */
    private int f5713r;

    /* renamed from: s */
    private final Executor f5714s;

    /* renamed from: t */
    private final Executor f5715t;

    /* renamed from: u */
    private PowerManager.WakeLock f5716u;

    /* renamed from: v */
    private boolean f5717v;

    /* renamed from: w */
    private final a0 f5718w;

    /* renamed from: x */
    private final CoroutineDispatcher f5719x;

    /* renamed from: y */
    private volatile Job f5720y;

    public f(Context context, int i10, g gVar, a0 a0Var) {
        this.f5707d = context;
        this.f5708e = i10;
        this.f5710o = gVar;
        this.f5709i = a0Var.a();
        this.f5718w = a0Var;
        n o10 = gVar.g().o();
        this.f5714s = gVar.f().c();
        this.f5715t = gVar.f().a();
        this.f5719x = gVar.f().b();
        this.f5711p = new m4.e(o10);
        this.f5717v = false;
        this.f5713r = 0;
        this.f5712q = new Object();
    }

    private void e() {
        synchronized (this.f5712q) {
            try {
                if (this.f5720y != null) {
                    this.f5720y.i(null);
                }
                this.f5710o.h().b(this.f5709i);
                PowerManager.WakeLock wakeLock = this.f5716u;
                if (wakeLock != null && wakeLock.isHeld()) {
                    m e10 = m.e();
                    String str = f5706z;
                    e10.a(str, "Releasing wakelock " + this.f5716u + "for WorkSpec " + this.f5709i);
                    this.f5716u.release();
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public void h() {
        if (this.f5713r == 0) {
            this.f5713r = 1;
            m e10 = m.e();
            String str = f5706z;
            e10.a(str, "onAllConstraintsMet for " + this.f5709i);
            if (this.f5710o.e().o(this.f5718w)) {
                this.f5710o.h().a(this.f5709i, 600000L, this);
                return;
            } else {
                e();
                return;
            }
        }
        m e11 = m.e();
        String str2 = f5706z;
        e11.a(str2, "Already started work for " + this.f5709i);
    }

    public void i() {
        String b10 = this.f5709i.b();
        if (this.f5713r < 2) {
            this.f5713r = 2;
            m e10 = m.e();
            String str = f5706z;
            e10.a(str, "Stopping work for WorkSpec " + b10);
            this.f5715t.execute(new g.b(this.f5710o, b.f(this.f5707d, this.f5709i), this.f5708e));
            if (this.f5710o.e().k(this.f5709i.b())) {
                m e11 = m.e();
                e11.a(str, "WorkSpec " + b10 + " needs to be rescheduled");
                this.f5715t.execute(new g.b(this.f5710o, b.e(this.f5707d, this.f5709i), this.f5708e));
                return;
            }
            m e12 = m.e();
            e12.a(str, "Processor does not have WorkSpec " + b10 + ". No need to reschedule");
            return;
        }
        m e13 = m.e();
        String str2 = f5706z;
        e13.a(str2, "Already stopped work for " + b10);
    }

    @Override // m4.d
    public void a(u uVar, m4.b bVar) {
        if (bVar instanceof b.a) {
            this.f5714s.execute(new e(this));
        } else {
            this.f5714s.execute(new d(this));
        }
    }

    @Override // q4.z.a
    public void b(p4.m mVar) {
        m e10 = m.e();
        String str = f5706z;
        e10.a(str, "Exceeded time limits on execution for " + mVar);
        this.f5714s.execute(new d(this));
    }

    public void f() {
        String b10 = this.f5709i.b();
        Context context = this.f5707d;
        this.f5716u = t.b(context, b10 + " (" + this.f5708e + ")");
        m e10 = m.e();
        String str = f5706z;
        e10.a(str, "Acquiring wakelock " + this.f5716u + "for WorkSpec " + b10);
        this.f5716u.acquire();
        u i10 = this.f5710o.g().p().H().i(b10);
        if (i10 == null) {
            this.f5714s.execute(new d(this));
            return;
        }
        boolean k10 = i10.k();
        this.f5717v = k10;
        if (!k10) {
            m e11 = m.e();
            e11.a(str, "No constraints for " + b10);
            this.f5714s.execute(new e(this));
            return;
        }
        this.f5720y = m4.f.b(this.f5711p, i10, this.f5719x, this);
    }

    public void g(boolean z10) {
        m e10 = m.e();
        String str = f5706z;
        e10.a(str, "onExecuted " + this.f5709i + ", " + z10);
        e();
        if (z10) {
            this.f5715t.execute(new g.b(this.f5710o, b.e(this.f5707d, this.f5709i), this.f5708e));
        }
        if (this.f5717v) {
            this.f5715t.execute(new g.b(this.f5710o, b.a(this.f5707d), this.f5708e));
        }
    }
}
