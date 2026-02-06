package el;

import java.lang.reflect.Array;
import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    private final byte[][] f21623a;

    /* renamed from: b  reason: collision with root package name */
    private final int f21624b;

    /* renamed from: c  reason: collision with root package name */
    private final int f21625c;

    public b(int i10, int i11) {
        this.f21623a = (byte[][]) Array.newInstance(Byte.TYPE, i11, i10);
        this.f21624b = i10;
        this.f21625c = i11;
    }

    public void a(byte b10) {
        for (byte[] bArr : this.f21623a) {
            Arrays.fill(bArr, b10);
        }
    }

    public byte b(int i10, int i11) {
        return this.f21623a[i11][i10];
    }

    public byte[][] c() {
        return this.f21623a;
    }

    public int d() {
        return this.f21625c;
    }

    public int e() {
        return this.f21624b;
    }

    public void f(int i10, int i11, int i12) {
        this.f21623a[i11][i10] = (byte) i12;
    }

    public void g(int i10, int i11, boolean z10) {
        this.f21623a[i11][i10] = z10 ? (byte) 1 : (byte) 0;
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder((this.f21624b * 2 * this.f21625c) + 2);
        for (int i10 = 0; i10 < this.f21625c; i10++) {
            byte[] bArr = this.f21623a[i10];
            for (int i11 = 0; i11 < this.f21624b; i11++) {
                byte b10 = bArr[i11];
                if (b10 != 0) {
                    if (b10 != 1) {
                        sb2.append("  ");
                    } else {
                        sb2.append(" 1");
                    }
                } else {
                    sb2.append(" 0");
                }
            }
            sb2.append('\n');
        }
        return sb2.toString();
    }
}
