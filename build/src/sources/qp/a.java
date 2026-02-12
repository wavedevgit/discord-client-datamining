package qp;

import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a {

    /* renamed from: d  reason: collision with root package name */
    public static final a f45529d = new a("NotRequested", 0);

    /* renamed from: e  reason: collision with root package name */
    public static final a f45530e = new a("NotSupported", 1);

    /* renamed from: i  reason: collision with root package name */
    public static final a f45531i = new a("Failed", 2);

    /* renamed from: o  reason: collision with root package name */
    public static final a f45532o = new a("Success", 3);

    /* renamed from: p  reason: collision with root package name */
    private static final /* synthetic */ a[] f45533p;

    /* renamed from: q  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f45534q;

    static {
        a[] a10 = a();
        f45533p = a10;
        f45534q = hs.a.a(a10);
    }

    private a(String str, int i10) {
    }

    private static final /* synthetic */ a[] a() {
        return new a[]{f45529d, f45530e, f45531i, f45532o};
    }

    public static a valueOf(String str) {
        return (a) Enum.valueOf(a.class, str);
    }

    public static a[] values() {
        return (a[]) f45533p.clone();
    }
}
