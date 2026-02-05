package kotlin.reflect.jvm.internal.impl.renderer;

import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class OverrideRenderingPolicy {

    /* renamed from: d  reason: collision with root package name */
    private static final /* synthetic */ OverrideRenderingPolicy[] f34045d;

    /* renamed from: e  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f34046e;
    public static final OverrideRenderingPolicy RENDER_OVERRIDE = new OverrideRenderingPolicy("RENDER_OVERRIDE", 0);
    public static final OverrideRenderingPolicy RENDER_OPEN = new OverrideRenderingPolicy("RENDER_OPEN", 1);
    public static final OverrideRenderingPolicy RENDER_OPEN_OVERRIDE = new OverrideRenderingPolicy("RENDER_OPEN_OVERRIDE", 2);

    static {
        OverrideRenderingPolicy[] a10 = a();
        f34045d = a10;
        f34046e = vr.a.a(a10);
    }

    private OverrideRenderingPolicy(String str, int i10) {
    }

    private static final /* synthetic */ OverrideRenderingPolicy[] a() {
        return new OverrideRenderingPolicy[]{RENDER_OVERRIDE, RENDER_OPEN, RENDER_OPEN_OVERRIDE};
    }

    public static OverrideRenderingPolicy valueOf(String str) {
        return (OverrideRenderingPolicy) Enum.valueOf(OverrideRenderingPolicy.class, str);
    }

    public static OverrideRenderingPolicy[] values() {
        return (OverrideRenderingPolicy[]) f34045d.clone();
    }
}
