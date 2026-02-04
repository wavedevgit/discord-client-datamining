package tn;

import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b {

    /* renamed from: d  reason: collision with root package name */
    public static final b f50140d = new b("FaceNotCentered", 0);

    /* renamed from: e  reason: collision with root package name */
    public static final b f50141e = new b("FaceTooClose", 1);

    /* renamed from: i  reason: collision with root package name */
    public static final b f50142i = new b("FaceTooFar", 2);

    /* renamed from: o  reason: collision with root package name */
    public static final b f50143o = new b("MultipleFaces", 3);

    /* renamed from: p  reason: collision with root package name */
    public static final b f50144p = new b("IncompleteFace", 4);

    /* renamed from: q  reason: collision with root package name */
    public static final b f50145q = new b("FaceNotFound", 5);

    /* renamed from: r  reason: collision with root package name */
    public static final b f50146r = new b("IncorrectPose", 6);

    /* renamed from: s  reason: collision with root package name */
    public static final b f50147s = new b("FaceDetectionUnsupported", 7);

    /* renamed from: t  reason: collision with root package name */
    public static final b f50148t = new b("Other", 8);

    /* renamed from: u  reason: collision with root package name */
    private static final /* synthetic */ b[] f50149u;

    /* renamed from: v  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f50150v;

    static {
        b[] a10 = a();
        f50149u = a10;
        f50150v = sr.a.a(a10);
    }

    private b(String str, int i10) {
    }

    private static final /* synthetic */ b[] a() {
        return new b[]{f50140d, f50141e, f50142i, f50143o, f50144p, f50145q, f50146r, f50147s, f50148t};
    }

    public static b valueOf(String str) {
        return (b) Enum.valueOf(b.class, str);
    }

    public static b[] values() {
        return (b[]) f50149u.clone();
    }
}
