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
@Metadata(d1 = {"\u0000D\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0000\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\u000f\u0012\u0006\u0010\u0004\u001a\u00020\u0003¢\u0006\u0004\b\u0005\u0010\u0006J\u000f\u0010\b\u001a\u00020\u0007H\u0016¢\u0006\u0004\b\b\u0010\tJ\u0017\u0010\f\u001a\u00020\u00022\u0006\u0010\u000b\u001a\u00020\nH\u0016¢\u0006\u0004\b\f\u0010\rJ!\u0010\u0012\u001a\u00020\u00112\u0006\u0010\u000f\u001a\u00020\u000e2\b\u0010\u0010\u001a\u0004\u0018\u00010\u0002H\u0016¢\u0006\u0004\b\u0012\u0010\u0013R\u0014\u0010\u0016\u001a\u00020\u00148\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\f\u0010\u0015R\u001c\u0010\u0018\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u00070\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0012\u0010\u0017R\u001e\u0010\u001c\u001a\n\u0012\u0004\u0012\u00020\u0002\u0018\u00010\u00198\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b\u001a\u0010\u001b¨\u0006\u001d"}, d2 = {"Lcom/withpersona/sdk2/inquiry/internal/network/VerifyDeviceIntegrityRequest_MetaJsonAdapter;", "Lcom/squareup/moshi/h;", "Lcom/withpersona/sdk2/inquiry/internal/network/VerifyDeviceIntegrityRequest$Meta;", "Lcom/squareup/moshi/w;", "moshi", "<init>", "(Lcom/squareup/moshi/w;)V", "", "toString", "()Ljava/lang/String;", "Lcom/squareup/moshi/m;", "reader", "a", "(Lcom/squareup/moshi/m;)Lcom/withpersona/sdk2/inquiry/internal/network/VerifyDeviceIntegrityRequest$Meta;", "Lcom/squareup/moshi/t;", "writer", "value_", "", "b", "(Lcom/squareup/moshi/t;Lcom/withpersona/sdk2/inquiry/internal/network/VerifyDeviceIntegrityRequest$Meta;)V", "Lcom/squareup/moshi/m$b;", "Lcom/squareup/moshi/m$b;", "options", "Lcom/squareup/moshi/h;", "nullableStringAdapter", "Ljava/lang/reflect/Constructor;", "c", "Ljava/lang/reflect/Constructor;", "constructorRef", "inquiry-internal_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class VerifyDeviceIntegrityRequest_MetaJsonAdapter extends com.squareup.moshi.h {

    /* renamed from: a  reason: collision with root package name */
    private final m.b f19873a;

    /* renamed from: b  reason: collision with root package name */
    private final com.squareup.moshi.h f19874b;

    /* renamed from: c  reason: collision with root package name */
    private volatile Constructor f19875c;

    public VerifyDeviceIntegrityRequest_MetaJsonAdapter(@NotNull w moshi) {
        Intrinsics.checkNotNullParameter(moshi, "moshi");
        m.b a10 = m.b.a("packageName", "integrityToken");
        Intrinsics.checkNotNullExpressionValue(a10, "of(...)");
        this.f19873a = a10;
        com.squareup.moshi.h f10 = moshi.f(String.class, x0.d(), "packageName");
        Intrinsics.checkNotNullExpressionValue(f10, "adapter(...)");
        this.f19874b = f10;
    }

    @Override // com.squareup.moshi.h
    /* renamed from: a */
    public VerifyDeviceIntegrityRequest.Meta fromJson(m reader) {
        Intrinsics.checkNotNullParameter(reader, "reader");
        reader.r();
        String str = null;
        String str2 = null;
        int i10 = -1;
        while (reader.hasNext()) {
            int t02 = reader.t0(this.f19873a);
            if (t02 != -1) {
                if (t02 != 0) {
                    if (t02 == 1) {
                        str2 = (String) this.f19874b.fromJson(reader);
                        i10 &= -3;
                    }
                } else {
                    str = (String) this.f19874b.fromJson(reader);
                    i10 &= -2;
                }
            } else {
                reader.F0();
                reader.P();
            }
        }
        reader.y();
        if (i10 == -4) {
            return new VerifyDeviceIntegrityRequest.Meta(str, str2);
        }
        Constructor constructor = this.f19875c;
        if (constructor == null) {
            constructor = VerifyDeviceIntegrityRequest.Meta.class.getDeclaredConstructor(String.class, String.class, Integer.TYPE, tm.c.f49935c);
            this.f19875c = constructor;
            Intrinsics.checkNotNullExpressionValue(constructor, "also(...)");
        }
        Object newInstance = constructor.newInstance(str, str2, Integer.valueOf(i10), null);
        Intrinsics.checkNotNullExpressionValue(newInstance, "newInstance(...)");
        return (VerifyDeviceIntegrityRequest.Meta) newInstance;
    }

    @Override // com.squareup.moshi.h
    /* renamed from: b */
    public void toJson(t writer, VerifyDeviceIntegrityRequest.Meta meta) {
        Intrinsics.checkNotNullParameter(writer, "writer");
        if (meta != null) {
            writer.l();
            writer.t0("packageName");
            this.f19874b.toJson(writer, meta.b());
            writer.t0("integrityToken");
            this.f19874b.toJson(writer, meta.a());
            writer.E();
            return;
        }
        throw new NullPointerException("value_ was null! Wrap in .nullSafe() to write nullable values.");
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder(55);
        sb2.append("GeneratedJsonAdapter(");
        sb2.append("VerifyDeviceIntegrityRequest.Meta");
        sb2.append(')');
        return sb2.toString();
    }
}
