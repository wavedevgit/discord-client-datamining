package com.facebook.soloader;

import java.io.File;
import java.io.FileInputStream;
import java.nio.ByteBuffer;
import java.nio.channels.FileChannel;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class i implements h {

    /* renamed from: d  reason: collision with root package name */
    private File f11479d;

    /* renamed from: e  reason: collision with root package name */
    private FileInputStream f11480e;

    /* renamed from: i  reason: collision with root package name */
    private FileChannel f11481i;

    public i(File file) {
        this.f11479d = file;
        a();
    }

    public void a() {
        FileInputStream fileInputStream = new FileInputStream(this.f11479d);
        this.f11480e = fileInputStream;
        this.f11481i = fileInputStream.getChannel();
    }

    @Override // java.nio.channels.Channel, java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        this.f11480e.close();
    }

    @Override // java.nio.channels.Channel
    public boolean isOpen() {
        return this.f11481i.isOpen();
    }

    @Override // com.facebook.soloader.h
    public int j0(ByteBuffer byteBuffer, long j10) {
        return this.f11481i.read(byteBuffer, j10);
    }

    @Override // java.nio.channels.ReadableByteChannel
    public int read(ByteBuffer byteBuffer) {
        return this.f11481i.read(byteBuffer);
    }

    @Override // java.nio.channels.WritableByteChannel
    public int write(ByteBuffer byteBuffer) {
        return this.f11481i.write(byteBuffer);
    }
}
