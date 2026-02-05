package x4;

import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class n {

    /* renamed from: d  reason: collision with root package name */
    public static final n f53668d = new n("IGNORE", 0);

    /* renamed from: e  reason: collision with root package name */
    public static final n f53669e = new n("RESPECT_PERFORMANCE", 1);

    /* renamed from: i  reason: collision with root package name */
    public static final n f53670i = new n("RESPECT_ALL", 2);

    /* renamed from: o  reason: collision with root package name */
    private static final /* synthetic */ n[] f53671o;

    /* renamed from: p  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f53672p;

    static {
        n[] a10 = a();
        f53671o = a10;
        f53672p = vr.a.a(a10);
    }

    private n(String str, int i10) {
    }

    private static final /* synthetic */ n[] a() {
        return new n[]{f53668d, f53669e, f53670i};
    }

    public static n valueOf(String str) {
        return (n) Enum.valueOf(n.class, str);
    }

    public static n[] values() {
        return (n[]) f53671o.clone();
    }
}
