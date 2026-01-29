package mo;

import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b2 {

    /* renamed from: d  reason: collision with root package name */
    public static final b2 f39368d = new b2("Background", 0);

    /* renamed from: e  reason: collision with root package name */
    public static final b2 f39369e = new b2("Blocking", 1);

    /* renamed from: i  reason: collision with root package name */
    private static final /* synthetic */ b2[] f39370i;

    /* renamed from: o  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f39371o;

    static {
        b2[] a10 = a();
        f39370i = a10;
        f39371o = pr.a.a(a10);
    }

    private b2(String str, int i10) {
    }

    private static final /* synthetic */ b2[] a() {
        return new b2[]{f39368d, f39369e};
    }

    public static b2 valueOf(String str) {
        return (b2) Enum.valueOf(b2.class, str);
    }

    public static b2[] values() {
        return (b2[]) f39370i.clone();
    }
}
