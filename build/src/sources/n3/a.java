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
    private Executor f37773i;

    /* renamed from: j  reason: collision with root package name */
    private volatile RunnableC0546a f37774j;

    /* renamed from: k  reason: collision with root package name */
    private volatile RunnableC0546a f37775k;

    /* renamed from: l  reason: collision with root package name */
    private long f37776l;

    /* renamed from: m  reason: collision with root package name */
    private long f37777m;

    /* renamed from: n  reason: collision with root package name */
    private Handler f37778n;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: n3.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public final class RunnableC0546a extends c implements Runnable {

        /* renamed from: q  reason: collision with root package name */
        boolean f37779q;

        RunnableC0546a() {
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
            this.f37779q = false;
            a.this.A();
        }
    }

    public a(Context context) {
        super(context);
        this.f37777m = -10000L;
    }

    void A() {
        if (this.f37775k == null && this.f37774j != null) {
            if (this.f37774j.f37779q) {
                this.f37774j.f37779q = false;
                this.f37778n.removeCallbacks(this.f37774j);
            }
            if (this.f37776l > 0 && SystemClock.uptimeMillis() < this.f37777m + this.f37776l) {
                this.f37774j.f37779q = true;
                this.f37778n.postAtTime(this.f37774j, this.f37777m + this.f37776l);
                return;
            }
            if (this.f37773i == null) {
                this.f37773i = B();
            }
            this.f37774j.c(this.f37773i);
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
        if (this.f37774j != null) {
            printWriter.print(str);
            printWriter.print("mTask=");
            printWriter.print(this.f37774j);
            printWriter.print(" waiting=");
            printWriter.println(this.f37774j.f37779q);
        }
        if (this.f37775k != null) {
            printWriter.print(str);
            printWriter.print("mCancellingTask=");
            printWriter.print(this.f37775k);
            printWriter.print(" waiting=");
            printWriter.println(this.f37775k.f37779q);
        }
        if (this.f37776l != 0) {
            printWriter.print(str);
            printWriter.print("mUpdateThrottle=");
            printWriter.print(DateUtils.formatElapsedTime(TimeUnit.MILLISECONDS.toSeconds(this.f37776l)));
            printWriter.print(" mLastLoadCompleteTime=");
            if (this.f37777m == -10000) {
                str2 = "--";
            } else {
                str2 = "-" + DateUtils.formatElapsedTime(timeUnit.toSeconds(SystemClock.uptimeMillis() - this.f37777m));
            }
            printWriter.print(str2);
            printWriter.println();
        }
    }

    @Override // n3.b
    protected boolean l() {
        if (this.f37774j == null) {
            return false;
        }
        if (!j()) {
            m();
        }
        if (this.f37775k != null) {
            if (this.f37774j.f37779q) {
                this.f37774j.f37779q = false;
                this.f37778n.removeCallbacks(this.f37774j);
            }
            this.f37774j = null;
            return false;
        } else if (this.f37774j.f37779q) {
            this.f37774j.f37779q = false;
            this.f37778n.removeCallbacks(this.f37774j);
            this.f37774j = null;
            return false;
        } else {
            boolean a10 = this.f37774j.a(false);
            if (a10) {
                this.f37775k = this.f37774j;
                x();
            }
            this.f37774j = null;
            return a10;
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // n3.b
    public void n() {
        super.n();
        b();
        this.f37774j = new RunnableC0546a();
        A();
    }

    void y(RunnableC0546a runnableC0546a, Object obj) {
        D(obj);
        if (this.f37775k == runnableC0546a) {
            t();
            this.f37777m = SystemClock.uptimeMillis();
            this.f37775k = null;
            e();
            A();
        }
    }

    void z(RunnableC0546a runnableC0546a, Object obj) {
        if (this.f37774j != runnableC0546a) {
            y(runnableC0546a, obj);
        } else if (i()) {
            D(obj);
        } else {
            c();
            this.f37777m = SystemClock.uptimeMillis();
            this.f37774j = null;
            f(obj);
        }
    }

    public void x() {
    }

    public void D(Object obj) {
    }
}
