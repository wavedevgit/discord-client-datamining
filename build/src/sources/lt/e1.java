package lt;

import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class e1 {

    /* renamed from: i  reason: collision with root package name */
    public static final e1 f36698i = new e1("OBJ", 0, '{', '}');

    /* renamed from: o  reason: collision with root package name */
    public static final e1 f36699o = new e1("LIST", 1, '[', ']');

    /* renamed from: p  reason: collision with root package name */
    public static final e1 f36700p = new e1("MAP", 2, '{', '}');

    /* renamed from: q  reason: collision with root package name */
    public static final e1 f36701q = new e1("POLY_OBJ", 3, '[', ']');

    /* renamed from: r  reason: collision with root package name */
    private static final /* synthetic */ e1[] f36702r;

    /* renamed from: s  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f36703s;

    /* renamed from: d  reason: collision with root package name */
    public final char f36704d;

    /* renamed from: e  reason: collision with root package name */
    public final char f36705e;

    static {
        e1[] a10 = a();
        f36702r = a10;
        f36703s = xr.a.a(a10);
    }

    private e1(String str, int i10, char c10, char c11) {
        this.f36704d = c10;
        this.f36705e = c11;
    }

    private static final /* synthetic */ e1[] a() {
        return new e1[]{f36698i, f36699o, f36700p, f36701q};
    }

    public static EnumEntries d() {
        return f36703s;
    }

    public static e1 valueOf(String str) {
        return (e1) Enum.valueOf(e1.class, str);
    }

    public static e1[] values() {
        return (e1[]) f36702r.clone();
    }
}
