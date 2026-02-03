package kp;

import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class t {

    /* renamed from: d  reason: collision with root package name */
    public static final t f36311d = new t("Font", 0);

    /* renamed from: e  reason: collision with root package name */
    public static final t f36312e = new t("Drawable", 1);

    /* renamed from: i  reason: collision with root package name */
    public static final t f36313i = new t("Raw", 2);

    /* renamed from: o  reason: collision with root package name */
    private static final /* synthetic */ t[] f36314o;

    /* renamed from: p  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f36315p;

    static {
        t[] a10 = a();
        f36314o = a10;
        f36315p = qr.a.a(a10);
    }

    private t(String str, int i10) {
    }

    private static final /* synthetic */ t[] a() {
        return new t[]{f36311d, f36312e, f36313i};
    }

    public static t valueOf(String str) {
        return (t) Enum.valueOf(t.class, str);
    }

    public static t[] values() {
        return (t[]) f36314o.clone();
    }
}
