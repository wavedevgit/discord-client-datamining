package com.withpersona.sdk2.inquiry.internal.fallbackmode;

import com.withpersona.sdk2.inquiry.internal.InquiryFieldMap;
import java.util.List;
import kotlin.Metadata;
import kotlin.coroutines.Continuation;
import kotlin.jvm.internal.Intrinsics;
import okhttp3.RequestBody;
import org.jetbrains.annotations.NotNull;
import wv.z;
import yv.k;
import yv.o;
import yv.y;
@Metadata(d1 = {"\u0000L\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u000b\bf\u0018\u00002\u00020\u0001:\u0007\u001c\u001d\u001e\u001f !\"J,\u0010\b\u001a\b\u0012\u0004\u0012\u00020\u00070\u00062\n\b\u0001\u0010\u0003\u001a\u0004\u0018\u00010\u00022\b\b\u0001\u0010\u0005\u001a\u00020\u0004H§@¢\u0006\u0004\b\b\u0010\tJ \u0010\f\u001a\b\u0012\u0004\u0012\u00020\u000b0\u00062\b\b\u0001\u0010\u0005\u001a\u00020\nH§@¢\u0006\u0004\b\f\u0010\rJ>\u0010\u0015\u001a\b\u0012\u0004\u0012\u00020\u00140\u00062\b\b\u0001\u0010\u000e\u001a\u00020\u00022\b\b\u0001\u0010\u0010\u001a\u00020\u000f2\b\b\u0001\u0010\u0012\u001a\u00020\u00112\b\b\u0001\u0010\u0005\u001a\u00020\u0013H§@¢\u0006\u0004\b\u0015\u0010\u0016J*\u0010\u001a\u001a\b\u0012\u0004\u0012\u00020\u00010\u00062\b\b\u0001\u0010\u0017\u001a\u00020\u00022\b\b\u0001\u0010\u0019\u001a\u00020\u0018H§@¢\u0006\u0004\b\u001a\u0010\u001b¨\u0006#"}, d2 = {"Lcom/withpersona/sdk2/inquiry/internal/fallbackmode/FallbackModeService;", "", "", "sessionToken", "Lcom/withpersona/sdk2/inquiry/internal/fallbackmode/FallbackModeService$StatusRequest;", "request", "Lwv/z;", "Lcom/withpersona/sdk2/inquiry/internal/fallbackmode/FallbackModeService$StatusResponse;", "a", "(Ljava/lang/String;Lcom/withpersona/sdk2/inquiry/internal/fallbackmode/FallbackModeService$StatusRequest;Lkotlin/coroutines/Continuation;)Ljava/lang/Object;", "Lcom/withpersona/sdk2/inquiry/internal/fallbackmode/FallbackModeService$SessionIdRequest;", "Lcom/withpersona/sdk2/inquiry/internal/fallbackmode/FallbackModeService$SessionIdResponse;", "c", "(Lcom/withpersona/sdk2/inquiry/internal/fallbackmode/FallbackModeService$SessionIdRequest;Lkotlin/coroutines/Continuation;)Ljava/lang/Object;", "authHeader", "Lzo/h;", "productionEndpoint", "", "requestCount", "Lcom/withpersona/sdk2/inquiry/internal/fallbackmode/FallbackModeService$UploadUrlRequest;", "Lcom/withpersona/sdk2/inquiry/internal/fallbackmode/FallbackModeService$UploadUrlResponse;", "d", "(Ljava/lang/String;Lzo/h;ILcom/withpersona/sdk2/inquiry/internal/fallbackmode/FallbackModeService$UploadUrlRequest;Lkotlin/coroutines/Continuation;)Ljava/lang/Object;", "url", "Lokhttp3/RequestBody;", "body", "b", "(Ljava/lang/String;Lokhttp3/RequestBody;Lkotlin/coroutines/Continuation;)Ljava/lang/Object;", "UploadUrlResponse", "UploadUrlRequest", "StatusRequest", "StatusResponse", "StaticTemplate", "SessionIdRequest", "SessionIdResponse", "inquiry-internal_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public interface FallbackModeService {

    @com.squareup.moshi.i(generateAdapter = true)
    @Metadata(d1 = {"\u0000(\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\u0010\u000e\n\u0002\b\u0007\n\u0002\u0018\u0002\n\u0002\b\b\n\u0002\u0010\b\n\u0002\b\u0003\n\u0002\u0010\u000b\n\u0002\b\u000f\b\u0087\b\u0018\u00002\u00020\u0001Bm\u0012\b\b\u0001\u0010\u0003\u001a\u00020\u0002\u0012\n\b\u0001\u0010\u0004\u001a\u0004\u0018\u00010\u0002\u0012\n\b\u0001\u0010\u0005\u001a\u0004\u0018\u00010\u0002\u0012\n\b\u0001\u0010\u0006\u001a\u0004\u0018\u00010\u0002\u0012\n\b\u0001\u0010\u0007\u001a\u0004\u0018\u00010\u0002\u0012\b\u0010\b\u001a\u0004\u0018\u00010\u0002\u0012\n\b\u0001\u0010\t\u001a\u0004\u0018\u00010\u0002\u0012\b\u0010\u000b\u001a\u0004\u0018\u00010\n\u0012\n\b\u0001\u0010\f\u001a\u0004\u0018\u00010\u0002¢\u0006\u0004\b\r\u0010\u000eJz\u0010\u000f\u001a\u00020\u00002\b\b\u0003\u0010\u0003\u001a\u00020\u00022\n\b\u0003\u0010\u0004\u001a\u0004\u0018\u00010\u00022\n\b\u0003\u0010\u0005\u001a\u0004\u0018\u00010\u00022\n\b\u0003\u0010\u0006\u001a\u0004\u0018\u00010\u00022\n\b\u0003\u0010\u0007\u001a\u0004\u0018\u00010\u00022\n\b\u0002\u0010\b\u001a\u0004\u0018\u00010\u00022\n\b\u0003\u0010\t\u001a\u0004\u0018\u00010\u00022\n\b\u0002\u0010\u000b\u001a\u0004\u0018\u00010\n2\n\b\u0003\u0010\f\u001a\u0004\u0018\u00010\u0002HÆ\u0001¢\u0006\u0004\b\u000f\u0010\u0010J\u0010\u0010\u0011\u001a\u00020\u0002HÖ\u0001¢\u0006\u0004\b\u0011\u0010\u0012J\u0010\u0010\u0014\u001a\u00020\u0013HÖ\u0001¢\u0006\u0004\b\u0014\u0010\u0015J\u001a\u0010\u0018\u001a\u00020\u00172\b\u0010\u0016\u001a\u0004\u0018\u00010\u0001HÖ\u0003¢\u0006\u0004\b\u0018\u0010\u0019R\u0017\u0010\u0003\u001a\u00020\u00028\u0006¢\u0006\f\n\u0004\b\u001a\u0010\u001b\u001a\u0004\b\u001c\u0010\u0012R\u0019\u0010\u0004\u001a\u0004\u0018\u00010\u00028\u0006¢\u0006\f\n\u0004\b\u001d\u0010\u001b\u001a\u0004\b\u001e\u0010\u0012R\u0019\u0010\u0005\u001a\u0004\u0018\u00010\u00028\u0006¢\u0006\f\n\u0004\b\u001f\u0010\u001b\u001a\u0004\b \u0010\u0012R\u0019\u0010\u0006\u001a\u0004\u0018\u00010\u00028\u0006¢\u0006\f\n\u0004\b!\u0010\u001b\u001a\u0004\b\"\u0010\u0012R\u0019\u0010\u0007\u001a\u0004\u0018\u00010\u00028\u0006¢\u0006\f\n\u0004\b \u0010\u001b\u001a\u0004\b\u001a\u0010\u0012R\u0019\u0010\b\u001a\u0004\u0018\u00010\u00028\u0006¢\u0006\f\n\u0004\b\u001c\u0010\u001b\u001a\u0004\b\u001d\u0010\u0012R\u0019\u0010\t\u001a\u0004\u0018\u00010\u00028\u0006¢\u0006\f\n\u0004\b\u001e\u0010\u001b\u001a\u0004\b\u001f\u0010\u0012R\u0019\u0010\u000b\u001a\u0004\u0018\u00010\n8\u0006¢\u0006\f\n\u0004\b\"\u0010#\u001a\u0004\b!\u0010$R\u0019\u0010\f\u001a\u0004\u0018\u00010\u00028\u0006¢\u0006\f\n\u0004\b%\u0010\u001b\u001a\u0004\b%\u0010\u0012¨\u0006&"}, d2 = {"Lcom/withpersona/sdk2/inquiry/internal/fallbackmode/FallbackModeService$SessionIdRequest;", "", "", "inquiryTemplateId", "inquiryTemplateVersion", "inquiryId", "referenceId", "accountId", "environment", "environmentId", "Lcom/withpersona/sdk2/inquiry/internal/InquiryFieldMap;", "fields", "themeSetId", "<init>", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Lcom/withpersona/sdk2/inquiry/internal/InquiryFieldMap;Ljava/lang/String;)V", "copy", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Lcom/withpersona/sdk2/inquiry/internal/InquiryFieldMap;Ljava/lang/String;)Lcom/withpersona/sdk2/inquiry/internal/fallbackmode/FallbackModeService$SessionIdRequest;", "toString", "()Ljava/lang/String;", "", "hashCode", "()I", "other", "", "equals", "(Ljava/lang/Object;)Z", "a", "Ljava/lang/String;", "f", "b", "g", "c", "e", "d", "h", "Lcom/withpersona/sdk2/inquiry/internal/InquiryFieldMap;", "()Lcom/withpersona/sdk2/inquiry/internal/InquiryFieldMap;", "i", "inquiry-internal_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class SessionIdRequest {

        /* renamed from: a  reason: collision with root package name */
        private final String f18938a;

        /* renamed from: b  reason: collision with root package name */
        private final String f18939b;

        /* renamed from: c  reason: collision with root package name */
        private final String f18940c;

        /* renamed from: d  reason: collision with root package name */
        private final String f18941d;

        /* renamed from: e  reason: collision with root package name */
        private final String f18942e;

        /* renamed from: f  reason: collision with root package name */
        private final String f18943f;

        /* renamed from: g  reason: collision with root package name */
        private final String f18944g;

        /* renamed from: h  reason: collision with root package name */
        private final InquiryFieldMap f18945h;

        /* renamed from: i  reason: collision with root package name */
        private final String f18946i;

        public SessionIdRequest(@com.squareup.moshi.g(name = "inquiry-template-id") @NotNull String inquiryTemplateId, @com.squareup.moshi.g(name = "inquiry-template-version-id") String str, @com.squareup.moshi.g(name = "inquiry-id") String str2, @com.squareup.moshi.g(name = "reference-id") String str3, @com.squareup.moshi.g(name = "account-id") String str4, String str5, @com.squareup.moshi.g(name = "environment-id") String str6, InquiryFieldMap inquiryFieldMap, @com.squareup.moshi.g(name = "theme-set-id") String str7) {
            Intrinsics.checkNotNullParameter(inquiryTemplateId, "inquiryTemplateId");
            this.f18938a = inquiryTemplateId;
            this.f18939b = str;
            this.f18940c = str2;
            this.f18941d = str3;
            this.f18942e = str4;
            this.f18943f = str5;
            this.f18944g = str6;
            this.f18945h = inquiryFieldMap;
            this.f18946i = str7;
        }

        public final String a() {
            return this.f18942e;
        }

        public final String b() {
            return this.f18943f;
        }

        public final String c() {
            return this.f18944g;
        }

        @NotNull
        public final SessionIdRequest copy(@com.squareup.moshi.g(name = "inquiry-template-id") @NotNull String inquiryTemplateId, @com.squareup.moshi.g(name = "inquiry-template-version-id") String str, @com.squareup.moshi.g(name = "inquiry-id") String str2, @com.squareup.moshi.g(name = "reference-id") String str3, @com.squareup.moshi.g(name = "account-id") String str4, String str5, @com.squareup.moshi.g(name = "environment-id") String str6, InquiryFieldMap inquiryFieldMap, @com.squareup.moshi.g(name = "theme-set-id") String str7) {
            Intrinsics.checkNotNullParameter(inquiryTemplateId, "inquiryTemplateId");
            return new SessionIdRequest(inquiryTemplateId, str, str2, str3, str4, str5, str6, inquiryFieldMap, str7);
        }

        public final InquiryFieldMap d() {
            return this.f18945h;
        }

        public final String e() {
            return this.f18940c;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof SessionIdRequest) {
                SessionIdRequest sessionIdRequest = (SessionIdRequest) obj;
                return Intrinsics.areEqual(this.f18938a, sessionIdRequest.f18938a) && Intrinsics.areEqual(this.f18939b, sessionIdRequest.f18939b) && Intrinsics.areEqual(this.f18940c, sessionIdRequest.f18940c) && Intrinsics.areEqual(this.f18941d, sessionIdRequest.f18941d) && Intrinsics.areEqual(this.f18942e, sessionIdRequest.f18942e) && Intrinsics.areEqual(this.f18943f, sessionIdRequest.f18943f) && Intrinsics.areEqual(this.f18944g, sessionIdRequest.f18944g) && Intrinsics.areEqual(this.f18945h, sessionIdRequest.f18945h) && Intrinsics.areEqual(this.f18946i, sessionIdRequest.f18946i);
            }
            return false;
        }

        public final String f() {
            return this.f18938a;
        }

        public final String g() {
            return this.f18939b;
        }

        public final String h() {
            return this.f18941d;
        }

        public int hashCode() {
            int hashCode = this.f18938a.hashCode() * 31;
            String str = this.f18939b;
            int hashCode2 = (hashCode + (str == null ? 0 : str.hashCode())) * 31;
            String str2 = this.f18940c;
            int hashCode3 = (hashCode2 + (str2 == null ? 0 : str2.hashCode())) * 31;
            String str3 = this.f18941d;
            int hashCode4 = (hashCode3 + (str3 == null ? 0 : str3.hashCode())) * 31;
            String str4 = this.f18942e;
            int hashCode5 = (hashCode4 + (str4 == null ? 0 : str4.hashCode())) * 31;
            String str5 = this.f18943f;
            int hashCode6 = (hashCode5 + (str5 == null ? 0 : str5.hashCode())) * 31;
            String str6 = this.f18944g;
            int hashCode7 = (hashCode6 + (str6 == null ? 0 : str6.hashCode())) * 31;
            InquiryFieldMap inquiryFieldMap = this.f18945h;
            int hashCode8 = (hashCode7 + (inquiryFieldMap == null ? 0 : inquiryFieldMap.hashCode())) * 31;
            String str7 = this.f18946i;
            return hashCode8 + (str7 != null ? str7.hashCode() : 0);
        }

        public final String i() {
            return this.f18946i;
        }

        public String toString() {
            String str = this.f18938a;
            String str2 = this.f18939b;
            String str3 = this.f18940c;
            String str4 = this.f18941d;
            String str5 = this.f18942e;
            String str6 = this.f18943f;
            String str7 = this.f18944g;
            InquiryFieldMap inquiryFieldMap = this.f18945h;
            String str8 = this.f18946i;
            return "SessionIdRequest(inquiryTemplateId=" + str + ", inquiryTemplateVersion=" + str2 + ", inquiryId=" + str3 + ", referenceId=" + str4 + ", accountId=" + str5 + ", environment=" + str6 + ", environmentId=" + str7 + ", fields=" + inquiryFieldMap + ", themeSetId=" + str8 + ")";
        }
    }

    @com.squareup.moshi.i(generateAdapter = true)
    @Metadata(d1 = {"\u0000 \n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\u0010\u000e\n\u0002\b\u0005\n\u0002\u0010\b\n\u0002\b\u0003\n\u0002\u0010\u000b\n\u0002\b\u0005\b\u0087\b\u0018\u00002\u00020\u0001B\u000f\u0012\u0006\u0010\u0003\u001a\u00020\u0002¢\u0006\u0004\b\u0004\u0010\u0005J\u0010\u0010\u0006\u001a\u00020\u0002HÖ\u0001¢\u0006\u0004\b\u0006\u0010\u0007J\u0010\u0010\t\u001a\u00020\bHÖ\u0001¢\u0006\u0004\b\t\u0010\nJ\u001a\u0010\r\u001a\u00020\f2\b\u0010\u000b\u001a\u0004\u0018\u00010\u0001HÖ\u0003¢\u0006\u0004\b\r\u0010\u000eR\u0017\u0010\u0003\u001a\u00020\u00028\u0006¢\u0006\f\n\u0004\b\u000f\u0010\u0010\u001a\u0004\b\u000f\u0010\u0007¨\u0006\u0011"}, d2 = {"Lcom/withpersona/sdk2/inquiry/internal/fallbackmode/FallbackModeService$SessionIdResponse;", "", "", "token", "<init>", "(Ljava/lang/String;)V", "toString", "()Ljava/lang/String;", "", "hashCode", "()I", "other", "", "equals", "(Ljava/lang/Object;)Z", "a", "Ljava/lang/String;", "inquiry-internal_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class SessionIdResponse {

        /* renamed from: a  reason: collision with root package name */
        private final String f18947a;

        public SessionIdResponse(String token) {
            Intrinsics.checkNotNullParameter(token, "token");
            this.f18947a = token;
        }

        public final String a() {
            return this.f18947a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            return (obj instanceof SessionIdResponse) && Intrinsics.areEqual(this.f18947a, ((SessionIdResponse) obj).f18947a);
        }

        public int hashCode() {
            return this.f18947a.hashCode();
        }

        public String toString() {
            String str = this.f18947a;
            return "SessionIdResponse(token=" + str + ")";
        }
    }

    @com.squareup.moshi.i(generateAdapter = true)
    @Metadata(d1 = {"\u0000,\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0010\b\n\u0002\b\u0003\n\u0002\u0010\u000b\n\u0002\b\u0006\b\u0087\b\u0018\u00002\u00020\u0001B\u0015\u0012\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00030\u0002¢\u0006\u0004\b\u0005\u0010\u0006J\u0010\u0010\b\u001a\u00020\u0007HÖ\u0001¢\u0006\u0004\b\b\u0010\tJ\u0010\u0010\u000b\u001a\u00020\nHÖ\u0001¢\u0006\u0004\b\u000b\u0010\fJ\u001a\u0010\u000f\u001a\u00020\u000e2\b\u0010\r\u001a\u0004\u0018\u00010\u0001HÖ\u0003¢\u0006\u0004\b\u000f\u0010\u0010R\u001d\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00030\u00028\u0006¢\u0006\f\n\u0004\b\u0011\u0010\u0012\u001a\u0004\b\u0011\u0010\u0013¨\u0006\u0014"}, d2 = {"Lcom/withpersona/sdk2/inquiry/internal/fallbackmode/FallbackModeService$StaticTemplate;", "", "", "Lcom/withpersona/sdk2/inquiry/network/dto/NextStep;", "steps", "<init>", "(Ljava/util/List;)V", "", "toString", "()Ljava/lang/String;", "", "hashCode", "()I", "other", "", "equals", "(Ljava/lang/Object;)Z", "a", "Ljava/util/List;", "()Ljava/util/List;", "inquiry-internal_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class StaticTemplate {

        /* renamed from: a  reason: collision with root package name */
        private final List f18948a;

        public StaticTemplate(List steps) {
            Intrinsics.checkNotNullParameter(steps, "steps");
            this.f18948a = steps;
        }

        public final List a() {
            return this.f18948a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            return (obj instanceof StaticTemplate) && Intrinsics.areEqual(this.f18948a, ((StaticTemplate) obj).f18948a);
        }

        public int hashCode() {
            return this.f18948a.hashCode();
        }

        public String toString() {
            List list = this.f18948a;
            return "StaticTemplate(steps=" + list + ")";
        }
    }

    @com.squareup.moshi.i(generateAdapter = true)
    @Metadata(d1 = {"\u0000 \n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\u0010\u000e\n\u0002\b\u0007\n\u0002\u0010\b\n\u0002\b\u0003\n\u0002\u0010\u000b\n\u0002\b\u0005\b\u0087\b\u0018\u00002\u00020\u0001B\u0013\u0012\n\b\u0001\u0010\u0003\u001a\u0004\u0018\u00010\u0002¢\u0006\u0004\b\u0004\u0010\u0005J\u001c\u0010\u0006\u001a\u00020\u00002\n\b\u0003\u0010\u0003\u001a\u0004\u0018\u00010\u0002HÆ\u0001¢\u0006\u0004\b\u0006\u0010\u0007J\u0010\u0010\b\u001a\u00020\u0002HÖ\u0001¢\u0006\u0004\b\b\u0010\tJ\u0010\u0010\u000b\u001a\u00020\nHÖ\u0001¢\u0006\u0004\b\u000b\u0010\fJ\u001a\u0010\u000f\u001a\u00020\u000e2\b\u0010\r\u001a\u0004\u0018\u00010\u0001HÖ\u0003¢\u0006\u0004\b\u000f\u0010\u0010R\u0019\u0010\u0003\u001a\u0004\u0018\u00010\u00028\u0006¢\u0006\f\n\u0004\b\u0011\u0010\u0012\u001a\u0004\b\u0011\u0010\t¨\u0006\u0013"}, d2 = {"Lcom/withpersona/sdk2/inquiry/internal/fallbackmode/FallbackModeService$StatusRequest;", "", "", "inquiryTemplateId", "<init>", "(Ljava/lang/String;)V", "copy", "(Ljava/lang/String;)Lcom/withpersona/sdk2/inquiry/internal/fallbackmode/FallbackModeService$StatusRequest;", "toString", "()Ljava/lang/String;", "", "hashCode", "()I", "other", "", "equals", "(Ljava/lang/Object;)Z", "a", "Ljava/lang/String;", "inquiry-internal_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class StatusRequest {

        /* renamed from: a  reason: collision with root package name */
        private final String f18949a;

        public StatusRequest(@com.squareup.moshi.g(name = "inquiry-template-id") String str) {
            this.f18949a = str;
        }

        public final String a() {
            return this.f18949a;
        }

        @NotNull
        public final StatusRequest copy(@com.squareup.moshi.g(name = "inquiry-template-id") String str) {
            return new StatusRequest(str);
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            return (obj instanceof StatusRequest) && Intrinsics.areEqual(this.f18949a, ((StatusRequest) obj).f18949a);
        }

        public int hashCode() {
            String str = this.f18949a;
            if (str == null) {
                return 0;
            }
            return str.hashCode();
        }

        public String toString() {
            String str = this.f18949a;
            return "StatusRequest(inquiryTemplateId=" + str + ")";
        }
    }

    @com.squareup.moshi.i(generateAdapter = true)
    @Metadata(d1 = {"\u0000(\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0010\b\n\u0002\b\u0003\n\u0002\u0010\u000b\n\u0002\b\u0006\b\u0087\b\u0018\u00002\u00020\u0001B\u0013\u0012\n\b\u0001\u0010\u0003\u001a\u0004\u0018\u00010\u0002¢\u0006\u0004\b\u0004\u0010\u0005J\u001c\u0010\u0006\u001a\u00020\u00002\n\b\u0003\u0010\u0003\u001a\u0004\u0018\u00010\u0002HÆ\u0001¢\u0006\u0004\b\u0006\u0010\u0007J\u0010\u0010\t\u001a\u00020\bHÖ\u0001¢\u0006\u0004\b\t\u0010\nJ\u0010\u0010\f\u001a\u00020\u000bHÖ\u0001¢\u0006\u0004\b\f\u0010\rJ\u001a\u0010\u0010\u001a\u00020\u000f2\b\u0010\u000e\u001a\u0004\u0018\u00010\u0001HÖ\u0003¢\u0006\u0004\b\u0010\u0010\u0011R\u0019\u0010\u0003\u001a\u0004\u0018\u00010\u00028\u0006¢\u0006\f\n\u0004\b\u0012\u0010\u0013\u001a\u0004\b\u0012\u0010\u0014¨\u0006\u0015"}, d2 = {"Lcom/withpersona/sdk2/inquiry/internal/fallbackmode/FallbackModeService$StatusResponse;", "", "Lcom/withpersona/sdk2/inquiry/internal/fallbackmode/FallbackModeService$StaticTemplate;", "staticInquiryTemplate", "<init>", "(Lcom/withpersona/sdk2/inquiry/internal/fallbackmode/FallbackModeService$StaticTemplate;)V", "copy", "(Lcom/withpersona/sdk2/inquiry/internal/fallbackmode/FallbackModeService$StaticTemplate;)Lcom/withpersona/sdk2/inquiry/internal/fallbackmode/FallbackModeService$StatusResponse;", "", "toString", "()Ljava/lang/String;", "", "hashCode", "()I", "other", "", "equals", "(Ljava/lang/Object;)Z", "a", "Lcom/withpersona/sdk2/inquiry/internal/fallbackmode/FallbackModeService$StaticTemplate;", "()Lcom/withpersona/sdk2/inquiry/internal/fallbackmode/FallbackModeService$StaticTemplate;", "inquiry-internal_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class StatusResponse {

        /* renamed from: a  reason: collision with root package name */
        private final StaticTemplate f18950a;

        public StatusResponse(@com.squareup.moshi.g(name = "static-inquiry-template") StaticTemplate staticTemplate) {
            this.f18950a = staticTemplate;
        }

        public final StaticTemplate a() {
            return this.f18950a;
        }

        @NotNull
        public final StatusResponse copy(@com.squareup.moshi.g(name = "static-inquiry-template") StaticTemplate staticTemplate) {
            return new StatusResponse(staticTemplate);
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            return (obj instanceof StatusResponse) && Intrinsics.areEqual(this.f18950a, ((StatusResponse) obj).f18950a);
        }

        public int hashCode() {
            StaticTemplate staticTemplate = this.f18950a;
            if (staticTemplate == null) {
                return 0;
            }
            return staticTemplate.hashCode();
        }

        public String toString() {
            StaticTemplate staticTemplate = this.f18950a;
            return "StatusResponse(staticInquiryTemplate=" + staticTemplate + ")";
        }
    }

    @com.squareup.moshi.i(generateAdapter = true)
    @Metadata(d1 = {"\u0000&\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\u0010\t\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0007\n\u0002\u0010\b\n\u0002\b\u0003\n\u0002\u0010\u000b\n\u0002\b\b\b\u0087\b\u0018\u00002\u00020\u0001B\u001b\u0012\b\b\u0001\u0010\u0003\u001a\u00020\u0002\u0012\b\b\u0001\u0010\u0005\u001a\u00020\u0004¢\u0006\u0004\b\u0006\u0010\u0007J$\u0010\b\u001a\u00020\u00002\b\b\u0003\u0010\u0003\u001a\u00020\u00022\b\b\u0003\u0010\u0005\u001a\u00020\u0004HÆ\u0001¢\u0006\u0004\b\b\u0010\tJ\u0010\u0010\n\u001a\u00020\u0004HÖ\u0001¢\u0006\u0004\b\n\u0010\u000bJ\u0010\u0010\r\u001a\u00020\fHÖ\u0001¢\u0006\u0004\b\r\u0010\u000eJ\u001a\u0010\u0011\u001a\u00020\u00102\b\u0010\u000f\u001a\u0004\u0018\u00010\u0001HÖ\u0003¢\u0006\u0004\b\u0011\u0010\u0012R\u0017\u0010\u0003\u001a\u00020\u00028\u0006¢\u0006\f\n\u0004\b\u0013\u0010\u0014\u001a\u0004\b\u0013\u0010\u0015R\u0017\u0010\u0005\u001a\u00020\u00048\u0006¢\u0006\f\n\u0004\b\u0016\u0010\u0017\u001a\u0004\b\u0016\u0010\u000b¨\u0006\u0018"}, d2 = {"Lcom/withpersona/sdk2/inquiry/internal/fallbackmode/FallbackModeService$UploadUrlRequest;", "", "", "expectedContentLength", "", "expectedContentType", "<init>", "(JLjava/lang/String;)V", "copy", "(JLjava/lang/String;)Lcom/withpersona/sdk2/inquiry/internal/fallbackmode/FallbackModeService$UploadUrlRequest;", "toString", "()Ljava/lang/String;", "", "hashCode", "()I", "other", "", "equals", "(Ljava/lang/Object;)Z", "a", "J", "()J", "b", "Ljava/lang/String;", "inquiry-internal_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class UploadUrlRequest {

        /* renamed from: a  reason: collision with root package name */
        private final long f18951a;

        /* renamed from: b  reason: collision with root package name */
        private final String f18952b;

        public UploadUrlRequest(@com.squareup.moshi.g(name = "expected-content-length") long j10, @com.squareup.moshi.g(name = "expected-content-type") @NotNull String expectedContentType) {
            Intrinsics.checkNotNullParameter(expectedContentType, "expectedContentType");
            this.f18951a = j10;
            this.f18952b = expectedContentType;
        }

        public final long a() {
            return this.f18951a;
        }

        public final String b() {
            return this.f18952b;
        }

        @NotNull
        public final UploadUrlRequest copy(@com.squareup.moshi.g(name = "expected-content-length") long j10, @com.squareup.moshi.g(name = "expected-content-type") @NotNull String expectedContentType) {
            Intrinsics.checkNotNullParameter(expectedContentType, "expectedContentType");
            return new UploadUrlRequest(j10, expectedContentType);
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof UploadUrlRequest) {
                UploadUrlRequest uploadUrlRequest = (UploadUrlRequest) obj;
                return this.f18951a == uploadUrlRequest.f18951a && Intrinsics.areEqual(this.f18952b, uploadUrlRequest.f18952b);
            }
            return false;
        }

        public int hashCode() {
            return (Long.hashCode(this.f18951a) * 31) + this.f18952b.hashCode();
        }

        public String toString() {
            long j10 = this.f18951a;
            String str = this.f18952b;
            return "UploadUrlRequest(expectedContentLength=" + j10 + ", expectedContentType=" + str + ")";
        }
    }

    @com.squareup.moshi.i(generateAdapter = true)
    @Metadata(d1 = {"\u0000 \n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\u0010\u000e\n\u0002\b\u0005\n\u0002\u0010\b\n\u0002\b\u0003\n\u0002\u0010\u000b\n\u0002\b\u0005\b\u0087\b\u0018\u00002\u00020\u0001B\u000f\u0012\u0006\u0010\u0003\u001a\u00020\u0002¢\u0006\u0004\b\u0004\u0010\u0005J\u0010\u0010\u0006\u001a\u00020\u0002HÖ\u0001¢\u0006\u0004\b\u0006\u0010\u0007J\u0010\u0010\t\u001a\u00020\bHÖ\u0001¢\u0006\u0004\b\t\u0010\nJ\u001a\u0010\r\u001a\u00020\f2\b\u0010\u000b\u001a\u0004\u0018\u00010\u0001HÖ\u0003¢\u0006\u0004\b\r\u0010\u000eR\u0017\u0010\u0003\u001a\u00020\u00028\u0006¢\u0006\f\n\u0004\b\u000f\u0010\u0010\u001a\u0004\b\u000f\u0010\u0007¨\u0006\u0011"}, d2 = {"Lcom/withpersona/sdk2/inquiry/internal/fallbackmode/FallbackModeService$UploadUrlResponse;", "", "", "location", "<init>", "(Ljava/lang/String;)V", "toString", "()Ljava/lang/String;", "", "hashCode", "()I", "other", "", "equals", "(Ljava/lang/Object;)Z", "a", "Ljava/lang/String;", "inquiry-internal_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class UploadUrlResponse {

        /* renamed from: a  reason: collision with root package name */
        private final String f18953a;

        public UploadUrlResponse(String location) {
            Intrinsics.checkNotNullParameter(location, "location");
            this.f18953a = location;
        }

        public final String a() {
            return this.f18953a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            return (obj instanceof UploadUrlResponse) && Intrinsics.areEqual(this.f18953a, ((UploadUrlResponse) obj).f18953a);
        }

        public int hashCode() {
            return this.f18953a.hashCode();
        }

        public String toString() {
            String str = this.f18953a;
            return "UploadUrlResponse(location=" + str + ")";
        }
    }

    @k({"Content-Type: application/json"})
    @o("/template")
    Object a(@yv.i("Authorization") String str, @NotNull @yv.a StatusRequest statusRequest, @NotNull Continuation<? super z<StatusResponse>> continuation);

    @o
    Object b(@NotNull @y String str, @NotNull @yv.a RequestBody requestBody, @NotNull Continuation<? super z<Object>> continuation);

    @k({"Content-Type: application/json"})
    @o("/session")
    Object c(@NotNull @yv.a SessionIdRequest sessionIdRequest, @NotNull Continuation<? super z<SessionIdResponse>> continuation);

    @k({"Content-Type: application/json"})
    @o("/part")
    Object d(@NotNull @yv.i("Authorization") String str, @NotNull @yv.i("Persona-Fallback-Production-Endpoint") zo.h hVar, @yv.i("Persona-Fallback-Request-Count") int i10, @NotNull @yv.a UploadUrlRequest uploadUrlRequest, @NotNull Continuation<? super z<UploadUrlResponse>> continuation);
}
