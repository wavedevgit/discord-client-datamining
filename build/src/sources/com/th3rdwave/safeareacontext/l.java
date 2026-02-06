package com.th3rdwave.safeareacontext;

import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class l {

    /* renamed from: d  reason: collision with root package name */
    public static final l f18438d = new l("OFF", 0);

    /* renamed from: e  reason: collision with root package name */
    public static final l f18439e = new l("ADDITIVE", 1);

    /* renamed from: i  reason: collision with root package name */
    public static final l f18440i = new l("MAXIMUM", 2);

    /* renamed from: o  reason: collision with root package name */
    private static final /* synthetic */ l[] f18441o;

    /* renamed from: p  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f18442p;

    static {
        l[] a10 = a();
        f18441o = a10;
        f18442p = xr.a.a(a10);
    }

    private l(String str, int i10) {
    }

    private static final /* synthetic */ l[] a() {
        return new l[]{f18438d, f18439e, f18440i};
    }

    public static l valueOf(String str) {
        return (l) Enum.valueOf(l.class, str);
    }

    public static l[] values() {
        return (l[]) f18441o.clone();
    }
}
