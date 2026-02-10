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
    static final ByteString f18837s = ByteString.h("[]{}\"'/#");

    /* renamed from: t  reason: collision with root package name */
    static final ByteString f18838t = ByteString.h("'\\");

    /* renamed from: u  reason: collision with root package name */
    static final ByteString f18839u = ByteString.h("\"\\");

    /* renamed from: v  reason: collision with root package name */
    static final ByteString f18840v = ByteString.h("\r\n");

    /* renamed from: w  reason: collision with root package name */
    static final ByteString f18841w = ByteString.h("*");

    /* renamed from: x  reason: collision with root package name */
    static final ByteString f18842x = ByteString.f40592p;

    /* renamed from: d  reason: collision with root package name */
    private final BufferedSource f18843d;

    /* renamed from: e  reason: collision with root package name */
    private final Buffer f18844e;

    /* renamed from: i  reason: collision with root package name */
    private final Buffer f18845i;

    /* renamed from: o  reason: collision with root package name */
    private ByteString f18846o;

    /* renamed from: p  reason: collision with root package name */
    private int f18847p;

    /* renamed from: q  reason: collision with root package name */
    private long f18848q = 0;

    /* renamed from: r  reason: collision with root package name */
    private boolean f18849r = false;

    /* JADX INFO: Access modifiers changed from: package-private */
    public r(BufferedSource bufferedSource, Buffer buffer, ByteString byteString, int i10) {
        this.f18843d = bufferedSource;
        this.f18844e = bufferedSource.f();
        this.f18845i = buffer;
        this.f18846o = byteString;
        this.f18847p = i10;
    }

    private void a(long j10) {
        while (true) {
            long j11 = this.f18848q;
            if (j11 < j10) {
                ByteString byteString = this.f18846o;
                ByteString byteString2 = f18842x;
                if (byteString != byteString2) {
                    if (j11 == this.f18844e.size()) {
                        if (this.f18848q <= 0) {
                            this.f18843d.U0(1L);
                        } else {
                            return;
                        }
                    }
                    long C0 = this.f18844e.C0(this.f18846o, this.f18848q);
                    if (C0 == -1) {
                        this.f18848q = this.f18844e.size();
                    } else {
                        byte Z = this.f18844e.Z(C0);
                        ByteString byteString3 = this.f18846o;
                        ByteString byteString4 = f18837s;
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
                                                int i10 = this.f18847p - 1;
                                                this.f18847p = i10;
                                                if (i10 == 0) {
                                                    this.f18846o = byteString2;
                                                }
                                                this.f18848q = C0 + 1;
                                            }
                                            this.f18847p++;
                                            this.f18848q = C0 + 1;
                                        } else {
                                            long j12 = 2 + C0;
                                            this.f18843d.U0(j12);
                                            long j13 = C0 + 1;
                                            byte Z2 = this.f18844e.Z(j13);
                                            if (Z2 == 47) {
                                                this.f18846o = f18840v;
                                                this.f18848q = j12;
                                            } else if (Z2 == 42) {
                                                this.f18846o = f18841w;
                                                this.f18848q = j12;
                                            } else {
                                                this.f18848q = j13;
                                            }
                                        }
                                    } else {
                                        this.f18846o = f18838t;
                                        this.f18848q = C0 + 1;
                                    }
                                } else {
                                    this.f18846o = f18840v;
                                    this.f18848q = C0 + 1;
                                }
                            } else {
                                this.f18846o = f18839u;
                                this.f18848q = C0 + 1;
                            }
                        } else if (byteString3 != f18838t && byteString3 != f18839u) {
                            if (byteString3 == f18841w) {
                                long j14 = 2 + C0;
                                this.f18843d.U0(j14);
                                long j15 = C0 + 1;
                                if (this.f18844e.Z(j15) == 47) {
                                    this.f18848q = j14;
                                    this.f18846o = byteString4;
                                } else {
                                    this.f18848q = j15;
                                }
                            } else if (byteString3 == f18840v) {
                                this.f18848q = C0 + 1;
                                this.f18846o = byteString4;
                            } else {
                                throw new AssertionError();
                            }
                        } else if (Z == 92) {
                            long j16 = C0 + 2;
                            this.f18843d.U0(j16);
                            this.f18848q = j16;
                        } else {
                            if (this.f18847p > 0) {
                                byteString2 = byteString4;
                            }
                            this.f18846o = byteString2;
                            this.f18848q = C0 + 1;
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
        this.f18849r = true;
    }

    public void h() {
        this.f18849r = true;
        while (this.f18846o != f18842x) {
            a(8192L);
            this.f18843d.skip(this.f18848q);
        }
    }

    @Override // okio.Source
    public long read(Buffer buffer, long j10) {
        if (!this.f18849r) {
            if (j10 == 0) {
                return 0L;
            }
            if (!this.f18845i.p1()) {
                long read = this.f18845i.read(buffer, j10);
                long j11 = j10 - read;
                if (!this.f18844e.p1()) {
                    long read2 = read(buffer, j11);
                    if (read2 != -1) {
                        return read2 + read;
                    }
                }
                return read;
            }
            a(j10);
            long j12 = this.f18848q;
            if (j12 == 0) {
                if (this.f18846o == f18842x) {
                    return -1L;
                }
                throw new AssertionError();
            }
            long min = Math.min(j10, j12);
            buffer.u0(this.f18844e, min);
            this.f18848q -= min;
            return min;
        }
        throw new IllegalStateException("closed");
    }

    @Override // okio.Source
    public Timeout timeout() {
        return this.f18843d.timeout();
    }
}
