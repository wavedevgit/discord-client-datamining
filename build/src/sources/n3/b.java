package n3;

import android.content.Context;
import java.io.FileDescriptor;
import java.io.PrintWriter;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class b {

    /* renamed from: a  reason: collision with root package name */
    private int f36786a;

    /* renamed from: b  reason: collision with root package name */
    private a f36787b;

    /* renamed from: c  reason: collision with root package name */
    private Context f36788c;

    /* renamed from: d  reason: collision with root package name */
    private boolean f36789d = false;

    /* renamed from: e  reason: collision with root package name */
    private boolean f36790e = false;

    /* renamed from: f  reason: collision with root package name */
    private boolean f36791f = true;

    /* renamed from: g  reason: collision with root package name */
    private boolean f36792g = false;

    /* renamed from: h  reason: collision with root package name */
    private boolean f36793h = false;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface a {
        void a(b bVar, Object obj);
    }

    public b(Context context) {
        this.f36788c = context.getApplicationContext();
    }

    public void a() {
        this.f36790e = true;
        k();
    }

    public boolean b() {
        return l();
    }

    public void c() {
        this.f36793h = false;
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
        a aVar = this.f36787b;
        if (aVar != null) {
            aVar.a(this, obj);
        }
    }

    public void g(String str, FileDescriptor fileDescriptor, PrintWriter printWriter, String[] strArr) {
        printWriter.print(str);
        printWriter.print("mId=");
        printWriter.print(this.f36786a);
        printWriter.print(" mListener=");
        printWriter.println(this.f36787b);
        if (this.f36789d || this.f36792g || this.f36793h) {
            printWriter.print(str);
            printWriter.print("mStarted=");
            printWriter.print(this.f36789d);
            printWriter.print(" mContentChanged=");
            printWriter.print(this.f36792g);
            printWriter.print(" mProcessingChange=");
            printWriter.println(this.f36793h);
        }
        if (!this.f36790e && !this.f36791f) {
            return;
        }
        printWriter.print(str);
        printWriter.print("mAbandoned=");
        printWriter.print(this.f36790e);
        printWriter.print(" mReset=");
        printWriter.println(this.f36791f);
    }

    public void h() {
        n();
    }

    public boolean i() {
        return this.f36790e;
    }

    public boolean j() {
        return this.f36789d;
    }

    protected abstract boolean l();

    public void m() {
        if (this.f36789d) {
            h();
        } else {
            this.f36792g = true;
        }
    }

    protected abstract void p();

    public void r(int i10, a aVar) {
        if (this.f36787b == null) {
            this.f36787b = aVar;
            this.f36786a = i10;
            return;
        }
        throw new IllegalStateException("There is already a listener registered");
    }

    public void s() {
        o();
        this.f36791f = true;
        this.f36789d = false;
        this.f36790e = false;
        this.f36792g = false;
        this.f36793h = false;
    }

    public void t() {
        if (this.f36793h) {
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
        sb2.append(this.f36786a);
        sb2.append("}");
        return sb2.toString();
    }

    public final void u() {
        this.f36789d = true;
        this.f36791f = false;
        this.f36790e = false;
        p();
    }

    public void v() {
        this.f36789d = false;
        q();
    }

    public void w(a aVar) {
        a aVar2 = this.f36787b;
        if (aVar2 != null) {
            if (aVar2 == aVar) {
                this.f36787b = null;
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
