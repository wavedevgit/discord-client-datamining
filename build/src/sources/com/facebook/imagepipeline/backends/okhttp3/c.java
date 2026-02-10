package com.facebook.imagepipeline.backends.okhttp3;

import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import okhttp3.Headers;
import okhttp3.Response;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c extends Exception {

    /* renamed from: i  reason: collision with root package name */
    public static final a f10453i = new a(null);

    /* renamed from: d  reason: collision with root package name */
    private final Integer f10454d;

    /* renamed from: e  reason: collision with root package name */
    private final Headers f10455e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final c a(Response response) {
            Integer num;
            Intrinsics.checkNotNullParameter(response, "response");
            Response H0 = response.H0();
            Headers headers = null;
            if (H0 != null) {
                num = Integer.valueOf(H0.z());
            } else {
                num = null;
            }
            Response H02 = response.H0();
            if (H02 != null) {
                headers = H02.C0();
            }
            return new c(num, headers);
        }

        private a() {
        }
    }

    public c(Integer num, Headers headers) {
        this.f10454d = num;
        this.f10455e = headers;
    }
}
