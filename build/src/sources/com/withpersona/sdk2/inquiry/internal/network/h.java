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
        private final InternalErrorInfo f19461a;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public a(InternalErrorInfo cause) {
            super(null);
            Intrinsics.checkNotNullParameter(cause, "cause");
            this.f19461a = cause;
        }

        public final InternalErrorInfo a() {
            return this.f19461a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            return (obj instanceof a) && Intrinsics.areEqual(this.f19461a, ((a) obj).f19461a);
        }

        public int hashCode() {
            return this.f19461a.hashCode();
        }

        public String toString() {
            InternalErrorInfo internalErrorInfo = this.f19461a;
            return "Error(cause=" + internalErrorInfo + ")";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends h {

        /* renamed from: a  reason: collision with root package name */
        private final l f19462a;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public b(l nextState) {
            super(null);
            Intrinsics.checkNotNullParameter(nextState, "nextState");
            this.f19462a = nextState;
        }

        public final l a() {
            return this.f19462a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            return (obj instanceof b) && Intrinsics.areEqual(this.f19462a, ((b) obj).f19462a);
        }

        public int hashCode() {
            return this.f19462a.hashCode();
        }

        public String toString() {
            l lVar = this.f19462a;
            return "Success(nextState=" + lVar + ")";
        }
    }

    public /* synthetic */ h(DefaultConstructorMarker defaultConstructorMarker) {
        this();
    }

    private h() {
    }
}
