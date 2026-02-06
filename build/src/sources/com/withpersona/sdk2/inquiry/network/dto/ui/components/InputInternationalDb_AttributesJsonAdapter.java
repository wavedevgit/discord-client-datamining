package com.withpersona.sdk2.inquiry.network.dto.ui.components;

import an.c;
import com.discord.misc.utilities.chat_view_types.ChatViewRecyclerTypes;
import com.facebook.react.uimanager.ViewProps;
import com.squareup.moshi.a0;
import com.squareup.moshi.h;
import com.squareup.moshi.m;
import com.squareup.moshi.t;
import com.squareup.moshi.w;
import com.withpersona.sdk2.inquiry.network.dto.JsonLogicBoolean;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.InputInternationalDb;
import java.util.List;
import kotlin.Metadata;
import kotlin.collections.x0;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000T\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\u000f\u0012\u0006\u0010\u0004\u001a\u00020\u0003¢\u0006\u0004\b\u0005\u0010\u0006J\u000f\u0010\b\u001a\u00020\u0007H\u0016¢\u0006\u0004\b\b\u0010\tJ\u0017\u0010\f\u001a\u00020\u00022\u0006\u0010\u000b\u001a\u00020\nH\u0016¢\u0006\u0004\b\f\u0010\rJ!\u0010\u0012\u001a\u00020\u00112\u0006\u0010\u000f\u001a\u00020\u000e2\b\u0010\u0010\u001a\u0004\u0018\u00010\u0002H\u0016¢\u0006\u0004\b\u0012\u0010\u0013R\u0014\u0010\u0015\u001a\u00020\u00148\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0015\u0010\u0016R\u001c\u0010\u0017\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u00070\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0017\u0010\u0018R\u001c\u0010\u001a\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u00190\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001a\u0010\u0018R \u0010\u001d\u001a\u000e\u0012\n\u0012\b\u0012\u0004\u0012\u00020\u001c0\u001b0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001d\u0010\u0018R\u001c\u0010\u001f\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u001e0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001f\u0010\u0018¨\u0006 "}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/InputInternationalDb_AttributesJsonAdapter;", "Lcom/squareup/moshi/h;", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/InputInternationalDb$Attributes;", "Lcom/squareup/moshi/w;", "moshi", "<init>", "(Lcom/squareup/moshi/w;)V", "", "toString", "()Ljava/lang/String;", "Lcom/squareup/moshi/m;", "reader", "fromJson", "(Lcom/squareup/moshi/m;)Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/InputInternationalDb$Attributes;", "Lcom/squareup/moshi/t;", "writer", "value_", "", "toJson", "(Lcom/squareup/moshi/t;Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/InputInternationalDb$Attributes;)V", "Lcom/squareup/moshi/m$b;", "options", "Lcom/squareup/moshi/m$b;", "nullableStringAdapter", "Lcom/squareup/moshi/h;", "", "nullableBooleanAdapter", "", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/InputInternationalDb$IdType;", "listOfIdTypeAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/JsonLogicBoolean;", "nullableJsonLogicBooleanAdapter", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class InputInternationalDb_AttributesJsonAdapter extends h {
    @NotNull
    private final h listOfIdTypeAdapter;
    @NotNull
    private final h nullableBooleanAdapter;
    @NotNull
    private final h nullableJsonLogicBooleanAdapter;
    @NotNull
    private final h nullableStringAdapter;
    @NotNull
    private final m.b options;

    public InputInternationalDb_AttributesJsonAdapter(@NotNull w moshi) {
        Intrinsics.checkNotNullParameter(moshi, "moshi");
        m.b a10 = m.b.a("prefillIdbCountry", "prefillIdbType", "prefillIdbValue", "errorIdbCountry", "errorIdbType", "errorIdbValue", "hideCountryIfPrefilled", "hideTypeIfPrefilled", "hideCountryIfSingleChoice", "hideTypeIfSingleChoice", "allowedIdTypes", "label", "labelIdbCountry", "labelIdbType", "labelIdbValue", "placeholderIdbCountry", "placeholderIdbType", "placeholderIdbValue", ViewProps.HIDDEN, "disabled");
        Intrinsics.checkNotNullExpressionValue(a10, "of(...)");
        this.options = a10;
        h f10 = moshi.f(String.class, x0.d(), "prefillIdbCountry");
        Intrinsics.checkNotNullExpressionValue(f10, "adapter(...)");
        this.nullableStringAdapter = f10;
        h f11 = moshi.f(Boolean.class, x0.d(), "hideCountryIfPrefilled");
        Intrinsics.checkNotNullExpressionValue(f11, "adapter(...)");
        this.nullableBooleanAdapter = f11;
        h f12 = moshi.f(a0.j(List.class, InputInternationalDb.IdType.class), x0.d(), "allowedIdTypes");
        Intrinsics.checkNotNullExpressionValue(f12, "adapter(...)");
        this.listOfIdTypeAdapter = f12;
        h f13 = moshi.f(JsonLogicBoolean.class, x0.d(), ViewProps.HIDDEN);
        Intrinsics.checkNotNullExpressionValue(f13, "adapter(...)");
        this.nullableJsonLogicBooleanAdapter = f13;
    }

    @NotNull
    public String toString() {
        StringBuilder sb2 = new StringBuilder(53);
        sb2.append("GeneratedJsonAdapter(");
        sb2.append("InputInternationalDb.Attributes");
        sb2.append(')');
        return sb2.toString();
    }

    @Override // com.squareup.moshi.h
    @NotNull
    public InputInternationalDb.Attributes fromJson(@NotNull m reader) {
        Intrinsics.checkNotNullParameter(reader, "reader");
        reader.u();
        String str = null;
        String str2 = null;
        String str3 = null;
        String str4 = null;
        String str5 = null;
        String str6 = null;
        Boolean bool = null;
        Boolean bool2 = null;
        Boolean bool3 = null;
        Boolean bool4 = null;
        List list = null;
        String str7 = null;
        String str8 = null;
        String str9 = null;
        String str10 = null;
        String str11 = null;
        String str12 = null;
        String str13 = null;
        JsonLogicBoolean jsonLogicBoolean = null;
        JsonLogicBoolean jsonLogicBoolean2 = null;
        while (reader.hasNext()) {
            switch (reader.J(this.options)) {
                case -1:
                    reader.E0();
                    reader.S();
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
                    bool = (Boolean) this.nullableBooleanAdapter.fromJson(reader);
                    break;
                case 7:
                    bool2 = (Boolean) this.nullableBooleanAdapter.fromJson(reader);
                    break;
                case 8:
                    bool3 = (Boolean) this.nullableBooleanAdapter.fromJson(reader);
                    break;
                case 9:
                    bool4 = (Boolean) this.nullableBooleanAdapter.fromJson(reader);
                    break;
                case 10:
                    list = (List) this.listOfIdTypeAdapter.fromJson(reader);
                    if (list != null) {
                        break;
                    } else {
                        throw c.x("allowedIdTypes", "allowedIdTypes", reader);
                    }
                case 11:
                    str7 = (String) this.nullableStringAdapter.fromJson(reader);
                    break;
                case 12:
                    str8 = (String) this.nullableStringAdapter.fromJson(reader);
                    break;
                case 13:
                    str9 = (String) this.nullableStringAdapter.fromJson(reader);
                    break;
                case 14:
                    str10 = (String) this.nullableStringAdapter.fromJson(reader);
                    break;
                case 15:
                    str11 = (String) this.nullableStringAdapter.fromJson(reader);
                    break;
                case 16:
                    str12 = (String) this.nullableStringAdapter.fromJson(reader);
                    break;
                case 17:
                    str13 = (String) this.nullableStringAdapter.fromJson(reader);
                    break;
                case ChatViewRecyclerTypes.EPHEMERAL_INDICATION /* 18 */:
                    jsonLogicBoolean = (JsonLogicBoolean) this.nullableJsonLogicBooleanAdapter.fromJson(reader);
                    break;
                case ChatViewRecyclerTypes.INTERACTION_STATUS /* 19 */:
                    jsonLogicBoolean2 = (JsonLogicBoolean) this.nullableJsonLogicBooleanAdapter.fromJson(reader);
                    break;
            }
        }
        reader.D();
        if (list != null) {
            return new InputInternationalDb.Attributes(str, str2, str3, str4, str5, str6, bool, bool2, bool3, bool4, list, str7, str8, str9, str10, str11, str12, str13, jsonLogicBoolean, jsonLogicBoolean2);
        }
        throw c.o("allowedIdTypes", "allowedIdTypes", reader);
    }

    @Override // com.squareup.moshi.h
    public void toJson(@NotNull t writer, InputInternationalDb.Attributes attributes) {
        Intrinsics.checkNotNullParameter(writer, "writer");
        if (attributes != null) {
            writer.k();
            writer.J("prefillIdbCountry");
            this.nullableStringAdapter.toJson(writer, attributes.getPrefillIdbCountry());
            writer.J("prefillIdbType");
            this.nullableStringAdapter.toJson(writer, attributes.getPrefillIdbType());
            writer.J("prefillIdbValue");
            this.nullableStringAdapter.toJson(writer, attributes.getPrefillIdbValue());
            writer.J("errorIdbCountry");
            this.nullableStringAdapter.toJson(writer, attributes.getErrorIdbCountry());
            writer.J("errorIdbType");
            this.nullableStringAdapter.toJson(writer, attributes.getErrorIdbType());
            writer.J("errorIdbValue");
            this.nullableStringAdapter.toJson(writer, attributes.getErrorIdbValue());
            writer.J("hideCountryIfPrefilled");
            this.nullableBooleanAdapter.toJson(writer, attributes.getHideCountryIfPrefilled());
            writer.J("hideTypeIfPrefilled");
            this.nullableBooleanAdapter.toJson(writer, attributes.getHideTypeIfPrefilled());
            writer.J("hideCountryIfSingleChoice");
            this.nullableBooleanAdapter.toJson(writer, attributes.getHideCountryIfSingleChoice());
            writer.J("hideTypeIfSingleChoice");
            this.nullableBooleanAdapter.toJson(writer, attributes.getHideTypeIfSingleChoice());
            writer.J("allowedIdTypes");
            this.listOfIdTypeAdapter.toJson(writer, attributes.getAllowedIdTypes());
            writer.J("label");
            this.nullableStringAdapter.toJson(writer, attributes.getLabel());
            writer.J("labelIdbCountry");
            this.nullableStringAdapter.toJson(writer, attributes.getLabelIdbCountry());
            writer.J("labelIdbType");
            this.nullableStringAdapter.toJson(writer, attributes.getLabelIdbType());
            writer.J("labelIdbValue");
            this.nullableStringAdapter.toJson(writer, attributes.getLabelIdbValue());
            writer.J("placeholderIdbCountry");
            this.nullableStringAdapter.toJson(writer, attributes.getPlaceholderIdbCountry());
            writer.J("placeholderIdbType");
            this.nullableStringAdapter.toJson(writer, attributes.getPlaceholderIdbType());
            writer.J("placeholderIdbValue");
            this.nullableStringAdapter.toJson(writer, attributes.getPlaceholderIdbValue());
            writer.J(ViewProps.HIDDEN);
            this.nullableJsonLogicBooleanAdapter.toJson(writer, attributes.getHidden());
            writer.J("disabled");
            this.nullableJsonLogicBooleanAdapter.toJson(writer, attributes.getDisabled());
            writer.s();
            return;
        }
        throw new NullPointerException("value_ was null! Wrap in .nullSafe() to write nullable values.");
    }
}
