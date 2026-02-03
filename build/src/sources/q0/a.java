package q0;

import android.content.Context;
import android.view.GestureDetector;
import android.view.MotionEvent;
import android.view.ViewConfiguration;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class a {

    /* renamed from: k  reason: collision with root package name */
    public static final C0567a f47208k = new C0567a(null);

    /* renamed from: a  reason: collision with root package name */
    private final Context f47209a;

    /* renamed from: b  reason: collision with root package name */
    private final int f47210b;

    /* renamed from: c  reason: collision with root package name */
    private final int f47211c;

    /* renamed from: d  reason: collision with root package name */
    private final b f47212d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f47213e;

    /* renamed from: f  reason: collision with root package name */
    private boolean f47214f;

    /* renamed from: g  reason: collision with root package name */
    private float f47215g;

    /* renamed from: h  reason: collision with root package name */
    private float f47216h;

    /* renamed from: i  reason: collision with root package name */
    private int f47217i;

    /* renamed from: j  reason: collision with root package name */
    private GestureDetector f47218j;

    /* renamed from: q0.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class C0567a {
        public /* synthetic */ C0567a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private C0567a() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface b {
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class c extends GestureDetector.SimpleOnGestureListener {
        c() {
        }

        @Override // android.view.GestureDetector.SimpleOnGestureListener, android.view.GestureDetector.OnDoubleTapListener
        public boolean onDoubleTap(MotionEvent e10) {
            Intrinsics.checkNotNullParameter(e10, "e");
            a.this.f47215g = e10.getX();
            a.this.f47216h = e10.getY();
            a.this.f47217i = 1;
            return true;
        }
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public a(Context context, b listener) {
        this(context, 0, 0, listener, 6, null);
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(listener, "listener");
    }

    public a(Context context, int i10, int i11, b listener) {
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(listener, "listener");
        this.f47209a = context;
        this.f47210b = i10;
        this.f47211c = i11;
        this.f47212d = listener;
        this.f47213e = true;
        this.f47214f = true;
        this.f47218j = new GestureDetector(context, new c());
    }

    public /* synthetic */ a(Context context, int i10, int i11, b bVar, int i12, DefaultConstructorMarker defaultConstructorMarker) {
        this(context, (i12 & 2) != 0 ? ViewConfiguration.get(context).getScaledTouchSlop() * 2 : i10, (i12 & 4) != 0 ? 0 : i11, bVar);
    }
}
