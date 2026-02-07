package x4;

import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class h {

    /* renamed from: d  reason: collision with root package name */
    public static final h f54519d = new h("MEMORY_CACHE", 0);

    /* renamed from: e  reason: collision with root package name */
    public static final h f54520e = new h("MEMORY", 1);

    /* renamed from: i  reason: collision with root package name */
    public static final h f54521i = new h("DISK", 2);

    /* renamed from: o  reason: collision with root package name */
    public static final h f54522o = new h("NETWORK", 3);

    /* renamed from: p  reason: collision with root package name */
    private static final /* synthetic */ h[] f54523p;

    /* renamed from: q  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f54524q;

    static {
        h[] a10 = a();
        f54523p = a10;
        f54524q = xr.a.a(a10);
    }

    private h(String str, int i10) {
    }

    private static final /* synthetic */ h[] a() {
        return new h[]{f54519d, f54520e, f54521i, f54522o};
    }

    public static h valueOf(String str) {
        return (h) Enum.valueOf(h.class, str);
    }

    public static h[] values() {
        return (h[]) f54523p.clone();
    }
}
