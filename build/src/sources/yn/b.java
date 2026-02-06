package yn;

import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b {

    /* renamed from: d  reason: collision with root package name */
    public static final b f55476d = new b("FaceNotCentered", 0);

    /* renamed from: e  reason: collision with root package name */
    public static final b f55477e = new b("FaceTooClose", 1);

    /* renamed from: i  reason: collision with root package name */
    public static final b f55478i = new b("FaceTooFar", 2);

    /* renamed from: o  reason: collision with root package name */
    public static final b f55479o = new b("MultipleFaces", 3);

    /* renamed from: p  reason: collision with root package name */
    public static final b f55480p = new b("IncompleteFace", 4);

    /* renamed from: q  reason: collision with root package name */
    public static final b f55481q = new b("FaceNotFound", 5);

    /* renamed from: r  reason: collision with root package name */
    public static final b f55482r = new b("IncorrectPose", 6);

    /* renamed from: s  reason: collision with root package name */
    public static final b f55483s = new b("FaceDetectionUnsupported", 7);

    /* renamed from: t  reason: collision with root package name */
    public static final b f55484t = new b("Other", 8);

    /* renamed from: u  reason: collision with root package name */
    private static final /* synthetic */ b[] f55485u;

    /* renamed from: v  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f55486v;

    static {
        b[] a10 = a();
        f55485u = a10;
        f55486v = xr.a.a(a10);
    }

    private b(String str, int i10) {
    }

    private static final /* synthetic */ b[] a() {
        return new b[]{f55476d, f55477e, f55478i, f55479o, f55480p, f55481q, f55482r, f55483s, f55484t};
    }

    public static b valueOf(String str) {
        return (b) Enum.valueOf(b.class, str);
    }

    public static b[] values() {
        return (b[]) f55485u.clone();
    }
}
