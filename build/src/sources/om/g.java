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
    private final View f43238a;

    /* renamed from: b  reason: collision with root package name */
    private final ReactViewGroup f43239b;

    /* renamed from: c  reason: collision with root package name */
    private final ThemedReactContext f43240c;

    /* renamed from: d  reason: collision with root package name */
    private final int f43241d;

    /* renamed from: e  reason: collision with root package name */
    private EditText f43242e;

    /* renamed from: f  reason: collision with root package name */
    private km.b f43243f;

    /* renamed from: g  reason: collision with root package name */
    private TextWatcher f43244g;

    /* renamed from: h  reason: collision with root package name */
    private Function0 f43245h;

    /* renamed from: i  reason: collision with root package name */
    private final View.OnLayoutChangeListener f43246i;

    /* renamed from: j  reason: collision with root package name */
    private final Function1 f43247j;

    /* renamed from: k  reason: collision with root package name */
    private final Function6 f43248k;

    /* renamed from: l  reason: collision with root package name */
    private final ViewTreeObserver.OnGlobalFocusChangeListener f43249l;

    public g(View view, ReactViewGroup eventPropagationView, ThemedReactContext themedReactContext) {
        Intrinsics.checkNotNullParameter(view, "view");
        Intrinsics.checkNotNullParameter(eventPropagationView, "eventPropagationView");
        this.f43238a = view;
        this.f43239b = eventPropagationView;
        this.f43240c = themedReactContext;
        this.f43241d = UIManagerHelper.getSurfaceId(view);
        this.f43243f = h.a();
        this.f43246i = new View.OnLayoutChangeListener() { // from class: om.b
            @Override // android.view.View.OnLayoutChangeListener
            public final void onLayoutChange(View view2, int i10, int i11, int i12, int i13, int i14, int i15, int i16, int i17) {
                g.j(g.this, view2, i10, i11, i12, i13, i14, i15, i16, i17);
            }
        };
        this.f43247j = new Function1() { // from class: om.c
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit m10;
                m10 = g.m(g.this, (String) obj);
                return m10;
            }
        };
        this.f43248k = new Function6() { // from class: om.d
            @Override // kotlin.jvm.functions.Function6
            public final Object invoke(Object obj, Object obj2, Object obj3, Object obj4, Object obj5, Object obj6) {
                Unit k10;
                k10 = g.k(g.this, ((Integer) obj).intValue(), ((Integer) obj2).intValue(), ((Double) obj3).doubleValue(), ((Double) obj4).doubleValue(), ((Double) obj5).doubleValue(), ((Double) obj6).doubleValue());
                return k10;
            }
        };
        this.f43249l = new ViewTreeObserver.OnGlobalFocusChangeListener() { // from class: om.e
            @Override // android.view.ViewTreeObserver.OnGlobalFocusChangeListener
            public final void onGlobalFocusChanged(View view2, View view3) {
                g.h(g.this, view2, view3);
            }
        };
    }

    private final void g(km.b bVar) {
        if (!Intrinsics.areEqual(bVar, this.f43243f)) {
            this.f43243f = bVar;
            lm.g.a(this.f43240c, this.f43239b.getId(), new km.a(this.f43241d, this.f43239b.getId(), bVar));
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void h(g gVar, View view, View view2) {
        View view3 = null;
        if (view2 == null || view != null) {
            EditText editText = gVar.f43242e;
            if (editText != null) {
                editText.removeOnLayoutChangeListener(gVar.f43246i);
            }
            final EditText editText2 = gVar.f43242e;
            if (editText2 != null) {
                final TextWatcher textWatcher = gVar.f43244g;
                editText2.post(new Runnable() { // from class: om.f
                    @Override // java.lang.Runnable
                    public final void run() {
                        g.i(editText2, textWatcher);
                    }
                });
            }
            Function0 function0 = gVar.f43245h;
            if (function0 != null) {
                function0.invoke();
            }
            gVar.f43242e = null;
        }
        if (view2 instanceof EditText) {
            EditText editText3 = (EditText) view2;
            gVar.f43242e = editText3;
            editText3.addOnLayoutChangeListener(gVar.f43246i);
            gVar.l();
            gVar.f43244g = lm.c.d(editText3, gVar.f43247j);
            gVar.f43245h = lm.c.b(editText3, gVar.f43248k);
            um.a.f51628a.c(editText3);
            um.c cVar = um.c.f51631a;
            ThemedReactContext themedReactContext = gVar.f43240c;
            if (themedReactContext != null) {
                view3 = lm.f.b(themedReactContext);
            }
            List g10 = cVar.g(view3);
            int indexOf = g10.indexOf(view2);
            ThemedReactContext themedReactContext2 = gVar.f43240c;
            WritableMap createMap = Arguments.createMap();
            createMap.putInt("current", indexOf);
            createMap.putInt("count", g10.size());
            Unit unit = Unit.f32008a;
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
        EditText editText = gVar.f43242e;
        if (editText == null) {
            return Unit.f32008a;
        }
        gVar.l();
        lm.g.a(gVar.f43240c, gVar.f43239b.getId(), new km.c(gVar.f43241d, gVar.f43239b.getId(), new km.d(editText.getId(), d10, d11, d12, d13, i10, i11)));
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit m(g gVar, String text) {
        Intrinsics.checkNotNullParameter(text, "text");
        gVar.l();
        lm.g.a(gVar.f43240c, gVar.f43239b.getId(), new km.e(gVar.f43241d, gVar.f43239b.getId(), text));
        return Unit.f32008a;
    }

    public final void l() {
        EditText editText = this.f43242e;
        if (editText == null) {
            return;
        }
        int[] b10 = lm.i.b(editText);
        g(new km.b(lm.d.a(editText.getX()), lm.d.a(editText.getY()), lm.d.a(editText.getWidth()), lm.d.a(editText.getHeight()), lm.d.a(b10[0]), lm.d.a(b10[1]), editText.getId(), lm.c.g(editText)));
    }

    public final void f() {
    }
}
