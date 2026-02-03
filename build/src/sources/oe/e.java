package oe;

import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class e {

    /* renamed from: c  reason: collision with root package name */
    private boolean f42483c;

    /* renamed from: d  reason: collision with root package name */
    private boolean f42484d;

    /* renamed from: f  reason: collision with root package name */
    private int f42486f;

    /* renamed from: a  reason: collision with root package name */
    private a f42481a = new a();

    /* renamed from: b  reason: collision with root package name */
    private a f42482b = new a();

    /* renamed from: e  reason: collision with root package name */
    private long f42485e = -9223372036854775807L;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private long f42487a;

        /* renamed from: b  reason: collision with root package name */
        private long f42488b;

        /* renamed from: c  reason: collision with root package name */
        private long f42489c;

        /* renamed from: d  reason: collision with root package name */
        private long f42490d;

        /* renamed from: e  reason: collision with root package name */
        private long f42491e;

        /* renamed from: f  reason: collision with root package name */
        private long f42492f;

        /* renamed from: g  reason: collision with root package name */
        private final boolean[] f42493g = new boolean[15];

        /* renamed from: h  reason: collision with root package name */
        private int f42494h;

        private static int c(long j10) {
            return (int) (j10 % 15);
        }

        public long a() {
            long j10 = this.f42491e;
            if (j10 == 0) {
                return 0L;
            }
            return this.f42492f / j10;
        }

        public long b() {
            return this.f42492f;
        }

        public boolean d() {
            long j10 = this.f42490d;
            if (j10 == 0) {
                return false;
            }
            return this.f42493g[c(j10 - 1)];
        }

        public boolean e() {
            if (this.f42490d > 15 && this.f42494h == 0) {
                return true;
            }
            return false;
        }

        public void f(long j10) {
            long j11 = this.f42490d;
            if (j11 == 0) {
                this.f42487a = j10;
            } else if (j11 == 1) {
                long j12 = j10 - this.f42487a;
                this.f42488b = j12;
                this.f42492f = j12;
                this.f42491e = 1L;
            } else {
                long j13 = j10 - this.f42489c;
                int c10 = c(j11);
                if (Math.abs(j13 - this.f42488b) <= 1000000) {
                    this.f42491e++;
                    this.f42492f += j13;
                    boolean[] zArr = this.f42493g;
                    if (zArr[c10]) {
                        zArr[c10] = false;
                        this.f42494h--;
                    }
                } else {
                    boolean[] zArr2 = this.f42493g;
                    if (!zArr2[c10]) {
                        zArr2[c10] = true;
                        this.f42494h++;
                    }
                }
            }
            this.f42490d++;
            this.f42489c = j10;
        }

        public void g() {
            this.f42490d = 0L;
            this.f42491e = 0L;
            this.f42492f = 0L;
            this.f42494h = 0;
            Arrays.fill(this.f42493g, false);
        }
    }

    public long a() {
        if (e()) {
            return this.f42481a.a();
        }
        return -9223372036854775807L;
    }

    public float b() {
        if (e()) {
            return (float) (1.0E9d / this.f42481a.a());
        }
        return -1.0f;
    }

    public int c() {
        return this.f42486f;
    }

    public long d() {
        if (e()) {
            return this.f42481a.b();
        }
        return -9223372036854775807L;
    }

    public boolean e() {
        return this.f42481a.e();
    }

    public void f(long j10) {
        this.f42481a.f(j10);
        int i10 = 0;
        if (this.f42481a.e() && !this.f42484d) {
            this.f42483c = false;
        } else if (this.f42485e != -9223372036854775807L) {
            if (!this.f42483c || this.f42482b.d()) {
                this.f42482b.g();
                this.f42482b.f(this.f42485e);
            }
            this.f42483c = true;
            this.f42482b.f(j10);
        }
        if (this.f42483c && this.f42482b.e()) {
            a aVar = this.f42481a;
            this.f42481a = this.f42482b;
            this.f42482b = aVar;
            this.f42483c = false;
            this.f42484d = false;
        }
        this.f42485e = j10;
        if (!this.f42481a.e()) {
            i10 = this.f42486f + 1;
        }
        this.f42486f = i10;
    }

    public void g() {
        this.f42481a.g();
        this.f42482b.g();
        this.f42483c = false;
        this.f42485e = -9223372036854775807L;
        this.f42486f = 0;
    }
}
