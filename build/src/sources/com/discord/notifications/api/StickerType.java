package com.discord.notifications.api;

import at.m;
import com.discord.serialization.IntEnum;
import com.discord.serialization.IntEnumSerializer;
import kotlin.Metadata;
import kotlin.enums.EnumEntries;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Reflection;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlinx.serialization.KSerializer;
import org.jetbrains.annotations.NotNull;
import sr.a;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
@m(with = Serializer.class)
@Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0010\u0010\n\u0000\n\u0002\u0010\b\n\u0002\b\n\b\u0087\u0081\u0002\u0018\u0000 \f2\u00020\u00012\b\u0012\u0004\u0012\u00020\u00000\u0002:\u0002\f\rB\u0011\b\u0002\u0012\u0006\u0010\u0003\u001a\u00020\u0004¢\u0006\u0004\b\u0005\u0010\u0006R\u0014\u0010\u0003\u001a\u00020\u0004X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b\u0007\u0010\bj\u0002\b\tj\u0002\b\nj\u0002\b\u000b¨\u0006\u000e"}, d2 = {"Lcom/discord/notifications/api/StickerType;", "Lcom/discord/serialization/IntEnum;", "", "serialNumber", "", "<init>", "(Ljava/lang/String;II)V", "getSerialNumber", "()I", "UNKNOWN", "STANDARD", "GUILD", "Companion", "Serializer", "notification_api_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class StickerType implements IntEnum {
    private static final /* synthetic */ EnumEntries $ENTRIES;
    private static final /* synthetic */ StickerType[] $VALUES;
    @NotNull
    public static final Companion Companion;
    private final int serialNumber;
    public static final StickerType UNKNOWN = new StickerType("UNKNOWN", 0, -1);
    public static final StickerType STANDARD = new StickerType("STANDARD", 1, 1);
    public static final StickerType GUILD = new StickerType("GUILD", 2, 2);

    @Metadata(d1 = {"\u0000\u001e\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u000e\u0010\u0004\u001a\u00020\u00052\u0006\u0010\u0006\u001a\u00020\u0007J\f\u0010\b\u001a\b\u0012\u0004\u0012\u00020\u00050\t¨\u0006\n"}, d2 = {"Lcom/discord/notifications/api/StickerType$Companion;", "", "<init>", "()V", "fromInt", "Lcom/discord/notifications/api/StickerType;", "int", "", "serializer", "Lkotlinx/serialization/KSerializer;", "notification_api_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    @SourceDebugExtension({"SMAP\nStickerType.kt\nKotlin\n*S Kotlin\n*F\n+ 1 StickerType.kt\ncom/discord/notifications/api/StickerType$Companion\n+ 2 _Arrays.kt\nkotlin/collections/ArraysKt___ArraysKt\n*L\n1#1,25:1\n1310#2,2:26\n*S KotlinDebug\n*F\n+ 1 StickerType.kt\ncom/discord/notifications/api/StickerType$Companion\n*L\n20#1:26,2\n*E\n"})
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        @NotNull
        public final StickerType fromInt(int i10) {
            StickerType stickerType;
            StickerType[] values = StickerType.values();
            int length = values.length;
            int i11 = 0;
            while (true) {
                if (i11 < length) {
                    stickerType = values[i11];
                    if (stickerType.getSerialNumber() == i10) {
                        break;
                    }
                    i11++;
                } else {
                    stickerType = null;
                    break;
                }
            }
            if (stickerType == null) {
                return StickerType.UNKNOWN;
            }
            return stickerType;
        }

        @NotNull
        public final KSerializer serializer() {
            return Serializer.INSTANCE;
        }

        private Companion() {
        }
    }

    @Metadata(d1 = {"\u0000\u0010\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\bÆ\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0003\u0010\u0004¨\u0006\u0005"}, d2 = {"Lcom/discord/notifications/api/StickerType$Serializer;", "Lcom/discord/serialization/IntEnumSerializer;", "Lcom/discord/notifications/api/StickerType;", "<init>", "()V", "notification_api_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Serializer extends IntEnumSerializer<StickerType> {
        @NotNull
        public static final Serializer INSTANCE = new Serializer();

        private Serializer() {
            super(Reflection.getOrCreateKotlinClass(StickerType.class), null, 2, null);
        }
    }

    private static final /* synthetic */ StickerType[] $values() {
        return new StickerType[]{UNKNOWN, STANDARD, GUILD};
    }

    static {
        StickerType[] $values = $values();
        $VALUES = $values;
        $ENTRIES = a.a($values);
        Companion = new Companion(null);
    }

    private StickerType(String str, int i10, int i11) {
        this.serialNumber = i11;
    }

    @NotNull
    public static EnumEntries getEntries() {
        return $ENTRIES;
    }

    public static StickerType valueOf(String str) {
        return (StickerType) Enum.valueOf(StickerType.class, str);
    }

    public static StickerType[] values() {
        return (StickerType[]) $VALUES.clone();
    }

    @Override // com.discord.serialization.IntEnum
    public int getSerialNumber() {
        return this.serialNumber;
    }
}
