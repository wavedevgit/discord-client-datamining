package x4;

import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class n {

    /* renamed from: d  reason: collision with root package name */
    public static final n f54627d = new n("IGNORE", 0);

    /* renamed from: e  reason: collision with root package name */
    public static final n f54628e = new n("RESPECT_PERFORMANCE", 1);

    /* renamed from: i  reason: collision with root package name */
    public static final n f54629i = new n("RESPECT_ALL", 2);

    /* renamed from: o  reason: collision with root package name */
    private static final /* synthetic */ n[] f54630o;

    /* renamed from: p  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f54631p;

    static {
        n[] a10 = a();
        f54630o = a10;
        f54631p = yr.a.a(a10);
    }

    private n(String str, int i10) {
    }

    private static final /* synthetic */ n[] a() {
        return new n[]{f54627d, f54628e, f54629i};
    }

    public static n valueOf(String str) {
        return (n) Enum.valueOf(n.class, str);
    }

    public static n[] values() {
        return (n[]) f54630o.clone();
    }
}
