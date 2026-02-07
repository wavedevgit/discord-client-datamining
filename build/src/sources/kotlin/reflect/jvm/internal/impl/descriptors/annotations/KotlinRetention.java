package kotlin.reflect.jvm.internal.impl.descriptors.annotations;

import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class KotlinRetention {

    /* renamed from: d  reason: collision with root package name */
    private static final /* synthetic */ KotlinRetention[] f32413d;

    /* renamed from: e  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f32414e;
    public static final KotlinRetention RUNTIME = new KotlinRetention("RUNTIME", 0);
    public static final KotlinRetention BINARY = new KotlinRetention("BINARY", 1);
    public static final KotlinRetention SOURCE = new KotlinRetention("SOURCE", 2);

    static {
        KotlinRetention[] a10 = a();
        f32413d = a10;
        f32414e = xr.a.a(a10);
    }

    private KotlinRetention(String str, int i10) {
    }

    private static final /* synthetic */ KotlinRetention[] a() {
        return new KotlinRetention[]{RUNTIME, BINARY, SOURCE};
    }

    public static KotlinRetention valueOf(String str) {
        return (KotlinRetention) Enum.valueOf(KotlinRetention.class, str);
    }

    public static KotlinRetention[] values() {
        return (KotlinRetention[]) f32413d.clone();
    }
}
