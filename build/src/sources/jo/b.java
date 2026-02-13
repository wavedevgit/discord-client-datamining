package jo;

import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b {

    /* renamed from: d  reason: collision with root package name */
    public static final b f31776d = new b("FaceNotCentered", 0);

    /* renamed from: e  reason: collision with root package name */
    public static final b f31777e = new b("FaceTooClose", 1);

    /* renamed from: i  reason: collision with root package name */
    public static final b f31778i = new b("FaceTooFar", 2);

    /* renamed from: o  reason: collision with root package name */
    public static final b f31779o = new b("MultipleFaces", 3);

    /* renamed from: p  reason: collision with root package name */
    public static final b f31780p = new b("IncompleteFace", 4);

    /* renamed from: q  reason: collision with root package name */
    public static final b f31781q = new b("FaceNotFound", 5);

    /* renamed from: r  reason: collision with root package name */
    public static final b f31782r = new b("IncorrectPose", 6);

    /* renamed from: s  reason: collision with root package name */
    public static final b f31783s = new b("FaceDetectionUnsupported", 7);

    /* renamed from: t  reason: collision with root package name */
    public static final b f31784t = new b("Other", 8);

    /* renamed from: u  reason: collision with root package name */
    private static final /* synthetic */ b[] f31785u;

    /* renamed from: v  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f31786v;

    static {
        b[] a10 = a();
        f31785u = a10;
        f31786v = hs.a.a(a10);
    }

    private b(String str, int i10) {
    }

    private static final /* synthetic */ b[] a() {
        return new b[]{f31776d, f31777e, f31778i, f31779o, f31780p, f31781q, f31782r, f31783s, f31784t};
    }

    public static b valueOf(String str) {
        return (b) Enum.valueOf(b.class, str);
    }

    public static b[] values() {
        return (b[]) f31785u.clone();
    }
}
