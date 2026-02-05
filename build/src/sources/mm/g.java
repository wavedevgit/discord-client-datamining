package mm;

import android.text.TextWatcher;
import android.view.View;
import android.view.ViewTreeObserver;
import android.widget.EditText;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.UIManagerHelper;
import com.facebook.react.views.view.ReactViewGroup;
import java.util.List;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function6;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g {

    /* renamed from: a  reason: collision with root package name */
    private final View f38757a;

    /* renamed from: b  reason: collision with root package name */
    private final ReactViewGroup f38758b;

    /* renamed from: c  reason: collision with root package name */
    private final ThemedReactContext f38759c;

    /* renamed from: d  reason: collision with root package name */
    private final int f38760d;

    /* renamed from: e  reason: collision with root package name */
    private EditText f38761e;

    /* renamed from: f  reason: collision with root package name */
    private im.b f38762f;

    /* renamed from: g  reason: collision with root package name */
    private TextWatcher f38763g;

    /* renamed from: h  reason: collision with root package name */
    private Function0 f38764h;

    /* renamed from: i  reason: collision with root package name */
    private final View.OnLayoutChangeListener f38765i;

    /* renamed from: j  reason: collision with root package name */
    private final Function1 f38766j;

    /* renamed from: k  reason: collision with root package name */
    private final Function6 f38767k;

    /* renamed from: l  reason: collision with root package name */
    private final ViewTreeObserver.OnGlobalFocusChangeListener f38768l;

    public g(View view, ReactViewGroup eventPropagationView, ThemedReactContext themedReactContext) {
        Intrinsics.checkNotNullParameter(view, "view");
        Intrinsics.checkNotNullParameter(eventPropagationView, "eventPropagationView");
        this.f38757a = view;
        this.f38758b = eventPropagationView;
        this.f38759c = themedReactContext;
        this.f38760d = UIManagerHelper.getSurfaceId(view);
        this.f38762f = h.a();
        this.f38765i = new View.OnLayoutChangeListener() { // from class: mm.b
            @Override // android.view.View.OnLayoutChangeListener
            public final void onLayoutChange(View view2, int i10, int i11, int i12, int i13, int i14, int i15, int i16, int i17) {
                g.j(g.this, view2, i10, i11, i12, i13, i14, i15, i16, i17);
            }
        };
        this.f38766j = new Function1() { // from class: mm.c
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit m10;
                m10 = g.m(g.this, (String) obj);
                return m10;
            }
        };
        this.f38767k = new Function6() { // from class: mm.d
            @Override // kotlin.jvm.functions.Function6
            public final Object invoke(Object obj, Object obj2, Object obj3, Object obj4, Object obj5, Object obj6) {
                Unit k10;
                k10 = g.k(g.this, ((Integer) obj).intValue(), ((Integer) obj2).intValue(), ((Double) obj3).doubleValue(), ((Double) obj4).doubleValue(), ((Double) obj5).doubleValue(), ((Double) obj6).doubleValue());
                return k10;
            }
        };
        this.f38768l = new ViewTreeObserver.OnGlobalFocusChangeListener() { // from class: mm.e
            @Override // android.view.ViewTreeObserver.OnGlobalFocusChangeListener
            public final void onGlobalFocusChanged(View view2, View view3) {
                g.h(g.this, view2, view3);
            }
        };
    }

    private final void g(im.b bVar) {
        if (!Intrinsics.areEqual(bVar, this.f38762f)) {
            this.f38762f = bVar;
            jm.g.a(this.f38759c, this.f38758b.getId(), new im.a(this.f38760d, this.f38758b.getId(), bVar));
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void h(g gVar, View view, View view2) {
        View view3 = null;
        if (view2 == null || view != null) {
            EditText editText = gVar.f38761e;
            if (editText != null) {
                editText.removeOnLayoutChangeListener(gVar.f38765i);
            }
            final EditText editText2 = gVar.f38761e;
            if (editText2 != null) {
                final TextWatcher textWatcher = gVar.f38763g;
                editText2.post(new Runnable() { // from class: mm.f
                    @Override // java.lang.Runnable
                    public final void run() {
                        g.i(editText2, textWatcher);
                    }
                });
            }
            Function0 function0 = gVar.f38764h;
            if (function0 != null) {
                function0.invoke();
            }
            gVar.f38761e = null;
        }
        if (view2 instanceof EditText) {
            EditText editText3 = (EditText) view2;
            gVar.f38761e = editText3;
            editText3.addOnLayoutChangeListener(gVar.f38765i);
            gVar.l();
            gVar.f38763g = jm.c.d(editText3, gVar.f38766j);
            gVar.f38764h = jm.c.b(editText3, gVar.f38767k);
            sm.a.f49782a.c(editText3);
            sm.c cVar = sm.c.f49785a;
            ThemedReactContext themedReactContext = gVar.f38759c;
            if (themedReactContext != null) {
                view3 = jm.f.b(themedReactContext);
            }
            List g10 = cVar.g(view3);
            int indexOf = g10.indexOf(view2);
            ThemedReactContext themedReactContext2 = gVar.f38759c;
            WritableMap createMap = Arguments.createMap();
            createMap.putInt("current", indexOf);
            createMap.putInt("count", g10.size());
            Unit unit = Unit.f31988a;
            Intrinsics.checkNotNullExpressionValue(createMap, "apply(...)");
            jm.g.b(themedReactContext2, "KeyboardController::focusDidSet", createMap);
        }
        if (view2 == null) {
            gVar.g(h.a());
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void i(EditText editText, TextWatcher textWatcher) {
        editText.removeTextChangedListener(textWatcher);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void j(g gVar, View view, int i10, int i11, int i12, int i13, int i14, int i15, int i16, int i17) {
        gVar.l();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit k(g gVar, int i10, int i11, double d10, double d11, double d12, double d13) {
        EditText editText = gVar.f38761e;
        if (editText == null) {
            return Unit.f31988a;
        }
        gVar.l();
        jm.g.a(gVar.f38759c, gVar.f38758b.getId(), new im.c(gVar.f38760d, gVar.f38758b.getId(), new im.d(editText.getId(), d10, d11, d12, d13, i10, i11)));
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit m(g gVar, String text) {
        Intrinsics.checkNotNullParameter(text, "text");
        gVar.l();
        jm.g.a(gVar.f38759c, gVar.f38758b.getId(), new im.e(gVar.f38760d, gVar.f38758b.getId(), text));
        return Unit.f31988a;
    }

    public final void l() {
        EditText editText = this.f38761e;
        if (editText == null) {
            return;
        }
        int[] b10 = jm.i.b(editText);
        g(new im.b(jm.d.a(editText.getX()), jm.d.a(editText.getY()), jm.d.a(editText.getWidth()), jm.d.a(editText.getHeight()), jm.d.a(b10[0]), jm.d.a(b10[1]), editText.getId(), jm.c.g(editText)));
    }

    public final void f() {
    }
}
