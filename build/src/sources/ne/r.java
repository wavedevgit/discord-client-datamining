package ne;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class r {

    /* renamed from: a  reason: collision with root package name */
    public final int f39023a;

    /* renamed from: b  reason: collision with root package name */
    public final int f39024b;

    /* renamed from: c  reason: collision with root package name */
    public final float f39025c;

    /* renamed from: d  reason: collision with root package name */
    public final long f39026d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        private int f39027a;

        /* renamed from: b  reason: collision with root package name */
        private int f39028b;

        /* renamed from: c  reason: collision with root package name */
        private float f39029c = 1.0f;

        /* renamed from: d  reason: collision with root package name */
        private long f39030d;

        public b(int i10, int i11) {
            this.f39027a = i10;
            this.f39028b = i11;
        }

        public r a() {
            return new r(this.f39027a, this.f39028b, this.f39029c, this.f39030d);
        }

        public b b(float f10) {
            this.f39029c = f10;
            return this;
        }
    }

    private r(int i10, int i11, float f10, long j10) {
        boolean z10 = i10 > 0;
        ne.a.b(z10, "width must be positive, but is: " + i10);
        boolean z11 = i11 > 0;
        ne.a.b(z11, "height must be positive, but is: " + i11);
        this.f39023a = i10;
        this.f39024b = i11;
        this.f39025c = f10;
        this.f39026d = j10;
    }
}
