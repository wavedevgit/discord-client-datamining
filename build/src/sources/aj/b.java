package aj;

import java.io.OutputStream;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class b extends OutputStream {

    /* renamed from: d  reason: collision with root package name */
    private long f654d = 0;

    /* JADX INFO: Access modifiers changed from: package-private */
    public long a() {
        return this.f654d;
    }

    @Override // java.io.OutputStream
    public void write(int i10) {
        this.f654d++;
    }

    @Override // java.io.OutputStream
    public void write(byte[] bArr) {
        this.f654d += bArr.length;
    }

    @Override // java.io.OutputStream
    public void write(byte[] bArr, int i10, int i11) {
        int i12;
        if (i10 >= 0 && i10 <= bArr.length && i11 >= 0 && (i12 = i10 + i11) <= bArr.length && i12 >= 0) {
            this.f654d += i11;
            return;
        }
        throw new IndexOutOfBoundsException();
    }
}
