package com.withpersona.sdk2.inquiry.document.network;

import com.squareup.moshi.i;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
@i(generateAdapter = true)
@Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u000e\b\u0007\u0018\u0000 \u000e2\u00020\u0001:\u0004\u000f\u0010\u0011\bB\u0019\b\u0000\u0012\u0006\u0010\u0003\u001a\u00020\u0002\u0012\u0006\u0010\u0005\u001a\u00020\u0004¢\u0006\u0004\b\u0006\u0010\u0007R\u0017\u0010\u0003\u001a\u00020\u00028\u0006¢\u0006\f\n\u0004\b\b\u0010\t\u001a\u0004\b\b\u0010\nR\u0017\u0010\u0005\u001a\u00020\u00048\u0006¢\u0006\f\n\u0004\b\u000b\u0010\f\u001a\u0004\b\u000b\u0010\r¨\u0006\u0012"}, d2 = {"Lcom/withpersona/sdk2/inquiry/document/network/CreateDocumentRequest;", "", "Lcom/withpersona/sdk2/inquiry/document/network/CreateDocumentRequest$Data;", "data", "Lcom/withpersona/sdk2/inquiry/document/network/CreateDocumentRequest$Meta;", "meta", "<init>", "(Lcom/withpersona/sdk2/inquiry/document/network/CreateDocumentRequest$Data;Lcom/withpersona/sdk2/inquiry/document/network/CreateDocumentRequest$Meta;)V", "a", "Lcom/withpersona/sdk2/inquiry/document/network/CreateDocumentRequest$Data;", "()Lcom/withpersona/sdk2/inquiry/document/network/CreateDocumentRequest$Data;", "b", "Lcom/withpersona/sdk2/inquiry/document/network/CreateDocumentRequest$Meta;", "()Lcom/withpersona/sdk2/inquiry/document/network/CreateDocumentRequest$Meta;", "c", "Data", "Attributes", "Meta", "document_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class CreateDocumentRequest {

    /* renamed from: c  reason: collision with root package name */
    public static final a f18461c = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final Data f18462a;

    /* renamed from: b  reason: collision with root package name */
    private final Meta f18463b;

    @i(generateAdapter = true)
    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\b\n\u0002\b\n\b\u0007\u0018\u00002\u00020\u0001B\u0017\u0012\u0006\u0010\u0003\u001a\u00020\u0002\u0012\u0006\u0010\u0005\u001a\u00020\u0004¢\u0006\u0004\b\u0006\u0010\u0007R\u0017\u0010\u0003\u001a\u00020\u00028\u0006¢\u0006\f\n\u0004\b\b\u0010\t\u001a\u0004\b\n\u0010\u000bR\u0017\u0010\u0005\u001a\u00020\u00048\u0006¢\u0006\f\n\u0004\b\n\u0010\f\u001a\u0004\b\b\u0010\r¨\u0006\u000e"}, d2 = {"Lcom/withpersona/sdk2/inquiry/document/network/CreateDocumentRequest$Attributes;", "", "", "kind", "", "fileLimit", "<init>", "(Ljava/lang/String;I)V", "a", "Ljava/lang/String;", "b", "()Ljava/lang/String;", "I", "()I", "document_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class Attributes {

        /* renamed from: a  reason: collision with root package name */
        private final String f18464a;

        /* renamed from: b  reason: collision with root package name */
        private final int f18465b;

        public Attributes(String kind, int i10) {
            Intrinsics.checkNotNullParameter(kind, "kind");
            this.f18464a = kind;
            this.f18465b = i10;
        }

        public final int a() {
            return this.f18465b;
        }

        public final String b() {
            return this.f18464a;
        }
    }

    @i(generateAdapter = true)
    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0002\b\n\b\u0007\u0018\u00002\u00020\u0001B\u0017\u0012\u0006\u0010\u0003\u001a\u00020\u0002\u0012\u0006\u0010\u0005\u001a\u00020\u0004¢\u0006\u0004\b\u0006\u0010\u0007R\u0017\u0010\u0003\u001a\u00020\u00028\u0006¢\u0006\f\n\u0004\b\b\u0010\t\u001a\u0004\b\n\u0010\u000bR\u0017\u0010\u0005\u001a\u00020\u00048\u0006¢\u0006\f\n\u0004\b\n\u0010\f\u001a\u0004\b\b\u0010\r¨\u0006\u000e"}, d2 = {"Lcom/withpersona/sdk2/inquiry/document/network/CreateDocumentRequest$Data;", "", "", "type", "Lcom/withpersona/sdk2/inquiry/document/network/CreateDocumentRequest$Attributes;", "attributes", "<init>", "(Ljava/lang/String;Lcom/withpersona/sdk2/inquiry/document/network/CreateDocumentRequest$Attributes;)V", "a", "Ljava/lang/String;", "b", "()Ljava/lang/String;", "Lcom/withpersona/sdk2/inquiry/document/network/CreateDocumentRequest$Attributes;", "()Lcom/withpersona/sdk2/inquiry/document/network/CreateDocumentRequest$Attributes;", "document_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class Data {

        /* renamed from: a  reason: collision with root package name */
        private final String f18466a;

        /* renamed from: b  reason: collision with root package name */
        private final Attributes f18467b;

        public Data(String type, Attributes attributes) {
            Intrinsics.checkNotNullParameter(type, "type");
            Intrinsics.checkNotNullParameter(attributes, "attributes");
            this.f18466a = type;
            this.f18467b = attributes;
        }

        public final Attributes a() {
            return this.f18467b;
        }

        public final String b() {
            return this.f18466a;
        }
    }

    @i(generateAdapter = true)
    @Metadata(d1 = {"\u0000\u0010\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\u0010\u000e\n\u0002\b\u0007\b\u0007\u0018\u00002\u00020\u0001B\u000f\u0012\u0006\u0010\u0003\u001a\u00020\u0002¢\u0006\u0004\b\u0004\u0010\u0005R\u0017\u0010\u0003\u001a\u00020\u00028\u0006¢\u0006\f\n\u0004\b\u0006\u0010\u0007\u001a\u0004\b\u0006\u0010\b¨\u0006\t"}, d2 = {"Lcom/withpersona/sdk2/inquiry/document/network/CreateDocumentRequest$Meta;", "", "", "fieldKeyDocument", "<init>", "(Ljava/lang/String;)V", "a", "Ljava/lang/String;", "()Ljava/lang/String;", "document_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class Meta {

        /* renamed from: a  reason: collision with root package name */
        private final String f18468a;

        public Meta(String fieldKeyDocument) {
            Intrinsics.checkNotNullParameter(fieldKeyDocument, "fieldKeyDocument");
            this.f18468a = fieldKeyDocument;
        }

        public final String a() {
            return this.f18468a;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final CreateDocumentRequest a(String type, String kind, int i10, String fieldKeyDocument) {
            Intrinsics.checkNotNullParameter(type, "type");
            Intrinsics.checkNotNullParameter(kind, "kind");
            Intrinsics.checkNotNullParameter(fieldKeyDocument, "fieldKeyDocument");
            return new CreateDocumentRequest(new Data(type, new Attributes(kind, i10)), new Meta(fieldKeyDocument));
        }

        private a() {
        }
    }

    public CreateDocumentRequest(Data data, Meta meta) {
        Intrinsics.checkNotNullParameter(data, "data");
        Intrinsics.checkNotNullParameter(meta, "meta");
        this.f18462a = data;
        this.f18463b = meta;
    }

    public final Data a() {
        return this.f18462a;
    }

    public final Meta b() {
        return this.f18463b;
    }
}
