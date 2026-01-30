package n3;

import android.content.Context;
import java.io.FileDescriptor;
import java.io.PrintWriter;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class b {

    /* renamed from: a  reason: collision with root package name */
    private int f39719a;

    /* renamed from: b  reason: collision with root package name */
    private a f39720b;

    /* renamed from: c  reason: collision with root package name */
    private Context f39721c;

    /* renamed from: d  reason: collision with root package name */
    private boolean f39722d = false;

    /* renamed from: e  reason: collision with root package name */
    private boolean f39723e = false;

    /* renamed from: f  reason: collision with root package name */
    private boolean f39724f = true;

    /* renamed from: g  reason: collision with root package name */
    private boolean f39725g = false;

    /* renamed from: h  reason: collision with root package name */
    private boolean f39726h = false;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface a {
        void a(b bVar, Object obj);
    }

    public b(Context context) {
        this.f39721c = context.getApplicationContext();
    }

    public void a() {
        this.f39723e = true;
        k();
    }

    public boolean b() {
        return l();
    }

    public void c() {
        this.f39726h = false;
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
        a aVar = this.f39720b;
        if (aVar != null) {
            aVar.a(this, obj);
        }
    }

    public void g(String str, FileDescriptor fileDescriptor, PrintWriter printWriter, String[] strArr) {
        printWriter.print(str);
        printWriter.print("mId=");
        printWriter.print(this.f39719a);
        printWriter.print(" mListener=");
        printWriter.println(this.f39720b);
        if (this.f39722d || this.f39725g || this.f39726h) {
            printWriter.print(str);
            printWriter.print("mStarted=");
            printWriter.print(this.f39722d);
            printWriter.print(" mContentChanged=");
            printWriter.print(this.f39725g);
            printWriter.print(" mProcessingChange=");
            printWriter.println(this.f39726h);
        }
        if (!this.f39723e && !this.f39724f) {
            return;
        }
        printWriter.print(str);
        printWriter.print("mAbandoned=");
        printWriter.print(this.f39723e);
        printWriter.print(" mReset=");
        printWriter.println(this.f39724f);
    }

    public void h() {
        n();
    }

    public boolean i() {
        return this.f39723e;
    }

    public boolean j() {
        return this.f39722d;
    }

    protected abstract boolean l();

    public void m() {
        if (this.f39722d) {
            h();
        } else {
            this.f39725g = true;
        }
    }

    protected abstract void p();

    public void r(int i10, a aVar) {
        if (this.f39720b == null) {
            this.f39720b = aVar;
            this.f39719a = i10;
            return;
        }
        throw new IllegalStateException("There is already a listener registered");
    }

    public void s() {
        o();
        this.f39724f = true;
        this.f39722d = false;
        this.f39723e = false;
        this.f39725g = false;
        this.f39726h = false;
    }

    public void t() {
        if (this.f39726h) {
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
        sb2.append(this.f39719a);
        sb2.append("}");
        return sb2.toString();
    }

    public final void u() {
        this.f39722d = true;
        this.f39724f = false;
        this.f39723e = false;
        p();
    }

    public void v() {
        this.f39722d = false;
        q();
    }

    public void w(a aVar) {
        a aVar2 = this.f39720b;
        if (aVar2 != null) {
            if (aVar2 == aVar) {
                this.f39720b = null;
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
