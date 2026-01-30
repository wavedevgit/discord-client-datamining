package com.withpersona.sdk2.inquiry.internal.network;

import com.squareup.moshi.m;
import com.squareup.moshi.t;
import com.squareup.moshi.w;
import com.withpersona.sdk2.inquiry.internal.network.VerifyDeviceIntegrityRequest;
import java.lang.reflect.Constructor;
import kotlin.Metadata;
import kotlin.collections.x0;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000L\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0000\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\u000f\u0012\u0006\u0010\u0004\u001a\u00020\u0003¢\u0006\u0004\b\u0005\u0010\u0006J\u000f\u0010\b\u001a\u00020\u0007H\u0016¢\u0006\u0004\b\b\u0010\tJ\u0017\u0010\f\u001a\u00020\u00022\u0006\u0010\u000b\u001a\u00020\nH\u0016¢\u0006\u0004\b\f\u0010\rJ!\u0010\u0012\u001a\u00020\u00112\u0006\u0010\u000f\u001a\u00020\u000e2\b\u0010\u0010\u001a\u0004\u0018\u00010\u0002H\u0016¢\u0006\u0004\b\u0012\u0010\u0013R\u0014\u0010\u0016\u001a\u00020\u00148\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\f\u0010\u0015R\u001c\u0010\u0019\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u00170\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0012\u0010\u0018R\u001e\u0010\u001d\u001a\n\u0012\u0004\u0012\u00020\u0002\u0018\u00010\u001a8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b\u001b\u0010\u001c¨\u0006\u001e"}, d2 = {"Lcom/withpersona/sdk2/inquiry/internal/network/VerifyDeviceIntegrityRequestJsonAdapter;", "Lcom/squareup/moshi/h;", "Lcom/withpersona/sdk2/inquiry/internal/network/VerifyDeviceIntegrityRequest;", "Lcom/squareup/moshi/w;", "moshi", "<init>", "(Lcom/squareup/moshi/w;)V", "", "toString", "()Ljava/lang/String;", "Lcom/squareup/moshi/m;", "reader", "a", "(Lcom/squareup/moshi/m;)Lcom/withpersona/sdk2/inquiry/internal/network/VerifyDeviceIntegrityRequest;", "Lcom/squareup/moshi/t;", "writer", "value_", "", "b", "(Lcom/squareup/moshi/t;Lcom/withpersona/sdk2/inquiry/internal/network/VerifyDeviceIntegrityRequest;)V", "Lcom/squareup/moshi/m$b;", "Lcom/squareup/moshi/m$b;", "options", "Lcom/withpersona/sdk2/inquiry/internal/network/VerifyDeviceIntegrityRequest$Meta;", "Lcom/squareup/moshi/h;", "nullableMetaAdapter", "Ljava/lang/reflect/Constructor;", "c", "Ljava/lang/reflect/Constructor;", "constructorRef", "inquiry-internal_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class VerifyDeviceIntegrityRequestJsonAdapter extends com.squareup.moshi.h {

    /* renamed from: a  reason: collision with root package name */
    private final m.b f20237a;

    /* renamed from: b  reason: collision with root package name */
    private final com.squareup.moshi.h f20238b;

    /* renamed from: c  reason: collision with root package name */
    private volatile Constructor f20239c;

    public VerifyDeviceIntegrityRequestJsonAdapter(@NotNull w moshi) {
        Intrinsics.checkNotNullParameter(moshi, "moshi");
        m.b a10 = m.b.a("meta");
        Intrinsics.checkNotNullExpressionValue(a10, "of(...)");
        this.f20237a = a10;
        com.squareup.moshi.h f10 = moshi.f(VerifyDeviceIntegrityRequest.Meta.class, x0.d(), "meta");
        Intrinsics.checkNotNullExpressionValue(f10, "adapter(...)");
        this.f20238b = f10;
    }

    @Override // com.squareup.moshi.h
    /* renamed from: a */
    public VerifyDeviceIntegrityRequest fromJson(m reader) {
        Intrinsics.checkNotNullParameter(reader, "reader");
        reader.r();
        VerifyDeviceIntegrityRequest.Meta meta = null;
        int i10 = -1;
        while (reader.hasNext()) {
            int A0 = reader.A0(this.f20237a);
            if (A0 != -1) {
                if (A0 == 0) {
                    meta = (VerifyDeviceIntegrityRequest.Meta) this.f20238b.fromJson(reader);
                    i10 = -2;
                }
            } else {
                reader.E0();
                reader.P();
            }
        }
        reader.y();
        if (i10 == -2) {
            return new VerifyDeviceIntegrityRequest(meta);
        }
        Constructor constructor = this.f20239c;
        if (constructor == null) {
            constructor = VerifyDeviceIntegrityRequest.class.getDeclaredConstructor(VerifyDeviceIntegrityRequest.Meta.class, Integer.TYPE, sm.c.f49097c);
            this.f20239c = constructor;
            Intrinsics.checkNotNullExpressionValue(constructor, "also(...)");
        }
        Object newInstance = constructor.newInstance(meta, Integer.valueOf(i10), null);
        Intrinsics.checkNotNullExpressionValue(newInstance, "newInstance(...)");
        return (VerifyDeviceIntegrityRequest) newInstance;
    }

    @Override // com.squareup.moshi.h
    /* renamed from: b */
    public void toJson(t writer, VerifyDeviceIntegrityRequest verifyDeviceIntegrityRequest) {
        Intrinsics.checkNotNullParameter(writer, "writer");
        if (verifyDeviceIntegrityRequest != null) {
            writer.l();
            writer.A0("meta");
            this.f20238b.toJson(writer, verifyDeviceIntegrityRequest.a());
            writer.E();
            return;
        }
        throw new NullPointerException("value_ was null! Wrap in .nullSafe() to write nullable values.");
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder(50);
        sb2.append("GeneratedJsonAdapter(");
        sb2.append("VerifyDeviceIntegrityRequest");
        sb2.append(')');
        return sb2.toString();
    }
}
