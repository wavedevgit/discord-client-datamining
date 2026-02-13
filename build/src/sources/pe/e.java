package pe;

import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class e {

    /* renamed from: c  reason: collision with root package name */
    private boolean f42147c;

    /* renamed from: d  reason: collision with root package name */
    private boolean f42148d;

    /* renamed from: f  reason: collision with root package name */
    private int f42150f;

    /* renamed from: a  reason: collision with root package name */
    private a f42145a = new a();

    /* renamed from: b  reason: collision with root package name */
    private a f42146b = new a();

    /* renamed from: e  reason: collision with root package name */
    private long f42149e = -9223372036854775807L;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private long f42151a;

        /* renamed from: b  reason: collision with root package name */
        private long f42152b;

        /* renamed from: c  reason: collision with root package name */
        private long f42153c;

        /* renamed from: d  reason: collision with root package name */
        private long f42154d;

        /* renamed from: e  reason: collision with root package name */
        private long f42155e;

        /* renamed from: f  reason: collision with root package name */
        private long f42156f;

        /* renamed from: g  reason: collision with root package name */
        private final boolean[] f42157g = new boolean[15];

        /* renamed from: h  reason: collision with root package name */
        private int f42158h;

        private static int c(long j10) {
            return (int) (j10 % 15);
        }

        public long a() {
            long j10 = this.f42155e;
            if (j10 == 0) {
                return 0L;
            }
            return this.f42156f / j10;
        }

        public long b() {
            return this.f42156f;
        }

        public boolean d() {
            long j10 = this.f42154d;
            if (j10 == 0) {
                return false;
            }
            return this.f42157g[c(j10 - 1)];
        }

        public boolean e() {
            if (this.f42154d > 15 && this.f42158h == 0) {
                return true;
            }
            return false;
        }

        public void f(long j10) {
            long j11 = this.f42154d;
            if (j11 == 0) {
                this.f42151a = j10;
            } else if (j11 == 1) {
                long j12 = j10 - this.f42151a;
                this.f42152b = j12;
                this.f42156f = j12;
                this.f42155e = 1L;
            } else {
                long j13 = j10 - this.f42153c;
                int c10 = c(j11);
                if (Math.abs(j13 - this.f42152b) <= 1000000) {
                    this.f42155e++;
                    this.f42156f += j13;
                    boolean[] zArr = this.f42157g;
                    if (zArr[c10]) {
                        zArr[c10] = false;
                        this.f42158h--;
                    }
                } else {
                    boolean[] zArr2 = this.f42157g;
                    if (!zArr2[c10]) {
                        zArr2[c10] = true;
                        this.f42158h++;
                    }
                }
            }
            this.f42154d++;
            this.f42153c = j10;
        }

        public void g() {
            this.f42154d = 0L;
            this.f42155e = 0L;
            this.f42156f = 0L;
            this.f42158h = 0;
            Arrays.fill(this.f42157g, false);
        }
    }

    public long a() {
        if (e()) {
            return this.f42145a.a();
        }
        return -9223372036854775807L;
    }

    public float b() {
        if (e()) {
            return (float) (1.0E9d / this.f42145a.a());
        }
        return -1.0f;
    }

    public int c() {
        return this.f42150f;
    }

    public long d() {
        if (e()) {
            return this.f42145a.b();
        }
        return -9223372036854775807L;
    }

    public boolean e() {
        return this.f42145a.e();
    }

    public void f(long j10) {
        this.f42145a.f(j10);
        int i10 = 0;
        if (this.f42145a.e() && !this.f42148d) {
            this.f42147c = false;
        } else if (this.f42149e != -9223372036854775807L) {
            if (!this.f42147c || this.f42146b.d()) {
                this.f42146b.g();
                this.f42146b.f(this.f42149e);
            }
            this.f42147c = true;
            this.f42146b.f(j10);
        }
        if (this.f42147c && this.f42146b.e()) {
            a aVar = this.f42145a;
            this.f42145a = this.f42146b;
            this.f42146b = aVar;
            this.f42147c = false;
            this.f42148d = false;
        }
        this.f42149e = j10;
        if (!this.f42145a.e()) {
            i10 = this.f42150f + 1;
        }
        this.f42150f = i10;
    }

    public void g() {
        this.f42145a.g();
        this.f42146b.g();
        this.f42147c = false;
        this.f42149e = -9223372036854775807L;
        this.f42150f = 0;
    }
}
