package vn;

import java.util.HashMap;
import kotlin.Result;
import kotlin.coroutines.Continuation;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class n implements e {

    /* renamed from: b  reason: collision with root package name */
    public static final a f52844b = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final HashMap f52845a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends kotlin.coroutines.jvm.internal.d {

        /* renamed from: d  reason: collision with root package name */
        Object f52846d;

        /* renamed from: e  reason: collision with root package name */
        /* synthetic */ Object f52847e;

        /* renamed from: o  reason: collision with root package name */
        int f52849o;

        b(Continuation continuation) {
            super(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            this.f52847e = obj;
            this.f52849o |= Integer.MIN_VALUE;
            Object a10 = n.this.a(null, null, this);
            if (a10 == wr.b.f()) {
                return a10;
            }
            return Result.a(a10);
        }
    }

    public n() {
        b();
        this.f52845a = new HashMap();
    }

    private final m b() {
        try {
            Object newInstance = Class.forName("com.withpersona.sdk2.inquiry.extraction.impl.TextEntityExtractorImpl").newInstance();
            Intrinsics.checkNotNull(newInstance, "null cannot be cast to non-null type com.withpersona.sdk2.camera.analyzers.TextEntityExtractor");
            android.support.v4.media.session.b.a(newInstance);
        } catch (ClassNotFoundException unused) {
        }
        return null;
    }

    /* JADX WARN: Removed duplicated region for block: B:10:0x0023  */
    /* JADX WARN: Removed duplicated region for block: B:14:0x0037  */
    /* JADX WARN: Removed duplicated region for block: B:16:0x003e  */
    /* JADX WARN: Removed duplicated region for block: B:20:0x004c  */
    /* JADX WARN: Removed duplicated region for block: B:23:0x0051  */
    /* JADX WARN: Removed duplicated region for block: B:24:0x0064  */
    /* JADX WARN: Removed duplicated region for block: B:30:0x0083  */
    /* JADX WARN: Removed duplicated region for block: B:31:0x0088  */
    /* JADX WARN: Removed duplicated region for block: B:39:0x00b1  */
    /* JADX WARN: Removed duplicated region for block: B:40:0x00b6  */
    /* JADX WARN: Removed duplicated region for block: B:44:0x00bb  */
    /* JADX WARN: Removed duplicated region for block: B:50:0x00d9  */
    /* JADX WARN: Removed duplicated region for block: B:52:0x00e2  */
    @Override // vn.e
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public java.lang.Object a(un.j0 r8, android.graphics.Rect r9, kotlin.coroutines.Continuation r10) {
        /*
            Method dump skipped, instructions count: 242
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: vn.n.a(un.j0, android.graphics.Rect, kotlin.coroutines.Continuation):java.lang.Object");
    }
}
