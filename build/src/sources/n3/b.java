package n3;

import android.content.Context;
import java.io.FileDescriptor;
import java.io.PrintWriter;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class b {

    /* renamed from: a  reason: collision with root package name */
    private int f39582a;

    /* renamed from: b  reason: collision with root package name */
    private a f39583b;

    /* renamed from: c  reason: collision with root package name */
    private Context f39584c;

    /* renamed from: d  reason: collision with root package name */
    private boolean f39585d = false;

    /* renamed from: e  reason: collision with root package name */
    private boolean f39586e = false;

    /* renamed from: f  reason: collision with root package name */
    private boolean f39587f = true;

    /* renamed from: g  reason: collision with root package name */
    private boolean f39588g = false;

    /* renamed from: h  reason: collision with root package name */
    private boolean f39589h = false;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface a {
        void a(b bVar, Object obj);
    }

    public b(Context context) {
        this.f39584c = context.getApplicationContext();
    }

    public void a() {
        this.f39586e = true;
        k();
    }

    public boolean b() {
        return l();
    }

    public void c() {
        this.f39589h = false;
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
        a aVar = this.f39583b;
        if (aVar != null) {
            aVar.a(this, obj);
        }
    }

    public void g(String str, FileDescriptor fileDescriptor, PrintWriter printWriter, String[] strArr) {
        printWriter.print(str);
        printWriter.print("mId=");
        printWriter.print(this.f39582a);
        printWriter.print(" mListener=");
        printWriter.println(this.f39583b);
        if (this.f39585d || this.f39588g || this.f39589h) {
            printWriter.print(str);
            printWriter.print("mStarted=");
            printWriter.print(this.f39585d);
            printWriter.print(" mContentChanged=");
            printWriter.print(this.f39588g);
            printWriter.print(" mProcessingChange=");
            printWriter.println(this.f39589h);
        }
        if (!this.f39586e && !this.f39587f) {
            return;
        }
        printWriter.print(str);
        printWriter.print("mAbandoned=");
        printWriter.print(this.f39586e);
        printWriter.print(" mReset=");
        printWriter.println(this.f39587f);
    }

    public void h() {
        n();
    }

    public boolean i() {
        return this.f39586e;
    }

    public boolean j() {
        return this.f39585d;
    }

    protected abstract boolean l();

    public void m() {
        if (this.f39585d) {
            h();
        } else {
            this.f39588g = true;
        }
    }

    protected abstract void p();

    public void r(int i10, a aVar) {
        if (this.f39583b == null) {
            this.f39583b = aVar;
            this.f39582a = i10;
            return;
        }
        throw new IllegalStateException("There is already a listener registered");
    }

    public void s() {
        o();
        this.f39587f = true;
        this.f39585d = false;
        this.f39586e = false;
        this.f39588g = false;
        this.f39589h = false;
    }

    public void t() {
        if (this.f39589h) {
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
        sb2.append(this.f39582a);
        sb2.append("}");
        return sb2.toString();
    }

    public final void u() {
        this.f39585d = true;
        this.f39587f = false;
        this.f39586e = false;
        p();
    }

    public void v() {
        this.f39585d = false;
        q();
    }

    public void w(a aVar) {
        a aVar2 = this.f39583b;
        if (aVar2 != null) {
            if (aVar2 == aVar) {
                this.f39583b = null;
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
