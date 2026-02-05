package ne;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class r {

    /* renamed from: a  reason: collision with root package name */
    public final int f39620a;

    /* renamed from: b  reason: collision with root package name */
    public final int f39621b;

    /* renamed from: c  reason: collision with root package name */
    public final float f39622c;

    /* renamed from: d  reason: collision with root package name */
    public final long f39623d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        private int f39624a;

        /* renamed from: b  reason: collision with root package name */
        private int f39625b;

        /* renamed from: c  reason: collision with root package name */
        private float f39626c = 1.0f;

        /* renamed from: d  reason: collision with root package name */
        private long f39627d;

        public b(int i10, int i11) {
            this.f39624a = i10;
            this.f39625b = i11;
        }

        public r a() {
            return new r(this.f39624a, this.f39625b, this.f39626c, this.f39627d);
        }

        public b b(float f10) {
            this.f39626c = f10;
            return this;
        }
    }

    private r(int i10, int i11, float f10, long j10) {
        boolean z10 = i10 > 0;
        ne.a.b(z10, "width must be positive, but is: " + i10);
        boolean z11 = i11 > 0;
        ne.a.b(z11, "height must be positive, but is: " + i11);
        this.f39620a = i10;
        this.f39621b = i11;
        this.f39622c = f10;
        this.f39623d = j10;
    }
}
