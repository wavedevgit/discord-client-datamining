package com.withpersona.sdk2.inquiry.internal.network;

import com.squareup.moshi.a0;
import com.squareup.moshi.m;
import com.squareup.moshi.t;
import com.squareup.moshi.w;
import com.withpersona.sdk2.inquiry.internal.network.UpdateInquirySessionRequest;
import java.lang.reflect.Constructor;
import java.util.List;
import kotlin.Metadata;
import kotlin.collections.x0;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000X\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0006\n\u0002\b\u0004\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0000\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\u000f\u0012\u0006\u0010\u0004\u001a\u00020\u0003¢\u0006\u0004\b\u0005\u0010\u0006J\u000f\u0010\b\u001a\u00020\u0007H\u0016¢\u0006\u0004\b\b\u0010\tJ\u0017\u0010\f\u001a\u00020\u00022\u0006\u0010\u000b\u001a\u00020\nH\u0016¢\u0006\u0004\b\f\u0010\rJ!\u0010\u0012\u001a\u00020\u00112\u0006\u0010\u000f\u001a\u00020\u000e2\b\u0010\u0010\u001a\u0004\u0018\u00010\u0002H\u0016¢\u0006\u0004\b\u0012\u0010\u0013R\u0014\u0010\u0016\u001a\u00020\u00148\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\f\u0010\u0015R\u001c\u0010\u0019\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u00170\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0012\u0010\u0018R\u001c\u0010\u001b\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u00070\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001a\u0010\u0018R\"\u0010\u001f\u001a\u0010\u0012\f\u0012\n\u0012\u0004\u0012\u00020\u001d\u0018\u00010\u001c0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001e\u0010\u0018R\u001e\u0010#\u001a\n\u0012\u0004\u0012\u00020\u0002\u0018\u00010 8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b!\u0010\"¨\u0006$"}, d2 = {"Lcom/withpersona/sdk2/inquiry/internal/network/UpdateInquirySessionRequest_AttributesJsonAdapter;", "Lcom/squareup/moshi/h;", "Lcom/withpersona/sdk2/inquiry/internal/network/UpdateInquirySessionRequest$Attributes;", "Lcom/squareup/moshi/w;", "moshi", "<init>", "(Lcom/squareup/moshi/w;)V", "", "toString", "()Ljava/lang/String;", "Lcom/squareup/moshi/m;", "reader", "a", "(Lcom/squareup/moshi/m;)Lcom/withpersona/sdk2/inquiry/internal/network/UpdateInquirySessionRequest$Attributes;", "Lcom/squareup/moshi/t;", "writer", "value_", "", "b", "(Lcom/squareup/moshi/t;Lcom/withpersona/sdk2/inquiry/internal/network/UpdateInquirySessionRequest$Attributes;)V", "Lcom/squareup/moshi/m$b;", "Lcom/squareup/moshi/m$b;", "options", "", "Lcom/squareup/moshi/h;", "nullableDoubleAdapter", "c", "nullableStringAdapter", "", "Lcom/withpersona/sdk2/inquiry/internal/network/UpdateInquirySessionRequest$AppdomeThreatEvent;", "d", "nullableListOfAppdomeThreatEventAdapter", "Ljava/lang/reflect/Constructor;", "e", "Ljava/lang/reflect/Constructor;", "constructorRef", "inquiry-internal_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class UpdateInquirySessionRequest_AttributesJsonAdapter extends com.squareup.moshi.h {

    /* renamed from: a  reason: collision with root package name */
    private final m.b f19860a;

    /* renamed from: b  reason: collision with root package name */
    private final com.squareup.moshi.h f19861b;

    /* renamed from: c  reason: collision with root package name */
    private final com.squareup.moshi.h f19862c;

    /* renamed from: d  reason: collision with root package name */
    private final com.squareup.moshi.h f19863d;

    /* renamed from: e  reason: collision with root package name */
    private volatile Constructor f19864e;

    public UpdateInquirySessionRequest_AttributesJsonAdapter(@NotNull w moshi) {
        Intrinsics.checkNotNullParameter(moshi, "moshi");
        m.b a10 = m.b.a("gpsLongitude", "gpsLatitude", "gpsPrecision", "appdomeThreatEvents");
        Intrinsics.checkNotNullExpressionValue(a10, "of(...)");
        this.f19860a = a10;
        com.squareup.moshi.h f10 = moshi.f(Double.class, x0.d(), "gpsLongitude");
        Intrinsics.checkNotNullExpressionValue(f10, "adapter(...)");
        this.f19861b = f10;
        com.squareup.moshi.h f11 = moshi.f(String.class, x0.d(), "gpsPrecision");
        Intrinsics.checkNotNullExpressionValue(f11, "adapter(...)");
        this.f19862c = f11;
        com.squareup.moshi.h f12 = moshi.f(a0.j(List.class, UpdateInquirySessionRequest.AppdomeThreatEvent.class), x0.d(), "appdomeThreatEvents");
        Intrinsics.checkNotNullExpressionValue(f12, "adapter(...)");
        this.f19863d = f12;
    }

    @Override // com.squareup.moshi.h
    /* renamed from: a */
    public UpdateInquirySessionRequest.Attributes fromJson(m reader) {
        Intrinsics.checkNotNullParameter(reader, "reader");
        reader.r();
        Double d10 = null;
        Double d11 = null;
        String str = null;
        List list = null;
        int i10 = -1;
        while (reader.hasNext()) {
            int t02 = reader.t0(this.f19860a);
            if (t02 != -1) {
                if (t02 != 0) {
                    if (t02 != 1) {
                        if (t02 != 2) {
                            if (t02 == 3) {
                                list = (List) this.f19863d.fromJson(reader);
                                i10 &= -9;
                            }
                        } else {
                            str = (String) this.f19862c.fromJson(reader);
                            i10 &= -5;
                        }
                    } else {
                        d11 = (Double) this.f19861b.fromJson(reader);
                        i10 &= -3;
                    }
                } else {
                    d10 = (Double) this.f19861b.fromJson(reader);
                    i10 &= -2;
                }
            } else {
                reader.F0();
                reader.P();
            }
        }
        reader.y();
        if (i10 == -16) {
            return new UpdateInquirySessionRequest.Attributes(d10, d11, str, list);
        }
        Constructor constructor = this.f19864e;
        if (constructor == null) {
            constructor = UpdateInquirySessionRequest.Attributes.class.getDeclaredConstructor(Double.class, Double.class, String.class, List.class, Integer.TYPE, tm.c.f49935c);
            this.f19864e = constructor;
            Intrinsics.checkNotNullExpressionValue(constructor, "also(...)");
        }
        Object newInstance = constructor.newInstance(d10, d11, str, list, Integer.valueOf(i10), null);
        Intrinsics.checkNotNullExpressionValue(newInstance, "newInstance(...)");
        return (UpdateInquirySessionRequest.Attributes) newInstance;
    }

    @Override // com.squareup.moshi.h
    /* renamed from: b */
    public void toJson(t writer, UpdateInquirySessionRequest.Attributes attributes) {
        Intrinsics.checkNotNullParameter(writer, "writer");
        if (attributes != null) {
            writer.l();
            writer.t0("gpsLongitude");
            this.f19861b.toJson(writer, attributes.c());
            writer.t0("gpsLatitude");
            this.f19861b.toJson(writer, attributes.b());
            writer.t0("gpsPrecision");
            this.f19862c.toJson(writer, attributes.d());
            writer.t0("appdomeThreatEvents");
            this.f19863d.toJson(writer, attributes.a());
            writer.E();
            return;
        }
        throw new NullPointerException("value_ was null! Wrap in .nullSafe() to write nullable values.");
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder(60);
        sb2.append("GeneratedJsonAdapter(");
        sb2.append("UpdateInquirySessionRequest.Attributes");
        sb2.append(')');
        return sb2.toString();
    }
}
