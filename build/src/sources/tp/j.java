package tp;

import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class j {

    /* renamed from: d  reason: collision with root package name */
    public static final j f49812d = new j("SLIDE_IN", 0);

    /* renamed from: e  reason: collision with root package name */
    public static final j f49813e = new j("SLIDE_OUT", 1);

    /* renamed from: i  reason: collision with root package name */
    public static final j f49814i = new j("NONE", 2);

    /* renamed from: o  reason: collision with root package name */
    private static final /* synthetic */ j[] f49815o;

    /* renamed from: p  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f49816p;

    static {
        j[] a10 = a();
        f49815o = a10;
        f49816p = pr.a.a(a10);
    }

    private j(String str, int i10) {
    }

    private static final /* synthetic */ j[] a() {
        return new j[]{f49812d, f49813e, f49814i};
    }

    public static j valueOf(String str) {
        return (j) Enum.valueOf(j.class, str);
    }

    public static j[] values() {
        return (j[]) f49815o.clone();
    }
}
