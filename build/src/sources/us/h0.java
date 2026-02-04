package us;

import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class h0 {

    /* renamed from: d  reason: collision with root package name */
    public static final h0 f50889d = new h0("NONE", 0);

    /* renamed from: e  reason: collision with root package name */
    public static final h0 f50890e = new h0("ZERO", 1);

    /* renamed from: i  reason: collision with root package name */
    public static final h0 f50891i = new h0("SPACE", 2);

    /* renamed from: o  reason: collision with root package name */
    private static final /* synthetic */ h0[] f50892o;

    /* renamed from: p  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f50893p;

    static {
        h0[] a10 = a();
        f50892o = a10;
        f50893p = sr.a.a(a10);
    }

    private h0(String str, int i10) {
    }

    private static final /* synthetic */ h0[] a() {
        return new h0[]{f50889d, f50890e, f50891i};
    }

    public static h0 valueOf(String str) {
        return (h0) Enum.valueOf(h0.class, str);
    }

    public static h0[] values() {
        return (h0[]) f50892o.clone();
    }
}
