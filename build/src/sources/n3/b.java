package n3;

import android.content.Context;
import java.io.FileDescriptor;
import java.io.PrintWriter;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class b {

    /* renamed from: a  reason: collision with root package name */
    private int f37781a;

    /* renamed from: b  reason: collision with root package name */
    private a f37782b;

    /* renamed from: c  reason: collision with root package name */
    private Context f37783c;

    /* renamed from: d  reason: collision with root package name */
    private boolean f37784d = false;

    /* renamed from: e  reason: collision with root package name */
    private boolean f37785e = false;

    /* renamed from: f  reason: collision with root package name */
    private boolean f37786f = true;

    /* renamed from: g  reason: collision with root package name */
    private boolean f37787g = false;

    /* renamed from: h  reason: collision with root package name */
    private boolean f37788h = false;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface a {
        void a(b bVar, Object obj);
    }

    public b(Context context) {
        this.f37783c = context.getApplicationContext();
    }

    public void a() {
        this.f37785e = true;
        k();
    }

    public boolean b() {
        return l();
    }

    public void c() {
        this.f37788h = false;
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
        a aVar = this.f37782b;
        if (aVar != null) {
            aVar.a(this, obj);
        }
    }

    public void g(String str, FileDescriptor fileDescriptor, PrintWriter printWriter, String[] strArr) {
        printWriter.print(str);
        printWriter.print("mId=");
        printWriter.print(this.f37781a);
        printWriter.print(" mListener=");
        printWriter.println(this.f37782b);
        if (this.f37784d || this.f37787g || this.f37788h) {
            printWriter.print(str);
            printWriter.print("mStarted=");
            printWriter.print(this.f37784d);
            printWriter.print(" mContentChanged=");
            printWriter.print(this.f37787g);
            printWriter.print(" mProcessingChange=");
            printWriter.println(this.f37788h);
        }
        if (!this.f37785e && !this.f37786f) {
            return;
        }
        printWriter.print(str);
        printWriter.print("mAbandoned=");
        printWriter.print(this.f37785e);
        printWriter.print(" mReset=");
        printWriter.println(this.f37786f);
    }

    public void h() {
        n();
    }

    public boolean i() {
        return this.f37785e;
    }

    public boolean j() {
        return this.f37784d;
    }

    protected abstract boolean l();

    public void m() {
        if (this.f37784d) {
            h();
        } else {
            this.f37787g = true;
        }
    }

    protected abstract void p();

    public void r(int i10, a aVar) {
        if (this.f37782b == null) {
            this.f37782b = aVar;
            this.f37781a = i10;
            return;
        }
        throw new IllegalStateException("There is already a listener registered");
    }

    public void s() {
        o();
        this.f37786f = true;
        this.f37784d = false;
        this.f37785e = false;
        this.f37787g = false;
        this.f37788h = false;
    }

    public void t() {
        if (this.f37788h) {
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
        sb2.append(this.f37781a);
        sb2.append("}");
        return sb2.toString();
    }

    public final void u() {
        this.f37784d = true;
        this.f37786f = false;
        this.f37785e = false;
        p();
    }

    public void v() {
        this.f37784d = false;
        q();
    }

    public void w(a aVar) {
        a aVar2 = this.f37782b;
        if (aVar2 != null) {
            if (aVar2 == aVar) {
                this.f37782b = null;
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
