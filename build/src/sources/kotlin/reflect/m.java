package kotlin.reflect;

import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class m {

    /* renamed from: d  reason: collision with root package name */
    public static final m f34895d = new m("INVARIANT", 0);

    /* renamed from: e  reason: collision with root package name */
    public static final m f34896e = new m("IN", 1);

    /* renamed from: i  reason: collision with root package name */
    public static final m f34897i = new m("OUT", 2);

    /* renamed from: o  reason: collision with root package name */
    private static final /* synthetic */ m[] f34898o;

    /* renamed from: p  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f34899p;

    static {
        m[] a10 = a();
        f34898o = a10;
        f34899p = xr.a.a(a10);
    }

    private m(String str, int i10) {
    }

    private static final /* synthetic */ m[] a() {
        return new m[]{f34895d, f34896e, f34897i};
    }

    public static m valueOf(String str) {
        return (m) Enum.valueOf(m.class, str);
    }

    public static m[] values() {
        return (m[]) f34898o.clone();
    }
}
