package com.facebook.imagepipeline.core;

import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class DownsampleMode {

    /* renamed from: d  reason: collision with root package name */
    public static final DownsampleMode f10463d = new DownsampleMode("ALWAYS", 0);

    /* renamed from: e  reason: collision with root package name */
    public static final DownsampleMode f10464e = new DownsampleMode("AUTO", 1);

    /* renamed from: i  reason: collision with root package name */
    public static final DownsampleMode f10465i = new DownsampleMode("NEVER", 2);

    /* renamed from: o  reason: collision with root package name */
    private static final /* synthetic */ DownsampleMode[] f10466o;

    /* renamed from: p  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f10467p;

    static {
        DownsampleMode[] a10 = a();
        f10466o = a10;
        f10467p = vr.a.a(a10);
    }

    private DownsampleMode(String str, int i10) {
    }

    private static final /* synthetic */ DownsampleMode[] a() {
        return new DownsampleMode[]{f10463d, f10464e, f10465i};
    }

    public static DownsampleMode valueOf(String str) {
        return (DownsampleMode) Enum.valueOf(DownsampleMode.class, str);
    }

    public static DownsampleMode[] values() {
        return (DownsampleMode[]) f10466o.clone();
    }
}
