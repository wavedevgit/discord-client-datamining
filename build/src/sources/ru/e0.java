package ru;

import java.io.IOException;
import java.io.OutputStream;
import java.nio.ByteBuffer;
import kotlin.jvm.internal.Intrinsics;
import okio.Buffer;
import okio.BufferedSink;
import okio.ByteString;
import okio.Sink;
import okio.Source;
import okio.Timeout;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class e0 implements BufferedSink {

    /* renamed from: d  reason: collision with root package name */
    public final Sink f49366d;

    /* renamed from: e  reason: collision with root package name */
    public final Buffer f49367e;

    /* renamed from: i  reason: collision with root package name */
    public boolean f49368i;

    public e0(Sink sink) {
        Intrinsics.checkNotNullParameter(sink, "sink");
        this.f49366d = sink;
        this.f49367e = new Buffer();
    }

    @Override // okio.BufferedSink
    public BufferedSink H1(long j10) {
        if (!this.f49368i) {
            this.f49367e.H1(j10);
            return h0();
        }
        throw new IllegalStateException("closed");
    }

    @Override // okio.BufferedSink
    public BufferedSink S() {
        if (!this.f49368i) {
            long size = this.f49367e.size();
            if (size > 0) {
                this.f49366d.u0(this.f49367e, size);
            }
            return this;
        }
        throw new IllegalStateException("closed");
    }

    @Override // okio.BufferedSink
    public BufferedSink S0(long j10) {
        if (!this.f49368i) {
            this.f49367e.S0(j10);
            return h0();
        }
        throw new IllegalStateException("closed");
    }

    @Override // okio.BufferedSink
    public BufferedSink Y1(ByteString byteString) {
        Intrinsics.checkNotNullParameter(byteString, "byteString");
        if (!this.f49368i) {
            this.f49367e.Y1(byteString);
            return h0();
        }
        throw new IllegalStateException("closed");
    }

    @Override // okio.Sink, java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        if (!this.f49368i) {
            try {
                if (this.f49367e.size() > 0) {
                    Sink sink = this.f49366d;
                    Buffer buffer = this.f49367e;
                    sink.u0(buffer, buffer.size());
                }
                th = null;
            } catch (Throwable th2) {
                th = th2;
            }
            try {
                this.f49366d.close();
            } catch (Throwable th3) {
                if (th == null) {
                    th = th3;
                }
            }
            this.f49368i = true;
            if (th != null) {
                throw th;
            }
        }
    }

    @Override // okio.BufferedSink
    public Buffer e() {
        return this.f49367e;
    }

    @Override // okio.BufferedSink, okio.Sink, java.io.Flushable
    public void flush() {
        if (!this.f49368i) {
            if (this.f49367e.size() > 0) {
                Sink sink = this.f49366d;
                Buffer buffer = this.f49367e;
                sink.u0(buffer, buffer.size());
            }
            this.f49366d.flush();
            return;
        }
        throw new IllegalStateException("closed");
    }

    @Override // okio.BufferedSink
    public BufferedSink h0() {
        if (!this.f49368i) {
            long n10 = this.f49367e.n();
            if (n10 > 0) {
                this.f49366d.u0(this.f49367e, n10);
            }
            return this;
        }
        throw new IllegalStateException("closed");
    }

    @Override // java.nio.channels.Channel
    public boolean isOpen() {
        return !this.f49368i;
    }

    @Override // okio.BufferedSink
    public OutputStream k2() {
        return new a();
    }

    @Override // okio.BufferedSink
    public BufferedSink q0(String string) {
        Intrinsics.checkNotNullParameter(string, "string");
        if (!this.f49368i) {
            this.f49367e.q0(string);
            return h0();
        }
        throw new IllegalStateException("closed");
    }

    @Override // okio.Sink
    public Timeout timeout() {
        return this.f49366d.timeout();
    }

    public String toString() {
        return "buffer(" + this.f49366d + ')';
    }

    @Override // okio.Sink
    public void u0(Buffer source, long j10) {
        Intrinsics.checkNotNullParameter(source, "source");
        if (!this.f49368i) {
            this.f49367e.u0(source, j10);
            h0();
            return;
        }
        throw new IllegalStateException("closed");
    }

    @Override // java.nio.channels.WritableByteChannel
    public int write(ByteBuffer source) {
        Intrinsics.checkNotNullParameter(source, "source");
        if (!this.f49368i) {
            int write = this.f49367e.write(source);
            h0();
            return write;
        }
        throw new IllegalStateException("closed");
    }

    @Override // okio.BufferedSink
    public BufferedSink writeByte(int i10) {
        if (!this.f49368i) {
            this.f49367e.writeByte(i10);
            return h0();
        }
        throw new IllegalStateException("closed");
    }

    @Override // okio.BufferedSink
    public BufferedSink writeInt(int i10) {
        if (!this.f49368i) {
            this.f49367e.writeInt(i10);
            return h0();
        }
        throw new IllegalStateException("closed");
    }

    @Override // okio.BufferedSink
    public BufferedSink writeShort(int i10) {
        if (!this.f49368i) {
            this.f49367e.writeShort(i10);
            return h0();
        }
        throw new IllegalStateException("closed");
    }

    @Override // okio.BufferedSink
    public BufferedSink x0(String string, int i10, int i11) {
        Intrinsics.checkNotNullParameter(string, "string");
        if (!this.f49368i) {
            this.f49367e.x0(string, i10, i11);
            return h0();
        }
        throw new IllegalStateException("closed");
    }

    @Override // okio.BufferedSink
    public long z0(Source source) {
        Intrinsics.checkNotNullParameter(source, "source");
        long j10 = 0;
        while (true) {
            long read = source.read(this.f49367e, 8192L);
            if (read != -1) {
                j10 += read;
                h0();
            } else {
                return j10;
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a extends OutputStream {
        a() {
        }

        @Override // java.io.OutputStream, java.io.Closeable, java.lang.AutoCloseable
        public void close() {
            e0.this.close();
        }

        @Override // java.io.OutputStream, java.io.Flushable
        public void flush() {
            e0 e0Var = e0.this;
            if (!e0Var.f49368i) {
                e0Var.flush();
            }
        }

        public String toString() {
            return e0.this + ".outputStream()";
        }

        @Override // java.io.OutputStream
        public void write(int i10) {
            e0 e0Var = e0.this;
            if (!e0Var.f49368i) {
                e0Var.f49367e.writeByte((byte) i10);
                e0.this.h0();
                return;
            }
            throw new IOException("closed");
        }

        @Override // java.io.OutputStream
        public void write(byte[] data, int i10, int i11) {
            Intrinsics.checkNotNullParameter(data, "data");
            e0 e0Var = e0.this;
            if (!e0Var.f49368i) {
                e0Var.f49367e.write(data, i10, i11);
                e0.this.h0();
                return;
            }
            throw new IOException("closed");
        }
    }

    @Override // okio.BufferedSink
    public BufferedSink write(byte[] source) {
        Intrinsics.checkNotNullParameter(source, "source");
        if (!this.f49368i) {
            this.f49367e.write(source);
            return h0();
        }
        throw new IllegalStateException("closed");
    }

    @Override // okio.BufferedSink
    public BufferedSink write(byte[] source, int i10, int i11) {
        Intrinsics.checkNotNullParameter(source, "source");
        if (!this.f49368i) {
            this.f49367e.write(source, i10, i11);
            return h0();
        }
        throw new IllegalStateException("closed");
    }
}
