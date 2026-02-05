package oe;

import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class e {

    /* renamed from: c  reason: collision with root package name */
    private boolean f42389c;

    /* renamed from: d  reason: collision with root package name */
    private boolean f42390d;

    /* renamed from: f  reason: collision with root package name */
    private int f42392f;

    /* renamed from: a  reason: collision with root package name */
    private a f42387a = new a();

    /* renamed from: b  reason: collision with root package name */
    private a f42388b = new a();

    /* renamed from: e  reason: collision with root package name */
    private long f42391e = -9223372036854775807L;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private long f42393a;

        /* renamed from: b  reason: collision with root package name */
        private long f42394b;

        /* renamed from: c  reason: collision with root package name */
        private long f42395c;

        /* renamed from: d  reason: collision with root package name */
        private long f42396d;

        /* renamed from: e  reason: collision with root package name */
        private long f42397e;

        /* renamed from: f  reason: collision with root package name */
        private long f42398f;

        /* renamed from: g  reason: collision with root package name */
        private final boolean[] f42399g = new boolean[15];

        /* renamed from: h  reason: collision with root package name */
        private int f42400h;

        private static int c(long j10) {
            return (int) (j10 % 15);
        }

        public long a() {
            long j10 = this.f42397e;
            if (j10 == 0) {
                return 0L;
            }
            return this.f42398f / j10;
        }

        public long b() {
            return this.f42398f;
        }

        public boolean d() {
            long j10 = this.f42396d;
            if (j10 == 0) {
                return false;
            }
            return this.f42399g[c(j10 - 1)];
        }

        public boolean e() {
            if (this.f42396d > 15 && this.f42400h == 0) {
                return true;
            }
            return false;
        }

        public void f(long j10) {
            long j11 = this.f42396d;
            if (j11 == 0) {
                this.f42393a = j10;
            } else if (j11 == 1) {
                long j12 = j10 - this.f42393a;
                this.f42394b = j12;
                this.f42398f = j12;
                this.f42397e = 1L;
            } else {
                long j13 = j10 - this.f42395c;
                int c10 = c(j11);
                if (Math.abs(j13 - this.f42394b) <= 1000000) {
                    this.f42397e++;
                    this.f42398f += j13;
                    boolean[] zArr = this.f42399g;
                    if (zArr[c10]) {
                        zArr[c10] = false;
                        this.f42400h--;
                    }
                } else {
                    boolean[] zArr2 = this.f42399g;
                    if (!zArr2[c10]) {
                        zArr2[c10] = true;
                        this.f42400h++;
                    }
                }
            }
            this.f42396d++;
            this.f42395c = j10;
        }

        public void g() {
            this.f42396d = 0L;
            this.f42397e = 0L;
            this.f42398f = 0L;
            this.f42400h = 0;
            Arrays.fill(this.f42399g, false);
        }
    }

    public long a() {
        if (e()) {
            return this.f42387a.a();
        }
        return -9223372036854775807L;
    }

    public float b() {
        if (e()) {
            return (float) (1.0E9d / this.f42387a.a());
        }
        return -1.0f;
    }

    public int c() {
        return this.f42392f;
    }

    public long d() {
        if (e()) {
            return this.f42387a.b();
        }
        return -9223372036854775807L;
    }

    public boolean e() {
        return this.f42387a.e();
    }

    public void f(long j10) {
        this.f42387a.f(j10);
        int i10 = 0;
        if (this.f42387a.e() && !this.f42390d) {
            this.f42389c = false;
        } else if (this.f42391e != -9223372036854775807L) {
            if (!this.f42389c || this.f42388b.d()) {
                this.f42388b.g();
                this.f42388b.f(this.f42391e);
            }
            this.f42389c = true;
            this.f42388b.f(j10);
        }
        if (this.f42389c && this.f42388b.e()) {
            a aVar = this.f42387a;
            this.f42387a = this.f42388b;
            this.f42388b = aVar;
            this.f42389c = false;
            this.f42390d = false;
        }
        this.f42391e = j10;
        if (!this.f42387a.e()) {
            i10 = this.f42392f + 1;
        }
        this.f42392f = i10;
    }

    public void g() {
        this.f42387a.g();
        this.f42388b.g();
        this.f42389c = false;
        this.f42391e = -9223372036854775807L;
        this.f42392f = 0;
    }
}
