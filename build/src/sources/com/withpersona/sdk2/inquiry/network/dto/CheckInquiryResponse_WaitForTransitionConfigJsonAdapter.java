package com.withpersona.sdk2.inquiry.network.dto;

import com.squareup.moshi.h;
import com.squareup.moshi.m;
import com.squareup.moshi.t;
import com.squareup.moshi.w;
import com.withpersona.sdk2.inquiry.network.dto.CheckInquiryResponse;
import kotlin.Metadata;
import kotlin.collections.x0;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000L\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\t\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\u000f\u0012\u0006\u0010\u0004\u001a\u00020\u0003¢\u0006\u0004\b\u0005\u0010\u0006J\u000f\u0010\b\u001a\u00020\u0007H\u0016¢\u0006\u0004\b\b\u0010\tJ\u0017\u0010\f\u001a\u00020\u00022\u0006\u0010\u000b\u001a\u00020\nH\u0016¢\u0006\u0004\b\f\u0010\rJ!\u0010\u0012\u001a\u00020\u00112\u0006\u0010\u000f\u001a\u00020\u000e2\b\u0010\u0010\u001a\u0004\u0018\u00010\u0002H\u0016¢\u0006\u0004\b\u0012\u0010\u0013R\u0014\u0010\u0015\u001a\u00020\u00148\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0015\u0010\u0016R\u001c\u0010\u0018\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u00170\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0018\u0010\u0019R\u001a\u0010\u001b\u001a\b\u0012\u0004\u0012\u00020\u001a0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001b\u0010\u0019¨\u0006\u001c"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/CheckInquiryResponse_WaitForTransitionConfigJsonAdapter;", "Lcom/squareup/moshi/h;", "Lcom/withpersona/sdk2/inquiry/network/dto/CheckInquiryResponse$WaitForTransitionConfig;", "Lcom/squareup/moshi/w;", "moshi", "<init>", "(Lcom/squareup/moshi/w;)V", "", "toString", "()Ljava/lang/String;", "Lcom/squareup/moshi/m;", "reader", "fromJson", "(Lcom/squareup/moshi/m;)Lcom/withpersona/sdk2/inquiry/network/dto/CheckInquiryResponse$WaitForTransitionConfig;", "Lcom/squareup/moshi/t;", "writer", "value_", "", "toJson", "(Lcom/squareup/moshi/t;Lcom/withpersona/sdk2/inquiry/network/dto/CheckInquiryResponse$WaitForTransitionConfig;)V", "Lcom/squareup/moshi/m$b;", "options", "Lcom/squareup/moshi/m$b;", "", "nullableLongAdapter", "Lcom/squareup/moshi/h;", "Lcom/withpersona/sdk2/inquiry/network/dto/CheckInquiryResponse$PollingMode;", "pollingModeAdapter", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class CheckInquiryResponse_WaitForTransitionConfigJsonAdapter extends h {
    @NotNull
    private final h nullableLongAdapter;
    @NotNull
    private final m.b options;
    @NotNull
    private final h pollingModeAdapter;

    public CheckInquiryResponse_WaitForTransitionConfigJsonAdapter(@NotNull w moshi) {
        Intrinsics.checkNotNullParameter(moshi, "moshi");
        m.b a10 = m.b.a("intervalMs", "maxAttempts", "pollingMode");
        Intrinsics.checkNotNullExpressionValue(a10, "of(...)");
        this.options = a10;
        h f10 = moshi.f(Long.class, x0.d(), "intervalMs");
        Intrinsics.checkNotNullExpressionValue(f10, "adapter(...)");
        this.nullableLongAdapter = f10;
        h f11 = moshi.f(CheckInquiryResponse.PollingMode.class, x0.d(), "pollingMode");
        Intrinsics.checkNotNullExpressionValue(f11, "adapter(...)");
        this.pollingModeAdapter = f11;
    }

    @NotNull
    public String toString() {
        StringBuilder sb2 = new StringBuilder(66);
        sb2.append("GeneratedJsonAdapter(");
        sb2.append("CheckInquiryResponse.WaitForTransitionConfig");
        sb2.append(')');
        return sb2.toString();
    }

    @Override // com.squareup.moshi.h
    @NotNull
    public CheckInquiryResponse.WaitForTransitionConfig fromJson(@NotNull m reader) {
        Intrinsics.checkNotNullParameter(reader, "reader");
        reader.r();
        Long l10 = null;
        Long l11 = null;
        CheckInquiryResponse.PollingMode pollingMode = null;
        while (reader.hasNext()) {
            int t02 = reader.t0(this.options);
            if (t02 == -1) {
                reader.F0();
                reader.P();
            } else if (t02 == 0) {
                l10 = (Long) this.nullableLongAdapter.fromJson(reader);
            } else if (t02 == 1) {
                l11 = (Long) this.nullableLongAdapter.fromJson(reader);
            } else if (t02 == 2 && (pollingMode = (CheckInquiryResponse.PollingMode) this.pollingModeAdapter.fromJson(reader)) == null) {
                throw tm.c.x("pollingMode", "pollingMode", reader);
            }
        }
        reader.y();
        if (pollingMode != null) {
            return new CheckInquiryResponse.WaitForTransitionConfig(l10, l11, pollingMode);
        }
        throw tm.c.o("pollingMode", "pollingMode", reader);
    }

    @Override // com.squareup.moshi.h
    public void toJson(@NotNull t writer, CheckInquiryResponse.WaitForTransitionConfig waitForTransitionConfig) {
        Intrinsics.checkNotNullParameter(writer, "writer");
        if (waitForTransitionConfig != null) {
            writer.l();
            writer.t0("intervalMs");
            this.nullableLongAdapter.toJson(writer, waitForTransitionConfig.getIntervalMs());
            writer.t0("maxAttempts");
            this.nullableLongAdapter.toJson(writer, waitForTransitionConfig.getMaxAttempts());
            writer.t0("pollingMode");
            this.pollingModeAdapter.toJson(writer, waitForTransitionConfig.getPollingMode());
            writer.E();
            return;
        }
        throw new NullPointerException("value_ was null! Wrap in .nullSafe() to write nullable values.");
    }
}
