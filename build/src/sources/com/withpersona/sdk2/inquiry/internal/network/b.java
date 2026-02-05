package com.withpersona.sdk2.inquiry.internal.network;

import com.withpersona.sdk2.inquiry.network.core.InternalErrorInfo;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class b {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends b {

        /* renamed from: a  reason: collision with root package name */
        private final InternalErrorInfo f19269a;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public a(InternalErrorInfo cause) {
            super(null);
            Intrinsics.checkNotNullParameter(cause, "cause");
            this.f19269a = cause;
        }

        public final InternalErrorInfo a() {
            return this.f19269a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            return (obj instanceof a) && Intrinsics.areEqual(this.f19269a, ((a) obj).f19269a);
        }

        public int hashCode() {
            return this.f19269a.hashCode();
        }

        public String toString() {
            InternalErrorInfo internalErrorInfo = this.f19269a;
            return "Error(cause=" + internalErrorInfo + ")";
        }
    }

    /* renamed from: com.withpersona.sdk2.inquiry.internal.network.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0255b extends b {

        /* renamed from: a  reason: collision with root package name */
        private final String f19270a;

        /* renamed from: b  reason: collision with root package name */
        private final wp.g f19271b;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public C0255b(String sessionToken, wp.g inquirySessionConfig) {
            super(null);
            Intrinsics.checkNotNullParameter(sessionToken, "sessionToken");
            Intrinsics.checkNotNullParameter(inquirySessionConfig, "inquirySessionConfig");
            this.f19270a = sessionToken;
            this.f19271b = inquirySessionConfig;
        }

        public final wp.g a() {
            return this.f19271b;
        }

        public final String b() {
            return this.f19270a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof C0255b) {
                C0255b c0255b = (C0255b) obj;
                return Intrinsics.areEqual(this.f19270a, c0255b.f19270a) && Intrinsics.areEqual(this.f19271b, c0255b.f19271b);
            }
            return false;
        }

        public int hashCode() {
            return (this.f19270a.hashCode() * 31) + this.f19271b.hashCode();
        }

        public String toString() {
            String str = this.f19270a;
            wp.g gVar = this.f19271b;
            return "Success(sessionToken=" + str + ", inquirySessionConfig=" + gVar + ")";
        }
    }

    public /* synthetic */ b(DefaultConstructorMarker defaultConstructorMarker) {
        this();
    }

    private b() {
    }
}
