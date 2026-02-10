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
    static final ByteString f18088s = ByteString.h("[]{}\"'/#");

    /* renamed from: t  reason: collision with root package name */
    static final ByteString f18089t = ByteString.h("'\\");

    /* renamed from: u  reason: collision with root package name */
    static final ByteString f18090u = ByteString.h("\"\\");

    /* renamed from: v  reason: collision with root package name */
    static final ByteString f18091v = ByteString.h("\r\n");

    /* renamed from: w  reason: collision with root package name */
    static final ByteString f18092w = ByteString.h("*");

    /* renamed from: x  reason: collision with root package name */
    static final ByteString f18093x = ByteString.f42342p;

    /* renamed from: d  reason: collision with root package name */
    private final BufferedSource f18094d;

    /* renamed from: e  reason: collision with root package name */
    private final Buffer f18095e;

    /* renamed from: i  reason: collision with root package name */
    private final Buffer f18096i;

    /* renamed from: o  reason: collision with root package name */
    private ByteString f18097o;

    /* renamed from: p  reason: collision with root package name */
    private int f18098p;

    /* renamed from: q  reason: collision with root package name */
    private long f18099q = 0;

    /* renamed from: r  reason: collision with root package name */
    private boolean f18100r = false;

    /* JADX INFO: Access modifiers changed from: package-private */
    public r(BufferedSource bufferedSource, Buffer buffer, ByteString byteString, int i10) {
        this.f18094d = bufferedSource;
        this.f18095e = bufferedSource.e();
        this.f18096i = buffer;
        this.f18097o = byteString;
        this.f18098p = i10;
    }

    private void a(long j10) {
        while (true) {
            long j11 = this.f18099q;
            if (j11 < j10) {
                ByteString byteString = this.f18097o;
                ByteString byteString2 = f18093x;
                if (byteString != byteString2) {
                    if (j11 == this.f18095e.size()) {
                        if (this.f18099q <= 0) {
                            this.f18094d.Q0(1L);
                        } else {
                            return;
                        }
                    }
                    long G0 = this.f18095e.G0(this.f18097o, this.f18099q);
                    if (G0 == -1) {
                        this.f18099q = this.f18095e.size();
                    } else {
                        byte Z = this.f18095e.Z(G0);
                        ByteString byteString3 = this.f18097o;
                        ByteString byteString4 = f18088s;
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
                                                int i10 = this.f18098p - 1;
                                                this.f18098p = i10;
                                                if (i10 == 0) {
                                                    this.f18097o = byteString2;
                                                }
                                                this.f18099q = G0 + 1;
                                            }
                                            this.f18098p++;
                                            this.f18099q = G0 + 1;
                                        } else {
                                            long j12 = 2 + G0;
                                            this.f18094d.Q0(j12);
                                            long j13 = G0 + 1;
                                            byte Z2 = this.f18095e.Z(j13);
                                            if (Z2 == 47) {
                                                this.f18097o = f18091v;
                                                this.f18099q = j12;
                                            } else if (Z2 == 42) {
                                                this.f18097o = f18092w;
                                                this.f18099q = j12;
                                            } else {
                                                this.f18099q = j13;
                                            }
                                        }
                                    } else {
                                        this.f18097o = f18089t;
                                        this.f18099q = G0 + 1;
                                    }
                                } else {
                                    this.f18097o = f18091v;
                                    this.f18099q = G0 + 1;
                                }
                            } else {
                                this.f18097o = f18090u;
                                this.f18099q = G0 + 1;
                            }
                        } else if (byteString3 != f18089t && byteString3 != f18090u) {
                            if (byteString3 == f18092w) {
                                long j14 = 2 + G0;
                                this.f18094d.Q0(j14);
                                long j15 = G0 + 1;
                                if (this.f18095e.Z(j15) == 47) {
                                    this.f18099q = j14;
                                    this.f18097o = byteString4;
                                } else {
                                    this.f18099q = j15;
                                }
                            } else if (byteString3 == f18091v) {
                                this.f18099q = G0 + 1;
                                this.f18097o = byteString4;
                            } else {
                                throw new AssertionError();
                            }
                        } else if (Z == 92) {
                            long j16 = G0 + 2;
                            this.f18094d.Q0(j16);
                            this.f18099q = j16;
                        } else {
                            if (this.f18098p > 0) {
                                byteString2 = byteString4;
                            }
                            this.f18097o = byteString2;
                            this.f18099q = G0 + 1;
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
        this.f18100r = true;
    }

    public void g() {
        this.f18100r = true;
        while (this.f18097o != f18093x) {
            a(8192L);
            this.f18094d.skip(this.f18099q);
        }
    }

    @Override // okio.Source
    public long read(Buffer buffer, long j10) {
        if (!this.f18100r) {
            if (j10 == 0) {
                return 0L;
            }
            if (!this.f18096i.k1()) {
                long read = this.f18096i.read(buffer, j10);
                long j11 = j10 - read;
                if (!this.f18095e.k1()) {
                    long read2 = read(buffer, j11);
                    if (read2 != -1) {
                        return read2 + read;
                    }
                }
                return read;
            }
            a(j10);
            long j12 = this.f18099q;
            if (j12 == 0) {
                if (this.f18097o == f18093x) {
                    return -1L;
                }
                throw new AssertionError();
            }
            long min = Math.min(j10, j12);
            buffer.u0(this.f18095e, min);
            this.f18099q -= min;
            return min;
        }
        throw new IllegalStateException("closed");
    }

    @Override // okio.Source
    public Timeout timeout() {
        return this.f18094d.timeout();
    }
}
