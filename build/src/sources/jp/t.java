package jp;

import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class t {

    /* renamed from: d  reason: collision with root package name */
    public static final t f32376d = new t("Font", 0);

    /* renamed from: e  reason: collision with root package name */
    public static final t f32377e = new t("Drawable", 1);

    /* renamed from: i  reason: collision with root package name */
    public static final t f32378i = new t("Raw", 2);

    /* renamed from: o  reason: collision with root package name */
    private static final /* synthetic */ t[] f32379o;

    /* renamed from: p  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f32380p;

    static {
        t[] a10 = a();
        f32379o = a10;
        f32380p = pr.a.a(a10);
    }

    private t(String str, int i10) {
    }

    private static final /* synthetic */ t[] a() {
        return new t[]{f32376d, f32377e, f32378i};
    }

    public static t valueOf(String str) {
        return (t) Enum.valueOf(t.class, str);
    }

    public static t[] values() {
        return (t[]) f32379o.clone();
    }
}
