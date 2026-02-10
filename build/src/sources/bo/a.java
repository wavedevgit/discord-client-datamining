package bo;

import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a {

    /* renamed from: d  reason: collision with root package name */
    public static final a f7161d = new a("Stream", 0);

    /* renamed from: e  reason: collision with root package name */
    public static final a f7162e = new a("Upload", 1);

    /* renamed from: i  reason: collision with root package name */
    public static final a f7163i = new a("None", 2);

    /* renamed from: o  reason: collision with root package name */
    private static final /* synthetic */ a[] f7164o;

    /* renamed from: p  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f7165p;

    static {
        a[] a10 = a();
        f7164o = a10;
        f7165p = yr.a.a(a10);
    }

    private a(String str, int i10) {
    }

    private static final /* synthetic */ a[] a() {
        return new a[]{f7161d, f7162e, f7163i};
    }

    public static a valueOf(String str) {
        return (a) Enum.valueOf(a.class, str);
    }

    public static a[] values() {
        return (a[]) f7164o.clone();
    }
}
