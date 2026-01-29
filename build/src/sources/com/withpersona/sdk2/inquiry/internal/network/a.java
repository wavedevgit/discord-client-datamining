package com.withpersona.sdk2.inquiry.internal.network;

import com.withpersona.sdk2.inquiry.network.core.InternalErrorInfo;
import com.withpersona.sdk2.inquiry.network.dto.NextStep;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class a {

    /* renamed from: com.withpersona.sdk2.inquiry.internal.network.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0250a extends a {

        /* renamed from: a  reason: collision with root package name */
        private final String f20243a;

        /* renamed from: b  reason: collision with root package name */
        private final InternalErrorInfo f20244b;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public C0250a(String str, InternalErrorInfo cause) {
            super(null);
            Intrinsics.checkNotNullParameter(cause, "cause");
            this.f20243a = str;
            this.f20244b = cause;
        }

        public final InternalErrorInfo a() {
            return this.f20244b;
        }

        public final String b() {
            return this.f20243a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof C0250a) {
                C0250a c0250a = (C0250a) obj;
                return Intrinsics.areEqual(this.f20243a, c0250a.f20243a) && Intrinsics.areEqual(this.f20244b, c0250a.f20244b);
            }
            return false;
        }

        public int hashCode() {
            String str = this.f20243a;
            return ((str == null ? 0 : str.hashCode()) * 31) + this.f20244b.hashCode();
        }

        public String toString() {
            String str = this.f20243a;
            InternalErrorInfo internalErrorInfo = this.f20244b;
            return "Error(debugMessage=" + str + ", cause=" + internalErrorInfo + ")";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends a {

        /* renamed from: a  reason: collision with root package name */
        private final String f20245a;

        /* renamed from: b  reason: collision with root package name */
        private final NextStep f20246b;

        /* renamed from: c  reason: collision with root package name */
        private final String f20247c;

        public /* synthetic */ b(String str, NextStep nextStep, String str2, int i10, DefaultConstructorMarker defaultConstructorMarker) {
            this(str, nextStep, (i10 & 4) != 0 ? null : str2);
        }

        public final String a() {
            return this.f20247c;
        }

        public final String b() {
            return this.f20245a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof b) {
                b bVar = (b) obj;
                return Intrinsics.areEqual(this.f20245a, bVar.f20245a) && Intrinsics.areEqual(this.f20246b, bVar.f20246b) && Intrinsics.areEqual(this.f20247c, bVar.f20247c);
            }
            return false;
        }

        public int hashCode() {
            int hashCode = ((this.f20245a.hashCode() * 31) + this.f20246b.hashCode()) * 31;
            String str = this.f20247c;
            return hashCode + (str == null ? 0 : str.hashCode());
        }

        public String toString() {
            String str = this.f20245a;
            NextStep nextStep = this.f20246b;
            String str2 = this.f20247c;
            return "Success(inquiryId=" + str + ", nextStep=" + nextStep + ", fallbackSessionToken=" + str2 + ")";
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public b(String inquiryId, NextStep nextStep, String str) {
            super(null);
            Intrinsics.checkNotNullParameter(inquiryId, "inquiryId");
            Intrinsics.checkNotNullParameter(nextStep, "nextStep");
            this.f20245a = inquiryId;
            this.f20246b = nextStep;
            this.f20247c = str;
        }
    }

    public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
        this();
    }

    private a() {
    }
}
