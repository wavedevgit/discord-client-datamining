package com.facebook.react.uimanager.layoutanimation;

import com.facebook.react.common.annotations.internal.LegacyArchitectureLogLevel;
import com.facebook.react.common.annotations.internal.LegacyArchitectureLogger;
import ir.p;
import kotlin.Metadata;
import kotlin.enums.EnumEntries;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
@Metadata(d1 = {"\u0000\f\n\u0002\u0018\u0002\n\u0002\u0010\u0010\n\u0002\b\u0007\b\u0080\u0081\u0002\u0018\u0000 \u00072\b\u0012\u0004\u0012\u00020\u00000\u0001:\u0001\u0007B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003j\u0002\b\u0004j\u0002\b\u0005j\u0002\b\u0006¨\u0006\b"}, d2 = {"Lcom/facebook/react/uimanager/layoutanimation/LayoutAnimationType;", "", "<init>", "(Ljava/lang/String;I)V", "CREATE", "UPDATE", "DELETE", "Companion", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class LayoutAnimationType {
    private static final /* synthetic */ EnumEntries $ENTRIES;
    private static final /* synthetic */ LayoutAnimationType[] $VALUES;
    @NotNull
    public static final Companion Companion;
    public static final LayoutAnimationType CREATE = new LayoutAnimationType("CREATE", 0);
    public static final LayoutAnimationType UPDATE = new LayoutAnimationType("UPDATE", 1);
    public static final LayoutAnimationType DELETE = new LayoutAnimationType("DELETE", 2);

    @Metadata(d1 = {"\u0000\u0018\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u0010\u0010\u0004\u001a\u00020\u00052\u0006\u0010\u0006\u001a\u00020\u0007H\u0007¨\u0006\b"}, d2 = {"Lcom/facebook/react/uimanager/layoutanimation/LayoutAnimationType$Companion;", "", "<init>", "()V", "toString", "", "type", "Lcom/facebook/react/uimanager/layoutanimation/LayoutAnimationType;", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Companion {

        @Metadata(k = 3, mv = {2, 1, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public /* synthetic */ class WhenMappings {
            public static final /* synthetic */ int[] $EnumSwitchMapping$0;

            static {
                int[] iArr = new int[LayoutAnimationType.values().length];
                try {
                    iArr[LayoutAnimationType.CREATE.ordinal()] = 1;
                } catch (NoSuchFieldError unused) {
                }
                try {
                    iArr[LayoutAnimationType.UPDATE.ordinal()] = 2;
                } catch (NoSuchFieldError unused2) {
                }
                try {
                    iArr[LayoutAnimationType.DELETE.ordinal()] = 3;
                } catch (NoSuchFieldError unused3) {
                }
                $EnumSwitchMapping$0 = iArr;
            }
        }

        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        @NotNull
        public final String toString(@NotNull LayoutAnimationType type) {
            Intrinsics.checkNotNullParameter(type, "type");
            int i10 = WhenMappings.$EnumSwitchMapping$0[type.ordinal()];
            if (i10 != 1) {
                if (i10 != 2) {
                    if (i10 == 3) {
                        return "delete";
                    }
                    throw new p();
                }
                return "update";
            }
            return "create";
        }

        private Companion() {
        }
    }

    private static final /* synthetic */ LayoutAnimationType[] $values() {
        return new LayoutAnimationType[]{CREATE, UPDATE, DELETE};
    }

    static {
        LayoutAnimationType[] $values = $values();
        $VALUES = $values;
        $ENTRIES = pr.a.a($values);
        Companion = new Companion(null);
        LegacyArchitectureLogger.assertLegacyArchitecture("LayoutAnimationType", LegacyArchitectureLogLevel.ERROR);
    }

    private LayoutAnimationType(String str, int i10) {
    }

    @NotNull
    public static EnumEntries getEntries() {
        return $ENTRIES;
    }

    @NotNull
    public static final String toString(@NotNull LayoutAnimationType layoutAnimationType) {
        return Companion.toString(layoutAnimationType);
    }

    public static LayoutAnimationType valueOf(String str) {
        return (LayoutAnimationType) Enum.valueOf(LayoutAnimationType.class, str);
    }

    public static LayoutAnimationType[] values() {
        return (LayoutAnimationType[]) $VALUES.clone();
    }
}
