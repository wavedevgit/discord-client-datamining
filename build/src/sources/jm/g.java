package jm;

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
    private final View f31999a;

    /* renamed from: b  reason: collision with root package name */
    private final ReactViewGroup f32000b;

    /* renamed from: c  reason: collision with root package name */
    private final ThemedReactContext f32001c;

    /* renamed from: d  reason: collision with root package name */
    private final int f32002d;

    /* renamed from: e  reason: collision with root package name */
    private EditText f32003e;

    /* renamed from: f  reason: collision with root package name */
    private fm.b f32004f;

    /* renamed from: g  reason: collision with root package name */
    private TextWatcher f32005g;

    /* renamed from: h  reason: collision with root package name */
    private Function0 f32006h;

    /* renamed from: i  reason: collision with root package name */
    private final View.OnLayoutChangeListener f32007i;

    /* renamed from: j  reason: collision with root package name */
    private final Function1 f32008j;

    /* renamed from: k  reason: collision with root package name */
    private final Function6 f32009k;

    /* renamed from: l  reason: collision with root package name */
    private final ViewTreeObserver.OnGlobalFocusChangeListener f32010l;

    public g(View view, ReactViewGroup eventPropagationView, ThemedReactContext themedReactContext) {
        Intrinsics.checkNotNullParameter(view, "view");
        Intrinsics.checkNotNullParameter(eventPropagationView, "eventPropagationView");
        this.f31999a = view;
        this.f32000b = eventPropagationView;
        this.f32001c = themedReactContext;
        this.f32002d = UIManagerHelper.getSurfaceId(view);
        this.f32004f = h.a();
        this.f32007i = new View.OnLayoutChangeListener() { // from class: jm.b
            @Override // android.view.View.OnLayoutChangeListener
            public final void onLayoutChange(View view2, int i10, int i11, int i12, int i13, int i14, int i15, int i16, int i17) {
                g.j(g.this, view2, i10, i11, i12, i13, i14, i15, i16, i17);
            }
        };
        this.f32008j = new Function1() { // from class: jm.c
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit m10;
                m10 = g.m(g.this, (String) obj);
                return m10;
            }
        };
        this.f32009k = new Function6() { // from class: jm.d
            @Override // kotlin.jvm.functions.Function6
            public final Object invoke(Object obj, Object obj2, Object obj3, Object obj4, Object obj5, Object obj6) {
                Unit k10;
                k10 = g.k(g.this, ((Integer) obj).intValue(), ((Integer) obj2).intValue(), ((Double) obj3).doubleValue(), ((Double) obj4).doubleValue(), ((Double) obj5).doubleValue(), ((Double) obj6).doubleValue());
                return k10;
            }
        };
        this.f32010l = new ViewTreeObserver.OnGlobalFocusChangeListener() { // from class: jm.e
            @Override // android.view.ViewTreeObserver.OnGlobalFocusChangeListener
            public final void onGlobalFocusChanged(View view2, View view3) {
                g.h(g.this, view2, view3);
            }
        };
    }

    private final void g(fm.b bVar) {
        if (!Intrinsics.areEqual(bVar, this.f32004f)) {
            this.f32004f = bVar;
            gm.g.a(this.f32001c, this.f32000b.getId(), new fm.a(this.f32002d, this.f32000b.getId(), bVar));
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void h(g gVar, View view, View view2) {
        View view3 = null;
        if (view2 == null || view != null) {
            EditText editText = gVar.f32003e;
            if (editText != null) {
                editText.removeOnLayoutChangeListener(gVar.f32007i);
            }
            final EditText editText2 = gVar.f32003e;
            if (editText2 != null) {
                final TextWatcher textWatcher = gVar.f32005g;
                editText2.post(new Runnable() { // from class: jm.f
                    @Override // java.lang.Runnable
                    public final void run() {
                        g.i(editText2, textWatcher);
                    }
                });
            }
            Function0 function0 = gVar.f32006h;
            if (function0 != null) {
                function0.invoke();
            }
            gVar.f32003e = null;
        }
        if (view2 instanceof EditText) {
            EditText editText3 = (EditText) view2;
            gVar.f32003e = editText3;
            editText3.addOnLayoutChangeListener(gVar.f32007i);
            gVar.l();
            gVar.f32005g = gm.c.d(editText3, gVar.f32008j);
            gVar.f32006h = gm.c.b(editText3, gVar.f32009k);
            om.a.f44546a.c(editText3);
            om.c cVar = om.c.f44549a;
            ThemedReactContext themedReactContext = gVar.f32001c;
            if (themedReactContext != null) {
                view3 = gm.f.c(themedReactContext);
            }
            List g10 = cVar.g(view3);
            int indexOf = g10.indexOf(view2);
            ThemedReactContext themedReactContext2 = gVar.f32001c;
            WritableMap createMap = Arguments.createMap();
            createMap.putInt("current", indexOf);
            createMap.putInt("count", g10.size());
            Unit unit = Unit.f33074a;
            Intrinsics.checkNotNullExpressionValue(createMap, "apply(...)");
            gm.g.b(themedReactContext2, "KeyboardController::focusDidSet", createMap);
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
        EditText editText = gVar.f32003e;
        if (editText == null) {
            return Unit.f33074a;
        }
        gVar.l();
        gm.g.a(gVar.f32001c, gVar.f32000b.getId(), new fm.c(gVar.f32002d, gVar.f32000b.getId(), new fm.d(editText.getId(), d10, d11, d12, d13, i10, i11)));
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit m(g gVar, String text) {
        Intrinsics.checkNotNullParameter(text, "text");
        gVar.l();
        gm.g.a(gVar.f32001c, gVar.f32000b.getId(), new fm.e(gVar.f32002d, gVar.f32000b.getId(), text));
        return Unit.f33074a;
    }

    public final void l() {
        EditText editText = this.f32003e;
        if (editText == null) {
            return;
        }
        int[] b10 = gm.i.b(editText);
        g(new fm.b(gm.d.a(editText.getX()), gm.d.a(editText.getY()), gm.d.a(editText.getWidth()), gm.d.a(editText.getHeight()), gm.d.a(b10[0]), gm.d.a(b10[1]), editText.getId(), gm.c.g(editText)));
    }

    public final void f() {
    }
}
