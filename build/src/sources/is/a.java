package is;

import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class a {

    /* renamed from: d  reason: collision with root package name */
    public static final a f31141d = new a("SUSPEND", 0);

    /* renamed from: e  reason: collision with root package name */
    public static final a f31142e = new a("DROP_OLDEST", 1);

    /* renamed from: i  reason: collision with root package name */
    public static final a f31143i = new a("DROP_LATEST", 2);

    /* renamed from: o  reason: collision with root package name */
    private static final /* synthetic */ a[] f31144o;

    /* renamed from: p  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f31145p;

    static {
        a[] a10 = a();
        f31144o = a10;
        f31145p = pr.a.a(a10);
    }

    private a(String str, int i10) {
    }

    private static final /* synthetic */ a[] a() {
        return new a[]{f31141d, f31142e, f31143i};
    }

    public static a valueOf(String str) {
        return (a) Enum.valueOf(a.class, str);
    }

    public static a[] values() {
        return (a[]) f31144o.clone();
    }
}
