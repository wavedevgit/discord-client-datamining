package com.withpersona.sdk2.inquiry.internal.network;

import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.squareup.moshi.m;
import com.squareup.moshi.t;
import com.squareup.moshi.z;
import com.withpersona.sdk2.inquiry.internal.InquiryFieldMap;
import java.util.Map;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
@com.squareup.moshi.i(generateAdapter = true)
@Metadata(d1 = {"\u0000\u0010\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\u0018\u0002\n\u0002\b\t\b\u0001\u0018\u0000 \t2\u00020\u0001:\u0003\n\u0006\tB\u000f\u0012\u0006\u0010\u0003\u001a\u00020\u0002¢\u0006\u0004\b\u0004\u0010\u0005R\u0017\u0010\u0003\u001a\u00020\u00028\u0006¢\u0006\f\n\u0004\b\u0006\u0010\u0007\u001a\u0004\b\u0006\u0010\b¨\u0006\u000b"}, d2 = {"Lcom/withpersona/sdk2/inquiry/internal/network/CreateInquiryRequest;", "", "Lcom/withpersona/sdk2/inquiry/internal/network/CreateInquiryRequest$Data;", "data", "<init>", "(Lcom/withpersona/sdk2/inquiry/internal/network/CreateInquiryRequest$Data;)V", "a", "Lcom/withpersona/sdk2/inquiry/internal/network/CreateInquiryRequest$Data;", "()Lcom/withpersona/sdk2/inquiry/internal/network/CreateInquiryRequest$Data;", "b", "Data", "inquiry-internal_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class CreateInquiryRequest {

    /* renamed from: b  reason: collision with root package name */
    public static final b f20142b = new b(null);

    /* renamed from: a  reason: collision with root package name */
    private final Data f20143a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class Data {

        /* renamed from: c  reason: collision with root package name */
        public static final Adapter f20144c = new Adapter(null);

        /* renamed from: a  reason: collision with root package name */
        private final a f20145a;

        /* renamed from: b  reason: collision with root package name */
        private final String f20146b;

        @Metadata(d1 = {"\u0000(\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u001f\u0010\t\u001a\u00020\b2\u0006\u0010\u0005\u001a\u00020\u00042\u0006\u0010\u0007\u001a\u00020\u0006H\u0007¢\u0006\u0004\b\t\u0010\nJ\u0017\u0010\r\u001a\u00020\u00062\u0006\u0010\f\u001a\u00020\u000bH\u0007¢\u0006\u0004\b\r\u0010\u000e¨\u0006\u000f"}, d2 = {"Lcom/withpersona/sdk2/inquiry/internal/network/CreateInquiryRequest$Data$Adapter;", "", "<init>", "()V", "Lcom/squareup/moshi/t;", "jsonWriter", "Lcom/withpersona/sdk2/inquiry/internal/network/CreateInquiryRequest$Data;", "data", "", "toJson", "(Lcom/squareup/moshi/t;Lcom/withpersona/sdk2/inquiry/internal/network/CreateInquiryRequest$Data;)V", "Lcom/squareup/moshi/m;", "reader", "fromJson", "(Lcom/squareup/moshi/m;)Lcom/withpersona/sdk2/inquiry/internal/network/CreateInquiryRequest$Data;", "inquiry-internal_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
        @SourceDebugExtension({"SMAP\nCreateInquiryRequest.kt\nKotlin\n*S Kotlin\n*F\n+ 1 CreateInquiryRequest.kt\ncom/withpersona/sdk2/inquiry/internal/network/CreateInquiryRequest$Data$Adapter\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,113:1\n1#2:114\n*E\n"})
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class Adapter {
            public /* synthetic */ Adapter(DefaultConstructorMarker defaultConstructorMarker) {
                this();
            }

            @com.squareup.moshi.f
            @NotNull
            public final Data fromJson(@NotNull m reader) {
                Intrinsics.checkNotNullParameter(reader, "reader");
                reader.u();
                String str = "";
                String str2 = str;
                while (reader.hasNext()) {
                    String o02 = reader.o0();
                    if (Intrinsics.areEqual(o02, "templateId")) {
                        str = reader.g1();
                    } else if (Intrinsics.areEqual(o02, "environment")) {
                        str2 = reader.g1();
                    } else {
                        reader.T();
                    }
                }
                reader.D();
                return new Data(new a(str, null, str2, "", null, null, null, null, null, 498, null), null, 2, null);
            }

            @z
            public final void toJson(@NotNull t jsonWriter, @NotNull Data data) {
                Intrinsics.checkNotNullParameter(jsonWriter, "jsonWriter");
                Intrinsics.checkNotNullParameter(data, "data");
                jsonWriter.i();
                jsonWriter.J("attributes");
                jsonWriter.i();
                String g10 = data.a().g();
                if (g10 != null) {
                    jsonWriter.J("inquiryTemplateId").V0(g10);
                }
                String h10 = data.a().h();
                if (h10 != null) {
                    jsonWriter.J("inquiryTemplateVersionId").V0(h10);
                }
                jsonWriter.J("environment").V0(data.a().b());
                String c10 = data.a().c();
                if (c10 != null) {
                    jsonWriter.J("environment_id").V0(c10);
                }
                String a10 = data.a().a();
                if (a10 != null) {
                    jsonWriter.J("accountId").V0(a10);
                }
                String f10 = data.a().f();
                if (f10 != null) {
                    jsonWriter.J("referenceId").V0(f10);
                }
                String e10 = data.a().e();
                if (e10 != null) {
                    jsonWriter.J("note").V0(e10);
                }
                if (data.a().d() != null) {
                    jsonWriter.J("fields");
                    InquiryFieldMap.f19698b.toJson(jsonWriter, new InquiryFieldMap(data.a().d()));
                }
                if (data.a().i() != null) {
                    jsonWriter.J("themeSetId").V0(data.a().i());
                }
                jsonWriter.s();
                jsonWriter.s();
            }

            private Adapter() {
            }
        }

        public Data(a attributes, String type) {
            Intrinsics.checkNotNullParameter(attributes, "attributes");
            Intrinsics.checkNotNullParameter(type, "type");
            this.f20145a = attributes;
            this.f20146b = type;
        }

        public final a a() {
            return this.f20145a;
        }

        public /* synthetic */ Data(a aVar, String str, int i10, DefaultConstructorMarker defaultConstructorMarker) {
            this(aVar, (i10 & 2) != 0 ? "inquiry" : str);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b {
        public /* synthetic */ b(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final CreateInquiryRequest a(String str, String str2, String environment, String str3, String str4, String str5, Map map, String str6) {
            Intrinsics.checkNotNullParameter(environment, "environment");
            return new CreateInquiryRequest(new Data(new a(str, str2, environment, str3, str4, str5, null, map, str6, 64, null), null, 2, null));
        }

        private b() {
        }
    }

    public CreateInquiryRequest(Data data) {
        Intrinsics.checkNotNullParameter(data, "data");
        this.f20143a = data;
    }

    public final Data a() {
        return this.f20143a;
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private final String f20147a;

        /* renamed from: b  reason: collision with root package name */
        private final String f20148b;

        /* renamed from: c  reason: collision with root package name */
        private final String f20149c;

        /* renamed from: d  reason: collision with root package name */
        private final String f20150d;

        /* renamed from: e  reason: collision with root package name */
        private final String f20151e;

        /* renamed from: f  reason: collision with root package name */
        private final String f20152f;

        /* renamed from: g  reason: collision with root package name */
        private final String f20153g;

        /* renamed from: h  reason: collision with root package name */
        private final Map f20154h;

        /* renamed from: i  reason: collision with root package name */
        private final String f20155i;

        public a(String str, String str2, String environment, String str3, String str4, String str5, String str6, Map map, String str7) {
            Intrinsics.checkNotNullParameter(environment, "environment");
            this.f20147a = str;
            this.f20148b = str2;
            this.f20149c = environment;
            this.f20150d = str3;
            this.f20151e = str4;
            this.f20152f = str5;
            this.f20153g = str6;
            this.f20154h = map;
            this.f20155i = str7;
        }

        public final String a() {
            return this.f20151e;
        }

        public final String b() {
            return this.f20149c;
        }

        public final String c() {
            return this.f20150d;
        }

        public final Map d() {
            return this.f20154h;
        }

        public final String e() {
            return this.f20153g;
        }

        public final String f() {
            return this.f20152f;
        }

        public final String g() {
            return this.f20147a;
        }

        public final String h() {
            return this.f20148b;
        }

        public final String i() {
            return this.f20155i;
        }

        public /* synthetic */ a(String str, String str2, String str3, String str4, String str5, String str6, String str7, Map map, String str8, int i10, DefaultConstructorMarker defaultConstructorMarker) {
            this((i10 & 1) != 0 ? null : str, (i10 & 2) != 0 ? null : str2, str3, (i10 & 8) != 0 ? null : str4, (i10 & 16) != 0 ? null : str5, (i10 & 32) != 0 ? null : str6, (i10 & 64) != 0 ? null : str7, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? null : map, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0 ? null : str8);
        }
    }
}
