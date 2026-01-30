package mo;

import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class f {

    /* renamed from: d  reason: collision with root package name */
    public static final f f39408d = new f("PRODUCTION", 0);

    /* renamed from: e  reason: collision with root package name */
    public static final f f39409e = new f("SANDBOX", 1);

    /* renamed from: i  reason: collision with root package name */
    private static final /* synthetic */ f[] f39410i;

    /* renamed from: o  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f39411o;

    static {
        f[] a10 = a();
        f39410i = a10;
        f39411o = pr.a.a(a10);
    }

    private f(String str, int i10) {
    }

    private static final /* synthetic */ f[] a() {
        return new f[]{f39408d, f39409e};
    }

    public static f valueOf(String str) {
        return (f) Enum.valueOf(f.class, str);
    }

    public static f[] values() {
        return (f[]) f39410i.clone();
    }
}
