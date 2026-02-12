package oe;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class r {

    /* renamed from: a  reason: collision with root package name */
    public final int f39001a;

    /* renamed from: b  reason: collision with root package name */
    public final int f39002b;

    /* renamed from: c  reason: collision with root package name */
    public final float f39003c;

    /* renamed from: d  reason: collision with root package name */
    public final long f39004d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        private int f39005a;

        /* renamed from: b  reason: collision with root package name */
        private int f39006b;

        /* renamed from: c  reason: collision with root package name */
        private float f39007c = 1.0f;

        /* renamed from: d  reason: collision with root package name */
        private long f39008d;

        public b(int i10, int i11) {
            this.f39005a = i10;
            this.f39006b = i11;
        }

        public r a() {
            return new r(this.f39005a, this.f39006b, this.f39007c, this.f39008d);
        }

        public b b(float f10) {
            this.f39007c = f10;
            return this;
        }
    }

    private r(int i10, int i11, float f10, long j10) {
        boolean z10 = i10 > 0;
        oe.a.b(z10, "width must be positive, but is: " + i10);
        boolean z11 = i11 > 0;
        oe.a.b(z11, "height must be positive, but is: " + i11);
        this.f39001a = i10;
        this.f39002b = i11;
        this.f39003c = f10;
        this.f39004d = j10;
    }
}
