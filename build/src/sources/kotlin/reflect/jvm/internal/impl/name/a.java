package kotlin.reflect.jvm.internal.impl.name;

import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class a {

    /* renamed from: d  reason: collision with root package name */
    public static final a f35181d = new a("BEGINNING", 0);

    /* renamed from: e  reason: collision with root package name */
    public static final a f35182e = new a("MIDDLE", 1);

    /* renamed from: i  reason: collision with root package name */
    public static final a f35183i = new a("AFTER_DOT", 2);

    /* renamed from: o  reason: collision with root package name */
    private static final /* synthetic */ a[] f35184o;

    /* renamed from: p  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f35185p;

    static {
        a[] a10 = a();
        f35184o = a10;
        f35185p = pr.a.a(a10);
    }

    private a(String str, int i10) {
    }

    private static final /* synthetic */ a[] a() {
        return new a[]{f35181d, f35182e, f35183i};
    }

    public static a valueOf(String str) {
        return (a) Enum.valueOf(a.class, str);
    }

    public static a[] values() {
        return (a[]) f35184o.clone();
    }
}
