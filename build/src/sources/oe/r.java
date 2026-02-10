package oe;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class r {

    /* renamed from: a  reason: collision with root package name */
    public final int f39000a;

    /* renamed from: b  reason: collision with root package name */
    public final int f39001b;

    /* renamed from: c  reason: collision with root package name */
    public final float f39002c;

    /* renamed from: d  reason: collision with root package name */
    public final long f39003d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        private int f39004a;

        /* renamed from: b  reason: collision with root package name */
        private int f39005b;

        /* renamed from: c  reason: collision with root package name */
        private float f39006c = 1.0f;

        /* renamed from: d  reason: collision with root package name */
        private long f39007d;

        public b(int i10, int i11) {
            this.f39004a = i10;
            this.f39005b = i11;
        }

        public r a() {
            return new r(this.f39004a, this.f39005b, this.f39006c, this.f39007d);
        }

        public b b(float f10) {
            this.f39006c = f10;
            return this;
        }
    }

    private r(int i10, int i11, float f10, long j10) {
        boolean z10 = i10 > 0;
        oe.a.b(z10, "width must be positive, but is: " + i10);
        boolean z11 = i11 > 0;
        oe.a.b(z11, "height must be positive, but is: " + i11);
        this.f39000a = i10;
        this.f39001b = i11;
        this.f39002c = f10;
        this.f39003d = j10;
    }
}
