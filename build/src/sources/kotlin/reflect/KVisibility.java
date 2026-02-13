package kotlin.reflect;

import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class KVisibility {

    /* renamed from: d  reason: collision with root package name */
    public static final KVisibility f32665d = new KVisibility("PUBLIC", 0);

    /* renamed from: e  reason: collision with root package name */
    public static final KVisibility f32666e = new KVisibility("PROTECTED", 1);

    /* renamed from: i  reason: collision with root package name */
    public static final KVisibility f32667i = new KVisibility("INTERNAL", 2);

    /* renamed from: o  reason: collision with root package name */
    public static final KVisibility f32668o = new KVisibility("PRIVATE", 3);

    /* renamed from: p  reason: collision with root package name */
    private static final /* synthetic */ KVisibility[] f32669p;

    /* renamed from: q  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f32670q;

    static {
        KVisibility[] a10 = a();
        f32669p = a10;
        f32670q = hs.a.a(a10);
    }

    private KVisibility(String str, int i10) {
    }

    private static final /* synthetic */ KVisibility[] a() {
        return new KVisibility[]{f32665d, f32666e, f32667i, f32668o};
    }

    public static KVisibility valueOf(String str) {
        return (KVisibility) Enum.valueOf(KVisibility.class, str);
    }

    public static KVisibility[] values() {
        return (KVisibility[]) f32669p.clone();
    }
}
