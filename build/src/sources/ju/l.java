package ju;

import java.util.List;
import kotlin.jvm.internal.Intrinsics;
import okio.BufferedSource;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public interface l {

    /* renamed from: a  reason: collision with root package name */
    public static final a f31297a = a.f31299a;

    /* renamed from: b  reason: collision with root package name */
    public static final l f31298b = new a.C0442a();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ a f31299a = new a();

        /* renamed from: ju.l$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        private static final class C0442a implements l {
            @Override // ju.l
            public boolean a(int i10, List requestHeaders) {
                Intrinsics.checkNotNullParameter(requestHeaders, "requestHeaders");
                return true;
            }

            @Override // ju.l
            public boolean b(int i10, List responseHeaders, boolean z10) {
                Intrinsics.checkNotNullParameter(responseHeaders, "responseHeaders");
                return true;
            }

            @Override // ju.l
            public void c(int i10, b errorCode) {
                Intrinsics.checkNotNullParameter(errorCode, "errorCode");
            }

            @Override // ju.l
            public boolean d(int i10, BufferedSource source, int i11, boolean z10) {
                Intrinsics.checkNotNullParameter(source, "source");
                source.skip(i11);
                return true;
            }
        }

        private a() {
        }
    }

    boolean a(int i10, List list);

    boolean b(int i10, List list, boolean z10);

    void c(int i10, b bVar);

    boolean d(int i10, BufferedSource bufferedSource, int i11, boolean z10);
}
