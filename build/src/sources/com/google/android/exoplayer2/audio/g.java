package com.google.android.exoplayer2.audio;

import android.media.AudioTimestamp;
import android.media.AudioTrack;
import oe.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class g {

    /* renamed from: a  reason: collision with root package name */
    private final a f12852a;

    /* renamed from: b  reason: collision with root package name */
    private int f12853b;

    /* renamed from: c  reason: collision with root package name */
    private long f12854c;

    /* renamed from: d  reason: collision with root package name */
    private long f12855d;

    /* renamed from: e  reason: collision with root package name */
    private long f12856e;

    /* renamed from: f  reason: collision with root package name */
    private long f12857f;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private final AudioTrack f12858a;

        /* renamed from: b  reason: collision with root package name */
        private final AudioTimestamp f12859b = new AudioTimestamp();

        /* renamed from: c  reason: collision with root package name */
        private long f12860c;

        /* renamed from: d  reason: collision with root package name */
        private long f12861d;

        /* renamed from: e  reason: collision with root package name */
        private long f12862e;

        public a(AudioTrack audioTrack) {
            this.f12858a = audioTrack;
        }

        public long a() {
            return this.f12862e;
        }

        public long b() {
            return this.f12859b.nanoTime / 1000;
        }

        public boolean c() {
            boolean timestamp = this.f12858a.getTimestamp(this.f12859b);
            if (timestamp) {
                long j10 = this.f12859b.framePosition;
                if (this.f12861d > j10) {
                    this.f12860c++;
                }
                this.f12861d = j10;
                this.f12862e = j10 + (this.f12860c << 32);
            }
            return timestamp;
        }
    }

    public g(AudioTrack audioTrack) {
        if (w0.f39037a >= 19) {
            this.f12852a = new a(audioTrack);
            g();
            return;
        }
        this.f12852a = null;
        h(3);
    }

    private void h(int i10) {
        this.f12853b = i10;
        if (i10 != 0) {
            if (i10 != 1) {
                if (i10 != 2 && i10 != 3) {
                    if (i10 == 4) {
                        this.f12855d = 500000L;
                        return;
                    }
                    throw new IllegalStateException();
                }
                this.f12855d = 10000000L;
                return;
            }
            this.f12855d = 10000L;
            return;
        }
        this.f12856e = 0L;
        this.f12857f = -1L;
        this.f12854c = System.nanoTime() / 1000;
        this.f12855d = 10000L;
    }

    public void a() {
        if (this.f12853b == 4) {
            g();
        }
    }

    public long b() {
        a aVar = this.f12852a;
        if (aVar != null) {
            return aVar.a();
        }
        return -1L;
    }

    public long c() {
        a aVar = this.f12852a;
        if (aVar != null) {
            return aVar.b();
        }
        return -9223372036854775807L;
    }

    public boolean d() {
        if (this.f12853b == 2) {
            return true;
        }
        return false;
    }

    public boolean e(long j10) {
        a aVar = this.f12852a;
        if (aVar == null || j10 - this.f12856e < this.f12855d) {
            return false;
        }
        this.f12856e = j10;
        boolean c10 = aVar.c();
        int i10 = this.f12853b;
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
                if (this.f12852a.a() > this.f12857f) {
                    h(2);
                    return c10;
                }
            } else {
                g();
                return c10;
            }
        } else if (c10) {
            if (this.f12852a.b() < this.f12854c) {
                return false;
            }
            this.f12857f = this.f12852a.a();
            h(1);
            return c10;
        } else if (j10 - this.f12854c > 500000) {
            h(3);
        }
        return c10;
    }

    public void f() {
        h(4);
    }

    public void g() {
        if (this.f12852a != null) {
            h(0);
        }
    }
}
