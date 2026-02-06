package uo;

import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class f {

    /* renamed from: d  reason: collision with root package name */
    public static final f f51905d = new f("PRODUCTION", 0);

    /* renamed from: e  reason: collision with root package name */
    public static final f f51906e = new f("SANDBOX", 1);

    /* renamed from: i  reason: collision with root package name */
    private static final /* synthetic */ f[] f51907i;

    /* renamed from: o  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f51908o;

    static {
        f[] a10 = a();
        f51907i = a10;
        f51908o = xr.a.a(a10);
    }

    private f(String str, int i10) {
    }

    private static final /* synthetic */ f[] a() {
        return new f[]{f51905d, f51906e};
    }

    public static f valueOf(String str) {
        return (f) Enum.valueOf(f.class, str);
    }

    public static f[] values() {
        return (f[]) f51907i.clone();
    }
}
