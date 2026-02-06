package uo;

import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class z {

    /* renamed from: d  reason: collision with root package name */
    public static final z f52076d = new z("INQUIRY_COMPLETE", 0);

    /* renamed from: e  reason: collision with root package name */
    public static final z f52077e = new z("INQUIRY_CANCELED", 1);

    /* renamed from: i  reason: collision with root package name */
    public static final z f52078i = new z("INQUIRY_ERROR", 2);

    /* renamed from: o  reason: collision with root package name */
    private static final /* synthetic */ z[] f52079o;

    /* renamed from: p  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f52080p;

    static {
        z[] a10 = a();
        f52079o = a10;
        f52080p = xr.a.a(a10);
    }

    private z(String str, int i10) {
    }

    private static final /* synthetic */ z[] a() {
        return new z[]{f52076d, f52077e, f52078i};
    }

    public static z valueOf(String str) {
        return (z) Enum.valueOf(z.class, str);
    }

    public static z[] values() {
        return (z[]) f52079o.clone();
    }
}
