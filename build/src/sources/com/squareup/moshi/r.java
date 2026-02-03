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
    static final ByteString f18580s = ByteString.h("[]{}\"'/#");

    /* renamed from: t  reason: collision with root package name */
    static final ByteString f18581t = ByteString.h("'\\");

    /* renamed from: u  reason: collision with root package name */
    static final ByteString f18582u = ByteString.h("\"\\");

    /* renamed from: v  reason: collision with root package name */
    static final ByteString f18583v = ByteString.h("\r\n");

    /* renamed from: w  reason: collision with root package name */
    static final ByteString f18584w = ByteString.h("*");

    /* renamed from: x  reason: collision with root package name */
    static final ByteString f18585x = ByteString.f44508p;

    /* renamed from: d  reason: collision with root package name */
    private final BufferedSource f18586d;

    /* renamed from: e  reason: collision with root package name */
    private final Buffer f18587e;

    /* renamed from: i  reason: collision with root package name */
    private final Buffer f18588i;

    /* renamed from: o  reason: collision with root package name */
    private ByteString f18589o;

    /* renamed from: p  reason: collision with root package name */
    private int f18590p;

    /* renamed from: q  reason: collision with root package name */
    private long f18591q = 0;

    /* renamed from: r  reason: collision with root package name */
    private boolean f18592r = false;

    /* JADX INFO: Access modifiers changed from: package-private */
    public r(BufferedSource bufferedSource, Buffer buffer, ByteString byteString, int i10) {
        this.f18586d = bufferedSource;
        this.f18587e = bufferedSource.e();
        this.f18588i = buffer;
        this.f18589o = byteString;
        this.f18590p = i10;
    }

    private void a(long j10) {
        while (true) {
            long j11 = this.f18591q;
            if (j11 < j10) {
                ByteString byteString = this.f18589o;
                ByteString byteString2 = f18585x;
                if (byteString != byteString2) {
                    if (j11 == this.f18587e.size()) {
                        if (this.f18591q <= 0) {
                            this.f18586d.U0(1L);
                        } else {
                            return;
                        }
                    }
                    long K0 = this.f18587e.K0(this.f18589o, this.f18591q);
                    if (K0 == -1) {
                        this.f18591q = this.f18587e.size();
                    } else {
                        byte G0 = this.f18587e.G0(K0);
                        ByteString byteString3 = this.f18589o;
                        ByteString byteString4 = f18580s;
                        if (byteString3 == byteString4) {
                            if (G0 != 34) {
                                if (G0 != 35) {
                                    if (G0 != 39) {
                                        if (G0 != 47) {
                                            if (G0 != 91) {
                                                if (G0 != 93) {
                                                    if (G0 != 123) {
                                                        if (G0 != 125) {
                                                        }
                                                    }
                                                }
                                                int i10 = this.f18590p - 1;
                                                this.f18590p = i10;
                                                if (i10 == 0) {
                                                    this.f18589o = byteString2;
                                                }
                                                this.f18591q = K0 + 1;
                                            }
                                            this.f18590p++;
                                            this.f18591q = K0 + 1;
                                        } else {
                                            long j12 = 2 + K0;
                                            this.f18586d.U0(j12);
                                            long j13 = K0 + 1;
                                            byte G02 = this.f18587e.G0(j13);
                                            if (G02 == 47) {
                                                this.f18589o = f18583v;
                                                this.f18591q = j12;
                                            } else if (G02 == 42) {
                                                this.f18589o = f18584w;
                                                this.f18591q = j12;
                                            } else {
                                                this.f18591q = j13;
                                            }
                                        }
                                    } else {
                                        this.f18589o = f18581t;
                                        this.f18591q = K0 + 1;
                                    }
                                } else {
                                    this.f18589o = f18583v;
                                    this.f18591q = K0 + 1;
                                }
                            } else {
                                this.f18589o = f18582u;
                                this.f18591q = K0 + 1;
                            }
                        } else if (byteString3 != f18581t && byteString3 != f18582u) {
                            if (byteString3 == f18584w) {
                                long j14 = 2 + K0;
                                this.f18586d.U0(j14);
                                long j15 = K0 + 1;
                                if (this.f18587e.G0(j15) == 47) {
                                    this.f18591q = j14;
                                    this.f18589o = byteString4;
                                } else {
                                    this.f18591q = j15;
                                }
                            } else if (byteString3 == f18583v) {
                                this.f18591q = K0 + 1;
                                this.f18589o = byteString4;
                            } else {
                                throw new AssertionError();
                            }
                        } else if (G0 == 92) {
                            long j16 = K0 + 2;
                            this.f18586d.U0(j16);
                            this.f18591q = j16;
                        } else {
                            if (this.f18590p > 0) {
                                byteString2 = byteString4;
                            }
                            this.f18589o = byteString2;
                            this.f18591q = K0 + 1;
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
        this.f18592r = true;
    }

    public void h() {
        this.f18592r = true;
        while (this.f18589o != f18585x) {
            a(8192L);
            this.f18586d.skip(this.f18591q);
        }
    }

    @Override // okio.Source
    public long read(Buffer buffer, long j10) {
        if (!this.f18592r) {
            if (j10 == 0) {
                return 0L;
            }
            if (!this.f18588i.o1()) {
                long read = this.f18588i.read(buffer, j10);
                long j11 = j10 - read;
                if (!this.f18587e.o1()) {
                    long read2 = read(buffer, j11);
                    if (read2 != -1) {
                        return read2 + read;
                    }
                }
                return read;
            }
            a(j10);
            long j12 = this.f18591q;
            if (j12 == 0) {
                if (this.f18589o == f18585x) {
                    return -1L;
                }
                throw new AssertionError();
            }
            long min = Math.min(j10, j12);
            buffer.v0(this.f18587e, min);
            this.f18591q -= min;
            return min;
        }
        throw new IllegalStateException("closed");
    }

    @Override // okio.Source
    public Timeout timeout() {
        return this.f18586d.timeout();
    }
}
