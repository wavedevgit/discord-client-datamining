package zg;

import com.google.android.gms.tasks.OnCompleteListener;
import com.google.android.gms.tasks.Task;
import java.util.concurrent.CancellationException;
import java.util.concurrent.Executor;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class m0 extends Task {

    /* renamed from: a  reason: collision with root package name */
    private final Object f56412a = new Object();

    /* renamed from: b  reason: collision with root package name */
    private final i0 f56413b = new i0();

    /* renamed from: c  reason: collision with root package name */
    private boolean f56414c;

    /* renamed from: d  reason: collision with root package name */
    private volatile boolean f56415d;

    /* renamed from: e  reason: collision with root package name */
    private Object f56416e;

    /* renamed from: f  reason: collision with root package name */
    private Exception f56417f;

    private final void A() {
        synchronized (this.f56412a) {
            try {
                if (!this.f56414c) {
                    return;
                }
                this.f56413b.b(this);
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    private final void x() {
        hf.q.o(this.f56414c, "Task is not yet complete");
    }

    private final void y() {
        if (!this.f56415d) {
            return;
        }
        throw new CancellationException("Task is already canceled.");
    }

    private final void z() {
        if (!this.f56414c) {
            return;
        }
        throw d.a(this);
    }

    @Override // com.google.android.gms.tasks.Task
    public final Task a(Executor executor, e eVar) {
        this.f56413b.a(new y(executor, eVar));
        A();
        return this;
    }

    @Override // com.google.android.gms.tasks.Task
    public final Task addOnCompleteListener(OnCompleteListener onCompleteListener) {
        this.f56413b.a(new a0(l.f56409a, onCompleteListener));
        A();
        return this;
    }

    @Override // com.google.android.gms.tasks.Task
    public final Task b(e eVar) {
        a(l.f56409a, eVar);
        return this;
    }

    @Override // com.google.android.gms.tasks.Task
    public final Task c(Executor executor, OnCompleteListener onCompleteListener) {
        this.f56413b.a(new a0(executor, onCompleteListener));
        A();
        return this;
    }

    @Override // com.google.android.gms.tasks.Task
    public final Task d(Executor executor, f fVar) {
        this.f56413b.a(new c0(executor, fVar));
        A();
        return this;
    }

    @Override // com.google.android.gms.tasks.Task
    public final Task e(f fVar) {
        d(l.f56409a, fVar);
        return this;
    }

    @Override // com.google.android.gms.tasks.Task
    public final Task f(Executor executor, g gVar) {
        this.f56413b.a(new e0(executor, gVar));
        A();
        return this;
    }

    @Override // com.google.android.gms.tasks.Task
    public final Task g(g gVar) {
        f(l.f56409a, gVar);
        return this;
    }

    @Override // com.google.android.gms.tasks.Task
    public final Task h(Executor executor, c cVar) {
        m0 m0Var = new m0();
        this.f56413b.a(new u(executor, cVar, m0Var));
        A();
        return m0Var;
    }

    @Override // com.google.android.gms.tasks.Task
    public final Task i(Executor executor, c cVar) {
        m0 m0Var = new m0();
        this.f56413b.a(new w(executor, cVar, m0Var));
        A();
        return m0Var;
    }

    @Override // com.google.android.gms.tasks.Task
    public final Task j(c cVar) {
        return i(l.f56409a, cVar);
    }

    @Override // com.google.android.gms.tasks.Task
    public final Exception k() {
        Exception exc;
        synchronized (this.f56412a) {
            exc = this.f56417f;
        }
        return exc;
    }

    @Override // com.google.android.gms.tasks.Task
    public final Object l() {
        Object obj;
        synchronized (this.f56412a) {
            try {
                x();
                y();
                Exception exc = this.f56417f;
                if (exc == null) {
                    obj = this.f56416e;
                } else {
                    throw new i(exc);
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return obj;
    }

    @Override // com.google.android.gms.tasks.Task
    public final Object m(Class cls) {
        Object obj;
        synchronized (this.f56412a) {
            try {
                x();
                y();
                if (!cls.isInstance(this.f56417f)) {
                    Exception exc = this.f56417f;
                    if (exc == null) {
                        obj = this.f56416e;
                    } else {
                        throw new i(exc);
                    }
                } else {
                    throw ((Throwable) cls.cast(this.f56417f));
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return obj;
    }

    @Override // com.google.android.gms.tasks.Task
    public final boolean n() {
        return this.f56415d;
    }

    @Override // com.google.android.gms.tasks.Task
    public final boolean o() {
        boolean z10;
        synchronized (this.f56412a) {
            z10 = this.f56414c;
        }
        return z10;
    }

    @Override // com.google.android.gms.tasks.Task
    public final boolean p() {
        boolean z10;
        synchronized (this.f56412a) {
            try {
                z10 = false;
                if (this.f56414c && !this.f56415d && this.f56417f == null) {
                    z10 = true;
                }
            } finally {
            }
        }
        return z10;
    }

    @Override // com.google.android.gms.tasks.Task
    public final Task q(Executor executor, j jVar) {
        m0 m0Var = new m0();
        this.f56413b.a(new g0(executor, jVar, m0Var));
        A();
        return m0Var;
    }

    @Override // com.google.android.gms.tasks.Task
    public final Task r(j jVar) {
        Executor executor = l.f56409a;
        m0 m0Var = new m0();
        this.f56413b.a(new g0(executor, jVar, m0Var));
        A();
        return m0Var;
    }

    public final void s(Exception exc) {
        hf.q.m(exc, "Exception must not be null");
        synchronized (this.f56412a) {
            z();
            this.f56414c = true;
            this.f56417f = exc;
        }
        this.f56413b.b(this);
    }

    public final void t(Object obj) {
        synchronized (this.f56412a) {
            z();
            this.f56414c = true;
            this.f56416e = obj;
        }
        this.f56413b.b(this);
    }

    public final boolean u() {
        synchronized (this.f56412a) {
            try {
                if (this.f56414c) {
                    return false;
                }
                this.f56414c = true;
                this.f56415d = true;
                this.f56413b.b(this);
                return true;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public final boolean v(Exception exc) {
        hf.q.m(exc, "Exception must not be null");
        synchronized (this.f56412a) {
            try {
                if (this.f56414c) {
                    return false;
                }
                this.f56414c = true;
                this.f56417f = exc;
                this.f56413b.b(this);
                return true;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public final boolean w(Object obj) {
        synchronized (this.f56412a) {
            try {
                if (this.f56414c) {
                    return false;
                }
                this.f56414c = true;
                this.f56416e = obj;
                this.f56413b.b(this);
                return true;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }
}
