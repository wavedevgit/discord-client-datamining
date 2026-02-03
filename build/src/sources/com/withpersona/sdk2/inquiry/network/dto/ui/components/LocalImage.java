package com.withpersona.sdk2.inquiry.network.dto.ui.components;

import android.os.Parcel;
import android.os.Parcelable;
import com.facebook.react.devsupport.StackTraceHelper;
import com.facebook.react.uimanager.ViewProps;
import com.squareup.moshi.g;
import com.squareup.moshi.h;
import com.squareup.moshi.i;
import com.squareup.moshi.w;
import com.withpersona.sdk2.inquiry.network.dto.JsonLogicBoolean;
import com.withpersona.sdk2.inquiry.network.dto.ui.UiComponentAttributes;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.LocalImage;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.LocalImageComponentStyle;
import java.lang.reflect.Type;
import java.util.Set;
import kotlin.Metadata;
import kotlin.enums.EnumEntries;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@i(generateAdapter = true)
@Metadata(d1 = {"\u00002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\t\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0005\b\u0007\u0018\u0000 \u00192\u00020\u0001:\u0003\u0017\u0018\u0019B%\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0005\u0012\n\b\u0002\u0010\u0006\u001a\u0004\u0018\u00010\u0007¢\u0006\u0004\b\b\u0010\tJ\u0006\u0010\u0010\u001a\u00020\u0011J\u0016\u0010\u0012\u001a\u00020\u00132\u0006\u0010\u0014\u001a\u00020\u00152\u0006\u0010\u0016\u001a\u00020\u0011R\u0014\u0010\u0002\u001a\u00020\u0003X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b\n\u0010\u000bR\u0016\u0010\u0004\u001a\u0004\u0018\u00010\u0005X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b\f\u0010\rR\u0013\u0010\u0006\u001a\u0004\u0018\u00010\u0007¢\u0006\b\n\u0000\u001a\u0004\b\u000e\u0010\u000f¨\u0006\u001a"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/LocalImage;", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/UiComponentConfig;", StackTraceHelper.NAME_KEY, "", "attributes", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/LocalImage$Attributes;", "styles", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/LocalImageComponentStyle;", "<init>", "(Ljava/lang/String;Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/LocalImage$Attributes;Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/LocalImageComponentStyle;)V", "getName", "()Ljava/lang/String;", "getAttributes", "()Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/LocalImage$Attributes;", "getStyles", "()Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/LocalImageComponentStyle;", "describeContents", "", "writeToParcel", "", "dest", "Landroid/os/Parcel;", "flags", "Attributes", "Image", "Companion", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class LocalImage implements UiComponentConfig {
    @NotNull
    public static final String type = "image_local";
    private final Attributes attributes;
    @NotNull
    private final String name;
    private final LocalImageComponentStyle styles;
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    public static final Parcelable.Creator<LocalImage> CREATOR = new Creator();

    @Metadata(d1 = {"\u0000\u001c\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0002\b\u0003\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\r\u0010\u0005\u001a\u00020\u0004¢\u0006\u0004\b\u0005\u0010\u0006R\u0014\u0010\b\u001a\u00020\u00078\u0006X\u0086T¢\u0006\u0006\n\u0004\b\b\u0010\t¨\u0006\n"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/LocalImage$Companion;", "", "<init>", "()V", "Lcom/squareup/moshi/h$e;", "createAdapter", "()Lcom/squareup/moshi/h$e;", "", "type", "Ljava/lang/String;", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final h createAdapter$lambda$0(Type type, Set set, w wVar) {
            if (!Intrinsics.areEqual(type, Image.class)) {
                return null;
            }
            return sm.a.a(Image.class).d(null).nullSafe();
        }

        @NotNull
        public final h.e createAdapter() {
            return new h.e() { // from class: com.withpersona.sdk2.inquiry.network.dto.ui.components.a
                @Override // com.squareup.moshi.h.e
                public final h create(Type type, Set set, w wVar) {
                    h createAdapter$lambda$0;
                    createAdapter$lambda$0 = LocalImage.Companion.createAdapter$lambda$0(type, set, wVar);
                    return createAdapter$lambda$0;
                }
            };
        }

        private Companion() {
        }
    }

    @Metadata(k = 3, mv = {2, 0, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class Creator implements Parcelable.Creator<LocalImage> {
        /* JADX WARN: Can't rename method to resolve collision */
        @Override // android.os.Parcelable.Creator
        public final LocalImage createFromParcel(Parcel parcel) {
            Intrinsics.checkNotNullParameter(parcel, "parcel");
            return new LocalImage(parcel.readString(), parcel.readInt() == 0 ? null : Attributes.CREATOR.createFromParcel(parcel), parcel.readInt() != 0 ? LocalImageComponentStyle.CREATOR.createFromParcel(parcel) : null);
        }

        /* JADX WARN: Can't rename method to resolve collision */
        @Override // android.os.Parcelable.Creator
        public final LocalImage[] newArray(int i10) {
            return new LocalImage[i10];
        }
    }

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    @i(generateAdapter = false)
    @Metadata(d1 = {"\u0000\f\n\u0002\u0018\u0002\n\u0002\u0010\u0010\n\u0002\b\u001f\b\u0087\u0081\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00000\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003j\u0002\b\u0004j\u0002\b\u0005j\u0002\b\u0006j\u0002\b\u0007j\u0002\b\bj\u0002\b\tj\u0002\b\nj\u0002\b\u000bj\u0002\b\fj\u0002\b\rj\u0002\b\u000ej\u0002\b\u000fj\u0002\b\u0010j\u0002\b\u0011j\u0002\b\u0012j\u0002\b\u0013j\u0002\b\u0014j\u0002\b\u0015j\u0002\b\u0016j\u0002\b\u0017j\u0002\b\u0018j\u0002\b\u0019j\u0002\b\u001aj\u0002\b\u001bj\u0002\b\u001cj\u0002\b\u001dj\u0002\b\u001ej\u0002\b\u001f¨\u0006 "}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/LocalImage$Image;", "", "<init>", "(Ljava/lang/String;I)V", "START_HERO", "DOCUMENT_START_HERO", "ANIMATED_CHECK", "FAILED", "ID_FRONT_FAILED", "ID_BACK_FAILED", "SELFIE_FAILED", "DOCUMENT_FAILED", "PASSPORT_NFC_START_HERO", "PASSPORT_NFC_SCAN_HERO", "PASSPORT_NFC_SCAN_READY_HERO", "PASSPORT_NFC_CHECK", "GOVERNMENT_ID_NFC_SCAN_FRONT_CLOSED", "GOVERNMENT_ID_NFC_SCAN_BACK_CLOSED", "GOVERNMENT_ID_NFC_SCAN_PHOTO_PAGE", "GOVERNMENT_ID_NFC_SCAN_ID_CARD", "GOVERNMENT_ID_NFC_SCAN_BACK_THEN_FRONT", "CREATE_PERSONA_CTA_CARD_ICON", "OPTION_CHECK_ICON", "OPTION_CHEVRON_ICON", "OPTION_FLAG_ICON", "OPTION_GLOBE_ICON", "OPTION_HOME_ICON", "OPTION_ID_DOCUMENT_ICON", "OPTION_ID_ICON", "OPTION_PHONE_ICON", "OPTION_USER_ICON", "REUSABLE_PERSONA_LOGO", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class Image {
        private static final /* synthetic */ EnumEntries $ENTRIES;
        private static final /* synthetic */ Image[] $VALUES;
        @g(name = "start_hero")
        public static final Image START_HERO = new Image("START_HERO", 0);
        @g(name = "document_start_hero")
        public static final Image DOCUMENT_START_HERO = new Image("DOCUMENT_START_HERO", 1);
        @g(name = "animated_check")
        public static final Image ANIMATED_CHECK = new Image("ANIMATED_CHECK", 2);
        @g(name = "failed_icon")
        public static final Image FAILED = new Image("FAILED", 3);
        @g(name = "id_front_icon")
        public static final Image ID_FRONT_FAILED = new Image("ID_FRONT_FAILED", 4);
        @g(name = "id_back_icon")
        public static final Image ID_BACK_FAILED = new Image("ID_BACK_FAILED", 5);
        @g(name = "failure_selfie_icon")
        public static final Image SELFIE_FAILED = new Image("SELFIE_FAILED", 6);
        @g(name = "failure_document_icon")
        public static final Image DOCUMENT_FAILED = new Image("DOCUMENT_FAILED", 7);
        @g(name = "passport_nfc_start_hero")
        public static final Image PASSPORT_NFC_START_HERO = new Image("PASSPORT_NFC_START_HERO", 8);
        @g(name = "passport_nfc_scan_hero")
        public static final Image PASSPORT_NFC_SCAN_HERO = new Image("PASSPORT_NFC_SCAN_HERO", 9);
        @g(name = "passport_nfc_scan_ready_hero")
        public static final Image PASSPORT_NFC_SCAN_READY_HERO = new Image("PASSPORT_NFC_SCAN_READY_HERO", 10);
        @g(name = "passport_nfc_check")
        public static final Image PASSPORT_NFC_CHECK = new Image("PASSPORT_NFC_CHECK", 11);
        @g(name = "government_id_nfc_scan_front_closed")
        public static final Image GOVERNMENT_ID_NFC_SCAN_FRONT_CLOSED = new Image("GOVERNMENT_ID_NFC_SCAN_FRONT_CLOSED", 12);
        @g(name = "government_id_nfc_scan_back_closed")
        public static final Image GOVERNMENT_ID_NFC_SCAN_BACK_CLOSED = new Image("GOVERNMENT_ID_NFC_SCAN_BACK_CLOSED", 13);
        @g(name = "government_id_nfc_scan_photo_page")
        public static final Image GOVERNMENT_ID_NFC_SCAN_PHOTO_PAGE = new Image("GOVERNMENT_ID_NFC_SCAN_PHOTO_PAGE", 14);
        @g(name = "government_id_nfc_scan_id_card")
        public static final Image GOVERNMENT_ID_NFC_SCAN_ID_CARD = new Image("GOVERNMENT_ID_NFC_SCAN_ID_CARD", 15);
        @g(name = "government_id_nfc_scan_back_then_front")
        public static final Image GOVERNMENT_ID_NFC_SCAN_BACK_THEN_FRONT = new Image("GOVERNMENT_ID_NFC_SCAN_BACK_THEN_FRONT", 16);
        @g(name = "create_persona_cta_card_icon")
        public static final Image CREATE_PERSONA_CTA_CARD_ICON = new Image("CREATE_PERSONA_CTA_CARD_ICON", 17);
        @g(name = "option_check_icon")
        public static final Image OPTION_CHECK_ICON = new Image("OPTION_CHECK_ICON", 18);
        @g(name = "option_chevron_icon")
        public static final Image OPTION_CHEVRON_ICON = new Image("OPTION_CHEVRON_ICON", 19);
        @g(name = "option_flag_icon")
        public static final Image OPTION_FLAG_ICON = new Image("OPTION_FLAG_ICON", 20);
        @g(name = "option_globe_icon")
        public static final Image OPTION_GLOBE_ICON = new Image("OPTION_GLOBE_ICON", 21);
        @g(name = "option_home_icon")
        public static final Image OPTION_HOME_ICON = new Image("OPTION_HOME_ICON", 22);
        @g(name = "option_id_document_icon")
        public static final Image OPTION_ID_DOCUMENT_ICON = new Image("OPTION_ID_DOCUMENT_ICON", 23);
        @g(name = "option_id_icon")
        public static final Image OPTION_ID_ICON = new Image("OPTION_ID_ICON", 24);
        @g(name = "option_phone_icon")
        public static final Image OPTION_PHONE_ICON = new Image("OPTION_PHONE_ICON", 25);
        @g(name = "option_user_icon")
        public static final Image OPTION_USER_ICON = new Image("OPTION_USER_ICON", 26);
        @g(name = "reusable_persona_logo")
        public static final Image REUSABLE_PERSONA_LOGO = new Image("REUSABLE_PERSONA_LOGO", 27);

        private static final /* synthetic */ Image[] $values() {
            return new Image[]{START_HERO, DOCUMENT_START_HERO, ANIMATED_CHECK, FAILED, ID_FRONT_FAILED, ID_BACK_FAILED, SELFIE_FAILED, DOCUMENT_FAILED, PASSPORT_NFC_START_HERO, PASSPORT_NFC_SCAN_HERO, PASSPORT_NFC_SCAN_READY_HERO, PASSPORT_NFC_CHECK, GOVERNMENT_ID_NFC_SCAN_FRONT_CLOSED, GOVERNMENT_ID_NFC_SCAN_BACK_CLOSED, GOVERNMENT_ID_NFC_SCAN_PHOTO_PAGE, GOVERNMENT_ID_NFC_SCAN_ID_CARD, GOVERNMENT_ID_NFC_SCAN_BACK_THEN_FRONT, CREATE_PERSONA_CTA_CARD_ICON, OPTION_CHECK_ICON, OPTION_CHEVRON_ICON, OPTION_FLAG_ICON, OPTION_GLOBE_ICON, OPTION_HOME_ICON, OPTION_ID_DOCUMENT_ICON, OPTION_ID_ICON, OPTION_PHONE_ICON, OPTION_USER_ICON, REUSABLE_PERSONA_LOGO};
        }

        static {
            Image[] $values = $values();
            $VALUES = $values;
            $ENTRIES = qr.a.a($values);
        }

        private Image(String str, int i10) {
        }

        @NotNull
        public static EnumEntries getEntries() {
            return $ENTRIES;
        }

        public static Image valueOf(String str) {
            return (Image) Enum.valueOf(Image.class, str);
        }

        public static Image[] values() {
            return (Image[]) $VALUES.clone();
        }
    }

    public LocalImage(@NotNull String name, Attributes attributes, LocalImageComponentStyle localImageComponentStyle) {
        Intrinsics.checkNotNullParameter(name, "name");
        this.name = name;
        this.attributes = attributes;
        this.styles = localImageComponentStyle;
    }

    @Override // android.os.Parcelable
    public final int describeContents() {
        return 0;
    }

    @Override // com.withpersona.sdk2.inquiry.network.dto.ui.components.UiComponentConfig
    @NotNull
    public String getName() {
        return this.name;
    }

    public final LocalImageComponentStyle getStyles() {
        return this.styles;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(@NotNull Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        dest.writeString(this.name);
        Attributes attributes = this.attributes;
        if (attributes == null) {
            dest.writeInt(0);
        } else {
            dest.writeInt(1);
            attributes.writeToParcel(dest, i10);
        }
        LocalImageComponentStyle localImageComponentStyle = this.styles;
        if (localImageComponentStyle == null) {
            dest.writeInt(0);
            return;
        }
        dest.writeInt(1);
        localImageComponentStyle.writeToParcel(dest, i10);
    }

    @Override // com.withpersona.sdk2.inquiry.network.dto.ui.components.UiComponentConfig
    public Attributes getAttributes() {
        return this.attributes;
    }

    @i(generateAdapter = true)
    @Metadata(d1 = {"\u0000,\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0007\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\b\u0007\u0018\u00002\u00020\u0001B\u001d\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u0005¢\u0006\u0004\b\u0006\u0010\u0007J\u0006\u0010\f\u001a\u00020\rJ\u0016\u0010\u000e\u001a\u00020\u000f2\u0006\u0010\u0010\u001a\u00020\u00112\u0006\u0010\u0012\u001a\u00020\rR\u0013\u0010\u0002\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\b\u0010\tR\u0013\u0010\u0004\u001a\u0004\u0018\u00010\u0005¢\u0006\b\n\u0000\u001a\u0004\b\n\u0010\u000b¨\u0006\u0013"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/LocalImage$Attributes;", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/UiComponentAttributes;", "imageKey", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/LocalImage$Image;", ViewProps.HIDDEN, "Lcom/withpersona/sdk2/inquiry/network/dto/JsonLogicBoolean;", "<init>", "(Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/LocalImage$Image;Lcom/withpersona/sdk2/inquiry/network/dto/JsonLogicBoolean;)V", "getImageKey", "()Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/LocalImage$Image;", "getHidden", "()Lcom/withpersona/sdk2/inquiry/network/dto/JsonLogicBoolean;", "describeContents", "", "writeToParcel", "", "dest", "Landroid/os/Parcel;", "flags", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class Attributes implements UiComponentAttributes {
        @NotNull
        public static final Parcelable.Creator<Attributes> CREATOR = new Creator();
        private final JsonLogicBoolean hidden;
        private final Image imageKey;

        @Metadata(k = 3, mv = {2, 0, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class Creator implements Parcelable.Creator<Attributes> {
            /* JADX WARN: Can't rename method to resolve collision */
            @Override // android.os.Parcelable.Creator
            public final Attributes createFromParcel(Parcel parcel) {
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                return new Attributes(parcel.readInt() == 0 ? null : Image.valueOf(parcel.readString()), parcel.readInt() != 0 ? JsonLogicBoolean.CREATOR.createFromParcel(parcel) : null);
            }

            /* JADX WARN: Can't rename method to resolve collision */
            @Override // android.os.Parcelable.Creator
            public final Attributes[] newArray(int i10) {
                return new Attributes[i10];
            }
        }

        public Attributes(Image image, JsonLogicBoolean jsonLogicBoolean) {
            this.imageKey = image;
            this.hidden = jsonLogicBoolean;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        public final JsonLogicBoolean getHidden() {
            return this.hidden;
        }

        public final Image getImageKey() {
            return this.imageKey;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(@NotNull Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            Image image = this.imageKey;
            if (image == null) {
                dest.writeInt(0);
            } else {
                dest.writeInt(1);
                dest.writeString(image.name());
            }
            JsonLogicBoolean jsonLogicBoolean = this.hidden;
            if (jsonLogicBoolean == null) {
                dest.writeInt(0);
                return;
            }
            dest.writeInt(1);
            jsonLogicBoolean.writeToParcel(dest, i10);
        }

        public /* synthetic */ Attributes(Image image, JsonLogicBoolean jsonLogicBoolean, int i10, DefaultConstructorMarker defaultConstructorMarker) {
            this(image, (i10 & 2) != 0 ? null : jsonLogicBoolean);
        }
    }

    public /* synthetic */ LocalImage(String str, Attributes attributes, LocalImageComponentStyle localImageComponentStyle, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(str, attributes, (i10 & 4) != 0 ? null : localImageComponentStyle);
    }
}
