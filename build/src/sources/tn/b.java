package tn;

import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b {

    /* renamed from: d  reason: collision with root package name */
    public static final b f50143d = new b("FaceNotCentered", 0);

    /* renamed from: e  reason: collision with root package name */
    public static final b f50144e = new b("FaceTooClose", 1);

    /* renamed from: i  reason: collision with root package name */
    public static final b f50145i = new b("FaceTooFar", 2);

    /* renamed from: o  reason: collision with root package name */
    public static final b f50146o = new b("MultipleFaces", 3);

    /* renamed from: p  reason: collision with root package name */
    public static final b f50147p = new b("IncompleteFace", 4);

    /* renamed from: q  reason: collision with root package name */
    public static final b f50148q = new b("FaceNotFound", 5);

    /* renamed from: r  reason: collision with root package name */
    public static final b f50149r = new b("IncorrectPose", 6);

    /* renamed from: s  reason: collision with root package name */
    public static final b f50150s = new b("FaceDetectionUnsupported", 7);

    /* renamed from: t  reason: collision with root package name */
    public static final b f50151t = new b("Other", 8);

    /* renamed from: u  reason: collision with root package name */
    private static final /* synthetic */ b[] f50152u;

    /* renamed from: v  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f50153v;

    static {
        b[] a10 = a();
        f50152u = a10;
        f50153v = sr.a.a(a10);
    }

    private b(String str, int i10) {
    }

    private static final /* synthetic */ b[] a() {
        return new b[]{f50143d, f50144e, f50145i, f50146o, f50147p, f50148q, f50149r, f50150s, f50151t};
    }

    public static b valueOf(String str) {
        return (b) Enum.valueOf(b.class, str);
    }

    public static b[] values() {
        return (b[]) f50152u.clone();
    }
}
