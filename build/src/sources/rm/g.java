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
    private final View f47472a;

    /* renamed from: b  reason: collision with root package name */
    private final ReactViewGroup f47473b;

    /* renamed from: c  reason: collision with root package name */
    private final ThemedReactContext f47474c;

    /* renamed from: d  reason: collision with root package name */
    private final int f47475d;

    /* renamed from: e  reason: collision with root package name */
    private EditText f47476e;

    /* renamed from: f  reason: collision with root package name */
    private nm.b f47477f;

    /* renamed from: g  reason: collision with root package name */
    private TextWatcher f47478g;

    /* renamed from: h  reason: collision with root package name */
    private Function0 f47479h;

    /* renamed from: i  reason: collision with root package name */
    private final View.OnLayoutChangeListener f47480i;

    /* renamed from: j  reason: collision with root package name */
    private final Function1 f47481j;

    /* renamed from: k  reason: collision with root package name */
    private final Function6 f47482k;

    /* renamed from: l  reason: collision with root package name */
    private final ViewTreeObserver.OnGlobalFocusChangeListener f47483l;

    public g(View view, ReactViewGroup eventPropagationView, ThemedReactContext themedReactContext) {
        Intrinsics.checkNotNullParameter(view, "view");
        Intrinsics.checkNotNullParameter(eventPropagationView, "eventPropagationView");
        this.f47472a = view;
        this.f47473b = eventPropagationView;
        this.f47474c = themedReactContext;
        this.f47475d = UIManagerHelper.getSurfaceId(view);
        this.f47477f = h.a();
        this.f47480i = new View.OnLayoutChangeListener() { // from class: rm.b
            @Override // android.view.View.OnLayoutChangeListener
            public final void onLayoutChange(View view2, int i10, int i11, int i12, int i13, int i14, int i15, int i16, int i17) {
                g.j(g.this, view2, i10, i11, i12, i13, i14, i15, i16, i17);
            }
        };
        this.f47481j = new Function1() { // from class: rm.c
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit m10;
                m10 = g.m(g.this, (String) obj);
                return m10;
            }
        };
        this.f47482k = new Function6() { // from class: rm.d
            @Override // kotlin.jvm.functions.Function6
            public final Object invoke(Object obj, Object obj2, Object obj3, Object obj4, Object obj5, Object obj6) {
                Unit k10;
                k10 = g.k(g.this, ((Integer) obj).intValue(), ((Integer) obj2).intValue(), ((Double) obj3).doubleValue(), ((Double) obj4).doubleValue(), ((Double) obj5).doubleValue(), ((Double) obj6).doubleValue());
                return k10;
            }
        };
        this.f47483l = new ViewTreeObserver.OnGlobalFocusChangeListener() { // from class: rm.e
            @Override // android.view.ViewTreeObserver.OnGlobalFocusChangeListener
            public final void onGlobalFocusChanged(View view2, View view3) {
                g.h(g.this, view2, view3);
            }
        };
    }

    private final void g(nm.b bVar) {
        if (!Intrinsics.areEqual(bVar, this.f47477f)) {
            this.f47477f = bVar;
            om.g.a(this.f47474c, this.f47473b.getId(), new nm.a(this.f47475d, this.f47473b.getId(), bVar));
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void h(g gVar, View view, View view2) {
        View view3 = null;
        if (view2 == null || view != null) {
            EditText editText = gVar.f47476e;
            if (editText != null) {
                editText.removeOnLayoutChangeListener(gVar.f47480i);
            }
            final EditText editText2 = gVar.f47476e;
            if (editText2 != null) {
                final TextWatcher textWatcher = gVar.f47478g;
                editText2.post(new Runnable() { // from class: rm.f
                    @Override // java.lang.Runnable
                    public final void run() {
                        g.i(editText2, textWatcher);
                    }
                });
            }
            Function0 function0 = gVar.f47479h;
            if (function0 != null) {
                function0.invoke();
            }
            gVar.f47476e = null;
        }
        if (view2 instanceof EditText) {
            EditText editText3 = (EditText) view2;
            gVar.f47476e = editText3;
            editText3.addOnLayoutChangeListener(gVar.f47480i);
            gVar.l();
            gVar.f47478g = om.c.d(editText3, gVar.f47481j);
            gVar.f47479h = om.c.b(editText3, gVar.f47482k);
            xm.a.f54932a.c(editText3);
            xm.c cVar = xm.c.f54935a;
            ThemedReactContext themedReactContext = gVar.f47474c;
            if (themedReactContext != null) {
                view3 = om.f.b(themedReactContext);
            }
            List g10 = cVar.g(view3);
            int indexOf = g10.indexOf(view2);
            ThemedReactContext themedReactContext2 = gVar.f47474c;
            WritableMap createMap = Arguments.createMap();
            createMap.putInt("current", indexOf);
            createMap.putInt("count", g10.size());
            Unit unit = Unit.f31987a;
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
        EditText editText = gVar.f47476e;
        if (editText == null) {
            return Unit.f31987a;
        }
        gVar.l();
        om.g.a(gVar.f47474c, gVar.f47473b.getId(), new nm.c(gVar.f47475d, gVar.f47473b.getId(), new nm.d(editText.getId(), d10, d11, d12, d13, i10, i11)));
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit m(g gVar, String text) {
        Intrinsics.checkNotNullParameter(text, "text");
        gVar.l();
        om.g.a(gVar.f47474c, gVar.f47473b.getId(), new nm.e(gVar.f47475d, gVar.f47473b.getId(), text));
        return Unit.f31987a;
    }

    public final void l() {
        EditText editText = this.f47476e;
        if (editText == null) {
            return;
        }
        int[] b10 = om.i.b(editText);
        g(new nm.b(om.d.a(editText.getX()), om.d.a(editText.getY()), om.d.a(editText.getWidth()), om.d.a(editText.getHeight()), om.d.a(b10[0]), om.d.a(b10[1]), editText.getId(), om.c.g(editText)));
    }

    public final void f() {
    }
}
