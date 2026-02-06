package com.withpersona.sdk2.inquiry.network.dto;

import com.squareup.moshi.h;
import com.squareup.moshi.m;
import com.squareup.moshi.t;
import com.squareup.moshi.w;
import com.withpersona.sdk2.inquiry.network.dto.NextStep;
import com.withpersona.sdk2.inquiry.network.dto.government_id.CapturePageConfig;
import java.lang.reflect.Constructor;
import kotlin.Metadata;
import kotlin.collections.x0;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000R\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u000b\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\u000f\u0012\u0006\u0010\u0004\u001a\u00020\u0003¢\u0006\u0004\b\u0005\u0010\u0006J\u000f\u0010\b\u001a\u00020\u0007H\u0016¢\u0006\u0004\b\b\u0010\tJ\u0017\u0010\f\u001a\u00020\u00022\u0006\u0010\u000b\u001a\u00020\nH\u0016¢\u0006\u0004\b\f\u0010\rJ!\u0010\u0012\u001a\u00020\u00112\u0006\u0010\u000f\u001a\u00020\u000e2\b\u0010\u0010\u001a\u0004\u0018\u00010\u0002H\u0016¢\u0006\u0004\b\u0012\u0010\u0013R\u0014\u0010\u0015\u001a\u00020\u00148\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0015\u0010\u0016R\u001c\u0010\u0018\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u00170\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0018\u0010\u0019R\u001c\u0010\u001b\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u001a0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001b\u0010\u0019R\u001e\u0010\u001d\u001a\n\u0012\u0004\u0012\u00020\u0002\u0018\u00010\u001c8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b\u001d\u0010\u001e¨\u0006\u001f"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/NextStep_GovernmentId_AutoClassificationConfigJsonAdapter;", "Lcom/squareup/moshi/h;", "Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$GovernmentId$AutoClassificationConfig;", "Lcom/squareup/moshi/w;", "moshi", "<init>", "(Lcom/squareup/moshi/w;)V", "", "toString", "()Ljava/lang/String;", "Lcom/squareup/moshi/m;", "reader", "fromJson", "(Lcom/squareup/moshi/m;)Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$GovernmentId$AutoClassificationConfig;", "Lcom/squareup/moshi/t;", "writer", "value_", "", "toJson", "(Lcom/squareup/moshi/t;Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$GovernmentId$AutoClassificationConfig;)V", "Lcom/squareup/moshi/m$b;", "options", "Lcom/squareup/moshi/m$b;", "", "nullableBooleanAdapter", "Lcom/squareup/moshi/h;", "Lcom/withpersona/sdk2/inquiry/network/dto/government_id/CapturePageConfig;", "nullableCapturePageConfigAdapter", "Ljava/lang/reflect/Constructor;", "constructorRef", "Ljava/lang/reflect/Constructor;", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class NextStep_GovernmentId_AutoClassificationConfigJsonAdapter extends h {
    private volatile Constructor<NextStep.GovernmentId.AutoClassificationConfig> constructorRef;
    @NotNull
    private final h nullableBooleanAdapter;
    @NotNull
    private final h nullableCapturePageConfigAdapter;
    @NotNull
    private final m.b options;

    public NextStep_GovernmentId_AutoClassificationConfigJsonAdapter(@NotNull w moshi) {
        Intrinsics.checkNotNullParameter(moshi, "moshi");
        m.b a10 = m.b.a("isEnabled", "extractTextFromImage", "capturePageConfig");
        Intrinsics.checkNotNullExpressionValue(a10, "of(...)");
        this.options = a10;
        h f10 = moshi.f(Boolean.class, x0.d(), "isEnabled");
        Intrinsics.checkNotNullExpressionValue(f10, "adapter(...)");
        this.nullableBooleanAdapter = f10;
        h f11 = moshi.f(CapturePageConfig.class, x0.d(), "capturePageConfig");
        Intrinsics.checkNotNullExpressionValue(f11, "adapter(...)");
        this.nullableCapturePageConfigAdapter = f11;
    }

    @NotNull
    public String toString() {
        StringBuilder sb2 = new StringBuilder(68);
        sb2.append("GeneratedJsonAdapter(");
        sb2.append("NextStep.GovernmentId.AutoClassificationConfig");
        sb2.append(')');
        return sb2.toString();
    }

    @Override // com.squareup.moshi.h
    @NotNull
    public NextStep.GovernmentId.AutoClassificationConfig fromJson(@NotNull m reader) {
        Intrinsics.checkNotNullParameter(reader, "reader");
        reader.u();
        Boolean bool = null;
        Boolean bool2 = null;
        CapturePageConfig capturePageConfig = null;
        int i10 = -1;
        while (reader.hasNext()) {
            int J = reader.J(this.options);
            if (J == -1) {
                reader.E0();
                reader.S();
            } else if (J == 0) {
                bool = (Boolean) this.nullableBooleanAdapter.fromJson(reader);
                i10 &= -2;
            } else if (J == 1) {
                bool2 = (Boolean) this.nullableBooleanAdapter.fromJson(reader);
                i10 &= -3;
            } else if (J == 2) {
                capturePageConfig = (CapturePageConfig) this.nullableCapturePageConfigAdapter.fromJson(reader);
                i10 &= -5;
            }
        }
        reader.D();
        if (i10 == -8) {
            return new NextStep.GovernmentId.AutoClassificationConfig(bool, bool2, capturePageConfig);
        }
        Constructor<NextStep.GovernmentId.AutoClassificationConfig> constructor = this.constructorRef;
        if (constructor == null) {
            constructor = NextStep.GovernmentId.AutoClassificationConfig.class.getDeclaredConstructor(Boolean.class, Boolean.class, CapturePageConfig.class, Integer.TYPE, an.c.f1164c);
            this.constructorRef = constructor;
            Intrinsics.checkNotNullExpressionValue(constructor, "also(...)");
        }
        NextStep.GovernmentId.AutoClassificationConfig newInstance = constructor.newInstance(bool, bool2, capturePageConfig, Integer.valueOf(i10), null);
        Intrinsics.checkNotNullExpressionValue(newInstance, "newInstance(...)");
        return newInstance;
    }

    @Override // com.squareup.moshi.h
    public void toJson(@NotNull t writer, NextStep.GovernmentId.AutoClassificationConfig autoClassificationConfig) {
        Intrinsics.checkNotNullParameter(writer, "writer");
        if (autoClassificationConfig != null) {
            writer.k();
            writer.J("isEnabled");
            this.nullableBooleanAdapter.toJson(writer, autoClassificationConfig.isEnabled());
            writer.J("extractTextFromImage");
            this.nullableBooleanAdapter.toJson(writer, autoClassificationConfig.getExtractTextFromImage());
            writer.J("capturePageConfig");
            this.nullableCapturePageConfigAdapter.toJson(writer, autoClassificationConfig.getCapturePageConfig());
            writer.s();
            return;
        }
        throw new NullPointerException("value_ was null! Wrap in .nullSafe() to write nullable values.");
    }
}
