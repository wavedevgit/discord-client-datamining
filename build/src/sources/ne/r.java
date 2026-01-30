package ne;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class r {

    /* renamed from: a  reason: collision with root package name */
    public final int f40258a;

    /* renamed from: b  reason: collision with root package name */
    public final int f40259b;

    /* renamed from: c  reason: collision with root package name */
    public final float f40260c;

    /* renamed from: d  reason: collision with root package name */
    public final long f40261d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        private int f40262a;

        /* renamed from: b  reason: collision with root package name */
        private int f40263b;

        /* renamed from: c  reason: collision with root package name */
        private float f40264c = 1.0f;

        /* renamed from: d  reason: collision with root package name */
        private long f40265d;

        public b(int i10, int i11) {
            this.f40262a = i10;
            this.f40263b = i11;
        }

        public r a() {
            return new r(this.f40262a, this.f40263b, this.f40264c, this.f40265d);
        }

        public b b(float f10) {
            this.f40264c = f10;
            return this;
        }
    }

    private r(int i10, int i11, float f10, long j10) {
        boolean z10 = i10 > 0;
        ne.a.b(z10, "width must be positive, but is: " + i10);
        boolean z11 = i11 > 0;
        ne.a.b(z11, "height must be positive, but is: " + i11);
        this.f40258a = i10;
        this.f40259b = i11;
        this.f40260c = f10;
        this.f40261d = j10;
    }
}
