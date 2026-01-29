package is;

import kotlin.jvm.functions.Function2;
import kotlin.jvm.functions.Function3;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.jvm.internal.LongCompanionObject;
import kotlin.reflect.KFunction;
import kotlinx.coroutines.CancellableContinuation;
import ls.e0;
import ls.h0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class f {

    /* renamed from: a  reason: collision with root package name */
    private static final m f31165a = new m(-1, null, null, 0);

    /* renamed from: b  reason: collision with root package name */
    public static final int f31166b;

    /* renamed from: c  reason: collision with root package name */
    private static final int f31167c;

    /* renamed from: d  reason: collision with root package name */
    public static final e0 f31168d;

    /* renamed from: e  reason: collision with root package name */
    private static final e0 f31169e;

    /* renamed from: f  reason: collision with root package name */
    private static final e0 f31170f;

    /* renamed from: g  reason: collision with root package name */
    private static final e0 f31171g;

    /* renamed from: h  reason: collision with root package name */
    private static final e0 f31172h;

    /* renamed from: i  reason: collision with root package name */
    private static final e0 f31173i;

    /* renamed from: j  reason: collision with root package name */
    private static final e0 f31174j;

    /* renamed from: k  reason: collision with root package name */
    private static final e0 f31175k;

    /* renamed from: l  reason: collision with root package name */
    private static final e0 f31176l;

    /* renamed from: m  reason: collision with root package name */
    private static final e0 f31177m;

    /* renamed from: n  reason: collision with root package name */
    private static final e0 f31178n;

    /* renamed from: o  reason: collision with root package name */
    private static final e0 f31179o;

    /* renamed from: p  reason: collision with root package name */
    private static final e0 f31180p;

    /* renamed from: q  reason: collision with root package name */
    private static final e0 f31181q;

    /* renamed from: r  reason: collision with root package name */
    private static final e0 f31182r;

    /* renamed from: s  reason: collision with root package name */
    private static final e0 f31183s;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    /* synthetic */ class a extends FunctionReferenceImpl implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        public static final a f31184d = new a();

        a() {
            super(2, f.class, "createSegment", "createSegment(JLkotlinx/coroutines/channels/ChannelSegment;)Lkotlinx/coroutines/channels/ChannelSegment;", 1);
        }

        public final m a(long j10, m mVar) {
            return f.x(j10, mVar);
        }

        @Override // kotlin.jvm.functions.Function2
        public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2) {
            return a(((Number) obj).longValue(), (m) obj2);
        }
    }

    static {
        int e10;
        int e11;
        e10 = h0.e("kotlinx.coroutines.bufferedChannel.segmentSize", 32, 0, 0, 12, null);
        f31166b = e10;
        e11 = h0.e("kotlinx.coroutines.bufferedChannel.expandBufferCompletionWaitIterations", 10000, 0, 0, 12, null);
        f31167c = e11;
        f31168d = new e0("BUFFERED");
        f31169e = new e0("SHOULD_BUFFER");
        f31170f = new e0("S_RESUMING_BY_RCV");
        f31171g = new e0("RESUMING_BY_EB");
        f31172h = new e0("POISONED");
        f31173i = new e0("DONE_RCV");
        f31174j = new e0("INTERRUPTED_SEND");
        f31175k = new e0("INTERRUPTED_RCV");
        f31176l = new e0("CHANNEL_CLOSED");
        f31177m = new e0("SUSPEND");
        f31178n = new e0("SUSPEND_NO_WAITER");
        f31179o = new e0("FAILED");
        f31180p = new e0("NO_RECEIVE_RESULT");
        f31181q = new e0("CLOSE_HANDLER_CLOSED");
        f31182r = new e0("CLOSE_HANDLER_INVOKED");
        f31183s = new e0("NO_CLOSE_CAUSE");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final long A(int i10) {
        if (i10 != 0) {
            if (i10 != Integer.MAX_VALUE) {
                return i10;
            }
            return LongCompanionObject.MAX_VALUE;
        }
        return 0L;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final boolean B(CancellableContinuation cancellableContinuation, Object obj, Function3 function3) {
        Object t10 = cancellableContinuation.t(obj, null, function3);
        if (t10 != null) {
            cancellableContinuation.w(t10);
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static /* synthetic */ boolean C(CancellableContinuation cancellableContinuation, Object obj, Function3 function3, int i10, Object obj2) {
        if ((i10 & 2) != 0) {
            function3 = null;
        }
        return B(cancellableContinuation, obj, function3);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final long v(long j10, boolean z10) {
        long j11;
        if (z10) {
            j11 = 4611686018427387904L;
        } else {
            j11 = 0;
        }
        return j11 + j10;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final long w(long j10, int i10) {
        return (i10 << 60) + j10;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final m x(long j10, m mVar) {
        return new m(j10, mVar, mVar.y(), 0);
    }

    public static final KFunction y() {
        return a.f31184d;
    }

    public static final e0 z() {
        return f31176l;
    }
}
