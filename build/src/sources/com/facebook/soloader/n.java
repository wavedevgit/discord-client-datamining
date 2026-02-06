package com.facebook.soloader;

import java.io.Closeable;
import java.io.File;
import java.io.FileOutputStream;
import java.nio.channels.FileLock;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class n implements Closeable {

    /* renamed from: d  reason: collision with root package name */
    private final FileOutputStream f11359d;

    /* renamed from: e  reason: collision with root package name */
    private final FileLock f11360e;

    private n(File file) {
        FileOutputStream fileOutputStream = new FileOutputStream(file);
        this.f11359d = fileOutputStream;
        try {
            FileLock lock = fileOutputStream.getChannel().lock();
            if (lock == null) {
                fileOutputStream.close();
            }
            this.f11360e = lock;
        } catch (Throwable th2) {
            this.f11359d.close();
            throw th2;
        }
    }

    public static n a(File file) {
        return new n(file);
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        try {
            FileLock fileLock = this.f11360e;
            if (fileLock != null) {
                fileLock.release();
            }
        } finally {
            this.f11359d.close();
        }
    }
}
