package z9;

import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class k {

    /* renamed from: d  reason: collision with root package name */
    public static final k f55996d = new k("VITO_V2", 0);

    /* renamed from: e  reason: collision with root package name */
    public static final k f55997e = new k("VITO_V1", 1);

    /* renamed from: i  reason: collision with root package name */
    public static final k f55998i = new k("DRAWEE", 2);

    /* renamed from: o  reason: collision with root package name */
    public static final k f55999o = new k("OTHER", 3);

    /* renamed from: p  reason: collision with root package name */
    private static final /* synthetic */ k[] f56000p;

    /* renamed from: q  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f56001q;

    static {
        k[] a10 = a();
        f56000p = a10;
        f56001q = xr.a.a(a10);
    }

    private k(String str, int i10) {
    }

    private static final /* synthetic */ k[] a() {
        return new k[]{f55996d, f55997e, f55998i, f55999o};
    }

    public static k valueOf(String str) {
        return (k) Enum.valueOf(k.class, str);
    }

    public static k[] values() {
        return (k[]) f56000p.clone();
    }
}
