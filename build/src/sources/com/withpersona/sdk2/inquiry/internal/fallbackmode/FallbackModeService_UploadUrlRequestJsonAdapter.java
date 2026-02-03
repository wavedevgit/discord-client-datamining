package com.withpersona.sdk2.inquiry.internal.fallbackmode;

import com.squareup.moshi.m;
import com.squareup.moshi.t;
import com.squareup.moshi.w;
import com.withpersona.sdk2.inquiry.internal.fallbackmode.FallbackModeService;
import kotlin.Metadata;
import kotlin.collections.x0;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000D\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\t\n\u0002\b\u0005\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\u000f\u0012\u0006\u0010\u0004\u001a\u00020\u0003¢\u0006\u0004\b\u0005\u0010\u0006J\u000f\u0010\b\u001a\u00020\u0007H\u0016¢\u0006\u0004\b\b\u0010\tJ\u0017\u0010\f\u001a\u00020\u00022\u0006\u0010\u000b\u001a\u00020\nH\u0016¢\u0006\u0004\b\f\u0010\rJ!\u0010\u0012\u001a\u00020\u00112\u0006\u0010\u000f\u001a\u00020\u000e2\b\u0010\u0010\u001a\u0004\u0018\u00010\u0002H\u0016¢\u0006\u0004\b\u0012\u0010\u0013R\u0014\u0010\u0016\u001a\u00020\u00148\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\f\u0010\u0015R\u001a\u0010\u0019\u001a\b\u0012\u0004\u0012\u00020\u00170\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0012\u0010\u0018R\u001a\u0010\u001b\u001a\b\u0012\u0004\u0012\u00020\u00070\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001a\u0010\u0018¨\u0006\u001c"}, d2 = {"Lcom/withpersona/sdk2/inquiry/internal/fallbackmode/FallbackModeService_UploadUrlRequestJsonAdapter;", "Lcom/squareup/moshi/h;", "Lcom/withpersona/sdk2/inquiry/internal/fallbackmode/FallbackModeService$UploadUrlRequest;", "Lcom/squareup/moshi/w;", "moshi", "<init>", "(Lcom/squareup/moshi/w;)V", "", "toString", "()Ljava/lang/String;", "Lcom/squareup/moshi/m;", "reader", "a", "(Lcom/squareup/moshi/m;)Lcom/withpersona/sdk2/inquiry/internal/fallbackmode/FallbackModeService$UploadUrlRequest;", "Lcom/squareup/moshi/t;", "writer", "value_", "", "b", "(Lcom/squareup/moshi/t;Lcom/withpersona/sdk2/inquiry/internal/fallbackmode/FallbackModeService$UploadUrlRequest;)V", "Lcom/squareup/moshi/m$b;", "Lcom/squareup/moshi/m$b;", "options", "", "Lcom/squareup/moshi/h;", "longAdapter", "c", "stringAdapter", "inquiry-internal_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class FallbackModeService_UploadUrlRequestJsonAdapter extends com.squareup.moshi.h {

    /* renamed from: a  reason: collision with root package name */
    private final m.b f18440a;

    /* renamed from: b  reason: collision with root package name */
    private final com.squareup.moshi.h f18441b;

    /* renamed from: c  reason: collision with root package name */
    private final com.squareup.moshi.h f18442c;

    public FallbackModeService_UploadUrlRequestJsonAdapter(@NotNull w moshi) {
        Intrinsics.checkNotNullParameter(moshi, "moshi");
        m.b a10 = m.b.a("expected-content-length", "expected-content-type");
        Intrinsics.checkNotNullExpressionValue(a10, "of(...)");
        this.f18440a = a10;
        com.squareup.moshi.h f10 = moshi.f(Long.TYPE, x0.d(), "expectedContentLength");
        Intrinsics.checkNotNullExpressionValue(f10, "adapter(...)");
        this.f18441b = f10;
        com.squareup.moshi.h f11 = moshi.f(String.class, x0.d(), "expectedContentType");
        Intrinsics.checkNotNullExpressionValue(f11, "adapter(...)");
        this.f18442c = f11;
    }

    @Override // com.squareup.moshi.h
    /* renamed from: a */
    public FallbackModeService.UploadUrlRequest fromJson(m reader) {
        Intrinsics.checkNotNullParameter(reader, "reader");
        reader.r();
        Long l10 = null;
        String str = null;
        while (reader.hasNext()) {
            int A0 = reader.A0(this.f18440a);
            if (A0 != -1) {
                if (A0 != 0) {
                    if (A0 == 1 && (str = (String) this.f18442c.fromJson(reader)) == null) {
                        throw vm.c.x("expectedContentType", "expected-content-type", reader);
                    }
                } else {
                    l10 = (Long) this.f18441b.fromJson(reader);
                    if (l10 == null) {
                        throw vm.c.x("expectedContentLength", "expected-content-length", reader);
                    }
                }
            } else {
                reader.E0();
                reader.P();
            }
        }
        reader.y();
        if (l10 != null) {
            long longValue = l10.longValue();
            if (str != null) {
                return new FallbackModeService.UploadUrlRequest(longValue, str);
            }
            throw vm.c.o("expectedContentType", "expected-content-type", reader);
        }
        throw vm.c.o("expectedContentLength", "expected-content-length", reader);
    }

    @Override // com.squareup.moshi.h
    /* renamed from: b */
    public void toJson(t writer, FallbackModeService.UploadUrlRequest uploadUrlRequest) {
        Intrinsics.checkNotNullParameter(writer, "writer");
        if (uploadUrlRequest != null) {
            writer.l();
            writer.A0("expected-content-length");
            this.f18441b.toJson(writer, Long.valueOf(uploadUrlRequest.a()));
            writer.A0("expected-content-type");
            this.f18442c.toJson(writer, uploadUrlRequest.b());
            writer.E();
            return;
        }
        throw new NullPointerException("value_ was null! Wrap in .nullSafe() to write nullable values.");
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder(58);
        sb2.append("GeneratedJsonAdapter(");
        sb2.append("FallbackModeService.UploadUrlRequest");
        sb2.append(')');
        return sb2.toString();
    }
}
