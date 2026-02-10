package com.google.android.gms.internal.fido;

import java.io.Closeable;
import java.io.EOFException;
import java.io.IOException;
import java.io.InputStream;
import java.nio.charset.StandardCharsets;
import kotlin.jvm.internal.ByteCompanionObject;
import kotlin.jvm.internal.LongCompanionObject;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class o5 implements Closeable {

    /* renamed from: d  reason: collision with root package name */
    private final InputStream f14178d;

    /* renamed from: e  reason: collision with root package name */
    private n5 f14179e;

    /* renamed from: i  reason: collision with root package name */
    private final byte[] f14180i = new byte[8];

    /* renamed from: o  reason: collision with root package name */
    private final p5 f14181o = p5.a();

    public o5(InputStream inputStream) {
        this.f14178d = inputStream;
    }

    private final void C(byte b10) {
        m();
        if (this.f14179e.b() == b10) {
            return;
        }
        throw new IllegalStateException(String.format("expected major type %s but found %s", Integer.valueOf((b10 >> 5) & 7), Integer.valueOf(this.f14179e.c())));
    }

    private final void I(byte[] bArr, int i10) {
        int i11 = 0;
        while (i11 != i10) {
            int read = this.f14178d.read(bArr, i11, i10 - i11);
            if (read != -1) {
                i11 += read;
            } else {
                throw new EOFException();
            }
        }
        this.f14179e = null;
    }

    private final byte[] J() {
        z();
        long y10 = y();
        if (y10 >= 0 && y10 <= 2147483647L) {
            if (this.f14178d.available() >= y10) {
                int i10 = (int) y10;
                byte[] bArr = new byte[i10];
                I(bArr, i10);
                return bArr;
            }
            throw new EOFException();
        }
        throw new UnsupportedOperationException(String.format("the maximum supported byte/text string length is %s bytes", Integer.MAX_VALUE));
    }

    private final long y() {
        byte[] bArr;
        if (this.f14179e.a() < 24) {
            long a10 = this.f14179e.a();
            this.f14179e = null;
            return a10;
        } else if (this.f14179e.a() == 24) {
            int read = this.f14178d.read();
            if (read != -1) {
                this.f14179e = null;
                return read & 255;
            }
            throw new EOFException();
        } else if (this.f14179e.a() == 25) {
            I(this.f14180i, 2);
            byte[] bArr2 = this.f14180i;
            return ((bArr2[0] & 255) << 8) | (bArr2[1] & 255);
        } else if (this.f14179e.a() == 26) {
            I(this.f14180i, 4);
            return (bArr[3] & 255) | ((bArr[1] & 255) << 16) | ((this.f14180i[0] & 255) << 24) | ((bArr[2] & 255) << 8);
        } else if (this.f14179e.a() == 27) {
            I(this.f14180i, 8);
            byte[] bArr3 = this.f14180i;
            long j10 = bArr3[0];
            long j11 = bArr3[1];
            long j12 = bArr3[2];
            long j13 = bArr3[3];
            return (bArr3[7] & 255) | ((j12 & 255) << 40) | ((j10 & 255) << 56) | ((j11 & 255) << 48) | ((j13 & 255) << 32) | ((bArr3[4] & 255) << 24) | ((bArr3[5] & 255) << 16) | ((bArr3[6] & 255) << 8);
        } else {
            throw new IOException(String.format("invalid additional information %s for major type %s", Byte.valueOf(this.f14179e.a()), Integer.valueOf(this.f14179e.c())));
        }
    }

    private final void z() {
        m();
        if (this.f14179e.a() != 31) {
            return;
        }
        throw new IllegalStateException(String.format("expected definite length but found %s", Byte.valueOf(this.f14179e.a())));
    }

    public final long a() {
        C(ByteCompanionObject.MIN_VALUE);
        z();
        long y10 = y();
        int i10 = (y10 > 0L ? 1 : (y10 == 0L ? 0 : -1));
        if (i10 >= 0) {
            if (i10 > 0) {
                this.f14181o.g(y10);
            }
            return y10;
        }
        throw new UnsupportedOperationException(String.format("the maximum supported array length is %s", Long.valueOf((long) LongCompanionObject.MAX_VALUE)));
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public final void close() {
        this.f14178d.close();
        this.f14181o.b();
    }

    public final long g() {
        boolean z10;
        m();
        if (this.f14179e.b() == 0) {
            z10 = true;
        } else if (this.f14179e.b() == 32) {
            z10 = false;
        } else {
            throw new IllegalStateException(String.format("expected major type 0 or 1 but found %s", Integer.valueOf(this.f14179e.c())));
        }
        long y10 = y();
        if (y10 >= 0) {
            if (z10) {
                return y10;
            }
            return ~y10;
        }
        throw new UnsupportedOperationException(String.format("the maximum supported unsigned/negative integer is %s", Long.valueOf((long) LongCompanionObject.MAX_VALUE)));
    }

    public final long k() {
        C((byte) -96);
        z();
        long y10 = y();
        int i10 = (y10 > 0L ? 1 : (y10 == 0L ? 0 : -1));
        if (i10 >= 0 && y10 <= 4611686018427387903L) {
            if (i10 > 0) {
                this.f14181o.g(y10 + y10);
            }
            return y10;
        }
        throw new UnsupportedOperationException("the maximum supported map length is 4611686018427387903L");
    }

    public final n5 m() {
        if (this.f14179e == null) {
            int read = this.f14178d.read();
            if (read == -1) {
                this.f14181o.b();
                return null;
            }
            n5 n5Var = new n5(read);
            this.f14179e = n5Var;
            byte b10 = n5Var.b();
            if (b10 != Byte.MIN_VALUE && b10 != -96 && b10 != -64) {
                if (b10 != -32) {
                    if (b10 != 0 && b10 != 32) {
                        if (b10 != 64) {
                            if (b10 == 96) {
                                this.f14181o.e(-2L);
                            } else {
                                throw new IllegalStateException(String.format("invalid major type: %s", Integer.valueOf(this.f14179e.c())));
                            }
                        } else {
                            this.f14181o.e(-1L);
                        }
                        this.f14181o.f();
                    }
                } else if (this.f14179e.a() == 31) {
                    this.f14181o.c();
                }
            }
            this.f14181o.d();
            this.f14181o.f();
        }
        return this.f14179e;
    }

    public final String n() {
        C((byte) 96);
        return new String(J(), StandardCharsets.UTF_8);
    }

    public final boolean p() {
        C((byte) -32);
        if (this.f14179e.a() <= 24) {
            int y10 = (int) y();
            if (y10 == 20) {
                return false;
            }
            if (y10 == 21) {
                return true;
            }
            throw new IllegalStateException(String.format("expected FALSE or TRUE", new Object[0]));
        }
        throw new IllegalStateException("expected simple value");
    }

    public final byte[] s() {
        C((byte) 64);
        return J();
    }
}
