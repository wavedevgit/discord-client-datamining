package com.facebook.soloader;

import java.io.IOException;
import java.io.InputStream;
import java.nio.ByteBuffer;
import java.util.zip.ZipEntry;
import java.util.zip.ZipFile;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class j implements h {

    /* renamed from: d  reason: collision with root package name */
    private InputStream f11058d;

    /* renamed from: e  reason: collision with root package name */
    private final ZipEntry f11059e;

    /* renamed from: i  reason: collision with root package name */
    private final ZipFile f11060i;

    /* renamed from: o  reason: collision with root package name */
    private final long f11061o;

    /* renamed from: p  reason: collision with root package name */
    private boolean f11062p = true;

    /* renamed from: q  reason: collision with root package name */
    private long f11063q = 0;

    public j(ZipFile zipFile, ZipEntry zipEntry) {
        this.f11060i = zipFile;
        this.f11059e = zipEntry;
        this.f11061o = zipEntry.getSize();
        InputStream inputStream = zipFile.getInputStream(zipEntry);
        this.f11058d = inputStream;
        if (inputStream != null) {
            return;
        }
        throw new IOException(zipEntry.getName() + "'s InputStream is null");
    }

    public h a(long j10) {
        InputStream inputStream = this.f11058d;
        if (inputStream != null) {
            long j11 = this.f11063q;
            if (j10 == j11) {
                return this;
            }
            long j12 = this.f11061o;
            if (j10 > j12) {
                j10 = j12;
            }
            if (j10 >= j11) {
                inputStream.skip(j10 - j11);
            } else {
                inputStream.close();
                InputStream inputStream2 = this.f11060i.getInputStream(this.f11059e);
                this.f11058d = inputStream2;
                if (inputStream2 != null) {
                    inputStream2.skip(j10);
                } else {
                    throw new IOException(this.f11059e.getName() + "'s InputStream is null");
                }
            }
            this.f11063q = j10;
            return this;
        }
        throw new IOException(this.f11059e.getName() + "'s InputStream is null");
    }

    @Override // java.nio.channels.Channel, java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        InputStream inputStream = this.f11058d;
        if (inputStream != null) {
            inputStream.close();
            this.f11062p = false;
        }
    }

    @Override // com.facebook.soloader.h
    public int f0(ByteBuffer byteBuffer, long j10) {
        if (this.f11058d != null) {
            int remaining = byteBuffer.remaining();
            long j11 = this.f11061o - j10;
            if (j11 <= 0) {
                return -1;
            }
            int i10 = (int) j11;
            if (remaining > i10) {
                remaining = i10;
            }
            a(j10);
            if (byteBuffer.hasArray()) {
                this.f11058d.read(byteBuffer.array(), 0, remaining);
                byteBuffer.position(byteBuffer.position() + remaining);
            } else {
                byte[] bArr = new byte[remaining];
                this.f11058d.read(bArr, 0, remaining);
                byteBuffer.put(bArr, 0, remaining);
            }
            this.f11063q += remaining;
            return remaining;
        }
        throw new IOException("InputStream is null");
    }

    @Override // java.nio.channels.Channel
    public boolean isOpen() {
        return this.f11062p;
    }

    @Override // java.nio.channels.ReadableByteChannel
    public int read(ByteBuffer byteBuffer) {
        return f0(byteBuffer, this.f11063q);
    }

    @Override // java.nio.channels.WritableByteChannel
    public int write(ByteBuffer byteBuffer) {
        throw new UnsupportedOperationException("ElfZipFileChannel doesn't support write");
    }
}
