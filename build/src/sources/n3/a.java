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
    private Executor f39613i;

    /* renamed from: j  reason: collision with root package name */
    private volatile RunnableC0512a f39614j;

    /* renamed from: k  reason: collision with root package name */
    private volatile RunnableC0512a f39615k;

    /* renamed from: l  reason: collision with root package name */
    private long f39616l;

    /* renamed from: m  reason: collision with root package name */
    private long f39617m;

    /* renamed from: n  reason: collision with root package name */
    private Handler f39618n;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: n3.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public final class RunnableC0512a extends c implements Runnable {

        /* renamed from: q  reason: collision with root package name */
        boolean f39619q;

        RunnableC0512a() {
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
            this.f39619q = false;
            a.this.A();
        }
    }

    public a(Context context) {
        super(context);
        this.f39617m = -10000L;
    }

    void A() {
        if (this.f39615k == null && this.f39614j != null) {
            if (this.f39614j.f39619q) {
                this.f39614j.f39619q = false;
                this.f39618n.removeCallbacks(this.f39614j);
            }
            if (this.f39616l > 0 && SystemClock.uptimeMillis() < this.f39617m + this.f39616l) {
                this.f39614j.f39619q = true;
                this.f39618n.postAtTime(this.f39614j, this.f39617m + this.f39616l);
                return;
            }
            if (this.f39613i == null) {
                this.f39613i = B();
            }
            this.f39614j.c(this.f39613i);
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
        if (this.f39614j != null) {
            printWriter.print(str);
            printWriter.print("mTask=");
            printWriter.print(this.f39614j);
            printWriter.print(" waiting=");
            printWriter.println(this.f39614j.f39619q);
        }
        if (this.f39615k != null) {
            printWriter.print(str);
            printWriter.print("mCancellingTask=");
            printWriter.print(this.f39615k);
            printWriter.print(" waiting=");
            printWriter.println(this.f39615k.f39619q);
        }
        if (this.f39616l != 0) {
            printWriter.print(str);
            printWriter.print("mUpdateThrottle=");
            printWriter.print(DateUtils.formatElapsedTime(TimeUnit.MILLISECONDS.toSeconds(this.f39616l)));
            printWriter.print(" mLastLoadCompleteTime=");
            if (this.f39617m == -10000) {
                str2 = "--";
            } else {
                str2 = "-" + DateUtils.formatElapsedTime(timeUnit.toSeconds(SystemClock.uptimeMillis() - this.f39617m));
            }
            printWriter.print(str2);
            printWriter.println();
        }
    }

    @Override // n3.b
    protected boolean l() {
        if (this.f39614j == null) {
            return false;
        }
        if (!j()) {
            m();
        }
        if (this.f39615k != null) {
            if (this.f39614j.f39619q) {
                this.f39614j.f39619q = false;
                this.f39618n.removeCallbacks(this.f39614j);
            }
            this.f39614j = null;
            return false;
        } else if (this.f39614j.f39619q) {
            this.f39614j.f39619q = false;
            this.f39618n.removeCallbacks(this.f39614j);
            this.f39614j = null;
            return false;
        } else {
            boolean a10 = this.f39614j.a(false);
            if (a10) {
                this.f39615k = this.f39614j;
                x();
            }
            this.f39614j = null;
            return a10;
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // n3.b
    public void n() {
        super.n();
        b();
        this.f39614j = new RunnableC0512a();
        A();
    }

    void y(RunnableC0512a runnableC0512a, Object obj) {
        D(obj);
        if (this.f39615k == runnableC0512a) {
            t();
            this.f39617m = SystemClock.uptimeMillis();
            this.f39615k = null;
            e();
            A();
        }
    }

    void z(RunnableC0512a runnableC0512a, Object obj) {
        if (this.f39614j != runnableC0512a) {
            y(runnableC0512a, obj);
        } else if (i()) {
            D(obj);
        } else {
            c();
            this.f39617m = SystemClock.uptimeMillis();
            this.f39614j = null;
            f(obj);
        }
    }

    public void x() {
    }

    public void D(Object obj) {
    }
}
