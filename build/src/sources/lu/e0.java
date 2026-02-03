package lu;

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
    public final Sink f37276d;

    /* renamed from: e  reason: collision with root package name */
    public final Buffer f37277e;

    /* renamed from: i  reason: collision with root package name */
    public boolean f37278i;

    public e0(Sink sink) {
        Intrinsics.checkNotNullParameter(sink, "sink");
        this.f37276d = sink;
        this.f37277e = new Buffer();
    }

    @Override // okio.BufferedSink
    public BufferedSink K1(long j10) {
        if (!this.f37278i) {
            this.f37277e.K1(j10);
            return d0();
        }
        throw new IllegalStateException("closed");
    }

    @Override // okio.BufferedSink
    public BufferedSink O() {
        if (!this.f37278i) {
            long size = this.f37277e.size();
            if (size > 0) {
                this.f37276d.t0(this.f37277e, size);
            }
            return this;
        }
        throw new IllegalStateException("closed");
    }

    @Override // okio.BufferedSink
    public BufferedSink W0(long j10) {
        if (!this.f37278i) {
            this.f37277e.W0(j10);
            return d0();
        }
        throw new IllegalStateException("closed");
    }

    @Override // okio.BufferedSink
    public BufferedSink a2(ByteString byteString) {
        Intrinsics.checkNotNullParameter(byteString, "byteString");
        if (!this.f37278i) {
            this.f37277e.a2(byteString);
            return d0();
        }
        throw new IllegalStateException("closed");
    }

    @Override // okio.Sink, java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        if (!this.f37278i) {
            try {
                if (this.f37277e.size() > 0) {
                    Sink sink = this.f37276d;
                    Buffer buffer = this.f37277e;
                    sink.t0(buffer, buffer.size());
                }
                th = null;
            } catch (Throwable th2) {
                th = th2;
            }
            try {
                this.f37276d.close();
            } catch (Throwable th3) {
                if (th == null) {
                    th = th3;
                }
            }
            this.f37278i = true;
            if (th != null) {
                throw th;
            }
        }
    }

    @Override // okio.BufferedSink
    public BufferedSink d0() {
        if (!this.f37278i) {
            long E = this.f37277e.E();
            if (E > 0) {
                this.f37276d.t0(this.f37277e, E);
            }
            return this;
        }
        throw new IllegalStateException("closed");
    }

    @Override // okio.BufferedSink
    public Buffer e() {
        return this.f37277e;
    }

    @Override // okio.BufferedSink, okio.Sink, java.io.Flushable
    public void flush() {
        if (!this.f37278i) {
            if (this.f37277e.size() > 0) {
                Sink sink = this.f37276d;
                Buffer buffer = this.f37277e;
                sink.t0(buffer, buffer.size());
            }
            this.f37276d.flush();
            return;
        }
        throw new IllegalStateException("closed");
    }

    @Override // java.nio.channels.Channel
    public boolean isOpen() {
        return !this.f37278i;
    }

    @Override // okio.BufferedSink
    public OutputStream k2() {
        return new a();
    }

    @Override // okio.BufferedSink
    public BufferedSink n0(String string) {
        Intrinsics.checkNotNullParameter(string, "string");
        if (!this.f37278i) {
            this.f37277e.n0(string);
            return d0();
        }
        throw new IllegalStateException("closed");
    }

    @Override // okio.Sink
    public void t0(Buffer source, long j10) {
        Intrinsics.checkNotNullParameter(source, "source");
        if (!this.f37278i) {
            this.f37277e.t0(source, j10);
            d0();
            return;
        }
        throw new IllegalStateException("closed");
    }

    @Override // okio.Sink
    public Timeout timeout() {
        return this.f37276d.timeout();
    }

    public String toString() {
        return "buffer(" + this.f37276d + ')';
    }

    @Override // okio.BufferedSink
    public BufferedSink w0(String string, int i10, int i11) {
        Intrinsics.checkNotNullParameter(string, "string");
        if (!this.f37278i) {
            this.f37277e.w0(string, i10, i11);
            return d0();
        }
        throw new IllegalStateException("closed");
    }

    @Override // java.nio.channels.WritableByteChannel
    public int write(ByteBuffer source) {
        Intrinsics.checkNotNullParameter(source, "source");
        if (!this.f37278i) {
            int write = this.f37277e.write(source);
            d0();
            return write;
        }
        throw new IllegalStateException("closed");
    }

    @Override // okio.BufferedSink
    public BufferedSink writeByte(int i10) {
        if (!this.f37278i) {
            this.f37277e.writeByte(i10);
            return d0();
        }
        throw new IllegalStateException("closed");
    }

    @Override // okio.BufferedSink
    public BufferedSink writeInt(int i10) {
        if (!this.f37278i) {
            this.f37277e.writeInt(i10);
            return d0();
        }
        throw new IllegalStateException("closed");
    }

    @Override // okio.BufferedSink
    public BufferedSink writeShort(int i10) {
        if (!this.f37278i) {
            this.f37277e.writeShort(i10);
            return d0();
        }
        throw new IllegalStateException("closed");
    }

    @Override // okio.BufferedSink
    public long y0(Source source) {
        Intrinsics.checkNotNullParameter(source, "source");
        long j10 = 0;
        while (true) {
            long read = source.read(this.f37277e, 8192L);
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
            if (!e0Var.f37278i) {
                e0Var.flush();
            }
        }

        public String toString() {
            return e0.this + ".outputStream()";
        }

        @Override // java.io.OutputStream
        public void write(int i10) {
            e0 e0Var = e0.this;
            if (!e0Var.f37278i) {
                e0Var.f37277e.writeByte((byte) i10);
                e0.this.d0();
                return;
            }
            throw new IOException("closed");
        }

        @Override // java.io.OutputStream
        public void write(byte[] data, int i10, int i11) {
            Intrinsics.checkNotNullParameter(data, "data");
            e0 e0Var = e0.this;
            if (!e0Var.f37278i) {
                e0Var.f37277e.write(data, i10, i11);
                e0.this.d0();
                return;
            }
            throw new IOException("closed");
        }
    }

    @Override // okio.BufferedSink
    public BufferedSink write(byte[] source) {
        Intrinsics.checkNotNullParameter(source, "source");
        if (!this.f37278i) {
            this.f37277e.write(source);
            return d0();
        }
        throw new IllegalStateException("closed");
    }

    @Override // okio.BufferedSink
    public BufferedSink write(byte[] source, int i10, int i11) {
        Intrinsics.checkNotNullParameter(source, "source");
        if (!this.f37278i) {
            this.f37277e.write(source, i10, i11);
            return d0();
        }
        throw new IllegalStateException("closed");
    }
}
