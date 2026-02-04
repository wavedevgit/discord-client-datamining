package x;

import android.util.Rational;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class z1 {

    /* renamed from: a  reason: collision with root package name */
    private int f53049a;

    /* renamed from: b  reason: collision with root package name */
    private Rational f53050b;

    /* renamed from: c  reason: collision with root package name */
    private int f53051c;

    /* renamed from: d  reason: collision with root package name */
    private int f53052d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {

        /* renamed from: b  reason: collision with root package name */
        private final Rational f53054b;

        /* renamed from: c  reason: collision with root package name */
        private final int f53055c;

        /* renamed from: a  reason: collision with root package name */
        private int f53053a = 1;

        /* renamed from: d  reason: collision with root package name */
        private int f53056d = 0;

        public a(Rational rational, int i10) {
            this.f53054b = rational;
            this.f53055c = i10;
        }

        public z1 a() {
            b2.e.h(this.f53054b, "The crop aspect ratio must be set.");
            return new z1(this.f53053a, this.f53054b, this.f53055c, this.f53056d);
        }

        public a b(int i10) {
            this.f53056d = i10;
            return this;
        }

        public a c(int i10) {
            this.f53053a = i10;
            return this;
        }
    }

    z1(int i10, Rational rational, int i11, int i12) {
        this.f53049a = i10;
        this.f53050b = rational;
        this.f53051c = i11;
        this.f53052d = i12;
    }

    public Rational a() {
        return this.f53050b;
    }

    public int b() {
        return this.f53052d;
    }

    public int c() {
        return this.f53051c;
    }

    public int d() {
        return this.f53049a;
    }
}
