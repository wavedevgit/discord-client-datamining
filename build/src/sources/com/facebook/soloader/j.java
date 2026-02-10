package com.facebook.soloader;

import java.io.IOException;
import java.io.InputStream;
import java.nio.ByteBuffer;
import java.util.zip.ZipEntry;
import java.util.zip.ZipFile;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class j implements h {

    /* renamed from: d  reason: collision with root package name */
    private InputStream f12059d;

    /* renamed from: e  reason: collision with root package name */
    private final ZipEntry f12060e;

    /* renamed from: i  reason: collision with root package name */
    private final ZipFile f12061i;

    /* renamed from: o  reason: collision with root package name */
    private final long f12062o;

    /* renamed from: p  reason: collision with root package name */
    private boolean f12063p = true;

    /* renamed from: q  reason: collision with root package name */
    private long f12064q = 0;

    public j(ZipFile zipFile, ZipEntry zipEntry) {
        this.f12061i = zipFile;
        this.f12060e = zipEntry;
        this.f12062o = zipEntry.getSize();
        InputStream inputStream = zipFile.getInputStream(zipEntry);
        this.f12059d = inputStream;
        if (inputStream != null) {
            return;
        }
        throw new IOException(zipEntry.getName() + "'s InputStream is null");
    }

    public h a(long j10) {
        InputStream inputStream = this.f12059d;
        if (inputStream != null) {
            long j11 = this.f12064q;
            if (j10 == j11) {
                return this;
            }
            long j12 = this.f12062o;
            if (j10 > j12) {
                j10 = j12;
            }
            if (j10 >= j11) {
                inputStream.skip(j10 - j11);
            } else {
                inputStream.close();
                InputStream inputStream2 = this.f12061i.getInputStream(this.f12060e);
                this.f12059d = inputStream2;
                if (inputStream2 != null) {
                    inputStream2.skip(j10);
                } else {
                    throw new IOException(this.f12060e.getName() + "'s InputStream is null");
                }
            }
            this.f12064q = j10;
            return this;
        }
        throw new IOException(this.f12060e.getName() + "'s InputStream is null");
    }

    @Override // java.nio.channels.Channel, java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        InputStream inputStream = this.f12059d;
        if (inputStream != null) {
            inputStream.close();
            this.f12063p = false;
        }
    }

    @Override // java.nio.channels.Channel
    public boolean isOpen() {
        return this.f12063p;
    }

    @Override // com.facebook.soloader.h
    public int j0(ByteBuffer byteBuffer, long j10) {
        if (this.f12059d != null) {
            int remaining = byteBuffer.remaining();
            long j11 = this.f12062o - j10;
            if (j11 <= 0) {
                return -1;
            }
            int i10 = (int) j11;
            if (remaining > i10) {
                remaining = i10;
            }
            a(j10);
            if (byteBuffer.hasArray()) {
                this.f12059d.read(byteBuffer.array(), 0, remaining);
                byteBuffer.position(byteBuffer.position() + remaining);
            } else {
                byte[] bArr = new byte[remaining];
                this.f12059d.read(bArr, 0, remaining);
                byteBuffer.put(bArr, 0, remaining);
            }
            this.f12064q += remaining;
            return remaining;
        }
        throw new IOException("InputStream is null");
    }

    @Override // java.nio.channels.ReadableByteChannel
    public int read(ByteBuffer byteBuffer) {
        return j0(byteBuffer, this.f12064q);
    }

    @Override // java.nio.channels.WritableByteChannel
    public int write(ByteBuffer byteBuffer) {
        throw new UnsupportedOperationException("ElfZipFileChannel doesn't support write");
    }
}
