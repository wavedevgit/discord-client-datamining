package vt;

import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class e1 {

    /* renamed from: i  reason: collision with root package name */
    public static final e1 f51888i = new e1("OBJ", 0, '{', '}');

    /* renamed from: o  reason: collision with root package name */
    public static final e1 f51889o = new e1("LIST", 1, '[', ']');

    /* renamed from: p  reason: collision with root package name */
    public static final e1 f51890p = new e1("MAP", 2, '{', '}');

    /* renamed from: q  reason: collision with root package name */
    public static final e1 f51891q = new e1("POLY_OBJ", 3, '[', ']');

    /* renamed from: r  reason: collision with root package name */
    private static final /* synthetic */ e1[] f51892r;

    /* renamed from: s  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f51893s;

    /* renamed from: d  reason: collision with root package name */
    public final char f51894d;

    /* renamed from: e  reason: collision with root package name */
    public final char f51895e;

    static {
        e1[] a10 = a();
        f51892r = a10;
        f51893s = hs.a.a(a10);
    }

    private e1(String str, int i10, char c10, char c11) {
        this.f51894d = c10;
        this.f51895e = c11;
    }

    private static final /* synthetic */ e1[] a() {
        return new e1[]{f51888i, f51889o, f51890p, f51891q};
    }

    public static EnumEntries d() {
        return f51893s;
    }

    public static e1 valueOf(String str) {
        return (e1) Enum.valueOf(e1.class, str);
    }

    public static e1[] values() {
        return (e1[]) f51892r.clone();
    }
}
