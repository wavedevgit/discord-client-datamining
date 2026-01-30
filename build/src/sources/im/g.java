package im;

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
    private final View f28611a;

    /* renamed from: b  reason: collision with root package name */
    private final ReactViewGroup f28612b;

    /* renamed from: c  reason: collision with root package name */
    private final ThemedReactContext f28613c;

    /* renamed from: d  reason: collision with root package name */
    private final int f28614d;

    /* renamed from: e  reason: collision with root package name */
    private EditText f28615e;

    /* renamed from: f  reason: collision with root package name */
    private em.b f28616f;

    /* renamed from: g  reason: collision with root package name */
    private TextWatcher f28617g;

    /* renamed from: h  reason: collision with root package name */
    private Function0 f28618h;

    /* renamed from: i  reason: collision with root package name */
    private final View.OnLayoutChangeListener f28619i;

    /* renamed from: j  reason: collision with root package name */
    private final Function1 f28620j;

    /* renamed from: k  reason: collision with root package name */
    private final Function6 f28621k;

    /* renamed from: l  reason: collision with root package name */
    private final ViewTreeObserver.OnGlobalFocusChangeListener f28622l;

    public g(View view, ReactViewGroup eventPropagationView, ThemedReactContext themedReactContext) {
        Intrinsics.checkNotNullParameter(view, "view");
        Intrinsics.checkNotNullParameter(eventPropagationView, "eventPropagationView");
        this.f28611a = view;
        this.f28612b = eventPropagationView;
        this.f28613c = themedReactContext;
        this.f28614d = UIManagerHelper.getSurfaceId(view);
        this.f28616f = h.a();
        this.f28619i = new View.OnLayoutChangeListener() { // from class: im.b
            @Override // android.view.View.OnLayoutChangeListener
            public final void onLayoutChange(View view2, int i10, int i11, int i12, int i13, int i14, int i15, int i16, int i17) {
                g.j(g.this, view2, i10, i11, i12, i13, i14, i15, i16, i17);
            }
        };
        this.f28620j = new Function1() { // from class: im.c
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit m10;
                m10 = g.m(g.this, (String) obj);
                return m10;
            }
        };
        this.f28621k = new Function6() { // from class: im.d
            @Override // kotlin.jvm.functions.Function6
            public final Object invoke(Object obj, Object obj2, Object obj3, Object obj4, Object obj5, Object obj6) {
                Unit k10;
                k10 = g.k(g.this, ((Integer) obj).intValue(), ((Integer) obj2).intValue(), ((Double) obj3).doubleValue(), ((Double) obj4).doubleValue(), ((Double) obj5).doubleValue(), ((Double) obj6).doubleValue());
                return k10;
            }
        };
        this.f28622l = new ViewTreeObserver.OnGlobalFocusChangeListener() { // from class: im.e
            @Override // android.view.ViewTreeObserver.OnGlobalFocusChangeListener
            public final void onGlobalFocusChanged(View view2, View view3) {
                g.h(g.this, view2, view3);
            }
        };
    }

    private final void g(em.b bVar) {
        if (!Intrinsics.areEqual(bVar, this.f28616f)) {
            this.f28616f = bVar;
            fm.g.a(this.f28613c, this.f28612b.getId(), new em.a(this.f28614d, this.f28612b.getId(), bVar));
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void h(g gVar, View view, View view2) {
        View view3 = null;
        if (view2 == null || view != null) {
            EditText editText = gVar.f28615e;
            if (editText != null) {
                editText.removeOnLayoutChangeListener(gVar.f28619i);
            }
            final EditText editText2 = gVar.f28615e;
            if (editText2 != null) {
                final TextWatcher textWatcher = gVar.f28617g;
                editText2.post(new Runnable() { // from class: im.f
                    @Override // java.lang.Runnable
                    public final void run() {
                        g.i(editText2, textWatcher);
                    }
                });
            }
            Function0 function0 = gVar.f28618h;
            if (function0 != null) {
                function0.invoke();
            }
            gVar.f28615e = null;
        }
        if (view2 instanceof EditText) {
            EditText editText3 = (EditText) view2;
            gVar.f28615e = editText3;
            editText3.addOnLayoutChangeListener(gVar.f28619i);
            gVar.l();
            gVar.f28617g = fm.c.d(editText3, gVar.f28620j);
            gVar.f28618h = fm.c.b(editText3, gVar.f28621k);
            nm.a.f41992a.c(editText3);
            nm.c cVar = nm.c.f41995a;
            ThemedReactContext themedReactContext = gVar.f28613c;
            if (themedReactContext != null) {
                view3 = fm.f.b(themedReactContext);
            }
            List g10 = cVar.g(view3);
            int indexOf = g10.indexOf(view2);
            ThemedReactContext themedReactContext2 = gVar.f28613c;
            WritableMap createMap = Arguments.createMap();
            createMap.putInt("current", indexOf);
            createMap.putInt("count", g10.size());
            Unit unit = Unit.f33298a;
            Intrinsics.checkNotNullExpressionValue(createMap, "apply(...)");
            fm.g.b(themedReactContext2, "KeyboardController::focusDidSet", createMap);
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
        EditText editText = gVar.f28615e;
        if (editText == null) {
            return Unit.f33298a;
        }
        gVar.l();
        fm.g.a(gVar.f28613c, gVar.f28612b.getId(), new em.c(gVar.f28614d, gVar.f28612b.getId(), new em.d(editText.getId(), d10, d11, d12, d13, i10, i11)));
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit m(g gVar, String text) {
        Intrinsics.checkNotNullParameter(text, "text");
        gVar.l();
        fm.g.a(gVar.f28613c, gVar.f28612b.getId(), new em.e(gVar.f28614d, gVar.f28612b.getId(), text));
        return Unit.f33298a;
    }

    public final void l() {
        EditText editText = this.f28615e;
        if (editText == null) {
            return;
        }
        int[] b10 = fm.i.b(editText);
        g(new em.b(fm.d.a(editText.getX()), fm.d.a(editText.getY()), fm.d.a(editText.getWidth()), fm.d.a(editText.getHeight()), fm.d.a(b10[0]), fm.d.a(b10[1]), editText.getId(), fm.c.g(editText)));
    }

    public final void f() {
    }
}
