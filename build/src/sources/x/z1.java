package x;

import android.util.Rational;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class z1 {

    /* renamed from: a  reason: collision with root package name */
    private int f54460a;

    /* renamed from: b  reason: collision with root package name */
    private Rational f54461b;

    /* renamed from: c  reason: collision with root package name */
    private int f54462c;

    /* renamed from: d  reason: collision with root package name */
    private int f54463d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {

        /* renamed from: b  reason: collision with root package name */
        private final Rational f54465b;

        /* renamed from: c  reason: collision with root package name */
        private final int f54466c;

        /* renamed from: a  reason: collision with root package name */
        private int f54464a = 1;

        /* renamed from: d  reason: collision with root package name */
        private int f54467d = 0;

        public a(Rational rational, int i10) {
            this.f54465b = rational;
            this.f54466c = i10;
        }

        public z1 a() {
            b2.e.h(this.f54465b, "The crop aspect ratio must be set.");
            return new z1(this.f54464a, this.f54465b, this.f54466c, this.f54467d);
        }

        public a b(int i10) {
            this.f54467d = i10;
            return this;
        }

        public a c(int i10) {
            this.f54464a = i10;
            return this;
        }
    }

    z1(int i10, Rational rational, int i11, int i12) {
        this.f54460a = i10;
        this.f54461b = rational;
        this.f54462c = i11;
        this.f54463d = i12;
    }

    public Rational a() {
        return this.f54461b;
    }

    public int b() {
        return this.f54463d;
    }

    public int c() {
        return this.f54462c;
    }

    public int d() {
        return this.f54460a;
    }
}
