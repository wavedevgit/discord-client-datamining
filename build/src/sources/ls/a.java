package ls;

import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class a {

    /* renamed from: d  reason: collision with root package name */
    public static final a f37142d = new a("SUSPEND", 0);

    /* renamed from: e  reason: collision with root package name */
    public static final a f37143e = new a("DROP_OLDEST", 1);

    /* renamed from: i  reason: collision with root package name */
    public static final a f37144i = new a("DROP_LATEST", 2);

    /* renamed from: o  reason: collision with root package name */
    private static final /* synthetic */ a[] f37145o;

    /* renamed from: p  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f37146p;

    static {
        a[] a10 = a();
        f37145o = a10;
        f37146p = sr.a.a(a10);
    }

    private a(String str, int i10) {
    }

    private static final /* synthetic */ a[] a() {
        return new a[]{f37142d, f37143e, f37144i};
    }

    public static a valueOf(String str) {
        return (a) Enum.valueOf(a.class, str);
    }

    public static a[] values() {
        return (a[]) f37145o.clone();
    }
}
