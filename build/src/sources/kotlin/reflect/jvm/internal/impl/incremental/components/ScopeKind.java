package kotlin.reflect.jvm.internal.impl.incremental.components;

import kotlin.enums.EnumEntries;
import pr.a;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class ScopeKind {

    /* renamed from: d  reason: collision with root package name */
    private static final /* synthetic */ ScopeKind[] f33968d;

    /* renamed from: e  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f33969e;
    public static final ScopeKind PACKAGE = new ScopeKind("PACKAGE", 0);
    public static final ScopeKind CLASSIFIER = new ScopeKind("CLASSIFIER", 1);

    static {
        ScopeKind[] a10 = a();
        f33968d = a10;
        f33969e = a.a(a10);
    }

    private ScopeKind(String str, int i10) {
    }

    private static final /* synthetic */ ScopeKind[] a() {
        return new ScopeKind[]{PACKAGE, CLASSIFIER};
    }

    public static ScopeKind valueOf(String str) {
        return (ScopeKind) Enum.valueOf(ScopeKind.class, str);
    }

    public static ScopeKind[] values() {
        return (ScopeKind[]) f33968d.clone();
    }
}
