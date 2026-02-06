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
    private Executor f38428i;

    /* renamed from: j  reason: collision with root package name */
    private volatile RunnableC0528a f38429j;

    /* renamed from: k  reason: collision with root package name */
    private volatile RunnableC0528a f38430k;

    /* renamed from: l  reason: collision with root package name */
    private long f38431l;

    /* renamed from: m  reason: collision with root package name */
    private long f38432m;

    /* renamed from: n  reason: collision with root package name */
    private Handler f38433n;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: n3.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public final class RunnableC0528a extends c implements Runnable {

        /* renamed from: q  reason: collision with root package name */
        boolean f38434q;

        RunnableC0528a() {
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
            this.f38434q = false;
            a.this.A();
        }
    }

    public a(Context context) {
        super(context);
        this.f38432m = -10000L;
    }

    void A() {
        if (this.f38430k == null && this.f38429j != null) {
            if (this.f38429j.f38434q) {
                this.f38429j.f38434q = false;
                this.f38433n.removeCallbacks(this.f38429j);
            }
            if (this.f38431l > 0 && SystemClock.uptimeMillis() < this.f38432m + this.f38431l) {
                this.f38429j.f38434q = true;
                this.f38433n.postAtTime(this.f38429j, this.f38432m + this.f38431l);
                return;
            }
            if (this.f38428i == null) {
                this.f38428i = B();
            }
            this.f38429j.c(this.f38428i);
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
        if (this.f38429j != null) {
            printWriter.print(str);
            printWriter.print("mTask=");
            printWriter.print(this.f38429j);
            printWriter.print(" waiting=");
            printWriter.println(this.f38429j.f38434q);
        }
        if (this.f38430k != null) {
            printWriter.print(str);
            printWriter.print("mCancellingTask=");
            printWriter.print(this.f38430k);
            printWriter.print(" waiting=");
            printWriter.println(this.f38430k.f38434q);
        }
        if (this.f38431l != 0) {
            printWriter.print(str);
            printWriter.print("mUpdateThrottle=");
            printWriter.print(DateUtils.formatElapsedTime(TimeUnit.MILLISECONDS.toSeconds(this.f38431l)));
            printWriter.print(" mLastLoadCompleteTime=");
            if (this.f38432m == -10000) {
                str2 = "--";
            } else {
                str2 = "-" + DateUtils.formatElapsedTime(timeUnit.toSeconds(SystemClock.uptimeMillis() - this.f38432m));
            }
            printWriter.print(str2);
            printWriter.println();
        }
    }

    @Override // n3.b
    protected boolean l() {
        if (this.f38429j == null) {
            return false;
        }
        if (!j()) {
            m();
        }
        if (this.f38430k != null) {
            if (this.f38429j.f38434q) {
                this.f38429j.f38434q = false;
                this.f38433n.removeCallbacks(this.f38429j);
            }
            this.f38429j = null;
            return false;
        } else if (this.f38429j.f38434q) {
            this.f38429j.f38434q = false;
            this.f38433n.removeCallbacks(this.f38429j);
            this.f38429j = null;
            return false;
        } else {
            boolean a10 = this.f38429j.a(false);
            if (a10) {
                this.f38430k = this.f38429j;
                x();
            }
            this.f38429j = null;
            return a10;
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // n3.b
    public void n() {
        super.n();
        b();
        this.f38429j = new RunnableC0528a();
        A();
    }

    void y(RunnableC0528a runnableC0528a, Object obj) {
        D(obj);
        if (this.f38430k == runnableC0528a) {
            t();
            this.f38432m = SystemClock.uptimeMillis();
            this.f38430k = null;
            e();
            A();
        }
    }

    void z(RunnableC0528a runnableC0528a, Object obj) {
        if (this.f38429j != runnableC0528a) {
            y(runnableC0528a, obj);
        } else if (i()) {
            D(obj);
        } else {
            c();
            this.f38432m = SystemClock.uptimeMillis();
            this.f38429j = null;
            f(obj);
        }
    }

    public void x() {
    }

    public void D(Object obj) {
    }
}
