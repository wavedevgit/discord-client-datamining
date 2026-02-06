package dp;

import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a {

    /* renamed from: d  reason: collision with root package name */
    public static final a f20982d = new a("Debug", 0);

    /* renamed from: e  reason: collision with root package name */
    public static final a f20983e = new a("Warning", 1);

    /* renamed from: i  reason: collision with root package name */
    public static final a f20984i = new a("Error", 2);

    /* renamed from: o  reason: collision with root package name */
    private static final /* synthetic */ a[] f20985o;

    /* renamed from: p  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f20986p;

    static {
        a[] a10 = a();
        f20985o = a10;
        f20986p = xr.a.a(a10);
    }

    private a(String str, int i10) {
    }

    private static final /* synthetic */ a[] a() {
        return new a[]{f20982d, f20983e, f20984i};
    }

    public static a valueOf(String str) {
        return (a) Enum.valueOf(a.class, str);
    }

    public static a[] values() {
        return (a[]) f20985o.clone();
    }
}
