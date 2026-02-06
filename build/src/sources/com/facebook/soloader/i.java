package com.facebook.soloader;

import java.io.File;
import java.io.FileInputStream;
import java.nio.ByteBuffer;
import java.nio.channels.FileChannel;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class i implements h {

    /* renamed from: d  reason: collision with root package name */
    private File f11339d;

    /* renamed from: e  reason: collision with root package name */
    private FileInputStream f11340e;

    /* renamed from: i  reason: collision with root package name */
    private FileChannel f11341i;

    public i(File file) {
        this.f11339d = file;
        a();
    }

    public void a() {
        FileInputStream fileInputStream = new FileInputStream(this.f11339d);
        this.f11340e = fileInputStream;
        this.f11341i = fileInputStream.getChannel();
    }

    @Override // java.nio.channels.Channel, java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        this.f11340e.close();
    }

    @Override // com.facebook.soloader.h
    public int i0(ByteBuffer byteBuffer, long j10) {
        return this.f11341i.read(byteBuffer, j10);
    }

    @Override // java.nio.channels.Channel
    public boolean isOpen() {
        return this.f11341i.isOpen();
    }

    @Override // java.nio.channels.ReadableByteChannel
    public int read(ByteBuffer byteBuffer) {
        return this.f11341i.read(byteBuffer);
    }

    @Override // java.nio.channels.WritableByteChannel
    public int write(ByteBuffer byteBuffer) {
        return this.f11341i.write(byteBuffer);
    }
}
