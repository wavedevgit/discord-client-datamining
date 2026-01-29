package ck;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class i {

    /* renamed from: a  reason: collision with root package name */
    private final int f8418a;

    /* renamed from: b  reason: collision with root package name */
    private final int f8419b;

    /* JADX INFO: Access modifiers changed from: protected */
    public i(int i10, int i11) {
        this.f8418a = i10;
        this.f8419b = i11;
    }

    public final int a() {
        return this.f8419b;
    }

    public abstract byte[] b();

    public abstract byte[] c(int i10, byte[] bArr);

    public final int d() {
        return this.f8418a;
    }

    public i e() {
        return new h(this);
    }

    public boolean f() {
        return false;
    }

    public i g() {
        throw new UnsupportedOperationException("This luminance source does not support rotation by 90 degrees.");
    }

    public final String toString() {
        char c10;
        int i10 = this.f8418a;
        byte[] bArr = new byte[i10];
        StringBuilder sb2 = new StringBuilder(this.f8419b * (i10 + 1));
        for (int i11 = 0; i11 < this.f8419b; i11++) {
            bArr = c(i11, bArr);
            for (int i12 = 0; i12 < this.f8418a; i12++) {
                int i13 = bArr[i12] & 255;
                if (i13 < 64) {
                    c10 = '#';
                } else if (i13 < 128) {
                    c10 = '+';
                } else if (i13 < 192) {
                    c10 = '.';
                } else {
                    c10 = ' ';
                }
                sb2.append(c10);
            }
            sb2.append('\n');
        }
        return sb2.toString();
    }
}
