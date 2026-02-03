package oe;

import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class e {

    /* renamed from: c  reason: collision with root package name */
    private boolean f42683c;

    /* renamed from: d  reason: collision with root package name */
    private boolean f42684d;

    /* renamed from: f  reason: collision with root package name */
    private int f42686f;

    /* renamed from: a  reason: collision with root package name */
    private a f42681a = new a();

    /* renamed from: b  reason: collision with root package name */
    private a f42682b = new a();

    /* renamed from: e  reason: collision with root package name */
    private long f42685e = -9223372036854775807L;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private long f42687a;

        /* renamed from: b  reason: collision with root package name */
        private long f42688b;

        /* renamed from: c  reason: collision with root package name */
        private long f42689c;

        /* renamed from: d  reason: collision with root package name */
        private long f42690d;

        /* renamed from: e  reason: collision with root package name */
        private long f42691e;

        /* renamed from: f  reason: collision with root package name */
        private long f42692f;

        /* renamed from: g  reason: collision with root package name */
        private final boolean[] f42693g = new boolean[15];

        /* renamed from: h  reason: collision with root package name */
        private int f42694h;

        private static int c(long j10) {
            return (int) (j10 % 15);
        }

        public long a() {
            long j10 = this.f42691e;
            if (j10 == 0) {
                return 0L;
            }
            return this.f42692f / j10;
        }

        public long b() {
            return this.f42692f;
        }

        public boolean d() {
            long j10 = this.f42690d;
            if (j10 == 0) {
                return false;
            }
            return this.f42693g[c(j10 - 1)];
        }

        public boolean e() {
            if (this.f42690d > 15 && this.f42694h == 0) {
                return true;
            }
            return false;
        }

        public void f(long j10) {
            long j11 = this.f42690d;
            if (j11 == 0) {
                this.f42687a = j10;
            } else if (j11 == 1) {
                long j12 = j10 - this.f42687a;
                this.f42688b = j12;
                this.f42692f = j12;
                this.f42691e = 1L;
            } else {
                long j13 = j10 - this.f42689c;
                int c10 = c(j11);
                if (Math.abs(j13 - this.f42688b) <= 1000000) {
                    this.f42691e++;
                    this.f42692f += j13;
                    boolean[] zArr = this.f42693g;
                    if (zArr[c10]) {
                        zArr[c10] = false;
                        this.f42694h--;
                    }
                } else {
                    boolean[] zArr2 = this.f42693g;
                    if (!zArr2[c10]) {
                        zArr2[c10] = true;
                        this.f42694h++;
                    }
                }
            }
            this.f42690d++;
            this.f42689c = j10;
        }

        public void g() {
            this.f42690d = 0L;
            this.f42691e = 0L;
            this.f42692f = 0L;
            this.f42694h = 0;
            Arrays.fill(this.f42693g, false);
        }
    }

    public long a() {
        if (e()) {
            return this.f42681a.a();
        }
        return -9223372036854775807L;
    }

    public float b() {
        if (e()) {
            return (float) (1.0E9d / this.f42681a.a());
        }
        return -1.0f;
    }

    public int c() {
        return this.f42686f;
    }

    public long d() {
        if (e()) {
            return this.f42681a.b();
        }
        return -9223372036854775807L;
    }

    public boolean e() {
        return this.f42681a.e();
    }

    public void f(long j10) {
        this.f42681a.f(j10);
        int i10 = 0;
        if (this.f42681a.e() && !this.f42684d) {
            this.f42683c = false;
        } else if (this.f42685e != -9223372036854775807L) {
            if (!this.f42683c || this.f42682b.d()) {
                this.f42682b.g();
                this.f42682b.f(this.f42685e);
            }
            this.f42683c = true;
            this.f42682b.f(j10);
        }
        if (this.f42683c && this.f42682b.e()) {
            a aVar = this.f42681a;
            this.f42681a = this.f42682b;
            this.f42682b = aVar;
            this.f42683c = false;
            this.f42684d = false;
        }
        this.f42685e = j10;
        if (!this.f42681a.e()) {
            i10 = this.f42686f + 1;
        }
        this.f42686f = i10;
    }

    public void g() {
        this.f42681a.g();
        this.f42682b.g();
        this.f42683c = false;
        this.f42685e = -9223372036854775807L;
        this.f42686f = 0;
    }
}
