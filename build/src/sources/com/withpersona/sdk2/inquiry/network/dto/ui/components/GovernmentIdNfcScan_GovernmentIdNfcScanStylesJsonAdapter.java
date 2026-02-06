package com.withpersona.sdk2.inquiry.network.dto.ui.components;

import com.squareup.moshi.h;
import com.squareup.moshi.m;
import com.squareup.moshi.t;
import com.squareup.moshi.w;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.GovernmentIdNfcScan;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.AttributeStyles;
import kotlin.Metadata;
import kotlin.collections.x0;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000R\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\u000f\u0012\u0006\u0010\u0004\u001a\u00020\u0003¢\u0006\u0004\b\u0005\u0010\u0006J\u000f\u0010\b\u001a\u00020\u0007H\u0016¢\u0006\u0004\b\b\u0010\tJ\u0017\u0010\f\u001a\u00020\u00022\u0006\u0010\u000b\u001a\u00020\nH\u0016¢\u0006\u0004\b\f\u0010\rJ!\u0010\u0012\u001a\u00020\u00112\u0006\u0010\u000f\u001a\u00020\u000e2\b\u0010\u0010\u001a\u0004\u0018\u00010\u0002H\u0016¢\u0006\u0004\b\u0012\u0010\u0013R\u0014\u0010\u0015\u001a\u00020\u00148\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0015\u0010\u0016R\u001c\u0010\u0018\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u00170\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0018\u0010\u0019R\u001c\u0010\u001b\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u001a0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001b\u0010\u0019R\u001c\u0010\u001d\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u001c0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001d\u0010\u0019¨\u0006\u001e"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/GovernmentIdNfcScan_GovernmentIdNfcScanStylesJsonAdapter;", "Lcom/squareup/moshi/h;", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/GovernmentIdNfcScan$GovernmentIdNfcScanStyles;", "Lcom/squareup/moshi/w;", "moshi", "<init>", "(Lcom/squareup/moshi/w;)V", "", "toString", "()Ljava/lang/String;", "Lcom/squareup/moshi/m;", "reader", "fromJson", "(Lcom/squareup/moshi/m;)Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/GovernmentIdNfcScan$GovernmentIdNfcScanStyles;", "Lcom/squareup/moshi/t;", "writer", "value_", "", "toJson", "(Lcom/squareup/moshi/t;Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/GovernmentIdNfcScan$GovernmentIdNfcScanStyles;)V", "Lcom/squareup/moshi/m$b;", "options", "Lcom/squareup/moshi/m$b;", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$GovernmentIdNfcScanPrimaryButtonStyles;", "nullableGovernmentIdNfcScanPrimaryButtonStylesAdapter", "Lcom/squareup/moshi/h;", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$GovernmentIdNfcScanInputTextStyles;", "nullableGovernmentIdNfcScanInputTextStylesAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$GovernmentIdNfcScanInputDateStyles;", "nullableGovernmentIdNfcScanInputDateStylesAdapter", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class GovernmentIdNfcScan_GovernmentIdNfcScanStylesJsonAdapter extends h {
    @NotNull
    private final h nullableGovernmentIdNfcScanInputDateStylesAdapter;
    @NotNull
    private final h nullableGovernmentIdNfcScanInputTextStylesAdapter;
    @NotNull
    private final h nullableGovernmentIdNfcScanPrimaryButtonStylesAdapter;
    @NotNull
    private final m.b options;

    public GovernmentIdNfcScan_GovernmentIdNfcScanStylesJsonAdapter(@NotNull w moshi) {
        Intrinsics.checkNotNullParameter(moshi, "moshi");
        m.b a10 = m.b.a("buttonPrimaryStyle", "inputTextStyle", "inputDateStyle");
        Intrinsics.checkNotNullExpressionValue(a10, "of(...)");
        this.options = a10;
        h f10 = moshi.f(AttributeStyles.GovernmentIdNfcScanPrimaryButtonStyles.class, x0.d(), "buttonPrimaryStyle");
        Intrinsics.checkNotNullExpressionValue(f10, "adapter(...)");
        this.nullableGovernmentIdNfcScanPrimaryButtonStylesAdapter = f10;
        h f11 = moshi.f(AttributeStyles.GovernmentIdNfcScanInputTextStyles.class, x0.d(), "inputTextStyle");
        Intrinsics.checkNotNullExpressionValue(f11, "adapter(...)");
        this.nullableGovernmentIdNfcScanInputTextStylesAdapter = f11;
        h f12 = moshi.f(AttributeStyles.GovernmentIdNfcScanInputDateStyles.class, x0.d(), "inputDateStyle");
        Intrinsics.checkNotNullExpressionValue(f12, "adapter(...)");
        this.nullableGovernmentIdNfcScanInputDateStylesAdapter = f12;
    }

    @NotNull
    public String toString() {
        StringBuilder sb2 = new StringBuilder(67);
        sb2.append("GeneratedJsonAdapter(");
        sb2.append("GovernmentIdNfcScan.GovernmentIdNfcScanStyles");
        sb2.append(')');
        return sb2.toString();
    }

    @Override // com.squareup.moshi.h
    @NotNull
    public GovernmentIdNfcScan.GovernmentIdNfcScanStyles fromJson(@NotNull m reader) {
        Intrinsics.checkNotNullParameter(reader, "reader");
        reader.u();
        AttributeStyles.GovernmentIdNfcScanPrimaryButtonStyles governmentIdNfcScanPrimaryButtonStyles = null;
        AttributeStyles.GovernmentIdNfcScanInputTextStyles governmentIdNfcScanInputTextStyles = null;
        AttributeStyles.GovernmentIdNfcScanInputDateStyles governmentIdNfcScanInputDateStyles = null;
        while (reader.hasNext()) {
            int J = reader.J(this.options);
            if (J == -1) {
                reader.E0();
                reader.S();
            } else if (J == 0) {
                governmentIdNfcScanPrimaryButtonStyles = (AttributeStyles.GovernmentIdNfcScanPrimaryButtonStyles) this.nullableGovernmentIdNfcScanPrimaryButtonStylesAdapter.fromJson(reader);
            } else if (J == 1) {
                governmentIdNfcScanInputTextStyles = (AttributeStyles.GovernmentIdNfcScanInputTextStyles) this.nullableGovernmentIdNfcScanInputTextStylesAdapter.fromJson(reader);
            } else if (J == 2) {
                governmentIdNfcScanInputDateStyles = (AttributeStyles.GovernmentIdNfcScanInputDateStyles) this.nullableGovernmentIdNfcScanInputDateStylesAdapter.fromJson(reader);
            }
        }
        reader.D();
        return new GovernmentIdNfcScan.GovernmentIdNfcScanStyles(governmentIdNfcScanPrimaryButtonStyles, governmentIdNfcScanInputTextStyles, governmentIdNfcScanInputDateStyles);
    }

    @Override // com.squareup.moshi.h
    public void toJson(@NotNull t writer, GovernmentIdNfcScan.GovernmentIdNfcScanStyles governmentIdNfcScanStyles) {
        Intrinsics.checkNotNullParameter(writer, "writer");
        if (governmentIdNfcScanStyles != null) {
            writer.k();
            writer.J("buttonPrimaryStyle");
            this.nullableGovernmentIdNfcScanPrimaryButtonStylesAdapter.toJson(writer, governmentIdNfcScanStyles.getButtonPrimaryStyle());
            writer.J("inputTextStyle");
            this.nullableGovernmentIdNfcScanInputTextStylesAdapter.toJson(writer, governmentIdNfcScanStyles.getInputTextStyle());
            writer.J("inputDateStyle");
            this.nullableGovernmentIdNfcScanInputDateStylesAdapter.toJson(writer, governmentIdNfcScanStyles.getInputDateStyle());
            writer.s();
            return;
        }
        throw new NullPointerException("value_ was null! Wrap in .nullSafe() to write nullable values.");
    }
}
