package com.google.android.exoplayer2.ext.cronet;

import java.nio.ByteBuffer;
import org.chromium.net.UploadDataProvider;
import org.chromium.net.UploadDataSink;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class a extends UploadDataProvider {

    /* renamed from: d  reason: collision with root package name */
    private final byte[] f13145d;

    /* renamed from: e  reason: collision with root package name */
    private int f13146e;

    public a(byte[] bArr) {
        this.f13145d = bArr;
    }

    @Override // org.chromium.net.UploadDataProvider
    public long getLength() {
        return this.f13145d.length;
    }

    @Override // org.chromium.net.UploadDataProvider
    public void read(UploadDataSink uploadDataSink, ByteBuffer byteBuffer) {
        int min = Math.min(byteBuffer.remaining(), this.f13145d.length - this.f13146e);
        byteBuffer.put(this.f13145d, this.f13146e, min);
        this.f13146e += min;
        uploadDataSink.onReadSucceeded(false);
    }

    @Override // org.chromium.net.UploadDataProvider
    public void rewind(UploadDataSink uploadDataSink) {
        this.f13146e = 0;
        uploadDataSink.onRewindSucceeded();
    }
}
