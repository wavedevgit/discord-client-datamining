package rn;

import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b {

    /* renamed from: d  reason: collision with root package name */
    public static final b f48563d = new b("FaceNotCentered", 0);

    /* renamed from: e  reason: collision with root package name */
    public static final b f48564e = new b("FaceTooClose", 1);

    /* renamed from: i  reason: collision with root package name */
    public static final b f48565i = new b("FaceTooFar", 2);

    /* renamed from: o  reason: collision with root package name */
    public static final b f48566o = new b("MultipleFaces", 3);

    /* renamed from: p  reason: collision with root package name */
    public static final b f48567p = new b("IncompleteFace", 4);

    /* renamed from: q  reason: collision with root package name */
    public static final b f48568q = new b("FaceNotFound", 5);

    /* renamed from: r  reason: collision with root package name */
    public static final b f48569r = new b("IncorrectPose", 6);

    /* renamed from: s  reason: collision with root package name */
    public static final b f48570s = new b("FaceDetectionUnsupported", 7);

    /* renamed from: t  reason: collision with root package name */
    public static final b f48571t = new b("Other", 8);

    /* renamed from: u  reason: collision with root package name */
    private static final /* synthetic */ b[] f48572u;

    /* renamed from: v  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f48573v;

    static {
        b[] a10 = a();
        f48572u = a10;
        f48573v = qr.a.a(a10);
    }

    private b(String str, int i10) {
    }

    private static final /* synthetic */ b[] a() {
        return new b[]{f48563d, f48564e, f48565i, f48566o, f48567p, f48568q, f48569r, f48570s, f48571t};
    }

    public static b valueOf(String str) {
        return (b) Enum.valueOf(b.class, str);
    }

    public static b[] values() {
        return (b[]) f48572u.clone();
    }
}
