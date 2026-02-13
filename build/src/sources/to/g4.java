package to;

import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g4 {

    /* renamed from: d  reason: collision with root package name */
    public static final g4 f49865d = new g4("World", 0);

    /* renamed from: e  reason: collision with root package name */
    public static final g4 f49866e = new g4("Card", 1);

    /* renamed from: i  reason: collision with root package name */
    public static final g4 f49867i = new g4("Flag", 2);

    /* renamed from: o  reason: collision with root package name */
    public static final g4 f49868o = new g4("House", 3);

    /* renamed from: p  reason: collision with root package name */
    private static final /* synthetic */ g4[] f49869p;

    /* renamed from: q  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f49870q;

    static {
        g4[] a10 = a();
        f49869p = a10;
        f49870q = hs.a.a(a10);
    }

    private g4(String str, int i10) {
    }

    private static final /* synthetic */ g4[] a() {
        return new g4[]{f49865d, f49866e, f49867i, f49868o};
    }

    public static g4 valueOf(String str) {
        return (g4) Enum.valueOf(g4.class, str);
    }

    public static g4[] values() {
        return (g4[]) f49869p.clone();
    }
}
