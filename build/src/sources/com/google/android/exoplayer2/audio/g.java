package com.google.android.exoplayer2.audio;

import android.media.AudioTimestamp;
import android.media.AudioTrack;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class g {

    /* renamed from: a  reason: collision with root package name */
    private final a f11851a;

    /* renamed from: b  reason: collision with root package name */
    private int f11852b;

    /* renamed from: c  reason: collision with root package name */
    private long f11853c;

    /* renamed from: d  reason: collision with root package name */
    private long f11854d;

    /* renamed from: e  reason: collision with root package name */
    private long f11855e;

    /* renamed from: f  reason: collision with root package name */
    private long f11856f;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private final AudioTrack f11857a;

        /* renamed from: b  reason: collision with root package name */
        private final AudioTimestamp f11858b = new AudioTimestamp();

        /* renamed from: c  reason: collision with root package name */
        private long f11859c;

        /* renamed from: d  reason: collision with root package name */
        private long f11860d;

        /* renamed from: e  reason: collision with root package name */
        private long f11861e;

        public a(AudioTrack audioTrack) {
            this.f11857a = audioTrack;
        }

        public long a() {
            return this.f11861e;
        }

        public long b() {
            return this.f11858b.nanoTime / 1000;
        }

        public boolean c() {
            boolean timestamp = this.f11857a.getTimestamp(this.f11858b);
            if (timestamp) {
                long j10 = this.f11858b.framePosition;
                if (this.f11860d > j10) {
                    this.f11859c++;
                }
                this.f11860d = j10;
                this.f11861e = j10 + (this.f11859c << 32);
            }
            return timestamp;
        }
    }

    public g(AudioTrack audioTrack) {
        if (w0.f40197a >= 19) {
            this.f11851a = new a(audioTrack);
            g();
            return;
        }
        this.f11851a = null;
        h(3);
    }

    private void h(int i10) {
        this.f11852b = i10;
        if (i10 != 0) {
            if (i10 != 1) {
                if (i10 != 2 && i10 != 3) {
                    if (i10 == 4) {
                        this.f11854d = 500000L;
                        return;
                    }
                    throw new IllegalStateException();
                }
                this.f11854d = 10000000L;
                return;
            }
            this.f11854d = 10000L;
            return;
        }
        this.f11855e = 0L;
        this.f11856f = -1L;
        this.f11853c = System.nanoTime() / 1000;
        this.f11854d = 10000L;
    }

    public void a() {
        if (this.f11852b == 4) {
            g();
        }
    }

    public long b() {
        a aVar = this.f11851a;
        if (aVar != null) {
            return aVar.a();
        }
        return -1L;
    }

    public long c() {
        a aVar = this.f11851a;
        if (aVar != null) {
            return aVar.b();
        }
        return -9223372036854775807L;
    }

    public boolean d() {
        if (this.f11852b == 2) {
            return true;
        }
        return false;
    }

    public boolean e(long j10) {
        a aVar = this.f11851a;
        if (aVar == null || j10 - this.f11855e < this.f11854d) {
            return false;
        }
        this.f11855e = j10;
        boolean c10 = aVar.c();
        int i10 = this.f11852b;
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
                if (this.f11851a.a() > this.f11856f) {
                    h(2);
                    return c10;
                }
            } else {
                g();
                return c10;
            }
        } else if (c10) {
            if (this.f11851a.b() < this.f11853c) {
                return false;
            }
            this.f11856f = this.f11851a.a();
            h(1);
            return c10;
        } else if (j10 - this.f11853c > 500000) {
            h(3);
        }
        return c10;
    }

    public void f() {
        h(4);
    }

    public void g() {
        if (this.f11851a != null) {
            h(0);
        }
    }
}
