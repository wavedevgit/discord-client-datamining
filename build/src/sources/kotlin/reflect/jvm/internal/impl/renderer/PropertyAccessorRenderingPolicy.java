package kotlin.reflect.jvm.internal.impl.renderer;

import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class PropertyAccessorRenderingPolicy {

    /* renamed from: d  reason: collision with root package name */
    private static final /* synthetic */ PropertyAccessorRenderingPolicy[] f34525d;

    /* renamed from: e  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f34526e;
    public static final PropertyAccessorRenderingPolicy PRETTY = new PropertyAccessorRenderingPolicy("PRETTY", 0);
    public static final PropertyAccessorRenderingPolicy DEBUG = new PropertyAccessorRenderingPolicy("DEBUG", 1);
    public static final PropertyAccessorRenderingPolicy NONE = new PropertyAccessorRenderingPolicy("NONE", 2);

    static {
        PropertyAccessorRenderingPolicy[] a10 = a();
        f34525d = a10;
        f34526e = sr.a.a(a10);
    }

    private PropertyAccessorRenderingPolicy(String str, int i10) {
    }

    private static final /* synthetic */ PropertyAccessorRenderingPolicy[] a() {
        return new PropertyAccessorRenderingPolicy[]{PRETTY, DEBUG, NONE};
    }

    public static PropertyAccessorRenderingPolicy valueOf(String str) {
        return (PropertyAccessorRenderingPolicy) Enum.valueOf(PropertyAccessorRenderingPolicy.class, str);
    }

    public static PropertyAccessorRenderingPolicy[] values() {
        return (PropertyAccessorRenderingPolicy[]) f34525d.clone();
    }
}
