package yn;

import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b {

    /* renamed from: d  reason: collision with root package name */
    public static final b f55524d = new b("FaceNotCentered", 0);

    /* renamed from: e  reason: collision with root package name */
    public static final b f55525e = new b("FaceTooClose", 1);

    /* renamed from: i  reason: collision with root package name */
    public static final b f55526i = new b("FaceTooFar", 2);

    /* renamed from: o  reason: collision with root package name */
    public static final b f55527o = new b("MultipleFaces", 3);

    /* renamed from: p  reason: collision with root package name */
    public static final b f55528p = new b("IncompleteFace", 4);

    /* renamed from: q  reason: collision with root package name */
    public static final b f55529q = new b("FaceNotFound", 5);

    /* renamed from: r  reason: collision with root package name */
    public static final b f55530r = new b("IncorrectPose", 6);

    /* renamed from: s  reason: collision with root package name */
    public static final b f55531s = new b("FaceDetectionUnsupported", 7);

    /* renamed from: t  reason: collision with root package name */
    public static final b f55532t = new b("Other", 8);

    /* renamed from: u  reason: collision with root package name */
    private static final /* synthetic */ b[] f55533u;

    /* renamed from: v  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f55534v;

    static {
        b[] a10 = a();
        f55533u = a10;
        f55534v = xr.a.a(a10);
    }

    private b(String str, int i10) {
    }

    private static final /* synthetic */ b[] a() {
        return new b[]{f55524d, f55525e, f55526i, f55527o, f55528p, f55529q, f55530r, f55531s, f55532t};
    }

    public static b valueOf(String str) {
        return (b) Enum.valueOf(b.class, str);
    }

    public static b[] values() {
        return (b[]) f55533u.clone();
    }
}
