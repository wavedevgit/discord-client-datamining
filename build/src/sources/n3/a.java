package n3;

import android.content.Context;
import android.os.AsyncTask;
import android.os.Handler;
import android.os.SystemClock;
import android.text.format.DateUtils;
import java.io.FileDescriptor;
import java.io.PrintWriter;
import java.util.concurrent.Executor;
import java.util.concurrent.TimeUnit;
import w1.h;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class a extends b {

    /* renamed from: i  reason: collision with root package name */
    private Executor f36778i;

    /* renamed from: j  reason: collision with root package name */
    private volatile RunnableC0523a f36779j;

    /* renamed from: k  reason: collision with root package name */
    private volatile RunnableC0523a f36780k;

    /* renamed from: l  reason: collision with root package name */
    private long f36781l;

    /* renamed from: m  reason: collision with root package name */
    private long f36782m;

    /* renamed from: n  reason: collision with root package name */
    private Handler f36783n;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: n3.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public final class RunnableC0523a extends c implements Runnable {

        /* renamed from: q  reason: collision with root package name */
        boolean f36784q;

        RunnableC0523a() {
        }

        @Override // n3.c
        protected Object b() {
            try {
                return a.this.E();
            } catch (h e10) {
                if (f()) {
                    return null;
                }
                throw e10;
            }
        }

        @Override // n3.c
        protected void g(Object obj) {
            a.this.y(this, obj);
        }

        @Override // n3.c
        protected void h(Object obj) {
            a.this.z(this, obj);
        }

        @Override // java.lang.Runnable
        public void run() {
            this.f36784q = false;
            a.this.A();
        }
    }

    public a(Context context) {
        super(context);
        this.f36782m = -10000L;
    }

    void A() {
        if (this.f36780k == null && this.f36779j != null) {
            if (this.f36779j.f36784q) {
                this.f36779j.f36784q = false;
                this.f36783n.removeCallbacks(this.f36779j);
            }
            if (this.f36781l > 0 && SystemClock.uptimeMillis() < this.f36782m + this.f36781l) {
                this.f36779j.f36784q = true;
                this.f36783n.postAtTime(this.f36779j, this.f36782m + this.f36781l);
                return;
            }
            if (this.f36778i == null) {
                this.f36778i = B();
            }
            this.f36779j.c(this.f36778i);
        }
    }

    protected Executor B() {
        return AsyncTask.THREAD_POOL_EXECUTOR;
    }

    public abstract Object C();

    protected Object E() {
        return C();
    }

    @Override // n3.b
    public void g(String str, FileDescriptor fileDescriptor, PrintWriter printWriter, String[] strArr) {
        TimeUnit timeUnit;
        String str2;
        super.g(str, fileDescriptor, printWriter, strArr);
        if (this.f36779j != null) {
            printWriter.print(str);
            printWriter.print("mTask=");
            printWriter.print(this.f36779j);
            printWriter.print(" waiting=");
            printWriter.println(this.f36779j.f36784q);
        }
        if (this.f36780k != null) {
            printWriter.print(str);
            printWriter.print("mCancellingTask=");
            printWriter.print(this.f36780k);
            printWriter.print(" waiting=");
            printWriter.println(this.f36780k.f36784q);
        }
        if (this.f36781l != 0) {
            printWriter.print(str);
            printWriter.print("mUpdateThrottle=");
            printWriter.print(DateUtils.formatElapsedTime(TimeUnit.MILLISECONDS.toSeconds(this.f36781l)));
            printWriter.print(" mLastLoadCompleteTime=");
            if (this.f36782m == -10000) {
                str2 = "--";
            } else {
                str2 = "-" + DateUtils.formatElapsedTime(timeUnit.toSeconds(SystemClock.uptimeMillis() - this.f36782m));
            }
            printWriter.print(str2);
            printWriter.println();
        }
    }

    @Override // n3.b
    protected boolean l() {
        if (this.f36779j == null) {
            return false;
        }
        if (!j()) {
            m();
        }
        if (this.f36780k != null) {
            if (this.f36779j.f36784q) {
                this.f36779j.f36784q = false;
                this.f36783n.removeCallbacks(this.f36779j);
            }
            this.f36779j = null;
            return false;
        } else if (this.f36779j.f36784q) {
            this.f36779j.f36784q = false;
            this.f36783n.removeCallbacks(this.f36779j);
            this.f36779j = null;
            return false;
        } else {
            boolean a10 = this.f36779j.a(false);
            if (a10) {
                this.f36780k = this.f36779j;
                x();
            }
            this.f36779j = null;
            return a10;
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // n3.b
    public void n() {
        super.n();
        b();
        this.f36779j = new RunnableC0523a();
        A();
    }

    void y(RunnableC0523a runnableC0523a, Object obj) {
        D(obj);
        if (this.f36780k == runnableC0523a) {
            t();
            this.f36782m = SystemClock.uptimeMillis();
            this.f36780k = null;
            e();
            A();
        }
    }

    void z(RunnableC0523a runnableC0523a, Object obj) {
        if (this.f36779j != runnableC0523a) {
            y(runnableC0523a, obj);
        } else if (i()) {
            D(obj);
        } else {
            c();
            this.f36782m = SystemClock.uptimeMillis();
            this.f36779j = null;
            f(obj);
        }
    }

    public void x() {
    }

    public void D(Object obj) {
    }
}
