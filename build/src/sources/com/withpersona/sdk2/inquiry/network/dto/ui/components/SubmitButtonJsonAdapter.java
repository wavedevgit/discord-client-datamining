package com.withpersona.sdk2.inquiry.network.dto.ui.components;

import com.facebook.react.devsupport.StackTraceHelper;
import com.squareup.moshi.h;
import com.squareup.moshi.m;
import com.squareup.moshi.t;
import com.squareup.moshi.w;
import com.withpersona.sdk2.inquiry.network.dto.ui.BasicButtonAttributes;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.ButtonSubmitComponentStyle;
import java.lang.reflect.Constructor;
import kotlin.Metadata;
import kotlin.collections.x0;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
import vm.c;
@Metadata(d1 = {"\u0000P\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\u000f\u0012\u0006\u0010\u0004\u001a\u00020\u0003¢\u0006\u0004\b\u0005\u0010\u0006J\u000f\u0010\b\u001a\u00020\u0007H\u0016¢\u0006\u0004\b\b\u0010\tJ\u0017\u0010\f\u001a\u00020\u00022\u0006\u0010\u000b\u001a\u00020\nH\u0016¢\u0006\u0004\b\f\u0010\rJ!\u0010\u0012\u001a\u00020\u00112\u0006\u0010\u000f\u001a\u00020\u000e2\b\u0010\u0010\u001a\u0004\u0018\u00010\u0002H\u0016¢\u0006\u0004\b\u0012\u0010\u0013R\u0014\u0010\u0015\u001a\u00020\u00148\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0015\u0010\u0016R\u001a\u0010\u0017\u001a\b\u0012\u0004\u0012\u00020\u00070\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0017\u0010\u0018R\u001c\u0010\u001a\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u00190\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001a\u0010\u0018R\u001c\u0010\u001c\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u001b0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001c\u0010\u0018R\u001e\u0010\u001e\u001a\n\u0012\u0004\u0012\u00020\u0002\u0018\u00010\u001d8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b\u001e\u0010\u001f¨\u0006 "}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/SubmitButtonJsonAdapter;", "Lcom/squareup/moshi/h;", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/SubmitButton;", "Lcom/squareup/moshi/w;", "moshi", "<init>", "(Lcom/squareup/moshi/w;)V", "", "toString", "()Ljava/lang/String;", "Lcom/squareup/moshi/m;", "reader", "fromJson", "(Lcom/squareup/moshi/m;)Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/SubmitButton;", "Lcom/squareup/moshi/t;", "writer", "value_", "", "toJson", "(Lcom/squareup/moshi/t;Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/SubmitButton;)V", "Lcom/squareup/moshi/m$b;", "options", "Lcom/squareup/moshi/m$b;", "stringAdapter", "Lcom/squareup/moshi/h;", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/BasicButtonAttributes;", "nullableBasicButtonAttributesAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/ButtonSubmitComponentStyle;", "nullableButtonSubmitComponentStyleAdapter", "Ljava/lang/reflect/Constructor;", "constructorRef", "Ljava/lang/reflect/Constructor;", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class SubmitButtonJsonAdapter extends h {
    private volatile Constructor<SubmitButton> constructorRef;
    @NotNull
    private final h nullableBasicButtonAttributesAdapter;
    @NotNull
    private final h nullableButtonSubmitComponentStyleAdapter;
    @NotNull
    private final m.b options;
    @NotNull
    private final h stringAdapter;

    public SubmitButtonJsonAdapter(@NotNull w moshi) {
        Intrinsics.checkNotNullParameter(moshi, "moshi");
        m.b a10 = m.b.a(StackTraceHelper.NAME_KEY, "attributes", "styles");
        Intrinsics.checkNotNullExpressionValue(a10, "of(...)");
        this.options = a10;
        h f10 = moshi.f(String.class, x0.d(), StackTraceHelper.NAME_KEY);
        Intrinsics.checkNotNullExpressionValue(f10, "adapter(...)");
        this.stringAdapter = f10;
        h f11 = moshi.f(BasicButtonAttributes.class, x0.d(), "attributes");
        Intrinsics.checkNotNullExpressionValue(f11, "adapter(...)");
        this.nullableBasicButtonAttributesAdapter = f11;
        h f12 = moshi.f(ButtonSubmitComponentStyle.class, x0.d(), "styles");
        Intrinsics.checkNotNullExpressionValue(f12, "adapter(...)");
        this.nullableButtonSubmitComponentStyleAdapter = f12;
    }

    @NotNull
    public String toString() {
        StringBuilder sb2 = new StringBuilder(34);
        sb2.append("GeneratedJsonAdapter(");
        sb2.append("SubmitButton");
        sb2.append(')');
        return sb2.toString();
    }

    @Override // com.squareup.moshi.h
    @NotNull
    public SubmitButton fromJson(@NotNull m reader) {
        Intrinsics.checkNotNullParameter(reader, "reader");
        reader.r();
        String str = null;
        BasicButtonAttributes basicButtonAttributes = null;
        ButtonSubmitComponentStyle buttonSubmitComponentStyle = null;
        int i10 = -1;
        while (reader.hasNext()) {
            int A0 = reader.A0(this.options);
            if (A0 == -1) {
                reader.E0();
                reader.P();
            } else if (A0 == 0) {
                str = (String) this.stringAdapter.fromJson(reader);
                if (str == null) {
                    throw c.x(StackTraceHelper.NAME_KEY, StackTraceHelper.NAME_KEY, reader);
                }
            } else if (A0 == 1) {
                basicButtonAttributes = (BasicButtonAttributes) this.nullableBasicButtonAttributesAdapter.fromJson(reader);
            } else if (A0 == 2) {
                buttonSubmitComponentStyle = (ButtonSubmitComponentStyle) this.nullableButtonSubmitComponentStyleAdapter.fromJson(reader);
                i10 = -5;
            }
        }
        reader.y();
        if (i10 == -5) {
            if (str != null) {
                return new SubmitButton(str, basicButtonAttributes, buttonSubmitComponentStyle);
            }
            throw c.o(StackTraceHelper.NAME_KEY, StackTraceHelper.NAME_KEY, reader);
        }
        Constructor<SubmitButton> constructor = this.constructorRef;
        if (constructor == null) {
            constructor = SubmitButton.class.getDeclaredConstructor(String.class, BasicButtonAttributes.class, ButtonSubmitComponentStyle.class, Integer.TYPE, c.f51688c);
            this.constructorRef = constructor;
            Intrinsics.checkNotNullExpressionValue(constructor, "also(...)");
        }
        if (str != null) {
            SubmitButton newInstance = constructor.newInstance(str, basicButtonAttributes, buttonSubmitComponentStyle, Integer.valueOf(i10), null);
            Intrinsics.checkNotNullExpressionValue(newInstance, "newInstance(...)");
            return newInstance;
        }
        throw c.o(StackTraceHelper.NAME_KEY, StackTraceHelper.NAME_KEY, reader);
    }

    @Override // com.squareup.moshi.h
    public void toJson(@NotNull t writer, SubmitButton submitButton) {
        Intrinsics.checkNotNullParameter(writer, "writer");
        if (submitButton != null) {
            writer.l();
            writer.A0(StackTraceHelper.NAME_KEY);
            this.stringAdapter.toJson(writer, submitButton.getName());
            writer.A0("attributes");
            this.nullableBasicButtonAttributesAdapter.toJson(writer, submitButton.getAttributes());
            writer.A0("styles");
            this.nullableButtonSubmitComponentStyleAdapter.toJson(writer, submitButton.getStyles());
            writer.E();
            return;
        }
        throw new NullPointerException("value_ was null! Wrap in .nullSafe() to write nullable values.");
    }
}
