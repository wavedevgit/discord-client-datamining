package x;

import android.util.Rational;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class z1 {

    /* renamed from: a  reason: collision with root package name */
    private int f54552a;

    /* renamed from: b  reason: collision with root package name */
    private Rational f54553b;

    /* renamed from: c  reason: collision with root package name */
    private int f54554c;

    /* renamed from: d  reason: collision with root package name */
    private int f54555d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {

        /* renamed from: b  reason: collision with root package name */
        private final Rational f54557b;

        /* renamed from: c  reason: collision with root package name */
        private final int f54558c;

        /* renamed from: a  reason: collision with root package name */
        private int f54556a = 1;

        /* renamed from: d  reason: collision with root package name */
        private int f54559d = 0;

        public a(Rational rational, int i10) {
            this.f54557b = rational;
            this.f54558c = i10;
        }

        public z1 a() {
            b2.e.h(this.f54557b, "The crop aspect ratio must be set.");
            return new z1(this.f54556a, this.f54557b, this.f54558c, this.f54559d);
        }

        public a b(int i10) {
            this.f54559d = i10;
            return this;
        }

        public a c(int i10) {
            this.f54556a = i10;
            return this;
        }
    }

    z1(int i10, Rational rational, int i11, int i12) {
        this.f54552a = i10;
        this.f54553b = rational;
        this.f54554c = i11;
        this.f54555d = i12;
    }

    public Rational a() {
        return this.f54553b;
    }

    public int b() {
        return this.f54555d;
    }

    public int c() {
        return this.f54554c;
    }

    public int d() {
        return this.f54552a;
    }
}
