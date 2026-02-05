package com.withpersona.sdk2.inquiry.internal.network;

import com.facebook.react.devsupport.StackTraceHelper;
import java.util.List;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
@com.squareup.moshi.i(generateAdapter = true)
@Metadata(d1 = {"\u0000\u0010\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\u0018\u0002\n\u0002\b\u000b\b\u0001\u0018\u0000 \t2\u00020\u0001:\u0004\n\u000b\f\u0006B\u000f\u0012\u0006\u0010\u0003\u001a\u00020\u0002¢\u0006\u0004\b\u0004\u0010\u0005R\u0017\u0010\u0003\u001a\u00020\u00028\u0006¢\u0006\f\n\u0004\b\u0006\u0010\u0007\u001a\u0004\b\u0006\u0010\b¨\u0006\r"}, d2 = {"Lcom/withpersona/sdk2/inquiry/internal/network/UpdateInquirySessionRequest;", "", "Lcom/withpersona/sdk2/inquiry/internal/network/UpdateInquirySessionRequest$Data;", "data", "<init>", "(Lcom/withpersona/sdk2/inquiry/internal/network/UpdateInquirySessionRequest$Data;)V", "a", "Lcom/withpersona/sdk2/inquiry/internal/network/UpdateInquirySessionRequest$Data;", "()Lcom/withpersona/sdk2/inquiry/internal/network/UpdateInquirySessionRequest$Data;", "b", "Data", "Attributes", "AppdomeThreatEvent", "inquiry-internal_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class UpdateInquirySessionRequest {

    /* renamed from: b  reason: collision with root package name */
    public static final a f19234b = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final Data f19235a;

    @com.squareup.moshi.i(generateAdapter = true)
    @Metadata(d1 = {"\u0000\u0010\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\u0010\u000e\n\u0002\b\u000b\b\u0007\u0018\u00002\u00020\u0001B\u001f\u0012\u0006\u0010\u0003\u001a\u00020\u0002\u0012\u0006\u0010\u0004\u001a\u00020\u0002\u0012\u0006\u0010\u0005\u001a\u00020\u0002¢\u0006\u0004\b\u0006\u0010\u0007R\u0017\u0010\u0003\u001a\u00020\u00028\u0006¢\u0006\f\n\u0004\b\b\u0010\t\u001a\u0004\b\b\u0010\nR\u0017\u0010\u0004\u001a\u00020\u00028\u0006¢\u0006\f\n\u0004\b\u000b\u0010\t\u001a\u0004\b\f\u0010\nR\u0017\u0010\u0005\u001a\u00020\u00028\u0006¢\u0006\f\n\u0004\b\f\u0010\t\u001a\u0004\b\u000b\u0010\n¨\u0006\r"}, d2 = {"Lcom/withpersona/sdk2/inquiry/internal/network/UpdateInquirySessionRequest$AppdomeThreatEvent;", "", "", StackTraceHelper.NAME_KEY, "timestamp", "reasonData", "<init>", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V", "a", "Ljava/lang/String;", "()Ljava/lang/String;", "b", "c", "inquiry-internal_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class AppdomeThreatEvent {

        /* renamed from: a  reason: collision with root package name */
        private final String f19236a;

        /* renamed from: b  reason: collision with root package name */
        private final String f19237b;

        /* renamed from: c  reason: collision with root package name */
        private final String f19238c;

        public AppdomeThreatEvent(String name, String timestamp, String reasonData) {
            Intrinsics.checkNotNullParameter(name, "name");
            Intrinsics.checkNotNullParameter(timestamp, "timestamp");
            Intrinsics.checkNotNullParameter(reasonData, "reasonData");
            this.f19236a = name;
            this.f19237b = timestamp;
            this.f19238c = reasonData;
        }

        public final String a() {
            return this.f19236a;
        }

        public final String b() {
            return this.f19238c;
        }

        public final String c() {
            return this.f19237b;
        }
    }

    @com.squareup.moshi.i(generateAdapter = true)
    @Metadata(d1 = {"\u0000\u0010\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\u0018\u0002\n\u0002\b\u0007\b\u0007\u0018\u00002\u00020\u0001B\u000f\u0012\u0006\u0010\u0003\u001a\u00020\u0002¢\u0006\u0004\b\u0004\u0010\u0005R\u0017\u0010\u0003\u001a\u00020\u00028\u0006¢\u0006\f\n\u0004\b\u0006\u0010\u0007\u001a\u0004\b\u0006\u0010\b¨\u0006\t"}, d2 = {"Lcom/withpersona/sdk2/inquiry/internal/network/UpdateInquirySessionRequest$Data;", "", "Lcom/withpersona/sdk2/inquiry/internal/network/UpdateInquirySessionRequest$Attributes;", "attributes", "<init>", "(Lcom/withpersona/sdk2/inquiry/internal/network/UpdateInquirySessionRequest$Attributes;)V", "a", "Lcom/withpersona/sdk2/inquiry/internal/network/UpdateInquirySessionRequest$Attributes;", "()Lcom/withpersona/sdk2/inquiry/internal/network/UpdateInquirySessionRequest$Attributes;", "inquiry-internal_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class Data {

        /* renamed from: a  reason: collision with root package name */
        private final Attributes f19243a;

        public Data(Attributes attributes) {
            Intrinsics.checkNotNullParameter(attributes, "attributes");
            this.f19243a = attributes;
        }

        public final Attributes a() {
            return this.f19243a;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final UpdateInquirySessionRequest a(Double d10, Double d11, String str, List list) {
            return new UpdateInquirySessionRequest(new Data(new Attributes(d10, d11, str, list)));
        }

        private a() {
        }
    }

    public UpdateInquirySessionRequest(Data data) {
        Intrinsics.checkNotNullParameter(data, "data");
        this.f19235a = data;
    }

    public final Data a() {
        return this.f19235a;
    }

    @com.squareup.moshi.i(generateAdapter = true)
    @Metadata(d1 = {"\u0000\"\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\u0010\u0006\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0002\b\u000e\b\u0007\u0018\u00002\u00020\u0001B=\u0012\n\b\u0002\u0010\u0003\u001a\u0004\u0018\u00010\u0002\u0012\n\b\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u0002\u0012\n\b\u0002\u0010\u0006\u001a\u0004\u0018\u00010\u0005\u0012\u0010\b\u0002\u0010\t\u001a\n\u0012\u0004\u0012\u00020\b\u0018\u00010\u0007¢\u0006\u0004\b\n\u0010\u000bR\u0019\u0010\u0003\u001a\u0004\u0018\u00010\u00028\u0006¢\u0006\f\n\u0004\b\f\u0010\r\u001a\u0004\b\u000e\u0010\u000fR\u0019\u0010\u0004\u001a\u0004\u0018\u00010\u00028\u0006¢\u0006\f\n\u0004\b\u0010\u0010\r\u001a\u0004\b\u0010\u0010\u000fR\u0019\u0010\u0006\u001a\u0004\u0018\u00010\u00058\u0006¢\u0006\f\n\u0004\b\u000e\u0010\u0011\u001a\u0004\b\u0012\u0010\u0013R\u001f\u0010\t\u001a\n\u0012\u0004\u0012\u00020\b\u0018\u00010\u00078\u0006¢\u0006\f\n\u0004\b\u0012\u0010\u0014\u001a\u0004\b\f\u0010\u0015¨\u0006\u0016"}, d2 = {"Lcom/withpersona/sdk2/inquiry/internal/network/UpdateInquirySessionRequest$Attributes;", "", "", "gpsLongitude", "gpsLatitude", "", "gpsPrecision", "", "Lcom/withpersona/sdk2/inquiry/internal/network/UpdateInquirySessionRequest$AppdomeThreatEvent;", "appdomeThreatEvents", "<init>", "(Ljava/lang/Double;Ljava/lang/Double;Ljava/lang/String;Ljava/util/List;)V", "a", "Ljava/lang/Double;", "c", "()Ljava/lang/Double;", "b", "Ljava/lang/String;", "d", "()Ljava/lang/String;", "Ljava/util/List;", "()Ljava/util/List;", "inquiry-internal_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class Attributes {

        /* renamed from: a  reason: collision with root package name */
        private final Double f19239a;

        /* renamed from: b  reason: collision with root package name */
        private final Double f19240b;

        /* renamed from: c  reason: collision with root package name */
        private final String f19241c;

        /* renamed from: d  reason: collision with root package name */
        private final List f19242d;

        public Attributes(Double d10, Double d11, String str, List list) {
            this.f19239a = d10;
            this.f19240b = d11;
            this.f19241c = str;
            this.f19242d = list;
        }

        public final List a() {
            return this.f19242d;
        }

        public final Double b() {
            return this.f19240b;
        }

        public final Double c() {
            return this.f19239a;
        }

        public final String d() {
            return this.f19241c;
        }

        public /* synthetic */ Attributes(Double d10, Double d11, String str, List list, int i10, DefaultConstructorMarker defaultConstructorMarker) {
            this((i10 & 1) != 0 ? null : d10, (i10 & 2) != 0 ? null : d11, (i10 & 4) != 0 ? null : str, (i10 & 8) != 0 ? null : list);
        }
    }
}
