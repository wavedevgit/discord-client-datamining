package com.google.android.play.core.assetpacks;

import java.io.InputStream;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class p0 extends InputStream {

    /* renamed from: d  reason: collision with root package name */
    private final InputStream f16587d;

    /* renamed from: e  reason: collision with root package name */
    private long f16588e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public p0(InputStream inputStream, long j10) {
        this.f16587d = inputStream;
        this.f16588e = j10;
    }

    @Override // java.io.InputStream, java.io.Closeable, java.lang.AutoCloseable
    public final void close() {
        super.close();
        this.f16587d.close();
        this.f16588e = 0L;
    }

    @Override // java.io.InputStream
    public final int read() {
        long j10 = this.f16588e;
        if (j10 <= 0) {
            return -1;
        }
        this.f16588e = j10 - 1;
        return this.f16587d.read();
    }

    @Override // java.io.InputStream
    public final int read(byte[] bArr, int i10, int i11) {
        long j10 = this.f16588e;
        if (j10 <= 0) {
            return -1;
        }
        int read = this.f16587d.read(bArr, i10, (int) Math.min(i11, j10));
        if (read != -1) {
            this.f16588e -= read;
        }
        return read;
    }
}
