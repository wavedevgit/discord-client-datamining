package zp;

import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class j {

    /* renamed from: d  reason: collision with root package name */
    public static final j f56158d = new j("SLIDE_IN", 0);

    /* renamed from: e  reason: collision with root package name */
    public static final j f56159e = new j("SLIDE_OUT", 1);

    /* renamed from: i  reason: collision with root package name */
    public static final j f56160i = new j("NONE", 2);

    /* renamed from: o  reason: collision with root package name */
    private static final /* synthetic */ j[] f56161o;

    /* renamed from: p  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f56162p;

    static {
        j[] a10 = a();
        f56161o = a10;
        f56162p = vr.a.a(a10);
    }

    private j(String str, int i10) {
    }

    private static final /* synthetic */ j[] a() {
        return new j[]{f56158d, f56159e, f56160i};
    }

    public static j valueOf(String str) {
        return (j) Enum.valueOf(j.class, str);
    }

    public static j[] values() {
        return (j[]) f56161o.clone();
    }
}
