package kotlin.reflect.jvm.internal.impl.name;

import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class a {

    /* renamed from: d  reason: collision with root package name */
    public static final a f33871d = new a("BEGINNING", 0);

    /* renamed from: e  reason: collision with root package name */
    public static final a f33872e = new a("MIDDLE", 1);

    /* renamed from: i  reason: collision with root package name */
    public static final a f33873i = new a("AFTER_DOT", 2);

    /* renamed from: o  reason: collision with root package name */
    private static final /* synthetic */ a[] f33874o;

    /* renamed from: p  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f33875p;

    static {
        a[] a10 = a();
        f33874o = a10;
        f33875p = vr.a.a(a10);
    }

    private a(String str, int i10) {
    }

    private static final /* synthetic */ a[] a() {
        return new a[]{f33871d, f33872e, f33873i};
    }

    public static a valueOf(String str) {
        return (a) Enum.valueOf(a.class, str);
    }

    public static a[] values() {
        return (a[]) f33874o.clone();
    }
}
