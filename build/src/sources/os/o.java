package os;

import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class o {

    /* renamed from: d  reason: collision with root package name */
    public static final o f44756d = new o("SUCCESSFUL", 0);

    /* renamed from: e  reason: collision with root package name */
    public static final o f44757e = new o("REREGISTER", 1);

    /* renamed from: i  reason: collision with root package name */
    public static final o f44758i = new o("CANCELLED", 2);

    /* renamed from: o  reason: collision with root package name */
    public static final o f44759o = new o("ALREADY_SELECTED", 3);

    /* renamed from: p  reason: collision with root package name */
    private static final /* synthetic */ o[] f44760p;

    /* renamed from: q  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f44761q;

    static {
        o[] a10 = a();
        f44760p = a10;
        f44761q = pr.a.a(a10);
    }

    private o(String str, int i10) {
    }

    private static final /* synthetic */ o[] a() {
        return new o[]{f44756d, f44757e, f44758i, f44759o};
    }

    public static o valueOf(String str) {
        return (o) Enum.valueOf(o.class, str);
    }

    public static o[] values() {
        return (o[]) f44760p.clone();
    }
}
