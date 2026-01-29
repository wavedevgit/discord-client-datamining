package kotlin.reflect.jvm.internal.impl.metadata.deserialization;

import java.util.Arrays;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class MetadataVersion extends BinaryVersion {
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    public static final MetadataVersion INSTANCE;
    @NotNull
    public static final MetadataVersion INSTANCE_NEXT;
    @NotNull
    public static final MetadataVersion INVALID_VERSION;

    /* renamed from: f  reason: collision with root package name */
    private final boolean f34998f;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private Companion() {
        }
    }

    static {
        MetadataVersion metadataVersion = new MetadataVersion(2, 1, 0);
        INSTANCE = metadataVersion;
        INSTANCE_NEXT = metadataVersion.next();
        INVALID_VERSION = new MetadataVersion(new int[0]);
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public MetadataVersion(@NotNull int[] versionArray, boolean z10) {
        super(Arrays.copyOf(versionArray, versionArray.length));
        Intrinsics.checkNotNullParameter(versionArray, "versionArray");
        this.f34998f = z10;
    }

    private final boolean b(MetadataVersion metadataVersion) {
        if ((getMajor() == 1 && getMinor() == 0) || getMajor() == 0) {
            return false;
        }
        return !c(metadataVersion);
    }

    private final boolean c(MetadataVersion metadataVersion) {
        if (getMajor() > metadataVersion.getMajor()) {
            return true;
        }
        if (getMajor() >= metadataVersion.getMajor() && getMinor() > metadataVersion.getMinor()) {
            return true;
        }
        return false;
    }

    public final boolean isCompatible(@NotNull MetadataVersion metadataVersionFromLanguageVersion) {
        Intrinsics.checkNotNullParameter(metadataVersionFromLanguageVersion, "metadataVersionFromLanguageVersion");
        return b(metadataVersionFromLanguageVersion.lastSupportedVersionWithThisLanguageVersion(this.f34998f));
    }

    public final boolean isStrictSemantics() {
        return this.f34998f;
    }

    @NotNull
    public final MetadataVersion lastSupportedVersionWithThisLanguageVersion(boolean z10) {
        MetadataVersion metadataVersion;
        if (z10) {
            metadataVersion = INSTANCE;
        } else {
            metadataVersion = INSTANCE_NEXT;
        }
        if (metadataVersion.c(this)) {
            return metadataVersion;
        }
        return this;
    }

    @NotNull
    public final MetadataVersion next() {
        if (getMajor() == 1 && getMinor() == 9) {
            return new MetadataVersion(2, 0, 0);
        }
        return new MetadataVersion(getMajor(), getMinor() + 1, 0);
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public MetadataVersion(@NotNull int... numbers) {
        this(numbers, false);
        Intrinsics.checkNotNullParameter(numbers, "numbers");
    }
}
