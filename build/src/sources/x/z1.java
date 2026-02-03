package x;

import android.util.Rational;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class z1 {

    /* renamed from: a  reason: collision with root package name */
    private int f53331a;

    /* renamed from: b  reason: collision with root package name */
    private Rational f53332b;

    /* renamed from: c  reason: collision with root package name */
    private int f53333c;

    /* renamed from: d  reason: collision with root package name */
    private int f53334d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {

        /* renamed from: b  reason: collision with root package name */
        private final Rational f53336b;

        /* renamed from: c  reason: collision with root package name */
        private final int f53337c;

        /* renamed from: a  reason: collision with root package name */
        private int f53335a = 1;

        /* renamed from: d  reason: collision with root package name */
        private int f53338d = 0;

        public a(Rational rational, int i10) {
            this.f53336b = rational;
            this.f53337c = i10;
        }

        public z1 a() {
            b2.e.h(this.f53336b, "The crop aspect ratio must be set.");
            return new z1(this.f53335a, this.f53336b, this.f53337c, this.f53338d);
        }

        public a b(int i10) {
            this.f53338d = i10;
            return this;
        }

        public a c(int i10) {
            this.f53335a = i10;
            return this;
        }
    }

    z1(int i10, Rational rational, int i11, int i12) {
        this.f53331a = i10;
        this.f53332b = rational;
        this.f53333c = i11;
        this.f53334d = i12;
    }

    public Rational a() {
        return this.f53332b;
    }

    public int b() {
        return this.f53334d;
    }

    public int c() {
        return this.f53333c;
    }

    public int d() {
        return this.f53331a;
    }
}
