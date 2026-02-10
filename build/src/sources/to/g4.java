package to;

import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g4 {

    /* renamed from: d  reason: collision with root package name */
    public static final g4 f49296d = new g4("World", 0);

    /* renamed from: e  reason: collision with root package name */
    public static final g4 f49297e = new g4("Card", 1);

    /* renamed from: i  reason: collision with root package name */
    public static final g4 f49298i = new g4("Flag", 2);

    /* renamed from: o  reason: collision with root package name */
    public static final g4 f49299o = new g4("House", 3);

    /* renamed from: p  reason: collision with root package name */
    private static final /* synthetic */ g4[] f49300p;

    /* renamed from: q  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f49301q;

    static {
        g4[] a10 = a();
        f49300p = a10;
        f49301q = hs.a.a(a10);
    }

    private g4(String str, int i10) {
    }

    private static final /* synthetic */ g4[] a() {
        return new g4[]{f49296d, f49297e, f49298i, f49299o};
    }

    public static g4 valueOf(String str) {
        return (g4) Enum.valueOf(g4.class, str);
    }

    public static g4[] values() {
        return (g4[]) f49300p.clone();
    }
}
