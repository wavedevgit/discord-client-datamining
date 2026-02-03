package z9;

import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class k {

    /* renamed from: d  reason: collision with root package name */
    public static final k f55541d = new k("VITO_V2", 0);

    /* renamed from: e  reason: collision with root package name */
    public static final k f55542e = new k("VITO_V1", 1);

    /* renamed from: i  reason: collision with root package name */
    public static final k f55543i = new k("DRAWEE", 2);

    /* renamed from: o  reason: collision with root package name */
    public static final k f55544o = new k("OTHER", 3);

    /* renamed from: p  reason: collision with root package name */
    private static final /* synthetic */ k[] f55545p;

    /* renamed from: q  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f55546q;

    static {
        k[] a10 = a();
        f55545p = a10;
        f55546q = qr.a.a(a10);
    }

    private k(String str, int i10) {
    }

    private static final /* synthetic */ k[] a() {
        return new k[]{f55541d, f55542e, f55543i, f55544o};
    }

    public static k valueOf(String str) {
        return (k) Enum.valueOf(k.class, str);
    }

    public static k[] values() {
        return (k[]) f55545p.clone();
    }
}
