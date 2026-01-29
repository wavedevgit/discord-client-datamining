package com.withpersona.sdk2.inquiry.network.dto;

import com.facebook.react.devsupport.StackTraceHelper;
import com.squareup.moshi.h;
import com.squareup.moshi.m;
import com.squareup.moshi.t;
import com.squareup.moshi.w;
import com.withpersona.sdk2.inquiry.network.dto.CheckInquiryResponse;
import java.lang.reflect.Constructor;
import kotlin.Metadata;
import kotlin.collections.x0;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000J\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\u000f\u0012\u0006\u0010\u0004\u001a\u00020\u0003¢\u0006\u0004\b\u0005\u0010\u0006J\u000f\u0010\b\u001a\u00020\u0007H\u0016¢\u0006\u0004\b\b\u0010\tJ\u0017\u0010\f\u001a\u00020\u00022\u0006\u0010\u000b\u001a\u00020\nH\u0016¢\u0006\u0004\b\f\u0010\rJ!\u0010\u0012\u001a\u00020\u00112\u0006\u0010\u000f\u001a\u00020\u000e2\b\u0010\u0010\u001a\u0004\u0018\u00010\u0002H\u0016¢\u0006\u0004\b\u0012\u0010\u0013R\u0014\u0010\u0015\u001a\u00020\u00148\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0015\u0010\u0016R\u001a\u0010\u0017\u001a\b\u0012\u0004\u0012\u00020\u00070\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0017\u0010\u0018R\u001a\u0010\u001a\u001a\b\u0012\u0004\u0012\u00020\u00190\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001a\u0010\u0018R\u001e\u0010\u001c\u001a\n\u0012\u0004\u0012\u00020\u0002\u0018\u00010\u001b8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b\u001c\u0010\u001d¨\u0006\u001e"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/CheckInquiryResponse_DataJsonAdapter;", "Lcom/squareup/moshi/h;", "Lcom/withpersona/sdk2/inquiry/network/dto/CheckInquiryResponse$Data;", "Lcom/squareup/moshi/w;", "moshi", "<init>", "(Lcom/squareup/moshi/w;)V", "", "toString", "()Ljava/lang/String;", "Lcom/squareup/moshi/m;", "reader", "fromJson", "(Lcom/squareup/moshi/m;)Lcom/withpersona/sdk2/inquiry/network/dto/CheckInquiryResponse$Data;", "Lcom/squareup/moshi/t;", "writer", "value_", "", "toJson", "(Lcom/squareup/moshi/t;Lcom/withpersona/sdk2/inquiry/network/dto/CheckInquiryResponse$Data;)V", "Lcom/squareup/moshi/m$b;", "options", "Lcom/squareup/moshi/m$b;", "stringAdapter", "Lcom/squareup/moshi/h;", "Lcom/withpersona/sdk2/inquiry/network/dto/CheckInquiryResponse$Attributes;", "attributesAdapter", "Ljava/lang/reflect/Constructor;", "constructorRef", "Ljava/lang/reflect/Constructor;", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class CheckInquiryResponse_DataJsonAdapter extends h {
    @NotNull
    private final h attributesAdapter;
    private volatile Constructor<CheckInquiryResponse.Data> constructorRef;
    @NotNull
    private final m.b options;
    @NotNull
    private final h stringAdapter;

    public CheckInquiryResponse_DataJsonAdapter(@NotNull w moshi) {
        Intrinsics.checkNotNullParameter(moshi, "moshi");
        m.b a10 = m.b.a(StackTraceHelper.ID_KEY, "type", "attributes");
        Intrinsics.checkNotNullExpressionValue(a10, "of(...)");
        this.options = a10;
        h f10 = moshi.f(String.class, x0.d(), StackTraceHelper.ID_KEY);
        Intrinsics.checkNotNullExpressionValue(f10, "adapter(...)");
        this.stringAdapter = f10;
        h f11 = moshi.f(CheckInquiryResponse.Attributes.class, x0.d(), "attributes");
        Intrinsics.checkNotNullExpressionValue(f11, "adapter(...)");
        this.attributesAdapter = f11;
    }

    @NotNull
    public String toString() {
        StringBuilder sb2 = new StringBuilder(47);
        sb2.append("GeneratedJsonAdapter(");
        sb2.append("CheckInquiryResponse.Data");
        sb2.append(')');
        return sb2.toString();
    }

    @Override // com.squareup.moshi.h
    @NotNull
    public CheckInquiryResponse.Data fromJson(@NotNull m reader) {
        Intrinsics.checkNotNullParameter(reader, "reader");
        reader.r();
        String str = null;
        String str2 = null;
        CheckInquiryResponse.Attributes attributes = null;
        int i10 = -1;
        while (reader.hasNext()) {
            int A0 = reader.A0(this.options);
            if (A0 == -1) {
                reader.E0();
                reader.P();
            } else if (A0 == 0) {
                str = (String) this.stringAdapter.fromJson(reader);
                if (str == null) {
                    throw sm.c.x(StackTraceHelper.ID_KEY, StackTraceHelper.ID_KEY, reader);
                }
            } else if (A0 == 1) {
                str2 = (String) this.stringAdapter.fromJson(reader);
                if (str2 == null) {
                    throw sm.c.x("type", "type", reader);
                }
            } else if (A0 == 2) {
                attributes = (CheckInquiryResponse.Attributes) this.attributesAdapter.fromJson(reader);
                if (attributes == null) {
                    throw sm.c.x("attributes", "attributes", reader);
                }
                i10 = -5;
            } else {
                continue;
            }
        }
        reader.y();
        if (i10 == -5) {
            if (str != null) {
                if (str2 != null) {
                    Intrinsics.checkNotNull(attributes, "null cannot be cast to non-null type com.withpersona.sdk2.inquiry.network.dto.CheckInquiryResponse.Attributes");
                    return new CheckInquiryResponse.Data(str, str2, attributes);
                }
                throw sm.c.o("type", "type", reader);
            }
            throw sm.c.o(StackTraceHelper.ID_KEY, StackTraceHelper.ID_KEY, reader);
        }
        Constructor<CheckInquiryResponse.Data> constructor = this.constructorRef;
        if (constructor == null) {
            constructor = CheckInquiryResponse.Data.class.getDeclaredConstructor(String.class, String.class, CheckInquiryResponse.Attributes.class, Integer.TYPE, sm.c.f49081c);
            this.constructorRef = constructor;
            Intrinsics.checkNotNullExpressionValue(constructor, "also(...)");
        }
        if (str != null) {
            if (str2 != null) {
                CheckInquiryResponse.Data newInstance = constructor.newInstance(str, str2, attributes, Integer.valueOf(i10), null);
                Intrinsics.checkNotNullExpressionValue(newInstance, "newInstance(...)");
                return newInstance;
            }
            throw sm.c.o("type", "type", reader);
        }
        throw sm.c.o(StackTraceHelper.ID_KEY, StackTraceHelper.ID_KEY, reader);
    }

    @Override // com.squareup.moshi.h
    public void toJson(@NotNull t writer, CheckInquiryResponse.Data data) {
        Intrinsics.checkNotNullParameter(writer, "writer");
        if (data != null) {
            writer.l();
            writer.A0(StackTraceHelper.ID_KEY);
            this.stringAdapter.toJson(writer, data.getId());
            writer.A0("type");
            this.stringAdapter.toJson(writer, data.getType());
            writer.A0("attributes");
            this.attributesAdapter.toJson(writer, data.getAttributes());
            writer.E();
            return;
        }
        throw new NullPointerException("value_ was null! Wrap in .nullSafe() to write nullable values.");
    }
}
