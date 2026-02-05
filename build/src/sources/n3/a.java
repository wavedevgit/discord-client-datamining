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
    private Executor f39073i;

    /* renamed from: j  reason: collision with root package name */
    private volatile RunnableC0514a f39074j;

    /* renamed from: k  reason: collision with root package name */
    private volatile RunnableC0514a f39075k;

    /* renamed from: l  reason: collision with root package name */
    private long f39076l;

    /* renamed from: m  reason: collision with root package name */
    private long f39077m;

    /* renamed from: n  reason: collision with root package name */
    private Handler f39078n;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: n3.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public final class RunnableC0514a extends c implements Runnable {

        /* renamed from: q  reason: collision with root package name */
        boolean f39079q;

        RunnableC0514a() {
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
            this.f39079q = false;
            a.this.A();
        }
    }

    public a(Context context) {
        super(context);
        this.f39077m = -10000L;
    }

    void A() {
        if (this.f39075k == null && this.f39074j != null) {
            if (this.f39074j.f39079q) {
                this.f39074j.f39079q = false;
                this.f39078n.removeCallbacks(this.f39074j);
            }
            if (this.f39076l > 0 && SystemClock.uptimeMillis() < this.f39077m + this.f39076l) {
                this.f39074j.f39079q = true;
                this.f39078n.postAtTime(this.f39074j, this.f39077m + this.f39076l);
                return;
            }
            if (this.f39073i == null) {
                this.f39073i = B();
            }
            this.f39074j.c(this.f39073i);
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
        if (this.f39074j != null) {
            printWriter.print(str);
            printWriter.print("mTask=");
            printWriter.print(this.f39074j);
            printWriter.print(" waiting=");
            printWriter.println(this.f39074j.f39079q);
        }
        if (this.f39075k != null) {
            printWriter.print(str);
            printWriter.print("mCancellingTask=");
            printWriter.print(this.f39075k);
            printWriter.print(" waiting=");
            printWriter.println(this.f39075k.f39079q);
        }
        if (this.f39076l != 0) {
            printWriter.print(str);
            printWriter.print("mUpdateThrottle=");
            printWriter.print(DateUtils.formatElapsedTime(TimeUnit.MILLISECONDS.toSeconds(this.f39076l)));
            printWriter.print(" mLastLoadCompleteTime=");
            if (this.f39077m == -10000) {
                str2 = "--";
            } else {
                str2 = "-" + DateUtils.formatElapsedTime(timeUnit.toSeconds(SystemClock.uptimeMillis() - this.f39077m));
            }
            printWriter.print(str2);
            printWriter.println();
        }
    }

    @Override // n3.b
    protected boolean l() {
        if (this.f39074j == null) {
            return false;
        }
        if (!j()) {
            m();
        }
        if (this.f39075k != null) {
            if (this.f39074j.f39079q) {
                this.f39074j.f39079q = false;
                this.f39078n.removeCallbacks(this.f39074j);
            }
            this.f39074j = null;
            return false;
        } else if (this.f39074j.f39079q) {
            this.f39074j.f39079q = false;
            this.f39078n.removeCallbacks(this.f39074j);
            this.f39074j = null;
            return false;
        } else {
            boolean a10 = this.f39074j.a(false);
            if (a10) {
                this.f39075k = this.f39074j;
                x();
            }
            this.f39074j = null;
            return a10;
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // n3.b
    public void n() {
        super.n();
        b();
        this.f39074j = new RunnableC0514a();
        A();
    }

    void y(RunnableC0514a runnableC0514a, Object obj) {
        D(obj);
        if (this.f39075k == runnableC0514a) {
            t();
            this.f39077m = SystemClock.uptimeMillis();
            this.f39075k = null;
            e();
            A();
        }
    }

    void z(RunnableC0514a runnableC0514a, Object obj) {
        if (this.f39074j != runnableC0514a) {
            y(runnableC0514a, obj);
        } else if (i()) {
            D(obj);
        } else {
            c();
            this.f39077m = SystemClock.uptimeMillis();
            this.f39074j = null;
            f(obj);
        }
    }

    public void x() {
    }

    public void D(Object obj) {
    }
}
