package n3;

import android.content.Context;
import java.io.FileDescriptor;
import java.io.PrintWriter;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class b {

    /* renamed from: a  reason: collision with root package name */
    private int f38484a;

    /* renamed from: b  reason: collision with root package name */
    private a f38485b;

    /* renamed from: c  reason: collision with root package name */
    private Context f38486c;

    /* renamed from: d  reason: collision with root package name */
    private boolean f38487d = false;

    /* renamed from: e  reason: collision with root package name */
    private boolean f38488e = false;

    /* renamed from: f  reason: collision with root package name */
    private boolean f38489f = true;

    /* renamed from: g  reason: collision with root package name */
    private boolean f38490g = false;

    /* renamed from: h  reason: collision with root package name */
    private boolean f38491h = false;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface a {
        void a(b bVar, Object obj);
    }

    public b(Context context) {
        this.f38486c = context.getApplicationContext();
    }

    public void a() {
        this.f38488e = true;
        k();
    }

    public boolean b() {
        return l();
    }

    public void c() {
        this.f38491h = false;
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
        a aVar = this.f38485b;
        if (aVar != null) {
            aVar.a(this, obj);
        }
    }

    public void g(String str, FileDescriptor fileDescriptor, PrintWriter printWriter, String[] strArr) {
        printWriter.print(str);
        printWriter.print("mId=");
        printWriter.print(this.f38484a);
        printWriter.print(" mListener=");
        printWriter.println(this.f38485b);
        if (this.f38487d || this.f38490g || this.f38491h) {
            printWriter.print(str);
            printWriter.print("mStarted=");
            printWriter.print(this.f38487d);
            printWriter.print(" mContentChanged=");
            printWriter.print(this.f38490g);
            printWriter.print(" mProcessingChange=");
            printWriter.println(this.f38491h);
        }
        if (!this.f38488e && !this.f38489f) {
            return;
        }
        printWriter.print(str);
        printWriter.print("mAbandoned=");
        printWriter.print(this.f38488e);
        printWriter.print(" mReset=");
        printWriter.println(this.f38489f);
    }

    public void h() {
        n();
    }

    public boolean i() {
        return this.f38488e;
    }

    public boolean j() {
        return this.f38487d;
    }

    protected abstract boolean l();

    public void m() {
        if (this.f38487d) {
            h();
        } else {
            this.f38490g = true;
        }
    }

    protected abstract void p();

    public void r(int i10, a aVar) {
        if (this.f38485b == null) {
            this.f38485b = aVar;
            this.f38484a = i10;
            return;
        }
        throw new IllegalStateException("There is already a listener registered");
    }

    public void s() {
        o();
        this.f38489f = true;
        this.f38487d = false;
        this.f38488e = false;
        this.f38490g = false;
        this.f38491h = false;
    }

    public void t() {
        if (this.f38491h) {
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
        sb2.append(this.f38484a);
        sb2.append("}");
        return sb2.toString();
    }

    public final void u() {
        this.f38487d = true;
        this.f38489f = false;
        this.f38488e = false;
        p();
    }

    public void v() {
        this.f38487d = false;
        q();
    }

    public void w(a aVar) {
        a aVar2 = this.f38485b;
        if (aVar2 != null) {
            if (aVar2 == aVar) {
                this.f38485b = null;
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
