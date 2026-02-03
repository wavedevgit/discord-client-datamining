package com.facebook.soloader;

import java.io.File;
import java.io.FileInputStream;
import java.nio.ByteBuffer;
import java.nio.channels.FileChannel;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class i implements h {

    /* renamed from: d  reason: collision with root package name */
    private File f12087d;

    /* renamed from: e  reason: collision with root package name */
    private FileInputStream f12088e;

    /* renamed from: i  reason: collision with root package name */
    private FileChannel f12089i;

    public i(File file) {
        this.f12087d = file;
        a();
    }

    public void a() {
        FileInputStream fileInputStream = new FileInputStream(this.f12087d);
        this.f12088e = fileInputStream;
        this.f12089i = fileInputStream.getChannel();
    }

    @Override // java.nio.channels.Channel, java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        this.f12088e.close();
    }

    @Override // com.facebook.soloader.h
    public int g0(ByteBuffer byteBuffer, long j10) {
        return this.f12089i.read(byteBuffer, j10);
    }

    @Override // java.nio.channels.Channel
    public boolean isOpen() {
        return this.f12089i.isOpen();
    }

    @Override // java.nio.channels.ReadableByteChannel
    public int read(ByteBuffer byteBuffer) {
        return this.f12089i.read(byteBuffer);
    }

    @Override // java.nio.channels.WritableByteChannel
    public int write(ByteBuffer byteBuffer) {
        return this.f12089i.write(byteBuffer);
    }
}
