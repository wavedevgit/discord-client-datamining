package z9;

import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class k {

    /* renamed from: d  reason: collision with root package name */
    public static final k f56044d = new k("VITO_V2", 0);

    /* renamed from: e  reason: collision with root package name */
    public static final k f56045e = new k("VITO_V1", 1);

    /* renamed from: i  reason: collision with root package name */
    public static final k f56046i = new k("DRAWEE", 2);

    /* renamed from: o  reason: collision with root package name */
    public static final k f56047o = new k("OTHER", 3);

    /* renamed from: p  reason: collision with root package name */
    private static final /* synthetic */ k[] f56048p;

    /* renamed from: q  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f56049q;

    static {
        k[] a10 = a();
        f56048p = a10;
        f56049q = xr.a.a(a10);
    }

    private k(String str, int i10) {
    }

    private static final /* synthetic */ k[] a() {
        return new k[]{f56044d, f56045e, f56046i, f56047o};
    }

    public static k valueOf(String str) {
        return (k) Enum.valueOf(k.class, str);
    }

    public static k[] values() {
        return (k[]) f56048p.clone();
    }
}
