package kt;

import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class a {

    /* renamed from: d  reason: collision with root package name */
    public static final a f35491d = new a("NONE", 0);

    /* renamed from: e  reason: collision with root package name */
    public static final a f35492e = new a("ALL_JSON_OBJECTS", 1);

    /* renamed from: i  reason: collision with root package name */
    public static final a f35493i = new a("POLYMORPHIC", 2);

    /* renamed from: o  reason: collision with root package name */
    private static final /* synthetic */ a[] f35494o;

    /* renamed from: p  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f35495p;

    static {
        a[] a10 = a();
        f35494o = a10;
        f35495p = xr.a.a(a10);
    }

    private a(String str, int i10) {
    }

    private static final /* synthetic */ a[] a() {
        return new a[]{f35491d, f35492e, f35493i};
    }

    public static a valueOf(String str) {
        return (a) Enum.valueOf(a.class, str);
    }

    public static a[] values() {
        return (a[]) f35494o.clone();
    }
}
