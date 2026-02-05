package ou;

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
    public final Sink f44484d;

    /* renamed from: e  reason: collision with root package name */
    public final Buffer f44485e;

    /* renamed from: i  reason: collision with root package name */
    public boolean f44486i;

    public e0(Sink sink) {
        Intrinsics.checkNotNullParameter(sink, "sink");
        this.f44484d = sink;
        this.f44485e = new Buffer();
    }

    @Override // okio.BufferedSink
    public BufferedSink K1(long j10) {
        if (!this.f44486i) {
            this.f44485e.K1(j10);
            return e0();
        }
        throw new IllegalStateException("closed");
    }

    @Override // okio.BufferedSink
    public BufferedSink O() {
        if (!this.f44486i) {
            long size = this.f44485e.size();
            if (size > 0) {
                this.f44484d.u0(this.f44485e, size);
            }
            return this;
        }
        throw new IllegalStateException("closed");
    }

    @Override // okio.BufferedSink
    public BufferedSink W0(long j10) {
        if (!this.f44486i) {
            this.f44485e.W0(j10);
            return e0();
        }
        throw new IllegalStateException("closed");
    }

    @Override // okio.BufferedSink
    public BufferedSink a2(ByteString byteString) {
        Intrinsics.checkNotNullParameter(byteString, "byteString");
        if (!this.f44486i) {
            this.f44485e.a2(byteString);
            return e0();
        }
        throw new IllegalStateException("closed");
    }

    @Override // okio.Sink, java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        if (!this.f44486i) {
            try {
                if (this.f44485e.size() > 0) {
                    Sink sink = this.f44484d;
                    Buffer buffer = this.f44485e;
                    sink.u0(buffer, buffer.size());
                }
                th = null;
            } catch (Throwable th2) {
                th = th2;
            }
            try {
                this.f44484d.close();
            } catch (Throwable th3) {
                if (th == null) {
                    th = th3;
                }
            }
            this.f44486i = true;
            if (th != null) {
                throw th;
            }
        }
    }

    @Override // okio.BufferedSink
    public BufferedSink e0() {
        if (!this.f44486i) {
            long E = this.f44485e.E();
            if (E > 0) {
                this.f44484d.u0(this.f44485e, E);
            }
            return this;
        }
        throw new IllegalStateException("closed");
    }

    @Override // okio.BufferedSink
    public Buffer f() {
        return this.f44485e;
    }

    @Override // okio.BufferedSink, okio.Sink, java.io.Flushable
    public void flush() {
        if (!this.f44486i) {
            if (this.f44485e.size() > 0) {
                Sink sink = this.f44484d;
                Buffer buffer = this.f44485e;
                sink.u0(buffer, buffer.size());
            }
            this.f44484d.flush();
            return;
        }
        throw new IllegalStateException("closed");
    }

    @Override // java.nio.channels.Channel
    public boolean isOpen() {
        return !this.f44486i;
    }

    @Override // okio.BufferedSink
    public OutputStream k2() {
        return new a();
    }

    @Override // okio.BufferedSink
    public BufferedSink o0(String string) {
        Intrinsics.checkNotNullParameter(string, "string");
        if (!this.f44486i) {
            this.f44485e.o0(string);
            return e0();
        }
        throw new IllegalStateException("closed");
    }

    @Override // okio.Sink
    public Timeout timeout() {
        return this.f44484d.timeout();
    }

    public String toString() {
        return "buffer(" + this.f44484d + ')';
    }

    @Override // okio.Sink
    public void u0(Buffer source, long j10) {
        Intrinsics.checkNotNullParameter(source, "source");
        if (!this.f44486i) {
            this.f44485e.u0(source, j10);
            e0();
            return;
        }
        throw new IllegalStateException("closed");
    }

    @Override // java.nio.channels.WritableByteChannel
    public int write(ByteBuffer source) {
        Intrinsics.checkNotNullParameter(source, "source");
        if (!this.f44486i) {
            int write = this.f44485e.write(source);
            e0();
            return write;
        }
        throw new IllegalStateException("closed");
    }

    @Override // okio.BufferedSink
    public BufferedSink writeByte(int i10) {
        if (!this.f44486i) {
            this.f44485e.writeByte(i10);
            return e0();
        }
        throw new IllegalStateException("closed");
    }

    @Override // okio.BufferedSink
    public BufferedSink writeInt(int i10) {
        if (!this.f44486i) {
            this.f44485e.writeInt(i10);
            return e0();
        }
        throw new IllegalStateException("closed");
    }

    @Override // okio.BufferedSink
    public BufferedSink writeShort(int i10) {
        if (!this.f44486i) {
            this.f44485e.writeShort(i10);
            return e0();
        }
        throw new IllegalStateException("closed");
    }

    @Override // okio.BufferedSink
    public BufferedSink x0(String string, int i10, int i11) {
        Intrinsics.checkNotNullParameter(string, "string");
        if (!this.f44486i) {
            this.f44485e.x0(string, i10, i11);
            return e0();
        }
        throw new IllegalStateException("closed");
    }

    @Override // okio.BufferedSink
    public long z0(Source source) {
        Intrinsics.checkNotNullParameter(source, "source");
        long j10 = 0;
        while (true) {
            long read = source.read(this.f44485e, 8192L);
            if (read != -1) {
                j10 += read;
                e0();
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
            if (!e0Var.f44486i) {
                e0Var.flush();
            }
        }

        public String toString() {
            return e0.this + ".outputStream()";
        }

        @Override // java.io.OutputStream
        public void write(int i10) {
            e0 e0Var = e0.this;
            if (!e0Var.f44486i) {
                e0Var.f44485e.writeByte((byte) i10);
                e0.this.e0();
                return;
            }
            throw new IOException("closed");
        }

        @Override // java.io.OutputStream
        public void write(byte[] data, int i10, int i11) {
            Intrinsics.checkNotNullParameter(data, "data");
            e0 e0Var = e0.this;
            if (!e0Var.f44486i) {
                e0Var.f44485e.write(data, i10, i11);
                e0.this.e0();
                return;
            }
            throw new IOException("closed");
        }
    }

    @Override // okio.BufferedSink
    public BufferedSink write(byte[] source) {
        Intrinsics.checkNotNullParameter(source, "source");
        if (!this.f44486i) {
            this.f44485e.write(source);
            return e0();
        }
        throw new IllegalStateException("closed");
    }

    @Override // okio.BufferedSink
    public BufferedSink write(byte[] source, int i10, int i11) {
        Intrinsics.checkNotNullParameter(source, "source");
        if (!this.f44486i) {
            this.f44485e.write(source, i10, i11);
            return e0();
        }
        throw new IllegalStateException("closed");
    }
}
