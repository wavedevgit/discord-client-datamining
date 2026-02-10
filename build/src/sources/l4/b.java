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
    private static final String f35517z = m.i("GreedyScheduler");

    /* renamed from: d  reason: collision with root package name */
    private final Context f35518d;

    /* renamed from: i  reason: collision with root package name */
    private l4.a f35520i;

    /* renamed from: o  reason: collision with root package name */
    private boolean f35521o;

    /* renamed from: r  reason: collision with root package name */
    private final u f35524r;

    /* renamed from: s  reason: collision with root package name */
    private final n0 f35525s;

    /* renamed from: t  reason: collision with root package name */
    private final androidx.work.a f35526t;

    /* renamed from: v  reason: collision with root package name */
    Boolean f35528v;

    /* renamed from: w  reason: collision with root package name */
    private final e f35529w;

    /* renamed from: x  reason: collision with root package name */
    private final r4.b f35530x;

    /* renamed from: y  reason: collision with root package name */
    private final d f35531y;

    /* renamed from: e  reason: collision with root package name */
    private final Map f35519e = new HashMap();

    /* renamed from: p  reason: collision with root package name */
    private final Object f35522p = new Object();

    /* renamed from: q  reason: collision with root package name */
    private final b0 f35523q = new b0();

    /* renamed from: u  reason: collision with root package name */
    private final Map f35527u = new HashMap();

    /* JADX INFO: Access modifiers changed from: private */
    /* renamed from: l4.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class C0491b {

        /* renamed from: a  reason: collision with root package name */
        final int f35532a;

        /* renamed from: b  reason: collision with root package name */
        final long f35533b;

        private C0491b(int i10, long j10) {
            this.f35532a = i10;
            this.f35533b = j10;
        }
    }

    public b(Context context, androidx.work.a aVar, n nVar, u uVar, n0 n0Var, r4.b bVar) {
        this.f35518d = context;
        k4.u k10 = aVar.k();
        this.f35520i = new l4.a(this, k10, aVar.a());
        this.f35531y = new d(k10, n0Var);
        this.f35530x = bVar;
        this.f35529w = new e(nVar);
        this.f35526t = aVar;
        this.f35524r = uVar;
        this.f35525s = n0Var;
    }

    private void f() {
        this.f35528v = Boolean.valueOf(o.b(this.f35518d, this.f35526t));
    }

    private void g() {
        if (!this.f35521o) {
            this.f35524r.e(this);
            this.f35521o = true;
        }
    }

    private void h(p4.m mVar) {
        Job job;
        synchronized (this.f35522p) {
            job = (Job) this.f35519e.remove(mVar);
        }
        if (job != null) {
            m e10 = m.e();
            String str = f35517z;
            e10.a(str, "Stopping tracking for " + mVar);
            job.i(null);
        }
    }

    private long i(p4.u uVar) {
        long max;
        synchronized (this.f35522p) {
            try {
                p4.m a10 = x.a(uVar);
                C0491b c0491b = (C0491b) this.f35527u.get(a10);
                if (c0491b == null) {
                    c0491b = new C0491b(uVar.f41456k, this.f35526t.a().a());
                    this.f35527u.put(a10, c0491b);
                }
                max = c0491b.f35533b + (Math.max((uVar.f41456k - c0491b.f35532a) - 5, 0) * 30000);
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
            if (!this.f35523q.a(a10)) {
                m e10 = m.e();
                String str = f35517z;
                e10.a(str, "Constraints met: Scheduling work ID " + a10);
                a0 d10 = this.f35523q.d(a10);
                this.f35531y.c(d10);
                this.f35525s.c(d10);
                return;
            }
            return;
        }
        m e11 = m.e();
        String str2 = f35517z;
        e11.a(str2, "Constraints not met: Cancelling work ID " + a10);
        a0 b10 = this.f35523q.b(a10);
        if (b10 != null) {
            this.f35531y.b(b10);
            this.f35525s.b(b10, ((b.C0511b) bVar).a());
        }
    }

    @Override // androidx.work.impl.f
    public void b(p4.m mVar, boolean z10) {
        a0 b10 = this.f35523q.b(mVar);
        if (b10 != null) {
            this.f35531y.b(b10);
        }
        h(mVar);
        if (!z10) {
            synchronized (this.f35522p) {
                this.f35527u.remove(mVar);
            }
        }
    }

    @Override // androidx.work.impl.w
    public void c(String str) {
        if (this.f35528v == null) {
            f();
        }
        if (!this.f35528v.booleanValue()) {
            m.e().f(f35517z, "Ignoring schedule request in non-main process");
            return;
        }
        g();
        m e10 = m.e();
        String str2 = f35517z;
        e10.a(str2, "Cancelling work ID " + str);
        l4.a aVar = this.f35520i;
        if (aVar != null) {
            aVar.b(str);
        }
        for (a0 a0Var : this.f35523q.c(str)) {
            this.f35531y.b(a0Var);
            this.f35525s.e(a0Var);
        }
    }

    @Override // androidx.work.impl.w
    public boolean d() {
        return false;
    }

    @Override // androidx.work.impl.w
    public void e(p4.u... uVarArr) {
        if (this.f35528v == null) {
            f();
        }
        if (!this.f35528v.booleanValue()) {
            m.e().f(f35517z, "Ignoring schedule request in a secondary process");
            return;
        }
        g();
        HashSet<p4.u> hashSet = new HashSet();
        HashSet hashSet2 = new HashSet();
        for (p4.u uVar : uVarArr) {
            if (!this.f35523q.a(x.a(uVar))) {
                long max = Math.max(uVar.c(), i(uVar));
                long a10 = this.f35526t.a().a();
                if (uVar.f41447b == k4.x.ENQUEUED) {
                    if (a10 < max) {
                        l4.a aVar = this.f35520i;
                        if (aVar != null) {
                            aVar.a(uVar, max);
                        }
                    } else if (uVar.k()) {
                        if (uVar.f41455j.h()) {
                            m.e().a(f35517z, "Ignoring " + uVar + ". Requires device idle.");
                        } else if (uVar.f41455j.e()) {
                            m.e().a(f35517z, "Ignoring " + uVar + ". Requires ContentUri triggers.");
                        } else {
                            hashSet.add(uVar);
                            hashSet2.add(uVar.f41446a);
                        }
                    } else if (!this.f35523q.a(x.a(uVar))) {
                        m.e().a(f35517z, "Starting work for " + uVar.f41446a);
                        a0 e10 = this.f35523q.e(uVar);
                        this.f35531y.c(e10);
                        this.f35525s.c(e10);
                    }
                }
            }
        }
        synchronized (this.f35522p) {
            try {
                if (!hashSet.isEmpty()) {
                    String join = TextUtils.join(",", hashSet2);
                    m.e().a(f35517z, "Starting tracking for " + join);
                    for (p4.u uVar2 : hashSet) {
                        p4.m a11 = x.a(uVar2);
                        if (!this.f35519e.containsKey(a11)) {
                            this.f35519e.put(a11, m4.f.b(this.f35529w, uVar2, this.f35530x.b(), this));
                        }
                    }
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }
}
