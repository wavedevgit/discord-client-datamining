package x;

import android.util.Rational;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class z1 {

    /* renamed from: a  reason: collision with root package name */
    private int f54412a;

    /* renamed from: b  reason: collision with root package name */
    private Rational f54413b;

    /* renamed from: c  reason: collision with root package name */
    private int f54414c;

    /* renamed from: d  reason: collision with root package name */
    private int f54415d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {

        /* renamed from: b  reason: collision with root package name */
        private final Rational f54417b;

        /* renamed from: c  reason: collision with root package name */
        private final int f54418c;

        /* renamed from: a  reason: collision with root package name */
        private int f54416a = 1;

        /* renamed from: d  reason: collision with root package name */
        private int f54419d = 0;

        public a(Rational rational, int i10) {
            this.f54417b = rational;
            this.f54418c = i10;
        }

        public z1 a() {
            b2.e.h(this.f54417b, "The crop aspect ratio must be set.");
            return new z1(this.f54416a, this.f54417b, this.f54418c, this.f54419d);
        }

        public a b(int i10) {
            this.f54419d = i10;
            return this;
        }

        public a c(int i10) {
            this.f54416a = i10;
            return this;
        }
    }

    z1(int i10, Rational rational, int i11, int i12) {
        this.f54412a = i10;
        this.f54413b = rational;
        this.f54414c = i11;
        this.f54415d = i12;
    }

    public Rational a() {
        return this.f54413b;
    }

    public int b() {
        return this.f54415d;
    }

    public int c() {
        return this.f54414c;
    }

    public int d() {
        return this.f54412a;
    }
}
