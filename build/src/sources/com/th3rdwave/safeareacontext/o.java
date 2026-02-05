package com.th3rdwave.safeareacontext;

import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class o {

    /* renamed from: d  reason: collision with root package name */
    public static final o f18470d = new o("PADDING", 0);

    /* renamed from: e  reason: collision with root package name */
    public static final o f18471e = new o("MARGIN", 1);

    /* renamed from: i  reason: collision with root package name */
    private static final /* synthetic */ o[] f18472i;

    /* renamed from: o  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f18473o;

    static {
        o[] a10 = a();
        f18472i = a10;
        f18473o = vr.a.a(a10);
    }

    private o(String str, int i10) {
    }

    private static final /* synthetic */ o[] a() {
        return new o[]{f18470d, f18471e};
    }

    public static o valueOf(String str) {
        return (o) Enum.valueOf(o.class, str);
    }

    public static o[] values() {
        return (o[]) f18472i.clone();
    }
}
