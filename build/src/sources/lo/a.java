package lo;

import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a {

    /* renamed from: d  reason: collision with root package name */
    public static final a f35948d = new a("Stream", 0);

    /* renamed from: e  reason: collision with root package name */
    public static final a f35949e = new a("Upload", 1);

    /* renamed from: i  reason: collision with root package name */
    public static final a f35950i = new a("None", 2);

    /* renamed from: o  reason: collision with root package name */
    private static final /* synthetic */ a[] f35951o;

    /* renamed from: p  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f35952p;

    static {
        a[] a10 = a();
        f35951o = a10;
        f35952p = hs.a.a(a10);
    }

    private a(String str, int i10) {
    }

    private static final /* synthetic */ a[] a() {
        return new a[]{f35948d, f35949e, f35950i};
    }

    public static a valueOf(String str) {
        return (a) Enum.valueOf(a.class, str);
    }

    public static a[] values() {
        return (a[]) f35951o.clone();
    }
}
