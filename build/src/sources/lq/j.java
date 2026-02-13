package lq;

import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class j {

    /* renamed from: d  reason: collision with root package name */
    public static final j f36549d = new j("SLIDE_IN", 0);

    /* renamed from: e  reason: collision with root package name */
    public static final j f36550e = new j("SLIDE_OUT", 1);

    /* renamed from: i  reason: collision with root package name */
    public static final j f36551i = new j("NONE", 2);

    /* renamed from: o  reason: collision with root package name */
    private static final /* synthetic */ j[] f36552o;

    /* renamed from: p  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f36553p;

    static {
        j[] a10 = a();
        f36552o = a10;
        f36553p = hs.a.a(a10);
    }

    private j(String str, int i10) {
    }

    private static final /* synthetic */ j[] a() {
        return new j[]{f36549d, f36550e, f36551i};
    }

    public static j valueOf(String str) {
        return (j) Enum.valueOf(j.class, str);
    }

    public static j[] values() {
        return (j[]) f36552o.clone();
    }
}
