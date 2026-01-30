package pg;

import java.io.OutputStream;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class w1 extends OutputStream {

    /* renamed from: d  reason: collision with root package name */
    private long f45818d = 0;

    /* JADX INFO: Access modifiers changed from: package-private */
    public final long a() {
        return this.f45818d;
    }

    @Override // java.io.OutputStream
    public final void write(int i10) {
        this.f45818d++;
    }

    @Override // java.io.OutputStream
    public final void write(byte[] bArr) {
        this.f45818d += bArr.length;
    }

    @Override // java.io.OutputStream
    public final void write(byte[] bArr, int i10, int i11) {
        int length;
        int i12;
        if (i10 >= 0 && i10 <= (length = bArr.length) && i11 >= 0 && (i12 = i10 + i11) <= length && i12 >= 0) {
            this.f45818d += i11;
            return;
        }
        throw new IndexOutOfBoundsException();
    }
}
