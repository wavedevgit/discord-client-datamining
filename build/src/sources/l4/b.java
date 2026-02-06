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
    private static final String f35737z = m.i("GreedyScheduler");

    /* renamed from: d  reason: collision with root package name */
    private final Context f35738d;

    /* renamed from: i  reason: collision with root package name */
    private l4.a f35740i;

    /* renamed from: o  reason: collision with root package name */
    private boolean f35741o;

    /* renamed from: r  reason: collision with root package name */
    private final u f35744r;

    /* renamed from: s  reason: collision with root package name */
    private final n0 f35745s;

    /* renamed from: t  reason: collision with root package name */
    private final androidx.work.a f35746t;

    /* renamed from: v  reason: collision with root package name */
    Boolean f35748v;

    /* renamed from: w  reason: collision with root package name */
    private final e f35749w;

    /* renamed from: x  reason: collision with root package name */
    private final r4.b f35750x;

    /* renamed from: y  reason: collision with root package name */
    private final d f35751y;

    /* renamed from: e  reason: collision with root package name */
    private final Map f35739e = new HashMap();

    /* renamed from: p  reason: collision with root package name */
    private final Object f35742p = new Object();

    /* renamed from: q  reason: collision with root package name */
    private final b0 f35743q = new b0();

    /* renamed from: u  reason: collision with root package name */
    private final Map f35747u = new HashMap();

    /* JADX INFO: Access modifiers changed from: private */
    /* renamed from: l4.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class C0479b {

        /* renamed from: a  reason: collision with root package name */
        final int f35752a;

        /* renamed from: b  reason: collision with root package name */
        final long f35753b;

        private C0479b(int i10, long j10) {
            this.f35752a = i10;
            this.f35753b = j10;
        }
    }

    public b(Context context, androidx.work.a aVar, n nVar, u uVar, n0 n0Var, r4.b bVar) {
        this.f35738d = context;
        k4.u k10 = aVar.k();
        this.f35740i = new l4.a(this, k10, aVar.a());
        this.f35751y = new d(k10, n0Var);
        this.f35750x = bVar;
        this.f35749w = new e(nVar);
        this.f35746t = aVar;
        this.f35744r = uVar;
        this.f35745s = n0Var;
    }

    private void f() {
        this.f35748v = Boolean.valueOf(o.b(this.f35738d, this.f35746t));
    }

    private void g() {
        if (!this.f35741o) {
            this.f35744r.e(this);
            this.f35741o = true;
        }
    }

    private void h(p4.m mVar) {
        Job job;
        synchronized (this.f35742p) {
            job = (Job) this.f35739e.remove(mVar);
        }
        if (job != null) {
            m e10 = m.e();
            String str = f35737z;
            e10.a(str, "Stopping tracking for " + mVar);
            job.k(null);
        }
    }

    private long i(p4.u uVar) {
        long max;
        synchronized (this.f35742p) {
            try {
                p4.m a10 = x.a(uVar);
                C0479b c0479b = (C0479b) this.f35747u.get(a10);
                if (c0479b == null) {
                    c0479b = new C0479b(uVar.f43695k, this.f35746t.a().a());
                    this.f35747u.put(a10, c0479b);
                }
                max = c0479b.f35753b + (Math.max((uVar.f43695k - c0479b.f35752a) - 5, 0) * 30000);
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
            if (!this.f35743q.a(a10)) {
                m e10 = m.e();
                String str = f35737z;
                e10.a(str, "Constraints met: Scheduling work ID " + a10);
                a0 d10 = this.f35743q.d(a10);
                this.f35751y.c(d10);
                this.f35745s.c(d10);
                return;
            }
            return;
        }
        m e11 = m.e();
        String str2 = f35737z;
        e11.a(str2, "Constraints not met: Cancelling work ID " + a10);
        a0 b10 = this.f35743q.b(a10);
        if (b10 != null) {
            this.f35751y.b(b10);
            this.f35745s.b(b10, ((b.C0497b) bVar).a());
        }
    }

    @Override // androidx.work.impl.f
    public void b(p4.m mVar, boolean z10) {
        a0 b10 = this.f35743q.b(mVar);
        if (b10 != null) {
            this.f35751y.b(b10);
        }
        h(mVar);
        if (!z10) {
            synchronized (this.f35742p) {
                this.f35747u.remove(mVar);
            }
        }
    }

    @Override // androidx.work.impl.w
    public void c(String str) {
        if (this.f35748v == null) {
            f();
        }
        if (!this.f35748v.booleanValue()) {
            m.e().f(f35737z, "Ignoring schedule request in non-main process");
            return;
        }
        g();
        m e10 = m.e();
        String str2 = f35737z;
        e10.a(str2, "Cancelling work ID " + str);
        l4.a aVar = this.f35740i;
        if (aVar != null) {
            aVar.b(str);
        }
        for (a0 a0Var : this.f35743q.c(str)) {
            this.f35751y.b(a0Var);
            this.f35745s.e(a0Var);
        }
    }

    @Override // androidx.work.impl.w
    public boolean d() {
        return false;
    }

    @Override // androidx.work.impl.w
    public void e(p4.u... uVarArr) {
        if (this.f35748v == null) {
            f();
        }
        if (!this.f35748v.booleanValue()) {
            m.e().f(f35737z, "Ignoring schedule request in a secondary process");
            return;
        }
        g();
        HashSet<p4.u> hashSet = new HashSet();
        HashSet hashSet2 = new HashSet();
        for (p4.u uVar : uVarArr) {
            if (!this.f35743q.a(x.a(uVar))) {
                long max = Math.max(uVar.c(), i(uVar));
                long a10 = this.f35746t.a().a();
                if (uVar.f43686b == k4.x.ENQUEUED) {
                    if (a10 < max) {
                        l4.a aVar = this.f35740i;
                        if (aVar != null) {
                            aVar.a(uVar, max);
                        }
                    } else if (uVar.k()) {
                        if (uVar.f43694j.h()) {
                            m.e().a(f35737z, "Ignoring " + uVar + ". Requires device idle.");
                        } else if (uVar.f43694j.e()) {
                            m.e().a(f35737z, "Ignoring " + uVar + ". Requires ContentUri triggers.");
                        } else {
                            hashSet.add(uVar);
                            hashSet2.add(uVar.f43685a);
                        }
                    } else if (!this.f35743q.a(x.a(uVar))) {
                        m.e().a(f35737z, "Starting work for " + uVar.f43685a);
                        a0 e10 = this.f35743q.e(uVar);
                        this.f35751y.c(e10);
                        this.f35745s.c(e10);
                    }
                }
            }
        }
        synchronized (this.f35742p) {
            try {
                if (!hashSet.isEmpty()) {
                    String join = TextUtils.join(",", hashSet2);
                    m.e().a(f35737z, "Starting tracking for " + join);
                    for (p4.u uVar2 : hashSet) {
                        p4.m a11 = x.a(uVar2);
                        if (!this.f35739e.containsKey(a11)) {
                            this.f35739e.put(a11, m4.f.b(this.f35749w, uVar2, this.f35750x.b(), this));
                        }
                    }
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }
}
