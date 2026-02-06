package com.google.android.exoplayer2.audio;

import android.media.AudioTimestamp;
import android.media.AudioTrack;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class g {

    /* renamed from: a  reason: collision with root package name */
    private final a f12135a;

    /* renamed from: b  reason: collision with root package name */
    private int f12136b;

    /* renamed from: c  reason: collision with root package name */
    private long f12137c;

    /* renamed from: d  reason: collision with root package name */
    private long f12138d;

    /* renamed from: e  reason: collision with root package name */
    private long f12139e;

    /* renamed from: f  reason: collision with root package name */
    private long f12140f;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private final AudioTrack f12141a;

        /* renamed from: b  reason: collision with root package name */
        private final AudioTimestamp f12142b = new AudioTimestamp();

        /* renamed from: c  reason: collision with root package name */
        private long f12143c;

        /* renamed from: d  reason: collision with root package name */
        private long f12144d;

        /* renamed from: e  reason: collision with root package name */
        private long f12145e;

        public a(AudioTrack audioTrack) {
            this.f12141a = audioTrack;
        }

        public long a() {
            return this.f12145e;
        }

        public long b() {
            return this.f12142b.nanoTime / 1000;
        }

        public boolean c() {
            boolean timestamp = this.f12141a.getTimestamp(this.f12142b);
            if (timestamp) {
                long j10 = this.f12142b.framePosition;
                if (this.f12144d > j10) {
                    this.f12143c++;
                }
                this.f12144d = j10;
                this.f12145e = j10 + (this.f12143c << 32);
            }
            return timestamp;
        }
    }

    public g(AudioTrack audioTrack) {
        if (w0.f39012a >= 19) {
            this.f12135a = new a(audioTrack);
            g();
            return;
        }
        this.f12135a = null;
        h(3);
    }

    private void h(int i10) {
        this.f12136b = i10;
        if (i10 != 0) {
            if (i10 != 1) {
                if (i10 != 2 && i10 != 3) {
                    if (i10 == 4) {
                        this.f12138d = 500000L;
                        return;
                    }
                    throw new IllegalStateException();
                }
                this.f12138d = 10000000L;
                return;
            }
            this.f12138d = 10000L;
            return;
        }
        this.f12139e = 0L;
        this.f12140f = -1L;
        this.f12137c = System.nanoTime() / 1000;
        this.f12138d = 10000L;
    }

    public void a() {
        if (this.f12136b == 4) {
            g();
        }
    }

    public long b() {
        a aVar = this.f12135a;
        if (aVar != null) {
            return aVar.a();
        }
        return -1L;
    }

    public long c() {
        a aVar = this.f12135a;
        if (aVar != null) {
            return aVar.b();
        }
        return -9223372036854775807L;
    }

    public boolean d() {
        if (this.f12136b == 2) {
            return true;
        }
        return false;
    }

    public boolean e(long j10) {
        a aVar = this.f12135a;
        if (aVar == null || j10 - this.f12139e < this.f12138d) {
            return false;
        }
        this.f12139e = j10;
        boolean c10 = aVar.c();
        int i10 = this.f12136b;
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
                if (this.f12135a.a() > this.f12140f) {
                    h(2);
                    return c10;
                }
            } else {
                g();
                return c10;
            }
        } else if (c10) {
            if (this.f12135a.b() < this.f12137c) {
                return false;
            }
            this.f12140f = this.f12135a.a();
            h(1);
            return c10;
        } else if (j10 - this.f12137c > 500000) {
            h(3);
        }
        return c10;
    }

    public void f() {
        h(4);
    }

    public void g() {
        if (this.f12135a != null) {
            h(0);
        }
    }
}
