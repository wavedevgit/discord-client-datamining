package so;

import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class z {

    /* renamed from: d  reason: collision with root package name */
    public static final z f50230d = new z("INQUIRY_COMPLETE", 0);

    /* renamed from: e  reason: collision with root package name */
    public static final z f50231e = new z("INQUIRY_CANCELED", 1);

    /* renamed from: i  reason: collision with root package name */
    public static final z f50232i = new z("INQUIRY_ERROR", 2);

    /* renamed from: o  reason: collision with root package name */
    private static final /* synthetic */ z[] f50233o;

    /* renamed from: p  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f50234p;

    static {
        z[] a10 = a();
        f50233o = a10;
        f50234p = vr.a.a(a10);
    }

    private z(String str, int i10) {
    }

    private static final /* synthetic */ z[] a() {
        return new z[]{f50230d, f50231e, f50232i};
    }

    public static z valueOf(String str) {
        return (z) Enum.valueOf(z.class, str);
    }

    public static z[] values() {
        return (z[]) f50233o.clone();
    }
}
