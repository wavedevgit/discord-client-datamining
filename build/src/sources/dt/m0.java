package dt;

import java.util.Arrays;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class m0 implements z {

    /* renamed from: a  reason: collision with root package name */
    private char[] f22433a = h.f22409c.d();

    /* renamed from: b  reason: collision with root package name */
    private int f22434b;

    private final void d(int i10, int i11, String str) {
        int i12;
        int length = str.length();
        while (i10 < length) {
            int f10 = f(i11, 2);
            char charAt = str.charAt(i10);
            if (charAt < c1.a().length) {
                byte b10 = c1.a()[charAt];
                if (b10 == 0) {
                    i12 = f10 + 1;
                    this.f22433a[f10] = charAt;
                } else {
                    if (b10 == 1) {
                        String str2 = c1.b()[charAt];
                        Intrinsics.checkNotNull(str2);
                        int f11 = f(f10, str2.length());
                        str2.getChars(0, str2.length(), this.f22433a, f11);
                        i11 = f11 + str2.length();
                        this.f22434b = i11;
                    } else {
                        char[] cArr = this.f22433a;
                        cArr[f10] = '\\';
                        cArr[f10 + 1] = (char) b10;
                        i11 = f10 + 2;
                        this.f22434b = i11;
                    }
                    i10++;
                }
            } else {
                i12 = f10 + 1;
                this.f22433a[f10] = charAt;
            }
            i11 = i12;
            i10++;
        }
        int f12 = f(i11, 1);
        this.f22433a[f12] = '\"';
        this.f22434b = f12 + 1;
    }

    private final void e(int i10) {
        f(this.f22434b, i10);
    }

    private final int f(int i10, int i11) {
        int i12 = i11 + i10;
        char[] cArr = this.f22433a;
        if (cArr.length <= i12) {
            char[] copyOf = Arrays.copyOf(cArr, kotlin.ranges.d.d(i12, i10 * 2));
            Intrinsics.checkNotNullExpressionValue(copyOf, "copyOf(...)");
            this.f22433a = copyOf;
        }
        return i10;
    }

    @Override // dt.z
    public void a(char c10) {
        e(1);
        char[] cArr = this.f22433a;
        int i10 = this.f22434b;
        this.f22434b = i10 + 1;
        cArr[i10] = c10;
    }

    @Override // dt.z
    public void b(String text) {
        Intrinsics.checkNotNullParameter(text, "text");
        e(text.length() + 2);
        char[] cArr = this.f22433a;
        int i10 = this.f22434b;
        int i11 = i10 + 1;
        cArr[i10] = '\"';
        int length = text.length();
        text.getChars(0, length, cArr, i11);
        int i12 = length + i11;
        for (int i13 = i11; i13 < i12; i13++) {
            char c10 = cArr[i13];
            if (c10 < c1.a().length && c1.a()[c10] != 0) {
                d(i13 - i11, i13, text);
                return;
            }
        }
        cArr[i12] = '\"';
        this.f22434b = i12 + 1;
    }

    @Override // dt.z
    public void c(String text) {
        Intrinsics.checkNotNullParameter(text, "text");
        int length = text.length();
        if (length == 0) {
            return;
        }
        e(length);
        text.getChars(0, text.length(), this.f22433a, this.f22434b);
        this.f22434b += length;
    }

    public void g() {
        h.f22409c.c(this.f22433a);
    }

    public String toString() {
        return new String(this.f22433a, 0, this.f22434b);
    }

    @Override // dt.z
    public void writeLong(long j10) {
        c(String.valueOf(j10));
    }
}
