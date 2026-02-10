package n3;

import android.content.Context;
import java.io.FileDescriptor;
import java.io.PrintWriter;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class b {

    /* renamed from: a  reason: collision with root package name */
    private int f36785a;

    /* renamed from: b  reason: collision with root package name */
    private a f36786b;

    /* renamed from: c  reason: collision with root package name */
    private Context f36787c;

    /* renamed from: d  reason: collision with root package name */
    private boolean f36788d = false;

    /* renamed from: e  reason: collision with root package name */
    private boolean f36789e = false;

    /* renamed from: f  reason: collision with root package name */
    private boolean f36790f = true;

    /* renamed from: g  reason: collision with root package name */
    private boolean f36791g = false;

    /* renamed from: h  reason: collision with root package name */
    private boolean f36792h = false;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface a {
        void a(b bVar, Object obj);
    }

    public b(Context context) {
        this.f36787c = context.getApplicationContext();
    }

    public void a() {
        this.f36789e = true;
        k();
    }

    public boolean b() {
        return l();
    }

    public void c() {
        this.f36792h = false;
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
        a aVar = this.f36786b;
        if (aVar != null) {
            aVar.a(this, obj);
        }
    }

    public void g(String str, FileDescriptor fileDescriptor, PrintWriter printWriter, String[] strArr) {
        printWriter.print(str);
        printWriter.print("mId=");
        printWriter.print(this.f36785a);
        printWriter.print(" mListener=");
        printWriter.println(this.f36786b);
        if (this.f36788d || this.f36791g || this.f36792h) {
            printWriter.print(str);
            printWriter.print("mStarted=");
            printWriter.print(this.f36788d);
            printWriter.print(" mContentChanged=");
            printWriter.print(this.f36791g);
            printWriter.print(" mProcessingChange=");
            printWriter.println(this.f36792h);
        }
        if (!this.f36789e && !this.f36790f) {
            return;
        }
        printWriter.print(str);
        printWriter.print("mAbandoned=");
        printWriter.print(this.f36789e);
        printWriter.print(" mReset=");
        printWriter.println(this.f36790f);
    }

    public void h() {
        n();
    }

    public boolean i() {
        return this.f36789e;
    }

    public boolean j() {
        return this.f36788d;
    }

    protected abstract boolean l();

    public void m() {
        if (this.f36788d) {
            h();
        } else {
            this.f36791g = true;
        }
    }

    protected abstract void p();

    public void r(int i10, a aVar) {
        if (this.f36786b == null) {
            this.f36786b = aVar;
            this.f36785a = i10;
            return;
        }
        throw new IllegalStateException("There is already a listener registered");
    }

    public void s() {
        o();
        this.f36790f = true;
        this.f36788d = false;
        this.f36789e = false;
        this.f36791g = false;
        this.f36792h = false;
    }

    public void t() {
        if (this.f36792h) {
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
        sb2.append(this.f36785a);
        sb2.append("}");
        return sb2.toString();
    }

    public final void u() {
        this.f36788d = true;
        this.f36790f = false;
        this.f36789e = false;
        p();
    }

    public void v() {
        this.f36788d = false;
        q();
    }

    public void w(a aVar) {
        a aVar2 = this.f36786b;
        if (aVar2 != null) {
            if (aVar2 == aVar) {
                this.f36786b = null;
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
