package oe;

import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class e {

    /* renamed from: c  reason: collision with root package name */
    private boolean f42555c;

    /* renamed from: d  reason: collision with root package name */
    private boolean f42556d;

    /* renamed from: f  reason: collision with root package name */
    private int f42558f;

    /* renamed from: a  reason: collision with root package name */
    private a f42553a = new a();

    /* renamed from: b  reason: collision with root package name */
    private a f42554b = new a();

    /* renamed from: e  reason: collision with root package name */
    private long f42557e = -9223372036854775807L;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private long f42559a;

        /* renamed from: b  reason: collision with root package name */
        private long f42560b;

        /* renamed from: c  reason: collision with root package name */
        private long f42561c;

        /* renamed from: d  reason: collision with root package name */
        private long f42562d;

        /* renamed from: e  reason: collision with root package name */
        private long f42563e;

        /* renamed from: f  reason: collision with root package name */
        private long f42564f;

        /* renamed from: g  reason: collision with root package name */
        private final boolean[] f42565g = new boolean[15];

        /* renamed from: h  reason: collision with root package name */
        private int f42566h;

        private static int c(long j10) {
            return (int) (j10 % 15);
        }

        public long a() {
            long j10 = this.f42563e;
            if (j10 == 0) {
                return 0L;
            }
            return this.f42564f / j10;
        }

        public long b() {
            return this.f42564f;
        }

        public boolean d() {
            long j10 = this.f42562d;
            if (j10 == 0) {
                return false;
            }
            return this.f42565g[c(j10 - 1)];
        }

        public boolean e() {
            if (this.f42562d > 15 && this.f42566h == 0) {
                return true;
            }
            return false;
        }

        public void f(long j10) {
            long j11 = this.f42562d;
            if (j11 == 0) {
                this.f42559a = j10;
            } else if (j11 == 1) {
                long j12 = j10 - this.f42559a;
                this.f42560b = j12;
                this.f42564f = j12;
                this.f42563e = 1L;
            } else {
                long j13 = j10 - this.f42561c;
                int c10 = c(j11);
                if (Math.abs(j13 - this.f42560b) <= 1000000) {
                    this.f42563e++;
                    this.f42564f += j13;
                    boolean[] zArr = this.f42565g;
                    if (zArr[c10]) {
                        zArr[c10] = false;
                        this.f42566h--;
                    }
                } else {
                    boolean[] zArr2 = this.f42565g;
                    if (!zArr2[c10]) {
                        zArr2[c10] = true;
                        this.f42566h++;
                    }
                }
            }
            this.f42562d++;
            this.f42561c = j10;
        }

        public void g() {
            this.f42562d = 0L;
            this.f42563e = 0L;
            this.f42564f = 0L;
            this.f42566h = 0;
            Arrays.fill(this.f42565g, false);
        }
    }

    public long a() {
        if (e()) {
            return this.f42553a.a();
        }
        return -9223372036854775807L;
    }

    public float b() {
        if (e()) {
            return (float) (1.0E9d / this.f42553a.a());
        }
        return -1.0f;
    }

    public int c() {
        return this.f42558f;
    }

    public long d() {
        if (e()) {
            return this.f42553a.b();
        }
        return -9223372036854775807L;
    }

    public boolean e() {
        return this.f42553a.e();
    }

    public void f(long j10) {
        this.f42553a.f(j10);
        int i10 = 0;
        if (this.f42553a.e() && !this.f42556d) {
            this.f42555c = false;
        } else if (this.f42557e != -9223372036854775807L) {
            if (!this.f42555c || this.f42554b.d()) {
                this.f42554b.g();
                this.f42554b.f(this.f42557e);
            }
            this.f42555c = true;
            this.f42554b.f(j10);
        }
        if (this.f42555c && this.f42554b.e()) {
            a aVar = this.f42553a;
            this.f42553a = this.f42554b;
            this.f42554b = aVar;
            this.f42555c = false;
            this.f42556d = false;
        }
        this.f42557e = j10;
        if (!this.f42553a.e()) {
            i10 = this.f42558f + 1;
        }
        this.f42558f = i10;
    }

    public void g() {
        this.f42553a.g();
        this.f42554b.g();
        this.f42555c = false;
        this.f42557e = -9223372036854775807L;
        this.f42558f = 0;
    }
}
