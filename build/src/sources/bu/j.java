package bu;

import java.io.IOException;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public enum j {
    HTTP_1_0("http/1.0"),
    HTTP_1_1("http/1.1"),
    SPDY_3("spdy/3.1"),
    HTTP_2("h2"),
    H2_PRIOR_KNOWLEDGE("h2_prior_knowledge"),
    QUIC("quic");
    

    /* renamed from: e  reason: collision with root package name */
    public static final a f7120e = new a(null);

    /* renamed from: d  reason: collision with root package name */
    private final String f7128d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final j a(String protocol) {
            Intrinsics.checkNotNullParameter(protocol, "protocol");
            j jVar = j.HTTP_1_0;
            if (Intrinsics.areEqual(protocol, jVar.f7128d)) {
                return jVar;
            }
            j jVar2 = j.HTTP_1_1;
            if (Intrinsics.areEqual(protocol, jVar2.f7128d)) {
                return jVar2;
            }
            j jVar3 = j.H2_PRIOR_KNOWLEDGE;
            if (Intrinsics.areEqual(protocol, jVar3.f7128d)) {
                return jVar3;
            }
            j jVar4 = j.HTTP_2;
            if (Intrinsics.areEqual(protocol, jVar4.f7128d)) {
                return jVar4;
            }
            j jVar5 = j.SPDY_3;
            if (Intrinsics.areEqual(protocol, jVar5.f7128d)) {
                return jVar5;
            }
            j jVar6 = j.QUIC;
            if (Intrinsics.areEqual(protocol, jVar6.f7128d)) {
                return jVar6;
            }
            throw new IOException("Unexpected protocol: " + protocol);
        }

        private a() {
        }
    }

    j(String str) {
        this.f7128d = str;
    }

    @Override // java.lang.Enum
    public String toString() {
        return this.f7128d;
    }
}
