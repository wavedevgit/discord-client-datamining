package com.facebook.soloader;

import java.io.File;
import java.io.FileInputStream;
import java.nio.ByteBuffer;
import java.nio.channels.FileChannel;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class i implements h {

    /* renamed from: d  reason: collision with root package name */
    private File f12057d;

    /* renamed from: e  reason: collision with root package name */
    private FileInputStream f12058e;

    /* renamed from: i  reason: collision with root package name */
    private FileChannel f12059i;

    public i(File file) {
        this.f12057d = file;
        a();
    }

    public void a() {
        FileInputStream fileInputStream = new FileInputStream(this.f12057d);
        this.f12058e = fileInputStream;
        this.f12059i = fileInputStream.getChannel();
    }

    @Override // java.nio.channels.Channel, java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        this.f12058e.close();
    }

    @Override // java.nio.channels.Channel
    public boolean isOpen() {
        return this.f12059i.isOpen();
    }

    @Override // com.facebook.soloader.h
    public int j0(ByteBuffer byteBuffer, long j10) {
        return this.f12059i.read(byteBuffer, j10);
    }

    @Override // java.nio.channels.ReadableByteChannel
    public int read(ByteBuffer byteBuffer) {
        return this.f12059i.read(byteBuffer);
    }

    @Override // java.nio.channels.WritableByteChannel
    public int write(ByteBuffer byteBuffer) {
        return this.f12059i.write(byteBuffer);
    }
}
