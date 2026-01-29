package iu;

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
    public final Sink f31225d;

    /* renamed from: e  reason: collision with root package name */
    public final Buffer f31226e;

    /* renamed from: i  reason: collision with root package name */
    public boolean f31227i;

    public e0(Sink sink) {
        Intrinsics.checkNotNullParameter(sink, "sink");
        this.f31225d = sink;
        this.f31226e = new Buffer();
    }

    @Override // okio.BufferedSink
    public BufferedSink K1(long j10) {
        if (!this.f31227i) {
            this.f31226e.K1(j10);
            return d0();
        }
        throw new IllegalStateException("closed");
    }

    @Override // okio.BufferedSink
    public BufferedSink O() {
        if (!this.f31227i) {
            long size = this.f31226e.size();
            if (size > 0) {
                this.f31225d.t0(this.f31226e, size);
            }
            return this;
        }
        throw new IllegalStateException("closed");
    }

    @Override // okio.BufferedSink
    public BufferedSink V0(long j10) {
        if (!this.f31227i) {
            this.f31226e.V0(j10);
            return d0();
        }
        throw new IllegalStateException("closed");
    }

    @Override // okio.BufferedSink
    public BufferedSink a2(ByteString byteString) {
        Intrinsics.checkNotNullParameter(byteString, "byteString");
        if (!this.f31227i) {
            this.f31226e.a2(byteString);
            return d0();
        }
        throw new IllegalStateException("closed");
    }

    @Override // okio.Sink, java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        if (!this.f31227i) {
            try {
                if (this.f31226e.size() > 0) {
                    Sink sink = this.f31225d;
                    Buffer buffer = this.f31226e;
                    sink.t0(buffer, buffer.size());
                }
                th = null;
            } catch (Throwable th2) {
                th = th2;
            }
            try {
                this.f31225d.close();
            } catch (Throwable th3) {
                if (th == null) {
                    th = th3;
                }
            }
            this.f31227i = true;
            if (th != null) {
                throw th;
            }
        }
    }

    @Override // okio.BufferedSink
    public BufferedSink d0() {
        if (!this.f31227i) {
            long E = this.f31226e.E();
            if (E > 0) {
                this.f31225d.t0(this.f31226e, E);
            }
            return this;
        }
        throw new IllegalStateException("closed");
    }

    @Override // okio.BufferedSink
    public Buffer e() {
        return this.f31226e;
    }

    @Override // okio.BufferedSink, okio.Sink, java.io.Flushable
    public void flush() {
        if (!this.f31227i) {
            if (this.f31226e.size() > 0) {
                Sink sink = this.f31225d;
                Buffer buffer = this.f31226e;
                sink.t0(buffer, buffer.size());
            }
            this.f31225d.flush();
            return;
        }
        throw new IllegalStateException("closed");
    }

    @Override // java.nio.channels.Channel
    public boolean isOpen() {
        return !this.f31227i;
    }

    @Override // okio.BufferedSink
    public OutputStream k2() {
        return new a();
    }

    @Override // okio.BufferedSink
    public BufferedSink n0(String string) {
        Intrinsics.checkNotNullParameter(string, "string");
        if (!this.f31227i) {
            this.f31226e.n0(string);
            return d0();
        }
        throw new IllegalStateException("closed");
    }

    @Override // okio.Sink
    public void t0(Buffer source, long j10) {
        Intrinsics.checkNotNullParameter(source, "source");
        if (!this.f31227i) {
            this.f31226e.t0(source, j10);
            d0();
            return;
        }
        throw new IllegalStateException("closed");
    }

    @Override // okio.Sink
    public Timeout timeout() {
        return this.f31225d.timeout();
    }

    public String toString() {
        return "buffer(" + this.f31225d + ')';
    }

    @Override // okio.BufferedSink
    public BufferedSink w0(String string, int i10, int i11) {
        Intrinsics.checkNotNullParameter(string, "string");
        if (!this.f31227i) {
            this.f31226e.w0(string, i10, i11);
            return d0();
        }
        throw new IllegalStateException("closed");
    }

    @Override // java.nio.channels.WritableByteChannel
    public int write(ByteBuffer source) {
        Intrinsics.checkNotNullParameter(source, "source");
        if (!this.f31227i) {
            int write = this.f31226e.write(source);
            d0();
            return write;
        }
        throw new IllegalStateException("closed");
    }

    @Override // okio.BufferedSink
    public BufferedSink writeByte(int i10) {
        if (!this.f31227i) {
            this.f31226e.writeByte(i10);
            return d0();
        }
        throw new IllegalStateException("closed");
    }

    @Override // okio.BufferedSink
    public BufferedSink writeInt(int i10) {
        if (!this.f31227i) {
            this.f31226e.writeInt(i10);
            return d0();
        }
        throw new IllegalStateException("closed");
    }

    @Override // okio.BufferedSink
    public BufferedSink writeShort(int i10) {
        if (!this.f31227i) {
            this.f31226e.writeShort(i10);
            return d0();
        }
        throw new IllegalStateException("closed");
    }

    @Override // okio.BufferedSink
    public long y0(Source source) {
        Intrinsics.checkNotNullParameter(source, "source");
        long j10 = 0;
        while (true) {
            long read = source.read(this.f31226e, 8192L);
            if (read != -1) {
                j10 += read;
                d0();
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
            if (!e0Var.f31227i) {
                e0Var.flush();
            }
        }

        public String toString() {
            return e0.this + ".outputStream()";
        }

        @Override // java.io.OutputStream
        public void write(int i10) {
            e0 e0Var = e0.this;
            if (!e0Var.f31227i) {
                e0Var.f31226e.writeByte((byte) i10);
                e0.this.d0();
                return;
            }
            throw new IOException("closed");
        }

        @Override // java.io.OutputStream
        public void write(byte[] data, int i10, int i11) {
            Intrinsics.checkNotNullParameter(data, "data");
            e0 e0Var = e0.this;
            if (!e0Var.f31227i) {
                e0Var.f31226e.write(data, i10, i11);
                e0.this.d0();
                return;
            }
            throw new IOException("closed");
        }
    }

    @Override // okio.BufferedSink
    public BufferedSink write(byte[] source) {
        Intrinsics.checkNotNullParameter(source, "source");
        if (!this.f31227i) {
            this.f31226e.write(source);
            return d0();
        }
        throw new IllegalStateException("closed");
    }

    @Override // okio.BufferedSink
    public BufferedSink write(byte[] source, int i10, int i11) {
        Intrinsics.checkNotNullParameter(source, "source");
        if (!this.f31227i) {
            this.f31226e.write(source, i10, i11);
            return d0();
        }
        throw new IllegalStateException("closed");
    }
}
