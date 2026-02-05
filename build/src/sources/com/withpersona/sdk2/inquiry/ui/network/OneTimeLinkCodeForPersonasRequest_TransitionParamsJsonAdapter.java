package com.withpersona.sdk2.inquiry.ui.network;

import com.squareup.moshi.a0;
import com.squareup.moshi.h;
import com.squareup.moshi.m;
import com.squareup.moshi.t;
import com.squareup.moshi.w;
import com.withpersona.sdk2.inquiry.ui.network.OneTimeLinkCodeForPersonasRequest;
import java.util.List;
import kotlin.collections.x0;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@kotlin.Metadata(d1 = {"\u0000H\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0002\b\u0003\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\u000f\u0012\u0006\u0010\u0004\u001a\u00020\u0003¢\u0006\u0004\b\u0005\u0010\u0006J\u000f\u0010\b\u001a\u00020\u0007H\u0016¢\u0006\u0004\b\b\u0010\tJ\u0017\u0010\f\u001a\u00020\u00022\u0006\u0010\u000b\u001a\u00020\nH\u0016¢\u0006\u0004\b\f\u0010\rJ!\u0010\u0012\u001a\u00020\u00112\u0006\u0010\u000f\u001a\u00020\u000e2\b\u0010\u0010\u001a\u0004\u0018\u00010\u0002H\u0016¢\u0006\u0004\b\u0012\u0010\u0013R\u0014\u0010\u0016\u001a\u00020\u00148\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\f\u0010\u0015R\"\u0010\u001a\u001a\u0010\u0012\f\u0012\n\u0012\u0004\u0012\u00020\u0018\u0018\u00010\u00170\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0012\u0010\u0019¨\u0006\u001b"}, d2 = {"Lcom/withpersona/sdk2/inquiry/ui/network/OneTimeLinkCodeForPersonasRequest_TransitionParamsJsonAdapter;", "Lcom/squareup/moshi/h;", "Lcom/withpersona/sdk2/inquiry/ui/network/OneTimeLinkCodeForPersonasRequest$TransitionParams;", "Lcom/squareup/moshi/w;", "moshi", "<init>", "(Lcom/squareup/moshi/w;)V", "", "toString", "()Ljava/lang/String;", "Lcom/squareup/moshi/m;", "reader", "a", "(Lcom/squareup/moshi/m;)Lcom/withpersona/sdk2/inquiry/ui/network/OneTimeLinkCodeForPersonasRequest$TransitionParams;", "Lcom/squareup/moshi/t;", "writer", "value_", "", "b", "(Lcom/squareup/moshi/t;Lcom/withpersona/sdk2/inquiry/ui/network/OneTimeLinkCodeForPersonasRequest$TransitionParams;)V", "Lcom/squareup/moshi/m$b;", "Lcom/squareup/moshi/m$b;", "options", "", "Lcom/withpersona/sdk2/inquiry/ui/network/OneTimeLinkCodeForPersonasRequest$NamedComponentParam;", "Lcom/squareup/moshi/h;", "nullableListOfNamedComponentParamAdapter", "ui_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class OneTimeLinkCodeForPersonasRequest_TransitionParamsJsonAdapter extends h {

    /* renamed from: a  reason: collision with root package name */
    private final m.b f19842a;

    /* renamed from: b  reason: collision with root package name */
    private final h f19843b;

    public OneTimeLinkCodeForPersonasRequest_TransitionParamsJsonAdapter(@NotNull w moshi) {
        Intrinsics.checkNotNullParameter(moshi, "moshi");
        m.b a10 = m.b.a("componentData");
        Intrinsics.checkNotNullExpressionValue(a10, "of(...)");
        this.f19842a = a10;
        h f10 = moshi.f(a0.j(List.class, OneTimeLinkCodeForPersonasRequest.NamedComponentParam.class), x0.d(), "componentData");
        Intrinsics.checkNotNullExpressionValue(f10, "adapter(...)");
        this.f19843b = f10;
    }

    @Override // com.squareup.moshi.h
    /* renamed from: a */
    public OneTimeLinkCodeForPersonasRequest.TransitionParams fromJson(m reader) {
        Intrinsics.checkNotNullParameter(reader, "reader");
        reader.s();
        List list = null;
        while (reader.hasNext()) {
            int W = reader.W(this.f19842a);
            if (W != -1) {
                if (W == 0) {
                    list = (List) this.f19843b.fromJson(reader);
                }
            } else {
                reader.E0();
                reader.P();
            }
        }
        reader.z();
        return new OneTimeLinkCodeForPersonasRequest.TransitionParams(list);
    }

    @Override // com.squareup.moshi.h
    /* renamed from: b */
    public void toJson(t writer, OneTimeLinkCodeForPersonasRequest.TransitionParams transitionParams) {
        Intrinsics.checkNotNullParameter(writer, "writer");
        if (transitionParams != null) {
            writer.k();
            writer.W("componentData");
            this.f19843b.toJson(writer, transitionParams.a());
            writer.E();
            return;
        }
        throw new NullPointerException("value_ was null! Wrap in .nullSafe() to write nullable values.");
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder(72);
        sb2.append("GeneratedJsonAdapter(");
        sb2.append("OneTimeLinkCodeForPersonasRequest.TransitionParams");
        sb2.append(')');
        return sb2.toString();
    }
}
