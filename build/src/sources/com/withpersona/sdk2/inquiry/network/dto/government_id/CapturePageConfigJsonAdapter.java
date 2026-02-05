package com.withpersona.sdk2.inquiry.network.dto.government_id;

import com.squareup.moshi.h;
import com.squareup.moshi.m;
import com.squareup.moshi.t;
import com.squareup.moshi.w;
import com.withpersona.sdk2.inquiry.network.dto.government_id.CapturePageConfig;
import kotlin.Metadata;
import kotlin.collections.x0;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000P\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\u000f\u0012\u0006\u0010\u0004\u001a\u00020\u0003¢\u0006\u0004\b\u0005\u0010\u0006J\u000f\u0010\b\u001a\u00020\u0007H\u0016¢\u0006\u0004\b\b\u0010\tJ\u0017\u0010\f\u001a\u00020\u00022\u0006\u0010\u000b\u001a\u00020\nH\u0016¢\u0006\u0004\b\f\u0010\rJ!\u0010\u0012\u001a\u00020\u00112\u0006\u0010\u000f\u001a\u00020\u000e2\b\u0010\u0010\u001a\u0004\u0018\u00010\u0002H\u0016¢\u0006\u0004\b\u0012\u0010\u0013R\u0014\u0010\u0015\u001a\u00020\u00148\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0015\u0010\u0016R\u001c\u0010\u0017\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u00070\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0017\u0010\u0018R\u001c\u0010\u001a\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u00190\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001a\u0010\u0018R\u001c\u0010\u001c\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u001b0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001c\u0010\u0018R\u001c\u0010\u001e\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u001d0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001e\u0010\u0018¨\u0006\u001f"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/government_id/CapturePageConfigJsonAdapter;", "Lcom/squareup/moshi/h;", "Lcom/withpersona/sdk2/inquiry/network/dto/government_id/CapturePageConfig;", "Lcom/squareup/moshi/w;", "moshi", "<init>", "(Lcom/squareup/moshi/w;)V", "", "toString", "()Ljava/lang/String;", "Lcom/squareup/moshi/m;", "reader", "fromJson", "(Lcom/squareup/moshi/m;)Lcom/withpersona/sdk2/inquiry/network/dto/government_id/CapturePageConfig;", "Lcom/squareup/moshi/t;", "writer", "value_", "", "toJson", "(Lcom/squareup/moshi/t;Lcom/withpersona/sdk2/inquiry/network/dto/government_id/CapturePageConfig;)V", "Lcom/squareup/moshi/m$b;", "options", "Lcom/squareup/moshi/m$b;", "nullableStringAdapter", "Lcom/squareup/moshi/h;", "Lcom/withpersona/sdk2/inquiry/network/dto/government_id/CapturePageConfig$ManualCaptureConfig;", "nullableManualCaptureConfigAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/government_id/CapturePageConfig$AutoCaptureConfig;", "nullableAutoCaptureConfigAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/government_id/CapturePageConfig$OverlayConfig;", "nullableOverlayConfigAdapter", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class CapturePageConfigJsonAdapter extends h {
    @NotNull
    private final h nullableAutoCaptureConfigAdapter;
    @NotNull
    private final h nullableManualCaptureConfigAdapter;
    @NotNull
    private final h nullableOverlayConfigAdapter;
    @NotNull
    private final h nullableStringAdapter;
    @NotNull
    private final m.b options;

    public CapturePageConfigJsonAdapter(@NotNull w moshi) {
        Intrinsics.checkNotNullParameter(moshi, "moshi");
        m.b a10 = m.b.a("side", "manualCaptureConfig", "autoCaptureConfig", "overlay");
        Intrinsics.checkNotNullExpressionValue(a10, "of(...)");
        this.options = a10;
        h f10 = moshi.f(String.class, x0.d(), "side");
        Intrinsics.checkNotNullExpressionValue(f10, "adapter(...)");
        this.nullableStringAdapter = f10;
        h f11 = moshi.f(CapturePageConfig.ManualCaptureConfig.class, x0.d(), "manualCaptureConfig");
        Intrinsics.checkNotNullExpressionValue(f11, "adapter(...)");
        this.nullableManualCaptureConfigAdapter = f11;
        h f12 = moshi.f(CapturePageConfig.AutoCaptureConfig.class, x0.d(), "autoCaptureConfig");
        Intrinsics.checkNotNullExpressionValue(f12, "adapter(...)");
        this.nullableAutoCaptureConfigAdapter = f12;
        h f13 = moshi.f(CapturePageConfig.OverlayConfig.class, x0.d(), "overlay");
        Intrinsics.checkNotNullExpressionValue(f13, "adapter(...)");
        this.nullableOverlayConfigAdapter = f13;
    }

    @NotNull
    public String toString() {
        StringBuilder sb2 = new StringBuilder(39);
        sb2.append("GeneratedJsonAdapter(");
        sb2.append("CapturePageConfig");
        sb2.append(')');
        return sb2.toString();
    }

    @Override // com.squareup.moshi.h
    @NotNull
    public CapturePageConfig fromJson(@NotNull m reader) {
        Intrinsics.checkNotNullParameter(reader, "reader");
        reader.s();
        String str = null;
        CapturePageConfig.ManualCaptureConfig manualCaptureConfig = null;
        CapturePageConfig.AutoCaptureConfig autoCaptureConfig = null;
        CapturePageConfig.OverlayConfig overlayConfig = null;
        while (reader.hasNext()) {
            int W = reader.W(this.options);
            if (W == -1) {
                reader.E0();
                reader.P();
            } else if (W == 0) {
                str = (String) this.nullableStringAdapter.fromJson(reader);
            } else if (W == 1) {
                manualCaptureConfig = (CapturePageConfig.ManualCaptureConfig) this.nullableManualCaptureConfigAdapter.fromJson(reader);
            } else if (W == 2) {
                autoCaptureConfig = (CapturePageConfig.AutoCaptureConfig) this.nullableAutoCaptureConfigAdapter.fromJson(reader);
            } else if (W == 3) {
                overlayConfig = (CapturePageConfig.OverlayConfig) this.nullableOverlayConfigAdapter.fromJson(reader);
            }
        }
        reader.z();
        return new CapturePageConfig(str, manualCaptureConfig, autoCaptureConfig, overlayConfig);
    }

    @Override // com.squareup.moshi.h
    public void toJson(@NotNull t writer, CapturePageConfig capturePageConfig) {
        Intrinsics.checkNotNullParameter(writer, "writer");
        if (capturePageConfig != null) {
            writer.k();
            writer.W("side");
            this.nullableStringAdapter.toJson(writer, capturePageConfig.getSide());
            writer.W("manualCaptureConfig");
            this.nullableManualCaptureConfigAdapter.toJson(writer, capturePageConfig.getManualCaptureConfig());
            writer.W("autoCaptureConfig");
            this.nullableAutoCaptureConfigAdapter.toJson(writer, capturePageConfig.getAutoCaptureConfig());
            writer.W("overlay");
            this.nullableOverlayConfigAdapter.toJson(writer, capturePageConfig.getOverlay());
            writer.E();
            return;
        }
        throw new NullPointerException("value_ was null! Wrap in .nullSafe() to write nullable values.");
    }
}
