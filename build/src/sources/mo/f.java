package mo;

import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class f {

    /* renamed from: d  reason: collision with root package name */
    public static final f f39392d = new f("PRODUCTION", 0);

    /* renamed from: e  reason: collision with root package name */
    public static final f f39393e = new f("SANDBOX", 1);

    /* renamed from: i  reason: collision with root package name */
    private static final /* synthetic */ f[] f39394i;

    /* renamed from: o  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f39395o;

    static {
        f[] a10 = a();
        f39394i = a10;
        f39395o = pr.a.a(a10);
    }

    private f(String str, int i10) {
    }

    private static final /* synthetic */ f[] a() {
        return new f[]{f39392d, f39393e};
    }

    public static f valueOf(String str) {
        return (f) Enum.valueOf(f.class, str);
    }

    public static f[] values() {
        return (f[]) f39394i.clone();
    }
}
