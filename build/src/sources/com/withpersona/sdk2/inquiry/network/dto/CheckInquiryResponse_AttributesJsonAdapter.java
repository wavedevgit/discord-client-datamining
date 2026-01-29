package com.withpersona.sdk2.inquiry.network.dto;

import com.squareup.moshi.a0;
import com.squareup.moshi.h;
import com.squareup.moshi.m;
import com.squareup.moshi.t;
import com.squareup.moshi.w;
import com.withpersona.sdk2.inquiry.network.dto.CheckInquiryResponse;
import java.util.Map;
import kotlin.Metadata;
import kotlin.collections.x0;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000T\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010$\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\u000f\u0012\u0006\u0010\u0004\u001a\u00020\u0003¢\u0006\u0004\b\u0005\u0010\u0006J\u000f\u0010\b\u001a\u00020\u0007H\u0016¢\u0006\u0004\b\b\u0010\tJ\u0017\u0010\f\u001a\u00020\u00022\u0006\u0010\u000b\u001a\u00020\nH\u0016¢\u0006\u0004\b\f\u0010\rJ!\u0010\u0012\u001a\u00020\u00112\u0006\u0010\u000f\u001a\u00020\u000e2\b\u0010\u0010\u001a\u0004\u0018\u00010\u0002H\u0016¢\u0006\u0004\b\u0012\u0010\u0013R\u0014\u0010\u0015\u001a\u00020\u00148\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0015\u0010\u0016R\u001c\u0010\u0017\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u00070\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0017\u0010\u0018R\u001a\u0010\u001a\u001a\b\u0012\u0004\u0012\u00020\u00190\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001a\u0010\u0018R(\u0010\u001d\u001a\u0016\u0012\u0012\u0012\u0010\u0012\u0004\u0012\u00020\u0007\u0012\u0004\u0012\u00020\u001c\u0018\u00010\u001b0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001d\u0010\u0018R\u001a\u0010\u001f\u001a\b\u0012\u0004\u0012\u00020\u001e0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001f\u0010\u0018¨\u0006 "}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/CheckInquiryResponse_AttributesJsonAdapter;", "Lcom/squareup/moshi/h;", "Lcom/withpersona/sdk2/inquiry/network/dto/CheckInquiryResponse$Attributes;", "Lcom/squareup/moshi/w;", "moshi", "<init>", "(Lcom/squareup/moshi/w;)V", "", "toString", "()Ljava/lang/String;", "Lcom/squareup/moshi/m;", "reader", "fromJson", "(Lcom/squareup/moshi/m;)Lcom/withpersona/sdk2/inquiry/network/dto/CheckInquiryResponse$Attributes;", "Lcom/squareup/moshi/t;", "writer", "value_", "", "toJson", "(Lcom/squareup/moshi/t;Lcom/withpersona/sdk2/inquiry/network/dto/CheckInquiryResponse$Attributes;)V", "Lcom/squareup/moshi/m$b;", "options", "Lcom/squareup/moshi/m$b;", "nullableStringAdapter", "Lcom/squareup/moshi/h;", "Lcom/withpersona/sdk2/inquiry/network/dto/NextStep;", "nextStepAdapter", "", "Lcom/withpersona/sdk2/inquiry/network/dto/InquiryField;", "nullableMapOfStringInquiryFieldAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/CheckInquiryResponse$WaitForTransitionConfig;", "waitForTransitionConfigAdapter", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class CheckInquiryResponse_AttributesJsonAdapter extends h {
    @NotNull
    private final h nextStepAdapter;
    @NotNull
    private final h nullableMapOfStringInquiryFieldAdapter;
    @NotNull
    private final h nullableStringAdapter;
    @NotNull
    private final m.b options;
    @NotNull
    private final h waitForTransitionConfigAdapter;

    public CheckInquiryResponse_AttributesJsonAdapter(@NotNull w moshi) {
        Intrinsics.checkNotNullParameter(moshi, "moshi");
        m.b a10 = m.b.a("selectedCountryCode", "status", "nextStep", "fields", "waitForTransition", "environment");
        Intrinsics.checkNotNullExpressionValue(a10, "of(...)");
        this.options = a10;
        h f10 = moshi.f(String.class, x0.d(), "selectedCountryCode");
        Intrinsics.checkNotNullExpressionValue(f10, "adapter(...)");
        this.nullableStringAdapter = f10;
        h f11 = moshi.f(NextStep.class, x0.d(), "nextStep");
        Intrinsics.checkNotNullExpressionValue(f11, "adapter(...)");
        this.nextStepAdapter = f11;
        h f12 = moshi.f(a0.j(Map.class, String.class, InquiryField.class), x0.d(), "fields");
        Intrinsics.checkNotNullExpressionValue(f12, "adapter(...)");
        this.nullableMapOfStringInquiryFieldAdapter = f12;
        h f13 = moshi.f(CheckInquiryResponse.WaitForTransitionConfig.class, x0.d(), "waitForTransitionConfig");
        Intrinsics.checkNotNullExpressionValue(f13, "adapter(...)");
        this.waitForTransitionConfigAdapter = f13;
    }

    @NotNull
    public String toString() {
        StringBuilder sb2 = new StringBuilder(53);
        sb2.append("GeneratedJsonAdapter(");
        sb2.append("CheckInquiryResponse.Attributes");
        sb2.append(')');
        return sb2.toString();
    }

    @Override // com.squareup.moshi.h
    @NotNull
    public CheckInquiryResponse.Attributes fromJson(@NotNull m reader) {
        Intrinsics.checkNotNullParameter(reader, "reader");
        reader.r();
        String str = null;
        String str2 = null;
        NextStep nextStep = null;
        Map map = null;
        CheckInquiryResponse.WaitForTransitionConfig waitForTransitionConfig = null;
        String str3 = null;
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
                    nextStep = (NextStep) this.nextStepAdapter.fromJson(reader);
                    if (nextStep != null) {
                        break;
                    } else {
                        throw sm.c.x("nextStep", "nextStep", reader);
                    }
                case 3:
                    map = (Map) this.nullableMapOfStringInquiryFieldAdapter.fromJson(reader);
                    break;
                case 4:
                    waitForTransitionConfig = (CheckInquiryResponse.WaitForTransitionConfig) this.waitForTransitionConfigAdapter.fromJson(reader);
                    if (waitForTransitionConfig != null) {
                        break;
                    } else {
                        throw sm.c.x("waitForTransitionConfig", "waitForTransition", reader);
                    }
                case 5:
                    str3 = (String) this.nullableStringAdapter.fromJson(reader);
                    break;
            }
        }
        reader.y();
        if (nextStep != null) {
            if (waitForTransitionConfig != null) {
                return new CheckInquiryResponse.Attributes(str, str2, nextStep, map, waitForTransitionConfig, str3);
            }
            throw sm.c.o("waitForTransitionConfig", "waitForTransition", reader);
        }
        throw sm.c.o("nextStep", "nextStep", reader);
    }

    @Override // com.squareup.moshi.h
    public void toJson(@NotNull t writer, CheckInquiryResponse.Attributes attributes) {
        Intrinsics.checkNotNullParameter(writer, "writer");
        if (attributes != null) {
            writer.l();
            writer.A0("selectedCountryCode");
            this.nullableStringAdapter.toJson(writer, attributes.getSelectedCountryCode());
            writer.A0("status");
            this.nullableStringAdapter.toJson(writer, attributes.getStatus());
            writer.A0("nextStep");
            this.nextStepAdapter.toJson(writer, attributes.getNextStep());
            writer.A0("fields");
            this.nullableMapOfStringInquiryFieldAdapter.toJson(writer, attributes.getFields());
            writer.A0("waitForTransition");
            this.waitForTransitionConfigAdapter.toJson(writer, attributes.getWaitForTransitionConfig());
            writer.A0("environment");
            this.nullableStringAdapter.toJson(writer, attributes.getEnvironment());
            writer.E();
            return;
        }
        throw new NullPointerException("value_ was null! Wrap in .nullSafe() to write nullable values.");
    }
}
