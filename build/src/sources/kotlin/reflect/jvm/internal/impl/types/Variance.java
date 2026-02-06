package kotlin.reflect.jvm.internal.impl.types;

import kotlin.enums.EnumEntries;
import org.jetbrains.annotations.NotNull;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class Variance {
    public static final Variance INVARIANT = new Variance("INVARIANT", 0, "", true, true, 0);
    public static final Variance IN_VARIANCE = new Variance("IN_VARIANCE", 1, "in", true, false, -1);
    public static final Variance OUT_VARIANCE = new Variance("OUT_VARIANCE", 2, "out", false, true, 1);

    /* renamed from: p  reason: collision with root package name */
    private static final /* synthetic */ Variance[] f34641p;

    /* renamed from: q  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f34642q;

    /* renamed from: d  reason: collision with root package name */
    private final String f34643d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f34644e;

    /* renamed from: i  reason: collision with root package name */
    private final boolean f34645i;

    /* renamed from: o  reason: collision with root package name */
    private final int f34646o;

    static {
        Variance[] a10 = a();
        f34641p = a10;
        f34642q = xr.a.a(a10);
    }

    private Variance(String str, int i10, String str2, boolean z10, boolean z11, int i11) {
        this.f34643d = str2;
        this.f34644e = z10;
        this.f34645i = z11;
        this.f34646o = i11;
    }

    private static final /* synthetic */ Variance[] a() {
        return new Variance[]{INVARIANT, IN_VARIANCE, OUT_VARIANCE};
    }

    public static Variance valueOf(String str) {
        return (Variance) Enum.valueOf(Variance.class, str);
    }

    public static Variance[] values() {
        return (Variance[]) f34641p.clone();
    }

    public final boolean getAllowsOutPosition() {
        return this.f34645i;
    }

    @NotNull
    public final String getLabel() {
        return this.f34643d;
    }

    @Override // java.lang.Enum
    @NotNull
    public String toString() {
        return this.f34643d;
    }
}
