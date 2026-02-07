package oe;

import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class e {

    /* renamed from: c  reason: collision with root package name */
    private boolean f41660c;

    /* renamed from: d  reason: collision with root package name */
    private boolean f41661d;

    /* renamed from: f  reason: collision with root package name */
    private int f41663f;

    /* renamed from: a  reason: collision with root package name */
    private a f41658a = new a();

    /* renamed from: b  reason: collision with root package name */
    private a f41659b = new a();

    /* renamed from: e  reason: collision with root package name */
    private long f41662e = -9223372036854775807L;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private long f41664a;

        /* renamed from: b  reason: collision with root package name */
        private long f41665b;

        /* renamed from: c  reason: collision with root package name */
        private long f41666c;

        /* renamed from: d  reason: collision with root package name */
        private long f41667d;

        /* renamed from: e  reason: collision with root package name */
        private long f41668e;

        /* renamed from: f  reason: collision with root package name */
        private long f41669f;

        /* renamed from: g  reason: collision with root package name */
        private final boolean[] f41670g = new boolean[15];

        /* renamed from: h  reason: collision with root package name */
        private int f41671h;

        private static int c(long j10) {
            return (int) (j10 % 15);
        }

        public long a() {
            long j10 = this.f41668e;
            if (j10 == 0) {
                return 0L;
            }
            return this.f41669f / j10;
        }

        public long b() {
            return this.f41669f;
        }

        public boolean d() {
            long j10 = this.f41667d;
            if (j10 == 0) {
                return false;
            }
            return this.f41670g[c(j10 - 1)];
        }

        public boolean e() {
            if (this.f41667d > 15 && this.f41671h == 0) {
                return true;
            }
            return false;
        }

        public void f(long j10) {
            long j11 = this.f41667d;
            if (j11 == 0) {
                this.f41664a = j10;
            } else if (j11 == 1) {
                long j12 = j10 - this.f41664a;
                this.f41665b = j12;
                this.f41669f = j12;
                this.f41668e = 1L;
            } else {
                long j13 = j10 - this.f41666c;
                int c10 = c(j11);
                if (Math.abs(j13 - this.f41665b) <= 1000000) {
                    this.f41668e++;
                    this.f41669f += j13;
                    boolean[] zArr = this.f41670g;
                    if (zArr[c10]) {
                        zArr[c10] = false;
                        this.f41671h--;
                    }
                } else {
                    boolean[] zArr2 = this.f41670g;
                    if (!zArr2[c10]) {
                        zArr2[c10] = true;
                        this.f41671h++;
                    }
                }
            }
            this.f41667d++;
            this.f41666c = j10;
        }

        public void g() {
            this.f41667d = 0L;
            this.f41668e = 0L;
            this.f41669f = 0L;
            this.f41671h = 0;
            Arrays.fill(this.f41670g, false);
        }
    }

    public long a() {
        if (e()) {
            return this.f41658a.a();
        }
        return -9223372036854775807L;
    }

    public float b() {
        if (e()) {
            return (float) (1.0E9d / this.f41658a.a());
        }
        return -1.0f;
    }

    public int c() {
        return this.f41663f;
    }

    public long d() {
        if (e()) {
            return this.f41658a.b();
        }
        return -9223372036854775807L;
    }

    public boolean e() {
        return this.f41658a.e();
    }

    public void f(long j10) {
        this.f41658a.f(j10);
        int i10 = 0;
        if (this.f41658a.e() && !this.f41661d) {
            this.f41660c = false;
        } else if (this.f41662e != -9223372036854775807L) {
            if (!this.f41660c || this.f41659b.d()) {
                this.f41659b.g();
                this.f41659b.f(this.f41662e);
            }
            this.f41660c = true;
            this.f41659b.f(j10);
        }
        if (this.f41660c && this.f41659b.e()) {
            a aVar = this.f41658a;
            this.f41658a = this.f41659b;
            this.f41659b = aVar;
            this.f41660c = false;
            this.f41661d = false;
        }
        this.f41662e = j10;
        if (!this.f41658a.e()) {
            i10 = this.f41663f + 1;
        }
        this.f41663f = i10;
    }

    public void g() {
        this.f41658a.g();
        this.f41659b.g();
        this.f41660c = false;
        this.f41662e = -9223372036854775807L;
        this.f41663f = 0;
    }
}
