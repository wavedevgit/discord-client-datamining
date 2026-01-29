package ne;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class r {

    /* renamed from: a  reason: collision with root package name */
    public final int f40242a;

    /* renamed from: b  reason: collision with root package name */
    public final int f40243b;

    /* renamed from: c  reason: collision with root package name */
    public final float f40244c;

    /* renamed from: d  reason: collision with root package name */
    public final long f40245d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        private int f40246a;

        /* renamed from: b  reason: collision with root package name */
        private int f40247b;

        /* renamed from: c  reason: collision with root package name */
        private float f40248c = 1.0f;

        /* renamed from: d  reason: collision with root package name */
        private long f40249d;

        public b(int i10, int i11) {
            this.f40246a = i10;
            this.f40247b = i11;
        }

        public r a() {
            return new r(this.f40246a, this.f40247b, this.f40248c, this.f40249d);
        }

        public b b(float f10) {
            this.f40248c = f10;
            return this;
        }
    }

    private r(int i10, int i11, float f10, long j10) {
        boolean z10 = i10 > 0;
        ne.a.b(z10, "width must be positive, but is: " + i10);
        boolean z11 = i11 > 0;
        ne.a.b(z11, "height must be positive, but is: " + i11);
        this.f40242a = i10;
        this.f40243b = i11;
        this.f40244c = f10;
        this.f40245d = j10;
    }
}
