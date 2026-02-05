package kp;

import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class h1 {

    /* renamed from: d  reason: collision with root package name */
    public static final h1 f35266d = new h1("Center", 0);

    /* renamed from: e  reason: collision with root package name */
    public static final h1 f35267e = new h1("Left", 1);

    /* renamed from: i  reason: collision with root package name */
    public static final h1 f35268i = new h1("Right", 2);

    /* renamed from: o  reason: collision with root package name */
    private static final /* synthetic */ h1[] f35269o;

    /* renamed from: p  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f35270p;

    static {
        h1[] a10 = a();
        f35269o = a10;
        f35270p = vr.a.a(a10);
    }

    private h1(String str, int i10) {
    }

    private static final /* synthetic */ h1[] a() {
        return new h1[]{f35266d, f35267e, f35268i};
    }

    public static h1 valueOf(String str) {
        return (h1) Enum.valueOf(h1.class, str);
    }

    public static h1[] values() {
        return (h1[]) f35269o.clone();
    }
}
