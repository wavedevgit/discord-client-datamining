package po;

import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class f {

    /* renamed from: d  reason: collision with root package name */
    public static final f f46443d = new f("PRODUCTION", 0);

    /* renamed from: e  reason: collision with root package name */
    public static final f f46444e = new f("SANDBOX", 1);

    /* renamed from: i  reason: collision with root package name */
    private static final /* synthetic */ f[] f46445i;

    /* renamed from: o  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f46446o;

    static {
        f[] a10 = a();
        f46445i = a10;
        f46446o = sr.a.a(a10);
    }

    private f(String str, int i10) {
    }

    private static final /* synthetic */ f[] a() {
        return new f[]{f46443d, f46444e};
    }

    public static f valueOf(String str) {
        return (f) Enum.valueOf(f.class, str);
    }

    public static f[] values() {
        return (f[]) f46445i.clone();
    }
}
