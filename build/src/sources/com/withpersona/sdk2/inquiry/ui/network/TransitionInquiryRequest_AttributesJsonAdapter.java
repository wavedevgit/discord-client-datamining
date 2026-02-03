package com.withpersona.sdk2.inquiry.ui.network;

import com.squareup.moshi.a0;
import com.squareup.moshi.h;
import com.squareup.moshi.m;
import com.squareup.moshi.t;
import com.squareup.moshi.w;
import com.withpersona.sdk2.inquiry.ui.network.TransitionInquiryRequest;
import java.util.Map;
import kotlin.collections.x0;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@kotlin.Metadata(d1 = {"\u0000H\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010$\n\u0002\u0018\u0002\n\u0002\b\u0003\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\u000f\u0012\u0006\u0010\u0004\u001a\u00020\u0003¢\u0006\u0004\b\u0005\u0010\u0006J\u000f\u0010\b\u001a\u00020\u0007H\u0016¢\u0006\u0004\b\b\u0010\tJ\u0017\u0010\f\u001a\u00020\u00022\u0006\u0010\u000b\u001a\u00020\nH\u0016¢\u0006\u0004\b\f\u0010\rJ!\u0010\u0012\u001a\u00020\u00112\u0006\u0010\u000f\u001a\u00020\u000e2\b\u0010\u0010\u001a\u0004\u0018\u00010\u0002H\u0016¢\u0006\u0004\b\u0012\u0010\u0013R\u0014\u0010\u0016\u001a\u00020\u00148\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\f\u0010\u0015R(\u0010\u001a\u001a\u0016\u0012\u0012\u0012\u0010\u0012\u0004\u0012\u00020\u0007\u0012\u0004\u0012\u00020\u0018\u0018\u00010\u00170\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0012\u0010\u0019¨\u0006\u001b"}, d2 = {"Lcom/withpersona/sdk2/inquiry/ui/network/TransitionInquiryRequest_AttributesJsonAdapter;", "Lcom/squareup/moshi/h;", "Lcom/withpersona/sdk2/inquiry/ui/network/TransitionInquiryRequest$Attributes;", "Lcom/squareup/moshi/w;", "moshi", "<init>", "(Lcom/squareup/moshi/w;)V", "", "toString", "()Ljava/lang/String;", "Lcom/squareup/moshi/m;", "reader", "a", "(Lcom/squareup/moshi/m;)Lcom/withpersona/sdk2/inquiry/ui/network/TransitionInquiryRequest$Attributes;", "Lcom/squareup/moshi/t;", "writer", "value_", "", "b", "(Lcom/squareup/moshi/t;Lcom/withpersona/sdk2/inquiry/ui/network/TransitionInquiryRequest$Attributes;)V", "Lcom/squareup/moshi/m$b;", "Lcom/squareup/moshi/m$b;", "options", "", "Lcom/withpersona/sdk2/inquiry/ui/network/ComponentParam;", "Lcom/squareup/moshi/h;", "nullableMapOfStringComponentParamAdapter", "ui_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class TransitionInquiryRequest_AttributesJsonAdapter extends h {

    /* renamed from: a  reason: collision with root package name */
    private final m.b f19451a;

    /* renamed from: b  reason: collision with root package name */
    private final h f19452b;

    public TransitionInquiryRequest_AttributesJsonAdapter(@NotNull w moshi) {
        Intrinsics.checkNotNullParameter(moshi, "moshi");
        m.b a10 = m.b.a("componentParams");
        Intrinsics.checkNotNullExpressionValue(a10, "of(...)");
        this.f19451a = a10;
        h f10 = moshi.f(a0.j(Map.class, String.class, ComponentParam.class), x0.d(), "componentParams");
        Intrinsics.checkNotNullExpressionValue(f10, "adapter(...)");
        this.f19452b = f10;
    }

    @Override // com.squareup.moshi.h
    /* renamed from: a */
    public TransitionInquiryRequest.Attributes fromJson(m reader) {
        Intrinsics.checkNotNullParameter(reader, "reader");
        reader.r();
        Map map = null;
        while (reader.hasNext()) {
            int A0 = reader.A0(this.f19451a);
            if (A0 != -1) {
                if (A0 == 0) {
                    map = (Map) this.f19452b.fromJson(reader);
                }
            } else {
                reader.E0();
                reader.P();
            }
        }
        reader.y();
        return new TransitionInquiryRequest.Attributes(map);
    }

    @Override // com.squareup.moshi.h
    /* renamed from: b */
    public void toJson(t writer, TransitionInquiryRequest.Attributes attributes) {
        Intrinsics.checkNotNullParameter(writer, "writer");
        if (attributes != null) {
            writer.l();
            writer.A0("componentParams");
            this.f19452b.toJson(writer, attributes.a());
            writer.E();
            return;
        }
        throw new NullPointerException("value_ was null! Wrap in .nullSafe() to write nullable values.");
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder(57);
        sb2.append("GeneratedJsonAdapter(");
        sb2.append("TransitionInquiryRequest.Attributes");
        sb2.append(')');
        return sb2.toString();
    }
}
