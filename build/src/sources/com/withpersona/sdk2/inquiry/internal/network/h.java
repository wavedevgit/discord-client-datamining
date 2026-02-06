package com.withpersona.sdk2.inquiry.internal.network;

import com.withpersona.sdk2.inquiry.internal.l;
import com.withpersona.sdk2.inquiry.network.core.InternalErrorInfo;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class h {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends h {

        /* renamed from: a  reason: collision with root package name */
        private final InternalErrorInfo f19321a;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public a(InternalErrorInfo cause) {
            super(null);
            Intrinsics.checkNotNullParameter(cause, "cause");
            this.f19321a = cause;
        }

        public final InternalErrorInfo a() {
            return this.f19321a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            return (obj instanceof a) && Intrinsics.areEqual(this.f19321a, ((a) obj).f19321a);
        }

        public int hashCode() {
            return this.f19321a.hashCode();
        }

        public String toString() {
            InternalErrorInfo internalErrorInfo = this.f19321a;
            return "Error(cause=" + internalErrorInfo + ")";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends h {

        /* renamed from: a  reason: collision with root package name */
        private final l f19322a;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public b(l nextState) {
            super(null);
            Intrinsics.checkNotNullParameter(nextState, "nextState");
            this.f19322a = nextState;
        }

        public final l a() {
            return this.f19322a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            return (obj instanceof b) && Intrinsics.areEqual(this.f19322a, ((b) obj).f19322a);
        }

        public int hashCode() {
            return this.f19322a.hashCode();
        }

        public String toString() {
            l lVar = this.f19322a;
            return "Success(nextState=" + lVar + ")";
        }
    }

    public /* synthetic */ h(DefaultConstructorMarker defaultConstructorMarker) {
        this();
    }

    private h() {
    }
}
