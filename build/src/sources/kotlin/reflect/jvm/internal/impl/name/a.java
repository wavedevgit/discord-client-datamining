package kotlin.reflect.jvm.internal.impl.name;

import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class a {

    /* renamed from: d  reason: collision with root package name */
    public static final a f33939d = new a("BEGINNING", 0);

    /* renamed from: e  reason: collision with root package name */
    public static final a f33940e = new a("MIDDLE", 1);

    /* renamed from: i  reason: collision with root package name */
    public static final a f33941i = new a("AFTER_DOT", 2);

    /* renamed from: o  reason: collision with root package name */
    private static final /* synthetic */ a[] f33942o;

    /* renamed from: p  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f33943p;

    static {
        a[] a10 = a();
        f33942o = a10;
        f33943p = xr.a.a(a10);
    }

    private a(String str, int i10) {
    }

    private static final /* synthetic */ a[] a() {
        return new a[]{f33939d, f33940e, f33941i};
    }

    public static a valueOf(String str) {
        return (a) Enum.valueOf(a.class, str);
    }

    public static a[] values() {
        return (a[]) f33942o.clone();
    }
}
