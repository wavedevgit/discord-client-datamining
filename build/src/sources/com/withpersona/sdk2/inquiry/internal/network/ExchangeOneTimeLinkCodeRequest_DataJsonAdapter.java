package com.withpersona.sdk2.inquiry.internal.network;

import com.squareup.moshi.m;
import com.squareup.moshi.t;
import com.squareup.moshi.w;
import com.withpersona.sdk2.inquiry.internal.network.ExchangeOneTimeLinkCodeRequest;
import java.lang.reflect.Constructor;
import kotlin.Metadata;
import kotlin.collections.x0;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000L\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u0004\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\u000f\u0012\u0006\u0010\u0004\u001a\u00020\u0003¢\u0006\u0004\b\u0005\u0010\u0006J\u000f\u0010\b\u001a\u00020\u0007H\u0016¢\u0006\u0004\b\b\u0010\tJ\u0017\u0010\f\u001a\u00020\u00022\u0006\u0010\u000b\u001a\u00020\nH\u0016¢\u0006\u0004\b\f\u0010\rJ!\u0010\u0012\u001a\u00020\u00112\u0006\u0010\u000f\u001a\u00020\u000e2\b\u0010\u0010\u001a\u0004\u0018\u00010\u0002H\u0016¢\u0006\u0004\b\u0012\u0010\u0013R\u0014\u0010\u0016\u001a\u00020\u00148\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\f\u0010\u0015R\u001a\u0010\u0019\u001a\b\u0012\u0004\u0012\u00020\u00170\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0012\u0010\u0018R\u001a\u0010\u001b\u001a\b\u0012\u0004\u0012\u00020\u00070\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001a\u0010\u0018R\u001e\u0010\u001f\u001a\n\u0012\u0004\u0012\u00020\u0002\u0018\u00010\u001c8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b\u001d\u0010\u001e¨\u0006 "}, d2 = {"Lcom/withpersona/sdk2/inquiry/internal/network/ExchangeOneTimeLinkCodeRequest_DataJsonAdapter;", "Lcom/squareup/moshi/h;", "Lcom/withpersona/sdk2/inquiry/internal/network/ExchangeOneTimeLinkCodeRequest$Data;", "Lcom/squareup/moshi/w;", "moshi", "<init>", "(Lcom/squareup/moshi/w;)V", "", "toString", "()Ljava/lang/String;", "Lcom/squareup/moshi/m;", "reader", "a", "(Lcom/squareup/moshi/m;)Lcom/withpersona/sdk2/inquiry/internal/network/ExchangeOneTimeLinkCodeRequest$Data;", "Lcom/squareup/moshi/t;", "writer", "value_", "", "b", "(Lcom/squareup/moshi/t;Lcom/withpersona/sdk2/inquiry/internal/network/ExchangeOneTimeLinkCodeRequest$Data;)V", "Lcom/squareup/moshi/m$b;", "Lcom/squareup/moshi/m$b;", "options", "Lcom/withpersona/sdk2/inquiry/internal/network/ExchangeOneTimeLinkCodeRequest$Attributes;", "Lcom/squareup/moshi/h;", "attributesAdapter", "c", "stringAdapter", "Ljava/lang/reflect/Constructor;", "d", "Ljava/lang/reflect/Constructor;", "constructorRef", "inquiry-internal_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class ExchangeOneTimeLinkCodeRequest_DataJsonAdapter extends com.squareup.moshi.h {

    /* renamed from: a  reason: collision with root package name */
    private final m.b f18799a;

    /* renamed from: b  reason: collision with root package name */
    private final com.squareup.moshi.h f18800b;

    /* renamed from: c  reason: collision with root package name */
    private final com.squareup.moshi.h f18801c;

    /* renamed from: d  reason: collision with root package name */
    private volatile Constructor f18802d;

    public ExchangeOneTimeLinkCodeRequest_DataJsonAdapter(@NotNull w moshi) {
        Intrinsics.checkNotNullParameter(moshi, "moshi");
        m.b a10 = m.b.a("attributes", "type");
        Intrinsics.checkNotNullExpressionValue(a10, "of(...)");
        this.f18799a = a10;
        com.squareup.moshi.h f10 = moshi.f(ExchangeOneTimeLinkCodeRequest.Attributes.class, x0.d(), "attributes");
        Intrinsics.checkNotNullExpressionValue(f10, "adapter(...)");
        this.f18800b = f10;
        com.squareup.moshi.h f11 = moshi.f(String.class, x0.d(), "type");
        Intrinsics.checkNotNullExpressionValue(f11, "adapter(...)");
        this.f18801c = f11;
    }

    @Override // com.squareup.moshi.h
    /* renamed from: a */
    public ExchangeOneTimeLinkCodeRequest.Data fromJson(m reader) {
        Intrinsics.checkNotNullParameter(reader, "reader");
        reader.r();
        ExchangeOneTimeLinkCodeRequest.Attributes attributes = null;
        String str = null;
        int i10 = -1;
        while (reader.hasNext()) {
            int A0 = reader.A0(this.f18799a);
            if (A0 != -1) {
                if (A0 != 0) {
                    if (A0 == 1) {
                        str = (String) this.f18801c.fromJson(reader);
                        if (str != null) {
                            i10 = -3;
                        } else {
                            throw vm.c.x("type", "type", reader);
                        }
                    } else {
                        continue;
                    }
                } else {
                    attributes = (ExchangeOneTimeLinkCodeRequest.Attributes) this.f18800b.fromJson(reader);
                    if (attributes == null) {
                        throw vm.c.x("attributes", "attributes", reader);
                    }
                }
            } else {
                reader.E0();
                reader.P();
            }
        }
        reader.y();
        if (i10 == -3) {
            if (attributes != null) {
                Intrinsics.checkNotNull(str, "null cannot be cast to non-null type kotlin.String");
                return new ExchangeOneTimeLinkCodeRequest.Data(attributes, str);
            }
            throw vm.c.o("attributes", "attributes", reader);
        }
        Constructor constructor = this.f18802d;
        if (constructor == null) {
            constructor = ExchangeOneTimeLinkCodeRequest.Data.class.getDeclaredConstructor(ExchangeOneTimeLinkCodeRequest.Attributes.class, String.class, Integer.TYPE, vm.c.f51688c);
            this.f18802d = constructor;
            Intrinsics.checkNotNullExpressionValue(constructor, "also(...)");
        }
        if (attributes != null) {
            Object newInstance = constructor.newInstance(attributes, str, Integer.valueOf(i10), null);
            Intrinsics.checkNotNullExpressionValue(newInstance, "newInstance(...)");
            return (ExchangeOneTimeLinkCodeRequest.Data) newInstance;
        }
        throw vm.c.o("attributes", "attributes", reader);
    }

    @Override // com.squareup.moshi.h
    /* renamed from: b */
    public void toJson(t writer, ExchangeOneTimeLinkCodeRequest.Data data) {
        Intrinsics.checkNotNullParameter(writer, "writer");
        if (data != null) {
            writer.l();
            writer.A0("attributes");
            this.f18800b.toJson(writer, data.a());
            writer.A0("type");
            this.f18801c.toJson(writer, data.b());
            writer.E();
            return;
        }
        throw new NullPointerException("value_ was null! Wrap in .nullSafe() to write nullable values.");
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder(57);
        sb2.append("GeneratedJsonAdapter(");
        sb2.append("ExchangeOneTimeLinkCodeRequest.Data");
        sb2.append(')');
        return sb2.toString();
    }
}
