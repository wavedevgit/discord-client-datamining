package x;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class z {

    /* renamed from: c  reason: collision with root package name */
    public static final z f54449c = new z(0, 0);

    /* renamed from: d  reason: collision with root package name */
    public static final z f54450d = new z(1, 8);

    /* renamed from: e  reason: collision with root package name */
    public static final z f54451e = new z(2, 10);

    /* renamed from: f  reason: collision with root package name */
    public static final z f54452f = new z(3, 10);

    /* renamed from: g  reason: collision with root package name */
    public static final z f54453g = new z(4, 10);

    /* renamed from: h  reason: collision with root package name */
    public static final z f54454h = new z(5, 10);

    /* renamed from: i  reason: collision with root package name */
    public static final z f54455i = new z(6, 10);

    /* renamed from: j  reason: collision with root package name */
    public static final z f54456j = new z(6, 8);

    /* renamed from: a  reason: collision with root package name */
    private final int f54457a;

    /* renamed from: b  reason: collision with root package name */
    private final int f54458b;

    public z(int i10, int i11) {
        this.f54457a = i10;
        this.f54458b = i11;
    }

    private static String c(int i10) {
        switch (i10) {
            case 0:
                return "UNSPECIFIED";
            case 1:
                return "SDR";
            case 2:
                return "HDR_UNSPECIFIED";
            case 3:
                return "HLG";
            case 4:
                return "HDR10";
            case 5:
                return "HDR10_PLUS";
            case 6:
                return "DOLBY_VISION";
            default:
                return "<Unknown>";
        }
    }

    public int a() {
        return this.f54458b;
    }

    public int b() {
        return this.f54457a;
    }

    public boolean d() {
        if (e() && b() != 1 && a() == 10) {
            return true;
        }
        return false;
    }

    public boolean e() {
        if (b() != 0 && b() != 2 && a() != 0) {
            return true;
        }
        return false;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof z) {
            z zVar = (z) obj;
            if (this.f54457a == zVar.b() && this.f54458b == zVar.a()) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((this.f54457a ^ 1000003) * 1000003) ^ this.f54458b;
    }

    public String toString() {
        return "DynamicRange@" + Integer.toHexString(System.identityHashCode(this)) + "{encoding=" + c(this.f54457a) + ", bitDepth=" + this.f54458b + "}";
    }
}
