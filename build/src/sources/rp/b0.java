package rp;

import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b0 {

    /* renamed from: d  reason: collision with root package name */
    public static final b0 f47526d = new b0("Camera", 0);

    /* renamed from: e  reason: collision with root package name */
    public static final b0 f47527e = new b0("RecordAudio", 1);

    /* renamed from: i  reason: collision with root package name */
    public static final b0 f47528i = new b0("RoughLocation", 2);

    /* renamed from: o  reason: collision with root package name */
    public static final b0 f47529o = new b0("PreciseLocation", 3);

    /* renamed from: p  reason: collision with root package name */
    private static final /* synthetic */ b0[] f47530p;

    /* renamed from: q  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f47531q;

    static {
        b0[] a10 = a();
        f47530p = a10;
        f47531q = hs.a.a(a10);
    }

    private b0(String str, int i10) {
    }

    private static final /* synthetic */ b0[] a() {
        return new b0[]{f47526d, f47527e, f47528i, f47529o};
    }

    public static b0 valueOf(String str) {
        return (b0) Enum.valueOf(b0.class, str);
    }

    public static b0[] values() {
        return (b0[]) f47530p.clone();
    }
}
