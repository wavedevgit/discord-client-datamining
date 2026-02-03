package com.withpersona.sdk2.inquiry.internal.network;

import com.withpersona.sdk2.inquiry.network.core.InternalErrorInfo;
import com.withpersona.sdk2.inquiry.network.dto.NextStep;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class a {

    /* renamed from: com.withpersona.sdk2.inquiry.internal.network.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0236a extends a {

        /* renamed from: a  reason: collision with root package name */
        private final String f18858a;

        /* renamed from: b  reason: collision with root package name */
        private final InternalErrorInfo f18859b;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public C0236a(String str, InternalErrorInfo cause) {
            super(null);
            Intrinsics.checkNotNullParameter(cause, "cause");
            this.f18858a = str;
            this.f18859b = cause;
        }

        public final InternalErrorInfo a() {
            return this.f18859b;
        }

        public final String b() {
            return this.f18858a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof C0236a) {
                C0236a c0236a = (C0236a) obj;
                return Intrinsics.areEqual(this.f18858a, c0236a.f18858a) && Intrinsics.areEqual(this.f18859b, c0236a.f18859b);
            }
            return false;
        }

        public int hashCode() {
            String str = this.f18858a;
            return ((str == null ? 0 : str.hashCode()) * 31) + this.f18859b.hashCode();
        }

        public String toString() {
            String str = this.f18858a;
            InternalErrorInfo internalErrorInfo = this.f18859b;
            return "Error(debugMessage=" + str + ", cause=" + internalErrorInfo + ")";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends a {

        /* renamed from: a  reason: collision with root package name */
        private final String f18860a;

        /* renamed from: b  reason: collision with root package name */
        private final NextStep f18861b;

        /* renamed from: c  reason: collision with root package name */
        private final String f18862c;

        public /* synthetic */ b(String str, NextStep nextStep, String str2, int i10, DefaultConstructorMarker defaultConstructorMarker) {
            this(str, nextStep, (i10 & 4) != 0 ? null : str2);
        }

        public final String a() {
            return this.f18862c;
        }

        public final String b() {
            return this.f18860a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof b) {
                b bVar = (b) obj;
                return Intrinsics.areEqual(this.f18860a, bVar.f18860a) && Intrinsics.areEqual(this.f18861b, bVar.f18861b) && Intrinsics.areEqual(this.f18862c, bVar.f18862c);
            }
            return false;
        }

        public int hashCode() {
            int hashCode = ((this.f18860a.hashCode() * 31) + this.f18861b.hashCode()) * 31;
            String str = this.f18862c;
            return hashCode + (str == null ? 0 : str.hashCode());
        }

        public String toString() {
            String str = this.f18860a;
            NextStep nextStep = this.f18861b;
            String str2 = this.f18862c;
            return "Success(inquiryId=" + str + ", nextStep=" + nextStep + ", fallbackSessionToken=" + str2 + ")";
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public b(String inquiryId, NextStep nextStep, String str) {
            super(null);
            Intrinsics.checkNotNullParameter(inquiryId, "inquiryId");
            Intrinsics.checkNotNullParameter(nextStep, "nextStep");
            this.f18860a = inquiryId;
            this.f18861b = nextStep;
            this.f18862c = str;
        }
    }

    public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
        this();
    }

    private a() {
    }
}
