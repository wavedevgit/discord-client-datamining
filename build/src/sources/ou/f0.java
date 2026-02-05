package ou;

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
    public final Source f44495d;

    /* renamed from: e  reason: collision with root package name */
    public final Buffer f44496e;

    /* renamed from: i  reason: collision with root package name */
    public boolean f44497i;

    public f0(Source source) {
        Intrinsics.checkNotNullParameter(source, "source");
        this.f44495d = source;
        this.f44496e = new Buffer();
    }

    @Override // okio.BufferedSource
    public boolean B0(long j10) {
        if (j10 >= 0) {
            if (!this.f44497i) {
                while (this.f44496e.size() < j10) {
                    if (this.f44495d.read(this.f44496e, 8192L) == -1) {
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
    public String H0() {
        return f0(LongCompanionObject.MAX_VALUE);
    }

    @Override // okio.BufferedSource
    public Buffer I() {
        return this.f44496e;
    }

    @Override // okio.BufferedSource
    public String I1(Charset charset) {
        Intrinsics.checkNotNullParameter(charset, "charset");
        this.f44496e.z0(this.f44495d);
        return this.f44496e.I1(charset);
    }

    @Override // okio.BufferedSource
    public int J0(a0 options) {
        Intrinsics.checkNotNullParameter(options, "options");
        if (!this.f44497i) {
            do {
                int e10 = pu.a.e(this.f44496e, options, true);
                if (e10 != -2) {
                    if (e10 == -1) {
                        return -1;
                    }
                    this.f44496e.skip(options.g()[e10].G());
                    return e10;
                }
            } while (this.f44495d.read(this.f44496e, 8192L) != -1);
            return -1;
        }
        throw new IllegalStateException("closed");
    }

    @Override // okio.BufferedSource
    public ByteString L1() {
        this.f44496e.z0(this.f44495d);
        return this.f44496e.L1();
    }

    @Override // okio.BufferedSource
    public byte[] M0(long j10) {
        U0(j10);
        return this.f44496e.M0(j10);
    }

    @Override // okio.BufferedSource
    public short O0() {
        U0(2L);
        return this.f44496e.O0();
    }

    @Override // okio.BufferedSource
    public long P0() {
        U0(8L);
        return this.f44496e.P0();
    }

    @Override // okio.BufferedSource
    public int Q1() {
        U0(4L);
        return this.f44496e.Q1();
    }

    @Override // okio.BufferedSource
    public String T1() {
        this.f44496e.z0(this.f44495d);
        return this.f44496e.T1();
    }

    @Override // okio.BufferedSource
    public long U(ByteString bytes) {
        Intrinsics.checkNotNullParameter(bytes, "bytes");
        return h(bytes, 0L);
    }

    @Override // okio.BufferedSource
    public void U0(long j10) {
        if (B0(j10)) {
            return;
        }
        throw new EOFException();
    }

    public long a(byte b10) {
        return c0(b10, 0L, LongCompanionObject.MAX_VALUE);
    }

    @Override // okio.BufferedSource
    public void b0(Buffer sink, long j10) {
        Intrinsics.checkNotNullParameter(sink, "sink");
        try {
            U0(j10);
            this.f44496e.b0(sink, j10);
        } catch (EOFException e10) {
            sink.z0(this.f44496e);
            throw e10;
        }
    }

    @Override // okio.BufferedSource
    public long c0(byte b10, long j10, long j11) {
        if (!this.f44497i) {
            if (0 <= j10 && j10 <= j11) {
                long j12 = j10;
                while (j12 < j11) {
                    byte b11 = b10;
                    long j13 = j11;
                    long c02 = this.f44496e.c0(b11, j12, j13);
                    if (c02 != -1) {
                        return c02;
                    }
                    long size = this.f44496e.size();
                    if (size >= j13 || this.f44495d.read(this.f44496e, 8192L) == -1) {
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
        return this.f44496e.c1(j10);
    }

    @Override // okio.Source, java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        if (!this.f44497i) {
            this.f44497i = true;
            this.f44495d.close();
            this.f44496e.k();
        }
    }

    @Override // okio.BufferedSource
    public long d0(ByteString targetBytes) {
        Intrinsics.checkNotNullParameter(targetBytes, "targetBytes");
        return k(targetBytes, 0L);
    }

    @Override // okio.BufferedSource
    public long e2(Sink sink) {
        Intrinsics.checkNotNullParameter(sink, "sink");
        long j10 = 0;
        while (this.f44495d.read(this.f44496e, 8192L) != -1) {
            long E = this.f44496e.E();
            if (E > 0) {
                j10 += E;
                sink.u0(this.f44496e, E);
            }
        }
        if (this.f44496e.size() > 0) {
            long size = j10 + this.f44496e.size();
            Buffer buffer = this.f44496e;
            sink.u0(buffer, buffer.size());
            return size;
        }
        return j10;
    }

    @Override // okio.BufferedSource, okio.BufferedSink
    public Buffer f() {
        return this.f44496e;
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
                return pu.a.d(this.f44496e, c02);
            }
            if (j11 < LongCompanionObject.MAX_VALUE && B0(j11) && this.f44496e.F0(j11 - 1) == 13 && B0(j11 + 1) && this.f44496e.F0(j11) == 10) {
                return pu.a.d(this.f44496e, j11);
            }
            Buffer buffer = new Buffer();
            Buffer buffer2 = this.f44496e;
            buffer2.N(buffer, 0L, Math.min(32, buffer2.size()));
            throw new EOFException("\\n not found: limit=" + Math.min(this.f44496e.size(), j10) + " content=" + buffer.L1().q() + (char) 8230);
        }
        throw new IllegalArgumentException(("limit < 0: " + j10).toString());
    }

    @Override // okio.BufferedSource
    public ByteString g1(long j10) {
        U0(j10);
        return this.f44496e.g1(j10);
    }

    public long h(ByteString bytes, long j10) {
        Intrinsics.checkNotNullParameter(bytes, "bytes");
        if (this.f44497i) {
            throw new IllegalStateException("closed");
        }
        while (true) {
            long I0 = this.f44496e.I0(bytes, j10);
            if (I0 != -1) {
                return I0;
            }
            long size = this.f44496e.size();
            if (this.f44495d.read(this.f44496e, 8192L) == -1) {
                return -1L;
            }
            j10 = Math.max(j10, (size - bytes.G()) + 1);
        }
    }

    @Override // java.nio.channels.Channel
    public boolean isOpen() {
        return !this.f44497i;
    }

    public long k(ByteString targetBytes, long j10) {
        Intrinsics.checkNotNullParameter(targetBytes, "targetBytes");
        if (this.f44497i) {
            throw new IllegalStateException("closed");
        }
        while (true) {
            long K0 = this.f44496e.K0(targetBytes, j10);
            if (K0 != -1) {
                return K0;
            }
            long size = this.f44496e.size();
            if (this.f44495d.read(this.f44496e, 8192L) == -1) {
                return -1L;
            }
            j10 = Math.max(j10, size);
        }
    }

    public boolean m(long j10, ByteString bytes, int i10, int i11) {
        Intrinsics.checkNotNullParameter(bytes, "bytes");
        if (!this.f44497i) {
            if (j10 < 0 || i10 < 0 || i11 < 0 || bytes.G() - i10 < i11) {
                return false;
            }
            for (int i12 = 0; i12 < i11; i12++) {
                long j11 = i12 + j10;
                if (!B0(1 + j11) || this.f44496e.F0(j11) != bytes.k(i10 + i12)) {
                    return false;
                }
            }
            return true;
        }
        throw new IllegalStateException("closed");
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
            boolean r2 = r5.B0(r2)
            if (r2 == 0) goto L5a
            okio.Buffer r2 = r5.f44496e
            long r3 = (long) r0
            byte r2 = r2.F0(r3)
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
            okio.Buffer r0 = r5.f44496e
            long r0 = r0.m2()
            return r0
        */
        throw new UnsupportedOperationException("Method not decompiled: ou.f0.m2():long");
    }

    @Override // okio.BufferedSource
    public byte[] n1() {
        this.f44496e.z0(this.f44495d);
        return this.f44496e.n1();
    }

    @Override // okio.BufferedSource
    public InputStream n2() {
        return new a();
    }

    @Override // okio.BufferedSource
    public boolean o1() {
        if (!this.f44497i) {
            if (this.f44496e.o1() && this.f44495d.read(this.f44496e, 8192L) == -1) {
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
        return m(j10, bytes, 0, bytes.G());
    }

    @Override // okio.Source
    public long read(Buffer sink, long j10) {
        Intrinsics.checkNotNullParameter(sink, "sink");
        if (j10 >= 0) {
            if (!this.f44497i) {
                if (this.f44496e.size() == 0 && this.f44495d.read(this.f44496e, 8192L) == -1) {
                    return -1L;
                }
                return this.f44496e.read(sink, Math.min(j10, this.f44496e.size()));
            }
            throw new IllegalStateException("closed");
        }
        throw new IllegalArgumentException(("byteCount < 0: " + j10).toString());
    }

    @Override // okio.BufferedSource
    public byte readByte() {
        U0(1L);
        return this.f44496e.readByte();
    }

    @Override // okio.BufferedSource
    public void readFully(byte[] sink) {
        Intrinsics.checkNotNullParameter(sink, "sink");
        try {
            U0(sink.length);
            this.f44496e.readFully(sink);
        } catch (EOFException e10) {
            int i10 = 0;
            while (this.f44496e.size() > 0) {
                Buffer buffer = this.f44496e;
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
        return this.f44496e.readInt();
    }

    @Override // okio.BufferedSource
    public long readLong() {
        U0(8L);
        return this.f44496e.readLong();
    }

    @Override // okio.BufferedSource
    public short readShort() {
        U0(2L);
        return this.f44496e.readShort();
    }

    @Override // okio.BufferedSource
    public void skip(long j10) {
        if (!this.f44497i) {
            while (j10 > 0) {
                if (this.f44496e.size() == 0 && this.f44495d.read(this.f44496e, 8192L) == -1) {
                    throw new EOFException();
                }
                long min = Math.min(j10, this.f44496e.size());
                this.f44496e.skip(min);
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
            boolean r8 = r10.B0(r6)
            if (r8 == 0) goto L52
            okio.Buffer r8 = r10.f44496e
            byte r8 = r8.F0(r4)
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
            okio.Buffer r0 = r10.f44496e
            long r0 = r0.t1()
            return r0
        */
        throw new UnsupportedOperationException("Method not decompiled: ou.f0.t1():long");
    }

    @Override // okio.Source
    public Timeout timeout() {
        return this.f44495d.timeout();
    }

    public String toString() {
        return "buffer(" + this.f44495d + ')';
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a extends InputStream {
        a() {
        }

        @Override // java.io.InputStream
        public int available() {
            f0 f0Var = f0.this;
            if (!f0Var.f44497i) {
                return (int) Math.min(f0Var.f44496e.size(), Integer.MAX_VALUE);
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
            if (!f0Var.f44497i) {
                if (f0Var.f44496e.size() == 0) {
                    f0 f0Var2 = f0.this;
                    if (f0Var2.f44495d.read(f0Var2.f44496e, 8192L) == -1) {
                        return -1;
                    }
                }
                return f0.this.f44496e.readByte() & 255;
            }
            throw new IOException("closed");
        }

        public String toString() {
            return f0.this + ".inputStream()";
        }

        @Override // java.io.InputStream
        public int read(byte[] data, int i10, int i11) {
            Intrinsics.checkNotNullParameter(data, "data");
            if (!f0.this.f44497i) {
                okio.b.b(data.length, i10, i11);
                if (f0.this.f44496e.size() == 0) {
                    f0 f0Var = f0.this;
                    if (f0Var.f44495d.read(f0Var.f44496e, 8192L) == -1) {
                        return -1;
                    }
                }
                return f0.this.f44496e.read(data, i10, i11);
            }
            throw new IOException("closed");
        }
    }

    @Override // java.nio.channels.ReadableByteChannel
    public int read(ByteBuffer sink) {
        Intrinsics.checkNotNullParameter(sink, "sink");
        if (this.f44496e.size() == 0 && this.f44495d.read(this.f44496e, 8192L) == -1) {
            return -1;
        }
        return this.f44496e.read(sink);
    }
}
