package n3;

import android.content.Context;
import java.io.FileDescriptor;
import java.io.PrintWriter;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class b {

    /* renamed from: a  reason: collision with root package name */
    private int f38436a;

    /* renamed from: b  reason: collision with root package name */
    private a f38437b;

    /* renamed from: c  reason: collision with root package name */
    private Context f38438c;

    /* renamed from: d  reason: collision with root package name */
    private boolean f38439d = false;

    /* renamed from: e  reason: collision with root package name */
    private boolean f38440e = false;

    /* renamed from: f  reason: collision with root package name */
    private boolean f38441f = true;

    /* renamed from: g  reason: collision with root package name */
    private boolean f38442g = false;

    /* renamed from: h  reason: collision with root package name */
    private boolean f38443h = false;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface a {
        void a(b bVar, Object obj);
    }

    public b(Context context) {
        this.f38438c = context.getApplicationContext();
    }

    public void a() {
        this.f38440e = true;
        k();
    }

    public boolean b() {
        return l();
    }

    public void c() {
        this.f38443h = false;
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
        a aVar = this.f38437b;
        if (aVar != null) {
            aVar.a(this, obj);
        }
    }

    public void g(String str, FileDescriptor fileDescriptor, PrintWriter printWriter, String[] strArr) {
        printWriter.print(str);
        printWriter.print("mId=");
        printWriter.print(this.f38436a);
        printWriter.print(" mListener=");
        printWriter.println(this.f38437b);
        if (this.f38439d || this.f38442g || this.f38443h) {
            printWriter.print(str);
            printWriter.print("mStarted=");
            printWriter.print(this.f38439d);
            printWriter.print(" mContentChanged=");
            printWriter.print(this.f38442g);
            printWriter.print(" mProcessingChange=");
            printWriter.println(this.f38443h);
        }
        if (!this.f38440e && !this.f38441f) {
            return;
        }
        printWriter.print(str);
        printWriter.print("mAbandoned=");
        printWriter.print(this.f38440e);
        printWriter.print(" mReset=");
        printWriter.println(this.f38441f);
    }

    public void h() {
        n();
    }

    public boolean i() {
        return this.f38440e;
    }

    public boolean j() {
        return this.f38439d;
    }

    protected abstract boolean l();

    public void m() {
        if (this.f38439d) {
            h();
        } else {
            this.f38442g = true;
        }
    }

    protected abstract void p();

    public void r(int i10, a aVar) {
        if (this.f38437b == null) {
            this.f38437b = aVar;
            this.f38436a = i10;
            return;
        }
        throw new IllegalStateException("There is already a listener registered");
    }

    public void s() {
        o();
        this.f38441f = true;
        this.f38439d = false;
        this.f38440e = false;
        this.f38442g = false;
        this.f38443h = false;
    }

    public void t() {
        if (this.f38443h) {
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
        sb2.append(this.f38436a);
        sb2.append("}");
        return sb2.toString();
    }

    public final void u() {
        this.f38439d = true;
        this.f38441f = false;
        this.f38440e = false;
        p();
    }

    public void v() {
        this.f38439d = false;
        q();
    }

    public void w(a aVar) {
        a aVar2 = this.f38437b;
        if (aVar2 != null) {
            if (aVar2 == aVar) {
                this.f38437b = null;
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
