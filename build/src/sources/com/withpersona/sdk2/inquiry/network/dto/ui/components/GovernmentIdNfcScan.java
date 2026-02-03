package com.withpersona.sdk2.inquiry.network.dto.ui.components;

import android.os.Parcel;
import android.os.Parcelable;
import com.facebook.react.devsupport.StackTraceHelper;
import com.facebook.react.uimanager.ViewProps;
import com.squareup.moshi.f;
import com.squareup.moshi.h;
import com.squareup.moshi.i;
import com.squareup.moshi.m;
import com.squareup.moshi.t;
import com.squareup.moshi.z;
import com.withpersona.sdk2.inquiry.network.dto.JsonLogicBoolean;
import com.withpersona.sdk2.inquiry.network.dto.ui.UiComponentAttributes;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.InputDate;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.AttributeStyles;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.ButtonSubmitComponentStyle;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.InputTextBasedComponentStyle;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.TextBasedComponentStyle;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;
import java.util.Locale;
import kotlin.Metadata;
import kotlin.enums.EnumEntries;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@i(generateAdapter = true)
@Metadata(d1 = {"\u00002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\t\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0006\b\u0007\u0018\u0000 \u001a2\u00020\u0001:\u0004\u0017\u0018\u0019\u001aB#\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0005\u0012\b\u0010\u0006\u001a\u0004\u0018\u00010\u0007¢\u0006\u0004\b\b\u0010\tJ\u0006\u0010\u0010\u001a\u00020\u0011J\u0016\u0010\u0012\u001a\u00020\u00132\u0006\u0010\u0014\u001a\u00020\u00152\u0006\u0010\u0016\u001a\u00020\u0011R\u0014\u0010\u0002\u001a\u00020\u0003X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b\n\u0010\u000bR\u0016\u0010\u0004\u001a\u0004\u0018\u00010\u0005X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b\f\u0010\rR\u0013\u0010\u0006\u001a\u0004\u0018\u00010\u0007¢\u0006\b\n\u0000\u001a\u0004\b\u000e\u0010\u000f¨\u0006\u001b"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/GovernmentIdNfcScan;", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/UiComponentConfig;", StackTraceHelper.NAME_KEY, "", "attributes", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/GovernmentIdNfcScan$Attributes;", "styles", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/GovernmentIdNfcScan$GovernmentIdNfcScanStyles;", "<init>", "(Ljava/lang/String;Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/GovernmentIdNfcScan$Attributes;Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/GovernmentIdNfcScan$GovernmentIdNfcScanStyles;)V", "getName", "()Ljava/lang/String;", "getAttributes", "()Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/GovernmentIdNfcScan$Attributes;", "getStyles", "()Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/GovernmentIdNfcScan$GovernmentIdNfcScanStyles;", "describeContents", "", "writeToParcel", "", "dest", "Landroid/os/Parcel;", "flags", "GovernmentIdNfcScanStyles", "DataGroupTypes", "Attributes", "Companion", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class GovernmentIdNfcScan implements UiComponentConfig {
    @NotNull
    public static final String cardAccessNumberName = "card_access_number";
    @NotNull
    public static final String dateOfBirthName = "date_of_birth";
    @NotNull
    public static final String documentNumberName = "document_number";
    @NotNull
    public static final String expirationDateName = "expiration_date";
    @NotNull
    public static final String launchButtonName = "launch_button";
    @NotNull
    public static final String type = "government_id_nfc_scan";
    private final Attributes attributes;
    @NotNull
    private final String name;
    private final GovernmentIdNfcScanStyles styles;
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    public static final Parcelable.Creator<GovernmentIdNfcScan> CREATOR = new Creator();

    @i(generateAdapter = true)
    @Metadata(d1 = {"\u0000B\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0002\b\u000b\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0002\b\u0007\n\u0002\u0010\u000b\n\u0002\b#\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\b\u0007\u0018\u00002\u00020\u0001Bý\u0001\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0005\u001a\u0004\u0018\u00010\u0006\u0012\b\u0010\u0007\u001a\u0004\u0018\u00010\u0006\u0012\b\u0010\b\u001a\u0004\u0018\u00010\u0006\u0012\b\u0010\t\u001a\u0004\u0018\u00010\u0006\u0012\b\u0010\n\u001a\u0004\u0018\u00010\u0006\u0012\b\u0010\u000b\u001a\u0004\u0018\u00010\u0006\u0012\b\u0010\f\u001a\u0004\u0018\u00010\u0006\u0012\b\u0010\r\u001a\u0004\u0018\u00010\u0006\u0012\b\u0010\u000e\u001a\u0004\u0018\u00010\u0006\u0012\b\u0010\u000f\u001a\u0004\u0018\u00010\u0006\u0012\b\u0010\u0010\u001a\u0004\u0018\u00010\u0006\u0012\u000e\u0010\u0011\u001a\n\u0012\u0004\u0012\u00020\u0013\u0018\u00010\u0012\u0012\b\u0010\u0014\u001a\u0004\u0018\u00010\u0006\u0012\b\u0010\u0015\u001a\u0004\u0018\u00010\u0006\u0012\b\u0010\u0016\u001a\u0004\u0018\u00010\u0006\u0012\b\u0010\u0017\u001a\u0004\u0018\u00010\u0006\u0012\b\u0010\u0018\u001a\u0004\u0018\u00010\u0006\u0012\b\u0010\u0019\u001a\u0004\u0018\u00010\u0006\u0012\b\u0010\u001a\u001a\u0004\u0018\u00010\u001b\u0012\b\u0010\u001c\u001a\u0004\u0018\u00010\u0006\u0012\b\u0010\u001d\u001a\u0004\u0018\u00010\u0006\u0012\b\u0010\u001e\u001a\u0004\u0018\u00010\u0006¢\u0006\u0004\b\u001f\u0010 J\u0006\u0010>\u001a\u00020?J\u0016\u0010@\u001a\u00020A2\u0006\u0010B\u001a\u00020C2\u0006\u0010D\u001a\u00020?R\u0013\u0010\u0002\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b!\u0010\"R\u0013\u0010\u0004\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b#\u0010\"R\u0013\u0010\u0005\u001a\u0004\u0018\u00010\u0006¢\u0006\b\n\u0000\u001a\u0004\b$\u0010%R\u0013\u0010\u0007\u001a\u0004\u0018\u00010\u0006¢\u0006\b\n\u0000\u001a\u0004\b&\u0010%R\u0013\u0010\b\u001a\u0004\u0018\u00010\u0006¢\u0006\b\n\u0000\u001a\u0004\b'\u0010%R\u0013\u0010\t\u001a\u0004\u0018\u00010\u0006¢\u0006\b\n\u0000\u001a\u0004\b(\u0010%R\u0013\u0010\n\u001a\u0004\u0018\u00010\u0006¢\u0006\b\n\u0000\u001a\u0004\b)\u0010%R\u0013\u0010\u000b\u001a\u0004\u0018\u00010\u0006¢\u0006\b\n\u0000\u001a\u0004\b*\u0010%R\u0013\u0010\f\u001a\u0004\u0018\u00010\u0006¢\u0006\b\n\u0000\u001a\u0004\b+\u0010%R\u0013\u0010\r\u001a\u0004\u0018\u00010\u0006¢\u0006\b\n\u0000\u001a\u0004\b,\u0010%R\u0013\u0010\u000e\u001a\u0004\u0018\u00010\u0006¢\u0006\b\n\u0000\u001a\u0004\b-\u0010%R\u0013\u0010\u000f\u001a\u0004\u0018\u00010\u0006¢\u0006\b\n\u0000\u001a\u0004\b.\u0010%R\u0013\u0010\u0010\u001a\u0004\u0018\u00010\u0006¢\u0006\b\n\u0000\u001a\u0004\b/\u0010%R\u0019\u0010\u0011\u001a\n\u0012\u0004\u0012\u00020\u0013\u0018\u00010\u0012¢\u0006\b\n\u0000\u001a\u0004\b0\u00101R\u0013\u0010\u0014\u001a\u0004\u0018\u00010\u0006¢\u0006\b\n\u0000\u001a\u0004\b2\u0010%R\u0013\u0010\u0015\u001a\u0004\u0018\u00010\u0006¢\u0006\b\n\u0000\u001a\u0004\b3\u0010%R\u0013\u0010\u0016\u001a\u0004\u0018\u00010\u0006¢\u0006\b\n\u0000\u001a\u0004\b4\u0010%R\u0013\u0010\u0017\u001a\u0004\u0018\u00010\u0006¢\u0006\b\n\u0000\u001a\u0004\b5\u0010%R\u0013\u0010\u0018\u001a\u0004\u0018\u00010\u0006¢\u0006\b\n\u0000\u001a\u0004\b6\u0010%R\u0013\u0010\u0019\u001a\u0004\u0018\u00010\u0006¢\u0006\b\n\u0000\u001a\u0004\b7\u0010%R\u0015\u0010\u001a\u001a\u0004\u0018\u00010\u001b¢\u0006\n\n\u0002\u0010:\u001a\u0004\b8\u00109R\u0013\u0010\u001c\u001a\u0004\u0018\u00010\u0006¢\u0006\b\n\u0000\u001a\u0004\b;\u0010%R\u0013\u0010\u001d\u001a\u0004\u0018\u00010\u0006¢\u0006\b\n\u0000\u001a\u0004\b<\u0010%R\u0013\u0010\u001e\u001a\u0004\u0018\u00010\u0006¢\u0006\b\n\u0000\u001a\u0004\b=\u0010%¨\u0006E"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/GovernmentIdNfcScan$Attributes;", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/UiComponentAttributes;", ViewProps.HIDDEN, "Lcom/withpersona/sdk2/inquiry/network/dto/JsonLogicBoolean;", "disabled", "documentNumberLabel", "", "prefillCardAccessNumber", "prefillDocumentNumber", "dateOfBirthLabel", "prefillDateOfBirth", "cardAccessNumberLabel", "expirationDateLabel", "prefillExpirationDate", "launchButtonText", "scanDocumentPrompt", "scanDocumentSuccess", "enabledDataGroups", "", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/GovernmentIdNfcScan$DataGroupTypes;", "authenticating", "reading", "requiredText", "scanDocumentError", "enableNfcPrompt", "authenticationErrorPrompt", "hidePrefilledInputs", "", "connectionLostPrompt", "unsupportedDocumentType", "retryError", "<init>", "(Lcom/withpersona/sdk2/inquiry/network/dto/JsonLogicBoolean;Lcom/withpersona/sdk2/inquiry/network/dto/JsonLogicBoolean;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/util/List;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Boolean;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V", "getHidden", "()Lcom/withpersona/sdk2/inquiry/network/dto/JsonLogicBoolean;", "getDisabled", "getDocumentNumberLabel", "()Ljava/lang/String;", "getPrefillCardAccessNumber", "getPrefillDocumentNumber", "getDateOfBirthLabel", "getPrefillDateOfBirth", "getCardAccessNumberLabel", "getExpirationDateLabel", "getPrefillExpirationDate", "getLaunchButtonText", "getScanDocumentPrompt", "getScanDocumentSuccess", "getEnabledDataGroups", "()Ljava/util/List;", "getAuthenticating", "getReading", "getRequiredText", "getScanDocumentError", "getEnableNfcPrompt", "getAuthenticationErrorPrompt", "getHidePrefilledInputs", "()Ljava/lang/Boolean;", "Ljava/lang/Boolean;", "getConnectionLostPrompt", "getUnsupportedDocumentType", "getRetryError", "describeContents", "", "writeToParcel", "", "dest", "Landroid/os/Parcel;", "flags", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class Attributes implements UiComponentAttributes {
        @NotNull
        public static final Parcelable.Creator<Attributes> CREATOR = new Creator();
        private final String authenticating;
        private final String authenticationErrorPrompt;
        private final String cardAccessNumberLabel;
        private final String connectionLostPrompt;
        private final String dateOfBirthLabel;
        private final JsonLogicBoolean disabled;
        private final String documentNumberLabel;
        private final String enableNfcPrompt;
        private final List<DataGroupTypes> enabledDataGroups;
        private final String expirationDateLabel;
        private final JsonLogicBoolean hidden;
        private final Boolean hidePrefilledInputs;
        private final String launchButtonText;
        private final String prefillCardAccessNumber;
        private final String prefillDateOfBirth;
        private final String prefillDocumentNumber;
        private final String prefillExpirationDate;
        private final String reading;
        private final String requiredText;
        private final String retryError;
        private final String scanDocumentError;
        private final String scanDocumentPrompt;
        private final String scanDocumentSuccess;
        private final String unsupportedDocumentType;

        @Metadata(k = 3, mv = {2, 0, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class Creator implements Parcelable.Creator<Attributes> {
            /* JADX WARN: Can't rename method to resolve collision */
            @Override // android.os.Parcelable.Creator
            public final Attributes createFromParcel(Parcel parcel) {
                ArrayList arrayList;
                Boolean valueOf;
                Parcel parcel2 = parcel;
                Intrinsics.checkNotNullParameter(parcel2, "parcel");
                JsonLogicBoolean createFromParcel = parcel2.readInt() == 0 ? null : JsonLogicBoolean.CREATOR.createFromParcel(parcel2);
                JsonLogicBoolean createFromParcel2 = parcel2.readInt() == 0 ? null : JsonLogicBoolean.CREATOR.createFromParcel(parcel2);
                String readString = parcel2.readString();
                String readString2 = parcel2.readString();
                String readString3 = parcel2.readString();
                String readString4 = parcel2.readString();
                String readString5 = parcel2.readString();
                String readString6 = parcel2.readString();
                String readString7 = parcel2.readString();
                String readString8 = parcel2.readString();
                String readString9 = parcel2.readString();
                String readString10 = parcel2.readString();
                String readString11 = parcel2.readString();
                if (parcel2.readInt() == 0) {
                    arrayList = null;
                } else {
                    int readInt = parcel2.readInt();
                    arrayList = new ArrayList(readInt);
                    int i10 = 0;
                    while (i10 != readInt) {
                        arrayList.add(DataGroupTypes.valueOf(parcel2.readString()));
                        i10++;
                        parcel2 = parcel;
                    }
                }
                String readString12 = parcel.readString();
                String readString13 = parcel.readString();
                String readString14 = parcel.readString();
                String readString15 = parcel.readString();
                String readString16 = parcel.readString();
                String readString17 = parcel.readString();
                if (parcel.readInt() == 0) {
                    valueOf = null;
                } else {
                    valueOf = Boolean.valueOf(parcel.readInt() != 0);
                }
                return new Attributes(createFromParcel, createFromParcel2, readString, readString2, readString3, readString4, readString5, readString6, readString7, readString8, readString9, readString10, readString11, arrayList, readString12, readString13, readString14, readString15, readString16, readString17, valueOf, parcel.readString(), parcel.readString(), parcel.readString());
            }

            /* JADX WARN: Can't rename method to resolve collision */
            @Override // android.os.Parcelable.Creator
            public final Attributes[] newArray(int i10) {
                return new Attributes[i10];
            }
        }

        /* JADX WARN: Multi-variable type inference failed */
        public Attributes(JsonLogicBoolean jsonLogicBoolean, JsonLogicBoolean jsonLogicBoolean2, String str, String str2, String str3, String str4, String str5, String str6, String str7, String str8, String str9, String str10, String str11, List<? extends DataGroupTypes> list, String str12, String str13, String str14, String str15, String str16, String str17, Boolean bool, String str18, String str19, String str20) {
            this.hidden = jsonLogicBoolean;
            this.disabled = jsonLogicBoolean2;
            this.documentNumberLabel = str;
            this.prefillCardAccessNumber = str2;
            this.prefillDocumentNumber = str3;
            this.dateOfBirthLabel = str4;
            this.prefillDateOfBirth = str5;
            this.cardAccessNumberLabel = str6;
            this.expirationDateLabel = str7;
            this.prefillExpirationDate = str8;
            this.launchButtonText = str9;
            this.scanDocumentPrompt = str10;
            this.scanDocumentSuccess = str11;
            this.enabledDataGroups = list;
            this.authenticating = str12;
            this.reading = str13;
            this.requiredText = str14;
            this.scanDocumentError = str15;
            this.enableNfcPrompt = str16;
            this.authenticationErrorPrompt = str17;
            this.hidePrefilledInputs = bool;
            this.connectionLostPrompt = str18;
            this.unsupportedDocumentType = str19;
            this.retryError = str20;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        public final String getAuthenticating() {
            return this.authenticating;
        }

        public final String getAuthenticationErrorPrompt() {
            return this.authenticationErrorPrompt;
        }

        public final String getCardAccessNumberLabel() {
            return this.cardAccessNumberLabel;
        }

        public final String getConnectionLostPrompt() {
            return this.connectionLostPrompt;
        }

        public final String getDateOfBirthLabel() {
            return this.dateOfBirthLabel;
        }

        public final JsonLogicBoolean getDisabled() {
            return this.disabled;
        }

        public final String getDocumentNumberLabel() {
            return this.documentNumberLabel;
        }

        public final String getEnableNfcPrompt() {
            return this.enableNfcPrompt;
        }

        public final List<DataGroupTypes> getEnabledDataGroups() {
            return this.enabledDataGroups;
        }

        public final String getExpirationDateLabel() {
            return this.expirationDateLabel;
        }

        public final JsonLogicBoolean getHidden() {
            return this.hidden;
        }

        public final Boolean getHidePrefilledInputs() {
            return this.hidePrefilledInputs;
        }

        public final String getLaunchButtonText() {
            return this.launchButtonText;
        }

        public final String getPrefillCardAccessNumber() {
            return this.prefillCardAccessNumber;
        }

        public final String getPrefillDateOfBirth() {
            return this.prefillDateOfBirth;
        }

        public final String getPrefillDocumentNumber() {
            return this.prefillDocumentNumber;
        }

        public final String getPrefillExpirationDate() {
            return this.prefillExpirationDate;
        }

        public final String getReading() {
            return this.reading;
        }

        public final String getRequiredText() {
            return this.requiredText;
        }

        public final String getRetryError() {
            return this.retryError;
        }

        public final String getScanDocumentError() {
            return this.scanDocumentError;
        }

        public final String getScanDocumentPrompt() {
            return this.scanDocumentPrompt;
        }

        public final String getScanDocumentSuccess() {
            return this.scanDocumentSuccess;
        }

        public final String getUnsupportedDocumentType() {
            return this.unsupportedDocumentType;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(@NotNull Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            JsonLogicBoolean jsonLogicBoolean = this.hidden;
            if (jsonLogicBoolean == null) {
                dest.writeInt(0);
            } else {
                dest.writeInt(1);
                jsonLogicBoolean.writeToParcel(dest, i10);
            }
            JsonLogicBoolean jsonLogicBoolean2 = this.disabled;
            if (jsonLogicBoolean2 == null) {
                dest.writeInt(0);
            } else {
                dest.writeInt(1);
                jsonLogicBoolean2.writeToParcel(dest, i10);
            }
            dest.writeString(this.documentNumberLabel);
            dest.writeString(this.prefillCardAccessNumber);
            dest.writeString(this.prefillDocumentNumber);
            dest.writeString(this.dateOfBirthLabel);
            dest.writeString(this.prefillDateOfBirth);
            dest.writeString(this.cardAccessNumberLabel);
            dest.writeString(this.expirationDateLabel);
            dest.writeString(this.prefillExpirationDate);
            dest.writeString(this.launchButtonText);
            dest.writeString(this.scanDocumentPrompt);
            dest.writeString(this.scanDocumentSuccess);
            List<DataGroupTypes> list = this.enabledDataGroups;
            if (list == null) {
                dest.writeInt(0);
            } else {
                dest.writeInt(1);
                dest.writeInt(list.size());
                for (DataGroupTypes dataGroupTypes : list) {
                    dest.writeString(dataGroupTypes.name());
                }
            }
            dest.writeString(this.authenticating);
            dest.writeString(this.reading);
            dest.writeString(this.requiredText);
            dest.writeString(this.scanDocumentError);
            dest.writeString(this.enableNfcPrompt);
            dest.writeString(this.authenticationErrorPrompt);
            Boolean bool = this.hidePrefilledInputs;
            if (bool == null) {
                dest.writeInt(0);
            } else {
                dest.writeInt(1);
                dest.writeInt(bool.booleanValue() ? 1 : 0);
            }
            dest.writeString(this.connectionLostPrompt);
            dest.writeString(this.unsupportedDocumentType);
            dest.writeString(this.retryError);
        }
    }

    @Metadata(d1 = {"\u0000\u001a\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0006\n\u0002\u0010 \n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u000b\u001a\b\u0012\u0004\u0012\u00020\u00050\fR\u000e\u0010\u0004\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010\u0006\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010\u0007\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010\b\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010\t\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010\n\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000¨\u0006\r"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/GovernmentIdNfcScan$Companion;", "", "<init>", "()V", "type", "", "launchButtonName", "cardAccessNumberName", "documentNumberName", "dateOfBirthName", "expirationDateName", "generateTextMonths", "", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        @NotNull
        public final List<String> generateTextMonths() {
            ArrayList arrayList = new ArrayList();
            Calendar calendar = Calendar.getInstance();
            SimpleDateFormat simpleDateFormat = new SimpleDateFormat("MMMM", Locale.getDefault());
            calendar.set(5, 1);
            calendar.set(1, 2000);
            for (int i10 = 0; i10 < 12; i10++) {
                calendar.set(2, i10);
                String format = simpleDateFormat.format(calendar.getTime());
                Intrinsics.checkNotNullExpressionValue(format, "format(...)");
                arrayList.add(format);
            }
            return arrayList;
        }

        private Companion() {
        }
    }

    @Metadata(k = 3, mv = {2, 0, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class Creator implements Parcelable.Creator<GovernmentIdNfcScan> {
        /* JADX WARN: Can't rename method to resolve collision */
        @Override // android.os.Parcelable.Creator
        public final GovernmentIdNfcScan createFromParcel(Parcel parcel) {
            Intrinsics.checkNotNullParameter(parcel, "parcel");
            return new GovernmentIdNfcScan(parcel.readString(), parcel.readInt() == 0 ? null : Attributes.CREATOR.createFromParcel(parcel), parcel.readInt() != 0 ? GovernmentIdNfcScanStyles.CREATOR.createFromParcel(parcel) : null);
        }

        /* JADX WARN: Can't rename method to resolve collision */
        @Override // android.os.Parcelable.Creator
        public final GovernmentIdNfcScan[] newArray(int i10) {
            return new GovernmentIdNfcScan[i10];
        }
    }

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    @i(generateAdapter = false)
    @Metadata(d1 = {"\u0000\f\n\u0002\u0018\u0002\n\u0002\u0010\u0010\n\u0002\b\t\b\u0087\u0081\u0002\u0018\u0000 \t2\b\u0012\u0004\u0012\u00020\u00000\u0001:\u0001\tB\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003j\u0002\b\u0004j\u0002\b\u0005j\u0002\b\u0006j\u0002\b\u0007j\u0002\b\b¨\u0006\n"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/GovernmentIdNfcScan$DataGroupTypes;", "", "<init>", "(Ljava/lang/String;I)V", "Dg1", "Dg2", "Dg14", "Sod", "Unknown", "Companion", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class DataGroupTypes {
        private static final /* synthetic */ EnumEntries $ENTRIES;
        private static final /* synthetic */ DataGroupTypes[] $VALUES;
        @NotNull
        public static final Companion Companion;
        public static final DataGroupTypes Dg1 = new DataGroupTypes("Dg1", 0);
        public static final DataGroupTypes Dg2 = new DataGroupTypes("Dg2", 1);
        public static final DataGroupTypes Dg14 = new DataGroupTypes("Dg14", 2);
        public static final DataGroupTypes Sod = new DataGroupTypes("Sod", 3);
        public static final DataGroupTypes Unknown = new DataGroupTypes("Unknown", 4);

        @Metadata(d1 = {"\u0000(\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0003\b\u0086\u0003\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0003\u0010\u0004J\u0017\u0010\u0007\u001a\u00020\u00022\u0006\u0010\u0006\u001a\u00020\u0005H\u0017¢\u0006\u0004\b\u0007\u0010\bJ!\u0010\r\u001a\u00020\f2\u0006\u0010\n\u001a\u00020\t2\b\u0010\u000b\u001a\u0004\u0018\u00010\u0002H\u0017¢\u0006\u0004\b\r\u0010\u000e¨\u0006\u000f"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/GovernmentIdNfcScan$DataGroupTypes$Companion;", "Lcom/squareup/moshi/h;", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/GovernmentIdNfcScan$DataGroupTypes;", "<init>", "()V", "Lcom/squareup/moshi/m;", "reader", "fromJson", "(Lcom/squareup/moshi/m;)Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/GovernmentIdNfcScan$DataGroupTypes;", "Lcom/squareup/moshi/t;", "writer", "value", "", "toJson", "(Lcom/squareup/moshi/t;Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/GovernmentIdNfcScan$DataGroupTypes;)V", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class Companion extends h {
            public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
                this();
            }

            @Override // com.squareup.moshi.h
            @z
            public void toJson(@NotNull t writer, DataGroupTypes dataGroupTypes) {
                Intrinsics.checkNotNullParameter(writer, "writer");
            }

            private Companion() {
            }

            @Override // com.squareup.moshi.h
            @f
            @NotNull
            public DataGroupTypes fromJson(@NotNull m reader) {
                Intrinsics.checkNotNullParameter(reader, "reader");
                Object V = reader.V();
                return Intrinsics.areEqual(V, "dg1") ? DataGroupTypes.Dg1 : Intrinsics.areEqual(V, "dg2") ? DataGroupTypes.Dg2 : Intrinsics.areEqual(V, "dg14") ? DataGroupTypes.Dg14 : Intrinsics.areEqual(V, "sod") ? DataGroupTypes.Sod : DataGroupTypes.Unknown;
            }
        }

        private static final /* synthetic */ DataGroupTypes[] $values() {
            return new DataGroupTypes[]{Dg1, Dg2, Dg14, Sod, Unknown};
        }

        static {
            DataGroupTypes[] $values = $values();
            $VALUES = $values;
            $ENTRIES = sr.a.a($values);
            Companion = new Companion(null);
        }

        private DataGroupTypes(String str, int i10) {
        }

        @NotNull
        public static EnumEntries getEntries() {
            return $ENTRIES;
        }

        public static DataGroupTypes valueOf(String str) {
            return (DataGroupTypes) Enum.valueOf(DataGroupTypes.class, str);
        }

        public static DataGroupTypes[] values() {
            return (DataGroupTypes[]) $VALUES.clone();
        }
    }

    @i(generateAdapter = true)
    @Metadata(d1 = {"\u0000R\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\t\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\b\u0007\u0018\u00002\u00020\u0001B%\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0005\u0012\b\u0010\u0006\u001a\u0004\u0018\u00010\u0007¢\u0006\u0004\b\b\u0010\tJ\u0006\u0010\"\u001a\u00020#J\u0016\u0010$\u001a\u00020%2\u0006\u0010&\u001a\u00020'2\u0006\u0010(\u001a\u00020#R\u0013\u0010\u0002\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\n\u0010\u000bR\u0013\u0010\u0004\u001a\u0004\u0018\u00010\u0005¢\u0006\b\n\u0000\u001a\u0004\b\f\u0010\rR\u0013\u0010\u0006\u001a\u0004\u0018\u00010\u0007¢\u0006\b\n\u0000\u001a\u0004\b\u000e\u0010\u000fR\u0013\u0010\u0010\u001a\u0004\u0018\u00010\u00118F¢\u0006\u0006\u001a\u0004\b\u0012\u0010\u0013R\u0013\u0010\u0014\u001a\u0004\u0018\u00010\u00158F¢\u0006\u0006\u001a\u0004\b\u0016\u0010\u0017R\u0013\u0010\u0018\u001a\u0004\u0018\u00010\u00158F¢\u0006\u0006\u001a\u0004\b\u0019\u0010\u0017R\u0013\u0010\u001a\u001a\u0004\u0018\u00010\u001b8F¢\u0006\u0006\u001a\u0004\b\u001c\u0010\u001dR\u0013\u0010\u001e\u001a\u0004\u0018\u00010\u001f8F¢\u0006\u0006\u001a\u0004\b \u0010!¨\u0006)"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/GovernmentIdNfcScan$GovernmentIdNfcScanStyles;", "Landroid/os/Parcelable;", "buttonPrimaryStyle", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$GovernmentIdNfcScanPrimaryButtonStyles;", "inputTextStyle", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$GovernmentIdNfcScanInputTextStyles;", "inputDateStyle", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$GovernmentIdNfcScanInputDateStyles;", "<init>", "(Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$GovernmentIdNfcScanPrimaryButtonStyles;Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$GovernmentIdNfcScanInputTextStyles;Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$GovernmentIdNfcScanInputDateStyles;)V", "getButtonPrimaryStyle", "()Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$GovernmentIdNfcScanPrimaryButtonStyles;", "getInputTextStyle", "()Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$GovernmentIdNfcScanInputTextStyles;", "getInputDateStyle", "()Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$GovernmentIdNfcScanInputDateStyles;", "launchButtonStyle", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/ButtonSubmitComponentStyle;", "getLaunchButtonStyle", "()Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/ButtonSubmitComponentStyle;", "documentNumberStyle", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/InputTextBasedComponentStyle;", "getDocumentNumberStyle", "()Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/InputTextBasedComponentStyle;", "cardAccessNumberStyle", "getCardAccessNumberStyle", "dateStyle", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/InputDate$InputDateComponentStyle;", "getDateStyle", "()Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/InputDate$InputDateComponentStyle;", "errorLabelStyle", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/TextBasedComponentStyle;", "getErrorLabelStyle", "()Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/TextBasedComponentStyle;", "describeContents", "", "writeToParcel", "", "dest", "Landroid/os/Parcel;", "flags", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class GovernmentIdNfcScanStyles implements Parcelable {
        @NotNull
        public static final Parcelable.Creator<GovernmentIdNfcScanStyles> CREATOR = new Creator();
        private final AttributeStyles.GovernmentIdNfcScanPrimaryButtonStyles buttonPrimaryStyle;
        private final AttributeStyles.GovernmentIdNfcScanInputDateStyles inputDateStyle;
        private final AttributeStyles.GovernmentIdNfcScanInputTextStyles inputTextStyle;

        @Metadata(k = 3, mv = {2, 0, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class Creator implements Parcelable.Creator<GovernmentIdNfcScanStyles> {
            /* JADX WARN: Can't rename method to resolve collision */
            @Override // android.os.Parcelable.Creator
            public final GovernmentIdNfcScanStyles createFromParcel(Parcel parcel) {
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                return new GovernmentIdNfcScanStyles(parcel.readInt() == 0 ? null : AttributeStyles.GovernmentIdNfcScanPrimaryButtonStyles.CREATOR.createFromParcel(parcel), parcel.readInt() == 0 ? null : AttributeStyles.GovernmentIdNfcScanInputTextStyles.CREATOR.createFromParcel(parcel), parcel.readInt() != 0 ? AttributeStyles.GovernmentIdNfcScanInputDateStyles.CREATOR.createFromParcel(parcel) : null);
            }

            /* JADX WARN: Can't rename method to resolve collision */
            @Override // android.os.Parcelable.Creator
            public final GovernmentIdNfcScanStyles[] newArray(int i10) {
                return new GovernmentIdNfcScanStyles[i10];
            }
        }

        public GovernmentIdNfcScanStyles(AttributeStyles.GovernmentIdNfcScanPrimaryButtonStyles governmentIdNfcScanPrimaryButtonStyles, AttributeStyles.GovernmentIdNfcScanInputTextStyles governmentIdNfcScanInputTextStyles, AttributeStyles.GovernmentIdNfcScanInputDateStyles governmentIdNfcScanInputDateStyles) {
            this.buttonPrimaryStyle = governmentIdNfcScanPrimaryButtonStyles;
            this.inputTextStyle = governmentIdNfcScanInputTextStyles;
            this.inputDateStyle = governmentIdNfcScanInputDateStyles;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        public final AttributeStyles.GovernmentIdNfcScanPrimaryButtonStyles getButtonPrimaryStyle() {
            return this.buttonPrimaryStyle;
        }

        public final InputTextBasedComponentStyle getCardAccessNumberStyle() {
            AttributeStyles.GovernmentIdNfcScanInputTextStylesContainer base;
            AttributeStyles.GovernmentIdNfcScanInputTextStyles governmentIdNfcScanInputTextStyles = this.inputTextStyle;
            if (governmentIdNfcScanInputTextStyles != null && (base = governmentIdNfcScanInputTextStyles.getBase()) != null) {
                return base.getBase();
            }
            return null;
        }

        public final InputDate.InputDateComponentStyle getDateStyle() {
            AttributeStyles.GovernmentIdNfcScanInputDateStylesContainer base;
            AttributeStyles.GovernmentIdNfcScanInputDateStyles governmentIdNfcScanInputDateStyles = this.inputDateStyle;
            if (governmentIdNfcScanInputDateStyles != null && (base = governmentIdNfcScanInputDateStyles.getBase()) != null) {
                return base.getBase();
            }
            return null;
        }

        public final InputTextBasedComponentStyle getDocumentNumberStyle() {
            AttributeStyles.GovernmentIdNfcScanInputTextStylesContainer base;
            AttributeStyles.GovernmentIdNfcScanInputTextStyles governmentIdNfcScanInputTextStyles = this.inputTextStyle;
            if (governmentIdNfcScanInputTextStyles != null && (base = governmentIdNfcScanInputTextStyles.getBase()) != null) {
                return base.getBase();
            }
            return null;
        }

        public final TextBasedComponentStyle getErrorLabelStyle() {
            AttributeStyles.GovernmentIdNfcScanInputTextStylesContainer base;
            InputTextBasedComponentStyle base2;
            AttributeStyles.GovernmentIdNfcScanInputTextStyles governmentIdNfcScanInputTextStyles = this.inputTextStyle;
            if (governmentIdNfcScanInputTextStyles != null && (base = governmentIdNfcScanInputTextStyles.getBase()) != null && (base2 = base.getBase()) != null) {
                return base2.getErrorTextStyle();
            }
            return null;
        }

        public final AttributeStyles.GovernmentIdNfcScanInputDateStyles getInputDateStyle() {
            return this.inputDateStyle;
        }

        public final AttributeStyles.GovernmentIdNfcScanInputTextStyles getInputTextStyle() {
            return this.inputTextStyle;
        }

        public final ButtonSubmitComponentStyle getLaunchButtonStyle() {
            AttributeStyles.GovernmentIdNfcScanPrimaryButtonStylesContainer base;
            AttributeStyles.GovernmentIdNfcScanPrimaryButtonStyles governmentIdNfcScanPrimaryButtonStyles = this.buttonPrimaryStyle;
            if (governmentIdNfcScanPrimaryButtonStyles != null && (base = governmentIdNfcScanPrimaryButtonStyles.getBase()) != null) {
                return base.getBase();
            }
            return null;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(@NotNull Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            AttributeStyles.GovernmentIdNfcScanPrimaryButtonStyles governmentIdNfcScanPrimaryButtonStyles = this.buttonPrimaryStyle;
            if (governmentIdNfcScanPrimaryButtonStyles == null) {
                dest.writeInt(0);
            } else {
                dest.writeInt(1);
                governmentIdNfcScanPrimaryButtonStyles.writeToParcel(dest, i10);
            }
            AttributeStyles.GovernmentIdNfcScanInputTextStyles governmentIdNfcScanInputTextStyles = this.inputTextStyle;
            if (governmentIdNfcScanInputTextStyles == null) {
                dest.writeInt(0);
            } else {
                dest.writeInt(1);
                governmentIdNfcScanInputTextStyles.writeToParcel(dest, i10);
            }
            AttributeStyles.GovernmentIdNfcScanInputDateStyles governmentIdNfcScanInputDateStyles = this.inputDateStyle;
            if (governmentIdNfcScanInputDateStyles == null) {
                dest.writeInt(0);
                return;
            }
            dest.writeInt(1);
            governmentIdNfcScanInputDateStyles.writeToParcel(dest, i10);
        }
    }

    public GovernmentIdNfcScan(@NotNull String name, Attributes attributes, GovernmentIdNfcScanStyles governmentIdNfcScanStyles) {
        Intrinsics.checkNotNullParameter(name, "name");
        this.name = name;
        this.attributes = attributes;
        this.styles = governmentIdNfcScanStyles;
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

    public final GovernmentIdNfcScanStyles getStyles() {
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
        GovernmentIdNfcScanStyles governmentIdNfcScanStyles = this.styles;
        if (governmentIdNfcScanStyles == null) {
            dest.writeInt(0);
            return;
        }
        dest.writeInt(1);
        governmentIdNfcScanStyles.writeToParcel(dest, i10);
    }

    @Override // com.withpersona.sdk2.inquiry.network.dto.ui.components.UiComponentConfig
    public Attributes getAttributes() {
        return this.attributes;
    }
}
