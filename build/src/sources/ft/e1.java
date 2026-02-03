package ft;

import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class e1 {

    /* renamed from: i  reason: collision with root package name */
    public static final e1 f24716i = new e1("OBJ", 0, '{', '}');

    /* renamed from: o  reason: collision with root package name */
    public static final e1 f24717o = new e1("LIST", 1, '[', ']');

    /* renamed from: p  reason: collision with root package name */
    public static final e1 f24718p = new e1("MAP", 2, '{', '}');

    /* renamed from: q  reason: collision with root package name */
    public static final e1 f24719q = new e1("POLY_OBJ", 3, '[', ']');

    /* renamed from: r  reason: collision with root package name */
    private static final /* synthetic */ e1[] f24720r;

    /* renamed from: s  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f24721s;

    /* renamed from: d  reason: collision with root package name */
    public final char f24722d;

    /* renamed from: e  reason: collision with root package name */
    public final char f24723e;

    static {
        e1[] a10 = a();
        f24720r = a10;
        f24721s = sr.a.a(a10);
    }

    private e1(String str, int i10, char c10, char c11) {
        this.f24722d = c10;
        this.f24723e = c11;
    }

    private static final /* synthetic */ e1[] a() {
        return new e1[]{f24716i, f24717o, f24718p, f24719q};
    }

    public static EnumEntries d() {
        return f24721s;
    }

    public static e1 valueOf(String str) {
        return (e1) Enum.valueOf(e1.class, str);
    }

    public static e1[] values() {
        return (e1[]) f24720r.clone();
    }
}
