package h5;

import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class e {

    /* renamed from: d  reason: collision with root package name */
    public static final e f27534d = new e("EXACT", 0);

    /* renamed from: e  reason: collision with root package name */
    public static final e f27535e = new e("INEXACT", 1);

    /* renamed from: i  reason: collision with root package name */
    public static final e f27536i = new e("AUTOMATIC", 2);

    /* renamed from: o  reason: collision with root package name */
    private static final /* synthetic */ e[] f27537o;

    /* renamed from: p  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f27538p;

    static {
        e[] a10 = a();
        f27537o = a10;
        f27538p = qr.a.a(a10);
    }

    private e(String str, int i10) {
    }

    private static final /* synthetic */ e[] a() {
        return new e[]{f27534d, f27535e, f27536i};
    }

    public static e valueOf(String str) {
        return (e) Enum.valueOf(e.class, str);
    }

    public static e[] values() {
        return (e[]) f27537o.clone();
    }
}
