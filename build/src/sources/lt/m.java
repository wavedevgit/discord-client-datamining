package lt;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class m {

    /* renamed from: a  reason: collision with root package name */
    public final z f36683a;

    /* renamed from: b  reason: collision with root package name */
    private boolean f36684b;

    public m(z writer) {
        Intrinsics.checkNotNullParameter(writer, "writer");
        this.f36683a = writer;
        this.f36684b = true;
    }

    public final boolean a() {
        return this.f36684b;
    }

    public void b() {
        this.f36684b = true;
    }

    public void c() {
        this.f36684b = false;
    }

    public void d() {
        this.f36684b = false;
    }

    public void e(byte b10) {
        this.f36683a.writeLong(b10);
    }

    public final void f(char c10) {
        this.f36683a.a(c10);
    }

    public void g(double d10) {
        this.f36683a.c(String.valueOf(d10));
    }

    public void h(float f10) {
        this.f36683a.c(String.valueOf(f10));
    }

    public void i(int i10) {
        this.f36683a.writeLong(i10);
    }

    public void j(long j10) {
        this.f36683a.writeLong(j10);
    }

    public final void k(String v10) {
        Intrinsics.checkNotNullParameter(v10, "v");
        this.f36683a.c(v10);
    }

    public void l(short s10) {
        this.f36683a.writeLong(s10);
    }

    public void m(boolean z10) {
        this.f36683a.c(String.valueOf(z10));
    }

    public void n(String value) {
        Intrinsics.checkNotNullParameter(value, "value");
        this.f36683a.b(value);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final void o(boolean z10) {
        this.f36684b = z10;
    }

    public void p() {
    }

    public void q() {
    }
}
