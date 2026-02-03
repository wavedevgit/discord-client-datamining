package cp;

import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c0 {

    /* renamed from: d  reason: collision with root package name */
    public static final c0 f19606d = new c0("Success", 0);

    /* renamed from: e  reason: collision with root package name */
    public static final c0 f19607e = new c0("Failure", 1);

    /* renamed from: i  reason: collision with root package name */
    public static final c0 f19608i = new c0("SettingsLaunched", 2);

    /* renamed from: o  reason: collision with root package name */
    private static final /* synthetic */ c0[] f19609o;

    /* renamed from: p  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f19610p;

    static {
        c0[] a10 = a();
        f19609o = a10;
        f19610p = sr.a.a(a10);
    }

    private c0(String str, int i10) {
    }

    private static final /* synthetic */ c0[] a() {
        return new c0[]{f19606d, f19607e, f19608i};
    }

    public static c0 valueOf(String str) {
        return (c0) Enum.valueOf(c0.class, str);
    }

    public static c0[] values() {
        return (c0[]) f19609o.clone();
    }
}
