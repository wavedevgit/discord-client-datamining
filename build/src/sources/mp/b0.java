package mp;

import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b0 {

    /* renamed from: d  reason: collision with root package name */
    public static final b0 f37305d = new b0("V0", 0);

    /* renamed from: e  reason: collision with root package name */
    public static final b0 f37306e = new b0("V1", 1);

    /* renamed from: i  reason: collision with root package name */
    private static final /* synthetic */ b0[] f37307i;

    /* renamed from: o  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f37308o;

    static {
        b0[] a10 = a();
        f37307i = a10;
        f37308o = xr.a.a(a10);
    }

    private b0(String str, int i10) {
    }

    private static final /* synthetic */ b0[] a() {
        return new b0[]{f37305d, f37306e};
    }

    public static b0 valueOf(String str) {
        return (b0) Enum.valueOf(b0.class, str);
    }

    public static b0[] values() {
        return (b0[]) f37307i.clone();
    }
}
