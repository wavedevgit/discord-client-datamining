package qn;

import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b {

    /* renamed from: d  reason: collision with root package name */
    public static final b f47521d = new b("FaceNotCentered", 0);

    /* renamed from: e  reason: collision with root package name */
    public static final b f47522e = new b("FaceTooClose", 1);

    /* renamed from: i  reason: collision with root package name */
    public static final b f47523i = new b("FaceTooFar", 2);

    /* renamed from: o  reason: collision with root package name */
    public static final b f47524o = new b("MultipleFaces", 3);

    /* renamed from: p  reason: collision with root package name */
    public static final b f47525p = new b("IncompleteFace", 4);

    /* renamed from: q  reason: collision with root package name */
    public static final b f47526q = new b("FaceNotFound", 5);

    /* renamed from: r  reason: collision with root package name */
    public static final b f47527r = new b("IncorrectPose", 6);

    /* renamed from: s  reason: collision with root package name */
    public static final b f47528s = new b("FaceDetectionUnsupported", 7);

    /* renamed from: t  reason: collision with root package name */
    public static final b f47529t = new b("Other", 8);

    /* renamed from: u  reason: collision with root package name */
    private static final /* synthetic */ b[] f47530u;

    /* renamed from: v  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f47531v;

    static {
        b[] a10 = a();
        f47530u = a10;
        f47531v = pr.a.a(a10);
    }

    private b(String str, int i10) {
    }

    private static final /* synthetic */ b[] a() {
        return new b[]{f47521d, f47522e, f47523i, f47524o, f47525p, f47526q, f47527r, f47528s, f47529t};
    }

    public static b valueOf(String str) {
        return (b) Enum.valueOf(b.class, str);
    }

    public static b[] values() {
        return (b[]) f47530u.clone();
    }
}
