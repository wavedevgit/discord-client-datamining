package hp;

import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b0 {

    /* renamed from: d  reason: collision with root package name */
    public static final b0 f26232d = new b0("Camera", 0);

    /* renamed from: e  reason: collision with root package name */
    public static final b0 f26233e = new b0("RecordAudio", 1);

    /* renamed from: i  reason: collision with root package name */
    public static final b0 f26234i = new b0("RoughLocation", 2);

    /* renamed from: o  reason: collision with root package name */
    public static final b0 f26235o = new b0("PreciseLocation", 3);

    /* renamed from: p  reason: collision with root package name */
    private static final /* synthetic */ b0[] f26236p;

    /* renamed from: q  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f26237q;

    static {
        b0[] a10 = a();
        f26236p = a10;
        f26237q = xr.a.a(a10);
    }

    private b0(String str, int i10) {
    }

    private static final /* synthetic */ b0[] a() {
        return new b0[]{f26232d, f26233e, f26234i, f26235o};
    }

    public static b0 valueOf(String str) {
        return (b0) Enum.valueOf(b0.class, str);
    }

    public static b0[] values() {
        return (b0[]) f26236p.clone();
    }
}
