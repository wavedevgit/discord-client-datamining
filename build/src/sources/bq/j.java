package bq;

import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class j {

    /* renamed from: d  reason: collision with root package name */
    public static final j f6987d = new j("SLIDE_IN", 0);

    /* renamed from: e  reason: collision with root package name */
    public static final j f6988e = new j("SLIDE_OUT", 1);

    /* renamed from: i  reason: collision with root package name */
    public static final j f6989i = new j("NONE", 2);

    /* renamed from: o  reason: collision with root package name */
    private static final /* synthetic */ j[] f6990o;

    /* renamed from: p  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f6991p;

    static {
        j[] a10 = a();
        f6990o = a10;
        f6991p = xr.a.a(a10);
    }

    private j(String str, int i10) {
    }

    private static final /* synthetic */ j[] a() {
        return new j[]{f6987d, f6988e, f6989i};
    }

    public static j valueOf(String str) {
        return (j) Enum.valueOf(j.class, str);
    }

    public static j[] values() {
        return (j[]) f6990o.clone();
    }
}
