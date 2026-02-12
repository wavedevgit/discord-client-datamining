package jo;

import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b {

    /* renamed from: d  reason: collision with root package name */
    public static final b f31208d = new b("FaceNotCentered", 0);

    /* renamed from: e  reason: collision with root package name */
    public static final b f31209e = new b("FaceTooClose", 1);

    /* renamed from: i  reason: collision with root package name */
    public static final b f31210i = new b("FaceTooFar", 2);

    /* renamed from: o  reason: collision with root package name */
    public static final b f31211o = new b("MultipleFaces", 3);

    /* renamed from: p  reason: collision with root package name */
    public static final b f31212p = new b("IncompleteFace", 4);

    /* renamed from: q  reason: collision with root package name */
    public static final b f31213q = new b("FaceNotFound", 5);

    /* renamed from: r  reason: collision with root package name */
    public static final b f31214r = new b("IncorrectPose", 6);

    /* renamed from: s  reason: collision with root package name */
    public static final b f31215s = new b("FaceDetectionUnsupported", 7);

    /* renamed from: t  reason: collision with root package name */
    public static final b f31216t = new b("Other", 8);

    /* renamed from: u  reason: collision with root package name */
    private static final /* synthetic */ b[] f31217u;

    /* renamed from: v  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f31218v;

    static {
        b[] a10 = a();
        f31217u = a10;
        f31218v = hs.a.a(a10);
    }

    private b(String str, int i10) {
    }

    private static final /* synthetic */ b[] a() {
        return new b[]{f31208d, f31209e, f31210i, f31211o, f31212p, f31213q, f31214r, f31215s, f31216t};
    }

    public static b valueOf(String str) {
        return (b) Enum.valueOf(b.class, str);
    }

    public static b[] values() {
        return (b[]) f31217u.clone();
    }
}
