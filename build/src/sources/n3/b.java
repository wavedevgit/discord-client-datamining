package n3;

import android.content.Context;
import java.io.FileDescriptor;
import java.io.PrintWriter;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class b {

    /* renamed from: a  reason: collision with root package name */
    private int f39703a;

    /* renamed from: b  reason: collision with root package name */
    private a f39704b;

    /* renamed from: c  reason: collision with root package name */
    private Context f39705c;

    /* renamed from: d  reason: collision with root package name */
    private boolean f39706d = false;

    /* renamed from: e  reason: collision with root package name */
    private boolean f39707e = false;

    /* renamed from: f  reason: collision with root package name */
    private boolean f39708f = true;

    /* renamed from: g  reason: collision with root package name */
    private boolean f39709g = false;

    /* renamed from: h  reason: collision with root package name */
    private boolean f39710h = false;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface a {
        void a(b bVar, Object obj);
    }

    public b(Context context) {
        this.f39705c = context.getApplicationContext();
    }

    public void a() {
        this.f39707e = true;
        k();
    }

    public boolean b() {
        return l();
    }

    public void c() {
        this.f39710h = false;
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
        a aVar = this.f39704b;
        if (aVar != null) {
            aVar.a(this, obj);
        }
    }

    public void g(String str, FileDescriptor fileDescriptor, PrintWriter printWriter, String[] strArr) {
        printWriter.print(str);
        printWriter.print("mId=");
        printWriter.print(this.f39703a);
        printWriter.print(" mListener=");
        printWriter.println(this.f39704b);
        if (this.f39706d || this.f39709g || this.f39710h) {
            printWriter.print(str);
            printWriter.print("mStarted=");
            printWriter.print(this.f39706d);
            printWriter.print(" mContentChanged=");
            printWriter.print(this.f39709g);
            printWriter.print(" mProcessingChange=");
            printWriter.println(this.f39710h);
        }
        if (!this.f39707e && !this.f39708f) {
            return;
        }
        printWriter.print(str);
        printWriter.print("mAbandoned=");
        printWriter.print(this.f39707e);
        printWriter.print(" mReset=");
        printWriter.println(this.f39708f);
    }

    public void h() {
        n();
    }

    public boolean i() {
        return this.f39707e;
    }

    public boolean j() {
        return this.f39706d;
    }

    protected abstract boolean l();

    public void m() {
        if (this.f39706d) {
            h();
        } else {
            this.f39709g = true;
        }
    }

    protected abstract void p();

    public void r(int i10, a aVar) {
        if (this.f39704b == null) {
            this.f39704b = aVar;
            this.f39703a = i10;
            return;
        }
        throw new IllegalStateException("There is already a listener registered");
    }

    public void s() {
        o();
        this.f39708f = true;
        this.f39706d = false;
        this.f39707e = false;
        this.f39709g = false;
        this.f39710h = false;
    }

    public void t() {
        if (this.f39710h) {
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
        sb2.append(this.f39703a);
        sb2.append("}");
        return sb2.toString();
    }

    public final void u() {
        this.f39706d = true;
        this.f39708f = false;
        this.f39707e = false;
        p();
    }

    public void v() {
        this.f39706d = false;
        q();
    }

    public void w(a aVar) {
        a aVar2 = this.f39704b;
        if (aVar2 != null) {
            if (aVar2 == aVar) {
                this.f39704b = null;
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
