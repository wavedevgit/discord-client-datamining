package ip;

import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d0 {

    /* renamed from: d  reason: collision with root package name */
    public static final d0 f29468d = new d0("Camera", 0);

    /* renamed from: e  reason: collision with root package name */
    public static final d0 f29469e = new d0("RecordAudio", 1);

    /* renamed from: i  reason: collision with root package name */
    public static final d0 f29470i = new d0("RoughLocation", 2);

    /* renamed from: o  reason: collision with root package name */
    public static final d0 f29471o = new d0("PreciseLocation", 3);

    /* renamed from: p  reason: collision with root package name */
    private static final /* synthetic */ d0[] f29472p;

    /* renamed from: q  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f29473q;

    static {
        d0[] a10 = a();
        f29472p = a10;
        f29473q = yr.a.a(a10);
    }

    private d0(String str, int i10) {
    }

    private static final /* synthetic */ d0[] a() {
        return new d0[]{f29468d, f29469e, f29470i, f29471o};
    }

    public static d0 valueOf(String str) {
        return (d0) Enum.valueOf(d0.class, str);
    }

    public static d0[] values() {
        return (d0[]) f29472p.clone();
    }
}
