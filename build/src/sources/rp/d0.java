package rp;

import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d0 {

    /* renamed from: d  reason: collision with root package name */
    public static final d0 f48143d = new d0("Camera", 0);

    /* renamed from: e  reason: collision with root package name */
    public static final d0 f48144e = new d0("RecordAudio", 1);

    /* renamed from: i  reason: collision with root package name */
    public static final d0 f48145i = new d0("RoughLocation", 2);

    /* renamed from: o  reason: collision with root package name */
    public static final d0 f48146o = new d0("PreciseLocation", 3);

    /* renamed from: p  reason: collision with root package name */
    private static final /* synthetic */ d0[] f48147p;

    /* renamed from: q  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f48148q;

    static {
        d0[] a10 = a();
        f48147p = a10;
        f48148q = hs.a.a(a10);
    }

    private d0(String str, int i10) {
    }

    private static final /* synthetic */ d0[] a() {
        return new d0[]{f48143d, f48144e, f48145i, f48146o};
    }

    public static d0 valueOf(String str) {
        return (d0) Enum.valueOf(d0.class, str);
    }

    public static d0[] values() {
        return (d0[]) f48147p.clone();
    }
}
