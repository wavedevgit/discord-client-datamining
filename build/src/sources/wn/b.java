package wn;

import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b {

    /* renamed from: d  reason: collision with root package name */
    public static final b f53161d = new b("FaceNotCentered", 0);

    /* renamed from: e  reason: collision with root package name */
    public static final b f53162e = new b("FaceTooClose", 1);

    /* renamed from: i  reason: collision with root package name */
    public static final b f53163i = new b("FaceTooFar", 2);

    /* renamed from: o  reason: collision with root package name */
    public static final b f53164o = new b("MultipleFaces", 3);

    /* renamed from: p  reason: collision with root package name */
    public static final b f53165p = new b("IncompleteFace", 4);

    /* renamed from: q  reason: collision with root package name */
    public static final b f53166q = new b("FaceNotFound", 5);

    /* renamed from: r  reason: collision with root package name */
    public static final b f53167r = new b("IncorrectPose", 6);

    /* renamed from: s  reason: collision with root package name */
    public static final b f53168s = new b("FaceDetectionUnsupported", 7);

    /* renamed from: t  reason: collision with root package name */
    public static final b f53169t = new b("Other", 8);

    /* renamed from: u  reason: collision with root package name */
    private static final /* synthetic */ b[] f53170u;

    /* renamed from: v  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f53171v;

    static {
        b[] a10 = a();
        f53170u = a10;
        f53171v = vr.a.a(a10);
    }

    private b(String str, int i10) {
    }

    private static final /* synthetic */ b[] a() {
        return new b[]{f53161d, f53162e, f53163i, f53164o, f53165p, f53166q, f53167r, f53168s, f53169t};
    }

    public static b valueOf(String str) {
        return (b) Enum.valueOf(b.class, str);
    }

    public static b[] values() {
        return (b[]) f53170u.clone();
    }
}
