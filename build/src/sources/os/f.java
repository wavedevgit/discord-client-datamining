package os;

import kotlin.jvm.functions.Function2;
import kotlin.jvm.functions.Function3;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.jvm.internal.LongCompanionObject;
import kotlin.reflect.KFunction;
import kotlinx.coroutines.CancellableContinuation;
import rs.e0;
import rs.h0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class f {

    /* renamed from: a  reason: collision with root package name */
    private static final m f44390a = new m(-1, null, null, 0);

    /* renamed from: b  reason: collision with root package name */
    public static final int f44391b;

    /* renamed from: c  reason: collision with root package name */
    private static final int f44392c;

    /* renamed from: d  reason: collision with root package name */
    public static final e0 f44393d;

    /* renamed from: e  reason: collision with root package name */
    private static final e0 f44394e;

    /* renamed from: f  reason: collision with root package name */
    private static final e0 f44395f;

    /* renamed from: g  reason: collision with root package name */
    private static final e0 f44396g;

    /* renamed from: h  reason: collision with root package name */
    private static final e0 f44397h;

    /* renamed from: i  reason: collision with root package name */
    private static final e0 f44398i;

    /* renamed from: j  reason: collision with root package name */
    private static final e0 f44399j;

    /* renamed from: k  reason: collision with root package name */
    private static final e0 f44400k;

    /* renamed from: l  reason: collision with root package name */
    private static final e0 f44401l;

    /* renamed from: m  reason: collision with root package name */
    private static final e0 f44402m;

    /* renamed from: n  reason: collision with root package name */
    private static final e0 f44403n;

    /* renamed from: o  reason: collision with root package name */
    private static final e0 f44404o;

    /* renamed from: p  reason: collision with root package name */
    private static final e0 f44405p;

    /* renamed from: q  reason: collision with root package name */
    private static final e0 f44406q;

    /* renamed from: r  reason: collision with root package name */
    private static final e0 f44407r;

    /* renamed from: s  reason: collision with root package name */
    private static final e0 f44408s;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    /* synthetic */ class a extends FunctionReferenceImpl implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        public static final a f44409d = new a();

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
        f44391b = e10;
        e11 = h0.e("kotlinx.coroutines.bufferedChannel.expandBufferCompletionWaitIterations", 10000, 0, 0, 12, null);
        f44392c = e11;
        f44393d = new e0("BUFFERED");
        f44394e = new e0("SHOULD_BUFFER");
        f44395f = new e0("S_RESUMING_BY_RCV");
        f44396g = new e0("RESUMING_BY_EB");
        f44397h = new e0("POISONED");
        f44398i = new e0("DONE_RCV");
        f44399j = new e0("INTERRUPTED_SEND");
        f44400k = new e0("INTERRUPTED_RCV");
        f44401l = new e0("CHANNEL_CLOSED");
        f44402m = new e0("SUSPEND");
        f44403n = new e0("SUSPEND_NO_WAITER");
        f44404o = new e0("FAILED");
        f44405p = new e0("NO_RECEIVE_RESULT");
        f44406q = new e0("CLOSE_HANDLER_CLOSED");
        f44407r = new e0("CLOSE_HANDLER_INVOKED");
        f44408s = new e0("NO_CLOSE_CAUSE");
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
        Object u10 = cancellableContinuation.u(obj, null, function3);
        if (u10 != null) {
            cancellableContinuation.x(u10);
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
        return a.f44409d;
    }

    public static final e0 z() {
        return f44401l;
    }
}
