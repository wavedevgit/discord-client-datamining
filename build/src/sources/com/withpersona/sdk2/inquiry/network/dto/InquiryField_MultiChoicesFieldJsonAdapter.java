package com.withpersona.sdk2.inquiry.network.dto;

import com.squareup.moshi.a0;
import com.squareup.moshi.h;
import com.squareup.moshi.m;
import com.squareup.moshi.t;
import com.squareup.moshi.w;
import com.withpersona.sdk2.inquiry.network.dto.InquiryField;
import java.lang.reflect.Constructor;
import kotlin.Metadata;
import kotlin.collections.x0;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000L\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0011\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0003\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\u000f\u0012\u0006\u0010\u0004\u001a\u00020\u0003¢\u0006\u0004\b\u0005\u0010\u0006J\u000f\u0010\b\u001a\u00020\u0007H\u0016¢\u0006\u0004\b\b\u0010\tJ\u0017\u0010\f\u001a\u00020\u00022\u0006\u0010\u000b\u001a\u00020\nH\u0016¢\u0006\u0004\b\f\u0010\rJ!\u0010\u0012\u001a\u00020\u00112\u0006\u0010\u000f\u001a\u00020\u000e2\b\u0010\u0010\u001a\u0004\u0018\u00010\u0002H\u0016¢\u0006\u0004\b\u0012\u0010\u0013R\u0014\u0010\u0015\u001a\u00020\u00148\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0015\u0010\u0016R\"\u0010\u0018\u001a\u0010\u0012\f\u0012\n\u0012\u0004\u0012\u00020\u0007\u0018\u00010\u00170\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0018\u0010\u0019R\u001a\u0010\u001a\u001a\b\u0012\u0004\u0012\u00020\u00070\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001a\u0010\u0019R\u001e\u0010\u001c\u001a\n\u0012\u0004\u0012\u00020\u0002\u0018\u00010\u001b8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b\u001c\u0010\u001d¨\u0006\u001e"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/InquiryField_MultiChoicesFieldJsonAdapter;", "Lcom/squareup/moshi/h;", "Lcom/withpersona/sdk2/inquiry/network/dto/InquiryField$MultiChoicesField;", "Lcom/squareup/moshi/w;", "moshi", "<init>", "(Lcom/squareup/moshi/w;)V", "", "toString", "()Ljava/lang/String;", "Lcom/squareup/moshi/m;", "reader", "fromJson", "(Lcom/squareup/moshi/m;)Lcom/withpersona/sdk2/inquiry/network/dto/InquiryField$MultiChoicesField;", "Lcom/squareup/moshi/t;", "writer", "value_", "", "toJson", "(Lcom/squareup/moshi/t;Lcom/withpersona/sdk2/inquiry/network/dto/InquiryField$MultiChoicesField;)V", "Lcom/squareup/moshi/m$b;", "options", "Lcom/squareup/moshi/m$b;", "", "nullableArrayOfStringAdapter", "Lcom/squareup/moshi/h;", "stringAdapter", "Ljava/lang/reflect/Constructor;", "constructorRef", "Ljava/lang/reflect/Constructor;", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class InquiryField_MultiChoicesFieldJsonAdapter extends h {
    private volatile Constructor<InquiryField.MultiChoicesField> constructorRef;
    @NotNull
    private final h nullableArrayOfStringAdapter;
    @NotNull
    private final m.b options;
    @NotNull
    private final h stringAdapter;

    public InquiryField_MultiChoicesFieldJsonAdapter(@NotNull w moshi) {
        Intrinsics.checkNotNullParameter(moshi, "moshi");
        m.b a10 = m.b.a("value", "type");
        Intrinsics.checkNotNullExpressionValue(a10, "of(...)");
        this.options = a10;
        h f10 = moshi.f(a0.b(String.class), x0.d(), "value");
        Intrinsics.checkNotNullExpressionValue(f10, "adapter(...)");
        this.nullableArrayOfStringAdapter = f10;
        h f11 = moshi.f(String.class, x0.d(), "type");
        Intrinsics.checkNotNullExpressionValue(f11, "adapter(...)");
        this.stringAdapter = f11;
    }

    @NotNull
    public String toString() {
        StringBuilder sb2 = new StringBuilder(52);
        sb2.append("GeneratedJsonAdapter(");
        sb2.append("InquiryField.MultiChoicesField");
        sb2.append(')');
        return sb2.toString();
    }

    @Override // com.squareup.moshi.h
    @NotNull
    public InquiryField.MultiChoicesField fromJson(@NotNull m reader) {
        Intrinsics.checkNotNullParameter(reader, "reader");
        reader.s();
        String[] strArr = null;
        String str = null;
        int i10 = -1;
        while (reader.hasNext()) {
            int W = reader.W(this.options);
            if (W == -1) {
                reader.E0();
                reader.P();
            } else if (W == 0) {
                strArr = (String[]) this.nullableArrayOfStringAdapter.fromJson(reader);
            } else if (W == 1) {
                str = (String) this.stringAdapter.fromJson(reader);
                if (str == null) {
                    throw ym.c.x("type", "type", reader);
                }
                i10 = -3;
            } else {
                continue;
            }
        }
        reader.z();
        if (i10 == -3) {
            Intrinsics.checkNotNull(str, "null cannot be cast to non-null type kotlin.String");
            return new InquiryField.MultiChoicesField(strArr, str);
        }
        Constructor<InquiryField.MultiChoicesField> constructor = this.constructorRef;
        if (constructor == null) {
            constructor = InquiryField.MultiChoicesField.class.getDeclaredConstructor(String[].class, String.class, Integer.TYPE, ym.c.f54853c);
            this.constructorRef = constructor;
            Intrinsics.checkNotNullExpressionValue(constructor, "also(...)");
        }
        InquiryField.MultiChoicesField newInstance = constructor.newInstance(strArr, str, Integer.valueOf(i10), null);
        Intrinsics.checkNotNullExpressionValue(newInstance, "newInstance(...)");
        return newInstance;
    }

    @Override // com.squareup.moshi.h
    public void toJson(@NotNull t writer, InquiryField.MultiChoicesField multiChoicesField) {
        Intrinsics.checkNotNullParameter(writer, "writer");
        if (multiChoicesField != null) {
            writer.k();
            writer.W("value");
            this.nullableArrayOfStringAdapter.toJson(writer, multiChoicesField.getValue());
            writer.W("type");
            this.stringAdapter.toJson(writer, multiChoicesField.getType());
            writer.E();
            return;
        }
        throw new NullPointerException("value_ was null! Wrap in .nullSafe() to write nullable values.");
    }
}
