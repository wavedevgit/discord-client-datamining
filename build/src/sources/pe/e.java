package pe;

import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class e {

    /* renamed from: c  reason: collision with root package name */
    private boolean f41578c;

    /* renamed from: d  reason: collision with root package name */
    private boolean f41579d;

    /* renamed from: f  reason: collision with root package name */
    private int f41581f;

    /* renamed from: a  reason: collision with root package name */
    private a f41576a = new a();

    /* renamed from: b  reason: collision with root package name */
    private a f41577b = new a();

    /* renamed from: e  reason: collision with root package name */
    private long f41580e = -9223372036854775807L;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private long f41582a;

        /* renamed from: b  reason: collision with root package name */
        private long f41583b;

        /* renamed from: c  reason: collision with root package name */
        private long f41584c;

        /* renamed from: d  reason: collision with root package name */
        private long f41585d;

        /* renamed from: e  reason: collision with root package name */
        private long f41586e;

        /* renamed from: f  reason: collision with root package name */
        private long f41587f;

        /* renamed from: g  reason: collision with root package name */
        private final boolean[] f41588g = new boolean[15];

        /* renamed from: h  reason: collision with root package name */
        private int f41589h;

        private static int c(long j10) {
            return (int) (j10 % 15);
        }

        public long a() {
            long j10 = this.f41586e;
            if (j10 == 0) {
                return 0L;
            }
            return this.f41587f / j10;
        }

        public long b() {
            return this.f41587f;
        }

        public boolean d() {
            long j10 = this.f41585d;
            if (j10 == 0) {
                return false;
            }
            return this.f41588g[c(j10 - 1)];
        }

        public boolean e() {
            if (this.f41585d > 15 && this.f41589h == 0) {
                return true;
            }
            return false;
        }

        public void f(long j10) {
            long j11 = this.f41585d;
            if (j11 == 0) {
                this.f41582a = j10;
            } else if (j11 == 1) {
                long j12 = j10 - this.f41582a;
                this.f41583b = j12;
                this.f41587f = j12;
                this.f41586e = 1L;
            } else {
                long j13 = j10 - this.f41584c;
                int c10 = c(j11);
                if (Math.abs(j13 - this.f41583b) <= 1000000) {
                    this.f41586e++;
                    this.f41587f += j13;
                    boolean[] zArr = this.f41588g;
                    if (zArr[c10]) {
                        zArr[c10] = false;
                        this.f41589h--;
                    }
                } else {
                    boolean[] zArr2 = this.f41588g;
                    if (!zArr2[c10]) {
                        zArr2[c10] = true;
                        this.f41589h++;
                    }
                }
            }
            this.f41585d++;
            this.f41584c = j10;
        }

        public void g() {
            this.f41585d = 0L;
            this.f41586e = 0L;
            this.f41587f = 0L;
            this.f41589h = 0;
            Arrays.fill(this.f41588g, false);
        }
    }

    public long a() {
        if (e()) {
            return this.f41576a.a();
        }
        return -9223372036854775807L;
    }

    public float b() {
        if (e()) {
            return (float) (1.0E9d / this.f41576a.a());
        }
        return -1.0f;
    }

    public int c() {
        return this.f41581f;
    }

    public long d() {
        if (e()) {
            return this.f41576a.b();
        }
        return -9223372036854775807L;
    }

    public boolean e() {
        return this.f41576a.e();
    }

    public void f(long j10) {
        this.f41576a.f(j10);
        int i10 = 0;
        if (this.f41576a.e() && !this.f41579d) {
            this.f41578c = false;
        } else if (this.f41580e != -9223372036854775807L) {
            if (!this.f41578c || this.f41577b.d()) {
                this.f41577b.g();
                this.f41577b.f(this.f41580e);
            }
            this.f41578c = true;
            this.f41577b.f(j10);
        }
        if (this.f41578c && this.f41577b.e()) {
            a aVar = this.f41576a;
            this.f41576a = this.f41577b;
            this.f41577b = aVar;
            this.f41578c = false;
            this.f41579d = false;
        }
        this.f41580e = j10;
        if (!this.f41576a.e()) {
            i10 = this.f41581f + 1;
        }
        this.f41581f = i10;
    }

    public void g() {
        this.f41576a.g();
        this.f41577b.g();
        this.f41578c = false;
        this.f41580e = -9223372036854775807L;
        this.f41581f = 0;
    }
}
