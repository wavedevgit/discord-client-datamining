package zg;

import com.google.android.gms.tasks.OnCompleteListener;
import com.google.android.gms.tasks.Task;
import java.util.concurrent.CancellationException;
import java.util.concurrent.Executor;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class m0 extends Task {

    /* renamed from: a  reason: collision with root package name */
    private final Object f57020a = new Object();

    /* renamed from: b  reason: collision with root package name */
    private final i0 f57021b = new i0();

    /* renamed from: c  reason: collision with root package name */
    private boolean f57022c;

    /* renamed from: d  reason: collision with root package name */
    private volatile boolean f57023d;

    /* renamed from: e  reason: collision with root package name */
    private Object f57024e;

    /* renamed from: f  reason: collision with root package name */
    private Exception f57025f;

    private final void A() {
        synchronized (this.f57020a) {
            try {
                if (!this.f57022c) {
                    return;
                }
                this.f57021b.b(this);
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    private final void x() {
        hf.q.o(this.f57022c, "Task is not yet complete");
    }

    private final void y() {
        if (!this.f57023d) {
            return;
        }
        throw new CancellationException("Task is already canceled.");
    }

    private final void z() {
        if (!this.f57022c) {
            return;
        }
        throw d.a(this);
    }

    @Override // com.google.android.gms.tasks.Task
    public final Task a(Executor executor, e eVar) {
        this.f57021b.a(new y(executor, eVar));
        A();
        return this;
    }

    @Override // com.google.android.gms.tasks.Task
    public final Task addOnCompleteListener(OnCompleteListener onCompleteListener) {
        this.f57021b.a(new a0(l.f57017a, onCompleteListener));
        A();
        return this;
    }

    @Override // com.google.android.gms.tasks.Task
    public final Task b(e eVar) {
        a(l.f57017a, eVar);
        return this;
    }

    @Override // com.google.android.gms.tasks.Task
    public final Task c(Executor executor, OnCompleteListener onCompleteListener) {
        this.f57021b.a(new a0(executor, onCompleteListener));
        A();
        return this;
    }

    @Override // com.google.android.gms.tasks.Task
    public final Task d(Executor executor, f fVar) {
        this.f57021b.a(new c0(executor, fVar));
        A();
        return this;
    }

    @Override // com.google.android.gms.tasks.Task
    public final Task e(f fVar) {
        d(l.f57017a, fVar);
        return this;
    }

    @Override // com.google.android.gms.tasks.Task
    public final Task f(Executor executor, g gVar) {
        this.f57021b.a(new e0(executor, gVar));
        A();
        return this;
    }

    @Override // com.google.android.gms.tasks.Task
    public final Task g(g gVar) {
        f(l.f57017a, gVar);
        return this;
    }

    @Override // com.google.android.gms.tasks.Task
    public final Task h(Executor executor, c cVar) {
        m0 m0Var = new m0();
        this.f57021b.a(new u(executor, cVar, m0Var));
        A();
        return m0Var;
    }

    @Override // com.google.android.gms.tasks.Task
    public final Task i(Executor executor, c cVar) {
        m0 m0Var = new m0();
        this.f57021b.a(new w(executor, cVar, m0Var));
        A();
        return m0Var;
    }

    @Override // com.google.android.gms.tasks.Task
    public final Task j(c cVar) {
        return i(l.f57017a, cVar);
    }

    @Override // com.google.android.gms.tasks.Task
    public final Exception k() {
        Exception exc;
        synchronized (this.f57020a) {
            exc = this.f57025f;
        }
        return exc;
    }

    @Override // com.google.android.gms.tasks.Task
    public final Object l() {
        Object obj;
        synchronized (this.f57020a) {
            try {
                x();
                y();
                Exception exc = this.f57025f;
                if (exc == null) {
                    obj = this.f57024e;
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
        synchronized (this.f57020a) {
            try {
                x();
                y();
                if (!cls.isInstance(this.f57025f)) {
                    Exception exc = this.f57025f;
                    if (exc == null) {
                        obj = this.f57024e;
                    } else {
                        throw new i(exc);
                    }
                } else {
                    throw ((Throwable) cls.cast(this.f57025f));
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return obj;
    }

    @Override // com.google.android.gms.tasks.Task
    public final boolean n() {
        return this.f57023d;
    }

    @Override // com.google.android.gms.tasks.Task
    public final boolean o() {
        boolean z10;
        synchronized (this.f57020a) {
            z10 = this.f57022c;
        }
        return z10;
    }

    @Override // com.google.android.gms.tasks.Task
    public final boolean p() {
        boolean z10;
        synchronized (this.f57020a) {
            try {
                z10 = false;
                if (this.f57022c && !this.f57023d && this.f57025f == null) {
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
        this.f57021b.a(new g0(executor, jVar, m0Var));
        A();
        return m0Var;
    }

    @Override // com.google.android.gms.tasks.Task
    public final Task r(j jVar) {
        Executor executor = l.f57017a;
        m0 m0Var = new m0();
        this.f57021b.a(new g0(executor, jVar, m0Var));
        A();
        return m0Var;
    }

    public final void s(Exception exc) {
        hf.q.m(exc, "Exception must not be null");
        synchronized (this.f57020a) {
            z();
            this.f57022c = true;
            this.f57025f = exc;
        }
        this.f57021b.b(this);
    }

    public final void t(Object obj) {
        synchronized (this.f57020a) {
            z();
            this.f57022c = true;
            this.f57024e = obj;
        }
        this.f57021b.b(this);
    }

    public final boolean u() {
        synchronized (this.f57020a) {
            try {
                if (this.f57022c) {
                    return false;
                }
                this.f57022c = true;
                this.f57023d = true;
                this.f57021b.b(this);
                return true;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public final boolean v(Exception exc) {
        hf.q.m(exc, "Exception must not be null");
        synchronized (this.f57020a) {
            try {
                if (this.f57022c) {
                    return false;
                }
                this.f57022c = true;
                this.f57025f = exc;
                this.f57021b.b(this);
                return true;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public final boolean w(Object obj) {
        synchronized (this.f57020a) {
            try {
                if (this.f57022c) {
                    return false;
                }
                this.f57022c = true;
                this.f57024e = obj;
                this.f57021b.b(this);
                return true;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }
}
