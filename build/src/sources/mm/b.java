package mm;

import android.content.DialogInterface;
import com.facebook.react.bridge.UIManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.UIManagerHelper;
import com.facebook.react.uimanager.events.EventDispatcher;
import com.facebook.react.uimanager.events.EventDispatcherListener;
import com.facebook.react.views.view.ReactViewGroup;
import gm.h;
import jm.k;
import jm.l;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b implements EventDispatcherListener {

    /* renamed from: h  reason: collision with root package name */
    public static final a f38892h = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final ReactViewGroup f38893a;

    /* renamed from: b  reason: collision with root package name */
    private final ThemedReactContext f38894b;

    /* renamed from: c  reason: collision with root package name */
    private final l f38895c;

    /* renamed from: d  reason: collision with root package name */
    private Function0 f38896d;

    /* renamed from: e  reason: collision with root package name */
    private final int f38897e;

    /* renamed from: f  reason: collision with root package name */
    private final UIManager f38898f;

    /* renamed from: g  reason: collision with root package name */
    private final EventDispatcher f38899g;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    public b(ReactViewGroup view, ThemedReactContext reactContext, l config, Function0 callback) {
        Intrinsics.checkNotNullParameter(view, "view");
        Intrinsics.checkNotNullParameter(reactContext, "reactContext");
        Intrinsics.checkNotNullParameter(config, "config");
        Intrinsics.checkNotNullParameter(callback, "callback");
        this.f38893a = view;
        this.f38894b = reactContext;
        this.f38895c = config;
        this.f38896d = callback;
        this.f38897e = 2;
        this.f38898f = UIManagerHelper.getUIManager(reactContext.getReactApplicationContext(), 2);
        this.f38899g = UIManagerHelper.getEventDispatcher(reactContext.getReactApplicationContext(), 2);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void d(k kVar, ReactViewGroup reactViewGroup, b bVar, DialogInterface dialogInterface) {
        k.q(kVar, null, null, 3, null);
        kVar.e();
        h.a(reactViewGroup);
        k kVar2 = (k) bVar.f38896d.invoke();
        if (kVar2 != null) {
            kVar2.o(false);
        }
    }

    public final void b() {
        EventDispatcher eventDispatcher = this.f38899g;
        if (eventDispatcher != null) {
            eventDispatcher.removeListener(this);
        }
    }

    public final void c() {
        EventDispatcher eventDispatcher = this.f38899g;
        if (eventDispatcher != null) {
            eventDispatcher.addListener(this);
        }
    }

    /* JADX WARN: Removed duplicated region for block: B:20:0x004d  */
    /* JADX WARN: Removed duplicated region for block: B:46:? A[RETURN, SYNTHETIC] */
    @Override // com.facebook.react.uimanager.events.EventDispatcherListener
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public void onEventDispatch(com.facebook.react.uimanager.events.Event r8) {
        /*
            r7 = this;
            java.lang.String r0 = "event"
            kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r8, r0)
            java.lang.String r0 = r8.internal_getEventNameCompat()
            java.lang.String r1 = "topShow"
            boolean r0 = kotlin.jvm.internal.Intrinsics.areEqual(r0, r1)
            if (r0 != 0) goto L13
            goto Lbd
        L13:
            r0 = 0
            com.facebook.react.bridge.UIManager r1 = r7.f38898f     // Catch: java.lang.Exception -> L21
            if (r1 == 0) goto L23
            int r2 = r8.getViewTag()     // Catch: java.lang.Exception -> L21
            android.view.View r1 = r1.resolveView(r2)     // Catch: java.lang.Exception -> L21
            goto L24
        L21:
            r1 = move-exception
            goto L2b
        L23:
            r1 = r0
        L24:
            boolean r2 = r1 instanceof com.facebook.react.views.modal.ReactModalHostView     // Catch: java.lang.Exception -> L21
            if (r2 == 0) goto L49
            com.facebook.react.views.modal.ReactModalHostView r1 = (com.facebook.react.views.modal.ReactModalHostView) r1     // Catch: java.lang.Exception -> L21
            goto L4a
        L2b:
            km.a r2 = km.a.f32427a
            java.lang.String r3 = mm.c.b()
            int r8 = r8.getViewTag()
            java.lang.StringBuilder r4 = new java.lang.StringBuilder
            r4.<init>()
            java.lang.String r5 = "Can not resolve view for Modal#"
            r4.append(r5)
            r4.append(r8)
            java.lang.String r8 = r4.toString()
            r2.e(r3, r8, r1)
        L49:
            r1 = r0
        L4a:
            if (r1 != 0) goto L4d
            goto Lbd
        L4d:
            androidx.activity.ComponentDialog r8 = r1.getDialog()
            if (r8 == 0) goto L58
            android.view.Window r1 = r8.getWindow()
            goto L59
        L58:
            r1 = r0
        L59:
            if (r1 == 0) goto L65
            android.view.View r2 = r1.getDecorView()
            if (r2 == 0) goto L65
            android.view.View r0 = r2.getRootView()
        L65:
            android.view.ViewGroup r0 = (android.view.ViewGroup) r0
            if (r0 == 0) goto Lbd
            com.facebook.react.views.view.ReactViewGroup r2 = new com.facebook.react.views.view.ReactViewGroup
            com.facebook.react.uimanager.ThemedReactContext r3 = r7.f38894b
            r2.<init>(r3)
            android.view.ViewGroup$LayoutParams r3 = new android.view.ViewGroup$LayoutParams
            r4 = 0
            r3.<init>(r4, r4)
            r2.setLayoutParams(r3)
            com.facebook.react.views.view.ReactViewGroup r3 = r7.f38893a
            com.facebook.react.uimanager.ThemedReactContext r4 = r7.f38894b
            jm.l r5 = r7.f38895c
            jm.k r6 = new jm.k
            r6.<init>(r3, r0, r4, r5)
            r0.addView(r2)
            boolean r3 = mm.c.a()
            if (r3 == 0) goto Lac
            kotlin.jvm.functions.Function0 r3 = r7.f38896d
            java.lang.Object r3 = r3.invoke()
            jm.k r3 = (jm.k) r3
            if (r3 == 0) goto L9b
            r4 = 1
            r3.o(r4)
        L9b:
            androidx.core.view.h0.L0(r0, r6)
            androidx.core.view.h0.D0(r2, r6)
            r3 = 0
            java.lang.Double r0 = java.lang.Double.valueOf(r3)
            java.lang.Boolean r3 = java.lang.Boolean.FALSE
            r6.p(r0, r3)
        Lac:
            if (r8 == 0) goto Lb6
            mm.a r0 = new mm.a
            r0.<init>()
            r8.setOnDismissListener(r0)
        Lb6:
            if (r1 == 0) goto Lbd
            r8 = 48
            r1.setSoftInputMode(r8)
        Lbd:
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: mm.b.onEventDispatch(com.facebook.react.uimanager.events.Event):void");
    }
}
