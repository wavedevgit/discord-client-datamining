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
    private static final String f36086z = m.i("GreedyScheduler");

    /* renamed from: d  reason: collision with root package name */
    private final Context f36087d;

    /* renamed from: i  reason: collision with root package name */
    private l4.a f36089i;

    /* renamed from: o  reason: collision with root package name */
    private boolean f36090o;

    /* renamed from: r  reason: collision with root package name */
    private final u f36093r;

    /* renamed from: s  reason: collision with root package name */
    private final n0 f36094s;

    /* renamed from: t  reason: collision with root package name */
    private final androidx.work.a f36095t;

    /* renamed from: v  reason: collision with root package name */
    Boolean f36097v;

    /* renamed from: w  reason: collision with root package name */
    private final e f36098w;

    /* renamed from: x  reason: collision with root package name */
    private final r4.b f36099x;

    /* renamed from: y  reason: collision with root package name */
    private final d f36100y;

    /* renamed from: e  reason: collision with root package name */
    private final Map f36088e = new HashMap();

    /* renamed from: p  reason: collision with root package name */
    private final Object f36091p = new Object();

    /* renamed from: q  reason: collision with root package name */
    private final b0 f36092q = new b0();

    /* renamed from: u  reason: collision with root package name */
    private final Map f36096u = new HashMap();

    /* JADX INFO: Access modifiers changed from: private */
    /* renamed from: l4.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class C0491b {

        /* renamed from: a  reason: collision with root package name */
        final int f36101a;

        /* renamed from: b  reason: collision with root package name */
        final long f36102b;

        private C0491b(int i10, long j10) {
            this.f36101a = i10;
            this.f36102b = j10;
        }
    }

    public b(Context context, androidx.work.a aVar, n nVar, u uVar, n0 n0Var, r4.b bVar) {
        this.f36087d = context;
        k4.u k10 = aVar.k();
        this.f36089i = new l4.a(this, k10, aVar.a());
        this.f36100y = new d(k10, n0Var);
        this.f36099x = bVar;
        this.f36098w = new e(nVar);
        this.f36095t = aVar;
        this.f36093r = uVar;
        this.f36094s = n0Var;
    }

    private void f() {
        this.f36097v = Boolean.valueOf(o.b(this.f36087d, this.f36095t));
    }

    private void g() {
        if (!this.f36090o) {
            this.f36093r.e(this);
            this.f36090o = true;
        }
    }

    private void h(p4.m mVar) {
        Job job;
        synchronized (this.f36091p) {
            job = (Job) this.f36088e.remove(mVar);
        }
        if (job != null) {
            m e10 = m.e();
            String str = f36086z;
            e10.a(str, "Stopping tracking for " + mVar);
            job.i(null);
        }
    }

    private long i(p4.u uVar) {
        long max;
        synchronized (this.f36091p) {
            try {
                p4.m a10 = x.a(uVar);
                C0491b c0491b = (C0491b) this.f36096u.get(a10);
                if (c0491b == null) {
                    c0491b = new C0491b(uVar.f42025k, this.f36095t.a().a());
                    this.f36096u.put(a10, c0491b);
                }
                max = c0491b.f36102b + (Math.max((uVar.f42025k - c0491b.f36101a) - 5, 0) * 30000);
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
            if (!this.f36092q.a(a10)) {
                m e10 = m.e();
                String str = f36086z;
                e10.a(str, "Constraints met: Scheduling work ID " + a10);
                a0 d10 = this.f36092q.d(a10);
                this.f36100y.c(d10);
                this.f36094s.c(d10);
                return;
            }
            return;
        }
        m e11 = m.e();
        String str2 = f36086z;
        e11.a(str2, "Constraints not met: Cancelling work ID " + a10);
        a0 b10 = this.f36092q.b(a10);
        if (b10 != null) {
            this.f36100y.b(b10);
            this.f36094s.b(b10, ((b.C0511b) bVar).a());
        }
    }

    @Override // androidx.work.impl.f
    public void b(p4.m mVar, boolean z10) {
        a0 b10 = this.f36092q.b(mVar);
        if (b10 != null) {
            this.f36100y.b(b10);
        }
        h(mVar);
        if (!z10) {
            synchronized (this.f36091p) {
                this.f36096u.remove(mVar);
            }
        }
    }

    @Override // androidx.work.impl.w
    public void c(String str) {
        if (this.f36097v == null) {
            f();
        }
        if (!this.f36097v.booleanValue()) {
            m.e().f(f36086z, "Ignoring schedule request in non-main process");
            return;
        }
        g();
        m e10 = m.e();
        String str2 = f36086z;
        e10.a(str2, "Cancelling work ID " + str);
        l4.a aVar = this.f36089i;
        if (aVar != null) {
            aVar.b(str);
        }
        for (a0 a0Var : this.f36092q.c(str)) {
            this.f36100y.b(a0Var);
            this.f36094s.e(a0Var);
        }
    }

    @Override // androidx.work.impl.w
    public boolean d() {
        return false;
    }

    @Override // androidx.work.impl.w
    public void e(p4.u... uVarArr) {
        if (this.f36097v == null) {
            f();
        }
        if (!this.f36097v.booleanValue()) {
            m.e().f(f36086z, "Ignoring schedule request in a secondary process");
            return;
        }
        g();
        HashSet<p4.u> hashSet = new HashSet();
        HashSet hashSet2 = new HashSet();
        for (p4.u uVar : uVarArr) {
            if (!this.f36092q.a(x.a(uVar))) {
                long max = Math.max(uVar.c(), i(uVar));
                long a10 = this.f36095t.a().a();
                if (uVar.f42016b == k4.x.ENQUEUED) {
                    if (a10 < max) {
                        l4.a aVar = this.f36089i;
                        if (aVar != null) {
                            aVar.a(uVar, max);
                        }
                    } else if (uVar.k()) {
                        if (uVar.f42024j.h()) {
                            m.e().a(f36086z, "Ignoring " + uVar + ". Requires device idle.");
                        } else if (uVar.f42024j.e()) {
                            m.e().a(f36086z, "Ignoring " + uVar + ". Requires ContentUri triggers.");
                        } else {
                            hashSet.add(uVar);
                            hashSet2.add(uVar.f42015a);
                        }
                    } else if (!this.f36092q.a(x.a(uVar))) {
                        m.e().a(f36086z, "Starting work for " + uVar.f42015a);
                        a0 e10 = this.f36092q.e(uVar);
                        this.f36100y.c(e10);
                        this.f36094s.c(e10);
                    }
                }
            }
        }
        synchronized (this.f36091p) {
            try {
                if (!hashSet.isEmpty()) {
                    String join = TextUtils.join(",", hashSet2);
                    m.e().a(f36086z, "Starting tracking for " + join);
                    for (p4.u uVar2 : hashSet) {
                        p4.m a11 = x.a(uVar2);
                        if (!this.f36088e.containsKey(a11)) {
                            this.f36088e.put(a11, m4.f.b(this.f36098w, uVar2, this.f36099x.b(), this));
                        }
                    }
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }
}
