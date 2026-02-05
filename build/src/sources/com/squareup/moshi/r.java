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
    static final ByteString f17968s = ByteString.h("[]{}\"'/#");

    /* renamed from: t  reason: collision with root package name */
    static final ByteString f17969t = ByteString.h("'\\");

    /* renamed from: u  reason: collision with root package name */
    static final ByteString f17970u = ByteString.h("\"\\");

    /* renamed from: v  reason: collision with root package name */
    static final ByteString f17971v = ByteString.h("\r\n");

    /* renamed from: w  reason: collision with root package name */
    static final ByteString f17972w = ByteString.h("*");

    /* renamed from: x  reason: collision with root package name */
    static final ByteString f17973x = ByteString.f44061p;

    /* renamed from: d  reason: collision with root package name */
    private final BufferedSource f17974d;

    /* renamed from: e  reason: collision with root package name */
    private final Buffer f17975e;

    /* renamed from: i  reason: collision with root package name */
    private final Buffer f17976i;

    /* renamed from: o  reason: collision with root package name */
    private ByteString f17977o;

    /* renamed from: p  reason: collision with root package name */
    private int f17978p;

    /* renamed from: q  reason: collision with root package name */
    private long f17979q = 0;

    /* renamed from: r  reason: collision with root package name */
    private boolean f17980r = false;

    /* JADX INFO: Access modifiers changed from: package-private */
    public r(BufferedSource bufferedSource, Buffer buffer, ByteString byteString, int i10) {
        this.f17974d = bufferedSource;
        this.f17975e = bufferedSource.f();
        this.f17976i = buffer;
        this.f17977o = byteString;
        this.f17978p = i10;
    }

    private void a(long j10) {
        while (true) {
            long j11 = this.f17979q;
            if (j11 < j10) {
                ByteString byteString = this.f17977o;
                ByteString byteString2 = f17973x;
                if (byteString != byteString2) {
                    if (j11 == this.f17975e.size()) {
                        if (this.f17979q <= 0) {
                            this.f17974d.U0(1L);
                        } else {
                            return;
                        }
                    }
                    long K0 = this.f17975e.K0(this.f17977o, this.f17979q);
                    if (K0 == -1) {
                        this.f17979q = this.f17975e.size();
                    } else {
                        byte F0 = this.f17975e.F0(K0);
                        ByteString byteString3 = this.f17977o;
                        ByteString byteString4 = f17968s;
                        if (byteString3 == byteString4) {
                            if (F0 != 34) {
                                if (F0 != 35) {
                                    if (F0 != 39) {
                                        if (F0 != 47) {
                                            if (F0 != 91) {
                                                if (F0 != 93) {
                                                    if (F0 != 123) {
                                                        if (F0 != 125) {
                                                        }
                                                    }
                                                }
                                                int i10 = this.f17978p - 1;
                                                this.f17978p = i10;
                                                if (i10 == 0) {
                                                    this.f17977o = byteString2;
                                                }
                                                this.f17979q = K0 + 1;
                                            }
                                            this.f17978p++;
                                            this.f17979q = K0 + 1;
                                        } else {
                                            long j12 = 2 + K0;
                                            this.f17974d.U0(j12);
                                            long j13 = K0 + 1;
                                            byte F02 = this.f17975e.F0(j13);
                                            if (F02 == 47) {
                                                this.f17977o = f17971v;
                                                this.f17979q = j12;
                                            } else if (F02 == 42) {
                                                this.f17977o = f17972w;
                                                this.f17979q = j12;
                                            } else {
                                                this.f17979q = j13;
                                            }
                                        }
                                    } else {
                                        this.f17977o = f17969t;
                                        this.f17979q = K0 + 1;
                                    }
                                } else {
                                    this.f17977o = f17971v;
                                    this.f17979q = K0 + 1;
                                }
                            } else {
                                this.f17977o = f17970u;
                                this.f17979q = K0 + 1;
                            }
                        } else if (byteString3 != f17969t && byteString3 != f17970u) {
                            if (byteString3 == f17972w) {
                                long j14 = 2 + K0;
                                this.f17974d.U0(j14);
                                long j15 = K0 + 1;
                                if (this.f17975e.F0(j15) == 47) {
                                    this.f17979q = j14;
                                    this.f17977o = byteString4;
                                } else {
                                    this.f17979q = j15;
                                }
                            } else if (byteString3 == f17971v) {
                                this.f17979q = K0 + 1;
                                this.f17977o = byteString4;
                            } else {
                                throw new AssertionError();
                            }
                        } else if (F0 == 92) {
                            long j16 = K0 + 2;
                            this.f17974d.U0(j16);
                            this.f17979q = j16;
                        } else {
                            if (this.f17978p > 0) {
                                byteString2 = byteString4;
                            }
                            this.f17977o = byteString2;
                            this.f17979q = K0 + 1;
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
        this.f17980r = true;
    }

    public void h() {
        this.f17980r = true;
        while (this.f17977o != f17973x) {
            a(8192L);
            this.f17974d.skip(this.f17979q);
        }
    }

    @Override // okio.Source
    public long read(Buffer buffer, long j10) {
        if (!this.f17980r) {
            if (j10 == 0) {
                return 0L;
            }
            if (!this.f17976i.o1()) {
                long read = this.f17976i.read(buffer, j10);
                long j11 = j10 - read;
                if (!this.f17975e.o1()) {
                    long read2 = read(buffer, j11);
                    if (read2 != -1) {
                        return read2 + read;
                    }
                }
                return read;
            }
            a(j10);
            long j12 = this.f17979q;
            if (j12 == 0) {
                if (this.f17977o == f17973x) {
                    return -1L;
                }
                throw new AssertionError();
            }
            long min = Math.min(j10, j12);
            buffer.u0(this.f17975e, min);
            this.f17979q -= min;
            return min;
        }
        throw new IllegalStateException("closed");
    }

    @Override // okio.Source
    public Timeout timeout() {
        return this.f17974d.timeout();
    }
}
