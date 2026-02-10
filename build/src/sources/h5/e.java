package h5;

import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class e {

    /* renamed from: d  reason: collision with root package name */
    public static final e f24970d = new e("EXACT", 0);

    /* renamed from: e  reason: collision with root package name */
    public static final e f24971e = new e("INEXACT", 1);

    /* renamed from: i  reason: collision with root package name */
    public static final e f24972i = new e("AUTOMATIC", 2);

    /* renamed from: o  reason: collision with root package name */
    private static final /* synthetic */ e[] f24973o;

    /* renamed from: p  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f24974p;

    static {
        e[] a10 = a();
        f24973o = a10;
        f24974p = yr.a.a(a10);
    }

    private e(String str, int i10) {
    }

    private static final /* synthetic */ e[] a() {
        return new e[]{f24970d, f24971e, f24972i};
    }

    public static e valueOf(String str) {
        return (e) Enum.valueOf(e.class, str);
    }

    public static e[] values() {
        return (e[]) f24973o.clone();
    }
}
