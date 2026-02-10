package com.google.android.exoplayer2.ext.cronet;

import java.nio.ByteBuffer;
import org.chromium.net.UploadDataProvider;
import org.chromium.net.UploadDataSink;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class a extends UploadDataProvider {

    /* renamed from: d  reason: collision with root package name */
    private final byte[] f12568d;

    /* renamed from: e  reason: collision with root package name */
    private int f12569e;

    public a(byte[] bArr) {
        this.f12568d = bArr;
    }

    @Override // org.chromium.net.UploadDataProvider
    public long getLength() {
        return this.f12568d.length;
    }

    @Override // org.chromium.net.UploadDataProvider
    public void read(UploadDataSink uploadDataSink, ByteBuffer byteBuffer) {
        int min = Math.min(byteBuffer.remaining(), this.f12568d.length - this.f12569e);
        byteBuffer.put(this.f12568d, this.f12569e, min);
        this.f12569e += min;
        uploadDataSink.onReadSucceeded(false);
    }

    @Override // org.chromium.net.UploadDataProvider
    public void rewind(UploadDataSink uploadDataSink) {
        this.f12569e = 0;
        uploadDataSink.onRewindSucceeded();
    }
}
