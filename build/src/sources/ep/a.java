package ep;

import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a {

    /* renamed from: d  reason: collision with root package name */
    public static final a f21930d = new a("Debug", 0);

    /* renamed from: e  reason: collision with root package name */
    public static final a f21931e = new a("Warning", 1);

    /* renamed from: i  reason: collision with root package name */
    public static final a f21932i = new a("Error", 2);

    /* renamed from: o  reason: collision with root package name */
    private static final /* synthetic */ a[] f21933o;

    /* renamed from: p  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f21934p;

    static {
        a[] a10 = a();
        f21933o = a10;
        f21934p = yr.a.a(a10);
    }

    private a(String str, int i10) {
    }

    private static final /* synthetic */ a[] a() {
        return new a[]{f21930d, f21931e, f21932i};
    }

    public static a valueOf(String str) {
        return (a) Enum.valueOf(a.class, str);
    }

    public static a[] values() {
        return (a[]) f21933o.clone();
    }
}
