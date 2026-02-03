package com.withpersona.sdk2.inquiry.ui.network;

import com.facebook.react.devsupport.StackTraceHelper;
import com.squareup.moshi.h;
import com.squareup.moshi.m;
import com.squareup.moshi.t;
import com.squareup.moshi.w;
import com.withpersona.sdk2.inquiry.ui.network.OneTimeLinkCodeForPersonasRequest;
import kotlin.collections.x0;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
import vm.c;
@kotlin.Metadata(d1 = {"\u0000D\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u0003\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\u000f\u0012\u0006\u0010\u0004\u001a\u00020\u0003¢\u0006\u0004\b\u0005\u0010\u0006J\u000f\u0010\b\u001a\u00020\u0007H\u0016¢\u0006\u0004\b\b\u0010\tJ\u0017\u0010\f\u001a\u00020\u00022\u0006\u0010\u000b\u001a\u00020\nH\u0016¢\u0006\u0004\b\f\u0010\rJ!\u0010\u0012\u001a\u00020\u00112\u0006\u0010\u000f\u001a\u00020\u000e2\b\u0010\u0010\u001a\u0004\u0018\u00010\u0002H\u0016¢\u0006\u0004\b\u0012\u0010\u0013R\u0014\u0010\u0016\u001a\u00020\u00148\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\f\u0010\u0015R\u001a\u0010\u0018\u001a\b\u0012\u0004\u0012\u00020\u00070\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0012\u0010\u0017R\u001a\u0010\u001b\u001a\b\u0012\u0004\u0012\u00020\u00190\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001a\u0010\u0017¨\u0006\u001c"}, d2 = {"Lcom/withpersona/sdk2/inquiry/ui/network/OneTimeLinkCodeForPersonasRequest_NamedComponentParamJsonAdapter;", "Lcom/squareup/moshi/h;", "Lcom/withpersona/sdk2/inquiry/ui/network/OneTimeLinkCodeForPersonasRequest$NamedComponentParam;", "Lcom/squareup/moshi/w;", "moshi", "<init>", "(Lcom/squareup/moshi/w;)V", "", "toString", "()Ljava/lang/String;", "Lcom/squareup/moshi/m;", "reader", "a", "(Lcom/squareup/moshi/m;)Lcom/withpersona/sdk2/inquiry/ui/network/OneTimeLinkCodeForPersonasRequest$NamedComponentParam;", "Lcom/squareup/moshi/t;", "writer", "value_", "", "b", "(Lcom/squareup/moshi/t;Lcom/withpersona/sdk2/inquiry/ui/network/OneTimeLinkCodeForPersonasRequest$NamedComponentParam;)V", "Lcom/squareup/moshi/m$b;", "Lcom/squareup/moshi/m$b;", "options", "Lcom/squareup/moshi/h;", "stringAdapter", "Lcom/withpersona/sdk2/inquiry/ui/network/ComponentParam;", "c", "componentParamAdapter", "ui_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class OneTimeLinkCodeForPersonasRequest_NamedComponentParamJsonAdapter extends h {

    /* renamed from: a  reason: collision with root package name */
    private final m.b f19433a;

    /* renamed from: b  reason: collision with root package name */
    private final h f19434b;

    /* renamed from: c  reason: collision with root package name */
    private final h f19435c;

    public OneTimeLinkCodeForPersonasRequest_NamedComponentParamJsonAdapter(@NotNull w moshi) {
        Intrinsics.checkNotNullParameter(moshi, "moshi");
        m.b a10 = m.b.a(StackTraceHelper.NAME_KEY, "value");
        Intrinsics.checkNotNullExpressionValue(a10, "of(...)");
        this.f19433a = a10;
        h f10 = moshi.f(String.class, x0.d(), StackTraceHelper.NAME_KEY);
        Intrinsics.checkNotNullExpressionValue(f10, "adapter(...)");
        this.f19434b = f10;
        h f11 = moshi.f(ComponentParam.class, x0.d(), "value");
        Intrinsics.checkNotNullExpressionValue(f11, "adapter(...)");
        this.f19435c = f11;
    }

    @Override // com.squareup.moshi.h
    /* renamed from: a */
    public OneTimeLinkCodeForPersonasRequest.NamedComponentParam fromJson(m reader) {
        Intrinsics.checkNotNullParameter(reader, "reader");
        reader.r();
        String str = null;
        ComponentParam componentParam = null;
        while (reader.hasNext()) {
            int A0 = reader.A0(this.f19433a);
            if (A0 != -1) {
                if (A0 != 0) {
                    if (A0 == 1 && (componentParam = (ComponentParam) this.f19435c.fromJson(reader)) == null) {
                        throw c.x("value__", "value", reader);
                    }
                } else {
                    str = (String) this.f19434b.fromJson(reader);
                    if (str == null) {
                        throw c.x(StackTraceHelper.NAME_KEY, StackTraceHelper.NAME_KEY, reader);
                    }
                }
            } else {
                reader.E0();
                reader.P();
            }
        }
        reader.y();
        if (str != null) {
            if (componentParam != null) {
                return new OneTimeLinkCodeForPersonasRequest.NamedComponentParam(str, componentParam);
            }
            throw c.o("value__", "value", reader);
        }
        throw c.o(StackTraceHelper.NAME_KEY, StackTraceHelper.NAME_KEY, reader);
    }

    @Override // com.squareup.moshi.h
    /* renamed from: b */
    public void toJson(t writer, OneTimeLinkCodeForPersonasRequest.NamedComponentParam namedComponentParam) {
        Intrinsics.checkNotNullParameter(writer, "writer");
        if (namedComponentParam != null) {
            writer.l();
            writer.A0(StackTraceHelper.NAME_KEY);
            this.f19434b.toJson(writer, namedComponentParam.a());
            writer.A0("value");
            this.f19435c.toJson(writer, namedComponentParam.b());
            writer.E();
            return;
        }
        throw new NullPointerException("value_ was null! Wrap in .nullSafe() to write nullable values.");
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder(75);
        sb2.append("GeneratedJsonAdapter(");
        sb2.append("OneTimeLinkCodeForPersonasRequest.NamedComponentParam");
        sb2.append(')');
        return sb2.toString();
    }
}
