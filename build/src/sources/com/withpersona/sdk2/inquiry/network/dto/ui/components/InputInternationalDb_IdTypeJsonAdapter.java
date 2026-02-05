package com.withpersona.sdk2.inquiry.network.dto.ui.components;

import com.facebook.react.devsupport.StackTraceHelper;
import com.facebook.react.views.textinput.ReactTextInputShadowNode;
import com.squareup.moshi.h;
import com.squareup.moshi.m;
import com.squareup.moshi.t;
import com.squareup.moshi.w;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.InputInternationalDb;
import kotlin.Metadata;
import kotlin.collections.x0;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000D\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0010\u000b\n\u0002\b\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\u000f\u0012\u0006\u0010\u0004\u001a\u00020\u0003¢\u0006\u0004\b\u0005\u0010\u0006J\u000f\u0010\b\u001a\u00020\u0007H\u0016¢\u0006\u0004\b\b\u0010\tJ\u0017\u0010\f\u001a\u00020\u00022\u0006\u0010\u000b\u001a\u00020\nH\u0016¢\u0006\u0004\b\f\u0010\rJ!\u0010\u0012\u001a\u00020\u00112\u0006\u0010\u000f\u001a\u00020\u000e2\b\u0010\u0010\u001a\u0004\u0018\u00010\u0002H\u0016¢\u0006\u0004\b\u0012\u0010\u0013R\u0014\u0010\u0015\u001a\u00020\u00148\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0015\u0010\u0016R\u001c\u0010\u0017\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u00070\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0017\u0010\u0018R\u001c\u0010\u001a\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u00190\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001a\u0010\u0018¨\u0006\u001b"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/InputInternationalDb_IdTypeJsonAdapter;", "Lcom/squareup/moshi/h;", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/InputInternationalDb$IdType;", "Lcom/squareup/moshi/w;", "moshi", "<init>", "(Lcom/squareup/moshi/w;)V", "", "toString", "()Ljava/lang/String;", "Lcom/squareup/moshi/m;", "reader", "fromJson", "(Lcom/squareup/moshi/m;)Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/InputInternationalDb$IdType;", "Lcom/squareup/moshi/t;", "writer", "value_", "", "toJson", "(Lcom/squareup/moshi/t;Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/InputInternationalDb$IdType;)V", "Lcom/squareup/moshi/m$b;", "options", "Lcom/squareup/moshi/m$b;", "nullableStringAdapter", "Lcom/squareup/moshi/h;", "", "nullableBooleanAdapter", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class InputInternationalDb_IdTypeJsonAdapter extends h {
    @NotNull
    private final h nullableBooleanAdapter;
    @NotNull
    private final h nullableStringAdapter;
    @NotNull
    private final m.b options;

    public InputInternationalDb_IdTypeJsonAdapter(@NotNull w moshi) {
        Intrinsics.checkNotNullParameter(moshi, "moshi");
        m.b a10 = m.b.a("mask", ReactTextInputShadowNode.PROP_PLACEHOLDER, "secure", "countryName", "countryCode", "idType", StackTraceHelper.NAME_KEY, "description");
        Intrinsics.checkNotNullExpressionValue(a10, "of(...)");
        this.options = a10;
        h f10 = moshi.f(String.class, x0.d(), "mask");
        Intrinsics.checkNotNullExpressionValue(f10, "adapter(...)");
        this.nullableStringAdapter = f10;
        h f11 = moshi.f(Boolean.class, x0.d(), "secure");
        Intrinsics.checkNotNullExpressionValue(f11, "adapter(...)");
        this.nullableBooleanAdapter = f11;
    }

    @NotNull
    public String toString() {
        StringBuilder sb2 = new StringBuilder(49);
        sb2.append("GeneratedJsonAdapter(");
        sb2.append("InputInternationalDb.IdType");
        sb2.append(')');
        return sb2.toString();
    }

    @Override // com.squareup.moshi.h
    @NotNull
    public InputInternationalDb.IdType fromJson(@NotNull m reader) {
        Intrinsics.checkNotNullParameter(reader, "reader");
        reader.s();
        String str = null;
        String str2 = null;
        Boolean bool = null;
        String str3 = null;
        String str4 = null;
        String str5 = null;
        String str6 = null;
        String str7 = null;
        while (reader.hasNext()) {
            switch (reader.W(this.options)) {
                case -1:
                    reader.E0();
                    reader.P();
                    break;
                case 0:
                    str = (String) this.nullableStringAdapter.fromJson(reader);
                    break;
                case 1:
                    str2 = (String) this.nullableStringAdapter.fromJson(reader);
                    break;
                case 2:
                    bool = (Boolean) this.nullableBooleanAdapter.fromJson(reader);
                    break;
                case 3:
                    str3 = (String) this.nullableStringAdapter.fromJson(reader);
                    break;
                case 4:
                    str4 = (String) this.nullableStringAdapter.fromJson(reader);
                    break;
                case 5:
                    str5 = (String) this.nullableStringAdapter.fromJson(reader);
                    break;
                case 6:
                    str6 = (String) this.nullableStringAdapter.fromJson(reader);
                    break;
                case 7:
                    str7 = (String) this.nullableStringAdapter.fromJson(reader);
                    break;
            }
        }
        reader.z();
        return new InputInternationalDb.IdType(str, str2, bool, str3, str4, str5, str6, str7);
    }

    @Override // com.squareup.moshi.h
    public void toJson(@NotNull t writer, InputInternationalDb.IdType idType) {
        Intrinsics.checkNotNullParameter(writer, "writer");
        if (idType != null) {
            writer.k();
            writer.W("mask");
            this.nullableStringAdapter.toJson(writer, idType.getMask());
            writer.W(ReactTextInputShadowNode.PROP_PLACEHOLDER);
            this.nullableStringAdapter.toJson(writer, idType.getPlaceholder());
            writer.W("secure");
            this.nullableBooleanAdapter.toJson(writer, idType.getSecure());
            writer.W("countryName");
            this.nullableStringAdapter.toJson(writer, idType.getCountryName());
            writer.W("countryCode");
            this.nullableStringAdapter.toJson(writer, idType.getCountryCode());
            writer.W("idType");
            this.nullableStringAdapter.toJson(writer, idType.getIdType());
            writer.W(StackTraceHelper.NAME_KEY);
            this.nullableStringAdapter.toJson(writer, idType.getName());
            writer.W("description");
            this.nullableStringAdapter.toJson(writer, idType.getDescription());
            writer.E();
            return;
        }
        throw new NullPointerException("value_ was null! Wrap in .nullSafe() to write nullable values.");
    }
}
