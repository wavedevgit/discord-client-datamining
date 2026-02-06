package qr;

import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d {

    /* renamed from: d  reason: collision with root package name */
    public static final d f48021d = new d("WARNING", 0);

    /* renamed from: e  reason: collision with root package name */
    public static final d f48022e = new d("ERROR", 1);

    /* renamed from: i  reason: collision with root package name */
    public static final d f48023i = new d("HIDDEN", 2);

    /* renamed from: o  reason: collision with root package name */
    private static final /* synthetic */ d[] f48024o;

    /* renamed from: p  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f48025p;

    static {
        d[] a10 = a();
        f48024o = a10;
        f48025p = xr.a.a(a10);
    }

    private d(String str, int i10) {
    }

    private static final /* synthetic */ d[] a() {
        return new d[]{f48021d, f48022e, f48023i};
    }

    public static d valueOf(String str) {
        return (d) Enum.valueOf(d.class, str);
    }

    public static d[] values() {
        return (d[]) f48024o.clone();
    }
}
