package l4;

import android.content.Context;
import android.text.TextUtils;
import androidx.work.impl.a0;
import androidx.work.impl.b0;
import androidx.work.impl.f;
import androidx.work.impl.n0;
import androidx.work.impl.u;
import androidx.work.impl.w;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import k4.m;
import kotlinx.coroutines.Job;
import m4.b;
import m4.e;
import o4.n;
import p4.x;
import q4.o;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class b implements w, m4.d, f {

    /* renamed from: z  reason: collision with root package name */
    private static final String f36417z = m.i("GreedyScheduler");

    /* renamed from: d  reason: collision with root package name */
    private final Context f36418d;

    /* renamed from: i  reason: collision with root package name */
    private l4.a f36420i;

    /* renamed from: o  reason: collision with root package name */
    private boolean f36421o;

    /* renamed from: r  reason: collision with root package name */
    private final u f36424r;

    /* renamed from: s  reason: collision with root package name */
    private final n0 f36425s;

    /* renamed from: t  reason: collision with root package name */
    private final androidx.work.a f36426t;

    /* renamed from: v  reason: collision with root package name */
    Boolean f36428v;

    /* renamed from: w  reason: collision with root package name */
    private final e f36429w;

    /* renamed from: x  reason: collision with root package name */
    private final r4.b f36430x;

    /* renamed from: y  reason: collision with root package name */
    private final d f36431y;

    /* renamed from: e  reason: collision with root package name */
    private final Map f36419e = new HashMap();

    /* renamed from: p  reason: collision with root package name */
    private final Object f36422p = new Object();

    /* renamed from: q  reason: collision with root package name */
    private final b0 f36423q = new b0();

    /* renamed from: u  reason: collision with root package name */
    private final Map f36427u = new HashMap();

    /* JADX INFO: Access modifiers changed from: private */
    /* renamed from: l4.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class C0465b {

        /* renamed from: a  reason: collision with root package name */
        final int f36432a;

        /* renamed from: b  reason: collision with root package name */
        final long f36433b;

        private C0465b(int i10, long j10) {
            this.f36432a = i10;
            this.f36433b = j10;
        }
    }

    public b(Context context, androidx.work.a aVar, n nVar, u uVar, n0 n0Var, r4.b bVar) {
        this.f36418d = context;
        k4.u k10 = aVar.k();
        this.f36420i = new l4.a(this, k10, aVar.a());
        this.f36431y = new d(k10, n0Var);
        this.f36430x = bVar;
        this.f36429w = new e(nVar);
        this.f36426t = aVar;
        this.f36424r = uVar;
        this.f36425s = n0Var;
    }

    private void f() {
        this.f36428v = Boolean.valueOf(o.b(this.f36418d, this.f36426t));
    }

    private void g() {
        if (!this.f36421o) {
            this.f36424r.e(this);
            this.f36421o = true;
        }
    }

    private void h(p4.m mVar) {
        Job job;
        synchronized (this.f36422p) {
            job = (Job) this.f36419e.remove(mVar);
        }
        if (job != null) {
            m e10 = m.e();
            String str = f36417z;
            e10.a(str, "Stopping tracking for " + mVar);
            job.h(null);
        }
    }

    private long i(p4.u uVar) {
        long max;
        synchronized (this.f36422p) {
            try {
                p4.m a10 = x.a(uVar);
                C0465b c0465b = (C0465b) this.f36427u.get(a10);
                if (c0465b == null) {
                    c0465b = new C0465b(uVar.f44968k, this.f36426t.a().a());
                    this.f36427u.put(a10, c0465b);
                }
                max = c0465b.f36433b + (Math.max((uVar.f44968k - c0465b.f36432a) - 5, 0) * 30000);
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return max;
    }

    @Override // m4.d
    public void a(p4.u uVar, m4.b bVar) {
        p4.m a10 = x.a(uVar);
        if (bVar instanceof b.a) {
            if (!this.f36423q.a(a10)) {
                m e10 = m.e();
                String str = f36417z;
                e10.a(str, "Constraints met: Scheduling work ID " + a10);
                a0 d10 = this.f36423q.d(a10);
                this.f36431y.c(d10);
                this.f36425s.c(d10);
                return;
            }
            return;
        }
        m e11 = m.e();
        String str2 = f36417z;
        e11.a(str2, "Constraints not met: Cancelling work ID " + a10);
        a0 b10 = this.f36423q.b(a10);
        if (b10 != null) {
            this.f36431y.b(b10);
            this.f36425s.b(b10, ((b.C0481b) bVar).a());
        }
    }

    @Override // androidx.work.impl.f
    public void b(p4.m mVar, boolean z10) {
        a0 b10 = this.f36423q.b(mVar);
        if (b10 != null) {
            this.f36431y.b(b10);
        }
        h(mVar);
        if (!z10) {
            synchronized (this.f36422p) {
                this.f36427u.remove(mVar);
            }
        }
    }

    @Override // androidx.work.impl.w
    public void c(String str) {
        if (this.f36428v == null) {
            f();
        }
        if (!this.f36428v.booleanValue()) {
            m.e().f(f36417z, "Ignoring schedule request in non-main process");
            return;
        }
        g();
        m e10 = m.e();
        String str2 = f36417z;
        e10.a(str2, "Cancelling work ID " + str);
        l4.a aVar = this.f36420i;
        if (aVar != null) {
            aVar.b(str);
        }
        for (a0 a0Var : this.f36423q.c(str)) {
            this.f36431y.b(a0Var);
            this.f36425s.e(a0Var);
        }
    }

    @Override // androidx.work.impl.w
    public boolean d() {
        return false;
    }

    @Override // androidx.work.impl.w
    public void e(p4.u... uVarArr) {
        if (this.f36428v == null) {
            f();
        }
        if (!this.f36428v.booleanValue()) {
            m.e().f(f36417z, "Ignoring schedule request in a secondary process");
            return;
        }
        g();
        HashSet<p4.u> hashSet = new HashSet();
        HashSet hashSet2 = new HashSet();
        for (p4.u uVar : uVarArr) {
            if (!this.f36423q.a(x.a(uVar))) {
                long max = Math.max(uVar.c(), i(uVar));
                long a10 = this.f36426t.a().a();
                if (uVar.f44959b == k4.x.ENQUEUED) {
                    if (a10 < max) {
                        l4.a aVar = this.f36420i;
                        if (aVar != null) {
                            aVar.a(uVar, max);
                        }
                    } else if (uVar.k()) {
                        if (uVar.f44967j.h()) {
                            m.e().a(f36417z, "Ignoring " + uVar + ". Requires device idle.");
                        } else if (uVar.f44967j.e()) {
                            m.e().a(f36417z, "Ignoring " + uVar + ". Requires ContentUri triggers.");
                        } else {
                            hashSet.add(uVar);
                            hashSet2.add(uVar.f44958a);
                        }
                    } else if (!this.f36423q.a(x.a(uVar))) {
                        m.e().a(f36417z, "Starting work for " + uVar.f44958a);
                        a0 e10 = this.f36423q.e(uVar);
                        this.f36431y.c(e10);
                        this.f36425s.c(e10);
                    }
                }
            }
        }
        synchronized (this.f36422p) {
            try {
                if (!hashSet.isEmpty()) {
                    String join = TextUtils.join(",", hashSet2);
                    m.e().a(f36417z, "Starting tracking for " + join);
                    for (p4.u uVar2 : hashSet) {
                        p4.m a11 = x.a(uVar2);
                        if (!this.f36419e.containsKey(a11)) {
                            this.f36419e.put(a11, m4.f.b(this.f36429w, uVar2, this.f36430x.b(), this));
                        }
                    }
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }
}
