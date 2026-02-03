package dt;

import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class e1 {

    /* renamed from: i  reason: collision with root package name */
    public static final e1 f22398i = new e1("OBJ", 0, '{', '}');

    /* renamed from: o  reason: collision with root package name */
    public static final e1 f22399o = new e1("LIST", 1, '[', ']');

    /* renamed from: p  reason: collision with root package name */
    public static final e1 f22400p = new e1("MAP", 2, '{', '}');

    /* renamed from: q  reason: collision with root package name */
    public static final e1 f22401q = new e1("POLY_OBJ", 3, '[', ']');

    /* renamed from: r  reason: collision with root package name */
    private static final /* synthetic */ e1[] f22402r;

    /* renamed from: s  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f22403s;

    /* renamed from: d  reason: collision with root package name */
    public final char f22404d;

    /* renamed from: e  reason: collision with root package name */
    public final char f22405e;

    static {
        e1[] a10 = a();
        f22402r = a10;
        f22403s = qr.a.a(a10);
    }

    private e1(String str, int i10, char c10, char c11) {
        this.f22404d = c10;
        this.f22405e = c11;
    }

    private static final /* synthetic */ e1[] a() {
        return new e1[]{f22398i, f22399o, f22400p, f22401q};
    }

    public static EnumEntries d() {
        return f22403s;
    }

    public static e1 valueOf(String str) {
        return (e1) Enum.valueOf(e1.class, str);
    }

    public static e1[] values() {
        return (e1[]) f22402r.clone();
    }
}
