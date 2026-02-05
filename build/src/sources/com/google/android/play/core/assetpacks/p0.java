package com.google.android.play.core.assetpacks;

import java.io.InputStream;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class p0 extends InputStream {

    /* renamed from: d  reason: collision with root package name */
    private final InputStream f15949d;

    /* renamed from: e  reason: collision with root package name */
    private long f15950e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public p0(InputStream inputStream, long j10) {
        this.f15949d = inputStream;
        this.f15950e = j10;
    }

    @Override // java.io.InputStream, java.io.Closeable, java.lang.AutoCloseable
    public final void close() {
        super.close();
        this.f15949d.close();
        this.f15950e = 0L;
    }

    @Override // java.io.InputStream
    public final int read() {
        long j10 = this.f15950e;
        if (j10 <= 0) {
            return -1;
        }
        this.f15950e = j10 - 1;
        return this.f15949d.read();
    }

    @Override // java.io.InputStream
    public final int read(byte[] bArr, int i10, int i11) {
        long j10 = this.f15950e;
        if (j10 <= 0) {
            return -1;
        }
        int read = this.f15949d.read(bArr, i10, (int) Math.min(i11, j10));
        if (read != -1) {
            this.f15950e -= read;
        }
        return read;
    }
}
