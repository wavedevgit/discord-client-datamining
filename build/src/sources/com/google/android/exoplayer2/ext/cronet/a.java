package com.google.android.exoplayer2.ext.cronet;

import java.nio.ByteBuffer;
import org.chromium.net.UploadDataProvider;
import org.chromium.net.UploadDataSink;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class a extends UploadDataProvider {

    /* renamed from: d  reason: collision with root package name */
    private final byte[] f12428d;

    /* renamed from: e  reason: collision with root package name */
    private int f12429e;

    public a(byte[] bArr) {
        this.f12428d = bArr;
    }

    @Override // org.chromium.net.UploadDataProvider
    public long getLength() {
        return this.f12428d.length;
    }

    @Override // org.chromium.net.UploadDataProvider
    public void read(UploadDataSink uploadDataSink, ByteBuffer byteBuffer) {
        int min = Math.min(byteBuffer.remaining(), this.f12428d.length - this.f12429e);
        byteBuffer.put(this.f12428d, this.f12429e, min);
        this.f12429e += min;
        uploadDataSink.onReadSucceeded(false);
    }

    @Override // org.chromium.net.UploadDataProvider
    public void rewind(UploadDataSink uploadDataSink) {
        this.f12429e = 0;
        uploadDataSink.onRewindSucceeded();
    }
}
