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
    public static final C0599a f43792k = new C0599a(null);

    /* renamed from: a  reason: collision with root package name */
    private final Context f43793a;

    /* renamed from: b  reason: collision with root package name */
    private final int f43794b;

    /* renamed from: c  reason: collision with root package name */
    private final int f43795c;

    /* renamed from: d  reason: collision with root package name */
    private final b f43796d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f43797e;

    /* renamed from: f  reason: collision with root package name */
    private boolean f43798f;

    /* renamed from: g  reason: collision with root package name */
    private float f43799g;

    /* renamed from: h  reason: collision with root package name */
    private float f43800h;

    /* renamed from: i  reason: collision with root package name */
    private int f43801i;

    /* renamed from: j  reason: collision with root package name */
    private GestureDetector f43802j;

    /* renamed from: q0.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class C0599a {
        public /* synthetic */ C0599a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private C0599a() {
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
            a.this.f43799g = e10.getX();
            a.this.f43800h = e10.getY();
            a.this.f43801i = 1;
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
        this.f43793a = context;
        this.f43794b = i10;
        this.f43795c = i11;
        this.f43796d = listener;
        this.f43797e = true;
        this.f43798f = true;
        this.f43802j = new GestureDetector(context, new c());
    }

    public /* synthetic */ a(Context context, int i10, int i11, b bVar, int i12, DefaultConstructorMarker defaultConstructorMarker) {
        this(context, (i12 & 2) != 0 ? ViewConfiguration.get(context).getScaledTouchSlop() * 2 : i10, (i12 & 4) != 0 ? 0 : i11, bVar);
    }
}
