package com.withpersona.sdk2.inquiry.internal.network;

import com.withpersona.sdk2.inquiry.network.core.InternalErrorInfo;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class i {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends i {

        /* renamed from: a  reason: collision with root package name */
        private final InternalErrorInfo f19463a;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public a(InternalErrorInfo cause) {
            super(null);
            Intrinsics.checkNotNullParameter(cause, "cause");
            this.f19463a = cause;
        }

        public final InternalErrorInfo a() {
            return this.f19463a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            return (obj instanceof a) && Intrinsics.areEqual(this.f19463a, ((a) obj).f19463a);
        }

        public int hashCode() {
            return this.f19463a.hashCode();
        }

        public String toString() {
            InternalErrorInfo internalErrorInfo = this.f19463a;
            return "Error(cause=" + internalErrorInfo + ")";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends i {

        /* renamed from: a  reason: collision with root package name */
        public static final b f19464a = new b();

        private b() {
            super(null);
        }

        public boolean equals(Object obj) {
            return this == obj || (obj instanceof b);
        }

        public int hashCode() {
            return -1699586009;
        }

        public String toString() {
            return "Success";
        }
    }

    public /* synthetic */ i(DefaultConstructorMarker defaultConstructorMarker) {
        this();
    }

    private i() {
    }
}
