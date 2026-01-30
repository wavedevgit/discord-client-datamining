package ir;

import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class o {

    /* renamed from: d  reason: collision with root package name */
    public static final o f31118d = new o("SYNCHRONIZED", 0);

    /* renamed from: e  reason: collision with root package name */
    public static final o f31119e = new o("PUBLICATION", 1);

    /* renamed from: i  reason: collision with root package name */
    public static final o f31120i = new o("NONE", 2);

    /* renamed from: o  reason: collision with root package name */
    private static final /* synthetic */ o[] f31121o;

    /* renamed from: p  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f31122p;

    static {
        o[] a10 = a();
        f31121o = a10;
        f31122p = pr.a.a(a10);
    }

    private o(String str, int i10) {
    }

    private static final /* synthetic */ o[] a() {
        return new o[]{f31118d, f31119e, f31120i};
    }

    public static o valueOf(String str) {
        return (o) Enum.valueOf(o.class, str);
    }

    public static o[] values() {
        return (o[]) f31121o.clone();
    }
}
