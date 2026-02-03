package x;

import android.util.Rational;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class z1 {

    /* renamed from: a  reason: collision with root package name */
    private int f53052a;

    /* renamed from: b  reason: collision with root package name */
    private Rational f53053b;

    /* renamed from: c  reason: collision with root package name */
    private int f53054c;

    /* renamed from: d  reason: collision with root package name */
    private int f53055d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {

        /* renamed from: b  reason: collision with root package name */
        private final Rational f53057b;

        /* renamed from: c  reason: collision with root package name */
        private final int f53058c;

        /* renamed from: a  reason: collision with root package name */
        private int f53056a = 1;

        /* renamed from: d  reason: collision with root package name */
        private int f53059d = 0;

        public a(Rational rational, int i10) {
            this.f53057b = rational;
            this.f53058c = i10;
        }

        public z1 a() {
            b2.e.h(this.f53057b, "The crop aspect ratio must be set.");
            return new z1(this.f53056a, this.f53057b, this.f53058c, this.f53059d);
        }

        public a b(int i10) {
            this.f53059d = i10;
            return this;
        }

        public a c(int i10) {
            this.f53056a = i10;
            return this;
        }
    }

    z1(int i10, Rational rational, int i11, int i12) {
        this.f53052a = i10;
        this.f53053b = rational;
        this.f53054c = i11;
        this.f53055d = i12;
    }

    public Rational a() {
        return this.f53053b;
    }

    public int b() {
        return this.f53055d;
    }

    public int c() {
        return this.f53054c;
    }

    public int d() {
        return this.f53052a;
    }
}
