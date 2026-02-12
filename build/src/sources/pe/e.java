package pe;

import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class e {

    /* renamed from: c  reason: collision with root package name */
    private boolean f41579c;

    /* renamed from: d  reason: collision with root package name */
    private boolean f41580d;

    /* renamed from: f  reason: collision with root package name */
    private int f41582f;

    /* renamed from: a  reason: collision with root package name */
    private a f41577a = new a();

    /* renamed from: b  reason: collision with root package name */
    private a f41578b = new a();

    /* renamed from: e  reason: collision with root package name */
    private long f41581e = -9223372036854775807L;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private long f41583a;

        /* renamed from: b  reason: collision with root package name */
        private long f41584b;

        /* renamed from: c  reason: collision with root package name */
        private long f41585c;

        /* renamed from: d  reason: collision with root package name */
        private long f41586d;

        /* renamed from: e  reason: collision with root package name */
        private long f41587e;

        /* renamed from: f  reason: collision with root package name */
        private long f41588f;

        /* renamed from: g  reason: collision with root package name */
        private final boolean[] f41589g = new boolean[15];

        /* renamed from: h  reason: collision with root package name */
        private int f41590h;

        private static int c(long j10) {
            return (int) (j10 % 15);
        }

        public long a() {
            long j10 = this.f41587e;
            if (j10 == 0) {
                return 0L;
            }
            return this.f41588f / j10;
        }

        public long b() {
            return this.f41588f;
        }

        public boolean d() {
            long j10 = this.f41586d;
            if (j10 == 0) {
                return false;
            }
            return this.f41589g[c(j10 - 1)];
        }

        public boolean e() {
            if (this.f41586d > 15 && this.f41590h == 0) {
                return true;
            }
            return false;
        }

        public void f(long j10) {
            long j11 = this.f41586d;
            if (j11 == 0) {
                this.f41583a = j10;
            } else if (j11 == 1) {
                long j12 = j10 - this.f41583a;
                this.f41584b = j12;
                this.f41588f = j12;
                this.f41587e = 1L;
            } else {
                long j13 = j10 - this.f41585c;
                int c10 = c(j11);
                if (Math.abs(j13 - this.f41584b) <= 1000000) {
                    this.f41587e++;
                    this.f41588f += j13;
                    boolean[] zArr = this.f41589g;
                    if (zArr[c10]) {
                        zArr[c10] = false;
                        this.f41590h--;
                    }
                } else {
                    boolean[] zArr2 = this.f41589g;
                    if (!zArr2[c10]) {
                        zArr2[c10] = true;
                        this.f41590h++;
                    }
                }
            }
            this.f41586d++;
            this.f41585c = j10;
        }

        public void g() {
            this.f41586d = 0L;
            this.f41587e = 0L;
            this.f41588f = 0L;
            this.f41590h = 0;
            Arrays.fill(this.f41589g, false);
        }
    }

    public long a() {
        if (e()) {
            return this.f41577a.a();
        }
        return -9223372036854775807L;
    }

    public float b() {
        if (e()) {
            return (float) (1.0E9d / this.f41577a.a());
        }
        return -1.0f;
    }

    public int c() {
        return this.f41582f;
    }

    public long d() {
        if (e()) {
            return this.f41577a.b();
        }
        return -9223372036854775807L;
    }

    public boolean e() {
        return this.f41577a.e();
    }

    public void f(long j10) {
        this.f41577a.f(j10);
        int i10 = 0;
        if (this.f41577a.e() && !this.f41580d) {
            this.f41579c = false;
        } else if (this.f41581e != -9223372036854775807L) {
            if (!this.f41579c || this.f41578b.d()) {
                this.f41578b.g();
                this.f41578b.f(this.f41581e);
            }
            this.f41579c = true;
            this.f41578b.f(j10);
        }
        if (this.f41579c && this.f41578b.e()) {
            a aVar = this.f41577a;
            this.f41577a = this.f41578b;
            this.f41578b = aVar;
            this.f41579c = false;
            this.f41580d = false;
        }
        this.f41581e = j10;
        if (!this.f41577a.e()) {
            i10 = this.f41582f + 1;
        }
        this.f41582f = i10;
    }

    public void g() {
        this.f41577a.g();
        this.f41578b.g();
        this.f41579c = false;
        this.f41581e = -9223372036854775807L;
        this.f41582f = 0;
    }
}
