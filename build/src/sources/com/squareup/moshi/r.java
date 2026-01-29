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
    static final ByteString f18947s = ByteString.h("[]{}\"'/#");

    /* renamed from: t  reason: collision with root package name */
    static final ByteString f18948t = ByteString.h("'\\");

    /* renamed from: u  reason: collision with root package name */
    static final ByteString f18949u = ByteString.h("\"\\");

    /* renamed from: v  reason: collision with root package name */
    static final ByteString f18950v = ByteString.h("\r\n");

    /* renamed from: w  reason: collision with root package name */
    static final ByteString f18951w = ByteString.h("*");

    /* renamed from: x  reason: collision with root package name */
    static final ByteString f18952x = ByteString.f44364p;

    /* renamed from: d  reason: collision with root package name */
    private final BufferedSource f18953d;

    /* renamed from: e  reason: collision with root package name */
    private final Buffer f18954e;

    /* renamed from: i  reason: collision with root package name */
    private final Buffer f18955i;

    /* renamed from: o  reason: collision with root package name */
    private ByteString f18956o;

    /* renamed from: p  reason: collision with root package name */
    private int f18957p;

    /* renamed from: q  reason: collision with root package name */
    private long f18958q = 0;

    /* renamed from: r  reason: collision with root package name */
    private boolean f18959r = false;

    /* JADX INFO: Access modifiers changed from: package-private */
    public r(BufferedSource bufferedSource, Buffer buffer, ByteString byteString, int i10) {
        this.f18953d = bufferedSource;
        this.f18954e = bufferedSource.e();
        this.f18955i = buffer;
        this.f18956o = byteString;
        this.f18957p = i10;
    }

    private void a(long j10) {
        while (true) {
            long j11 = this.f18958q;
            if (j11 < j10) {
                ByteString byteString = this.f18956o;
                ByteString byteString2 = f18952x;
                if (byteString != byteString2) {
                    if (j11 == this.f18954e.size()) {
                        if (this.f18958q <= 0) {
                            this.f18953d.T0(1L);
                        } else {
                            return;
                        }
                    }
                    long I0 = this.f18954e.I0(this.f18956o, this.f18958q);
                    if (I0 == -1) {
                        this.f18958q = this.f18954e.size();
                    } else {
                        byte E0 = this.f18954e.E0(I0);
                        ByteString byteString3 = this.f18956o;
                        ByteString byteString4 = f18947s;
                        if (byteString3 == byteString4) {
                            if (E0 != 34) {
                                if (E0 != 35) {
                                    if (E0 != 39) {
                                        if (E0 != 47) {
                                            if (E0 != 91) {
                                                if (E0 != 93) {
                                                    if (E0 != 123) {
                                                        if (E0 != 125) {
                                                        }
                                                    }
                                                }
                                                int i10 = this.f18957p - 1;
                                                this.f18957p = i10;
                                                if (i10 == 0) {
                                                    this.f18956o = byteString2;
                                                }
                                                this.f18958q = I0 + 1;
                                            }
                                            this.f18957p++;
                                            this.f18958q = I0 + 1;
                                        } else {
                                            long j12 = 2 + I0;
                                            this.f18953d.T0(j12);
                                            long j13 = I0 + 1;
                                            byte E02 = this.f18954e.E0(j13);
                                            if (E02 == 47) {
                                                this.f18956o = f18950v;
                                                this.f18958q = j12;
                                            } else if (E02 == 42) {
                                                this.f18956o = f18951w;
                                                this.f18958q = j12;
                                            } else {
                                                this.f18958q = j13;
                                            }
                                        }
                                    } else {
                                        this.f18956o = f18948t;
                                        this.f18958q = I0 + 1;
                                    }
                                } else {
                                    this.f18956o = f18950v;
                                    this.f18958q = I0 + 1;
                                }
                            } else {
                                this.f18956o = f18949u;
                                this.f18958q = I0 + 1;
                            }
                        } else if (byteString3 != f18948t && byteString3 != f18949u) {
                            if (byteString3 == f18951w) {
                                long j14 = 2 + I0;
                                this.f18953d.T0(j14);
                                long j15 = I0 + 1;
                                if (this.f18954e.E0(j15) == 47) {
                                    this.f18958q = j14;
                                    this.f18956o = byteString4;
                                } else {
                                    this.f18958q = j15;
                                }
                            } else if (byteString3 == f18950v) {
                                this.f18958q = I0 + 1;
                                this.f18956o = byteString4;
                            } else {
                                throw new AssertionError();
                            }
                        } else if (E0 == 92) {
                            long j16 = I0 + 2;
                            this.f18953d.T0(j16);
                            this.f18958q = j16;
                        } else {
                            if (this.f18957p > 0) {
                                byteString2 = byteString4;
                            }
                            this.f18956o = byteString2;
                            this.f18958q = I0 + 1;
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
        this.f18959r = true;
    }

    public void h() {
        this.f18959r = true;
        while (this.f18956o != f18952x) {
            a(8192L);
            this.f18953d.skip(this.f18958q);
        }
    }

    @Override // okio.Source
    public long read(Buffer buffer, long j10) {
        if (!this.f18959r) {
            if (j10 == 0) {
                return 0L;
            }
            if (!this.f18955i.o1()) {
                long read = this.f18955i.read(buffer, j10);
                long j11 = j10 - read;
                if (!this.f18954e.o1()) {
                    long read2 = read(buffer, j11);
                    if (read2 != -1) {
                        return read2 + read;
                    }
                }
                return read;
            }
            a(j10);
            long j12 = this.f18958q;
            if (j12 == 0) {
                if (this.f18956o == f18952x) {
                    return -1L;
                }
                throw new AssertionError();
            }
            long min = Math.min(j10, j12);
            buffer.t0(this.f18954e, min);
            this.f18958q -= min;
            return min;
        }
        throw new IllegalStateException("closed");
    }

    @Override // okio.Source
    public Timeout timeout() {
        return this.f18953d.timeout();
    }
}
