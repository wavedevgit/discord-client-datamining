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
    public static final C0622a f45123k = new C0622a(null);

    /* renamed from: a  reason: collision with root package name */
    private final Context f45124a;

    /* renamed from: b  reason: collision with root package name */
    private final int f45125b;

    /* renamed from: c  reason: collision with root package name */
    private final int f45126c;

    /* renamed from: d  reason: collision with root package name */
    private final b f45127d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f45128e;

    /* renamed from: f  reason: collision with root package name */
    private boolean f45129f;

    /* renamed from: g  reason: collision with root package name */
    private float f45130g;

    /* renamed from: h  reason: collision with root package name */
    private float f45131h;

    /* renamed from: i  reason: collision with root package name */
    private int f45132i;

    /* renamed from: j  reason: collision with root package name */
    private GestureDetector f45133j;

    /* renamed from: q0.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class C0622a {
        public /* synthetic */ C0622a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private C0622a() {
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
            a.this.f45130g = e10.getX();
            a.this.f45131h = e10.getY();
            a.this.f45132i = 1;
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
        this.f45124a = context;
        this.f45125b = i10;
        this.f45126c = i11;
        this.f45127d = listener;
        this.f45128e = true;
        this.f45129f = true;
        this.f45133j = new GestureDetector(context, new c());
    }

    public /* synthetic */ a(Context context, int i10, int i11, b bVar, int i12, DefaultConstructorMarker defaultConstructorMarker) {
        this(context, (i12 & 2) != 0 ? ViewConfiguration.get(context).getScaledTouchSlop() * 2 : i10, (i12 & 4) != 0 ? 0 : i11, bVar);
    }
}
