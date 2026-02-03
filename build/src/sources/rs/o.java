package rs;

import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class o {

    /* renamed from: d  reason: collision with root package name */
    public static final o f49107d = new o("SUCCESSFUL", 0);

    /* renamed from: e  reason: collision with root package name */
    public static final o f49108e = new o("REREGISTER", 1);

    /* renamed from: i  reason: collision with root package name */
    public static final o f49109i = new o("CANCELLED", 2);

    /* renamed from: o  reason: collision with root package name */
    public static final o f49110o = new o("ALREADY_SELECTED", 3);

    /* renamed from: p  reason: collision with root package name */
    private static final /* synthetic */ o[] f49111p;

    /* renamed from: q  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f49112q;

    static {
        o[] a10 = a();
        f49111p = a10;
        f49112q = sr.a.a(a10);
    }

    private o(String str, int i10) {
    }

    private static final /* synthetic */ o[] a() {
        return new o[]{f49107d, f49108e, f49109i, f49110o};
    }

    public static o valueOf(String str) {
        return (o) Enum.valueOf(o.class, str);
    }

    public static o[] values() {
        return (o[]) f49111p.clone();
    }
}
