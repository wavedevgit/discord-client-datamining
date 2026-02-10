package qp;

import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a {

    /* renamed from: d  reason: collision with root package name */
    public static final a f45528d = new a("NotRequested", 0);

    /* renamed from: e  reason: collision with root package name */
    public static final a f45529e = new a("NotSupported", 1);

    /* renamed from: i  reason: collision with root package name */
    public static final a f45530i = new a("Failed", 2);

    /* renamed from: o  reason: collision with root package name */
    public static final a f45531o = new a("Success", 3);

    /* renamed from: p  reason: collision with root package name */
    private static final /* synthetic */ a[] f45532p;

    /* renamed from: q  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f45533q;

    static {
        a[] a10 = a();
        f45532p = a10;
        f45533q = hs.a.a(a10);
    }

    private a(String str, int i10) {
    }

    private static final /* synthetic */ a[] a() {
        return new a[]{f45528d, f45529e, f45530i, f45531o};
    }

    public static a valueOf(String str) {
        return (a) Enum.valueOf(a.class, str);
    }

    public static a[] values() {
        return (a[]) f45532p.clone();
    }
}
