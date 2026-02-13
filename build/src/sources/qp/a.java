package qp;

import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a {

    /* renamed from: d  reason: collision with root package name */
    public static final a f46097d = new a("NotRequested", 0);

    /* renamed from: e  reason: collision with root package name */
    public static final a f46098e = new a("NotSupported", 1);

    /* renamed from: i  reason: collision with root package name */
    public static final a f46099i = new a("Failed", 2);

    /* renamed from: o  reason: collision with root package name */
    public static final a f46100o = new a("Success", 3);

    /* renamed from: p  reason: collision with root package name */
    private static final /* synthetic */ a[] f46101p;

    /* renamed from: q  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f46102q;

    static {
        a[] a10 = a();
        f46101p = a10;
        f46102q = hs.a.a(a10);
    }

    private a(String str, int i10) {
    }

    private static final /* synthetic */ a[] a() {
        return new a[]{f46097d, f46098e, f46099i, f46100o};
    }

    public static a valueOf(String str) {
        return (a) Enum.valueOf(a.class, str);
    }

    public static a[] values() {
        return (a[]) f46101p.clone();
    }
}
