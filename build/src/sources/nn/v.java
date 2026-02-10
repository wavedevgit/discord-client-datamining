package nn;

import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class v {

    /* renamed from: d  reason: collision with root package name */
    public static final v f38129d = new v("NONE", 0);

    /* renamed from: e  reason: collision with root package name */
    public static final v f38130e = new v("BOX_NONE", 1);

    /* renamed from: i  reason: collision with root package name */
    public static final v f38131i = new v("BOX_ONLY", 2);

    /* renamed from: o  reason: collision with root package name */
    public static final v f38132o = new v("AUTO", 3);

    /* renamed from: p  reason: collision with root package name */
    private static final /* synthetic */ v[] f38133p;

    /* renamed from: q  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f38134q;

    static {
        v[] a10 = a();
        f38133p = a10;
        f38134q = hs.a.a(a10);
    }

    private v(String str, int i10) {
    }

    private static final /* synthetic */ v[] a() {
        return new v[]{f38129d, f38130e, f38131i, f38132o};
    }

    public static v valueOf(String str) {
        return (v) Enum.valueOf(v.class, str);
    }

    public static v[] values() {
        return (v[]) f38133p.clone();
    }
}
