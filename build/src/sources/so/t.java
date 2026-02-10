package so;

import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class t {

    /* renamed from: d  reason: collision with root package name */
    public static final t f49903d = new t("Connecting", 0);

    /* renamed from: e  reason: collision with root package name */
    public static final t f49904e = new t("Connected", 1);

    /* renamed from: i  reason: collision with root package name */
    public static final t f49905i = new t("Disconnected", 2);

    /* renamed from: o  reason: collision with root package name */
    private static final /* synthetic */ t[] f49906o;

    /* renamed from: p  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f49907p;

    static {
        t[] a10 = a();
        f49906o = a10;
        f49907p = yr.a.a(a10);
    }

    private t(String str, int i10) {
    }

    private static final /* synthetic */ t[] a() {
        return new t[]{f49903d, f49904e, f49905i};
    }

    public static t valueOf(String str) {
        return (t) Enum.valueOf(t.class, str);
    }

    public static t[] values() {
        return (t[]) f49906o.clone();
    }
}
