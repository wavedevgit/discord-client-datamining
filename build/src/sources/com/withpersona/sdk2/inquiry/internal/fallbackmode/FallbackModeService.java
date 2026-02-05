package com.withpersona.sdk2.inquiry.internal.fallbackmode;

import com.withpersona.sdk2.inquiry.internal.InquiryFieldMap;
import java.util.List;
import kotlin.Metadata;
import kotlin.coroutines.Continuation;
import kotlin.jvm.internal.Intrinsics;
import okhttp3.RequestBody;
import org.jetbrains.annotations.NotNull;
import ov.z;
import qv.k;
import qv.o;
import qv.y;
@Metadata(d1 = {"\u0000L\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u000b\bf\u0018\u00002\u00020\u0001:\u0007\u001c\u001d\u001e\u001f !\"J,\u0010\b\u001a\b\u0012\u0004\u0012\u00020\u00070\u00062\n\b\u0001\u0010\u0003\u001a\u0004\u0018\u00010\u00022\b\b\u0001\u0010\u0005\u001a\u00020\u0004H§@¢\u0006\u0004\b\b\u0010\tJ \u0010\f\u001a\b\u0012\u0004\u0012\u00020\u000b0\u00062\b\b\u0001\u0010\u0005\u001a\u00020\nH§@¢\u0006\u0004\b\f\u0010\rJ>\u0010\u0015\u001a\b\u0012\u0004\u0012\u00020\u00140\u00062\b\b\u0001\u0010\u000e\u001a\u00020\u00022\b\b\u0001\u0010\u0010\u001a\u00020\u000f2\b\b\u0001\u0010\u0012\u001a\u00020\u00112\b\b\u0001\u0010\u0005\u001a\u00020\u0013H§@¢\u0006\u0004\b\u0015\u0010\u0016J*\u0010\u001a\u001a\b\u0012\u0004\u0012\u00020\u00010\u00062\b\b\u0001\u0010\u0017\u001a\u00020\u00022\b\b\u0001\u0010\u0019\u001a\u00020\u0018H§@¢\u0006\u0004\b\u001a\u0010\u001b¨\u0006#"}, d2 = {"Lcom/withpersona/sdk2/inquiry/internal/fallbackmode/FallbackModeService;", "", "", "sessionToken", "Lcom/withpersona/sdk2/inquiry/internal/fallbackmode/FallbackModeService$StatusRequest;", "request", "Lov/z;", "Lcom/withpersona/sdk2/inquiry/internal/fallbackmode/FallbackModeService$StatusResponse;", "a", "(Ljava/lang/String;Lcom/withpersona/sdk2/inquiry/internal/fallbackmode/FallbackModeService$StatusRequest;Lkotlin/coroutines/Continuation;)Ljava/lang/Object;", "Lcom/withpersona/sdk2/inquiry/internal/fallbackmode/FallbackModeService$SessionIdRequest;", "Lcom/withpersona/sdk2/inquiry/internal/fallbackmode/FallbackModeService$SessionIdResponse;", "c", "(Lcom/withpersona/sdk2/inquiry/internal/fallbackmode/FallbackModeService$SessionIdRequest;Lkotlin/coroutines/Continuation;)Ljava/lang/Object;", "authHeader", "Lwo/h;", "productionEndpoint", "", "requestCount", "Lcom/withpersona/sdk2/inquiry/internal/fallbackmode/FallbackModeService$UploadUrlRequest;", "Lcom/withpersona/sdk2/inquiry/internal/fallbackmode/FallbackModeService$UploadUrlResponse;", "d", "(Ljava/lang/String;Lwo/h;ILcom/withpersona/sdk2/inquiry/internal/fallbackmode/FallbackModeService$UploadUrlRequest;Lkotlin/coroutines/Continuation;)Ljava/lang/Object;", "url", "Lokhttp3/RequestBody;", "body", "b", "(Ljava/lang/String;Lokhttp3/RequestBody;Lkotlin/coroutines/Continuation;)Ljava/lang/Object;", "UploadUrlResponse", "UploadUrlRequest", "StatusRequest", "StatusResponse", "StaticTemplate", "SessionIdRequest", "SessionIdResponse", "inquiry-internal_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public interface FallbackModeService {

    @com.squareup.moshi.i(generateAdapter = true)
    @Metadata(d1 = {"\u0000(\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\u0010\u000e\n\u0002\b\u0007\n\u0002\u0018\u0002\n\u0002\b\b\n\u0002\u0010\b\n\u0002\b\u0003\n\u0002\u0010\u000b\n\u0002\b\u000f\b\u0087\b\u0018\u00002\u00020\u0001Bm\u0012\b\b\u0001\u0010\u0003\u001a\u00020\u0002\u0012\n\b\u0001\u0010\u0004\u001a\u0004\u0018\u00010\u0002\u0012\n\b\u0001\u0010\u0005\u001a\u0004\u0018\u00010\u0002\u0012\n\b\u0001\u0010\u0006\u001a\u0004\u0018\u00010\u0002\u0012\n\b\u0001\u0010\u0007\u001a\u0004\u0018\u00010\u0002\u0012\b\u0010\b\u001a\u0004\u0018\u00010\u0002\u0012\n\b\u0001\u0010\t\u001a\u0004\u0018\u00010\u0002\u0012\b\u0010\u000b\u001a\u0004\u0018\u00010\n\u0012\n\b\u0001\u0010\f\u001a\u0004\u0018\u00010\u0002¢\u0006\u0004\b\r\u0010\u000eJz\u0010\u000f\u001a\u00020\u00002\b\b\u0003\u0010\u0003\u001a\u00020\u00022\n\b\u0003\u0010\u0004\u001a\u0004\u0018\u00010\u00022\n\b\u0003\u0010\u0005\u001a\u0004\u0018\u00010\u00022\n\b\u0003\u0010\u0006\u001a\u0004\u0018\u00010\u00022\n\b\u0003\u0010\u0007\u001a\u0004\u0018\u00010\u00022\n\b\u0002\u0010\b\u001a\u0004\u0018\u00010\u00022\n\b\u0003\u0010\t\u001a\u0004\u0018\u00010\u00022\n\b\u0002\u0010\u000b\u001a\u0004\u0018\u00010\n2\n\b\u0003\u0010\f\u001a\u0004\u0018\u00010\u0002HÆ\u0001¢\u0006\u0004\b\u000f\u0010\u0010J\u0010\u0010\u0011\u001a\u00020\u0002HÖ\u0001¢\u0006\u0004\b\u0011\u0010\u0012J\u0010\u0010\u0014\u001a\u00020\u0013HÖ\u0001¢\u0006\u0004\b\u0014\u0010\u0015J\u001a\u0010\u0018\u001a\u00020\u00172\b\u0010\u0016\u001a\u0004\u0018\u00010\u0001HÖ\u0003¢\u0006\u0004\b\u0018\u0010\u0019R\u0017\u0010\u0003\u001a\u00020\u00028\u0006¢\u0006\f\n\u0004\b\u001a\u0010\u001b\u001a\u0004\b\u001c\u0010\u0012R\u0019\u0010\u0004\u001a\u0004\u0018\u00010\u00028\u0006¢\u0006\f\n\u0004\b\u001d\u0010\u001b\u001a\u0004\b\u001e\u0010\u0012R\u0019\u0010\u0005\u001a\u0004\u0018\u00010\u00028\u0006¢\u0006\f\n\u0004\b\u001f\u0010\u001b\u001a\u0004\b \u0010\u0012R\u0019\u0010\u0006\u001a\u0004\u0018\u00010\u00028\u0006¢\u0006\f\n\u0004\b!\u0010\u001b\u001a\u0004\b\"\u0010\u0012R\u0019\u0010\u0007\u001a\u0004\u0018\u00010\u00028\u0006¢\u0006\f\n\u0004\b \u0010\u001b\u001a\u0004\b\u001a\u0010\u0012R\u0019\u0010\b\u001a\u0004\u0018\u00010\u00028\u0006¢\u0006\f\n\u0004\b\u001c\u0010\u001b\u001a\u0004\b\u001d\u0010\u0012R\u0019\u0010\t\u001a\u0004\u0018\u00010\u00028\u0006¢\u0006\f\n\u0004\b\u001e\u0010\u001b\u001a\u0004\b\u001f\u0010\u0012R\u0019\u0010\u000b\u001a\u0004\u0018\u00010\n8\u0006¢\u0006\f\n\u0004\b\"\u0010#\u001a\u0004\b!\u0010$R\u0019\u0010\f\u001a\u0004\u0018\u00010\u00028\u0006¢\u0006\f\n\u0004\b%\u0010\u001b\u001a\u0004\b%\u0010\u0012¨\u0006&"}, d2 = {"Lcom/withpersona/sdk2/inquiry/internal/fallbackmode/FallbackModeService$SessionIdRequest;", "", "", "inquiryTemplateId", "inquiryTemplateVersion", "inquiryId", "referenceId", "accountId", "environment", "environmentId", "Lcom/withpersona/sdk2/inquiry/internal/InquiryFieldMap;", "fields", "themeSetId", "<init>", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Lcom/withpersona/sdk2/inquiry/internal/InquiryFieldMap;Ljava/lang/String;)V", "copy", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Lcom/withpersona/sdk2/inquiry/internal/InquiryFieldMap;Ljava/lang/String;)Lcom/withpersona/sdk2/inquiry/internal/fallbackmode/FallbackModeService$SessionIdRequest;", "toString", "()Ljava/lang/String;", "", "hashCode", "()I", "other", "", "equals", "(Ljava/lang/Object;)Z", "a", "Ljava/lang/String;", "f", "b", "g", "c", "e", "d", "h", "Lcom/withpersona/sdk2/inquiry/internal/InquiryFieldMap;", "()Lcom/withpersona/sdk2/inquiry/internal/InquiryFieldMap;", "i", "inquiry-internal_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class SessionIdRequest {

        /* renamed from: a  reason: collision with root package name */
        private final String f18818a;

        /* renamed from: b  reason: collision with root package name */
        private final String f18819b;

        /* renamed from: c  reason: collision with root package name */
        private final String f18820c;

        /* renamed from: d  reason: collision with root package name */
        private final String f18821d;

        /* renamed from: e  reason: collision with root package name */
        private final String f18822e;

        /* renamed from: f  reason: collision with root package name */
        private final String f18823f;

        /* renamed from: g  reason: collision with root package name */
        private final String f18824g;

        /* renamed from: h  reason: collision with root package name */
        private final InquiryFieldMap f18825h;

        /* renamed from: i  reason: collision with root package name */
        private final String f18826i;

        public SessionIdRequest(@com.squareup.moshi.g(name = "inquiry-template-id") @NotNull String inquiryTemplateId, @com.squareup.moshi.g(name = "inquiry-template-version-id") String str, @com.squareup.moshi.g(name = "inquiry-id") String str2, @com.squareup.moshi.g(name = "reference-id") String str3, @com.squareup.moshi.g(name = "account-id") String str4, String str5, @com.squareup.moshi.g(name = "environment-id") String str6, InquiryFieldMap inquiryFieldMap, @com.squareup.moshi.g(name = "theme-set-id") String str7) {
            Intrinsics.checkNotNullParameter(inquiryTemplateId, "inquiryTemplateId");
            this.f18818a = inquiryTemplateId;
            this.f18819b = str;
            this.f18820c = str2;
            this.f18821d = str3;
            this.f18822e = str4;
            this.f18823f = str5;
            this.f18824g = str6;
            this.f18825h = inquiryFieldMap;
            this.f18826i = str7;
        }

        public final String a() {
            return this.f18822e;
        }

        public final String b() {
            return this.f18823f;
        }

        public final String c() {
            return this.f18824g;
        }

        @NotNull
        public final SessionIdRequest copy(@com.squareup.moshi.g(name = "inquiry-template-id") @NotNull String inquiryTemplateId, @com.squareup.moshi.g(name = "inquiry-template-version-id") String str, @com.squareup.moshi.g(name = "inquiry-id") String str2, @com.squareup.moshi.g(name = "reference-id") String str3, @com.squareup.moshi.g(name = "account-id") String str4, String str5, @com.squareup.moshi.g(name = "environment-id") String str6, InquiryFieldMap inquiryFieldMap, @com.squareup.moshi.g(name = "theme-set-id") String str7) {
            Intrinsics.checkNotNullParameter(inquiryTemplateId, "inquiryTemplateId");
            return new SessionIdRequest(inquiryTemplateId, str, str2, str3, str4, str5, str6, inquiryFieldMap, str7);
        }

        public final InquiryFieldMap d() {
            return this.f18825h;
        }

        public final String e() {
            return this.f18820c;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof SessionIdRequest) {
                SessionIdRequest sessionIdRequest = (SessionIdRequest) obj;
                return Intrinsics.areEqual(this.f18818a, sessionIdRequest.f18818a) && Intrinsics.areEqual(this.f18819b, sessionIdRequest.f18819b) && Intrinsics.areEqual(this.f18820c, sessionIdRequest.f18820c) && Intrinsics.areEqual(this.f18821d, sessionIdRequest.f18821d) && Intrinsics.areEqual(this.f18822e, sessionIdRequest.f18822e) && Intrinsics.areEqual(this.f18823f, sessionIdRequest.f18823f) && Intrinsics.areEqual(this.f18824g, sessionIdRequest.f18824g) && Intrinsics.areEqual(this.f18825h, sessionIdRequest.f18825h) && Intrinsics.areEqual(this.f18826i, sessionIdRequest.f18826i);
            }
            return false;
        }

        public final String f() {
            return this.f18818a;
        }

        public final String g() {
            return this.f18819b;
        }

        public final String h() {
            return this.f18821d;
        }

        public int hashCode() {
            int hashCode = this.f18818a.hashCode() * 31;
            String str = this.f18819b;
            int hashCode2 = (hashCode + (str == null ? 0 : str.hashCode())) * 31;
            String str2 = this.f18820c;
            int hashCode3 = (hashCode2 + (str2 == null ? 0 : str2.hashCode())) * 31;
            String str3 = this.f18821d;
            int hashCode4 = (hashCode3 + (str3 == null ? 0 : str3.hashCode())) * 31;
            String str4 = this.f18822e;
            int hashCode5 = (hashCode4 + (str4 == null ? 0 : str4.hashCode())) * 31;
            String str5 = this.f18823f;
            int hashCode6 = (hashCode5 + (str5 == null ? 0 : str5.hashCode())) * 31;
            String str6 = this.f18824g;
            int hashCode7 = (hashCode6 + (str6 == null ? 0 : str6.hashCode())) * 31;
            InquiryFieldMap inquiryFieldMap = this.f18825h;
            int hashCode8 = (hashCode7 + (inquiryFieldMap == null ? 0 : inquiryFieldMap.hashCode())) * 31;
            String str7 = this.f18826i;
            return hashCode8 + (str7 != null ? str7.hashCode() : 0);
        }

        public final String i() {
            return this.f18826i;
        }

        public String toString() {
            String str = this.f18818a;
            String str2 = this.f18819b;
            String str3 = this.f18820c;
            String str4 = this.f18821d;
            String str5 = this.f18822e;
            String str6 = this.f18823f;
            String str7 = this.f18824g;
            InquiryFieldMap inquiryFieldMap = this.f18825h;
            String str8 = this.f18826i;
            return "SessionIdRequest(inquiryTemplateId=" + str + ", inquiryTemplateVersion=" + str2 + ", inquiryId=" + str3 + ", referenceId=" + str4 + ", accountId=" + str5 + ", environment=" + str6 + ", environmentId=" + str7 + ", fields=" + inquiryFieldMap + ", themeSetId=" + str8 + ")";
        }
    }

    @com.squareup.moshi.i(generateAdapter = true)
    @Metadata(d1 = {"\u0000 \n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\u0010\u000e\n\u0002\b\u0005\n\u0002\u0010\b\n\u0002\b\u0003\n\u0002\u0010\u000b\n\u0002\b\u0005\b\u0087\b\u0018\u00002\u00020\u0001B\u000f\u0012\u0006\u0010\u0003\u001a\u00020\u0002¢\u0006\u0004\b\u0004\u0010\u0005J\u0010\u0010\u0006\u001a\u00020\u0002HÖ\u0001¢\u0006\u0004\b\u0006\u0010\u0007J\u0010\u0010\t\u001a\u00020\bHÖ\u0001¢\u0006\u0004\b\t\u0010\nJ\u001a\u0010\r\u001a\u00020\f2\b\u0010\u000b\u001a\u0004\u0018\u00010\u0001HÖ\u0003¢\u0006\u0004\b\r\u0010\u000eR\u0017\u0010\u0003\u001a\u00020\u00028\u0006¢\u0006\f\n\u0004\b\u000f\u0010\u0010\u001a\u0004\b\u000f\u0010\u0007¨\u0006\u0011"}, d2 = {"Lcom/withpersona/sdk2/inquiry/internal/fallbackmode/FallbackModeService$SessionIdResponse;", "", "", "token", "<init>", "(Ljava/lang/String;)V", "toString", "()Ljava/lang/String;", "", "hashCode", "()I", "other", "", "equals", "(Ljava/lang/Object;)Z", "a", "Ljava/lang/String;", "inquiry-internal_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class SessionIdResponse {

        /* renamed from: a  reason: collision with root package name */
        private final String f18827a;

        public SessionIdResponse(String token) {
            Intrinsics.checkNotNullParameter(token, "token");
            this.f18827a = token;
        }

        public final String a() {
            return this.f18827a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            return (obj instanceof SessionIdResponse) && Intrinsics.areEqual(this.f18827a, ((SessionIdResponse) obj).f18827a);
        }

        public int hashCode() {
            return this.f18827a.hashCode();
        }

        public String toString() {
            String str = this.f18827a;
            return "SessionIdResponse(token=" + str + ")";
        }
    }

    @com.squareup.moshi.i(generateAdapter = true)
    @Metadata(d1 = {"\u0000,\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0010\b\n\u0002\b\u0003\n\u0002\u0010\u000b\n\u0002\b\u0006\b\u0087\b\u0018\u00002\u00020\u0001B\u0015\u0012\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00030\u0002¢\u0006\u0004\b\u0005\u0010\u0006J\u0010\u0010\b\u001a\u00020\u0007HÖ\u0001¢\u0006\u0004\b\b\u0010\tJ\u0010\u0010\u000b\u001a\u00020\nHÖ\u0001¢\u0006\u0004\b\u000b\u0010\fJ\u001a\u0010\u000f\u001a\u00020\u000e2\b\u0010\r\u001a\u0004\u0018\u00010\u0001HÖ\u0003¢\u0006\u0004\b\u000f\u0010\u0010R\u001d\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00030\u00028\u0006¢\u0006\f\n\u0004\b\u0011\u0010\u0012\u001a\u0004\b\u0011\u0010\u0013¨\u0006\u0014"}, d2 = {"Lcom/withpersona/sdk2/inquiry/internal/fallbackmode/FallbackModeService$StaticTemplate;", "", "", "Lcom/withpersona/sdk2/inquiry/network/dto/NextStep;", "steps", "<init>", "(Ljava/util/List;)V", "", "toString", "()Ljava/lang/String;", "", "hashCode", "()I", "other", "", "equals", "(Ljava/lang/Object;)Z", "a", "Ljava/util/List;", "()Ljava/util/List;", "inquiry-internal_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class StaticTemplate {

        /* renamed from: a  reason: collision with root package name */
        private final List f18828a;

        public StaticTemplate(List steps) {
            Intrinsics.checkNotNullParameter(steps, "steps");
            this.f18828a = steps;
        }

        public final List a() {
            return this.f18828a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            return (obj instanceof StaticTemplate) && Intrinsics.areEqual(this.f18828a, ((StaticTemplate) obj).f18828a);
        }

        public int hashCode() {
            return this.f18828a.hashCode();
        }

        public String toString() {
            List list = this.f18828a;
            return "StaticTemplate(steps=" + list + ")";
        }
    }

    @com.squareup.moshi.i(generateAdapter = true)
    @Metadata(d1 = {"\u0000 \n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\u0010\u000e\n\u0002\b\u0007\n\u0002\u0010\b\n\u0002\b\u0003\n\u0002\u0010\u000b\n\u0002\b\u0005\b\u0087\b\u0018\u00002\u00020\u0001B\u0013\u0012\n\b\u0001\u0010\u0003\u001a\u0004\u0018\u00010\u0002¢\u0006\u0004\b\u0004\u0010\u0005J\u001c\u0010\u0006\u001a\u00020\u00002\n\b\u0003\u0010\u0003\u001a\u0004\u0018\u00010\u0002HÆ\u0001¢\u0006\u0004\b\u0006\u0010\u0007J\u0010\u0010\b\u001a\u00020\u0002HÖ\u0001¢\u0006\u0004\b\b\u0010\tJ\u0010\u0010\u000b\u001a\u00020\nHÖ\u0001¢\u0006\u0004\b\u000b\u0010\fJ\u001a\u0010\u000f\u001a\u00020\u000e2\b\u0010\r\u001a\u0004\u0018\u00010\u0001HÖ\u0003¢\u0006\u0004\b\u000f\u0010\u0010R\u0019\u0010\u0003\u001a\u0004\u0018\u00010\u00028\u0006¢\u0006\f\n\u0004\b\u0011\u0010\u0012\u001a\u0004\b\u0011\u0010\t¨\u0006\u0013"}, d2 = {"Lcom/withpersona/sdk2/inquiry/internal/fallbackmode/FallbackModeService$StatusRequest;", "", "", "inquiryTemplateId", "<init>", "(Ljava/lang/String;)V", "copy", "(Ljava/lang/String;)Lcom/withpersona/sdk2/inquiry/internal/fallbackmode/FallbackModeService$StatusRequest;", "toString", "()Ljava/lang/String;", "", "hashCode", "()I", "other", "", "equals", "(Ljava/lang/Object;)Z", "a", "Ljava/lang/String;", "inquiry-internal_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class StatusRequest {

        /* renamed from: a  reason: collision with root package name */
        private final String f18829a;

        public StatusRequest(@com.squareup.moshi.g(name = "inquiry-template-id") String str) {
            this.f18829a = str;
        }

        public final String a() {
            return this.f18829a;
        }

        @NotNull
        public final StatusRequest copy(@com.squareup.moshi.g(name = "inquiry-template-id") String str) {
            return new StatusRequest(str);
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            return (obj instanceof StatusRequest) && Intrinsics.areEqual(this.f18829a, ((StatusRequest) obj).f18829a);
        }

        public int hashCode() {
            String str = this.f18829a;
            if (str == null) {
                return 0;
            }
            return str.hashCode();
        }

        public String toString() {
            String str = this.f18829a;
            return "StatusRequest(inquiryTemplateId=" + str + ")";
        }
    }

    @com.squareup.moshi.i(generateAdapter = true)
    @Metadata(d1 = {"\u0000(\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0010\b\n\u0002\b\u0003\n\u0002\u0010\u000b\n\u0002\b\u0006\b\u0087\b\u0018\u00002\u00020\u0001B\u0013\u0012\n\b\u0001\u0010\u0003\u001a\u0004\u0018\u00010\u0002¢\u0006\u0004\b\u0004\u0010\u0005J\u001c\u0010\u0006\u001a\u00020\u00002\n\b\u0003\u0010\u0003\u001a\u0004\u0018\u00010\u0002HÆ\u0001¢\u0006\u0004\b\u0006\u0010\u0007J\u0010\u0010\t\u001a\u00020\bHÖ\u0001¢\u0006\u0004\b\t\u0010\nJ\u0010\u0010\f\u001a\u00020\u000bHÖ\u0001¢\u0006\u0004\b\f\u0010\rJ\u001a\u0010\u0010\u001a\u00020\u000f2\b\u0010\u000e\u001a\u0004\u0018\u00010\u0001HÖ\u0003¢\u0006\u0004\b\u0010\u0010\u0011R\u0019\u0010\u0003\u001a\u0004\u0018\u00010\u00028\u0006¢\u0006\f\n\u0004\b\u0012\u0010\u0013\u001a\u0004\b\u0012\u0010\u0014¨\u0006\u0015"}, d2 = {"Lcom/withpersona/sdk2/inquiry/internal/fallbackmode/FallbackModeService$StatusResponse;", "", "Lcom/withpersona/sdk2/inquiry/internal/fallbackmode/FallbackModeService$StaticTemplate;", "staticInquiryTemplate", "<init>", "(Lcom/withpersona/sdk2/inquiry/internal/fallbackmode/FallbackModeService$StaticTemplate;)V", "copy", "(Lcom/withpersona/sdk2/inquiry/internal/fallbackmode/FallbackModeService$StaticTemplate;)Lcom/withpersona/sdk2/inquiry/internal/fallbackmode/FallbackModeService$StatusResponse;", "", "toString", "()Ljava/lang/String;", "", "hashCode", "()I", "other", "", "equals", "(Ljava/lang/Object;)Z", "a", "Lcom/withpersona/sdk2/inquiry/internal/fallbackmode/FallbackModeService$StaticTemplate;", "()Lcom/withpersona/sdk2/inquiry/internal/fallbackmode/FallbackModeService$StaticTemplate;", "inquiry-internal_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class StatusResponse {

        /* renamed from: a  reason: collision with root package name */
        private final StaticTemplate f18830a;

        public StatusResponse(@com.squareup.moshi.g(name = "static-inquiry-template") StaticTemplate staticTemplate) {
            this.f18830a = staticTemplate;
        }

        public final StaticTemplate a() {
            return this.f18830a;
        }

        @NotNull
        public final StatusResponse copy(@com.squareup.moshi.g(name = "static-inquiry-template") StaticTemplate staticTemplate) {
            return new StatusResponse(staticTemplate);
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            return (obj instanceof StatusResponse) && Intrinsics.areEqual(this.f18830a, ((StatusResponse) obj).f18830a);
        }

        public int hashCode() {
            StaticTemplate staticTemplate = this.f18830a;
            if (staticTemplate == null) {
                return 0;
            }
            return staticTemplate.hashCode();
        }

        public String toString() {
            StaticTemplate staticTemplate = this.f18830a;
            return "StatusResponse(staticInquiryTemplate=" + staticTemplate + ")";
        }
    }

    @com.squareup.moshi.i(generateAdapter = true)
    @Metadata(d1 = {"\u0000&\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\u0010\t\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0007\n\u0002\u0010\b\n\u0002\b\u0003\n\u0002\u0010\u000b\n\u0002\b\b\b\u0087\b\u0018\u00002\u00020\u0001B\u001b\u0012\b\b\u0001\u0010\u0003\u001a\u00020\u0002\u0012\b\b\u0001\u0010\u0005\u001a\u00020\u0004¢\u0006\u0004\b\u0006\u0010\u0007J$\u0010\b\u001a\u00020\u00002\b\b\u0003\u0010\u0003\u001a\u00020\u00022\b\b\u0003\u0010\u0005\u001a\u00020\u0004HÆ\u0001¢\u0006\u0004\b\b\u0010\tJ\u0010\u0010\n\u001a\u00020\u0004HÖ\u0001¢\u0006\u0004\b\n\u0010\u000bJ\u0010\u0010\r\u001a\u00020\fHÖ\u0001¢\u0006\u0004\b\r\u0010\u000eJ\u001a\u0010\u0011\u001a\u00020\u00102\b\u0010\u000f\u001a\u0004\u0018\u00010\u0001HÖ\u0003¢\u0006\u0004\b\u0011\u0010\u0012R\u0017\u0010\u0003\u001a\u00020\u00028\u0006¢\u0006\f\n\u0004\b\u0013\u0010\u0014\u001a\u0004\b\u0013\u0010\u0015R\u0017\u0010\u0005\u001a\u00020\u00048\u0006¢\u0006\f\n\u0004\b\u0016\u0010\u0017\u001a\u0004\b\u0016\u0010\u000b¨\u0006\u0018"}, d2 = {"Lcom/withpersona/sdk2/inquiry/internal/fallbackmode/FallbackModeService$UploadUrlRequest;", "", "", "expectedContentLength", "", "expectedContentType", "<init>", "(JLjava/lang/String;)V", "copy", "(JLjava/lang/String;)Lcom/withpersona/sdk2/inquiry/internal/fallbackmode/FallbackModeService$UploadUrlRequest;", "toString", "()Ljava/lang/String;", "", "hashCode", "()I", "other", "", "equals", "(Ljava/lang/Object;)Z", "a", "J", "()J", "b", "Ljava/lang/String;", "inquiry-internal_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class UploadUrlRequest {

        /* renamed from: a  reason: collision with root package name */
        private final long f18831a;

        /* renamed from: b  reason: collision with root package name */
        private final String f18832b;

        public UploadUrlRequest(@com.squareup.moshi.g(name = "expected-content-length") long j10, @com.squareup.moshi.g(name = "expected-content-type") @NotNull String expectedContentType) {
            Intrinsics.checkNotNullParameter(expectedContentType, "expectedContentType");
            this.f18831a = j10;
            this.f18832b = expectedContentType;
        }

        public final long a() {
            return this.f18831a;
        }

        public final String b() {
            return this.f18832b;
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
                return this.f18831a == uploadUrlRequest.f18831a && Intrinsics.areEqual(this.f18832b, uploadUrlRequest.f18832b);
            }
            return false;
        }

        public int hashCode() {
            return (Long.hashCode(this.f18831a) * 31) + this.f18832b.hashCode();
        }

        public String toString() {
            long j10 = this.f18831a;
            String str = this.f18832b;
            return "UploadUrlRequest(expectedContentLength=" + j10 + ", expectedContentType=" + str + ")";
        }
    }

    @com.squareup.moshi.i(generateAdapter = true)
    @Metadata(d1 = {"\u0000 \n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\u0010\u000e\n\u0002\b\u0005\n\u0002\u0010\b\n\u0002\b\u0003\n\u0002\u0010\u000b\n\u0002\b\u0005\b\u0087\b\u0018\u00002\u00020\u0001B\u000f\u0012\u0006\u0010\u0003\u001a\u00020\u0002¢\u0006\u0004\b\u0004\u0010\u0005J\u0010\u0010\u0006\u001a\u00020\u0002HÖ\u0001¢\u0006\u0004\b\u0006\u0010\u0007J\u0010\u0010\t\u001a\u00020\bHÖ\u0001¢\u0006\u0004\b\t\u0010\nJ\u001a\u0010\r\u001a\u00020\f2\b\u0010\u000b\u001a\u0004\u0018\u00010\u0001HÖ\u0003¢\u0006\u0004\b\r\u0010\u000eR\u0017\u0010\u0003\u001a\u00020\u00028\u0006¢\u0006\f\n\u0004\b\u000f\u0010\u0010\u001a\u0004\b\u000f\u0010\u0007¨\u0006\u0011"}, d2 = {"Lcom/withpersona/sdk2/inquiry/internal/fallbackmode/FallbackModeService$UploadUrlResponse;", "", "", "location", "<init>", "(Ljava/lang/String;)V", "toString", "()Ljava/lang/String;", "", "hashCode", "()I", "other", "", "equals", "(Ljava/lang/Object;)Z", "a", "Ljava/lang/String;", "inquiry-internal_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class UploadUrlResponse {

        /* renamed from: a  reason: collision with root package name */
        private final String f18833a;

        public UploadUrlResponse(String location) {
            Intrinsics.checkNotNullParameter(location, "location");
            this.f18833a = location;
        }

        public final String a() {
            return this.f18833a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            return (obj instanceof UploadUrlResponse) && Intrinsics.areEqual(this.f18833a, ((UploadUrlResponse) obj).f18833a);
        }

        public int hashCode() {
            return this.f18833a.hashCode();
        }

        public String toString() {
            String str = this.f18833a;
            return "UploadUrlResponse(location=" + str + ")";
        }
    }

    @k({"Content-Type: application/json"})
    @o("/template")
    Object a(@qv.i("Authorization") String str, @NotNull @qv.a StatusRequest statusRequest, @NotNull Continuation<? super z<StatusResponse>> continuation);

    @o
    Object b(@NotNull @y String str, @NotNull @qv.a RequestBody requestBody, @NotNull Continuation<? super z<Object>> continuation);

    @k({"Content-Type: application/json"})
    @o("/session")
    Object c(@NotNull @qv.a SessionIdRequest sessionIdRequest, @NotNull Continuation<? super z<SessionIdResponse>> continuation);

    @k({"Content-Type: application/json"})
    @o("/part")
    Object d(@NotNull @qv.i("Authorization") String str, @NotNull @qv.i("Persona-Fallback-Production-Endpoint") wo.h hVar, @qv.i("Persona-Fallback-Request-Count") int i10, @NotNull @qv.a UploadUrlRequest uploadUrlRequest, @NotNull Continuation<? super z<UploadUrlResponse>> continuation);
}
