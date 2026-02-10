package com.withpersona.sdk2.inquiry.internal.network;

import com.withpersona.sdk2.inquiry.network.core.InternalErrorInfo;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class b {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends b {

        /* renamed from: a  reason: collision with root package name */
        private final InternalErrorInfo f20269a;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public a(InternalErrorInfo cause) {
            super(null);
            Intrinsics.checkNotNullParameter(cause, "cause");
            this.f20269a = cause;
        }

        public final InternalErrorInfo a() {
            return this.f20269a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            return (obj instanceof a) && Intrinsics.areEqual(this.f20269a, ((a) obj).f20269a);
        }

        public int hashCode() {
            return this.f20269a.hashCode();
        }

        public String toString() {
            InternalErrorInfo internalErrorInfo = this.f20269a;
            return "Error(cause=" + internalErrorInfo + ")";
        }
    }

    /* renamed from: com.withpersona.sdk2.inquiry.internal.network.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0259b extends b {

        /* renamed from: a  reason: collision with root package name */
        private final String f20270a;

        /* renamed from: b  reason: collision with root package name */
        private final iq.g f20271b;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public C0259b(String sessionToken, iq.g inquirySessionConfig) {
            super(null);
            Intrinsics.checkNotNullParameter(sessionToken, "sessionToken");
            Intrinsics.checkNotNullParameter(inquirySessionConfig, "inquirySessionConfig");
            this.f20270a = sessionToken;
            this.f20271b = inquirySessionConfig;
        }

        public final iq.g a() {
            return this.f20271b;
        }

        public final String b() {
            return this.f20270a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof C0259b) {
                C0259b c0259b = (C0259b) obj;
                return Intrinsics.areEqual(this.f20270a, c0259b.f20270a) && Intrinsics.areEqual(this.f20271b, c0259b.f20271b);
            }
            return false;
        }

        public int hashCode() {
            return (this.f20270a.hashCode() * 31) + this.f20271b.hashCode();
        }

        public String toString() {
            String str = this.f20270a;
            iq.g gVar = this.f20271b;
            return "Success(sessionToken=" + str + ", inquirySessionConfig=" + gVar + ")";
        }
    }

    public /* synthetic */ b(DefaultConstructorMarker defaultConstructorMarker) {
        this();
    }

    private b() {
    }
}
