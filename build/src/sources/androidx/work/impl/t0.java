package androidx.work.impl;

import android.content.Context;
import androidx.work.WorkerParameters;
import androidx.work.c;
import androidx.work.impl.background.systemalarm.RescheduleReceiver;
import com.google.common.util.concurrent.ListenableFuture;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.LinkedList;
import java.util.List;
import java.util.UUID;
import java.util.concurrent.CancellationException;
import java.util.concurrent.ExecutionException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class t0 implements Runnable {
    static final String D = k4.m.i("WorkerWrapper");

    /* renamed from: d  reason: collision with root package name */
    Context f5694d;

    /* renamed from: e  reason: collision with root package name */
    private final String f5695e;

    /* renamed from: i  reason: collision with root package name */
    private WorkerParameters.a f5696i;

    /* renamed from: o  reason: collision with root package name */
    p4.u f5697o;

    /* renamed from: p  reason: collision with root package name */
    androidx.work.c f5698p;

    /* renamed from: q  reason: collision with root package name */
    r4.b f5699q;

    /* renamed from: s  reason: collision with root package name */
    private androidx.work.a f5701s;

    /* renamed from: t  reason: collision with root package name */
    private k4.b f5702t;

    /* renamed from: u  reason: collision with root package name */
    private androidx.work.impl.foreground.a f5703u;

    /* renamed from: v  reason: collision with root package name */
    private WorkDatabase f5704v;

    /* renamed from: w  reason: collision with root package name */
    private p4.v f5705w;

    /* renamed from: x  reason: collision with root package name */
    private p4.b f5706x;

    /* renamed from: y  reason: collision with root package name */
    private List f5707y;

    /* renamed from: z  reason: collision with root package name */
    private String f5708z;

    /* renamed from: r  reason: collision with root package name */
    c.a f5700r = c.a.a();
    androidx.work.impl.utils.futures.c A = androidx.work.impl.utils.futures.c.t();
    final androidx.work.impl.utils.futures.c B = androidx.work.impl.utils.futures.c.t();
    private volatile int C = -256;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class a implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ ListenableFuture f5709d;

        a(ListenableFuture listenableFuture) {
            this.f5709d = listenableFuture;
        }

        @Override // java.lang.Runnable
        public void run() {
            if (t0.this.B.isCancelled()) {
                return;
            }
            try {
                this.f5709d.get();
                k4.m e10 = k4.m.e();
                String str = t0.D;
                e10.a(str, "Starting work for " + t0.this.f5697o.f44960c);
                t0 t0Var = t0.this;
                t0Var.B.r(t0Var.f5698p.n());
            } catch (Throwable th2) {
                t0.this.B.q(th2);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class b implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ String f5711d;

        b(String str) {
            this.f5711d = str;
        }

        @Override // java.lang.Runnable
        public void run() {
            try {
                try {
                    c.a aVar = (c.a) t0.this.B.get();
                    if (aVar == null) {
                        k4.m e10 = k4.m.e();
                        String str = t0.D;
                        e10.c(str, t0.this.f5697o.f44960c + " returned a null result. Treating it as a failure.");
                    } else {
                        k4.m e11 = k4.m.e();
                        String str2 = t0.D;
                        e11.a(str2, t0.this.f5697o.f44960c + " returned a " + aVar + ".");
                        t0.this.f5700r = aVar;
                    }
                    t0.this.i();
                } catch (InterruptedException e12) {
                    e = e12;
                    k4.m e13 = k4.m.e();
                    String str3 = t0.D;
                    e13.d(str3, this.f5711d + " failed because it threw an exception/error", e);
                    t0.this.i();
                } catch (CancellationException e14) {
                    k4.m e15 = k4.m.e();
                    String str4 = t0.D;
                    e15.g(str4, this.f5711d + " was cancelled", e14);
                    t0.this.i();
                } catch (ExecutionException e16) {
                    e = e16;
                    k4.m e132 = k4.m.e();
                    String str32 = t0.D;
                    e132.d(str32, this.f5711d + " failed because it threw an exception/error", e);
                    t0.this.i();
                }
            } catch (Throwable th2) {
                t0.this.i();
                throw th2;
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class c {

        /* renamed from: a  reason: collision with root package name */
        Context f5713a;

        /* renamed from: b  reason: collision with root package name */
        androidx.work.c f5714b;

        /* renamed from: c  reason: collision with root package name */
        androidx.work.impl.foreground.a f5715c;

        /* renamed from: d  reason: collision with root package name */
        r4.b f5716d;

        /* renamed from: e  reason: collision with root package name */
        androidx.work.a f5717e;

        /* renamed from: f  reason: collision with root package name */
        WorkDatabase f5718f;

        /* renamed from: g  reason: collision with root package name */
        p4.u f5719g;

        /* renamed from: h  reason: collision with root package name */
        private final List f5720h;

        /* renamed from: i  reason: collision with root package name */
        WorkerParameters.a f5721i = new WorkerParameters.a();

        public c(Context context, androidx.work.a aVar, r4.b bVar, androidx.work.impl.foreground.a aVar2, WorkDatabase workDatabase, p4.u uVar, List list) {
            this.f5713a = context.getApplicationContext();
            this.f5716d = bVar;
            this.f5715c = aVar2;
            this.f5717e = aVar;
            this.f5718f = workDatabase;
            this.f5719g = uVar;
            this.f5720h = list;
        }

        public t0 b() {
            return new t0(this);
        }

        public c c(WorkerParameters.a aVar) {
            if (aVar != null) {
                this.f5721i = aVar;
            }
            return this;
        }
    }

    t0(c cVar) {
        this.f5694d = cVar.f5713a;
        this.f5699q = cVar.f5716d;
        this.f5703u = cVar.f5715c;
        p4.u uVar = cVar.f5719g;
        this.f5697o = uVar;
        this.f5695e = uVar.f44958a;
        this.f5696i = cVar.f5721i;
        this.f5698p = cVar.f5714b;
        androidx.work.a aVar = cVar.f5717e;
        this.f5701s = aVar;
        this.f5702t = aVar.a();
        WorkDatabase workDatabase = cVar.f5718f;
        this.f5704v = workDatabase;
        this.f5705w = workDatabase.H();
        this.f5706x = this.f5704v.C();
        this.f5707y = cVar.f5720h;
    }

    public static /* synthetic */ void a(t0 t0Var, ListenableFuture listenableFuture) {
        if (t0Var.B.isCancelled()) {
            listenableFuture.cancel(true);
        }
    }

    private String b(List list) {
        StringBuilder sb2 = new StringBuilder("Work [ id=");
        sb2.append(this.f5695e);
        sb2.append(", tags={ ");
        Iterator it = list.iterator();
        boolean z10 = true;
        while (it.hasNext()) {
            String str = (String) it.next();
            if (z10) {
                z10 = false;
            } else {
                sb2.append(", ");
            }
            sb2.append(str);
        }
        sb2.append(" } ]");
        return sb2.toString();
    }

    private void f(c.a aVar) {
        if (aVar instanceof c.a.C0077c) {
            k4.m e10 = k4.m.e();
            String str = D;
            e10.f(str, "Worker result SUCCESS for " + this.f5708z);
            if (this.f5697o.m()) {
                k();
            } else {
                p();
            }
        } else if (aVar instanceof c.a.b) {
            k4.m e11 = k4.m.e();
            String str2 = D;
            e11.f(str2, "Worker result RETRY for " + this.f5708z);
            j();
        } else {
            k4.m e12 = k4.m.e();
            String str3 = D;
            e12.f(str3, "Worker result FAILURE for " + this.f5708z);
            if (this.f5697o.m()) {
                k();
            } else {
                o();
            }
        }
    }

    private void h(String str) {
        LinkedList linkedList = new LinkedList();
        linkedList.add(str);
        while (!linkedList.isEmpty()) {
            String str2 = (String) linkedList.remove();
            if (this.f5705w.h(str2) != k4.x.CANCELLED) {
                this.f5705w.d(k4.x.FAILED, str2);
            }
            linkedList.addAll(this.f5706x.a(str2));
        }
    }

    private void j() {
        this.f5704v.e();
        try {
            this.f5705w.d(k4.x.ENQUEUED, this.f5695e);
            this.f5705w.s(this.f5695e, this.f5702t.a());
            this.f5705w.z(this.f5695e, this.f5697o.h());
            this.f5705w.o(this.f5695e, -1L);
            this.f5704v.A();
        } finally {
            this.f5704v.i();
            l(true);
        }
    }

    private void k() {
        this.f5704v.e();
        try {
            this.f5705w.s(this.f5695e, this.f5702t.a());
            this.f5705w.d(k4.x.ENQUEUED, this.f5695e);
            this.f5705w.w(this.f5695e);
            this.f5705w.z(this.f5695e, this.f5697o.h());
            this.f5705w.b(this.f5695e);
            this.f5705w.o(this.f5695e, -1L);
            this.f5704v.A();
        } finally {
            this.f5704v.i();
            l(false);
        }
    }

    private void l(boolean z10) {
        this.f5704v.e();
        try {
            if (!this.f5704v.H().u()) {
                q4.m.c(this.f5694d, RescheduleReceiver.class, false);
            }
            if (z10) {
                this.f5705w.d(k4.x.ENQUEUED, this.f5695e);
                this.f5705w.e(this.f5695e, this.C);
                this.f5705w.o(this.f5695e, -1L);
            }
            this.f5704v.A();
            this.f5704v.i();
            this.A.p(Boolean.valueOf(z10));
        } catch (Throwable th2) {
            this.f5704v.i();
            throw th2;
        }
    }

    private void m() {
        k4.x h10 = this.f5705w.h(this.f5695e);
        if (h10 == k4.x.RUNNING) {
            k4.m e10 = k4.m.e();
            String str = D;
            e10.a(str, "Status for " + this.f5695e + " is RUNNING; not doing any work and rescheduling for later execution");
            l(true);
            return;
        }
        k4.m e11 = k4.m.e();
        String str2 = D;
        e11.a(str2, "Status for " + this.f5695e + " is " + h10 + " ; not doing any work");
        l(false);
    }

    private void n() {
        androidx.work.b a10;
        if (!q()) {
            this.f5704v.e();
            try {
                p4.u uVar = this.f5697o;
                if (uVar.f44959b != k4.x.ENQUEUED) {
                    m();
                    this.f5704v.A();
                    k4.m e10 = k4.m.e();
                    String str = D;
                    e10.a(str, this.f5697o.f44960c + " is not in ENQUEUED state. Nothing more to do");
                } else if ((uVar.m() || this.f5697o.l()) && this.f5702t.a() < this.f5697o.c()) {
                    k4.m.e().a(D, String.format("Delaying execution for %s because it is being executed before schedule.", this.f5697o.f44960c));
                    l(true);
                    this.f5704v.A();
                } else {
                    this.f5704v.A();
                    this.f5704v.i();
                    if (this.f5697o.m()) {
                        a10 = this.f5697o.f44962e;
                    } else {
                        k4.i b10 = this.f5701s.f().b(this.f5697o.f44961d);
                        if (b10 == null) {
                            k4.m e11 = k4.m.e();
                            String str2 = D;
                            e11.c(str2, "Could not create Input Merger " + this.f5697o.f44961d);
                            o();
                            return;
                        }
                        ArrayList arrayList = new ArrayList();
                        arrayList.add(this.f5697o.f44962e);
                        arrayList.addAll(this.f5705w.k(this.f5695e));
                        a10 = b10.a(arrayList);
                    }
                    androidx.work.b bVar = a10;
                    UUID fromString = UUID.fromString(this.f5695e);
                    List list = this.f5707y;
                    WorkerParameters.a aVar = this.f5696i;
                    p4.u uVar2 = this.f5697o;
                    WorkerParameters workerParameters = new WorkerParameters(fromString, bVar, list, aVar, uVar2.f44968k, uVar2.f(), this.f5701s.d(), this.f5699q, this.f5701s.n(), new q4.y(this.f5704v, this.f5699q), new q4.x(this.f5704v, this.f5703u, this.f5699q));
                    if (this.f5698p == null) {
                        this.f5698p = this.f5701s.n().b(this.f5694d, this.f5697o.f44960c, workerParameters);
                    }
                    androidx.work.c cVar = this.f5698p;
                    if (cVar == null) {
                        k4.m e12 = k4.m.e();
                        String str3 = D;
                        e12.c(str3, "Could not create Worker " + this.f5697o.f44960c);
                        o();
                    } else if (cVar.k()) {
                        k4.m e13 = k4.m.e();
                        String str4 = D;
                        e13.c(str4, "Received an already-used Worker " + this.f5697o.f44960c + "; Worker Factory should return new instances");
                        o();
                    } else {
                        this.f5698p.m();
                        if (r()) {
                            if (q()) {
                                return;
                            }
                            q4.w wVar = new q4.w(this.f5694d, this.f5697o, this.f5698p, workerParameters.b(), this.f5699q);
                            this.f5699q.a().execute(wVar);
                            final ListenableFuture b11 = wVar.b();
                            this.B.a(new Runnable() { // from class: androidx.work.impl.s0
                                @Override // java.lang.Runnable
                                public final void run() {
                                    t0.a(t0.this, b11);
                                }
                            }, new q4.s());
                            b11.a(new a(b11), this.f5699q.a());
                            this.B.a(new b(this.f5708z), this.f5699q.c());
                            return;
                        }
                        m();
                    }
                }
            } finally {
                this.f5704v.i();
            }
        }
    }

    private void p() {
        this.f5704v.e();
        try {
            this.f5705w.d(k4.x.SUCCEEDED, this.f5695e);
            this.f5705w.r(this.f5695e, ((c.a.C0077c) this.f5700r).e());
            long a10 = this.f5702t.a();
            for (String str : this.f5706x.a(this.f5695e)) {
                if (this.f5705w.h(str) == k4.x.BLOCKED && this.f5706x.b(str)) {
                    k4.m e10 = k4.m.e();
                    String str2 = D;
                    e10.f(str2, "Setting status to enqueued for " + str);
                    this.f5705w.d(k4.x.ENQUEUED, str);
                    this.f5705w.s(str, a10);
                }
            }
            this.f5704v.A();
            this.f5704v.i();
            l(false);
        } catch (Throwable th2) {
            this.f5704v.i();
            l(false);
            throw th2;
        }
    }

    private boolean q() {
        if (this.C == -256) {
            return false;
        }
        k4.m e10 = k4.m.e();
        String str = D;
        e10.a(str, "Work interrupted for " + this.f5708z);
        k4.x h10 = this.f5705w.h(this.f5695e);
        if (h10 == null) {
            l(false);
        } else {
            l(!h10.d());
        }
        return true;
    }

    private boolean r() {
        boolean z10;
        this.f5704v.e();
        try {
            if (this.f5705w.h(this.f5695e) == k4.x.ENQUEUED) {
                this.f5705w.d(k4.x.RUNNING, this.f5695e);
                this.f5705w.x(this.f5695e);
                this.f5705w.e(this.f5695e, -256);
                z10 = true;
            } else {
                z10 = false;
            }
            this.f5704v.A();
            this.f5704v.i();
            return z10;
        } catch (Throwable th2) {
            this.f5704v.i();
            throw th2;
        }
    }

    public ListenableFuture c() {
        return this.A;
    }

    public p4.m d() {
        return p4.x.a(this.f5697o);
    }

    public p4.u e() {
        return this.f5697o;
    }

    public void g(int i10) {
        this.C = i10;
        q();
        this.B.cancel(true);
        if (this.f5698p != null && this.B.isCancelled()) {
            this.f5698p.o(i10);
            return;
        }
        k4.m.e().a(D, "WorkSpec " + this.f5697o + " is already done. Not interrupting.");
    }

    void i() {
        if (!q()) {
            this.f5704v.e();
            try {
                k4.x h10 = this.f5705w.h(this.f5695e);
                this.f5704v.G().a(this.f5695e);
                if (h10 == null) {
                    l(false);
                } else if (h10 == k4.x.RUNNING) {
                    f(this.f5700r);
                } else if (!h10.d()) {
                    this.C = -512;
                    j();
                }
                this.f5704v.A();
                this.f5704v.i();
            } catch (Throwable th2) {
                this.f5704v.i();
                throw th2;
            }
        }
    }

    void o() {
        this.f5704v.e();
        try {
            h(this.f5695e);
            androidx.work.b e10 = ((c.a.C0076a) this.f5700r).e();
            this.f5705w.z(this.f5695e, this.f5697o.h());
            this.f5705w.r(this.f5695e, e10);
            this.f5704v.A();
        } finally {
            this.f5704v.i();
            l(false);
        }
    }

    @Override // java.lang.Runnable
    public void run() {
        this.f5708z = b(this.f5707y);
        n();
    }
}
