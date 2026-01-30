package qn;

import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b {

    /* renamed from: d  reason: collision with root package name */
    public static final b f47537d = new b("FaceNotCentered", 0);

    /* renamed from: e  reason: collision with root package name */
    public static final b f47538e = new b("FaceTooClose", 1);

    /* renamed from: i  reason: collision with root package name */
    public static final b f47539i = new b("FaceTooFar", 2);

    /* renamed from: o  reason: collision with root package name */
    public static final b f47540o = new b("MultipleFaces", 3);

    /* renamed from: p  reason: collision with root package name */
    public static final b f47541p = new b("IncompleteFace", 4);

    /* renamed from: q  reason: collision with root package name */
    public static final b f47542q = new b("FaceNotFound", 5);

    /* renamed from: r  reason: collision with root package name */
    public static final b f47543r = new b("IncorrectPose", 6);

    /* renamed from: s  reason: collision with root package name */
    public static final b f47544s = new b("FaceDetectionUnsupported", 7);

    /* renamed from: t  reason: collision with root package name */
    public static final b f47545t = new b("Other", 8);

    /* renamed from: u  reason: collision with root package name */
    private static final /* synthetic */ b[] f47546u;

    /* renamed from: v  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f47547v;

    static {
        b[] a10 = a();
        f47546u = a10;
        f47547v = pr.a.a(a10);
    }

    private b(String str, int i10) {
    }

    private static final /* synthetic */ b[] a() {
        return new b[]{f47537d, f47538e, f47539i, f47540o, f47541p, f47542q, f47543r, f47544s, f47545t};
    }

    public static b valueOf(String str) {
        return (b) Enum.valueOf(b.class, str);
    }

    public static b[] values() {
        return (b[]) f47546u.clone();
    }
}
