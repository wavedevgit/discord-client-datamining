package com.withpersona.sdk2.inquiry.network.dto.ui.components;

import com.facebook.react.uimanager.ViewProps;
import com.squareup.moshi.a0;
import com.squareup.moshi.h;
import com.squareup.moshi.m;
import com.squareup.moshi.t;
import com.squareup.moshi.w;
import com.withpersona.sdk2.inquiry.network.dto.JsonLogicBoolean;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.ClickableStack;
import java.lang.reflect.Constructor;
import java.util.List;
import kotlin.Metadata;
import kotlin.collections.x0;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
import vm.c;
@Metadata(d1 = {"\u0000V\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\u000f\u0012\u0006\u0010\u0004\u001a\u00020\u0003¢\u0006\u0004\b\u0005\u0010\u0006J\u000f\u0010\b\u001a\u00020\u0007H\u0016¢\u0006\u0004\b\b\u0010\tJ\u0017\u0010\f\u001a\u00020\u00022\u0006\u0010\u000b\u001a\u00020\nH\u0016¢\u0006\u0004\b\f\u0010\rJ!\u0010\u0012\u001a\u00020\u00112\u0006\u0010\u000f\u001a\u00020\u000e2\b\u0010\u0010\u001a\u0004\u0018\u00010\u0002H\u0016¢\u0006\u0004\b\u0012\u0010\u0013R\u0014\u0010\u0015\u001a\u00020\u00148\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0015\u0010\u0016R\"\u0010\u0019\u001a\u0010\u0012\f\u0012\n\u0012\u0004\u0012\u00020\u0018\u0018\u00010\u00170\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0019\u0010\u001aR\u001c\u0010\u001c\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u001b0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001c\u0010\u001aR\u001e\u0010\u001e\u001a\n\u0012\u0004\u0012\u00020\u0002\u0018\u00010\u001d8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b\u001e\u0010\u001f¨\u0006 "}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/ClickableStack_AttributesJsonAdapter;", "Lcom/squareup/moshi/h;", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/ClickableStack$Attributes;", "Lcom/squareup/moshi/w;", "moshi", "<init>", "(Lcom/squareup/moshi/w;)V", "", "toString", "()Ljava/lang/String;", "Lcom/squareup/moshi/m;", "reader", "fromJson", "(Lcom/squareup/moshi/m;)Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/ClickableStack$Attributes;", "Lcom/squareup/moshi/t;", "writer", "value_", "", "toJson", "(Lcom/squareup/moshi/t;Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/ClickableStack$Attributes;)V", "Lcom/squareup/moshi/m$b;", "options", "Lcom/squareup/moshi/m$b;", "", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/UiComponentConfig;", "nullableListOfUiComponentConfigAdapter", "Lcom/squareup/moshi/h;", "Lcom/withpersona/sdk2/inquiry/network/dto/JsonLogicBoolean;", "nullableJsonLogicBooleanAdapter", "Ljava/lang/reflect/Constructor;", "constructorRef", "Ljava/lang/reflect/Constructor;", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nClickableStack_AttributesJsonAdapter.kt\nKotlin\n*S Kotlin\n*F\n+ 1 ClickableStack_AttributesJsonAdapter.kt\ncom/withpersona/sdk2/inquiry/network/dto/ui/components/ClickableStack_AttributesJsonAdapter\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,109:1\n1#2:110\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class ClickableStack_AttributesJsonAdapter extends h {
    private volatile Constructor<ClickableStack.Attributes> constructorRef;
    @NotNull
    private final h nullableJsonLogicBooleanAdapter;
    @NotNull
    private final h nullableListOfUiComponentConfigAdapter;
    @NotNull
    private final m.b options;

    public ClickableStack_AttributesJsonAdapter(@NotNull w moshi) {
        Intrinsics.checkNotNullParameter(moshi, "moshi");
        m.b a10 = m.b.a("children", ViewProps.HIDDEN, "disabled");
        Intrinsics.checkNotNullExpressionValue(a10, "of(...)");
        this.options = a10;
        h f10 = moshi.f(a0.j(List.class, UiComponentConfig.class), x0.d(), "children");
        Intrinsics.checkNotNullExpressionValue(f10, "adapter(...)");
        this.nullableListOfUiComponentConfigAdapter = f10;
        h f11 = moshi.f(JsonLogicBoolean.class, x0.d(), ViewProps.HIDDEN);
        Intrinsics.checkNotNullExpressionValue(f11, "adapter(...)");
        this.nullableJsonLogicBooleanAdapter = f11;
    }

    @NotNull
    public String toString() {
        StringBuilder sb2 = new StringBuilder(47);
        sb2.append("GeneratedJsonAdapter(");
        sb2.append("ClickableStack.Attributes");
        sb2.append(')');
        return sb2.toString();
    }

    @Override // com.squareup.moshi.h
    @NotNull
    public ClickableStack.Attributes fromJson(@NotNull m reader) {
        Intrinsics.checkNotNullParameter(reader, "reader");
        reader.r();
        List list = null;
        JsonLogicBoolean jsonLogicBoolean = null;
        JsonLogicBoolean jsonLogicBoolean2 = null;
        int i10 = -1;
        while (reader.hasNext()) {
            int A0 = reader.A0(this.options);
            if (A0 == -1) {
                reader.E0();
                reader.P();
            } else if (A0 == 0) {
                list = (List) this.nullableListOfUiComponentConfigAdapter.fromJson(reader);
            } else if (A0 == 1) {
                jsonLogicBoolean = (JsonLogicBoolean) this.nullableJsonLogicBooleanAdapter.fromJson(reader);
                i10 &= -3;
            } else if (A0 == 2) {
                jsonLogicBoolean2 = (JsonLogicBoolean) this.nullableJsonLogicBooleanAdapter.fromJson(reader);
                i10 &= -5;
            }
        }
        reader.y();
        if (i10 == -7) {
            return new ClickableStack.Attributes(list, jsonLogicBoolean, jsonLogicBoolean2);
        }
        Constructor<ClickableStack.Attributes> constructor = this.constructorRef;
        if (constructor == null) {
            constructor = ClickableStack.Attributes.class.getDeclaredConstructor(List.class, JsonLogicBoolean.class, JsonLogicBoolean.class, Integer.TYPE, c.f51688c);
            this.constructorRef = constructor;
            Intrinsics.checkNotNullExpressionValue(constructor, "also(...)");
        }
        ClickableStack.Attributes newInstance = constructor.newInstance(list, jsonLogicBoolean, jsonLogicBoolean2, Integer.valueOf(i10), null);
        Intrinsics.checkNotNullExpressionValue(newInstance, "newInstance(...)");
        return newInstance;
    }

    @Override // com.squareup.moshi.h
    public void toJson(@NotNull t writer, ClickableStack.Attributes attributes) {
        Intrinsics.checkNotNullParameter(writer, "writer");
        if (attributes != null) {
            writer.l();
            writer.A0("children");
            this.nullableListOfUiComponentConfigAdapter.toJson(writer, attributes.getChildren());
            writer.A0(ViewProps.HIDDEN);
            this.nullableJsonLogicBooleanAdapter.toJson(writer, attributes.getHidden());
            writer.A0("disabled");
            this.nullableJsonLogicBooleanAdapter.toJson(writer, attributes.getDisabled());
            writer.E();
            return;
        }
        throw new NullPointerException("value_ was null! Wrap in .nullSafe() to write nullable values.");
    }
}
