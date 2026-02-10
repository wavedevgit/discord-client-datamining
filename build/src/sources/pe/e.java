package pe;

import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class e {

    /* renamed from: c  reason: collision with root package name */
    private boolean f43120c;

    /* renamed from: d  reason: collision with root package name */
    private boolean f43121d;

    /* renamed from: f  reason: collision with root package name */
    private int f43123f;

    /* renamed from: a  reason: collision with root package name */
    private a f43118a = new a();

    /* renamed from: b  reason: collision with root package name */
    private a f43119b = new a();

    /* renamed from: e  reason: collision with root package name */
    private long f43122e = -9223372036854775807L;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private long f43124a;

        /* renamed from: b  reason: collision with root package name */
        private long f43125b;

        /* renamed from: c  reason: collision with root package name */
        private long f43126c;

        /* renamed from: d  reason: collision with root package name */
        private long f43127d;

        /* renamed from: e  reason: collision with root package name */
        private long f43128e;

        /* renamed from: f  reason: collision with root package name */
        private long f43129f;

        /* renamed from: g  reason: collision with root package name */
        private final boolean[] f43130g = new boolean[15];

        /* renamed from: h  reason: collision with root package name */
        private int f43131h;

        private static int c(long j10) {
            return (int) (j10 % 15);
        }

        public long a() {
            long j10 = this.f43128e;
            if (j10 == 0) {
                return 0L;
            }
            return this.f43129f / j10;
        }

        public long b() {
            return this.f43129f;
        }

        public boolean d() {
            long j10 = this.f43127d;
            if (j10 == 0) {
                return false;
            }
            return this.f43130g[c(j10 - 1)];
        }

        public boolean e() {
            if (this.f43127d > 15 && this.f43131h == 0) {
                return true;
            }
            return false;
        }

        public void f(long j10) {
            long j11 = this.f43127d;
            if (j11 == 0) {
                this.f43124a = j10;
            } else if (j11 == 1) {
                long j12 = j10 - this.f43124a;
                this.f43125b = j12;
                this.f43129f = j12;
                this.f43128e = 1L;
            } else {
                long j13 = j10 - this.f43126c;
                int c10 = c(j11);
                if (Math.abs(j13 - this.f43125b) <= 1000000) {
                    this.f43128e++;
                    this.f43129f += j13;
                    boolean[] zArr = this.f43130g;
                    if (zArr[c10]) {
                        zArr[c10] = false;
                        this.f43131h--;
                    }
                } else {
                    boolean[] zArr2 = this.f43130g;
                    if (!zArr2[c10]) {
                        zArr2[c10] = true;
                        this.f43131h++;
                    }
                }
            }
            this.f43127d++;
            this.f43126c = j10;
        }

        public void g() {
            this.f43127d = 0L;
            this.f43128e = 0L;
            this.f43129f = 0L;
            this.f43131h = 0;
            Arrays.fill(this.f43130g, false);
        }
    }

    public long a() {
        if (e()) {
            return this.f43118a.a();
        }
        return -9223372036854775807L;
    }

    public float b() {
        if (e()) {
            return (float) (1.0E9d / this.f43118a.a());
        }
        return -1.0f;
    }

    public int c() {
        return this.f43123f;
    }

    public long d() {
        if (e()) {
            return this.f43118a.b();
        }
        return -9223372036854775807L;
    }

    public boolean e() {
        return this.f43118a.e();
    }

    public void f(long j10) {
        this.f43118a.f(j10);
        int i10 = 0;
        if (this.f43118a.e() && !this.f43121d) {
            this.f43120c = false;
        } else if (this.f43122e != -9223372036854775807L) {
            if (!this.f43120c || this.f43119b.d()) {
                this.f43119b.g();
                this.f43119b.f(this.f43122e);
            }
            this.f43120c = true;
            this.f43119b.f(j10);
        }
        if (this.f43120c && this.f43119b.e()) {
            a aVar = this.f43118a;
            this.f43118a = this.f43119b;
            this.f43119b = aVar;
            this.f43120c = false;
            this.f43121d = false;
        }
        this.f43122e = j10;
        if (!this.f43118a.e()) {
            i10 = this.f43123f + 1;
        }
        this.f43123f = i10;
    }

    public void g() {
        this.f43118a.g();
        this.f43119b.g();
        this.f43120c = false;
        this.f43122e = -9223372036854775807L;
        this.f43123f = 0;
    }
}
