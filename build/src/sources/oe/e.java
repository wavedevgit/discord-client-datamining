package oe;

import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class e {

    /* renamed from: c  reason: collision with root package name */
    private boolean f42539c;

    /* renamed from: d  reason: collision with root package name */
    private boolean f42540d;

    /* renamed from: f  reason: collision with root package name */
    private int f42542f;

    /* renamed from: a  reason: collision with root package name */
    private a f42537a = new a();

    /* renamed from: b  reason: collision with root package name */
    private a f42538b = new a();

    /* renamed from: e  reason: collision with root package name */
    private long f42541e = -9223372036854775807L;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private long f42543a;

        /* renamed from: b  reason: collision with root package name */
        private long f42544b;

        /* renamed from: c  reason: collision with root package name */
        private long f42545c;

        /* renamed from: d  reason: collision with root package name */
        private long f42546d;

        /* renamed from: e  reason: collision with root package name */
        private long f42547e;

        /* renamed from: f  reason: collision with root package name */
        private long f42548f;

        /* renamed from: g  reason: collision with root package name */
        private final boolean[] f42549g = new boolean[15];

        /* renamed from: h  reason: collision with root package name */
        private int f42550h;

        private static int c(long j10) {
            return (int) (j10 % 15);
        }

        public long a() {
            long j10 = this.f42547e;
            if (j10 == 0) {
                return 0L;
            }
            return this.f42548f / j10;
        }

        public long b() {
            return this.f42548f;
        }

        public boolean d() {
            long j10 = this.f42546d;
            if (j10 == 0) {
                return false;
            }
            return this.f42549g[c(j10 - 1)];
        }

        public boolean e() {
            if (this.f42546d > 15 && this.f42550h == 0) {
                return true;
            }
            return false;
        }

        public void f(long j10) {
            long j11 = this.f42546d;
            if (j11 == 0) {
                this.f42543a = j10;
            } else if (j11 == 1) {
                long j12 = j10 - this.f42543a;
                this.f42544b = j12;
                this.f42548f = j12;
                this.f42547e = 1L;
            } else {
                long j13 = j10 - this.f42545c;
                int c10 = c(j11);
                if (Math.abs(j13 - this.f42544b) <= 1000000) {
                    this.f42547e++;
                    this.f42548f += j13;
                    boolean[] zArr = this.f42549g;
                    if (zArr[c10]) {
                        zArr[c10] = false;
                        this.f42550h--;
                    }
                } else {
                    boolean[] zArr2 = this.f42549g;
                    if (!zArr2[c10]) {
                        zArr2[c10] = true;
                        this.f42550h++;
                    }
                }
            }
            this.f42546d++;
            this.f42545c = j10;
        }

        public void g() {
            this.f42546d = 0L;
            this.f42547e = 0L;
            this.f42548f = 0L;
            this.f42550h = 0;
            Arrays.fill(this.f42549g, false);
        }
    }

    public long a() {
        if (e()) {
            return this.f42537a.a();
        }
        return -9223372036854775807L;
    }

    public float b() {
        if (e()) {
            return (float) (1.0E9d / this.f42537a.a());
        }
        return -1.0f;
    }

    public int c() {
        return this.f42542f;
    }

    public long d() {
        if (e()) {
            return this.f42537a.b();
        }
        return -9223372036854775807L;
    }

    public boolean e() {
        return this.f42537a.e();
    }

    public void f(long j10) {
        this.f42537a.f(j10);
        int i10 = 0;
        if (this.f42537a.e() && !this.f42540d) {
            this.f42539c = false;
        } else if (this.f42541e != -9223372036854775807L) {
            if (!this.f42539c || this.f42538b.d()) {
                this.f42538b.g();
                this.f42538b.f(this.f42541e);
            }
            this.f42539c = true;
            this.f42538b.f(j10);
        }
        if (this.f42539c && this.f42538b.e()) {
            a aVar = this.f42537a;
            this.f42537a = this.f42538b;
            this.f42538b = aVar;
            this.f42539c = false;
            this.f42540d = false;
        }
        this.f42541e = j10;
        if (!this.f42537a.e()) {
            i10 = this.f42542f + 1;
        }
        this.f42542f = i10;
    }

    public void g() {
        this.f42537a.g();
        this.f42538b.g();
        this.f42539c = false;
        this.f42541e = -9223372036854775807L;
        this.f42542f = 0;
    }
}
