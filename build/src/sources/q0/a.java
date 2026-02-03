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
    public static final C0572a f47058k = new C0572a(null);

    /* renamed from: a  reason: collision with root package name */
    private final Context f47059a;

    /* renamed from: b  reason: collision with root package name */
    private final int f47060b;

    /* renamed from: c  reason: collision with root package name */
    private final int f47061c;

    /* renamed from: d  reason: collision with root package name */
    private final b f47062d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f47063e;

    /* renamed from: f  reason: collision with root package name */
    private boolean f47064f;

    /* renamed from: g  reason: collision with root package name */
    private float f47065g;

    /* renamed from: h  reason: collision with root package name */
    private float f47066h;

    /* renamed from: i  reason: collision with root package name */
    private int f47067i;

    /* renamed from: j  reason: collision with root package name */
    private GestureDetector f47068j;

    /* renamed from: q0.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class C0572a {
        public /* synthetic */ C0572a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private C0572a() {
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
            a.this.f47065g = e10.getX();
            a.this.f47066h = e10.getY();
            a.this.f47067i = 1;
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
        this.f47059a = context;
        this.f47060b = i10;
        this.f47061c = i11;
        this.f47062d = listener;
        this.f47063e = true;
        this.f47064f = true;
        this.f47068j = new GestureDetector(context, new c());
    }

    public /* synthetic */ a(Context context, int i10, int i11, b bVar, int i12, DefaultConstructorMarker defaultConstructorMarker) {
        this(context, (i12 & 2) != 0 ? ViewConfiguration.get(context).getScaledTouchSlop() * 2 : i10, (i12 & 4) != 0 ? 0 : i11, bVar);
    }
}
