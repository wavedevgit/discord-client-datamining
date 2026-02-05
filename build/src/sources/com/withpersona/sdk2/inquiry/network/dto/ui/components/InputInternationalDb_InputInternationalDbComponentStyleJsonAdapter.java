package com.withpersona.sdk2.inquiry.network.dto.ui.components;

import com.squareup.moshi.h;
import com.squareup.moshi.m;
import com.squareup.moshi.t;
import com.squareup.moshi.w;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.InputInternationalDb;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.InputSelectComponentStyle;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.InputTextBasedComponentStyle;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.TextBasedComponentStyle;
import kotlin.Metadata;
import kotlin.collections.x0;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000R\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\u000f\u0012\u0006\u0010\u0004\u001a\u00020\u0003¢\u0006\u0004\b\u0005\u0010\u0006J\u000f\u0010\b\u001a\u00020\u0007H\u0016¢\u0006\u0004\b\b\u0010\tJ\u0017\u0010\f\u001a\u00020\u00022\u0006\u0010\u000b\u001a\u00020\nH\u0016¢\u0006\u0004\b\f\u0010\rJ!\u0010\u0012\u001a\u00020\u00112\u0006\u0010\u000f\u001a\u00020\u000e2\b\u0010\u0010\u001a\u0004\u0018\u00010\u0002H\u0016¢\u0006\u0004\b\u0012\u0010\u0013R\u0014\u0010\u0015\u001a\u00020\u00148\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0015\u0010\u0016R\u001c\u0010\u0018\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u00170\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0018\u0010\u0019R\u001c\u0010\u001b\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u001a0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001b\u0010\u0019R\u001c\u0010\u001d\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u001c0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001d\u0010\u0019¨\u0006\u001e"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/InputInternationalDb_InputInternationalDbComponentStyleJsonAdapter;", "Lcom/squareup/moshi/h;", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/InputInternationalDb$InputInternationalDbComponentStyle;", "Lcom/squareup/moshi/w;", "moshi", "<init>", "(Lcom/squareup/moshi/w;)V", "", "toString", "()Ljava/lang/String;", "Lcom/squareup/moshi/m;", "reader", "fromJson", "(Lcom/squareup/moshi/m;)Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/InputInternationalDb$InputInternationalDbComponentStyle;", "Lcom/squareup/moshi/t;", "writer", "value_", "", "toJson", "(Lcom/squareup/moshi/t;Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/InputInternationalDb$InputInternationalDbComponentStyle;)V", "Lcom/squareup/moshi/m$b;", "options", "Lcom/squareup/moshi/m$b;", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/InputSelectComponentStyle;", "nullableInputSelectComponentStyleAdapter", "Lcom/squareup/moshi/h;", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/InputTextBasedComponentStyle;", "nullableInputTextBasedComponentStyleAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/TextBasedComponentStyle;", "nullableTextBasedComponentStyleAdapter", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class InputInternationalDb_InputInternationalDbComponentStyleJsonAdapter extends h {
    @NotNull
    private final h nullableInputSelectComponentStyleAdapter;
    @NotNull
    private final h nullableInputTextBasedComponentStyleAdapter;
    @NotNull
    private final h nullableTextBasedComponentStyleAdapter;
    @NotNull
    private final m.b options;

    public InputInternationalDb_InputInternationalDbComponentStyleJsonAdapter(@NotNull w moshi) {
        Intrinsics.checkNotNullParameter(moshi, "moshi");
        m.b a10 = m.b.a("inputSelectStyle", "inputTextStyle", "textStyle");
        Intrinsics.checkNotNullExpressionValue(a10, "of(...)");
        this.options = a10;
        h f10 = moshi.f(InputSelectComponentStyle.class, x0.d(), "inputSelectStyle");
        Intrinsics.checkNotNullExpressionValue(f10, "adapter(...)");
        this.nullableInputSelectComponentStyleAdapter = f10;
        h f11 = moshi.f(InputTextBasedComponentStyle.class, x0.d(), "inputTextStyle");
        Intrinsics.checkNotNullExpressionValue(f11, "adapter(...)");
        this.nullableInputTextBasedComponentStyleAdapter = f11;
        h f12 = moshi.f(TextBasedComponentStyle.class, x0.d(), "textStyle");
        Intrinsics.checkNotNullExpressionValue(f12, "adapter(...)");
        this.nullableTextBasedComponentStyleAdapter = f12;
    }

    @NotNull
    public String toString() {
        StringBuilder sb2 = new StringBuilder(77);
        sb2.append("GeneratedJsonAdapter(");
        sb2.append("InputInternationalDb.InputInternationalDbComponentStyle");
        sb2.append(')');
        return sb2.toString();
    }

    @Override // com.squareup.moshi.h
    @NotNull
    public InputInternationalDb.InputInternationalDbComponentStyle fromJson(@NotNull m reader) {
        Intrinsics.checkNotNullParameter(reader, "reader");
        reader.s();
        InputSelectComponentStyle inputSelectComponentStyle = null;
        InputTextBasedComponentStyle inputTextBasedComponentStyle = null;
        TextBasedComponentStyle textBasedComponentStyle = null;
        while (reader.hasNext()) {
            int W = reader.W(this.options);
            if (W == -1) {
                reader.E0();
                reader.P();
            } else if (W == 0) {
                inputSelectComponentStyle = (InputSelectComponentStyle) this.nullableInputSelectComponentStyleAdapter.fromJson(reader);
            } else if (W == 1) {
                inputTextBasedComponentStyle = (InputTextBasedComponentStyle) this.nullableInputTextBasedComponentStyleAdapter.fromJson(reader);
            } else if (W == 2) {
                textBasedComponentStyle = (TextBasedComponentStyle) this.nullableTextBasedComponentStyleAdapter.fromJson(reader);
            }
        }
        reader.z();
        return new InputInternationalDb.InputInternationalDbComponentStyle(inputSelectComponentStyle, inputTextBasedComponentStyle, textBasedComponentStyle);
    }

    @Override // com.squareup.moshi.h
    public void toJson(@NotNull t writer, InputInternationalDb.InputInternationalDbComponentStyle inputInternationalDbComponentStyle) {
        Intrinsics.checkNotNullParameter(writer, "writer");
        if (inputInternationalDbComponentStyle != null) {
            writer.k();
            writer.W("inputSelectStyle");
            this.nullableInputSelectComponentStyleAdapter.toJson(writer, inputInternationalDbComponentStyle.getInputSelectStyle());
            writer.W("inputTextStyle");
            this.nullableInputTextBasedComponentStyleAdapter.toJson(writer, inputInternationalDbComponentStyle.getInputTextStyle());
            writer.W("textStyle");
            this.nullableTextBasedComponentStyleAdapter.toJson(writer, inputInternationalDbComponentStyle.getTextStyle());
            writer.E();
            return;
        }
        throw new NullPointerException("value_ was null! Wrap in .nullSafe() to write nullable values.");
    }
}
