package com.withpersona.sdk2.inquiry.network.dto.ui.components;

import com.facebook.react.uimanager.ViewProps;
import com.squareup.moshi.h;
import com.squareup.moshi.m;
import com.squareup.moshi.t;
import com.squareup.moshi.w;
import com.withpersona.sdk2.inquiry.network.dto.JsonLogicBoolean;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.Button;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.VerifyPersonaButton;
import java.lang.reflect.Constructor;
import kotlin.Metadata;
import kotlin.collections.x0;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
import ym.c;
@Metadata(d1 = {"\u0000X\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\u000f\u0012\u0006\u0010\u0004\u001a\u00020\u0003¢\u0006\u0004\b\u0005\u0010\u0006J\u000f\u0010\b\u001a\u00020\u0007H\u0016¢\u0006\u0004\b\b\u0010\tJ\u0017\u0010\f\u001a\u00020\u00022\u0006\u0010\u000b\u001a\u00020\nH\u0016¢\u0006\u0004\b\f\u0010\rJ!\u0010\u0012\u001a\u00020\u00112\u0006\u0010\u000f\u001a\u00020\u000e2\b\u0010\u0010\u001a\u0004\u0018\u00010\u0002H\u0016¢\u0006\u0004\b\u0012\u0010\u0013R\u0014\u0010\u0015\u001a\u00020\u00148\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0015\u0010\u0016R\u001a\u0010\u0017\u001a\b\u0012\u0004\u0012\u00020\u00070\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0017\u0010\u0018R\u001c\u0010\u001a\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u00190\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001a\u0010\u0018R\u001c\u0010\u001b\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u00070\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001b\u0010\u0018R\u001c\u0010\u001d\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u001c0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001d\u0010\u0018R\u001c\u0010\u001f\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u001e0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001f\u0010\u0018R\u001e\u0010!\u001a\n\u0012\u0004\u0012\u00020\u0002\u0018\u00010 8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b!\u0010\"¨\u0006#"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/VerifyPersonaButton_AttributesJsonAdapter;", "Lcom/squareup/moshi/h;", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/VerifyPersonaButton$Attributes;", "Lcom/squareup/moshi/w;", "moshi", "<init>", "(Lcom/squareup/moshi/w;)V", "", "toString", "()Ljava/lang/String;", "Lcom/squareup/moshi/m;", "reader", "fromJson", "(Lcom/squareup/moshi/m;)Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/VerifyPersonaButton$Attributes;", "Lcom/squareup/moshi/t;", "writer", "value_", "", "toJson", "(Lcom/squareup/moshi/t;Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/VerifyPersonaButton$Attributes;)V", "Lcom/squareup/moshi/m$b;", "options", "Lcom/squareup/moshi/m$b;", "stringAdapter", "Lcom/squareup/moshi/h;", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/Button$ButtonType;", "nullableButtonTypeAdapter", "nullableStringAdapter", "", "nullableIntAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/JsonLogicBoolean;", "nullableJsonLogicBooleanAdapter", "Ljava/lang/reflect/Constructor;", "constructorRef", "Ljava/lang/reflect/Constructor;", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class VerifyPersonaButton_AttributesJsonAdapter extends h {
    private volatile Constructor<VerifyPersonaButton.Attributes> constructorRef;
    @NotNull
    private final h nullableButtonTypeAdapter;
    @NotNull
    private final h nullableIntAdapter;
    @NotNull
    private final h nullableJsonLogicBooleanAdapter;
    @NotNull
    private final h nullableStringAdapter;
    @NotNull
    private final m.b options;
    @NotNull
    private final h stringAdapter;

    public VerifyPersonaButton_AttributesJsonAdapter(@NotNull w moshi) {
        Intrinsics.checkNotNullParameter(moshi, "moshi");
        m.b a10 = m.b.a("text", "buttonType", "autoSubmitCountdownText", "autoSubmitIntervalSeconds", "url", ViewProps.HIDDEN, "disabled");
        Intrinsics.checkNotNullExpressionValue(a10, "of(...)");
        this.options = a10;
        h f10 = moshi.f(String.class, x0.d(), "text");
        Intrinsics.checkNotNullExpressionValue(f10, "adapter(...)");
        this.stringAdapter = f10;
        h f11 = moshi.f(Button.ButtonType.class, x0.d(), "buttonType");
        Intrinsics.checkNotNullExpressionValue(f11, "adapter(...)");
        this.nullableButtonTypeAdapter = f11;
        h f12 = moshi.f(String.class, x0.d(), "autoSubmitCountdownText");
        Intrinsics.checkNotNullExpressionValue(f12, "adapter(...)");
        this.nullableStringAdapter = f12;
        h f13 = moshi.f(Integer.class, x0.d(), "autoSubmitIntervalSeconds");
        Intrinsics.checkNotNullExpressionValue(f13, "adapter(...)");
        this.nullableIntAdapter = f13;
        h f14 = moshi.f(JsonLogicBoolean.class, x0.d(), ViewProps.HIDDEN);
        Intrinsics.checkNotNullExpressionValue(f14, "adapter(...)");
        this.nullableJsonLogicBooleanAdapter = f14;
    }

    @NotNull
    public String toString() {
        StringBuilder sb2 = new StringBuilder(52);
        sb2.append("GeneratedJsonAdapter(");
        sb2.append("VerifyPersonaButton.Attributes");
        sb2.append(')');
        return sb2.toString();
    }

    @Override // com.squareup.moshi.h
    @NotNull
    public VerifyPersonaButton.Attributes fromJson(@NotNull m reader) {
        Intrinsics.checkNotNullParameter(reader, "reader");
        reader.s();
        int i10 = -1;
        String str = null;
        Button.ButtonType buttonType = null;
        String str2 = null;
        Integer num = null;
        String str3 = null;
        JsonLogicBoolean jsonLogicBoolean = null;
        JsonLogicBoolean jsonLogicBoolean2 = null;
        while (reader.hasNext()) {
            switch (reader.W(this.options)) {
                case -1:
                    reader.E0();
                    reader.P();
                    break;
                case 0:
                    str = (String) this.stringAdapter.fromJson(reader);
                    if (str != null) {
                        break;
                    } else {
                        throw c.x("text", "text", reader);
                    }
                case 1:
                    buttonType = (Button.ButtonType) this.nullableButtonTypeAdapter.fromJson(reader);
                    break;
                case 2:
                    str2 = (String) this.nullableStringAdapter.fromJson(reader);
                    break;
                case 3:
                    num = (Integer) this.nullableIntAdapter.fromJson(reader);
                    break;
                case 4:
                    str3 = (String) this.nullableStringAdapter.fromJson(reader);
                    break;
                case 5:
                    jsonLogicBoolean = (JsonLogicBoolean) this.nullableJsonLogicBooleanAdapter.fromJson(reader);
                    i10 &= -33;
                    break;
                case 6:
                    jsonLogicBoolean2 = (JsonLogicBoolean) this.nullableJsonLogicBooleanAdapter.fromJson(reader);
                    i10 &= -65;
                    break;
            }
        }
        reader.z();
        if (i10 == -97) {
            JsonLogicBoolean jsonLogicBoolean3 = jsonLogicBoolean2;
            JsonLogicBoolean jsonLogicBoolean4 = jsonLogicBoolean;
            String str4 = str3;
            Integer num2 = num;
            String str5 = str2;
            Button.ButtonType buttonType2 = buttonType;
            String str6 = str;
            if (str6 != null) {
                return new VerifyPersonaButton.Attributes(str6, buttonType2, str5, num2, str4, jsonLogicBoolean4, jsonLogicBoolean3);
            }
            throw c.o("text", "text", reader);
        }
        JsonLogicBoolean jsonLogicBoolean5 = jsonLogicBoolean2;
        JsonLogicBoolean jsonLogicBoolean6 = jsonLogicBoolean;
        String str7 = str3;
        Integer num3 = num;
        String str8 = str2;
        Button.ButtonType buttonType3 = buttonType;
        String str9 = str;
        Constructor<VerifyPersonaButton.Attributes> constructor = this.constructorRef;
        if (constructor == null) {
            constructor = VerifyPersonaButton.Attributes.class.getDeclaredConstructor(String.class, Button.ButtonType.class, String.class, Integer.class, String.class, JsonLogicBoolean.class, JsonLogicBoolean.class, Integer.TYPE, c.f54853c);
            this.constructorRef = constructor;
            Intrinsics.checkNotNullExpressionValue(constructor, "also(...)");
        }
        if (str9 != null) {
            VerifyPersonaButton.Attributes newInstance = constructor.newInstance(str9, buttonType3, str8, num3, str7, jsonLogicBoolean6, jsonLogicBoolean5, Integer.valueOf(i10), null);
            Intrinsics.checkNotNullExpressionValue(newInstance, "newInstance(...)");
            return newInstance;
        }
        throw c.o("text", "text", reader);
    }

    @Override // com.squareup.moshi.h
    public void toJson(@NotNull t writer, VerifyPersonaButton.Attributes attributes) {
        Intrinsics.checkNotNullParameter(writer, "writer");
        if (attributes != null) {
            writer.k();
            writer.W("text");
            this.stringAdapter.toJson(writer, attributes.getText());
            writer.W("buttonType");
            this.nullableButtonTypeAdapter.toJson(writer, attributes.getButtonType());
            writer.W("autoSubmitCountdownText");
            this.nullableStringAdapter.toJson(writer, attributes.getAutoSubmitCountdownText());
            writer.W("autoSubmitIntervalSeconds");
            this.nullableIntAdapter.toJson(writer, attributes.getAutoSubmitIntervalSeconds());
            writer.W("url");
            this.nullableStringAdapter.toJson(writer, attributes.getUrl());
            writer.W(ViewProps.HIDDEN);
            this.nullableJsonLogicBooleanAdapter.toJson(writer, attributes.getHidden());
            writer.W("disabled");
            this.nullableJsonLogicBooleanAdapter.toJson(writer, attributes.getDisabled());
            writer.E();
            return;
        }
        throw new NullPointerException("value_ was null! Wrap in .nullSafe() to write nullable values.");
    }
}
