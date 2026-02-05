package kotlin.reflect;

import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class m {

    /* renamed from: d  reason: collision with root package name */
    public static final m f34827d = new m("INVARIANT", 0);

    /* renamed from: e  reason: collision with root package name */
    public static final m f34828e = new m("IN", 1);

    /* renamed from: i  reason: collision with root package name */
    public static final m f34829i = new m("OUT", 2);

    /* renamed from: o  reason: collision with root package name */
    private static final /* synthetic */ m[] f34830o;

    /* renamed from: p  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f34831p;

    static {
        m[] a10 = a();
        f34830o = a10;
        f34831p = vr.a.a(a10);
    }

    private m(String str, int i10) {
    }

    private static final /* synthetic */ m[] a() {
        return new m[]{f34827d, f34828e, f34829i};
    }

    public static m valueOf(String str) {
        return (m) Enum.valueOf(m.class, str);
    }

    public static m[] values() {
        return (m[]) f34830o.clone();
    }
}
