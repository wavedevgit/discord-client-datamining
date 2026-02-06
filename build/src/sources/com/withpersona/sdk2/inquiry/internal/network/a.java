package com.withpersona.sdk2.inquiry.internal.network;

import com.withpersona.sdk2.inquiry.network.core.InternalErrorInfo;
import com.withpersona.sdk2.inquiry.network.dto.NextStep;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class a {

    /* renamed from: com.withpersona.sdk2.inquiry.internal.network.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0246a extends a {

        /* renamed from: a  reason: collision with root package name */
        private final String f19244a;

        /* renamed from: b  reason: collision with root package name */
        private final InternalErrorInfo f19245b;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public C0246a(String str, InternalErrorInfo cause) {
            super(null);
            Intrinsics.checkNotNullParameter(cause, "cause");
            this.f19244a = str;
            this.f19245b = cause;
        }

        public final InternalErrorInfo a() {
            return this.f19245b;
        }

        public final String b() {
            return this.f19244a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof C0246a) {
                C0246a c0246a = (C0246a) obj;
                return Intrinsics.areEqual(this.f19244a, c0246a.f19244a) && Intrinsics.areEqual(this.f19245b, c0246a.f19245b);
            }
            return false;
        }

        public int hashCode() {
            String str = this.f19244a;
            return ((str == null ? 0 : str.hashCode()) * 31) + this.f19245b.hashCode();
        }

        public String toString() {
            String str = this.f19244a;
            InternalErrorInfo internalErrorInfo = this.f19245b;
            return "Error(debugMessage=" + str + ", cause=" + internalErrorInfo + ")";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends a {

        /* renamed from: a  reason: collision with root package name */
        private final String f19246a;

        /* renamed from: b  reason: collision with root package name */
        private final NextStep f19247b;

        /* renamed from: c  reason: collision with root package name */
        private final String f19248c;

        public /* synthetic */ b(String str, NextStep nextStep, String str2, int i10, DefaultConstructorMarker defaultConstructorMarker) {
            this(str, nextStep, (i10 & 4) != 0 ? null : str2);
        }

        public final String a() {
            return this.f19248c;
        }

        public final String b() {
            return this.f19246a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof b) {
                b bVar = (b) obj;
                return Intrinsics.areEqual(this.f19246a, bVar.f19246a) && Intrinsics.areEqual(this.f19247b, bVar.f19247b) && Intrinsics.areEqual(this.f19248c, bVar.f19248c);
            }
            return false;
        }

        public int hashCode() {
            int hashCode = ((this.f19246a.hashCode() * 31) + this.f19247b.hashCode()) * 31;
            String str = this.f19248c;
            return hashCode + (str == null ? 0 : str.hashCode());
        }

        public String toString() {
            String str = this.f19246a;
            NextStep nextStep = this.f19247b;
            String str2 = this.f19248c;
            return "Success(inquiryId=" + str + ", nextStep=" + nextStep + ", fallbackSessionToken=" + str2 + ")";
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public b(String inquiryId, NextStep nextStep, String str) {
            super(null);
            Intrinsics.checkNotNullParameter(inquiryId, "inquiryId");
            Intrinsics.checkNotNullParameter(nextStep, "nextStep");
            this.f19246a = inquiryId;
            this.f19247b = nextStep;
            this.f19248c = str;
        }
    }

    public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
        this();
    }

    private a() {
    }
}
