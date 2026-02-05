package com.google.android.exoplayer2.audio;

import android.media.AudioTimestamp;
import android.media.AudioTrack;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class g {

    /* renamed from: a  reason: collision with root package name */
    private final a f12236a;

    /* renamed from: b  reason: collision with root package name */
    private int f12237b;

    /* renamed from: c  reason: collision with root package name */
    private long f12238c;

    /* renamed from: d  reason: collision with root package name */
    private long f12239d;

    /* renamed from: e  reason: collision with root package name */
    private long f12240e;

    /* renamed from: f  reason: collision with root package name */
    private long f12241f;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private final AudioTrack f12242a;

        /* renamed from: b  reason: collision with root package name */
        private final AudioTimestamp f12243b = new AudioTimestamp();

        /* renamed from: c  reason: collision with root package name */
        private long f12244c;

        /* renamed from: d  reason: collision with root package name */
        private long f12245d;

        /* renamed from: e  reason: collision with root package name */
        private long f12246e;

        public a(AudioTrack audioTrack) {
            this.f12242a = audioTrack;
        }

        public long a() {
            return this.f12246e;
        }

        public long b() {
            return this.f12243b.nanoTime / 1000;
        }

        public boolean c() {
            boolean timestamp = this.f12242a.getTimestamp(this.f12243b);
            if (timestamp) {
                long j10 = this.f12243b.framePosition;
                if (this.f12245d > j10) {
                    this.f12244c++;
                }
                this.f12245d = j10;
                this.f12246e = j10 + (this.f12244c << 32);
            }
            return timestamp;
        }
    }

    public g(AudioTrack audioTrack) {
        if (w0.f39657a >= 19) {
            this.f12236a = new a(audioTrack);
            g();
            return;
        }
        this.f12236a = null;
        h(3);
    }

    private void h(int i10) {
        this.f12237b = i10;
        if (i10 != 0) {
            if (i10 != 1) {
                if (i10 != 2 && i10 != 3) {
                    if (i10 == 4) {
                        this.f12239d = 500000L;
                        return;
                    }
                    throw new IllegalStateException();
                }
                this.f12239d = 10000000L;
                return;
            }
            this.f12239d = 10000L;
            return;
        }
        this.f12240e = 0L;
        this.f12241f = -1L;
        this.f12238c = System.nanoTime() / 1000;
        this.f12239d = 10000L;
    }

    public void a() {
        if (this.f12237b == 4) {
            g();
        }
    }

    public long b() {
        a aVar = this.f12236a;
        if (aVar != null) {
            return aVar.a();
        }
        return -1L;
    }

    public long c() {
        a aVar = this.f12236a;
        if (aVar != null) {
            return aVar.b();
        }
        return -9223372036854775807L;
    }

    public boolean d() {
        if (this.f12237b == 2) {
            return true;
        }
        return false;
    }

    public boolean e(long j10) {
        a aVar = this.f12236a;
        if (aVar == null || j10 - this.f12240e < this.f12239d) {
            return false;
        }
        this.f12240e = j10;
        boolean c10 = aVar.c();
        int i10 = this.f12237b;
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
                if (this.f12236a.a() > this.f12241f) {
                    h(2);
                    return c10;
                }
            } else {
                g();
                return c10;
            }
        } else if (c10) {
            if (this.f12236a.b() < this.f12238c) {
                return false;
            }
            this.f12241f = this.f12236a.a();
            h(1);
            return c10;
        } else if (j10 - this.f12238c > 500000) {
            h(3);
        }
        return c10;
    }

    public void f() {
        h(4);
    }

    public void g() {
        if (this.f12236a != null) {
            h(0);
        }
    }
}
