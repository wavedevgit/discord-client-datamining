package kotlin.reflect.jvm.internal.impl.descriptors;

import kotlin.enums.EnumEntries;
import kotlin.jvm.internal.DefaultConstructorMarker;
import org.jetbrains.annotations.NotNull;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class Modality {
    @NotNull
    public static final Companion Companion;

    /* renamed from: d  reason: collision with root package name */
    private static final /* synthetic */ Modality[] f33601d;

    /* renamed from: e  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f33602e;
    public static final Modality FINAL = new Modality("FINAL", 0);
    public static final Modality SEALED = new Modality("SEALED", 1);
    public static final Modality OPEN = new Modality("OPEN", 2);
    public static final Modality ABSTRACT = new Modality("ABSTRACT", 3);

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        @NotNull
        public final Modality convertFromFlags(boolean z10, boolean z11, boolean z12) {
            if (z10) {
                return Modality.SEALED;
            }
            if (z11) {
                return Modality.ABSTRACT;
            }
            if (z12) {
                return Modality.OPEN;
            }
            return Modality.FINAL;
        }

        private Companion() {
        }
    }

    static {
        Modality[] a10 = a();
        f33601d = a10;
        f33602e = pr.a.a(a10);
        Companion = new Companion(null);
    }

    private Modality(String str, int i10) {
    }

    private static final /* synthetic */ Modality[] a() {
        return new Modality[]{FINAL, SEALED, OPEN, ABSTRACT};
    }

    public static Modality valueOf(String str) {
        return (Modality) Enum.valueOf(Modality.class, str);
    }

    public static Modality[] values() {
        return (Modality[]) f33601d.clone();
    }
}
