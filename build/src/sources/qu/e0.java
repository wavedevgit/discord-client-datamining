package qu;

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
    public final Sink f48200d;

    /* renamed from: e  reason: collision with root package name */
    public final Buffer f48201e;

    /* renamed from: i  reason: collision with root package name */
    public boolean f48202i;

    public e0(Sink sink) {
        Intrinsics.checkNotNullParameter(sink, "sink");
        this.f48200d = sink;
        this.f48201e = new Buffer();
    }

    @Override // okio.BufferedSink
    public long B0(Source source) {
        Intrinsics.checkNotNullParameter(source, "source");
        long j10 = 0;
        while (true) {
            long read = source.read(this.f48201e, 8192L);
            if (read != -1) {
                j10 += read;
                g0();
            } else {
                return j10;
            }
        }
    }

    @Override // okio.BufferedSink
    public BufferedSink J1(long j10) {
        if (!this.f48202i) {
            this.f48201e.J1(j10);
            return g0();
        }
        throw new IllegalStateException("closed");
    }

    @Override // okio.BufferedSink
    public BufferedSink R() {
        if (!this.f48202i) {
            long size = this.f48201e.size();
            if (size > 0) {
                this.f48200d.w0(this.f48201e, size);
            }
            return this;
        }
        throw new IllegalStateException("closed");
    }

    @Override // okio.BufferedSink
    public BufferedSink W0(long j10) {
        if (!this.f48202i) {
            this.f48201e.W0(j10);
            return g0();
        }
        throw new IllegalStateException("closed");
    }

    @Override // okio.BufferedSink
    public BufferedSink Z1(ByteString byteString) {
        Intrinsics.checkNotNullParameter(byteString, "byteString");
        if (!this.f48202i) {
            this.f48201e.Z1(byteString);
            return g0();
        }
        throw new IllegalStateException("closed");
    }

    @Override // okio.Sink, java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        if (!this.f48202i) {
            try {
                if (this.f48201e.size() > 0) {
                    Sink sink = this.f48200d;
                    Buffer buffer = this.f48201e;
                    sink.w0(buffer, buffer.size());
                }
                th = null;
            } catch (Throwable th2) {
                th = th2;
            }
            try {
                this.f48200d.close();
            } catch (Throwable th3) {
                if (th == null) {
                    th = th3;
                }
            }
            this.f48202i = true;
            if (th != null) {
                throw th;
            }
        }
    }

    @Override // okio.BufferedSink
    public Buffer e() {
        return this.f48201e;
    }

    @Override // okio.BufferedSink, okio.Sink, java.io.Flushable
    public void flush() {
        if (!this.f48202i) {
            if (this.f48201e.size() > 0) {
                Sink sink = this.f48200d;
                Buffer buffer = this.f48201e;
                sink.w0(buffer, buffer.size());
            }
            this.f48200d.flush();
            return;
        }
        throw new IllegalStateException("closed");
    }

    @Override // okio.BufferedSink
    public BufferedSink g0() {
        if (!this.f48202i) {
            long n10 = this.f48201e.n();
            if (n10 > 0) {
                this.f48200d.w0(this.f48201e, n10);
            }
            return this;
        }
        throw new IllegalStateException("closed");
    }

    @Override // java.nio.channels.Channel
    public boolean isOpen() {
        return !this.f48202i;
    }

    @Override // okio.BufferedSink
    public OutputStream k2() {
        return new a();
    }

    @Override // okio.BufferedSink
    public BufferedSink q0(String string) {
        Intrinsics.checkNotNullParameter(string, "string");
        if (!this.f48202i) {
            this.f48201e.q0(string);
            return g0();
        }
        throw new IllegalStateException("closed");
    }

    @Override // okio.Sink
    public Timeout timeout() {
        return this.f48200d.timeout();
    }

    public String toString() {
        return "buffer(" + this.f48200d + ')';
    }

    @Override // okio.Sink
    public void w0(Buffer source, long j10) {
        Intrinsics.checkNotNullParameter(source, "source");
        if (!this.f48202i) {
            this.f48201e.w0(source, j10);
            g0();
            return;
        }
        throw new IllegalStateException("closed");
    }

    @Override // java.nio.channels.WritableByteChannel
    public int write(ByteBuffer source) {
        Intrinsics.checkNotNullParameter(source, "source");
        if (!this.f48202i) {
            int write = this.f48201e.write(source);
            g0();
            return write;
        }
        throw new IllegalStateException("closed");
    }

    @Override // okio.BufferedSink
    public BufferedSink writeByte(int i10) {
        if (!this.f48202i) {
            this.f48201e.writeByte(i10);
            return g0();
        }
        throw new IllegalStateException("closed");
    }

    @Override // okio.BufferedSink
    public BufferedSink writeInt(int i10) {
        if (!this.f48202i) {
            this.f48201e.writeInt(i10);
            return g0();
        }
        throw new IllegalStateException("closed");
    }

    @Override // okio.BufferedSink
    public BufferedSink writeShort(int i10) {
        if (!this.f48202i) {
            this.f48201e.writeShort(i10);
            return g0();
        }
        throw new IllegalStateException("closed");
    }

    @Override // okio.BufferedSink
    public BufferedSink z0(String string, int i10, int i11) {
        Intrinsics.checkNotNullParameter(string, "string");
        if (!this.f48202i) {
            this.f48201e.z0(string, i10, i11);
            return g0();
        }
        throw new IllegalStateException("closed");
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
            if (!e0Var.f48202i) {
                e0Var.flush();
            }
        }

        public String toString() {
            return e0.this + ".outputStream()";
        }

        @Override // java.io.OutputStream
        public void write(int i10) {
            e0 e0Var = e0.this;
            if (!e0Var.f48202i) {
                e0Var.f48201e.writeByte((byte) i10);
                e0.this.g0();
                return;
            }
            throw new IOException("closed");
        }

        @Override // java.io.OutputStream
        public void write(byte[] data, int i10, int i11) {
            Intrinsics.checkNotNullParameter(data, "data");
            e0 e0Var = e0.this;
            if (!e0Var.f48202i) {
                e0Var.f48201e.write(data, i10, i11);
                e0.this.g0();
                return;
            }
            throw new IOException("closed");
        }
    }

    @Override // okio.BufferedSink
    public BufferedSink write(byte[] source) {
        Intrinsics.checkNotNullParameter(source, "source");
        if (!this.f48202i) {
            this.f48201e.write(source);
            return g0();
        }
        throw new IllegalStateException("closed");
    }

    @Override // okio.BufferedSink
    public BufferedSink write(byte[] source, int i10, int i11) {
        Intrinsics.checkNotNullParameter(source, "source");
        if (!this.f48202i) {
            this.f48201e.write(source, i10, i11);
            return g0();
        }
        throw new IllegalStateException("closed");
    }
}
