package bp;

import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a {

    /* renamed from: d  reason: collision with root package name */
    public static final a f7066d = new a("Debug", 0);

    /* renamed from: e  reason: collision with root package name */
    public static final a f7067e = new a("Warning", 1);

    /* renamed from: i  reason: collision with root package name */
    public static final a f7068i = new a("Error", 2);

    /* renamed from: o  reason: collision with root package name */
    private static final /* synthetic */ a[] f7069o;

    /* renamed from: p  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f7070p;

    static {
        a[] a10 = a();
        f7069o = a10;
        f7070p = vr.a.a(a10);
    }

    private a(String str, int i10) {
    }

    private static final /* synthetic */ a[] a() {
        return new a[]{f7066d, f7067e, f7068i};
    }

    public static a valueOf(String str) {
        return (a) Enum.valueOf(a.class, str);
    }

    public static a[] values() {
        return (a[]) f7069o.clone();
    }
}
