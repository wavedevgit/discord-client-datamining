package nn;

import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class v {

    /* renamed from: d  reason: collision with root package name */
    public static final v f38130d = new v("NONE", 0);

    /* renamed from: e  reason: collision with root package name */
    public static final v f38131e = new v("BOX_NONE", 1);

    /* renamed from: i  reason: collision with root package name */
    public static final v f38132i = new v("BOX_ONLY", 2);

    /* renamed from: o  reason: collision with root package name */
    public static final v f38133o = new v("AUTO", 3);

    /* renamed from: p  reason: collision with root package name */
    private static final /* synthetic */ v[] f38134p;

    /* renamed from: q  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f38135q;

    static {
        v[] a10 = a();
        f38134p = a10;
        f38135q = hs.a.a(a10);
    }

    private v(String str, int i10) {
    }

    private static final /* synthetic */ v[] a() {
        return new v[]{f38130d, f38131e, f38132i, f38133o};
    }

    public static v valueOf(String str) {
        return (v) Enum.valueOf(v.class, str);
    }

    public static v[] values() {
        return (v[]) f38134p.clone();
    }
}
