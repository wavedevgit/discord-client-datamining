package com.withpersona.sdk2.inquiry.network.dto.ui.components;

import com.facebook.react.uimanager.ViewProps;
import com.squareup.moshi.a0;
import com.squareup.moshi.h;
import com.squareup.moshi.m;
import com.squareup.moshi.t;
import com.squareup.moshi.w;
import com.withpersona.sdk2.inquiry.network.dto.JsonLogicBoolean;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.InputRadioGroup;
import java.lang.reflect.Constructor;
import java.util.List;
import kotlin.Metadata;
import kotlin.collections.x0;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
import ym.c;
@Metadata(d1 = {"\u0000T\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\u000f\u0012\u0006\u0010\u0004\u001a\u00020\u0003¢\u0006\u0004\b\u0005\u0010\u0006J\u000f\u0010\b\u001a\u00020\u0007H\u0016¢\u0006\u0004\b\b\u0010\tJ\u0017\u0010\f\u001a\u00020\u00022\u0006\u0010\u000b\u001a\u00020\nH\u0016¢\u0006\u0004\b\f\u0010\rJ!\u0010\u0012\u001a\u00020\u00112\u0006\u0010\u000f\u001a\u00020\u000e2\b\u0010\u0010\u001a\u0004\u0018\u00010\u0002H\u0016¢\u0006\u0004\b\u0012\u0010\u0013R\u0014\u0010\u0015\u001a\u00020\u00148\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0015\u0010\u0016R\u001c\u0010\u0017\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u00070\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0017\u0010\u0018R \u0010\u001b\u001a\u000e\u0012\n\u0012\b\u0012\u0004\u0012\u00020\u001a0\u00190\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001b\u0010\u0018R\u001c\u0010\u001d\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u001c0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001d\u0010\u0018R\u001e\u0010\u001f\u001a\n\u0012\u0004\u0012\u00020\u0002\u0018\u00010\u001e8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b\u001f\u0010 ¨\u0006!"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/InputRadioGroup_AttributesJsonAdapter;", "Lcom/squareup/moshi/h;", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/InputRadioGroup$Attributes;", "Lcom/squareup/moshi/w;", "moshi", "<init>", "(Lcom/squareup/moshi/w;)V", "", "toString", "()Ljava/lang/String;", "Lcom/squareup/moshi/m;", "reader", "fromJson", "(Lcom/squareup/moshi/m;)Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/InputRadioGroup$Attributes;", "Lcom/squareup/moshi/t;", "writer", "value_", "", "toJson", "(Lcom/squareup/moshi/t;Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/InputRadioGroup$Attributes;)V", "Lcom/squareup/moshi/m$b;", "options", "Lcom/squareup/moshi/m$b;", "nullableStringAdapter", "Lcom/squareup/moshi/h;", "", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/OptionWithDescription;", "listOfOptionWithDescriptionAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/JsonLogicBoolean;", "nullableJsonLogicBooleanAdapter", "Ljava/lang/reflect/Constructor;", "constructorRef", "Ljava/lang/reflect/Constructor;", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nInputRadioGroup_AttributesJsonAdapter.kt\nKotlin\n*S Kotlin\n*F\n+ 1 InputRadioGroup_AttributesJsonAdapter.kt\ncom/withpersona/sdk2/inquiry/network/dto/ui/components/InputRadioGroup_AttributesJsonAdapter\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,127:1\n1#2:128\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class InputRadioGroup_AttributesJsonAdapter extends h {
    private volatile Constructor<InputRadioGroup.Attributes> constructorRef;
    @NotNull
    private final h listOfOptionWithDescriptionAdapter;
    @NotNull
    private final h nullableJsonLogicBooleanAdapter;
    @NotNull
    private final h nullableStringAdapter;
    @NotNull
    private final m.b options;

    public InputRadioGroup_AttributesJsonAdapter(@NotNull w moshi) {
        Intrinsics.checkNotNullParameter(moshi, "moshi");
        m.b a10 = m.b.a("prefill", "label", "options", ViewProps.HIDDEN, "disabled");
        Intrinsics.checkNotNullExpressionValue(a10, "of(...)");
        this.options = a10;
        h f10 = moshi.f(String.class, x0.d(), "prefill");
        Intrinsics.checkNotNullExpressionValue(f10, "adapter(...)");
        this.nullableStringAdapter = f10;
        h f11 = moshi.f(a0.j(List.class, OptionWithDescription.class), x0.d(), "options");
        Intrinsics.checkNotNullExpressionValue(f11, "adapter(...)");
        this.listOfOptionWithDescriptionAdapter = f11;
        h f12 = moshi.f(JsonLogicBoolean.class, x0.d(), ViewProps.HIDDEN);
        Intrinsics.checkNotNullExpressionValue(f12, "adapter(...)");
        this.nullableJsonLogicBooleanAdapter = f12;
    }

    @NotNull
    public String toString() {
        StringBuilder sb2 = new StringBuilder(48);
        sb2.append("GeneratedJsonAdapter(");
        sb2.append("InputRadioGroup.Attributes");
        sb2.append(')');
        return sb2.toString();
    }

    @Override // com.squareup.moshi.h
    @NotNull
    public InputRadioGroup.Attributes fromJson(@NotNull m reader) {
        Intrinsics.checkNotNullParameter(reader, "reader");
        reader.s();
        String str = null;
        String str2 = null;
        List list = null;
        JsonLogicBoolean jsonLogicBoolean = null;
        JsonLogicBoolean jsonLogicBoolean2 = null;
        int i10 = -1;
        while (reader.hasNext()) {
            int W = reader.W(this.options);
            if (W == -1) {
                reader.E0();
                reader.P();
            } else if (W == 0) {
                str = (String) this.nullableStringAdapter.fromJson(reader);
            } else if (W == 1) {
                str2 = (String) this.nullableStringAdapter.fromJson(reader);
            } else if (W == 2) {
                list = (List) this.listOfOptionWithDescriptionAdapter.fromJson(reader);
                if (list == null) {
                    throw c.x("options_", "options", reader);
                }
            } else if (W == 3) {
                jsonLogicBoolean = (JsonLogicBoolean) this.nullableJsonLogicBooleanAdapter.fromJson(reader);
                i10 &= -9;
            } else if (W == 4) {
                jsonLogicBoolean2 = (JsonLogicBoolean) this.nullableJsonLogicBooleanAdapter.fromJson(reader);
                i10 &= -17;
            }
        }
        reader.z();
        if (i10 == -25) {
            JsonLogicBoolean jsonLogicBoolean3 = jsonLogicBoolean2;
            JsonLogicBoolean jsonLogicBoolean4 = jsonLogicBoolean;
            List list2 = list;
            String str3 = str2;
            String str4 = str;
            if (list2 != null) {
                return new InputRadioGroup.Attributes(str4, str3, list2, jsonLogicBoolean4, jsonLogicBoolean3);
            }
            throw c.o("options_", "options", reader);
        }
        JsonLogicBoolean jsonLogicBoolean5 = jsonLogicBoolean2;
        JsonLogicBoolean jsonLogicBoolean6 = jsonLogicBoolean;
        List list3 = list;
        String str5 = str2;
        String str6 = str;
        Constructor<InputRadioGroup.Attributes> constructor = this.constructorRef;
        if (constructor == null) {
            constructor = InputRadioGroup.Attributes.class.getDeclaredConstructor(String.class, String.class, List.class, JsonLogicBoolean.class, JsonLogicBoolean.class, Integer.TYPE, c.f54853c);
            this.constructorRef = constructor;
            Intrinsics.checkNotNullExpressionValue(constructor, "also(...)");
        }
        if (list3 != null) {
            InputRadioGroup.Attributes newInstance = constructor.newInstance(str6, str5, list3, jsonLogicBoolean6, jsonLogicBoolean5, Integer.valueOf(i10), null);
            Intrinsics.checkNotNullExpressionValue(newInstance, "newInstance(...)");
            return newInstance;
        }
        throw c.o("options_", "options", reader);
    }

    @Override // com.squareup.moshi.h
    public void toJson(@NotNull t writer, InputRadioGroup.Attributes attributes) {
        Intrinsics.checkNotNullParameter(writer, "writer");
        if (attributes != null) {
            writer.k();
            writer.W("prefill");
            this.nullableStringAdapter.toJson(writer, attributes.getPrefill());
            writer.W("label");
            this.nullableStringAdapter.toJson(writer, attributes.getLabel());
            writer.W("options");
            this.listOfOptionWithDescriptionAdapter.toJson(writer, attributes.getOptions());
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
