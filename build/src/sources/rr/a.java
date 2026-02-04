package rr;

import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a {

    /* renamed from: d  reason: collision with root package name */
    public static final a f49052d = new a("COROUTINE_SUSPENDED", 0);

    /* renamed from: e  reason: collision with root package name */
    public static final a f49053e = new a("UNDECIDED", 1);

    /* renamed from: i  reason: collision with root package name */
    public static final a f49054i = new a("RESUMED", 2);

    /* renamed from: o  reason: collision with root package name */
    private static final /* synthetic */ a[] f49055o;

    /* renamed from: p  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f49056p;

    static {
        a[] a10 = a();
        f49055o = a10;
        f49056p = sr.a.a(a10);
    }

    private a(String str, int i10) {
    }

    private static final /* synthetic */ a[] a() {
        return new a[]{f49052d, f49053e, f49054i};
    }

    public static a valueOf(String str) {
        return (a) Enum.valueOf(a.class, str);
    }

    public static a[] values() {
        return (a[]) f49055o.clone();
    }
}
