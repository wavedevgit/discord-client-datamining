package com.withpersona.sdk2.inquiry.internal.network;

import com.withpersona.sdk2.inquiry.network.core.InternalErrorInfo;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class b {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends b {

        /* renamed from: a  reason: collision with root package name */
        private final InternalErrorInfo f19249a;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public a(InternalErrorInfo cause) {
            super(null);
            Intrinsics.checkNotNullParameter(cause, "cause");
            this.f19249a = cause;
        }

        public final InternalErrorInfo a() {
            return this.f19249a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            return (obj instanceof a) && Intrinsics.areEqual(this.f19249a, ((a) obj).f19249a);
        }

        public int hashCode() {
            return this.f19249a.hashCode();
        }

        public String toString() {
            InternalErrorInfo internalErrorInfo = this.f19249a;
            return "Error(cause=" + internalErrorInfo + ")";
        }
    }

    /* renamed from: com.withpersona.sdk2.inquiry.internal.network.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0247b extends b {

        /* renamed from: a  reason: collision with root package name */
        private final String f19250a;

        /* renamed from: b  reason: collision with root package name */
        private final yp.g f19251b;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public C0247b(String sessionToken, yp.g inquirySessionConfig) {
            super(null);
            Intrinsics.checkNotNullParameter(sessionToken, "sessionToken");
            Intrinsics.checkNotNullParameter(inquirySessionConfig, "inquirySessionConfig");
            this.f19250a = sessionToken;
            this.f19251b = inquirySessionConfig;
        }

        public final yp.g a() {
            return this.f19251b;
        }

        public final String b() {
            return this.f19250a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof C0247b) {
                C0247b c0247b = (C0247b) obj;
                return Intrinsics.areEqual(this.f19250a, c0247b.f19250a) && Intrinsics.areEqual(this.f19251b, c0247b.f19251b);
            }
            return false;
        }

        public int hashCode() {
            return (this.f19250a.hashCode() * 31) + this.f19251b.hashCode();
        }

        public String toString() {
            String str = this.f19250a;
            yp.g gVar = this.f19251b;
            return "Success(sessionToken=" + str + ", inquirySessionConfig=" + gVar + ")";
        }
    }

    public /* synthetic */ b(DefaultConstructorMarker defaultConstructorMarker) {
        this();
    }

    private b() {
    }
}
