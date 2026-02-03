package com.withpersona.sdk2.inquiry.internal.network;

import com.withpersona.sdk2.inquiry.network.core.InternalErrorInfo;
import com.withpersona.sdk2.inquiry.network.dto.NextStep;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class a {

    /* renamed from: com.withpersona.sdk2.inquiry.internal.network.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0255a extends a {

        /* renamed from: a  reason: collision with root package name */
        private final String f19876a;

        /* renamed from: b  reason: collision with root package name */
        private final InternalErrorInfo f19877b;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public C0255a(String str, InternalErrorInfo cause) {
            super(null);
            Intrinsics.checkNotNullParameter(cause, "cause");
            this.f19876a = str;
            this.f19877b = cause;
        }

        public final InternalErrorInfo a() {
            return this.f19877b;
        }

        public final String b() {
            return this.f19876a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof C0255a) {
                C0255a c0255a = (C0255a) obj;
                return Intrinsics.areEqual(this.f19876a, c0255a.f19876a) && Intrinsics.areEqual(this.f19877b, c0255a.f19877b);
            }
            return false;
        }

        public int hashCode() {
            String str = this.f19876a;
            return ((str == null ? 0 : str.hashCode()) * 31) + this.f19877b.hashCode();
        }

        public String toString() {
            String str = this.f19876a;
            InternalErrorInfo internalErrorInfo = this.f19877b;
            return "Error(debugMessage=" + str + ", cause=" + internalErrorInfo + ")";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends a {

        /* renamed from: a  reason: collision with root package name */
        private final String f19878a;

        /* renamed from: b  reason: collision with root package name */
        private final NextStep f19879b;

        /* renamed from: c  reason: collision with root package name */
        private final String f19880c;

        public /* synthetic */ b(String str, NextStep nextStep, String str2, int i10, DefaultConstructorMarker defaultConstructorMarker) {
            this(str, nextStep, (i10 & 4) != 0 ? null : str2);
        }

        public final String a() {
            return this.f19880c;
        }

        public final String b() {
            return this.f19878a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof b) {
                b bVar = (b) obj;
                return Intrinsics.areEqual(this.f19878a, bVar.f19878a) && Intrinsics.areEqual(this.f19879b, bVar.f19879b) && Intrinsics.areEqual(this.f19880c, bVar.f19880c);
            }
            return false;
        }

        public int hashCode() {
            int hashCode = ((this.f19878a.hashCode() * 31) + this.f19879b.hashCode()) * 31;
            String str = this.f19880c;
            return hashCode + (str == null ? 0 : str.hashCode());
        }

        public String toString() {
            String str = this.f19878a;
            NextStep nextStep = this.f19879b;
            String str2 = this.f19880c;
            return "Success(inquiryId=" + str + ", nextStep=" + nextStep + ", fallbackSessionToken=" + str2 + ")";
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public b(String inquiryId, NextStep nextStep, String str) {
            super(null);
            Intrinsics.checkNotNullParameter(inquiryId, "inquiryId");
            Intrinsics.checkNotNullParameter(nextStep, "nextStep");
            this.f19878a = inquiryId;
            this.f19879b = nextStep;
            this.f19880c = str;
        }
    }

    public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
        this();
    }

    private a() {
    }
}
