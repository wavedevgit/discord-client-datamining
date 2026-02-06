package ws;

import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class o {

    /* renamed from: d  reason: collision with root package name */
    public static final o f54106d = new o("SUCCESSFUL", 0);

    /* renamed from: e  reason: collision with root package name */
    public static final o f54107e = new o("REREGISTER", 1);

    /* renamed from: i  reason: collision with root package name */
    public static final o f54108i = new o("CANCELLED", 2);

    /* renamed from: o  reason: collision with root package name */
    public static final o f54109o = new o("ALREADY_SELECTED", 3);

    /* renamed from: p  reason: collision with root package name */
    private static final /* synthetic */ o[] f54110p;

    /* renamed from: q  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f54111q;

    static {
        o[] a10 = a();
        f54110p = a10;
        f54111q = xr.a.a(a10);
    }

    private o(String str, int i10) {
    }

    private static final /* synthetic */ o[] a() {
        return new o[]{f54106d, f54107e, f54108i, f54109o};
    }

    public static o valueOf(String str) {
        return (o) Enum.valueOf(o.class, str);
    }

    public static o[] values() {
        return (o[]) f54110p.clone();
    }
}
