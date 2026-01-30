package x;

import android.util.Rational;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class z1 {

    /* renamed from: a  reason: collision with root package name */
    private int f53123a;

    /* renamed from: b  reason: collision with root package name */
    private Rational f53124b;

    /* renamed from: c  reason: collision with root package name */
    private int f53125c;

    /* renamed from: d  reason: collision with root package name */
    private int f53126d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {

        /* renamed from: b  reason: collision with root package name */
        private final Rational f53128b;

        /* renamed from: c  reason: collision with root package name */
        private final int f53129c;

        /* renamed from: a  reason: collision with root package name */
        private int f53127a = 1;

        /* renamed from: d  reason: collision with root package name */
        private int f53130d = 0;

        public a(Rational rational, int i10) {
            this.f53128b = rational;
            this.f53129c = i10;
        }

        public z1 a() {
            b2.e.h(this.f53128b, "The crop aspect ratio must be set.");
            return new z1(this.f53127a, this.f53128b, this.f53129c, this.f53130d);
        }

        public a b(int i10) {
            this.f53130d = i10;
            return this;
        }

        public a c(int i10) {
            this.f53127a = i10;
            return this;
        }
    }

    z1(int i10, Rational rational, int i11, int i12) {
        this.f53123a = i10;
        this.f53124b = rational;
        this.f53125c = i11;
        this.f53126d = i12;
    }

    public Rational a() {
        return this.f53124b;
    }

    public int b() {
        return this.f53126d;
    }

    public int c() {
        return this.f53125c;
    }

    public int d() {
        return this.f53123a;
    }
}
