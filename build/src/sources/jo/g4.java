package jo;

import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g4 {

    /* renamed from: d  reason: collision with root package name */
    public static final g4 f30353d = new g4("World", 0);

    /* renamed from: e  reason: collision with root package name */
    public static final g4 f30354e = new g4("Card", 1);

    /* renamed from: i  reason: collision with root package name */
    public static final g4 f30355i = new g4("Flag", 2);

    /* renamed from: o  reason: collision with root package name */
    public static final g4 f30356o = new g4("House", 3);

    /* renamed from: p  reason: collision with root package name */
    private static final /* synthetic */ g4[] f30357p;

    /* renamed from: q  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f30358q;

    static {
        g4[] a10 = a();
        f30357p = a10;
        f30358q = xr.a.a(a10);
    }

    private g4(String str, int i10) {
    }

    private static final /* synthetic */ g4[] a() {
        return new g4[]{f30353d, f30354e, f30355i, f30356o};
    }

    public static g4 valueOf(String str) {
        return (g4) Enum.valueOf(g4.class, str);
    }

    public static g4[] values() {
        return (g4[]) f30357p.clone();
    }
}
