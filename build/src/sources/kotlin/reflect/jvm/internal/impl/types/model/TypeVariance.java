package kotlin.reflect.jvm.internal.impl.types.model;

import kotlin.enums.EnumEntries;
import org.jetbrains.annotations.NotNull;
import pr.a;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class TypeVariance {

    /* renamed from: e  reason: collision with root package name */
    private static final /* synthetic */ TypeVariance[] f36016e;

    /* renamed from: i  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f36017i;

    /* renamed from: d  reason: collision with root package name */
    private final String f36018d;
    public static final TypeVariance IN = new TypeVariance("IN", 0, "in");
    public static final TypeVariance OUT = new TypeVariance("OUT", 1, "out");
    public static final TypeVariance INV = new TypeVariance("INV", 2, "");

    static {
        TypeVariance[] a10 = a();
        f36016e = a10;
        f36017i = a.a(a10);
    }

    private TypeVariance(String str, int i10, String str2) {
        this.f36018d = str2;
    }

    private static final /* synthetic */ TypeVariance[] a() {
        return new TypeVariance[]{IN, OUT, INV};
    }

    public static TypeVariance valueOf(String str) {
        return (TypeVariance) Enum.valueOf(TypeVariance.class, str);
    }

    public static TypeVariance[] values() {
        return (TypeVariance[]) f36016e.clone();
    }

    @Override // java.lang.Enum
    @NotNull
    public String toString() {
        return this.f36018d;
    }
}
