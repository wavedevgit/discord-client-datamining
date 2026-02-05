package z9;

import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class k {

    /* renamed from: d  reason: collision with root package name */
    public static final k f55265d = new k("VITO_V2", 0);

    /* renamed from: e  reason: collision with root package name */
    public static final k f55266e = new k("VITO_V1", 1);

    /* renamed from: i  reason: collision with root package name */
    public static final k f55267i = new k("DRAWEE", 2);

    /* renamed from: o  reason: collision with root package name */
    public static final k f55268o = new k("OTHER", 3);

    /* renamed from: p  reason: collision with root package name */
    private static final /* synthetic */ k[] f55269p;

    /* renamed from: q  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f55270q;

    static {
        k[] a10 = a();
        f55269p = a10;
        f55270q = vr.a.a(a10);
    }

    private k(String str, int i10) {
    }

    private static final /* synthetic */ k[] a() {
        return new k[]{f55265d, f55266e, f55267i, f55268o};
    }

    public static k valueOf(String str) {
        return (k) Enum.valueOf(k.class, str);
    }

    public static k[] values() {
        return (k[]) f55269p.clone();
    }
}
