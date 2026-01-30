package kotlin.reflect.jvm.internal.impl.renderer;

import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class ParameterNameRenderingPolicy {

    /* renamed from: d  reason: collision with root package name */
    private static final /* synthetic */ ParameterNameRenderingPolicy[] f35357d;

    /* renamed from: e  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f35358e;
    public static final ParameterNameRenderingPolicy ALL = new ParameterNameRenderingPolicy("ALL", 0);
    public static final ParameterNameRenderingPolicy ONLY_NON_SYNTHESIZED = new ParameterNameRenderingPolicy("ONLY_NON_SYNTHESIZED", 1);
    public static final ParameterNameRenderingPolicy NONE = new ParameterNameRenderingPolicy("NONE", 2);

    static {
        ParameterNameRenderingPolicy[] a10 = a();
        f35357d = a10;
        f35358e = pr.a.a(a10);
    }

    private ParameterNameRenderingPolicy(String str, int i10) {
    }

    private static final /* synthetic */ ParameterNameRenderingPolicy[] a() {
        return new ParameterNameRenderingPolicy[]{ALL, ONLY_NON_SYNTHESIZED, NONE};
    }

    public static ParameterNameRenderingPolicy valueOf(String str) {
        return (ParameterNameRenderingPolicy) Enum.valueOf(ParameterNameRenderingPolicy.class, str);
    }

    public static ParameterNameRenderingPolicy[] values() {
        return (ParameterNameRenderingPolicy[]) f35357d.clone();
    }
}
