package rr;

import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a {

    /* renamed from: d  reason: collision with root package name */
    public static final a f49055d = new a("COROUTINE_SUSPENDED", 0);

    /* renamed from: e  reason: collision with root package name */
    public static final a f49056e = new a("UNDECIDED", 1);

    /* renamed from: i  reason: collision with root package name */
    public static final a f49057i = new a("RESUMED", 2);

    /* renamed from: o  reason: collision with root package name */
    private static final /* synthetic */ a[] f49058o;

    /* renamed from: p  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f49059p;

    static {
        a[] a10 = a();
        f49058o = a10;
        f49059p = sr.a.a(a10);
    }

    private a(String str, int i10) {
    }

    private static final /* synthetic */ a[] a() {
        return new a[]{f49055d, f49056e, f49057i};
    }

    public static a valueOf(String str) {
        return (a) Enum.valueOf(a.class, str);
    }

    public static a[] values() {
        return (a[]) f49058o.clone();
    }
}
