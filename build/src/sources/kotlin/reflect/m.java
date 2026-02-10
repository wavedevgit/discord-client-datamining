package kotlin.reflect;

import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class m {

    /* renamed from: d  reason: collision with root package name */
    public static final m f34604d = new m("INVARIANT", 0);

    /* renamed from: e  reason: collision with root package name */
    public static final m f34605e = new m("IN", 1);

    /* renamed from: i  reason: collision with root package name */
    public static final m f34606i = new m("OUT", 2);

    /* renamed from: o  reason: collision with root package name */
    private static final /* synthetic */ m[] f34607o;

    /* renamed from: p  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f34608p;

    static {
        m[] a10 = a();
        f34607o = a10;
        f34608p = yr.a.a(a10);
    }

    private m(String str, int i10) {
    }

    private static final /* synthetic */ m[] a() {
        return new m[]{f34604d, f34605e, f34606i};
    }

    public static m valueOf(String str) {
        return (m) Enum.valueOf(m.class, str);
    }

    public static m[] values() {
        return (m[]) f34607o.clone();
    }
}
