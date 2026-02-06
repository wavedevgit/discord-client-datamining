package oe;

import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class e {

    /* renamed from: c  reason: collision with root package name */
    private boolean f41612c;

    /* renamed from: d  reason: collision with root package name */
    private boolean f41613d;

    /* renamed from: f  reason: collision with root package name */
    private int f41615f;

    /* renamed from: a  reason: collision with root package name */
    private a f41610a = new a();

    /* renamed from: b  reason: collision with root package name */
    private a f41611b = new a();

    /* renamed from: e  reason: collision with root package name */
    private long f41614e = -9223372036854775807L;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private long f41616a;

        /* renamed from: b  reason: collision with root package name */
        private long f41617b;

        /* renamed from: c  reason: collision with root package name */
        private long f41618c;

        /* renamed from: d  reason: collision with root package name */
        private long f41619d;

        /* renamed from: e  reason: collision with root package name */
        private long f41620e;

        /* renamed from: f  reason: collision with root package name */
        private long f41621f;

        /* renamed from: g  reason: collision with root package name */
        private final boolean[] f41622g = new boolean[15];

        /* renamed from: h  reason: collision with root package name */
        private int f41623h;

        private static int c(long j10) {
            return (int) (j10 % 15);
        }

        public long a() {
            long j10 = this.f41620e;
            if (j10 == 0) {
                return 0L;
            }
            return this.f41621f / j10;
        }

        public long b() {
            return this.f41621f;
        }

        public boolean d() {
            long j10 = this.f41619d;
            if (j10 == 0) {
                return false;
            }
            return this.f41622g[c(j10 - 1)];
        }

        public boolean e() {
            if (this.f41619d > 15 && this.f41623h == 0) {
                return true;
            }
            return false;
        }

        public void f(long j10) {
            long j11 = this.f41619d;
            if (j11 == 0) {
                this.f41616a = j10;
            } else if (j11 == 1) {
                long j12 = j10 - this.f41616a;
                this.f41617b = j12;
                this.f41621f = j12;
                this.f41620e = 1L;
            } else {
                long j13 = j10 - this.f41618c;
                int c10 = c(j11);
                if (Math.abs(j13 - this.f41617b) <= 1000000) {
                    this.f41620e++;
                    this.f41621f += j13;
                    boolean[] zArr = this.f41622g;
                    if (zArr[c10]) {
                        zArr[c10] = false;
                        this.f41623h--;
                    }
                } else {
                    boolean[] zArr2 = this.f41622g;
                    if (!zArr2[c10]) {
                        zArr2[c10] = true;
                        this.f41623h++;
                    }
                }
            }
            this.f41619d++;
            this.f41618c = j10;
        }

        public void g() {
            this.f41619d = 0L;
            this.f41620e = 0L;
            this.f41621f = 0L;
            this.f41623h = 0;
            Arrays.fill(this.f41622g, false);
        }
    }

    public long a() {
        if (e()) {
            return this.f41610a.a();
        }
        return -9223372036854775807L;
    }

    public float b() {
        if (e()) {
            return (float) (1.0E9d / this.f41610a.a());
        }
        return -1.0f;
    }

    public int c() {
        return this.f41615f;
    }

    public long d() {
        if (e()) {
            return this.f41610a.b();
        }
        return -9223372036854775807L;
    }

    public boolean e() {
        return this.f41610a.e();
    }

    public void f(long j10) {
        this.f41610a.f(j10);
        int i10 = 0;
        if (this.f41610a.e() && !this.f41613d) {
            this.f41612c = false;
        } else if (this.f41614e != -9223372036854775807L) {
            if (!this.f41612c || this.f41611b.d()) {
                this.f41611b.g();
                this.f41611b.f(this.f41614e);
            }
            this.f41612c = true;
            this.f41611b.f(j10);
        }
        if (this.f41612c && this.f41611b.e()) {
            a aVar = this.f41610a;
            this.f41610a = this.f41611b;
            this.f41611b = aVar;
            this.f41612c = false;
            this.f41613d = false;
        }
        this.f41614e = j10;
        if (!this.f41610a.e()) {
            i10 = this.f41615f + 1;
        }
        this.f41615f = i10;
    }

    public void g() {
        this.f41610a.g();
        this.f41611b.g();
        this.f41612c = false;
        this.f41614e = -9223372036854775807L;
        this.f41615f = 0;
    }
}
