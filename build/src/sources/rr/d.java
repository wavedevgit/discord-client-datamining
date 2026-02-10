package rr;

import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d {

    /* renamed from: d  reason: collision with root package name */
    public static final d f49187d = new d("WARNING", 0);

    /* renamed from: e  reason: collision with root package name */
    public static final d f49188e = new d("ERROR", 1);

    /* renamed from: i  reason: collision with root package name */
    public static final d f49189i = new d("HIDDEN", 2);

    /* renamed from: o  reason: collision with root package name */
    private static final /* synthetic */ d[] f49190o;

    /* renamed from: p  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f49191p;

    static {
        d[] a10 = a();
        f49190o = a10;
        f49191p = yr.a.a(a10);
    }

    private d(String str, int i10) {
    }

    private static final /* synthetic */ d[] a() {
        return new d[]{f49187d, f49188e, f49189i};
    }

    public static d valueOf(String str) {
        return (d) Enum.valueOf(d.class, str);
    }

    public static d[] values() {
        return (d[]) f49190o.clone();
    }
}
