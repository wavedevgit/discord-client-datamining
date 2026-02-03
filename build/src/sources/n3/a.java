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
    private Executor f39574i;

    /* renamed from: j  reason: collision with root package name */
    private volatile RunnableC0515a f39575j;

    /* renamed from: k  reason: collision with root package name */
    private volatile RunnableC0515a f39576k;

    /* renamed from: l  reason: collision with root package name */
    private long f39577l;

    /* renamed from: m  reason: collision with root package name */
    private long f39578m;

    /* renamed from: n  reason: collision with root package name */
    private Handler f39579n;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: n3.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public final class RunnableC0515a extends c implements Runnable {

        /* renamed from: q  reason: collision with root package name */
        boolean f39580q;

        RunnableC0515a() {
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
            this.f39580q = false;
            a.this.A();
        }
    }

    public a(Context context) {
        super(context);
        this.f39578m = -10000L;
    }

    void A() {
        if (this.f39576k == null && this.f39575j != null) {
            if (this.f39575j.f39580q) {
                this.f39575j.f39580q = false;
                this.f39579n.removeCallbacks(this.f39575j);
            }
            if (this.f39577l > 0 && SystemClock.uptimeMillis() < this.f39578m + this.f39577l) {
                this.f39575j.f39580q = true;
                this.f39579n.postAtTime(this.f39575j, this.f39578m + this.f39577l);
                return;
            }
            if (this.f39574i == null) {
                this.f39574i = B();
            }
            this.f39575j.c(this.f39574i);
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
        if (this.f39575j != null) {
            printWriter.print(str);
            printWriter.print("mTask=");
            printWriter.print(this.f39575j);
            printWriter.print(" waiting=");
            printWriter.println(this.f39575j.f39580q);
        }
        if (this.f39576k != null) {
            printWriter.print(str);
            printWriter.print("mCancellingTask=");
            printWriter.print(this.f39576k);
            printWriter.print(" waiting=");
            printWriter.println(this.f39576k.f39580q);
        }
        if (this.f39577l != 0) {
            printWriter.print(str);
            printWriter.print("mUpdateThrottle=");
            printWriter.print(DateUtils.formatElapsedTime(TimeUnit.MILLISECONDS.toSeconds(this.f39577l)));
            printWriter.print(" mLastLoadCompleteTime=");
            if (this.f39578m == -10000) {
                str2 = "--";
            } else {
                str2 = "-" + DateUtils.formatElapsedTime(timeUnit.toSeconds(SystemClock.uptimeMillis() - this.f39578m));
            }
            printWriter.print(str2);
            printWriter.println();
        }
    }

    @Override // n3.b
    protected boolean l() {
        if (this.f39575j == null) {
            return false;
        }
        if (!j()) {
            m();
        }
        if (this.f39576k != null) {
            if (this.f39575j.f39580q) {
                this.f39575j.f39580q = false;
                this.f39579n.removeCallbacks(this.f39575j);
            }
            this.f39575j = null;
            return false;
        } else if (this.f39575j.f39580q) {
            this.f39575j.f39580q = false;
            this.f39579n.removeCallbacks(this.f39575j);
            this.f39575j = null;
            return false;
        } else {
            boolean a10 = this.f39575j.a(false);
            if (a10) {
                this.f39576k = this.f39575j;
                x();
            }
            this.f39575j = null;
            return a10;
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // n3.b
    public void n() {
        super.n();
        b();
        this.f39575j = new RunnableC0515a();
        A();
    }

    void y(RunnableC0515a runnableC0515a, Object obj) {
        D(obj);
        if (this.f39576k == runnableC0515a) {
            t();
            this.f39578m = SystemClock.uptimeMillis();
            this.f39576k = null;
            e();
            A();
        }
    }

    void z(RunnableC0515a runnableC0515a, Object obj) {
        if (this.f39575j != runnableC0515a) {
            y(runnableC0515a, obj);
        } else if (i()) {
            D(obj);
        } else {
            c();
            this.f39578m = SystemClock.uptimeMillis();
            this.f39575j = null;
            f(obj);
        }
    }

    public void x() {
    }

    public void D(Object obj) {
    }
}
