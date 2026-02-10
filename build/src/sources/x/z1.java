package x;

import android.util.Rational;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class z1 {

    /* renamed from: a  reason: collision with root package name */
    private int f54284a;

    /* renamed from: b  reason: collision with root package name */
    private Rational f54285b;

    /* renamed from: c  reason: collision with root package name */
    private int f54286c;

    /* renamed from: d  reason: collision with root package name */
    private int f54287d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {

        /* renamed from: b  reason: collision with root package name */
        private final Rational f54289b;

        /* renamed from: c  reason: collision with root package name */
        private final int f54290c;

        /* renamed from: a  reason: collision with root package name */
        private int f54288a = 1;

        /* renamed from: d  reason: collision with root package name */
        private int f54291d = 0;

        public a(Rational rational, int i10) {
            this.f54289b = rational;
            this.f54290c = i10;
        }

        public z1 a() {
            b2.e.h(this.f54289b, "The crop aspect ratio must be set.");
            return new z1(this.f54288a, this.f54289b, this.f54290c, this.f54291d);
        }

        public a b(int i10) {
            this.f54291d = i10;
            return this;
        }

        public a c(int i10) {
            this.f54288a = i10;
            return this;
        }
    }

    z1(int i10, Rational rational, int i11, int i12) {
        this.f54284a = i10;
        this.f54285b = rational;
        this.f54286c = i11;
        this.f54287d = i12;
    }

    public Rational a() {
        return this.f54285b;
    }

    public int b() {
        return this.f54287d;
    }

    public int c() {
        return this.f54286c;
    }

    public int d() {
        return this.f54284a;
    }
}
