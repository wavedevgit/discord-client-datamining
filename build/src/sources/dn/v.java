package dn;

import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class v {

    /* renamed from: d  reason: collision with root package name */
    public static final v f21983d = new v("NONE", 0);

    /* renamed from: e  reason: collision with root package name */
    public static final v f21984e = new v("BOX_NONE", 1);

    /* renamed from: i  reason: collision with root package name */
    public static final v f21985i = new v("BOX_ONLY", 2);

    /* renamed from: o  reason: collision with root package name */
    public static final v f21986o = new v("AUTO", 3);

    /* renamed from: p  reason: collision with root package name */
    private static final /* synthetic */ v[] f21987p;

    /* renamed from: q  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f21988q;

    static {
        v[] a10 = a();
        f21987p = a10;
        f21988q = qr.a.a(a10);
    }

    private v(String str, int i10) {
    }

    private static final /* synthetic */ v[] a() {
        return new v[]{f21983d, f21984e, f21985i, f21986o};
    }

    public static v valueOf(String str) {
        return (v) Enum.valueOf(v.class, str);
    }

    public static v[] values() {
        return (v[]) f21987p.clone();
    }
}
