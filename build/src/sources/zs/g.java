package zs;

import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class g {

    /* renamed from: d  reason: collision with root package name */
    public static final g f56475d = new g("AM", 0);

    /* renamed from: e  reason: collision with root package name */
    public static final g f56476e = new g("PM", 1);

    /* renamed from: i  reason: collision with root package name */
    private static final /* synthetic */ g[] f56477i;

    /* renamed from: o  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f56478o;

    static {
        g[] a10 = a();
        f56477i = a10;
        f56478o = xr.a.a(a10);
    }

    private g(String str, int i10) {
    }

    private static final /* synthetic */ g[] a() {
        return new g[]{f56475d, f56476e};
    }

    public static g valueOf(String str) {
        return (g) Enum.valueOf(g.class, str);
    }

    public static g[] values() {
        return (g[]) f56477i.clone();
    }
}
