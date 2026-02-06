package kotlin.reflect.jvm.internal.impl.metadata.jvm.deserialization;

import kotlin.reflect.jvm.internal.impl.metadata.deserialization.Flags;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class JvmFlags {
    @NotNull
    public static final JvmFlags INSTANCE = new JvmFlags();

    /* renamed from: a  reason: collision with root package name */
    private static final Flags.BooleanFlagField f33802a = Flags.FlagField.booleanFirst();

    /* renamed from: b  reason: collision with root package name */
    private static final Flags.BooleanFlagField f33803b;

    /* renamed from: c  reason: collision with root package name */
    private static final Flags.BooleanFlagField f33804c;

    static {
        Flags.BooleanFlagField booleanFirst = Flags.FlagField.booleanFirst();
        f33803b = booleanFirst;
        f33804c = Flags.FlagField.booleanAfter(booleanFirst);
    }

    private JvmFlags() {
    }

    public final Flags.BooleanFlagField getIS_MOVED_FROM_INTERFACE_COMPANION() {
        return f33802a;
    }
}
