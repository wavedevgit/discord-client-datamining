package com.withpersona.sdk2.inquiry.internal.network;

import kotlin.Metadata;
import kotlin.enums.EnumEntries;
import kotlin.jvm.internal.Intrinsics;
@com.squareup.moshi.i(generateAdapter = true)
@Metadata(d1 = {"\u0000\u0010\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\u0018\u0002\n\u0002\b\u000b\b\u0007\u0018\u00002\u00020\u0001:\u0001\u0007B\u0019\u0012\u0006\u0010\u0003\u001a\u00020\u0002\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0001¢\u0006\u0004\b\u0005\u0010\u0006R\u0017\u0010\u0003\u001a\u00020\u00028\u0006¢\u0006\f\n\u0004\b\u0007\u0010\b\u001a\u0004\b\t\u0010\nR\u0019\u0010\u0004\u001a\u0004\u0018\u00010\u00018\u0006¢\u0006\f\n\u0004\b\t\u0010\u000b\u001a\u0004\b\u0007\u0010\f¨\u0006\r"}, d2 = {"Lcom/withpersona/sdk2/inquiry/internal/network/ErrorRequest;", "", "Lcom/withpersona/sdk2/inquiry/internal/network/ErrorRequest$a;", "errorType", "debugDescription", "<init>", "(Lcom/withpersona/sdk2/inquiry/internal/network/ErrorRequest$a;Ljava/lang/Object;)V", "a", "Lcom/withpersona/sdk2/inquiry/internal/network/ErrorRequest$a;", "b", "()Lcom/withpersona/sdk2/inquiry/internal/network/ErrorRequest$a;", "Ljava/lang/Object;", "()Ljava/lang/Object;", "inquiry-internal_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class ErrorRequest {

    /* renamed from: a  reason: collision with root package name */
    private final a f18786a;

    /* renamed from: b  reason: collision with root package name */
    private final Object f18787b;

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        private static final /* synthetic */ EnumEntries $ENTRIES;
        private static final /* synthetic */ a[] $VALUES;
        @com.squareup.moshi.g(name = "camera")
        public static final a Camera = new a("Camera", 0);
        @com.squareup.moshi.g(name = "network")
        public static final a Network = new a("Network", 1);
        @com.squareup.moshi.g(name = "permissions")
        public static final a Permissions = new a("Permissions", 2);
        @com.squareup.moshi.g(name = "nfc")
        public static final a Nfc = new a("Nfc", 3);
        @com.squareup.moshi.g(name = "other")
        public static final a Other = new a("Other", 4);

        static {
            a[] a10 = a();
            $VALUES = a10;
            $ENTRIES = sr.a.a(a10);
        }

        private a(String str, int i10) {
        }

        private static final /* synthetic */ a[] a() {
            return new a[]{Camera, Network, Permissions, Nfc, Other};
        }

        public static a valueOf(String str) {
            return (a) Enum.valueOf(a.class, str);
        }

        public static a[] values() {
            return (a[]) $VALUES.clone();
        }
    }

    public ErrorRequest(a errorType, Object obj) {
        Intrinsics.checkNotNullParameter(errorType, "errorType");
        this.f18786a = errorType;
        this.f18787b = obj;
    }

    public final Object a() {
        return this.f18787b;
    }

    public final a b() {
        return this.f18786a;
    }
}
