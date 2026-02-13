package kotlin.reflect;

import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class m {

    /* renamed from: d  reason: collision with root package name */
    public static final m f35395d = new m("INVARIANT", 0);

    /* renamed from: e  reason: collision with root package name */
    public static final m f35396e = new m("IN", 1);

    /* renamed from: i  reason: collision with root package name */
    public static final m f35397i = new m("OUT", 2);

    /* renamed from: o  reason: collision with root package name */
    private static final /* synthetic */ m[] f35398o;

    /* renamed from: p  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f35399p;

    static {
        m[] a10 = a();
        f35398o = a10;
        f35399p = hs.a.a(a10);
    }

    private m(String str, int i10) {
    }

    private static final /* synthetic */ m[] a() {
        return new m[]{f35395d, f35396e, f35397i};
    }

    public static m valueOf(String str) {
        return (m) Enum.valueOf(m.class, str);
    }

    public static m[] values() {
        return (m[]) f35398o.clone();
    }
}
