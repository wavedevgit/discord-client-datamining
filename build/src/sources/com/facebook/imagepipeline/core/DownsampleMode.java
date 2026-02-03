package com.facebook.imagepipeline.core;

import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class DownsampleMode {

    /* renamed from: d  reason: collision with root package name */
    public static final DownsampleMode f10078d = new DownsampleMode("ALWAYS", 0);

    /* renamed from: e  reason: collision with root package name */
    public static final DownsampleMode f10079e = new DownsampleMode("AUTO", 1);

    /* renamed from: i  reason: collision with root package name */
    public static final DownsampleMode f10080i = new DownsampleMode("NEVER", 2);

    /* renamed from: o  reason: collision with root package name */
    private static final /* synthetic */ DownsampleMode[] f10081o;

    /* renamed from: p  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f10082p;

    static {
        DownsampleMode[] a10 = a();
        f10081o = a10;
        f10082p = sr.a.a(a10);
    }

    private DownsampleMode(String str, int i10) {
    }

    private static final /* synthetic */ DownsampleMode[] a() {
        return new DownsampleMode[]{f10078d, f10079e, f10080i};
    }

    public static DownsampleMode valueOf(String str) {
        return (DownsampleMode) Enum.valueOf(DownsampleMode.class, str);
    }

    public static DownsampleMode[] values() {
        return (DownsampleMode[]) f10081o.clone();
    }
}
