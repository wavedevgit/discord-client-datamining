package com.google.android.exoplayer2.audio;

import android.media.AudioTimestamp;
import android.media.AudioTrack;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class g {

    /* renamed from: a  reason: collision with root package name */
    private final a f12883a;

    /* renamed from: b  reason: collision with root package name */
    private int f12884b;

    /* renamed from: c  reason: collision with root package name */
    private long f12885c;

    /* renamed from: d  reason: collision with root package name */
    private long f12886d;

    /* renamed from: e  reason: collision with root package name */
    private long f12887e;

    /* renamed from: f  reason: collision with root package name */
    private long f12888f;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private final AudioTrack f12889a;

        /* renamed from: b  reason: collision with root package name */
        private final AudioTimestamp f12890b = new AudioTimestamp();

        /* renamed from: c  reason: collision with root package name */
        private long f12891c;

        /* renamed from: d  reason: collision with root package name */
        private long f12892d;

        /* renamed from: e  reason: collision with root package name */
        private long f12893e;

        public a(AudioTrack audioTrack) {
            this.f12889a = audioTrack;
        }

        public long a() {
            return this.f12893e;
        }

        public long b() {
            return this.f12890b.nanoTime / 1000;
        }

        public boolean c() {
            boolean timestamp = this.f12889a.getTimestamp(this.f12890b);
            if (timestamp) {
                long j10 = this.f12890b.framePosition;
                if (this.f12892d > j10) {
                    this.f12891c++;
                }
                this.f12892d = j10;
                this.f12893e = j10 + (this.f12891c << 32);
            }
            return timestamp;
        }
    }

    public g(AudioTrack audioTrack) {
        if (w0.f40158a >= 19) {
            this.f12883a = new a(audioTrack);
            g();
            return;
        }
        this.f12883a = null;
        h(3);
    }

    private void h(int i10) {
        this.f12884b = i10;
        if (i10 != 0) {
            if (i10 != 1) {
                if (i10 != 2 && i10 != 3) {
                    if (i10 == 4) {
                        this.f12886d = 500000L;
                        return;
                    }
                    throw new IllegalStateException();
                }
                this.f12886d = 10000000L;
                return;
            }
            this.f12886d = 10000L;
            return;
        }
        this.f12887e = 0L;
        this.f12888f = -1L;
        this.f12885c = System.nanoTime() / 1000;
        this.f12886d = 10000L;
    }

    public void a() {
        if (this.f12884b == 4) {
            g();
        }
    }

    public long b() {
        a aVar = this.f12883a;
        if (aVar != null) {
            return aVar.a();
        }
        return -1L;
    }

    public long c() {
        a aVar = this.f12883a;
        if (aVar != null) {
            return aVar.b();
        }
        return -9223372036854775807L;
    }

    public boolean d() {
        if (this.f12884b == 2) {
            return true;
        }
        return false;
    }

    public boolean e(long j10) {
        a aVar = this.f12883a;
        if (aVar == null || j10 - this.f12887e < this.f12886d) {
            return false;
        }
        this.f12887e = j10;
        boolean c10 = aVar.c();
        int i10 = this.f12884b;
        if (i10 != 0) {
            if (i10 != 1) {
                if (i10 != 2) {
                    if (i10 != 3) {
                        if (i10 != 4) {
                            throw new IllegalStateException();
                        }
                    } else if (c10) {
                        g();
                        return c10;
                    }
                } else if (!c10) {
                    g();
                    return c10;
                }
            } else if (c10) {
                if (this.f12883a.a() > this.f12888f) {
                    h(2);
                    return c10;
                }
            } else {
                g();
                return c10;
            }
        } else if (c10) {
            if (this.f12883a.b() < this.f12885c) {
                return false;
            }
            this.f12888f = this.f12883a.a();
            h(1);
            return c10;
        } else if (j10 - this.f12885c > 500000) {
            h(3);
        }
        return c10;
    }

    public void f() {
        h(4);
    }

    public void g() {
        if (this.f12883a != null) {
            h(0);
        }
    }
}
