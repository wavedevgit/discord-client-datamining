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
    private final InputStream f13681d;

    /* renamed from: e  reason: collision with root package name */
    private n5 f13682e;

    /* renamed from: i  reason: collision with root package name */
    private final byte[] f13683i = new byte[8];

    /* renamed from: o  reason: collision with root package name */
    private final p5 f13684o = p5.a();

    public o5(InputStream inputStream) {
        this.f13681d = inputStream;
    }

    private final byte[] A0() {
        L();
        long F = F();
        if (F >= 0 && F <= 2147483647L) {
            if (this.f13681d.available() >= F) {
                int i10 = (int) F;
                byte[] bArr = new byte[i10];
                V(bArr, i10);
                return bArr;
            }
            throw new EOFException();
        }
        throw new UnsupportedOperationException(String.format("the maximum supported byte/text string length is %s bytes", Integer.MAX_VALUE));
    }

    private final long F() {
        byte[] bArr;
        if (this.f13682e.a() < 24) {
            long a10 = this.f13682e.a();
            this.f13682e = null;
            return a10;
        } else if (this.f13682e.a() == 24) {
            int read = this.f13681d.read();
            if (read != -1) {
                this.f13682e = null;
                return read & 255;
            }
            throw new EOFException();
        } else if (this.f13682e.a() == 25) {
            V(this.f13683i, 2);
            byte[] bArr2 = this.f13683i;
            return ((bArr2[0] & 255) << 8) | (bArr2[1] & 255);
        } else if (this.f13682e.a() == 26) {
            V(this.f13683i, 4);
            return (bArr[3] & 255) | ((bArr[1] & 255) << 16) | ((this.f13683i[0] & 255) << 24) | ((bArr[2] & 255) << 8);
        } else if (this.f13682e.a() == 27) {
            V(this.f13683i, 8);
            byte[] bArr3 = this.f13683i;
            long j10 = bArr3[0];
            long j11 = bArr3[1];
            long j12 = bArr3[2];
            long j13 = bArr3[3];
            return (bArr3[7] & 255) | ((j12 & 255) << 40) | ((j10 & 255) << 56) | ((j11 & 255) << 48) | ((j13 & 255) << 32) | ((bArr3[4] & 255) << 24) | ((bArr3[5] & 255) << 16) | ((bArr3[6] & 255) << 8);
        } else {
            throw new IOException(String.format("invalid additional information %s for major type %s", Byte.valueOf(this.f13682e.a()), Integer.valueOf(this.f13682e.c())));
        }
    }

    private final void L() {
        n();
        if (this.f13682e.a() != 31) {
            return;
        }
        throw new IllegalStateException(String.format("expected definite length but found %s", Byte.valueOf(this.f13682e.a())));
    }

    private final void N(byte b10) {
        n();
        if (this.f13682e.b() == b10) {
            return;
        }
        throw new IllegalStateException(String.format("expected major type %s but found %s", Integer.valueOf((b10 >> 5) & 7), Integer.valueOf(this.f13682e.c())));
    }

    private final void V(byte[] bArr, int i10) {
        int i11 = 0;
        while (i11 != i10) {
            int read = this.f13681d.read(bArr, i11, i10 - i11);
            if (read != -1) {
                i11 += read;
            } else {
                throw new EOFException();
            }
        }
        this.f13682e = null;
    }

    public final boolean B() {
        N((byte) -32);
        if (this.f13682e.a() <= 24) {
            int F = (int) F();
            if (F == 20) {
                return false;
            }
            if (F == 21) {
                return true;
            }
            throw new IllegalStateException(String.format("expected FALSE or TRUE", new Object[0]));
        }
        throw new IllegalStateException("expected simple value");
    }

    public final byte[] E() {
        N((byte) 64);
        return A0();
    }

    public final long a() {
        N(ByteCompanionObject.MIN_VALUE);
        L();
        long F = F();
        int i10 = (F > 0L ? 1 : (F == 0L ? 0 : -1));
        if (i10 >= 0) {
            if (i10 > 0) {
                this.f13684o.g(F);
            }
            return F;
        }
        throw new UnsupportedOperationException(String.format("the maximum supported array length is %s", Long.valueOf((long) LongCompanionObject.MAX_VALUE)));
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public final void close() {
        this.f13681d.close();
        this.f13684o.b();
    }

    public final long h() {
        boolean z10;
        n();
        if (this.f13682e.b() == 0) {
            z10 = true;
        } else if (this.f13682e.b() == 32) {
            z10 = false;
        } else {
            throw new IllegalStateException(String.format("expected major type 0 or 1 but found %s", Integer.valueOf(this.f13682e.c())));
        }
        long F = F();
        if (F >= 0) {
            if (z10) {
                return F;
            }
            return ~F;
        }
        throw new UnsupportedOperationException(String.format("the maximum supported unsigned/negative integer is %s", Long.valueOf((long) LongCompanionObject.MAX_VALUE)));
    }

    public final long l() {
        N((byte) -96);
        L();
        long F = F();
        int i10 = (F > 0L ? 1 : (F == 0L ? 0 : -1));
        if (i10 >= 0 && F <= 4611686018427387903L) {
            if (i10 > 0) {
                this.f13684o.g(F + F);
            }
            return F;
        }
        throw new UnsupportedOperationException("the maximum supported map length is 4611686018427387903L");
    }

    public final n5 n() {
        if (this.f13682e == null) {
            int read = this.f13681d.read();
            if (read == -1) {
                this.f13684o.b();
                return null;
            }
            n5 n5Var = new n5(read);
            this.f13682e = n5Var;
            byte b10 = n5Var.b();
            if (b10 != Byte.MIN_VALUE && b10 != -96 && b10 != -64) {
                if (b10 != -32) {
                    if (b10 != 0 && b10 != 32) {
                        if (b10 != 64) {
                            if (b10 == 96) {
                                this.f13684o.e(-2L);
                            } else {
                                throw new IllegalStateException(String.format("invalid major type: %s", Integer.valueOf(this.f13682e.c())));
                            }
                        } else {
                            this.f13684o.e(-1L);
                        }
                        this.f13684o.f();
                    }
                } else if (this.f13682e.a() == 31) {
                    this.f13684o.c();
                }
            }
            this.f13684o.d();
            this.f13684o.f();
        }
        return this.f13682e;
    }

    public final String x() {
        N((byte) 96);
        return new String(A0(), StandardCharsets.UTF_8);
    }
}
