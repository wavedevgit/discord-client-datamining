package com.withpersona.sdk2.inquiry.internal.network;

import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
@com.squareup.moshi.i(generateAdapter = true)
@Metadata(d1 = {"\u0000\u0010\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\u0018\u0002\n\u0002\b\t\b\u0001\u0018\u0000 \t2\u00020\u0001:\u0002\n\u0006B\u000f\u0012\u0006\u0010\u0003\u001a\u00020\u0002¢\u0006\u0004\b\u0004\u0010\u0005R\u0017\u0010\u0003\u001a\u00020\u00028\u0006¢\u0006\f\n\u0004\b\u0006\u0010\u0007\u001a\u0004\b\u0006\u0010\b¨\u0006\u000b"}, d2 = {"Lcom/withpersona/sdk2/inquiry/internal/network/TransitionBackRequest;", "", "Lcom/withpersona/sdk2/inquiry/internal/network/TransitionBackRequest$Meta;", "meta", "<init>", "(Lcom/withpersona/sdk2/inquiry/internal/network/TransitionBackRequest$Meta;)V", "a", "Lcom/withpersona/sdk2/inquiry/internal/network/TransitionBackRequest$Meta;", "()Lcom/withpersona/sdk2/inquiry/internal/network/TransitionBackRequest$Meta;", "b", "Meta", "inquiry-internal_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class TransitionBackRequest {

    /* renamed from: b  reason: collision with root package name */
    public static final a f19227b = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final Meta f19228a;

    @com.squareup.moshi.i(generateAdapter = true)
    @Metadata(d1 = {"\u0000\u0010\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\u0010\u000e\n\u0002\b\u0007\b\u0007\u0018\u00002\u00020\u0001B\u000f\u0012\u0006\u0010\u0003\u001a\u00020\u0002¢\u0006\u0004\b\u0004\u0010\u0005R\u0017\u0010\u0003\u001a\u00020\u00028\u0006¢\u0006\f\n\u0004\b\u0006\u0010\u0007\u001a\u0004\b\u0006\u0010\b¨\u0006\t"}, d2 = {"Lcom/withpersona/sdk2/inquiry/internal/network/TransitionBackRequest$Meta;", "", "", "fromStep", "<init>", "(Ljava/lang/String;)V", "a", "Ljava/lang/String;", "()Ljava/lang/String;", "inquiry-internal_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class Meta {

        /* renamed from: a  reason: collision with root package name */
        private final String f19229a;

        public Meta(String fromStep) {
            Intrinsics.checkNotNullParameter(fromStep, "fromStep");
            this.f19229a = fromStep;
        }

        public final String a() {
            return this.f19229a;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final TransitionBackRequest a(String fromStep) {
            Intrinsics.checkNotNullParameter(fromStep, "fromStep");
            return new TransitionBackRequest(new Meta(fromStep));
        }

        private a() {
        }
    }

    public TransitionBackRequest(Meta meta) {
        Intrinsics.checkNotNullParameter(meta, "meta");
        this.f19228a = meta;
    }

    public final Meta a() {
        return this.f19228a;
    }
}
