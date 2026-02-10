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
    private static final String f5696z = m.i("DelayMetCommandHandler");

    /* renamed from: d */
    private final Context f5697d;

    /* renamed from: e */
    private final int f5698e;

    /* renamed from: i */
    private final p4.m f5699i;

    /* renamed from: o */
    private final g f5700o;

    /* renamed from: p */
    private final m4.e f5701p;

    /* renamed from: q */
    private final Object f5702q;

    /* renamed from: r */
    private int f5703r;

    /* renamed from: s */
    private final Executor f5704s;

    /* renamed from: t */
    private final Executor f5705t;

    /* renamed from: u */
    private PowerManager.WakeLock f5706u;

    /* renamed from: v */
    private boolean f5707v;

    /* renamed from: w */
    private final a0 f5708w;

    /* renamed from: x */
    private final CoroutineDispatcher f5709x;

    /* renamed from: y */
    private volatile Job f5710y;

    public f(Context context, int i10, g gVar, a0 a0Var) {
        this.f5697d = context;
        this.f5698e = i10;
        this.f5700o = gVar;
        this.f5699i = a0Var.a();
        this.f5708w = a0Var;
        n o10 = gVar.g().o();
        this.f5704s = gVar.f().c();
        this.f5705t = gVar.f().a();
        this.f5709x = gVar.f().b();
        this.f5701p = new m4.e(o10);
        this.f5707v = false;
        this.f5703r = 0;
        this.f5702q = new Object();
    }

    private void e() {
        synchronized (this.f5702q) {
            try {
                if (this.f5710y != null) {
                    this.f5710y.k(null);
                }
                this.f5700o.h().b(this.f5699i);
                PowerManager.WakeLock wakeLock = this.f5706u;
                if (wakeLock != null && wakeLock.isHeld()) {
                    m e10 = m.e();
                    String str = f5696z;
                    e10.a(str, "Releasing wakelock " + this.f5706u + "for WorkSpec " + this.f5699i);
                    this.f5706u.release();
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public void h() {
        if (this.f5703r == 0) {
            this.f5703r = 1;
            m e10 = m.e();
            String str = f5696z;
            e10.a(str, "onAllConstraintsMet for " + this.f5699i);
            if (this.f5700o.e().o(this.f5708w)) {
                this.f5700o.h().a(this.f5699i, 600000L, this);
                return;
            } else {
                e();
                return;
            }
        }
        m e11 = m.e();
        String str2 = f5696z;
        e11.a(str2, "Already started work for " + this.f5699i);
    }

    public void i() {
        String b10 = this.f5699i.b();
        if (this.f5703r < 2) {
            this.f5703r = 2;
            m e10 = m.e();
            String str = f5696z;
            e10.a(str, "Stopping work for WorkSpec " + b10);
            this.f5705t.execute(new g.b(this.f5700o, b.f(this.f5697d, this.f5699i), this.f5698e));
            if (this.f5700o.e().k(this.f5699i.b())) {
                m e11 = m.e();
                e11.a(str, "WorkSpec " + b10 + " needs to be rescheduled");
                this.f5705t.execute(new g.b(this.f5700o, b.e(this.f5697d, this.f5699i), this.f5698e));
                return;
            }
            m e12 = m.e();
            e12.a(str, "Processor does not have WorkSpec " + b10 + ". No need to reschedule");
            return;
        }
        m e13 = m.e();
        String str2 = f5696z;
        e13.a(str2, "Already stopped work for " + b10);
    }

    @Override // m4.d
    public void a(u uVar, m4.b bVar) {
        if (bVar instanceof b.a) {
            this.f5704s.execute(new e(this));
        } else {
            this.f5704s.execute(new d(this));
        }
    }

    @Override // q4.z.a
    public void b(p4.m mVar) {
        m e10 = m.e();
        String str = f5696z;
        e10.a(str, "Exceeded time limits on execution for " + mVar);
        this.f5704s.execute(new d(this));
    }

    public void f() {
        String b10 = this.f5699i.b();
        Context context = this.f5697d;
        this.f5706u = t.b(context, b10 + " (" + this.f5698e + ")");
        m e10 = m.e();
        String str = f5696z;
        e10.a(str, "Acquiring wakelock " + this.f5706u + "for WorkSpec " + b10);
        this.f5706u.acquire();
        u i10 = this.f5700o.g().p().H().i(b10);
        if (i10 == null) {
            this.f5704s.execute(new d(this));
            return;
        }
        boolean k10 = i10.k();
        this.f5707v = k10;
        if (!k10) {
            m e11 = m.e();
            e11.a(str, "No constraints for " + b10);
            this.f5704s.execute(new e(this));
            return;
        }
        this.f5710y = m4.f.b(this.f5701p, i10, this.f5709x, this);
    }

    public void g(boolean z10) {
        m e10 = m.e();
        String str = f5696z;
        e10.a(str, "onExecuted " + this.f5699i + ", " + z10);
        e();
        if (z10) {
            this.f5705t.execute(new g.b(this.f5700o, b.e(this.f5697d, this.f5699i), this.f5698e));
        }
        if (this.f5707v) {
            this.f5705t.execute(new g.b(this.f5700o, b.a(this.f5697d), this.f5698e));
        }
    }
}
