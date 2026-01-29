package com.withpersona.sdk2.inquiry.network.dto.ui.components;

import com.discord.misc.utilities.chat_view_types.ChatViewRecyclerTypes;
import com.facebook.react.uimanager.ViewProps;
import com.squareup.moshi.h;
import com.squareup.moshi.m;
import com.squareup.moshi.t;
import com.squareup.moshi.w;
import com.withpersona.sdk2.inquiry.network.dto.JsonLogicBoolean;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.InputAddress;
import kotlin.Metadata;
import kotlin.collections.x0;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000D\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\u000f\u0012\u0006\u0010\u0004\u001a\u00020\u0003¢\u0006\u0004\b\u0005\u0010\u0006J\u000f\u0010\b\u001a\u00020\u0007H\u0016¢\u0006\u0004\b\b\u0010\tJ\u0017\u0010\f\u001a\u00020\u00022\u0006\u0010\u000b\u001a\u00020\nH\u0016¢\u0006\u0004\b\f\u0010\rJ!\u0010\u0012\u001a\u00020\u00112\u0006\u0010\u000f\u001a\u00020\u000e2\b\u0010\u0010\u001a\u0004\u0018\u00010\u0002H\u0016¢\u0006\u0004\b\u0012\u0010\u0013R\u0014\u0010\u0015\u001a\u00020\u00148\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0015\u0010\u0016R\u001c\u0010\u0017\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u00070\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0017\u0010\u0018R\u001c\u0010\u001a\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u00190\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001a\u0010\u0018¨\u0006\u001b"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/InputAddress_AttributesJsonAdapter;", "Lcom/squareup/moshi/h;", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/InputAddress$Attributes;", "Lcom/squareup/moshi/w;", "moshi", "<init>", "(Lcom/squareup/moshi/w;)V", "", "toString", "()Ljava/lang/String;", "Lcom/squareup/moshi/m;", "reader", "fromJson", "(Lcom/squareup/moshi/m;)Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/InputAddress$Attributes;", "Lcom/squareup/moshi/t;", "writer", "value_", "", "toJson", "(Lcom/squareup/moshi/t;Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/InputAddress$Attributes;)V", "Lcom/squareup/moshi/m$b;", "options", "Lcom/squareup/moshi/m$b;", "nullableStringAdapter", "Lcom/squareup/moshi/h;", "Lcom/withpersona/sdk2/inquiry/network/dto/JsonLogicBoolean;", "nullableJsonLogicBooleanAdapter", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class InputAddress_AttributesJsonAdapter extends h {
    @NotNull
    private final h nullableJsonLogicBooleanAdapter;
    @NotNull
    private final h nullableStringAdapter;
    @NotNull
    private final m.b options;

    public InputAddress_AttributesJsonAdapter(@NotNull w moshi) {
        Intrinsics.checkNotNullParameter(moshi, "moshi");
        m.b a10 = m.b.a("label", "editAddressManuallyPrompt", "placeholderAutocomplete", "fieldKeyAddressStreet1", "prefillAddressStreet1", "placeholderAddressStreet1", "fieldKeyAddressStreet2", "prefillAddressStreet2", "placeholderAddressStreet2", "fieldKeyAddressCity", "prefillAddressCity", "placeholderAddressCity", "fieldKeyAddressSubdivision", "prefillAddressSubdivision", "placeholderAddressSubdivision", "placeholderAddressSubdivisionUs", "fieldKeyAddressPostalCode", "prefillAddressPostalCode", "placeholderAddressPostalCode", "placeholderAddressPostalCodeUs", "selectedCountryCode", ViewProps.HIDDEN, "disabled");
        Intrinsics.checkNotNullExpressionValue(a10, "of(...)");
        this.options = a10;
        h f10 = moshi.f(String.class, x0.d(), "label");
        Intrinsics.checkNotNullExpressionValue(f10, "adapter(...)");
        this.nullableStringAdapter = f10;
        h f11 = moshi.f(JsonLogicBoolean.class, x0.d(), ViewProps.HIDDEN);
        Intrinsics.checkNotNullExpressionValue(f11, "adapter(...)");
        this.nullableJsonLogicBooleanAdapter = f11;
    }

    @NotNull
    public String toString() {
        StringBuilder sb2 = new StringBuilder(45);
        sb2.append("GeneratedJsonAdapter(");
        sb2.append("InputAddress.Attributes");
        sb2.append(')');
        return sb2.toString();
    }

    @Override // com.squareup.moshi.h
    @NotNull
    public InputAddress.Attributes fromJson(@NotNull m reader) {
        Intrinsics.checkNotNullParameter(reader, "reader");
        reader.r();
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
        String str12 = null;
        String str13 = null;
        String str14 = null;
        String str15 = null;
        String str16 = null;
        String str17 = null;
        String str18 = null;
        String str19 = null;
        String str20 = null;
        String str21 = null;
        JsonLogicBoolean jsonLogicBoolean = null;
        JsonLogicBoolean jsonLogicBoolean2 = null;
        while (reader.hasNext()) {
            switch (reader.A0(this.options)) {
                case -1:
                    reader.E0();
                    reader.P();
                    break;
                case 0:
                    str = (String) this.nullableStringAdapter.fromJson(reader);
                    break;
                case 1:
                    str2 = (String) this.nullableStringAdapter.fromJson(reader);
                    break;
                case 2:
                    str3 = (String) this.nullableStringAdapter.fromJson(reader);
                    break;
                case 3:
                    str4 = (String) this.nullableStringAdapter.fromJson(reader);
                    break;
                case 4:
                    str5 = (String) this.nullableStringAdapter.fromJson(reader);
                    break;
                case 5:
                    str6 = (String) this.nullableStringAdapter.fromJson(reader);
                    break;
                case 6:
                    str7 = (String) this.nullableStringAdapter.fromJson(reader);
                    break;
                case 7:
                    str8 = (String) this.nullableStringAdapter.fromJson(reader);
                    break;
                case 8:
                    str9 = (String) this.nullableStringAdapter.fromJson(reader);
                    break;
                case 9:
                    str10 = (String) this.nullableStringAdapter.fromJson(reader);
                    break;
                case 10:
                    str11 = (String) this.nullableStringAdapter.fromJson(reader);
                    break;
                case 11:
                    str12 = (String) this.nullableStringAdapter.fromJson(reader);
                    break;
                case 12:
                    str13 = (String) this.nullableStringAdapter.fromJson(reader);
                    break;
                case 13:
                    str14 = (String) this.nullableStringAdapter.fromJson(reader);
                    break;
                case 14:
                    str15 = (String) this.nullableStringAdapter.fromJson(reader);
                    break;
                case 15:
                    str16 = (String) this.nullableStringAdapter.fromJson(reader);
                    break;
                case 16:
                    str17 = (String) this.nullableStringAdapter.fromJson(reader);
                    break;
                case 17:
                    str18 = (String) this.nullableStringAdapter.fromJson(reader);
                    break;
                case ChatViewRecyclerTypes.EPHEMERAL_INDICATION /* 18 */:
                    str19 = (String) this.nullableStringAdapter.fromJson(reader);
                    break;
                case ChatViewRecyclerTypes.INTERACTION_STATUS /* 19 */:
                    str20 = (String) this.nullableStringAdapter.fromJson(reader);
                    break;
                case 20:
                    str21 = (String) this.nullableStringAdapter.fromJson(reader);
                    break;
                case ChatViewRecyclerTypes.FLAGGED_MESSAGE_EMBED /* 21 */:
                    jsonLogicBoolean = (JsonLogicBoolean) this.nullableJsonLogicBooleanAdapter.fromJson(reader);
                    break;
                case ChatViewRecyclerTypes.FLAGGED_MESSAGE_ACTION_BAR /* 22 */:
                    jsonLogicBoolean2 = (JsonLogicBoolean) this.nullableJsonLogicBooleanAdapter.fromJson(reader);
                    break;
            }
        }
        reader.y();
        return new InputAddress.Attributes(str, str2, str3, str4, str5, str6, str7, str8, str9, str10, str11, str12, str13, str14, str15, str16, str17, str18, str19, str20, str21, jsonLogicBoolean, jsonLogicBoolean2);
    }

    @Override // com.squareup.moshi.h
    public void toJson(@NotNull t writer, InputAddress.Attributes attributes) {
        Intrinsics.checkNotNullParameter(writer, "writer");
        if (attributes != null) {
            writer.l();
            writer.A0("label");
            this.nullableStringAdapter.toJson(writer, attributes.getLabel());
            writer.A0("editAddressManuallyPrompt");
            this.nullableStringAdapter.toJson(writer, attributes.getEditAddressManuallyPrompt());
            writer.A0("placeholderAutocomplete");
            this.nullableStringAdapter.toJson(writer, attributes.getPlaceholderAutocomplete());
            writer.A0("fieldKeyAddressStreet1");
            this.nullableStringAdapter.toJson(writer, attributes.getFieldKeyAddressStreet1());
            writer.A0("prefillAddressStreet1");
            this.nullableStringAdapter.toJson(writer, attributes.getPrefillAddressStreet1());
            writer.A0("placeholderAddressStreet1");
            this.nullableStringAdapter.toJson(writer, attributes.getPlaceholderAddressStreet1());
            writer.A0("fieldKeyAddressStreet2");
            this.nullableStringAdapter.toJson(writer, attributes.getFieldKeyAddressStreet2());
            writer.A0("prefillAddressStreet2");
            this.nullableStringAdapter.toJson(writer, attributes.getPrefillAddressStreet2());
            writer.A0("placeholderAddressStreet2");
            this.nullableStringAdapter.toJson(writer, attributes.getPlaceholderAddressStreet2());
            writer.A0("fieldKeyAddressCity");
            this.nullableStringAdapter.toJson(writer, attributes.getFieldKeyAddressCity());
            writer.A0("prefillAddressCity");
            this.nullableStringAdapter.toJson(writer, attributes.getPrefillAddressCity());
            writer.A0("placeholderAddressCity");
            this.nullableStringAdapter.toJson(writer, attributes.getPlaceholderAddressCity());
            writer.A0("fieldKeyAddressSubdivision");
            this.nullableStringAdapter.toJson(writer, attributes.getFieldKeyAddressSubdivision());
            writer.A0("prefillAddressSubdivision");
            this.nullableStringAdapter.toJson(writer, attributes.getPrefillAddressSubdivision());
            writer.A0("placeholderAddressSubdivision");
            this.nullableStringAdapter.toJson(writer, attributes.getPlaceholderAddressSubdivision());
            writer.A0("placeholderAddressSubdivisionUs");
            this.nullableStringAdapter.toJson(writer, attributes.getPlaceholderAddressSubdivisionUs());
            writer.A0("fieldKeyAddressPostalCode");
            this.nullableStringAdapter.toJson(writer, attributes.getFieldKeyAddressPostalCode());
            writer.A0("prefillAddressPostalCode");
            this.nullableStringAdapter.toJson(writer, attributes.getPrefillAddressPostalCode());
            writer.A0("placeholderAddressPostalCode");
            this.nullableStringAdapter.toJson(writer, attributes.getPlaceholderAddressPostalCode());
            writer.A0("placeholderAddressPostalCodeUs");
            this.nullableStringAdapter.toJson(writer, attributes.getPlaceholderAddressPostalCodeUs());
            writer.A0("selectedCountryCode");
            this.nullableStringAdapter.toJson(writer, attributes.getSelectedCountryCode());
            writer.A0(ViewProps.HIDDEN);
            this.nullableJsonLogicBooleanAdapter.toJson(writer, attributes.getHidden());
            writer.A0("disabled");
            this.nullableJsonLogicBooleanAdapter.toJson(writer, attributes.getDisabled());
            writer.E();
            return;
        }
        throw new NullPointerException("value_ was null! Wrap in .nullSafe() to write nullable values.");
    }
}
