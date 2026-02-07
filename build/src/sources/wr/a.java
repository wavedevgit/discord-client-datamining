package wr;

import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a {

    /* renamed from: d  reason: collision with root package name */
    public static final a f54102d = new a("COROUTINE_SUSPENDED", 0);

    /* renamed from: e  reason: collision with root package name */
    public static final a f54103e = new a("UNDECIDED", 1);

    /* renamed from: i  reason: collision with root package name */
    public static final a f54104i = new a("RESUMED", 2);

    /* renamed from: o  reason: collision with root package name */
    private static final /* synthetic */ a[] f54105o;

    /* renamed from: p  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f54106p;

    static {
        a[] a10 = a();
        f54105o = a10;
        f54106p = xr.a.a(a10);
    }

    private a(String str, int i10) {
    }

    private static final /* synthetic */ a[] a() {
        return new a[]{f54102d, f54103e, f54104i};
    }

    public static a valueOf(String str) {
        return (a) Enum.valueOf(a.class, str);
    }

    public static a[] values() {
        return (a[]) f54105o.clone();
    }
}
