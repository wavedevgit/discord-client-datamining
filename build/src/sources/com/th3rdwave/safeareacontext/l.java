package com.th3rdwave.safeareacontext;

import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class l {

    /* renamed from: d  reason: collision with root package name */
    public static final l f19437d = new l("OFF", 0);

    /* renamed from: e  reason: collision with root package name */
    public static final l f19438e = new l("ADDITIVE", 1);

    /* renamed from: i  reason: collision with root package name */
    public static final l f19439i = new l("MAXIMUM", 2);

    /* renamed from: o  reason: collision with root package name */
    private static final /* synthetic */ l[] f19440o;

    /* renamed from: p  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f19441p;

    static {
        l[] a10 = a();
        f19440o = a10;
        f19441p = pr.a.a(a10);
    }

    private l(String str, int i10) {
    }

    private static final /* synthetic */ l[] a() {
        return new l[]{f19437d, f19438e, f19439i};
    }

    public static l valueOf(String str) {
        return (l) Enum.valueOf(l.class, str);
    }

    public static l[] values() {
        return (l[]) f19440o.clone();
    }
}
