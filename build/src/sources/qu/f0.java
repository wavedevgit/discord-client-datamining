package qu;

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
    public final Source f48211d;

    /* renamed from: e  reason: collision with root package name */
    public final Buffer f48212e;

    /* renamed from: i  reason: collision with root package name */
    public boolean f48213i;

    public f0(Source source) {
        Intrinsics.checkNotNullParameter(source, "source");
        this.f48211d = source;
        this.f48212e = new Buffer();
    }

    @Override // okio.BufferedSource
    public boolean D0(long j10) {
        if (j10 >= 0) {
            if (!this.f48213i) {
                while (this.f48212e.size() < j10) {
                    if (this.f48211d.read(this.f48212e, 8192L) == -1) {
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
        return h0(LongCompanionObject.MAX_VALUE);
    }

    @Override // okio.BufferedSource
    public String H1(Charset charset) {
        Intrinsics.checkNotNullParameter(charset, "charset");
        this.f48212e.B0(this.f48211d);
        return this.f48212e.H1(charset);
    }

    @Override // okio.BufferedSource
    public ByteString K1() {
        this.f48212e.B0(this.f48211d);
        return this.f48212e.K1();
    }

    @Override // okio.BufferedSource
    public Buffer M() {
        return this.f48212e;
    }

    @Override // okio.BufferedSource
    public byte[] N0(long j10) {
        U0(j10);
        return this.f48212e.N0(j10);
    }

    @Override // okio.BufferedSource
    public short P0() {
        U0(2L);
        return this.f48212e.P0();
    }

    @Override // okio.BufferedSource
    public int P1() {
        U0(4L);
        return this.f48212e.P1();
    }

    @Override // okio.BufferedSource
    public long Q0() {
        U0(8L);
        return this.f48212e.Q0();
    }

    @Override // okio.BufferedSource
    public String S1() {
        this.f48212e.B0(this.f48211d);
        return this.f48212e.S1();
    }

    @Override // okio.BufferedSource
    public void U0(long j10) {
        if (D0(j10)) {
            return;
        }
        throw new EOFException();
    }

    @Override // okio.BufferedSource
    public long X(ByteString bytes) {
        Intrinsics.checkNotNullParameter(bytes, "bytes");
        return g(bytes, 0L);
    }

    public long a(byte b10) {
        return e0(b10, 0L, LongCompanionObject.MAX_VALUE);
    }

    @Override // okio.BufferedSource
    public String b1(long j10) {
        U0(j10);
        return this.f48212e.b1(j10);
    }

    @Override // okio.Source, java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        if (!this.f48213i) {
            this.f48213i = true;
            this.f48211d.close();
            this.f48212e.k();
        }
    }

    @Override // okio.BufferedSource
    public void d0(Buffer sink, long j10) {
        Intrinsics.checkNotNullParameter(sink, "sink");
        try {
            U0(j10);
            this.f48212e.d0(sink, j10);
        } catch (EOFException e10) {
            sink.B0(this.f48212e);
            throw e10;
        }
    }

    @Override // okio.BufferedSource
    public int d2(a0 options) {
        Intrinsics.checkNotNullParameter(options, "options");
        if (!this.f48213i) {
            do {
                int e10 = ru.a.e(this.f48212e, options, true);
                if (e10 != -2) {
                    if (e10 == -1) {
                        return -1;
                    }
                    this.f48212e.skip(options.g()[e10].G());
                    return e10;
                }
            } while (this.f48211d.read(this.f48212e, 8192L) != -1);
            return -1;
        }
        throw new IllegalStateException("closed");
    }

    @Override // okio.BufferedSource, okio.BufferedSink
    public Buffer e() {
        return this.f48212e;
    }

    @Override // okio.BufferedSource
    public long e0(byte b10, long j10, long j11) {
        if (!this.f48213i) {
            if (0 <= j10 && j10 <= j11) {
                long j12 = j10;
                while (j12 < j11) {
                    byte b11 = b10;
                    long j13 = j11;
                    long e02 = this.f48212e.e0(b11, j12, j13);
                    if (e02 != -1) {
                        return e02;
                    }
                    long size = this.f48212e.size();
                    if (size >= j13 || this.f48211d.read(this.f48212e, 8192L) == -1) {
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
    public long e2(Sink sink) {
        Intrinsics.checkNotNullParameter(sink, "sink");
        long j10 = 0;
        while (this.f48211d.read(this.f48212e, 8192L) != -1) {
            long n10 = this.f48212e.n();
            if (n10 > 0) {
                j10 += n10;
                sink.w0(this.f48212e, n10);
            }
        }
        if (this.f48212e.size() > 0) {
            long size = j10 + this.f48212e.size();
            Buffer buffer = this.f48212e;
            sink.w0(buffer, buffer.size());
            return size;
        }
        return j10;
    }

    @Override // okio.BufferedSource
    public long f0(ByteString targetBytes) {
        Intrinsics.checkNotNullParameter(targetBytes, "targetBytes");
        return k(targetBytes, 0L);
    }

    @Override // okio.BufferedSource
    public ByteString f1(long j10) {
        U0(j10);
        return this.f48212e.f1(j10);
    }

    public long g(ByteString bytes, long j10) {
        Intrinsics.checkNotNullParameter(bytes, "bytes");
        if (this.f48213i) {
            throw new IllegalStateException("closed");
        }
        while (true) {
            long F0 = this.f48212e.F0(bytes, j10);
            if (F0 != -1) {
                return F0;
            }
            long size = this.f48212e.size();
            if (this.f48211d.read(this.f48212e, 8192L) == -1) {
                return -1L;
            }
            j10 = Math.max(j10, (size - bytes.G()) + 1);
        }
    }

    @Override // okio.BufferedSource
    public String h0(long j10) {
        long j11;
        if (j10 >= 0) {
            if (j10 == LongCompanionObject.MAX_VALUE) {
                j11 = Long.MAX_VALUE;
            } else {
                j11 = j10 + 1;
            }
            long e02 = e0((byte) 10, 0L, j11);
            if (e02 != -1) {
                return ru.a.d(this.f48212e, e02);
            }
            if (j11 < LongCompanionObject.MAX_VALUE && D0(j11) && this.f48212e.Y(j11 - 1) == 13 && D0(j11 + 1) && this.f48212e.Y(j11) == 10) {
                return ru.a.d(this.f48212e, j11);
            }
            Buffer buffer = new Buffer();
            Buffer buffer2 = this.f48212e;
            buffer2.z(buffer, 0L, Math.min(32, buffer2.size()));
            throw new EOFException("\\n not found: limit=" + Math.min(this.f48212e.size(), j10) + " content=" + buffer.K1().q() + (char) 8230);
        }
        throw new IllegalArgumentException(("limit < 0: " + j10).toString());
    }

    @Override // java.nio.channels.Channel
    public boolean isOpen() {
        return !this.f48213i;
    }

    public long k(ByteString targetBytes, long j10) {
        Intrinsics.checkNotNullParameter(targetBytes, "targetBytes");
        if (this.f48213i) {
            throw new IllegalStateException("closed");
        }
        while (true) {
            long I0 = this.f48212e.I0(targetBytes, j10);
            if (I0 != -1) {
                return I0;
            }
            long size = this.f48212e.size();
            if (this.f48211d.read(this.f48212e, 8192L) == -1) {
                return -1L;
            }
            j10 = Math.max(j10, size);
        }
    }

    public boolean m(long j10, ByteString bytes, int i10, int i11) {
        Intrinsics.checkNotNullParameter(bytes, "bytes");
        if (!this.f48213i) {
            if (j10 < 0 || i10 < 0 || i11 < 0 || bytes.G() - i10 < i11) {
                return false;
            }
            for (int i12 = 0; i12 < i11; i12++) {
                long j11 = i12 + j10;
                if (!D0(1 + j11) || this.f48212e.Y(j11) != bytes.j(i10 + i12)) {
                    return false;
                }
            }
            return true;
        }
        throw new IllegalStateException("closed");
    }

    @Override // okio.BufferedSource
    public byte[] m1() {
        this.f48212e.B0(this.f48211d);
        return this.f48212e.m1();
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
            boolean r2 = r5.D0(r2)
            if (r2 == 0) goto L5a
            okio.Buffer r2 = r5.f48212e
            long r3 = (long) r0
            byte r2 = r2.Y(r3)
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
            okio.Buffer r0 = r5.f48212e
            long r0 = r0.m2()
            return r0
        */
        throw new UnsupportedOperationException("Method not decompiled: qu.f0.m2():long");
    }

    @Override // okio.BufferedSource
    public boolean n1() {
        if (!this.f48213i) {
            if (this.f48212e.n1() && this.f48211d.read(this.f48212e, 8192L) == -1) {
                return true;
            }
            return false;
        }
        throw new IllegalStateException("closed");
    }

    @Override // okio.BufferedSource
    public InputStream n2() {
        return new a();
    }

    @Override // okio.BufferedSource
    public BufferedSource peek() {
        return x.d(new d0(this));
    }

    @Override // okio.Source
    public long read(Buffer sink, long j10) {
        Intrinsics.checkNotNullParameter(sink, "sink");
        if (j10 >= 0) {
            if (!this.f48213i) {
                if (this.f48212e.size() == 0 && this.f48211d.read(this.f48212e, 8192L) == -1) {
                    return -1L;
                }
                return this.f48212e.read(sink, Math.min(j10, this.f48212e.size()));
            }
            throw new IllegalStateException("closed");
        }
        throw new IllegalArgumentException(("byteCount < 0: " + j10).toString());
    }

    @Override // okio.BufferedSource
    public byte readByte() {
        U0(1L);
        return this.f48212e.readByte();
    }

    @Override // okio.BufferedSource
    public void readFully(byte[] sink) {
        Intrinsics.checkNotNullParameter(sink, "sink");
        try {
            U0(sink.length);
            this.f48212e.readFully(sink);
        } catch (EOFException e10) {
            int i10 = 0;
            while (this.f48212e.size() > 0) {
                Buffer buffer = this.f48212e;
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
        return this.f48212e.readInt();
    }

    @Override // okio.BufferedSource
    public long readLong() {
        U0(8L);
        return this.f48212e.readLong();
    }

    @Override // okio.BufferedSource
    public short readShort() {
        U0(2L);
        return this.f48212e.readShort();
    }

    @Override // okio.BufferedSource
    public boolean s0(long j10, ByteString bytes) {
        Intrinsics.checkNotNullParameter(bytes, "bytes");
        return m(j10, bytes, 0, bytes.G());
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
    public long s1() {
        /*
            r10 = this;
            r0 = 1
            r10.U0(r0)
            r2 = 0
            r4 = r2
        L8:
            long r6 = r4 + r0
            boolean r8 = r10.D0(r6)
            if (r8 == 0) goto L52
            okio.Buffer r8 = r10.f48212e
            byte r8 = r8.Y(r4)
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
            okio.Buffer r0 = r10.f48212e
            long r0 = r0.s1()
            return r0
        */
        throw new UnsupportedOperationException("Method not decompiled: qu.f0.s1():long");
    }

    @Override // okio.BufferedSource
    public void skip(long j10) {
        if (!this.f48213i) {
            while (j10 > 0) {
                if (this.f48212e.size() == 0 && this.f48211d.read(this.f48212e, 8192L) == -1) {
                    throw new EOFException();
                }
                long min = Math.min(j10, this.f48212e.size());
                this.f48212e.skip(min);
                j10 -= min;
            }
            return;
        }
        throw new IllegalStateException("closed");
    }

    @Override // okio.Source
    public Timeout timeout() {
        return this.f48211d.timeout();
    }

    public String toString() {
        return "buffer(" + this.f48211d + ')';
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a extends InputStream {
        a() {
        }

        @Override // java.io.InputStream
        public int available() {
            f0 f0Var = f0.this;
            if (!f0Var.f48213i) {
                return (int) Math.min(f0Var.f48212e.size(), Integer.MAX_VALUE);
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
            if (!f0Var.f48213i) {
                if (f0Var.f48212e.size() == 0) {
                    f0 f0Var2 = f0.this;
                    if (f0Var2.f48211d.read(f0Var2.f48212e, 8192L) == -1) {
                        return -1;
                    }
                }
                return f0.this.f48212e.readByte() & 255;
            }
            throw new IOException("closed");
        }

        public String toString() {
            return f0.this + ".inputStream()";
        }

        @Override // java.io.InputStream
        public int read(byte[] data, int i10, int i11) {
            Intrinsics.checkNotNullParameter(data, "data");
            if (!f0.this.f48213i) {
                okio.b.b(data.length, i10, i11);
                if (f0.this.f48212e.size() == 0) {
                    f0 f0Var = f0.this;
                    if (f0Var.f48211d.read(f0Var.f48212e, 8192L) == -1) {
                        return -1;
                    }
                }
                return f0.this.f48212e.read(data, i10, i11);
            }
            throw new IOException("closed");
        }
    }

    @Override // java.nio.channels.ReadableByteChannel
    public int read(ByteBuffer sink) {
        Intrinsics.checkNotNullParameter(sink, "sink");
        if (this.f48212e.size() == 0 && this.f48211d.read(this.f48212e, 8192L) == -1) {
            return -1;
        }
        return this.f48212e.read(sink);
    }
}
