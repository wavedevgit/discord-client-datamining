package kotlin.reflect;

import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class m {

    /* renamed from: d  reason: collision with root package name */
    public static final m f36121d = new m("INVARIANT", 0);

    /* renamed from: e  reason: collision with root package name */
    public static final m f36122e = new m("IN", 1);

    /* renamed from: i  reason: collision with root package name */
    public static final m f36123i = new m("OUT", 2);

    /* renamed from: o  reason: collision with root package name */
    private static final /* synthetic */ m[] f36124o;

    /* renamed from: p  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f36125p;

    static {
        m[] a10 = a();
        f36124o = a10;
        f36125p = pr.a.a(a10);
    }

    private m(String str, int i10) {
    }

    private static final /* synthetic */ m[] a() {
        return new m[]{f36121d, f36122e, f36123i};
    }

    public static m valueOf(String str) {
        return (m) Enum.valueOf(m.class, str);
    }

    public static m[] values() {
        return (m[]) f36124o.clone();
    }
}
