package et;

import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class a {

    /* renamed from: d  reason: collision with root package name */
    public static final a f22641d = new a("NONE", 0);

    /* renamed from: e  reason: collision with root package name */
    public static final a f22642e = new a("ALL_JSON_OBJECTS", 1);

    /* renamed from: i  reason: collision with root package name */
    public static final a f22643i = new a("POLYMORPHIC", 2);

    /* renamed from: o  reason: collision with root package name */
    private static final /* synthetic */ a[] f22644o;

    /* renamed from: p  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f22645p;

    static {
        a[] a10 = a();
        f22644o = a10;
        f22645p = sr.a.a(a10);
    }

    private a(String str, int i10) {
    }

    private static final /* synthetic */ a[] a() {
        return new a[]{f22641d, f22642e, f22643i};
    }

    public static a valueOf(String str) {
        return (a) Enum.valueOf(a.class, str);
    }

    public static a[] values() {
        return (a[]) f22644o.clone();
    }
}
