package oe;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class r {

    /* renamed from: a  reason: collision with root package name */
    public final int f39569a;

    /* renamed from: b  reason: collision with root package name */
    public final int f39570b;

    /* renamed from: c  reason: collision with root package name */
    public final float f39571c;

    /* renamed from: d  reason: collision with root package name */
    public final long f39572d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        private int f39573a;

        /* renamed from: b  reason: collision with root package name */
        private int f39574b;

        /* renamed from: c  reason: collision with root package name */
        private float f39575c = 1.0f;

        /* renamed from: d  reason: collision with root package name */
        private long f39576d;

        public b(int i10, int i11) {
            this.f39573a = i10;
            this.f39574b = i11;
        }

        public r a() {
            return new r(this.f39573a, this.f39574b, this.f39575c, this.f39576d);
        }

        public b b(float f10) {
            this.f39575c = f10;
            return this;
        }
    }

    private r(int i10, int i11, float f10, long j10) {
        boolean z10 = i10 > 0;
        oe.a.b(z10, "width must be positive, but is: " + i10);
        boolean z11 = i11 > 0;
        oe.a.b(z11, "height must be positive, but is: " + i11);
        this.f39569a = i10;
        this.f39570b = i11;
        this.f39571c = f10;
        this.f39572d = j10;
    }
}
