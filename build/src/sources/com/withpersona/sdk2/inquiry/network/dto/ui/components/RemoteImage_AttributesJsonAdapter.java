package com.withpersona.sdk2.inquiry.network.dto.ui.components;

import an.c;
import com.facebook.react.uimanager.ViewProps;
import com.squareup.moshi.h;
import com.squareup.moshi.m;
import com.squareup.moshi.t;
import com.squareup.moshi.w;
import com.withpersona.sdk2.inquiry.network.dto.JsonLogicBoolean;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.RemoteImage;
import java.lang.reflect.Constructor;
import kotlin.Metadata;
import kotlin.collections.x0;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000R\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\u000f\u0012\u0006\u0010\u0004\u001a\u00020\u0003¢\u0006\u0004\b\u0005\u0010\u0006J\u000f\u0010\b\u001a\u00020\u0007H\u0016¢\u0006\u0004\b\b\u0010\tJ\u0017\u0010\f\u001a\u00020\u00022\u0006\u0010\u000b\u001a\u00020\nH\u0016¢\u0006\u0004\b\f\u0010\rJ!\u0010\u0012\u001a\u00020\u00112\u0006\u0010\u000f\u001a\u00020\u000e2\b\u0010\u0010\u001a\u0004\u0018\u00010\u0002H\u0016¢\u0006\u0004\b\u0012\u0010\u0013R\u0014\u0010\u0015\u001a\u00020\u00148\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0015\u0010\u0016R\u001c\u0010\u0017\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u00070\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0017\u0010\u0018R\u001c\u0010\u001a\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u00190\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001a\u0010\u0018R\u001a\u0010\u001b\u001a\b\u0012\u0004\u0012\u00020\u00070\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001b\u0010\u0018R\u001a\u0010\u001c\u001a\b\u0012\u0004\u0012\u00020\u00190\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001c\u0010\u0018R\u001c\u0010\u001e\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u001d0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001e\u0010\u0018R\u001e\u0010 \u001a\n\u0012\u0004\u0012\u00020\u0002\u0018\u00010\u001f8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b \u0010!¨\u0006\""}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/RemoteImage_AttributesJsonAdapter;", "Lcom/squareup/moshi/h;", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/RemoteImage$Attributes;", "Lcom/squareup/moshi/w;", "moshi", "<init>", "(Lcom/squareup/moshi/w;)V", "", "toString", "()Ljava/lang/String;", "Lcom/squareup/moshi/m;", "reader", "fromJson", "(Lcom/squareup/moshi/m;)Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/RemoteImage$Attributes;", "Lcom/squareup/moshi/t;", "writer", "value_", "", "toJson", "(Lcom/squareup/moshi/t;Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/RemoteImage$Attributes;)V", "Lcom/squareup/moshi/m$b;", "options", "Lcom/squareup/moshi/m$b;", "nullableStringAdapter", "Lcom/squareup/moshi/h;", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/RemoteImage$ContentType;", "nullableContentTypeAdapter", "stringAdapter", "contentTypeAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/JsonLogicBoolean;", "nullableJsonLogicBooleanAdapter", "Ljava/lang/reflect/Constructor;", "constructorRef", "Ljava/lang/reflect/Constructor;", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class RemoteImage_AttributesJsonAdapter extends h {
    private volatile Constructor<RemoteImage.Attributes> constructorRef;
    @NotNull
    private final h contentTypeAdapter;
    @NotNull
    private final h nullableContentTypeAdapter;
    @NotNull
    private final h nullableJsonLogicBooleanAdapter;
    @NotNull
    private final h nullableStringAdapter;
    @NotNull
    private final m.b options;
    @NotNull
    private final h stringAdapter;

    public RemoteImage_AttributesJsonAdapter(@NotNull w moshi) {
        Intrinsics.checkNotNullParameter(moshi, "moshi");
        m.b a10 = m.b.a("localAssetName", "localAssetContentType", "url", "width", "height", "contentType", ViewProps.HIDDEN);
        Intrinsics.checkNotNullExpressionValue(a10, "of(...)");
        this.options = a10;
        h f10 = moshi.f(String.class, x0.d(), "localAssetName");
        Intrinsics.checkNotNullExpressionValue(f10, "adapter(...)");
        this.nullableStringAdapter = f10;
        h f11 = moshi.f(RemoteImage.ContentType.class, x0.d(), "localAssetContentType");
        Intrinsics.checkNotNullExpressionValue(f11, "adapter(...)");
        this.nullableContentTypeAdapter = f11;
        h f12 = moshi.f(String.class, x0.d(), "url");
        Intrinsics.checkNotNullExpressionValue(f12, "adapter(...)");
        this.stringAdapter = f12;
        h f13 = moshi.f(RemoteImage.ContentType.class, x0.d(), "contentType");
        Intrinsics.checkNotNullExpressionValue(f13, "adapter(...)");
        this.contentTypeAdapter = f13;
        h f14 = moshi.f(JsonLogicBoolean.class, x0.d(), ViewProps.HIDDEN);
        Intrinsics.checkNotNullExpressionValue(f14, "adapter(...)");
        this.nullableJsonLogicBooleanAdapter = f14;
    }

    @NotNull
    public String toString() {
        StringBuilder sb2 = new StringBuilder(44);
        sb2.append("GeneratedJsonAdapter(");
        sb2.append("RemoteImage.Attributes");
        sb2.append(')');
        return sb2.toString();
    }

    @Override // com.squareup.moshi.h
    @NotNull
    public RemoteImage.Attributes fromJson(@NotNull m reader) {
        Intrinsics.checkNotNullParameter(reader, "reader");
        reader.u();
        int i10 = -1;
        String str = null;
        RemoteImage.ContentType contentType = null;
        String str2 = null;
        String str3 = null;
        String str4 = null;
        RemoteImage.ContentType contentType2 = null;
        JsonLogicBoolean jsonLogicBoolean = null;
        while (reader.hasNext()) {
            switch (reader.J(this.options)) {
                case -1:
                    reader.E0();
                    reader.S();
                    break;
                case 0:
                    str = (String) this.nullableStringAdapter.fromJson(reader);
                    i10 &= -2;
                    break;
                case 1:
                    contentType = (RemoteImage.ContentType) this.nullableContentTypeAdapter.fromJson(reader);
                    i10 &= -3;
                    break;
                case 2:
                    str2 = (String) this.stringAdapter.fromJson(reader);
                    if (str2 != null) {
                        break;
                    } else {
                        throw c.x("url", "url", reader);
                    }
                case 3:
                    str3 = (String) this.nullableStringAdapter.fromJson(reader);
                    break;
                case 4:
                    str4 = (String) this.nullableStringAdapter.fromJson(reader);
                    break;
                case 5:
                    contentType2 = (RemoteImage.ContentType) this.contentTypeAdapter.fromJson(reader);
                    if (contentType2 != null) {
                        i10 &= -33;
                        break;
                    } else {
                        throw c.x("contentType", "contentType", reader);
                    }
                case 6:
                    jsonLogicBoolean = (JsonLogicBoolean) this.nullableJsonLogicBooleanAdapter.fromJson(reader);
                    i10 &= -65;
                    break;
            }
        }
        reader.D();
        if (i10 == -100) {
            String str5 = str4;
            String str6 = str3;
            String str7 = str2;
            RemoteImage.ContentType contentType3 = contentType;
            String str8 = str;
            if (str7 != null) {
                Intrinsics.checkNotNull(contentType2, "null cannot be cast to non-null type com.withpersona.sdk2.inquiry.network.dto.ui.components.RemoteImage.ContentType");
                return new RemoteImage.Attributes(str8, contentType3, str7, str6, str5, contentType2, jsonLogicBoolean);
            }
            throw c.o("url", "url", reader);
        }
        String str9 = str4;
        String str10 = str3;
        String str11 = str2;
        RemoteImage.ContentType contentType4 = contentType;
        String str12 = str;
        Constructor<RemoteImage.Attributes> constructor = this.constructorRef;
        if (constructor == null) {
            constructor = RemoteImage.Attributes.class.getDeclaredConstructor(String.class, RemoteImage.ContentType.class, String.class, String.class, String.class, RemoteImage.ContentType.class, JsonLogicBoolean.class, Integer.TYPE, c.f1164c);
            this.constructorRef = constructor;
            Intrinsics.checkNotNullExpressionValue(constructor, "also(...)");
        }
        Constructor<RemoteImage.Attributes> constructor2 = constructor;
        if (str11 != null) {
            RemoteImage.Attributes newInstance = constructor2.newInstance(str12, contentType4, str11, str10, str9, contentType2, jsonLogicBoolean, Integer.valueOf(i10), null);
            Intrinsics.checkNotNullExpressionValue(newInstance, "newInstance(...)");
            return newInstance;
        }
        throw c.o("url", "url", reader);
    }

    @Override // com.squareup.moshi.h
    public void toJson(@NotNull t writer, RemoteImage.Attributes attributes) {
        Intrinsics.checkNotNullParameter(writer, "writer");
        if (attributes != null) {
            writer.k();
            writer.J("localAssetName");
            this.nullableStringAdapter.toJson(writer, attributes.getLocalAssetName());
            writer.J("localAssetContentType");
            this.nullableContentTypeAdapter.toJson(writer, attributes.getLocalAssetContentType());
            writer.J("url");
            this.stringAdapter.toJson(writer, attributes.getUrl());
            writer.J("width");
            this.nullableStringAdapter.toJson(writer, attributes.getWidth());
            writer.J("height");
            this.nullableStringAdapter.toJson(writer, attributes.getHeight());
            writer.J("contentType");
            this.contentTypeAdapter.toJson(writer, attributes.getContentType());
            writer.J(ViewProps.HIDDEN);
            this.nullableJsonLogicBooleanAdapter.toJson(writer, attributes.getHidden());
            writer.s();
            return;
        }
        throw new NullPointerException("value_ was null! Wrap in .nullSafe() to write nullable values.");
    }
}
