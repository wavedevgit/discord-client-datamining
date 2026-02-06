package n3;

import android.os.Binder;
import android.os.Handler;
import android.os.Looper;
import android.os.Process;
import android.util.Log;
import java.util.concurrent.Callable;
import java.util.concurrent.CancellationException;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.Executor;
import java.util.concurrent.FutureTask;
import java.util.concurrent.atomic.AtomicBoolean;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
abstract class c {

    /* renamed from: p  reason: collision with root package name */
    private static Handler f38444p;

    /* renamed from: e  reason: collision with root package name */
    private volatile e f38446e = e.PENDING;

    /* renamed from: i  reason: collision with root package name */
    final AtomicBoolean f38447i = new AtomicBoolean();

    /* renamed from: o  reason: collision with root package name */
    final AtomicBoolean f38448o = new AtomicBoolean();

    /* renamed from: d  reason: collision with root package name */
    private final FutureTask f38445d = new b(new a());

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class a implements Callable {
        a() {
        }

        @Override // java.util.concurrent.Callable
        public Object call() {
            c.this.f38448o.set(true);
            Object obj = null;
            try {
                Process.setThreadPriority(10);
                obj = c.this.b();
                Binder.flushPendingCommands();
                return obj;
            } finally {
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class b extends FutureTask {
        b(Callable callable) {
            super(callable);
        }

        @Override // java.util.concurrent.FutureTask
        protected void done() {
            try {
                c.this.j(get());
            } catch (InterruptedException e10) {
                Log.w("AsyncTask", e10);
            } catch (CancellationException unused) {
                c.this.j(null);
            } catch (ExecutionException e11) {
                throw new RuntimeException("An error occurred while executing doInBackground()", e11.getCause());
            } catch (Throwable th2) {
                throw new RuntimeException("An error occurred while executing doInBackground()", th2);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: n3.c$c  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class RunnableC0529c implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Object f38451d;

        RunnableC0529c(Object obj) {
            this.f38451d = obj;
        }

        @Override // java.lang.Runnable
        public void run() {
            c.this.d(this.f38451d);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static /* synthetic */ class d {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f38453a;

        static {
            int[] iArr = new int[e.values().length];
            f38453a = iArr;
            try {
                iArr[e.RUNNING.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f38453a[e.FINISHED.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public enum e {
        PENDING,
        RUNNING,
        FINISHED
    }

    private static Handler e() {
        Handler handler;
        synchronized (c.class) {
            try {
                if (f38444p == null) {
                    f38444p = new Handler(Looper.getMainLooper());
                }
                handler = f38444p;
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return handler;
    }

    public final boolean a(boolean z10) {
        this.f38447i.set(true);
        return this.f38445d.cancel(z10);
    }

    protected abstract Object b();

    public final void c(Executor executor) {
        if (this.f38446e != e.PENDING) {
            int i10 = d.f38453a[this.f38446e.ordinal()];
            if (i10 != 1) {
                if (i10 != 2) {
                    throw new IllegalStateException("We should never reach this state");
                }
                throw new IllegalStateException("Cannot execute task: the task has already been executed (a task can be executed only once)");
            }
            throw new IllegalStateException("Cannot execute task: the task is already running.");
        }
        this.f38446e = e.RUNNING;
        executor.execute(this.f38445d);
    }

    void d(Object obj) {
        if (f()) {
            g(obj);
        } else {
            h(obj);
        }
        this.f38446e = e.FINISHED;
    }

    public final boolean f() {
        return this.f38447i.get();
    }

    protected abstract void g(Object obj);

    protected abstract void h(Object obj);

    void i(Object obj) {
        e().post(new RunnableC0529c(obj));
    }

    void j(Object obj) {
        if (!this.f38448o.get()) {
            i(obj);
        }
    }
}
