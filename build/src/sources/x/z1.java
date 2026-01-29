package x;

import android.util.Rational;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class z1 {

    /* renamed from: a  reason: collision with root package name */
    private int f53107a;

    /* renamed from: b  reason: collision with root package name */
    private Rational f53108b;

    /* renamed from: c  reason: collision with root package name */
    private int f53109c;

    /* renamed from: d  reason: collision with root package name */
    private int f53110d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {

        /* renamed from: b  reason: collision with root package name */
        private final Rational f53112b;

        /* renamed from: c  reason: collision with root package name */
        private final int f53113c;

        /* renamed from: a  reason: collision with root package name */
        private int f53111a = 1;

        /* renamed from: d  reason: collision with root package name */
        private int f53114d = 0;

        public a(Rational rational, int i10) {
            this.f53112b = rational;
            this.f53113c = i10;
        }

        public z1 a() {
            b2.e.h(this.f53112b, "The crop aspect ratio must be set.");
            return new z1(this.f53111a, this.f53112b, this.f53113c, this.f53114d);
        }

        public a b(int i10) {
            this.f53114d = i10;
            return this;
        }

        public a c(int i10) {
            this.f53111a = i10;
            return this;
        }
    }

    z1(int i10, Rational rational, int i11, int i12) {
        this.f53107a = i10;
        this.f53108b = rational;
        this.f53109c = i11;
        this.f53110d = i12;
    }

    public Rational a() {
        return this.f53108b;
    }

    public int b() {
        return this.f53110d;
    }

    public int c() {
        return this.f53109c;
    }

    public int d() {
        return this.f53107a;
    }
}
