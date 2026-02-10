package com.swmansion.rnscreens.safearea;

import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b {

    /* renamed from: d  reason: collision with root package name */
    public static final b f19351d = new b("ALL", 0);

    /* renamed from: e  reason: collision with root package name */
    public static final b f19352e = new b("SYSTEM", 1);

    /* renamed from: i  reason: collision with root package name */
    public static final b f19353i = new b("INTERFACE", 2);

    /* renamed from: o  reason: collision with root package name */
    private static final /* synthetic */ b[] f19354o;

    /* renamed from: p  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f19355p;

    static {
        b[] a10 = a();
        f19354o = a10;
        f19355p = hs.a.a(a10);
    }

    private b(String str, int i10) {
    }

    private static final /* synthetic */ b[] a() {
        return new b[]{f19351d, f19352e, f19353i};
    }

    public static b valueOf(String str) {
        return (b) Enum.valueOf(b.class, str);
    }

    public static b[] values() {
        return (b[]) f19354o.clone();
    }

    public final boolean d() {
        if (this != f19351d && this != f19353i) {
            return false;
        }
        return true;
    }

    public final boolean e() {
        if (this != f19351d && this != f19352e) {
            return false;
        }
        return true;
    }
}
