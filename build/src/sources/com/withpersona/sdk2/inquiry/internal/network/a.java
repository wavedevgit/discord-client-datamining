package com.withpersona.sdk2.inquiry.internal.network;

import com.withpersona.sdk2.inquiry.network.core.InternalErrorInfo;
import com.withpersona.sdk2.inquiry.network.dto.NextStep;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class a {

    /* renamed from: com.withpersona.sdk2.inquiry.internal.network.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0254a extends a {

        /* renamed from: a  reason: collision with root package name */
        private final String f19264a;

        /* renamed from: b  reason: collision with root package name */
        private final InternalErrorInfo f19265b;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public C0254a(String str, InternalErrorInfo cause) {
            super(null);
            Intrinsics.checkNotNullParameter(cause, "cause");
            this.f19264a = str;
            this.f19265b = cause;
        }

        public final InternalErrorInfo a() {
            return this.f19265b;
        }

        public final String b() {
            return this.f19264a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof C0254a) {
                C0254a c0254a = (C0254a) obj;
                return Intrinsics.areEqual(this.f19264a, c0254a.f19264a) && Intrinsics.areEqual(this.f19265b, c0254a.f19265b);
            }
            return false;
        }

        public int hashCode() {
            String str = this.f19264a;
            return ((str == null ? 0 : str.hashCode()) * 31) + this.f19265b.hashCode();
        }

        public String toString() {
            String str = this.f19264a;
            InternalErrorInfo internalErrorInfo = this.f19265b;
            return "Error(debugMessage=" + str + ", cause=" + internalErrorInfo + ")";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends a {

        /* renamed from: a  reason: collision with root package name */
        private final String f19266a;

        /* renamed from: b  reason: collision with root package name */
        private final NextStep f19267b;

        /* renamed from: c  reason: collision with root package name */
        private final String f19268c;

        public /* synthetic */ b(String str, NextStep nextStep, String str2, int i10, DefaultConstructorMarker defaultConstructorMarker) {
            this(str, nextStep, (i10 & 4) != 0 ? null : str2);
        }

        public final String a() {
            return this.f19268c;
        }

        public final String b() {
            return this.f19266a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof b) {
                b bVar = (b) obj;
                return Intrinsics.areEqual(this.f19266a, bVar.f19266a) && Intrinsics.areEqual(this.f19267b, bVar.f19267b) && Intrinsics.areEqual(this.f19268c, bVar.f19268c);
            }
            return false;
        }

        public int hashCode() {
            int hashCode = ((this.f19266a.hashCode() * 31) + this.f19267b.hashCode()) * 31;
            String str = this.f19268c;
            return hashCode + (str == null ? 0 : str.hashCode());
        }

        public String toString() {
            String str = this.f19266a;
            NextStep nextStep = this.f19267b;
            String str2 = this.f19268c;
            return "Success(inquiryId=" + str + ", nextStep=" + nextStep + ", fallbackSessionToken=" + str2 + ")";
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public b(String inquiryId, NextStep nextStep, String str) {
            super(null);
            Intrinsics.checkNotNullParameter(inquiryId, "inquiryId");
            Intrinsics.checkNotNullParameter(nextStep, "nextStep");
            this.f19266a = inquiryId;
            this.f19267b = nextStep;
            this.f19268c = str;
        }
    }

    public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
        this();
    }

    private a() {
    }
}
