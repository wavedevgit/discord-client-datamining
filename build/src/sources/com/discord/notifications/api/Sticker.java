package com.discord.notifications.api;

import android.os.Parcel;
import android.os.Parcelable;
import at.h;
import at.v1;
import at.z0;
import com.discord.notifications.api.StickerFormatType;
import com.discord.notifications.api.StickerType;
import com.discord.primitives.GuildId;
import com.discord.primitives.GuildId$$serializer;
import com.discord.primitives.StickerId;
import com.discord.primitives.StickerId$$serializer;
import com.facebook.react.devsupport.StackTraceHelper;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import ir.p;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.internal.SerializationConstructorMarker;
import org.jetbrains.annotations.NotNull;
import xs.m;
@Metadata(d1 = {"\u0000l\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\t\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000b\n\u0002\b\u0003\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0002\b1\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0087\b\u0018\u0000 Y2\u00020\u0001:\u0002XYBe\u0012\b\b\u0002\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\n\b\u0002\u0010\u0006\u001a\u0004\u0018\u00010\u0007\u0012\n\b\u0002\u0010\b\u001a\u0004\u0018\u00010\t\u0012\b\b\u0002\u0010\n\u001a\u00020\u0005\u0012\b\b\u0002\u0010\u000b\u001a\u00020\f\u0012\b\b\u0002\u0010\r\u001a\u00020\u0005\u0012\b\b\u0002\u0010\u000e\u001a\u00020\u000f\u0012\n\b\u0002\u0010\u0010\u001a\u0004\u0018\u00010\u0011¢\u0006\u0004\b\u0012\u0010\u0013Bu\b\u0010\u0012\u0006\u0010\u0014\u001a\u00020\u0015\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0005\u0012\b\u0010\u0006\u001a\u0004\u0018\u00010\u0007\u0012\b\u0010\b\u001a\u0004\u0018\u00010\t\u0012\b\u0010\n\u001a\u0004\u0018\u00010\u0005\u0012\b\u0010\u000b\u001a\u0004\u0018\u00010\f\u0012\b\u0010\r\u001a\u0004\u0018\u00010\u0005\u0012\b\u0010\u000e\u001a\u0004\u0018\u00010\u000f\u0012\b\u0010\u0010\u001a\u0004\u0018\u00010\u0011\u0012\b\u0010\u0016\u001a\u0004\u0018\u00010\u0017¢\u0006\u0004\b\u0012\u0010\u0018J\u0006\u00106\u001a\u00020\u0005J\u0006\u00107\u001a\u00020\u0011J\u0010\u00108\u001a\u00020\u0003HÆ\u0003¢\u0006\u0004\b9\u0010\u001cJ\t\u0010:\u001a\u00020\u0005HÆ\u0003J\u0010\u0010;\u001a\u0004\u0018\u00010\u0007HÆ\u0003¢\u0006\u0002\u0010#J\u0010\u0010<\u001a\u0004\u0018\u00010\tHÆ\u0003¢\u0006\u0002\b=J\t\u0010>\u001a\u00020\u0005HÆ\u0003J\t\u0010?\u001a\u00020\fHÆ\u0003J\t\u0010@\u001a\u00020\u0005HÆ\u0003J\t\u0010A\u001a\u00020\u000fHÆ\u0003J\u0010\u0010B\u001a\u0004\u0018\u00010\u0011HÆ\u0003¢\u0006\u0002\u00104Jp\u0010C\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00052\n\b\u0002\u0010\u0006\u001a\u0004\u0018\u00010\u00072\n\b\u0002\u0010\b\u001a\u0004\u0018\u00010\t2\b\b\u0002\u0010\n\u001a\u00020\u00052\b\b\u0002\u0010\u000b\u001a\u00020\f2\b\b\u0002\u0010\r\u001a\u00020\u00052\b\b\u0002\u0010\u000e\u001a\u00020\u000f2\n\b\u0002\u0010\u0010\u001a\u0004\u0018\u00010\u0011HÆ\u0001¢\u0006\u0004\bD\u0010EJ\u0006\u0010F\u001a\u00020\u0015J\u0013\u0010G\u001a\u00020\u00112\b\u0010H\u001a\u0004\u0018\u00010IHÖ\u0003J\t\u0010J\u001a\u00020\u0015HÖ\u0001J\t\u0010K\u001a\u00020\u0005HÖ\u0001J\u0016\u0010L\u001a\u00020M2\u0006\u0010N\u001a\u00020O2\u0006\u0010P\u001a\u00020\u0015J%\u0010Q\u001a\u00020M2\u0006\u0010R\u001a\u00020\u00002\u0006\u0010S\u001a\u00020T2\u0006\u0010U\u001a\u00020VH\u0001¢\u0006\u0002\bWR\u001e\u0010\u0002\u001a\u00020\u00038\u0006X\u0087\u0004¢\u0006\u0010\n\u0002\u0010\u001d\u0012\u0004\b\u0019\u0010\u001a\u001a\u0004\b\u001b\u0010\u001cR\u001c\u0010\u0004\u001a\u00020\u00058\u0006X\u0087\u0004¢\u0006\u000e\n\u0000\u0012\u0004\b\u001e\u0010\u001a\u001a\u0004\b\u001f\u0010 R \u0010\u0006\u001a\u0004\u0018\u00010\u00078\u0006X\u0087\u0004¢\u0006\u0010\n\u0002\u0010$\u0012\u0004\b!\u0010\u001a\u001a\u0004\b\"\u0010#R\u001e\u0010\b\u001a\u0004\u0018\u00010\t8\u0006X\u0087\u0004¢\u0006\u000e\n\u0000\u0012\u0004\b%\u0010\u001a\u001a\u0004\b&\u0010'R\u001c\u0010\n\u001a\u00020\u00058\u0006X\u0087\u0004¢\u0006\u000e\n\u0000\u0012\u0004\b(\u0010\u001a\u001a\u0004\b)\u0010 R\u001c\u0010\u000b\u001a\u00020\f8\u0006X\u0087\u0004¢\u0006\u000e\n\u0000\u0012\u0004\b*\u0010\u001a\u001a\u0004\b+\u0010,R\u001c\u0010\r\u001a\u00020\u00058\u0006X\u0087\u0004¢\u0006\u000e\n\u0000\u0012\u0004\b-\u0010\u001a\u001a\u0004\b.\u0010 R\u001c\u0010\u000e\u001a\u00020\u000f8\u0006X\u0087\u0004¢\u0006\u000e\n\u0000\u0012\u0004\b/\u0010\u001a\u001a\u0004\b0\u00101R \u0010\u0010\u001a\u0004\u0018\u00010\u00118\u0006X\u0087\u0004¢\u0006\u0010\n\u0002\u00105\u0012\u0004\b2\u0010\u001a\u001a\u0004\b3\u00104¨\u0006Z"}, d2 = {"Lcom/discord/notifications/api/Sticker;", "Landroid/os/Parcelable;", StackTraceHelper.ID_KEY, "Lcom/discord/primitives/StickerId;", StackTraceHelper.NAME_KEY, "", "packId", "", "guildId", "Lcom/discord/primitives/GuildId;", "description", "formatType", "Lcom/discord/notifications/api/StickerFormatType;", "tags", "type", "Lcom/discord/notifications/api/StickerType;", "available", "", "<init>", "(JLjava/lang/String;Ljava/lang/Long;Lcom/discord/primitives/GuildId;Ljava/lang/String;Lcom/discord/notifications/api/StickerFormatType;Ljava/lang/String;Lcom/discord/notifications/api/StickerType;Ljava/lang/Boolean;Lkotlin/jvm/internal/DefaultConstructorMarker;)V", "seen0", "", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(ILcom/discord/primitives/StickerId;Ljava/lang/String;Ljava/lang/Long;Lcom/discord/primitives/GuildId;Ljava/lang/String;Lcom/discord/notifications/api/StickerFormatType;Ljava/lang/String;Lcom/discord/notifications/api/StickerType;Ljava/lang/Boolean;Lkotlinx/serialization/internal/SerializationConstructorMarker;Lkotlin/jvm/internal/DefaultConstructorMarker;)V", "getId-e_wqtJY$annotations", "()V", "getId-e_wqtJY", "()J", "J", "getName$annotations", "getName", "()Ljava/lang/String;", "getPackId$annotations", "getPackId", "()Ljava/lang/Long;", "Ljava/lang/Long;", "getGuildId-qOKuAAo$annotations", "getGuildId-qOKuAAo", "()Lcom/discord/primitives/GuildId;", "getDescription$annotations", "getDescription", "getFormatType$annotations", "getFormatType", "()Lcom/discord/notifications/api/StickerFormatType;", "getTags$annotations", "getTags", "getType$annotations", "getType", "()Lcom/discord/notifications/api/StickerType;", "getAvailable$annotations", "getAvailable", "()Ljava/lang/Boolean;", "Ljava/lang/Boolean;", "getExtension", "isAnimated", "component1", "component1-e_wqtJY", "component2", "component3", "component4", "component4-qOKuAAo", "component5", "component6", "component7", "component8", "component9", "copy", "copy-fJhvhH4", "(JLjava/lang/String;Ljava/lang/Long;Lcom/discord/primitives/GuildId;Ljava/lang/String;Lcom/discord/notifications/api/StickerFormatType;Ljava/lang/String;Lcom/discord/notifications/api/StickerType;Ljava/lang/Boolean;)Lcom/discord/notifications/api/Sticker;", "describeContents", "equals", "other", "", "hashCode", "toString", "writeToParcel", "", "dest", "Landroid/os/Parcel;", "flags", "write$Self", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$notification_api_release", "$serializer", "Companion", "notification_api_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@m
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class Sticker implements Parcelable {
    private final Boolean available;
    @NotNull
    private final String description;
    @NotNull
    private final StickerFormatType formatType;
    private final GuildId guildId;

    /* renamed from: id  reason: collision with root package name */
    private final long f10649id;
    @NotNull
    private final String name;
    private final Long packId;
    @NotNull
    private final String tags;
    @NotNull
    private final StickerType type;
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    public static final Parcelable.Creator<Sticker> CREATOR = new Creator();

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/notifications/api/Sticker$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/notifications/api/Sticker;", "notification_api_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Companion {
        private Companion() {
        }

        @NotNull
        public final KSerializer serializer() {
            return Sticker$$serializer.INSTANCE;
        }

        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }
    }

    @Metadata(k = 3, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Creator implements Parcelable.Creator<Sticker> {
        /* JADX WARN: Can't rename method to resolve collision */
        @Override // android.os.Parcelable.Creator
        public final Sticker createFromParcel(Parcel parcel) {
            Intrinsics.checkNotNullParameter(parcel, "parcel");
            long m1132unboximpl = ((StickerId) parcel.readParcelable(Sticker.class.getClassLoader())).m1132unboximpl();
            String readString = parcel.readString();
            Boolean bool = null;
            Long valueOf = parcel.readInt() == 0 ? null : Long.valueOf(parcel.readLong());
            GuildId guildId = (GuildId) parcel.readParcelable(Sticker.class.getClassLoader());
            String readString2 = parcel.readString();
            StickerFormatType valueOf2 = StickerFormatType.valueOf(parcel.readString());
            String readString3 = parcel.readString();
            StickerType valueOf3 = StickerType.valueOf(parcel.readString());
            if (parcel.readInt() != 0) {
                bool = Boolean.valueOf(parcel.readInt() != 0);
            }
            return new Sticker(m1132unboximpl, readString, valueOf, guildId, readString2, valueOf2, readString3, valueOf3, bool, null);
        }

        /* JADX WARN: Can't rename method to resolve collision */
        @Override // android.os.Parcelable.Creator
        public final Sticker[] newArray(int i10) {
            return new Sticker[i10];
        }
    }

    @Metadata(k = 3, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public /* synthetic */ class WhenMappings {
        public static final /* synthetic */ int[] $EnumSwitchMapping$0;

        static {
            int[] iArr = new int[StickerFormatType.values().length];
            try {
                iArr[StickerFormatType.UNKNOWN.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[StickerFormatType.PNG.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[StickerFormatType.APNG.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                iArr[StickerFormatType.LOTTIE.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                iArr[StickerFormatType.GIF.ordinal()] = 5;
            } catch (NoSuchFieldError unused5) {
            }
            $EnumSwitchMapping$0 = iArr;
        }
    }

    public /* synthetic */ Sticker(int i10, StickerId stickerId, String str, Long l10, GuildId guildId, String str2, StickerFormatType stickerFormatType, String str3, StickerType stickerType, Boolean bool, SerializationConstructorMarker serializationConstructorMarker, DefaultConstructorMarker defaultConstructorMarker) {
        this(i10, stickerId, str, l10, guildId, str2, stickerFormatType, str3, stickerType, bool, serializationConstructorMarker);
    }

    /* renamed from: copy-fJhvhH4$default  reason: not valid java name */
    public static /* synthetic */ Sticker m1027copyfJhvhH4$default(Sticker sticker, long j10, String str, Long l10, GuildId guildId, String str2, StickerFormatType stickerFormatType, String str3, StickerType stickerType, Boolean bool, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            j10 = sticker.f10649id;
        }
        long j11 = j10;
        if ((i10 & 2) != 0) {
            str = sticker.name;
        }
        String str4 = str;
        if ((i10 & 4) != 0) {
            l10 = sticker.packId;
        }
        return sticker.m1032copyfJhvhH4(j11, str4, l10, (i10 & 8) != 0 ? sticker.guildId : guildId, (i10 & 16) != 0 ? sticker.description : str2, (i10 & 32) != 0 ? sticker.formatType : stickerFormatType, (i10 & 64) != 0 ? sticker.tags : str3, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? sticker.type : stickerType, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0 ? sticker.available : bool);
    }

    public static /* synthetic */ void getAvailable$annotations() {
    }

    public static /* synthetic */ void getDescription$annotations() {
    }

    public static /* synthetic */ void getFormatType$annotations() {
    }

    /* renamed from: getGuildId-qOKuAAo$annotations  reason: not valid java name */
    public static /* synthetic */ void m1028getGuildIdqOKuAAo$annotations() {
    }

    /* renamed from: getId-e_wqtJY$annotations  reason: not valid java name */
    public static /* synthetic */ void m1029getIde_wqtJY$annotations() {
    }

    public static /* synthetic */ void getName$annotations() {
    }

    public static /* synthetic */ void getPackId$annotations() {
    }

    public static /* synthetic */ void getTags$annotations() {
    }

    public static /* synthetic */ void getType$annotations() {
    }

    public static final /* synthetic */ void write$Self$notification_api_release(Sticker sticker, CompositeEncoder compositeEncoder, SerialDescriptor serialDescriptor) {
        if (compositeEncoder.A(serialDescriptor, 0) || !StickerId.m1127equalsimpl0(sticker.f10649id, StickerId.m1124constructorimpl(0L))) {
            compositeEncoder.j(serialDescriptor, 0, StickerId$$serializer.INSTANCE, StickerId.m1123boximpl(sticker.f10649id));
        }
        compositeEncoder.y(serialDescriptor, 1, sticker.name);
        if (compositeEncoder.A(serialDescriptor, 2) || sticker.packId != null) {
            compositeEncoder.z(serialDescriptor, 2, z0.f6922a, sticker.packId);
        }
        if (compositeEncoder.A(serialDescriptor, 3) || sticker.guildId != null) {
            compositeEncoder.z(serialDescriptor, 3, GuildId$$serializer.INSTANCE, sticker.guildId);
        }
        if (compositeEncoder.A(serialDescriptor, 4) || !Intrinsics.areEqual(sticker.description, "")) {
            compositeEncoder.y(serialDescriptor, 4, sticker.description);
        }
        if (compositeEncoder.A(serialDescriptor, 5) || sticker.formatType != StickerFormatType.Companion.fromInt(0)) {
            compositeEncoder.j(serialDescriptor, 5, StickerFormatType.Serializer.INSTANCE, sticker.formatType);
        }
        if (compositeEncoder.A(serialDescriptor, 6) || !Intrinsics.areEqual(sticker.tags, "")) {
            compositeEncoder.y(serialDescriptor, 6, sticker.tags);
        }
        if (compositeEncoder.A(serialDescriptor, 7) || sticker.type != StickerType.Companion.fromInt(0)) {
            compositeEncoder.j(serialDescriptor, 7, StickerType.Serializer.INSTANCE, sticker.type);
        }
        if (compositeEncoder.A(serialDescriptor, 8) || sticker.available != null) {
            compositeEncoder.z(serialDescriptor, 8, h.f6812a, sticker.available);
        }
    }

    /* renamed from: component1-e_wqtJY  reason: not valid java name */
    public final long m1030component1e_wqtJY() {
        return this.f10649id;
    }

    @NotNull
    public final String component2() {
        return this.name;
    }

    public final Long component3() {
        return this.packId;
    }

    /* renamed from: component4-qOKuAAo  reason: not valid java name */
    public final GuildId m1031component4qOKuAAo() {
        return this.guildId;
    }

    @NotNull
    public final String component5() {
        return this.description;
    }

    @NotNull
    public final StickerFormatType component6() {
        return this.formatType;
    }

    @NotNull
    public final String component7() {
        return this.tags;
    }

    @NotNull
    public final StickerType component8() {
        return this.type;
    }

    public final Boolean component9() {
        return this.available;
    }

    @NotNull
    /* renamed from: copy-fJhvhH4  reason: not valid java name */
    public final Sticker m1032copyfJhvhH4(long j10, @NotNull String name, Long l10, GuildId guildId, @NotNull String description, @NotNull StickerFormatType formatType, @NotNull String tags, @NotNull StickerType type, Boolean bool) {
        Intrinsics.checkNotNullParameter(name, "name");
        Intrinsics.checkNotNullParameter(description, "description");
        Intrinsics.checkNotNullParameter(formatType, "formatType");
        Intrinsics.checkNotNullParameter(tags, "tags");
        Intrinsics.checkNotNullParameter(type, "type");
        return new Sticker(j10, name, l10, guildId, description, formatType, tags, type, bool, null);
    }

    @Override // android.os.Parcelable
    public final int describeContents() {
        return 0;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof Sticker) {
            Sticker sticker = (Sticker) obj;
            return StickerId.m1127equalsimpl0(this.f10649id, sticker.f10649id) && Intrinsics.areEqual(this.name, sticker.name) && Intrinsics.areEqual(this.packId, sticker.packId) && Intrinsics.areEqual(this.guildId, sticker.guildId) && Intrinsics.areEqual(this.description, sticker.description) && this.formatType == sticker.formatType && Intrinsics.areEqual(this.tags, sticker.tags) && this.type == sticker.type && Intrinsics.areEqual(this.available, sticker.available);
        }
        return false;
    }

    public final Boolean getAvailable() {
        return this.available;
    }

    @NotNull
    public final String getDescription() {
        return this.description;
    }

    @NotNull
    public final String getExtension() {
        int i10 = WhenMappings.$EnumSwitchMapping$0[this.formatType.ordinal()];
        if (i10 != 1) {
            if (i10 != 2 && i10 != 3) {
                if (i10 != 4) {
                    if (i10 == 5) {
                        return ".gif";
                    }
                    throw new p();
                }
                return ".json";
            }
            return ".png";
        }
        return "";
    }

    @NotNull
    public final StickerFormatType getFormatType() {
        return this.formatType;
    }

    /* renamed from: getGuildId-qOKuAAo  reason: not valid java name */
    public final GuildId m1033getGuildIdqOKuAAo() {
        return this.guildId;
    }

    /* renamed from: getId-e_wqtJY  reason: not valid java name */
    public final long m1034getIde_wqtJY() {
        return this.f10649id;
    }

    @NotNull
    public final String getName() {
        return this.name;
    }

    public final Long getPackId() {
        return this.packId;
    }

    @NotNull
    public final String getTags() {
        return this.tags;
    }

    @NotNull
    public final StickerType getType() {
        return this.type;
    }

    public int hashCode() {
        int m1128hashCodeimpl = ((StickerId.m1128hashCodeimpl(this.f10649id) * 31) + this.name.hashCode()) * 31;
        Long l10 = this.packId;
        int hashCode = (m1128hashCodeimpl + (l10 == null ? 0 : l10.hashCode())) * 31;
        GuildId guildId = this.guildId;
        int m1076hashCodeimpl = (((((((((hashCode + (guildId == null ? 0 : GuildId.m1076hashCodeimpl(guildId.m1080unboximpl()))) * 31) + this.description.hashCode()) * 31) + this.formatType.hashCode()) * 31) + this.tags.hashCode()) * 31) + this.type.hashCode()) * 31;
        Boolean bool = this.available;
        return m1076hashCodeimpl + (bool != null ? bool.hashCode() : 0);
    }

    public final boolean isAnimated() {
        StickerFormatType stickerFormatType = this.formatType;
        if (stickerFormatType != StickerFormatType.APNG && stickerFormatType != StickerFormatType.LOTTIE && stickerFormatType != StickerFormatType.GIF) {
            return false;
        }
        return true;
    }

    @NotNull
    public String toString() {
        String m1130toStringimpl = StickerId.m1130toStringimpl(this.f10649id);
        String str = this.name;
        Long l10 = this.packId;
        GuildId guildId = this.guildId;
        String str2 = this.description;
        StickerFormatType stickerFormatType = this.formatType;
        String str3 = this.tags;
        StickerType stickerType = this.type;
        Boolean bool = this.available;
        return "Sticker(id=" + m1130toStringimpl + ", name=" + str + ", packId=" + l10 + ", guildId=" + guildId + ", description=" + str2 + ", formatType=" + stickerFormatType + ", tags=" + str3 + ", type=" + stickerType + ", available=" + bool + ")";
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(@NotNull Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        dest.writeParcelable(StickerId.m1123boximpl(this.f10649id), i10);
        dest.writeString(this.name);
        Long l10 = this.packId;
        if (l10 == null) {
            dest.writeInt(0);
        } else {
            dest.writeInt(1);
            dest.writeLong(l10.longValue());
        }
        dest.writeParcelable(this.guildId, i10);
        dest.writeString(this.description);
        dest.writeString(this.formatType.name());
        dest.writeString(this.tags);
        dest.writeString(this.type.name());
        Boolean bool = this.available;
        if (bool == null) {
            dest.writeInt(0);
            return;
        }
        dest.writeInt(1);
        dest.writeInt(bool.booleanValue() ? 1 : 0);
    }

    public /* synthetic */ Sticker(long j10, String str, Long l10, GuildId guildId, String str2, StickerFormatType stickerFormatType, String str3, StickerType stickerType, Boolean bool, DefaultConstructorMarker defaultConstructorMarker) {
        this(j10, str, l10, guildId, str2, stickerFormatType, str3, stickerType, bool);
    }

    private /* synthetic */ Sticker(int i10, StickerId stickerId, String str, Long l10, GuildId guildId, String str2, StickerFormatType stickerFormatType, String str3, StickerType stickerType, Boolean bool, SerializationConstructorMarker serializationConstructorMarker) {
        if (2 != (i10 & 2)) {
            v1.b(i10, 2, Sticker$$serializer.INSTANCE.getDescriptor());
        }
        this.f10649id = (i10 & 1) == 0 ? StickerId.m1124constructorimpl(0L) : stickerId.m1132unboximpl();
        this.name = str;
        if ((i10 & 4) == 0) {
            this.packId = null;
        } else {
            this.packId = l10;
        }
        if ((i10 & 8) == 0) {
            this.guildId = null;
        } else {
            this.guildId = guildId;
        }
        if ((i10 & 16) == 0) {
            this.description = "";
        } else {
            this.description = str2;
        }
        if ((i10 & 32) == 0) {
            this.formatType = StickerFormatType.Companion.fromInt(0);
        } else {
            this.formatType = stickerFormatType;
        }
        if ((i10 & 64) == 0) {
            this.tags = "";
        } else {
            this.tags = str3;
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 0) {
            this.type = StickerType.Companion.fromInt(0);
        } else {
            this.type = stickerType;
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) == 0) {
            this.available = null;
        } else {
            this.available = bool;
        }
    }

    private Sticker(long j10, String name, Long l10, GuildId guildId, String description, StickerFormatType formatType, String tags, StickerType type, Boolean bool) {
        Intrinsics.checkNotNullParameter(name, "name");
        Intrinsics.checkNotNullParameter(description, "description");
        Intrinsics.checkNotNullParameter(formatType, "formatType");
        Intrinsics.checkNotNullParameter(tags, "tags");
        Intrinsics.checkNotNullParameter(type, "type");
        this.f10649id = j10;
        this.name = name;
        this.packId = l10;
        this.guildId = guildId;
        this.description = description;
        this.formatType = formatType;
        this.tags = tags;
        this.type = type;
        this.available = bool;
    }

    public /* synthetic */ Sticker(long j10, String str, Long l10, GuildId guildId, String str2, StickerFormatType stickerFormatType, String str3, StickerType stickerType, Boolean bool, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this((i10 & 1) != 0 ? StickerId.m1124constructorimpl(0L) : j10, str, (i10 & 4) != 0 ? null : l10, (i10 & 8) != 0 ? null : guildId, (i10 & 16) != 0 ? "" : str2, (i10 & 32) != 0 ? StickerFormatType.Companion.fromInt(0) : stickerFormatType, (i10 & 64) != 0 ? "" : str3, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? StickerType.Companion.fromInt(0) : stickerType, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0 ? null : bool, null);
    }
}
