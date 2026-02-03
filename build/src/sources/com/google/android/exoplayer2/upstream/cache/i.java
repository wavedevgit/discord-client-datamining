package com.google.android.exoplayer2.upstream.cache;

import java.io.BufferedOutputStream;
import java.io.OutputStream;
import ne.w0;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class i extends BufferedOutputStream {

    /* renamed from: d  reason: collision with root package name */
    private boolean f14087d;

    public i(OutputStream outputStream) {
        super(outputStream);
    }

    public void a(OutputStream outputStream) {
        ne.a.g(this.f14087d);
        ((BufferedOutputStream) this).out = outputStream;
        ((BufferedOutputStream) this).count = 0;
        this.f14087d = false;
    }

    @Override // java.io.FilterOutputStream, java.io.OutputStream, java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        this.f14087d = true;
        try {
            flush();
            th = null;
        } catch (Throwable th2) {
            th = th2;
        }
        try {
            ((BufferedOutputStream) this).out.close();
        } catch (Throwable th3) {
            if (th == null) {
                th = th3;
            }
        }
        if (th != null) {
            w0.b1(th);
        }
    }

    public i(OutputStream outputStream, int i10) {
        super(outputStream, i10);
    }
}
