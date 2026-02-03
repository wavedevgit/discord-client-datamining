package com.withpersona.sdk2.inquiry.document.network;

import com.squareup.moshi.i;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
@i(generateAdapter = true)
@Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\r\b\u0007\u0018\u0000 \u000e2\u00020\u0001:\u0003\u000f\u0010\bB\u001b\b\u0000\u0012\b\b\u0002\u0010\u0003\u001a\u00020\u0002\u0012\u0006\u0010\u0005\u001a\u00020\u0004¢\u0006\u0004\b\u0006\u0010\u0007R\u0017\u0010\u0003\u001a\u00020\u00028\u0006¢\u0006\f\n\u0004\b\b\u0010\t\u001a\u0004\b\b\u0010\nR\u0017\u0010\u0005\u001a\u00020\u00048\u0006¢\u0006\f\n\u0004\b\u000b\u0010\f\u001a\u0004\b\u000b\u0010\r¨\u0006\u0011"}, d2 = {"Lcom/withpersona/sdk2/inquiry/document/network/SubmitDocumentRequest;", "", "Lcom/withpersona/sdk2/inquiry/document/network/SubmitDocumentRequest$Data;", "data", "Lcom/withpersona/sdk2/inquiry/document/network/SubmitDocumentRequest$Meta;", "meta", "<init>", "(Lcom/withpersona/sdk2/inquiry/document/network/SubmitDocumentRequest$Data;Lcom/withpersona/sdk2/inquiry/document/network/SubmitDocumentRequest$Meta;)V", "a", "Lcom/withpersona/sdk2/inquiry/document/network/SubmitDocumentRequest$Data;", "()Lcom/withpersona/sdk2/inquiry/document/network/SubmitDocumentRequest$Data;", "b", "Lcom/withpersona/sdk2/inquiry/document/network/SubmitDocumentRequest$Meta;", "()Lcom/withpersona/sdk2/inquiry/document/network/SubmitDocumentRequest$Meta;", "c", "Data", "Meta", "document_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class SubmitDocumentRequest {

    /* renamed from: c  reason: collision with root package name */
    public static final a f18117c = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final Data f18118a;

    /* renamed from: b  reason: collision with root package name */
    private final Meta f18119b;

    @i(generateAdapter = true)
    @Metadata(d1 = {"\u0000\u0010\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\u0010\u000e\n\u0002\b\t\b\u0007\u0018\u00002\u00020\u0001B\u0017\u0012\u0006\u0010\u0003\u001a\u00020\u0002\u0012\u0006\u0010\u0004\u001a\u00020\u0002¢\u0006\u0004\b\u0005\u0010\u0006R\u0017\u0010\u0003\u001a\u00020\u00028\u0006¢\u0006\f\n\u0004\b\u0007\u0010\b\u001a\u0004\b\t\u0010\nR\u0017\u0010\u0004\u001a\u00020\u00028\u0006¢\u0006\f\n\u0004\b\t\u0010\b\u001a\u0004\b\u0007\u0010\n¨\u0006\u000b"}, d2 = {"Lcom/withpersona/sdk2/inquiry/document/network/SubmitDocumentRequest$Meta;", "", "", "fromStep", "fromComponent", "<init>", "(Ljava/lang/String;Ljava/lang/String;)V", "a", "Ljava/lang/String;", "b", "()Ljava/lang/String;", "document_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class Meta {

        /* renamed from: a  reason: collision with root package name */
        private final String f18121a;

        /* renamed from: b  reason: collision with root package name */
        private final String f18122b;

        public Meta(String fromStep, String fromComponent) {
            Intrinsics.checkNotNullParameter(fromStep, "fromStep");
            Intrinsics.checkNotNullParameter(fromComponent, "fromComponent");
            this.f18121a = fromStep;
            this.f18122b = fromComponent;
        }

        public final String a() {
            return this.f18122b;
        }

        public final String b() {
            return this.f18121a;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final SubmitDocumentRequest a(String fromStep, String fromComponent) {
            Intrinsics.checkNotNullParameter(fromStep, "fromStep");
            Intrinsics.checkNotNullParameter(fromComponent, "fromComponent");
            return new SubmitDocumentRequest(null, new Meta(fromStep, fromComponent), 1, null);
        }

        private a() {
        }
    }

    public SubmitDocumentRequest(Data data, Meta meta) {
        Intrinsics.checkNotNullParameter(data, "data");
        Intrinsics.checkNotNullParameter(meta, "meta");
        this.f18118a = data;
        this.f18119b = meta;
    }

    public final Data a() {
        return this.f18118a;
    }

    public final Meta b() {
        return this.f18119b;
    }

    @i(generateAdapter = true)
    @Metadata(d1 = {"\u0000\u0010\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\u0010\u000e\n\u0002\b\u0007\b\u0007\u0018\u00002\u00020\u0001B\u0011\u0012\b\b\u0002\u0010\u0003\u001a\u00020\u0002¢\u0006\u0004\b\u0004\u0010\u0005R\u0017\u0010\u0003\u001a\u00020\u00028\u0006¢\u0006\f\n\u0004\b\u0006\u0010\u0007\u001a\u0004\b\u0006\u0010\b¨\u0006\t"}, d2 = {"Lcom/withpersona/sdk2/inquiry/document/network/SubmitDocumentRequest$Data;", "", "", "type", "<init>", "(Ljava/lang/String;)V", "a", "Ljava/lang/String;", "()Ljava/lang/String;", "document_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class Data {

        /* renamed from: a  reason: collision with root package name */
        private final String f18120a;

        public Data(String type) {
            Intrinsics.checkNotNullParameter(type, "type");
            this.f18120a = type;
        }

        public final String a() {
            return this.f18120a;
        }

        public /* synthetic */ Data(String str, int i10, DefaultConstructorMarker defaultConstructorMarker) {
            this((i10 & 1) != 0 ? "inquiry" : str);
        }
    }

    public /* synthetic */ SubmitDocumentRequest(Data data, Meta meta, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this((i10 & 1) != 0 ? new Data(null, 1, null) : data, meta);
    }
}
