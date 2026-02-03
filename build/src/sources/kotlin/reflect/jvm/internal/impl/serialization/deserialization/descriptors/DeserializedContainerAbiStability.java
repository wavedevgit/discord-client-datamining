package kotlin.reflect.jvm.internal.impl.serialization.deserialization.descriptors;

import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class DeserializedContainerAbiStability {
    public static final DeserializedContainerAbiStability STABLE = new DeserializedContainerAbiStability("STABLE", 0);
    public static final DeserializedContainerAbiStability UNSTABLE = new DeserializedContainerAbiStability("UNSTABLE", 1);

    /* renamed from: d  reason: collision with root package name */
    private static final /* synthetic */ DeserializedContainerAbiStability[] f35459d;

    /* renamed from: e  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f35460e;

    static {
        DeserializedContainerAbiStability[] a10 = a();
        f35459d = a10;
        f35460e = qr.a.a(a10);
    }

    private DeserializedContainerAbiStability(String str, int i10) {
    }

    private static final /* synthetic */ DeserializedContainerAbiStability[] a() {
        return new DeserializedContainerAbiStability[]{STABLE, UNSTABLE};
    }

    public static DeserializedContainerAbiStability valueOf(String str) {
        return (DeserializedContainerAbiStability) Enum.valueOf(DeserializedContainerAbiStability.class, str);
    }

    public static DeserializedContainerAbiStability[] values() {
        return (DeserializedContainerAbiStability[]) f35459d.clone();
    }
}
