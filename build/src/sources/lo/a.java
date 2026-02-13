package lo;

import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a {

    /* renamed from: d  reason: collision with root package name */
    public static final a f36517d = new a("Stream", 0);

    /* renamed from: e  reason: collision with root package name */
    public static final a f36518e = new a("Upload", 1);

    /* renamed from: i  reason: collision with root package name */
    public static final a f36519i = new a("None", 2);

    /* renamed from: o  reason: collision with root package name */
    private static final /* synthetic */ a[] f36520o;

    /* renamed from: p  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f36521p;

    static {
        a[] a10 = a();
        f36520o = a10;
        f36521p = hs.a.a(a10);
    }

    private a(String str, int i10) {
    }

    private static final /* synthetic */ a[] a() {
        return new a[]{f36517d, f36518e, f36519i};
    }

    public static a valueOf(String str) {
        return (a) Enum.valueOf(a.class, str);
    }

    public static a[] values() {
        return (a[]) f36520o.clone();
    }
}
