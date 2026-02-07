package om;

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
    private final View f43286a;

    /* renamed from: b  reason: collision with root package name */
    private final ReactViewGroup f43287b;

    /* renamed from: c  reason: collision with root package name */
    private final ThemedReactContext f43288c;

    /* renamed from: d  reason: collision with root package name */
    private final int f43289d;

    /* renamed from: e  reason: collision with root package name */
    private EditText f43290e;

    /* renamed from: f  reason: collision with root package name */
    private km.b f43291f;

    /* renamed from: g  reason: collision with root package name */
    private TextWatcher f43292g;

    /* renamed from: h  reason: collision with root package name */
    private Function0 f43293h;

    /* renamed from: i  reason: collision with root package name */
    private final View.OnLayoutChangeListener f43294i;

    /* renamed from: j  reason: collision with root package name */
    private final Function1 f43295j;

    /* renamed from: k  reason: collision with root package name */
    private final Function6 f43296k;

    /* renamed from: l  reason: collision with root package name */
    private final ViewTreeObserver.OnGlobalFocusChangeListener f43297l;

    public g(View view, ReactViewGroup eventPropagationView, ThemedReactContext themedReactContext) {
        Intrinsics.checkNotNullParameter(view, "view");
        Intrinsics.checkNotNullParameter(eventPropagationView, "eventPropagationView");
        this.f43286a = view;
        this.f43287b = eventPropagationView;
        this.f43288c = themedReactContext;
        this.f43289d = UIManagerHelper.getSurfaceId(view);
        this.f43291f = h.a();
        this.f43294i = new View.OnLayoutChangeListener() { // from class: om.b
            @Override // android.view.View.OnLayoutChangeListener
            public final void onLayoutChange(View view2, int i10, int i11, int i12, int i13, int i14, int i15, int i16, int i17) {
                g.j(g.this, view2, i10, i11, i12, i13, i14, i15, i16, i17);
            }
        };
        this.f43295j = new Function1() { // from class: om.c
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit m10;
                m10 = g.m(g.this, (String) obj);
                return m10;
            }
        };
        this.f43296k = new Function6() { // from class: om.d
            @Override // kotlin.jvm.functions.Function6
            public final Object invoke(Object obj, Object obj2, Object obj3, Object obj4, Object obj5, Object obj6) {
                Unit k10;
                k10 = g.k(g.this, ((Integer) obj).intValue(), ((Integer) obj2).intValue(), ((Double) obj3).doubleValue(), ((Double) obj4).doubleValue(), ((Double) obj5).doubleValue(), ((Double) obj6).doubleValue());
                return k10;
            }
        };
        this.f43297l = new ViewTreeObserver.OnGlobalFocusChangeListener() { // from class: om.e
            @Override // android.view.ViewTreeObserver.OnGlobalFocusChangeListener
            public final void onGlobalFocusChanged(View view2, View view3) {
                g.h(g.this, view2, view3);
            }
        };
    }

    private final void g(km.b bVar) {
        if (!Intrinsics.areEqual(bVar, this.f43291f)) {
            this.f43291f = bVar;
            lm.g.a(this.f43288c, this.f43287b.getId(), new km.a(this.f43289d, this.f43287b.getId(), bVar));
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void h(g gVar, View view, View view2) {
        View view3 = null;
        if (view2 == null || view != null) {
            EditText editText = gVar.f43290e;
            if (editText != null) {
                editText.removeOnLayoutChangeListener(gVar.f43294i);
            }
            final EditText editText2 = gVar.f43290e;
            if (editText2 != null) {
                final TextWatcher textWatcher = gVar.f43292g;
                editText2.post(new Runnable() { // from class: om.f
                    @Override // java.lang.Runnable
                    public final void run() {
                        g.i(editText2, textWatcher);
                    }
                });
            }
            Function0 function0 = gVar.f43293h;
            if (function0 != null) {
                function0.invoke();
            }
            gVar.f43290e = null;
        }
        if (view2 instanceof EditText) {
            EditText editText3 = (EditText) view2;
            gVar.f43290e = editText3;
            editText3.addOnLayoutChangeListener(gVar.f43294i);
            gVar.l();
            gVar.f43292g = lm.c.d(editText3, gVar.f43295j);
            gVar.f43293h = lm.c.b(editText3, gVar.f43296k);
            um.a.f51676a.c(editText3);
            um.c cVar = um.c.f51679a;
            ThemedReactContext themedReactContext = gVar.f43288c;
            if (themedReactContext != null) {
                view3 = lm.f.b(themedReactContext);
            }
            List g10 = cVar.g(view3);
            int indexOf = g10.indexOf(view2);
            ThemedReactContext themedReactContext2 = gVar.f43288c;
            WritableMap createMap = Arguments.createMap();
            createMap.putInt("current", indexOf);
            createMap.putInt("count", g10.size());
            Unit unit = Unit.f32056a;
            Intrinsics.checkNotNullExpressionValue(createMap, "apply(...)");
            lm.g.b(themedReactContext2, "KeyboardController::focusDidSet", createMap);
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
        EditText editText = gVar.f43290e;
        if (editText == null) {
            return Unit.f32056a;
        }
        gVar.l();
        lm.g.a(gVar.f43288c, gVar.f43287b.getId(), new km.c(gVar.f43289d, gVar.f43287b.getId(), new km.d(editText.getId(), d10, d11, d12, d13, i10, i11)));
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit m(g gVar, String text) {
        Intrinsics.checkNotNullParameter(text, "text");
        gVar.l();
        lm.g.a(gVar.f43288c, gVar.f43287b.getId(), new km.e(gVar.f43289d, gVar.f43287b.getId(), text));
        return Unit.f32056a;
    }

    public final void l() {
        EditText editText = this.f43290e;
        if (editText == null) {
            return;
        }
        int[] b10 = lm.i.b(editText);
        g(new km.b(lm.d.a(editText.getX()), lm.d.a(editText.getY()), lm.d.a(editText.getWidth()), lm.d.a(editText.getHeight()), lm.d.a(b10[0]), lm.d.a(b10[1]), editText.getId(), lm.c.g(editText)));
    }

    public final void f() {
    }
}
