package qr;

import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d {

    /* renamed from: d  reason: collision with root package name */
    public static final d f48069d = new d("WARNING", 0);

    /* renamed from: e  reason: collision with root package name */
    public static final d f48070e = new d("ERROR", 1);

    /* renamed from: i  reason: collision with root package name */
    public static final d f48071i = new d("HIDDEN", 2);

    /* renamed from: o  reason: collision with root package name */
    private static final /* synthetic */ d[] f48072o;

    /* renamed from: p  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f48073p;

    static {
        d[] a10 = a();
        f48072o = a10;
        f48073p = xr.a.a(a10);
    }

    private d(String str, int i10) {
    }

    private static final /* synthetic */ d[] a() {
        return new d[]{f48069d, f48070e, f48071i};
    }

    public static d valueOf(String str) {
        return (d) Enum.valueOf(d.class, str);
    }

    public static d[] values() {
        return (d[]) f48072o.clone();
    }
}
