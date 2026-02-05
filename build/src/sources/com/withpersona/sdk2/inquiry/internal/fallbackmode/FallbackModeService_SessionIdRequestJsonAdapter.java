package com.withpersona.sdk2.inquiry.internal.fallbackmode;

import com.squareup.moshi.m;
import com.squareup.moshi.t;
import com.squareup.moshi.w;
import com.withpersona.sdk2.inquiry.internal.InquiryFieldMap;
import com.withpersona.sdk2.inquiry.internal.fallbackmode.FallbackModeService;
import kotlin.Metadata;
import kotlin.collections.x0;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000D\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0006\n\u0002\u0018\u0002\n\u0002\b\u0003\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\u000f\u0012\u0006\u0010\u0004\u001a\u00020\u0003¢\u0006\u0004\b\u0005\u0010\u0006J\u000f\u0010\b\u001a\u00020\u0007H\u0016¢\u0006\u0004\b\b\u0010\tJ\u0017\u0010\f\u001a\u00020\u00022\u0006\u0010\u000b\u001a\u00020\nH\u0016¢\u0006\u0004\b\f\u0010\rJ!\u0010\u0012\u001a\u00020\u00112\u0006\u0010\u000f\u001a\u00020\u000e2\b\u0010\u0010\u001a\u0004\u0018\u00010\u0002H\u0016¢\u0006\u0004\b\u0012\u0010\u0013R\u0014\u0010\u0016\u001a\u00020\u00148\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\f\u0010\u0015R\u001a\u0010\u0018\u001a\b\u0012\u0004\u0012\u00020\u00070\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0012\u0010\u0017R\u001c\u0010\u001a\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u00070\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0019\u0010\u0017R\u001c\u0010\u001d\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u001b0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001c\u0010\u0017¨\u0006\u001e"}, d2 = {"Lcom/withpersona/sdk2/inquiry/internal/fallbackmode/FallbackModeService_SessionIdRequestJsonAdapter;", "Lcom/squareup/moshi/h;", "Lcom/withpersona/sdk2/inquiry/internal/fallbackmode/FallbackModeService$SessionIdRequest;", "Lcom/squareup/moshi/w;", "moshi", "<init>", "(Lcom/squareup/moshi/w;)V", "", "toString", "()Ljava/lang/String;", "Lcom/squareup/moshi/m;", "reader", "a", "(Lcom/squareup/moshi/m;)Lcom/withpersona/sdk2/inquiry/internal/fallbackmode/FallbackModeService$SessionIdRequest;", "Lcom/squareup/moshi/t;", "writer", "value_", "", "b", "(Lcom/squareup/moshi/t;Lcom/withpersona/sdk2/inquiry/internal/fallbackmode/FallbackModeService$SessionIdRequest;)V", "Lcom/squareup/moshi/m$b;", "Lcom/squareup/moshi/m$b;", "options", "Lcom/squareup/moshi/h;", "stringAdapter", "c", "nullableStringAdapter", "Lcom/withpersona/sdk2/inquiry/internal/InquiryFieldMap;", "d", "nullableInquiryFieldMapAdapter", "inquiry-internal_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class FallbackModeService_SessionIdRequestJsonAdapter extends com.squareup.moshi.h {

    /* renamed from: a  reason: collision with root package name */
    private final m.b f18834a;

    /* renamed from: b  reason: collision with root package name */
    private final com.squareup.moshi.h f18835b;

    /* renamed from: c  reason: collision with root package name */
    private final com.squareup.moshi.h f18836c;

    /* renamed from: d  reason: collision with root package name */
    private final com.squareup.moshi.h f18837d;

    public FallbackModeService_SessionIdRequestJsonAdapter(@NotNull w moshi) {
        Intrinsics.checkNotNullParameter(moshi, "moshi");
        m.b a10 = m.b.a("inquiry-template-id", "inquiry-template-version-id", "inquiry-id", "reference-id", "account-id", "environment", "environment-id", "fields", "theme-set-id");
        Intrinsics.checkNotNullExpressionValue(a10, "of(...)");
        this.f18834a = a10;
        com.squareup.moshi.h f10 = moshi.f(String.class, x0.d(), "inquiryTemplateId");
        Intrinsics.checkNotNullExpressionValue(f10, "adapter(...)");
        this.f18835b = f10;
        com.squareup.moshi.h f11 = moshi.f(String.class, x0.d(), "inquiryTemplateVersion");
        Intrinsics.checkNotNullExpressionValue(f11, "adapter(...)");
        this.f18836c = f11;
        com.squareup.moshi.h f12 = moshi.f(InquiryFieldMap.class, x0.d(), "fields");
        Intrinsics.checkNotNullExpressionValue(f12, "adapter(...)");
        this.f18837d = f12;
    }

    @Override // com.squareup.moshi.h
    /* renamed from: a */
    public FallbackModeService.SessionIdRequest fromJson(m reader) {
        Intrinsics.checkNotNullParameter(reader, "reader");
        reader.s();
        String str = null;
        String str2 = null;
        String str3 = null;
        String str4 = null;
        String str5 = null;
        String str6 = null;
        String str7 = null;
        InquiryFieldMap inquiryFieldMap = null;
        String str8 = null;
        while (reader.hasNext()) {
            switch (reader.W(this.f18834a)) {
                case -1:
                    reader.E0();
                    reader.P();
                    break;
                case 0:
                    str = (String) this.f18835b.fromJson(reader);
                    if (str != null) {
                        break;
                    } else {
                        throw ym.c.x("inquiryTemplateId", "inquiry-template-id", reader);
                    }
                case 1:
                    str2 = (String) this.f18836c.fromJson(reader);
                    break;
                case 2:
                    str3 = (String) this.f18836c.fromJson(reader);
                    break;
                case 3:
                    str4 = (String) this.f18836c.fromJson(reader);
                    break;
                case 4:
                    str5 = (String) this.f18836c.fromJson(reader);
                    break;
                case 5:
                    str6 = (String) this.f18836c.fromJson(reader);
                    break;
                case 6:
                    str7 = (String) this.f18836c.fromJson(reader);
                    break;
                case 7:
                    inquiryFieldMap = (InquiryFieldMap) this.f18837d.fromJson(reader);
                    break;
                case 8:
                    str8 = (String) this.f18836c.fromJson(reader);
                    break;
            }
        }
        reader.z();
        if (str != null) {
            return new FallbackModeService.SessionIdRequest(str, str2, str3, str4, str5, str6, str7, inquiryFieldMap, str8);
        }
        throw ym.c.o("inquiryTemplateId", "inquiry-template-id", reader);
    }

    @Override // com.squareup.moshi.h
    /* renamed from: b */
    public void toJson(t writer, FallbackModeService.SessionIdRequest sessionIdRequest) {
        Intrinsics.checkNotNullParameter(writer, "writer");
        if (sessionIdRequest != null) {
            writer.k();
            writer.W("inquiry-template-id");
            this.f18835b.toJson(writer, sessionIdRequest.f());
            writer.W("inquiry-template-version-id");
            this.f18836c.toJson(writer, sessionIdRequest.g());
            writer.W("inquiry-id");
            this.f18836c.toJson(writer, sessionIdRequest.e());
            writer.W("reference-id");
            this.f18836c.toJson(writer, sessionIdRequest.h());
            writer.W("account-id");
            this.f18836c.toJson(writer, sessionIdRequest.a());
            writer.W("environment");
            this.f18836c.toJson(writer, sessionIdRequest.b());
            writer.W("environment-id");
            this.f18836c.toJson(writer, sessionIdRequest.c());
            writer.W("fields");
            this.f18837d.toJson(writer, sessionIdRequest.d());
            writer.W("theme-set-id");
            this.f18836c.toJson(writer, sessionIdRequest.i());
            writer.E();
            return;
        }
        throw new NullPointerException("value_ was null! Wrap in .nullSafe() to write nullable values.");
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder(58);
        sb2.append("GeneratedJsonAdapter(");
        sb2.append("FallbackModeService.SessionIdRequest");
        sb2.append(')');
        return sb2.toString();
    }
}
