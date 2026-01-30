package zo;

import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g1 {

    /* renamed from: d  reason: collision with root package name */
    public static final g1 f55935d = new g1("PermissionGranted", 0);

    /* renamed from: e  reason: collision with root package name */
    public static final g1 f55936e = new g1("PermissionRejected", 1);

    /* renamed from: i  reason: collision with root package name */
    public static final g1 f55937i = new g1("SettingsLaunched", 2);

    /* renamed from: o  reason: collision with root package name */
    private static final /* synthetic */ g1[] f55938o;

    /* renamed from: p  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f55939p;

    static {
        g1[] a10 = a();
        f55938o = a10;
        f55939p = pr.a.a(a10);
    }

    private g1(String str, int i10) {
    }

    private static final /* synthetic */ g1[] a() {
        return new g1[]{f55935d, f55936e, f55937i};
    }

    public static g1 valueOf(String str) {
        return (g1) Enum.valueOf(g1.class, str);
    }

    public static g1[] values() {
        return (g1[]) f55938o.clone();
    }
}
