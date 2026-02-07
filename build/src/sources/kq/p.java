package kq;

import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class p {

    /* renamed from: d  reason: collision with root package name */
    public static final p f35276d = new p("BASE", 0);

    /* renamed from: e  reason: collision with root package name */
    public static final p f35277e = new p("ACTIVE", 1);

    /* renamed from: i  reason: collision with root package name */
    public static final p f35278i = new p("DISABLED", 2);

    /* renamed from: o  reason: collision with root package name */
    private static final /* synthetic */ p[] f35279o;

    /* renamed from: p  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f35280p;

    static {
        p[] a10 = a();
        f35279o = a10;
        f35280p = xr.a.a(a10);
    }

    private p(String str, int i10) {
    }

    private static final /* synthetic */ p[] a() {
        return new p[]{f35276d, f35277e, f35278i};
    }

    public static p valueOf(String str) {
        return (p) Enum.valueOf(p.class, str);
    }

    public static p[] values() {
        return (p[]) f35279o.clone();
    }
}
