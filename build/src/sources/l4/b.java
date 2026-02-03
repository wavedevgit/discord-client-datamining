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
    private static final String f36948z = m.i("GreedyScheduler");

    /* renamed from: d  reason: collision with root package name */
    private final Context f36949d;

    /* renamed from: i  reason: collision with root package name */
    private l4.a f36951i;

    /* renamed from: o  reason: collision with root package name */
    private boolean f36952o;

    /* renamed from: r  reason: collision with root package name */
    private final u f36955r;

    /* renamed from: s  reason: collision with root package name */
    private final n0 f36956s;

    /* renamed from: t  reason: collision with root package name */
    private final androidx.work.a f36957t;

    /* renamed from: v  reason: collision with root package name */
    Boolean f36959v;

    /* renamed from: w  reason: collision with root package name */
    private final e f36960w;

    /* renamed from: x  reason: collision with root package name */
    private final r4.b f36961x;

    /* renamed from: y  reason: collision with root package name */
    private final d f36962y;

    /* renamed from: e  reason: collision with root package name */
    private final Map f36950e = new HashMap();

    /* renamed from: p  reason: collision with root package name */
    private final Object f36953p = new Object();

    /* renamed from: q  reason: collision with root package name */
    private final b0 f36954q = new b0();

    /* renamed from: u  reason: collision with root package name */
    private final Map f36958u = new HashMap();

    /* JADX INFO: Access modifiers changed from: private */
    /* renamed from: l4.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class C0481b {

        /* renamed from: a  reason: collision with root package name */
        final int f36963a;

        /* renamed from: b  reason: collision with root package name */
        final long f36964b;

        private C0481b(int i10, long j10) {
            this.f36963a = i10;
            this.f36964b = j10;
        }
    }

    public b(Context context, androidx.work.a aVar, n nVar, u uVar, n0 n0Var, r4.b bVar) {
        this.f36949d = context;
        k4.u k10 = aVar.k();
        this.f36951i = new l4.a(this, k10, aVar.a());
        this.f36962y = new d(k10, n0Var);
        this.f36961x = bVar;
        this.f36960w = new e(nVar);
        this.f36957t = aVar;
        this.f36955r = uVar;
        this.f36956s = n0Var;
    }

    private void f() {
        this.f36959v = Boolean.valueOf(o.b(this.f36949d, this.f36957t));
    }

    private void g() {
        if (!this.f36952o) {
            this.f36955r.e(this);
            this.f36952o = true;
        }
    }

    private void h(p4.m mVar) {
        Job job;
        synchronized (this.f36953p) {
            job = (Job) this.f36950e.remove(mVar);
        }
        if (job != null) {
            m e10 = m.e();
            String str = f36948z;
            e10.a(str, "Stopping tracking for " + mVar);
            job.h(null);
        }
    }

    private long i(p4.u uVar) {
        long max;
        synchronized (this.f36953p) {
            try {
                p4.m a10 = x.a(uVar);
                C0481b c0481b = (C0481b) this.f36958u.get(a10);
                if (c0481b == null) {
                    c0481b = new C0481b(uVar.f45010k, this.f36957t.a().a());
                    this.f36958u.put(a10, c0481b);
                }
                max = c0481b.f36964b + (Math.max((uVar.f45010k - c0481b.f36963a) - 5, 0) * 30000);
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
            if (!this.f36954q.a(a10)) {
                m e10 = m.e();
                String str = f36948z;
                e10.a(str, "Constraints met: Scheduling work ID " + a10);
                a0 d10 = this.f36954q.d(a10);
                this.f36962y.c(d10);
                this.f36956s.c(d10);
                return;
            }
            return;
        }
        m e11 = m.e();
        String str2 = f36948z;
        e11.a(str2, "Constraints not met: Cancelling work ID " + a10);
        a0 b10 = this.f36954q.b(a10);
        if (b10 != null) {
            this.f36962y.b(b10);
            this.f36956s.b(b10, ((b.C0502b) bVar).a());
        }
    }

    @Override // androidx.work.impl.f
    public void b(p4.m mVar, boolean z10) {
        a0 b10 = this.f36954q.b(mVar);
        if (b10 != null) {
            this.f36962y.b(b10);
        }
        h(mVar);
        if (!z10) {
            synchronized (this.f36953p) {
                this.f36958u.remove(mVar);
            }
        }
    }

    @Override // androidx.work.impl.w
    public void c(String str) {
        if (this.f36959v == null) {
            f();
        }
        if (!this.f36959v.booleanValue()) {
            m.e().f(f36948z, "Ignoring schedule request in non-main process");
            return;
        }
        g();
        m e10 = m.e();
        String str2 = f36948z;
        e10.a(str2, "Cancelling work ID " + str);
        l4.a aVar = this.f36951i;
        if (aVar != null) {
            aVar.b(str);
        }
        for (a0 a0Var : this.f36954q.c(str)) {
            this.f36962y.b(a0Var);
            this.f36956s.e(a0Var);
        }
    }

    @Override // androidx.work.impl.w
    public boolean d() {
        return false;
    }

    @Override // androidx.work.impl.w
    public void e(p4.u... uVarArr) {
        if (this.f36959v == null) {
            f();
        }
        if (!this.f36959v.booleanValue()) {
            m.e().f(f36948z, "Ignoring schedule request in a secondary process");
            return;
        }
        g();
        HashSet<p4.u> hashSet = new HashSet();
        HashSet hashSet2 = new HashSet();
        for (p4.u uVar : uVarArr) {
            if (!this.f36954q.a(x.a(uVar))) {
                long max = Math.max(uVar.c(), i(uVar));
                long a10 = this.f36957t.a().a();
                if (uVar.f45001b == k4.x.ENQUEUED) {
                    if (a10 < max) {
                        l4.a aVar = this.f36951i;
                        if (aVar != null) {
                            aVar.a(uVar, max);
                        }
                    } else if (uVar.k()) {
                        if (uVar.f45009j.h()) {
                            m.e().a(f36948z, "Ignoring " + uVar + ". Requires device idle.");
                        } else if (uVar.f45009j.e()) {
                            m.e().a(f36948z, "Ignoring " + uVar + ". Requires ContentUri triggers.");
                        } else {
                            hashSet.add(uVar);
                            hashSet2.add(uVar.f45000a);
                        }
                    } else if (!this.f36954q.a(x.a(uVar))) {
                        m.e().a(f36948z, "Starting work for " + uVar.f45000a);
                        a0 e10 = this.f36954q.e(uVar);
                        this.f36962y.c(e10);
                        this.f36956s.c(e10);
                    }
                }
            }
        }
        synchronized (this.f36953p) {
            try {
                if (!hashSet.isEmpty()) {
                    String join = TextUtils.join(",", hashSet2);
                    m.e().a(f36948z, "Starting tracking for " + join);
                    for (p4.u uVar2 : hashSet) {
                        p4.m a11 = x.a(uVar2);
                        if (!this.f36950e.containsKey(a11)) {
                            this.f36950e.put(a11, m4.f.b(this.f36960w, uVar2, this.f36961x.b(), this));
                        }
                    }
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }
}
