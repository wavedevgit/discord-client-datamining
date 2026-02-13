package n3;

import android.content.Context;
import java.io.FileDescriptor;
import java.io.PrintWriter;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class b {

    /* renamed from: a  reason: collision with root package name */
    private int f37354a;

    /* renamed from: b  reason: collision with root package name */
    private a f37355b;

    /* renamed from: c  reason: collision with root package name */
    private Context f37356c;

    /* renamed from: d  reason: collision with root package name */
    private boolean f37357d = false;

    /* renamed from: e  reason: collision with root package name */
    private boolean f37358e = false;

    /* renamed from: f  reason: collision with root package name */
    private boolean f37359f = true;

    /* renamed from: g  reason: collision with root package name */
    private boolean f37360g = false;

    /* renamed from: h  reason: collision with root package name */
    private boolean f37361h = false;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface a {
        void a(b bVar, Object obj);
    }

    public b(Context context) {
        this.f37356c = context.getApplicationContext();
    }

    public void a() {
        this.f37358e = true;
        k();
    }

    public boolean b() {
        return l();
    }

    public void c() {
        this.f37361h = false;
    }

    public String d(Object obj) {
        StringBuilder sb2 = new StringBuilder(64);
        if (obj == null) {
            sb2.append("null");
        } else {
            Class<?> cls = obj.getClass();
            sb2.append(cls.getSimpleName());
            sb2.append("{");
            sb2.append(Integer.toHexString(System.identityHashCode(cls)));
            sb2.append("}");
        }
        return sb2.toString();
    }

    public void f(Object obj) {
        a aVar = this.f37355b;
        if (aVar != null) {
            aVar.a(this, obj);
        }
    }

    public void g(String str, FileDescriptor fileDescriptor, PrintWriter printWriter, String[] strArr) {
        printWriter.print(str);
        printWriter.print("mId=");
        printWriter.print(this.f37354a);
        printWriter.print(" mListener=");
        printWriter.println(this.f37355b);
        if (this.f37357d || this.f37360g || this.f37361h) {
            printWriter.print(str);
            printWriter.print("mStarted=");
            printWriter.print(this.f37357d);
            printWriter.print(" mContentChanged=");
            printWriter.print(this.f37360g);
            printWriter.print(" mProcessingChange=");
            printWriter.println(this.f37361h);
        }
        if (!this.f37358e && !this.f37359f) {
            return;
        }
        printWriter.print(str);
        printWriter.print("mAbandoned=");
        printWriter.print(this.f37358e);
        printWriter.print(" mReset=");
        printWriter.println(this.f37359f);
    }

    public void h() {
        n();
    }

    public boolean i() {
        return this.f37358e;
    }

    public boolean j() {
        return this.f37357d;
    }

    protected abstract boolean l();

    public void m() {
        if (this.f37357d) {
            h();
        } else {
            this.f37360g = true;
        }
    }

    protected abstract void p();

    public void r(int i10, a aVar) {
        if (this.f37355b == null) {
            this.f37355b = aVar;
            this.f37354a = i10;
            return;
        }
        throw new IllegalStateException("There is already a listener registered");
    }

    public void s() {
        o();
        this.f37359f = true;
        this.f37357d = false;
        this.f37358e = false;
        this.f37360g = false;
        this.f37361h = false;
    }

    public void t() {
        if (this.f37361h) {
            m();
        }
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder(64);
        Class<?> cls = getClass();
        sb2.append(cls.getSimpleName());
        sb2.append("{");
        sb2.append(Integer.toHexString(System.identityHashCode(cls)));
        sb2.append(" id=");
        sb2.append(this.f37354a);
        sb2.append("}");
        return sb2.toString();
    }

    public final void u() {
        this.f37357d = true;
        this.f37359f = false;
        this.f37358e = false;
        p();
    }

    public void v() {
        this.f37357d = false;
        q();
    }

    public void w(a aVar) {
        a aVar2 = this.f37355b;
        if (aVar2 != null) {
            if (aVar2 == aVar) {
                this.f37355b = null;
                return;
            }
            throw new IllegalArgumentException("Attempting to unregister the wrong listener");
        }
        throw new IllegalStateException("No listener register");
    }

    public void e() {
    }

    protected void k() {
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void n() {
    }

    protected void o() {
    }

    protected void q() {
    }
}
