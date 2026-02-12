package com.google.android.exoplayer2.ext.cronet;

import java.nio.ByteBuffer;
import org.chromium.net.UploadDataProvider;
import org.chromium.net.UploadDataSink;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class a extends UploadDataProvider {

    /* renamed from: d  reason: collision with root package name */
    private final byte[] f13146d;

    /* renamed from: e  reason: collision with root package name */
    private int f13147e;

    public a(byte[] bArr) {
        this.f13146d = bArr;
    }

    @Override // org.chromium.net.UploadDataProvider
    public long getLength() {
        return this.f13146d.length;
    }

    @Override // org.chromium.net.UploadDataProvider
    public void read(UploadDataSink uploadDataSink, ByteBuffer byteBuffer) {
        int min = Math.min(byteBuffer.remaining(), this.f13146d.length - this.f13147e);
        byteBuffer.put(this.f13146d, this.f13147e, min);
        this.f13147e += min;
        uploadDataSink.onReadSucceeded(false);
    }

    @Override // org.chromium.net.UploadDataProvider
    public void rewind(UploadDataSink uploadDataSink) {
        this.f13147e = 0;
        uploadDataSink.onRewindSucceeded();
    }
}
