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
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
import vm.c;
@Metadata(d1 = {"\u0000R\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\u000f\u0012\u0006\u0010\u0004\u001a\u00020\u0003¢\u0006\u0004\b\u0005\u0010\u0006J\u000f\u0010\b\u001a\u00020\u0007H\u0016¢\u0006\u0004\b\b\u0010\tJ\u0017\u0010\f\u001a\u00020\u00022\u0006\u0010\u000b\u001a\u00020\nH\u0016¢\u0006\u0004\b\f\u0010\rJ!\u0010\u0012\u001a\u00020\u00112\u0006\u0010\u000f\u001a\u00020\u000e2\b\u0010\u0010\u001a\u0004\u0018\u00010\u0002H\u0016¢\u0006\u0004\b\u0012\u0010\u0013R\u0014\u0010\u0015\u001a\u00020\u00148\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0015\u0010\u0016R\u001a\u0010\u0018\u001a\b\u0012\u0004\u0012\u00020\u00170\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0018\u0010\u0019R\u001c\u0010\u001a\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u00070\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001a\u0010\u0019R\u001c\u0010\u001c\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u001b0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001c\u0010\u0019R\u001e\u0010\u001e\u001a\n\u0012\u0004\u0012\u00020\u0002\u0018\u00010\u001d8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b\u001e\u0010\u001f¨\u0006 "}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/CreatePersonaSheet_AttributesJsonAdapter;", "Lcom/squareup/moshi/h;", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/CreatePersonaSheet$Attributes;", "Lcom/squareup/moshi/w;", "moshi", "<init>", "(Lcom/squareup/moshi/w;)V", "", "toString", "()Ljava/lang/String;", "Lcom/squareup/moshi/m;", "reader", "fromJson", "(Lcom/squareup/moshi/m;)Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/CreatePersonaSheet$Attributes;", "Lcom/squareup/moshi/t;", "writer", "value_", "", "toJson", "(Lcom/squareup/moshi/t;Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/CreatePersonaSheet$Attributes;)V", "Lcom/squareup/moshi/m$b;", "options", "Lcom/squareup/moshi/m$b;", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/CreatePersonaSheet$Pages;", "pagesAdapter", "Lcom/squareup/moshi/h;", "nullableStringAdapter", "", "nullableBooleanAdapter", "Ljava/lang/reflect/Constructor;", "constructorRef", "Ljava/lang/reflect/Constructor;", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nCreatePersonaSheet_AttributesJsonAdapter.kt\nKotlin\n*S Kotlin\n*F\n+ 1 CreatePersonaSheet_AttributesJsonAdapter.kt\ncom/withpersona/sdk2/inquiry/network/dto/ui/components/CreatePersonaSheet_AttributesJsonAdapter\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,107:1\n1#2:108\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class CreatePersonaSheet_AttributesJsonAdapter extends h {
    private volatile Constructor<CreatePersonaSheet.Attributes> constructorRef;
    @NotNull
    private final h nullableBooleanAdapter;
    @NotNull
    private final h nullableStringAdapter;
    @NotNull
    private final m.b options;
    @NotNull
    private final h pagesAdapter;

    public CreatePersonaSheet_AttributesJsonAdapter(@NotNull w moshi) {
        Intrinsics.checkNotNullParameter(moshi, "moshi");
        m.b a10 = m.b.a("pages", "url", "autoCompleteOnDismiss");
        Intrinsics.checkNotNullExpressionValue(a10, "of(...)");
        this.options = a10;
        h f10 = moshi.f(CreatePersonaSheet.Pages.class, x0.d(), "pages");
        Intrinsics.checkNotNullExpressionValue(f10, "adapter(...)");
        this.pagesAdapter = f10;
        h f11 = moshi.f(String.class, x0.d(), "url");
        Intrinsics.checkNotNullExpressionValue(f11, "adapter(...)");
        this.nullableStringAdapter = f11;
        h f12 = moshi.f(Boolean.class, x0.d(), "autoCompleteOnDismiss");
        Intrinsics.checkNotNullExpressionValue(f12, "adapter(...)");
        this.nullableBooleanAdapter = f12;
    }

    @NotNull
    public String toString() {
        StringBuilder sb2 = new StringBuilder(51);
        sb2.append("GeneratedJsonAdapter(");
        sb2.append("CreatePersonaSheet.Attributes");
        sb2.append(')');
        return sb2.toString();
    }

    @Override // com.squareup.moshi.h
    @NotNull
    public CreatePersonaSheet.Attributes fromJson(@NotNull m reader) {
        Intrinsics.checkNotNullParameter(reader, "reader");
        reader.r();
        CreatePersonaSheet.Pages pages = null;
        String str = null;
        Boolean bool = null;
        int i10 = -1;
        while (reader.hasNext()) {
            int A0 = reader.A0(this.options);
            if (A0 == -1) {
                reader.E0();
                reader.P();
            } else if (A0 == 0) {
                pages = (CreatePersonaSheet.Pages) this.pagesAdapter.fromJson(reader);
                if (pages == null) {
                    throw c.x("pages", "pages", reader);
                }
            } else if (A0 == 1) {
                str = (String) this.nullableStringAdapter.fromJson(reader);
            } else if (A0 == 2) {
                bool = (Boolean) this.nullableBooleanAdapter.fromJson(reader);
                i10 = -5;
            }
        }
        reader.y();
        if (i10 == -5) {
            if (pages != null) {
                return new CreatePersonaSheet.Attributes(pages, str, bool);
            }
            throw c.o("pages", "pages", reader);
        }
        Constructor<CreatePersonaSheet.Attributes> constructor = this.constructorRef;
        if (constructor == null) {
            constructor = CreatePersonaSheet.Attributes.class.getDeclaredConstructor(CreatePersonaSheet.Pages.class, String.class, Boolean.class, Integer.TYPE, c.f51691c);
            this.constructorRef = constructor;
            Intrinsics.checkNotNullExpressionValue(constructor, "also(...)");
        }
        if (pages != null) {
            CreatePersonaSheet.Attributes newInstance = constructor.newInstance(pages, str, bool, Integer.valueOf(i10), null);
            Intrinsics.checkNotNullExpressionValue(newInstance, "newInstance(...)");
            return newInstance;
        }
        throw c.o("pages", "pages", reader);
    }

    @Override // com.squareup.moshi.h
    public void toJson(@NotNull t writer, CreatePersonaSheet.Attributes attributes) {
        Intrinsics.checkNotNullParameter(writer, "writer");
        if (attributes != null) {
            writer.l();
            writer.A0("pages");
            this.pagesAdapter.toJson(writer, attributes.getPages());
            writer.A0("url");
            this.nullableStringAdapter.toJson(writer, attributes.getUrl());
            writer.A0("autoCompleteOnDismiss");
            this.nullableBooleanAdapter.toJson(writer, attributes.getAutoCompleteOnDismiss());
            writer.E();
            return;
        }
        throw new NullPointerException("value_ was null! Wrap in .nullSafe() to write nullable values.");
    }
}
