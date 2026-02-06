package lt;

import kotlin.jvm.internal.Intrinsics;
import kotlin.text.StringsKt;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class d implements CharSequence {

    /* renamed from: d  reason: collision with root package name */
    private final char[] f36645d;

    /* renamed from: e  reason: collision with root package name */
    private int f36646e;

    public d(char[] buffer) {
        Intrinsics.checkNotNullParameter(buffer, "buffer");
        this.f36645d = buffer;
        this.f36646e = buffer.length;
    }

    public char a(int i10) {
        return this.f36645d[i10];
    }

    public final char[] b() {
        return this.f36645d;
    }

    public int c() {
        return this.f36646e;
    }

    @Override // java.lang.CharSequence
    public final /* bridge */ char charAt(int i10) {
        return a(i10);
    }

    public void d(int i10) {
        this.f36646e = i10;
    }

    public final String e(int i10, int i11) {
        return StringsKt.w(this.f36645d, i10, Math.min(i11, length()));
    }

    public final void f(int i10) {
        d(Math.min(this.f36645d.length, i10));
    }

    @Override // java.lang.CharSequence
    public final /* bridge */ int length() {
        return c();
    }

    @Override // java.lang.CharSequence
    public CharSequence subSequence(int i10, int i11) {
        return StringsKt.w(this.f36645d, i10, Math.min(i11, length()));
    }

    @Override // java.lang.CharSequence
    public String toString() {
        return e(0, length());
    }
}
