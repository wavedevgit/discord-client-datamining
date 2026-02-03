package h5;

import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class h {

    /* renamed from: d  reason: collision with root package name */
    public static final h f27542d = new h("FILL", 0);

    /* renamed from: e  reason: collision with root package name */
    public static final h f27543e = new h("FIT", 1);

    /* renamed from: i  reason: collision with root package name */
    private static final /* synthetic */ h[] f27544i;

    /* renamed from: o  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f27545o;

    static {
        h[] a10 = a();
        f27544i = a10;
        f27545o = qr.a.a(a10);
    }

    private h(String str, int i10) {
    }

    private static final /* synthetic */ h[] a() {
        return new h[]{f27542d, f27543e};
    }

    public static h valueOf(String str) {
        return (h) Enum.valueOf(h.class, str);
    }

    public static h[] values() {
        return (h[]) f27544i.clone();
    }
}
