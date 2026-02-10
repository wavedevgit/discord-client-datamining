package rp;

import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g1 {

    /* renamed from: d  reason: collision with root package name */
    public static final g1 f47600d = new g1("PermissionGranted", 0);

    /* renamed from: e  reason: collision with root package name */
    public static final g1 f47601e = new g1("PermissionRejected", 1);

    /* renamed from: i  reason: collision with root package name */
    public static final g1 f47602i = new g1("SettingsLaunched", 2);

    /* renamed from: o  reason: collision with root package name */
    private static final /* synthetic */ g1[] f47603o;

    /* renamed from: p  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f47604p;

    static {
        g1[] a10 = a();
        f47603o = a10;
        f47604p = hs.a.a(a10);
    }

    private g1(String str, int i10) {
    }

    private static final /* synthetic */ g1[] a() {
        return new g1[]{f47600d, f47601e, f47602i};
    }

    public static g1 valueOf(String str) {
        return (g1) Enum.valueOf(g1.class, str);
    }

    public static g1[] values() {
        return (g1[]) f47603o.clone();
    }
}
