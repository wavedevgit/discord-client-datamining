package ne;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class r {

    /* renamed from: a  reason: collision with root package name */
    public final int f40160a;

    /* renamed from: b  reason: collision with root package name */
    public final int f40161b;

    /* renamed from: c  reason: collision with root package name */
    public final float f40162c;

    /* renamed from: d  reason: collision with root package name */
    public final long f40163d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        private int f40164a;

        /* renamed from: b  reason: collision with root package name */
        private int f40165b;

        /* renamed from: c  reason: collision with root package name */
        private float f40166c = 1.0f;

        /* renamed from: d  reason: collision with root package name */
        private long f40167d;

        public b(int i10, int i11) {
            this.f40164a = i10;
            this.f40165b = i11;
        }

        public r a() {
            return new r(this.f40164a, this.f40165b, this.f40166c, this.f40167d);
        }

        public b b(float f10) {
            this.f40166c = f10;
            return this;
        }
    }

    private r(int i10, int i11, float f10, long j10) {
        boolean z10 = i10 > 0;
        ne.a.b(z10, "width must be positive, but is: " + i10);
        boolean z11 = i11 > 0;
        ne.a.b(z11, "height must be positive, but is: " + i11);
        this.f40160a = i10;
        this.f40161b = i11;
        this.f40162c = f10;
        this.f40163d = j10;
    }
}
