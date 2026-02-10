package wp;

import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class h1 {

    /* renamed from: d  reason: collision with root package name */
    public static final h1 f53105d = new h1("Center", 0);

    /* renamed from: e  reason: collision with root package name */
    public static final h1 f53106e = new h1("Left", 1);

    /* renamed from: i  reason: collision with root package name */
    public static final h1 f53107i = new h1("Right", 2);

    /* renamed from: o  reason: collision with root package name */
    private static final /* synthetic */ h1[] f53108o;

    /* renamed from: p  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f53109p;

    static {
        h1[] a10 = a();
        f53108o = a10;
        f53109p = hs.a.a(a10);
    }

    private h1(String str, int i10) {
    }

    private static final /* synthetic */ h1[] a() {
        return new h1[]{f53105d, f53106e, f53107i};
    }

    public static h1 valueOf(String str) {
        return (h1) Enum.valueOf(h1.class, str);
    }

    public static h1[] values() {
        return (h1[]) f53108o.clone();
    }
}
