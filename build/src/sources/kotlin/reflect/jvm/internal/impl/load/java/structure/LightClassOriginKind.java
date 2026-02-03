package kotlin.reflect.jvm.internal.impl.load.java.structure;

import kotlin.enums.EnumEntries;
import qr.a;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class LightClassOriginKind {

    /* renamed from: d  reason: collision with root package name */
    private static final /* synthetic */ LightClassOriginKind[] f34115d;

    /* renamed from: e  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f34116e;
    public static final LightClassOriginKind SOURCE = new LightClassOriginKind("SOURCE", 0);
    public static final LightClassOriginKind BINARY = new LightClassOriginKind("BINARY", 1);

    static {
        LightClassOriginKind[] a10 = a();
        f34115d = a10;
        f34116e = a.a(a10);
    }

    private LightClassOriginKind(String str, int i10) {
    }

    private static final /* synthetic */ LightClassOriginKind[] a() {
        return new LightClassOriginKind[]{SOURCE, BINARY};
    }

    public static LightClassOriginKind valueOf(String str) {
        return (LightClassOriginKind) Enum.valueOf(LightClassOriginKind.class, str);
    }

    public static LightClassOriginKind[] values() {
        return (LightClassOriginKind[]) f34115d.clone();
    }
}
