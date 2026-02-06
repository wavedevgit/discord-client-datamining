package ne;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class r {

    /* renamed from: a  reason: collision with root package name */
    public final int f38975a;

    /* renamed from: b  reason: collision with root package name */
    public final int f38976b;

    /* renamed from: c  reason: collision with root package name */
    public final float f38977c;

    /* renamed from: d  reason: collision with root package name */
    public final long f38978d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        private int f38979a;

        /* renamed from: b  reason: collision with root package name */
        private int f38980b;

        /* renamed from: c  reason: collision with root package name */
        private float f38981c = 1.0f;

        /* renamed from: d  reason: collision with root package name */
        private long f38982d;

        public b(int i10, int i11) {
            this.f38979a = i10;
            this.f38980b = i11;
        }

        public r a() {
            return new r(this.f38979a, this.f38980b, this.f38981c, this.f38982d);
        }

        public b b(float f10) {
            this.f38981c = f10;
            return this;
        }
    }

    private r(int i10, int i11, float f10, long j10) {
        boolean z10 = i10 > 0;
        ne.a.b(z10, "width must be positive, but is: " + i10);
        boolean z11 = i11 > 0;
        ne.a.b(z11, "height must be positive, but is: " + i11);
        this.f38975a = i10;
        this.f38976b = i11;
        this.f38977c = f10;
        this.f38978d = j10;
    }
}
