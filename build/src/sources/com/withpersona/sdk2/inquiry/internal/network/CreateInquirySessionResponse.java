package com.withpersona.sdk2.inquiry.internal.network;

import com.facebook.react.devsupport.StackTraceHelper;
import com.squareup.moshi.m;
import com.squareup.moshi.t;
import com.squareup.moshi.z;
import kotlin.Metadata;
import kotlin.enums.EnumEntries;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@com.squareup.moshi.i(generateAdapter = true)
@Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u000f\b\u0001\u0018\u00002\u00020\u0001:\u0005\u000e\u000f\u0010\u0011\u0012B\u0017\u0012\u0006\u0010\u0003\u001a\u00020\u0002\u0012\u0006\u0010\u0005\u001a\u00020\u0004¢\u0006\u0004\b\u0006\u0010\u0007R\u0017\u0010\u0003\u001a\u00020\u00028\u0006¢\u0006\f\n\u0004\b\b\u0010\t\u001a\u0004\b\b\u0010\nR\u0017\u0010\u0005\u001a\u00020\u00048\u0006¢\u0006\f\n\u0004\b\u000b\u0010\f\u001a\u0004\b\u000b\u0010\r¨\u0006\u0013"}, d2 = {"Lcom/withpersona/sdk2/inquiry/internal/network/CreateInquirySessionResponse;", "", "Lcom/withpersona/sdk2/inquiry/internal/network/CreateInquirySessionResponse$Data;", "data", "Lcom/withpersona/sdk2/inquiry/internal/network/CreateInquirySessionResponse$Meta;", "meta", "<init>", "(Lcom/withpersona/sdk2/inquiry/internal/network/CreateInquirySessionResponse$Data;Lcom/withpersona/sdk2/inquiry/internal/network/CreateInquirySessionResponse$Meta;)V", "a", "Lcom/withpersona/sdk2/inquiry/internal/network/CreateInquirySessionResponse$Data;", "()Lcom/withpersona/sdk2/inquiry/internal/network/CreateInquirySessionResponse$Data;", "b", "Lcom/withpersona/sdk2/inquiry/internal/network/CreateInquirySessionResponse$Meta;", "()Lcom/withpersona/sdk2/inquiry/internal/network/CreateInquirySessionResponse$Meta;", "Data", "Meta", "Attributes", "GpsCollectionRequirement", "GpsPrecisionRequirement", "inquiry-internal_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class CreateInquirySessionResponse {

    /* renamed from: a  reason: collision with root package name */
    private final Data f20150a;

    /* renamed from: b  reason: collision with root package name */
    private final Meta f20151b;

    @com.squareup.moshi.i(generateAdapter = true)
    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0002\b\n\b\u0007\u0018\u00002\u00020\u0001B\u0017\u0012\u0006\u0010\u0003\u001a\u00020\u0002\u0012\u0006\u0010\u0005\u001a\u00020\u0004¢\u0006\u0004\b\u0006\u0010\u0007R\u0017\u0010\u0003\u001a\u00020\u00028\u0006¢\u0006\f\n\u0004\b\b\u0010\t\u001a\u0004\b\n\u0010\u000bR\u0017\u0010\u0005\u001a\u00020\u00048\u0006¢\u0006\f\n\u0004\b\n\u0010\f\u001a\u0004\b\b\u0010\r¨\u0006\u000e"}, d2 = {"Lcom/withpersona/sdk2/inquiry/internal/network/CreateInquirySessionResponse$Data;", "", "", StackTraceHelper.ID_KEY, "Lcom/withpersona/sdk2/inquiry/internal/network/CreateInquirySessionResponse$Attributes;", "attributes", "<init>", "(Ljava/lang/String;Lcom/withpersona/sdk2/inquiry/internal/network/CreateInquirySessionResponse$Attributes;)V", "a", "Ljava/lang/String;", "b", "()Ljava/lang/String;", "Lcom/withpersona/sdk2/inquiry/internal/network/CreateInquirySessionResponse$Attributes;", "()Lcom/withpersona/sdk2/inquiry/internal/network/CreateInquirySessionResponse$Attributes;", "inquiry-internal_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class Data {

        /* renamed from: a  reason: collision with root package name */
        private final String f20155a;

        /* renamed from: b  reason: collision with root package name */
        private final Attributes f20156b;

        public Data(String id2, Attributes attributes) {
            Intrinsics.checkNotNullParameter(id2, "id");
            Intrinsics.checkNotNullParameter(attributes, "attributes");
            this.f20155a = id2;
            this.f20156b = attributes;
        }

        public final Attributes a() {
            return this.f20156b;
        }

        public final String b() {
            return this.f20155a;
        }
    }

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class GpsCollectionRequirement {
        private static final /* synthetic */ EnumEntries $ENTRIES;
        private static final /* synthetic */ GpsCollectionRequirement[] $VALUES;
        @NotNull
        public static final Companion Companion;
        public static final GpsCollectionRequirement REQUIRE = new GpsCollectionRequirement("REQUIRE", 0);
        public static final GpsCollectionRequirement OPTIONAL = new GpsCollectionRequirement("OPTIONAL", 1);
        public static final GpsCollectionRequirement NONE = new GpsCollectionRequirement("NONE", 2);

        @Metadata(d1 = {"\u0000(\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0003\b\u0086\u0003\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0003\u0010\u0004J\u0017\u0010\u0007\u001a\u00020\u00022\u0006\u0010\u0006\u001a\u00020\u0005H\u0017¢\u0006\u0004\b\u0007\u0010\bJ!\u0010\r\u001a\u00020\f2\u0006\u0010\n\u001a\u00020\t2\b\u0010\u000b\u001a\u0004\u0018\u00010\u0002H\u0017¢\u0006\u0004\b\r\u0010\u000e¨\u0006\u000f"}, d2 = {"Lcom/withpersona/sdk2/inquiry/internal/network/CreateInquirySessionResponse$GpsCollectionRequirement$Companion;", "Lcom/squareup/moshi/h;", "Lcom/withpersona/sdk2/inquiry/internal/network/CreateInquirySessionResponse$GpsCollectionRequirement;", "<init>", "()V", "Lcom/squareup/moshi/m;", "reader", "fromJson", "(Lcom/squareup/moshi/m;)Lcom/withpersona/sdk2/inquiry/internal/network/CreateInquirySessionResponse$GpsCollectionRequirement;", "Lcom/squareup/moshi/t;", "writer", "value", "", "toJson", "(Lcom/squareup/moshi/t;Lcom/withpersona/sdk2/inquiry/internal/network/CreateInquirySessionResponse$GpsCollectionRequirement;)V", "inquiry-internal_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class Companion extends com.squareup.moshi.h {
            public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
                this();
            }

            @Override // com.squareup.moshi.h
            @z
            public void toJson(@NotNull t writer, GpsCollectionRequirement gpsCollectionRequirement) {
                Intrinsics.checkNotNullParameter(writer, "writer");
            }

            private Companion() {
            }

            @Override // com.squareup.moshi.h
            @com.squareup.moshi.f
            @NotNull
            public GpsCollectionRequirement fromJson(@NotNull m reader) {
                Intrinsics.checkNotNullParameter(reader, "reader");
                Object V = reader.V();
                return Intrinsics.areEqual(V, "require") ? GpsCollectionRequirement.REQUIRE : Intrinsics.areEqual(V, "optional") ? GpsCollectionRequirement.OPTIONAL : GpsCollectionRequirement.NONE;
            }
        }

        static {
            GpsCollectionRequirement[] a10 = a();
            $VALUES = a10;
            $ENTRIES = pr.a.a(a10);
            Companion = new Companion(null);
        }

        private GpsCollectionRequirement(String str, int i10) {
        }

        private static final /* synthetic */ GpsCollectionRequirement[] a() {
            return new GpsCollectionRequirement[]{REQUIRE, OPTIONAL, NONE};
        }

        public static GpsCollectionRequirement valueOf(String str) {
            return (GpsCollectionRequirement) Enum.valueOf(GpsCollectionRequirement.class, str);
        }

        public static GpsCollectionRequirement[] values() {
            return (GpsCollectionRequirement[]) $VALUES.clone();
        }
    }

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class GpsPrecisionRequirement {
        private static final /* synthetic */ EnumEntries $ENTRIES;
        private static final /* synthetic */ GpsPrecisionRequirement[] $VALUES;
        @NotNull
        public static final Companion Companion;
        public static final GpsPrecisionRequirement ROUGH = new GpsPrecisionRequirement("ROUGH", 0);
        public static final GpsPrecisionRequirement PRECISE = new GpsPrecisionRequirement("PRECISE", 1);

        @Metadata(d1 = {"\u0000(\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0003\b\u0086\u0003\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0003\u0010\u0004J\u0017\u0010\u0007\u001a\u00020\u00022\u0006\u0010\u0006\u001a\u00020\u0005H\u0017¢\u0006\u0004\b\u0007\u0010\bJ!\u0010\r\u001a\u00020\f2\u0006\u0010\n\u001a\u00020\t2\b\u0010\u000b\u001a\u0004\u0018\u00010\u0002H\u0017¢\u0006\u0004\b\r\u0010\u000e¨\u0006\u000f"}, d2 = {"Lcom/withpersona/sdk2/inquiry/internal/network/CreateInquirySessionResponse$GpsPrecisionRequirement$Companion;", "Lcom/squareup/moshi/h;", "Lcom/withpersona/sdk2/inquiry/internal/network/CreateInquirySessionResponse$GpsPrecisionRequirement;", "<init>", "()V", "Lcom/squareup/moshi/m;", "reader", "fromJson", "(Lcom/squareup/moshi/m;)Lcom/withpersona/sdk2/inquiry/internal/network/CreateInquirySessionResponse$GpsPrecisionRequirement;", "Lcom/squareup/moshi/t;", "writer", "value", "", "toJson", "(Lcom/squareup/moshi/t;Lcom/withpersona/sdk2/inquiry/internal/network/CreateInquirySessionResponse$GpsPrecisionRequirement;)V", "inquiry-internal_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class Companion extends com.squareup.moshi.h {
            public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
                this();
            }

            @Override // com.squareup.moshi.h
            @z
            public void toJson(@NotNull t writer, GpsPrecisionRequirement gpsPrecisionRequirement) {
                Intrinsics.checkNotNullParameter(writer, "writer");
            }

            private Companion() {
            }

            @Override // com.squareup.moshi.h
            @com.squareup.moshi.f
            @NotNull
            public GpsPrecisionRequirement fromJson(@NotNull m reader) {
                Intrinsics.checkNotNullParameter(reader, "reader");
                return Intrinsics.areEqual(reader.V(), "rough") ? GpsPrecisionRequirement.ROUGH : GpsPrecisionRequirement.PRECISE;
            }
        }

        static {
            GpsPrecisionRequirement[] a10 = a();
            $VALUES = a10;
            $ENTRIES = pr.a.a(a10);
            Companion = new Companion(null);
        }

        private GpsPrecisionRequirement(String str, int i10) {
        }

        private static final /* synthetic */ GpsPrecisionRequirement[] a() {
            return new GpsPrecisionRequirement[]{ROUGH, PRECISE};
        }

        public static GpsPrecisionRequirement valueOf(String str) {
            return (GpsPrecisionRequirement) Enum.valueOf(GpsPrecisionRequirement.class, str);
        }

        public static GpsPrecisionRequirement[] values() {
            return (GpsPrecisionRequirement[]) $VALUES.clone();
        }
    }

    @com.squareup.moshi.i(generateAdapter = true)
    @Metadata(d1 = {"\u0000\u0010\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\u0010\u000e\n\u0002\b\u0007\b\u0007\u0018\u00002\u00020\u0001B\u000f\u0012\u0006\u0010\u0003\u001a\u00020\u0002¢\u0006\u0004\b\u0004\u0010\u0005R\u0017\u0010\u0003\u001a\u00020\u00028\u0006¢\u0006\f\n\u0004\b\u0006\u0010\u0007\u001a\u0004\b\u0006\u0010\b¨\u0006\t"}, d2 = {"Lcom/withpersona/sdk2/inquiry/internal/network/CreateInquirySessionResponse$Meta;", "", "", "accessToken", "<init>", "(Ljava/lang/String;)V", "a", "Ljava/lang/String;", "()Ljava/lang/String;", "inquiry-internal_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class Meta {

        /* renamed from: a  reason: collision with root package name */
        private final String f20157a;

        public Meta(String accessToken) {
            Intrinsics.checkNotNullParameter(accessToken, "accessToken");
            this.f20157a = accessToken;
        }

        public final String a() {
            return this.f20157a;
        }
    }

    public CreateInquirySessionResponse(Data data, Meta meta) {
        Intrinsics.checkNotNullParameter(data, "data");
        Intrinsics.checkNotNullParameter(meta, "meta");
        this.f20150a = data;
        this.f20151b = meta;
    }

    public final Data a() {
        return this.f20150a;
    }

    public final Meta b() {
        return this.f20151b;
    }

    @com.squareup.moshi.i(generateAdapter = true)
    @Metadata(d1 = {"\u0000\u001c\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b\r\b\u0007\u0018\u00002\u00020\u0001B+\u0012\n\b\u0002\u0010\u0003\u001a\u0004\u0018\u00010\u0002\u0012\n\b\u0002\u0010\u0005\u001a\u0004\u0018\u00010\u0004\u0012\n\b\u0002\u0010\u0007\u001a\u0004\u0018\u00010\u0006¢\u0006\u0004\b\b\u0010\tR\u0019\u0010\u0003\u001a\u0004\u0018\u00010\u00028\u0006¢\u0006\f\n\u0004\b\n\u0010\u000b\u001a\u0004\b\n\u0010\fR\u0019\u0010\u0005\u001a\u0004\u0018\u00010\u00048\u0006¢\u0006\f\n\u0004\b\r\u0010\u000e\u001a\u0004\b\r\u0010\u000fR\u0019\u0010\u0007\u001a\u0004\u0018\u00010\u00068\u0006¢\u0006\f\n\u0004\b\u0010\u0010\u0011\u001a\u0004\b\u0010\u0010\u0012¨\u0006\u0013"}, d2 = {"Lcom/withpersona/sdk2/inquiry/internal/network/CreateInquirySessionResponse$Attributes;", "", "Lcom/withpersona/sdk2/inquiry/internal/network/CreateInquirySessionResponse$GpsCollectionRequirement;", "gpsCollectionRequirement", "Lcom/withpersona/sdk2/inquiry/internal/network/CreateInquirySessionResponse$GpsPrecisionRequirement;", "gpsPrecisionRequirement", "", "playIntegrityProjectId", "<init>", "(Lcom/withpersona/sdk2/inquiry/internal/network/CreateInquirySessionResponse$GpsCollectionRequirement;Lcom/withpersona/sdk2/inquiry/internal/network/CreateInquirySessionResponse$GpsPrecisionRequirement;Ljava/lang/String;)V", "a", "Lcom/withpersona/sdk2/inquiry/internal/network/CreateInquirySessionResponse$GpsCollectionRequirement;", "()Lcom/withpersona/sdk2/inquiry/internal/network/CreateInquirySessionResponse$GpsCollectionRequirement;", "b", "Lcom/withpersona/sdk2/inquiry/internal/network/CreateInquirySessionResponse$GpsPrecisionRequirement;", "()Lcom/withpersona/sdk2/inquiry/internal/network/CreateInquirySessionResponse$GpsPrecisionRequirement;", "c", "Ljava/lang/String;", "()Ljava/lang/String;", "inquiry-internal_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class Attributes {

        /* renamed from: a  reason: collision with root package name */
        private final GpsCollectionRequirement f20152a;

        /* renamed from: b  reason: collision with root package name */
        private final GpsPrecisionRequirement f20153b;

        /* renamed from: c  reason: collision with root package name */
        private final String f20154c;

        public Attributes(GpsCollectionRequirement gpsCollectionRequirement, GpsPrecisionRequirement gpsPrecisionRequirement, String str) {
            this.f20152a = gpsCollectionRequirement;
            this.f20153b = gpsPrecisionRequirement;
            this.f20154c = str;
        }

        public final GpsCollectionRequirement a() {
            return this.f20152a;
        }

        public final GpsPrecisionRequirement b() {
            return this.f20153b;
        }

        public final String c() {
            return this.f20154c;
        }

        public /* synthetic */ Attributes(GpsCollectionRequirement gpsCollectionRequirement, GpsPrecisionRequirement gpsPrecisionRequirement, String str, int i10, DefaultConstructorMarker defaultConstructorMarker) {
            this((i10 & 1) != 0 ? null : gpsCollectionRequirement, (i10 & 2) != 0 ? null : gpsPrecisionRequirement, (i10 & 4) != 0 ? null : str);
        }
    }
}
