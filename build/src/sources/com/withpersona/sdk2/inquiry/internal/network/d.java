package com.withpersona.sdk2.inquiry.internal.network;

import com.withpersona.sdk2.inquiry.network.core.InternalErrorInfo;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class d {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends d {

        /* renamed from: a  reason: collision with root package name */
        private final InternalErrorInfo f18866a;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public a(InternalErrorInfo cause) {
            super(null);
            Intrinsics.checkNotNullParameter(cause, "cause");
            this.f18866a = cause;
        }

        public final InternalErrorInfo a() {
            return this.f18866a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            return (obj instanceof a) && Intrinsics.areEqual(this.f18866a, ((a) obj).f18866a);
        }

        public int hashCode() {
            return this.f18866a.hashCode();
        }

        public String toString() {
            InternalErrorInfo internalErrorInfo = this.f18866a;
            return "Error(cause=" + internalErrorInfo + ")";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends d {

        /* renamed from: a  reason: collision with root package name */
        private final String f18867a;

        /* renamed from: b  reason: collision with root package name */
        private final String f18868b;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public b(String inquiryId, String str) {
            super(null);
            Intrinsics.checkNotNullParameter(inquiryId, "inquiryId");
            this.f18867a = inquiryId;
            this.f18868b = str;
        }

        public final String a() {
            return this.f18867a;
        }

        public final String b() {
            return this.f18868b;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof b) {
                b bVar = (b) obj;
                return Intrinsics.areEqual(this.f18867a, bVar.f18867a) && Intrinsics.areEqual(this.f18868b, bVar.f18868b);
            }
            return false;
        }

        public int hashCode() {
            int hashCode = this.f18867a.hashCode() * 31;
            String str = this.f18868b;
            return hashCode + (str == null ? 0 : str.hashCode());
        }

        public String toString() {
            String str = this.f18867a;
            String str2 = this.f18868b;
            return "Success(inquiryId=" + str + ", sessionToken=" + str2 + ")";
        }
    }

    public /* synthetic */ d(DefaultConstructorMarker defaultConstructorMarker) {
        this();
    }

    private d() {
    }
}
