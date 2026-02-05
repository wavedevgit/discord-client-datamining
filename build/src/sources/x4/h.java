package x4;

import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class h {

    /* renamed from: d  reason: collision with root package name */
    public static final h f53652d = new h("MEMORY_CACHE", 0);

    /* renamed from: e  reason: collision with root package name */
    public static final h f53653e = new h("MEMORY", 1);

    /* renamed from: i  reason: collision with root package name */
    public static final h f53654i = new h("DISK", 2);

    /* renamed from: o  reason: collision with root package name */
    public static final h f53655o = new h("NETWORK", 3);

    /* renamed from: p  reason: collision with root package name */
    private static final /* synthetic */ h[] f53656p;

    /* renamed from: q  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f53657q;

    static {
        h[] a10 = a();
        f53656p = a10;
        f53657q = vr.a.a(a10);
    }

    private h(String str, int i10) {
    }

    private static final /* synthetic */ h[] a() {
        return new h[]{f53652d, f53653e, f53654i, f53655o};
    }

    public static h valueOf(String str) {
        return (h) Enum.valueOf(h.class, str);
    }

    public static h[] values() {
        return (h[]) f53656p.clone();
    }
}
