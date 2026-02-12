package x;

import android.util.Rational;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class z1 {

    /* renamed from: a  reason: collision with root package name */
    private int f54285a;

    /* renamed from: b  reason: collision with root package name */
    private Rational f54286b;

    /* renamed from: c  reason: collision with root package name */
    private int f54287c;

    /* renamed from: d  reason: collision with root package name */
    private int f54288d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {

        /* renamed from: b  reason: collision with root package name */
        private final Rational f54290b;

        /* renamed from: c  reason: collision with root package name */
        private final int f54291c;

        /* renamed from: a  reason: collision with root package name */
        private int f54289a = 1;

        /* renamed from: d  reason: collision with root package name */
        private int f54292d = 0;

        public a(Rational rational, int i10) {
            this.f54290b = rational;
            this.f54291c = i10;
        }

        public z1 a() {
            b2.e.h(this.f54290b, "The crop aspect ratio must be set.");
            return new z1(this.f54289a, this.f54290b, this.f54291c, this.f54292d);
        }

        public a b(int i10) {
            this.f54292d = i10;
            return this;
        }

        public a c(int i10) {
            this.f54289a = i10;
            return this;
        }
    }

    z1(int i10, Rational rational, int i11, int i12) {
        this.f54285a = i10;
        this.f54286b = rational;
        this.f54287c = i11;
        this.f54288d = i12;
    }

    public Rational a() {
        return this.f54286b;
    }

    public int b() {
        return this.f54288d;
    }

    public int c() {
        return this.f54287c;
    }

    public int d() {
        return this.f54285a;
    }
}
