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
    private Executor f38476i;

    /* renamed from: j  reason: collision with root package name */
    private volatile RunnableC0528a f38477j;

    /* renamed from: k  reason: collision with root package name */
    private volatile RunnableC0528a f38478k;

    /* renamed from: l  reason: collision with root package name */
    private long f38479l;

    /* renamed from: m  reason: collision with root package name */
    private long f38480m;

    /* renamed from: n  reason: collision with root package name */
    private Handler f38481n;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: n3.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public final class RunnableC0528a extends c implements Runnable {

        /* renamed from: q  reason: collision with root package name */
        boolean f38482q;

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
            this.f38482q = false;
            a.this.A();
        }
    }

    public a(Context context) {
        super(context);
        this.f38480m = -10000L;
    }

    void A() {
        if (this.f38478k == null && this.f38477j != null) {
            if (this.f38477j.f38482q) {
                this.f38477j.f38482q = false;
                this.f38481n.removeCallbacks(this.f38477j);
            }
            if (this.f38479l > 0 && SystemClock.uptimeMillis() < this.f38480m + this.f38479l) {
                this.f38477j.f38482q = true;
                this.f38481n.postAtTime(this.f38477j, this.f38480m + this.f38479l);
                return;
            }
            if (this.f38476i == null) {
                this.f38476i = B();
            }
            this.f38477j.c(this.f38476i);
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
        if (this.f38477j != null) {
            printWriter.print(str);
            printWriter.print("mTask=");
            printWriter.print(this.f38477j);
            printWriter.print(" waiting=");
            printWriter.println(this.f38477j.f38482q);
        }
        if (this.f38478k != null) {
            printWriter.print(str);
            printWriter.print("mCancellingTask=");
            printWriter.print(this.f38478k);
            printWriter.print(" waiting=");
            printWriter.println(this.f38478k.f38482q);
        }
        if (this.f38479l != 0) {
            printWriter.print(str);
            printWriter.print("mUpdateThrottle=");
            printWriter.print(DateUtils.formatElapsedTime(TimeUnit.MILLISECONDS.toSeconds(this.f38479l)));
            printWriter.print(" mLastLoadCompleteTime=");
            if (this.f38480m == -10000) {
                str2 = "--";
            } else {
                str2 = "-" + DateUtils.formatElapsedTime(timeUnit.toSeconds(SystemClock.uptimeMillis() - this.f38480m));
            }
            printWriter.print(str2);
            printWriter.println();
        }
    }

    @Override // n3.b
    protected boolean l() {
        if (this.f38477j == null) {
            return false;
        }
        if (!j()) {
            m();
        }
        if (this.f38478k != null) {
            if (this.f38477j.f38482q) {
                this.f38477j.f38482q = false;
                this.f38481n.removeCallbacks(this.f38477j);
            }
            this.f38477j = null;
            return false;
        } else if (this.f38477j.f38482q) {
            this.f38477j.f38482q = false;
            this.f38481n.removeCallbacks(this.f38477j);
            this.f38477j = null;
            return false;
        } else {
            boolean a10 = this.f38477j.a(false);
            if (a10) {
                this.f38478k = this.f38477j;
                x();
            }
            this.f38477j = null;
            return a10;
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // n3.b
    public void n() {
        super.n();
        b();
        this.f38477j = new RunnableC0528a();
        A();
    }

    void y(RunnableC0528a runnableC0528a, Object obj) {
        D(obj);
        if (this.f38478k == runnableC0528a) {
            t();
            this.f38480m = SystemClock.uptimeMillis();
            this.f38478k = null;
            e();
            A();
        }
    }

    void z(RunnableC0528a runnableC0528a, Object obj) {
        if (this.f38477j != runnableC0528a) {
            y(runnableC0528a, obj);
        } else if (i()) {
            D(obj);
        } else {
            c();
            this.f38480m = SystemClock.uptimeMillis();
            this.f38477j = null;
            f(obj);
        }
    }

    public void x() {
    }

    public void D(Object obj) {
    }
}
