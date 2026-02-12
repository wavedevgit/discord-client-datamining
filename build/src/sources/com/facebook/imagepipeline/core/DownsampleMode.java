package com.facebook.imagepipeline.core;

import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class DownsampleMode {

    /* renamed from: d  reason: collision with root package name */
    public static final DownsampleMode f11080d = new DownsampleMode("ALWAYS", 0);

    /* renamed from: e  reason: collision with root package name */
    public static final DownsampleMode f11081e = new DownsampleMode("AUTO", 1);

    /* renamed from: i  reason: collision with root package name */
    public static final DownsampleMode f11082i = new DownsampleMode("NEVER", 2);

    /* renamed from: o  reason: collision with root package name */
    private static final /* synthetic */ DownsampleMode[] f11083o;

    /* renamed from: p  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f11084p;

    static {
        DownsampleMode[] a10 = a();
        f11083o = a10;
        f11084p = hs.a.a(a10);
    }

    private DownsampleMode(String str, int i10) {
    }

    private static final /* synthetic */ DownsampleMode[] a() {
        return new DownsampleMode[]{f11080d, f11081e, f11082i};
    }

    public static DownsampleMode valueOf(String str) {
        return (DownsampleMode) Enum.valueOf(DownsampleMode.class, str);
    }

    public static DownsampleMode[] values() {
        return (DownsampleMode[]) f11083o.clone();
    }
}
