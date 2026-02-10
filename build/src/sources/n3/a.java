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
    private Executor f36777i;

    /* renamed from: j  reason: collision with root package name */
    private volatile RunnableC0523a f36778j;

    /* renamed from: k  reason: collision with root package name */
    private volatile RunnableC0523a f36779k;

    /* renamed from: l  reason: collision with root package name */
    private long f36780l;

    /* renamed from: m  reason: collision with root package name */
    private long f36781m;

    /* renamed from: n  reason: collision with root package name */
    private Handler f36782n;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: n3.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public final class RunnableC0523a extends c implements Runnable {

        /* renamed from: q  reason: collision with root package name */
        boolean f36783q;

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
            this.f36783q = false;
            a.this.A();
        }
    }

    public a(Context context) {
        super(context);
        this.f36781m = -10000L;
    }

    void A() {
        if (this.f36779k == null && this.f36778j != null) {
            if (this.f36778j.f36783q) {
                this.f36778j.f36783q = false;
                this.f36782n.removeCallbacks(this.f36778j);
            }
            if (this.f36780l > 0 && SystemClock.uptimeMillis() < this.f36781m + this.f36780l) {
                this.f36778j.f36783q = true;
                this.f36782n.postAtTime(this.f36778j, this.f36781m + this.f36780l);
                return;
            }
            if (this.f36777i == null) {
                this.f36777i = B();
            }
            this.f36778j.c(this.f36777i);
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
        if (this.f36778j != null) {
            printWriter.print(str);
            printWriter.print("mTask=");
            printWriter.print(this.f36778j);
            printWriter.print(" waiting=");
            printWriter.println(this.f36778j.f36783q);
        }
        if (this.f36779k != null) {
            printWriter.print(str);
            printWriter.print("mCancellingTask=");
            printWriter.print(this.f36779k);
            printWriter.print(" waiting=");
            printWriter.println(this.f36779k.f36783q);
        }
        if (this.f36780l != 0) {
            printWriter.print(str);
            printWriter.print("mUpdateThrottle=");
            printWriter.print(DateUtils.formatElapsedTime(TimeUnit.MILLISECONDS.toSeconds(this.f36780l)));
            printWriter.print(" mLastLoadCompleteTime=");
            if (this.f36781m == -10000) {
                str2 = "--";
            } else {
                str2 = "-" + DateUtils.formatElapsedTime(timeUnit.toSeconds(SystemClock.uptimeMillis() - this.f36781m));
            }
            printWriter.print(str2);
            printWriter.println();
        }
    }

    @Override // n3.b
    protected boolean l() {
        if (this.f36778j == null) {
            return false;
        }
        if (!j()) {
            m();
        }
        if (this.f36779k != null) {
            if (this.f36778j.f36783q) {
                this.f36778j.f36783q = false;
                this.f36782n.removeCallbacks(this.f36778j);
            }
            this.f36778j = null;
            return false;
        } else if (this.f36778j.f36783q) {
            this.f36778j.f36783q = false;
            this.f36782n.removeCallbacks(this.f36778j);
            this.f36778j = null;
            return false;
        } else {
            boolean a10 = this.f36778j.a(false);
            if (a10) {
                this.f36779k = this.f36778j;
                x();
            }
            this.f36778j = null;
            return a10;
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // n3.b
    public void n() {
        super.n();
        b();
        this.f36778j = new RunnableC0523a();
        A();
    }

    void y(RunnableC0523a runnableC0523a, Object obj) {
        D(obj);
        if (this.f36779k == runnableC0523a) {
            t();
            this.f36781m = SystemClock.uptimeMillis();
            this.f36779k = null;
            e();
            A();
        }
    }

    void z(RunnableC0523a runnableC0523a, Object obj) {
        if (this.f36778j != runnableC0523a) {
            y(runnableC0523a, obj);
        } else if (i()) {
            D(obj);
        } else {
            c();
            this.f36781m = SystemClock.uptimeMillis();
            this.f36778j = null;
            f(obj);
        }
    }

    public void x() {
    }

    public void D(Object obj) {
    }
}
