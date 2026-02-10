package com.withpersona.sdk2.inquiry.internal.network;

import com.withpersona.sdk2.inquiry.network.core.InternalErrorInfo;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class d {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends d {

        /* renamed from: a  reason: collision with root package name */
        private final InternalErrorInfo f19392a;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public a(InternalErrorInfo cause) {
            super(null);
            Intrinsics.checkNotNullParameter(cause, "cause");
            this.f19392a = cause;
        }

        public final InternalErrorInfo a() {
            return this.f19392a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            return (obj instanceof a) && Intrinsics.areEqual(this.f19392a, ((a) obj).f19392a);
        }

        public int hashCode() {
            return this.f19392a.hashCode();
        }

        public String toString() {
            InternalErrorInfo internalErrorInfo = this.f19392a;
            return "Error(cause=" + internalErrorInfo + ")";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends d {

        /* renamed from: a  reason: collision with root package name */
        private final String f19393a;

        /* renamed from: b  reason: collision with root package name */
        private final String f19394b;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public b(String inquiryId, String str) {
            super(null);
            Intrinsics.checkNotNullParameter(inquiryId, "inquiryId");
            this.f19393a = inquiryId;
            this.f19394b = str;
        }

        public final String a() {
            return this.f19393a;
        }

        public final String b() {
            return this.f19394b;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof b) {
                b bVar = (b) obj;
                return Intrinsics.areEqual(this.f19393a, bVar.f19393a) && Intrinsics.areEqual(this.f19394b, bVar.f19394b);
            }
            return false;
        }

        public int hashCode() {
            int hashCode = this.f19393a.hashCode() * 31;
            String str = this.f19394b;
            return hashCode + (str == null ? 0 : str.hashCode());
        }

        public String toString() {
            String str = this.f19393a;
            String str2 = this.f19394b;
            return "Success(inquiryId=" + str + ", sessionToken=" + str2 + ")";
        }
    }

    public /* synthetic */ d(DefaultConstructorMarker defaultConstructorMarker) {
        this();
    }

    private d() {
    }
}
