package pm;

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
    private final View f44344a;

    /* renamed from: b  reason: collision with root package name */
    private final ReactViewGroup f44345b;

    /* renamed from: c  reason: collision with root package name */
    private final ThemedReactContext f44346c;

    /* renamed from: d  reason: collision with root package name */
    private final int f44347d;

    /* renamed from: e  reason: collision with root package name */
    private EditText f44348e;

    /* renamed from: f  reason: collision with root package name */
    private lm.b f44349f;

    /* renamed from: g  reason: collision with root package name */
    private TextWatcher f44350g;

    /* renamed from: h  reason: collision with root package name */
    private Function0 f44351h;

    /* renamed from: i  reason: collision with root package name */
    private final View.OnLayoutChangeListener f44352i;

    /* renamed from: j  reason: collision with root package name */
    private final Function1 f44353j;

    /* renamed from: k  reason: collision with root package name */
    private final Function6 f44354k;

    /* renamed from: l  reason: collision with root package name */
    private final ViewTreeObserver.OnGlobalFocusChangeListener f44355l;

    public g(View view, ReactViewGroup eventPropagationView, ThemedReactContext themedReactContext) {
        Intrinsics.checkNotNullParameter(view, "view");
        Intrinsics.checkNotNullParameter(eventPropagationView, "eventPropagationView");
        this.f44344a = view;
        this.f44345b = eventPropagationView;
        this.f44346c = themedReactContext;
        this.f44347d = UIManagerHelper.getSurfaceId(view);
        this.f44349f = h.a();
        this.f44352i = new View.OnLayoutChangeListener() { // from class: pm.b
            @Override // android.view.View.OnLayoutChangeListener
            public final void onLayoutChange(View view2, int i10, int i11, int i12, int i13, int i14, int i15, int i16, int i17) {
                g.j(g.this, view2, i10, i11, i12, i13, i14, i15, i16, i17);
            }
        };
        this.f44353j = new Function1() { // from class: pm.c
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit m10;
                m10 = g.m(g.this, (String) obj);
                return m10;
            }
        };
        this.f44354k = new Function6() { // from class: pm.d
            @Override // kotlin.jvm.functions.Function6
            public final Object invoke(Object obj, Object obj2, Object obj3, Object obj4, Object obj5, Object obj6) {
                Unit k10;
                k10 = g.k(g.this, ((Integer) obj).intValue(), ((Integer) obj2).intValue(), ((Double) obj3).doubleValue(), ((Double) obj4).doubleValue(), ((Double) obj5).doubleValue(), ((Double) obj6).doubleValue());
                return k10;
            }
        };
        this.f44355l = new ViewTreeObserver.OnGlobalFocusChangeListener() { // from class: pm.e
            @Override // android.view.ViewTreeObserver.OnGlobalFocusChangeListener
            public final void onGlobalFocusChanged(View view2, View view3) {
                g.h(g.this, view2, view3);
            }
        };
    }

    private final void g(lm.b bVar) {
        if (!Intrinsics.areEqual(bVar, this.f44349f)) {
            this.f44349f = bVar;
            mm.g.a(this.f44346c, this.f44345b.getId(), new lm.a(this.f44347d, this.f44345b.getId(), bVar));
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void h(g gVar, View view, View view2) {
        View view3 = null;
        if (view2 == null || view != null) {
            EditText editText = gVar.f44348e;
            if (editText != null) {
                editText.removeOnLayoutChangeListener(gVar.f44352i);
            }
            final EditText editText2 = gVar.f44348e;
            if (editText2 != null) {
                final TextWatcher textWatcher = gVar.f44350g;
                editText2.post(new Runnable() { // from class: pm.f
                    @Override // java.lang.Runnable
                    public final void run() {
                        g.i(editText2, textWatcher);
                    }
                });
            }
            Function0 function0 = gVar.f44351h;
            if (function0 != null) {
                function0.invoke();
            }
            gVar.f44348e = null;
        }
        if (view2 instanceof EditText) {
            EditText editText3 = (EditText) view2;
            gVar.f44348e = editText3;
            editText3.addOnLayoutChangeListener(gVar.f44352i);
            gVar.l();
            gVar.f44350g = mm.c.d(editText3, gVar.f44353j);
            gVar.f44351h = mm.c.b(editText3, gVar.f44354k);
            vm.a.f52536a.c(editText3);
            vm.c cVar = vm.c.f52539a;
            ThemedReactContext themedReactContext = gVar.f44346c;
            if (themedReactContext != null) {
                view3 = mm.f.b(themedReactContext);
            }
            List g10 = cVar.g(view3);
            int indexOf = g10.indexOf(view2);
            ThemedReactContext themedReactContext2 = gVar.f44346c;
            WritableMap createMap = Arguments.createMap();
            createMap.putInt("current", indexOf);
            createMap.putInt("count", g10.size());
            Unit unit = Unit.f31765a;
            Intrinsics.checkNotNullExpressionValue(createMap, "apply(...)");
            mm.g.b(themedReactContext2, "KeyboardController::focusDidSet", createMap);
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
        EditText editText = gVar.f44348e;
        if (editText == null) {
            return Unit.f31765a;
        }
        gVar.l();
        mm.g.a(gVar.f44346c, gVar.f44345b.getId(), new lm.c(gVar.f44347d, gVar.f44345b.getId(), new lm.d(editText.getId(), d10, d11, d12, d13, i10, i11)));
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit m(g gVar, String text) {
        Intrinsics.checkNotNullParameter(text, "text");
        gVar.l();
        mm.g.a(gVar.f44346c, gVar.f44345b.getId(), new lm.e(gVar.f44347d, gVar.f44345b.getId(), text));
        return Unit.f31765a;
    }

    public final void l() {
        EditText editText = this.f44348e;
        if (editText == null) {
            return;
        }
        int[] b10 = mm.i.b(editText);
        g(new lm.b(mm.d.a(editText.getX()), mm.d.a(editText.getY()), mm.d.a(editText.getWidth()), mm.d.a(editText.getHeight()), mm.d.a(b10[0]), mm.d.a(b10[1]), editText.getId(), mm.c.g(editText)));
    }

    public final void f() {
    }
}
