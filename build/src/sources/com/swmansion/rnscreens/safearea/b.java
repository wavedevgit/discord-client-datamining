package com.swmansion.rnscreens.safearea;

import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b {

    /* renamed from: d  reason: collision with root package name */
    public static final b f19352d = new b("ALL", 0);

    /* renamed from: e  reason: collision with root package name */
    public static final b f19353e = new b("SYSTEM", 1);

    /* renamed from: i  reason: collision with root package name */
    public static final b f19354i = new b("INTERFACE", 2);

    /* renamed from: o  reason: collision with root package name */
    private static final /* synthetic */ b[] f19355o;

    /* renamed from: p  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f19356p;

    static {
        b[] a10 = a();
        f19355o = a10;
        f19356p = hs.a.a(a10);
    }

    private b(String str, int i10) {
    }

    private static final /* synthetic */ b[] a() {
        return new b[]{f19352d, f19353e, f19354i};
    }

    public static b valueOf(String str) {
        return (b) Enum.valueOf(b.class, str);
    }

    public static b[] values() {
        return (b[]) f19355o.clone();
    }

    public final boolean d() {
        if (this != f19352d && this != f19354i) {
            return false;
        }
        return true;
    }

    public final boolean e() {
        if (this != f19352d && this != f19353e) {
            return false;
        }
        return true;
    }
}
