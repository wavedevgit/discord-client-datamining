package eu;

import java.util.List;
import kotlin.jvm.internal.Intrinsics;
import okio.BufferedSource;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public interface l {

    /* renamed from: a  reason: collision with root package name */
    public static final a f22863a = a.f22865a;

    /* renamed from: b  reason: collision with root package name */
    public static final l f22864b = new a.C0307a();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ a f22865a = new a();

        /* renamed from: eu.l$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        private static final class C0307a implements l {
            @Override // eu.l
            public void a(int i10, b errorCode) {
                Intrinsics.checkNotNullParameter(errorCode, "errorCode");
            }

            @Override // eu.l
            public boolean b(int i10, List requestHeaders) {
                Intrinsics.checkNotNullParameter(requestHeaders, "requestHeaders");
                return true;
            }

            @Override // eu.l
            public boolean c(int i10, List responseHeaders, boolean z10) {
                Intrinsics.checkNotNullParameter(responseHeaders, "responseHeaders");
                return true;
            }

            @Override // eu.l
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
