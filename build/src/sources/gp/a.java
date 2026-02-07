package gp;

import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a {

    /* renamed from: d  reason: collision with root package name */
    public static final a f25476d = new a("NotRequested", 0);

    /* renamed from: e  reason: collision with root package name */
    public static final a f25477e = new a("NotSupported", 1);

    /* renamed from: i  reason: collision with root package name */
    public static final a f25478i = new a("Failed", 2);

    /* renamed from: o  reason: collision with root package name */
    public static final a f25479o = new a("Success", 3);

    /* renamed from: p  reason: collision with root package name */
    private static final /* synthetic */ a[] f25480p;

    /* renamed from: q  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f25481q;

    static {
        a[] a10 = a();
        f25480p = a10;
        f25481q = xr.a.a(a10);
    }

    private a(String str, int i10) {
    }

    private static final /* synthetic */ a[] a() {
        return new a[]{f25476d, f25477e, f25478i, f25479o};
    }

    public static a valueOf(String str) {
        return (a) Enum.valueOf(a.class, str);
    }

    public static a[] values() {
        return (a[]) f25480p.clone();
    }
}
