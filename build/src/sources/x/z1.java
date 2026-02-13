package x;

import android.util.Rational;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class z1 {

    /* renamed from: a  reason: collision with root package name */
    private int f54853a;

    /* renamed from: b  reason: collision with root package name */
    private Rational f54854b;

    /* renamed from: c  reason: collision with root package name */
    private int f54855c;

    /* renamed from: d  reason: collision with root package name */
    private int f54856d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {

        /* renamed from: b  reason: collision with root package name */
        private final Rational f54858b;

        /* renamed from: c  reason: collision with root package name */
        private final int f54859c;

        /* renamed from: a  reason: collision with root package name */
        private int f54857a = 1;

        /* renamed from: d  reason: collision with root package name */
        private int f54860d = 0;

        public a(Rational rational, int i10) {
            this.f54858b = rational;
            this.f54859c = i10;
        }

        public z1 a() {
            b2.e.h(this.f54858b, "The crop aspect ratio must be set.");
            return new z1(this.f54857a, this.f54858b, this.f54859c, this.f54860d);
        }

        public a b(int i10) {
            this.f54860d = i10;
            return this;
        }

        public a c(int i10) {
            this.f54857a = i10;
            return this;
        }
    }

    z1(int i10, Rational rational, int i11, int i12) {
        this.f54853a = i10;
        this.f54854b = rational;
        this.f54855c = i11;
        this.f54856d = i12;
    }

    public Rational a() {
        return this.f54854b;
    }

    public int b() {
        return this.f54856d;
    }

    public int c() {
        return this.f54855c;
    }

    public int d() {
        return this.f54853a;
    }
}
