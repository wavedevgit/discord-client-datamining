package kotlin.reflect.jvm.internal.impl.load.java.structure;

import kotlin.enums.EnumEntries;
import xr.a;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class LightClassOriginKind {

    /* renamed from: d  reason: collision with root package name */
    private static final /* synthetic */ LightClassOriginKind[] f33049d;

    /* renamed from: e  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f33050e;
    public static final LightClassOriginKind SOURCE = new LightClassOriginKind("SOURCE", 0);
    public static final LightClassOriginKind BINARY = new LightClassOriginKind("BINARY", 1);

    static {
        LightClassOriginKind[] a10 = a();
        f33049d = a10;
        f33050e = a.a(a10);
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
        return (LightClassOriginKind[]) f33049d.clone();
    }
}
