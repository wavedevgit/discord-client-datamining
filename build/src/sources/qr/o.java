package qr;

import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class o {

    /* renamed from: d  reason: collision with root package name */
    public static final o f48091d = new o("SYNCHRONIZED", 0);

    /* renamed from: e  reason: collision with root package name */
    public static final o f48092e = new o("PUBLICATION", 1);

    /* renamed from: i  reason: collision with root package name */
    public static final o f48093i = new o("NONE", 2);

    /* renamed from: o  reason: collision with root package name */
    private static final /* synthetic */ o[] f48094o;

    /* renamed from: p  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f48095p;

    static {
        o[] a10 = a();
        f48094o = a10;
        f48095p = xr.a.a(a10);
    }

    private o(String str, int i10) {
    }

    private static final /* synthetic */ o[] a() {
        return new o[]{f48091d, f48092e, f48093i};
    }

    public static o valueOf(String str) {
        return (o) Enum.valueOf(o.class, str);
    }

    public static o[] values() {
        return (o[]) f48094o.clone();
    }
}
