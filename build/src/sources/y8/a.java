package y8;

import android.util.Pair;
import com.facebook.datasource.DataSource;
import java.util.Iterator;
import java.util.Map;
import java.util.concurrent.ConcurrentLinkedQueue;
import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class a implements DataSource {

    /* renamed from: a  reason: collision with root package name */
    private Map f54051a;

    /* renamed from: d  reason: collision with root package name */
    private Object f54054d = null;

    /* renamed from: e  reason: collision with root package name */
    private Throwable f54055e = null;

    /* renamed from: f  reason: collision with root package name */
    private float f54056f = 0.0f;

    /* renamed from: c  reason: collision with root package name */
    private boolean f54053c = false;

    /* renamed from: b  reason: collision with root package name */
    private d f54052b = d.IN_PROGRESS;

    /* renamed from: g  reason: collision with root package name */
    private final ConcurrentLinkedQueue f54057g = new ConcurrentLinkedQueue();

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: y8.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public class RunnableC0752a implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ boolean f54058d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ e f54059e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ boolean f54060i;

        RunnableC0752a(boolean z10, e eVar, boolean z11) {
            this.f54058d = z10;
            this.f54059e = eVar;
            this.f54060i = z11;
        }

        @Override // java.lang.Runnable
        public void run() {
            if (this.f54058d) {
                this.f54059e.onFailure(a.this);
            } else if (this.f54060i) {
                this.f54059e.onCancellation(a.this);
            } else {
                this.f54059e.onNewResult(a.this);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public class b implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ e f54062d;

        b(e eVar) {
            this.f54062d = eVar;
        }

        @Override // java.lang.Runnable
        public void run() {
            this.f54062d.onProgressUpdate(a.this);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface c {
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public enum d {
        IN_PROGRESS,
        SUCCESS,
        FAILURE
    }

    public static c g() {
        return null;
    }

    private void k() {
        boolean h10 = h();
        boolean u10 = u();
        Iterator it = this.f54057g.iterator();
        while (it.hasNext()) {
            Pair pair = (Pair) it.next();
            j((e) pair.first, (Executor) pair.second, h10, u10);
        }
    }

    private synchronized boolean p(Throwable th2, Map map) {
        if (!this.f54053c && this.f54052b == d.IN_PROGRESS) {
            this.f54052b = d.FAILURE;
            this.f54055e = th2;
            this.f54051a = map;
            return true;
        }
        return false;
    }

    private synchronized boolean r(float f10) {
        if (!this.f54053c && this.f54052b == d.IN_PROGRESS) {
            if (f10 < this.f54056f) {
                return false;
            }
            this.f54056f = f10;
            return true;
        }
        return false;
    }

    /* JADX WARN: Unsupported multi-entry loop pattern (BACK_EDGE: B:12:0x0019 -> B:32:0x003a). Please submit an issue!!! */
    private boolean t(Object obj, boolean z10) {
        Object obj2;
        Object obj3 = null;
        try {
            synchronized (this) {
                try {
                    try {
                        if (!this.f54053c && this.f54052b == d.IN_PROGRESS) {
                            if (z10) {
                                this.f54052b = d.SUCCESS;
                                this.f54056f = 1.0f;
                            }
                            Object obj4 = this.f54054d;
                            if (obj4 != obj) {
                                try {
                                    this.f54054d = obj;
                                    obj2 = obj4;
                                } catch (Throwable th2) {
                                    th = th2;
                                    obj3 = obj4;
                                    throw th;
                                }
                            } else {
                                obj2 = null;
                            }
                            return true;
                        }
                        if (obj != null) {
                            f(obj);
                        }
                        return false;
                    } catch (Throwable th3) {
                        obj3 = obj;
                        th = th3;
                    }
                } catch (Throwable th4) {
                    th = th4;
                }
            }
        } finally {
            if (obj3 != null) {
                f(obj3);
            }
        }
    }

    private synchronized boolean u() {
        boolean z10;
        if (i()) {
            if (!isFinished()) {
                z10 = true;
            }
        }
        z10 = false;
        return z10;
    }

    @Override // com.facebook.datasource.DataSource
    public synchronized boolean a() {
        boolean z10;
        if (this.f54054d != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        return z10;
    }

    @Override // com.facebook.datasource.DataSource
    public synchronized Throwable b() {
        return this.f54055e;
    }

    /* JADX WARN: Removed duplicated region for block: B:24:0x0037  */
    /* JADX WARN: Removed duplicated region for block: B:29:? A[RETURN, SYNTHETIC] */
    @Override // com.facebook.datasource.DataSource
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public void c(y8.e r3, java.util.concurrent.Executor r4) {
        /*
            r2 = this;
            o8.j.g(r3)
            o8.j.g(r4)
            monitor-enter(r2)
            boolean r0 = r2.f54053c     // Catch: java.lang.Throwable -> Ld
            if (r0 == 0) goto Lf
            monitor-exit(r2)     // Catch: java.lang.Throwable -> Ld
            return
        Ld:
            r3 = move-exception
            goto L43
        Lf:
            y8.a$d r0 = r2.f54052b     // Catch: java.lang.Throwable -> Ld
            y8.a$d r1 = y8.a.d.IN_PROGRESS     // Catch: java.lang.Throwable -> Ld
            if (r0 != r1) goto L1e
            java.util.concurrent.ConcurrentLinkedQueue r0 = r2.f54057g     // Catch: java.lang.Throwable -> Ld
            android.util.Pair r1 = android.util.Pair.create(r3, r4)     // Catch: java.lang.Throwable -> Ld
            r0.add(r1)     // Catch: java.lang.Throwable -> Ld
        L1e:
            boolean r0 = r2.a()     // Catch: java.lang.Throwable -> Ld
            if (r0 != 0) goto L33
            boolean r0 = r2.isFinished()     // Catch: java.lang.Throwable -> Ld
            if (r0 != 0) goto L33
            boolean r0 = r2.u()     // Catch: java.lang.Throwable -> Ld
            if (r0 == 0) goto L31
            goto L33
        L31:
            r0 = 0
            goto L34
        L33:
            r0 = 1
        L34:
            monitor-exit(r2)     // Catch: java.lang.Throwable -> Ld
            if (r0 == 0) goto L42
            boolean r0 = r2.h()
            boolean r1 = r2.u()
            r2.j(r3, r4, r0, r1)
        L42:
            return
        L43:
            monitor-exit(r2)     // Catch: java.lang.Throwable -> Ld
            throw r3
        */
        throw new UnsupportedOperationException("Method not decompiled: y8.a.c(y8.e, java.util.concurrent.Executor):void");
    }

    @Override // com.facebook.datasource.DataSource
    public boolean close() {
        synchronized (this) {
            try {
                if (this.f54053c) {
                    return false;
                }
                this.f54053c = true;
                Object obj = this.f54054d;
                this.f54054d = null;
                if (obj != null) {
                    f(obj);
                }
                if (!isFinished()) {
                    k();
                }
                synchronized (this) {
                    this.f54057g.clear();
                }
                return true;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    @Override // com.facebook.datasource.DataSource
    public synchronized float d() {
        return this.f54056f;
    }

    @Override // com.facebook.datasource.DataSource
    public boolean e() {
        return false;
    }

    @Override // com.facebook.datasource.DataSource
    public Map getExtras() {
        return this.f54051a;
    }

    @Override // com.facebook.datasource.DataSource
    public synchronized Object getResult() {
        return this.f54054d;
    }

    public synchronized boolean h() {
        boolean z10;
        if (this.f54052b == d.FAILURE) {
            z10 = true;
        } else {
            z10 = false;
        }
        return z10;
    }

    public synchronized boolean i() {
        return this.f54053c;
    }

    @Override // com.facebook.datasource.DataSource
    public synchronized boolean isFinished() {
        boolean z10;
        if (this.f54052b != d.IN_PROGRESS) {
            z10 = true;
        } else {
            z10 = false;
        }
        return z10;
    }

    protected void j(e eVar, Executor executor, boolean z10, boolean z11) {
        RunnableC0752a runnableC0752a = new RunnableC0752a(z10, eVar, z11);
        g();
        executor.execute(runnableC0752a);
    }

    protected void l() {
        Iterator it = this.f54057g.iterator();
        while (it.hasNext()) {
            Pair pair = (Pair) it.next();
            ((Executor) pair.second).execute(new b((e) pair.first));
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void m(Map map) {
        this.f54051a = map;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public boolean n(Throwable th2) {
        return o(th2, null);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public boolean o(Throwable th2, Map map) {
        boolean p10 = p(th2, map);
        if (p10) {
            k();
        }
        return p10;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public boolean q(float f10) {
        boolean r10 = r(f10);
        if (r10) {
            l();
        }
        return r10;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public boolean s(Object obj, boolean z10, Map map) {
        m(map);
        boolean t10 = t(obj, z10);
        if (t10) {
            k();
        }
        return t10;
    }

    protected void f(Object obj) {
    }
}
