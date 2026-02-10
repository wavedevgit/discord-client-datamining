package zg;

import com.google.android.gms.tasks.OnCompleteListener;
import com.google.android.gms.tasks.Task;
import java.util.concurrent.CancellationException;
import java.util.concurrent.Executor;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class m0 extends Task {

    /* renamed from: a  reason: collision with root package name */
    private final Object f56451a = new Object();

    /* renamed from: b  reason: collision with root package name */
    private final i0 f56452b = new i0();

    /* renamed from: c  reason: collision with root package name */
    private boolean f56453c;

    /* renamed from: d  reason: collision with root package name */
    private volatile boolean f56454d;

    /* renamed from: e  reason: collision with root package name */
    private Object f56455e;

    /* renamed from: f  reason: collision with root package name */
    private Exception f56456f;

    private final void A() {
        synchronized (this.f56451a) {
            try {
                if (!this.f56453c) {
                    return;
                }
                this.f56452b.b(this);
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    private final void x() {
        hf.q.o(this.f56453c, "Task is not yet complete");
    }

    private final void y() {
        if (!this.f56454d) {
            return;
        }
        throw new CancellationException("Task is already canceled.");
    }

    private final void z() {
        if (!this.f56453c) {
            return;
        }
        throw d.a(this);
    }

    @Override // com.google.android.gms.tasks.Task
    public final Task a(Executor executor, e eVar) {
        this.f56452b.a(new y(executor, eVar));
        A();
        return this;
    }

    @Override // com.google.android.gms.tasks.Task
    public final Task addOnCompleteListener(OnCompleteListener onCompleteListener) {
        this.f56452b.a(new a0(l.f56448a, onCompleteListener));
        A();
        return this;
    }

    @Override // com.google.android.gms.tasks.Task
    public final Task b(e eVar) {
        a(l.f56448a, eVar);
        return this;
    }

    @Override // com.google.android.gms.tasks.Task
    public final Task c(Executor executor, OnCompleteListener onCompleteListener) {
        this.f56452b.a(new a0(executor, onCompleteListener));
        A();
        return this;
    }

    @Override // com.google.android.gms.tasks.Task
    public final Task d(Executor executor, f fVar) {
        this.f56452b.a(new c0(executor, fVar));
        A();
        return this;
    }

    @Override // com.google.android.gms.tasks.Task
    public final Task e(f fVar) {
        d(l.f56448a, fVar);
        return this;
    }

    @Override // com.google.android.gms.tasks.Task
    public final Task f(Executor executor, g gVar) {
        this.f56452b.a(new e0(executor, gVar));
        A();
        return this;
    }

    @Override // com.google.android.gms.tasks.Task
    public final Task g(g gVar) {
        f(l.f56448a, gVar);
        return this;
    }

    @Override // com.google.android.gms.tasks.Task
    public final Task h(Executor executor, c cVar) {
        m0 m0Var = new m0();
        this.f56452b.a(new u(executor, cVar, m0Var));
        A();
        return m0Var;
    }

    @Override // com.google.android.gms.tasks.Task
    public final Task i(Executor executor, c cVar) {
        m0 m0Var = new m0();
        this.f56452b.a(new w(executor, cVar, m0Var));
        A();
        return m0Var;
    }

    @Override // com.google.android.gms.tasks.Task
    public final Task j(c cVar) {
        return i(l.f56448a, cVar);
    }

    @Override // com.google.android.gms.tasks.Task
    public final Exception k() {
        Exception exc;
        synchronized (this.f56451a) {
            exc = this.f56456f;
        }
        return exc;
    }

    @Override // com.google.android.gms.tasks.Task
    public final Object l() {
        Object obj;
        synchronized (this.f56451a) {
            try {
                x();
                y();
                Exception exc = this.f56456f;
                if (exc == null) {
                    obj = this.f56455e;
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
        synchronized (this.f56451a) {
            try {
                x();
                y();
                if (!cls.isInstance(this.f56456f)) {
                    Exception exc = this.f56456f;
                    if (exc == null) {
                        obj = this.f56455e;
                    } else {
                        throw new i(exc);
                    }
                } else {
                    throw ((Throwable) cls.cast(this.f56456f));
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return obj;
    }

    @Override // com.google.android.gms.tasks.Task
    public final boolean n() {
        return this.f56454d;
    }

    @Override // com.google.android.gms.tasks.Task
    public final boolean o() {
        boolean z10;
        synchronized (this.f56451a) {
            z10 = this.f56453c;
        }
        return z10;
    }

    @Override // com.google.android.gms.tasks.Task
    public final boolean p() {
        boolean z10;
        synchronized (this.f56451a) {
            try {
                z10 = false;
                if (this.f56453c && !this.f56454d && this.f56456f == null) {
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
        this.f56452b.a(new g0(executor, jVar, m0Var));
        A();
        return m0Var;
    }

    @Override // com.google.android.gms.tasks.Task
    public final Task r(j jVar) {
        Executor executor = l.f56448a;
        m0 m0Var = new m0();
        this.f56452b.a(new g0(executor, jVar, m0Var));
        A();
        return m0Var;
    }

    public final void s(Exception exc) {
        hf.q.m(exc, "Exception must not be null");
        synchronized (this.f56451a) {
            z();
            this.f56453c = true;
            this.f56456f = exc;
        }
        this.f56452b.b(this);
    }

    public final void t(Object obj) {
        synchronized (this.f56451a) {
            z();
            this.f56453c = true;
            this.f56455e = obj;
        }
        this.f56452b.b(this);
    }

    public final boolean u() {
        synchronized (this.f56451a) {
            try {
                if (this.f56453c) {
                    return false;
                }
                this.f56453c = true;
                this.f56454d = true;
                this.f56452b.b(this);
                return true;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public final boolean v(Exception exc) {
        hf.q.m(exc, "Exception must not be null");
        synchronized (this.f56451a) {
            try {
                if (this.f56453c) {
                    return false;
                }
                this.f56453c = true;
                this.f56456f = exc;
                this.f56452b.b(this);
                return true;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public final boolean w(Object obj) {
        synchronized (this.f56451a) {
            try {
                if (this.f56453c) {
                    return false;
                }
                this.f56453c = true;
                this.f56455e = obj;
                this.f56452b.b(this);
                return true;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }
}
