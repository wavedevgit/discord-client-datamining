package com.squareup.moshi;

import okio.Buffer;
import okio.BufferedSource;
import okio.ByteString;
import okio.Source;
import okio.Timeout;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class r implements Source {

    /* renamed from: s  reason: collision with root package name */
    static final ByteString f18838s = ByteString.h("[]{}\"'/#");

    /* renamed from: t  reason: collision with root package name */
    static final ByteString f18839t = ByteString.h("'\\");

    /* renamed from: u  reason: collision with root package name */
    static final ByteString f18840u = ByteString.h("\"\\");

    /* renamed from: v  reason: collision with root package name */
    static final ByteString f18841v = ByteString.h("\r\n");

    /* renamed from: w  reason: collision with root package name */
    static final ByteString f18842w = ByteString.h("*");

    /* renamed from: x  reason: collision with root package name */
    static final ByteString f18843x = ByteString.f40593p;

    /* renamed from: d  reason: collision with root package name */
    private final BufferedSource f18844d;

    /* renamed from: e  reason: collision with root package name */
    private final Buffer f18845e;

    /* renamed from: i  reason: collision with root package name */
    private final Buffer f18846i;

    /* renamed from: o  reason: collision with root package name */
    private ByteString f18847o;

    /* renamed from: p  reason: collision with root package name */
    private int f18848p;

    /* renamed from: q  reason: collision with root package name */
    private long f18849q = 0;

    /* renamed from: r  reason: collision with root package name */
    private boolean f18850r = false;

    /* JADX INFO: Access modifiers changed from: package-private */
    public r(BufferedSource bufferedSource, Buffer buffer, ByteString byteString, int i10) {
        this.f18844d = bufferedSource;
        this.f18845e = bufferedSource.f();
        this.f18846i = buffer;
        this.f18847o = byteString;
        this.f18848p = i10;
    }

    private void a(long j10) {
        while (true) {
            long j11 = this.f18849q;
            if (j11 < j10) {
                ByteString byteString = this.f18847o;
                ByteString byteString2 = f18843x;
                if (byteString != byteString2) {
                    if (j11 == this.f18845e.size()) {
                        if (this.f18849q <= 0) {
                            this.f18844d.U0(1L);
                        } else {
                            return;
                        }
                    }
                    long C0 = this.f18845e.C0(this.f18847o, this.f18849q);
                    if (C0 == -1) {
                        this.f18849q = this.f18845e.size();
                    } else {
                        byte Z = this.f18845e.Z(C0);
                        ByteString byteString3 = this.f18847o;
                        ByteString byteString4 = f18838s;
                        if (byteString3 == byteString4) {
                            if (Z != 34) {
                                if (Z != 35) {
                                    if (Z != 39) {
                                        if (Z != 47) {
                                            if (Z != 91) {
                                                if (Z != 93) {
                                                    if (Z != 123) {
                                                        if (Z != 125) {
                                                        }
                                                    }
                                                }
                                                int i10 = this.f18848p - 1;
                                                this.f18848p = i10;
                                                if (i10 == 0) {
                                                    this.f18847o = byteString2;
                                                }
                                                this.f18849q = C0 + 1;
                                            }
                                            this.f18848p++;
                                            this.f18849q = C0 + 1;
                                        } else {
                                            long j12 = 2 + C0;
                                            this.f18844d.U0(j12);
                                            long j13 = C0 + 1;
                                            byte Z2 = this.f18845e.Z(j13);
                                            if (Z2 == 47) {
                                                this.f18847o = f18841v;
                                                this.f18849q = j12;
                                            } else if (Z2 == 42) {
                                                this.f18847o = f18842w;
                                                this.f18849q = j12;
                                            } else {
                                                this.f18849q = j13;
                                            }
                                        }
                                    } else {
                                        this.f18847o = f18839t;
                                        this.f18849q = C0 + 1;
                                    }
                                } else {
                                    this.f18847o = f18841v;
                                    this.f18849q = C0 + 1;
                                }
                            } else {
                                this.f18847o = f18840u;
                                this.f18849q = C0 + 1;
                            }
                        } else if (byteString3 != f18839t && byteString3 != f18840u) {
                            if (byteString3 == f18842w) {
                                long j14 = 2 + C0;
                                this.f18844d.U0(j14);
                                long j15 = C0 + 1;
                                if (this.f18845e.Z(j15) == 47) {
                                    this.f18849q = j14;
                                    this.f18847o = byteString4;
                                } else {
                                    this.f18849q = j15;
                                }
                            } else if (byteString3 == f18841v) {
                                this.f18849q = C0 + 1;
                                this.f18847o = byteString4;
                            } else {
                                throw new AssertionError();
                            }
                        } else if (Z == 92) {
                            long j16 = C0 + 2;
                            this.f18844d.U0(j16);
                            this.f18849q = j16;
                        } else {
                            if (this.f18848p > 0) {
                                byteString2 = byteString4;
                            }
                            this.f18847o = byteString2;
                            this.f18849q = C0 + 1;
                        }
                    }
                } else {
                    return;
                }
            } else {
                return;
            }
        }
    }

    @Override // okio.Source, java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        this.f18850r = true;
    }

    public void h() {
        this.f18850r = true;
        while (this.f18847o != f18843x) {
            a(8192L);
            this.f18844d.skip(this.f18849q);
        }
    }

    @Override // okio.Source
    public long read(Buffer buffer, long j10) {
        if (!this.f18850r) {
            if (j10 == 0) {
                return 0L;
            }
            if (!this.f18846i.p1()) {
                long read = this.f18846i.read(buffer, j10);
                long j11 = j10 - read;
                if (!this.f18845e.p1()) {
                    long read2 = read(buffer, j11);
                    if (read2 != -1) {
                        return read2 + read;
                    }
                }
                return read;
            }
            a(j10);
            long j12 = this.f18849q;
            if (j12 == 0) {
                if (this.f18847o == f18843x) {
                    return -1L;
                }
                throw new AssertionError();
            }
            long min = Math.min(j10, j12);
            buffer.u0(this.f18845e, min);
            this.f18849q -= min;
            return min;
        }
        throw new IllegalStateException("closed");
    }

    @Override // okio.Source
    public Timeout timeout() {
        return this.f18844d.timeout();
    }
}
