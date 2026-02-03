package x4;

import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class h {

    /* renamed from: d  reason: collision with root package name */
    public static final h f53111d = new h("MEMORY_CACHE", 0);

    /* renamed from: e  reason: collision with root package name */
    public static final h f53112e = new h("MEMORY", 1);

    /* renamed from: i  reason: collision with root package name */
    public static final h f53113i = new h("DISK", 2);

    /* renamed from: o  reason: collision with root package name */
    public static final h f53114o = new h("NETWORK", 3);

    /* renamed from: p  reason: collision with root package name */
    private static final /* synthetic */ h[] f53115p;

    /* renamed from: q  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f53116q;

    static {
        h[] a10 = a();
        f53115p = a10;
        f53116q = sr.a.a(a10);
    }

    private h(String str, int i10) {
    }

    private static final /* synthetic */ h[] a() {
        return new h[]{f53111d, f53112e, f53113i, f53114o};
    }

    public static h valueOf(String str) {
        return (h) Enum.valueOf(h.class, str);
    }

    public static h[] values() {
        return (h[]) f53115p.clone();
    }
}
