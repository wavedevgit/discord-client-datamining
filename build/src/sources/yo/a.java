package yo;

import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a {

    /* renamed from: d  reason: collision with root package name */
    public static final a f54837d = new a("NotRequested", 0);

    /* renamed from: e  reason: collision with root package name */
    public static final a f54838e = new a("NotSupported", 1);

    /* renamed from: i  reason: collision with root package name */
    public static final a f54839i = new a("Failed", 2);

    /* renamed from: o  reason: collision with root package name */
    public static final a f54840o = new a("Success", 3);

    /* renamed from: p  reason: collision with root package name */
    private static final /* synthetic */ a[] f54841p;

    /* renamed from: q  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f54842q;

    static {
        a[] a10 = a();
        f54841p = a10;
        f54842q = pr.a.a(a10);
    }

    private a(String str, int i10) {
    }

    private static final /* synthetic */ a[] a() {
        return new a[]{f54837d, f54838e, f54839i, f54840o};
    }

    public static a valueOf(String str) {
        return (a) Enum.valueOf(a.class, str);
    }

    public static a[] values() {
        return (a[]) f54841p.clone();
    }
}
