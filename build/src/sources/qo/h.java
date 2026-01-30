package qo;

import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class h {

    /* renamed from: d  reason: collision with root package name */
    public static final h f47564d = new h("Transition", 0);

    /* renamed from: e  reason: collision with root package name */
    public static final h f47565e = new h("TransitionBack", 1);

    /* renamed from: i  reason: collision with root package name */
    public static final h f47566i = new h("DocumentFilesPost", 2);

    /* renamed from: o  reason: collision with root package name */
    public static final h f47567o = new h("DocumentFilesDelete", 3);

    /* renamed from: p  reason: collision with root package name */
    private static final /* synthetic */ h[] f47568p;

    /* renamed from: q  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f47569q;

    static {
        h[] a10 = a();
        f47568p = a10;
        f47569q = pr.a.a(a10);
    }

    private h(String str, int i10) {
    }

    private static final /* synthetic */ h[] a() {
        return new h[]{f47564d, f47565e, f47566i, f47567o};
    }

    public static h valueOf(String str) {
        return (h) Enum.valueOf(h.class, str);
    }

    public static h[] values() {
        return (h[]) f47568p.clone();
    }
}
