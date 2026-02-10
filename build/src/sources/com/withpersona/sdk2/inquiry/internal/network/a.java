package com.withpersona.sdk2.inquiry.internal.network;

import com.withpersona.sdk2.inquiry.network.core.InternalErrorInfo;
import com.withpersona.sdk2.inquiry.network.dto.NextStep;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class a {

    /* renamed from: com.withpersona.sdk2.inquiry.internal.network.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0273a extends a {

        /* renamed from: a  reason: collision with root package name */
        private final String f19384a;

        /* renamed from: b  reason: collision with root package name */
        private final InternalErrorInfo f19385b;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public C0273a(String str, InternalErrorInfo cause) {
            super(null);
            Intrinsics.checkNotNullParameter(cause, "cause");
            this.f19384a = str;
            this.f19385b = cause;
        }

        public final InternalErrorInfo a() {
            return this.f19385b;
        }

        public final String b() {
            return this.f19384a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof C0273a) {
                C0273a c0273a = (C0273a) obj;
                return Intrinsics.areEqual(this.f19384a, c0273a.f19384a) && Intrinsics.areEqual(this.f19385b, c0273a.f19385b);
            }
            return false;
        }

        public int hashCode() {
            String str = this.f19384a;
            return ((str == null ? 0 : str.hashCode()) * 31) + this.f19385b.hashCode();
        }

        public String toString() {
            String str = this.f19384a;
            InternalErrorInfo internalErrorInfo = this.f19385b;
            return "Error(debugMessage=" + str + ", cause=" + internalErrorInfo + ")";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends a {

        /* renamed from: a  reason: collision with root package name */
        private final String f19386a;

        /* renamed from: b  reason: collision with root package name */
        private final NextStep f19387b;

        /* renamed from: c  reason: collision with root package name */
        private final String f19388c;

        public /* synthetic */ b(String str, NextStep nextStep, String str2, int i10, DefaultConstructorMarker defaultConstructorMarker) {
            this(str, nextStep, (i10 & 4) != 0 ? null : str2);
        }

        public final String a() {
            return this.f19388c;
        }

        public final String b() {
            return this.f19386a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof b) {
                b bVar = (b) obj;
                return Intrinsics.areEqual(this.f19386a, bVar.f19386a) && Intrinsics.areEqual(this.f19387b, bVar.f19387b) && Intrinsics.areEqual(this.f19388c, bVar.f19388c);
            }
            return false;
        }

        public int hashCode() {
            int hashCode = ((this.f19386a.hashCode() * 31) + this.f19387b.hashCode()) * 31;
            String str = this.f19388c;
            return hashCode + (str == null ? 0 : str.hashCode());
        }

        public String toString() {
            String str = this.f19386a;
            NextStep nextStep = this.f19387b;
            String str2 = this.f19388c;
            return "Success(inquiryId=" + str + ", nextStep=" + nextStep + ", fallbackSessionToken=" + str2 + ")";
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public b(String inquiryId, NextStep nextStep, String str) {
            super(null);
            Intrinsics.checkNotNullParameter(inquiryId, "inquiryId");
            Intrinsics.checkNotNullParameter(nextStep, "nextStep");
            this.f19386a = inquiryId;
            this.f19387b = nextStep;
            this.f19388c = str;
        }
    }

    public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
        this();
    }

    private a() {
    }
}
