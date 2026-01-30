package com.withpersona.sdk2.inquiry.network.dto;

import com.facebook.react.devsupport.StackTraceHelper;
import com.squareup.moshi.h;
import com.squareup.moshi.m;
import com.squareup.moshi.t;
import com.squareup.moshi.w;
import com.withpersona.sdk2.inquiry.network.dto.NextStep;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.StepStyles;
import java.lang.reflect.Constructor;
import kotlin.Metadata;
import kotlin.collections.x0;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000P\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\u000f\u0012\u0006\u0010\u0004\u001a\u00020\u0003¢\u0006\u0004\b\u0005\u0010\u0006J\u000f\u0010\b\u001a\u00020\u0007H\u0016¢\u0006\u0004\b\b\u0010\tJ\u0017\u0010\f\u001a\u00020\u00022\u0006\u0010\u000b\u001a\u00020\nH\u0016¢\u0006\u0004\b\f\u0010\rJ!\u0010\u0012\u001a\u00020\u00112\u0006\u0010\u000f\u001a\u00020\u000e2\b\u0010\u0010\u001a\u0004\u0018\u00010\u0002H\u0016¢\u0006\u0004\b\u0012\u0010\u0013R\u0014\u0010\u0015\u001a\u00020\u00148\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0015\u0010\u0016R\u001a\u0010\u0017\u001a\b\u0012\u0004\u0012\u00020\u00070\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0017\u0010\u0018R\u001a\u0010\u001a\u001a\b\u0012\u0004\u0012\u00020\u00190\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001a\u0010\u0018R\u001c\u0010\u001c\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u001b0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001c\u0010\u0018R\u001e\u0010\u001e\u001a\n\u0012\u0004\u0012\u00020\u0002\u0018\u00010\u001d8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b\u001e\u0010\u001f¨\u0006 "}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/NextStep_UiJsonAdapter;", "Lcom/squareup/moshi/h;", "Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Ui;", "Lcom/squareup/moshi/w;", "moshi", "<init>", "(Lcom/squareup/moshi/w;)V", "", "toString", "()Ljava/lang/String;", "Lcom/squareup/moshi/m;", "reader", "fromJson", "(Lcom/squareup/moshi/m;)Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Ui;", "Lcom/squareup/moshi/t;", "writer", "value_", "", "toJson", "(Lcom/squareup/moshi/t;Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Ui;)V", "Lcom/squareup/moshi/m$b;", "options", "Lcom/squareup/moshi/m$b;", "stringAdapter", "Lcom/squareup/moshi/h;", "Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Ui$Config;", "configAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StepStyles$UiStepStyle;", "nullableUiStepStyleAdapter", "Ljava/lang/reflect/Constructor;", "constructorRef", "Ljava/lang/reflect/Constructor;", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class NextStep_UiJsonAdapter extends h {
    @NotNull
    private final h configAdapter;
    private volatile Constructor<NextStep.Ui> constructorRef;
    @NotNull
    private final h nullableUiStepStyleAdapter;
    @NotNull
    private final m.b options;
    @NotNull
    private final h stringAdapter;

    public NextStep_UiJsonAdapter(@NotNull w moshi) {
        Intrinsics.checkNotNullParameter(moshi, "moshi");
        m.b a10 = m.b.a(StackTraceHelper.NAME_KEY, "config", "styles");
        Intrinsics.checkNotNullExpressionValue(a10, "of(...)");
        this.options = a10;
        h f10 = moshi.f(String.class, x0.d(), StackTraceHelper.NAME_KEY);
        Intrinsics.checkNotNullExpressionValue(f10, "adapter(...)");
        this.stringAdapter = f10;
        h f11 = moshi.f(NextStep.Ui.Config.class, x0.d(), "config");
        Intrinsics.checkNotNullExpressionValue(f11, "adapter(...)");
        this.configAdapter = f11;
        h f12 = moshi.f(StepStyles.UiStepStyle.class, x0.d(), "styles");
        Intrinsics.checkNotNullExpressionValue(f12, "adapter(...)");
        this.nullableUiStepStyleAdapter = f12;
    }

    @NotNull
    public String toString() {
        StringBuilder sb2 = new StringBuilder(33);
        sb2.append("GeneratedJsonAdapter(");
        sb2.append("NextStep.Ui");
        sb2.append(')');
        return sb2.toString();
    }

    @Override // com.squareup.moshi.h
    @NotNull
    public NextStep.Ui fromJson(@NotNull m reader) {
        Intrinsics.checkNotNullParameter(reader, "reader");
        reader.r();
        String str = null;
        NextStep.Ui.Config config = null;
        StepStyles.UiStepStyle uiStepStyle = null;
        int i10 = -1;
        while (reader.hasNext()) {
            int A0 = reader.A0(this.options);
            if (A0 == -1) {
                reader.E0();
                reader.P();
            } else if (A0 == 0) {
                str = (String) this.stringAdapter.fromJson(reader);
                if (str == null) {
                    throw sm.c.x(StackTraceHelper.NAME_KEY, StackTraceHelper.NAME_KEY, reader);
                }
            } else if (A0 == 1) {
                config = (NextStep.Ui.Config) this.configAdapter.fromJson(reader);
                if (config == null) {
                    throw sm.c.x("config", "config", reader);
                }
            } else if (A0 == 2) {
                uiStepStyle = (StepStyles.UiStepStyle) this.nullableUiStepStyleAdapter.fromJson(reader);
                i10 = -5;
            }
        }
        reader.y();
        if (i10 == -5) {
            if (str != null) {
                if (config != null) {
                    return new NextStep.Ui(str, config, uiStepStyle);
                }
                throw sm.c.o("config", "config", reader);
            }
            throw sm.c.o(StackTraceHelper.NAME_KEY, StackTraceHelper.NAME_KEY, reader);
        }
        Constructor<NextStep.Ui> constructor = this.constructorRef;
        if (constructor == null) {
            constructor = NextStep.Ui.class.getDeclaredConstructor(String.class, NextStep.Ui.Config.class, StepStyles.UiStepStyle.class, Integer.TYPE, sm.c.f49097c);
            this.constructorRef = constructor;
            Intrinsics.checkNotNullExpressionValue(constructor, "also(...)");
        }
        if (str != null) {
            if (config != null) {
                NextStep.Ui newInstance = constructor.newInstance(str, config, uiStepStyle, Integer.valueOf(i10), null);
                Intrinsics.checkNotNullExpressionValue(newInstance, "newInstance(...)");
                return newInstance;
            }
            throw sm.c.o("config", "config", reader);
        }
        throw sm.c.o(StackTraceHelper.NAME_KEY, StackTraceHelper.NAME_KEY, reader);
    }

    @Override // com.squareup.moshi.h
    public void toJson(@NotNull t writer, NextStep.Ui ui2) {
        Intrinsics.checkNotNullParameter(writer, "writer");
        if (ui2 != null) {
            writer.l();
            writer.A0(StackTraceHelper.NAME_KEY);
            this.stringAdapter.toJson(writer, ui2.getName());
            writer.A0("config");
            this.configAdapter.toJson(writer, ui2.getConfig());
            writer.A0("styles");
            this.nullableUiStepStyleAdapter.toJson(writer, ui2.getStyles());
            writer.E();
            return;
        }
        throw new NullPointerException("value_ was null! Wrap in .nullSafe() to write nullable values.");
    }
}
