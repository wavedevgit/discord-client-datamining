package ju;

import java.io.EOFException;
import java.io.IOException;
import java.io.InputStream;
import java.nio.ByteBuffer;
import java.nio.charset.Charset;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.LongCompanionObject;
import okio.Buffer;
import okio.BufferedSource;
import okio.ByteString;
import okio.Sink;
import okio.Source;
import okio.Timeout;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class f0 implements BufferedSource {

    /* renamed from: d  reason: collision with root package name */
    public final Source f32349d;

    /* renamed from: e  reason: collision with root package name */
    public final Buffer f32350e;

    /* renamed from: i  reason: collision with root package name */
    public boolean f32351i;

    public f0(Source source) {
        Intrinsics.checkNotNullParameter(source, "source");
        this.f32349d = source;
        this.f32350e = new Buffer();
    }

    @Override // okio.BufferedSource
    public boolean C0(long j10) {
        if (j10 >= 0) {
            if (!this.f32351i) {
                while (this.f32350e.size() < j10) {
                    if (this.f32349d.read(this.f32350e, 8192L) == -1) {
                        return false;
                    }
                }
                return true;
            }
            throw new IllegalStateException("closed");
        }
        throw new IllegalArgumentException(("byteCount < 0: " + j10).toString());
    }

    @Override // okio.BufferedSource
    public Buffer I() {
        return this.f32350e;
    }

    @Override // okio.BufferedSource
    public String I0() {
        return f0(LongCompanionObject.MAX_VALUE);
    }

    @Override // okio.BufferedSource
    public String I1(Charset charset) {
        Intrinsics.checkNotNullParameter(charset, "charset");
        this.f32350e.A0(this.f32349d);
        return this.f32350e.I1(charset);
    }

    @Override // okio.BufferedSource
    public ByteString L1() {
        this.f32350e.A0(this.f32349d);
        return this.f32350e.L1();
    }

    @Override // okio.BufferedSource
    public byte[] N0(long j10) {
        U0(j10);
        return this.f32350e.N0(j10);
    }

    @Override // okio.BufferedSource
    public short P0() {
        U0(2L);
        return this.f32350e.P0();
    }

    @Override // okio.BufferedSource
    public long Q0() {
        U0(8L);
        return this.f32350e.Q0();
    }

    @Override // okio.BufferedSource
    public int Q1() {
        U0(4L);
        return this.f32350e.Q1();
    }

    @Override // okio.BufferedSource
    public String T1() {
        this.f32350e.A0(this.f32349d);
        return this.f32350e.T1();
    }

    @Override // okio.BufferedSource
    public long U(ByteString bytes) {
        Intrinsics.checkNotNullParameter(bytes, "bytes");
        return h(bytes, 0L);
    }

    @Override // okio.BufferedSource
    public void U0(long j10) {
        if (C0(j10)) {
            return;
        }
        throw new EOFException();
    }

    @Override // okio.BufferedSource
    public int Y(a0 options) {
        Intrinsics.checkNotNullParameter(options, "options");
        if (!this.f32351i) {
            do {
                int e10 = ku.a.e(this.f32350e, options, true);
                if (e10 != -2) {
                    if (e10 == -1) {
                        return -1;
                    }
                    this.f32350e.skip(options.g()[e10].G());
                    return e10;
                }
            } while (this.f32349d.read(this.f32350e, 8192L) != -1);
            return -1;
        }
        throw new IllegalStateException("closed");
    }

    public long a(byte b10) {
        return c0(b10, 0L, LongCompanionObject.MAX_VALUE);
    }

    @Override // okio.BufferedSource
    public void b0(Buffer sink, long j10) {
        Intrinsics.checkNotNullParameter(sink, "sink");
        try {
            U0(j10);
            this.f32350e.b0(sink, j10);
        } catch (EOFException e10) {
            sink.A0(this.f32350e);
            throw e10;
        }
    }

    @Override // okio.BufferedSource
    public long c0(byte b10, long j10, long j11) {
        if (!this.f32351i) {
            if (0 <= j10 && j10 <= j11) {
                long j12 = j10;
                while (j12 < j11) {
                    byte b11 = b10;
                    long j13 = j11;
                    long c02 = this.f32350e.c0(b11, j12, j13);
                    if (c02 != -1) {
                        return c02;
                    }
                    long size = this.f32350e.size();
                    if (size >= j13 || this.f32349d.read(this.f32350e, 8192L) == -1) {
                        break;
                    }
                    j12 = Math.max(j12, size);
                    b10 = b11;
                    j11 = j13;
                }
                return -1L;
            }
            throw new IllegalArgumentException(("fromIndex=" + j10 + " toIndex=" + j11).toString());
        }
        throw new IllegalStateException("closed");
    }

    @Override // okio.BufferedSource
    public String c1(long j10) {
        U0(j10);
        return this.f32350e.c1(j10);
    }

    @Override // okio.Source, java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        if (!this.f32351i) {
            this.f32351i = true;
            this.f32349d.close();
            this.f32350e.l();
        }
    }

    @Override // okio.BufferedSource
    public long d0(ByteString targetBytes) {
        Intrinsics.checkNotNullParameter(targetBytes, "targetBytes");
        return l(targetBytes, 0L);
    }

    @Override // okio.BufferedSource
    public Buffer e() {
        return this.f32350e;
    }

    @Override // okio.BufferedSource
    public long e2(Sink sink) {
        Intrinsics.checkNotNullParameter(sink, "sink");
        long j10 = 0;
        while (this.f32349d.read(this.f32350e, 8192L) != -1) {
            long E = this.f32350e.E();
            if (E > 0) {
                j10 += E;
                sink.v0(this.f32350e, E);
            }
        }
        if (this.f32350e.size() > 0) {
            long size = j10 + this.f32350e.size();
            Buffer buffer = this.f32350e;
            sink.v0(buffer, buffer.size());
            return size;
        }
        return j10;
    }

    @Override // okio.BufferedSource
    public String f0(long j10) {
        long j11;
        if (j10 >= 0) {
            if (j10 == LongCompanionObject.MAX_VALUE) {
                j11 = Long.MAX_VALUE;
            } else {
                j11 = j10 + 1;
            }
            long c02 = c0((byte) 10, 0L, j11);
            if (c02 != -1) {
                return ku.a.d(this.f32350e, c02);
            }
            if (j11 < LongCompanionObject.MAX_VALUE && C0(j11) && this.f32350e.G0(j11 - 1) == 13 && C0(j11 + 1) && this.f32350e.G0(j11) == 10) {
                return ku.a.d(this.f32350e, j11);
            }
            Buffer buffer = new Buffer();
            Buffer buffer2 = this.f32350e;
            buffer2.N(buffer, 0L, Math.min(32, buffer2.size()));
            throw new EOFException("\\n not found: limit=" + Math.min(this.f32350e.size(), j10) + " content=" + buffer.L1().q() + (char) 8230);
        }
        throw new IllegalArgumentException(("limit < 0: " + j10).toString());
    }

    @Override // okio.BufferedSource
    public ByteString g1(long j10) {
        U0(j10);
        return this.f32350e.g1(j10);
    }

    public long h(ByteString bytes, long j10) {
        Intrinsics.checkNotNullParameter(bytes, "bytes");
        if (this.f32351i) {
            throw new IllegalStateException("closed");
        }
        while (true) {
            long J0 = this.f32350e.J0(bytes, j10);
            if (J0 != -1) {
                return J0;
            }
            long size = this.f32350e.size();
            if (this.f32349d.read(this.f32350e, 8192L) == -1) {
                return -1L;
            }
            j10 = Math.max(j10, (size - bytes.G()) + 1);
        }
    }

    @Override // java.nio.channels.Channel
    public boolean isOpen() {
        return !this.f32351i;
    }

    public long l(ByteString targetBytes, long j10) {
        Intrinsics.checkNotNullParameter(targetBytes, "targetBytes");
        if (this.f32351i) {
            throw new IllegalStateException("closed");
        }
        while (true) {
            long K0 = this.f32350e.K0(targetBytes, j10);
            if (K0 != -1) {
                return K0;
            }
            long size = this.f32350e.size();
            if (this.f32349d.read(this.f32350e, 8192L) == -1) {
                return -1L;
            }
            j10 = Math.max(j10, size);
        }
    }

    /* JADX WARN: Code restructure failed: missing block: B:19:0x0031, code lost:
        if (r0 == 0) goto L21;
     */
    /* JADX WARN: Code restructure failed: missing block: B:21:0x0034, code lost:
        r1 = new java.lang.StringBuilder();
        r1.append("Expected leading [0-9a-fA-F] character but was 0x");
        r2 = java.lang.Integer.toString(r2, kotlin.text.CharsKt.checkRadix(16));
        kotlin.jvm.internal.Intrinsics.checkNotNullExpressionValue(r2, "toString(...)");
        r1.append(r2);
     */
    /* JADX WARN: Code restructure failed: missing block: B:22:0x0059, code lost:
        throw new java.lang.NumberFormatException(r1.toString());
     */
    @Override // okio.BufferedSource
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public long m2() {
        /*
            r5 = this;
            r0 = 1
            r5.U0(r0)
            r0 = 0
        L6:
            int r1 = r0 + 1
            long r2 = (long) r1
            boolean r2 = r5.C0(r2)
            if (r2 == 0) goto L5a
            okio.Buffer r2 = r5.f32350e
            long r3 = (long) r0
            byte r2 = r2.G0(r3)
            r3 = 48
            if (r2 < r3) goto L1e
            r3 = 57
            if (r2 <= r3) goto L2f
        L1e:
            r3 = 97
            if (r2 < r3) goto L26
            r3 = 102(0x66, float:1.43E-43)
            if (r2 <= r3) goto L2f
        L26:
            r3 = 65
            if (r2 < r3) goto L31
            r3 = 70
            if (r2 <= r3) goto L2f
            goto L31
        L2f:
            r0 = r1
            goto L6
        L31:
            if (r0 == 0) goto L34
            goto L5a
        L34:
            java.lang.NumberFormatException r0 = new java.lang.NumberFormatException
            java.lang.StringBuilder r1 = new java.lang.StringBuilder
            r1.<init>()
            java.lang.String r3 = "Expected leading [0-9a-fA-F] character but was 0x"
            r1.append(r3)
            r3 = 16
            int r3 = kotlin.text.CharsKt.checkRadix(r3)
            java.lang.String r2 = java.lang.Integer.toString(r2, r3)
            java.lang.String r3 = "toString(...)"
            kotlin.jvm.internal.Intrinsics.checkNotNullExpressionValue(r2, r3)
            r1.append(r2)
            java.lang.String r1 = r1.toString()
            r0.<init>(r1)
            throw r0
        L5a:
            okio.Buffer r0 = r5.f32350e
            long r0 = r0.m2()
            return r0
        */
        throw new UnsupportedOperationException("Method not decompiled: ju.f0.m2():long");
    }

    public boolean n(long j10, ByteString bytes, int i10, int i11) {
        Intrinsics.checkNotNullParameter(bytes, "bytes");
        if (!this.f32351i) {
            if (j10 < 0 || i10 < 0 || i11 < 0 || bytes.G() - i10 < i11) {
                return false;
            }
            for (int i12 = 0; i12 < i11; i12++) {
                long j11 = i12 + j10;
                if (!C0(1 + j11) || this.f32350e.G0(j11) != bytes.k(i10 + i12)) {
                    return false;
                }
            }
            return true;
        }
        throw new IllegalStateException("closed");
    }

    @Override // okio.BufferedSource
    public byte[] n1() {
        this.f32350e.A0(this.f32349d);
        return this.f32350e.n1();
    }

    @Override // okio.BufferedSource
    public InputStream n2() {
        return new a();
    }

    @Override // okio.BufferedSource
    public boolean o1() {
        if (!this.f32351i) {
            if (this.f32350e.o1() && this.f32349d.read(this.f32350e, 8192L) == -1) {
                return true;
            }
            return false;
        }
        throw new IllegalStateException("closed");
    }

    @Override // okio.BufferedSource
    public BufferedSource peek() {
        return x.d(new d0(this));
    }

    @Override // okio.BufferedSource
    public boolean q0(long j10, ByteString bytes) {
        Intrinsics.checkNotNullParameter(bytes, "bytes");
        return n(j10, bytes, 0, bytes.G());
    }

    @Override // okio.Source
    public long read(Buffer sink, long j10) {
        Intrinsics.checkNotNullParameter(sink, "sink");
        if (j10 >= 0) {
            if (!this.f32351i) {
                if (this.f32350e.size() == 0 && this.f32349d.read(this.f32350e, 8192L) == -1) {
                    return -1L;
                }
                return this.f32350e.read(sink, Math.min(j10, this.f32350e.size()));
            }
            throw new IllegalStateException("closed");
        }
        throw new IllegalArgumentException(("byteCount < 0: " + j10).toString());
    }

    @Override // okio.BufferedSource
    public byte readByte() {
        U0(1L);
        return this.f32350e.readByte();
    }

    @Override // okio.BufferedSource
    public void readFully(byte[] sink) {
        Intrinsics.checkNotNullParameter(sink, "sink");
        try {
            U0(sink.length);
            this.f32350e.readFully(sink);
        } catch (EOFException e10) {
            int i10 = 0;
            while (this.f32350e.size() > 0) {
                Buffer buffer = this.f32350e;
                int read = buffer.read(sink, i10, (int) buffer.size());
                if (read != -1) {
                    i10 += read;
                } else {
                    throw new AssertionError();
                }
            }
            throw e10;
        }
    }

    @Override // okio.BufferedSource
    public int readInt() {
        U0(4L);
        return this.f32350e.readInt();
    }

    @Override // okio.BufferedSource
    public long readLong() {
        U0(8L);
        return this.f32350e.readLong();
    }

    @Override // okio.BufferedSource
    public short readShort() {
        U0(2L);
        return this.f32350e.readShort();
    }

    @Override // okio.BufferedSource
    public void skip(long j10) {
        if (!this.f32351i) {
            while (j10 > 0) {
                if (this.f32350e.size() == 0 && this.f32349d.read(this.f32350e, 8192L) == -1) {
                    throw new EOFException();
                }
                long min = Math.min(j10, this.f32350e.size());
                this.f32350e.skip(min);
                j10 -= min;
            }
            return;
        }
        throw new IllegalStateException("closed");
    }

    /* JADX WARN: Code restructure failed: missing block: B:15:0x0029, code lost:
        if (r4 == 0) goto L16;
     */
    /* JADX WARN: Code restructure failed: missing block: B:17:0x002c, code lost:
        r1 = new java.lang.StringBuilder();
        r1.append("Expected a digit or '-' but was 0x");
        r2 = java.lang.Integer.toString(r8, kotlin.text.CharsKt.checkRadix(16));
        kotlin.jvm.internal.Intrinsics.checkNotNullExpressionValue(r2, "toString(...)");
        r1.append(r2);
     */
    /* JADX WARN: Code restructure failed: missing block: B:18:0x0051, code lost:
        throw new java.lang.NumberFormatException(r1.toString());
     */
    @Override // okio.BufferedSource
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public long t1() {
        /*
            r10 = this;
            r0 = 1
            r10.U0(r0)
            r2 = 0
            r4 = r2
        L8:
            long r6 = r4 + r0
            boolean r8 = r10.C0(r6)
            if (r8 == 0) goto L52
            okio.Buffer r8 = r10.f32350e
            byte r8 = r8.G0(r4)
            r9 = 48
            if (r8 < r9) goto L1e
            r9 = 57
            if (r8 <= r9) goto L27
        L1e:
            int r4 = (r4 > r2 ? 1 : (r4 == r2 ? 0 : -1))
            if (r4 != 0) goto L29
            r5 = 45
            if (r8 == r5) goto L27
            goto L29
        L27:
            r4 = r6
            goto L8
        L29:
            if (r4 == 0) goto L2c
            goto L52
        L2c:
            java.lang.NumberFormatException r0 = new java.lang.NumberFormatException
            java.lang.StringBuilder r1 = new java.lang.StringBuilder
            r1.<init>()
            java.lang.String r2 = "Expected a digit or '-' but was 0x"
            r1.append(r2)
            r2 = 16
            int r2 = kotlin.text.CharsKt.checkRadix(r2)
            java.lang.String r2 = java.lang.Integer.toString(r8, r2)
            java.lang.String r3 = "toString(...)"
            kotlin.jvm.internal.Intrinsics.checkNotNullExpressionValue(r2, r3)
            r1.append(r2)
            java.lang.String r1 = r1.toString()
            r0.<init>(r1)
            throw r0
        L52:
            okio.Buffer r0 = r10.f32350e
            long r0 = r0.t1()
            return r0
        */
        throw new UnsupportedOperationException("Method not decompiled: ju.f0.t1():long");
    }

    @Override // okio.Source
    public Timeout timeout() {
        return this.f32349d.timeout();
    }

    public String toString() {
        return "buffer(" + this.f32349d + ')';
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a extends InputStream {
        a() {
        }

        @Override // java.io.InputStream
        public int available() {
            f0 f0Var = f0.this;
            if (!f0Var.f32351i) {
                return (int) Math.min(f0Var.f32350e.size(), Integer.MAX_VALUE);
            }
            throw new IOException("closed");
        }

        @Override // java.io.InputStream, java.io.Closeable, java.lang.AutoCloseable
        public void close() {
            f0.this.close();
        }

        @Override // java.io.InputStream
        public int read() {
            f0 f0Var = f0.this;
            if (!f0Var.f32351i) {
                if (f0Var.f32350e.size() == 0) {
                    f0 f0Var2 = f0.this;
                    if (f0Var2.f32349d.read(f0Var2.f32350e, 8192L) == -1) {
                        return -1;
                    }
                }
                return f0.this.f32350e.readByte() & 255;
            }
            throw new IOException("closed");
        }

        public String toString() {
            return f0.this + ".inputStream()";
        }

        @Override // java.io.InputStream
        public int read(byte[] data, int i10, int i11) {
            Intrinsics.checkNotNullParameter(data, "data");
            if (!f0.this.f32351i) {
                okio.b.b(data.length, i10, i11);
                if (f0.this.f32350e.size() == 0) {
                    f0 f0Var = f0.this;
                    if (f0Var.f32349d.read(f0Var.f32350e, 8192L) == -1) {
                        return -1;
                    }
                }
                return f0.this.f32350e.read(data, i10, i11);
            }
            throw new IOException("closed");
        }
    }

    @Override // java.nio.channels.ReadableByteChannel
    public int read(ByteBuffer sink) {
        Intrinsics.checkNotNullParameter(sink, "sink");
        if (this.f32350e.size() == 0 && this.f32349d.read(this.f32350e, 8192L) == -1) {
            return -1;
        }
        return this.f32350e.read(sink);
    }
}
