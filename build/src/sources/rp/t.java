package rp;

import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class t {

    /* renamed from: d  reason: collision with root package name */
    public static final t f49136d = new t("Font", 0);

    /* renamed from: e  reason: collision with root package name */
    public static final t f49137e = new t("Drawable", 1);

    /* renamed from: i  reason: collision with root package name */
    public static final t f49138i = new t("Raw", 2);

    /* renamed from: o  reason: collision with root package name */
    private static final /* synthetic */ t[] f49139o;

    /* renamed from: p  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f49140p;

    static {
        t[] a10 = a();
        f49139o = a10;
        f49140p = xr.a.a(a10);
    }

    private t(String str, int i10) {
    }

    private static final /* synthetic */ t[] a() {
        return new t[]{f49136d, f49137e, f49138i};
    }

    public static t valueOf(String str) {
        return (t) Enum.valueOf(t.class, str);
    }

    public static t[] values() {
        return (t[]) f49139o.clone();
    }
}
