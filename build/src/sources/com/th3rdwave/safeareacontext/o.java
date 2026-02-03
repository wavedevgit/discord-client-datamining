package com.th3rdwave.safeareacontext;

import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class o {

    /* renamed from: d  reason: collision with root package name */
    public static final o f19082d = new o("PADDING", 0);

    /* renamed from: e  reason: collision with root package name */
    public static final o f19083e = new o("MARGIN", 1);

    /* renamed from: i  reason: collision with root package name */
    private static final /* synthetic */ o[] f19084i;

    /* renamed from: o  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f19085o;

    static {
        o[] a10 = a();
        f19084i = a10;
        f19085o = qr.a.a(a10);
    }

    private o(String str, int i10) {
    }

    private static final /* synthetic */ o[] a() {
        return new o[]{f19082d, f19083e};
    }

    public static o valueOf(String str) {
        return (o) Enum.valueOf(o.class, str);
    }

    public static o[] values() {
        return (o[]) f19084i.clone();
    }
}
