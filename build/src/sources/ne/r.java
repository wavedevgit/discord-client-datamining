package ne;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class r {

    /* renamed from: a  reason: collision with root package name */
    public final int f40121a;

    /* renamed from: b  reason: collision with root package name */
    public final int f40122b;

    /* renamed from: c  reason: collision with root package name */
    public final float f40123c;

    /* renamed from: d  reason: collision with root package name */
    public final long f40124d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        private int f40125a;

        /* renamed from: b  reason: collision with root package name */
        private int f40126b;

        /* renamed from: c  reason: collision with root package name */
        private float f40127c = 1.0f;

        /* renamed from: d  reason: collision with root package name */
        private long f40128d;

        public b(int i10, int i11) {
            this.f40125a = i10;
            this.f40126b = i11;
        }

        public r a() {
            return new r(this.f40125a, this.f40126b, this.f40127c, this.f40128d);
        }

        public b b(float f10) {
            this.f40127c = f10;
            return this;
        }
    }

    private r(int i10, int i11, float f10, long j10) {
        boolean z10 = i10 > 0;
        ne.a.b(z10, "width must be positive, but is: " + i10);
        boolean z11 = i11 > 0;
        ne.a.b(z11, "height must be positive, but is: " + i11);
        this.f40121a = i10;
        this.f40122b = i11;
        this.f40123c = f10;
        this.f40124d = j10;
    }
}
