package ju;

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
    public final Sink f32338d;

    /* renamed from: e  reason: collision with root package name */
    public final Buffer f32339e;

    /* renamed from: i  reason: collision with root package name */
    public boolean f32340i;

    public e0(Sink sink) {
        Intrinsics.checkNotNullParameter(sink, "sink");
        this.f32338d = sink;
        this.f32339e = new Buffer();
    }

    @Override // okio.BufferedSink
    public long A0(Source source) {
        Intrinsics.checkNotNullParameter(source, "source");
        long j10 = 0;
        while (true) {
            long read = source.read(this.f32339e, 8192L);
            if (read != -1) {
                j10 += read;
                e0();
            } else {
                return j10;
            }
        }
    }

    @Override // okio.BufferedSink
    public BufferedSink K1(long j10) {
        if (!this.f32340i) {
            this.f32339e.K1(j10);
            return e0();
        }
        throw new IllegalStateException("closed");
    }

    @Override // okio.BufferedSink
    public BufferedSink O() {
        if (!this.f32340i) {
            long size = this.f32339e.size();
            if (size > 0) {
                this.f32338d.v0(this.f32339e, size);
            }
            return this;
        }
        throw new IllegalStateException("closed");
    }

    @Override // okio.BufferedSink
    public BufferedSink W0(long j10) {
        if (!this.f32340i) {
            this.f32339e.W0(j10);
            return e0();
        }
        throw new IllegalStateException("closed");
    }

    @Override // okio.BufferedSink
    public BufferedSink a2(ByteString byteString) {
        Intrinsics.checkNotNullParameter(byteString, "byteString");
        if (!this.f32340i) {
            this.f32339e.a2(byteString);
            return e0();
        }
        throw new IllegalStateException("closed");
    }

    @Override // okio.Sink, java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        if (!this.f32340i) {
            try {
                if (this.f32339e.size() > 0) {
                    Sink sink = this.f32338d;
                    Buffer buffer = this.f32339e;
                    sink.v0(buffer, buffer.size());
                }
                th = null;
            } catch (Throwable th2) {
                th = th2;
            }
            try {
                this.f32338d.close();
            } catch (Throwable th3) {
                if (th == null) {
                    th = th3;
                }
            }
            this.f32340i = true;
            if (th != null) {
                throw th;
            }
        }
    }

    @Override // okio.BufferedSink
    public Buffer e() {
        return this.f32339e;
    }

    @Override // okio.BufferedSink
    public BufferedSink e0() {
        if (!this.f32340i) {
            long E = this.f32339e.E();
            if (E > 0) {
                this.f32338d.v0(this.f32339e, E);
            }
            return this;
        }
        throw new IllegalStateException("closed");
    }

    @Override // okio.BufferedSink, okio.Sink, java.io.Flushable
    public void flush() {
        if (!this.f32340i) {
            if (this.f32339e.size() > 0) {
                Sink sink = this.f32338d;
                Buffer buffer = this.f32339e;
                sink.v0(buffer, buffer.size());
            }
            this.f32338d.flush();
            return;
        }
        throw new IllegalStateException("closed");
    }

    @Override // java.nio.channels.Channel
    public boolean isOpen() {
        return !this.f32340i;
    }

    @Override // okio.BufferedSink
    public OutputStream k2() {
        return new a();
    }

    @Override // okio.BufferedSink
    public BufferedSink o0(String string) {
        Intrinsics.checkNotNullParameter(string, "string");
        if (!this.f32340i) {
            this.f32339e.o0(string);
            return e0();
        }
        throw new IllegalStateException("closed");
    }

    @Override // okio.Sink
    public Timeout timeout() {
        return this.f32338d.timeout();
    }

    public String toString() {
        return "buffer(" + this.f32338d + ')';
    }

    @Override // okio.Sink
    public void v0(Buffer source, long j10) {
        Intrinsics.checkNotNullParameter(source, "source");
        if (!this.f32340i) {
            this.f32339e.v0(source, j10);
            e0();
            return;
        }
        throw new IllegalStateException("closed");
    }

    @Override // java.nio.channels.WritableByteChannel
    public int write(ByteBuffer source) {
        Intrinsics.checkNotNullParameter(source, "source");
        if (!this.f32340i) {
            int write = this.f32339e.write(source);
            e0();
            return write;
        }
        throw new IllegalStateException("closed");
    }

    @Override // okio.BufferedSink
    public BufferedSink writeByte(int i10) {
        if (!this.f32340i) {
            this.f32339e.writeByte(i10);
            return e0();
        }
        throw new IllegalStateException("closed");
    }

    @Override // okio.BufferedSink
    public BufferedSink writeInt(int i10) {
        if (!this.f32340i) {
            this.f32339e.writeInt(i10);
            return e0();
        }
        throw new IllegalStateException("closed");
    }

    @Override // okio.BufferedSink
    public BufferedSink writeShort(int i10) {
        if (!this.f32340i) {
            this.f32339e.writeShort(i10);
            return e0();
        }
        throw new IllegalStateException("closed");
    }

    @Override // okio.BufferedSink
    public BufferedSink y0(String string, int i10, int i11) {
        Intrinsics.checkNotNullParameter(string, "string");
        if (!this.f32340i) {
            this.f32339e.y0(string, i10, i11);
            return e0();
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
            if (!e0Var.f32340i) {
                e0Var.flush();
            }
        }

        public String toString() {
            return e0.this + ".outputStream()";
        }

        @Override // java.io.OutputStream
        public void write(int i10) {
            e0 e0Var = e0.this;
            if (!e0Var.f32340i) {
                e0Var.f32339e.writeByte((byte) i10);
                e0.this.e0();
                return;
            }
            throw new IOException("closed");
        }

        @Override // java.io.OutputStream
        public void write(byte[] data, int i10, int i11) {
            Intrinsics.checkNotNullParameter(data, "data");
            e0 e0Var = e0.this;
            if (!e0Var.f32340i) {
                e0Var.f32339e.write(data, i10, i11);
                e0.this.e0();
                return;
            }
            throw new IOException("closed");
        }
    }

    @Override // okio.BufferedSink
    public BufferedSink write(byte[] source) {
        Intrinsics.checkNotNullParameter(source, "source");
        if (!this.f32340i) {
            this.f32339e.write(source);
            return e0();
        }
        throw new IllegalStateException("closed");
    }

    @Override // okio.BufferedSink
    public BufferedSink write(byte[] source, int i10, int i11) {
        Intrinsics.checkNotNullParameter(source, "source");
        if (!this.f32340i) {
            this.f32339e.write(source, i10, i11);
            return e0();
        }
        throw new IllegalStateException("closed");
    }
}
