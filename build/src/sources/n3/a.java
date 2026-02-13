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
    private Executor f37346i;

    /* renamed from: j  reason: collision with root package name */
    private volatile RunnableC0523a f37347j;

    /* renamed from: k  reason: collision with root package name */
    private volatile RunnableC0523a f37348k;

    /* renamed from: l  reason: collision with root package name */
    private long f37349l;

    /* renamed from: m  reason: collision with root package name */
    private long f37350m;

    /* renamed from: n  reason: collision with root package name */
    private Handler f37351n;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: n3.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public final class RunnableC0523a extends c implements Runnable {

        /* renamed from: q  reason: collision with root package name */
        boolean f37352q;

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
            this.f37352q = false;
            a.this.A();
        }
    }

    public a(Context context) {
        super(context);
        this.f37350m = -10000L;
    }

    void A() {
        if (this.f37348k == null && this.f37347j != null) {
            if (this.f37347j.f37352q) {
                this.f37347j.f37352q = false;
                this.f37351n.removeCallbacks(this.f37347j);
            }
            if (this.f37349l > 0 && SystemClock.uptimeMillis() < this.f37350m + this.f37349l) {
                this.f37347j.f37352q = true;
                this.f37351n.postAtTime(this.f37347j, this.f37350m + this.f37349l);
                return;
            }
            if (this.f37346i == null) {
                this.f37346i = B();
            }
            this.f37347j.c(this.f37346i);
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
        if (this.f37347j != null) {
            printWriter.print(str);
            printWriter.print("mTask=");
            printWriter.print(this.f37347j);
            printWriter.print(" waiting=");
            printWriter.println(this.f37347j.f37352q);
        }
        if (this.f37348k != null) {
            printWriter.print(str);
            printWriter.print("mCancellingTask=");
            printWriter.print(this.f37348k);
            printWriter.print(" waiting=");
            printWriter.println(this.f37348k.f37352q);
        }
        if (this.f37349l != 0) {
            printWriter.print(str);
            printWriter.print("mUpdateThrottle=");
            printWriter.print(DateUtils.formatElapsedTime(TimeUnit.MILLISECONDS.toSeconds(this.f37349l)));
            printWriter.print(" mLastLoadCompleteTime=");
            if (this.f37350m == -10000) {
                str2 = "--";
            } else {
                str2 = "-" + DateUtils.formatElapsedTime(timeUnit.toSeconds(SystemClock.uptimeMillis() - this.f37350m));
            }
            printWriter.print(str2);
            printWriter.println();
        }
    }

    @Override // n3.b
    protected boolean l() {
        if (this.f37347j == null) {
            return false;
        }
        if (!j()) {
            m();
        }
        if (this.f37348k != null) {
            if (this.f37347j.f37352q) {
                this.f37347j.f37352q = false;
                this.f37351n.removeCallbacks(this.f37347j);
            }
            this.f37347j = null;
            return false;
        } else if (this.f37347j.f37352q) {
            this.f37347j.f37352q = false;
            this.f37351n.removeCallbacks(this.f37347j);
            this.f37347j = null;
            return false;
        } else {
            boolean a10 = this.f37347j.a(false);
            if (a10) {
                this.f37348k = this.f37347j;
                x();
            }
            this.f37347j = null;
            return a10;
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // n3.b
    public void n() {
        super.n();
        b();
        this.f37347j = new RunnableC0523a();
        A();
    }

    void y(RunnableC0523a runnableC0523a, Object obj) {
        D(obj);
        if (this.f37348k == runnableC0523a) {
            t();
            this.f37350m = SystemClock.uptimeMillis();
            this.f37348k = null;
            e();
            A();
        }
    }

    void z(RunnableC0523a runnableC0523a, Object obj) {
        if (this.f37347j != runnableC0523a) {
            y(runnableC0523a, obj);
        } else if (i()) {
            D(obj);
        } else {
            c();
            this.f37350m = SystemClock.uptimeMillis();
            this.f37347j = null;
            f(obj);
        }
    }

    public void x() {
    }

    public void D(Object obj) {
    }
}
