package kotlin.reflect;

import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class KVisibility {

    /* renamed from: d  reason: collision with root package name */
    public static final KVisibility f31874d = new KVisibility("PUBLIC", 0);

    /* renamed from: e  reason: collision with root package name */
    public static final KVisibility f31875e = new KVisibility("PROTECTED", 1);

    /* renamed from: i  reason: collision with root package name */
    public static final KVisibility f31876i = new KVisibility("INTERNAL", 2);

    /* renamed from: o  reason: collision with root package name */
    public static final KVisibility f31877o = new KVisibility("PRIVATE", 3);

    /* renamed from: p  reason: collision with root package name */
    private static final /* synthetic */ KVisibility[] f31878p;

    /* renamed from: q  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f31879q;

    static {
        KVisibility[] a10 = a();
        f31878p = a10;
        f31879q = yr.a.a(a10);
    }

    private KVisibility(String str, int i10) {
    }

    private static final /* synthetic */ KVisibility[] a() {
        return new KVisibility[]{f31874d, f31875e, f31876i, f31877o};
    }

    public static KVisibility valueOf(String str) {
        return (KVisibility) Enum.valueOf(KVisibility.class, str);
    }

    public static KVisibility[] values() {
        return (KVisibility[]) f31878p.clone();
    }
}
