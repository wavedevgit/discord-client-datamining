package androidx.lifecycle;

import androidx.lifecycle.Lifecycle;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class e implements m {

    /* renamed from: d  reason: collision with root package name */
    private final DefaultLifecycleObserver f4932d;

    /* renamed from: e  reason: collision with root package name */
    private final m f4933e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f4934a;

        static {
            int[] iArr = new int[Lifecycle.a.values().length];
            try {
                iArr[Lifecycle.a.ON_CREATE.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[Lifecycle.a.ON_START.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[Lifecycle.a.ON_RESUME.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                iArr[Lifecycle.a.ON_PAUSE.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                iArr[Lifecycle.a.ON_STOP.ordinal()] = 5;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                iArr[Lifecycle.a.ON_DESTROY.ordinal()] = 6;
            } catch (NoSuchFieldError unused6) {
            }
            try {
                iArr[Lifecycle.a.ON_ANY.ordinal()] = 7;
            } catch (NoSuchFieldError unused7) {
            }
            f4934a = iArr;
        }
    }

    public e(DefaultLifecycleObserver defaultLifecycleObserver, m mVar) {
        Intrinsics.checkNotNullParameter(defaultLifecycleObserver, "defaultLifecycleObserver");
        this.f4932d = defaultLifecycleObserver;
        this.f4933e = mVar;
    }

    @Override // androidx.lifecycle.m
    public void k(LifecycleOwner source, Lifecycle.a event) {
        Intrinsics.checkNotNullParameter(source, "source");
        Intrinsics.checkNotNullParameter(event, "event");
        switch (a.f4934a[event.ordinal()]) {
            case 1:
                this.f4932d.onCreate(source);
                break;
            case 2:
                this.f4932d.onStart(source);
                break;
            case 3:
                this.f4932d.onResume(source);
                break;
            case 4:
                this.f4932d.onPause(source);
                break;
            case 5:
                this.f4932d.onStop(source);
                break;
            case 6:
                this.f4932d.onDestroy(source);
                break;
            case 7:
                throw new IllegalArgumentException("ON_ANY must not been send by anybody");
            default:
                throw new qr.p();
        }
        m mVar = this.f4933e;
        if (mVar != null) {
            mVar.k(source, event);
        }
    }
}
