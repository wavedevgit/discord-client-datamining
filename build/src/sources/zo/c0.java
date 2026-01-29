package zo;

import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c0 {

    /* renamed from: d  reason: collision with root package name */
    public static final c0 f55855d = new c0("Success", 0);

    /* renamed from: e  reason: collision with root package name */
    public static final c0 f55856e = new c0("Failure", 1);

    /* renamed from: i  reason: collision with root package name */
    public static final c0 f55857i = new c0("SettingsLaunched", 2);

    /* renamed from: o  reason: collision with root package name */
    private static final /* synthetic */ c0[] f55858o;

    /* renamed from: p  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f55859p;

    static {
        c0[] a10 = a();
        f55858o = a10;
        f55859p = pr.a.a(a10);
    }

    private c0(String str, int i10) {
    }

    private static final /* synthetic */ c0[] a() {
        return new c0[]{f55855d, f55856e, f55857i};
    }

    public static c0 valueOf(String str) {
        return (c0) Enum.valueOf(c0.class, str);
    }

    public static c0[] values() {
        return (c0[]) f55858o.clone();
    }
}
