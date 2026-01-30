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
    private Executor f39711i;

    /* renamed from: j  reason: collision with root package name */
    private volatile RunnableC0506a f39712j;

    /* renamed from: k  reason: collision with root package name */
    private volatile RunnableC0506a f39713k;

    /* renamed from: l  reason: collision with root package name */
    private long f39714l;

    /* renamed from: m  reason: collision with root package name */
    private long f39715m;

    /* renamed from: n  reason: collision with root package name */
    private Handler f39716n;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: n3.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public final class RunnableC0506a extends c implements Runnable {

        /* renamed from: q  reason: collision with root package name */
        boolean f39717q;

        RunnableC0506a() {
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
            this.f39717q = false;
            a.this.A();
        }
    }

    public a(Context context) {
        super(context);
        this.f39715m = -10000L;
    }

    void A() {
        if (this.f39713k == null && this.f39712j != null) {
            if (this.f39712j.f39717q) {
                this.f39712j.f39717q = false;
                this.f39716n.removeCallbacks(this.f39712j);
            }
            if (this.f39714l > 0 && SystemClock.uptimeMillis() < this.f39715m + this.f39714l) {
                this.f39712j.f39717q = true;
                this.f39716n.postAtTime(this.f39712j, this.f39715m + this.f39714l);
                return;
            }
            if (this.f39711i == null) {
                this.f39711i = B();
            }
            this.f39712j.c(this.f39711i);
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
        if (this.f39712j != null) {
            printWriter.print(str);
            printWriter.print("mTask=");
            printWriter.print(this.f39712j);
            printWriter.print(" waiting=");
            printWriter.println(this.f39712j.f39717q);
        }
        if (this.f39713k != null) {
            printWriter.print(str);
            printWriter.print("mCancellingTask=");
            printWriter.print(this.f39713k);
            printWriter.print(" waiting=");
            printWriter.println(this.f39713k.f39717q);
        }
        if (this.f39714l != 0) {
            printWriter.print(str);
            printWriter.print("mUpdateThrottle=");
            printWriter.print(DateUtils.formatElapsedTime(TimeUnit.MILLISECONDS.toSeconds(this.f39714l)));
            printWriter.print(" mLastLoadCompleteTime=");
            if (this.f39715m == -10000) {
                str2 = "--";
            } else {
                str2 = "-" + DateUtils.formatElapsedTime(timeUnit.toSeconds(SystemClock.uptimeMillis() - this.f39715m));
            }
            printWriter.print(str2);
            printWriter.println();
        }
    }

    @Override // n3.b
    protected boolean l() {
        if (this.f39712j == null) {
            return false;
        }
        if (!j()) {
            m();
        }
        if (this.f39713k != null) {
            if (this.f39712j.f39717q) {
                this.f39712j.f39717q = false;
                this.f39716n.removeCallbacks(this.f39712j);
            }
            this.f39712j = null;
            return false;
        } else if (this.f39712j.f39717q) {
            this.f39712j.f39717q = false;
            this.f39716n.removeCallbacks(this.f39712j);
            this.f39712j = null;
            return false;
        } else {
            boolean a10 = this.f39712j.a(false);
            if (a10) {
                this.f39713k = this.f39712j;
                x();
            }
            this.f39712j = null;
            return a10;
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // n3.b
    public void n() {
        super.n();
        b();
        this.f39712j = new RunnableC0506a();
        A();
    }

    void y(RunnableC0506a runnableC0506a, Object obj) {
        D(obj);
        if (this.f39713k == runnableC0506a) {
            t();
            this.f39715m = SystemClock.uptimeMillis();
            this.f39713k = null;
            e();
            A();
        }
    }

    void z(RunnableC0506a runnableC0506a, Object obj) {
        if (this.f39712j != runnableC0506a) {
            y(runnableC0506a, obj);
        } else if (i()) {
            D(obj);
        } else {
            c();
            this.f39715m = SystemClock.uptimeMillis();
            this.f39712j = null;
            f(obj);
        }
    }

    public void x() {
    }

    public void D(Object obj) {
    }
}
