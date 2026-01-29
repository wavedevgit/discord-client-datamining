package com.facebook.soloader;

import java.io.File;
import java.io.FileInputStream;
import java.nio.ByteBuffer;
import java.nio.channels.FileChannel;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class i implements h {

    /* renamed from: d  reason: collision with root package name */
    private File f12458d;

    /* renamed from: e  reason: collision with root package name */
    private FileInputStream f12459e;

    /* renamed from: i  reason: collision with root package name */
    private FileChannel f12460i;

    public i(File file) {
        this.f12458d = file;
        a();
    }

    public void a() {
        FileInputStream fileInputStream = new FileInputStream(this.f12458d);
        this.f12459e = fileInputStream;
        this.f12460i = fileInputStream.getChannel();
    }

    @Override // java.nio.channels.Channel, java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        this.f12459e.close();
    }

    @Override // com.facebook.soloader.h
    public int f0(ByteBuffer byteBuffer, long j10) {
        return this.f12460i.read(byteBuffer, j10);
    }

    @Override // java.nio.channels.Channel
    public boolean isOpen() {
        return this.f12460i.isOpen();
    }

    @Override // java.nio.channels.ReadableByteChannel
    public int read(ByteBuffer byteBuffer) {
        return this.f12460i.read(byteBuffer);
    }

    @Override // java.nio.channels.WritableByteChannel
    public int write(ByteBuffer byteBuffer) {
        return this.f12460i.write(byteBuffer);
    }
}
