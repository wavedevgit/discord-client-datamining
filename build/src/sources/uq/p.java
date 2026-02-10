package uq;

import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class p {

    /* renamed from: d  reason: collision with root package name */
    public static final p f50960d = new p("BASE", 0);

    /* renamed from: e  reason: collision with root package name */
    public static final p f50961e = new p("ACTIVE", 1);

    /* renamed from: i  reason: collision with root package name */
    public static final p f50962i = new p("DISABLED", 2);

    /* renamed from: o  reason: collision with root package name */
    private static final /* synthetic */ p[] f50963o;

    /* renamed from: p  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f50964p;

    static {
        p[] a10 = a();
        f50963o = a10;
        f50964p = hs.a.a(a10);
    }

    private p(String str, int i10) {
    }

    private static final /* synthetic */ p[] a() {
        return new p[]{f50960d, f50961e, f50962i};
    }

    public static p valueOf(String str) {
        return (p) Enum.valueOf(p.class, str);
    }

    public static p[] values() {
        return (p[]) f50963o.clone();
    }
}
