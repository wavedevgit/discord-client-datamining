package rm;

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
    private final View f48041a;

    /* renamed from: b  reason: collision with root package name */
    private final ReactViewGroup f48042b;

    /* renamed from: c  reason: collision with root package name */
    private final ThemedReactContext f48043c;

    /* renamed from: d  reason: collision with root package name */
    private final int f48044d;

    /* renamed from: e  reason: collision with root package name */
    private EditText f48045e;

    /* renamed from: f  reason: collision with root package name */
    private nm.b f48046f;

    /* renamed from: g  reason: collision with root package name */
    private TextWatcher f48047g;

    /* renamed from: h  reason: collision with root package name */
    private Function0 f48048h;

    /* renamed from: i  reason: collision with root package name */
    private final View.OnLayoutChangeListener f48049i;

    /* renamed from: j  reason: collision with root package name */
    private final Function1 f48050j;

    /* renamed from: k  reason: collision with root package name */
    private final Function6 f48051k;

    /* renamed from: l  reason: collision with root package name */
    private final ViewTreeObserver.OnGlobalFocusChangeListener f48052l;

    public g(View view, ReactViewGroup eventPropagationView, ThemedReactContext themedReactContext) {
        Intrinsics.checkNotNullParameter(view, "view");
        Intrinsics.checkNotNullParameter(eventPropagationView, "eventPropagationView");
        this.f48041a = view;
        this.f48042b = eventPropagationView;
        this.f48043c = themedReactContext;
        this.f48044d = UIManagerHelper.getSurfaceId(view);
        this.f48046f = h.a();
        this.f48049i = new View.OnLayoutChangeListener() { // from class: rm.b
            @Override // android.view.View.OnLayoutChangeListener
            public final void onLayoutChange(View view2, int i10, int i11, int i12, int i13, int i14, int i15, int i16, int i17) {
                g.j(g.this, view2, i10, i11, i12, i13, i14, i15, i16, i17);
            }
        };
        this.f48050j = new Function1() { // from class: rm.c
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit m10;
                m10 = g.m(g.this, (String) obj);
                return m10;
            }
        };
        this.f48051k = new Function6() { // from class: rm.d
            @Override // kotlin.jvm.functions.Function6
            public final Object invoke(Object obj, Object obj2, Object obj3, Object obj4, Object obj5, Object obj6) {
                Unit k10;
                k10 = g.k(g.this, ((Integer) obj).intValue(), ((Integer) obj2).intValue(), ((Double) obj3).doubleValue(), ((Double) obj4).doubleValue(), ((Double) obj5).doubleValue(), ((Double) obj6).doubleValue());
                return k10;
            }
        };
        this.f48052l = new ViewTreeObserver.OnGlobalFocusChangeListener() { // from class: rm.e
            @Override // android.view.ViewTreeObserver.OnGlobalFocusChangeListener
            public final void onGlobalFocusChanged(View view2, View view3) {
                g.h(g.this, view2, view3);
            }
        };
    }

    private final void g(nm.b bVar) {
        if (!Intrinsics.areEqual(bVar, this.f48046f)) {
            this.f48046f = bVar;
            om.g.a(this.f48043c, this.f48042b.getId(), new nm.a(this.f48044d, this.f48042b.getId(), bVar));
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void h(g gVar, View view, View view2) {
        View view3 = null;
        if (view2 == null || view != null) {
            EditText editText = gVar.f48045e;
            if (editText != null) {
                editText.removeOnLayoutChangeListener(gVar.f48049i);
            }
            final EditText editText2 = gVar.f48045e;
            if (editText2 != null) {
                final TextWatcher textWatcher = gVar.f48047g;
                editText2.post(new Runnable() { // from class: rm.f
                    @Override // java.lang.Runnable
                    public final void run() {
                        g.i(editText2, textWatcher);
                    }
                });
            }
            Function0 function0 = gVar.f48048h;
            if (function0 != null) {
                function0.invoke();
            }
            gVar.f48045e = null;
        }
        if (view2 instanceof EditText) {
            EditText editText3 = (EditText) view2;
            gVar.f48045e = editText3;
            editText3.addOnLayoutChangeListener(gVar.f48049i);
            gVar.l();
            gVar.f48047g = om.c.d(editText3, gVar.f48050j);
            gVar.f48048h = om.c.b(editText3, gVar.f48051k);
            xm.a.f55501a.c(editText3);
            xm.c cVar = xm.c.f55504a;
            ThemedReactContext themedReactContext = gVar.f48043c;
            if (themedReactContext != null) {
                view3 = om.f.b(themedReactContext);
            }
            List g10 = cVar.g(view3);
            int indexOf = g10.indexOf(view2);
            ThemedReactContext themedReactContext2 = gVar.f48043c;
            WritableMap createMap = Arguments.createMap();
            createMap.putInt("current", indexOf);
            createMap.putInt("count", g10.size());
            Unit unit = Unit.f32556a;
            Intrinsics.checkNotNullExpressionValue(createMap, "apply(...)");
            om.g.b(themedReactContext2, "KeyboardController::focusDidSet", createMap);
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
        EditText editText = gVar.f48045e;
        if (editText == null) {
            return Unit.f32556a;
        }
        gVar.l();
        om.g.a(gVar.f48043c, gVar.f48042b.getId(), new nm.c(gVar.f48044d, gVar.f48042b.getId(), new nm.d(editText.getId(), d10, d11, d12, d13, i10, i11)));
        return Unit.f32556a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit m(g gVar, String text) {
        Intrinsics.checkNotNullParameter(text, "text");
        gVar.l();
        om.g.a(gVar.f48043c, gVar.f48042b.getId(), new nm.e(gVar.f48044d, gVar.f48042b.getId(), text));
        return Unit.f32556a;
    }

    public final void l() {
        EditText editText = this.f48045e;
        if (editText == null) {
            return;
        }
        int[] b10 = om.i.b(editText);
        g(new nm.b(om.d.a(editText.getX()), om.d.a(editText.getY()), om.d.a(editText.getWidth()), om.d.a(editText.getHeight()), om.d.a(b10[0]), om.d.a(b10[1]), editText.getId(), om.c.g(editText)));
    }

    public final void f() {
    }
}
