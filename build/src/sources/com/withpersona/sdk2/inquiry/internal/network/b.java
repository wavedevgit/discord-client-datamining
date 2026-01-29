package com.withpersona.sdk2.inquiry.internal.network;

import com.withpersona.sdk2.inquiry.network.core.InternalErrorInfo;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class b {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends b {

        /* renamed from: a  reason: collision with root package name */
        private final InternalErrorInfo f20248a;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public a(InternalErrorInfo cause) {
            super(null);
            Intrinsics.checkNotNullParameter(cause, "cause");
            this.f20248a = cause;
        }

        public final InternalErrorInfo a() {
            return this.f20248a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            return (obj instanceof a) && Intrinsics.areEqual(this.f20248a, ((a) obj).f20248a);
        }

        public int hashCode() {
            return this.f20248a.hashCode();
        }

        public String toString() {
            InternalErrorInfo internalErrorInfo = this.f20248a;
            return "Error(cause=" + internalErrorInfo + ")";
        }
    }

    /* renamed from: com.withpersona.sdk2.inquiry.internal.network.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0251b extends b {

        /* renamed from: a  reason: collision with root package name */
        private final String f20249a;

        /* renamed from: b  reason: collision with root package name */
        private final qp.g f20250b;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public C0251b(String sessionToken, qp.g inquirySessionConfig) {
            super(null);
            Intrinsics.checkNotNullParameter(sessionToken, "sessionToken");
            Intrinsics.checkNotNullParameter(inquirySessionConfig, "inquirySessionConfig");
            this.f20249a = sessionToken;
            this.f20250b = inquirySessionConfig;
        }

        public final qp.g a() {
            return this.f20250b;
        }

        public final String b() {
            return this.f20249a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof C0251b) {
                C0251b c0251b = (C0251b) obj;
                return Intrinsics.areEqual(this.f20249a, c0251b.f20249a) && Intrinsics.areEqual(this.f20250b, c0251b.f20250b);
            }
            return false;
        }

        public int hashCode() {
            return (this.f20249a.hashCode() * 31) + this.f20250b.hashCode();
        }

        public String toString() {
            String str = this.f20249a;
            qp.g gVar = this.f20250b;
            return "Success(sessionToken=" + str + ", inquirySessionConfig=" + gVar + ")";
        }
    }

    public /* synthetic */ b(DefaultConstructorMarker defaultConstructorMarker) {
        this();
    }

    private b() {
    }
}
