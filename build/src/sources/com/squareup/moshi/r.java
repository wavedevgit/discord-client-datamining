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
    static final ByteString f17562s = ByteString.h("[]{}\"'/#");

    /* renamed from: t  reason: collision with root package name */
    static final ByteString f17563t = ByteString.h("'\\");

    /* renamed from: u  reason: collision with root package name */
    static final ByteString f17564u = ByteString.h("\"\\");

    /* renamed from: v  reason: collision with root package name */
    static final ByteString f17565v = ByteString.h("\r\n");

    /* renamed from: w  reason: collision with root package name */
    static final ByteString f17566w = ByteString.h("*");

    /* renamed from: x  reason: collision with root package name */
    static final ByteString f17567x = ByteString.f44308p;

    /* renamed from: d  reason: collision with root package name */
    private final BufferedSource f17568d;

    /* renamed from: e  reason: collision with root package name */
    private final Buffer f17569e;

    /* renamed from: i  reason: collision with root package name */
    private final Buffer f17570i;

    /* renamed from: o  reason: collision with root package name */
    private ByteString f17571o;

    /* renamed from: p  reason: collision with root package name */
    private int f17572p;

    /* renamed from: q  reason: collision with root package name */
    private long f17573q = 0;

    /* renamed from: r  reason: collision with root package name */
    private boolean f17574r = false;

    /* JADX INFO: Access modifiers changed from: package-private */
    public r(BufferedSource bufferedSource, Buffer buffer, ByteString byteString, int i10) {
        this.f17568d = bufferedSource;
        this.f17569e = bufferedSource.e();
        this.f17570i = buffer;
        this.f17571o = byteString;
        this.f17572p = i10;
    }

    private void a(long j10) {
        while (true) {
            long j11 = this.f17573q;
            if (j11 < j10) {
                ByteString byteString = this.f17571o;
                ByteString byteString2 = f17567x;
                if (byteString != byteString2) {
                    if (j11 == this.f17569e.size()) {
                        if (this.f17573q <= 0) {
                            this.f17568d.T0(1L);
                        } else {
                            return;
                        }
                    }
                    long F0 = this.f17569e.F0(this.f17571o, this.f17573q);
                    if (F0 == -1) {
                        this.f17573q = this.f17569e.size();
                    } else {
                        byte D0 = this.f17569e.D0(F0);
                        ByteString byteString3 = this.f17571o;
                        ByteString byteString4 = f17562s;
                        if (byteString3 == byteString4) {
                            if (D0 != 34) {
                                if (D0 != 35) {
                                    if (D0 != 39) {
                                        if (D0 != 47) {
                                            if (D0 != 91) {
                                                if (D0 != 93) {
                                                    if (D0 != 123) {
                                                        if (D0 != 125) {
                                                        }
                                                    }
                                                }
                                                int i10 = this.f17572p - 1;
                                                this.f17572p = i10;
                                                if (i10 == 0) {
                                                    this.f17571o = byteString2;
                                                }
                                                this.f17573q = F0 + 1;
                                            }
                                            this.f17572p++;
                                            this.f17573q = F0 + 1;
                                        } else {
                                            long j12 = 2 + F0;
                                            this.f17568d.T0(j12);
                                            long j13 = F0 + 1;
                                            byte D02 = this.f17569e.D0(j13);
                                            if (D02 == 47) {
                                                this.f17571o = f17565v;
                                                this.f17573q = j12;
                                            } else if (D02 == 42) {
                                                this.f17571o = f17566w;
                                                this.f17573q = j12;
                                            } else {
                                                this.f17573q = j13;
                                            }
                                        }
                                    } else {
                                        this.f17571o = f17563t;
                                        this.f17573q = F0 + 1;
                                    }
                                } else {
                                    this.f17571o = f17565v;
                                    this.f17573q = F0 + 1;
                                }
                            } else {
                                this.f17571o = f17564u;
                                this.f17573q = F0 + 1;
                            }
                        } else if (byteString3 != f17563t && byteString3 != f17564u) {
                            if (byteString3 == f17566w) {
                                long j14 = 2 + F0;
                                this.f17568d.T0(j14);
                                long j15 = F0 + 1;
                                if (this.f17569e.D0(j15) == 47) {
                                    this.f17573q = j14;
                                    this.f17571o = byteString4;
                                } else {
                                    this.f17573q = j15;
                                }
                            } else if (byteString3 == f17565v) {
                                this.f17573q = F0 + 1;
                                this.f17571o = byteString4;
                            } else {
                                throw new AssertionError();
                            }
                        } else if (D0 == 92) {
                            long j16 = F0 + 2;
                            this.f17568d.T0(j16);
                            this.f17573q = j16;
                        } else {
                            if (this.f17572p > 0) {
                                byteString2 = byteString4;
                            }
                            this.f17571o = byteString2;
                            this.f17573q = F0 + 1;
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
        this.f17574r = true;
    }

    public void h() {
        this.f17574r = true;
        while (this.f17571o != f17567x) {
            a(8192L);
            this.f17568d.skip(this.f17573q);
        }
    }

    @Override // okio.Source
    public long read(Buffer buffer, long j10) {
        if (!this.f17574r) {
            if (j10 == 0) {
                return 0L;
            }
            if (!this.f17570i.o1()) {
                long read = this.f17570i.read(buffer, j10);
                long j11 = j10 - read;
                if (!this.f17569e.o1()) {
                    long read2 = read(buffer, j11);
                    if (read2 != -1) {
                        return read2 + read;
                    }
                }
                return read;
            }
            a(j10);
            long j12 = this.f17573q;
            if (j12 == 0) {
                if (this.f17571o == f17567x) {
                    return -1L;
                }
                throw new AssertionError();
            }
            long min = Math.min(j10, j12);
            buffer.t0(this.f17569e, min);
            this.f17573q -= min;
            return min;
        }
        throw new IllegalStateException("closed");
    }

    @Override // okio.Source
    public Timeout timeout() {
        return this.f17568d.timeout();
    }
}
