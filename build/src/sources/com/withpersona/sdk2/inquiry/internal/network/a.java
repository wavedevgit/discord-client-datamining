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
        private final String f20265a;

        /* renamed from: b  reason: collision with root package name */
        private final InternalErrorInfo f20266b;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public C0258a(String str, InternalErrorInfo cause) {
            super(null);
            Intrinsics.checkNotNullParameter(cause, "cause");
            this.f20265a = str;
            this.f20266b = cause;
        }

        public final InternalErrorInfo a() {
            return this.f20266b;
        }

        public final String b() {
            return this.f20265a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof C0258a) {
                C0258a c0258a = (C0258a) obj;
                return Intrinsics.areEqual(this.f20265a, c0258a.f20265a) && Intrinsics.areEqual(this.f20266b, c0258a.f20266b);
            }
            return false;
        }

        public int hashCode() {
            String str = this.f20265a;
            return ((str == null ? 0 : str.hashCode()) * 31) + this.f20266b.hashCode();
        }

        public String toString() {
            String str = this.f20265a;
            InternalErrorInfo internalErrorInfo = this.f20266b;
            return "Error(debugMessage=" + str + ", cause=" + internalErrorInfo + ")";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends a {

        /* renamed from: a  reason: collision with root package name */
        private final String f20267a;

        /* renamed from: b  reason: collision with root package name */
        private final NextStep f20268b;

        /* renamed from: c  reason: collision with root package name */
        private final String f20269c;

        public /* synthetic */ b(String str, NextStep nextStep, String str2, int i10, DefaultConstructorMarker defaultConstructorMarker) {
            this(str, nextStep, (i10 & 4) != 0 ? null : str2);
        }

        public final String a() {
            return this.f20269c;
        }

        public final String b() {
            return this.f20267a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof b) {
                b bVar = (b) obj;
                return Intrinsics.areEqual(this.f20267a, bVar.f20267a) && Intrinsics.areEqual(this.f20268b, bVar.f20268b) && Intrinsics.areEqual(this.f20269c, bVar.f20269c);
            }
            return false;
        }

        public int hashCode() {
            int hashCode = ((this.f20267a.hashCode() * 31) + this.f20268b.hashCode()) * 31;
            String str = this.f20269c;
            return hashCode + (str == null ? 0 : str.hashCode());
        }

        public String toString() {
            String str = this.f20267a;
            NextStep nextStep = this.f20268b;
            String str2 = this.f20269c;
            return "Success(inquiryId=" + str + ", nextStep=" + nextStep + ", fallbackSessionToken=" + str2 + ")";
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public b(String inquiryId, NextStep nextStep, String str) {
            super(null);
            Intrinsics.checkNotNullParameter(inquiryId, "inquiryId");
            Intrinsics.checkNotNullParameter(nextStep, "nextStep");
            this.f20267a = inquiryId;
            this.f20268b = nextStep;
            this.f20269c = str;
        }
    }

    public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
        this();
    }

    private a() {
    }
}
