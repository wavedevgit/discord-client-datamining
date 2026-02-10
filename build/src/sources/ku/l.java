package ku;

import java.util.List;
import kotlin.jvm.internal.Intrinsics;
import okio.BufferedSource;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public interface l {

    /* renamed from: a  reason: collision with root package name */
    public static final a f35437a = a.f35439a;

    /* renamed from: b  reason: collision with root package name */
    public static final l f35438b = new a.C0501a();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ a f35439a = new a();

        /* renamed from: ku.l$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        private static final class C0501a implements l {
            @Override // ku.l
            public void a(int i10, b errorCode) {
                Intrinsics.checkNotNullParameter(errorCode, "errorCode");
            }

            @Override // ku.l
            public boolean b(int i10, List requestHeaders) {
                Intrinsics.checkNotNullParameter(requestHeaders, "requestHeaders");
                return true;
            }

            @Override // ku.l
            public boolean c(int i10, List responseHeaders, boolean z10) {
                Intrinsics.checkNotNullParameter(responseHeaders, "responseHeaders");
                return true;
            }

            @Override // ku.l
            public boolean d(int i10, BufferedSource source, int i11, boolean z10) {
                Intrinsics.checkNotNullParameter(source, "source");
                source.skip(i11);
                return true;
            }
        }

        private a() {
        }
    }

    void a(int i10, b bVar);

    boolean b(int i10, List list);

    boolean c(int i10, List list, boolean z10);

    boolean d(int i10, BufferedSource bufferedSource, int i11, boolean z10);
}
