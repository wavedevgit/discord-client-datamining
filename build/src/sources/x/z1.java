package x;

import android.util.Rational;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class z1 {

    /* renamed from: a  reason: collision with root package name */
    private int f53593a;

    /* renamed from: b  reason: collision with root package name */
    private Rational f53594b;

    /* renamed from: c  reason: collision with root package name */
    private int f53595c;

    /* renamed from: d  reason: collision with root package name */
    private int f53596d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {

        /* renamed from: b  reason: collision with root package name */
        private final Rational f53598b;

        /* renamed from: c  reason: collision with root package name */
        private final int f53599c;

        /* renamed from: a  reason: collision with root package name */
        private int f53597a = 1;

        /* renamed from: d  reason: collision with root package name */
        private int f53600d = 0;

        public a(Rational rational, int i10) {
            this.f53598b = rational;
            this.f53599c = i10;
        }

        public z1 a() {
            b2.e.h(this.f53598b, "The crop aspect ratio must be set.");
            return new z1(this.f53597a, this.f53598b, this.f53599c, this.f53600d);
        }

        public a b(int i10) {
            this.f53600d = i10;
            return this;
        }

        public a c(int i10) {
            this.f53597a = i10;
            return this;
        }
    }

    z1(int i10, Rational rational, int i11, int i12) {
        this.f53593a = i10;
        this.f53594b = rational;
        this.f53595c = i11;
        this.f53596d = i12;
    }

    public Rational a() {
        return this.f53594b;
    }

    public int b() {
        return this.f53596d;
    }

    public int c() {
        return this.f53595c;
    }

    public int d() {
        return this.f53593a;
    }
}
