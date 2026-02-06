package com.withpersona.sdk2.inquiry.network.dto.ui.styling;

import com.facebook.react.views.textinput.ReactTextInputShadowNode;
import com.squareup.moshi.h;
import com.squareup.moshi.m;
import com.squareup.moshi.t;
import com.squareup.moshi.w;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.AttributeStyles;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.StyleElements;
import kotlin.Metadata;
import kotlin.collections.x0;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000D\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\u000f\u0012\u0006\u0010\u0004\u001a\u00020\u0003¢\u0006\u0004\b\u0005\u0010\u0006J\u000f\u0010\b\u001a\u00020\u0007H\u0016¢\u0006\u0004\b\b\u0010\tJ\u0017\u0010\f\u001a\u00020\u00022\u0006\u0010\u000b\u001a\u00020\nH\u0016¢\u0006\u0004\b\f\u0010\rJ!\u0010\u0012\u001a\u00020\u00112\u0006\u0010\u000f\u001a\u00020\u000e2\b\u0010\u0010\u001a\u0004\u0018\u00010\u0002H\u0016¢\u0006\u0004\b\u0012\u0010\u0013R\u0014\u0010\u0015\u001a\u00020\u00148\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0015\u0010\u0016R\u001c\u0010\u0018\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u00170\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0018\u0010\u0019¨\u0006\u001a"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles_ComplexTextBasedLineHeightStyleJsonAdapter;", "Lcom/squareup/moshi/h;", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$ComplexTextBasedLineHeightStyle;", "Lcom/squareup/moshi/w;", "moshi", "<init>", "(Lcom/squareup/moshi/w;)V", "", "toString", "()Ljava/lang/String;", "Lcom/squareup/moshi/m;", "reader", "fromJson", "(Lcom/squareup/moshi/m;)Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$ComplexTextBasedLineHeightStyle;", "Lcom/squareup/moshi/t;", "writer", "value_", "", "toJson", "(Lcom/squareup/moshi/t;Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$ComplexTextBasedLineHeightStyle;)V", "Lcom/squareup/moshi/m$b;", "options", "Lcom/squareup/moshi/m$b;", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StyleElements$Measurement;", "nullableMeasurementAdapter", "Lcom/squareup/moshi/h;", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class AttributeStyles_ComplexTextBasedLineHeightStyleJsonAdapter extends h {
    @NotNull
    private final h nullableMeasurementAdapter;
    @NotNull
    private final m.b options;

    public AttributeStyles_ComplexTextBasedLineHeightStyleJsonAdapter(@NotNull w moshi) {
        Intrinsics.checkNotNullParameter(moshi, "moshi");
        m.b a10 = m.b.a("value", ReactTextInputShadowNode.PROP_PLACEHOLDER, "label", "error");
        Intrinsics.checkNotNullExpressionValue(a10, "of(...)");
        this.options = a10;
        h f10 = moshi.f(StyleElements.Measurement.class, x0.d(), "value");
        Intrinsics.checkNotNullExpressionValue(f10, "adapter(...)");
        this.nullableMeasurementAdapter = f10;
    }

    @NotNull
    public String toString() {
        StringBuilder sb2 = new StringBuilder(69);
        sb2.append("GeneratedJsonAdapter(");
        sb2.append("AttributeStyles.ComplexTextBasedLineHeightStyle");
        sb2.append(')');
        return sb2.toString();
    }

    @Override // com.squareup.moshi.h
    @NotNull
    public AttributeStyles.ComplexTextBasedLineHeightStyle fromJson(@NotNull m reader) {
        Intrinsics.checkNotNullParameter(reader, "reader");
        reader.u();
        StyleElements.Measurement measurement = null;
        StyleElements.Measurement measurement2 = null;
        StyleElements.Measurement measurement3 = null;
        StyleElements.Measurement measurement4 = null;
        while (reader.hasNext()) {
            int J = reader.J(this.options);
            if (J == -1) {
                reader.E0();
                reader.S();
            } else if (J == 0) {
                measurement = (StyleElements.Measurement) this.nullableMeasurementAdapter.fromJson(reader);
            } else if (J == 1) {
                measurement2 = (StyleElements.Measurement) this.nullableMeasurementAdapter.fromJson(reader);
            } else if (J == 2) {
                measurement3 = (StyleElements.Measurement) this.nullableMeasurementAdapter.fromJson(reader);
            } else if (J == 3) {
                measurement4 = (StyleElements.Measurement) this.nullableMeasurementAdapter.fromJson(reader);
            }
        }
        reader.D();
        return new AttributeStyles.ComplexTextBasedLineHeightStyle(measurement, measurement2, measurement3, measurement4);
    }

    @Override // com.squareup.moshi.h
    public void toJson(@NotNull t writer, AttributeStyles.ComplexTextBasedLineHeightStyle complexTextBasedLineHeightStyle) {
        Intrinsics.checkNotNullParameter(writer, "writer");
        if (complexTextBasedLineHeightStyle != null) {
            writer.k();
            writer.J("value");
            this.nullableMeasurementAdapter.toJson(writer, complexTextBasedLineHeightStyle.getValue());
            writer.J(ReactTextInputShadowNode.PROP_PLACEHOLDER);
            this.nullableMeasurementAdapter.toJson(writer, complexTextBasedLineHeightStyle.getPlaceholder());
            writer.J("label");
            this.nullableMeasurementAdapter.toJson(writer, complexTextBasedLineHeightStyle.getLabel());
            writer.J("error");
            this.nullableMeasurementAdapter.toJson(writer, complexTextBasedLineHeightStyle.getError());
            writer.s();
            return;
        }
        throw new NullPointerException("value_ was null! Wrap in .nullSafe() to write nullable values.");
    }
}
