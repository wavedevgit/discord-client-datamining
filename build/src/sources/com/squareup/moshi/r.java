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
    static final ByteString f17948s = ByteString.h("[]{}\"'/#");

    /* renamed from: t  reason: collision with root package name */
    static final ByteString f17949t = ByteString.h("'\\");

    /* renamed from: u  reason: collision with root package name */
    static final ByteString f17950u = ByteString.h("\"\\");

    /* renamed from: v  reason: collision with root package name */
    static final ByteString f17951v = ByteString.h("\r\n");

    /* renamed from: w  reason: collision with root package name */
    static final ByteString f17952w = ByteString.h("*");

    /* renamed from: x  reason: collision with root package name */
    static final ByteString f17953x = ByteString.f43215p;

    /* renamed from: d  reason: collision with root package name */
    private final BufferedSource f17954d;

    /* renamed from: e  reason: collision with root package name */
    private final Buffer f17955e;

    /* renamed from: i  reason: collision with root package name */
    private final Buffer f17956i;

    /* renamed from: o  reason: collision with root package name */
    private ByteString f17957o;

    /* renamed from: p  reason: collision with root package name */
    private int f17958p;

    /* renamed from: q  reason: collision with root package name */
    private long f17959q = 0;

    /* renamed from: r  reason: collision with root package name */
    private boolean f17960r = false;

    /* JADX INFO: Access modifiers changed from: package-private */
    public r(BufferedSource bufferedSource, Buffer buffer, ByteString byteString, int i10) {
        this.f17954d = bufferedSource;
        this.f17955e = bufferedSource.e();
        this.f17956i = buffer;
        this.f17957o = byteString;
        this.f17958p = i10;
    }

    private void a(long j10) {
        while (true) {
            long j11 = this.f17959q;
            if (j11 < j10) {
                ByteString byteString = this.f17957o;
                ByteString byteString2 = f17953x;
                if (byteString != byteString2) {
                    if (j11 == this.f17955e.size()) {
                        if (this.f17959q <= 0) {
                            this.f17954d.U0(1L);
                        } else {
                            return;
                        }
                    }
                    long I0 = this.f17955e.I0(this.f17957o, this.f17959q);
                    if (I0 == -1) {
                        this.f17959q = this.f17955e.size();
                    } else {
                        byte Y = this.f17955e.Y(I0);
                        ByteString byteString3 = this.f17957o;
                        ByteString byteString4 = f17948s;
                        if (byteString3 == byteString4) {
                            if (Y != 34) {
                                if (Y != 35) {
                                    if (Y != 39) {
                                        if (Y != 47) {
                                            if (Y != 91) {
                                                if (Y != 93) {
                                                    if (Y != 123) {
                                                        if (Y != 125) {
                                                        }
                                                    }
                                                }
                                                int i10 = this.f17958p - 1;
                                                this.f17958p = i10;
                                                if (i10 == 0) {
                                                    this.f17957o = byteString2;
                                                }
                                                this.f17959q = I0 + 1;
                                            }
                                            this.f17958p++;
                                            this.f17959q = I0 + 1;
                                        } else {
                                            long j12 = 2 + I0;
                                            this.f17954d.U0(j12);
                                            long j13 = I0 + 1;
                                            byte Y2 = this.f17955e.Y(j13);
                                            if (Y2 == 47) {
                                                this.f17957o = f17951v;
                                                this.f17959q = j12;
                                            } else if (Y2 == 42) {
                                                this.f17957o = f17952w;
                                                this.f17959q = j12;
                                            } else {
                                                this.f17959q = j13;
                                            }
                                        }
                                    } else {
                                        this.f17957o = f17949t;
                                        this.f17959q = I0 + 1;
                                    }
                                } else {
                                    this.f17957o = f17951v;
                                    this.f17959q = I0 + 1;
                                }
                            } else {
                                this.f17957o = f17950u;
                                this.f17959q = I0 + 1;
                            }
                        } else if (byteString3 != f17949t && byteString3 != f17950u) {
                            if (byteString3 == f17952w) {
                                long j14 = 2 + I0;
                                this.f17954d.U0(j14);
                                long j15 = I0 + 1;
                                if (this.f17955e.Y(j15) == 47) {
                                    this.f17959q = j14;
                                    this.f17957o = byteString4;
                                } else {
                                    this.f17959q = j15;
                                }
                            } else if (byteString3 == f17951v) {
                                this.f17959q = I0 + 1;
                                this.f17957o = byteString4;
                            } else {
                                throw new AssertionError();
                            }
                        } else if (Y == 92) {
                            long j16 = I0 + 2;
                            this.f17954d.U0(j16);
                            this.f17959q = j16;
                        } else {
                            if (this.f17958p > 0) {
                                byteString2 = byteString4;
                            }
                            this.f17957o = byteString2;
                            this.f17959q = I0 + 1;
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
        this.f17960r = true;
    }

    public void g() {
        this.f17960r = true;
        while (this.f17957o != f17953x) {
            a(8192L);
            this.f17954d.skip(this.f17959q);
        }
    }

    @Override // okio.Source
    public long read(Buffer buffer, long j10) {
        if (!this.f17960r) {
            if (j10 == 0) {
                return 0L;
            }
            if (!this.f17956i.n1()) {
                long read = this.f17956i.read(buffer, j10);
                long j11 = j10 - read;
                if (!this.f17955e.n1()) {
                    long read2 = read(buffer, j11);
                    if (read2 != -1) {
                        return read2 + read;
                    }
                }
                return read;
            }
            a(j10);
            long j12 = this.f17959q;
            if (j12 == 0) {
                if (this.f17957o == f17953x) {
                    return -1L;
                }
                throw new AssertionError();
            }
            long min = Math.min(j10, j12);
            buffer.w0(this.f17955e, min);
            this.f17959q -= min;
            return min;
        }
        throw new IllegalStateException("closed");
    }

    @Override // okio.Source
    public Timeout timeout() {
        return this.f17954d.timeout();
    }
}
