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
    private final View f31795a;

    /* renamed from: b  reason: collision with root package name */
    private final ReactViewGroup f31796b;

    /* renamed from: c  reason: collision with root package name */
    private final ThemedReactContext f31797c;

    /* renamed from: d  reason: collision with root package name */
    private final int f31798d;

    /* renamed from: e  reason: collision with root package name */
    private EditText f31799e;

    /* renamed from: f  reason: collision with root package name */
    private fm.b f31800f;

    /* renamed from: g  reason: collision with root package name */
    private TextWatcher f31801g;

    /* renamed from: h  reason: collision with root package name */
    private Function0 f31802h;

    /* renamed from: i  reason: collision with root package name */
    private final View.OnLayoutChangeListener f31803i;

    /* renamed from: j  reason: collision with root package name */
    private final Function1 f31804j;

    /* renamed from: k  reason: collision with root package name */
    private final Function6 f31805k;

    /* renamed from: l  reason: collision with root package name */
    private final ViewTreeObserver.OnGlobalFocusChangeListener f31806l;

    public g(View view, ReactViewGroup eventPropagationView, ThemedReactContext themedReactContext) {
        Intrinsics.checkNotNullParameter(view, "view");
        Intrinsics.checkNotNullParameter(eventPropagationView, "eventPropagationView");
        this.f31795a = view;
        this.f31796b = eventPropagationView;
        this.f31797c = themedReactContext;
        this.f31798d = UIManagerHelper.getSurfaceId(view);
        this.f31800f = h.a();
        this.f31803i = new View.OnLayoutChangeListener() { // from class: jm.b
            @Override // android.view.View.OnLayoutChangeListener
            public final void onLayoutChange(View view2, int i10, int i11, int i12, int i13, int i14, int i15, int i16, int i17) {
                g.j(g.this, view2, i10, i11, i12, i13, i14, i15, i16, i17);
            }
        };
        this.f31804j = new Function1() { // from class: jm.c
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit m10;
                m10 = g.m(g.this, (String) obj);
                return m10;
            }
        };
        this.f31805k = new Function6() { // from class: jm.d
            @Override // kotlin.jvm.functions.Function6
            public final Object invoke(Object obj, Object obj2, Object obj3, Object obj4, Object obj5, Object obj6) {
                Unit k10;
                k10 = g.k(g.this, ((Integer) obj).intValue(), ((Integer) obj2).intValue(), ((Double) obj3).doubleValue(), ((Double) obj4).doubleValue(), ((Double) obj5).doubleValue(), ((Double) obj6).doubleValue());
                return k10;
            }
        };
        this.f31806l = new ViewTreeObserver.OnGlobalFocusChangeListener() { // from class: jm.e
            @Override // android.view.ViewTreeObserver.OnGlobalFocusChangeListener
            public final void onGlobalFocusChanged(View view2, View view3) {
                g.h(g.this, view2, view3);
            }
        };
    }

    private final void g(fm.b bVar) {
        if (!Intrinsics.areEqual(bVar, this.f31800f)) {
            this.f31800f = bVar;
            gm.g.a(this.f31797c, this.f31796b.getId(), new fm.a(this.f31798d, this.f31796b.getId(), bVar));
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void h(g gVar, View view, View view2) {
        View view3 = null;
        if (view2 == null || view != null) {
            EditText editText = gVar.f31799e;
            if (editText != null) {
                editText.removeOnLayoutChangeListener(gVar.f31803i);
            }
            final EditText editText2 = gVar.f31799e;
            if (editText2 != null) {
                final TextWatcher textWatcher = gVar.f31801g;
                editText2.post(new Runnable() { // from class: jm.f
                    @Override // java.lang.Runnable
                    public final void run() {
                        g.i(editText2, textWatcher);
                    }
                });
            }
            Function0 function0 = gVar.f31802h;
            if (function0 != null) {
                function0.invoke();
            }
            gVar.f31799e = null;
        }
        if (view2 instanceof EditText) {
            EditText editText3 = (EditText) view2;
            gVar.f31799e = editText3;
            editText3.addOnLayoutChangeListener(gVar.f31803i);
            gVar.l();
            gVar.f31801g = gm.c.d(editText3, gVar.f31804j);
            gVar.f31802h = gm.c.b(editText3, gVar.f31805k);
            pm.a.f46166a.c(editText3);
            pm.c cVar = pm.c.f46169a;
            ThemedReactContext themedReactContext = gVar.f31797c;
            if (themedReactContext != null) {
                view3 = gm.f.c(themedReactContext);
            }
            List g10 = cVar.g(view3);
            int indexOf = g10.indexOf(view2);
            ThemedReactContext themedReactContext2 = gVar.f31797c;
            WritableMap createMap = Arguments.createMap();
            createMap.putInt("current", indexOf);
            createMap.putInt("count", g10.size());
            Unit unit = Unit.f32464a;
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
        EditText editText = gVar.f31799e;
        if (editText == null) {
            return Unit.f32464a;
        }
        gVar.l();
        gm.g.a(gVar.f31797c, gVar.f31796b.getId(), new fm.c(gVar.f31798d, gVar.f31796b.getId(), new fm.d(editText.getId(), d10, d11, d12, d13, i10, i11)));
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit m(g gVar, String text) {
        Intrinsics.checkNotNullParameter(text, "text");
        gVar.l();
        gm.g.a(gVar.f31797c, gVar.f31796b.getId(), new fm.e(gVar.f31798d, gVar.f31796b.getId(), text));
        return Unit.f32464a;
    }

    public final void l() {
        EditText editText = this.f31799e;
        if (editText == null) {
            return;
        }
        int[] b10 = gm.i.b(editText);
        g(new fm.b(gm.d.a(editText.getX()), gm.d.a(editText.getY()), gm.d.a(editText.getWidth()), gm.d.a(editText.getHeight()), gm.d.a(b10[0]), gm.d.a(b10[1]), editText.getId(), gm.c.g(editText)));
    }

    public final void f() {
    }
}
