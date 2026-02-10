package com.withpersona.sdk2.inquiry.internal.network;

import com.withpersona.sdk2.inquiry.network.core.InternalErrorInfo;
import com.withpersona.sdk2.inquiry.network.dto.NextStep;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class a {

    /* renamed from: com.withpersona.sdk2.inquiry.internal.network.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0258a extends a {

        /* renamed from: a  reason: collision with root package name */
        private final String f20264a;

        /* renamed from: b  reason: collision with root package name */
        private final InternalErrorInfo f20265b;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public C0258a(String str, InternalErrorInfo cause) {
            super(null);
            Intrinsics.checkNotNullParameter(cause, "cause");
            this.f20264a = str;
            this.f20265b = cause;
        }

        public final InternalErrorInfo a() {
            return this.f20265b;
        }

        public final String b() {
            return this.f20264a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof C0258a) {
                C0258a c0258a = (C0258a) obj;
                return Intrinsics.areEqual(this.f20264a, c0258a.f20264a) && Intrinsics.areEqual(this.f20265b, c0258a.f20265b);
            }
            return false;
        }

        public int hashCode() {
            String str = this.f20264a;
            return ((str == null ? 0 : str.hashCode()) * 31) + this.f20265b.hashCode();
        }

        public String toString() {
            String str = this.f20264a;
            InternalErrorInfo internalErrorInfo = this.f20265b;
            return "Error(debugMessage=" + str + ", cause=" + internalErrorInfo + ")";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends a {

        /* renamed from: a  reason: collision with root package name */
        private final String f20266a;

        /* renamed from: b  reason: collision with root package name */
        private final NextStep f20267b;

        /* renamed from: c  reason: collision with root package name */
        private final String f20268c;

        public /* synthetic */ b(String str, NextStep nextStep, String str2, int i10, DefaultConstructorMarker defaultConstructorMarker) {
            this(str, nextStep, (i10 & 4) != 0 ? null : str2);
        }

        public final String a() {
            return this.f20268c;
        }

        public final String b() {
            return this.f20266a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof b) {
                b bVar = (b) obj;
                return Intrinsics.areEqual(this.f20266a, bVar.f20266a) && Intrinsics.areEqual(this.f20267b, bVar.f20267b) && Intrinsics.areEqual(this.f20268c, bVar.f20268c);
            }
            return false;
        }

        public int hashCode() {
            int hashCode = ((this.f20266a.hashCode() * 31) + this.f20267b.hashCode()) * 31;
            String str = this.f20268c;
            return hashCode + (str == null ? 0 : str.hashCode());
        }

        public String toString() {
            String str = this.f20266a;
            NextStep nextStep = this.f20267b;
            String str2 = this.f20268c;
            return "Success(inquiryId=" + str + ", nextStep=" + nextStep + ", fallbackSessionToken=" + str2 + ")";
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public b(String inquiryId, NextStep nextStep, String str) {
            super(null);
            Intrinsics.checkNotNullParameter(inquiryId, "inquiryId");
            Intrinsics.checkNotNullParameter(nextStep, "nextStep");
            this.f20266a = inquiryId;
            this.f20267b = nextStep;
            this.f20268c = str;
        }
    }

    public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
        this();
    }

    private a() {
    }
}
