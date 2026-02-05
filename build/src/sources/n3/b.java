package n3;

import android.content.Context;
import java.io.FileDescriptor;
import java.io.PrintWriter;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class b {

    /* renamed from: a  reason: collision with root package name */
    private int f39081a;

    /* renamed from: b  reason: collision with root package name */
    private a f39082b;

    /* renamed from: c  reason: collision with root package name */
    private Context f39083c;

    /* renamed from: d  reason: collision with root package name */
    private boolean f39084d = false;

    /* renamed from: e  reason: collision with root package name */
    private boolean f39085e = false;

    /* renamed from: f  reason: collision with root package name */
    private boolean f39086f = true;

    /* renamed from: g  reason: collision with root package name */
    private boolean f39087g = false;

    /* renamed from: h  reason: collision with root package name */
    private boolean f39088h = false;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface a {
        void a(b bVar, Object obj);
    }

    public b(Context context) {
        this.f39083c = context.getApplicationContext();
    }

    public void a() {
        this.f39085e = true;
        k();
    }

    public boolean b() {
        return l();
    }

    public void c() {
        this.f39088h = false;
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
        a aVar = this.f39082b;
        if (aVar != null) {
            aVar.a(this, obj);
        }
    }

    public void g(String str, FileDescriptor fileDescriptor, PrintWriter printWriter, String[] strArr) {
        printWriter.print(str);
        printWriter.print("mId=");
        printWriter.print(this.f39081a);
        printWriter.print(" mListener=");
        printWriter.println(this.f39082b);
        if (this.f39084d || this.f39087g || this.f39088h) {
            printWriter.print(str);
            printWriter.print("mStarted=");
            printWriter.print(this.f39084d);
            printWriter.print(" mContentChanged=");
            printWriter.print(this.f39087g);
            printWriter.print(" mProcessingChange=");
            printWriter.println(this.f39088h);
        }
        if (!this.f39085e && !this.f39086f) {
            return;
        }
        printWriter.print(str);
        printWriter.print("mAbandoned=");
        printWriter.print(this.f39085e);
        printWriter.print(" mReset=");
        printWriter.println(this.f39086f);
    }

    public void h() {
        n();
    }

    public boolean i() {
        return this.f39085e;
    }

    public boolean j() {
        return this.f39084d;
    }

    protected abstract boolean l();

    public void m() {
        if (this.f39084d) {
            h();
        } else {
            this.f39087g = true;
        }
    }

    protected abstract void p();

    public void r(int i10, a aVar) {
        if (this.f39082b == null) {
            this.f39082b = aVar;
            this.f39081a = i10;
            return;
        }
        throw new IllegalStateException("There is already a listener registered");
    }

    public void s() {
        o();
        this.f39086f = true;
        this.f39084d = false;
        this.f39085e = false;
        this.f39087g = false;
        this.f39088h = false;
    }

    public void t() {
        if (this.f39088h) {
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
        sb2.append(this.f39081a);
        sb2.append("}");
        return sb2.toString();
    }

    public final void u() {
        this.f39084d = true;
        this.f39086f = false;
        this.f39085e = false;
        p();
    }

    public void v() {
        this.f39084d = false;
        q();
    }

    public void w(a aVar) {
        a aVar2 = this.f39082b;
        if (aVar2 != null) {
            if (aVar2 == aVar) {
                this.f39082b = null;
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
