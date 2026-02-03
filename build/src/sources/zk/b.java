package zk;

import java.lang.reflect.Array;
import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    private final byte[][] f55885a;

    /* renamed from: b  reason: collision with root package name */
    private final int f55886b;

    /* renamed from: c  reason: collision with root package name */
    private final int f55887c;

    public b(int i10, int i11) {
        this.f55885a = (byte[][]) Array.newInstance(Byte.TYPE, i11, i10);
        this.f55886b = i10;
        this.f55887c = i11;
    }

    public void a(byte b10) {
        for (byte[] bArr : this.f55885a) {
            Arrays.fill(bArr, b10);
        }
    }

    public byte b(int i10, int i11) {
        return this.f55885a[i11][i10];
    }

    public byte[][] c() {
        return this.f55885a;
    }

    public int d() {
        return this.f55887c;
    }

    public int e() {
        return this.f55886b;
    }

    public void f(int i10, int i11, int i12) {
        this.f55885a[i11][i10] = (byte) i12;
    }

    public void g(int i10, int i11, boolean z10) {
        this.f55885a[i11][i10] = z10 ? (byte) 1 : (byte) 0;
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder((this.f55886b * 2 * this.f55887c) + 2);
        for (int i10 = 0; i10 < this.f55887c; i10++) {
            byte[] bArr = this.f55885a[i10];
            for (int i11 = 0; i11 < this.f55886b; i11++) {
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
