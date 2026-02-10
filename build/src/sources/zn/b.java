package zn;

import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b {

    /* renamed from: d  reason: collision with root package name */
    public static final b f56549d = new b("FaceNotCentered", 0);

    /* renamed from: e  reason: collision with root package name */
    public static final b f56550e = new b("FaceTooClose", 1);

    /* renamed from: i  reason: collision with root package name */
    public static final b f56551i = new b("FaceTooFar", 2);

    /* renamed from: o  reason: collision with root package name */
    public static final b f56552o = new b("MultipleFaces", 3);

    /* renamed from: p  reason: collision with root package name */
    public static final b f56553p = new b("IncompleteFace", 4);

    /* renamed from: q  reason: collision with root package name */
    public static final b f56554q = new b("FaceNotFound", 5);

    /* renamed from: r  reason: collision with root package name */
    public static final b f56555r = new b("IncorrectPose", 6);

    /* renamed from: s  reason: collision with root package name */
    public static final b f56556s = new b("FaceDetectionUnsupported", 7);

    /* renamed from: t  reason: collision with root package name */
    public static final b f56557t = new b("Other", 8);

    /* renamed from: u  reason: collision with root package name */
    private static final /* synthetic */ b[] f56558u;

    /* renamed from: v  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f56559v;

    static {
        b[] a10 = a();
        f56558u = a10;
        f56559v = yr.a.a(a10);
    }

    private b(String str, int i10) {
    }

    private static final /* synthetic */ b[] a() {
        return new b[]{f56549d, f56550e, f56551i, f56552o, f56553p, f56554q, f56555r, f56556s, f56557t};
    }

    public static b valueOf(String str) {
        return (b) Enum.valueOf(b.class, str);
    }

    public static b[] values() {
        return (b[]) f56558u.clone();
    }
}
