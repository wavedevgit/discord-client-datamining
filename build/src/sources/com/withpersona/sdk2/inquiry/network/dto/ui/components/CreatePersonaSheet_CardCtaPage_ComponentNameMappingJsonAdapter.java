package com.withpersona.sdk2.inquiry.network.dto.ui.components;

import com.squareup.moshi.h;
import com.squareup.moshi.m;
import com.squareup.moshi.t;
import com.squareup.moshi.w;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.CreatePersonaSheet;
import java.lang.reflect.Constructor;
import kotlin.Metadata;
import kotlin.collections.x0;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
import vm.c;
@Metadata(d1 = {"\u0000D\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u0003\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\u000f\u0012\u0006\u0010\u0004\u001a\u00020\u0003¢\u0006\u0004\b\u0005\u0010\u0006J\u000f\u0010\b\u001a\u00020\u0007H\u0016¢\u0006\u0004\b\b\u0010\tJ\u0017\u0010\f\u001a\u00020\u00022\u0006\u0010\u000b\u001a\u00020\nH\u0016¢\u0006\u0004\b\f\u0010\rJ!\u0010\u0012\u001a\u00020\u00112\u0006\u0010\u000f\u001a\u00020\u000e2\b\u0010\u0010\u001a\u0004\u0018\u00010\u0002H\u0016¢\u0006\u0004\b\u0012\u0010\u0013R\u0014\u0010\u0015\u001a\u00020\u00148\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0015\u0010\u0016R\u001c\u0010\u0017\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u00070\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0017\u0010\u0018R\u001e\u0010\u001a\u001a\n\u0012\u0004\u0012\u00020\u0002\u0018\u00010\u00198\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b\u001a\u0010\u001b¨\u0006\u001c"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/CreatePersonaSheet_CardCtaPage_ComponentNameMappingJsonAdapter;", "Lcom/squareup/moshi/h;", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/CreatePersonaSheet$CardCtaPage$ComponentNameMapping;", "Lcom/squareup/moshi/w;", "moshi", "<init>", "(Lcom/squareup/moshi/w;)V", "", "toString", "()Ljava/lang/String;", "Lcom/squareup/moshi/m;", "reader", "fromJson", "(Lcom/squareup/moshi/m;)Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/CreatePersonaSheet$CardCtaPage$ComponentNameMapping;", "Lcom/squareup/moshi/t;", "writer", "value_", "", "toJson", "(Lcom/squareup/moshi/t;Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/CreatePersonaSheet$CardCtaPage$ComponentNameMapping;)V", "Lcom/squareup/moshi/m$b;", "options", "Lcom/squareup/moshi/m$b;", "nullableStringAdapter", "Lcom/squareup/moshi/h;", "Ljava/lang/reflect/Constructor;", "constructorRef", "Ljava/lang/reflect/Constructor;", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class CreatePersonaSheet_CardCtaPage_ComponentNameMappingJsonAdapter extends h {
    private volatile Constructor<CreatePersonaSheet.CardCtaPage.ComponentNameMapping> constructorRef;
    @NotNull
    private final h nullableStringAdapter;
    @NotNull
    private final m.b options;

    public CreatePersonaSheet_CardCtaPage_ComponentNameMappingJsonAdapter(@NotNull w moshi) {
        Intrinsics.checkNotNullParameter(moshi, "moshi");
        m.b a10 = m.b.a("startButton", "dismissButton");
        Intrinsics.checkNotNullExpressionValue(a10, "of(...)");
        this.options = a10;
        h f10 = moshi.f(String.class, x0.d(), "startButton");
        Intrinsics.checkNotNullExpressionValue(f10, "adapter(...)");
        this.nullableStringAdapter = f10;
    }

    @NotNull
    public String toString() {
        StringBuilder sb2 = new StringBuilder(73);
        sb2.append("GeneratedJsonAdapter(");
        sb2.append("CreatePersonaSheet.CardCtaPage.ComponentNameMapping");
        sb2.append(')');
        return sb2.toString();
    }

    @Override // com.squareup.moshi.h
    @NotNull
    public CreatePersonaSheet.CardCtaPage.ComponentNameMapping fromJson(@NotNull m reader) {
        Intrinsics.checkNotNullParameter(reader, "reader");
        reader.r();
        String str = null;
        String str2 = null;
        int i10 = -1;
        while (reader.hasNext()) {
            int A0 = reader.A0(this.options);
            if (A0 == -1) {
                reader.E0();
                reader.P();
            } else if (A0 == 0) {
                str = (String) this.nullableStringAdapter.fromJson(reader);
                i10 &= -2;
            } else if (A0 == 1) {
                str2 = (String) this.nullableStringAdapter.fromJson(reader);
                i10 &= -3;
            }
        }
        reader.y();
        if (i10 == -4) {
            return new CreatePersonaSheet.CardCtaPage.ComponentNameMapping(str, str2);
        }
        Constructor<CreatePersonaSheet.CardCtaPage.ComponentNameMapping> constructor = this.constructorRef;
        if (constructor == null) {
            constructor = CreatePersonaSheet.CardCtaPage.ComponentNameMapping.class.getDeclaredConstructor(String.class, String.class, Integer.TYPE, c.f51688c);
            this.constructorRef = constructor;
            Intrinsics.checkNotNullExpressionValue(constructor, "also(...)");
        }
        CreatePersonaSheet.CardCtaPage.ComponentNameMapping newInstance = constructor.newInstance(str, str2, Integer.valueOf(i10), null);
        Intrinsics.checkNotNullExpressionValue(newInstance, "newInstance(...)");
        return newInstance;
    }

    @Override // com.squareup.moshi.h
    public void toJson(@NotNull t writer, CreatePersonaSheet.CardCtaPage.ComponentNameMapping componentNameMapping) {
        Intrinsics.checkNotNullParameter(writer, "writer");
        if (componentNameMapping != null) {
            writer.l();
            writer.A0("startButton");
            this.nullableStringAdapter.toJson(writer, componentNameMapping.getStartButton());
            writer.A0("dismissButton");
            this.nullableStringAdapter.toJson(writer, componentNameMapping.getDismissButton());
            writer.E();
            return;
        }
        throw new NullPointerException("value_ was null! Wrap in .nullSafe() to write nullable values.");
    }
}
