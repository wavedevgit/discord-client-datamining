package com.google.android.exoplayer2.audio;

import android.media.AudioTimestamp;
import android.media.AudioTrack;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class g {

    /* renamed from: a  reason: collision with root package name */
    private final a f13254a;

    /* renamed from: b  reason: collision with root package name */
    private int f13255b;

    /* renamed from: c  reason: collision with root package name */
    private long f13256c;

    /* renamed from: d  reason: collision with root package name */
    private long f13257d;

    /* renamed from: e  reason: collision with root package name */
    private long f13258e;

    /* renamed from: f  reason: collision with root package name */
    private long f13259f;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private final AudioTrack f13260a;

        /* renamed from: b  reason: collision with root package name */
        private final AudioTimestamp f13261b = new AudioTimestamp();

        /* renamed from: c  reason: collision with root package name */
        private long f13262c;

        /* renamed from: d  reason: collision with root package name */
        private long f13263d;

        /* renamed from: e  reason: collision with root package name */
        private long f13264e;

        public a(AudioTrack audioTrack) {
            this.f13260a = audioTrack;
        }

        public long a() {
            return this.f13264e;
        }

        public long b() {
            return this.f13261b.nanoTime / 1000;
        }

        public boolean c() {
            boolean timestamp = this.f13260a.getTimestamp(this.f13261b);
            if (timestamp) {
                long j10 = this.f13261b.framePosition;
                if (this.f13263d > j10) {
                    this.f13262c++;
                }
                this.f13263d = j10;
                this.f13264e = j10 + (this.f13262c << 32);
            }
            return timestamp;
        }
    }

    public g(AudioTrack audioTrack) {
        if (w0.f40279a >= 19) {
            this.f13254a = new a(audioTrack);
            g();
            return;
        }
        this.f13254a = null;
        h(3);
    }

    private void h(int i10) {
        this.f13255b = i10;
        if (i10 != 0) {
            if (i10 != 1) {
                if (i10 != 2 && i10 != 3) {
                    if (i10 == 4) {
                        this.f13257d = 500000L;
                        return;
                    }
                    throw new IllegalStateException();
                }
                this.f13257d = 10000000L;
                return;
            }
            this.f13257d = 10000L;
            return;
        }
        this.f13258e = 0L;
        this.f13259f = -1L;
        this.f13256c = System.nanoTime() / 1000;
        this.f13257d = 10000L;
    }

    public void a() {
        if (this.f13255b == 4) {
            g();
        }
    }

    public long b() {
        a aVar = this.f13254a;
        if (aVar != null) {
            return aVar.a();
        }
        return -1L;
    }

    public long c() {
        a aVar = this.f13254a;
        if (aVar != null) {
            return aVar.b();
        }
        return -9223372036854775807L;
    }

    public boolean d() {
        if (this.f13255b == 2) {
            return true;
        }
        return false;
    }

    public boolean e(long j10) {
        a aVar = this.f13254a;
        if (aVar == null || j10 - this.f13258e < this.f13257d) {
            return false;
        }
        this.f13258e = j10;
        boolean c10 = aVar.c();
        int i10 = this.f13255b;
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
                if (this.f13254a.a() > this.f13259f) {
                    h(2);
                    return c10;
                }
            } else {
                g();
                return c10;
            }
        } else if (c10) {
            if (this.f13254a.b() < this.f13256c) {
                return false;
            }
            this.f13259f = this.f13254a.a();
            h(1);
            return c10;
        } else if (j10 - this.f13256c > 500000) {
            h(3);
        }
        return c10;
    }

    public void f() {
        h(4);
    }

    public void g() {
        if (this.f13254a != null) {
            h(0);
        }
    }
}
