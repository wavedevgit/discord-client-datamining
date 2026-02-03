package com.withpersona.sdk2.inquiry.internal.network;

import com.withpersona.sdk2.inquiry.network.core.InternalErrorInfo;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class b {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends b {

        /* renamed from: a  reason: collision with root package name */
        private final InternalErrorInfo f19881a;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public a(InternalErrorInfo cause) {
            super(null);
            Intrinsics.checkNotNullParameter(cause, "cause");
            this.f19881a = cause;
        }

        public final InternalErrorInfo a() {
            return this.f19881a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            return (obj instanceof a) && Intrinsics.areEqual(this.f19881a, ((a) obj).f19881a);
        }

        public int hashCode() {
            return this.f19881a.hashCode();
        }

        public String toString() {
            InternalErrorInfo internalErrorInfo = this.f19881a;
            return "Error(cause=" + internalErrorInfo + ")";
        }
    }

    /* renamed from: com.withpersona.sdk2.inquiry.internal.network.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0256b extends b {

        /* renamed from: a  reason: collision with root package name */
        private final String f19882a;

        /* renamed from: b  reason: collision with root package name */
        private final rp.g f19883b;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public C0256b(String sessionToken, rp.g inquirySessionConfig) {
            super(null);
            Intrinsics.checkNotNullParameter(sessionToken, "sessionToken");
            Intrinsics.checkNotNullParameter(inquirySessionConfig, "inquirySessionConfig");
            this.f19882a = sessionToken;
            this.f19883b = inquirySessionConfig;
        }

        public final rp.g a() {
            return this.f19883b;
        }

        public final String b() {
            return this.f19882a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof C0256b) {
                C0256b c0256b = (C0256b) obj;
                return Intrinsics.areEqual(this.f19882a, c0256b.f19882a) && Intrinsics.areEqual(this.f19883b, c0256b.f19883b);
            }
            return false;
        }

        public int hashCode() {
            return (this.f19882a.hashCode() * 31) + this.f19883b.hashCode();
        }

        public String toString() {
            String str = this.f19882a;
            rp.g gVar = this.f19883b;
            return "Success(sessionToken=" + str + ", inquirySessionConfig=" + gVar + ")";
        }
    }

    public /* synthetic */ b(DefaultConstructorMarker defaultConstructorMarker) {
        this();
    }

    private b() {
    }
}
