package vn;

import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a {

    /* renamed from: d  reason: collision with root package name */
    public static final a f51697d = new a("Stream", 0);

    /* renamed from: e  reason: collision with root package name */
    public static final a f51698e = new a("Upload", 1);

    /* renamed from: i  reason: collision with root package name */
    public static final a f51699i = new a("None", 2);

    /* renamed from: o  reason: collision with root package name */
    private static final /* synthetic */ a[] f51700o;

    /* renamed from: p  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f51701p;

    static {
        a[] a10 = a();
        f51700o = a10;
        f51701p = sr.a.a(a10);
    }

    private a(String str, int i10) {
    }

    private static final /* synthetic */ a[] a() {
        return new a[]{f51697d, f51698e, f51699i};
    }

    public static a valueOf(String str) {
        return (a) Enum.valueOf(a.class, str);
    }

    public static a[] values() {
        return (a[]) f51700o.clone();
    }
}
