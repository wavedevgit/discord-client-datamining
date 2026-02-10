package ln;

import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class v {

    /* renamed from: d  reason: collision with root package name */
    public static final v f36159d = new v("NONE", 0);

    /* renamed from: e  reason: collision with root package name */
    public static final v f36160e = new v("BOX_NONE", 1);

    /* renamed from: i  reason: collision with root package name */
    public static final v f36161i = new v("BOX_ONLY", 2);

    /* renamed from: o  reason: collision with root package name */
    public static final v f36162o = new v("AUTO", 3);

    /* renamed from: p  reason: collision with root package name */
    private static final /* synthetic */ v[] f36163p;

    /* renamed from: q  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f36164q;

    static {
        v[] a10 = a();
        f36163p = a10;
        f36164q = yr.a.a(a10);
    }

    private v(String str, int i10) {
    }

    private static final /* synthetic */ v[] a() {
        return new v[]{f36159d, f36160e, f36161i, f36162o};
    }

    public static v valueOf(String str) {
        return (v) Enum.valueOf(v.class, str);
    }

    public static v[] values() {
        return (v[]) f36163p.clone();
    }
}
