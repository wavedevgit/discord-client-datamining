package okio;

import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.facebook.react.views.text.internal.span.SetSpanOperation;
import iu.a0;
import iu.d0;
import iu.g0;
import iu.h0;
import iu.i0;
import iu.x;
import java.io.Closeable;
import java.io.EOFException;
import java.io.InputStream;
import java.io.OutputStream;
import java.nio.ByteBuffer;
import java.nio.channels.ByteChannel;
import java.nio.charset.Charset;
import kotlin.collections.i;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.LongCompanionObject;
import kotlin.text.Charsets;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class Buffer implements BufferedSource, BufferedSink, Cloneable, ByteChannel {

    /* renamed from: d  reason: collision with root package name */
    public g0 f44368d;

    /* renamed from: e  reason: collision with root package name */
    private long f44369e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a implements Closeable {

        /* renamed from: d  reason: collision with root package name */
        public Buffer f44370d;

        /* renamed from: e  reason: collision with root package name */
        public boolean f44371e;

        /* renamed from: i  reason: collision with root package name */
        private g0 f44372i;

        /* renamed from: p  reason: collision with root package name */
        public byte[] f44374p;

        /* renamed from: o  reason: collision with root package name */
        public long f44373o = -1;

        /* renamed from: q  reason: collision with root package name */
        public int f44375q = -1;

        /* renamed from: r  reason: collision with root package name */
        public int f44376r = -1;

        public final g0 a() {
            return this.f44372i;
        }

        @Override // java.io.Closeable, java.lang.AutoCloseable
        public void close() {
            if (this.f44370d != null) {
                this.f44370d = null;
                x(null);
                this.f44373o = -1L;
                this.f44374p = null;
                this.f44375q = -1;
                this.f44376r = -1;
                return;
            }
            throw new IllegalStateException("not attached to a buffer");
        }

        public final int h() {
            long j10;
            long j11 = this.f44373o;
            Buffer buffer = this.f44370d;
            Intrinsics.checkNotNull(buffer);
            if (j11 != buffer.size()) {
                long j12 = this.f44373o;
                if (j12 == -1) {
                    j10 = 0;
                } else {
                    j10 = j12 + (this.f44376r - this.f44375q);
                }
                return n(j10);
            }
            throw new IllegalStateException("no more bytes");
        }

        public final long l(long j10) {
            Buffer buffer = this.f44370d;
            if (buffer != null) {
                if (this.f44371e) {
                    long size = buffer.size();
                    int i10 = (j10 > size ? 1 : (j10 == size ? 0 : -1));
                    if (i10 <= 0) {
                        if (j10 >= 0) {
                            long j11 = size - j10;
                            while (true) {
                                if (j11 <= 0) {
                                    break;
                                }
                                g0 g0Var = buffer.f44368d;
                                Intrinsics.checkNotNull(g0Var);
                                g0 g0Var2 = g0Var.f31271g;
                                Intrinsics.checkNotNull(g0Var2);
                                int i11 = g0Var2.f31267c;
                                long j12 = i11 - g0Var2.f31266b;
                                if (j12 <= j11) {
                                    buffer.f44368d = g0Var2.b();
                                    h0.b(g0Var2);
                                    j11 -= j12;
                                } else {
                                    g0Var2.f31267c = i11 - ((int) j11);
                                    break;
                                }
                            }
                            x(null);
                            this.f44373o = j10;
                            this.f44374p = null;
                            this.f44375q = -1;
                            this.f44376r = -1;
                        } else {
                            throw new IllegalArgumentException(("newSize < 0: " + j10).toString());
                        }
                    } else if (i10 > 0) {
                        long j13 = j10 - size;
                        boolean z10 = true;
                        while (j13 > 0) {
                            g0 y12 = buffer.y1(1);
                            int min = (int) Math.min(j13, 8192 - y12.f31267c);
                            y12.f31267c += min;
                            j13 -= min;
                            if (z10) {
                                x(y12);
                                this.f44373o = size;
                                this.f44374p = y12.f31265a;
                                int i12 = y12.f31267c;
                                this.f44375q = i12 - min;
                                this.f44376r = i12;
                                z10 = false;
                            }
                        }
                    }
                    buffer.Y0(j10);
                    return size;
                }
                throw new IllegalStateException("resizeBuffer() only permitted for read/write buffers");
            }
            throw new IllegalStateException("not attached to a buffer");
        }

        public final int n(long j10) {
            g0 g0Var;
            Buffer buffer = this.f44370d;
            if (buffer != null) {
                int i10 = (j10 > (-1L) ? 1 : (j10 == (-1L) ? 0 : -1));
                if (i10 >= 0 && j10 <= buffer.size()) {
                    if (i10 != 0 && j10 != buffer.size()) {
                        long size = buffer.size();
                        g0 g0Var2 = buffer.f44368d;
                        long j11 = 0;
                        if (a() != null) {
                            long j12 = this.f44373o;
                            int i11 = this.f44375q;
                            g0 a10 = a();
                            Intrinsics.checkNotNull(a10);
                            long j13 = j12 - (i11 - a10.f31266b);
                            if (j13 > j10) {
                                g0Var = g0Var2;
                                g0Var2 = a();
                                size = j13;
                            } else {
                                g0Var = a();
                                j11 = j13;
                            }
                        } else {
                            g0Var = g0Var2;
                        }
                        if (size - j10 > j10 - j11) {
                            while (true) {
                                Intrinsics.checkNotNull(g0Var);
                                int i12 = g0Var.f31267c;
                                int i13 = g0Var.f31266b;
                                if (j10 < (i12 - i13) + j11) {
                                    break;
                                }
                                j11 += i12 - i13;
                                g0Var = g0Var.f31270f;
                            }
                        } else {
                            while (size > j10) {
                                Intrinsics.checkNotNull(g0Var2);
                                g0Var2 = g0Var2.f31271g;
                                Intrinsics.checkNotNull(g0Var2);
                                size -= g0Var2.f31267c - g0Var2.f31266b;
                            }
                            j11 = size;
                            g0Var = g0Var2;
                        }
                        if (this.f44371e) {
                            Intrinsics.checkNotNull(g0Var);
                            if (g0Var.f31268d) {
                                g0 f10 = g0Var.f();
                                if (buffer.f44368d == g0Var) {
                                    buffer.f44368d = f10;
                                }
                                g0Var = g0Var.c(f10);
                                g0 g0Var3 = g0Var.f31271g;
                                Intrinsics.checkNotNull(g0Var3);
                                g0Var3.b();
                            }
                        }
                        x(g0Var);
                        this.f44373o = j10;
                        Intrinsics.checkNotNull(g0Var);
                        this.f44374p = g0Var.f31265a;
                        int i14 = g0Var.f31266b + ((int) (j10 - j11));
                        this.f44375q = i14;
                        int i15 = g0Var.f31267c;
                        this.f44376r = i15;
                        return i15 - i14;
                    }
                    x(null);
                    this.f44373o = j10;
                    this.f44374p = null;
                    this.f44375q = -1;
                    this.f44376r = -1;
                    return -1;
                }
                throw new ArrayIndexOutOfBoundsException("offset=" + j10 + " > size=" + buffer.size());
            }
            throw new IllegalStateException("not attached to a buffer");
        }

        public final void x(g0 g0Var) {
            this.f44372i = g0Var;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class c extends OutputStream {
        c() {
        }

        @Override // java.io.OutputStream, java.io.Closeable, java.lang.AutoCloseable
        public void close() {
        }

        @Override // java.io.OutputStream, java.io.Flushable
        public void flush() {
        }

        public String toString() {
            return Buffer.this + ".outputStream()";
        }

        @Override // java.io.OutputStream
        public void write(int i10) {
            Buffer.this.writeByte(i10);
        }

        @Override // java.io.OutputStream
        public void write(byte[] data, int i10, int i11) {
            Intrinsics.checkNotNullParameter(data, "data");
            Buffer.this.write(data, i10, i11);
        }
    }

    public static /* synthetic */ a U0(Buffer buffer, a aVar, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            aVar = okio.b.d();
        }
        return buffer.R0(aVar);
    }

    @Override // okio.BufferedSink
    /* renamed from: A1 */
    public Buffer a2(ByteString byteString) {
        Intrinsics.checkNotNullParameter(byteString, "byteString");
        byteString.O(this, 0, byteString.G());
        return this;
    }

    /* renamed from: B */
    public Buffer clone() {
        return F();
    }

    @Override // okio.BufferedSource
    public boolean B0(long j10) {
        if (this.f44369e >= j10) {
            return true;
        }
        return false;
    }

    @Override // okio.BufferedSink
    /* renamed from: B1 */
    public Buffer write(byte[] source) {
        Intrinsics.checkNotNullParameter(source, "source");
        return write(source, 0, source.length);
    }

    @Override // okio.BufferedSink
    /* renamed from: D0 */
    public Buffer d0() {
        return this;
    }

    public final long E() {
        long size = size();
        if (size == 0) {
            return 0L;
        }
        g0 g0Var = this.f44368d;
        Intrinsics.checkNotNull(g0Var);
        g0 g0Var2 = g0Var.f31271g;
        Intrinsics.checkNotNull(g0Var2);
        int i10 = g0Var2.f31267c;
        if (i10 < 8192 && g0Var2.f31269e) {
            return size - (i10 - g0Var2.f31266b);
        }
        return size;
    }

    public final byte E0(long j10) {
        okio.b.b(size(), j10, 1L);
        g0 g0Var = this.f44368d;
        if (g0Var != null) {
            if (size() - j10 < j10) {
                long size = size();
                while (size > j10) {
                    g0Var = g0Var.f31271g;
                    Intrinsics.checkNotNull(g0Var);
                    size -= g0Var.f31267c - g0Var.f31266b;
                }
                Intrinsics.checkNotNull(g0Var);
                return g0Var.f31265a[(int) ((g0Var.f31266b + j10) - size)];
            }
            long j11 = 0;
            while (true) {
                long j12 = (g0Var.f31267c - g0Var.f31266b) + j11;
                if (j12 <= j10) {
                    g0Var = g0Var.f31270f;
                    Intrinsics.checkNotNull(g0Var);
                    j11 = j12;
                } else {
                    Intrinsics.checkNotNull(g0Var);
                    return g0Var.f31265a[(int) ((g0Var.f31266b + j10) - j11)];
                }
            }
        } else {
            Intrinsics.checkNotNull(null);
            throw null;
        }
    }

    @Override // okio.BufferedSink
    /* renamed from: E1 */
    public Buffer write(byte[] source, int i10, int i11) {
        Intrinsics.checkNotNullParameter(source, "source");
        long j10 = i11;
        okio.b.b(source.length, i10, j10);
        int i12 = i11 + i10;
        while (i10 < i12) {
            g0 y12 = y1(1);
            int min = Math.min(i12 - i10, 8192 - y12.f31267c);
            int i13 = i10 + min;
            i.f(source, y12.f31265a, y12.f31267c, i10, i13);
            y12.f31267c += min;
            i10 = i13;
        }
        Y0(size() + j10);
        return this;
    }

    public final Buffer F() {
        Buffer buffer = new Buffer();
        if (size() == 0) {
            return buffer;
        }
        g0 g0Var = this.f44368d;
        Intrinsics.checkNotNull(g0Var);
        g0 d10 = g0Var.d();
        buffer.f44368d = d10;
        d10.f31271g = d10;
        d10.f31270f = d10;
        for (g0 g0Var2 = g0Var.f31270f; g0Var2 != g0Var; g0Var2 = g0Var2.f31270f) {
            g0 g0Var3 = d10.f31271g;
            Intrinsics.checkNotNull(g0Var3);
            Intrinsics.checkNotNull(g0Var2);
            g0Var3.c(g0Var2.d());
        }
        buffer.Y0(size());
        return buffer;
    }

    public long F0(ByteString bytes, long j10) {
        int i10;
        long j11 = j10;
        Intrinsics.checkNotNullParameter(bytes, "bytes");
        if (bytes.G() > 0) {
            long j12 = 0;
            if (j11 >= 0) {
                g0 g0Var = this.f44368d;
                if (g0Var == null) {
                    return -1L;
                }
                if (size() - j11 < j11) {
                    j12 = size();
                    while (j12 > j11) {
                        g0Var = g0Var.f31271g;
                        Intrinsics.checkNotNull(g0Var);
                        j12 -= g0Var.f31267c - g0Var.f31266b;
                    }
                    byte[] u10 = bytes.u();
                    byte b10 = u10[0];
                    int G = bytes.G();
                    long size = (size() - G) + 1;
                    while (j12 < size) {
                        byte[] bArr = g0Var.f31265a;
                        long j13 = size;
                        int min = (int) Math.min(g0Var.f31267c, (g0Var.f31266b + size) - j12);
                        i10 = (int) ((g0Var.f31266b + j11) - j12);
                        while (i10 < min) {
                            if (bArr[i10] != b10 || !ju.a.c(g0Var, i10 + 1, u10, 1, G)) {
                                i10++;
                            }
                        }
                        j12 += g0Var.f31267c - g0Var.f31266b;
                        g0Var = g0Var.f31270f;
                        Intrinsics.checkNotNull(g0Var);
                        j11 = j12;
                        size = j13;
                    }
                    return -1L;
                }
                while (true) {
                    long j14 = (g0Var.f31267c - g0Var.f31266b) + j12;
                    if (j14 > j11) {
                        break;
                    }
                    g0Var = g0Var.f31270f;
                    Intrinsics.checkNotNull(g0Var);
                    j12 = j14;
                }
                byte[] u11 = bytes.u();
                byte b11 = u11[0];
                int G2 = bytes.G();
                long size2 = (size() - G2) + 1;
                while (j12 < size2) {
                    byte[] bArr2 = g0Var.f31265a;
                    int min2 = (int) Math.min(g0Var.f31267c, (g0Var.f31266b + size2) - j12);
                    i10 = (int) ((g0Var.f31266b + j11) - j12);
                    while (i10 < min2) {
                        if (bArr2[i10] == b11 && ju.a.c(g0Var, i10 + 1, u11, 1, G2)) {
                        }
                        i10++;
                    }
                    j12 += g0Var.f31267c - g0Var.f31266b;
                    g0Var = g0Var.f31270f;
                    Intrinsics.checkNotNull(g0Var);
                    j11 = j12;
                }
                return -1L;
                return (i10 - g0Var.f31266b) + j12;
            }
            throw new IllegalArgumentException(("fromIndex < 0: " + j11).toString());
        }
        throw new IllegalArgumentException("bytes is empty");
    }

    @Override // okio.BufferedSource
    public String H0() {
        return e0(LongCompanionObject.MAX_VALUE);
    }

    @Override // okio.BufferedSource
    public Buffer I() {
        return this;
    }

    public long I0(ByteString targetBytes, long j10) {
        int i10;
        int i11;
        Intrinsics.checkNotNullParameter(targetBytes, "targetBytes");
        long j11 = 0;
        if (j10 >= 0) {
            g0 g0Var = this.f44368d;
            if (g0Var == null) {
                return -1L;
            }
            if (size() - j10 < j10) {
                j11 = size();
                while (j11 > j10) {
                    g0Var = g0Var.f31271g;
                    Intrinsics.checkNotNull(g0Var);
                    j11 -= g0Var.f31267c - g0Var.f31266b;
                }
                if (targetBytes.G() == 2) {
                    byte j12 = targetBytes.j(0);
                    byte j13 = targetBytes.j(1);
                    while (j11 < size()) {
                        byte[] bArr = g0Var.f31265a;
                        i10 = (int) ((g0Var.f31266b + j10) - j11);
                        int i12 = g0Var.f31267c;
                        while (i10 < i12) {
                            byte b10 = bArr[i10];
                            if (b10 != j12 && b10 != j13) {
                                i10++;
                            }
                            i11 = g0Var.f31266b;
                        }
                        j11 += g0Var.f31267c - g0Var.f31266b;
                        g0Var = g0Var.f31270f;
                        Intrinsics.checkNotNull(g0Var);
                        j10 = j11;
                    }
                } else {
                    byte[] u10 = targetBytes.u();
                    while (j11 < size()) {
                        byte[] bArr2 = g0Var.f31265a;
                        i10 = (int) ((g0Var.f31266b + j10) - j11);
                        int i13 = g0Var.f31267c;
                        while (i10 < i13) {
                            byte b11 = bArr2[i10];
                            for (byte b12 : u10) {
                                if (b11 == b12) {
                                    i11 = g0Var.f31266b;
                                }
                            }
                            i10++;
                        }
                        j11 += g0Var.f31267c - g0Var.f31266b;
                        g0Var = g0Var.f31270f;
                        Intrinsics.checkNotNull(g0Var);
                        j10 = j11;
                    }
                }
                return -1L;
            }
            while (true) {
                long j14 = (g0Var.f31267c - g0Var.f31266b) + j11;
                if (j14 > j10) {
                    break;
                }
                g0Var = g0Var.f31270f;
                Intrinsics.checkNotNull(g0Var);
                j11 = j14;
            }
            if (targetBytes.G() == 2) {
                byte j15 = targetBytes.j(0);
                byte j16 = targetBytes.j(1);
                while (j11 < size()) {
                    byte[] bArr3 = g0Var.f31265a;
                    i10 = (int) ((g0Var.f31266b + j10) - j11);
                    int i14 = g0Var.f31267c;
                    while (i10 < i14) {
                        byte b13 = bArr3[i10];
                        if (b13 != j15 && b13 != j16) {
                            i10++;
                        }
                        i11 = g0Var.f31266b;
                    }
                    j11 += g0Var.f31267c - g0Var.f31266b;
                    g0Var = g0Var.f31270f;
                    Intrinsics.checkNotNull(g0Var);
                    j10 = j11;
                }
            } else {
                byte[] u11 = targetBytes.u();
                while (j11 < size()) {
                    byte[] bArr4 = g0Var.f31265a;
                    i10 = (int) ((g0Var.f31266b + j10) - j11);
                    int i15 = g0Var.f31267c;
                    while (i10 < i15) {
                        byte b14 = bArr4[i10];
                        for (byte b15 : u11) {
                            if (b14 == b15) {
                                i11 = g0Var.f31266b;
                            }
                        }
                        i10++;
                    }
                    j11 += g0Var.f31267c - g0Var.f31266b;
                    g0Var = g0Var.f31270f;
                    Intrinsics.checkNotNull(g0Var);
                    j10 = j11;
                }
            }
            return -1L;
            return (i10 - i11) + j11;
        }
        throw new IllegalArgumentException(("fromIndex < 0: " + j10).toString());
    }

    @Override // okio.BufferedSource
    public String I1(Charset charset) {
        Intrinsics.checkNotNullParameter(charset, "charset");
        return X0(this.f44369e, charset);
    }

    public boolean J0(long j10, ByteString bytes, int i10, int i11) {
        Intrinsics.checkNotNullParameter(bytes, "bytes");
        if (j10 < 0 || i10 < 0 || i11 < 0 || size() - j10 < i11 || bytes.G() - i10 < i11) {
            return false;
        }
        for (int i12 = 0; i12 < i11; i12++) {
            if (E0(i12 + j10) != bytes.j(i10 + i12)) {
                return false;
            }
        }
        return true;
    }

    @Override // okio.BufferedSource
    public byte[] L0(long j10) {
        if (j10 >= 0 && j10 <= 2147483647L) {
            if (size() >= j10) {
                byte[] bArr = new byte[(int) j10];
                readFully(bArr);
                return bArr;
            }
            throw new EOFException();
        }
        throw new IllegalArgumentException(("byteCount: " + j10).toString());
    }

    @Override // okio.BufferedSource
    public ByteString L1() {
        return f1(size());
    }

    public final Buffer N(Buffer out, long j10, long j11) {
        Intrinsics.checkNotNullParameter(out, "out");
        long j12 = j10;
        okio.b.b(size(), j12, j11);
        if (j11 != 0) {
            out.Y0(out.size() + j11);
            g0 g0Var = this.f44368d;
            while (true) {
                Intrinsics.checkNotNull(g0Var);
                int i10 = g0Var.f31267c;
                int i11 = g0Var.f31266b;
                if (j12 < i10 - i11) {
                    break;
                }
                j12 -= i10 - i11;
                g0Var = g0Var.f31270f;
            }
            g0 g0Var2 = g0Var;
            long j13 = j11;
            while (j13 > 0) {
                Intrinsics.checkNotNull(g0Var2);
                g0 d10 = g0Var2.d();
                int i12 = d10.f31266b + ((int) j12);
                d10.f31266b = i12;
                d10.f31267c = Math.min(i12 + ((int) j13), d10.f31267c);
                g0 g0Var3 = out.f44368d;
                if (g0Var3 == null) {
                    d10.f31271g = d10;
                    d10.f31270f = d10;
                    out.f44368d = d10;
                } else {
                    Intrinsics.checkNotNull(g0Var3);
                    g0 g0Var4 = g0Var3.f31271g;
                    Intrinsics.checkNotNull(g0Var4);
                    g0Var4.c(d10);
                }
                j13 -= d10.f31267c - d10.f31266b;
                g0Var2 = g0Var2.f31270f;
                j12 = 0;
            }
        }
        return this;
    }

    @Override // okio.BufferedSource
    public short N0() {
        return okio.b.j(readShort());
    }

    @Override // okio.BufferedSource
    public long O0() {
        return okio.b.i(readLong());
    }

    @Override // okio.BufferedSource
    public int Q1() {
        return okio.b.h(readInt());
    }

    public final a R0(a unsafeCursor) {
        Intrinsics.checkNotNullParameter(unsafeCursor, "unsafeCursor");
        return ju.a.a(this, unsafeCursor);
    }

    @Override // okio.BufferedSource
    public void T0(long j10) {
        if (this.f44369e >= j10) {
            return;
        }
        throw new EOFException();
    }

    @Override // okio.BufferedSource
    public String T1() {
        return X0(this.f44369e, Charsets.UTF_8);
    }

    @Override // okio.BufferedSource
    public long U(ByteString bytes) {
        Intrinsics.checkNotNullParameter(bytes, "bytes");
        return F0(bytes, 0L);
    }

    @Override // okio.BufferedSink
    /* renamed from: U1 */
    public Buffer writeByte(int i10) {
        g0 y12 = y1(1);
        byte[] bArr = y12.f31265a;
        int i11 = y12.f31267c;
        y12.f31267c = i11 + 1;
        bArr[i11] = (byte) i10;
        Y0(size() + 1);
        return this;
    }

    @Override // okio.BufferedSink
    /* renamed from: V */
    public Buffer O() {
        return this;
    }

    @Override // okio.BufferedSink
    /* renamed from: W1 */
    public Buffer V0(long j10) {
        boolean z10;
        int i10 = (j10 > 0L ? 1 : (j10 == 0L ? 0 : -1));
        if (i10 == 0) {
            return writeByte(48);
        }
        int i11 = 1;
        if (i10 < 0) {
            j10 = -j10;
            if (j10 < 0) {
                return n0("-9223372036854775808");
            }
            z10 = true;
        } else {
            z10 = false;
        }
        if (j10 < 100000000) {
            if (j10 < 10000) {
                if (j10 < 100) {
                    if (j10 >= 10) {
                        i11 = 2;
                    }
                } else if (j10 < 1000) {
                    i11 = 3;
                } else {
                    i11 = 4;
                }
            } else if (j10 < 1000000) {
                if (j10 < 100000) {
                    i11 = 5;
                } else {
                    i11 = 6;
                }
            } else if (j10 < 10000000) {
                i11 = 7;
            } else {
                i11 = 8;
            }
        } else if (j10 < 1000000000000L) {
            if (j10 < 10000000000L) {
                if (j10 < 1000000000) {
                    i11 = 9;
                } else {
                    i11 = 10;
                }
            } else if (j10 < 100000000000L) {
                i11 = 11;
            } else {
                i11 = 12;
            }
        } else if (j10 < 1000000000000000L) {
            if (j10 < 10000000000000L) {
                i11 = 13;
            } else if (j10 < 100000000000000L) {
                i11 = 14;
            } else {
                i11 = 15;
            }
        } else if (j10 < 100000000000000000L) {
            if (j10 < 10000000000000000L) {
                i11 = 16;
            } else {
                i11 = 17;
            }
        } else if (j10 < 1000000000000000000L) {
            i11 = 18;
        } else {
            i11 = 19;
        }
        if (z10) {
            i11++;
        }
        g0 y12 = y1(i11);
        byte[] bArr = y12.f31265a;
        int i12 = y12.f31267c + i11;
        while (j10 != 0) {
            long j11 = 10;
            i12--;
            bArr[i12] = ju.a.b()[(int) (j10 % j11)];
            j10 /= j11;
        }
        if (z10) {
            bArr[i12 - 1] = 45;
        }
        y12.f31267c += i11;
        Y0(size() + i11);
        return this;
    }

    public String X0(long j10, Charset charset) {
        Intrinsics.checkNotNullParameter(charset, "charset");
        int i10 = (j10 > 0L ? 1 : (j10 == 0L ? 0 : -1));
        if (i10 >= 0 && j10 <= 2147483647L) {
            if (this.f44369e >= j10) {
                if (i10 == 0) {
                    return "";
                }
                g0 g0Var = this.f44368d;
                Intrinsics.checkNotNull(g0Var);
                int i11 = g0Var.f31266b;
                if (i11 + j10 > g0Var.f31267c) {
                    return new String(L0(j10), charset);
                }
                int i12 = (int) j10;
                String str = new String(g0Var.f31265a, i11, i12, charset);
                int i13 = g0Var.f31266b + i12;
                g0Var.f31266b = i13;
                this.f44369e -= j10;
                if (i13 == g0Var.f31267c) {
                    this.f44368d = g0Var.b();
                    h0.b(g0Var);
                }
                return str;
            }
            throw new EOFException();
        }
        throw new IllegalArgumentException(("byteCount: " + j10).toString());
    }

    public final void Y0(long j10) {
        this.f44369e = j10;
    }

    @Override // okio.BufferedSink
    /* renamed from: Y1 */
    public Buffer K1(long j10) {
        if (j10 == 0) {
            return writeByte(48);
        }
        long j11 = (j10 >>> 1) | j10;
        long j12 = j11 | (j11 >>> 2);
        long j13 = j12 | (j12 >>> 4);
        long j14 = j13 | (j13 >>> 8);
        long j15 = j14 | (j14 >>> 16);
        long j16 = j15 | (j15 >>> 32);
        long j17 = j16 - ((j16 >>> 1) & 6148914691236517205L);
        long j18 = ((j17 >>> 2) & 3689348814741910323L) + (j17 & 3689348814741910323L);
        long j19 = ((j18 >>> 4) + j18) & 1085102592571150095L;
        long j20 = j19 + (j19 >>> 8);
        long j21 = j20 + (j20 >>> 16);
        int i10 = (int) ((((j21 & 63) + ((j21 >>> 32) & 63)) + 3) / 4);
        g0 y12 = y1(i10);
        byte[] bArr = y12.f31265a;
        int i11 = y12.f31267c;
        for (int i12 = (i11 + i10) - 1; i12 >= i11; i12--) {
            bArr[i12] = ju.a.b()[(int) (15 & j10)];
            j10 >>>= 4;
        }
        y12.f31267c += i10;
        Y0(size() + i10);
        return this;
    }

    public final long a() {
        return this.f44369e;
    }

    @Override // okio.BufferedSource
    public void a0(Buffer sink, long j10) {
        Intrinsics.checkNotNullParameter(sink, "sink");
        if (size() >= j10) {
            sink.t0(this, j10);
        } else {
            sink.t0(this, size());
            throw new EOFException();
        }
    }

    @Override // okio.BufferedSource
    public long b0(byte b10, long j10, long j11) {
        g0 g0Var;
        int i10;
        long j12 = 0;
        if (0 <= j10 && j10 <= j11) {
            if (j11 > size()) {
                j11 = size();
            }
            if (j10 == j11 || (g0Var = this.f44368d) == null) {
                return -1L;
            }
            if (size() - j10 < j10) {
                j12 = size();
                while (j12 > j10) {
                    g0Var = g0Var.f31271g;
                    Intrinsics.checkNotNull(g0Var);
                    j12 -= g0Var.f31267c - g0Var.f31266b;
                }
                while (j12 < j11) {
                    byte[] bArr = g0Var.f31265a;
                    int min = (int) Math.min(g0Var.f31267c, (g0Var.f31266b + j11) - j12);
                    i10 = (int) ((g0Var.f31266b + j10) - j12);
                    while (i10 < min) {
                        if (bArr[i10] != b10) {
                            i10++;
                        }
                    }
                    j12 += g0Var.f31267c - g0Var.f31266b;
                    g0Var = g0Var.f31270f;
                    Intrinsics.checkNotNull(g0Var);
                    j10 = j12;
                }
                return -1L;
            }
            while (true) {
                long j13 = (g0Var.f31267c - g0Var.f31266b) + j12;
                if (j13 > j10) {
                    break;
                }
                g0Var = g0Var.f31270f;
                Intrinsics.checkNotNull(g0Var);
                j12 = j13;
            }
            while (j12 < j11) {
                byte[] bArr2 = g0Var.f31265a;
                int min2 = (int) Math.min(g0Var.f31267c, (g0Var.f31266b + j11) - j12);
                i10 = (int) ((g0Var.f31266b + j10) - j12);
                while (i10 < min2) {
                    if (bArr2[i10] != b10) {
                        i10++;
                    }
                }
                j12 += g0Var.f31267c - g0Var.f31266b;
                g0Var = g0Var.f31270f;
                Intrinsics.checkNotNull(g0Var);
                j10 = j12;
            }
            return -1L;
            return (i10 - g0Var.f31266b) + j12;
        }
        throw new IllegalArgumentException(("size=" + size() + " fromIndex=" + j10 + " toIndex=" + j11).toString());
    }

    @Override // okio.BufferedSource
    public String b1(long j10) {
        return X0(j10, Charsets.UTF_8);
    }

    @Override // okio.BufferedSink
    /* renamed from: b2 */
    public Buffer writeInt(int i10) {
        g0 y12 = y1(4);
        byte[] bArr = y12.f31265a;
        int i11 = y12.f31267c;
        bArr[i11] = (byte) ((i10 >>> 24) & SetSpanOperation.SPAN_MAX_PRIORITY);
        bArr[i11 + 1] = (byte) ((i10 >>> 16) & SetSpanOperation.SPAN_MAX_PRIORITY);
        bArr[i11 + 2] = (byte) ((i10 >>> 8) & SetSpanOperation.SPAN_MAX_PRIORITY);
        bArr[i11 + 3] = (byte) (i10 & SetSpanOperation.SPAN_MAX_PRIORITY);
        y12.f31267c = i11 + 4;
        Y0(size() + 4);
        return this;
    }

    @Override // okio.BufferedSource
    public long c0(ByteString targetBytes) {
        Intrinsics.checkNotNullParameter(targetBytes, "targetBytes");
        return I0(targetBytes, 0L);
    }

    public Buffer c2(long j10) {
        g0 y12 = y1(8);
        byte[] bArr = y12.f31265a;
        int i10 = y12.f31267c;
        bArr[i10] = (byte) ((j10 >>> 56) & 255);
        bArr[i10 + 1] = (byte) ((j10 >>> 48) & 255);
        bArr[i10 + 2] = (byte) ((j10 >>> 40) & 255);
        bArr[i10 + 3] = (byte) ((j10 >>> 32) & 255);
        bArr[i10 + 4] = (byte) ((j10 >>> 24) & 255);
        bArr[i10 + 5] = (byte) ((j10 >>> 16) & 255);
        bArr[i10 + 6] = (byte) ((j10 >>> 8) & 255);
        bArr[i10 + 7] = (byte) (j10 & 255);
        y12.f31267c = i10 + 8;
        Y0(size() + 8);
        return this;
    }

    @Override // okio.Source, java.io.Closeable, java.lang.AutoCloseable
    public void close() {
    }

    public final ByteString d1() {
        if (size() <= 2147483647L) {
            return x1((int) size());
        }
        throw new IllegalStateException(("size > Int.MAX_VALUE: " + size()).toString());
    }

    @Override // okio.BufferedSource
    public Buffer e() {
        return this;
    }

    @Override // okio.BufferedSource
    public String e0(long j10) {
        if (j10 >= 0) {
            long j11 = LongCompanionObject.MAX_VALUE;
            if (j10 != LongCompanionObject.MAX_VALUE) {
                j11 = j10 + 1;
            }
            long j12 = j11;
            long b02 = b0((byte) 10, 0L, j12);
            if (b02 != -1) {
                return ju.a.d(this, b02);
            }
            if (j12 < size() && E0(j12 - 1) == 13 && E0(j12) == 10) {
                return ju.a.d(this, j12);
            }
            Buffer buffer = new Buffer();
            N(buffer, 0L, Math.min(32, size()));
            throw new EOFException("\\n not found: limit=" + Math.min(size(), j10) + " content=" + buffer.L1().q() + (char) 8230);
        }
        throw new IllegalArgumentException(("limit < 0: " + j10).toString());
    }

    @Override // okio.BufferedSource
    public long e2(Sink sink) {
        Intrinsics.checkNotNullParameter(sink, "sink");
        long size = size();
        if (size > 0) {
            sink.t0(this, size);
        }
        return size;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof Buffer)) {
            return false;
        }
        Buffer buffer = (Buffer) obj;
        if (size() != buffer.size()) {
            return false;
        }
        if (size() == 0) {
            return true;
        }
        g0 g0Var = this.f44368d;
        Intrinsics.checkNotNull(g0Var);
        g0 g0Var2 = buffer.f44368d;
        Intrinsics.checkNotNull(g0Var2);
        int i10 = g0Var.f31266b;
        int i11 = g0Var2.f31266b;
        long j10 = 0;
        while (j10 < size()) {
            long min = Math.min(g0Var.f31267c - i10, g0Var2.f31267c - i11);
            long j11 = 0;
            while (j11 < min) {
                int i12 = i10 + 1;
                int i13 = i11 + 1;
                if (g0Var.f31265a[i10] != g0Var2.f31265a[i11]) {
                    return false;
                }
                j11++;
                i10 = i12;
                i11 = i13;
            }
            if (i10 == g0Var.f31267c) {
                g0Var = g0Var.f31270f;
                Intrinsics.checkNotNull(g0Var);
                i10 = g0Var.f31266b;
            }
            if (i11 == g0Var2.f31267c) {
                g0Var2 = g0Var2.f31270f;
                Intrinsics.checkNotNull(g0Var2);
                i11 = g0Var2.f31266b;
            }
            j10 += min;
        }
        return true;
    }

    @Override // okio.BufferedSource
    public ByteString f1(long j10) {
        if (j10 >= 0 && j10 <= 2147483647L) {
            if (size() >= j10) {
                if (j10 >= 4096) {
                    ByteString x12 = x1((int) j10);
                    skip(j10);
                    return x12;
                }
                return new ByteString(L0(j10));
            }
            throw new EOFException();
        }
        throw new IllegalArgumentException(("byteCount: " + j10).toString());
    }

    @Override // okio.BufferedSink
    /* renamed from: f2 */
    public Buffer writeShort(int i10) {
        g0 y12 = y1(2);
        byte[] bArr = y12.f31265a;
        int i11 = y12.f31267c;
        bArr[i11] = (byte) ((i10 >>> 8) & SetSpanOperation.SPAN_MAX_PRIORITY);
        bArr[i11 + 1] = (byte) (i10 & SetSpanOperation.SPAN_MAX_PRIORITY);
        y12.f31267c = i11 + 2;
        Y0(size() + 2);
        return this;
    }

    @Override // okio.BufferedSink, okio.Sink, java.io.Flushable
    public void flush() {
    }

    public Buffer h2(String string, int i10, int i11, Charset charset) {
        Intrinsics.checkNotNullParameter(string, "string");
        Intrinsics.checkNotNullParameter(charset, "charset");
        if (i10 >= 0) {
            if (i11 >= i10) {
                if (i11 <= string.length()) {
                    if (Intrinsics.areEqual(charset, Charsets.UTF_8)) {
                        return w0(string, i10, i11);
                    }
                    String substring = string.substring(i10, i11);
                    Intrinsics.checkNotNullExpressionValue(substring, "substring(...)");
                    byte[] bytes = substring.getBytes(charset);
                    Intrinsics.checkNotNullExpressionValue(bytes, "getBytes(...)");
                    return write(bytes, 0, bytes.length);
                }
                throw new IllegalArgumentException(("endIndex > string.length: " + i11 + " > " + string.length()).toString());
            }
            throw new IllegalArgumentException(("endIndex < beginIndex: " + i11 + " < " + i10).toString());
        }
        throw new IllegalArgumentException(("beginIndex < 0: " + i10).toString());
    }

    public int hashCode() {
        g0 g0Var = this.f44368d;
        if (g0Var == null) {
            return 0;
        }
        int i10 = 1;
        do {
            int i11 = g0Var.f31267c;
            for (int i12 = g0Var.f31266b; i12 < i11; i12++) {
                i10 = (i10 * 31) + g0Var.f31265a[i12];
            }
            g0Var = g0Var.f31270f;
            Intrinsics.checkNotNull(g0Var);
        } while (g0Var != this.f44368d);
        return i10;
    }

    public Buffer i2(String string, Charset charset) {
        Intrinsics.checkNotNullParameter(string, "string");
        Intrinsics.checkNotNullParameter(charset, "charset");
        return h2(string, 0, string.length(), charset);
    }

    @Override // java.nio.channels.Channel
    public boolean isOpen() {
        return true;
    }

    @Override // okio.BufferedSink
    /* renamed from: j2 */
    public Buffer n0(String string) {
        Intrinsics.checkNotNullParameter(string, "string");
        return w0(string, 0, string.length());
    }

    @Override // okio.BufferedSink
    public OutputStream k2() {
        return new c();
    }

    public final void l() {
        skip(size());
    }

    @Override // okio.BufferedSource
    public int l1(a0 options) {
        Intrinsics.checkNotNullParameter(options, "options");
        int f10 = ju.a.f(this, options, false, 2, null);
        if (f10 == -1) {
            return -1;
        }
        skip(options.g()[f10].G());
        return f10;
    }

    /* JADX WARN: Removed duplicated region for block: B:32:0x0095  */
    /* JADX WARN: Removed duplicated region for block: B:33:0x009f  */
    /* JADX WARN: Removed duplicated region for block: B:35:0x00a3  */
    /* JADX WARN: Removed duplicated region for block: B:42:0x00a7 A[EDGE_INSN: B:42:0x00a7->B:37:0x00a7 ?: BREAK  , SYNTHETIC] */
    @Override // okio.BufferedSource
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public long m2() {
        /*
            r14 = this;
            long r0 = r14.size()
            r2 = 0
            int r0 = (r0 > r2 ? 1 : (r0 == r2 ? 0 : -1))
            if (r0 == 0) goto Lb1
            r0 = 0
            r1 = r0
            r4 = r2
        Ld:
            iu.g0 r6 = r14.f44368d
            kotlin.jvm.internal.Intrinsics.checkNotNull(r6)
            byte[] r7 = r6.f31265a
            int r8 = r6.f31266b
            int r9 = r6.f31267c
        L18:
            if (r8 >= r9) goto L93
            r10 = r7[r8]
            r11 = 48
            if (r10 < r11) goto L27
            r11 = 57
            if (r10 > r11) goto L27
            int r11 = r10 + (-48)
            goto L3c
        L27:
            r11 = 97
            if (r10 < r11) goto L32
            r11 = 102(0x66, float:1.43E-43)
            if (r10 > r11) goto L32
            int r11 = r10 + (-87)
            goto L3c
        L32:
            r11 = 65
            if (r10 < r11) goto L74
            r11 = 70
            if (r10 > r11) goto L74
            int r11 = r10 + (-55)
        L3c:
            r12 = -1152921504606846976(0xf000000000000000, double:-3.105036184601418E231)
            long r12 = r12 & r4
            int r12 = (r12 > r2 ? 1 : (r12 == r2 ? 0 : -1))
            if (r12 != 0) goto L4c
            r10 = 4
            long r4 = r4 << r10
            long r10 = (long) r11
            long r4 = r4 | r10
            int r8 = r8 + 1
            int r0 = r0 + 1
            goto L18
        L4c:
            okio.Buffer r0 = new okio.Buffer
            r0.<init>()
            okio.Buffer r0 = r0.K1(r4)
            okio.Buffer r0 = r0.writeByte(r10)
            java.lang.NumberFormatException r1 = new java.lang.NumberFormatException
            java.lang.StringBuilder r2 = new java.lang.StringBuilder
            r2.<init>()
            java.lang.String r3 = "Number too large: "
            r2.append(r3)
            java.lang.String r0 = r0.T1()
            r2.append(r0)
            java.lang.String r0 = r2.toString()
            r1.<init>(r0)
            throw r1
        L74:
            if (r0 == 0) goto L78
            r1 = 1
            goto L93
        L78:
            java.lang.NumberFormatException r0 = new java.lang.NumberFormatException
            java.lang.StringBuilder r1 = new java.lang.StringBuilder
            r1.<init>()
            java.lang.String r2 = "Expected leading [0-9a-fA-F] character but was 0x"
            r1.append(r2)
            java.lang.String r2 = okio.b.k(r10)
            r1.append(r2)
            java.lang.String r1 = r1.toString()
            r0.<init>(r1)
            throw r0
        L93:
            if (r8 != r9) goto L9f
            iu.g0 r7 = r6.b()
            r14.f44368d = r7
            iu.h0.b(r6)
            goto La1
        L9f:
            r6.f31266b = r8
        La1:
            if (r1 != 0) goto La7
            iu.g0 r6 = r14.f44368d
            if (r6 != 0) goto Ld
        La7:
            long r1 = r14.size()
            long r6 = (long) r0
            long r1 = r1 - r6
            r14.Y0(r1)
            return r4
        Lb1:
            java.io.EOFException r0 = new java.io.EOFException
            r0.<init>()
            throw r0
        */
        throw new UnsupportedOperationException("Method not decompiled: okio.Buffer.m2():long");
    }

    @Override // okio.BufferedSource
    public byte[] n1() {
        return L0(size());
    }

    @Override // okio.BufferedSource
    public InputStream n2() {
        return new b();
    }

    @Override // okio.BufferedSource
    public boolean o1() {
        if (this.f44369e == 0) {
            return true;
        }
        return false;
    }

    @Override // okio.BufferedSink
    /* renamed from: o2 */
    public Buffer w0(String string, int i10, int i11) {
        char charAt;
        char c10;
        Intrinsics.checkNotNullParameter(string, "string");
        if (i10 >= 0) {
            if (i11 >= i10) {
                if (i11 <= string.length()) {
                    while (i10 < i11) {
                        char charAt2 = string.charAt(i10);
                        if (charAt2 < 128) {
                            g0 y12 = y1(1);
                            byte[] bArr = y12.f31265a;
                            int i12 = y12.f31267c - i10;
                            int min = Math.min(i11, 8192 - i12);
                            int i13 = i10 + 1;
                            bArr[i10 + i12] = (byte) charAt2;
                            while (true) {
                                i10 = i13;
                                if (i10 >= min || (charAt = string.charAt(i10)) >= 128) {
                                    break;
                                }
                                i13 = i10 + 1;
                                bArr[i10 + i12] = (byte) charAt;
                            }
                            int i14 = y12.f31267c;
                            int i15 = (i12 + i10) - i14;
                            y12.f31267c = i14 + i15;
                            Y0(size() + i15);
                        } else {
                            if (charAt2 < 2048) {
                                g0 y13 = y1(2);
                                byte[] bArr2 = y13.f31265a;
                                int i16 = y13.f31267c;
                                bArr2[i16] = (byte) ((charAt2 >> 6) | 192);
                                bArr2[i16 + 1] = (byte) ((charAt2 & '?') | IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);
                                y13.f31267c = i16 + 2;
                                Y0(size() + 2);
                            } else if (charAt2 >= 55296 && charAt2 <= 57343) {
                                int i17 = i10 + 1;
                                if (i17 < i11) {
                                    c10 = string.charAt(i17);
                                } else {
                                    c10 = 0;
                                }
                                if (charAt2 <= 56319 && 56320 <= c10 && c10 < 57344) {
                                    int i18 = (((charAt2 & 1023) << 10) | (c10 & 1023)) + 65536;
                                    g0 y14 = y1(4);
                                    byte[] bArr3 = y14.f31265a;
                                    int i19 = y14.f31267c;
                                    bArr3[i19] = (byte) ((i18 >> 18) | 240);
                                    bArr3[i19 + 1] = (byte) (((i18 >> 12) & 63) | IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);
                                    bArr3[i19 + 2] = (byte) (((i18 >> 6) & 63) | IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);
                                    bArr3[i19 + 3] = (byte) ((i18 & 63) | IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);
                                    y14.f31267c = i19 + 4;
                                    Y0(size() + 4);
                                    i10 += 2;
                                } else {
                                    writeByte(63);
                                    i10 = i17;
                                }
                            } else {
                                g0 y15 = y1(3);
                                byte[] bArr4 = y15.f31265a;
                                int i20 = y15.f31267c;
                                bArr4[i20] = (byte) ((charAt2 >> '\f') | 224);
                                bArr4[i20 + 1] = (byte) ((63 & (charAt2 >> 6)) | IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);
                                bArr4[i20 + 2] = (byte) ((charAt2 & '?') | IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);
                                y15.f31267c = i20 + 3;
                                Y0(size() + 3);
                            }
                            i10++;
                        }
                    }
                    return this;
                }
                throw new IllegalArgumentException(("endIndex > string.length: " + i11 + " > " + string.length()).toString());
            }
            throw new IllegalArgumentException(("endIndex < beginIndex: " + i11 + " < " + i10).toString());
        }
        throw new IllegalArgumentException(("beginIndex < 0: " + i10).toString());
    }

    @Override // okio.BufferedSource
    public boolean p0(long j10, ByteString bytes) {
        Intrinsics.checkNotNullParameter(bytes, "bytes");
        return J0(j10, bytes, 0, bytes.G());
    }

    public Buffer p2(int i10) {
        if (i10 < 128) {
            writeByte(i10);
            return this;
        } else if (i10 < 2048) {
            g0 y12 = y1(2);
            byte[] bArr = y12.f31265a;
            int i11 = y12.f31267c;
            bArr[i11] = (byte) ((i10 >> 6) | 192);
            bArr[i11 + 1] = (byte) ((i10 & 63) | IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);
            y12.f31267c = i11 + 2;
            Y0(size() + 2);
            return this;
        } else if (55296 <= i10 && i10 < 57344) {
            writeByte(63);
            return this;
        } else if (i10 < 65536) {
            g0 y13 = y1(3);
            byte[] bArr2 = y13.f31265a;
            int i12 = y13.f31267c;
            bArr2[i12] = (byte) ((i10 >> 12) | 224);
            bArr2[i12 + 1] = (byte) (((i10 >> 6) & 63) | IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);
            bArr2[i12 + 2] = (byte) ((i10 & 63) | IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);
            y13.f31267c = i12 + 3;
            Y0(size() + 3);
            return this;
        } else if (i10 <= 1114111) {
            g0 y14 = y1(4);
            byte[] bArr3 = y14.f31265a;
            int i13 = y14.f31267c;
            bArr3[i13] = (byte) ((i10 >> 18) | 240);
            bArr3[i13 + 1] = (byte) (((i10 >> 12) & 63) | IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);
            bArr3[i13 + 2] = (byte) (((i10 >> 6) & 63) | IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);
            bArr3[i13 + 3] = (byte) ((i10 & 63) | IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);
            y14.f31267c = i13 + 4;
            Y0(size() + 4);
            return this;
        } else {
            throw new IllegalArgumentException("Unexpected code point: 0x" + okio.b.l(i10));
        }
    }

    @Override // okio.BufferedSource
    public BufferedSource peek() {
        return x.d(new d0(this));
    }

    @Override // java.nio.channels.ReadableByteChannel
    public int read(ByteBuffer sink) {
        Intrinsics.checkNotNullParameter(sink, "sink");
        g0 g0Var = this.f44368d;
        if (g0Var == null) {
            return -1;
        }
        int min = Math.min(sink.remaining(), g0Var.f31267c - g0Var.f31266b);
        sink.put(g0Var.f31265a, g0Var.f31266b, min);
        int i10 = g0Var.f31266b + min;
        g0Var.f31266b = i10;
        this.f44369e -= min;
        if (i10 == g0Var.f31267c) {
            this.f44368d = g0Var.b();
            h0.b(g0Var);
        }
        return min;
    }

    @Override // okio.BufferedSource
    public byte readByte() {
        if (size() != 0) {
            g0 g0Var = this.f44368d;
            Intrinsics.checkNotNull(g0Var);
            int i10 = g0Var.f31266b;
            int i11 = g0Var.f31267c;
            int i12 = i10 + 1;
            byte b10 = g0Var.f31265a[i10];
            Y0(size() - 1);
            if (i12 == i11) {
                this.f44368d = g0Var.b();
                h0.b(g0Var);
                return b10;
            }
            g0Var.f31266b = i12;
            return b10;
        }
        throw new EOFException();
    }

    @Override // okio.BufferedSource
    public void readFully(byte[] sink) {
        Intrinsics.checkNotNullParameter(sink, "sink");
        int i10 = 0;
        while (i10 < sink.length) {
            int read = read(sink, i10, sink.length - i10);
            if (read != -1) {
                i10 += read;
            } else {
                throw new EOFException();
            }
        }
    }

    @Override // okio.BufferedSource
    public int readInt() {
        if (size() >= 4) {
            g0 g0Var = this.f44368d;
            Intrinsics.checkNotNull(g0Var);
            int i10 = g0Var.f31266b;
            int i11 = g0Var.f31267c;
            if (i11 - i10 < 4) {
                return ((readByte() & 255) << 24) | ((readByte() & 255) << 16) | ((readByte() & 255) << 8) | (readByte() & 255);
            }
            byte[] bArr = g0Var.f31265a;
            int i12 = ((bArr[i10 + 1] & 255) << 16) | ((bArr[i10] & 255) << 24);
            int i13 = i10 + 3;
            int i14 = i10 + 4;
            int i15 = (bArr[i13] & 255) | i12 | ((bArr[i10 + 2] & 255) << 8);
            Y0(size() - 4);
            if (i14 == i11) {
                this.f44368d = g0Var.b();
                h0.b(g0Var);
                return i15;
            }
            g0Var.f31266b = i14;
            return i15;
        }
        throw new EOFException();
    }

    @Override // okio.BufferedSource
    public long readLong() {
        if (size() >= 8) {
            g0 g0Var = this.f44368d;
            Intrinsics.checkNotNull(g0Var);
            int i10 = g0Var.f31266b;
            int i11 = g0Var.f31267c;
            if (i11 - i10 < 8) {
                return ((readInt() & 4294967295L) << 32) | (4294967295L & readInt());
            }
            byte[] bArr = g0Var.f31265a;
            long j10 = ((bArr[i10] & 255) << 56) | ((bArr[i10 + 1] & 255) << 48) | ((bArr[i10 + 2] & 255) << 40);
            int i12 = i10 + 7;
            int i13 = i10 + 8;
            long j11 = j10 | ((bArr[i10 + 3] & 255) << 32) | ((bArr[i10 + 4] & 255) << 24) | ((bArr[i10 + 5] & 255) << 16) | ((bArr[i10 + 6] & 255) << 8) | (bArr[i12] & 255);
            Y0(size() - 8);
            if (i13 == i11) {
                this.f44368d = g0Var.b();
                h0.b(g0Var);
                return j11;
            }
            g0Var.f31266b = i13;
            return j11;
        }
        throw new EOFException();
    }

    @Override // okio.BufferedSource
    public short readShort() {
        if (size() >= 2) {
            g0 g0Var = this.f44368d;
            Intrinsics.checkNotNull(g0Var);
            int i10 = g0Var.f31266b;
            int i11 = g0Var.f31267c;
            if (i11 - i10 < 2) {
                return (short) (((readByte() & 255) << 8) | (readByte() & 255));
            }
            byte[] bArr = g0Var.f31265a;
            int i12 = i10 + 1;
            int i13 = i10 + 2;
            int i14 = (bArr[i12] & 255) | ((bArr[i10] & 255) << 8);
            Y0(size() - 2);
            if (i13 == i11) {
                this.f44368d = g0Var.b();
                h0.b(g0Var);
            } else {
                g0Var.f31266b = i13;
            }
            return (short) i14;
        }
        throw new EOFException();
    }

    public final long size() {
        return this.f44369e;
    }

    @Override // okio.BufferedSource
    public void skip(long j10) {
        while (j10 > 0) {
            g0 g0Var = this.f44368d;
            if (g0Var != null) {
                int min = (int) Math.min(j10, g0Var.f31267c - g0Var.f31266b);
                long j11 = min;
                Y0(size() - j11);
                j10 -= j11;
                int i10 = g0Var.f31266b + min;
                g0Var.f31266b = i10;
                if (i10 == g0Var.f31267c) {
                    this.f44368d = g0Var.b();
                    h0.b(g0Var);
                }
            } else {
                throw new EOFException();
            }
        }
    }

    @Override // okio.Sink
    public void t0(Buffer source, long j10) {
        g0 g0Var;
        g0 g0Var2;
        int i10;
        Intrinsics.checkNotNullParameter(source, "source");
        if (source != this) {
            okio.b.b(source.size(), 0L, j10);
            while (j10 > 0) {
                g0 g0Var3 = source.f44368d;
                Intrinsics.checkNotNull(g0Var3);
                int i11 = g0Var3.f31267c;
                Intrinsics.checkNotNull(source.f44368d);
                if (j10 < i11 - g0Var.f31266b) {
                    g0 g0Var4 = this.f44368d;
                    if (g0Var4 != null) {
                        Intrinsics.checkNotNull(g0Var4);
                        g0Var2 = g0Var4.f31271g;
                    } else {
                        g0Var2 = null;
                    }
                    if (g0Var2 != null && g0Var2.f31269e) {
                        long j11 = g0Var2.f31267c + j10;
                        if (g0Var2.f31268d) {
                            i10 = 0;
                        } else {
                            i10 = g0Var2.f31266b;
                        }
                        if (j11 - i10 <= 8192) {
                            g0 g0Var5 = source.f44368d;
                            Intrinsics.checkNotNull(g0Var5);
                            g0Var5.g(g0Var2, (int) j10);
                            source.Y0(source.size() - j10);
                            Y0(size() + j10);
                            return;
                        }
                    }
                    g0 g0Var6 = source.f44368d;
                    Intrinsics.checkNotNull(g0Var6);
                    source.f44368d = g0Var6.e((int) j10);
                }
                g0 g0Var7 = source.f44368d;
                Intrinsics.checkNotNull(g0Var7);
                long j12 = g0Var7.f31267c - g0Var7.f31266b;
                source.f44368d = g0Var7.b();
                g0 g0Var8 = this.f44368d;
                if (g0Var8 == null) {
                    this.f44368d = g0Var7;
                    g0Var7.f31271g = g0Var7;
                    g0Var7.f31270f = g0Var7;
                } else {
                    Intrinsics.checkNotNull(g0Var8);
                    g0 g0Var9 = g0Var8.f31271g;
                    Intrinsics.checkNotNull(g0Var9);
                    g0Var9.c(g0Var7).a();
                }
                source.Y0(source.size() - j12);
                Y0(size() + j12);
                j10 -= j12;
            }
            return;
        }
        throw new IllegalArgumentException("source == this");
    }

    /* JADX WARN: Code restructure failed: missing block: B:39:0x00a2, code lost:
        Y0(size() - r1);
     */
    /* JADX WARN: Code restructure failed: missing block: B:40:0x00ab, code lost:
        if (r2 == false) goto L58;
     */
    /* JADX WARN: Code restructure failed: missing block: B:41:0x00ad, code lost:
        r14 = 2;
     */
    /* JADX WARN: Code restructure failed: missing block: B:42:0x00af, code lost:
        r14 = 1;
     */
    /* JADX WARN: Code restructure failed: missing block: B:43:0x00b0, code lost:
        if (r1 >= r14) goto L54;
     */
    /* JADX WARN: Code restructure failed: missing block: B:45:0x00b8, code lost:
        if (size() == r17) goto L52;
     */
    /* JADX WARN: Code restructure failed: missing block: B:46:0x00ba, code lost:
        if (r2 == false) goto L51;
     */
    /* JADX WARN: Code restructure failed: missing block: B:47:0x00bc, code lost:
        r1 = "Expected a digit";
     */
    /* JADX WARN: Code restructure failed: missing block: B:48:0x00bf, code lost:
        r1 = "Expected a digit or '-'";
     */
    /* JADX WARN: Code restructure failed: missing block: B:50:0x00e4, code lost:
        throw new java.lang.NumberFormatException(r1 + " but was 0x" + okio.b.k(E0(r17)));
     */
    /* JADX WARN: Code restructure failed: missing block: B:52:0x00ea, code lost:
        throw new java.io.EOFException();
     */
    /* JADX WARN: Code restructure failed: missing block: B:53:0x00eb, code lost:
        if (r2 == false) goto L56;
     */
    /* JADX WARN: Code restructure failed: missing block: B:54:0x00ed, code lost:
        return r8;
     */
    /* JADX WARN: Code restructure failed: missing block: B:56:0x00ef, code lost:
        return -r8;
     */
    @Override // okio.BufferedSource
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public long t1() {
        /*
            Method dump skipped, instructions count: 246
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: okio.Buffer.t1():long");
    }

    @Override // okio.Source
    public Timeout timeout() {
        return Timeout.f44385e;
    }

    public String toString() {
        return d1().toString();
    }

    public final ByteString x1(int i10) {
        if (i10 == 0) {
            return ByteString.f44380p;
        }
        okio.b.b(size(), 0L, i10);
        g0 g0Var = this.f44368d;
        int i11 = 0;
        int i12 = 0;
        int i13 = 0;
        while (i12 < i10) {
            Intrinsics.checkNotNull(g0Var);
            int i14 = g0Var.f31267c;
            int i15 = g0Var.f31266b;
            if (i14 != i15) {
                i12 += i14 - i15;
                i13++;
                g0Var = g0Var.f31270f;
            } else {
                throw new AssertionError("s.limit == s.pos");
            }
        }
        byte[][] bArr = new byte[i13];
        int[] iArr = new int[i13 * 2];
        g0 g0Var2 = this.f44368d;
        int i16 = 0;
        while (i11 < i10) {
            Intrinsics.checkNotNull(g0Var2);
            bArr[i16] = g0Var2.f31265a;
            i11 += g0Var2.f31267c - g0Var2.f31266b;
            iArr[i16] = Math.min(i11, i10);
            iArr[i16 + i13] = g0Var2.f31266b;
            g0Var2.f31268d = true;
            i16++;
            g0Var2 = g0Var2.f31270f;
        }
        return new i0(bArr, iArr);
    }

    @Override // okio.BufferedSink
    public long y0(Source source) {
        Intrinsics.checkNotNullParameter(source, "source");
        long j10 = 0;
        while (true) {
            long read = source.read(this, 8192L);
            if (read != -1) {
                j10 += read;
            } else {
                return j10;
            }
        }
    }

    public final g0 y1(int i10) {
        if (i10 >= 1 && i10 <= 8192) {
            g0 g0Var = this.f44368d;
            if (g0Var == null) {
                g0 c10 = h0.c();
                this.f44368d = c10;
                c10.f31271g = c10;
                c10.f31270f = c10;
                return c10;
            }
            Intrinsics.checkNotNull(g0Var);
            g0 g0Var2 = g0Var.f31271g;
            Intrinsics.checkNotNull(g0Var2);
            if (g0Var2.f31267c + i10 <= 8192 && g0Var2.f31269e) {
                return g0Var2;
            }
            return g0Var2.c(h0.c());
        }
        throw new IllegalArgumentException("unexpected capacity");
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class b extends InputStream {
        b() {
        }

        @Override // java.io.InputStream
        public int available() {
            return (int) Math.min(Buffer.this.size(), Integer.MAX_VALUE);
        }

        @Override // java.io.InputStream, java.io.Closeable, java.lang.AutoCloseable
        public void close() {
        }

        @Override // java.io.InputStream
        public int read() {
            if (Buffer.this.size() > 0) {
                return Buffer.this.readByte() & 255;
            }
            return -1;
        }

        public String toString() {
            return Buffer.this + ".inputStream()";
        }

        @Override // java.io.InputStream
        public int read(byte[] sink, int i10, int i11) {
            Intrinsics.checkNotNullParameter(sink, "sink");
            return Buffer.this.read(sink, i10, i11);
        }
    }

    @Override // java.nio.channels.WritableByteChannel
    public int write(ByteBuffer source) {
        Intrinsics.checkNotNullParameter(source, "source");
        int remaining = source.remaining();
        int i10 = remaining;
        while (i10 > 0) {
            g0 y12 = y1(1);
            int min = Math.min(i10, 8192 - y12.f31267c);
            source.get(y12.f31265a, y12.f31267c, min);
            i10 -= min;
            y12.f31267c += min;
        }
        this.f44369e += remaining;
        return remaining;
    }

    public int read(byte[] sink, int i10, int i11) {
        Intrinsics.checkNotNullParameter(sink, "sink");
        okio.b.b(sink.length, i10, i11);
        g0 g0Var = this.f44368d;
        if (g0Var == null) {
            return -1;
        }
        int min = Math.min(i11, g0Var.f31267c - g0Var.f31266b);
        byte[] bArr = g0Var.f31265a;
        int i12 = g0Var.f31266b;
        i.f(bArr, sink, i10, i12, i12 + min);
        g0Var.f31266b += min;
        Y0(size() - min);
        if (g0Var.f31266b == g0Var.f31267c) {
            this.f44368d = g0Var.b();
            h0.b(g0Var);
        }
        return min;
    }

    @Override // okio.Source
    public long read(Buffer sink, long j10) {
        Intrinsics.checkNotNullParameter(sink, "sink");
        if (j10 >= 0) {
            if (size() == 0) {
                return -1L;
            }
            if (j10 > size()) {
                j10 = size();
            }
            sink.t0(this, j10);
            return j10;
        }
        throw new IllegalArgumentException(("byteCount < 0: " + j10).toString());
    }
}
