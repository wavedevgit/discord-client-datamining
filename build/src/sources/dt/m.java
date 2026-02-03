package dt;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class m {

    /* renamed from: a  reason: collision with root package name */
    public final z f22431a;

    /* renamed from: b  reason: collision with root package name */
    private boolean f22432b;

    public m(z writer) {
        Intrinsics.checkNotNullParameter(writer, "writer");
        this.f22431a = writer;
        this.f22432b = true;
    }

    public final boolean a() {
        return this.f22432b;
    }

    public void b() {
        this.f22432b = true;
    }

    public void c() {
        this.f22432b = false;
    }

    public void d() {
        this.f22432b = false;
    }

    public void e(byte b10) {
        this.f22431a.writeLong(b10);
    }

    public final void f(char c10) {
        this.f22431a.a(c10);
    }

    public void g(double d10) {
        this.f22431a.c(String.valueOf(d10));
    }

    public void h(float f10) {
        this.f22431a.c(String.valueOf(f10));
    }

    public void i(int i10) {
        this.f22431a.writeLong(i10);
    }

    public void j(long j10) {
        this.f22431a.writeLong(j10);
    }

    public final void k(String v10) {
        Intrinsics.checkNotNullParameter(v10, "v");
        this.f22431a.c(v10);
    }

    public void l(short s10) {
        this.f22431a.writeLong(s10);
    }

    public void m(boolean z10) {
        this.f22431a.c(String.valueOf(z10));
    }

    public void n(String value) {
        Intrinsics.checkNotNullParameter(value, "value");
        this.f22431a.b(value);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final void o(boolean z10) {
        this.f22432b = z10;
    }

    public void p() {
    }

    public void q() {
    }
}
