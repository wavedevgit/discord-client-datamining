package gs;

import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a {

    /* renamed from: d  reason: collision with root package name */
    public static final a f25968d = new a("COROUTINE_SUSPENDED", 0);

    /* renamed from: e  reason: collision with root package name */
    public static final a f25969e = new a("UNDECIDED", 1);

    /* renamed from: i  reason: collision with root package name */
    public static final a f25970i = new a("RESUMED", 2);

    /* renamed from: o  reason: collision with root package name */
    private static final /* synthetic */ a[] f25971o;

    /* renamed from: p  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f25972p;

    static {
        a[] a10 = a();
        f25971o = a10;
        f25972p = hs.a.a(a10);
    }

    private a(String str, int i10) {
    }

    private static final /* synthetic */ a[] a() {
        return new a[]{f25968d, f25969e, f25970i};
    }

    public static a valueOf(String str) {
        return (a) Enum.valueOf(a.class, str);
    }

    public static a[] values() {
        return (a[]) f25971o.clone();
    }
}
