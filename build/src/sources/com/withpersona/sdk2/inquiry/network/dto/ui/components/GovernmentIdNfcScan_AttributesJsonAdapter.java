package com.withpersona.sdk2.inquiry.network.dto.ui.components;

import com.discord.misc.utilities.chat_view_types.ChatViewRecyclerTypes;
import com.facebook.react.uimanager.ViewProps;
import com.squareup.moshi.a0;
import com.squareup.moshi.h;
import com.squareup.moshi.m;
import com.squareup.moshi.t;
import com.squareup.moshi.w;
import com.withpersona.sdk2.inquiry.network.dto.JsonLogicBoolean;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.GovernmentIdNfcScan;
import java.util.List;
import kotlin.Metadata;
import kotlin.collections.x0;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000V\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000b\n\u0002\b\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\u000f\u0012\u0006\u0010\u0004\u001a\u00020\u0003¢\u0006\u0004\b\u0005\u0010\u0006J\u000f\u0010\b\u001a\u00020\u0007H\u0016¢\u0006\u0004\b\b\u0010\tJ\u0017\u0010\f\u001a\u00020\u00022\u0006\u0010\u000b\u001a\u00020\nH\u0016¢\u0006\u0004\b\f\u0010\rJ!\u0010\u0012\u001a\u00020\u00112\u0006\u0010\u000f\u001a\u00020\u000e2\b\u0010\u0010\u001a\u0004\u0018\u00010\u0002H\u0016¢\u0006\u0004\b\u0012\u0010\u0013R\u0014\u0010\u0015\u001a\u00020\u00148\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0015\u0010\u0016R\u001c\u0010\u0018\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u00170\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0018\u0010\u0019R\u001c\u0010\u001a\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u00070\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001a\u0010\u0019R\"\u0010\u001d\u001a\u0010\u0012\f\u0012\n\u0012\u0004\u0012\u00020\u001c\u0018\u00010\u001b0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001d\u0010\u0019R\u001c\u0010\u001f\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u001e0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001f\u0010\u0019¨\u0006 "}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/GovernmentIdNfcScan_AttributesJsonAdapter;", "Lcom/squareup/moshi/h;", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/GovernmentIdNfcScan$Attributes;", "Lcom/squareup/moshi/w;", "moshi", "<init>", "(Lcom/squareup/moshi/w;)V", "", "toString", "()Ljava/lang/String;", "Lcom/squareup/moshi/m;", "reader", "fromJson", "(Lcom/squareup/moshi/m;)Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/GovernmentIdNfcScan$Attributes;", "Lcom/squareup/moshi/t;", "writer", "value_", "", "toJson", "(Lcom/squareup/moshi/t;Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/GovernmentIdNfcScan$Attributes;)V", "Lcom/squareup/moshi/m$b;", "options", "Lcom/squareup/moshi/m$b;", "Lcom/withpersona/sdk2/inquiry/network/dto/JsonLogicBoolean;", "nullableJsonLogicBooleanAdapter", "Lcom/squareup/moshi/h;", "nullableStringAdapter", "", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/GovernmentIdNfcScan$DataGroupTypes;", "nullableListOfDataGroupTypesAdapter", "", "nullableBooleanAdapter", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class GovernmentIdNfcScan_AttributesJsonAdapter extends h {
    @NotNull
    private final h nullableBooleanAdapter;
    @NotNull
    private final h nullableJsonLogicBooleanAdapter;
    @NotNull
    private final h nullableListOfDataGroupTypesAdapter;
    @NotNull
    private final h nullableStringAdapter;
    @NotNull
    private final m.b options;

    public GovernmentIdNfcScan_AttributesJsonAdapter(@NotNull w moshi) {
        Intrinsics.checkNotNullParameter(moshi, "moshi");
        m.b a10 = m.b.a(ViewProps.HIDDEN, "disabled", "documentNumberLabel", "prefillCardAccessNumber", "prefillDocumentNumber", "dateOfBirthLabel", "prefillDateOfBirth", "cardAccessNumberLabel", "expirationDateLabel", "prefillExpirationDate", "launchButtonText", "scanDocumentPrompt", "scanDocumentSuccess", "enabledDataGroups", "authenticating", "reading", "requiredText", "scanDocumentError", "enableNfcPrompt", "authenticationErrorPrompt", "hidePrefilledInputs", "connectionLostPrompt", "unsupportedDocumentType", "retryError");
        Intrinsics.checkNotNullExpressionValue(a10, "of(...)");
        this.options = a10;
        h f10 = moshi.f(JsonLogicBoolean.class, x0.d(), ViewProps.HIDDEN);
        Intrinsics.checkNotNullExpressionValue(f10, "adapter(...)");
        this.nullableJsonLogicBooleanAdapter = f10;
        h f11 = moshi.f(String.class, x0.d(), "documentNumberLabel");
        Intrinsics.checkNotNullExpressionValue(f11, "adapter(...)");
        this.nullableStringAdapter = f11;
        h f12 = moshi.f(a0.j(List.class, GovernmentIdNfcScan.DataGroupTypes.class), x0.d(), "enabledDataGroups");
        Intrinsics.checkNotNullExpressionValue(f12, "adapter(...)");
        this.nullableListOfDataGroupTypesAdapter = f12;
        h f13 = moshi.f(Boolean.class, x0.d(), "hidePrefilledInputs");
        Intrinsics.checkNotNullExpressionValue(f13, "adapter(...)");
        this.nullableBooleanAdapter = f13;
    }

    @NotNull
    public String toString() {
        StringBuilder sb2 = new StringBuilder(52);
        sb2.append("GeneratedJsonAdapter(");
        sb2.append("GovernmentIdNfcScan.Attributes");
        sb2.append(')');
        return sb2.toString();
    }

    @Override // com.squareup.moshi.h
    @NotNull
    public GovernmentIdNfcScan.Attributes fromJson(@NotNull m reader) {
        Intrinsics.checkNotNullParameter(reader, "reader");
        reader.u();
        JsonLogicBoolean jsonLogicBoolean = null;
        JsonLogicBoolean jsonLogicBoolean2 = null;
        String str = null;
        String str2 = null;
        String str3 = null;
        String str4 = null;
        String str5 = null;
        String str6 = null;
        String str7 = null;
        String str8 = null;
        String str9 = null;
        String str10 = null;
        String str11 = null;
        List list = null;
        String str12 = null;
        String str13 = null;
        String str14 = null;
        String str15 = null;
        String str16 = null;
        String str17 = null;
        Boolean bool = null;
        String str18 = null;
        String str19 = null;
        String str20 = null;
        while (reader.hasNext()) {
            switch (reader.J(this.options)) {
                case -1:
                    reader.E0();
                    reader.S();
                    break;
                case 0:
                    jsonLogicBoolean = (JsonLogicBoolean) this.nullableJsonLogicBooleanAdapter.fromJson(reader);
                    break;
                case 1:
                    jsonLogicBoolean2 = (JsonLogicBoolean) this.nullableJsonLogicBooleanAdapter.fromJson(reader);
                    break;
                case 2:
                    str = (String) this.nullableStringAdapter.fromJson(reader);
                    break;
                case 3:
                    str2 = (String) this.nullableStringAdapter.fromJson(reader);
                    break;
                case 4:
                    str3 = (String) this.nullableStringAdapter.fromJson(reader);
                    break;
                case 5:
                    str4 = (String) this.nullableStringAdapter.fromJson(reader);
                    break;
                case 6:
                    str5 = (String) this.nullableStringAdapter.fromJson(reader);
                    break;
                case 7:
                    str6 = (String) this.nullableStringAdapter.fromJson(reader);
                    break;
                case 8:
                    str7 = (String) this.nullableStringAdapter.fromJson(reader);
                    break;
                case 9:
                    str8 = (String) this.nullableStringAdapter.fromJson(reader);
                    break;
                case 10:
                    str9 = (String) this.nullableStringAdapter.fromJson(reader);
                    break;
                case 11:
                    str10 = (String) this.nullableStringAdapter.fromJson(reader);
                    break;
                case 12:
                    str11 = (String) this.nullableStringAdapter.fromJson(reader);
                    break;
                case 13:
                    list = (List) this.nullableListOfDataGroupTypesAdapter.fromJson(reader);
                    break;
                case 14:
                    str12 = (String) this.nullableStringAdapter.fromJson(reader);
                    break;
                case 15:
                    str13 = (String) this.nullableStringAdapter.fromJson(reader);
                    break;
                case 16:
                    str14 = (String) this.nullableStringAdapter.fromJson(reader);
                    break;
                case 17:
                    str15 = (String) this.nullableStringAdapter.fromJson(reader);
                    break;
                case ChatViewRecyclerTypes.EPHEMERAL_INDICATION /* 18 */:
                    str16 = (String) this.nullableStringAdapter.fromJson(reader);
                    break;
                case ChatViewRecyclerTypes.INTERACTION_STATUS /* 19 */:
                    str17 = (String) this.nullableStringAdapter.fromJson(reader);
                    break;
                case 20:
                    bool = (Boolean) this.nullableBooleanAdapter.fromJson(reader);
                    break;
                case ChatViewRecyclerTypes.FLAGGED_MESSAGE_EMBED /* 21 */:
                    str18 = (String) this.nullableStringAdapter.fromJson(reader);
                    break;
                case ChatViewRecyclerTypes.FLAGGED_MESSAGE_ACTION_BAR /* 22 */:
                    str19 = (String) this.nullableStringAdapter.fromJson(reader);
                    break;
                case 23:
                    str20 = (String) this.nullableStringAdapter.fromJson(reader);
                    break;
            }
        }
        reader.D();
        return new GovernmentIdNfcScan.Attributes(jsonLogicBoolean, jsonLogicBoolean2, str, str2, str3, str4, str5, str6, str7, str8, str9, str10, str11, list, str12, str13, str14, str15, str16, str17, bool, str18, str19, str20);
    }

    @Override // com.squareup.moshi.h
    public void toJson(@NotNull t writer, GovernmentIdNfcScan.Attributes attributes) {
        Intrinsics.checkNotNullParameter(writer, "writer");
        if (attributes != null) {
            writer.k();
            writer.J(ViewProps.HIDDEN);
            this.nullableJsonLogicBooleanAdapter.toJson(writer, attributes.getHidden());
            writer.J("disabled");
            this.nullableJsonLogicBooleanAdapter.toJson(writer, attributes.getDisabled());
            writer.J("documentNumberLabel");
            this.nullableStringAdapter.toJson(writer, attributes.getDocumentNumberLabel());
            writer.J("prefillCardAccessNumber");
            this.nullableStringAdapter.toJson(writer, attributes.getPrefillCardAccessNumber());
            writer.J("prefillDocumentNumber");
            this.nullableStringAdapter.toJson(writer, attributes.getPrefillDocumentNumber());
            writer.J("dateOfBirthLabel");
            this.nullableStringAdapter.toJson(writer, attributes.getDateOfBirthLabel());
            writer.J("prefillDateOfBirth");
            this.nullableStringAdapter.toJson(writer, attributes.getPrefillDateOfBirth());
            writer.J("cardAccessNumberLabel");
            this.nullableStringAdapter.toJson(writer, attributes.getCardAccessNumberLabel());
            writer.J("expirationDateLabel");
            this.nullableStringAdapter.toJson(writer, attributes.getExpirationDateLabel());
            writer.J("prefillExpirationDate");
            this.nullableStringAdapter.toJson(writer, attributes.getPrefillExpirationDate());
            writer.J("launchButtonText");
            this.nullableStringAdapter.toJson(writer, attributes.getLaunchButtonText());
            writer.J("scanDocumentPrompt");
            this.nullableStringAdapter.toJson(writer, attributes.getScanDocumentPrompt());
            writer.J("scanDocumentSuccess");
            this.nullableStringAdapter.toJson(writer, attributes.getScanDocumentSuccess());
            writer.J("enabledDataGroups");
            this.nullableListOfDataGroupTypesAdapter.toJson(writer, attributes.getEnabledDataGroups());
            writer.J("authenticating");
            this.nullableStringAdapter.toJson(writer, attributes.getAuthenticating());
            writer.J("reading");
            this.nullableStringAdapter.toJson(writer, attributes.getReading());
            writer.J("requiredText");
            this.nullableStringAdapter.toJson(writer, attributes.getRequiredText());
            writer.J("scanDocumentError");
            this.nullableStringAdapter.toJson(writer, attributes.getScanDocumentError());
            writer.J("enableNfcPrompt");
            this.nullableStringAdapter.toJson(writer, attributes.getEnableNfcPrompt());
            writer.J("authenticationErrorPrompt");
            this.nullableStringAdapter.toJson(writer, attributes.getAuthenticationErrorPrompt());
            writer.J("hidePrefilledInputs");
            this.nullableBooleanAdapter.toJson(writer, attributes.getHidePrefilledInputs());
            writer.J("connectionLostPrompt");
            this.nullableStringAdapter.toJson(writer, attributes.getConnectionLostPrompt());
            writer.J("unsupportedDocumentType");
            this.nullableStringAdapter.toJson(writer, attributes.getUnsupportedDocumentType());
            writer.J("retryError");
            this.nullableStringAdapter.toJson(writer, attributes.getRetryError());
            writer.s();
            return;
        }
        throw new NullPointerException("value_ was null! Wrap in .nullSafe() to write nullable values.");
    }
}
