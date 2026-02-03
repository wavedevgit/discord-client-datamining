package com.withpersona.sdk2.inquiry.network.dto;

import com.squareup.moshi.h;
import com.squareup.moshi.m;
import com.squareup.moshi.t;
import com.squareup.moshi.w;
import com.withpersona.sdk2.inquiry.network.dto.NextStep;
import kotlin.Metadata;
import kotlin.collections.x0;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000<\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0005\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\u000f\u0012\u0006\u0010\u0004\u001a\u00020\u0003¢\u0006\u0004\b\u0005\u0010\u0006J\u000f\u0010\b\u001a\u00020\u0007H\u0016¢\u0006\u0004\b\b\u0010\tJ\u0017\u0010\f\u001a\u00020\u00022\u0006\u0010\u000b\u001a\u00020\nH\u0016¢\u0006\u0004\b\f\u0010\rJ!\u0010\u0012\u001a\u00020\u00112\u0006\u0010\u000f\u001a\u00020\u000e2\b\u0010\u0010\u001a\u0004\u0018\u00010\u0002H\u0016¢\u0006\u0004\b\u0012\u0010\u0013R\u0014\u0010\u0015\u001a\u00020\u00148\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0015\u0010\u0016R\u001c\u0010\u0017\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u00070\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0017\u0010\u0018¨\u0006\u0019"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/NextStep_Ui_PromptPageJsonAdapter;", "Lcom/squareup/moshi/h;", "Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Ui$PromptPage;", "Lcom/squareup/moshi/w;", "moshi", "<init>", "(Lcom/squareup/moshi/w;)V", "", "toString", "()Ljava/lang/String;", "Lcom/squareup/moshi/m;", "reader", "fromJson", "(Lcom/squareup/moshi/m;)Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Ui$PromptPage;", "Lcom/squareup/moshi/t;", "writer", "value_", "", "toJson", "(Lcom/squareup/moshi/t;Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Ui$PromptPage;)V", "Lcom/squareup/moshi/m$b;", "options", "Lcom/squareup/moshi/m$b;", "nullableStringAdapter", "Lcom/squareup/moshi/h;", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class NextStep_Ui_PromptPageJsonAdapter extends h {
    @NotNull
    private final h nullableStringAdapter;
    @NotNull
    private final m.b options;

    public NextStep_Ui_PromptPageJsonAdapter(@NotNull w moshi) {
        Intrinsics.checkNotNullParameter(moshi, "moshi");
        m.b a10 = m.b.a("gpsPermissionsBtnCancel", "gpsPermissionsBtnContinueMobile", "gpsDeviceFeatureBtnContinueMobile", "gpsPermissionsPrompt", "gpsPermissionsTitle", "gpsFeaturePrompt", "gpsFeatureTitle");
        Intrinsics.checkNotNullExpressionValue(a10, "of(...)");
        this.options = a10;
        h f10 = moshi.f(String.class, x0.d(), "gpsPermissionsBtnCancel");
        Intrinsics.checkNotNullExpressionValue(f10, "adapter(...)");
        this.nullableStringAdapter = f10;
    }

    @NotNull
    public String toString() {
        StringBuilder sb2 = new StringBuilder(44);
        sb2.append("GeneratedJsonAdapter(");
        sb2.append("NextStep.Ui.PromptPage");
        sb2.append(')');
        return sb2.toString();
    }

    @Override // com.squareup.moshi.h
    @NotNull
    public NextStep.Ui.PromptPage fromJson(@NotNull m reader) {
        Intrinsics.checkNotNullParameter(reader, "reader");
        reader.r();
        String str = null;
        String str2 = null;
        String str3 = null;
        String str4 = null;
        String str5 = null;
        String str6 = null;
        String str7 = null;
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
            }
        }
        reader.y();
        return new NextStep.Ui.PromptPage(str, str2, str3, str4, str5, str6, str7);
    }

    @Override // com.squareup.moshi.h
    public void toJson(@NotNull t writer, NextStep.Ui.PromptPage promptPage) {
        Intrinsics.checkNotNullParameter(writer, "writer");
        if (promptPage != null) {
            writer.l();
            writer.A0("gpsPermissionsBtnCancel");
            this.nullableStringAdapter.toJson(writer, promptPage.getGpsPermissionsBtnCancel());
            writer.A0("gpsPermissionsBtnContinueMobile");
            this.nullableStringAdapter.toJson(writer, promptPage.getGpsPermissionsAllowButtonText());
            writer.A0("gpsDeviceFeatureBtnContinueMobile");
            this.nullableStringAdapter.toJson(writer, promptPage.getGpsFeatureTurnOnText());
            writer.A0("gpsPermissionsPrompt");
            this.nullableStringAdapter.toJson(writer, promptPage.getGpsPermissionsPrompt());
            writer.A0("gpsPermissionsTitle");
            this.nullableStringAdapter.toJson(writer, promptPage.getGpsPermissionsTitle());
            writer.A0("gpsFeaturePrompt");
            this.nullableStringAdapter.toJson(writer, promptPage.getGpsFeaturePrompt());
            writer.A0("gpsFeatureTitle");
            this.nullableStringAdapter.toJson(writer, promptPage.getGpsFeatureTitle());
            writer.E();
            return;
        }
        throw new NullPointerException("value_ was null! Wrap in .nullSafe() to write nullable values.");
    }
}
