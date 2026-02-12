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
    private static final String f35518z = m.i("GreedyScheduler");

    /* renamed from: d  reason: collision with root package name */
    private final Context f35519d;

    /* renamed from: i  reason: collision with root package name */
    private l4.a f35521i;

    /* renamed from: o  reason: collision with root package name */
    private boolean f35522o;

    /* renamed from: r  reason: collision with root package name */
    private final u f35525r;

    /* renamed from: s  reason: collision with root package name */
    private final n0 f35526s;

    /* renamed from: t  reason: collision with root package name */
    private final androidx.work.a f35527t;

    /* renamed from: v  reason: collision with root package name */
    Boolean f35529v;

    /* renamed from: w  reason: collision with root package name */
    private final e f35530w;

    /* renamed from: x  reason: collision with root package name */
    private final r4.b f35531x;

    /* renamed from: y  reason: collision with root package name */
    private final d f35532y;

    /* renamed from: e  reason: collision with root package name */
    private final Map f35520e = new HashMap();

    /* renamed from: p  reason: collision with root package name */
    private final Object f35523p = new Object();

    /* renamed from: q  reason: collision with root package name */
    private final b0 f35524q = new b0();

    /* renamed from: u  reason: collision with root package name */
    private final Map f35528u = new HashMap();

    /* JADX INFO: Access modifiers changed from: private */
    /* renamed from: l4.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class C0491b {

        /* renamed from: a  reason: collision with root package name */
        final int f35533a;

        /* renamed from: b  reason: collision with root package name */
        final long f35534b;

        private C0491b(int i10, long j10) {
            this.f35533a = i10;
            this.f35534b = j10;
        }
    }

    public b(Context context, androidx.work.a aVar, n nVar, u uVar, n0 n0Var, r4.b bVar) {
        this.f35519d = context;
        k4.u k10 = aVar.k();
        this.f35521i = new l4.a(this, k10, aVar.a());
        this.f35532y = new d(k10, n0Var);
        this.f35531x = bVar;
        this.f35530w = new e(nVar);
        this.f35527t = aVar;
        this.f35525r = uVar;
        this.f35526s = n0Var;
    }

    private void f() {
        this.f35529v = Boolean.valueOf(o.b(this.f35519d, this.f35527t));
    }

    private void g() {
        if (!this.f35522o) {
            this.f35525r.e(this);
            this.f35522o = true;
        }
    }

    private void h(p4.m mVar) {
        Job job;
        synchronized (this.f35523p) {
            job = (Job) this.f35520e.remove(mVar);
        }
        if (job != null) {
            m e10 = m.e();
            String str = f35518z;
            e10.a(str, "Stopping tracking for " + mVar);
            job.i(null);
        }
    }

    private long i(p4.u uVar) {
        long max;
        synchronized (this.f35523p) {
            try {
                p4.m a10 = x.a(uVar);
                C0491b c0491b = (C0491b) this.f35528u.get(a10);
                if (c0491b == null) {
                    c0491b = new C0491b(uVar.f41457k, this.f35527t.a().a());
                    this.f35528u.put(a10, c0491b);
                }
                max = c0491b.f35534b + (Math.max((uVar.f41457k - c0491b.f35533a) - 5, 0) * 30000);
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
            if (!this.f35524q.a(a10)) {
                m e10 = m.e();
                String str = f35518z;
                e10.a(str, "Constraints met: Scheduling work ID " + a10);
                a0 d10 = this.f35524q.d(a10);
                this.f35532y.c(d10);
                this.f35526s.c(d10);
                return;
            }
            return;
        }
        m e11 = m.e();
        String str2 = f35518z;
        e11.a(str2, "Constraints not met: Cancelling work ID " + a10);
        a0 b10 = this.f35524q.b(a10);
        if (b10 != null) {
            this.f35532y.b(b10);
            this.f35526s.b(b10, ((b.C0511b) bVar).a());
        }
    }

    @Override // androidx.work.impl.f
    public void b(p4.m mVar, boolean z10) {
        a0 b10 = this.f35524q.b(mVar);
        if (b10 != null) {
            this.f35532y.b(b10);
        }
        h(mVar);
        if (!z10) {
            synchronized (this.f35523p) {
                this.f35528u.remove(mVar);
            }
        }
    }

    @Override // androidx.work.impl.w
    public void c(String str) {
        if (this.f35529v == null) {
            f();
        }
        if (!this.f35529v.booleanValue()) {
            m.e().f(f35518z, "Ignoring schedule request in non-main process");
            return;
        }
        g();
        m e10 = m.e();
        String str2 = f35518z;
        e10.a(str2, "Cancelling work ID " + str);
        l4.a aVar = this.f35521i;
        if (aVar != null) {
            aVar.b(str);
        }
        for (a0 a0Var : this.f35524q.c(str)) {
            this.f35532y.b(a0Var);
            this.f35526s.e(a0Var);
        }
    }

    @Override // androidx.work.impl.w
    public boolean d() {
        return false;
    }

    @Override // androidx.work.impl.w
    public void e(p4.u... uVarArr) {
        if (this.f35529v == null) {
            f();
        }
        if (!this.f35529v.booleanValue()) {
            m.e().f(f35518z, "Ignoring schedule request in a secondary process");
            return;
        }
        g();
        HashSet<p4.u> hashSet = new HashSet();
        HashSet hashSet2 = new HashSet();
        for (p4.u uVar : uVarArr) {
            if (!this.f35524q.a(x.a(uVar))) {
                long max = Math.max(uVar.c(), i(uVar));
                long a10 = this.f35527t.a().a();
                if (uVar.f41448b == k4.x.ENQUEUED) {
                    if (a10 < max) {
                        l4.a aVar = this.f35521i;
                        if (aVar != null) {
                            aVar.a(uVar, max);
                        }
                    } else if (uVar.k()) {
                        if (uVar.f41456j.h()) {
                            m.e().a(f35518z, "Ignoring " + uVar + ". Requires device idle.");
                        } else if (uVar.f41456j.e()) {
                            m.e().a(f35518z, "Ignoring " + uVar + ". Requires ContentUri triggers.");
                        } else {
                            hashSet.add(uVar);
                            hashSet2.add(uVar.f41447a);
                        }
                    } else if (!this.f35524q.a(x.a(uVar))) {
                        m.e().a(f35518z, "Starting work for " + uVar.f41447a);
                        a0 e10 = this.f35524q.e(uVar);
                        this.f35532y.c(e10);
                        this.f35526s.c(e10);
                    }
                }
            }
        }
        synchronized (this.f35523p) {
            try {
                if (!hashSet.isEmpty()) {
                    String join = TextUtils.join(",", hashSet2);
                    m.e().a(f35518z, "Starting tracking for " + join);
                    for (p4.u uVar2 : hashSet) {
                        p4.m a11 = x.a(uVar2);
                        if (!this.f35520e.containsKey(a11)) {
                            this.f35520e.put(a11, m4.f.b(this.f35530w, uVar2, this.f35531x.b(), this));
                        }
                    }
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }
}
