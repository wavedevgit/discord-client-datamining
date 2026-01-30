package com.withpersona.sdk2.inquiry.network.dto;

import com.squareup.moshi.a0;
import com.squareup.moshi.h;
import com.squareup.moshi.m;
import com.squareup.moshi.t;
import com.squareup.moshi.w;
import com.withpersona.sdk2.inquiry.network.core.dto.UiComponentError;
import com.withpersona.sdk2.inquiry.network.dto.NextStep;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.UiComponentConfig;
import java.lang.reflect.Constructor;
import java.util.List;
import kotlin.Metadata;
import kotlin.collections.x0;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000b\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u000b\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\u000f\u0012\u0006\u0010\u0004\u001a\u00020\u0003¢\u0006\u0004\b\u0005\u0010\u0006J\u000f\u0010\b\u001a\u00020\u0007H\u0016¢\u0006\u0004\b\b\u0010\tJ\u0017\u0010\f\u001a\u00020\u00022\u0006\u0010\u000b\u001a\u00020\nH\u0016¢\u0006\u0004\b\f\u0010\rJ!\u0010\u0012\u001a\u00020\u00112\u0006\u0010\u000f\u001a\u00020\u000e2\b\u0010\u0010\u001a\u0004\u0018\u00010\u0002H\u0016¢\u0006\u0004\b\u0012\u0010\u0013R\u0014\u0010\u0015\u001a\u00020\u00148\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0015\u0010\u0016R\"\u0010\u0019\u001a\u0010\u0012\f\u0012\n\u0012\u0004\u0012\u00020\u0018\u0018\u00010\u00170\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0019\u0010\u001aR\u001c\u0010\u001c\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u001b0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001c\u0010\u001aR\u001c\u0010\u001e\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u001d0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001e\u0010\u001aR\"\u0010 \u001a\u0010\u0012\f\u0012\n\u0012\u0004\u0012\u00020\u001f\u0018\u00010\u00170\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b \u0010\u001aR\u001e\u0010\"\u001a\n\u0012\u0004\u0012\u00020\u0002\u0018\u00010!8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b\"\u0010#¨\u0006$"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/NextStep_Ui_ConfigJsonAdapter;", "Lcom/squareup/moshi/h;", "Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Ui$Config;", "Lcom/squareup/moshi/w;", "moshi", "<init>", "(Lcom/squareup/moshi/w;)V", "", "toString", "()Ljava/lang/String;", "Lcom/squareup/moshi/m;", "reader", "fromJson", "(Lcom/squareup/moshi/m;)Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Ui$Config;", "Lcom/squareup/moshi/t;", "writer", "value_", "", "toJson", "(Lcom/squareup/moshi/t;Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Ui$Config;)V", "Lcom/squareup/moshi/m$b;", "options", "Lcom/squareup/moshi/m$b;", "", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/UiComponentConfig;", "nullableListOfUiComponentConfigAdapter", "Lcom/squareup/moshi/h;", "", "nullableBooleanAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Ui$Localizations;", "nullableLocalizationsAdapter", "Lcom/withpersona/sdk2/inquiry/network/core/dto/UiComponentError;", "nullableListOfUiComponentErrorAdapter", "Ljava/lang/reflect/Constructor;", "constructorRef", "Ljava/lang/reflect/Constructor;", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class NextStep_Ui_ConfigJsonAdapter extends h {
    private volatile Constructor<NextStep.Ui.Config> constructorRef;
    @NotNull
    private final h nullableBooleanAdapter;
    @NotNull
    private final h nullableListOfUiComponentConfigAdapter;
    @NotNull
    private final h nullableListOfUiComponentErrorAdapter;
    @NotNull
    private final h nullableLocalizationsAdapter;
    @NotNull
    private final m.b options;

    public NextStep_Ui_ConfigJsonAdapter(@NotNull w moshi) {
        Intrinsics.checkNotNullParameter(moshi, "moshi");
        m.b a10 = m.b.a("components", "backStepEnabled", "cancelButtonEnabled", "terminal", "localizations", "serverComponentErrors");
        Intrinsics.checkNotNullExpressionValue(a10, "of(...)");
        this.options = a10;
        h f10 = moshi.f(a0.j(List.class, UiComponentConfig.class), x0.d(), "components");
        Intrinsics.checkNotNullExpressionValue(f10, "adapter(...)");
        this.nullableListOfUiComponentConfigAdapter = f10;
        h f11 = moshi.f(Boolean.class, x0.d(), "backStepEnabled");
        Intrinsics.checkNotNullExpressionValue(f11, "adapter(...)");
        this.nullableBooleanAdapter = f11;
        h f12 = moshi.f(NextStep.Ui.Localizations.class, x0.d(), "localizations");
        Intrinsics.checkNotNullExpressionValue(f12, "adapter(...)");
        this.nullableLocalizationsAdapter = f12;
        h f13 = moshi.f(a0.j(List.class, UiComponentError.class), x0.d(), "serverComponentErrors");
        Intrinsics.checkNotNullExpressionValue(f13, "adapter(...)");
        this.nullableListOfUiComponentErrorAdapter = f13;
    }

    @NotNull
    public String toString() {
        StringBuilder sb2 = new StringBuilder(40);
        sb2.append("GeneratedJsonAdapter(");
        sb2.append("NextStep.Ui.Config");
        sb2.append(')');
        return sb2.toString();
    }

    @Override // com.squareup.moshi.h
    @NotNull
    public NextStep.Ui.Config fromJson(@NotNull m reader) {
        Intrinsics.checkNotNullParameter(reader, "reader");
        reader.r();
        int i10 = -1;
        List list = null;
        Boolean bool = null;
        Boolean bool2 = null;
        Boolean bool3 = null;
        NextStep.Ui.Localizations localizations = null;
        List list2 = null;
        while (reader.hasNext()) {
            switch (reader.A0(this.options)) {
                case -1:
                    reader.E0();
                    reader.P();
                    break;
                case 0:
                    list = (List) this.nullableListOfUiComponentConfigAdapter.fromJson(reader);
                    break;
                case 1:
                    bool = (Boolean) this.nullableBooleanAdapter.fromJson(reader);
                    i10 &= -3;
                    break;
                case 2:
                    bool2 = (Boolean) this.nullableBooleanAdapter.fromJson(reader);
                    i10 &= -5;
                    break;
                case 3:
                    bool3 = (Boolean) this.nullableBooleanAdapter.fromJson(reader);
                    i10 &= -9;
                    break;
                case 4:
                    localizations = (NextStep.Ui.Localizations) this.nullableLocalizationsAdapter.fromJson(reader);
                    i10 &= -17;
                    break;
                case 5:
                    list2 = (List) this.nullableListOfUiComponentErrorAdapter.fromJson(reader);
                    i10 &= -33;
                    break;
            }
        }
        reader.y();
        if (i10 == -63) {
            List list3 = list2;
            NextStep.Ui.Localizations localizations2 = localizations;
            Boolean bool4 = bool3;
            return new NextStep.Ui.Config(list, bool, bool2, bool4, localizations2, list3);
        }
        List list4 = list2;
        NextStep.Ui.Localizations localizations3 = localizations;
        Boolean bool5 = bool3;
        Boolean bool6 = bool2;
        Boolean bool7 = bool;
        List list5 = list;
        Constructor<NextStep.Ui.Config> constructor = this.constructorRef;
        if (constructor == null) {
            constructor = NextStep.Ui.Config.class.getDeclaredConstructor(List.class, Boolean.class, Boolean.class, Boolean.class, NextStep.Ui.Localizations.class, List.class, Integer.TYPE, sm.c.f49097c);
            this.constructorRef = constructor;
            Intrinsics.checkNotNullExpressionValue(constructor, "also(...)");
        }
        NextStep.Ui.Config newInstance = constructor.newInstance(list5, bool7, bool6, bool5, localizations3, list4, Integer.valueOf(i10), null);
        Intrinsics.checkNotNullExpressionValue(newInstance, "newInstance(...)");
        return newInstance;
    }

    @Override // com.squareup.moshi.h
    public void toJson(@NotNull t writer, NextStep.Ui.Config config) {
        Intrinsics.checkNotNullParameter(writer, "writer");
        if (config != null) {
            writer.l();
            writer.A0("components");
            this.nullableListOfUiComponentConfigAdapter.toJson(writer, config.getComponents());
            writer.A0("backStepEnabled");
            this.nullableBooleanAdapter.toJson(writer, config.getBackStepEnabled());
            writer.A0("cancelButtonEnabled");
            this.nullableBooleanAdapter.toJson(writer, config.getCancelButtonEnabled());
            writer.A0("terminal");
            this.nullableBooleanAdapter.toJson(writer, config.getTerminal());
            writer.A0("localizations");
            this.nullableLocalizationsAdapter.toJson(writer, config.getLocalizations());
            writer.A0("serverComponentErrors");
            this.nullableListOfUiComponentErrorAdapter.toJson(writer, config.getServerComponentErrors());
            writer.E();
            return;
        }
        throw new NullPointerException("value_ was null! Wrap in .nullSafe() to write nullable values.");
    }
}
