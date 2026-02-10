package com.withpersona.sdk2.inquiry.internal.network;

import com.withpersona.sdk2.inquiry.network.core.InternalErrorInfo;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class b {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends b {

        /* renamed from: a  reason: collision with root package name */
        private final InternalErrorInfo f19389a;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public a(InternalErrorInfo cause) {
            super(null);
            Intrinsics.checkNotNullParameter(cause, "cause");
            this.f19389a = cause;
        }

        public final InternalErrorInfo a() {
            return this.f19389a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            return (obj instanceof a) && Intrinsics.areEqual(this.f19389a, ((a) obj).f19389a);
        }

        public int hashCode() {
            return this.f19389a.hashCode();
        }

        public String toString() {
            InternalErrorInfo internalErrorInfo = this.f19389a;
            return "Error(cause=" + internalErrorInfo + ")";
        }
    }

    /* renamed from: com.withpersona.sdk2.inquiry.internal.network.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0274b extends b {

        /* renamed from: a  reason: collision with root package name */
        private final String f19390a;

        /* renamed from: b  reason: collision with root package name */
        private final zp.g f19391b;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public C0274b(String sessionToken, zp.g inquirySessionConfig) {
            super(null);
            Intrinsics.checkNotNullParameter(sessionToken, "sessionToken");
            Intrinsics.checkNotNullParameter(inquirySessionConfig, "inquirySessionConfig");
            this.f19390a = sessionToken;
            this.f19391b = inquirySessionConfig;
        }

        public final zp.g a() {
            return this.f19391b;
        }

        public final String b() {
            return this.f19390a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof C0274b) {
                C0274b c0274b = (C0274b) obj;
                return Intrinsics.areEqual(this.f19390a, c0274b.f19390a) && Intrinsics.areEqual(this.f19391b, c0274b.f19391b);
            }
            return false;
        }

        public int hashCode() {
            return (this.f19390a.hashCode() * 31) + this.f19391b.hashCode();
        }

        public String toString() {
            String str = this.f19390a;
            zp.g gVar = this.f19391b;
            return "Success(sessionToken=" + str + ", inquirySessionConfig=" + gVar + ")";
        }
    }

    public /* synthetic */ b(DefaultConstructorMarker defaultConstructorMarker) {
        this();
    }

    private b() {
    }
}
