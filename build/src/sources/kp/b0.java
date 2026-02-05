package kp;

import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b0 {

    /* renamed from: d  reason: collision with root package name */
    public static final b0 f35149d = new b0("V0", 0);

    /* renamed from: e  reason: collision with root package name */
    public static final b0 f35150e = new b0("V1", 1);

    /* renamed from: i  reason: collision with root package name */
    private static final /* synthetic */ b0[] f35151i;

    /* renamed from: o  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f35152o;

    static {
        b0[] a10 = a();
        f35151i = a10;
        f35152o = vr.a.a(a10);
    }

    private b0(String str, int i10) {
    }

    private static final /* synthetic */ b0[] a() {
        return new b0[]{f35149d, f35150e};
    }

    public static b0 valueOf(String str) {
        return (b0) Enum.valueOf(b0.class, str);
    }

    public static b0[] values() {
        return (b0[]) f35151i.clone();
    }
}
