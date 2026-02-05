package q;

import a0.e0;
import androidx.lifecycle.LiveData;
import androidx.lifecycle.MutableLiveData;
import java.util.Objects;
import x.q;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
class n2 {

    /* renamed from: a  reason: collision with root package name */
    private final a0.l0 f47000a;

    /* renamed from: b  reason: collision with root package name */
    private final MutableLiveData f47001b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f47002a;

        static {
            int[] iArr = new int[e0.a.values().length];
            f47002a = iArr;
            try {
                iArr[e0.a.PENDING_OPEN.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f47002a[e0.a.OPENING.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f47002a[e0.a.OPEN.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                f47002a[e0.a.CONFIGURED.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                f47002a[e0.a.CLOSING.ordinal()] = 5;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                f47002a[e0.a.RELEASING.ordinal()] = 6;
            } catch (NoSuchFieldError unused6) {
            }
            try {
                f47002a[e0.a.CLOSED.ordinal()] = 7;
            } catch (NoSuchFieldError unused7) {
            }
            try {
                f47002a[e0.a.RELEASED.ordinal()] = 8;
            } catch (NoSuchFieldError unused8) {
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public n2(a0.l0 l0Var) {
        this.f47000a = l0Var;
        MutableLiveData mutableLiveData = new MutableLiveData();
        this.f47001b = mutableLiveData;
        mutableLiveData.m(x.q.a(q.b.CLOSED));
    }

    private x.q b() {
        if (this.f47000a.c()) {
            return x.q.a(q.b.OPENING);
        }
        return x.q.a(q.b.PENDING_OPEN);
    }

    public LiveData a() {
        return this.f47001b;
    }

    public void c(e0.a aVar, q.a aVar2) {
        x.q b10;
        switch (a.f47002a[aVar.ordinal()]) {
            case 1:
                b10 = b();
                break;
            case 2:
                b10 = x.q.b(q.b.OPENING, aVar2);
                break;
            case 3:
            case 4:
                b10 = x.q.b(q.b.OPEN, aVar2);
                break;
            case 5:
            case 6:
                b10 = x.q.b(q.b.CLOSING, aVar2);
                break;
            case 7:
            case 8:
                b10 = x.q.b(q.b.CLOSED, aVar2);
                break;
            default:
                throw new IllegalStateException("Unknown internal camera state: " + aVar);
        }
        x.y0.a("CameraStateMachine", "New public camera state " + b10 + " from " + aVar + " and " + aVar2);
        if (!Objects.equals((x.q) this.f47001b.f(), b10)) {
            x.y0.a("CameraStateMachine", "Publishing new public camera state " + b10);
            this.f47001b.m(b10);
        }
    }
}
