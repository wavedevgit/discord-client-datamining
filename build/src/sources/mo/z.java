package mo;

import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class z {

    /* renamed from: d  reason: collision with root package name */
    public static final z f39579d = new z("INQUIRY_COMPLETE", 0);

    /* renamed from: e  reason: collision with root package name */
    public static final z f39580e = new z("INQUIRY_CANCELED", 1);

    /* renamed from: i  reason: collision with root package name */
    public static final z f39581i = new z("INQUIRY_ERROR", 2);

    /* renamed from: o  reason: collision with root package name */
    private static final /* synthetic */ z[] f39582o;

    /* renamed from: p  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f39583p;

    static {
        z[] a10 = a();
        f39582o = a10;
        f39583p = pr.a.a(a10);
    }

    private z(String str, int i10) {
    }

    private static final /* synthetic */ z[] a() {
        return new z[]{f39579d, f39580e, f39581i};
    }

    public static z valueOf(String str) {
        return (z) Enum.valueOf(z.class, str);
    }

    public static z[] values() {
        return (z[]) f39582o.clone();
    }
}
