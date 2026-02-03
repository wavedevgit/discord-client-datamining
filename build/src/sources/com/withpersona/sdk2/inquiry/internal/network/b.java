package com.withpersona.sdk2.inquiry.internal.network;

import com.withpersona.sdk2.inquiry.network.core.InternalErrorInfo;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class b {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends b {

        /* renamed from: a  reason: collision with root package name */
        private final InternalErrorInfo f18863a;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public a(InternalErrorInfo cause) {
            super(null);
            Intrinsics.checkNotNullParameter(cause, "cause");
            this.f18863a = cause;
        }

        public final InternalErrorInfo a() {
            return this.f18863a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            return (obj instanceof a) && Intrinsics.areEqual(this.f18863a, ((a) obj).f18863a);
        }

        public int hashCode() {
            return this.f18863a.hashCode();
        }

        public String toString() {
            InternalErrorInfo internalErrorInfo = this.f18863a;
            return "Error(cause=" + internalErrorInfo + ")";
        }
    }

    /* renamed from: com.withpersona.sdk2.inquiry.internal.network.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0237b extends b {

        /* renamed from: a  reason: collision with root package name */
        private final String f18864a;

        /* renamed from: b  reason: collision with root package name */
        private final tp.g f18865b;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public C0237b(String sessionToken, tp.g inquirySessionConfig) {
            super(null);
            Intrinsics.checkNotNullParameter(sessionToken, "sessionToken");
            Intrinsics.checkNotNullParameter(inquirySessionConfig, "inquirySessionConfig");
            this.f18864a = sessionToken;
            this.f18865b = inquirySessionConfig;
        }

        public final tp.g a() {
            return this.f18865b;
        }

        public final String b() {
            return this.f18864a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof C0237b) {
                C0237b c0237b = (C0237b) obj;
                return Intrinsics.areEqual(this.f18864a, c0237b.f18864a) && Intrinsics.areEqual(this.f18865b, c0237b.f18865b);
            }
            return false;
        }

        public int hashCode() {
            return (this.f18864a.hashCode() * 31) + this.f18865b.hashCode();
        }

        public String toString() {
            String str = this.f18864a;
            tp.g gVar = this.f18865b;
            return "Success(sessionToken=" + str + ", inquirySessionConfig=" + gVar + ")";
        }
    }

    public /* synthetic */ b(DefaultConstructorMarker defaultConstructorMarker) {
        this();
    }

    private b() {
    }
}
