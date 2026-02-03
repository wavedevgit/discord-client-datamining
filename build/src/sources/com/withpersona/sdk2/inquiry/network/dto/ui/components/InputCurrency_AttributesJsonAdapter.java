package com.withpersona.sdk2.inquiry.network.dto.ui.components;

import com.appsflyer.AppsFlyerProperties;
import com.facebook.react.uimanager.ViewProps;
import com.facebook.react.views.textinput.ReactTextInputShadowNode;
import com.squareup.moshi.h;
import com.squareup.moshi.m;
import com.squareup.moshi.t;
import com.squareup.moshi.w;
import com.withpersona.sdk2.inquiry.network.dto.JsonLogicBoolean;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.InputCurrency;
import kotlin.Metadata;
import kotlin.collections.x0;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000L\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0004\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\u000f\u0012\u0006\u0010\u0004\u001a\u00020\u0003¢\u0006\u0004\b\u0005\u0010\u0006J\u000f\u0010\b\u001a\u00020\u0007H\u0016¢\u0006\u0004\b\b\u0010\tJ\u0017\u0010\f\u001a\u00020\u00022\u0006\u0010\u000b\u001a\u00020\nH\u0016¢\u0006\u0004\b\f\u0010\rJ!\u0010\u0012\u001a\u00020\u00112\u0006\u0010\u000f\u001a\u00020\u000e2\b\u0010\u0010\u001a\u0004\u0018\u00010\u0002H\u0016¢\u0006\u0004\b\u0012\u0010\u0013R\u0014\u0010\u0015\u001a\u00020\u00148\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0015\u0010\u0016R\u001c\u0010\u0018\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u00170\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0018\u0010\u0019R\u001c\u0010\u001a\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u00070\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001a\u0010\u0019R\u001c\u0010\u001c\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u001b0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001c\u0010\u0019¨\u0006\u001d"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/InputCurrency_AttributesJsonAdapter;", "Lcom/squareup/moshi/h;", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/InputCurrency$Attributes;", "Lcom/squareup/moshi/w;", "moshi", "<init>", "(Lcom/squareup/moshi/w;)V", "", "toString", "()Ljava/lang/String;", "Lcom/squareup/moshi/m;", "reader", "fromJson", "(Lcom/squareup/moshi/m;)Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/InputCurrency$Attributes;", "Lcom/squareup/moshi/t;", "writer", "value_", "", "toJson", "(Lcom/squareup/moshi/t;Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/InputCurrency$Attributes;)V", "Lcom/squareup/moshi/m$b;", "options", "Lcom/squareup/moshi/m$b;", "", "nullableNumberAdapter", "Lcom/squareup/moshi/h;", "nullableStringAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/JsonLogicBoolean;", "nullableJsonLogicBooleanAdapter", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class InputCurrency_AttributesJsonAdapter extends h {
    @NotNull
    private final h nullableJsonLogicBooleanAdapter;
    @NotNull
    private final h nullableNumberAdapter;
    @NotNull
    private final h nullableStringAdapter;
    @NotNull
    private final m.b options;

    public InputCurrency_AttributesJsonAdapter(@NotNull w moshi) {
        Intrinsics.checkNotNullParameter(moshi, "moshi");
        m.b a10 = m.b.a("prefill", "label", ReactTextInputShadowNode.PROP_PLACEHOLDER, ViewProps.HIDDEN, "disabled", AppsFlyerProperties.CURRENCY_CODE);
        Intrinsics.checkNotNullExpressionValue(a10, "of(...)");
        this.options = a10;
        h f10 = moshi.f(Number.class, x0.d(), "prefill");
        Intrinsics.checkNotNullExpressionValue(f10, "adapter(...)");
        this.nullableNumberAdapter = f10;
        h f11 = moshi.f(String.class, x0.d(), "label");
        Intrinsics.checkNotNullExpressionValue(f11, "adapter(...)");
        this.nullableStringAdapter = f11;
        h f12 = moshi.f(JsonLogicBoolean.class, x0.d(), ViewProps.HIDDEN);
        Intrinsics.checkNotNullExpressionValue(f12, "adapter(...)");
        this.nullableJsonLogicBooleanAdapter = f12;
    }

    @NotNull
    public String toString() {
        StringBuilder sb2 = new StringBuilder(46);
        sb2.append("GeneratedJsonAdapter(");
        sb2.append("InputCurrency.Attributes");
        sb2.append(')');
        return sb2.toString();
    }

    @Override // com.squareup.moshi.h
    @NotNull
    public InputCurrency.Attributes fromJson(@NotNull m reader) {
        Intrinsics.checkNotNullParameter(reader, "reader");
        reader.r();
        Number number = null;
        String str = null;
        String str2 = null;
        JsonLogicBoolean jsonLogicBoolean = null;
        JsonLogicBoolean jsonLogicBoolean2 = null;
        String str3 = null;
        while (reader.hasNext()) {
            switch (reader.A0(this.options)) {
                case -1:
                    reader.E0();
                    reader.P();
                    break;
                case 0:
                    number = (Number) this.nullableNumberAdapter.fromJson(reader);
                    break;
                case 1:
                    str = (String) this.nullableStringAdapter.fromJson(reader);
                    break;
                case 2:
                    str2 = (String) this.nullableStringAdapter.fromJson(reader);
                    break;
                case 3:
                    jsonLogicBoolean = (JsonLogicBoolean) this.nullableJsonLogicBooleanAdapter.fromJson(reader);
                    break;
                case 4:
                    jsonLogicBoolean2 = (JsonLogicBoolean) this.nullableJsonLogicBooleanAdapter.fromJson(reader);
                    break;
                case 5:
                    str3 = (String) this.nullableStringAdapter.fromJson(reader);
                    break;
            }
        }
        reader.y();
        return new InputCurrency.Attributes(number, str, str2, jsonLogicBoolean, jsonLogicBoolean2, str3);
    }

    @Override // com.squareup.moshi.h
    public void toJson(@NotNull t writer, InputCurrency.Attributes attributes) {
        Intrinsics.checkNotNullParameter(writer, "writer");
        if (attributes != null) {
            writer.l();
            writer.A0("prefill");
            this.nullableNumberAdapter.toJson(writer, attributes.getPrefill());
            writer.A0("label");
            this.nullableStringAdapter.toJson(writer, attributes.getLabel());
            writer.A0(ReactTextInputShadowNode.PROP_PLACEHOLDER);
            this.nullableStringAdapter.toJson(writer, attributes.getPlaceholder());
            writer.A0(ViewProps.HIDDEN);
            this.nullableJsonLogicBooleanAdapter.toJson(writer, attributes.getHidden());
            writer.A0("disabled");
            this.nullableJsonLogicBooleanAdapter.toJson(writer, attributes.getDisabled());
            writer.A0(AppsFlyerProperties.CURRENCY_CODE);
            this.nullableStringAdapter.toJson(writer, attributes.getCurrencyCode());
            writer.E();
            return;
        }
        throw new NullPointerException("value_ was null! Wrap in .nullSafe() to write nullable values.");
    }
}
