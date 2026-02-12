package com.withpersona.sdk2.inquiry.internal.network;

import com.withpersona.sdk2.inquiry.network.core.InternalErrorInfo;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class d {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends d {

        /* renamed from: a  reason: collision with root package name */
        private final InternalErrorInfo f20273a;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public a(InternalErrorInfo cause) {
            super(null);
            Intrinsics.checkNotNullParameter(cause, "cause");
            this.f20273a = cause;
        }

        public final InternalErrorInfo a() {
            return this.f20273a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            return (obj instanceof a) && Intrinsics.areEqual(this.f20273a, ((a) obj).f20273a);
        }

        public int hashCode() {
            return this.f20273a.hashCode();
        }

        public String toString() {
            InternalErrorInfo internalErrorInfo = this.f20273a;
            return "Error(cause=" + internalErrorInfo + ")";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends d {

        /* renamed from: a  reason: collision with root package name */
        private final String f20274a;

        /* renamed from: b  reason: collision with root package name */
        private final String f20275b;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public b(String inquiryId, String str) {
            super(null);
            Intrinsics.checkNotNullParameter(inquiryId, "inquiryId");
            this.f20274a = inquiryId;
            this.f20275b = str;
        }

        public final String a() {
            return this.f20274a;
        }

        public final String b() {
            return this.f20275b;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof b) {
                b bVar = (b) obj;
                return Intrinsics.areEqual(this.f20274a, bVar.f20274a) && Intrinsics.areEqual(this.f20275b, bVar.f20275b);
            }
            return false;
        }

        public int hashCode() {
            int hashCode = this.f20274a.hashCode() * 31;
            String str = this.f20275b;
            return hashCode + (str == null ? 0 : str.hashCode());
        }

        public String toString() {
            String str = this.f20274a;
            String str2 = this.f20275b;
            return "Success(inquiryId=" + str + ", sessionToken=" + str2 + ")";
        }
    }

    public /* synthetic */ d(DefaultConstructorMarker defaultConstructorMarker) {
        this();
    }

    private d() {
    }
}
