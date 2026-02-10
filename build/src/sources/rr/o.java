package rr;

import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class o {

    /* renamed from: d  reason: collision with root package name */
    public static final o f49209d = new o("SYNCHRONIZED", 0);

    /* renamed from: e  reason: collision with root package name */
    public static final o f49210e = new o("PUBLICATION", 1);

    /* renamed from: i  reason: collision with root package name */
    public static final o f49211i = new o("NONE", 2);

    /* renamed from: o  reason: collision with root package name */
    private static final /* synthetic */ o[] f49212o;

    /* renamed from: p  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f49213p;

    static {
        o[] a10 = a();
        f49212o = a10;
        f49213p = yr.a.a(a10);
    }

    private o(String str, int i10) {
    }

    private static final /* synthetic */ o[] a() {
        return new o[]{f49209d, f49210e, f49211i};
    }

    public static o valueOf(String str) {
        return (o) Enum.valueOf(o.class, str);
    }

    public static o[] values() {
        return (o[]) f49212o.clone();
    }
}
